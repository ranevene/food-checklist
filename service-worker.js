self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("food-checklist").then(cache =>
      cache.addAll([
        "/food-checklist/food-checklist.html",
        "/food-checklist/manifest.json"
        ]);
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp =>
      resp || fetch(event.request)
    )
  );
});

