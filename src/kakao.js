import { initializeApp } from "firebase/app";
import { initializeAuth, indexedDBLocalPersistence, browserLocalPersistence, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config.js";
import { KAKAO_REST_KEY, KAKAO_REDIRECT, APP_URL } from "./kakao-config.js";

const $ = id => document.getElementById(id);
const msg = (t, ok) => { $("msg").textContent = t; $("msg").classList.toggle("ok", !!ok); };
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: [indexedDBLocalPersistence, browserLocalPersistence] });
const fs = getFirestore(app);
const params = new URLSearchParams(location.search);
const code = params.get("code");

if (!KAKAO_REST_KEY) { msg("카카오 앱 키가 아직 설정되지 않았습니다."); }

$("loginForm").addEventListener("submit", async e => {
  e.preventDefault(); $("loginBtn").disabled = true; msg("");
  try { await signInWithEmailAndPassword(auth, $("email").value.trim(), $("pw").value); }
  catch { msg("이메일 또는 비밀번호가 맞지 않습니다."); }
  finally { $("loginBtn").disabled = false; }
});

$("connectBtn").onclick = () => {
  const u = new URL("https://kauth.kakao.com/oauth/authorize");
  u.searchParams.set("client_id", KAKAO_REST_KEY);
  u.searchParams.set("redirect_uri", KAKAO_REDIRECT);
  u.searchParams.set("response_type", "code");
  u.searchParams.set("scope", "talk_message");
  u.searchParams.set("state", auth.currentUser.uid);
  location.href = u.toString();
};

async function exchange(user) {
  msg("카카오톡 연결 중…", true);
  history.replaceState(null, "", location.pathname);
  const body = new URLSearchParams({ grant_type: "authorization_code", client_id: KAKAO_REST_KEY, redirect_uri: KAKAO_REDIRECT, code });
  const r = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }, body });
  const t = await r.json();
  if (!r.ok || !t.access_token) throw new Error(t.error_description || t.error || "토큰 발급 실패");
  if (!(t.scope || "").includes("talk_message")) throw new Error("카카오톡 메시지 전송에 동의하지 않았습니다. 다시 연결하면서 동의해 주세요.");
  const now = Date.now();
  await setDoc(doc(fs, "kakao", user.uid), {
    email: user.email, access_token: t.access_token, refresh_token: t.refresh_token,
    access_expires_at: now + t.expires_in * 1000, refresh_expires_at: now + (t.refresh_token_expires_in || 0) * 1000,
    connected_at: serverTimestamp(), last_error: null
  });
  // 연결 확인용 메시지
  const tpl = { object_type: "text", text: "[가계부] 카카오톡 연결 완료\n매주 월요일, 매월 1일 오전 8시에 리포트가 이 채팅방으로 옵니다.",
    link: { web_url: APP_URL, mobile_web_url: APP_URL }, button_title: "가계부 열기" };
  const s = await fetch("https://kapi.kakao.com/v2/api/talk/memo/default/send", {
    method: "POST", headers: { Authorization: "Bearer " + t.access_token, "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
    body: new URLSearchParams({ template_object: JSON.stringify(tpl) }) });
  msg(s.ok ? "연결했습니다. 카카오톡 '나와의 채팅'에 확인 메시지를 보냈습니다." : "연결은 됐지만 확인 메시지를 보내지 못했습니다. (" + s.status + ")", s.ok);
}

onAuthStateChanged(auth, async user => {
  $("stLogin").hidden = !!user; $("stConnect").hidden = !user;
  if (!user) return;
  $("who").textContent = user.email;
  try {
    const d = await getDoc(doc(fs, "kakao", user.uid));
    $("state").textContent = d.exists() ? "카카오톡 연결됨 · 다시 연결하려면 아래 버튼" : "아직 연결되지 않았습니다";
  } catch { $("state").textContent = "연결 상태를 확인하지 못했습니다"; }
  if (code) {
    if (params.get("state") && params.get("state") !== user.uid) { msg("다른 계정으로 시작한 연결입니다. 다시 시도해 주세요."); return; }
    try { await exchange(user); $("state").textContent = "카카오톡 연결됨"; }
    catch (e) { msg("연결하지 못했습니다: " + e.message); }
  } else if (params.get("error")) {
    msg("카카오 동의가 취소되었습니다. 다시 시도해 주세요.");
  }
});
