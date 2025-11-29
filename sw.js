
// sw.js – service worker הכי פשוט שאפשר
self.addEventListener('install', event => {
  // מתקין מייד
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // מתחיל לעבוד מייד על כל הטאבים
  event.waitUntil(self.clients.claim());
});

// נדרש שיהיה מאזין ל-fetch כדי שייחשב כ-PWA
self.addEventListener('fetch', event => {
  // לא עושים פה כלום מיוחד – פשוט נותנים לדפדפן להמשיך כרגיל
});
