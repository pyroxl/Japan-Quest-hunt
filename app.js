const STORAGE_KEY = "tokyoQuestHunt.v4";
const APP_VERSION = "japan-quest-v113";
const PREVIOUS_STORAGE_KEY = "tokyoQuestHunt.v3";
const OLD_STORAGE_KEY = "tokyoQuestHunt.v2";
const PHOTO_DB_NAME = "japanQuestPhotos";
const PHOTO_STORE = "photos";

const HOTEL_PLACES = new Set([
  "Hotel Cordia Osaka Hommachi",
  "Hotel Monterey Kyoto",
  "Hotel Granvia Hiroshima",
  "International House of Japan",
  "Kawaguchiko Hotel"
]);

const LOCKED_HOTEL_WEBSITES = {
  "Hotel Cordia Osaka Hommachi": "https://cordia-osaka.com/hommachi/en/",
  "Hotel Monterey Kyoto": "https://www.hotelmonterey.co.jp/en/kyoto/",
  "Hotel Granvia Hiroshima": "https://www.hgh.co.jp/english/"
};

const STAY_HOTEL_BY_DAY = {
  day02: "Hotel Cordia Osaka Hommachi",
  day03: "Hotel Cordia Osaka Hommachi",
  day04: "Hotel Cordia Osaka Hommachi",
  day05: "Hotel Cordia Osaka Hommachi",
  day06: "Hotel Monterey Kyoto",
  day07: "Hotel Monterey Kyoto",
  day08: "Hotel Monterey Kyoto",
  day09: "Hotel Monterey Kyoto",
  day10: "Hotel Monterey Kyoto",
  day11: "Hotel Granvia Hiroshima",
  day12: "Hotel Granvia Hiroshima",
  day13: "Hotel Granvia Hiroshima",
  day14: "International House of Japan",
  day15: "International House of Japan",
  day16: "International House of Japan",
  day17: "Kawaguchiko Hotel",
  day18: "Kawaguchiko Hotel",
  day19: "Kawaguchiko Hotel",
  day20: "International House of Japan",
  day21: "International House of Japan"
};

const HOTEL_MARKER_ICON = `<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4z"/></svg>`;

function isHotelPlace(place) {
  return HOTEL_PLACES.has(place);
}

function dayMapPlaces(day) {
  const hotel = STAY_HOTEL_BY_DAY[day.id];
  if (!hotel) return day.places.slice();
  const activities = day.places.filter((place) => place !== hotel);
  return [hotel, ...activities];
}

function makeLeafletMarkerIcon({ shellClass, isHotel, label, dayColor }) {
  const html = isHotel
    ? HOTEL_MARKER_ICON
    : escapeHtml(String(label));
  const spanClass = isHotel ? "map-marker-hotel-core" : "map-marker-activity-core";
  const style = isHotel ? "" : ` style="--day-color:${dayColor}"`;
  return L.divIcon({
    className: `${shellClass}${isHotel ? " is-hotel-marker" : ""}`,
    html: `<span class="${spanClass}"${style}>${html}</span>`,
    iconSize: isHotel ? [36, 44] : [30, 38],
    iconAnchor: isHotel ? [18, 44] : [15, 38],
    tooltipAnchor: [0, isHotel ? -38 : -31]
  });
}

const coreExperienceQuests = [
  {
    title: "Mai's Melon Bread Passport",
    description: "Collect six distinct versions. Each passport stamp needs Mai's photo and 1–10 score.",
    type: "side",
    items: [
      "Konbini baseline melon bread",
      "Fresh neighborhood-bakery classic",
      "Jumbo or extra-crispy version",
      "Melon-flavored, cream-filled, or custard-filled version",
      "Matcha, hojicha, or another Japanese-flavored version",
      "Mai's wildcard version"
    ]
  },
  {
    title: "The Ekiben League",
    description: "Food plus train ritual wins points. Photograph each box closed and open, trade tastes, and score it.",
    type: "side",
    items: [
      "Day 11: choose different regional ekiben for Himeji to Hiroshima",
      "Day 14: arrive early and browse the Hiroshima Station selection",
      "Day 14: choose different boxes and trade tastes on the Shinkansen",
      "Score packaging, regional character, variety, flavor, and train happiness",
      "Name the trip's champion ekiben"
    ]
  },
  {
    title: "Everyday Japan Core",
    description: "Trip-wide ordinary-life missions. Progress follows us across every city tab.",
    type: "side",
    items: [
      "Load and use an IC card for transit and one small purchase",
      "Ride a subway, local train, Shinkansen, Hiroshima streetcar, and ferry",
      "Build one proper konbini breakfast and one dessert haul",
      "Shop a real supermarket and build a hotel picnic",
      "Choose dinner or treats from a depachika food hall",
      "Eat a teishoku set meal",
      "Try a kissaten or Japanese-style morning set",
      "Use a ramen or fast-meal ticket machine",
      "Browse a neighborhood shotengai for ordinary food and shops",
      "Do one arcade, gachapon, or purikura session",
      "Repeat one cafe, bakery, konbini, or supermarket",
      "Use a taxi once and let the driver operate the rear door",
      "Do laundry, follow rubbish sorting, and watch local TV over supermarket food",
      "Buy a hot vending-machine drink on a cool morning"
    ]
  },
  {
    title: "All-Foods-Pass Quest",
    description: "One bite counts. Regional food earns more joy than checklist suffering.",
    type: "side",
    items: [
      "Osaka: takoyaki, okonomiyaki, kushikatsu, and negiyaki",
      "Nara: kakinoha-zushi and yomogi mochi",
      "Kyoto: tofu/yudofu, obanzai, matcha/wagashi, and soba or udon",
      "Hiroshima: Hiroshima-style okonomiyaki, oysters, momiji manju, and spicy tsukemen",
      "Miyajima: anago-meshi, grilled oyster, and warm momiji manju",
      "Tokyo: sushi, ramen, curry rice, yakitori, teishoku, and conveyor-belt sushi",
      "Tokyo sweets: taiyaki or ningyo-yaki, kissaten toast, and a beautiful dessert",
      "Eat one locally recommended meal without over-researching it"
    ]
  },
  {
    title: "Small Keepsakes",
    description: "The two culture experiences that actually feel personal, plus a thank-you.",
    type: "side",
    items: [
      "Buy, write, stamp, and mail a postcard from Japan",
      "Make one compact craft only if we genuinely want the finished object",
      "Write or choose one thoughtful thank-you card"
    ]
  }
];

const roadmapGoals = [
  { id: "osaka-food", goal: "Maximum-pop Osaka and regional food", days: ["day02", "day03", "day04"], status: "Ready", why: "Dotonbori and Castle/Den Den/Shinsekai provide the loud Osaka arc; the scored Kuromon mission and Tenma supply the food quest.", blocker: "Day 3 and Day 4 both involve substantial standing.", fallback: "Keep the category limits, hotel reset and first seated Tenma venue." },
  { id: "kobe-nunobiki", goal: "Kobe Nunobiki romantic outing", days: ["day05"], status: "Needs Route Checks", why: "The selected soft outing trades a wider Kobe checklist for ropeway views, gardens and an optional dinner.", blocker: "Recheck ropeway and herb-garden hours and maintenance notices.", fallback: "Use the ropeway/view/café version only; parents can take an independent easy Osaka day." },
  { id: "izakaya", goal: "At least one izakaya night", days: ["day04"], status: "Ready", why: "Tenma izakaya dinner is the Day 4 capstone after the scored snack mission.", blocker: "", fallback: "Keep the first seated Tenma venue even if the daytime tasting runs long." },
  { id: "konbini", goal: "7-Eleven and konbini food experience", days: ["day02"], status: "Ready", why: "The first small everyday-Japan ritual begins immediately.", blocker: "", fallback: "Build breakfast from the nearest station or hotel konbini." },
  { id: "nara", goal: "Nara Park", days: ["day06"], status: "Ready", why: "Nara bridges Osaka and Kyoto with one iconic first-trip experience.", blocker: "", fallback: "Use taxis and keep the visit to the park and Todai-ji approach." },
  { id: "nijo", goal: "Nijo Castle", days: ["day09"], status: "Ready", why: "It is Kyoto's strongest non-temple historic anchor and opens the compact central-Kyoto day.", blocker: "", fallback: "Keep Nijo, then skip either the palace or Manga Museum and rejoin at Nishiki or dinner." },
  { id: "mt-inari", goal: "Early Fushimi Inari climb", days: ["day07"], status: "Ready", why: "Mai's hillside torii priority now begins a coherent southeast-to-Higashiyama sweep.", blocker: "", fallback: "Turn around at Yotsutsuji or sooner; parents skip Inari and Tofuku-ji entirely." },
  { id: "higashiyama", goal: "Kiyomizu-dera and Higashiyama", days: ["day07"], status: "Ready", why: "Parents meet the couple at Kiyomizu after the Inari and Tofuku-ji morning.", blocker: "", fallback: "Taxi toward Kiyomizu, use a cafe base, then descend only as far as energy allows." },
  { id: "arashiyama", goal: "Arashiyama and northwest Kyoto", days: ["day08"], status: "Ready", why: "Bamboo and Togetsukyo lead naturally into Ryoan-ji and Kinkaku-ji via the Randen corridor.", blocker: "", fallback: "Use Togetsukyo and a riverside cafe, skip Ryoan-ji, and meet at Kinkaku-ji by taxi." },
  { id: "matcha", goal: "Matcha and cafe time", days: ["day07", "day08", "day09", "day10"], status: "Ready", why: "Several Kyoto days provide natural, unhurried chances.", blocker: "", fallback: "Use a station, depachika, or hotel-nearby tea stop." },
  { id: "mt-hiei", goal: "Mt Hiei mountain day", days: ["day10"], status: "Needs Route Checks", why: "Mai chose a full Kyoto mountain day with Enryaku-ji and forest paths.", blocker: "Confirm seasonal cable car, ropeway, bus operations and last descent timing.", fallback: "Use the most assisted route and return earlier if weather or legs push back." },
  { id: "mountain-chapter", goal: "Three-night Kawaguchiko retreat", days: ["day17", "day18", "day19"], status: "Needs Route Checks", why: "One Fuji-area hotel creates a deliberate quiet escape between two Tokyo stays, with active and gentle versions each day.", blocker: "November weather, local bus schedules, trail status and Tokyo luggage handling need confirmation.", fallback: "Keep the lake hotel and use ropeway, museums, cafes and short shoreline walks instead of a hike." },
  { id: "fuji-return", goal: "Protected Kawaguchiko–Tokyo return", days: ["day20"], status: "Needs Booking", why: "Returning on Nov 11 creates a full buffer before the flight and leaves time for missed Tokyo priorities.", blocker: "Reserve the return bus or train and allow road-delay margin.", fallback: "Use the rail route via Otsuki if highway conditions look unreliable." },
  { id: "west-chapter", goal: "Himeji, Hiroshima, and Miyajima chapter", days: ["day11", "day12", "day13"], status: "Ready", why: "The westward chapter makes the longer trip feel meaningfully broader.", blocker: "", fallback: "Use castle exterior and garden, central Peace Park, and Miyajima waterfront routes." },
  { id: "tokyo-story", goal: "Tokyo through Ghibli, friends, teamLab and food", days: ["day14", "day15", "day16", "day21"], status: "Ready", why: "The tightened Tokyo chapter keeps only the personally distinct anchors.", blocker: "", fallback: "Protect Ghibli/friends and use the final day for the strongest available ticket and bakery route." },
  { id: "ghibli", goal: "Ghibli and cute-culture experience", days: ["day15"], status: "Needs Booking", why: "It gives Mai a soft, imaginative Tokyo anchor.", blocker: "Ghibli Museum tickets must be secured.", fallback: "Make Inokashira Park and Kichijoji the complete day." },
  { id: "friends-day", goal: "Akko/Yoshi home-neighborhood day", days: ["day16"], status: "Needs Confirmation", why: "The most authentic Tokyo capstone is a meal and neighborhood tour chosen by friends who live there.", blocker: "Confirm neighborhood name, availability, and dinner plan.", fallback: "Keep it seated and social; if near Chofu, Jindaiji and soba are a strong optional anchor." },
  { id: "anime", goal: "Manga or anime culture beyond shopping", days: ["day09", "day15", "day16"], status: "Ready", why: "The optional Kyoto International Manga Museum and Ghibli cover imaginative culture without relying on shopping.", blocker: "", fallback: "Skip the Manga Museum for a parent rest window and preserve Ghibli/Kichijoji." },
  { id: "teamlab", goal: "teamLab Borderless", days: ["day21"], status: "Needs Booking", why: "Mai already responded strongly to the visual experience.", blocker: "Timed admission must be booked.", fallback: "Protect the chosen melon-bread store and final meal, then use another modern-art experience if desired." },
  { id: "melon-finale", goal: "Mai's specific special melon-bread shop", days: ["day21"], status: "Needs Name", why: "This is now a protected final-day food anchor.", blocker: "Exact shop and branch have not been confirmed.", fallback: "Use the best confirmed Tokyo Melonpan branch or repeat the passport champion." },
];

const regionalQuestPools = {
  osaka: [
    ["osaka-takoyaki", "food", "Try takoyaki from a busy specialist.", ["day03"]],
    ["osaka-okonomiyaki", "food", "Share Osaka-style okonomiyaki.", ["day03"]],
    ["osaka-kushikatsu", "food", "Try kushikatsu in Osaka.", ["day03"]],
    ["osaka-negiyaki", "food", "Find negiyaki or another Osaka griddle specialty.", ["day04"]],
    ["osaka-konbini", "food", "Build a konbini breakfast or dessert haul.", ["day02"]],
    ["osaka-sign", "find", "Spot the loudest oversized food sign.", ["day02"]],
    ["osaka-street", "photo", "Photograph an ordinary street with no landmark.", ["day04"]],
    ["osaka-kissaten", "culture", "Pause in a kissaten or neighborhood cafe.", ["day04"]]
  ],
  kyoto: [
    ["kyoto-obanzai", "food", "Try obanzai or a Kyoto home-style plate."],
    ["kyoto-yudofu", "food", "Try yudofu, tofu, or a gentle Kyoto set meal."],
    ["kyoto-matcha", "food", "Pair matcha with wagashi."],
    ["kyoto-tea", "food", "Find a matcha, hojicha, or tea-flavored treat."],
    ["kyoto-noodles", "food", "Choose soba or udon for an easy meal."],
    ["kyoto-noren", "find", "Find a beautiful noren, lantern, or tiny garden."],
    ["kyoto-river", "photo", "Catch a quiet river routine."],
    ["kyoto-postcard", "culture", "Write or mail a postcard from Kyoto."],
    ["kyoto-hiei", "culture", "Confirm the seasonal Mt Hiei route, then make Enryaku-ji and one forest walk the full-day focus.", ["day10"]]
  ],
  nara: [
    ["nara-kakinoha", "food", "Try kakinoha-zushi in Nara."],
    ["nara-yomogi", "food", "Try fresh yomogi mochi."],
    ["nara-cafe", "food", "Take a calm cafe break near Naramachi."],
    ["nara-deer", "find", "Catch a deer bow or memorable side-eye."],
    ["nara-scale", "photo", "Photograph a detail that shows Todai-ji's scale."]
  ],
  himeji: [
    ["himeji-ekiben", "food", "Choose a regional ekiben for the ride west."],
    ["himeji-snack", "food", "Pick one compact Himeji station snack."],
    ["himeji-reveal", "photo", "Photograph the first full white-castle reveal."],
    ["himeji-defense", "find", "Spot one castle-defense detail."],
    ["himeji-garden", "photo", "Frame the keep from Koko-en if the garden route wins."]
  ],
  hiroshima: [
    ["hiroshima-okonomiyaki", "food", "Try layered Hiroshima-style okonomiyaki."],
    ["hiroshima-oyster", "food", "Try an oyster if it appeals."],
    ["hiroshima-momiji", "food", "Compare warm and packaged momiji manju."],
    ["hiroshima-tsukemen", "food", "Try Hiroshima spicy tsukemen."],
    ["hiroshima-river", "photo", "Photograph how the river changes the mood."]
  ],
  miyajima: [
    ["miyajima-anago", "food", "Try anago-meshi on Miyajima."],
    ["miyajima-oyster", "food", "Try a grilled oyster if it appeals."],
    ["miyajima-warm-momiji", "food", "Taste warm momiji manju."],
    ["miyajima-torii", "photo", "Catch the torii reflected or revealed by the tide."],
    ["miyajima-quiet", "find", "Find an island detail away from the busiest street."]
  ],
  rail: [
    ["rail-ekiben", "food", "Choose a different regional ekiben for the long ride to Tokyo."],
    ["rail-wrapper", "photo", "Photograph the closed package and open tray."],
    ["rail-tastes", "food", "Trade tastes after departure."],
    ["rail-window", "find", "Pause lunch for one train-window scene."],
    ["rail-score", "culture", "Score packaging, regional character, variety, flavor, and train happiness."]
  ],
  tokyo: [
    ["tokyo-sushi", "food", "Choose a sushi meal that fits today's neighborhood."],
    ["tokyo-ramen", "food", "Try a neighborhood ramen shop."],
    ["tokyo-curry", "food", "Try Japanese curry."],
    ["tokyo-yakitori", "food", "Share yakitori at a casual dinner."],
    ["tokyo-teishoku", "food", "Order a teishoku set meal."],
    ["tokyo-taiyaki", "food", "Find taiyaki or ningyo-yaki."],
    ["tokyo-kissaten", "food", "Try a kissaten breakfast or toast set."],
    ["tokyo-bakery", "food", "Check a neighborhood bakery for a new melon bread."],
    ["tokyo-reflection", "photo", "Photograph the two of us reflected in the city."],
    ["tokyo-routine", "culture", "Repeat one cafe, bakery, konbini, or supermarket."]
  ]
};

const melonSlots = [
  ["konbini", "Konbini baseline", "The packaged reference point."],
  ["bakery", "Fresh bakery classic", "A crisp-topped neighborhood bakery version."],
  ["jumbo", "Jumbo or extra-crispy", "A dramatic size or texture round."],
  ["filled", "Melon or cream-filled", "Melon flavor, melon cream, custard, or another filling."],
  ["japanese", "Japanese flavor", "Matcha, hojicha, or another Japan-specific variation."],
  ["wildcard", "Mai's wildcard", "Any surprising version Mai wants in the final six."]
];

const snackLeagueScoreKeys = ["taste", "surprise", "osaka"];
const snackLeagueScoreLabels = {
  taste: "Taste",
  surprise: "Surprise",
  osaka: "Osaka-ness"
};

const snackLeagueSlots = [
  ["raw", "Raw / seafood", "Kuromon · hard exit 11:30"],
  ["hot", "Hot / grilled", "Kuromon · hard exit 11:30"],
  ["savory", "Savory non-seafood", "Kuromon · hard exit 11:30"],
  ["sweet", "Fruit / sweet", "Kuromon · hard exit 11:30"],
  ["shinsaibashi", "Shinsaibashi checkpoint", "One depachika or food-hall bite"],
  ["amerikamura", "Amerikamura wildcard", "One drink or snack only"],
  ["tenma", "Tenma champion", "The dinner bite worth reordering"]
];

// Days spent outside the tab's main city receive only a subtle visual treatment.
// The date tabs remain date-only; itinerary names stay inside the day content.
const cityTintPalette = {
  osaka: "#d75f16",
  kyoto: "#c7437a",
  hiroshima: "#285b96",
  tokyo: "#bc002d",
  nara: "#9a762d",
  kawaguchiko: "#397b8f"
};

const outsideCityStyles = {
  day05: { from: "osaka", to: "osaka" }, // optional Kobe day trip
  day06: { from: "nara", to: "kyoto" },
  day10: { from: "kyoto", to: "kyoto" }, // Mt Hiei day trip
  day11: { from: "kyoto", to: "hiroshima" },
  day13: { from: "hiroshima", to: "hiroshima" }, // Miyajima day trip
  day14: { from: "hiroshima", to: "tokyo" },
  day17: { from: "tokyo", to: "kawaguchiko" },
  day18: { from: "kawaguchiko", to: "kawaguchiko" },
  day19: { from: "kawaguchiko", to: "kawaguchiko" },
  day20: { from: "kawaguchiko", to: "tokyo" }
};

const dayWalkingTime = {
  day02: "~1 hr",
  day03: "~4–5 hr",
  day04: "~3–4 hr",
  day05: "~2–3 hr",
  day06: "~3–4 hr",
  day07: "~4–5 hr",
  day08: "~3–4 hr",
  day09: "~3 hr",
  day10: "~4–5 hr",
  day11: "~3 hr",
  day12: "~2–3 hr",
  day13: "~3–4 hr",
  day14: "~45 min",
  day15: "~3 hr",
  day16: "~1–2 hr",
  day17: "~1–2 hr",
  day18: "~1 hr",
  day19: "~4–5 hr",
  day20: "~3–4 hr",
  day21: "~2–3 hr"
};

const dayWakeUpTime = {
  day02: "Flight-led",
  day03: "07:00",
  day04: "08:15",
  day05: "08:30",
  day06: "06:30",
  day07: "05:45",
  day08: "05:45",
  day09: "07:00",
  day10: "05:45",
  day11: "06:15",
  day12: "07:00",
  day13: "06:30",
  day14: "07:00",
  day15: "07:30",
  day16: "08:30",
  day17: "07:30",
  day18: "08:00",
  day19: "05:30",
  day20: "06:30",
  day21: "07:00"
};

const vitalEarlyWakeDays = new Set(["day07", "day10", "day11", "day19"]);

const calendarThumbnailIdeas = {
  day17: "Idea: small bags + first Fuji reveal",
  day18: "Idea: two bikes + lake + Fuji",
  day19: "Idea: Mitsutoge summit marker + Fuji",
  day20: "Idea: small bags reunite with suitcases"
};

const calendarReferenceLinks = {
  day13: {
    label: "Nov 4 tide plan ↗",
    url: "https://www.miyajima.or.jp/sio/sio11.php"
  }
};

function calendarWalkLabel(dayId) {
  const walk = dayWalkingTime[dayId];
  return walk ? `${walk} walk` : "";
}

function calendarWakeLabel(dayId) {
  const wake = dayWakeUpTime[dayId];
  return wake ? `Wake ${wake}` : "";
}

function calendarWakeClass(dayId) {
  return vitalEarlyWakeDays.has(dayId) ? "calendar-wake is-vital-wake" : "calendar-wake";
}

function applyOutsideCityStyle(element, day, cityId) {
  const style = outsideCityStyles[day.id];
  if (!style || !element) return;
  element.classList.add("is-outside-city");
  element.classList.toggle("is-transit-day", style.from !== style.to);
  element.style.setProperty("--outside-city-color", cityTintPalette[cityId] || cityTintPalette.tokyo);
  element.style.setProperty("--outside-from", cityTintPalette[style.from] || cityTintPalette[cityId]);
  element.style.setProperty("--outside-to", cityTintPalette[style.to] || cityTintPalette[cityId]);
}

