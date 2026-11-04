// 상대방이 내역을 등록하면 받을 알림: 이 기기를 Firestore push/{uid}에 등록한다.
import { Capacitor } from "@capacitor/core";
import { PushNotifications } from "@capacitor/push-notifications";
import { getMessaging, getToken, isSupported } from "firebase/messaging";
import { doc, setDoc } from "firebase/firestore";
import { VAPID_KEY } from "./firebase-config.js";

const $ = id => document.getElementById(id);
const native = Capacitor.isNativePlatform();
let ctx = null;   // { app, fs, uid }

function state(t, btn) { $("pushState").textContent = t; $("pushBtn").textContent = btn || "알림 받기"; }

async function save(token, platform) {
  const key = "t" + token.replace(/[^A-Za-z0-9]/g, "").slice(-24);
  await setDoc(doc(ctx.fs, "push", ctx.uid), { tokens: { [key]: { token, platform, at: Date.now() } } }, { merge: true });
}

async function nativeRegister(ask) {
  let p = await PushNotifications.checkPermissions();
  if (p.receive !== "granted" && ask) p = await PushNotifications.requestPermissions();
  if (p.receive !== "granted") { state(p.receive === "denied" ? "알림이 차단됨 · 폰 설정 > 앱 > 우리집 가계부 > 알림에서 허용" : "이 기기 알림 꺼짐"); return; }
  await PushNotifications.createChannel({ id: "entries", name: "가계부 등록 알림", description: "가족이 내역을 등록하면 알려 줍니다", importance: 4 }).catch(() => {});
  await PushNotifications.register();
}

async function webRegister(ask) {
  if (!("Notification" in window) || !(await isSupported().catch(() => false)) || !VAPID_KEY) {
    const ios = /iPhone|iPad/.test(navigator.userAgent), standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
    state(ios && !standalone ? "홈 화면 아이콘으로 연 앱에서만 알림을 켤 수 있습니다" : "이 기기에서는 알림을 지원하지 않습니다");
    $("pushBtn").hidden = true; return;
  }
  let perm = Notification.permission;
  if (perm === "default" && ask) perm = await Notification.requestPermission();
  if (perm !== "granted") { state(perm === "denied" ? "알림이 차단됨 · 아이폰 설정 > 알림 > 가계부에서 허용" : "이 기기 알림 꺼짐"); return; }
  const reg = await navigator.serviceWorker.ready;
  const token = await getToken(getMessaging(ctx.app), { vapidKey: VAPID_KEY, serviceWorkerRegistration: reg });
  await save(token, "web");
  state("이 기기 알림 켜짐 ✓", "다시 등록");
}

async function run(ask) {
  try { native ? await nativeRegister(ask) : await webRegister(ask); }
  catch (e) { state("알림을 켜지 못했습니다 (" + (e.code || e.message || e) + ")"); }
}

if (native) {
  PushNotifications.addListener("registration", async t => {
    try { await save(t.value, "android"); state("이 기기 알림 켜짐 ✓", "다시 등록"); }
    catch (e) { state("알림 등록을 저장하지 못했습니다"); }
  });
  PushNotifications.addListener("registrationError", e => state("알림 등록 실패 (" + (e.error || "") + ")"));
}

export function setupPush(app, fs, uid) {
  ctx = { app, fs, uid };
  $("pushRow").hidden = false;
  $("pushBtn").onclick = () => run(true);
  run(false);   // 이미 허용된 기기는 조용히 토큰을 갱신
}
