const CACHE_NAME = "japan-quest-v230";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css?v230",
  "./ticket-email.js?v230",
  "./wander.js?v230",
  "./roll-call.js?v230",
  "./app.js?v230",
  "./bulk-photos.js?v230",
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
  "./capstones/day02-nozomi.webp?v229",
  "./capstones/day03-tsutenkaku.webp?v229",
  "./capstones/day04.jpg?v221",
  "./capstones/day05-osaka-castle.webp?v221",
  "./capstones/day06.jpeg",
  "./capstones/day07-kiyomizu.webp?v227",
  "./capstones/day08-kinkakuji.webp?v229",
  "./capstones/day09-nijo.webp?v229",
  "./capstones/day10-enryakuji.webp?v229",
  "./capstones/day11.jpg",
  "./capstones/day12.webp",
  "./capstones/day13.jpg",
  "./capstones/day14.jpg",
  "./capstones/day15.jpeg",
  "./capstones/day16-shibuya.webp?v229",
  "./capstones/day17.jpg",
  "./capstones/day18.jpg",
  "./capstones/day19-kintoki.webp?v229",
  "./capstones/day20-engei.webp?v229",
  "./capstones/day21.jpg"
];

function fileName(url) {
  const path = url.pathname.replace(/\/+$/, "");
  return path.split("/").pop() || "index.html";
}

function isShellFile(url) {
  const name = fileName(url);
  return name === "index.html" || name === "app.js" || name === "bulk-photos.js" || name === "wander.js" || name === "roll-call.js" || name === "ticket-email.js" || name === "styles.css" || name === "sw.js" || name === "manifest.webmanifest";
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