function questDay(id, date, title, theme, places, main, side, eggs, mai, soft) {
  return {
    id,
    date,
    short: new Date(`${date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    title: `Day ${Number(id.replace("day", ""))} - ${title.replace(/\s+Quest$/, "")}`,
    theme,
    places,
    slowPlan: soft,
    groups: [
      ["Main quest", "main", [main]],
      ["Side quests", "side", side],
      ["Hidden eggs", "egg", eggs]
    ]
  };
}

const tripData = {
  osaka: {
    name: "Osaka",
    baseLabel: "Hotel Cordia Osaka Hommachi",
    description: "Arrival neon, maximum-pop Osaka, the scored snack mission, Kobe Nunobiki, and the Nara bridge.",
    ongoing: [
      {
        title: "Osaka Opening Credits",
        type: "side",
        items: [
          "Try takoyaki, okonomiyaki, kushikatsu, and negiyaki across the chapter",
          "Start the melon-bread passport with konbini and fresh-bakery versions",
          "Choose one konbini dessert mostly by vibes",
          "Find the best first-trip vending-machine drink",
          "Do one casual izakaya meal and say kampai"
        ]
      },
      {
        title: "Tiny Osaka Proofs",
        type: "egg",
        items: ["A loud food sign", "A quiet side street", "Bike parking or another ordinary city system"]
      }
    ],
    days: [
      questDay("day02", "2026-10-24", "First Bite of Osaka", "Land, recover, and let Japan arrive through food and lights.", ["Kansai International Airport", "Hotel Cordia Osaka Hommachi", "Ebisu Bridge Osaka", "Dotonbori Osaka"], "Reach Osaka, rest properly, then cross Ebisu Bridge for one neon photo and one hot snack if the body agrees.", ["Find the nearest useful konbini", "Take the we-made-it photo", "Choose tomorrow's breakfast candidate", "Start the melon passport with a packaged baseline if hunger agrees"], ["A canal reflection", "A food sign bigger than expected", "A dessert too cute for jet lag"], "Mai gets one real first-night Japan moment without pressure.", "Stop while Dotonbori still feels magical."),
      questDay("day03", "2026-10-25", "Castle to Neon", "Monumental, pop-culture and retro-food Osaka in one strong arc.", ["Osaka Castle", "Nippombashi Osaka", "Nipponbashi Denden Town", "Shinsekai Osaka"], "Start at the castle near opening, eat a seated Nippombashi lunch, browse Den Den Town and reach Shinsekai for blue hour and kushikatsu.", ["Photograph the castle across the moat", "Choose the interior by interest", "Find one Den Den display that makes Mai stop", "Share one Osaka snack", "Finish with kushikatsu"], ["Golden castle ornament", "A character detail", "Tsutenkaku framed by signs"], "Mai gets history, games/anime culture and loud Osaka streets.", "Parents choose Den Den or Shinsekai—not both."),
      questDay("day04", "2026-10-26", "Kuromon Scores, Tenma Pours", "A timed, scored tasting route with a real finish line and appetite left for dinner.", ["Kuromon Ichiba Market", "Daimaru Shinsaibashi", "Amerikamura", "Hotel Cordia Osaka Hommachi", "Tenma Osaka"], "Complete four shared Kuromon categories by 11:30, one Shinsaibashi food-hall checkpoint and one Amerikamura wildcard; reset at the hotel, then finish at no more than two Tenma venues.", ["Score raw/seafood", "Score one hot or grilled bite", "Score one savory non-seafood bite", "Score one fruit or sweet", "Choose one food-hall checkpoint", "Use one Amerikamura wildcard", "Photograph each item and price", "Reset at the hotel", "Share plates at one Tenma izakaya", "Choose one optional specialist finish"], ["A market preparation detail", "The best value surprise", "A youth-culture snack or drink", "The Tenma dish worth reordering"], "Mai gets a playful food hunt rather than an aimless market wander.", "Parents use a seated Kuromon base, skip Amerikamura if useful and rejoin the first Tenma venue."),
      questDay("day05", "2026-10-27", "Kobe Above the Clouds", "Ropeway views, gardens, café time and an optional Kobe dinner.", ["Hotel Cordia Osaka Hommachi", "Shin-Kobe Station", "Nunobiki Ropeway", "Kobe Nunobiki Herb Gardens"], "Make Nunobiki the one contained Kobe outing and do not add a wider city checklist.", ["Ride the ropeway", "Find the best city/harbor view", "Pause at a garden café or terrace", "Choose a Kobe sweet", "Add Kobe dinner only if it improves the day"], ["A ropeway-window reveal", "A garden detail", "Kobe and the harbor below"], "Mai gets the romantic scenic outing already selected.", "Parents use the ropeway/view/café version or take an independent Osaka day."),
      questDay("day06", "2026-10-28", "Deer to Kyoto", "Deer, giant Buddha, old streets, then Kyoto.", ["Kintetsu Nara Station", "Nara Park", "Todai-ji Temple", "Naramachi", "Kyoto Station", "Hotel Monterey Kyoto"], "Use Nara as the Osaka-to-Kyoto bridge and make entering Todai-ji's Great Buddha Hall the capstone.", ["Observe or feed deer without making them the entire day", "Try yomogi mochi or kakinoha-zushi", "Find a cafe near Naramachi", "Make the luggage strategy feel competent"], ["A deer bow or side-eye", "A detail that makes Todai-ji's scale click", "An old-town shopfront"], "Mai gets an iconic Japan moment before Kyoto begins.", "Shorten Nara and reach Kyoto earlier if luggage or legs become the story.")
    ]
  },
  kyoto: {
    name: "Kyoto",
    baseLabel: "Hotel Monterey Kyoto",
    description: "Geographic Kyoto clusters: Inari-to-Gion, Arashiyama-to-Kinkaku, central history, and Mt Hiei.",
    ongoing: [
      {
        title: "Kyoto Soft-Beauty Collection",
        type: "side",
        items: ["Try matcha and wagashi", "Try obanzai or tofu", "Find a quiet river or garden pause", "Hunt a tea-flavored melon bread", "Choose a cafe before anyone needs rescuing"]
      },
      {
        title: "Kyoto Keepsake Window",
        type: "side",
        items: ["Mail the postcard here if the moment feels right", "Make a compact craft only if we want the object", "Find one stationery or ceramics browse"]
      }
    ],
    days: [
      questDay("day07", "2026-10-29", "Torii to Old Kyoto", "An energetic southeast-to-north sweep from Mt Inari to Kiyomizu and Gion.", ["Fushimi Inari Taisha", "Yotsutsuji Intersection Kyoto", "Tofuku-ji Temple", "Kiyomizu-dera", "Sannenzaka", "Ninenzaka", "Yasaka Shrine", "Gion Kyoto"], "Mai and Brian climb Fushimi Inari early, make one compact Tofuku-ji visit, then meet the parents near Kiyomizu and follow the old streets downhill to Gion.", ["Turn around at Yotsutsuji or sooner", "Choose either Tofuku-ji's garden or Tsutenkyo area", "Meet the parents near Kiyomizu around 10:30", "Find one matcha or wagashi pause", "Finish Gion by late afternoon rather than returning at night"], ["A fox detail", "Kyoto spreading out below Mt Inari", "The Kiyomizu panorama", "A sloping-street detail"], "Mai gets torii, old streets and the dream-trip Kyoto view in one coherent corridor.", "Parents skip Inari and Tofuku-ji, taxi toward Kiyomizu, and use a cafe base."),
      questDay("day08", "2026-10-30", "Bamboo to Gold", "An early Arashiyama payoff followed by the rock garden and Golden Pavilion.", ["Arashiyama Bamboo Forest", "Togetsukyo Bridge", "Ryoan-ji Temple", "Kinkaku-ji Temple", "Kamishichiken Kyoto"], "Lock the Bamboo Grove and Togetsukyo, eat early, then use the Randen corridor for compact Ryoan-ji and Kinkaku-ji visits.", ["Walk the grove before it becomes busiest", "Use the river cafe as the parent payoff", "Do not add another Arashiyama temple", "Give the rock garden one focused hour", "Use Kamishichiken only for optional tea or wagashi"], ["A bamboo sound or shadow", "Togetsukyo against the mountains", "The first Golden Pavilion reflection"], "Mai gets three distinct Kyoto landscapes without a Saturday Arashiyama crowd.", "Parents skip Ryoan-ji if useful and meet at Kinkaku-ji by taxi."),
      questDay("day09", "2026-10-31", "Palaces to Pontocho", "A compact central-Kyoto history, manga, market and neighborhood day.", ["Nijo Castle", "Kyoto Imperial Palace", "Kyoto International Manga Museum", "Nishiki Market", "Kamo River Kyoto", "Pontocho Alley"], "Enter Nijo at opening, make the Imperial Palace compact, use the Manga Museum as an optional split, lock Nishiki, then reset before Kamo River and Pontocho dinner.", ["Notice Nijo's nightingale floors", "Keep the palace visit to about an hour", "Use the Manga Museum or a parent rest window", "Bound Nishiki rather than starting a second food mission", "Take a real hotel reset before dinner"], ["A castle gate or painted-room detail", "An Imperial Palace roofline", "A manga-art surprise", "A riverbank dinner approach"], "Mai gets shogun history, imperial history, manga and food without crossing Kyoto again.", "Nijo is shared; parents may skip the palace or Manga Museum and rejoin later."),
      questDay("day10", "2026-11-01", "Sacred Mountain Hiei", "A full mountain day of forest paths, sacred precincts and views over Kyoto and Lake Biwa.", ["Demachiyanagi Station Kyoto", "Eizan Cable Hiei Station", "Enryaku-ji Temple", "Hieizan Sakamoto Station"], "Begin with a simple Demachiyanagi breakfast, use the assisted ascent and choose one meaningful Mt Hiei forest walk.", ["Confirm the seasonal cable car, ropeway and bus route", "Visit the core Enryaku-ji precinct without collecting every building", "Find one quiet forest section", "Pause for a Kyoto or Lake Biwa view", "Carry a bakery breakfast or trail snack", "Use Demachiyanagi for dinner only if returning down the Kyoto side"], ["A bell or incense sound in the forest", "A moss, cedar, or stone-path detail", "The first wide Lake Biwa or Kyoto view"], "Mai gets the mountain-and-nature Kyoto day she actively chose.", "Dad uses the most assisted route and may return earlier while Mai and Brian walk farther.")
    ]
  },
  hiroshima: {
    name: "Hiroshima",
    baseLabel: "Hotel Granvia Hiroshima",
    description: "Himeji's reveal, a focused peace day, and Miyajima's island payoff.",
    ongoing: [
      {
        title: "Westward Food Chapter",
        type: "side",
        items: ["Hiroshima-style okonomiyaki", "Oyster if appealing", "Regular and warm momiji manju", "Anago-meshi", "Spicy Hiroshima tsukemen", "Hiroshima streetcar and Miyajima ferry"]
      }
    ],
    days: [
      questDay("day11", "2026-11-02", "White Heron Westbound", "An optional no-delay To-ji dawn, white-castle reveal, then the first scored train-food ride west.", ["To-ji Temple", "Kyoto Station", "Himeji Station", "Himeji Castle", "Koko-en Garden", "Hiroshima Station", "Hotel Granvia Hiroshima"], "Use To-ji's free grounds only if luggage is handled and Himeji arrival remains before 09:00; otherwise begin at Kyoto Station and keep Himeji humane.", ["Skip To-ji unless everyone is voluntarily awake", "Forward or simplify large luggage", "Photograph the first full castle reveal", "Buy different regional ekiben", "Photograph each box closed and open", "Score all five Ekiben League categories"], ["To-ji's pagoda at dawn if earned", "A castle-defense detail", "A garden frame of the keep", "An ekiben package too beautiful to ignore"], "The westward chapter announces itself through a castle and train-food ritual.", "Skipping To-ji and using Himeji's exterior-and-garden version are both complete wins."),
      questDay("day12", "2026-11-03", "Memory Along the River", "Museum, remembrance, river, and the Dome at dusk without emotional clutter.", ["Hiroshima Peace Memorial Museum", "Hiroshima Peace Memorial Park", "Atomic Bomb Dome", "Hiroshima National Peace Memorial Hall"], "Move from the museum through the Cenotaph and memorial axis, then see the Atomic Bomb Dome at dusk.", ["Leave time for a quiet break", "Use the National Peace Memorial Hall if a quieter space helps", "Write one private sentence about what should be remembered", "Try momiji manju or a calm cafe instead of adding sightseeing"], ["The alignment through the Cenotaph", "A paper crane or peace message", "The river changing the mood of the park"], "The day feels thoughtful and humane, not consumed as an attraction.", "Shukkeien is optional; emotional room is the priority."),
      questDay("day13", "2026-11-04", "Torii at the Tide", "Torii, tide, deer, island food, forest, and dusk if the day allows.", ["Miyajimaguchi Station", "Itsukushima Shrine", "Miyajima Omotesando", "Daisho-in Temple", "Miyajima Ropeway"], "See Itsukushima Shrine and the torii at the day's tide, then let the island—not a completion list—be the payoff.", ["Ride the ferry", "Try anago-meshi", "Try a grilled oyster if appealing", "Compare warm and packaged momiji manju", "Choose Daisho-in or ropeway only by energy", "Stay for softer island atmosphere if practical"], ["Torii reflected or revealed by low tide", "A deer behaving like a local", "A forest, lantern, or sea detail away from the busiest street"], "Miyajima earns its place as the romantic westward payoff.", "Shrine, waterfront, food street, and cafe are a complete parent version.")
    ]
  },
  tokyo: {
    name: "Tokyo",
    baseLabel: "International House of Japan (placeholder)",
    description: "Tokyo bookends a three-night Kawaguchiko retreat: settle in after Hiroshima, escape to Fuji with small bags, then return for an easy final Tokyo chapter.",
    ongoing: [
      {
        title: "Our Tokyo Quest",
        type: "side",
        items: ["Find the cafe, bakery, konbini, or supermarket that becomes ours", "Return at least once", "Learn three station exits", "Remember one tiny Tokyo routine worth stealing for home"]
      },
      {
        title: "Tokyo Snack Dex",
        type: "side",
        items: ["Depachika food", "Onigiri", "Ramen", "Curry", "Sushi at two price levels", "Yakitori", "Teishoku", "Fuji trail snack", "Taiyaki or ningyo-yaki", "Kissaten toast", "Mystery snack chosen by packaging"]
      },
      {
        title: "Photo Set",
        type: "side",
        items: ["Mai in front of her Tokyo", "Us reflected in something", "One beautiful food photo", "One stupid food photo", "A quiet street", "Our station sign", "The final dinner or snack"]
      }
    ],
    days: [
      questDay("day14", "2026-11-05", "Ekiben Eastbound", "The long Shinkansen becomes the experience: browse, choose, reveal, share, score, then settle into Tokyo.", ["Hiroshima Station", "Tokyo Station", "International House of Japan"], "Turn Hiroshima-to-Tokyo into the main ekiben tasting and a calm move into the Tokyo neighborhood.", ["Arrive early enough to browse", "Choose different regional boxes", "Photograph closed packages and open trays", "Trade tastes after departure", "Score all five categories", "Learn the Tokyo hotel station exit, konbini, and easiest dinner"], ["An unexpected bento ingredient", "A beautiful wrapper or clever compartment", "A train-window scene worth pausing lunch for"], "Train food becomes one of the day's actual memories and Tokyo begins gently.", "No Tokyo sightseeing is required after arrival."),
      questDay("day15", "2026-11-06", "Ghibli or Not Ghibli", "Soft imaginative Tokyo.", ["International House of Japan", "Ghibli Museum Mitaka", "Inokashira Park", "Kichijoji Sunroad Shopping District"], "If tickets work, visit Ghibli Museum and walk back through Inokashira Park; otherwise make the park and Kichijoji the complete quest.", ["Walk by the pond", "Find a cafe that belongs in this day", "Browse one shotengai", "Choose a snack or object animated in spirit", "Check bakeries for a new melon-bread style"], ["A duck, bridge, or pond reflection", "A handmade-looking display", "A detail that rewards looking closely"], "Mai gets why Tokyo is not just skyscrapers.", "Keep the post-museum plan gentle. Wonder uses battery."),
      questDay("day16", "2026-11-07", "Tokyo Through Their Eyes", "Let people who live here show us their everyday Japan.", ["International House of Japan", "Chofu Station Tokyo", "Jindaiji Temple", "Jindai Botanical Gardens", "Friends Neighborhood Tokyo"], "Travel to Akko and Yoshi's home neighborhood, follow their lead through local spots, and let the dinner they choose be the capstone.", ["Ask them for one place they genuinely like", "Eat something they recommend without over-researching it", "Learn one neighborhood fact, memory, or routine from them", "Take a relaxed group photo", "Bring a small consumable thank-you gift", "Use Jindaiji or the botanical gardens only if the friends route them there"], ["A lived-in shopfront or local sign", "Steam rising from a recommended kitchen", "A tiny charm, statue, or hand-painted detail"], "Mai gets welcomed into a real corner of Japan.", "Keep it seated and social; let the friends choose the pace and dinner spot."),
      questDay("day17", "2026-11-08", "First Fuji Evening", "Tokyo intensity gives way to three quiet nights beside Lake Kawaguchiko.", ["Shinjuku Station", "Kawaguchiko Station", "Kawaguchiko Hotel"], "Send or store large luggage, travel with small bags, and arrive early enough to settle in and watch the light change on Fuji.", ["Confirm final Tokyo luggage handling", "Reserve the highway bus or Fuji Excursion", "Keep essential medication and layers in the small bag", "Confirm the private-bath plan", "Reach the hotel with dinner margin"], ["The first clear Fuji reveal", "Lake light from the room or shore", "A quiet arrival drink or meal"], "Mai gets a deliberate Fuji escape rather than another complicated transfer chapter.", "Arrival, the view and dinner are the complete parent day."),
      questDay("day18", "2026-11-09", "Pedal Around Fuji", "The first active day is an e-bike circuit around the lake, with Mount Tenjoyama as the short bad-cycling fallback.", ["Kawaguchiko Hotel", "Oishi Park", "Fuji Omuro Sengen Shrine", "Kawaguchi Asama Shrine", "Mt Fuji Panorama Ropeway"], "Complete the planned Kawaguchiko e-bike circuit—or a defined partial circuit if wind or energy says stop—and finish with one bikes-and-Fuji photograph.", ["Walk to the nearby reserved e-bike pickup; do not return to the station", "Check wind, rain and Fuji visibility", "Reach the north shore early", "Mark lunch, toilet and turnaround stops", "Use lights and helmets", "Use the Tenjoyama ropeway/ridge walk as the short non-bike fallback", "Save legs and trail food for tomorrow's summit"], ["Bikes framed beside the lake", "Fuji changing angle around the circuit", "A shrine, red leaves, or local snack stop"], "Mai gets a complete active Fuji day before the summit day.", "For Oishi Park, parents use a hotel-arranged taxi; the Red Line is the budget backup. Choose the ropeway, one museum or hotel time instead and reunite for dinner."),
      questDay("day19", "2026-11-10", "Mitsutoge Summit", "Mitsutoge is today's headline summit, using a prebooked taxi to the mountain-road trailhead and the same-way route after route-specific closure, road and weather checks.", ["Mitsutoge Trailhead", "Mount Mitsutoge", "Kawaguchiko Hotel", "Itchiku Kubota Art Museum", "Oishi Park"], "Reach the Mitsutoge summit marker safely, take the Fuji summit photograph, and return by the same route with daylight margin.", ["Prebook outbound and return taxis", "Confirm the chosen route is open", "Check wind, temperature and trail conditions", "Do not use the once-daily bus or substitute the longer station approach", "Carry layers, water and a proper trail meal", "Set a non-negotiable turnaround time", "Confirm tomorrow's reserved Tokyo return"], ["Mitsutoge summit marker with Fuji", "Rock, ridge, or trail detail", "The first seated post-hike meal"], "Mai gets an unmistakable summit objective after the bike day.", "Parents taxi to Itchiku Kubota Museum, optionally take the short Red Line hop to Oishi Park, then taxi back to the hotel."),
      questDay("day20", "2026-11-11", "Back to Tokyo Glow", "Return to Tokyo with a full buffer before the flight and an easy afternoon for laundry, shopping or anything missed.", ["Kawaguchiko Station", "Shinjuku Station", "International House of Japan"], "Take the reserved morning return, recover or receive the large bags, check in, and complete only the most useful Tokyo reset tasks.", ["Allow road-delay margin or use the Otsuki rail fallback", "Recover the large luggage", "Do laundry if still needed", "Buy only priority items", "Choose an easy neighborhood dinner"], ["The last Fuji glimpse", "Suitcases reunited", "A calm final-Tokyo dinner"], "Tokyo feels like a soft landing and finale, not another race.", "The transfer and hotel reset are a complete day."),
      questDay("day21", "2026-11-12", "Light, Melon Bread, Goodbye", "Immersive art, Mai's chosen bakery, final food and a fully packed suitcase.", ["International House of Japan", "teamLab Borderless Azabudai Hills", "Tokyo Melonpan", "Final Tokyo Dinner", "Tokyo Station"], "Visit teamLab at the booked time, make Mai's exact melon-bread shop a real stop, then finish with one celebratory meal and complete packing.", ["Find the teamLab room we most want to remember", "Take one abstract photo", "Confirm the exact bakery branch and stock", "Score the special melon bread in the passport", "Buy only the souvenirs still genuinely wanted", "Eat the final this-is-Tokyo meal", "Pack with airport margin", "Name the champion ekiben and melon bread"], ["A reflection that changes the room", "The first crackle of the special melon-bread crust", "One tiny goodbye photo"], "Mai chooses the sweet and emotional ending of the trip.", "Dad may skip teamLab and join the bakery/final meal; nothing else is required.")
    ]
  }
};

const dayGoals = {
  day02: {
    clearPath: "Recover at the hotel, then let one short neon-and-food walk be the whole first night.",
    mainGoal: "Share one hot snack under the lights at Ebisu Bridge or Dotonbori.",
    photoHint: "Neon, canal reflection, or the snack in hand."
  },
  day03: {
    clearPath: "Castle near opening → Nippombashi lunch → Den Den → Shinsekai kushikatsu at blue hour.",
    mainGoal: "Finish under Shinsekai's retro signs with kushikatsu shared.",
    photoHint: "Tsutenkaku, kushikatsu plate, or the castle across the moat."
  },
  day04: {
    clearPath: "Four Kuromon scores by 11:30, one food-hall stop, hotel reset, two-stop Tenma finish.",
    mainGoal: "Complete the Snack League scorecard and photograph the winning Tenma bite.",
    photoHint: "Scorecard, Kuromon bite, or the Tenma dish worth reordering."
  },
  day05: {
    clearPath: "Ropeway up Nunobiki, garden pause, optional sweet or Kobe dinner, return to Osaka.",
    mainGoal: "Catch the best ropeway or garden view over Kobe and the harbor.",
    photoHint: "Ropeway window, harbor panorama, or garden terrace."
  },
  day06: {
    clearPath: "Deer and Todai-ji as the Nara bridge, then Kyoto check-in without luggage chaos.",
    mainGoal: "Stand inside Todai-ji's Great Buddha Hall together.",
    photoHint: "The Buddha hall interior, a deer moment, or old Naramachi lane."
  },
  day07: {
    clearPath: "Early Inari climb → compact Tofuku-ji → Kiyomizu reunion → old streets → Gion finish.",
    mainGoal: "Share the Kiyomizu panorama after Mai and Brian complete the Inari-to-Tofuku morning.",
    photoHint: "Torii tunnel, Kyoto view from Inari, Kiyomizu panorama, or sloping street."
  },
  day08: {
    clearPath: "Bamboo early → Togetsukyo cafe → early lunch → Ryoan-ji → Kinkaku-ji.",
    mainGoal: "End the west/northwest sweep with the Golden Pavilion reveal.",
    photoHint: "Bamboo path, Togetsukyo with mountains, rock garden, or Golden Pavilion reflection."
  },
  day09: {
    clearPath: "Nijo opening → Imperial Palace → optional Manga Museum → Nishiki → reset → Pontocho.",
    mainGoal: "Finish the shared Nijo day with a rested Pontocho neighborhood dinner.",
    photoHint: "Nijo gate/rooms, Imperial roofline, manga art, Nishiki display, or Kamo River."
  },
  day10: {
    clearPath: "Demachiyanagi breakfast, assisted ascent, Enryaku-ji core, one forest walk, comforting dinner after.",
    mainGoal: "Photograph the first wide Kyoto or Lake Biwa view from Mt Hiei.",
    photoHint: "Summit viewpoint, forest path, or Enryaku-ji bell/incense moment."
  },
  day11: {
    clearPath: "Himeji reveal, garden or rest, scored ekiben ride, Hiroshima check-in.",
    mainGoal: "Photograph Himeji's white keep in full and crown Round One of the Ekiben League.",
    photoHint: "Castle reveal, Koko-en frame, or open ekiben on the train."
  },
  day12: {
    clearPath: "Museum first, quiet break, memorial axis, Dome at dusk—no extra sightseeing.",
    mainGoal: "See the Atomic Bomb Dome as daylight softens and photograph the memorial axis.",
    photoHint: "Dome at dusk, Cenotaph alignment, or paper cranes."
  },
  day13: {
    clearPath: "Shrine at the tide, island food street, optional forest/ropeway, ferry back unhurried.",
    mainGoal: "Frame the floating torii with water and sky at today's tide.",
    photoHint: "Torii with tide, anago-meshi, or island waterfront."
  },
  day14: {
    clearPath: "Ekiben browse, score, and ride east—then learn the Tokyo hotel neighborhood.",
    mainGoal: "Photograph the winning Main Ekiben League box open on the Shinkansen.",
    photoHint: "Open ekiben trays, beautiful wrapper, or train-window lunch."
  },
  day15: {
    clearPath: "Ghibli timed entry if booked, Inokashira walk, gentle Kichijoji finish.",
    mainGoal: "Capture one pond, museum, or street detail that feels like a Ghibli frame.",
    photoHint: "Pond reflection, museum detail, or handmade shop display."
  },
  day16: {
    clearPath: "Let Akko/Yoshi lead the neighborhood; dinner they choose is the capstone.",
    mainGoal: "Take the group photo at the friends' chosen dinner table.",
    photoHint: "Group at dinner, a local shopfront they showed you, or the recommended dish."
  },
  day17: {
    clearPath: "Small bags only: Tokyo to Kawaguchiko—check in, watch the lake, eat, rest.",
    mainGoal: "Photograph the first Fuji reveal from the hotel or lakeshore.",
    photoHint: "Small overnight bags beside a train/bus window, with the first Fuji silhouette beyond."
  },
  day18: {
    clearPath: "E-bike circuit around Kawaguchiko; use the agreed partial loop or Mount Tenjoyama only if cycling conditions push back.",
    mainGoal: "Complete the planned bike circuit—or its agreed partial loop—and take one bikes-and-Fuji finish photo.",
    photoHint: "Two parked bikes in the foreground, lake across the middle, Fuji or autumn hills behind."
  },
  day19: {
    clearPath: "Mitsutoge trailhead → summit marker → same-way return, with an official open-trail check and fixed turnaround time.",
    mainGoal: "Reach the Mitsutoge summit marker safely, take the Fuji summit photograph, and return the same way with daylight margin.",
    photoHint: "Mitsutoge summit marker in the foreground with Fuji beyond."
  },
  day20: {
    clearPath: "Reserved morning return, final Tokyo check-in, luggage recovery, laundry or priority shopping.",
    mainGoal: "Finish the Tokyo reset and share one easy neighborhood dinner.",
    photoHint: "Small Fuji-trip bags meeting the large suitcases in the final Tokyo hotel room."
  },
  day21: {
    clearPath: "teamLab, Mai's melon-bread shop, final meal, suitcase fully packed.",
    mainGoal: "Score Mai's special melon bread and photograph the first bite.",
    photoHint: "Melon bread cross-section, teamLab room, or final celebratory meal."
  }
};

Object.values(tripData).forEach((city) => {
  city.days.forEach((day) => {
    const goals = dayGoals[day.id];
    if (!goals) return;
    day.clearPath = goals.clearPath;
    day.mainGoal = goals.mainGoal;
    if (goals.photoHint) day.mainGoalPhotoHint = goals.photoHint;
  });
});

function dayClearPath(day) {
  return day.clearPath || day.groups.find((group) => group[1] === "main")?.[2]?.[0] || day.theme;
}

function dayMainGoal(day) {
  return day.mainGoal || dayClearPath(day);
}

const awards = ["Best Japan day", "Best snack", "Best meal", "Cutest thing Mai found", "Best unplanned moment", 'Best "we live here now" moment', "Funniest small failure", "Place that felt most like ours", "The discovery we completed by accident", "One sentence we should remember"];

const hiddenDayGroupTypes = new Set(["mai", "soft"]);
const sharedDayGroupTypes = new Set(["side", "egg"]);

const legacyDayContext = {
  day02: {
    summary: "Arrival day is intentionally tiny: land at KIX, get to Osaka, recover, and let Namba or Dotonbori be the first low-pressure taste of Japan.",
    history: "Osaka grew as Japan's merchant kitchen, and Dotonbori became famous as an entertainment and food district during the early modern period. The huge signs and food culture are not random spectacle; they come from a city long associated with eating well and doing business loudly."
  },
  day03: {
    summary: "The maximum-pop Osaka day moves from the castle reveal through Den Den Town and into Shinsekai's retro-food glow.",
    history: "Osaka Castle represents the city's era of national political power. Shinsekai was designed in the early 1900s as a modern entertainment district, while Den Den Town reflects postwar electronics culture that later grew into games, anime, and hobby shopping."
  },
  day04: {
    summary: "Mai-centered snack mission, then Tenma izakaya dinner as the food capstone.",
    history: "Kuromon Ichiba began as a wholesale fish market in the early 1900s and later became a public market street. Tenma grew around Osaka Tenmangu Shrine and its long shopping arcade, making it a strong lived-in dinner neighborhood."
  },
  day05: {
    summary: "Kobe Nunobiki remains the selected romantic soft outing: ropeway, gardens, views, café and optional dinner.",
    history: "Nunobiki Herb Garden sits above Kobe with ropeway views over city and harbor. The outing works because it is one contained scenic chapter, not a full Kobe checklist."
  },
  day06: {
    summary: "Nara bridges Osaka and Kyoto: deer open the day, Todai-ji supplies the emotional scale, and luggage never becomes the main character.",
    history: "Nara became Japan's first lasting imperial capital in 710. Todai-ji's Great Buddha was cast in the 8th century as a unifying act of protection during political anxiety."
  },
  day07: {
    summary: "An early Mt Inari climb and afternoon Nijo visit share one energetic day, with a deliberate reset between them and a soft river-food ending.",
    history: "Fushimi Inari is the head shrine of thousands of Inari shrines across Japan. Nijo Castle was built for the Tokugawa shoguns as political theater as much as residence."
  },
  day08: {
    summary: "The protected old-Kyoto day begins uphill at Kiyomizu, descends through historic slopes, and lets lantern-lit Yasaka/Gion provide the ending.",
    history: "Kiyomizu-dera became one of Kyoto's iconic pilgrimage sites. Gion grew beside Yasaka Shrine into an entertainment quarter that remains a living neighborhood."
  },
  day09: {
    summary: "Arashiyama is about one beautiful reveal and a shared return to the river—not collecting bamboo, gardens, temples, and bridge as separate obligations.",
    history: "Arashiyama became a Heian-period retreat for poetry and seasonal beauty. Togetsukyo—the Moon Crossing Bridge—names an emperor's poetic impression of the moon moving across the span."
  },
  day10: {
    summary: "Mt Hiei receives a full day: assisted ascent, Enryaku-ji's forested precincts, one meaningful walk, and views toward Kyoto or Lake Biwa.",
    history: "Saicho founded Enryaku-ji on Mt Hiei in the late 8th century, making the mountain the center of Tendai Buddhism in Japan."
  },
  day11: {
    summary: "Tokyo starts gently: learn the hotel neighborhood, find food systems, and make the city usable before making it impressive.",
    history: "Tokyo grew from Edo, the Tokugawa shogunate's seat of power, into one of the world's largest modern cities. A neighborhood-first day helps reveal that Tokyo is not one center but a network of local daily-life hubs."
  },
  day12: {
    summary: "Kawagoe gives the quaint Little Edo chapter: warehouse streets, bell tower, candy alley, and sweet potato snacks.",
    history: "Kawagoe prospered as a castle and merchant town connected to Edo. Its clay-walled kurazukuri warehouses reflect fire-conscious Edo-period urban design, giving the town its preserved old-merchant look."
  },
  day13: {
    summary: "Ghibli/Kichijoji day is soft imaginative Tokyo: museum if tickets work, park, cafes, and neighborhood wandering.",
    history: "Kichijoji developed into a beloved west-Tokyo neighborhood around transit, shopping streets, and Inokashira Park. The Ghibli Museum fits that local creative atmosphere rather than feeling like a generic tourist monument."
  },
  day14: {
    summary: "The long train is the experience: browse Hiroshima's ekiben, reveal and score them after departure, then arrive in Tokyo as temporary neighborhood residents rather than sightseers.",
    history: "Japan's station boxed meals turned travel into a way of tasting place. Arriving by Shinkansen compresses landscapes once measured in days of walking into a single seated chapter."
  },
  day15: {
    summary: "Ghibli is the scarce-ticket anchor, but Inokashira Park and Kichijoji make the day feel like a neighborhood story rather than a museum extraction.",
    history: "Inokashira Pond supplied water to Edo and later became one of Tokyo's early suburban parks. The Ghibli Museum was designed around curiosity and discovery without a checklist."
  },
  day16: {
    summary: "Akko and Yoshi show their home neighborhood; the dinner they choose is the most authentic Tokyo capstone of the trip.",
    history: "Tokyo's residential neighborhoods reveal everyday Japan through stations, shotengai, temples, parks, and favorite restaurants. If the friends are near Chofu, Jindaiji's wooded temple lanes and soba tradition make a strong optional anchor."
  },
  day17: {
    summary: "Everyone leaves Tokyo with small bags for three nights beside Lake Kawaguchiko, turning Fuji into a deliberate retreat.",
    history: "Lake Kawaguchiko became one of the most accessible Fuji Five Lakes retreats, combining lakeshore views, hot-spring stays and routes back to Tokyo."
  },
  day18: {
    summary: "The first active day is an e-bike circuit around Kawaguchiko, with Mount Tenjoyama as the compact fallback and Mitsutoge protected for tomorrow.",
    history: "Kawaguchiko's circuit is just under 20 kilometers and changes the angle on Fuji throughout the ride, linking shoreline parks, shrines and rest stops."
  }
};

const dayContext = {
  day02: {
    summary: "Arrival day stays deliberately small: land at KIX, reach Namba, rest for real, then let one neon-and-food walk be the first chapter of Japan. The goal is not to 'see Osaka' but to recover cleanly—shower, unpack essentials, and cross Ebisu Bridge only if the body agrees. Stop while Dotonbori still feels magical; tomorrow's castle day matters more than squeezing in another district tonight.",
    timeline: [["Afternoon", "Land at KIX, clear the airport, and travel directly to the Osaka hotel."], ["17:00–19:00", "Check in, shower, unpack only what is needed, and rest."], ["19:00–21:00", "If energy agrees, cross Ebisu Bridge, share one hot Osaka snack, and find the nearest useful konbini."], ["By 21:30", "Return while the lights still feel magical; tomorrow matters more than squeezing in another stop."]],
    history: [
      "Osaka became Japan's great merchant city because water routes and warehouses connected the country's rice, goods, and money here. The phrase often translated as “the nation's kitchen” originally described this commercial role before it became shorthand for Osaka's appetite.",
      "Dotonbori began as a 17th-century canal project and grew into a theater district. Restaurants followed the crowds, and the extravagant signs outside are descendants of that competitive entertainment culture: Osaka announcing, loudly and cheerfully, that pleasure is serious business.",
      "For a first night after a long flight, that history matters less than the feeling: neon over water, steam from a grill, and the sense that Japan has arrived without demanding a heroic schedule. The canal was built for commerce; tonight it works as a gentle threshold."
    ]
  },
  day03: {
    summary: "Castle, character culture and retro food give Osaka one intentionally big day—monumental history in the morning, Den Den browsing in the afternoon, Shinsekai kushikatsu at blue hour. Do not add a fourth district; the arc works because each stop has a different emotional register. Parents can skip the castle interior or shorten Den Den and still meet at Shinsekai for the shared evening finish.",
    timeline: [["08:30–11:30", "Reach Osaka Castle near opening; enjoy the reveal and choose the interior by interest."], ["11:30–13:00", "Travel south and sit for a substantial Nippombashi lunch."], ["13:00–16:00", "Browse a defined Den Den Town segment."], ["16:00–19:30", "Continue to Shinsekai for blue-hour signs and kushikatsu; add no fourth district."]],
    history: [
      "Toyotomi Hideyoshi began Osaka Castle in 1583 as the center of his effort to unify Japan. The current keep is a reconstruction and museum, but its moat and walls still establish Osaka's monumental scale.",
      "Shinsekai was unveiled in 1912 as a vision of the new world, with Tsutenkaku tower as its symbol. Den Den Town tells a later popular-culture story, shifting from postwar electronics into games, anime and collector culture.",
      "Put together, the day moves through three different Osaka moods: political power, hobby obsession, and retro street theatre. None of them require completion—only enough time to feel the shift from castle gravity to arcade colour to kushikatsu warmth."
    ]
  },
  day04: {
    summary: "The Osaka Snack League turns Kuromon, Shinsaibashi and Amerikamura into a bounded five-taste quest before a protected Tenma dinner. Four Kuromon categories by 11:30, one depachika checkpoint, one Amerikamura wildcard, then a real hotel reset before izakaya—not more grazing. The scorecard and hard exits turn market abundance into a game Mai can actually win without ruining appetite for dinner.",
    timeline: [["10:00–11:30", "At Kuromon, share and score exactly four categories: raw/seafood, hot/grilled, savory non-seafood and fruit/sweet. Hard exit at 11:30."], ["12:00–14:30", "Use Daimaru Shinsaibashi for one controlled food-hall checkpoint and seating; continue to Amerikamura for one wildcard only."], ["15:00–17:00", "Return to the Namba hotel for a real reset and stop eating."], ["17:30–21:00", "Go to Tenma: one izakaya for shared plates, then at most one specialist negiyaki, ramen, gyoza or dessert finish."]],
    history: [
      "Kuromon Ichiba began as a wholesale fish market and became one of Osaka's most famous public market streets. Merchants built reputations on freshness, knife work, and the theatre of preparation behind glass counters.",
      "Tenma grew around Osaka Tenmangu Shrine and its long shopping arcade. Markets, neighborhood restaurants and compact bars make it a strong lived-in dinner district without needing Dotonbori energy.",
      "The Snack League turns that merchant culture into a game: categories, shared bites, photographed receipts, and a hard exit before the body rebels. Tenma then answers a different Osaka instinct—sitting down, sharing plates, and letting the day become conversation rather than consumption."
    ]
  },
  day05: {
    summary: "Kobe Nunobiki remains the selected romantic outing, with the ropeway and gardens doing the work instead of a wider Kobe checklist. Budget roughly 60–75 minutes each way from Osaka, ride up once, pause at a terrace, and return without adding harbor districts or shopping streets. Parents can take the same ropeway/view/café version or stay in Osaka entirely—Kobe dinner is optional, not required.",
    timeline: [["Sleep-in morning", "Leave Osaka/Umeda when ready; budget roughly 60-75 minutes each way toward Shin-Kobe."], ["Late morning–15:30", "Ride the ropeway, explore a chosen garden segment and take a café/terrace pause."], ["15:30–18:00", "Descend and choose a Kobe sweet or optional dinner according to appetite."], ["Evening", "Return to Osaka without adding another Kobe district."]],
    slowTimeline: [["10:00–11:30", "Sleep in, eat near the Osaka hotel and leave only when everyone feels ready."], ["Late morning", "Travel to Shin-Kobe and ride the ropeway both ways; the view is the main event."], ["Midday–15:00", "Use one terrace or café and only the shortest comfortable garden section."], ["Afternoon", "Return directly to Osaka for a proper hotel rest."], ["Evening", "Eat close to the hotel; Kobe dinner is unnecessary."]],
    history: [
      "The Nunobiki slopes rise immediately behind Shin-Kobe, making mountain scenery unusually close to the city and port. For centuries the ridge was admired in poetry and travel writing as a sudden vertical escape from harbour commerce.",
      "The modern ropeway and herb gardens turn that steep terrain into an assisted scenic outing with broad views over Kobe and Osaka Bay. Kobe itself grew as one of Japan's first treaty ports, mixing foreign architecture, hillside neighbourhoods and harbour light.",
      "Choosing Nunobiki is a deliberate refusal of the wider Kobe checklist—no Chinatown circuit, no harbour cruise, no fashion district. The story of the day is proximity: city, ropeway, garden terrace, and optional sweet or dinner before returning to Osaka's familiar hotel."
    ]
  },
  day06: {
    summary: "Nara becomes the bridge from Osaka to Kyoto: deer open the day, Todai-ji supplies the emotional scale, and luggage never becomes the main character. Travel with day bags only, keep deer encounters playful but brief, and treat entering the Great Buddha Hall as the capstone—not a full Nara checklist. To-ji at dawn on Day 11 is the earned early-arrival bonus; today ends at Kyoto Station or the hotel.",
    timeline: [["08:00–09:00", "Check out and send or store luggage; travel toward Kintetsu Nara."], ["10:00–12:30", "Walk or taxi through Nara Park toward Todai-ji, keeping deer encounters playful but brief."], ["12:30–15:00", "Eat kakinoha-zushi or mochi, then choose a short Naramachi or cafe pause."], ["15:00–18:00", "Continue to Kyoto. Attempt To-ji only if everyone is luggage-free by about 15:45; otherwise check in and eat near the hotel."]],
    history: [
      "Nara became Japan's first lasting imperial capital in 710, when the court laid out Heijo-kyo using continental models. Buddhism was not merely private faith: temples, ritual, scholarship, and state power were woven together in the project of governing the country.",
      "Todai-ji's Great Buddha was cast in the 8th century during epidemics, crop failures, and political anxiety. Emperor Shomu imagined the colossal bronze image as a unifying act of protection. The present hall is smaller than its medieval predecessor, which makes the surviving scale even more startling.",
      "The deer roaming Nara Park are not props—they belong to a landscape where sacred precincts, open grass, and animal life have coexisted for centuries. Naramachi's merchant lanes then carry the day toward Kyoto: old shopfronts, sweets, and the quieter scale of a town that once ruled Japan."
    ]
  },
  day07: {
    summary: "The maximum-coverage southeast day climbs Mt Inari, samples one Tofuku-ji section, then meets the parents for Kiyomizu and the old streets down to Gion. Hard pace checks at Yotsutsuji (07:20) and Tofuku-ji exit (09:50) protect the 10:30 reunion; everything after 16:00 in Gion is evening bonus, not schedule debt. Parents skip Inari and Tofuku-ji, taxi toward Kiyomizu, and use a café base while the couple does the morning climb.",
    timeline: [["05:45–06:15", "Wake, take a packed breakfast and leave promptly. Be at Fushimi Inari's main approach by 06:15; breakfast happens after the climb, not before it."], ["06:15–07:20", "Climb through the torii toward Yotsutsuji. Pace check: if Yotsutsuji is not reached by 07:20, turn around wherever you are—do not chase the summit."], ["07:20–08:15", "Descend and leave the shrine area. Use the train or a short taxi to Tofuku-ji and eat the portable breakfast in transit or before entry."], ["08:50–09:50", "Be at Tofuku-ji for its 09:00 opening. Choose the garden or Tsutenkyo area, not both; leave by 09:50 even if the visit began late."], ["09:50–10:30", "Transfer toward Kiyomizu and message the parents with the exact meeting point. If you missed the 09:50 exit, take a taxi and protect the 10:30 reunion."], ["10:30–11:50", "Visit Kiyomizu together. The panorama, main hall and Otowa waterfall are the complete visit; begin descending before noon."], ["11:50–14:30", "Walk Sannenzaka and Ninenzaka with one bounded lunch or cafe stop. Pace check: be below the steepest slopes by 14:30."], ["14:30–16:00", "Continue to Yasaka and Gion. The required sightseeing day ends here; anything after 16:00 is an evening bonus, not schedule debt."]],
    evening: { rank: "Most open Kyoto evening", window: "From about 16:00", bestUse: "Stay in Yasaka/Gion for lantern atmosphere, dinner, Shirakawa or a gentle walk toward the Kamo River.", canMove: "Yasaka Shrine, Gion lanes and the architecture of Sannenzaka/Ninenzaka still work after shops close. Fushimi Inari's lower torii can also be atmospheric after dark, but it should not replace this morning's climb.", keepDaylight: "Do not defer Tofuku-ji or Kiyomizu-dera; their interiors, gardens and views require the daytime opening window." },
    history: [
      "Fushimi Inari is the head shrine of thousands of Inari shrines across Japan. Donated torii record hopes, gratitude, and commercial prosperity; foxes serve as Inari's messengers rather than the deity itself.",
      "Tofuku-ji was founded in the 13th century and later became a major Zen complex. Its name deliberately echoes Nara's Todai-ji and Kofuku-ji, claiming continuity with older capital authority while pursuing a different Buddhist path.",
      "Kiyomizu-dera grew around a sacred spring dedicated to Kannon, and the wooden stage projecting from the hillside turns approach into part of the religious experience. Below it, Sannenzaka and Ninenzaka preserve the pilgrimage-and-shopfront scale that made old Kyoto legible on foot, while Yasaka and Gion grew beside the shrine as a living entertainment quarter—not a museum street."
    ]
  },
  day08: {
    summary: "Friday moves from Arashiyama's bamboo and river through Ryoan-ji's rock garden to Kinkaku-ji's Golden Pavilion without adding another Arashiyama temple. Reach the grove by 07:45, treat Togetsukyo and the riverside café as the morning payoff, then use Randen or taxis for compact western temples. Parents may skip Ryoan-ji and meet at Kinkaku-ji; Kamishichiken tea is optional atmosphere, not a third major stop.",
    timeline: [["07:00–07:45", "Leave the hotel with breakfast handled and reach the Bamboo Grove entrance by 07:45. Do not add a temple before the grove."], ["07:45–08:40", "Walk one clear Bamboo Grove route and continue toward the river. Pace check: if still in the grove at 08:40, take the shortest exit toward Togetsukyo."], ["08:40–10:15", "See Togetsukyo, meet the parents and take the shared riverside cafe pause. The bridge and cafe—not more Arashiyama sights—are the morning payoff."], ["10:15–11:20", "Eat an early lunch close to the Randen route. Hard departure from Arashiyama by 11:20."], ["11:20–12:30", "Use Randen toward Ryoan-ji, allowing transfer and walking margin. A taxi for the final western legs is the recovery tool if trains or lunch run late."], ["12:30–13:20", "Give Ryoan-ji 40–50 focused minutes. The temple's own guidance estimates about 30–40 minutes; leave by 13:20."], ["13:20–14:10", "Transfer to Kinkaku-ji, preferably by taxi if the bus wait is poor. Pace check: target the gate by 14:10 and treat 15:30 as the latest comfortable arrival."], ["14:10–15:30", "Complete Kinkaku-ji's one-way garden route. Afterward, Kamishichiken tea or dinner is optional; otherwise return and rest."]],
    evening: { rank: "Second-most open Kyoto evening", window: "Usually from about 16:30–17:30", bestUse: "Use Kamishichiken only if a specific tea, wagashi or dinner place is open; otherwise return to central Kyoto for an easy meal.", canMove: "A short Kamishichiken neighborhood walk or dinner can happen in the evening. It is an atmosphere add-on, not a substitute for the day's temples.", keepDaylight: "Keep the Bamboo Grove, Togetsukyo, Ryoan-ji and Kinkaku-ji in daylight. Ryoan-ji and Kinkaku-ji close at 17:00, and the river/mountain scenery loses much of its payoff after dark." },
    history: [
      "Arashiyama became a Heian-period retreat for poetry and seasonal beauty. Aristocrats travelled from the capital to compose verses, admire blossoms and autumn leaves, and borrow mountain scenery into designed gardens and villas.",
      "Togetsukyo—the Moon Crossing Bridge—names an emperor's poetic impression of the moon moving across the span. The bamboo grove is only one scene in a much larger landscape of river, working woodland, gardens, and ritual routes.",
      "Ryoan-ji's dry garden reduces landscape to stone, gravel and interpretation; the temple offers no official solution, so sustained looking becomes the ritual. Kinkaku-ji's reflective pavilion began as shogun Ashikaga Yoshimitsu's retirement villa before becoming a Zen temple—gold, pond and borrowed mountain scenery expressing power and an imagined Pure Land rather than austerity."
    ]
  },
  day09: {
    summary: "Central Kyoto links Nijo, the Imperial Palace, optional manga culture, Nishiki and a rested Pontocho dinner in one north-to-south sequence. Enter Nijo at opening, keep the palace to about an hour, and treat the 16:00–17:45 hotel reset as part of the plan—not unused sightseeing time. The Manga Museum is an optional split; parents may skip palace or museum and rejoin for Nishiki or the Kamo River approach to dinner.",
    timeline: [["08:25–08:45", "Arrive at Nijo before opening with tickets decided. Enter at 08:45; do not begin the day with breakfast or shopping nearby."], ["08:45–10:35", "See Ninomaru Palace, the nightingale corridors and a bounded garden loop. Hard exit by 10:35–10:45."], ["10:45–11:15", "Travel to the Kyoto Imperial Palace and enter through the current public gate after security. Message Dad's chosen rest/rejoin point."], ["11:15–12:15", "Make the palace a one-hour visit. Its October last admission is 15:20, but using that theoretical margin would break Nishiki and the reset."], ["12:15–13:10", "Take a seated lunch near Karasuma Oike. At 12:45 make the decision: Manga Museum only if everyone is on pace and interested."], ["13:10–14:25", "Optional Manga Museum visit or parent/couple rest split. If arrival would be after 13:30, shorten it to one exhibition plus the Manga Wall or skip it."], ["14:35–15:50", "Walk Nishiki in one direction with a short tasting list. Leave by 15:50 before more stalls begin winding down."], ["16:00–17:45", "Return to the hotel for a real reset. This protected break is part of the plan, not unused sightseeing time."], ["17:45–20:30", "Approach by the central Kamo River, then have the planned Pontocho/Kiyamachi dinner. Reserve dinner if a particular restaurant matters."]],
    evening: { rank: "Best structured evening, but already allocated", window: "17:45 onward after the hotel reset", bestUse: "Kamo River, Pontocho and Kiyamachi are exactly the right evening material and remain fully appreciated after dark.", canMove: "The river walk and Pontocho neighborhood experience belong in the evening. They can absorb extra time without threatening an opening hour.", keepDaylight: "Do not push Nijo, the Imperial Palace, Manga Museum or Nishiki into evening. The Palace closes at 16:00 in October–February, the museum at 17:00, and Nishiki is not a reliable night market." },
    history: [
      "Nijo Castle turned Tokugawa architecture into political theatre. The decorated Ninomaru rooms staged hierarchy through painted screens and famously squeaking nightingale floors that warned residents of movement; in 1867 the castle also hosted the announcement returning governing authority to the emperor.",
      "The Kyoto Imperial Palace compound preserves the logic of the court city that preceded modern Tokyo—gates, ceremonial halls, and controlled spaces rebuilt across centuries. Nearby Nishiki Market developed around reliable cold groundwater that helped merchants preserve fish and produce, earning the nickname Kyoto's Kitchen.",
      "Pontocho and the Kamo River connect that historic centre to contemporary Kyoto life: narrow entertainment lanes, riverbank walks, and evening lanterns that belong after dark. Optional manga culture at the International Manga Museum adds a 20th-century layer—comics preserved and read in a converted schoolhouse rather than collected as merchandise."
    ]
  },
  day10: {
    summary: "Mt Hiei receives a full day: assisted ascent, Enryaku-ji's forested precincts, one meaningful walk, and views toward Kyoto or Lake Biwa. Confirm live cable, ropeway and descent times at Demachiyanagi before boarding; the 15:15–16:00 regroup is the hard turnaround even if the forest walk feels unfinished. Pack for Himeji/Hiroshima tonight—do not borrow sleep from tomorrow's westbound transfer.",
    timeline: [["07:15–07:50", "Reach Demachiyanagi, buy breakfast and confirm the day's live cable, ropeway, shuttle and descent times before boarding. Carry food rather than waiting for a long cafe meal."], ["07:50–09:30", "Take the Eizan/Yase assisted approach selected during the final timetable check. Pace check: if the ascent is disrupted, switch immediately to the confirmed Sakamoto-side or direct-bus fallback."], ["09:30–12:15", "Reach the Enryaku-ji core and focus on Todo: Konpon Chudo, one or two nearby halls, forest atmosphere and a seated pause."], ["12:15–13:00", "Eat the carried lunch or the simplest available mountain meal. At 12:45 choose the afternoon walk using weather, legs and last-service times."], ["13:00–15:15", "Mai and Brian take one preselected forest/viewpoint route; Dad uses the assisted core. Do not improvise a second precinct or an unplanned long trail."], ["15:15–16:00", "Regroup at the designated descent transport point. This is the hard turnaround window even if the walk feels unfinished."], ["16:00–18:30", "Descend with at least one-service margin and take the simplest route to the hotel. If returning via Demachiyanagi, dinner there is optional."], ["By 20:30", "Finish dinner, pack for Himeji/Hiroshima and set out the morning bags. Do not borrow sleep from the westbound transfer."]],
    evening: { rank: "Least dependable Kyoto evening", window: "Only after the actual descent, likely 18:00 or later", bestUse: "A comforting dinner near the hotel—or Demachiyanagi only if the route naturally returns there—followed by packing.", canMove: "No required Day 10 attraction should move into the evening. Dinner is the only flexible neighborhood element.", keepDaylight: "Enryaku-ji, forest paths, viewpoints and mountain transport all require daylight and last-service margin. Treat any unexpectedly early return as recovery time before Day 11." },
    slowTimeline: [["08:30–10:30", "Take the most assisted confirmed ascent after a calm breakfast; avoid an early multi-transfer race."], ["10:30–12:30", "Visit the Todo core only, with Konpon Chudo as the essential temple experience and seated pauses."], ["12:30–14:00", "Eat a proper lunch and use the nearest viewpoint rather than adding a forest route."], ["14:00–16:30", "Begin the assisted descent with generous last-service margin."], ["Evening", "Return to Kyoto early for rest, packing and a comforting dinner."]],
    history: [
      "Saicho founded Enryaku-ji on Mt Hiei in the late 8th century, and the mountain became the center of Tendai Buddhism in Japan. Its scattered precincts trained monks who later shaped several other schools, so the forested mountain geography is part of the institution's meaning—not one building but a religious landscape.",
      "The mountain's position between Kyoto and Lake Biwa made it both a sacred barrier and a strategic vantage. Emperors and warriors treated control of Hiei as control of the capital's spiritual flank.",
      "Modern visitors experience that geography through assisted ascents, cedar corridors, bell sounds, and views that open suddenly toward either the basin of Kyoto or the wider water of Biwa. The day works when treated as mountain time: breakfast carried, one forest walk chosen, and descent planned around last cable or bus service rather than sunset ambition."
    ]
  },
  day11: {
    summary: "The westward chapter opens with an optional no-delay To-ji dawn and Himeji's white keep, then reaches Hiroshima without turning the transfer into an endurance test. To-ji is thirty free minutes only if bags are handled and Himeji arrival stays before opening; otherwise leave directly from Kyoto Station. Choose castle interior or exterior focus, allow Koko-en or lunch margin, collect ekiben, and eat okonomiyaki in Hiroshima only if energy remains.",
    timeline: [["06:15", "Default wake-up. Himeji is the priority; do not make the group wake at 05:00 for optional To-ji."], ["07:00–09:00", "Leave for Kyoto Station and take the selected westbound train that reaches Himeji around opening. Use To-ji's free grounds only if someone wakes voluntarily and it cannot delay this train."], ["09:00–12:30", "Approach Himeji Castle and choose the full interior or exterior-focused route."], ["12:30–15:00", "Visit Koko-en or rest over lunch, then collect an ekiben."], ["15:00–18:00", "Continue to Hiroshima, check in, and eat okonomiyaki only if energy remains."]],
    history: [
      "Himeji is called the White Heron Castle because its pale plastered walls seem to lift above the city. The surviving complex took shape under Ikeda Terumasa in the early 1600s, when the new Tokugawa order used castles both as fortresses and declarations of political control.",
      "Its beauty disguises defensive intelligence: confusing approaches, narrow gates, firing positions, and steep interiors were meant to slow attackers. The castle survived war, demolition pressures, and natural disasters, making today's reveal unusually close to encountering an original feudal complex.",
      "Koko-en beside the moat reframes the keep from below—Edo-style garden rooms built on samurai residence sites. Optional To-ji at dawn adds a free Kyoto pagoda silhouette only if the transfer rhythm stays humane. The day's larger story is departure: Kyoto's temple city giving way to the white keep, then ekiben culture and the long slide west toward Hiroshima."
    ]
  },
  day12: {
    summary: "Hiroshima receives a full, emotionally uncluttered day: museum first, quiet space afterward, then the memorial axis and Dome as daylight softens. Leave real margin between the museum and the park walk—emotional room is the priority, not adding Shukkeien or extra sights. The Dome at dusk closes the sequence; okonomiyaki dinner should feel calm, not like another checklist item.",
    timeline: [["08:30–11:30", "Visit the Peace Memorial Museum while attention and emotional energy are strongest."], ["11:30–13:30", "Take a real quiet break and a gentle lunch; do not rush directly into another attraction."], ["13:30–17:00", "Move through the Memorial Hall, Cenotaph, park, river, and Atomic Bomb Dome."], ["17:00 onward", "Let dusk close the memorial sequence, then choose a calm okonomiyaki dinner."]],
    history: [
      "Hiroshima began as a castle town in the late 16th century and grew into a regional military and industrial center. At 8:15 on August 6, 1945, the first atomic bomb used in war exploded above the city, killing tens of thousands immediately and many more through injury and radiation.",
      "The Peace Memorial Park does not preserve a frozen ruin alone. Its design creates an axis among the museum, Cenotaph, and Dome, asking visitors to move from evidence to mourning to public commitment.",
      "Hiroshima's larger story is also one of survivors rebuilding a living city and insisting that memory serve peace. The river, rebuilt avenues, and ordinary lunch spots after the museum are part of that story too—the city refuses to be only a monument."
    ]
  },
  day13: {
    summary: "Miyajima is the scenic and romantic payoff of the western chapter: shrine and tide first, island food and forest second, with altitude entirely optional. Check tide timing before the ferry—the torii and shrine corridors read differently at high and low water. Shrine, Omotesando snacks, and café time complete the day; Daisho-in or the ropeway are energy choices, not obligations.",
    timeline: [["07:50–09:00 · about 55–70 min", "Walk directly into Hiroshima Station, take the JR San’yō Line to Miyajimaguchi (about 30 min), walk about 6 min to the pier, then take the JR ferry (about 10 min). This is the recommended route from Hotel Granvia."], ["09:00–11:45", "Walk from the ferry terminal to Itsukushima Shrine and the waterfront as the tide recedes toward the 11:46 low tide (107 cm). The gate should look increasingly exposed, but 107 cm is not a guaranteed walk-to-the-gate level."], ["11:45–16:30", "Eat anago-meshi or island snacks, then choose Omotesando and cafe time, Daisho-in, or the ropeway according to energy."], ["16:30–18:30", "Either begin the return before dark, or stay for the strong 18:21 high tide (313 cm) and the torii surrounded by water. The shrine itself closes at 17:30."], ["Return · about 55–70 min", "Take the JR ferry to Miyajimaguchi, walk to JR Miyajimaguchi Station, then ride the JR San’yō Line back to Hiroshima Station. From an 18:30 ferry, expect to reach the hotel around 19:25–19:40."]],
    history: [
      "Itsukushima was treated as a sacred island long before its current buildings appeared. To avoid violating that sanctity, worship took place over the water; the shrine's corridors and great torii still use the tide to blur the boundary between architecture, sea, and mountain.",
      "The 12th-century warrior-statesman Taira no Kiyomori expanded the shrine while cultivating power at the imperial court. Yet Miyajima is not one frozen era: Buddhist halls, pilgrimage paths, merchant food streets, deer, ferries, and tourism have accumulated around the sacred landscape for centuries.",
      "Island food—anago-meshi, grilled oysters, momiji manju—grew from pilgrimage demand and later leisure travel. The ropeway and forest paths add altitude only if wanted; the romantic payoff is tide, torii, and the sense that the western chapter ends in beauty rather than checklist completion."
    ]
  },
  day14: {
    summary: "The long train is the experience: browse Hiroshima's ekiben, reveal and score them after departure, then arrive in Tokyo as temporary neighborhood residents rather than sightseers. Photograph closed and open boxes, trade tastes, and score all five Ekiben League categories while the landscape changes. Evening is depachika, supermarket, or ramen near the hotel—no sightseeing campaign after arrival.",
    timeline: [["08:30–10:00", "Check out and reach Hiroshima Station early enough to browse regional ekiben calmly."], ["10:00–14:30", "Ride east, photograph closed and open boxes, trade tastes, score them, and watch the country change."], ["15:00–17:30", "Reach the Tokyo hotel, learn the correct station exit, and fully settle in."], ["Evening", "Choose a depachika, supermarket, ramen, or curry dinner near the hotel; add no sightseeing campaign."]],
    history: [
      "Japan's first railway opened in 1872, and station boxed meals soon turned travel into a way of tasting place. Ekiben packaging, ingredients, and presentation became miniature regional advertisements, allowing a train journey to carry local identity across the country.",
      "The Tokaido corridor linking Kyoto, Osaka, and Tokyo has organized movement for centuries, first as a famed highway and now as the country's busiest high-speed rail axis. Arriving by Shinkansen compresses landscapes once measured in days of walking into a single seated chapter.",
      "Making the train the main event reverses the usual arrival panic: no monuments required after Tokyo Station, only learning the hotel exit, the konbini rhythm, and the easiest neighbourhood dinner. Tokyo begins as habitation, not performance."
    ]
  },
  day15: {
    summary: "Ghibli is the scarce-ticket anchor, but Inokashira Park and Kichijoji make the day feel like a neighborhood story rather than a museum extraction. If tickets work, give the timed visit its full window without scheduling another central-Tokyo attraction. If tickets fail, let the park, café and shotengai browse become the complete quest—wonder uses battery, so keep the post-museum plan gentle.",
    timeline: [["Morning", "Travel to Mitaka or Kichijoji with generous ticket-time margin."], ["Timed window", "Give the Ghibli Museum its full visit without scheduling another central-Tokyo attraction."], ["Afterward–17:00", "Walk through Inokashira Park and pause at a cafe."], ["17:00–20:00", "Browse one Kichijoji shopping street and eat nearby; if tickets failed, let this become the full day."]],
    history: [
      "Inokashira Pond supplied water to Edo and later became one of Tokyo's early suburban parks. Rail connections transformed nearby Kichijoji into a western neighbourhood where green space, small commerce, music, cafes, and dense residential life meet.",
      "The Ghibli Museum deliberately avoids a prescribed route. Hayao Miyazaki designed it around curiosity, hand-drawn motion, architecture at a child's scale, and discovery without a checklist.",
      "That philosophy is the ideal rhythm for the whole day: if tickets work, wonder inside the museum; if not, wonder in the park and shotengai instead. Tokyo is not only skyscrapers—this corner proves the city also lives through ponds, ducks, bakeries, and streets sized for wandering home."
    ]
  },
  day16: {
    summary: "Akko and Yoshi show their home neighborhood; the dinner they choose is the most authentic Tokyo capstone of the trip. Follow their lead through local spots they genuinely like—not a tourist checklist—and keep the day seated, social, and unhurried. Jindaiji or the botanical gardens are optional only if the friends route there; the friends' dinner pick is the real destination.",
    timeline: [["Late morning", "Travel toward the friends' neighborhood; confirm the exact meeting point once Chofu or another base is locked in."], ["Midday–afternoon", "Follow Akko and Yoshi through the local spots they genuinely like—not a tourist checklist."], ["Optional", "If the route passes Chofu, Jindaiji temple lanes, soba, or the botanical gardens can anchor a parent-paced pause."], ["Evening", "Let the friends choose dinner; keep the day seated, social, and unhurried."]],
    history: [
      "Tokyo's residential neighborhoods are as important to understanding the city as its famous districts. Stations, shotengai, temples, parks, and favourite restaurants reveal everyday Japan more honestly than another imported sightseeing plan.",
      "Being shown those routines by friends who live there turns travel into hospitality. The meal they choose carries more cultural weight than any guidebook ranking because it encodes memory, budget, and pride in a local spot.",
      "If the route passes Chofu, Jindaiji traces its foundation to the 8th century and preserves wooded temple lanes and soba tradition on the city's western edge. The area is also linked to GeGeGe no Kitaro creator Shigeru Mizuki, whose yokai details appear in local shopfronts—optional texture, not the day's purpose."
    ]
  },
  day17: {
    summary: "Everyone begins a three-night Kawaguchiko retreat with small bags while the large luggage waits at the final Tokyo hotel. Send or store large luggage, reserve the highway bus or Fuji Excursion, and arrive early enough to watch the light change on Fuji from the room or shore. No further achievement is required after check-in—the view, bath and dinner are the complete day.",
    timeline: [["Morning", "Send large luggage onward or leave it with the returning Tokyo hotel."], ["Late morning–afternoon", "Take a reserved highway bus or Fuji Excursion from Shinjuku to Kawaguchiko Station."], ["On arrival, 15:00–20:00", "Telephone Kawaguchiko Hotel and use its free on-call shuttle from station platform 10."], ["15:00–17:30", "Check in; walk only to the nearby lakeshore for the first Fuji view."], ["18:00 onward", "Eat at the lodging; no further achievement is required."]],
    history: [
      "The Fuji Five Lakes sit along Mt Fuji's northern base in a landscape shaped by lava flows, eruptions, and water collecting in basins below the volcano. Pilgrimage, poetry, and later tourism all treated the lakes as places to inhabit Fuji rather than conquer it.",
      "Kawaguchiko became especially practical once highway buses and rail links made a multi-night stay feasible from Tokyo without heroic packing. Hot-spring hotels turned the shore into a retreat culture—private baths, long dinners, and repeated views as weather changes.",
      "Arriving with small bags while large luggage waits in Tokyo is a deliberate design choice: the chapter should feel like escape, not logistics stress. The first evening's story is simply light on water and the relief of stopping."
    ]
  },
  day18: {
    summary: "Complete the Kawaguchiko e-bike circuit as its own win, with Mount Tenjoyama as the compact fallback and Mitsutoge protected for tomorrow. Check wind, rain and rental status before collecting bikes; a defined partial loop is a complete victory if conditions push back. Return bikes, eat well, and recover at the same hotel—save legs, trail food and attention for the summit day.",
    timeline: [["09:40", "Walk about 5–10 minutes from the hotel to the reserved e-bike pickup near Kawaguchiko Park Hotel."], ["10:00–10:20", "Collect e-bikes; check helmets, locks, batteries and the firm return time."], ["10:20–12:00", "Cross toward the north shore first and ride to the Itchiku/Oishi area while visibility is worth prioritizing."], ["12:00–13:00", "Use Oishi Park as the lunch, toilet and Fuji-view stop."], ["13:00–16:00", "Continue around the west and south shore, or use the bridge/partial-loop exit before fatigue changes the day."], ["By 16:15", "Return the bikes before sunset and well before closing; walk back, eat well and recover."]],
    history: [
      "The official Kawaguchiko town guide describes the lakeside circuit as just under 20 kilometres and recommends cycling as a flexible way to connect viewpoints, museums, parks and shrines. E-bikes lower the barrier enough to make the loop playful rather than athletic.",
      "Fuji appears at different angles around the shore—sometimes dominant, sometimes hidden by cloud—so the ride becomes a lesson in patience as much as distance. Shrines, flower fields, and snack stops give the circuit cultural texture without turning it into a temple collection.",
      "Giving the bike day its own victory protects tomorrow's summit psychology: legs, food, and attention remain resources rather than debts. Mount Tenjoyama's ropeway exists as a compact fallback, not a consolation prize."
    ]
  },
  day19: {
    summary: "Mitsutoge is the headline summit objective, using prebooked taxis and the shorter mountain-road trailhead out-and-back route after route-specific closure, road and weather checks. The current partial closure is on the Haha-no-Shirataki approach rather than this route, but recheck in November. Do not use the once-daily bus: it reaches the trailhead at 10:15 and returns at 10:20. Parents keep the same room and use a single taxi-led north-shore outing while hikers are on the ridge.",
    timeline: [["Previous evening", "Ask the hotel to prebook both taxi legs to 三ツ峠登山口 and reconfirm the chosen route and road are open."], ["06:50–07:20", "Take the prebooked taxi from the hotel to the mountain-road trailhead; carry layers, water and food."], ["07:20–12:20", "Climb to the summit and return the same way, obeying the fixed turnaround cutoff."], ["12:30–13:00", "Meet the prebooked return taxi at the trailhead and return for a seated recovery meal."], ["Afternoon–evening", "Recover near the hotel, rejoin everyone and confirm tomorrow's Tokyo return."]],
    slowTimeline: [["09:30", "Take a hotel-arranged taxi directly to Itchiku Kubota Art Museum."], ["Late morning", "If energy is good, take the short Red Line bus hop onward to Oishi Park; otherwise taxi straight back."], ["13:00–14:00", "Taxi back to the hotel; use the longer Red Line return only as the budget fallback."], ["Afternoon", "Use a café, private bath or hotel lounge; do not build a second transport chain."], ["Evening", "Reunite for the summit story and final Kawaguchiko dinner."]],
    history: [
      "Mitsutoge is a small group of peaks north of Mt Fuji, prized because the summit ridge looks directly toward Fuji rather than standing on it. Climbers and photographers have long used the mountain as a frame for the volcano, especially when autumn air sharpens the view.",
      "The mountain-road trailhead shortens the ascent enough to make a same-way summit day practical; the longer Mitsutoge Station approach remains outside this plan because it changes the day's risk profile.",
      "Summit culture here is not about bagging a famous peak list—it is about one unmistakable photograph and the shared story afterward. Parents on the slow lake timeline keep the hotel as a second narrative: Oishi Park flowers, Itchiku Kubota's monumental textiles, or simply a bath while waiting for the hikers' return."
    ]
  },
  day20: {
    summary: "A reserved morning return creates a protected final Tokyo chapter for luggage, laundry, missed priorities and an easy dinner. Allow road-delay margin or use the Otsuki rail fallback; recovering the large bags and doing one priority shopping cluster is enough. Keep the final full day fresh—this is a soft landing, not another race through Tokyo.",
    timeline: [["07:00–08:15", "Breakfast, one last Fuji look and checkout."], ["08:00–10:00 window", "Use the hotel's free half-hourly shuttle to Kawaguchiko Station, leaving 30–45 minutes before departure."], ["Morning–early afternoon", "Use the reserved Shinjuku bus, with rail via Otsuki as the road-delay fallback."], ["Afternoon", "Check in, recover the large bags, and do laundry or one priority shopping cluster."], ["Evening", "Eat near the hotel and keep the final full day fresh."]],
    history: [
      "Kawaguchiko developed as a Tokyo-accessible resort through both the Fujikyuko railway and the highway-bus network. Those links made multi-night stays normal for city dwellers who wanted mountain air without alpine expedition culture.",
      "Returning two nights before the flight converts weather or traffic risk into an inconvenience rather than a departure-day emergency. The psychology shifts from 'last chance to see everything' to 'enough time to do laundry, buy one missing item, and sleep.",
      "Tokyo's final hotel chapter is intentionally mundane—suitcases reunited, neighbourhood ramen, early packing—which is how a long trip should end: not in spectacle, but in calm readiness."
    ]
  },
  day21: {
    summary: "The final full day protects three things only: teamLab, Mai's chosen special melon bread, and a fully packed, well-fed ending. Visit Borderless with generous admission margin without trying to locate every room; confirm the exact melon-bread branch and stock before the last afternoon. Name the ekiben and melon-bread champions at dinner, then pack with airport margin—nothing else needs to be added.",
    timeline: [["Morning", "Use a morning teamLab time if available and travel with generous admission margin."], ["Timed entry–3 hours", "Explore Borderless without trying to locate every room; use the tea house or Azabudai for a reset."], ["Mid-afternoon–18:00", "Go to Mai's exact melon-bread shop and complete the final passport score; handle only essential souvenirs."], ["18:00–21:00", "Eat the final celebratory meal, name the ekiben and melon-bread champions, and pack completely."]],
    history: [
      "teamLab belongs to Tokyo's long habit of using new technology to reorganize how bodies experience space. Its moving images replace the framed artwork with an environment visitors help shape through presence, reflection, and movement.",
      "Melon bread is a modern Japanese bakery form rather than a single fixed recipe—crisp cookie crust, soft interior, and endless regional variations. Ending with Mai's chosen specialist turns an everyday snack into a personal trip ritual, the kind of memory repetition and anticipation make larger than the object itself.",
      "The last full day is structured like a closing ceremony: one immersive room to remember, one flavour to carry home, one meal to mark the group, and a suitcase that leaves nothing important behind. Tokyo does not need another district added—only these anchors done well."
    ]
  }
};

const cityWrapQuestions = [
  "Best food moment in this city?",
  "Best ordinary-life moment?",
  "Most beautiful or memorable scene?",
  "Funniest tiny failure?",
  "What detail sums up this city for us?"
];

const planeRideQuestions = [
  "What was the emotional high point of the whole trip?",
  "What did we learn about traveling together?",
  "What food do we still think about?",
  "Which place felt most meaningful in the moment?",
  "What should we remember about this trip when life gets normal again?"
];

const cityRail = document.querySelector(".city-rail");
const dayRail = document.querySelector(".day-rail");
const overviewPanel = document.querySelector("#overviewPanel");
const dayPanel = document.querySelector("#dayPanel");
const state = loadState();
const todayTarget = applyTodayTarget();

function defaultState() {
  return {
    done: {},
    awards: {},
    cityWrap: {},
    planeRide: {},
    lodging: { osaka: "", kyoto: "", hiroshima: "", tokyo: "" },
    deckHands: {},
    deckDone: {},
    deckSkipped: {},
    melon: {},
    snackLeague: {},
    mainNotes: {},
    roadmapReady: {},
    dayWindows: {},
    overviewWindows: {},
    overviewMapChapter: "osaka",
    theme: window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    activeCity: "osaka"
  };
}

function loadState() {
  const fresh = defaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return { ...fresh, ...saved, lodging: { ...fresh.lodging, ...(saved.lodging || {}) } };

    const previous = JSON.parse(localStorage.getItem(PREVIOUS_STORAGE_KEY));
    if (previous) {
      return {
        ...fresh,
        ...previous,
        lodging: { ...fresh.lodging, ...(previous.lodging || {}) },
        deckHands: previous.deckHands || {},
        deckDone: previous.deckDone || {},
        deckSkipped: previous.deckSkipped || {},
        melon: previous.melon || {},
        snackLeague: previous.snackLeague || {},
        dayWindows: previous.dayWindows || {},
        overviewWindows: previous.overviewWindows || {}
      };
    }

    const old = JSON.parse(localStorage.getItem(OLD_STORAGE_KEY));
    if (old) {
      return {
        ...fresh,
        awards: old.awards || {},
        cityWrap: old.cityWrap || {},
        planeRide: old.planeRide || {},
        lodging: { ...fresh.lodging, ...(old.lodging || {}), tokyo: old.lodging?.tokyo || old.hotel || "" },
        activeCity: tripData[old.activeCity] ? old.activeCity : "osaka"
      };
    }
  } catch {
    return fresh;
  }
  return fresh;
}

function activeCity() {
  return tripData[state.activeCity] || tripData.osaka;
}

function todayIso() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function findDayByDate(date) {
  for (const [cityId, city] of Object.entries(tripData)) {
    const day = city.days.find((candidate) => candidate.date === date);
    if (day) return { cityId, day };
  }
  return null;
}

function applyTodayTarget() {
  const match = findDayByDate(todayIso());
  if (!match) return null;
  state.activeCity = match.cityId;
  return match;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  document.querySelector("#saveStatus").textContent = "Saved on this phone";
}

function applyTheme(theme = state.theme) {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  state.theme = resolvedTheme;
  document.body.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
  const toggle = document.querySelector("#themeToggle");
  const isDark = resolvedTheme === "dark";
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    toggle.querySelector("[aria-hidden]").textContent = isDark ? "☀" : "☾";
    toggle.querySelector(".theme-toggle-label").textContent = isDark ? "Light" : "Dark";
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#171418" : "#fff0f6");
}

function itemId(scope, groupIndex, itemIndex) {
  return `${scope}.${groupIndex}.${itemIndex}`;
}

function visibleGroupEntries(day) {
  return day.groups
    .map((group, groupIndex) => ({ group, groupIndex }))
    .filter(({ group }) => !hiddenDayGroupTypes.has(group[1]) && !sharedDayGroupTypes.has(group[1]));
}

function countableDayGroupEntries(day) {
  return day.groups
    .map((group, groupIndex) => ({ group, groupIndex }))
    .filter(({ group }) => group[1] === "main");
}

function sharedSideGroups(city) {
  const shared = coreExperienceQuests.map((group, groupIndex) => ({
    title: `Core: ${group.title}`,
    description: group.description,
    type: group.type,
    items: group.items,
    scope: "core",
    groupIndex
  }));

  shared.push(...city.ongoing
    .filter((group) => group.type === "side")
    .map((group, groupIndex) => ({
      title: group.title,
      description: group.description,
      type: group.type,
      items: group.items,
      scope: state.activeCity === "tokyo" ? "ongoing" : `${state.activeCity}.ongoing`,
      groupIndex
    })));

  city.days.forEach((day) => {
    day.groups.forEach(([title, type, items], groupIndex) => {
      if (type !== "side") return;
      shared.push({
        title: `${day.short} - ${title}`,
        description: day.title.replace(/^Day \d+ - /, ""),
        type,
        items,
        scope: day.id,
        groupIndex,
        meta: { dayId: day.id, dayTitle: day.title }
      });
    });
  });

  return shared;
}

function allTasks() {
  const tasks = [];
  Object.entries(tripData).forEach(([cityId, city]) => {
    city.days.forEach((day) => {
      countableDayGroupEntries(day).forEach(({ group, groupIndex }) => {
        group[2].forEach((text, itemIndex) => tasks.push({ id: itemId(day.id, groupIndex, itemIndex), type: group[1], text }));
      });
    });
  });
  return tasks;
}

function cityTasks(cityId) {
  return allTasks().filter((task) => task.id.startsWith("core.") || task.id.startsWith(`${cityId}.`) || tripData[cityId].days.some((day) => task.id.startsWith(`${day.id}.`)) || (cityId === "tokyo" && task.id.startsWith("ongoing.")));
}

function pointsFor(type) {
  if (type === "mai") return 2;
  return 1;
}

function remainingForGroup(scope, groupIndex, items) {
  return items.filter((_, itemIndex) => !state.done[itemId(scope, groupIndex, itemIndex)]).length;
}

function remainingForDay(day) {
  return visibleGroupEntries(day).reduce((total, { group, groupIndex }) => total + remainingForGroup(day.id, groupIndex, group[2]), 0);
}

function makeCountLabel(count, noun = "left") {
  if (count === null || count === undefined) return "";
  return count === 0 ? "Done" : `${count} ${noun}`;
}

function makeCollapsibleCard({ className, label, title, badge, open = true }) {
  const card = document.createElement("details");
  card.className = `${className} collapsible-card`;
  card.open = open;
  const summary = document.createElement("summary");
  summary.className = "collapsible-summary";
  summary.innerHTML = `
    <span class="summary-text">
      ${label ? `<span class="label">${label}</span>` : ""}
      <strong>${title}</strong>
    </span>
    ${badge ? `<span class="count-badge">${badge}</span>` : ""}
  `;
  const content = document.createElement("div");
  content.className = "collapsible-content";
  card.append(summary, content);
  return { card, content, summary };
}

function updateRemainingBadges() {
  document.querySelectorAll("[data-count-scope]").forEach((badge) => {
    const scope = badge.dataset.countScope;
    const groupIndex = Number(badge.dataset.groupIndex);
    const itemTotal = Number(badge.dataset.itemTotal);
    const remaining = Array.from({ length: itemTotal }, (_, index) => index).filter((itemIndex) => !state.done[itemId(scope, groupIndex, itemIndex)]).length;
    badge.textContent = makeCountLabel(remaining);
  });
  document.querySelectorAll("[data-day-count]").forEach((badge) => {
    const day = Object.values(tripData).flatMap((city) => city.days).find((candidate) => candidate.id === badge.dataset.dayCount);
    if (day) badge.textContent = state.done[mainTaskId(day)] ? "✓" : "Main";
  });
}

function isPhotoQuest(title, text) {
  return /\bphoto|picture|album|reflected\b/i.test(`${title} ${text}`);
}

const dailyPhotoSlots = [
  ["thumbnail", "Day Thumbnail", "Optional image for the calendar and daily focus card. Does not appear in the album."],
  ["food", "Food Photo", "A snack, meal, dessert, drink, or food hall treasure."],
  ["scene", "Scene Photo", "A street, shrine, station, river, shopfront, skyline, or tiny atmosphere proof."],
  ["us", "Us Photo", "A non-perfect couple photo from the day."],
  ["extra", "Extra Photos", "Anything else that belongs in the album for this day."]
];

const albumPhotoSlots = new Set(["food", "scene", "us", "extra", "main", "melon"]);

const defaultPlanPhotos = {
  day02: "capstones/day02.jpg",
  day03: "capstones/day03.webp",
  day04: "capstones/day04.jpg",
  day05: "capstones/day05.jpeg",
  day06: "capstones/day06.jpeg",
  day07: "capstones/day07.webp",
  day08: "capstones/day08.jpg",
  day09: "capstones/day09.jpg",
  day10: "capstones/day10.jpeg",
  day11: "capstones/day11.jpg",
  day12: "capstones/day12.webp",
  day13: "capstones/day13.jpg",
  day14: "capstones/day14.jpg",
  day15: "capstones/day15.jpeg",
  day16: "capstones/day16.jpeg",
  day17: "capstones/day17.webp",
  day18: "capstones/day18.webp",
  day19: "capstones/day19.jpeg",
  day20: "capstones/day20.webp",
  day21: "capstones/day21.jpg"
};

function thumbnailTaskId(dayId) {
  return `${dayId}.photo.thumbnail`;
}

function mainGoalPhotoTaskId(dayId) {
  return `${dayId}.photo.main`;
}

function bundledPlanPhotoUrl(dayId) {
  const relative = defaultPlanPhotos[dayId];
  if (!relative) return null;
  const base = location.pathname.endsWith("/") ? location.pathname : `${location.pathname.replace(/\/[^/]*$/, "/")}`;
  return `${base}${relative}`;
}

function populatePlanPhoto(day, container) {
  if (!container) return;
  const url = bundledPlanPhotoUrl(day.id);
  container.innerHTML = "";
  if (!url) {
    container.className = "plan-photo is-empty";
    container.innerHTML = "<p>Plan photo will appear here.</p>";
    return;
  }
  container.className = "plan-photo";
  const img = document.createElement("img");
  img.alt = `${day.title} plan photo`;
  img.src = url;
  container.appendChild(img);
}

function isAlbumPhoto(photo) {
  return albumPhotoSlots.has(photo.slot);
}

function legacyThumbnailTaskId(dayId) {
  return `${dayId}.photo.capstone`;
}

async function calendarThumbnailImage(dayId) {
  const thumbnailPhotos = await getPhotosForTask(thumbnailTaskId(dayId)).catch(() => []);
  const latestThumbnail = thumbnailPhotos.sort((a, b) => a.createdAt.localeCompare(b.createdAt)).at(-1);
  if (latestThumbnail?.dataUrl) return latestThumbnail.dataUrl;

  const legacyPhotos = await getPhotosForTask(legacyThumbnailTaskId(dayId)).catch(() => []);
  const latestLegacy = legacyPhotos.sort((a, b) => a.createdAt.localeCompare(b.createdAt)).at(-1);
  if (latestLegacy?.dataUrl) return latestLegacy.dataUrl;

  return bundledPlanPhotoUrl(dayId);
}

function openPhotoDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(PHOTO_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      const store = db.createObjectStore(PHOTO_STORE, { keyPath: "id", autoIncrement: true });
      store.createIndex("taskId", "taskId", { unique: false });
      store.createIndex("cityId", "cityId", { unique: false });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function withPhotoStore(mode, action) {
  return openPhotoDb().then((db) =>
    new Promise((resolve, reject) => {
      const transaction = db.transaction(PHOTO_STORE, mode);
      const store = transaction.objectStore(PHOTO_STORE);
      const result = action(store);
      transaction.oncomplete = () => {
        db.close();
        resolve(result);
      };
      transaction.onerror = () => {
        db.close();
        reject(transaction.error);
      };
    })
  );
}

function storeRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getPhotosForTask(taskId) {
  return withPhotoStore("readonly", (store) => storeRequest(store.index("taskId").getAll(taskId)));
}

async function getAllPhotos() {
  return withPhotoStore("readonly", (store) => storeRequest(store.getAll()));
}

async function addPhoto(photo) {
  return withPhotoStore("readwrite", (store) => store.add(photo));
}

async function removePhoto(id) {
  return withPhotoStore("readwrite", (store) => store.delete(id));
}

async function clearPhotos() {
  return withPhotoStore("readwrite", (store) => store.clear());
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function renderPhotosForTask(taskId, container, onPhotosChange) {
  if (!container) return;
  const photos = await getPhotosForTask(taskId).catch(() => []);
  container.innerHTML = "";
  photos.forEach((photo) => {
    const wrapper = document.createElement("div");
    wrapper.className = "quest-photo";
    wrapper.innerHTML = `<img alt="${photo.caption}" src="${photo.dataUrl}">`;
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "photo-delete";
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", async () => {
      await removePhoto(photo.id);
      await renderPhotosForTask(taskId, container, onPhotosChange);
      await renderAlbum();
      if (taskId.endsWith(".photo.thumbnail") || taskId.endsWith(".photo.capstone")) renderCalendar();
      if (onPhotosChange) await onPhotosChange();
    });
    wrapper.appendChild(deleteButton);
    container.appendChild(wrapper);
  });
  if (onPhotosChange) await onPhotosChange();
}

async function handlePhotoFiles(files, task, container) {
  for (const file of Array.from(files || [])) {
    if (!file.type.startsWith("image/")) continue;
    const dataUrl = await fileToDataUrl(file);
    await addPhoto({
      taskId: task.id,
      cityId: task.cityId || state.activeCity,
      dayId: task.dayId || "",
      dayTitle: task.dayTitle || "",
      caption: task.text,
      slot: task.slot || "quest",
      dataUrl,
      createdAt: new Date().toISOString()
    });
  }
  await renderPhotosForTask(task.id, container);
  await renderAlbum();
  if (task.id.endsWith(".photo.thumbnail") || task.id.endsWith(".photo.capstone")) renderCalendar();
}

function makePhotoControls(task, buttonText = "Add Photo", onPhotosChange) {
  const controls = document.createElement("div");
  const button = document.createElement("label");
  const fileInput = document.createElement("input");
  const photos = document.createElement("div");
  const photoId = `${task.id}.photo`;
  controls.className = "photo-controls";
  button.className = "photo-button";
  button.htmlFor = photoId;
  button.textContent = buttonText;
  fileInput.id = photoId;
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.multiple = true;
  photos.className = "quest-photos";
  fileInput.addEventListener("change", async (event) => {
    await handlePhotoFiles(event.target.files, task, photos);
    event.target.value = "";
    if (onPhotosChange) await onPhotosChange();
  });
  controls.append(button, fileInput);
  renderPhotosForTask(task.id, photos, onPhotosChange);
  return { controls, photos };
}

function makeCard({ title, description, type, items }, scope, groupIndex, meta = {}) {
  const remaining = remainingForGroup(scope, groupIndex, items);
  const { card, content, summary } = makeCollapsibleCard({
    className: `quest-card ${type}`,
    title,
    badge: makeCountLabel(remaining),
    open: remaining > 0
  });
  const badge = summary.querySelector(".count-badge");
  if (badge) {
    badge.dataset.countScope = scope;
    badge.dataset.groupIndex = String(groupIndex);
    badge.dataset.itemTotal = String(items.length);
  }
  if (description) {
    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    content.appendChild(descriptionEl);
  }
  const list = document.createElement("ul");
  list.className = "quest-list";
  content.appendChild(list);

  items.forEach((text, itemIndex) => {
    const id = itemId(scope, groupIndex, itemIndex);
    const li = document.createElement("li");
    li.className = `quest-item ${state.done[id] ? "done" : ""}`;
    const checkbox = document.createElement("input");
    const body = document.createElement("div");
    const label = document.createElement("span");
    checkbox.id = id;
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state.done[id]);
    body.className = "quest-item-body";
    label.textContent = text;
    body.appendChild(label);
    checkbox.addEventListener("change", (event) => {
      state.done[id] = event.target.checked;
      li.classList.toggle("done", event.target.checked);
      saveState();
      renderStats();
      updateRemainingBadges();
    });
    if (isPhotoQuest(title, text)) {
      const { controls, photos } = makePhotoControls({ id, text, ...meta });
      body.append(controls, photos);
    }
    li.append(checkbox, body);
    list.appendChild(li);
  });

  return card;
}

function clearGroup(selector) {
  const section = document.querySelector(selector);
  section.querySelectorAll(".quest-card, .award-card, .daily-deck").forEach((node) => node.remove());
}

function findDay(dayId) {
  for (const [cityId, city] of Object.entries(tripData)) {
    const day = city.days.find((candidate) => candidate.id === dayId);
    if (day) return { cityId, city, day };
  }
  return null;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function mainTaskId(day) {
  const mainIndex = day.groups.findIndex((group) => group[1] === "main");
  return itemId(day.id, mainIndex, 0);
}

function roadmapGoalCompleted(goal) {
  if (goal.persistent) return false;
  return goal.days.every((dayId) => {
    const match = findDay(dayId);
    return match && state.done[mainTaskId(match.day)];
  });
}

function roadmapStatus(goal) {
  if (roadmapGoalCompleted(goal)) return "Completed";
  if (state.roadmapReady[goal.id]) return "Ready";
  return goal.status;
}

function deckPoolForDay(day) {
  const cityId = findDay(day.id)?.cityId || state.activeCity;
  const regionId = ({ day06: "nara", day11: "himeji", day12: "hiroshima", day13: "miyajima", day14: "rail" })[day.id] || cityId;
  const regionName = ({ nara: "Nara", himeji: "Himeji", miyajima: "Miyajima", rail: "Shinkansen" })[regionId] || tripData[cityId].name;
  const regional = (regionalQuestPools[regionId] || [])
    .filter((entry) => !entry[3] || entry[3].includes(day.id))
    .map(([id, type, text]) => ({
      id,
      type,
      text,
      source: regionName,
      groupTitle: "Regional food",
      dayId: day.id,
      dayShort: day.short,
      dayDate: day.date
    }));
  const daily = day.groups.flatMap(([title, type, items], groupIndex) => {
    if (type !== "side" && type !== "egg") return [];
    return items.map((text, itemIndex) => ({
      id: `${day.id}-${type}-${groupIndex}-${itemIndex}`,
      type: type === "egg" ? "find" : "day",
      text,
      source: title,
      groupTitle: type === "egg" ? "Lookout" : title,
      dayId: day.id,
      dayShort: day.short,
      dayDate: day.date
    }));
  });
  return [...regional, ...daily].filter((quest, index, all) => all.findIndex((candidate) => candidate.id === quest.id) === index);
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function dealQuestHand(day, force = false) {
  const pool = deckPoolForDay(day);
  const saved = state.deckHands[day.id] || [];
  if (!force && saved.length === 3 && saved.every((id) => pool.some((quest) => quest.id === id))) return saved;
  const available = pool.filter((quest) => !state.deckDone[quest.id] && !state.deckSkipped[quest.id]);
  const fallback = pool.filter((quest) => !state.deckDone[quest.id]);
  const candidates = available.length >= 3 ? available : fallback.length >= 3 ? fallback : pool;
  const food = shuffled(candidates.filter((quest) => quest.type === "food"))[0];
  const rest = shuffled(candidates.filter((quest) => !food || quest.id !== food.id));
  const hand = [food, ...rest].filter(Boolean).slice(0, 3).map((quest) => quest.id);
  state.deckHands[day.id] = hand;
  saveState();
  return hand;
}

function renderQuestDeck(day) {
  const section = document.createElement("section");
  section.className = "daily-deck";
  const pool = deckPoolForDay(day);
  const handIds = dealQuestHand(day);
  const hand = handIds.map((id) => pool.find((quest) => quest.id === id)).filter(Boolean);
  section.innerHTML = `<div class="deck-heading"><div><p class="label">Optional discoveries</p><h3>Today's discovery deck</h3><p>Pick any, skip any, or deal again. These never count against the trip.</p></div><button type="button" class="deal-button">Deal Three More</button></div>`;
  const grid = document.createElement("div");
  grid.className = "deck-grid";
  hand.forEach((quest) => {
    const card = document.createElement("article");
    const done = Boolean(state.deckDone[quest.id]);
    card.className = `deck-card deck-${quest.type} ${done ? "is-found" : ""}`;
    card.innerHTML = `<p>${quest.text}</p><div class="deck-actions"><button type="button" data-action="found">${done ? "Found ✓" : "Found It"}</button><button type="button" data-action="skip">Skip</button></div>`;
    card.querySelector('[data-action="found"]').addEventListener("click", () => {
      state.deckDone[quest.id] = !state.deckDone[quest.id];
      delete state.deckSkipped[quest.id];
      saveState();
      showDay(day);
    });
    card.querySelector('[data-action="skip"]').addEventListener("click", () => {
      state.deckSkipped[quest.id] = true;
      state.deckHands[day.id] = state.deckHands[day.id].filter((id) => id !== quest.id);
      dealQuestHand(day, true);
      showDay(day);
    });
    grid.appendChild(card);
  });
  section.appendChild(grid);
  section.querySelector(".deal-button").addEventListener("click", () => {
    dealQuestHand(day, true);
    showDay(day);
  });
  const library = document.createElement("details");
  library.className = "quest-library";
  library.innerHTML = `<summary>Browse all optional ideas <span>${pool.length}</span></summary><div>${pool.map((quest) => `<p class="${state.deckDone[quest.id] ? "is-found" : ""}">${quest.text}${state.deckDone[quest.id] ? " ✓" : ""}</p>`).join("")}</div>`;
  section.appendChild(library);
  return section;
}

function dailyGuide(day) {
  const context = dayContext[day.id] || { summary: day.theme, timeline: [], history: ["Background notes can be added here later."] };
  const goals = roadmapGoals.filter((goal) => goal.days.includes(day.id));
  const statuses = goals.map(roadmapStatus);
  const priority = ["Needs Confirmation", "Needs Booking", "Conditional", "Ready", "Completed"];
  const status = priority.find((candidate) => statuses.includes(candidate)) || "Ready";
  const timelineMarkup = (timeline) => timeline.map(([time, activity]) => `<li><time>${time}</time><span>${activity}</span></li>`).join("");
  const slowTimeline = Array.isArray(context.slowTimeline) ? context.slowTimeline : [];
  const hasSlowTimeline = slowTimeline.length > 0;
  const card = document.createElement("section");
  card.className = "daily-guide";
  card.innerHTML = `
    <div class="daily-guide-heading"><p class="label">Today's clear path</p><span class="status-pill status-${status.toLowerCase().replaceAll(" ", "-")}">${status}</span></div>
    <h3>${dayClearPath(day)}</h3>
    <section class="context-block merged-summary">
      <h4>Quick Summary</h4>
      <div class="summary-body">${context.summary}</div>
    </section>
    <section class="context-block timeline-block">
      <div class="timeline-heading">
        <h4>Recommended Timeline</h4>
        ${hasSlowTimeline ? `<div class="timeline-tabs" role="tablist" aria-label="Choose timeline pace">
          <button type="button" role="tab" aria-selected="true" data-timeline-tab="main">Main plan</button>
          <button type="button" role="tab" aria-selected="false" data-timeline-tab="slow">Slow plan</button>
        </div>` : ""}
      </div>
      <div data-timeline-panel="main" role="tabpanel"><ol class="day-timeline">${timelineMarkup(context.timeline)}</ol></div>
      ${hasSlowTimeline ? `<div data-timeline-panel="slow" role="tabpanel" hidden><ol class="day-timeline slow-day-timeline">${timelineMarkup(slowTimeline)}</ol></div>` : ""}
      <p class="timeline-note">These are pacing windows, not reservations. Shift them around confirmed tickets, transport, weather, and energy.</p>
    </section>
    ${context.evening ? `<section class="context-block evening-flex-block">
      <h4>Evening Flexibility</h4>
      <p><strong>${context.evening.rank}:</strong> ${context.evening.window}</p>
      <p><strong>Best use:</strong> ${context.evening.bestUse}</p>
      <p><strong>Can move later:</strong> ${context.evening.canMove}</p>
      <p><strong>Keep in daylight:</strong> ${context.evening.keepDaylight}</p>
    </section>` : ""}
    <section class="context-block">
      <h4>The Story Behind Today</h4>
      <div class="history-story">${context.history.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
    </section>
  `;
  if (hasSlowTimeline) {
    card.querySelectorAll("[data-timeline-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.dataset.timelineTab;
        card.querySelectorAll("[data-timeline-tab]").forEach((tab) => tab.setAttribute("aria-selected", String(tab === button)));
        card.querySelectorAll("[data-timeline-panel]").forEach((panel) => { panel.hidden = panel.dataset.timelinePanel !== selected; });
      });
    });
  }
  return card;
}

