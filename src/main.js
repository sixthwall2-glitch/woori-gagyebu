import { initializeApp } from "firebase/app";
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
  collection, doc, query, where, orderBy, limit, onSnapshot, getDocs, setDoc, deleteDoc
} from "firebase/firestore";
import {
  initializeAuth, indexedDBLocalPersistence, browserLocalPersistence,
  onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "firebase/auth";
import { Capacitor } from "@capacitor/core";
import { firebaseConfig } from "./firebase-config.js";
import { startSession, endSession, toast, show, $ } from "./ledger.js";

const configured = !!(firebaseConfig.apiKey && firebaseConfig.projectId);

/* Firestore를 기존 화면 코드가 쓰던 형태(collection().where().onSnapshot ...)로 감싼다 */
function adapter(fs) {
  const wrapDoc = d => ({ id: d.id, exists: d.exists(), data: () => d.data() });
  const wrapQS = s => ({ docs: s.docs.map(wrapDoc), size: s.size, empty: s.empty });
  // 오프라인에서도 화면이 멈추지 않도록, 쓰기는 로컬 반영 직후 돌려준다. 서버 거절은 토스트로 알린다.
  const settle = p => {
    p.catch(e => { if (e && e.code === "permission-denied") toast("권한이 없어 저장되지 않았습니다."); });
    return Promise.race([p, new Promise(r => setTimeout(r, 700))]);
  };
  const docRef = ref => ({
    id: ref.id,
    set: data => settle(setDoc(ref, data)),
    delete: () => settle(deleteDoc(ref)),
    onSnapshot: (next, err) => onSnapshot(ref, d => next(wrapDoc(d)), err),
  });
  class Q {
    constructor(path, cons = []) { this.path = path; this.cons = cons; }
    where(f, op, v) { return new Q(this.path, [...this.cons, where(f, op, v)]); }
    orderBy(f, d) { return new Q(this.path, [...this.cons, orderBy(f, d)]); }
    limit(n) { return new Q(this.path, [...this.cons, limit(n)]); }
    q() { return query(collection(fs, this.path), ...this.cons); }
    get() { return getDocs(this.q()).then(wrapQS); }
    onSnapshot(next, err) { return onSnapshot(this.q(), s => next(wrapQS(s)), err); }
    doc(id) { return docRef(id ? doc(fs, this.path, id) : doc(collection(fs, this.path))); }
  }
  return { collection: p => new Q(p), doc: p => docRef(doc(fs, p)) };
}

function loginMsg(t) { $("loginMsg").textContent = t; }

if (!configured) {
  $("boot").hidden = true;
  show("sLogin");
  loginMsg("Firebase 설정값이 아직 들어가지 않았습니다. src/firebase-config.js를 채운 뒤 다시 빌드하세요.");
  $("loginBtn").disabled = true;
} else {
  const app = initializeApp(firebaseConfig);
  const fs = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) });
  const auth = initializeAuth(app, { persistence: [indexedDBLocalPersistence, browserLocalPersistence] });
  const db = adapter(fs);

  onAuthStateChanged(auth, user => {
    $("boot").hidden = true;
    if (user) { $("whoami").textContent = user.email || ""; startSession(db); }
    else endSession();
  });

  $("loginForm").addEventListener("submit", async ev => {
    ev.preventDefault();
    const email = $("loginEmail").value.trim(), pw = $("loginPw").value;
    if (!email || !pw) { loginMsg("이메일과 비밀번호를 입력하세요."); return; }
    $("loginBtn").disabled = true; loginMsg("");
    try { await signInWithEmailAndPassword(auth, email, pw); $("loginPw").value = ""; }
    catch (e) {
      const c = e && e.code || "";
      loginMsg(c.includes("invalid") || c.includes("wrong-password") || c.includes("user-not-found")
        ? "이메일 또는 비밀번호가 맞지 않습니다."
        : c.includes("too-many-requests") ? "시도가 너무 많습니다. 잠시 후 다시 시도하세요."
        : c.includes("network") ? "인터넷 연결을 확인하세요." : "로그인하지 못했습니다. (" + c + ")");
    } finally { $("loginBtn").disabled = false; }
  });

  let confirmOut = false;
  $("logoutBtn").onclick = () => {
    if (!confirmOut) { confirmOut = true; $("logoutBtn").textContent = "한 번 더 누르면 로그아웃"; 
      setTimeout(() => { confirmOut = false; $("logoutBtn").textContent = "로그아웃"; }, 4000); return; }
    signOut(auth);
  };
}

if (!Capacitor.isNativePlatform() && "serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

/* 안드로이드 뒤로가기: 입력 단계는 한 단계씩, 홈에서는 앱 종료 */
import { App } from "@capacitor/app";
if (Capacitor.isNativePlatform()) {
  App.addListener("backButton", () => {
    const cur = ["sCat", "sWho", "sList", "sStats"].find(id => !$(id).hidden);
    if (!$("picker").hidden) { $("picker").hidden = true; return; }
    if (cur === "sCat") { $("catBack").click(); return; }
    if (cur) { show("sHome"); return; }
    App.exitApp();
  });
}
