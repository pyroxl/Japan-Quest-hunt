function mapsQuery(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapsWalk(origin, destination, waypoints) {
  const url = new URL("https://www.google.com/maps/dir/");
  url.searchParams.set("api", "1");
  url.searchParams.set("origin", origin);
  url.searchParams.set("destination", destination);
  if (waypoints) url.searchParams.set("waypoints", waypoints);
  url.searchParams.set("travelmode", "walking");
  return url.toString();
}

const WANDER_DAY = {
  day02: { city: "osaka", areas: ["hommachi"], energy: "low", window: "evening", count: 1 },
  day03: { city: "osaka", areas: ["namba"], energy: "low", window: "afternoon", count: 0 },
  day04: { city: "osaka", areas: ["kuromon"], energy: "medium", window: "afternoon", count: 0 },
  day05: { city: "osaka", areas: ["castle"], energy: "low", window: "evening", count: 0 },
  day06: { city: "kyoto", areas: ["kiyamachi", "karasuma"], energy: "low", window: "evening", count: 1 },
  day07: { city: "kyoto", areas: ["gion"], energy: "low", window: "evening", count: 2 },
  day08: { city: "kyoto", areas: ["arashiyama"], energy: "medium", window: "afternoon", count: 0 },
  day09: { city: "kyoto", areas: ["central"], energy: "low", window: "evening", count: 0 },
  day10: { city: "kyoto", areas: ["uzumasa"], energy: "low", window: "evening", count: 0 },
  day11: { city: "hiroshima", areas: ["station"], energy: "low", window: "evening", count: 1 },
  day12: { city: "hiroshima", areas: ["peace"], energy: "low", window: "afternoon", count: 0 },
  day13: { city: "hiroshima", areas: ["station"], energy: "low", window: "evening", count: 0 },
  day14: { city: "tokyo", areas: ["nishi-shinjuku"], energy: "low", window: "evening", count: 1 },
  day15: { city: "tokyo", areas: ["kichijoji"], energy: "medium", window: "day", count: 2 },
  day16: { city: "tokyo", areas: ["nishi-shinjuku"], energy: "low", window: "evening", count: 2 },
  day17: { city: "hakone", areas: ["gora"], energy: "low", window: "afternoon", count: 1 },
  day18: { city: "hakone", areas: ["gora"], energy: "high", window: "day", count: 0 },
  day19: { city: "hakone", areas: ["gora"], energy: "high", window: "day", count: 0 },
  day20: { city: "tokyo", areas: ["nishi-shinjuku"], energy: "low", window: "evening", count: 1 },
  day21: { city: "tokyo", areas: ["ginza"], energy: "medium", window: "afternoon", count: 0 }
};

const WANDER_IDEAS = {
  osaka: [
    { id: "shinsaibashi-suji", name: "Shinsaibashi-suji", line: "covered street, then back", why: "A covered shopping street for a short look, then back.", travel: "About 10 minutes on foot from Hotel Cordia.", maps: mapsQuery("Shinsaibashi-suji Shopping Street Osaka"), areas: ["hommachi", "shinsaibashi"], energy: "low", when: ["evening", "afternoon"], rank: 0 },
    { id: "namba-yasaka", name: "Namba Yasaka Shrine", line: "small shrine, lion stage", why: "A small shrine stop. The lion stage is the whole visit.", travel: "About 15 minutes on foot from Hommachi.", maps: mapsQuery("Namba Yasaka Shrine Osaka"), areas: ["namba", "hommachi"], energy: "low", when: ["evening"], rank: 1 },
    { id: "tenma-arcade", name: "Tenjinbashi-suji", line: "covered arcade", why: "A long covered arcade in Tenma. Oct 26 dinner is Bochi bochi, not here.", travel: "About 20 minutes from Hommachi by subway to Minami-morimachi.", maps: mapsQuery("Tenjinbashi-suji Shopping Street Osaka"), areas: ["tenma"], energy: "medium", when: ["afternoon", "evening"], rank: 0 }
  ],
  kyoto: [
    { id: "shirakawa", name: "Shirakawa lane", line: "willow canal, one block", why: "The willow canal in Gion. Walk one block and turn around.", travel: "You are already in Gion after lunch.", maps: mapsQuery("Shirakawa River Gion Kyoto"), areas: ["gion"], energy: "low", when: ["evening"], rank: 0 },
    { id: "yasaka-lanterns", name: "Yasaka lanterns", line: "evening lanterns at the shrine", why: "The shrine is open, and the lanterns are the evening view.", travel: "A few minutes from Shirakawa or Gion-Shijo.", maps: mapsQuery("Yasaka Shrine Kyoto"), areas: ["gion"], energy: "low", when: ["evening"], rank: 1 },
    { id: "kiyamachi", name: "Kiyamachi canal", line: "flat canal walk from the hotel", why: "A flat walk east of the hotel along the canal.", travel: "About 10 minutes on foot from Hotel Monterey Kyoto.", maps: mapsQuery("Kiyamachi Sanjo Kyoto"), areas: ["kiyamachi", "karasuma"], energy: "low", when: ["evening"], rank: 0 }
  ],
  hiroshima: [
    { id: "hondori", name: "Hondori arcade", line: "covered street by the hotel", why: "A covered street if you want ten minutes out of the hotel.", travel: "About 10 minutes on foot from Hotel Granvia Hiroshima.", maps: mapsQuery("Hondori Shopping Street Hiroshima"), areas: ["station"], energy: "low", when: ["evening"], rank: 0 }
  ],
  tokyo: [
    { id: "hotel-block", name: "Hotel block", line: "streets around the hotel", why: "Stay on the streets around the hotel. Stop at the first place to sit.", travel: "Starts at Nishi-shinjuku-gochome Station, next to the hotel.", maps: mapsQuery("Nishi-shinjuku-gochome Station"), areas: ["nishi-shinjuku"], energy: "low", when: ["evening"], rank: 0 },
    { id: "tocho", name: "Tocho observatories", line: "free lookouts with seats", why: "Free lookouts with seats inside. Cafes are downstairs.", travel: "Toei Oedo line from Nishi-shinjuku-gochome to Tochomae, about 10 minutes.", maps: mapsQuery("Tokyo Metropolitan Government Building"), areas: ["nishi-shinjuku"], energy: "low", when: ["evening", "afternoon"], rank: 1 },
    { id: "hachimangu", name: "Musashino Hachimangu", line: "small shrine by the park", why: "A small shrine at the edge of Inokashira Park.", travel: "About 8 minutes on foot from Kichijoji Station.", maps: mapsQuery("Musashino Hachimangu Kichijoji"), areas: ["kichijoji"], energy: "low", when: ["day", "afternoon"], rank: 0 },
    { id: "nakamichi", name: "Nakamichi-dori", line: "covered street for a snack", why: "A covered shopping street for one snack or a bakery check.", travel: "About 3 minutes on foot from Kichijoji Station.", maps: mapsQuery("Nakamichi-dori Kichijoji"), areas: ["kichijoji"], energy: "medium", when: ["day", "afternoon", "evening"], rank: 1 }
  ],
  hakone: [
    { id: "gora-park", name: "Gora Park", line: "short garden if time", why: "A short garden walk if the museum ends early.", travel: "About 10 minutes on foot from Tokinoyu Setsugetsuka.", maps: mapsQuery("Gora Park Hakone"), areas: ["gora"], energy: "low", when: ["afternoon"], rank: 0, who: "brianMai" }
  ]
};

const WALKING_LOOPS = [
  { name: "Kichijoji–Inokashira Park", short: "Kichijoji loop", areas: ["kichijoji"], minutes: "about 50 min", exit: "Turn back to the station anytime", url: mapsWalk("Kichijoji Station", "Kichijoji Station", "Inokashira Park") },
  { name: "Gion–Shirakawa–Kamo River", short: "Gion loop", areas: ["gion"], minutes: "about 40 min", exit: "Leave at Shijo or Gion-Shijo", url: mapsWalk("Gion-Shijo Station", "Gion-Shijo Station", "Shirakawa River Gion|Shijo Ohashi Bridge") },
  { name: "Hommachi–Shinsaibashi", short: "Hommachi loop", areas: ["hommachi"], minutes: "about 30 min", exit: "Turn around at Shinsaibashi", url: mapsWalk("Hotel Cordia Osaka Hommachi", "Hotel Cordia Osaka Hommachi", "Shinsaibashi-suji Shopping Street") },
  { name: "Kiyamachi–Kamo River", short: "Kiyamachi loop", areas: ["kiyamachi", "karasuma"], minutes: "about 35 min", exit: "Cross back at Sanjo or Oike", url: mapsWalk("Hotel Monterey Kyoto", "Hotel Monterey Kyoto", "Kiyamachi Sanjo|Sanjo Ohashi") },
  { name: "Hondori and back", short: "Hondori loop", areas: ["station"], minutes: "about 25 min", exit: "Walk straight back to the station", url: mapsWalk("Hotel Granvia Hiroshima", "Hotel Granvia Hiroshima", "Hondori Shopping Street Hiroshima") },
  { name: "Nishi-Shinjuku south loop", short: "Nishi-Shinjuku loop", areas: ["nishi-shinjuku"], minutes: "about 30 min", exit: "Stop when you want to sit", url: mapsWalk("Nishi-shinjuku-gochome Station", "Nishi-shinjuku-gochome Station", "Shinjuku Central Park") },
  { name: "Gora station loop", short: "Gora loop", areas: ["gora"], minutes: "about 25 min", exit: "Walk back to Gora Station", url: mapsWalk("Gora Station", "Gora Station", "Gora Park Hakone") }
];

const EVENING_OPTIONS = {
  day02: { mode: "later", note: "after check-in, then stop" },
  day06: { mode: "later", note: "after Monterey check-in" },
  day07: { mode: "after", anchor: "Tempura Endo", note: "stay around Gion" },
  day14: { mode: "after", anchor: "check-in", note: "short walk, then dinner" },
  day16: { mode: "after", anchor: "Shibuya", note: "if Akko's evening falls through" },
  day20: { mode: "later", note: "if the Romancecar is early" }
};

const DINNER_NOTE = "A walk-in does not guarantee a table.";

const WALK_IN_DINNERS = {
  osaka: {
    title: "Walk-in dinner near Hommachi",
    places: [
      { name: "Kyo Chabana", line: "okonomiyaki, including tomato", why: "Okonomiyaki, including a tomato one. Non-smoking on Tabelog. Open daily from 17:00. About 10 minutes on foot from Hommachi.", maps: mapsQuery("お好み焼き 京ちゃばな 心斎橋南船場店") },
      { name: "Okonomiyaki Dan", line: "okonomiyaki, closed Sunday", why: "Okonomiyaki. Non-smoking on Tabelog. Opens at 17:00. Closed Sunday. About 15 minutes on foot from Hommachi.", maps: mapsQuery("お好み焼だん 心斎橋筋") }
    ]
  },
  kyoto: {
    title: "Walk-in dinner near Karasuma",
    places: [
      { name: "Motoi Gyoza", line: "gyoza, closed Wednesday", why: "Gyoza. Non-smoking on Tabelog. No reservations. Closed Wednesday. About 5 minutes on foot from Karasuma Station.", maps: mapsQuery("モトイギョーザ 京都 柳馬場") },
      { name: "DONGURI", line: "okonomiyaki near Shijo", why: "Okonomiyaki. Non-smoking on Tabelog. Opens at 17:00. Closed days vary. About 2 minutes on foot from Shijo Station.", maps: mapsQuery("どんぐり 四条烏丸店") },
      { name: "Kiten Ya", line: "tempura, closed Sunday", why: "Tempura. Non-smoking on Tabelog. Closed Sunday. About 5 minutes on foot from Karasuma Station.", maps: mapsQuery("奇天屋 京都 高倉") }
    ]
  },
  hiroshima: {
    title: "Walk-in dinner at Hiroshima Station",
    places: [
      { name: "Denkosekka", line: "okonomiyaki inside ekie", why: "Hiroshima okonomiyaki. Non-smoking on Tabelog. No reservations. Inside ekie at the station.", maps: mapsQuery("電光石火 ekie広島店") },
      { name: "Micchan Sohonten", line: "okonomiyaki on the 1st floor", why: "Hiroshima okonomiyaki. Non-smoking on Tabelog. No reservations. On the ekie 1st floor.", maps: mapsQuery("お好み焼みっちゃん総本店 ekie") },
      { name: "Gyoza Ryu", line: "gyoza on the 2nd floor", why: "Gyoza. Non-smoking on Tabelog. No reservations. On the ekie 2nd floor.", maps: mapsQuery("ひろしまギョウザ 餃子家 龍 ekie") }
    ]
  },
  tokyo: {
    title: "Walk-in dinner near Nishi-Shinjuku",
    places: [
      { name: "Ebisu Gyoza Daifuki", line: "gyoza beside the station", why: "Gyoza. Non-smoking on Tabelog. Beside Nishi-shinjuku-gochome Station.", maps: mapsQuery("恵比寿餃子 大豊記 西新宿") },
      { name: "Shibuya Gyoza", line: "gyoza and mapo tofu", why: "Gyoza, and mapo tofu. Non-smoking on Tabelog. About 15 minutes on foot, or one train stop to Shinjuku.", maps: mapsQuery("渋谷餃子 新宿西口店") },
      { name: "Tofu Kichiza", line: "tofu and tempura upstairs", why: "Tofu and tempura on the restaurant floor. Non-smoking on Tabelog. About 15 minutes on foot to Shinjuku, then the 8th floor.", maps: mapsQuery("とうふ料理 吉座 京王百貨店新宿店") }
    ]
  }
};

const DINNER_PENDING = {
  day10: "Around Uzumasa Kyoto Village at about 18:30. Venue not picked yet. Non-smoking only. Mai avoids sliced or whole-cut meat, mochi, and matcha."
};

const DINNER_DAYS = {
  day02: "osaka",
  day06: "kyoto",
  day07: "kyoto",
  day11: "hiroshima",
  day13: "hiroshima",
  day14: "tokyo",
  day15: "tokyo",
  day16: "tokyo",
  day20: "tokyo"
};

const DINNER_LEAD = {
  day11: "Reichan stays the plan",
  day13: "station dinner after Miyajima"
};

const PARENT_DAYS = new Set(["day17", "day18", "day19"]);

const PARENT_IDEAS = [
  { name: "Shinjuku Gyoen", line: "benches and a greenhouse", route: "Oedo to Shinjuku, then about 12 minutes on foot. Morning.", maps: mapsQuery("Shinjuku Gyoen") },
  { name: "Tocho observatories", line: "free seats and cafes", route: "Oedo to Tochomae, about 10 minutes.", maps: mapsQuery("Tokyo Metropolitan Government Building") },
  { name: "Shinjuku Central Park", line: "flat park with benches", route: "Same Tochomae ride, or walk north.", maps: mapsQuery("Shinjuku Central Park") }
];

function wanderProfile(dayId) {
  return WANDER_DAY[dayId] || null;
}

function ideaScore(idea, profile) {
  const areaHit = idea.areas.some((area) => profile.areas.includes(area));
  if (!areaHit) return -1;
  let score = 6;
  if (idea.energy === profile.energy) score += 2;
  else if (profile.energy === "medium" && idea.energy === "low") score += 1;
  else if (profile.energy === "low" && idea.energy === "high") score -= 4;
  if (idea.when.includes(profile.window) || idea.when.includes("any")) score += 2;
  else score -= 2;
  return score;
}

function bestWanderPicks(dayId) {
  const profile = wanderProfile(dayId);
  if (!profile || !profile.count) return [];
  return (WANDER_IDEAS[profile.city] || [])
    .map((idea) => ({ idea, score: ideaScore(idea, profile) }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.idea.rank - b.idea.rank)
    .slice(0, profile.count)
    .map((row) => row.idea);
}

function wanderLoop(dayId) {
  const profile = wanderProfile(dayId);
  if (!profile) return null;
  return WALKING_LOOPS.find((loop) => loop.areas.some((area) => profile.areas.includes(area))) || null;
}

function mapsLink(url, label) {
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label || "Maps")}</a>`;
}

function wanderLine(name, reason, url, label) {
  const link = url ? ` · ${mapsLink(url, label)}` : "";
  return `<p class="wander-line"><strong>${escapeHtml(name)}</strong> · ${escapeHtml(reason)}${link}</p>`;
}

function wanderNest(title, body, extraClass) {
  const classes = ["wander-nest", extraClass].filter(Boolean).join(" ");
  return `<details class="${classes}"><summary>${escapeHtml(title)}</summary><div class="wander-nest-body">${body}</div></details>`;
}

function dinnerNest(dayId, dinner) {
  const lead = DINNER_LEAD[dayId] ? `<p class="wander-line">${escapeHtml(DINNER_LEAD[dayId])}</p>` : "";
  const lines = dinner.places.map((place) => wanderLine(place.name, place.line, place.maps)).join("");
  const count = dinner.places.length;
  return wanderNest(`${count} dinner pick${count === 1 ? "" : "s"} · table not guaranteed`, `${lead}${lines}`);
}

function pendingDinnerHtml(dayId) {
  const note = DINNER_PENDING[dayId];
  if (!note) return "";
  return wanderNest("Dinner · not picked yet", `<p class="wander-line">${escapeHtml(note)}</p>`);
}

function loopNest(loop) {
  return wanderNest(`${loop.short} · ${loop.minutes}`, wanderLine(loop.short, loop.exit, loop.url, "Directions"));
}

function parentNest() {
  const ideas = PARENT_IDEAS.map((idea) => wanderLine(idea.name, idea.line, idea.maps) + wanderNest("Route", `<p class="wander-line">${escapeHtml(idea.route)}</p>`)).join("");
  const haneda = wanderLine("Haneda", "UA804 leaves at 16:50", mapsQuery("Haneda Airport Terminal 3"));
  const route = wanderNest("Route", `<p class="wander-line">Leave by 13:30. Oedo to Daimon, then Asakusa. About 50 min.</p>`);
  const base = `<p class="wander-line"><strong>Base</strong> · APA Nishi-Shinjuku Gochome</p>`;
  return wanderNest("Parents · Nov 8–10", `${base}${ideas}${haneda}${route}${dinnerNest("", WALK_IN_DINNERS.tokyo)}`, "wander-parents");
}

function parentsWanderView() {
  return typeof travelerView === "function" && travelerView() === "parents";
}

function coupleWanderView() {
  return typeof coupleView === "function" ? coupleView() : typeof travelerView === "function" && (travelerView() === "brian" || travelerView() === "mai");
}

function wanderSummary(day) {
  const bits = [];
  if (PARENT_DAYS.has(day.id) && parentsWanderView()) return "Shinjuku Gyoen · Tocho";
  if (PARENT_DAYS.has(day.id) && !coupleWanderView()) bits.push("Parents' Tokyo ideas");
  const loop = wanderLoop(day.id);
  if (loop) bits.push(loop.short);
  if (DINNER_PENDING[day.id] && bits.length < 2) bits.push("Dinner not picked yet");
  const dinnerKey = DINNER_DAYS[day.id];
  let count = DINNER_PENDING[day.id] ? 0 : dinnerKey && WALK_IN_DINNERS[dinnerKey] ? WALK_IN_DINNERS[dinnerKey].places.length : 0;
  if (!count && PARENT_DAYS.has(day.id)) count = WALK_IN_DINNERS.tokyo.places.length;
  if (count && bits.length < 2) bits.push(`${count} dinner pick${count === 1 ? "" : "s"}`);
  if (!bits.length) {
    const pick = bestWanderPicks(day.id)[0];
    if (pick) bits.push(pick.name);
  }
  return bits.slice(0, 2).join(" · ");
}

function wanderInnerHtml(day) {
  const profile = wanderProfile(day.id);
  if (!profile) return "";
  if (PARENT_DAYS.has(day.id) && parentsWanderView()) return parentNest();
  const parts = [];
  const evening = EVENING_OPTIONS[day.id];
  if (evening) {
    const heading = evening.mode === "after" ? `After ${evening.anchor}` : "Later, if you feel like it";
    parts.push(`<p class="wander-line"><strong>${escapeHtml(heading)}</strong> · ${escapeHtml(evening.note)}</p>`);
  }
  bestWanderPicks(day.id).forEach((idea) => {
    if (idea.who && typeof sees === "function" && !sees(idea.who)) return;
    parts.push(wanderLine(idea.name, idea.line, idea.maps));
  });
  const loop = wanderLoop(day.id);
  if (loop) parts.push(loopNest(loop));
  const pendingDinner = pendingDinnerHtml(day.id);
  if (pendingDinner) parts.push(pendingDinner);
  else {
    const dinnerKey = DINNER_DAYS[day.id];
    const dinner = dinnerKey ? WALK_IN_DINNERS[dinnerKey] : null;
    if (dinner) parts.push(dinnerNest(day.id, dinner));
  }
  if (PARENT_DAYS.has(day.id) && !coupleWanderView()) parts.push(parentNest());
  return parts.join("");
}