async function mainGoalReady(day) {
  const note = (state.mainNotes[day.id] || "").trim();
  const photos = await getPhotosForTask(mainGoalPhotoTaskId(day.id)).catch(() => []);
  return Boolean(note) && photos.length > 0;
}

function makeMainGoalCard(day) {
  const mainGoal = dayMainGoal(day);
  const taskId = mainTaskId(day);
  const photoTask = {
    id: mainGoalPhotoTaskId(day.id),
    text: "Main goal proof",
    slot: "main",
    dayId: day.id,
    dayTitle: day.title,
    cityId: findDay(day.id)?.cityId || state.activeCity
  };
  const photoHint = day.mainGoalPhotoHint ? `Good proof: ${day.mainGoalPhotoHint} ` : "";
  const card = document.createElement("section");
  card.className = "main-goal-card";
  card.innerHTML = `
    <div class="main-goal-heading"><p class="label">Today's main goal</p></div>
    <h3>${mainGoal}</h3>
    <p class="main-goal-note">${photoHint}Write what happened, then add the photo that shows you completed this goal.</p>
  `;

  const writing = document.createElement("label");
  writing.className = "main-goal-writing";
  writing.innerHTML = `<span>What did you do for today's main goal?</span>`;
  const textarea = document.createElement("textarea");
  textarea.rows = 4;
  textarea.placeholder = "A few sentences about the moment you completed today's goal…";
  textarea.value = state.mainNotes[day.id] || "";
  textarea.addEventListener("input", () => {
    state.mainNotes[day.id] = textarea.value;
    saveState();
    updateMainGoalButton();
  });
  writing.appendChild(textarea);
  card.appendChild(writing);

  const photoSection = document.createElement("div");
  photoSection.className = "main-goal-photo";
  photoSection.innerHTML = `<span>Photo proof of the main goal</span>`;

  const checkbox = document.createElement("button");
  checkbox.type = "button";
  checkbox.className = `main-complete ${state.done[taskId] ? "is-complete" : ""}`;
  checkbox.textContent = state.done[taskId] ? "Main goal completed ✓" : "Mark main goal complete";

  async function updateMainGoalButton() {
    if (state.done[taskId]) {
      checkbox.disabled = false;
      checkbox.textContent = "Main goal completed ✓";
      return;
    }
    const ready = await mainGoalReady(day);
    checkbox.disabled = !ready;
    const note = (state.mainNotes[day.id] || "").trim();
    const photoCount = (await getPhotosForTask(mainGoalPhotoTaskId(day.id)).catch(() => [])).length;
    if (!note && !photoCount) {
      checkbox.textContent = "Add writing and a photo to complete";
    } else if (!note) {
      checkbox.textContent = "Add writing to complete";
    } else if (!photoCount) {
      checkbox.textContent = "Add a photo to complete";
    } else {
      checkbox.textContent = "Mark main goal complete";
    }
  }

  const { controls, photos } = makePhotoControls(photoTask, "Upload main goal photo", updateMainGoalButton);
  photoSection.append(controls, photos);
  card.appendChild(photoSection);

  checkbox.addEventListener("click", async () => {
    if (state.done[taskId]) {
      state.done[taskId] = false;
      saveState();
      showDay(day);
      return;
    }
    const ready = await mainGoalReady(day);
    if (!ready) return;
    state.done[taskId] = true;
    saveState();
    showDay(day);
  });
  card.appendChild(checkbox);
  updateMainGoalButton();
  return card;
}

