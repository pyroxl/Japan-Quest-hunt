const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const fetches = [];
const storage = new Map();

function createElement(tag) {
  const node = {
    tagName: String(tag || "div").toUpperCase(),
    children: [],
    className: "",
    id: "",
    hidden: false,
    open: false,
    dataset: {},
    value: "",
    textContent: "",
    alt: "",
    src: "",
    href: "",
    style: {
      setProperty() {},
      getPropertyValue() { return ""; },
      colorScheme: ""
    },
    attributes: {},
    parentElement: null,
    isConnected: true,
    scrollWidth: 0,
    clientWidth: 120,
    scrollLeft: 0,
    offsetLeft: 0,
    _html: ""
  };
  node.classList = {
    toggle(name, on) {
      const parts = new Set(node.className.split(/\s+/).filter(Boolean));
      const has = parts.has(name);
      const next = on === undefined ? !has : Boolean(on);
      if (next) parts.add(name);
      else parts.delete(name);
      node.className = [...parts].join(" ");
    },
    add(name) { this.toggle(name, true); },
    remove(name) { this.toggle(name, false); },
    contains(name) { return node.className.split(/\s+/).includes(name); }
  };
  node.setAttribute = (key, value) => {
    node.attributes[key] = String(value);
    if (key === "class") node.className = String(value);
    if (key === "id") node.id = String(value);
  };
  node.getAttribute = (key) => (key in node.attributes ? node.attributes[key] : null);
  node.removeAttribute = (key) => { delete node.attributes[key]; };
  node.addEventListener = () => {};
  node.removeEventListener = () => {};
  node.appendChild = (child) => {
    node.children.push(child);
    if (child) child.parentElement = node;
    return child;
  };
  node.append = (...kids) => kids.forEach((child) => node.appendChild(child));
  node.insertAdjacentElement = () => createElement("div");
  node.insertAdjacentHTML = () => {};
  node.cloneNode = () => createElement(tag);
  node.contains = () => false;
  node.matches = () => false;
  node.after = () => {};
  node.before = () => {};
  node.replaceWith = () => {};
  node.replaceChildren = () => {};
  node.prepend = (...kids) => kids.forEach((child) => node.appendChild(child));
  node.remove = () => {};
  node.focus = () => {};
  node.click = () => {};
  node.scrollIntoView = () => {};
  node.scrollTo = () => {};
  node.closest = () => null;
  node.querySelector = () => createElement("div");
  node.querySelectorAll = () => [];
  node.getBoundingClientRect = () => ({ top: 0, left: 0, width: 100, height: 40, right: 100, bottom: 40 });
  Object.defineProperty(node, "innerHTML", {
    get() { return node._html; },
    set(value) {
      node._html = String(value ?? "");
      node.children = [];
    }
  });
  return node;
}

function layer() {
  const api = {
    addTo() { return api; },
    on() { return api; },
    bindTooltip() { return api; },
    bindPopup() { return api; },
    setZIndexOffset() {},
    getElement() { return createElement("div"); },
    openTooltip() {},
    closeTooltip() {},
    addLayer() { return api; },
    eachLayer() {},
    setLatLng() { return api; }
  };
  return api;
}

const documentElement = createElement("html");
const body = createElement("body");
const documentStub = {
  body,
  documentElement,
  visibilityState: "visible",
  readyState: "complete",
  createElement,
  createTextNode(text) {
    return { textContent: String(text), nodeType: 3, parentElement: null };
  },
  querySelector() { return createElement("div"); },
  querySelectorAll() { return []; },
  addEventListener() {},
  removeEventListener() {},
  getElementById() { return createElement("div"); }
};

