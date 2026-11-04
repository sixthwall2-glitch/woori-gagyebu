// 가계부에 새 내역이 등록되면, 등록한 사람을 뺀 나머지 가족에게 알림을 보낸다.
import functions from "firebase-functions/v1";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { getMessaging } from "firebase-admin/messaging";

initializeApp();
const db = getFirestore();

const DAILY_DEFAULT = 100000;
const BUDGET_FIRST_DAY = "2026-11-03";      // 앱과 같은 시작일
const APP_URL = "https://sixthwall2-glitch.github.io/woori-gagyebu/";
const DEFAULT_LABELS = { head: "가장", wife: "공쥬님💜", us: "우리", baby: "아기", son: "아들", daughter: "딸", "inlaw-w": "처가댁", "inlaw-h": "시댁", etc: "기타" };

const fmt = v => Math.round(v).toLocaleString("ko-KR");
const n = s => Math.round(Date.parse(s + "T00:00:00Z") / 864e5);
const kstToday = () => new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);

// 그날 남은 돈 = (그 달 시작일~그날 일수 × 하루 예산) − 같은 기간 지출. 앱 달력의 이월 계산과 같은 값.
async function leftOn(date, daily) {
  const start = [date.slice(0, 8) + "01", BUDGET_FIRST_DAY].sort().at(-1);
  if (date < start) return null;
  const snap = await db.collection("entries").where("date", ">=", start).where("date", "<=", date).get();
  const spent = snap.docs.map(d => d.data()).filter(e => e.type === "out" && typeof e.amount === "number").reduce((a, e) => a + e.amount, 0);
  return (n(date) - n(start) + 1) * daily - spent;
}

export const notifyNewEntry = functions.region("asia-northeast3").firestore
  .document("entries/{id}")
  .onCreate(async snap => {
    const e = snap.data();
    if (!e || typeof e.amount !== "number") return;

    const settings = (await db.doc("meta/settings").get()).data() || {};
    const daily = settings.daily == null ? DAILY_DEFAULT : Number(settings.daily) || DAILY_DEFAULT;
    const member = (settings.members || []).find(m => m.id === e.who);
    const who = member?.label || DEFAULT_LABELS[e.who] || "가족";

    const isOut = e.type === "out";
    const title = `${who} · ${isOut ? "지출" : "입금"} ${fmt(e.amount)}원`;
    let body = e.memo ? `${e.memo} (${e.category})` : e.category;
    if (isOut) {
      const left = await leftOn(e.date, daily);
      if (left !== null) {
        const day = e.date === kstToday() ? "오늘" : `${+e.date.slice(5, 7)}/${+e.date.slice(8)}`;
        body += `\n${day} 남은 돈 ${left < 0 ? "-" : ""}${fmt(Math.abs(left))}원`;
      }
    }

    // 받을 사람: 등록한 사람(by)을 뺀 모든 기기
    const targets = [];
    for (const d of (await db.collection("push").get()).docs) {
      if (e.by && d.id === e.by) continue;
      for (const [key, t] of Object.entries(d.data().tokens || {})) targets.push({ uid: d.id, key, token: t.token });
    }
    if (!targets.length) return;

    const res = await getMessaging().sendEach(targets.map(t => ({
      token: t.token,
      notification: { title, body },
      android: { priority: "high", notification: { channelId: "entries", tag: snap.id } },
      webpush: { headers: { Urgency: "high" }, notification: { icon: APP_URL + "icons/icon-192.png", tag: snap.id }, fcmOptions: { link: APP_URL } },
      data: { entryId: snap.id, date: e.date || "" },
    })));

    // 만료된 기기 토큰은 지운다
    const stale = res.responses.map((r, i) => (!r.success && /not-registered|invalid-registration|invalid-argument/.test(r.error?.code || "")) ? targets[i] : null).filter(Boolean);
    await Promise.all(stale.map(t => db.doc("push/" + t.uid).update({ ["tokens." + t.key]: FieldValue.delete() })));
    functions.logger.info(`알림 ${res.successCount}건 성공, ${res.failureCount}건 실패`, { entry: snap.id });
  });
