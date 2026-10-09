const CACHE_NAME = "japan-quest-v189";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css?v189",
  "./ticket-email.js?v189",
  "./app.js?v189",
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
  "./capstones/day17.jpg",
  "./capstones/day18.jpg",
  "./capstones/day19.webp",
  "./capstones/day20.webp",
  "./capstones/day21.jpg"
];

function fileName(url) {
  const path = url.pathname.replace(/\/+$/, "");
  return path.split("/").pop() || "index.html";
}

function isShellFile(url) {
  const name = fileName(url);
  return name === "index.html" || name === "app.js" || name === "ticket-email.js" || name === "styles.css" || name === "sw.js" || name === "manifest.webmanifest";
}

function isDocumentRequest(request, url) {
  if (request.mode === "navigate" || request.destination === "document") return true;
  const name = fileName(url);
  return name === "index.html";
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .catch(() => {})
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

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const fresh = isShellFile(url) || isDocumentRequest(event.request, url);
  event.respondWith(
    fetch(event.request, fresh ? { cache: "no-store" } : undefined)
      .then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }).then((cached) => {
        if (cached) return cached;
        if (isDocumentRequest(event.request, url)) {
          return caches.match("./index.html").then((shell) => shell || Response.error());
        }
        return Response.error();
      }))
  );
});
