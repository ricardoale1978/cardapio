self.addEventListener('install', function (event) {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
  // Futuramente você pode adicionar cache offline aqui
});