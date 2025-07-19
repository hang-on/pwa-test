self.addEventListener('install', (e) => {
    console.log('🔧 Installing Service Worker...');
    e.waitUntil(
      caches.open('pwa-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/manifest.json'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  