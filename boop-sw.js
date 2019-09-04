// extremely simple service worker

const version = 0;

self.addEventListener('install', function(event) {
	event.waitUntil(caches.open('mstdn-boop-v1').then(function(cache) {
		return cache.addAll([
			'boop.html',
			'logo.svg',
			'boop.mp3',
			'boop.ogg',
			'boop-manifest.json'
		]);
	}));
});

self.addEventListener('fetch', function(event) {
	event.respondWith(caches.match(event.request).then(function(response) {
		return response || fetch(event.request);
	}));
});