function makeDayFrontPage(day) {
  const section = document.createElement("section");
  section.className = "day-front-page";
  const hero = document.createElement("div");
  hero.className = "plan-photo";
  section.appendChild(hero);
  populatePlanPhoto(day, hero);
  section.appendChild(dailyGuide(day));
  return section;
}

function snackLeagueEntry(slotId) {
  return state.snackLeague?.[slotId] || {};
}

function snackLeagueSlotAverage(entry) {
  const scores = snackLeagueScoreKeys.map((key) => Number(entry[key])).filter((score) => score >= 1 && score <= 5);
  if (scores.length !== snackLeagueScoreKeys.length) return 0;
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

function snackLeagueSlotComplete(slotId) {
  const entry = snackLeagueEntry(slotId);
  return Boolean(entry.item?.trim()) && snackLeagueSlotAverage(entry) > 0;
}

function snackLeagueRankedEntries() {
  return snackLeagueSlots
    .map(([id, title]) => ({ id, title, entry: snackLeagueEntry(id), average: snackLeagueSlotAverage(snackLeagueEntry(id)) }))
    .filter((row) => row.average > 0)
    .sort((a, b) => b.average - a.average || snackLeagueSlots.findIndex(([id]) => id === a.id) - snackLeagueSlots.findIndex(([id]) => id === b.id));
}

function updateSnackLeague(slotId, patch) {
  state.snackLeague = { ...(state.snackLeague || {}), [slotId]: { ...snackLeagueEntry(slotId), ...patch } };
  saveState();
}

function scoreSelectOptions(selected) {
  return `<option value="">—</option>${Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    return `<option value="${value}" ${Number(selected) === value ? "selected" : ""}>${value}</option>`;
  }).join("")}`;
}

async function buildSnackLeagueScorecard(day, refresh) {
  const section = document.createElement("section");
  section.className = "melon-passport-section snack-league-passport";
  section.innerHTML = `
    <div class="section-heading">
      <p class="label">Day 4 tasting challenge</p>
      <h2>Osaka Snack League</h2>
    </div>
    <div class="melon-progress" id="snackLeagueProgress"></div>
    <div class="melon-grid" id="snackLeagueGrid"></div>
    <div id="snackLeagueLeaderboard"></div>
  `;

  const progress = section.querySelector("#snackLeagueProgress");
  const grid = section.querySelector("#snackLeagueGrid");
  const ranked = snackLeagueRankedEntries();
  let completed = 0;

  for (const [index, [id, title, note]] of snackLeagueSlots.entries()) {
    const entry = snackLeagueEntry(id);
    const photos = await getPhotosForTask(`snackleague.${id}`).catch(() => []);
    const complete = photos.length > 0 && snackLeagueSlotComplete(id);
    if (complete) completed += 1;
    const card = document.createElement("article");
    card.className = `melon-card ${complete ? "is-complete" : ""}`;
    card.innerHTML = `<div class="melon-stamp"><span>${complete ? "✓" : index + 1}</span></div><h3>${title}</h3><p>${note}</p>`;

    const photoWrap = document.createElement("div");
    photoWrap.className = "melon-photo";
    const photoTask = {
      id: `snackleague.${id}`,
      text: `${title} photo`,
      slot: "food",
      dayId: day.id,
      dayTitle: day.title,
      cityId: findDay(day.id)?.cityId || state.activeCity
    };
    if (photos[0]) {
      photoWrap.innerHTML = `<img src="${photos[0].dataUrl}" alt="${escapeHtml(title)}"><button type="button">Replace photo</button>`;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "melon-remove";
      remove.textContent = "Remove";
      remove.addEventListener("click", async () => {
        await Promise.all(photos.map((photo) => removePhoto(photo.id)));
        refresh();
        renderAlbum();
      });
      photoWrap.appendChild(remove);
    } else {
      photoWrap.innerHTML = `<button type="button">Add required photo</button>`;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.hidden = true;
    photoWrap.querySelector("button").addEventListener("click", () => input.click());
    input.addEventListener("change", async () => {
      if (!input.files?.[0]) return;
      await Promise.all(photos.map((photo) => removePhoto(photo.id)));
      await handlePhotoFiles(input.files, photoTask, document.createElement("div"));
      refresh();
      renderAlbum();
    });
    photoWrap.appendChild(input);

    const fields = document.createElement("div");
    fields.className = "melon-fields";
    fields.innerHTML = `
      <label>What we ate <input type="text" maxlength="80" value="${escapeHtml(entry.item)}" placeholder="Item name"></label>
      ${snackLeagueScoreKeys.map((key) => `<label>${snackLeagueScoreLabels[key]} <select data-score="${key}">${scoreSelectOptions(entry[key])}</select></label>`).join("")}
    `;
    fields.querySelector('input[placeholder="Item name"]').addEventListener("change", (event) => {
      updateSnackLeague(id, { item: event.target.value.trim() });
      refresh();
    });
    fields.querySelectorAll("select[data-score]").forEach((select) => {
      select.addEventListener("change", (event) => {
        updateSnackLeague(id, { [event.target.dataset.score]: event.target.value });
        refresh();
      });
    });

    card.append(photoWrap, fields);
    grid.appendChild(card);
  }

  progress.innerHTML = `<strong>${completed} of 7 tasted</strong><span>Each stamp needs one photo, the bite name, and all three category scores.</span>`;

  const leaderboard = section.querySelector("#snackLeagueLeaderboard");
  leaderboard.className = "melon-leaderboard";
  if (!ranked.length) {
    leaderboard.innerHTML = `<p>No rankings yet. Add a photo, name the bite, and score all three categories to stamp the first taste.</p>`;
  } else {
    const champion = ranked[0];
    const allScored = completed === snackLeagueSlots.length;
    leaderboard.innerHTML = `<h3>${allScored ? `👑 Snack League Champion: ${escapeHtml(champion.entry.item || champion.title)}` : "Current leaderboard"}</h3><ol>${ranked.map((row) => `<li><strong>${escapeHtml(row.entry.item || row.title)}</strong><span>${row.average.toFixed(1)}/5 avg</span></li>`).join("")}</ol>`;
  }

  return section;
}

async function mountSnackLeagueScorecard(day, host) {
  const refresh = () => mountSnackLeagueScorecard(day, host);
  const card = await buildSnackLeagueScorecard(day, refresh);
  host.replaceChildren(card);
}

function makeQuestPage(day) {
  const section = document.createElement("section");
  section.className = "quest-page";
  section.appendChild(makeMainGoalCard(day));
  if (day.id === "day04") {
    const host = document.createElement("div");
    host.className = "snack-league-host";
    section.appendChild(host);
    mountSnackLeagueScorecard(day, host);
  }
  section.appendChild(renderQuestDeck(day));
  return section;
}

async function renderMelonPassport() {
  const grid = document.querySelector("#melonGrid");
  const progress = document.querySelector("#melonProgress");
  const leaderboard = document.querySelector("#melonLeaderboard");
  if (!grid || !progress || !leaderboard) return;
  grid.innerHTML = "";
  const entries = [];
  for (const [index, [id, title, description]] of melonSlots.entries()) {
    const saved = state.melon[id] || {};
    const photos = await getPhotosForTask(`melon.${id}`).catch(() => []);
    const complete = photos.length > 0 && Number(saved.score) >= 1 && Number(saved.score) <= 10;
    entries.push({ id, title, index, score: Number(saved.score) || 0, complete });
    const card = document.createElement("article");
    card.className = `melon-card ${complete ? "is-complete" : ""}`;
    card.innerHTML = `<div class="melon-stamp"><span>${complete ? "✓" : index + 1}</span></div><h3>${title}</h3><p>${description}</p>`;
    const photoWrap = document.createElement("div");
    photoWrap.className = "melon-photo";
    if (photos[0]) {
      photoWrap.innerHTML = `<img src="${photos[0].dataUrl}" alt="${title}"><button type="button">Replace photo</button>`;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "melon-remove";
      remove.textContent = "Remove";
      remove.addEventListener("click", async () => {
        await Promise.all(photos.map((photo) => removePhoto(photo.id)));
        renderMelonPassport();
        renderAlbum();
      });
      photoWrap.appendChild(remove);
    } else {
      photoWrap.innerHTML = `<button type="button">Add required photo</button>`;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.hidden = true;
    photoWrap.querySelector("button").addEventListener("click", () => input.click());
    input.addEventListener("change", async () => {
      if (!input.files?.[0]) return;
      await Promise.all(photos.map((photo) => removePhoto(photo.id)));
      await handlePhotoFiles(input.files, { id: `melon.${id}`, text: title, slot: "melon", dayTitle: "Melon Bread Passport" }, document.createElement("div"));
      renderMelonPassport();
      renderAlbum();
    });
    photoWrap.appendChild(input);
    const fields = document.createElement("div");
    fields.className = "melon-fields";
    fields.innerHTML = `<label>Mai's score <select><option value="">Choose 1–10</option>${Array.from({ length: 10 }, (_, scoreIndex) => `<option value="${scoreIndex + 1}" ${Number(saved.score) === scoreIndex + 1 ? "selected" : ""}>${scoreIndex + 1}</option>`).join("")}</select></label><label>Verdict <input type="text" maxlength="80" value="${escapeHtml(saved.verdict)}" placeholder="Crispy, fluffy, worth a repeat…"></label>`;
    fields.querySelector("select").addEventListener("change", (event) => {
      state.melon[id] = { ...state.melon[id], score: event.target.value };
      saveState();
      renderMelonPassport();
    });
    fields.querySelector('input[type="text"]').addEventListener("change", (event) => {
      state.melon[id] = { ...state.melon[id], verdict: event.target.value.trim() };
      saveState();
    });
    card.append(photoWrap, fields);
    grid.appendChild(card);
  }
  const completed = entries.filter((entry) => entry.complete);
  progress.className = "melon-progress";
  progress.innerHTML = `<strong>${completed.length} of 6 tasted</strong><span>Each passport stamp needs one photo and Mai's score.</span>`;
  const ranked = [...completed].sort((a, b) => b.score - a.score || a.index - b.index);
  leaderboard.className = "melon-leaderboard";
  leaderboard.innerHTML = ranked.length ? `<h3>${completed.length === 6 ? `👑 Mai's Melon Bread Champion: ${ranked[0].title}` : "Current leaderboard"}</h3><ol>${ranked.map((entry) => `<li><strong>${entry.title}</strong><span>${entry.score}/10${state.melon[entry.id]?.verdict ? ` · ${escapeHtml(state.melon[entry.id].verdict)}` : ""}</span></li>`).join("")}</ol>` : `<p>No rankings yet. Add a photo and score to stamp the first bread.</p>`;
}

const cityDiscoveryPresentation = {
  osaka: {
    categories: ["Taste Osaka", "See & Capture", "Everyday Osaka"],
    help: "Choose a category when it fits the day. The timing notes are suggestions, not a schedule."
  },
  kyoto: {
    categories: ["Taste Kyoto", "Soft Beauty", "Everyday Kyoto"],
    help: "Use these as gentle additions to the day's main route, not a second itinerary."
  },
  hiroshima: {
    categories: ["Westward Food", "History & Reflection", "Island & Transit"],
    help: "Let the food, meaningful places, and travel rituals belong to the chapter they fit best."
  },
  tokyo: {
    categories: ["Tokyo Food", "See & Capture", "Our Tokyo Routine"],
    help: "Build a Tokyo rhythm: one good bite, one memorable detail, and one ordinary-life moment at a time."
  }
};

function cityDiscoverySections(cityId) {
  const city = tripData[cityId];
  const sections = [];
  const seen = new Set();

  city.days.forEach((day) => {
    const quests = deckPoolForDay(day).filter((quest) => {
      if (seen.has(quest.id)) return false;
      seen.add(quest.id);
      return true;
    });
    if (!quests.length) return;
    sections.push({
      id: day.id,
      title: `${day.short} · ${formatCalendarDate(day.date)}`,
      subtitle: day.title.replace(/^Day \d+ - /, ""),
      quests
    });
  });

  const firstDay = city.days[0]?.short;
  const lastDay = city.days.at(-1)?.short;
  city.ongoing.forEach((group, groupIndex) => {
    const quests = group.items.map((text, itemIndex) => ({
      id: `${cityId}.ongoing.${groupIndex}.${itemIndex}`,
      type: group.type === "egg" ? "find" : "day",
      text,
      source: group.title,
      groupTitle: group.type === "egg" ? "Lookout" : group.title,
      dayId: cityId,
      dayShort: firstDay && lastDay ? `${firstDay}–${lastDay}` : city.name,
      dayDate: ""
    }));
    if (!quests.length) return;
    sections.push({
      id: `${cityId}-ongoing-${groupIndex}`,
      title: group.title,
      subtitle: `Best anytime during ${city.name}`,
      quests
    });
  });

  return sections;
}

function cityDiscoveryCategories(cityId) {
  const labels = cityDiscoveryPresentation[cityId]?.categories || ["Food & Drink", "See & Capture", "Everyday Life"];
  const categories = [
    { id: "taste", title: labels[0], note: "Regional foods, snacks, and food rituals that belong to this chapter." },
    { id: "capture", title: labels[1], note: "Views, signs, photos, and small details worth noticing." },
    { id: "everyday", title: labels[2], note: "Cafes, routines, and ordinary-life moments that make the city feel lived in." }
  ].map((category) => ({ ...category, quests: [] }));

  cityDiscoverySections(cityId).flatMap((section) => section.quests).forEach((quest) => {
    const category = quest.type === "food" ? "taste" : quest.type === "find" || quest.type === "photo" ? "capture" : "everyday";
    categories.find((entry) => entry.id === category).quests.push(quest);
  });

  return categories.filter((category) => category.quests.length);
}

function makeDiscoveryCheckRow(quest) {
  const row = document.createElement("label");
  const found = Boolean(state.deckDone[quest.id]);
  row.className = `discovery-check-row ${found ? "is-found" : ""}`;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = found;
  const copy = document.createElement("span");
  copy.className = "discovery-check-copy";
  const isRecommendedToday = quest.dayDate === todayIso();
  copy.innerHTML = `
    <small>${isRecommendedToday ? '<i class="discovery-pulse" aria-label="Recommended for today"></i>' : ""}${quest.text}</small>
    <em>Recommended: ${quest.dayDate ? formatCalendarDate(quest.dayDate) : quest.dayShort}</em>
  `;
  checkbox.addEventListener("change", (event) => {
    state.deckDone[quest.id] = event.target.checked;
    if (event.target.checked) delete state.deckSkipped[quest.id];
    saveState();
    renderCityDiscoveryChecklist();
    renderStats();
  });
  row.append(checkbox, copy);
  return row;
}

function renderCityDiscoveryChecklist() {
  const body = document.querySelector("#discoveryHubBody");
  if (!body) return;

  const cityId = state.activeCity;
  const city = activeCity();
  const presentation = cityDiscoveryPresentation[cityId];
  const title = document.querySelector("#cityDiscoveryTitle");
  const help = document.querySelector("#cityDiscoveryHelp");
  if (title) title.textContent = `${city.name} Discoveries`;
  if (help) help.textContent = presentation?.help || "Choose a category when it fits the day. The timing notes are suggestions, not a schedule.";
  const categories = cityDiscoveryCategories(cityId);

  body.innerHTML = "";
  categories.forEach((category, index) => {
    const group = document.createElement("details");
    group.className = "discovery-group";
    if (index === 0) group.open = true;
    const sectionFound = category.quests.filter((quest) => state.deckDone[quest.id]).length;
    group.innerHTML = `
      <summary>
        <span>${category.title}</span>
        <span class="discovery-group-count">${sectionFound}/${category.quests.length}</span>
      </summary>
      <p class="discovery-group-note">${category.note}</p>
    `;
    const list = document.createElement("div");
    list.className = "discovery-checklist";
    category.quests.forEach((quest) => list.appendChild(makeDiscoveryCheckRow(quest)));
    group.appendChild(list);
    body.appendChild(group);
  });
}

function setProgressRing(element, completed, total) {
  if (!element) return;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  element.style.setProperty("--ring-progress", `${percent * 3.6}deg`);
  element.querySelector("strong").textContent = `${percent}%`;
}

function renderTripQuestDashboard() {
  const tasks = allTasks();
  const completed = tasks.filter((task) => state.done[task.id]);
  const allCityQuests = Object.keys(tripData).flatMap((cityId) => cityDiscoveryCategories(cityId).flatMap((category) => category.quests));
  const cityQuests = cityDiscoveryCategories(state.activeCity).flatMap((category) => category.quests);
  const cityDone = cityQuests.filter((quest) => state.deckDone[quest.id]).length;
  const totalCompleted = completed.length + allCityQuests.filter((quest) => state.deckDone[quest.id]).length;
  const total = tasks.length + allCityQuests.length;

  setProgressRing(document.querySelector("#tripProgressRing"), totalCompleted, total);
  setProgressRing(document.querySelector("#routeProgressRing"), completed.length, tasks.length);
  setProgressRing(document.querySelector("#cityProgressRing"), cityDone, cityQuests.length);
  const cityRingLabel = document.querySelector("#cityProgressRing span");
  if (cityRingLabel) cityRingLabel.textContent = `${activeCity().name} chapter`;
}

function renderOverview() {
  const review = document.querySelector("#planeRideReview");
  if (review) review.innerHTML = "";
  document.querySelector("#albumGrid").innerHTML = "";
  document.querySelector("#calendarGrid").innerHTML = "";

  renderTripRouteMap();
  renderCalendar();
  renderTripQuestDashboard();
  renderCityDiscoveryChecklist();
  renderMelonPassport();
  if (review && todayIso() >= "2026-11-10") review.appendChild(makePlaneRideReviewCard());
  renderAlbum();
  setupOverviewCarousel();
}

function renderTripRouteMap() {
  const host = document.querySelector("#tripRouteMap");
  if (!host) return;
  host._chapterMapCleanup?.();
  host._tripMapResizeObserver?.disconnect();
  host.innerHTML = `
    <div class="trip-route-map-frame">
      <div class="chapter-map-tabs" role="tablist" aria-label="Trip chapters"></div>
      <svg class="route-map-layer" viewBox="50 30 590 355" role="img" aria-labelledby="tripMapTitle tripMapDesc">
        <title id="tripMapTitle">Japan trip route</title>
        <desc id="tripMapDesc">Colored travel legs connect Osaka, Kyoto, Hiroshima, Tokyo and Kawaguchiko. Hover or focus a leg for its travel time.</desc>
        <g class="japan-outline" aria-hidden="true">
          <path d="M583.7 98.2L590.5 101.5L598.3 110.2L603.9 113.3L608.6 113.2L625.6 107.4L613.6 119.3L611.4 126L611.9 139.3L615.4 141.6L621.5 140L625.5 141.8L614.4 145.1L610.5 143.4L597.4 144.5L589.3 143.2L578.6 137.9L571.7 138.5L558.2 143.4L552.1 147.5L541.8 158.7L526.6 143.1L514 126.2L502.3 122.7L489 124.8L484.6 115.2L478.9 112.8L474 115.3L471.6 119.5L474.6 126.7L479.7 129.3L486.3 143.4L481.6 143.9L474 138L459.5 145.3L456 145.1L453.8 142.3L454 138.7L461.2 129.3L461.8 123.9L458.9 115L463.4 105.7L465 103.9L471.8 103.5L482.7 99.9L485.2 97.4L484.5 92.8L486.1 88.5L488.9 88.3L495.7 95.9L503.5 100L507.7 101L510.7 99.3L515.9 88.1L527 78.8L530.5 71.3L535.9 65.5L539.4 58.3L540.6 50.6L539.9 42.5L545.2 35.6L553.4 35L566.8 71.1L583.7 98.2ZM128.5 298.7L132.9 301.7L139.5 301.3L141.7 304L140.8 307.3L133.5 312.7L142.4 317L139.4 320.8L141.1 324.1L139.2 326L140.4 329.8L126.4 339.4L113.9 355.7L111.2 362.3L104.7 369.4L98.3 365.7L96.7 367.2L96.7 371.7L83.2 375L89 368.1L90.8 357.5L93.7 357L94.3 354.2L91.3 352.6L86.8 356.4L84.4 361.3L85.3 366.6L82.8 368.9L74.4 361.3L74.5 357.1L78.7 357.3L81.4 352.8L80.1 346.2L84.3 336.1L91.1 334.2L102.4 324.1L99.2 321.5L102 319.8L102.7 316.5L101.8 306.6L99.2 302.4L95.5 303.6L93.5 312L97.4 313.5L95.8 318.4L93.1 318.2L89.4 313.3L79.6 316.7L83 312.4L81.5 306.3L83.5 300.4L85.2 307.2L88.8 310.1L88.6 303.8L83.3 293.8L85.4 290.8L91.1 293.8L92.1 290L108.3 289.4L113.8 284.3L120.9 283.8L126.3 287.9L126.4 295.3L128.5 298.7ZM217.7 310.8L224.5 314.7L220.6 326.9L221.9 328.5L210 331.4L204.4 335.3L200.4 340.8L197.3 332.1L189.8 326.8L179.1 328L172 335.3L167.4 337.1L164.6 341.1L159.1 342.2L155.1 340.2L158.6 336.5L153.3 333.8L154.4 330.9L153.4 328.6L158.5 322.2L156.3 319.9L157.8 316.8L146.9 315.8L166.9 311L174.3 303L179.5 301.3L182.4 308.6L184 309L195 310.4L198 307.3L198.4 303.5L200.9 304.7L208.5 303.8L211.8 304.7L217.7 310.8ZM482.8 157.8L489 159.1L483.7 168.2L479.7 180.2L479.1 184.1L483.5 197.6L482.1 215.3L477.2 226.5L471.2 235.7L463.3 237.5L457.8 243L451.2 253.5L441.2 251.9L435.1 256.3L431.7 262.3L428.3 278.5L423 289.3L420.7 292.5L411.2 298.5L400.9 312.6L399.9 318.5L402.1 331.6L395.3 331.2L388.8 334.1L382 343.4L372.6 344.8L367.3 347.8L365.6 346.5L365 344.7L366.8 343.5L370 334.3L380.5 328L378.8 324.3L374.8 323.1L371 327.5L366.9 329L367.3 334.9L364.3 337.4L361.1 330.7L355.1 329L350.6 331.7L345.4 341.1L340.9 344.5L336.2 345.5L335.3 342.2L339.9 333.9L343.1 333.4L339.7 328.4L335.6 328.1L319.5 339.5L303.9 330.8L290.6 328.4L297.9 326.9L298.5 324.6L292.2 322.3L291.3 319.4L289.4 322.8L287.7 321.7L290.3 313.8L292.2 312.4L290 311L286.3 311.9L278.4 319.9L284.1 331.2L282 334.4L266.9 333.6L248.5 348.7L242 348.8L236.6 344.2L234.1 326.6L237 317.5L244 315.6L249.2 310.4L239.9 306.1L233.9 298.8L220.7 295.3L211.3 298.3L196.8 295.9L187.4 296.9L184.6 294.8L174.3 293.7L169.7 287.9L166.6 287.7L163.4 290L156.2 301.3L148.6 290.4L134.3 288.4L131.2 284.5L126.7 284.3L129.6 275L134.2 272.1L143.3 275.1L174.1 265.2L190.3 257.3L197.2 256.7L206.5 258.8L208 263L224 267.7L257.4 272.4L259.4 274.1L256.9 277.8L258.5 280.9L267.2 285.2L274.2 284.3L281.1 281.2L281.7 273.3L284.8 269.9L308.8 256.8L312.8 250.7L315.1 242.6L320.6 238.1L334.6 238.7L333.9 241.5L318.7 247L320 250.9L318.1 257L322.9 262L325.5 262.5L332.2 258.6L356.1 258.4L367.3 253.7L378.4 244.6L393.8 241.5L402.9 230.4L414.9 221.4L422.1 211.6L427.6 207.2L431 200.7L432.2 192.8L426.6 188.1L432.1 186.6L437.7 180.2L439 170.7L441.8 166.8L452 164.6L455.7 160.2L456.9 155L459.6 153.6L465.3 157.1L462.8 167.2L463.7 169.9L469.9 168.3L473.8 172L477.9 169.8L481.1 163.2L480.5 161.5L469 160.7L470.5 157.1L477.1 150.6L482.8 157.8Z" />
        </g>
        ${makeRouteLegSvg("leg-kyoto-hiroshima", "#7b61b9", "M263.2 301.6 Q221 262 171 287.2", "2", "Kyoto → Hiroshima", "~1 hr 45", "train time · Himeji stop", 294, 201)}
        ${makeRouteLegSvg("leg-hiroshima-tokyo", "#2b8a78", "M171 287.2 Q273 220 370.3 320.6", "3", "Hiroshima → Tokyo", "~4 hr", "Shinkansen", 294, 201)}
        ${makeRouteLegSvg("leg-tokyo-fuji", "#d28732", "M370.3 320.6 Q357 298 345.5 316.4", "4", "Tokyo → Kawaguchiko", "~2 hr", "bus / train", 294, 201)}
        ${makeRouteLegSvg("leg-fuji-tokyo", "#3a77b8", "M345.5 316.4 Q361 348 370.3 320.6", "5", "Kawaguchiko → Tokyo", "~2 hr", "return to Tokyo", 294, 201)}
        ${makeRouteLegSvg("leg-osaka-kyoto", "#e06b8f", "M252.4 308.9 Q250 279 263.2 301.6", "1", "Osaka → Kyoto", "~30 min", "via Nara day", 294, 201)}
        ${makeRouteCitySvg(252.4, 308.9, -9, 25, "end", "Osaka", "Oct 24–28 · 4 nights", "osaka")}
        ${makeRouteCitySvg(263.2, 301.6, 9, -13, "start", "Kyoto", "Oct 28–Nov 2 · 5 nights", "kyoto")}
        ${makeRouteCitySvg(171, 287.2, -9, -13, "end", "Hiroshima", "Nov 2–5 · 3 nights", "hiroshima")}
        ${makeRouteCitySvg(370.3, 320.6, 10, -13, "start", "Tokyo", "Nov 5–8 &amp; 11–13 · 5 nights", "tokyo-1")}
        ${makeRouteCitySvg(345.5, 316.4, -9, 25, "end", "Kawaguchiko", "Nov 8–11 · 3 nights", "kawaguchiko")}
      </svg>
      <p class="trip-map-instruction">Double-click a city label or use the chapter buttons.</p>
    <section class="chapter-map" aria-labelledby="chapterMapTitle">
      <h3 class="sr-only" id="chapterMapTitle">Chapter overview map</h3>
      <div class="overview-leaflet-map" role="application" aria-label="Interactive chapter overview map"></div>
      <div class="chapter-map-days" aria-label="Days in selected chapter"></div>
    </section>
    </div>`;

  const routeSvg = host.querySelector(".trip-route-map-frame svg");
  const resizeMap = () => {
    const mobile = host.getBoundingClientRect().width <= 620;
    routeSvg?.setAttribute("viewBox", mobile ? "90 155 330 250" : "50 30 590 355");
  };
  host._tripMapResizeObserver?.disconnect();
  if (window.ResizeObserver) {
    host._tripMapResizeObserver = new ResizeObserver(resizeMap);
    host._tripMapResizeObserver.observe(host);
  }
  resizeMap();
  renderOverviewChapterMap(host);
}

let activeOverviewLeafletMap = null;
const mobileOverviewMapQuery = window.matchMedia("(max-width: 620px)");

function overviewChapterForDay(dayId) {
  return overviewMapChapters.find((chapter) => chapter.dayIds.includes(dayId));
}

function overviewMapDays(chapter) {
  return chapter.dayIds.map((dayId) => findDay(dayId)?.day).filter(Boolean);
}

function renderOverviewChapterMap(host) {
  const frame = host.querySelector(".trip-route-map-frame");
  const tabs = host.querySelector(".chapter-map-tabs");
  const mapElement = host.querySelector(".overview-leaflet-map");
  const dayList = host.querySelector(".chapter-map-days");
  const routeSvg = host.querySelector(".route-map-layer");
  if (!tabs || !mapElement || !dayList || !routeSvg) return;

  let selectedChapter = overviewMapChapters.find((chapter) => chapter.id === state.overviewMapChapter)
    || overviewMapChapters.find((chapter) => chapter.cityId === state.activeCity)
    || overviewMapChapters[0];
  let highlightedDayId = null;
  let armedDayId = null;
  let armedMarker = null;
  let armedMarkerDayId = null;
  let markersByDay = new Map();
  let dayButtons = new Map();
  let mobileMapOpen = false;
  let mobileHistoryEntryActive = false;
  let mobileFramePlaceholder = null;
  let lockedScrollY = 0;
  let resizeFrame = 0;

  const invalidateMap = () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => activeOverviewLeafletMap?.invalidateSize());
  };

  const lockPageScroll = () => {
    lockedScrollY = window.scrollY;
    document.body.classList.add("chapter-map-fullscreen-open");
    document.body.style.top = `-${lockedScrollY}px`;
  };

  const unlockPageScroll = () => {
    document.body.classList.remove("chapter-map-fullscreen-open");
    document.body.style.removeProperty("top");
    window.scrollTo({ top: lockedScrollY, behavior: "auto" });
  };

  const exitMobileMap = ({ consumeHistory = false } = {}) => {
    if (!mobileMapOpen) return;
    mobileMapOpen = false;
    frame?.classList.remove("is-mobile-fullscreen");
    frame?.querySelector(".chapter-map")?.removeAttribute("aria-modal");
    frame?.querySelector(".chapter-map")?.removeAttribute("role");
    if (mobileFramePlaceholder?.isConnected) mobileFramePlaceholder.replaceWith(frame);
    mobileFramePlaceholder = null;
    unlockPageScroll();
    if (mobileHistoryEntryActive) {
      mobileHistoryEntryActive = false;
      if (consumeHistory) history.back();
    }
    invalidateMap();
  };

  const enterMobileMap = () => {
    if (!mobileOverviewMapQuery.matches || mobileMapOpen || !frame) return;
    mobileMapOpen = true;
    mobileFramePlaceholder = document.createComment("chapter map position");
    frame.replaceWith(mobileFramePlaceholder);
    document.body.appendChild(frame);
    frame.classList.add("is-mobile-fullscreen");
    frame.querySelector(".chapter-map")?.setAttribute("role", "dialog");
    frame.querySelector(".chapter-map")?.setAttribute("aria-modal", "true");
    lockPageScroll();
    try {
      history.pushState({ ...(history.state || {}), overviewChapterMap: true }, "", window.location.href);
      mobileHistoryEntryActive = true;
    } catch (_error) {
      mobileHistoryEntryActive = false;
    }
    invalidateMap();
  };

  const showRoute = ({ fromHistory = false } = {}) => {
    exitMobileMap({ consumeHistory: !fromHistory });
    frame?.classList.remove("is-chapter-open");
    activeOverviewLeafletMap?.remove();
    activeOverviewLeafletMap = null;
    renderTabs(selectedChapter, true);
  };

  const renderTabs = (chapter, routeActive = false) => {
    tabs.replaceChildren();
    const routeButton = document.createElement("button");
    routeButton.type = "button";
    routeButton.className = "chapter-map-route-button";
    routeButton.textContent = mobileMapOpen ? "Close" : "Route";
    routeButton.setAttribute("aria-label", mobileMapOpen ? "Close chapter map and return to route overview" : "Show route overview");
    routeButton.setAttribute("role", "tab");
    routeButton.setAttribute("aria-selected", String(routeActive));
    routeButton.classList.toggle("active", routeActive);
    routeButton.addEventListener("click", () => showRoute());
    tabs.appendChild(routeButton);
    overviewMapChapters.forEach((candidate) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = candidate.label;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(!routeActive && candidate.id === chapter.id));
      button.classList.toggle("active", !routeActive && candidate.id === chapter.id);
      button.addEventListener("click", () => renderChapter(candidate));
      tabs.appendChild(button);
    });
  };

  const openDay = (day) => {
    exitMobileMap({ consumeHistory: true });
    const chapter = overviewChapterForDay(day.id);
    state.activeCity = chapter?.cityId || state.activeCity;
    saveState();
    renderNav();
    showDay(day);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateHighlight = (dayId, { lockDay = false, revealAll = false, revealMarker = null } = {}) => {
    highlightedDayId = dayId;
    if (lockDay) armedDayId = dayId;
    dayButtons.forEach((button, candidateId) => {
      const selected = candidateId === dayId;
      button.classList.toggle("is-highlighted", selected);
      button.classList.toggle("is-armed", armedDayId === candidateId);
      button.setAttribute("aria-pressed", String(armedDayId === candidateId));
    });
    markersByDay.forEach((markers, candidateId) => {
      markers.forEach((marker) => {
        const selected = candidateId === dayId;
        marker.setZIndexOffset((marker._overviewBaseZ || 0) + (selected ? 1000 : 0));
        marker.getElement()?.classList.toggle("is-highlighted", selected);
        if (selected && marker.getTooltip() && (revealAll || marker === revealMarker)) marker.openTooltip();
        else marker.closeTooltip();
      });
    });
  };

  const clearHighlight = () => {
    if (armedDayId) {
      updateHighlight(armedDayId, { revealAll: true });
      return;
    }
    if (armedMarker && armedMarkerDayId) {
      updateHighlight(armedMarkerDayId, { revealMarker: armedMarker });
      return;
    }
    highlightedDayId = null;
    updateHighlight(null);
  };

  const activateDay = (day) => {
    if (armedDayId === day.id) {
      openDay(day);
      return;
    }
    armedMarker = null;
    armedMarkerDayId = null;
    armedDayId = null;
    updateHighlight(day.id, { lockDay: true, revealAll: true });
  };

  const activateMarker = (day, marker) => {
    if (armedMarker === marker) {
      openDay(day);
      return;
    }
    armedDayId = null;
    armedMarker = marker;
    armedMarkerDayId = day.id;
    updateHighlight(day.id, { revealMarker: marker });
  };

  const renderChapter = (chapter) => {
    selectedChapter = chapter;
    state.overviewMapChapter = chapter.id;
    saveState();
    frame?.classList.add("is-chapter-open");
    enterMobileMap();
    highlightedDayId = null;
    armedDayId = null;
    armedMarker = null;
    armedMarkerDayId = null;
    renderTabs(chapter);

    dayList.replaceChildren();
    activeOverviewLeafletMap?.remove();
    activeOverviewLeafletMap = null;
    mapElement.replaceChildren();
    markersByDay = new Map();
    dayButtons = new Map();
    const days = overviewMapDays(chapter);

    days.forEach((day, dayIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chapter-map-day";
      button.innerHTML = `<span class="chapter-map-day-dot" style="--day-color:${overviewDayColors[dayIndex % overviewDayColors.length]}"></span><span class="chapter-map-day-mobile">D${day.id.replace("day", "")} · ${day.short}</span><strong>${day.short}</strong><span class="chapter-map-day-title">${escapeHtml(day.title.replace(/^Day \d+ - /, ""))}</span>`;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") updateHighlight(day.id, { revealAll: true }); });
      button.addEventListener("pointerleave", (event) => { if (event.pointerType === "mouse") clearHighlight(); });
      button.addEventListener("focus", () => updateHighlight(day.id, { revealAll: true }));
      button.addEventListener("blur", clearHighlight);
      button.addEventListener("click", () => activateDay(day));
      dayButtons.set(day.id, button);
      dayList.appendChild(button);
    });
    if (!window.L || !window.PLACE_COORDINATES) return;
    const map = L.map(mapElement, { scrollWheelZoom: false, zoomControl: true });
    activeOverviewLeafletMap = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);
    const points = [];
    const focusPoints = [];
    const focusDayIds = overviewMapFitDayIds[chapter.id];
    days.forEach((day, dayIndex) => {
      const markers = [];
      const color = overviewDayColors[dayIndex % overviewDayColors.length];
      dayMapPlaces(day).forEach((place) => {
        const coordinates = window.PLACE_COORDINATES[place];
        if (!coordinates) return;
        points.push(coordinates);
        if (focusDayIds?.includes(day.id)) focusPoints.push(coordinates);
        const icon = makeLeafletMarkerIcon({
          shellClass: "overview-map-marker-shell",
          isHotel: isHotelPlace(place),
          label: day.id.replace("day", ""),
          dayColor: color
        });
        const hotel = isHotelPlace(place);
        const officialHotelWebsite = LOCKED_HOTEL_WEBSITES[place];
        const marker = L.marker(coordinates, { icon, keyboard: true, title: hotel ? "" : place, zIndexOffset: hotel ? 500 : 0 }).addTo(map);
        marker._overviewBaseZ = hotel ? 500 : 0;
        if (hotel) {
          marker.getElement()?.removeAttribute("title");
          marker.getElement()?.setAttribute("aria-label", officialHotelWebsite ? `Open official website for ${place}` : `Hotel: ${place}`);
          marker.bindTooltip(`<strong>${escapeHtml(place)}</strong>${officialHotelWebsite ? "<br><span>Open official website ↗</span>" : ""}`, { direction: "top", offset: [0, -4] });
        } else marker.bindTooltip(`<strong>${escapeHtml(place)}</strong>`, { direction: "top", offset: [0, -4] });
        marker.on("mouseover focus", () => updateHighlight(day.id, { revealMarker: marker }));
        marker.on("mouseout blur", clearHighlight);
        marker.on("click", () => {
          if (officialHotelWebsite) {
            window.open(officialHotelWebsite, "_blank", "noopener,noreferrer");
            return;
          }
          activateMarker(day, marker);
        });
        markers.push(marker);
      });
      markersByDay.set(day.id, markers);
    });
    const view = overviewMapViews[chapter.id];
    if (view) map.setView(view.center, view.zoom);
    else {
      const bounds = L.latLngBounds(focusPoints.length ? focusPoints : points);
      if (bounds.isValid()) map.fitBounds(bounds, { padding: [34, 34], maxZoom: 13 });
      else map.setView(mapFrameCenters[chapter.cityId], 11);
    }
    map.whenReady(invalidateMap);
  };

  const handleHistoryNavigation = () => {
    if (mobileMapOpen) showRoute({ fromHistory: true });
  };
  const handleKeydown = (event) => {
    if (event.key === "Escape" && mobileMapOpen) {
      event.preventDefault();
      showRoute();
    }
  };
  const handleViewportChange = () => {
    if (!mobileOverviewMapQuery.matches && mobileMapOpen) {
      exitMobileMap({ consumeHistory: true });
      renderTabs(selectedChapter);
    } else if (mobileOverviewMapQuery.matches && frame?.classList.contains("is-chapter-open") && !mobileMapOpen) {
      enterMobileMap();
      renderTabs(selectedChapter);
    }
    invalidateMap();
  };

  window.addEventListener("popstate", handleHistoryNavigation);
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", handleViewportChange, { passive: true });
  window.addEventListener("orientationchange", invalidateMap, { passive: true });
  host._chapterMapCleanup = () => {
    window.removeEventListener("popstate", handleHistoryNavigation);
    window.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("resize", handleViewportChange);
    window.removeEventListener("orientationchange", invalidateMap);
    cancelAnimationFrame(resizeFrame);
    exitMobileMap({ consumeHistory: false });
    activeOverviewLeafletMap?.remove();
    activeOverviewLeafletMap = null;
  };

  frame?.querySelectorAll(".route-city-trigger[data-chapter]").forEach((trigger) => {
    const openChapter = () => {
      const chapter = overviewMapChapters.find((candidate) => candidate.id === trigger.dataset.chapter);
      if (chapter) renderChapter(chapter);
    };
    trigger.addEventListener("dblclick", openChapter);
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openChapter(); }
    });
  });
  renderTabs(selectedChapter, true);
}

