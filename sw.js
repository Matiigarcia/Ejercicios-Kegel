// sw.js — Service Worker KegeFit Pro

const CACHE_NAME = 'kegfit-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/main.css',
  './css/animations.css',
  './js/exercises.js',
  './js/tutorials.js',
  './js/program.js',
  './js/storage.js',
  './js/audio.js',
  './js/timer.js',
  './js/app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// Instalar y cachear assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS.filter(url => {
        // Skip assets that might not exist yet (icons)
        return !url.includes('.png') || true;
      })).catch(e => console.log('Cache error:', e));
    })
  );
  self.skipWaiting();
});

// Activar y limpiar caches viejos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch — Cache First strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        // Fallback a index.html para navegación
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
