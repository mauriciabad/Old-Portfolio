var cacheName = 'baseConverterPWA-v2';
var filesToCache = [
  '/converter/',
  '/converter/index.html',
  '/converter/icon144.png',
  '/converter/icon152.png',
  '/converter/warning.svg'
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