function makeRouteLegSvg(id, color, path, number, title, duration, note, labelX, labelY) {
  return `<g class="route-map-leg" id="${id}" tabindex="0" style="--leg-color:${color}" aria-label="Leg ${number}: ${title}, ${duration}, ${note}">
    <path class="route-leg-hit" d="${path}" />
    <path class="route-leg-path" d="${path}" />
    <g class="route-leg-callout" transform="translate(${labelX} ${labelY})">
      <rect x="-71" y="-25" width="142" height="50" rx="8" />
      <text y="-8" text-anchor="middle">${number}. ${title}</text>
      <text y="10" text-anchor="middle">${duration} · ${note}</text>
    </g>
  </g>`;
}

function makeRouteCitySvg(pinX, pinY, nameX, nameY, anchor, city, dates, chapterId) {
  const nameWidth = city.length * 7 + 14;
  const nameLeft = anchor === "end" ? pinX + nameX - nameWidth : pinX + nameX - 7;
  return `<g class="route-city">
    <circle class="route-city-pin" cx="${pinX}" cy="${pinY}" r="7" />
    <g class="route-city-trigger" data-chapter="${chapterId}" tabindex="0" role="button" aria-label="${city}, ${dates}. Double-click to open its chapter map.">
      <rect class="route-city-name-hit" x="${nameLeft}" y="${pinY + nameY - 15}" width="${nameWidth}" height="21" rx="5" />
      <text class="route-city-name" x="${pinX + nameX}" y="${pinY + nameY}" text-anchor="${anchor}">${city}</text>
      <g class="route-city-callout" transform="translate(294 201)">
        <rect x="-88" y="-25" width="176" height="50" rx="8" />
        <text y="-8" text-anchor="middle">${city}</text>
        <text y="10" text-anchor="middle">${dates}</text>
      </g>
    </g>
  </g>`;
}

