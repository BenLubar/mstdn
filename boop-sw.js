// extremely simple service worker

const version = 2;

self.addEventListener('install', function(event) {
	event.waitUntil(caches.open('mstdn-boop-v2').then(function(cache) {
		return cache.addAll([
			'boop.html',
			'boop.html?bean',
			'logo.svg',
			'logo-192.png',
			'logo-512.png',
			'boop.mp3',
			'boop.ogg',
			'beanskull.png',
			'honk.mp3',
			'honk.ogg',
			'boop-manifest.json'
		]);
	}));
});

self.addEventListener('fetch', function(event) {
	event.respondWith(caches.match(event.request).then(function(response) {
		return response || fetch(event.request);
	}));
});
