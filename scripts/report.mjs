// 매일 오전 8시(KST)에 실행: 월요일이면 주간 리포트, 1일이면 지난달 마감 리포트를 카카오톡 "나와의 채팅"으로 보낸다.
// 실행: FIREBASE_SERVICE_ACCOUNT='{json}' node scripts/report.mjs [--date=YYYY-MM-DD] [--dry]
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { KAKAO_REST_KEY, APP_URL } from "../src/kakao-config.js";

const DAILY = 100000;                 // 하루 예산 (앱 설정값이 있으면 그것을 씀)
const BUDGET_FIRST_DAY = "2026-11-03"; // 앱과 같은 시작일
const WD = ["일", "월", "화", "수", "목", "금", "토"];

const arg = k => (process.argv.find(a => a.startsWith("--" + k + "=")) || "").split("=")[1];
const DRY = process.argv.includes("--dry");
const kstToday = () => new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
const today = arg("date") || kstToday();

const n = s => Math.round(Date.parse(s + "T00:00:00Z") / 864e5);
const d = x => new Date(x * 864e5).toISOString().slice(0, 10);
const dow = s => new Date(s + "T00:00:00Z").getUTCDay();
const monthStart = s => s.slice(0, 8) + "01";
const label = s => `${+s.slice(5, 7)}/${+s.slice(8)}(${WD[dow(s)]})`;
const fmt = v => Math.round(v).toLocaleString("ko-KR");
const won = v => (v < 0 ? "-" : "") + fmt(Math.abs(v)) + "원";
const max = (...a) => a.sort().at(-1);

const db = (initializeApp({ credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)) }), getFirestore());

async function spentBetween(from, to) {          // from~to(포함) 지출 합계
  const snap = await db.collection("entries").where("date", ">=", from).where("date", "<=", to).get();
  return snap.docs.map(x => x.data()).filter(e => e.type === "out" && typeof e.amount === "number").reduce((a, e) => a + e.amount, 0);
}

async function build(daily) {
  const out = [];
  // 주간: 월요일에 지난주 월~일. 일요일이 속한 달 1일 이전과 예산 시작일 이전은 뺀다.
  if (dow(today) === 1) {
    const end = d(n(today) - 1), start = max(d(n(today) - 7), monthStart(end), BUDGET_FIRST_DAY);
    if (start <= end) {
      const days = n(end) - n(start) + 1, budget = days * daily, spent = await spentBetween(start, end);
      const mFrom = max(monthStart(end), BUDGET_FIRST_DAY);
      const cum = (n(end) - n(mFrom) + 1) * daily - await spentBetween(mFrom, end);
      const left = budget - spent;
      out.push(["[가계부] 주간 리포트", start === end ? label(start) : `${label(start)}~${label(end)}`, "",
        `예산 ${fmt(budget)}원${days !== 7 ? ` (${days}일)` : ""}`, `사용 ${fmt(spent)}원`,
        left >= 0 ? `아낀 돈 ${fmt(left)}원 👍` : `초과 ${fmt(-left)}원 ⚠️`, "",
        `${+end.slice(5, 7)}월 누적 남은 돈 ${won(cum)}`].join("\n"));
    }
  }
  // 월 마감: 1일에 지난달 전체
  if (today.slice(8) === "01") {
    const end = d(n(today) - 1), start = max(monthStart(end), BUDGET_FIRST_DAY);
    if (start <= end) {
      const days = n(end) - n(start) + 1, budget = days * daily, spent = await spentBetween(start, end), left = budget - spent;
      out.push([`[가계부] ${+end.slice(5, 7)}월 마감 리포트`, `${label(start)}~${label(end)}`, "",
        `예산 ${fmt(budget)}원 (${days}일)`, `사용 ${fmt(spent)}원`,
        left >= 0 ? `아낀 돈 ${fmt(left)}원 🎉` : `초과 ${fmt(-left)}원 ⚠️`, "",
        `${+today.slice(5, 7)}월 예산은 오늘부터 새로 시작합니다.`].join("\n"));
    }
  }
  return out;
}

async function token(ref, t) {                    // 매번 새 접근 토큰을 받고, 새 리프레시 토큰이 오면 저장
  const r = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
    body: new URLSearchParams({ grant_type: "refresh_token", client_id: KAKAO_REST_KEY, refresh_token: t.refresh_token }) });
  const j = await r.json();
  if (!r.ok || !j.access_token) throw new Error("토큰 갱신 실패: " + (j.error_description || j.error || r.status));
  const now = Date.now(), upd = { access_token: j.access_token, access_expires_at: now + j.expires_in * 1000 };
  if (j.refresh_token) Object.assign(upd, { refresh_token: j.refresh_token, refresh_expires_at: now + j.refresh_token_expires_in * 1000 });
  await ref.update(upd);
  return j.access_token;
}

async function send(access, text) {
  const tpl = { object_type: "text", text, link: { web_url: APP_URL, mobile_web_url: APP_URL }, button_title: "가계부 열기" };
  const r = await fetch("https://kapi.kakao.com/v2/api/talk/memo/default/send", {
    method: "POST", headers: { Authorization: "Bearer " + access, "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
    body: new URLSearchParams({ template_object: JSON.stringify(tpl) }) });
  if (!r.ok) throw new Error("발송 실패: " + r.status + " " + await r.text());
}

const settings = (await db.doc("meta/settings").get()).data() || {};
const daily = settings.daily == null ? DAILY : Number(settings.daily) || DAILY;
const msgs = await build(daily);
console.log(`기준일 ${today} · 보낼 메시지 ${msgs.length}개`);
msgs.forEach(m => console.log("----\n" + m + "\n(" + [...m].length + "자)"));
if (!msgs.length || DRY) process.exit(0);

let failed = 0;
for (const doc of (await db.collection("kakao").get()).docs) {
  const t = doc.data();
  try {
    const access = await token(doc.ref, t);
    for (const m of msgs) await send(access, m);
    await doc.ref.update({ last_sent: today, last_error: null });
    console.log("발송 완료:", t.email);
  } catch (e) {
    failed++; console.error("발송 실패:", t.email, e.message);
    await doc.ref.update({ last_error: e.message.slice(0, 300) });
  }
}
process.exit(failed ? 1 : 0);