function setupOverviewCarousel() {
  const host = document.querySelector("#overviewCarouselHost");
  if (!host || host.querySelector(".overview-carousel")) return;
  const review = host.querySelector("#planeRideReview");
  const unlocked = todayIso() >= "2026-11-10";
  const windows = [host.querySelector("#calendarView"), host.querySelector("#tripQuestView"), host.querySelector("#cityQuestView"), host.querySelector("#photoAlbum")].filter(Boolean);
  const labels = ["Calendar", "Trip Quests", `${activeCity().name} Quests`, "Album"];
  if (unlocked && review) {
    windows.push(review);
    labels.push("Review");
  } else {
    review?.remove();
  }
  const carousel = makeWindowCarousel("overview", windows, labels, "overviewWindows");
  carousel.classList.add("overview-carousel");
  host.replaceChildren(carousel);
}

function formatCalendarDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", weekday: "short" });
}

function renderCalendar() {
  const grid = document.querySelector("#calendarGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const today = todayIso();
  Object.entries(tripData).forEach(([cityId, city]) => {
    city.days.forEach((day) => {
      const shell = document.createElement("div");
      shell.className = "calendar-day-shell";
      const button = document.createElement("button");
      button.type = "button";
      button.className = `calendar-day ${day.date === today ? "is-today" : ""}`;
      button.dataset.city = cityId;
      button.dataset.day = day.id;
      applyOutsideCityStyle(button, day, cityId);
      const capstone = dayMainGoal(day);
      button.innerHTML = `
        <span class="calendar-photo" aria-hidden="true"></span>
        <div class="calendar-meta">
          <small>${city.name}</small>
          <span class="calendar-timing">
            <span class="calendar-walk">${calendarWalkLabel(day.id)}</span>
            <span class="${calendarWakeClass(day.id)}">${calendarWakeLabel(day.id)}</span>
          </span>
        </div>
        <strong>${formatCalendarDate(day.date)}</strong>
        <span>${day.title.replace(/^Day \d+ - /, "")}</span>
        <span class="calendar-capstone">${capstone || "Not yet defined"}</span>
      `;
      button.addEventListener("click", () => {
        state.activeCity = cityId;
        saveState();
        renderNav();
        showDay(day);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      shell.appendChild(button);
      const reference = calendarReferenceLinks[day.id];
      if (reference) {
        shell.classList.add("has-reference-link");
        const link = document.createElement("a");
        link.className = "calendar-day-reference";
        link.href = reference.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = reference.label;
        shell.appendChild(link);
      }
      grid.appendChild(shell);
      renderCalendarPhoto(day, button.querySelector(".calendar-photo"));
    });
  });
}

async function renderCalendarPhoto(day, target) {
  if (!target) return;
  target.dataset.emptyLabel = calendarThumbnailIdeas[day.id] || "Add a day thumbnail";
  const image = await calendarThumbnailImage(day.id);
  target.replaceChildren();
  if (image) {
    const img = document.createElement("img");
    img.alt = "";
    img.decoding = "async";
    img.loading = "lazy";
    img.src = image;
    target.appendChild(img);
    target.classList.add("has-photo");
    return;
  }
  target.classList.remove("has-photo");
}

async function renderAlbum() {
  const album = document.querySelector("#albumGrid");
  if (!album) return;
  const photos = (await getAllPhotos().catch(() => [])).filter(isAlbumPhoto);
  album.innerHTML = "";
  if (!photos.length) {
    const empty = document.createElement("p");
    empty.className = "album-empty";
    empty.textContent = "Add photos from daily prompts and they will collect here for the whole trip.";
    album.appendChild(empty);
    return;
  }
  const cityOrder = Object.keys(tripData);
  const orderedPhotos = photos.sort((a, b) => {
    const cityA = cityOrder.indexOf(a.cityId);
    const cityB = cityOrder.indexOf(b.cityId);
    if (cityA !== cityB) return cityA - cityB;
    const days = tripData[a.cityId]?.days || [];
    const rawDayA = days.findIndex((day) => day.id === a.dayId);
    const rawDayB = days.findIndex((day) => day.id === b.dayId);
    const dayA = rawDayA === -1 ? 999 : rawDayA;
    const dayB = rawDayB === -1 ? 999 : rawDayB;
    if (dayA !== dayB) return dayA - dayB;
    return a.createdAt.localeCompare(b.createdAt);
  });
  let currentDay = "";
  orderedPhotos.forEach((photo) => {
      const albumKey = `${photo.cityId}.${photo.dayId}`;
      if (albumKey !== currentDay) {
        currentDay = albumKey;
        const heading = document.createElement("h3");
        heading.className = "album-day-heading";
        const cityName = tripData[photo.cityId]?.name;
        heading.textContent = [cityName, photo.dayTitle || "Extra Album Photos"].filter(Boolean).join(" - ");
        album.appendChild(heading);
      }
      const item = document.createElement("article");
      item.className = "album-photo";
      const slotLabel = photo.slot && photo.slot !== "quest" ? `${photo.slot[0].toUpperCase()}${photo.slot.slice(1)}: ` : "";
      item.innerHTML = `
        <img alt="${photo.caption}" src="${photo.dataUrl}">
        <div class="album-caption">${slotLabel}${photo.caption}</div>
      `;
      album.appendChild(item);
    });
}

function makeTextareaField({ labelText, value, onInput }) {
  const card = document.createElement("article");
  card.className = "award-card";
  const label = document.createElement("label");
  const textarea = document.createElement("textarea");
  label.textContent = labelText;
  textarea.rows = 2;
  textarea.value = value || "";
  textarea.addEventListener("input", (event) => onInput(event.target.value));
  card.append(label, textarea);
  return card;
}

function makeCityWrapSection(cityId, city) {
  state.cityWrap[cityId] = state.cityWrap[cityId] || {};
  const section = document.createElement("section");
  const form = document.createElement("div");
  section.className = "city-review-block";
  form.className = "review-form";
  section.innerHTML = `<h4>${city.name} wrap-up</h4><p class="helper-copy">Answer what matters, add one city photo if it belongs in the album, and leave the rest blank.</p>`;
  cityWrapQuestions.forEach((question, index) => {
    form.appendChild(makeTextareaField({
      labelText: question,
      value: state.cityWrap[cityId][index],
      onInput: (value) => {
        state.cityWrap[cityId][index] = value;
        saveState();
      }
    }));
  });
  const photoTask = {
    id: `${cityId}.final.photo`,
    cityId,
    text: `${city.name} final review photo`,
    slot: "city-final",
    dayId: `${cityId}-final`,
    dayTitle: `${city.name} Final Review`
  };
  const { controls, photos } = makePhotoControls(photoTask, "Add City Photo");
  const photoBlock = document.createElement("section");
  photoBlock.className = "daily-photo-slot";
  photoBlock.innerHTML = `<h4>City album photo</h4><p>Optional: add one final image that sums up ${city.name}.</p>`;
  photoBlock.append(controls, photos);
  form.appendChild(photoBlock);
  section.appendChild(form);
  return section;
}

function makeCityWrapUpCard() {
  const cityId = state.activeCity;
  const city = activeCity();
  const { card, content } = makeCollapsibleCard({
    className: "wrap-card",
    label: "City Wrap",
    title: `${city.name} wrap-up`,
    badge: "Start",
    open: false
  });
  content.appendChild(makeCityWrapSection(cityId, city));
  return card;
}

function makeFinalAwardsSection() {
  const section = document.createElement("section");
  const form = document.createElement("div");
  section.className = "city-review-block";
  form.className = "review-form";
  section.innerHTML = `<h4>Final awards</h4><p class="helper-copy">Use this as the last playful recap before compiling the whole trip.</p>`;
  awards.forEach((award) => {
    const key = `award.${award}`;
    form.appendChild(makeTextareaField({
      labelText: award,
      value: state.awards[key],
      onInput: (value) => {
        state.awards[key] = value;
        saveState();
      }
    }));
  });
  section.appendChild(form);
  return section;
}

async function compileTripReview() {
  const photos = await getAllPhotos().catch(() => []);
  const lines = ["Japan Trip Review", ""];
  Object.entries(tripData).forEach(([cityId, city]) => {
    const tasks = cityTasks(cityId);
    const completed = tasks.filter((task) => state.done[task.id]).length;
    lines.push(`${city.name}: ${completed}/${tasks.length} main goals completed`);
    const answers = state.cityWrap[cityId] || {};
    cityWrapQuestions.forEach((question, index) => {
      if (answers[index]) lines.push(`- ${question} ${answers[index]}`);
    });
    const cityPhotos = photos.filter((photo) => photo.cityId === cityId).length;
    lines.push(`- Photos saved in app: ${cityPhotos}`);
    lines.push("");
  });
  lines.push("Plane Ride Notes");
  planeRideQuestions.forEach((question, index) => {
    const answer = state.planeRide[index];
    if (answer) lines.push(`- ${question} ${answer}`);
  });
  lines.push("");
  lines.push("Final Awards");
  awards.forEach((award) => {
    const answer = state.awards[`award.${award}`];
    if (answer) lines.push(`- ${award}: ${answer}`);
  });
  return lines.join("\n");
}

function makePlaneRideReviewCard() {
  state.planeRide = state.planeRide || {};
  const { card, content } = makeCollapsibleCard({
    className: "wrap-card",
    label: "Plane Ride Home",
    title: "Final trip compilation",
    badge: "Compile",
    open: false
  });
  const intro = document.createElement("p");
  intro.className = "helper-copy";
  intro.textContent = "Use this on the flight home to turn the discoveries, city notes, photos, and awards into one final review.";
  const awardsSection = makeFinalAwardsSection();
  const form = document.createElement("div");
  form.className = "review-form";
  planeRideQuestions.forEach((question, index) => {
    form.appendChild(makeTextareaField({
      labelText: question,
      value: state.planeRide[index],
      onInput: (value) => {
        state.planeRide[index] = value;
        saveState();
      }
    }));
  });
  const compileButton = document.createElement("button");
  const output = document.createElement("textarea");
  compileButton.type = "button";
  compileButton.className = "text-button";
  compileButton.textContent = "Compile Final Review";
  output.className = "review-output";
  output.rows = 10;
  output.placeholder = "Your compiled review will appear here.";
  compileButton.addEventListener("click", async () => {
    output.value = await compileTripReview();
  });
  content.append(intro, awardsSection, form, compileButton, output);
  return card;
}

function mapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const mapFrameCenters = {
  osaka: [34.7025, 135.4959],
  kyoto: [34.9858, 135.7588],
  hiroshima: [34.3974, 132.4756],
  tokyo: [35.6812, 139.7671],
  kobe: [34.6901, 135.1955],
  fuji: [35.5171, 138.7518]
};

const overviewMapChapters = [
  { id: "osaka", label: "Osaka", cityId: "osaka", dayIds: ["day02", "day03", "day04", "day05", "day06"] },
  { id: "kyoto", label: "Kyoto", cityId: "kyoto", dayIds: ["day07", "day08", "day09", "day10"] },
  { id: "hiroshima", label: "Hiroshima", cityId: "hiroshima", dayIds: ["day11", "day12", "day13"] },
  { id: "tokyo-1", label: "Tokyo 1", cityId: "tokyo", dayIds: ["day14", "day15", "day16"] },
  { id: "kawaguchiko", label: "Kawaguchiko", cityId: "tokyo", dayIds: ["day17", "day18", "day19"] },
  { id: "tokyo-2", label: "Tokyo 2", cityId: "tokyo", dayIds: ["day20", "day21"] }
];

const overviewDayColors = ["#d75f16", "#c7437a", "#285b96", "#397b8f", "#7b61b9"];

const overviewMapViews = {
  kyoto: { center: [34.9858, 135.7588], zoom: 11 },
  "tokyo-1": { center: [35.6812, 139.68], zoom: 11 },
  kawaguchiko: { center: [35.5171, 138.7518], zoom: 12 },
  "tokyo-2": { center: [35.6812, 139.7671], zoom: 12 }
};

const overviewMapFitDayIds = {
  hiroshima: ["day12", "day13"]
};

const placeBackground = {
  "Kansai International Airport": "KIX sits on an artificial island in Osaka Bay and is the main international gateway for the Kansai region. Treat arrival as logistics first—immigration, bags, IC cards and transit—before the trip's first Japan moment begins in Namba.",
  "Namba Station Osaka": "Namba is one of Osaka's great south-side hubs, linking the Midosuji subway, private railways toward Nara and Kansai Airport, and the dense Namba/Dotonbori entertainment zone. For this trip it is the practical front door to the hotel and first-night food walk.",
  "Namba Osaka": "The Namba hotel base is the reset point between scored tasting missions and evening izakaya runs. Return here for a real break—shower, lie down, stop eating—before heading to Tenma or Shin-Kobe.",
  "Ebisu Bridge Osaka": "Ebisu Bridge spans the Dotonbori canal and is one of the district's classic photo points, with neon, canal reflections and the running Glico sign nearby. On arrival night it works as a single contained reveal rather than the start of a long crawl.",
  "Dotonbori Osaka": "Dotonbori grew from a 17th-century canal project into Osaka's loudest food-and-entertainment strip. The giant signs and street snacks are not random spectacle—they come from a merchant city that has long treated eating well and showing off as the same art.",
  "Osaka Castle": "Toyotomi Hideyoshi began Osaka Castle in 1583 as the center of his effort to unify Japan; the present keep is a reconstruction and museum, but the moat, walls and distant reveal still establish Osaka's monumental scale. Arrive near opening for the best light and fewer crowds on the approach.",
  "Nippombashi Osaka": "Nippombashi is the broader district around Den Den Town and electronics culture south of the castle. It is the sensible lunch-and-transfer anchor between castle morning and pop-culture afternoon without adding another Osaka neighborhood.",
  "Nipponbashi Denden Town": "Den Den Town evolved from postwar electronics shopping into games, anime, figures and hobby stores. The value is browsing one or two displays that genuinely stop you—not trying to 'complete' the district.",
  "Shinsekai Osaka": "Shinsekai was unveiled in 1912 as a 'new world' entertainment district and keeps a retro, slightly theatrical street energy. Kushikatsu, Tsutenkaku views and blue-hour neon make it the day's natural evening finish.",
  "Kuromon Ichiba Market": "Kuromon began as a wholesale fish market and became one of Osaka's most famous public market streets. The Snack League works here because shared portions, category limits and a hard 11:30 exit turn abundance into a game instead of a blur.",
  "Daimaru Shinsaibashi": "Daimaru's Shinsaibashi flagship is a classic depachika-and-department-store food hall stop between Kuromon and Amerikamura. Use it for one controlled seated checkpoint—not a second full food mission.",
  "Amerikamura": "Amerikamura ('American Village') is Osaka's youth-fashion and casual-snack pocket near Shinsaibashi. One wildcard taste or drink here completes the afternoon arc before the hotel reset.",
  "Tenma Osaka": "Tenma grew around Osaka Tenmangu Shrine and its long shopping arcade. Compact izakaya streets and neighborhood bars make it the right lived-in dinner finish after a scored tasting day—not another Dotonbori night.",
  "Shin-Kobe Station": "Shin-Kobe is the Shinkansen station on Kobe's northern slope, immediately below the Nunobiki ropeway. It is the cleanest access point for the selected romantic outing without turning Kobe into a multi-district checklist.",
  "Nunobiki Ropeway": "The Nunobiki ropeway climbs from behind Shin-Kobe in minutes, opening broad views over the city, port and inland mountains. The ride itself is part of the payoff—pause at the window rather than treating it as pure transport.",
  "Kobe Nunobiki Herb Gardens": "Terraced herb and flower gardens sit above the upper ropeway station with café terraces and seasonal planting. One garden segment plus a seated pause is enough; the harbor view does the emotional work.",
  "Kintetsu Nara Station": "Kintetsu Nara brings you directly into the park-side east of the city, closer to Todai-ji than JR Nara. It is the practical arrival point for the Osaka-to-Kyoto bridge day with day bags only.",
  "Nara Park": "Nara Park preserves a landscape where deer, temples and open grass have coexisted for centuries. Keep deer encounters playful and brief—they open the day, but Todai-ji's scale is the capstone.",
  "Todai-ji Temple": "Todai-ji's Great Buddha Hall houses one of the world's largest bronze Buddha images, cast in the 8th century during political and epidemic anxiety. The present hall is smaller than its medieval predecessor, which makes the surviving scale even more startling.",
  "Naramachi": "Naramachi preserves merchant-lane townhouses and small shops south of the park. A short café or shopfront pause here transitions the day from sacred Nara toward Kyoto without adding another major sight.",
  "Kyoto Station": "Kyoto Station is a modern hub at the city's southern edge, linking Shinkansen, subways, buses and luggage services. On transfer days it is logistics—tickets, ekiben, bag forwarding—not a sightseeing destination.",
  "To-ji Temple": "To-ji's five-story pagoda is one of Kyoto's most recognizable skyline markers and the temple grounds are free to enter early. Use it only as an earned dawn bonus when luggage is handled and Himeji timing stays intact.",
  "Himeji Station": "Himeji Station sits a short walk or bus ride from the castle complex. Arriving before opening keeps the white-keep reveal humane and leaves margin for garden time and the westbound train.",
  "Himeji Castle": "Himeji is called the White Heron Castle because its pale plastered walls seem to lift above the city. Defensive design—narrow gates, confusing approaches, steep interiors— sits inside that beauty; choose interior or exterior focus rather than trying to exhaust every corner.",
  "Koko-en Garden": "Koko-en is a set of nine Edo-style gardens beside the castle moat, built on the site of samurai residences. It frames the keep from below and works as a calmer post-castle pause before collecting ekiben and continuing west.",
  "Hiroshima Station": "Hiroshima Station anchors the city's modern rail network and ekiben culture. On Day 11 it is the evening arrival point; on Day 14 it is where the eastbound tasting ritual begins before Tokyo.",
  "Hiroshima Peace Memorial Museum": "The museum presents evidence of the August 6, 1945 bombing and its human cost through objects, testimony and context. Visit while attention is strongest; the experience is meant to be faced directly, not rushed through as one item on a list.",
  "Hiroshima Peace Memorial Park": "The park links the museum, Cenotaph, Peace Flame and Atomic Bomb Dome along a designed memorial axis. Walking the axis after the museum lets evidence move toward public mourning and commitment rather than staying abstract.",
  "Atomic Bomb Dome": "The dome preserves the ruined Hiroshima Prefectural Industrial Promotion Hall, one of the few structures left standing near the hypocenter. Seeing it at dusk, after the museum and park walk, changes how the ruin reads against the living city around it.",
  "Hiroshima National Peace Memorial Hall": "The Memorial Hall offers a quieter, more contemplative space for remembrance alongside the main museum route. Use it if you need stillness after the primary exhibits rather than adding another crowded attraction.",
  "Miyajimaguchi Station": "Miyajimaguchi is the JR gateway to the ferry for Miyajima (Itsukushima). Check tide timing before leaving—torii and shrine corridors read differently at high and low water.",
  "Itsukushima Shrine": "Itsukushima was treated as too sacred to build on directly, so worship took place over the water. The floating corridors and great torii still use the tide to blur the boundary between architecture, sea and mountain.",
  "Miyajima Omotesando": "Omotesando is Miyajima's main merchant street for grilled oysters, anago-meshi, momiji manju and souvenir browsing. It is the island's food-and-atmosphere layer after the shrine—not a second checklist of temples.",
  "Daisho-in Temple": "Daisho-in climbs the hillside behind the town with lanterns, halls and forest atmosphere away from the busiest waterfront. Choose it when energy favors a quieter Buddhist precinct over the ropeway.",
  "Miyajima Ropeway": "The Miyajima ropeway climbs toward Mount Misen for broad Seto Inland Sea views. Altitude is entirely optional—the shrine, food street and forest paths already complete the romantic westward payoff.",
  "Tokyo Station": "Tokyo Station's red-brick Marunouchi side is both a Shinkansen hub and a symbol of Meiji-era modernisation. On arrival and departure days it handles ekiben, luggage and final train logistics rather than sightseeing.",
  "International House of Japan": "The International House in Roppongi is a placeholder Tokyo base for visa and map planning—not a confirmed booking. It sits between Azabu-juban and Roppongi stations and works as a stand-in until the real Nov 5–8 and Nov 11–13 property is locked.",
  "Hotel Cordia Osaka Hommachi": "Hotel Cordia Osaka Hommachi is the confirmed Hommachi base for Oct 24–28. Hommachi subway puts Namba, Dotonbori and Tenma within easy reach without sleeping on the loudest nightlife blocks.",
  "Hotel Monterey Kyoto": "Hotel Monterey Kyoto is the confirmed Karasuma Oike / Sanjo base for Oct 28–Nov 2. The central location keeps Nijo, Nishiki, Kamo River and Pontocho practical without deep Higashiyama hills.",
  "Hotel Granvia Hiroshima": "Hotel Granvia Hiroshima is built directly into JR Hiroshima Station—the confirmed base for Nov 2–5. Miyajima ferries, Peace Park taxis and the Tokyo Shinkansen all start from the same building.",
  "Kawaguchiko Hotel": "Kawaguchiko Hotel is the assumed lakeside base for Nov 8–11 until a final booking is confirmed. Three nights in one property turn Fuji from a day trip into a deliberate retreat between Tokyo stays.",
  "Ghibli Museum Mitaka": "Hayao Miyazaki designed the Ghibli Museum around curiosity, hand-drawn motion and discovery without a checklist. If tickets work, give the timed visit its full window; if not, Inokashira and Kichijoji still complete the day.",
  "Inokashira Park": "Inokashira Pond supplied water to Edo and later became one of Tokyo's beloved western parks. Ducks, bridges and lakeside paths make it the soft imaginative counterweight to museum time or the full-day fallback.",
  "Kichijoji Sunroad Shopping District": "Kichijoji's covered shotengai and side streets combine cafes, bakeries, music shops and dense residential life. One browse-and-snack loop here keeps the day feeling like a neighbourhood story rather than a museum extraction.",
  "Chofu Station Tokyo": "Chofu is a western Tokyo residential hub and the practical rail access for the friends-day neighbourhood. Treat it as a meeting point, not a destination in itself.",
  "Jindaiji Temple": "Jindaiji traces its foundation to the 8th century and preserves wooded temple lanes and soba tradition on Tokyo's western edge. Use it only if the friends route there—it is an optional parent-paced pause, not a required checklist temple.",
  "Jindai Botanical Gardens": "The botanical gardens beside Jindaiji offer seasonal planting and quiet paths when a gentler outdoor pause fits the friends-day rhythm. Skip if the social route stays entirely in shops and restaurants.",
  "Friends Neighborhood Tokyo": "Akko and Yoshi's home area is the most authentic Tokyo capstone because it is chosen by people who live there. Follow their food, shops and dinner pick without over-researching a tourist overlay.",
  "Shinjuku Station": "Shinjuku is one of the world's busiest rail nodes and the main launch point for the Kawaguchiko highway bus and Fuji Excursion. On Fuji days it is transfer logistics with small bags only; on return days it reunites you with the final Tokyo hotel.",
  "Kawaguchiko Station": "Kawaguchiko Station is the lakeside hub for buses, local routes and the start of the e-bike circuit. Arrive early enough on Day 17 to settle in before the light changes on Fuji.",
  "Lake Kawaguchiko": "Lake Kawaguchiko is the most accessible of the Fuji Five Lakes, with shoreline views that shift through the day as weather and angle change. Three nights here turn Fuji from a photograph into a lived-in retreat.",
  "Oishi Park": "Oishi Park on the lake's north shore is famous for seasonal flower fields framed against Fuji. It is the gentle parent-day anchor while hikers are on Mitsutoge—one viewpoint and café, not a second transport chain.",
  "Fuji Omuro Sengen Shrine": "This lakeside shrine sits among old cedars and is one of the circuit's quieter cultural stops. It rewards a short pause for atmosphere rather than a long visit.",
  "Kawaguchi Asama Shrine": "Kawaguchi Asama Shrine is associated with Fuji worship and offers another angle on local ritual along the bike route. A few minutes for the gate and grounds is enough.",
  "Mt Fuji Panorama Ropeway": "The Panorama Ropeway climbs Mount Tenjoyama for a compact Fuji-and-lake viewpoint when e-bikes are not the right choice. It is the short bad-weather or low-energy fallback—not a second major outing.",
  "Mitsutoge Trailhead": "The mountain-road trailhead shortens the Mitsutoge ascent enough to make a same-way summit day practical. Prebook taxis both ways and confirm this specific route, road, weather and turnaround time—do not use the once-daily bus or substitute the longer station approach.",
  "Mount Mitsutoge": "Mitsutoge's summit ridge looks directly toward Fuji rather than standing on it, making the marker photograph the day's headline objective. Start down at the fixed turnaround even if the ridge feels unfinished.",
  "Itchiku Kubota Art Museum": "Itchiku Kubota's museum displays monumental tsujigahana silk dyeing in a building designed around garden and mountain views. It is the slow-day cultural anchor while hikers are on the mountain.",
  "teamLab Borderless Azabudai Hills": "teamLab Borderless uses moving digital imagery to turn the body into part of the artwork. Go with generous admission margin and without trying to 'find every room'—one memorable space is enough.",
  "Tokyo Melonpan": "Melon bread is a modern Japanese bakery form rather than a single fixed recipe. Mai's chosen specialist branch turns an everyday snack into the trip's final food ritual—confirm stock and branch before the last afternoon.",
  "Final Tokyo Dinner": "The last celebratory meal is deliberately unhurried: name the ekiben and melon-bread champions, eat well, and finish packing with airport margin. Nothing else needs to be added to make the ending complete.",
  "Fushimi Inari Taisha": "The head shrine of the Inari network, associated with rice, prosperity and enterprise. The thousands of torii are private donations; fox statues represent Inari's messengers rather than the deity itself.",
  "Yotsutsuji Intersection Kyoto": "This four-way junction is the climb's practical scenic payoff, with a broad view across southern Kyoto. It is also the sensible turnaround point: the summit circuit adds time but not a more dramatic city panorama.",
  "Tofuku-ji Temple": "Founded in 1236, Tofuku-ji became one of Kyoto's major Rinzai Zen temples. Its name combines characters from Nara's Todai-ji and Kofuku-ji, while the Tsutenkyo bridge and modern Hojo gardens show very different eras of temple design.",
  "Kiyomizu-dera": "Kiyomizu-dera developed around the Otowa waterfall as a pilgrimage site dedicated to Kannon. Its famous wooden stage projects from the hillside without nails, turning the city view and the act of approaching the sanctuary into part of the religious experience.",
  "Sannenzaka": "The sloping stone lane formed part of the approach to Kiyomizu and still preserves machiya shopfronts. Its ominous 'three-year slope' legend is best understood as an old caution to walk carefully on steep stones, not a reason for anxiety.",
  "Ninenzaka": "Ninenzaka continues the historic pilgrimage and commercial approach below Kiyomizu. The lane's value is its scale—stone paving, tiled roofs and narrow frontages—not any single shop.",
  "Yasaka Shrine": "Yasaka is the spiritual anchor of Gion and the home shrine of the Gion Matsuri, which began as a ritual response to epidemic disease. Its gates and lanterns explain why the surrounding entertainment quarter developed here.",
  "Gion Kyoto": "Gion grew beside Yasaka Shrine as a district of teahouses and professional arts. It remains a working neighborhood rather than a stage set, so quiet observation and respect for private lanes matter more than trying to spot geiko or maiko.",
  "Arashiyama Bamboo Forest": "The grove is part of a landscape long used by aristocrats for villas, poetry and seasonal excursions. Its modern fame comes from the immersive sound and vertical light of the path, which is why an early, unhurried passage matters more than its modest length.",
  "Togetsukyo Bridge": "The present bridge follows a crossing with roots in the Heian period. Its name—Moon Crossing Bridge—comes from an emperor's poetic impression of the moon moving over the span, linking the river view to Arashiyama's courtly history.",
  "Ryoan-ji Temple": "Ryoan-ji is a Rinzai Zen temple best known for fifteen rocks arranged so that at least one is usually hidden from any single viewpoint. The garden offers no official solution; ambiguity and sustained looking are the point.",
  "Kinkaku-ji Temple": "The Golden Pavilion was the retirement villa of shogun Ashikaga Yoshimitsu before becoming the Zen temple Rokuon-ji. Its gold, pond and borrowed mountain scenery express political power and an imagined Pure Land, not austere minimalism.",
  "Kamishichiken Kyoto": "Kyoto's oldest geisha district developed near Kitano Tenmangu and was named for seven teahouses built with leftover materials from a shrine reconstruction. It is quieter than Gion and works best as a restrained tea, sweet or dinner atmosphere stop.",
  "Nijo Castle": "Nijo was built as the Tokugawa shoguns' Kyoto residence and as a display of authority near the imperial court. The decorated Ninomaru rooms staged political hierarchy; in 1867 the castle also hosted the announcement returning governing authority to the emperor.",
  "Kyoto Imperial Palace": "This compound was the principal residence of Japan's emperors until the capital moved to Tokyo in 1869. Much of what is seen today reflects repeated rebuilding, but the gates, ceremonial halls and controlled spaces preserve the logic of the court city.",
  "Kyoto International Manga Museum": "The museum is a partnership between Kyoto City and Kyoto Seika University, housed in a converted elementary school. Its Manga Wall treats comics as something to read, research and preserve, connecting popular culture to the city's academic life.",
  "Nishiki Market": "Nishiki developed around reliable cold groundwater that helped merchants preserve fish and produce. Known as Kyoto's Kitchen, it remains a retail market as well as a visitor attraction; tasting a few Kyoto ingredients is more revealing than treating it as unlimited street food.",
  "Kamo River Kyoto": "The Kamo shaped Kyoto's eastern edge, transport, leisure and flood control for centuries. Its central banks now function as shared urban living space, making the evening walk a glimpse of contemporary Kyoto rather than another monument.",
  "Pontocho Alley": "Pontocho is a narrow entertainment district between the Kamo River and Takase canal, historically lined with teahouses and restaurants. Its compact scale, river-facing dining and evening lanterns are central to the experience.",
  "Demachiyanagi Station Kyoto": "Demachiyanagi is the junction between central Kyoto, the Kamo/Takano river confluence and the Eizan line into the northeastern hills. Using it for breakfast makes the mountain day begin in a lived-in student and neighborhood district.",
  "Eizan Cable Hiei Station": "Cable Hiei is the upper station of the steep Eizan funicular from Yase; the line gains 561 meters in roughly 1.3 kilometers. It is a transfer point rather than the summit itself, with the ropeway continuing higher when operating.",
  "Enryaku-ji Temple": "Saicho founded Enryaku-ji in the late eighth century, and Mt Hiei became the center of Tendai Buddhism in Japan. Its scattered precincts trained monks who later shaped several other schools, so the forested mountain geography is part of the institution's meaning.",
  "Hieizan Sakamoto Station": "This JR station connects the Lake Biwa side of Mt Hiei with Kyoto and Otsu. The nearby town of Sakamoto grew around Enryaku-ji's service community and forms the practical eastern exit after descending by the Sakamoto cable route."
};

function dayMapCenter(day) {
  if (day.id === "day05") return mapFrameCenters.kobe;
  if (["day17", "day18", "day19"].includes(day.id)) return mapFrameCenters.fuji;
  return mapFrameCenters[state.activeCity] || [36.2048, 138.2529];
}

function mapsRouteUrl(day) {
  const places = dayMapPlaces(day);
  const hotel = STAY_HOTEL_BY_DAY[day.id] || (state.lodging[state.activeCity] || "").trim();
  const origin = hotel || places[0] || "Japan";
  const destination = places.at(-1) || origin;
  const waypoints = places.filter((place) => place !== hotel && place !== origin && place !== destination).join("|");
  const params = new URLSearchParams({ api: "1", travelmode: "transit", destination });
  params.set("origin", origin);
  if (waypoints) params.set("waypoints", waypoints);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

let activeDayLeafletMap = null;

function makeMapCard(day) {
  const mapPlaces = dayMapPlaces(day);
  const { card, content, summary } = makeCollapsibleCard({
    className: "map-card",
    label: "Map Layer",
    title: "Where things are",
    badge: "Map",
    open: true
  });
  card.classList.add("is-fixed-open");
  summary.tabIndex = -1;
  summary.setAttribute("aria-disabled", "true");
  summary.addEventListener("click", (event) => event.preventDefault());
  summary.addEventListener("keydown", (event) => event.preventDefault());
  card.addEventListener("toggle", () => { if (!card.open) card.open = true; });

  const mapElement = document.createElement("div");
  mapElement.className = "day-leaflet-map";
  mapElement.setAttribute("role", "application");
  mapElement.setAttribute("aria-label", `${day.title} interactive map with ${mapPlaces.length} numbered stops`);

  const placeList = document.createElement("ul");
  placeList.className = "place-list";
  const markers = [];
  const items = [];
  let focusedIndex = -1;
  let armedLinkIndex = -1;

  const focusPlace = (index) => {
    focusedIndex = index;
    items.forEach((item, itemIndex) => item.classList.toggle("is-map-focused", itemIndex === index));
    markers.forEach((marker, markerIndex) => {
      const selected = markerIndex === index;
      marker.setZIndexOffset(selected ? 1000 : 0);
      marker.getElement()?.classList.toggle("is-highlighted", selected);
      if (selected) marker.openTooltip();
      else marker.closeTooltip();
    });
  };
  const resetMap = () => {
    focusedIndex = -1;
    items.forEach((item) => item.classList.remove("is-map-focused"));
    markers.forEach((marker) => {
      marker.setZIndexOffset(0);
      marker.getElement()?.classList.remove("is-highlighted");
      marker.closeTooltip();
    });
  };

  let activityNumber = 0;
  mapPlaces.forEach((place, index) => {
    const hotel = isHotelPlace(place);
    const stopLabel = hotel ? null : ++activityNumber;
    const item = document.createElement("li");
    if (hotel) item.classList.add("is-hotel-stop");
    const link = document.createElement("a");
    const pinKey = document.createElement("span");
    link.href = mapsSearchUrl(`${place}, Japan`);
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", `${hotel ? "Hotel base" : `Stop ${stopLabel}`}, ${place}. On touch screens, tap once to highlight and again to open Google Maps.`);
    pinKey.className = `map-pin-key${hotel ? " is-hotel-pin" : ""}`;
    if (hotel) {
      pinKey.innerHTML = HOTEL_MARKER_ICON;
      pinKey.setAttribute("aria-label", "Hotel");
    } else {
      pinKey.textContent = String(stopLabel);
    }
    link.append(pinKey, document.createTextNode(place));
    link.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") focusPlace(index);
    });
    link.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") resetMap();
    });
    link.addEventListener("focus", () => focusPlace(index));
    link.addEventListener("blur", () => {
      if (!window.matchMedia("(hover: none), (pointer: coarse)").matches) resetMap();
    });
    link.addEventListener("click", (event) => {
      const touchStyleInput = window.matchMedia("(hover: none), (pointer: coarse)").matches;
      if (!touchStyleInput) return;
      if (armedLinkIndex !== index) {
        event.preventDefault();
        armedLinkIndex = index;
        focusPlace(index);
        link.setAttribute("aria-label", `${hotel ? "Hotel base" : `Stop ${stopLabel}`}, ${place}, highlighted. Tap again to open Google Maps.`);
      } else {
        armedLinkIndex = -1;
      }
    });
    item.append(link);
    const background = placeBackground[place];
    if (background) {
      const backgroundCopy = document.createElement("p");
      backgroundCopy.className = "map-place-background";
      backgroundCopy.textContent = background;
      item.append(backgroundCopy);
    }
    placeList.appendChild(item);
    items.push(item);
  });

  const mapHelp = document.createElement("p");
  mapHelp.className = "map-hover-help";
  mapHelp.textContent = "Gold bed pins mark tonight's hotel. Numbered pins are the day's activities. Hover a stop or map pin to highlight both; tap a pin for the full background note.";

  const actions = document.createElement("div");
  actions.className = "map-actions";

  const dayMapLink = document.createElement("a");
  dayMapLink.href = mapsRouteUrl(day);
  dayMapLink.target = "_blank";
  dayMapLink.rel = "noopener";
  dayMapLink.textContent = "Open Day Map";

  actions.append(dayMapLink);
  content.append(mapElement, mapHelp, placeList, actions);

  window.setTimeout(() => {
    if (!window.L || !window.PLACE_COORDINATES) {
      mapElement.classList.add("map-unavailable");
      mapElement.textContent = "The interactive map could not load. Use Open Day Map below instead.";
      return;
    }
    activeDayLeafletMap?.remove();
    const map = L.map(mapElement, { scrollWheelZoom: false, zoomControl: true });
    activeDayLeafletMap = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    const points = [];
    activityNumber = 0;
    mapPlaces.forEach((place, index) => {
      const coordinates = window.PLACE_COORDINATES[place];
      if (!coordinates) return;
      points.push(coordinates);
      const hotel = isHotelPlace(place);
      const stopLabel = hotel ? null : ++activityNumber;
      const icon = makeLeafletMarkerIcon({
        shellClass: "day-map-marker-shell",
        isHotel: hotel,
        label: stopLabel,
        dayColor: "var(--green)"
      });
      const markerTitle = hotel ? `Hotel: ${place}` : `${stopLabel}. ${place}`;
      const marker = L.marker(coordinates, { icon, keyboard: true, title: markerTitle, zIndexOffset: hotel ? 500 : 0 }).addTo(map);
      marker.bindTooltip(`<strong>${hotel ? "Hotel base" : stopLabel}. ${escapeHtml(place)}</strong>`, { direction: "top", offset: [0, -4] });
      const background = placeBackground[place];
      if (background) marker.bindPopup(`<strong>${hotel ? "Hotel base" : stopLabel}. ${escapeHtml(place)}</strong><p>${escapeHtml(background)}</p>`);
      marker.on("mouseover focus", () => focusPlace(index));
      marker.on("mouseout blur", resetMap);
      markers[index] = marker;
    });
    const bounds = L.latLngBounds(points);
    if (bounds.isValid()) map.fitBounds(bounds, { padding: [34, 34], maxZoom: 14 });
    else map.setView(dayMapCenter(day), 11);
    const missingPlaces = mapPlaces.filter((place) => !window.PLACE_COORDINATES[place]);
    mapHelp.textContent = missingPlaces.length
      ? `${points.length} of ${mapPlaces.length} pins loaded. Missing coordinates: ${missingPlaces.join(", ")}.`
      : `All ${points.length} pins loaded. Gold bed pins mark tonight's hotel; numbered pins are activities. Hover a stop or map pin to highlight both; tap a pin for the full note.`;
    map.whenReady(() => map.invalidateSize());
    if (focusedIndex >= 0) focusPlace(focusedIndex);
  }, 0);

  return card;
}

