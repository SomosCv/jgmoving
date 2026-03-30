self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('social-badges-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/manifest.json',
                '/icon-192x192.png',
                '/icon-192x192-blue.png',
                '/icon-512x512.png',
                '/icon-512x512-favicon.png',
                '/favicon-blue.png',
                '/favicon.png',
                'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
                'https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_2012.svg',
                'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
                'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2013.svg'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
