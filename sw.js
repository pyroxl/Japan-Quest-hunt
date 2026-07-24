const CACHE_NAME = "japan-quest-v150";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css?v150",
  "./app.js?v150",
  "./leaflet.css",
  "./leaflet.js",
  "./place-coordinates.js",
  "./marker-icon.png",
  "./marker-icon-2x.png",
  "./marker-shadow.png",
  "./manifest.webmanifest",
  "./icon.svg",
  "./food-icons/conbini-onigiri.png",
  "./food-icons/restaurant-ramen.png",
  "./food-icons/cafe-matcha.png",
  "./food-icons/sweet-dango.png",
  "./capstones/day02.jpg",
  "./capstones/day03.webp",
  "./capstones/day04.jpg",
  "./capstones/day05.jpeg",
  "./capstones/day06.jpeg",
  "./capstones/day07.webp",
  "./capstones/day08.jpg",
  "./capstones/day09.jpg",
  "./capstones/day10.jpeg",
  "./capstones/day11.jpg",
  "./capstones/day12.webp",
  "./capstones/day13.jpg",
  "./capstones/day14.jpg",
  "./capstones/day15.jpeg",
  "./capstones/day16.jpeg",
  "./capstones/day17.webp",
  "./capstones/day18.webp",
  "./capstones/day19.jpeg",
  "./capstones/day20.webp",
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
