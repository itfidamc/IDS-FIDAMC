// Service Worker mínimo, necesario únicamente para que Chrome considere
// esta página instalable como PWA en modo "standalone" (sin barras de
// navegador). No implementa caché offline a propósito, ya que el documento
// PDF y los datos se generan dinámicamente y no tiene sentido cachearlos.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pasamos todas las peticiones directamente a la red, sin interceptar.
  event.respondWith(fetch(event.request));
});
