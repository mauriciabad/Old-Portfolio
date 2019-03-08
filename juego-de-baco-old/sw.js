var cacheName = 'baco-v0.2.4';
var filesToCache = [
  '.',
  'https://fonts.googleapis.com/css?family=Quicksand:300,400,700',
  'manifest.json',
  'modes/abebersehadicho.txt',
  'modes/bodytwister.txt',
  'modes/entrelaespadaylapared.txt',
  'modes/lamoneda.txt',
  'modes/perdiendolaropa.txt',
  'modes/quienes.txt',
  'modes/yonunca.txt',
  'index.html',
  'house.svg',
  'manifest.json',
  'sw.js',
  'nouislider.min.js',
  'jquery-3.2.1.min.js',
  'nouislider.min.css',
  'ripple.min.css',
  'animate.min.css',
  'android-chrome-96x96.png',
  'android-chrome-144x144.png',
  'android-chrome-192x192.png',
  'android-chrome-256x256.png',
  'android-chrome-512x512.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Activating new service worker...');

  var cacheWhitelist = [cacheName];

  event.waitUntil(
    caches.keys().then(function(oldCacheNames) {
      return Promise.all(
        oldCacheNames.map(function(oldCacheNames) {
          if (cacheWhitelist.indexOf(oldCacheNames) === -1) {
            return caches.delete(oldCacheNames);
          }
        })
      );
    })
  );
});