const context = {
  console,
  setTimeout() { return 0; },
  clearTimeout() {},
  setInterval() { return 0; },
  clearInterval() {},
  requestAnimationFrame(fn) { fn(); return 1; },
  scrollTo() {},
  scrollY: 0,
  addEventListener() {},
  removeEventListener() {},
  cancelAnimationFrame() {},
  fetch(url) {
    fetches.push(String(url));
    return Promise.reject(new Error("offline in test"));
  },
  localStorage: {
    getItem(key) { return storage.has(key) ? storage.get(key) : null; },
    setItem(key, value) { storage.set(key, String(value)); },
    removeItem(key) { storage.delete(key); }
  },
  navigator: {
    onLine: false,
    clipboard: { writeText() { return Promise.resolve(); } },
    serviceWorker: {
      addEventListener() {},
      register() {
        const registration = {
          installing: null,
          waiting: null,
          active: null,
          update() { return Promise.resolve(); },
          addEventListener() {}
        };
        return Promise.resolve(registration);
      }
    }
  },
  location: { pathname: "/", origin: "http://127.0.0.1:8765", href: "http://127.0.0.1:8765/", protocol: "http:", reload() {} },
  history: { state: null, pushState() {}, replaceState() {} },
  document: documentStub,
  window: null,
  L: {
    map() {
      return { on() {}, remove() {}, setView() { return this; }, fitBounds() {}, invalidateSize() {}, eachLayer() {}, scrollWheelZoom: { disable() {} } };
    },
    divIcon(options) { return options || {}; },
    marker() { return layer(); },
    tileLayer() { return layer(); },
    layerGroup() { return layer(); },
    latLng() { return { lat: 0, lng: 0 }; },
    latLngBounds() { return { isValid() { return false; }, pad() { return this; } }; },
    DomEvent: { disableClickPropagation() {}, disableScrollPropagation() {} }
  },
  matchMedia() {
    return { matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} };
  },
  URL,
  URLSearchParams,
  AbortController,
  FormData,
  Blob,
  File,
  Headers,
  Response,
  Request,
  TextEncoder,
  TextDecoder,
  crypto: { randomUUID() { return "test-id"; } },
  Intl,
  Map,
  Set,
  WeakMap,
  Promise,
  Date,
  Math,
  JSON,
  Number,
  String,
  Array,
  Object,
  RegExp,
  Error,
  parseInt,
  parseFloat,
  isNaN,
  encodeURIComponent,
  decodeURIComponent,
  btoa(value) { return Buffer.from(String(value), "binary").toString("base64"); },
  atob(value) { return Buffer.from(String(value), "base64").toString("binary"); }
};
context.window = context;
context.globalThis = context;
context.self = context;
vm.createContext(context);
const appSource = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
vm.runInContext(`${appSource}
globalThis.__exported = {
  tripData, guideSummary, guideTimeline, dayClearPath, dayMainGoal, dayView,
  stayCityForDay, stayPlaceForView, walletBookings, walletPreparedItems, visibleWallet,
  openItems, TRIP_OPEN_ITEMS, STORAGE_KEY, APP_VERSION, defaultPlanPhotos,
  RESERVATION_COUNTDOWN, HAKONE_CANCELLED_NOTE, APA_HOTEL_NAME, awayLine, storyDayTitle
};
`, context, { filename: "app.js" });

const {
  tripData,
  guideSummary,
  guideTimeline,
  dayClearPath,
  dayMainGoal,
  dayView,
  stayCityForDay,
  stayPlaceForView,
  walletBookings,
  walletPreparedItems,
  visibleWallet,
  openItems,
  TRIP_OPEN_ITEMS,
  STORAGE_KEY,
  APP_VERSION,
  defaultPlanPhotos,
  RESERVATION_COUNTDOWN,
  HAKONE_CANCELLED_NOTE,
  APA_HOTEL_NAME,
  awayLine,
  storyDayTitle
} = context.__exported;

function setWho(who) {
  context.localStorage.setItem("japanQuestTraveler", who);
}

function dayByDate(iso) {
  return Object.values(tripData).flatMap((city) => city.days).find((day) => day.date === iso);
}

function nextStop(isoTime) {
  const now = Date.parse(isoTime);
  return walletPreparedItems().find((item) => item.atMs >= now && !item.untimed && item.kind !== "vjw") || null;
}

function activeBlob(who, dates) {
  setWho(who);
  const parts = [];
  dates.forEach((iso) => {
    const day = dayByDate(iso);
    const view = dayView(day);
    parts.push(guideSummary(day), dayClearPath(day), dayMainGoal(day), storyDayTitle(day), view?.theme || day.theme);
    guideTimeline(day, "main").forEach((row) => parts.push(row[0], row[1]));
    guideTimeline(day, "slow").forEach((row) => parts.push(row[0], row[1]));
  });
  visibleWallet()
    .filter((item) => dates.includes(String(item.at).slice(0, 10)) || item.id === "apa-nov5" || item.id === "teamlab" || item.id === "flight-back")
    .forEach((item) => parts.push(item.title, item.when, item.route, item.detail, item.how));
  return parts.join("\n");
}

