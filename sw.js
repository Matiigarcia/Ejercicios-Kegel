// sw.js — Service Worker KegeFit Pro

const CACHE_NAME = 'kegfit-v4';
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
  './gifs/all_fours_stretch.gif',
  './gifs/bridge_elevated.gif',
  './gifs/bridge_unilateral.gif',
  './gifs/butterfly.gif',
  './gifs/childs_pose.gif',
  './gifs/cossack_wide_squat.gif',
  './gifs/crab_twist.gif',
  './gifs/donkey_kick.gif',
  './gifs/figure_four.gif',
  './gifs/glute_bridge.gif',
  './gifs/goddess_squat.gif',
  './gifs/happy_baby.gif',
  './gifs/hug_knees_to_chest.gif',
  './gifs/hypopressive.gif',
  './gifs/kneeling_hip_flexor.gif',
  './gifs/kneeling_quad_flexor.gif',
  './gifs/lying_glute.gif',
  './gifs/pelvic_squat.gif',
  './gifs/piriformis_stretch.gif',
  './gifs/psoas_release.gif',
  './gifs/reclined_butterfly.gif',
  './gifs/reverse_tabletop.gif',
  './gifs/rocking_frog_stretch.gif',
  './gifs/sumo_squat.gif'
];

// Instalar y cachear assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(e => console.log('Cache error:', e));
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

// Fetch — Cache First strategy con ignoreSearch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
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
        // Solo retornar index.html si es una navegación de página principal
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html', { ignoreSearch: true });
        }
        return caches.match(event.request, { ignoreSearch: true });
      });
    })
  );
});
