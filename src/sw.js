// 앱 화면 파일만 저장해 두고(오프라인 실행용), 데이터는 Firebase가 따로 처리합니다.
const CACHE = "gagyebu-__BUILD__";
const SHELL = ["./", "index.html", "app.js", "manifest.webmanifest", "icons/icon-192.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  // 새 버전을 먼저 받아 보고, 안 되면(오프라인) 저장본을 씁니다.
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});

// 가족 등록 알림 (Firebase 클라우드 메시징이 보낸 웹 푸시)
self.addEventListener("push", e => {
  let p = {}; try { p = e.data ? e.data.json() : {}; } catch { p = { notification: { title: "가계부", body: e.data && e.data.text() } }; }
  const n = p.notification || {};
  const link = (p.fcmOptions && p.fcmOptions.link) || n.click_action || self.registration.scope;
  e.waitUntil(self.registration.showNotification(n.title || "가계부", { body: n.body || "", icon: n.icon || "icons/icon-192.png", tag: n.tag, data: { link } }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const link = (e.notification.data && e.notification.data.link) || self.registration.scope;
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(ws => {
    const w = ws.find(c => c.url.startsWith(self.registration.scope));
    return w ? w.focus() : clients.openWindow(link);
  }));
});