const dates = ["2026-11-08", "2026-11-09", "2026-11-10", "2026-11-11", "2026-11-12"];

setWho("brian");
const nov8 = dayByDate("2026-11-08");
const nov9 = dayByDate("2026-11-09");
const nov10 = dayByDate("2026-11-10");
const nov11 = dayByDate("2026-11-11");
const nov12 = dayByDate("2026-11-12");

assert.match(guideSummary(nov8), /APA/);
assert.match(guideSummary(nov8), /rest/i);
assert.match(dayClearPath(nov8), /Stay at APA/);
assert.equal(stayCityForDay(nov8), "tokyo");
assert.match(stayPlaceForView(nov8), /APA Hotel/);
assert.doesNotMatch(guideSummary(nov8), /Super Hakone|Setsugetsuka|Romancecar|05:30|suitcase/i);
assert.doesNotMatch(guideTimeline(nov8, "main").map((row) => row.join(" ")).join("\n"), /\d{1,2}:\d{2}/);

assert.match(guideSummary(nov9), /rest/i);
assert.match(guideSummary(nov9), /no taxi/i);
assert.doesNotMatch(dayClearPath(nov9), /Hakone Shrine|sunrise/i);

assert.match(guideSummary(nov10), /optional/i);
assert.match(guideSummary(nov10), /Hachiko/);
assert.match(guideSummary(nov10), /at most one shop/i);
assert.match(guideSummary(nov10), /Kichijoji/);
assert.match(guideSummary(nov10), /easy to skip|not booked|no agreed time/i);
assert.doesNotMatch(`${nov10.title} ${dayClearPath(nov10)} ${guideSummary(nov10)}`, /Mount Kintoki|booked for/i);
assert.match(guideSummary(nov10), /Do not add Asakusa/);

assert.match(dayClearPath(nov11), /Kichijoji/);
assert.match(guideSummary(nov11), /吉祥寺/);
assert.match(guideSummary(nov11), /Inokashira/);
assert.match(guideSummary(nov11), /Sunroad/);
assert.match(guideSummary(nov11), /no bakery branch|No bakery branch/);
assert.match(guideSummary(nov11), /pack/i);
assert.match(guideSummary(nov11), /Asakusa/);
assert.doesNotMatch(guideSummary(nov11), /Engei Hall for|60–90|Romancecar|suitcase/i);
assert.equal(guideTimeline(nov11, "slow").length, 0);

assert.match(guideSummary(nov12), /12:30/);
assert.match(guideSummary(nov12), /13:00/);
assert.match(guideSummary(nov12), /teamLab/);
assert.match(guideSummary(nov12), /Haneda Terminal 3/);
assert.match(guideSummary(nov12), /01:00/);
assert.doesNotMatch(guideSummary(nov12), /22:00|Asakusa line|check-in cutoff/i);

setWho("mai");
assert.match(dayClearPath(nov8), /Stay at APA/);
assert.match(dayClearPath(nov11), /Kichijoji/);
assert.equal(nextStop("2026-11-08T09:00:00+09:00").id, "teamlab");
assert.equal(visibleWallet().some((item) => item.cancelled), false);
assert.equal(visibleWallet().some((item) => String(item.at).startsWith("2026-11-08")), false);
assert.equal(visibleWallet().some((item) => item.id === "apa-nov11"), false);
assert.ok(visibleWallet().some((item) => item.id === "apa-nov5" && /Nov 12/.test(item.when)));
assert.equal(nextStop("2026-11-12T18:00:00+09:00").id, "flight-back");