function makeDailyPhotoCard(day) {
  const { card, content } = makeCollapsibleCard({
    className: "daily-photo-card",
    label: "Daily Album",
    title: "Photos to catch today",
    badge: "5 slots",
    open: true
  });
  const grid = document.createElement("div");
  grid.className = "daily-photo-grid";
  dailyPhotoSlots.forEach(([slot, title, description]) => {
    const slotCard = document.createElement("section");
    const taskId = `${day.id}.photo.${slot}`;
    const task = {
      id: taskId,
      text: title,
      slot,
      dayId: day.id,
      dayTitle: day.title
    };
    const { controls, photos } = makePhotoControls(task, slot === "extra" ? "Add Extras" : slot === "thumbnail" ? "Add Thumbnail" : "Add Photo");
    slotCard.className = "daily-photo-slot";
    slotCard.innerHTML = `<h4>${title}</h4><p>${description}</p>`;
    slotCard.append(controls, photos);
    grid.appendChild(slotCard);
  });
  content.appendChild(grid);
  return card;
}

function makeWindowCarousel(carouselId, windows, labels, storageGroup = "dayWindows") {
  const carousel = document.createElement("section");
  const viewport = document.createElement("div");
  carousel.className = "day-carousel";
  viewport.className = "day-window-strip";
  viewport.setAttribute("aria-label", "Swipe or drag between windows");

  windows.forEach((window, index) => {
    window.classList.add("day-window");
    window.dataset.windowIndex = String(index);
    window.setAttribute("aria-label", `${labels[index]} window`);
    viewport.appendChild(window);
  });

  const maxIndex = windows.length - 1;
  let currentIndex = Math.min(Number(state[storageGroup]?.[carouselId]) || 0, maxIndex);
  let scrollTimer;
  function windowLeft(index) {
    return windows[index]?.offsetLeft || 0;
  }
  function closestWindowIndex() {
    return windows.reduce((closest, window, index) => Math.abs(window.offsetLeft - viewport.scrollLeft) < Math.abs(windows[closest].offsetLeft - viewport.scrollLeft) ? index : closest, 0);
  }
  function bringWindowToTop(index) {
    if (index <= 0) return;
    const carouselTop = carousel.getBoundingClientRect().top;
    const carouselIsAboveViewport = carouselTop < 0;
    // Only recover a carousel that is already above the viewport; never pull
    // the page downward when the reader is at or above its current position.
    if (!carouselIsAboveViewport) return;
    requestAnimationFrame(() => carousel.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }));
  }
  function goTo(index, behavior = "smooth") {
    const previousIndex = currentIndex;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    viewport.scrollTo({ left: windowLeft(currentIndex), behavior });
    state[storageGroup] = state[storageGroup] || {};
    state[storageGroup][carouselId] = currentIndex;
    saveState();
    if (previousIndex !== currentIndex) bringWindowToTop(currentIndex);
  }
  viewport.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const nextIndex = closestWindowIndex();
      if (nextIndex !== currentIndex) {
        currentIndex = Math.max(0, Math.min(nextIndex, maxIndex));
        state[storageGroup] = state[storageGroup] || {};
        state[storageGroup][carouselId] = currentIndex;
        saveState();
        bringWindowToTop(currentIndex);
      }
    }, 90);
  }, { passive: true });

  let dragStart = null;
  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.target.closest("button, input, select, textarea, a, summary, iframe, label, .leaflet-container, .overview-leaflet-map, .day-leaflet-map")) return;
    dragStart = { x: event.clientX, left: viewport.scrollLeft };
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener("pointermove", (event) => {
    if (!dragStart) return;
    viewport.scrollLeft = dragStart.left - (event.clientX - dragStart.x);
  });
  const endDrag = (event) => {
    if (!dragStart) return;
    dragStart = null;
    viewport.classList.remove("is-dragging");
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    goTo(closestWindowIndex());
  };
  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);

  carousel.append(viewport);
  requestAnimationFrame(() => goTo(currentIndex, "auto"));
  return carousel;
}

