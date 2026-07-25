/**
 * MBTI Service Worker
 * - 缓存静态资源
 * - 让 LAN 请求走纯 network,不拦截(避免任何兼容性问题)
 */

const SW_VERSION = 'mbti-1.0';
const CACHE_NAME = 'mbti-cache-' + SW_VERSION;

const STATIC_ASSETS = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 局域网/本地 host: 不拦截,让浏览器直接处理(CORS / PNA 由浏览器负责)
  if (
    url.hostname === 'localhost' ||
    /^192\.168\./.test(url.hostname) ||
    /^10\./.test(url.hostname) ||
    /^172\.(1[6-9]|2[0-9]|3[01])\./.test(url.hostname)
  ) {
    return;
  }

  // 导航请求: network-first, fallback 缓存
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 其他静态: cache-first
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).catch(() => cached))
  );
});