setWho("parents");
assert.match(dayView(nov8).summary, /APA Nishi-Shinjuku/);
assert.doesNotMatch(guideSummary(nov8), /Romancecar|Kichijoji|Hachiko|Shibuya Crossing|suitcase/i);
assert.match(dayView(nov8).places.join(" "), /APA Hotel/);
assert.equal(dayView(nov8).places.length, 1);
assert.match(dayView(nov9).clearPath, /park or lookout/);
assert.equal(dayView(nov10).title, "Fly home");
assert.match(guideSummary(nov10), /UA804/);
assert.match(guideSummary(nov10), /16:50/);
assert.match(guideSummary(nov10), /13:30/);
assert.equal(nextStop("2026-11-08T09:00:00+09:00").id, "ua804");
assert.equal(nextStop("2026-11-10T12:00:00+09:00").title, "UA804 home");
assert.ok(walletBookings().some((item) => item.id === "takeshima-dinner" && item.who === "parents"));
assert.ok(TRIP_OPEN_ITEMS.some((item) => /Akiko & Yoshi/.test(item.label) && item.who === "parents"));
assert.equal(awayLine("2026-11-11"), "Flown home.");
assert.equal(awayLine("2026-11-12"), "Flown home.");
assert.doesNotMatch(guideSummary(nov8), /optional Shibuya|吉祥寺/i);

setWho("brian");
const openText = openItems().map((item) => `${item.label} ${item.detail}`).join("\n");
assert.doesNotMatch(openText, /05:30|Romancecar|Super Hakone|suitcase handoff|Asakusa Engei/i);
const parentOpen = (() => {
  setWho("parents");
  return openItems().map((item) => item.label).join("\n");
})();
assert.match(parentOpen, /Akiko/);
assert.match(parentOpen, /Autumn scenery/);

setWho("brian");
const earlier = dayByDate("2026-10-28");
assert.match(guideSummary(earlier), /Todai-ji/);
assert.match(dayClearPath(dayByDate("2026-11-06")), /Inokashira/);
assert.ok(defaultPlanPhotos.day02.startsWith("capstones/"));
assert.ok(defaultPlanPhotos.day15.startsWith("capstones/"));
assert.ok(defaultPlanPhotos.day16.startsWith("capstones/"));
assert.ok(defaultPlanPhotos.day21.startsWith("capstones/"));
assert.equal(defaultPlanPhotos.day17, undefined);
assert.equal(defaultPlanPhotos.day19, undefined);
["day02-nozomi.webp", "day15.jpeg", "day16-shibuya.webp", "day17.jpg", "day18.jpg", "day19-kintoki.webp", "day20-engei.webp", "day21.jpg"].forEach((name) => {
  assert.ok(fs.existsSync(path.join(__dirname, "capstones", name)), name);
});
assert.equal(STORAGE_KEY, "tokyoQuestHunt.v4");
assert.equal(APP_VERSION, "japan-quest-v236");
assert.match(fs.readFileSync(path.join(__dirname, "sw.js"), "utf8"), /japan-quest-v236/);
assert.match(HAKONE_CANCELLED_NOTE, /JPY 2,100/);
assert.match(HAKONE_CANCELLED_NOTE, /never booked/);
assert.equal(RESERVATION_COUNTDOWN.find((item) => item.id === "romancecar-out").attention, "cancelled");
assert.equal(RESERVATION_COUNTDOWN.find((item) => item.id === "setsugetsuka-record").attention, "cancelled");

const brianActive = activeBlob("brian", dates);
const maiActive = activeBlob("mai", dates);
const parentActive = activeBlob("parents", ["2026-11-08", "2026-11-09", "2026-11-10"]);
[brianActive, maiActive, parentActive].forEach((blob) => {
  assert.equal(blob.includes("@"), false);
  assert.doesNotMatch(blob, /credit card|@[a-z0-9.-]+\.[a-z]{2,}|QR code|\b\d{13,19}\b/i);
  assert.doesNotMatch(blob, /8A|8B|\b2A\b|\b2B\b/);
  assert.doesNotMatch(blob, /82,880|22,269|325,507/);
});
assert.doesNotMatch(brianActive, /Do not board|JPY 2,100/);
assert.match(parentActive, /UA804/);
assert.doesNotMatch(parentActive, /Kichijoji|optional Shibuya/i);

fetches.forEach((url) => {
  assert.equal(url.includes("@"), false);
  assert.doesNotMatch(url, /romancecar|setsugetsuka|booking|gmail/i);
});

const privateLeak = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
assert.doesNotMatch(privateLeak, /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
assert.doesNotMatch(privateLeak, /credit card/i);
assert.doesNotMatch(privateLeak, /seats 8A|seats 2A/);

console.log("itinerary-november.test.js ok");