function renderDay(day) {
  dayPanel.innerHTML = `
    <div class="day-title">
      <p>${day.short}</p>
      <h2>${day.title}${day.date === todayIso() ? '<span class="today-pill">Today</span>' : ""}</h2>
      <p>${day.theme}</p>
    </div>
  `;
  const windows = [makeDayFrontPage(day), makeQuestPage(day), makeMapCard(day), makeDailyPhotoCard(day)];
  dayPanel.appendChild(makeWindowCarousel(day.id, windows, ["Plan", "Quest", "Map", "Photos"]));
}

function renderNav() {
  document.body.dataset.city = state.activeCity;
  document.querySelectorAll(".city-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.city === state.activeCity);
  });
  dayRail.innerHTML = '<button class="chip active" data-view="overview">Overview</button>';
  activeCity().days.forEach((day) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.dataset.view = day.id;
    applyOutsideCityStyle(button, day, state.activeCity);
    button.innerHTML = `
      <span>${day.short}</span>
    `;
    dayRail.appendChild(button);
  });
}

function snapOverviewToActiveCity() {
  requestAnimationFrame(() => {
    const overviewStrip = document.querySelector("#overviewCarouselHost .overview-carousel .day-window-strip");
    if (overviewStrip) {
      // Reset the primary overview directly. Calling scrollIntoView on a card
      // inside the hidden window can make the browser restore the wrong page.
      overviewStrip.scrollLeft = 0;
      overviewStrip.scrollTo({ left: 0, behavior: "auto" });
    }
    state.overviewWindows = state.overviewWindows || {};
    state.overviewWindows.overview = 0;
    saveState();
    const firstCityDay = document.querySelector(`#calendarGrid .calendar-day[data-city="${state.activeCity}"]`);
    if (!firstCityDay) return;
    const orderedDays = Object.values(tripData).flatMap((city) => city.days);
    const firstDayIndex = orderedDays.findIndex((day) => day.id === firstCityDay.dataset.day);
    const snapDay = firstDayIndex > 0 && state.activeCity !== "osaka" ? orderedDays[firstDayIndex - 1] : orderedDays[firstDayIndex];
    const snapTarget = document.querySelector(`#calendarGrid .calendar-day[data-day="${snapDay.id}"]`);
    const verticalTarget = snapTarget || firstCityDay;
    // Scroll the document by coordinates so the hidden horizontal carousel
    // window cannot be selected again as a side effect.
    const targetTop = verticalTarget.getBoundingClientRect().top + window.scrollY - 12;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    if (overviewStrip) overviewStrip.scrollLeft = 0;
  });
}

function showOverview() {
  document.body.dataset.city = state.activeCity;
  overviewPanel.classList.remove("hidden");
  dayPanel.classList.add("hidden");
  document.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.view === "overview"));
  renderOverview();
  renderStats();
}

function showDay(day) {
  if (!day) return;
  document.body.dataset.city = state.activeCity;
  overviewPanel.classList.add("hidden");
  dayPanel.classList.remove("hidden");
  document.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.view === day.id));
  renderDay(day);
  renderStats();
}

function renderStats() {
  if (!overviewPanel.classList.contains("hidden")) renderTripQuestDashboard();
}

let citySnapArmedFor = null;

cityRail.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-city]");
  if (!button) return;
  const selectedCity = button.dataset.city;
  const shouldSnap = citySnapArmedFor === selectedCity;
  citySnapArmedFor = shouldSnap ? null : selectedCity;
  state.activeCity = selectedCity;
  saveState();
  renderNav();
  showOverview();
  if (shouldSnap) snapOverviewToActiveCity();
  document.querySelectorAll(".city-chip").forEach((chip) => {
    const armed = !shouldSnap && chip.dataset.city === selectedCity;
    chip.classList.toggle("snap-armed", armed);
    chip.setAttribute("aria-label", armed ? `${activeCity().name} selected. Press again to jump to its calendar days.` : chip.textContent.trim());
  });
});

dayRail.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  citySnapArmedFor = null;
  document.querySelectorAll(".city-chip").forEach((chip) => chip.classList.remove("snap-armed"));
  const view = button.dataset.view;
  document.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  if (view === "overview") {
    showOverview();
  } else {
    showDay(activeCity().days.find((day) => day.id === view));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#themeToggle")?.addEventListener("click", () => {
  applyTheme(state.theme === "dark" ? "light" : "dark");
  saveState();
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
  navigator.serviceWorker.register(`sw.js?${APP_VERSION}`)
    .then((registration) => {
      registration.update();
      setInterval(() => registration.update(), 60 * 60 * 1000);
    })
    .catch(() => {});
}

applyTheme();
renderNav();
if (todayTarget) {
  showDay(todayTarget.day);
} else {
  showOverview();
}
