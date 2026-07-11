const CACHE_NAME = "japan-quest-v29";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./capstones/day02.jpg",
  "./capstones/day03.jpg",
  "./capstones/day04.jpg",
  "./capstones/day05.jpg",
  "./capstones/day06.webp",
  "./capstones/day07.webp",
  "./capstones/day08.jpg",
  "./capstones/day09.webp",
  "./capstones/day10.jpg",
  "./capstones/day11.jpg",
  "./capstones/day12.jpg",
  "./capstones/day13.jpg",
  "./capstones/day14.jpg",
  "./capstones/day15.jpg",
  "./capstones/day16.jpg",
  "./capstones/day17.jpg",
  "./capstones/day18.webp",
  "./capstones/day19.webp",
  "./capstones/day20.jpg",
  "./capstones/day21.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
  );
});
