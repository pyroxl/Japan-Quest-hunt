const STORAGE_KEY = "tokyoQuestHunt.v4";
const APP_VERSION = "japan-quest-v32";
const PREVIOUS_STORAGE_KEY = "tokyoQuestHunt.v3";
const OLD_STORAGE_KEY = "tokyoQuestHunt.v2";
const PHOTO_DB_NAME = "japanQuestPhotos";
const PHOTO_STORE = "photos";

const legacyTripData = {
  osaka: {
    name: "Osaka",
    baseLabel: "Future Osaka hotel",
    description: "Food, neon, normal-life neighborhoods, and the Nara bridge to Kyoto.",
    ongoing: [
      {
        title: "Osaka Snack Opening Credits",
        type: "side",
        items: [
          "Try takoyaki or okonomiyaki before leaving Osaka.",
          "Choose one konbini dessert mostly by vibes.",
          "Find the best first-trip vending machine drink.",
          "Take one neon or food-street photo that feels like arrival."
        ]
      },
      {
        title: "Tiny Osaka Proofs",
        type: "egg",
        items: [
          "Spot a loud food sign or oversized restaurant display.",
          "Find a tiny side street quieter than the main area.",
          "Notice one local routine: commuting, shopping, smoking area, bike parking, anything."
        ]
      }
    ],
    days: [
      {
        id: "day02",
        date: "2026-10-25",
        short: "Oct 25",
        title: "Day 2 - Osaka Arrival Quest",
        theme: "Land, recover, and let Japan arrive through food and lights.",
        places: ["Kansai International Airport", "Namba Station Osaka", "Dotonbori Osaka"],
        groups: [
          ["Main quest", "main", ["Reach Osaka, check in, rest, and do a gentle Namba or Dotonbori food walk only if the body agrees."]],
          ["Side quests", "side", ["Eat one first-night snack.", "Find the nearest useful konbini.", "Take one 'we made it' photo.", "Choose tomorrow's breakfast candidate."]],
          ["Hidden eggs", "egg", ["A canal reflection.", "A food sign bigger than expected.", "A dessert that looks too cute for jet lag."]],
          ["Mai-coded moment", "mai", ["Mai gets one real first-night Japan moment without pressure."]],
          ["Soft landing", "soft", ["Stop early enough that tomorrow still feels possible."]]
        ]
      },
      {
        id: "day03",
        date: "2026-10-26",
        short: "Oct 26",
        title: "Day 3 - Food-First Osaka Quest",
        theme: "Japan feels edible from morning to night.",
        places: ["Namba Osaka", "Kuromon Ichiba Market", "Shinsekai Osaka", "Nipponbashi Denden Town"],
        groups: [
          ["Main quest", "main", ["Build the day around snacks, market wandering, and one playful neighborhood."]],
          ["Side quests", "side", ["Try a market bite at Kuromon.", "Choose either Shinsekai or Den Den Town as the energy add-on.", "Find one tiny shop display worth stopping for.", "Eat something fried, grilled, or noodly."]],
          ["Hidden eggs", "egg", ["A retro sign in Shinsekai.", "A character/anime/gaming detail in Den Den Town.", "A snack you did not know existed this morning."]],
          ["Mai-coded moment", "mai", ["Mai finds the food-everywhere feeling delightful rather than overwhelming."]],
          ["Soft landing", "soft", ["Drop the second neighborhood if the first one already won."]]
        ]
      },
      {
        id: "day04",
        date: "2026-10-27",
        short: "Oct 27",
        title: "Day 4 - Normal-Life Osaka Quest",
        theme: "Regular Osaka: cafes, small shops, and lived-in food streets.",
        places: ["Tenma Osaka", "Fukushima Osaka", "Nakazakicho Osaka"],
        groups: [
          ["Main quest", "main", ["Pick one local-feeling Osaka neighborhood cluster and let the day breathe."]],
          ["Side quests", "side", ["Find a cafe or bakery stop.", "Eat a casual dinner that does not feel tourist-scheduled.", "Take one street photo with no famous landmark in it.", "Choose one neighborhood we would happily return to."]],
          ["Hidden eggs", "egg", ["A small bar or restaurant with a charming sign.", "A tucked-away shop.", "A tiny houseplant, lantern, menu, or doorway detail."]],
          ["Mai-coded moment", "mai", ["Mai gets the 'imagine living here for an afternoon' feeling."]],
          ["Soft landing", "soft", ["Pick Tenma, Fukushima, or Nakazakicho. Not all three unless the day is asking for it."]]
        ]
      },
      {
        id: "day05",
        date: "2026-10-28",
        short: "Oct 28",
        title: "Day 5 - Nara Bridge Quest",
        theme: "Deer, giant Buddha, old streets, then Kyoto.",
        places: ["Kintetsu Nara Station", "Nara Park", "Todai-ji Temple", "Naramachi", "Kyoto Station"],
        groups: [
          ["Main quest", "main", ["Use Nara as the Osaka-to-Kyoto bridge: deer park, Todai-ji, and onward to Kyoto."]],
          ["Side quests", "side", ["Feed or politely observe the deer without turning the day chaotic.", "See Todai-ji's big historic anchor.", "Find a snack or cafe near Naramachi.", "Make the luggage plan feel competent."]],
          ["Hidden eggs", "egg", ["A deer bow or deer side-eye.", "A temple detail that makes the scale click.", "An old-town shopfront in Naramachi."]],
          ["Mai-coded moment", "mai", ["Mai gets an iconic Japan moment before the Kyoto chapter begins."]],
          ["Soft landing", "soft", ["Shorten Nara and go to Kyoto earlier if luggage or legs get annoying."]]
        ]
      }
    ]
  },
  kyoto: {
    name: "Kyoto",
    baseLabel: "Future Kyoto hotel",
    description: "Old streets, rivers, scenery, food markets, and one optional small-town transfer bonus.",
    ongoing: [
      {
        title: "Kyoto Soft-Beauty Collection",
        type: "side",
        items: [
          "Try matcha, wagashi, or a Kyoto sweet.",
          "Find one river or garden moment that makes everyone quiet.",
          "Take one old-street photo with no rush in it.",
          "Choose one cafe/rest stop before anyone needs rescuing."
        ]
      },
      {
        title: "Tiny Kyoto Proofs",
        type: "egg",
        items: [
          "Hear or notice a temple bell, shrine sound, or water sound.",
          "Spot a noren curtain, lantern, or tiny garden.",
          "Find a street that looks better when you slow down."
        ]
      }
    ],
    days: [
      {
        id: "day06",
        date: "2026-10-29",
        short: "Oct 29",
        title: "Day 6 - First Full Kyoto Quest",
        theme: "One historic anchor, then food and river atmosphere.",
        places: ["Nijo Castle", "Nishiki Market", "Pontocho Alley", "Sanjo Ohashi Bridge Kyoto"],
        groups: [
          ["Main quest", "main", ["Visit Nijo Castle, then let Nishiki, Pontocho, and the Kamo River carry the softer part of the day."]],
          ["Side quests", "side", ["Hear or notice the nightingale floors.", "Try one Nishiki snack.", "Walk by the Kamo River near Sanjo.", "Find a dinner lane that feels atmospheric."]],
          ["Hidden eggs", "egg", ["A castle gate detail.", "A food stall display that looks jewel-like.", "A riverbank sitting moment."]],
          ["Mai-coded moment", "mai", ["Mai gets Kyoto as history plus food, not just temples."]],
          ["Soft landing", "soft", ["Taxi or rest between the castle and evening if needed."]]
        ]
      },
      {
        id: "day07",
        date: "2026-10-30",
        short: "Oct 30",
        title: "Day 7 - Old Kyoto Quest",
        theme: "The big preserved-street, temple-on-the-hill day.",
        places: ["Kiyomizu-dera", "Sannenzaka", "Ninenzaka", "Yasaka Shrine", "Gion Kyoto"],
        groups: [
          ["Main quest", "main", ["Protect the old-Kyoto day: Kiyomizu-dera, Sannenzaka/Ninenzaka, and a gentle lower-Higashiyama ending."]],
          ["Side quests", "side", ["Use a taxi uphill if it saves the day.", "Find one matcha or sweet stop.", "Take one photo that feels like Mai's dream-trip Kyoto.", "Let Yasaka or Gion be the endpoint, not another forced march."]],
          ["Hidden eggs", "egg", ["A sloping-street detail.", "A view from Kiyomizu-dera.", "A lantern, shrine detail, or quiet corner near Yasaka."]],
          ["Mai-coded moment", "mai", ["Mai gets the old-Japan feeling without the day being overstuffed."]],
          ["Soft landing", "soft", ["Cafe/base-point strategy beats heroic walking."]]
        ]
      },
      {
        id: "day08",
        date: "2026-10-31",
        short: "Oct 31",
        title: "Day 8 - Arashiyama Scenery Quest",
        theme: "River, mountains, bamboo, and one scenic pause.",
        places: ["Arashiyama Station Kyoto", "Arashiyama Bamboo Forest", "Togetsukyo Bridge", "Okochi Sanso Garden"],
        groups: [
          ["Main quest", "main", ["Make Arashiyama about scenery and breathing room, not temple completionism."]],
          ["Side quests", "side", ["See the river and Togetsukyo Bridge.", "Walk a manageable bamboo section.", "Find a scenic cafe/rest point.", "Add Okochi Sanso only if the group wants more."]],
          ["Hidden eggs", "egg", ["A mountain-and-river view.", "A bamboo sound or shadow.", "A garden detail worth remembering."]],
          ["Mai-coded moment", "mai", ["Mai gets a beautiful open-air Kyoto day."]],
          ["Soft landing", "soft", ["Return before scenery becomes stamina debt."]]
        ]
      },
      {
        id: "day09",
        date: "2026-11-01",
        short: "Nov 1",
        title: "Day 9 - Soft Kyoto Quest",
        theme: "River rhythm, optional Fushimi Inari, cafes, and recovery.",
        places: ["Fushimi Inari Taisha", "Demachiyanagi Station", "Kamo River Delta", "Nanzen-ji"],
        groups: [
          ["Main quest", "main", ["Choose the soft version of Kyoto: optional early Fushimi Inari, then river/cafe/local rhythm."]],
          ["Side quests", "side", ["If doing Fushimi Inari, go early or keep it short.", "Sit at or near the Kamo River Delta.", "Find a bakery, cafe, or matcha stop.", "Add Nanzen-ji only if it sounds calming."]],
          ["Hidden eggs", "egg", ["A stepping-stone or river moment.", "A fox detail at Fushimi Inari.", "A quiet temple/scenery detail."]],
          ["Mai-coded moment", "mai", ["Mai gets Kyoto as a place to exist, not only sightsee."]],
          ["Soft landing", "soft", ["Let this day repair the trip battery."]]
        ]
      },
      {
        id: "day10",
        date: "2026-11-02",
        short: "Nov 2",
        title: "Day 10 - Omihachiman Bonus Quest",
        theme: "A canal-town lunch stop on the way to Tokyo, if energy allows.",
        places: ["Omi-Hachiman Station", "Hachiman-bori Canal", "Himure Hachimangu Shrine", "Hachimanyama Ropeway", "Tokyo Station"],
        groups: [
          ["Main quest", "main", ["If the group feels good, do the Omihachiman canal stop before continuing to Tokyo. If not, go straight to Tokyo."]],
          ["Side quests", "side", ["Store luggage without drama.", "Walk Hachiman-bori Canal.", "Eat lunch or a snack in town.", "Add the shrine or ropeway only if the day has room."]],
          ["Hidden eggs", "egg", ["A canal reflection.", "An old merchant-town detail.", "A Lake Biwa or hill-view hint."]],
          ["Mai-coded moment", "mai", ["Mai gets a small-town/quaint bonus without changing hotels."]],
          ["Soft landing", "soft", ["Skipping Omihachiman still counts as winning the travel day."]]
        ]
      }
    ]
  },
  tokyo: {
    name: "Tokyo",
    baseLabel: "Future Tokyo hotel",
    description: "Local rhythm, Kawagoe, Ghibli/Kichijoji, teamLab, creative streets, and old Tokyo.",
    ongoing: [
      {
        title: 'The "Our Tokyo" Quest',
        type: "side",
        items: ['Find the cafe, bakery, konbini, or supermarket that becomes "our place."', "Return to it at least once.", "Remember one tiny routine from Tokyo that would be nice to steal for normal life."]
      },
      {
        title: "The Snack Dex",
        description: "Catch at least 10 Tokyo snacks or small foods. One bite counts.",
        type: "side",
        items: ["Depachika bento or prepared food", "Konbini dessert", "Onigiri", "Ramen", "Curry", "Melonpan", "Sweet potato snack in Kawagoe", "Cafe cake or parfait", "Soft serve", "Vending machine drink", "Station bakery item", "Mystery snack chosen mostly by packaging"]
      },
      {
        title: "The Photo Set",
        description: "No need to be influencers. These are for the album.",
        type: "side",
        items: ['Mai in front of something that feels like "her Tokyo"', "Us reflected in something: train window, shop glass, museum mirror, elevator, anything", "One extremely beautiful food photo", "One intentionally stupid food photo", "A quiet street", "A station sign from the neighborhood we sleep in", "The last Tokyo dinner or snack"]
      },
      {
        title: "The Tiny Proofs Of Life",
        type: "egg",
        items: ["Hear a station jingle and remember the line or station.", "Notice a display of seasonal sweets.", "Find a tiny shrine, statue, mascot, sign, or shop detail that was not planned.", "See a local person doing something ordinary that makes Tokyo feel livable.", "Buy one small thing under 1000 yen that feels like a souvenir from the day."]
      }
    ],
    days: [
      {
        id: "day11",
        date: "2026-11-03",
        short: "Nov 3",
        title: "Day 11 - Tokyo Settling Day",
        theme: "Make Tokyo usable before making it impressive.",
        places: ["Tokyo Station Ichibangai", "Kichijoji Station", "Ueno Station", "Nihonbashi Station"],
        groups: [
          ["Main quest", "main", ["Learn the hotel neighborhood: nearest station entrance, nearest konbini, one easy dinner option, and one place to sit."]],
          ["Side quests", "side", ["Do a depachika, supermarket, or station food hall dinner where everyone chooses one thing.", "Pick a default breakfast or coffee candidate.", "Find the most charming ordinary object of the day: mailbox, sign, menu board, tiny garden, train poster, anything.", "Choose one low-pressure evening route that we could repeat later if tired."]],
          ["Hidden eggs", "egg", ["A vending machine with a drink neither of us can confidently explain.", "A plastic food display or menu photo that makes us stop.", "A tiny local shop that looks like it has regulars."]],
          ["Mai-coded moment", "mai", ["Mai finds something cute within walking distance of the hotel."]],
          ["Soft landing", "soft", ["End before the city feels too big."]]
        ]
      },
      {
        id: "day12",
        date: "2026-11-04",
        short: "Nov 4",
        title: 'Day 12 - Kawagoe "Little Edo" Quest',
        theme: "A small-town chapter without moving hotels.",
        places: ["Kawagoe Station", "Kurazukuri no Machinami", "Toki no Kane", "Kashiya Yokocho"],
        groups: [
          ["Main quest", "main", ["Walk the kurazukuri warehouse street, find Toki no Kane bell tower, and reach Kashiya Yokocho candy alley."]],
          ["Side quests", "side", ["Try one sweet potato thing.", "Find a shopfront, sign, or old building detail that feels like a storybook panel.", "Buy one tiny sweet from candy alley.", "Get a photo where the modern street and old-town facade are both visible.", "Find a cafe or lunch spot that lets the day slow down."]],
          ["Hidden eggs", "egg", ["Bell tower sound, bell tower view, or bell tower snack.", "A sweet potato item that seems excessive.", "A side street quieter than the main drag."]],
          ["Mai-coded moment", "mai", ["Mai chooses the cutest shop, snack, or street detail of Kawagoe."]],
          ["Soft landing", "soft", ["Use a bus, taxi, cafe break, or early train back if the day starts asking too much."]]
        ]
      },
      {
        id: "day13",
        date: "2026-11-05",
        short: "Nov 5",
        title: "Day 13 - Ghibli / Kichijoji Quest",
        theme: "Soft imaginative Tokyo.",
        places: ["Ghibli Museum Mitaka", "Inokashira Park", "Kichijoji Sunroad Shopping District"],
        groups: [
          ["Main quest", "main", ["If tickets work: visit the Ghibli Museum. If tickets do not work: make Inokashira Park and Kichijoji the main quest and treat Ghibli as a photo-at-the-gate bonus only if it is convenient."]],
          ["Side quests", "side", ["Walk by the pond in Inokashira Park.", "Find a cafe that feels like it belongs in this day.", "Browse Kichijoji Sunroad or nearby streets without turning it into a shopping chore.", 'Choose a small object, snack, or memory that feels "animated" in spirit.', "Sit somewhere green for at least 10 minutes."]],
          ["Hidden eggs", "egg", ["A duck, boat, bridge, or pond reflection.", "A tiny handmade-looking shop display.", "A museum or park detail that rewards looking closely."]],
          ["Mai-coded moment", "mai", ['Mai gets the "this is why Tokyo is not just skyscrapers" feeling.']],
          ["Soft landing", "soft", ["Keep the post-museum plan gentle. Wonder uses battery."]]
        ]
      },
      {
        id: "day14",
        date: "2026-11-06",
        short: "Nov 6",
        title: "Day 14 - teamLab / Modern Tokyo Quest",
        theme: "Tokyo as light, polish, and food halls.",
        places: ["teamLab Borderless Azabudai Hills", "Azabudai Hills", "Ginza Mitsukoshi", "Nihonbashi Tokyo"],
        groups: [
          ["Main quest", "main", ["Visit teamLab Borderless at the booked time, or swap the day if booking/weather makes another plan smarter."]],
          ["Side quests", "side", ["Find the room or installation we most want to remember.", "Take one photo that is abstract enough to look like another planet.", "Recover with food or coffee around Azabudai, Roppongi, Ginza, or Nihonbashi.", "Do one beautiful food hall browse without needing to buy everything.", "Pick the fanciest-looking sweet we can reasonably split."]],
          ["Hidden eggs", "egg", ["A reflection that makes the room feel bigger.", "A food display arranged like jewelry.", "A tiny design detail in a modern building: restroom, elevator, sign, packaging, escalator view."]],
          ["Mai-coded moment", "mai", ["Mai finds one room, light effect, or dessert that feels magical rather than just impressive."]],
          ["Soft landing", "soft", ["Leave while the day still feels shiny."]]
        ]
      },
      {
        id: "day15",
        date: "2026-11-07",
        short: "Nov 7",
        title: "Day 15 - Cozy West Tokyo Quest",
        theme: "Let people who live there show us their Japan.",
        places: ["Tokyo Station", "Ueno Park", "Kichijoji"],
        groups: [
          ["Main quest", "main", ["Explore Jindaiji's temple lanes, share a soba lunch, and let Mai choose a garden, cafe, or cute neighborhood finish."]],
          ["Side quests", "side", ["Ask them for one place they genuinely like, not the place they think tourists should see.", "Eat something they recommend without over-researching it first.", "Learn one neighborhood fact, memory, or routine from them.", "Take a group photo that does not feel stiff.", "Get one local-life tip we would never have found alone."]],
          ["Hidden eggs", "egg", ["A leafy temple approach.", "A hand-painted yokai or shop detail.", "Steam rising from a soba kitchen."]],
          ["Mai-coded moment", "mai", ["Mai gets to feel welcomed into a real corner of Japan."]],
          ["Soft landing", "soft", ["Let the social part be the achievement. Do not add a big extra sightseeing plan unless everyone is clearly energized."]]
        ]
      },
      {
        id: "day16",
        date: "2026-11-08",
        short: "Nov 8",
        title: "Day 16 - Creative Neighborhood Quest",
        theme: "Indie Tokyo, manga-adjacent but not merch prison.",
        places: ["Shimokitazawa Station", "Koenji Station", "Nakano Broadway"],
        groups: [
          ["Main quest", "main", ["Choose one main neighborhood: Shimokitazawa, Koenji, or Nakano. Do it well instead of trying to win the map."]],
          ["Side quests", "side", ["Find one cafe, curry, ramen, crepe, or bakery stop.", "Browse vintage, record, book, character, or odd little shops for fun.", "If Nakano happens: find one specific anime/manga/object that makes Mai react.", "Take a street photo that captures creative local Tokyo.", "Find one shop that would be dangerous if luggage space were infinite."]],
          ["Hidden eggs", "egg", ["A hand-drawn sign.", "A tiny upstairs or basement shop.", "A weirdly specific collectible.", "A curry menu that creates indecision."]],
          ["Mai-coded moment", "mai", ["Mai finds something cute, nostalgic, strange, or deeply her."]],
          ["Soft landing", "soft", ["Stop before browsing becomes a stamina tax."]]
        ]
      },
      {
        id: "day17",
        date: "2026-11-09",
        short: "Nov 9",
        title: "Day 17 - Older Tokyo Quest",
        theme: "Small streets, temples, sweets, and old-neighborhood rhythm.",
        places: ["Yanaka Ginza", "Nezu Shrine", "Ueno Park", "Senso-ji Asakusa"],
        groups: [
          ["Main quest", "main", ["Do a gentle Yanaka / Nezu / Sendagi loop, with Yanaka Ginza and Nezu Shrine as the strongest anchors."]],
          ["Side quests", "side", ["Try melonpan if Asakusa or a good bakery fits naturally.", "Find a small temple, shrine, or cemetery-lane moment that feels calm rather than touristy.", "Eat one street snack on Yanaka Ginza.", "Add Ueno or Asakusa only if energy is good.", "Pick one old-neighborhood street we would happily wander again."]],
          ["Hidden eggs", "egg", ["A cat-themed sign, item, or shop detail in Yanaka.", "Red torii or shrine detail at Nezu.", "A Showa-feeling storefront.", "A snack line that looks worth it but not punishing."]],
          ["Mai-coded moment", "mai", ["Mai finds old Tokyo softer and cuter than expected."]],
          ["Soft landing", "soft", ["Skip Asakusa if the old-neighborhood loop already gave us enough."]]
        ]
      },
      {
        id: "day18",
        date: "2026-11-10",
        short: "Nov 10",
        title: "Day 18 - Final Food / Favorites Quest",
        theme: "No new stress. Collect the ending.",
        places: ["Tokyo Station", "Ginza", "Kichijoji"],
        groups: [
          ["Main quest", "main", ["Choose the final day by mood: souvenir run, missed target, repeat favorite, food crawl, or gentle neighborhood day."]],
          ["Side quests", "side", ["Revisit one place from earlier in Tokyo.", "Buy the snack or small souvenir we kept thinking about.", 'Eat the final "this is Tokyo" meal.', "Pack before the last evening gets too late.", "Say out loud the moment we think will stick with us."]],
          ["Hidden eggs", "egg", ["A final station sound.", "A last konbini choice.", "A food hall or supermarket item that deserves suitcase consideration.", "One tiny goodbye photo."]],
          ["Mai-coded moment", "mai", ["Mai gets to choose the emotional ending: cozy, tasty, cute, fancy, nostalgic, or low-key."]],
          ["Soft landing", "soft", ["Protect tomorrow's airport transfer by ending with margin."]]
        ]
      }
    ]
  }
};

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
  { id: "osaka-food", goal: "Osaka food and okonomiyaki", days: ["day03"], status: "Ready", why: "Food is one of Mai's clearest dream-trip priorities.", blocker: "", fallback: "Keep Kuromon short and eat okonomiyaki near the hotel." },
  { id: "izakaya", goal: "At least one izakaya night", days: ["day04"], status: "Ready", why: "A relaxed neighborhood meal gives Osaka an ordinary-life feeling.", blocker: "", fallback: "Choose a casual early dinner close to the hotel." },
  { id: "konbini", goal: "7-Eleven and konbini food experience", days: ["day02"], status: "Ready", why: "The first small everyday-Japan ritual begins immediately.", blocker: "", fallback: "Build breakfast from the nearest station or hotel konbini." },
  { id: "nara", goal: "Nara Park", days: ["day06"], status: "Ready", why: "Nara bridges Osaka and Kyoto with one iconic first-trip experience.", blocker: "", fallback: "Use taxis and keep the visit to the park and Todai-ji approach." },
  { id: "nijo", goal: "Nijo Castle", days: ["day07"], status: "Ready", why: "It is Kyoto's strongest non-temple historic anchor.", blocker: "", fallback: "Taxi to the castle and shorten Nishiki or the evening walk." },
  { id: "higashiyama", goal: "Kiyomizu-dera and Higashiyama", days: ["day08"], status: "Ready", why: "This is Mai's protected old-Kyoto atmosphere day.", blocker: "", fallback: "Taxi uphill, visit Kiyomizu, then descend only as far as energy allows." },
  { id: "matcha", goal: "Matcha and cafe time", days: ["day07", "day08", "day09", "day10"], status: "Ready", why: "Several Kyoto days provide natural, unhurried chances.", blocker: "", fallback: "Use a station, depachika, or hotel-nearby tea stop." },
  { id: "nature", goal: "At least two strong nature or scenery days", days: ["day09", "day13"], status: "Ready", why: "Arashiyama and Miyajima balance the city and history chapters.", blocker: "", fallback: "Use the riverside Arashiyama loop and Miyajima waterfront without climbs." },
  { id: "west-chapter", goal: "Himeji, Hiroshima, and Miyajima chapter", days: ["day11", "day12", "day13"], status: "Ready", why: "The westward chapter makes the longer trip feel meaningfully broader.", blocker: "", fallback: "Use castle exterior and garden, central Peace Park, and Miyajima waterfront routes." },
  { id: "tokyo-story", goal: "Tokyo through food, cute neighborhoods, museums, and pop culture", days: ["day14", "day15", "day16", "day17", "day18", "day19", "day20", "day21"], status: "Ready", why: "The Tokyo chapter is intentionally personal rather than a generic big-city checklist.", blocker: "", fallback: "Choose the day's one strongest neighborhood, meal, or creative anchor and release the rest." },
  { id: "ghibli", goal: "Ghibli and cute-culture experience", days: ["day15"], status: "Needs Booking", why: "It gives Mai a soft, imaginative Tokyo anchor.", blocker: "Ghibli Museum tickets must be secured.", fallback: "Make Inokashira Park and Kichijoji the complete day." },
  { id: "west-tokyo", goal: "Mai's gentle west-Tokyo day", days: ["day16"], status: "Ready", why: "Jindaiji, soba, greenery, and neighborhood atmosphere give Mai a soft local-Tokyo contrast.", blocker: "", fallback: "Keep the day to Jindaiji, lunch, and one cafe or garden pause." },
  { id: "anime", goal: "Manga or anime culture beyond shopping", days: ["day17"], status: "Ready", why: "Shimokitazawa is the default; the participatory evening capstone keeps pop culture personal.", blocker: "", fallback: "Use Nakano for focused anime/manga hunting or Koenji for live-house energy only if Mai asks." },
  { id: "teamlab", goal: "teamLab Borderless", days: ["day19"], status: "Needs Booking", why: "Mai already responded strongly to the visual experience.", blocker: "Timed admission must be booked.", fallback: "Use a modern-art museum plus one polished Tokyo food hall." },
];

const planningConstraints = [
  { title: "Private-only onsen rule", text: "Use only an in-room private bath, reservable private/family bath, clothed footbath, or skip bathing." },
  { title: "Ticket watch", text: "Ghibli Museum and teamLab remain protected roadmap goals with booking fallbacks." },
  { title: "Nice-to-have: Miyajima stay", text: "Consider an island splurge only if budget and luggage logistics support it; Hiroshima base remains a complete trip." },
  { title: "Nice-to-have: parents' extension", text: "A Tokyo extension after Mai and the user leave remains separate from the core trip." }
];

const regionalQuestPools = {
  osaka: [
    ["osaka-takoyaki", "food", "Try takoyaki from a busy specialist."],
    ["osaka-okonomiyaki", "food", "Share Osaka-style okonomiyaki."],
    ["osaka-kushikatsu", "food", "Try kushikatsu in Osaka."],
    ["osaka-negiyaki", "food", "Find negiyaki or another Osaka griddle specialty."],
    ["osaka-konbini", "food", "Build a konbini breakfast or dessert haul."],
    ["osaka-sign", "find", "Spot the loudest oversized food sign."],
    ["osaka-street", "photo", "Photograph an ordinary street with no landmark."],
    ["osaka-kissaten", "culture", "Pause in a kissaten or neighborhood cafe."]
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
    ["kyoto-hiei", "culture", "Make Mount Hiei and Enryaku-ji a full-day replacement only if the forecast and everyone's energy are excellent.", ["day10"]]
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

function questDay(id, date, title, theme, places, main, side, eggs, mai, soft) {
  return {
    id,
    date,
    short: new Date(`${date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    title: `Day ${Number(id.replace("day", ""))} - ${title.replace(/\s+Quest$/, "")}`,
    theme,
    places,
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
    baseLabel: "Future Osaka hotel",
    description: "Arrival neon, food, normal-life neighborhoods, a flexible reset day, and the Nara bridge.",
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
      questDay("day02", "2026-10-24", "Osaka Arrival Quest", "Land, recover, and let Japan arrive through food and lights.", ["Kansai International Airport", "Namba Station Osaka", "Dotonbori Osaka"], "Reach Osaka, rest properly, then cross Ebisu Bridge for one neon photo and one hot snack if the body agrees.", ["Find the nearest useful konbini", "Take the we-made-it photo", "Choose tomorrow's breakfast candidate", "Start the melon passport with a packaged baseline if hunger agrees"], ["A canal reflection", "A food sign bigger than expected", "A dessert too cute for jet lag"], "Mai gets one real first-night Japan moment without pressure.", "Stop while Dotonbori still feels magical."),
      questDay("day03", "2026-10-25", "Food-First Osaka Quest", "Japan feels edible from morning to night.", ["Namba Osaka", "Kuromon Ichiba Market", "Shinsekai Osaka", "Nipponbashi Denden Town"], "Build the day around snacks, Namba/Kuromon, and either Shinsekai or Den Den Town—not two equal anchors.", ["Try a market bite", "Eat something fried, grilled, or noodly", "Find one snack nobody knew existed this morning", "Hunt a fresh-bakery classic melon bread"], ["A retro Shinsekai sign", "A Den Den Town character detail", "A plastic food display"], "Mai gets the food-is-everywhere feeling without overwhelm.", "Drop the second neighborhood if the first already won."),
      questDay("day04", "2026-10-26", "Nakazakicho → Tenma Quest", "Mai-centered Nakazakicho afternoon, Tenma izakaya dinner capstone.", ["Nakazakicho Osaka", "Tenma Osaka"], "Wander Nakazakicho slowly for cafés, little shops, retro lanes, and photos; end with an easy izakaya dinner in Tenma.", ["Find a kissaten, cafe, or bakery in Nakazakicho", "Take slow street photos with no famous landmark", "Browse one or two tiny shops without turning it into a haul", "Eat a casual izakaya dinner in Tenma", "Choose one detail worth remembering from the afternoon"], ["A charming tiny restaurant sign", "A tucked-away shop", "A houseplant, noren, lantern, or doorway detail"], "Mai gets the softer, cuter, aesthetic date-afternoon feeling.", "Tenma dinner is the capstone; skip karaoke unless everyone still wants it."),
      questDay("day05", "2026-10-27", "Open Osaka / Nunobiki Quest", "Recovery by default; Kobe Nunobiki only if energy is genuinely good.", ["Nunobiki Herb Garden Kobe", "Shin-Kobe Ropeway", "Namba Osaka"], "If energy is good: sleep in, ride to Nunobiki Herb Gardens and the ropeway, café or terrace pause, optional Kobe dinner, then back to Osaka. Otherwise keep this a real recovery day.", ["Sleep without an alarm", "Budget ~60–75 minutes each way from Osaka/Umeda for Nunobiki", "Do Nunobiki only—no Kobe sightseeing pile-on", "Browse a depachika or supermarket if staying in Osaka", "Find a different melon-bread style", "Let Kobe replace Osaka rather than adding both"], ["A garden or ropeway view worth pausing for", "A bakery tray or supermarket picnic find", "The moment choosing less improves the trip"], "Mai gets a romantic soft outing without inheriting a substitute checklist.", "Recovery, laundry, or admin is a successful day."),
      questDay("day06", "2026-10-28", "Nara Bridge Quest", "Deer, giant Buddha, old streets, then Kyoto.", ["Kintetsu Nara Station", "Nara Park", "Todai-ji Temple", "Naramachi", "Kyoto Station"], "Use Nara as the Osaka-to-Kyoto bridge and make entering Todai-ji's Great Buddha Hall the capstone.", ["Observe or feed deer without making them the entire day", "Try yomogi mochi or kakinoha-zushi", "Find a cafe near Naramachi", "Make the luggage strategy feel competent"], ["A deer bow or side-eye", "A detail that makes Todai-ji's scale click", "An old-town shopfront"], "Mai gets an iconic Japan moment before Kyoto begins.", "Shorten Nara and reach Kyoto earlier if luggage or legs become the story.")
    ]
  },
  kyoto: {
    name: "Kyoto",
    baseLabel: "Future Kyoto hotel",
    description: "Old streets, river dusk, scenery, food markets, early torii, and a deliberately soft final day.",
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
      questDay("day07", "2026-10-29", "First Full Kyoto Quest", "One historic anchor, then food and river atmosphere.", ["Nijo Castle", "Nishiki Market", "Pontocho Alley", "Sanjo Ohashi Bridge Kyoto"], "Visit Nijo Castle, then make Kamo River dusk and a Pontocho-area dinner the day's emotional finish.", ["Notice the nightingale floors", "Try one Nishiki snack", "Sit or walk by the Kamo River", "Find an atmospheric but manageable dinner"], ["A castle gate detail", "A jewel-like food display", "A riverbank routine"], "Kyoto feels like history plus living food, not a temple checklist.", "Taxi or rest between castle and evening."),
      questDay("day08", "2026-10-30", "Old Kyoto Quest", "The big preserved-street, temple-on-the-hill day.", ["Kiyomizu-dera", "Sannenzaka", "Ninenzaka", "Yasaka Shrine", "Gion Kyoto"], "Protect Kiyomizu and the old streets, then let lantern-lit Yasaka/Gion be the atmospheric end.", ["Use a taxi uphill if it saves the day", "Find one matcha or wagashi stop", "Take Mai's dream-trip Kyoto photo", "Move respectfully through Gion without chasing geiko or maiko"], ["A sloping-street detail", "The Kiyomizu panorama", "A lantern-lit corner"], "Mai gets the old-Japan feeling without an overstuffed day.", "Cafe/base-point strategy beats heroic walking."),
      questDay("day09", "2026-10-31", "Arashiyama Scenery Quest", "One garden or bamboo reveal, then a shared riverside regroup.", ["Arashiyama Station Kyoto", "Togetsukyo Bridge", "Arashiyama Bamboo Forest", "Okochi Sanso Garden", "Tenryu-ji Temple"], "Choose Okochi Sanso, Tenryu-ji garden, or a manageable bamboo section, then rejoin the family at a riverside cafe; the rowboat is off the list.", ["See Togetsukyo and the river", "Choose one walking payoff rather than collecting all three", "Find the scenic cafe/rest base", "Try one excellent Arashiyama sweet"], ["A mountain-and-river frame", "A bamboo sound or shadow", "A garden detail worth remembering"], "Mai gets a beautiful open-air Kyoto day.", "Return before scenery becomes stamina debt."),
      questDay("day10", "2026-11-01", "Mount Inari Overlook and Soft Kyoto", "An early torii climb to the Yotsutsuji city overlook, then river, bakery, supermarket, and recovery.", ["Fushimi Inari Taisha", "Yotsutsuji Intersection Kyoto", "Demachiyanagi Station", "Kamo River Delta"], "Climb through Fushimi Inari's torii to the Yotsutsuji overlook, enjoy the view across southern Kyoto, then turn back and rejoin for an ordinary Kyoto afternoon.", ["Reach Yotsutsuji and take the city-overlook photo", "Find a bakery breakfast", "Sit near the Kamo River Delta", "Shop a supermarket or depachika for a hotel picnic", "Write or mail a postcard", "Look for matcha, hojicha, or tea-flavored melon bread"], ["A fox detail", "A quiet upper torii section", "Kyoto spreading out below the hillside"], "Mai gets a real hill walk and city view without needing to complete the summit loop.", "Turn back before Yotsutsuji if the climb stops being fun.")
    ]
  },
  hiroshima: {
    name: "Hiroshima",
    baseLabel: "Future Hiroshima hotel",
    description: "Himeji's reveal, a focused peace day, and Miyajima's island payoff.",
    ongoing: [
      {
        title: "Westward Food Chapter",
        type: "side",
        items: ["Hiroshima-style okonomiyaki", "Oyster if appealing", "Regular and warm momiji manju", "Anago-meshi", "Spicy Hiroshima tsukemen", "Hiroshima streetcar and Miyajima ferry"]
      }
    ],
    days: [
      questDay("day11", "2026-11-02", "Himeji and Ekiben Round One", "White-castle reveal, humane pacing, then the first scored train-food ride west.", ["Himeji Station", "Himeji Castle", "Koko-en Garden", "Hiroshima Station"], "See Himeji's white keep, choose interior or exterior-plus-Koko-en by mobility, then continue to Hiroshima.", ["Forward or simplify large luggage", "Photograph the first full castle reveal", "Buy different regional ekiben", "Photograph each box closed and open", "Score all five Ekiben League categories", "Eat Hiroshima-style okonomiyaki after check-in if energy agrees"], ["A castle-defense detail", "A garden frame of the keep", "An ekiben package too beautiful to ignore"], "The westward chapter announces itself through a castle and train-food ritual.", "Dad's exterior-and-garden version is a complete win."),
      questDay("day12", "2026-11-03", "Hiroshima Peace Quest", "Museum, remembrance, river, and the Dome at dusk without emotional clutter.", ["Hiroshima Peace Memorial Museum", "Hiroshima Peace Memorial Park", "Atomic Bomb Dome", "Hiroshima National Peace Memorial Hall"], "Move from the museum through the Cenotaph and memorial axis, then see the Atomic Bomb Dome at dusk.", ["Leave time for a quiet break", "Use the National Peace Memorial Hall if a quieter space helps", "Write one private sentence about what should be remembered", "Try momiji manju or a calm cafe instead of adding sightseeing"], ["The alignment through the Cenotaph", "A paper crane or peace message", "The river changing the mood of the park"], "The day feels thoughtful and humane, not consumed as an attraction.", "Shukkeien is optional; emotional room is the priority."),
      questDay("day13", "2026-11-04", "Miyajima Island Quest", "Torii, tide, deer, island food, forest, and dusk if the day allows.", ["Miyajimaguchi Station", "Itsukushima Shrine", "Miyajima Omotesando", "Daisho-in Temple", "Miyajima Ropeway"], "See Itsukushima Shrine and the torii at the day's tide, then let the island—not a completion list—be the payoff.", ["Ride the ferry", "Try anago-meshi", "Try a grilled oyster if appealing", "Compare warm and packaged momiji manju", "Choose Daisho-in or ropeway only by energy", "Stay for softer island atmosphere if practical"], ["Torii reflected or revealed by low tide", "A deer behaving like a local", "A forest, lantern, or sea detail away from the busiest street"], "Miyajima earns its place as the romantic westward payoff.", "Shrine, waterfront, food street, and cafe are a complete parent version.")
    ]
  },
  tokyo: {
    name: "Tokyo",
    baseLabel: "Future Tokyo hotel",
    description: "Eight Tokyo calendar days: arrival and ekiben settling, Ghibli, cozy west Tokyo, pop culture, Kawagoe, teamLab, old Tokyo, and favorite returns.",
    ongoing: [
      {
        title: "Our Tokyo Quest",
        type: "side",
        items: ["Find the cafe, bakery, konbini, or supermarket that becomes ours", "Return at least once", "Learn three station exits", "Remember one tiny Tokyo routine worth stealing for home"]
      },
      {
        title: "Tokyo Snack Dex",
        type: "side",
        items: ["Depachika food", "Onigiri", "Ramen", "Curry", "Sushi at two price levels", "Yakitori", "Teishoku", "Kawagoe sweet potato", "Taiyaki or ningyo-yaki", "Kissaten toast", "Mystery snack chosen by packaging"]
      },
      {
        title: "Photo Set",
        type: "side",
        items: ["Mai in front of her Tokyo", "Us reflected in something", "One beautiful food photo", "One stupid food photo", "A quiet street", "Our station sign", "The final dinner or snack"]
      }
    ],
    days: [
      questDay("day14", "2026-11-05", "Tokyo Arrival and Main Ekiben League", "The long Shinkansen becomes the experience: browse, choose, reveal, share, score, then settle into Tokyo.", ["Hiroshima Station", "Tokyo Station"], "Turn Hiroshima-to-Tokyo into the main ekiben tasting and a calm move into the Tokyo neighborhood.", ["Arrive early enough to browse", "Choose different regional boxes", "Photograph closed packages and open trays", "Trade tastes after departure", "Score all five categories", "Learn the Tokyo hotel station exit, konbini, and easiest dinner"], ["An unexpected bento ingredient", "A beautiful wrapper or clever compartment", "A train-window scene worth pausing lunch for"], "Train food becomes one of the day's actual memories and Tokyo begins gently.", "No Tokyo sightseeing is required after arrival."),
      questDay("day15", "2026-11-06", "Ghibli / Kichijoji Quest", "Soft imaginative Tokyo.", ["Ghibli Museum Mitaka", "Inokashira Park", "Kichijoji Sunroad Shopping District"], "If tickets work, visit Ghibli Museum and walk back through Inokashira Park; otherwise make the park and Kichijoji the complete quest.", ["Walk by the pond", "Find a cafe that belongs in this day", "Browse one shotengai", "Choose a snack or object animated in spirit", "Check bakeries for a new melon-bread style"], ["A duck, bridge, or pond reflection", "A handmade-looking display", "A detail that rewards looking closely"], "Mai gets why Tokyo is not just skyscrapers.", "Keep the post-museum plan gentle. Wonder uses battery."),
      questDay("day16", "2026-11-07", "Mai's Jindaiji and Cozy West Tokyo", "A gentle local-Tokyo day of temple lanes, soba, greenery, and small discoveries chosen for Mai.", ["Chofu Station Tokyo", "Jindaiji Temple", "Jindai Botanical Gardens", "Kichijoji Tokyo"], "Make Jindaiji's old lanes and soba lunch the anchor, then choose gardens, a cafe, or a soft Kichijoji finish based on Mai's mood.", ["Choose a soba shop that feels welcoming", "Find the cutest yokai or GeGeGe no Kitaro detail", "Browse one small ceramics, sweet, or craft shop", "Pause in the botanical gardens if the weather is kind", "Let Mai choose a cafe or dessert for the ending"], ["Steam rising from a soba kitchen", "A leafy temple approach", "A tiny charm, statue, or hand-painted sign"], "Mai gets a calm, cute, locally textured Tokyo day with room to choose what delights her.", "Jindaiji and lunch are already a complete day."),
      questDay("day17", "2026-11-08", "Shimokitazawa Creative Quest", "Default Shimokitazawa day with a participatory evening capstone Mai chooses.", ["Shimokitazawa Station", "Koenji Station", "Nakano Broadway"], "Default to Shimokitazawa for vintage shops, cafés, records/books, and curry/ramen; end with one participatory capstone Mai chooses—karaoke, live show, cozy bar/café, arcade, or event—not more shopping.", ["Find cafe, curry, ramen, crepe, or bakery", "Browse records, books, or vintage selectively", "Use Nakano only if Mai wants anime/manga hunting", "Use Koenji only if Mai wants live-house or scruffier indie nightlife", "Commit to one evening activity before browsing becomes retail fatigue", "Find a flavored melon bread"], ["A hand-drawn sign", "A tiny upstairs or basement shop", "A weirdly specific collectible"], "Mai finds something cute, creative, nostalgic, or deeply her.", "The capstone is an activity, not another shopping loop."),
      questDay("day18", "2026-11-09", "Kawagoe Little Edo Quest", "Warehouse streets, bell tower, candy alley, and sweet-potato snacks.", ["Kawagoe Station", "Kurazukuri no Machinami", "Toki no Kane", "Kashiya Yokocho"], "Walk the warehouse street and make Toki no Kane in late-afternoon light the capstone.", ["Try one sweet-potato thing", "Find a storybook shopfront", "Buy one tiny candy-alley sweet", "Find a cafe that slows the day", "Use bus or taxi between station and old town if helpful"], ["Bell sound, view, or snack", "An excessive sweet-potato item", "A quieter side street"], "Mai chooses the cutest Kawagoe detail.", "Return early if the compact old-town loop already won."),
      questDay("day19", "2026-11-10", "teamLab / Modern Tokyo Quest", "Immersive art, tea, and one polished food-hall finish.", ["teamLab Borderless Azabudai Hills", "Azabudai Hills", "Ginza Mitsukoshi", "Nihonbashi Tokyo"], "Visit teamLab Borderless at the booked time and use EN TEA HOUSE as the natural pause.", ["Find the room we most want to remember", "Take one abstract photo", "Try EN TEA HOUSE", "Browse one food hall without buying everything", "Split the fanciest reasonable sweet"], ["A reflection that changes the room", "Food displayed like jewelry", "A tiny modern design detail"], "Mai finds one room, light effect, or dessert that feels magical.", "teamLab plus one food stop is enough."),
      questDay("day20", "2026-11-11", "Older Tokyo and Melon Bread Quest", "Yanesen's small streets, shops, sweets, and a possible Asakusa jumbo round.", ["Nezu Shrine", "Sendagi Station", "Yanaka Ginza", "Yuyake Dandan", "Asakusa Kagetsudo"], "Move through Nezu/Sendagi and finish at Yanaka Ginza and the sunset steps; add Asakusa only if everyone actively wants it.", ["Visit Nezu Shrine or a small temple", "Try soba, udon, taiyaki, or a cafe", "Browse small ordinary shops", "If Asakusa happens, score the jumbo melon bread", "Buy and mail a postcard if still open"], ["A Showa-feeling storefront", "A cat or cat motif", "A sunset view from Yuyake Dandan"], "Old Tokyo feels softer and cuter than expected.", "Skip Asakusa if Yanesen already gave enough."),
      questDay("day21", "2026-11-12", "Final Food / Favorites Quest", "No new stress. Collect the ending.", ["Tokyo Station", "Ginza", "Kichijoji", "Shibuya"], "Choose the final day by mood, but keep a celebratory dinner and a deliberate favorite-neighborhood return or wanted spectacle.", ["Revisit one Tokyo place", "Buy the snack or small souvenir we kept thinking about", "Find a final wildcard melon bread or repeat the champion", "Eat the final this-is-Tokyo meal", "Choose Shibuya spectacle only if it genuinely appeals", "Pack with margin", "Name the champion ekiben and melon bread"], ["A final station sound", "A final konbini choice", "One tiny goodbye photo"], "Mai chooses the emotional ending: cozy, tasty, cute, fancy, nostalgic, or low-key.", "Protect tomorrow's airport transfer.")
    ]
  }
};

const awards = ["Best Japan day", "Best snack", "Best meal", "Cutest thing Mai found", "Best unplanned moment", 'Best "we live here now" moment', "Funniest small failure", "Place that felt most like ours", "The discovery we completed by accident", "One sentence we should remember"];

const hiddenDayGroupTypes = new Set(["mai", "soft"]);
const sharedDayGroupTypes = new Set(["side", "egg"]);

const legacyDayContext = {
  day02: {
    summary: "Arrival day is intentionally tiny: land at KIX, get to Osaka, recover, and let Namba or Dotonbori be the first low-pressure taste of Japan.",
    history: "Osaka grew as Japan's merchant kitchen, and Dotonbori became famous as an entertainment and food district during the early modern period. The huge signs and food culture are not random spectacle; they come from a city long associated with eating well and doing business loudly."
  },
  day03: {
    summary: "A food-first day built around Namba, Kuromon, and one playful add-on like Shinsekai or Den Den Town.",
    history: "Kuromon has long served Osaka cooks and shoppers as a market area. Shinsekai was designed in the early 1900s as a modern entertainment district, while Den Den Town reflects postwar electronics culture that later grew into games, anime, and hobby shopping."
  },
  day04: {
    summary: "Mai-centered Nakazakicho afternoon, then Tenma izakaya dinner as the food capstone.",
    history: "Nakazakicho survived with a pocket of narrow lanes and older wooden buildings that later attracted cafes, studios, and small shops. Tenma grew around one of Japan's great shrines and its long shopping arcade, making it a strong lived-in dinner neighborhood."
  },
  day05: {
    summary: "Recovery is the default win; Kobe Nunobiki Herb Gardens and the ropeway replace the plan only if energy is genuinely good.",
    history: "Nunobiki Herb Garden sits above Kobe with ropeway views over city and harbor. The outing works because it is one romantic soft chapter, not a full Kobe checklist."
  },
  day06: {
    summary: "First full Kyoto day: one powerful historic anchor at Nijo Castle, then food and river atmosphere around Nishiki, Pontocho, and the Kamo River.",
    history: "Nijo Castle was built for the Tokugawa shoguns in Kyoto, making it a political stage as much as a residence. Nishiki Market developed as a food market for the old capital, while Pontocho and the Kamo River preserve Kyoto's evening social rhythm."
  },
  day07: {
    summary: "The big old-Kyoto day: Kiyomizu-dera, preserved lanes, Yasaka, and Gion, protected from overstuffing.",
    history: "Kiyomizu-dera dates back over a thousand years and became one of Kyoto's iconic pilgrimage sites. The nearby slopes and Gion area preserve the feeling of Kyoto as a temple city, entertainment city, and craft/shop city all layered together."
  },
  day08: {
    summary: "Arashiyama is the scenery day: river, bridge, bamboo, mountains, and one beautiful pause.",
    history: "Arashiyama has been a scenic retreat for Kyoto elites since the Heian period. The river, mountain views, gardens, and temple landscapes are part of a long tradition of turning natural scenery into cultivated beauty."
  },
  day09: {
    summary: "A softer Kyoto day with optional Fushimi Inari, then river/cafe/local rhythm around Demachiyanagi or another calm pocket.",
    history: "Fushimi Inari is the head shrine of Inari worship, associated with rice, prosperity, and fox messengers. The Kamo River delta and northern Kyoto areas show the everyday side of the city: students, families, cafes, stepping stones, and slower local life."
  },
  day10: {
    summary: "Optional Omihachiman bonus: a canal-town lunch stop before continuing to Tokyo, only if the group has the energy.",
    history: "Omihachiman prospered as a merchant town, helped by canals connecting local trade to Lake Biwa routes. Its preserved canal area and old merchant atmosphere make it a compact glimpse of small-town commercial history."
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
    summary: "Modern Tokyo day: teamLab, polished central districts, and beautiful food halls.",
    history: "Roppongi, Azabudai, Ginza, and Nihonbashi show different versions of modern Tokyo: international culture, new redevelopment, luxury retail, and old commercial prestige. Nihonbashi was historically the road-distance marker for Edo."
  },
  day15: {
    summary: "A gentle west-Tokyo day uses Jindaiji, soba, greenery, and cute local details as the rhythm.",
    history: "Tokyo's residential neighborhoods are as important to understanding the city as its famous districts. Visiting locals on their home turf reveals the everyday networks of stations, shopping streets, temples, parks, and favorite restaurants."
  },
  day16: {
    summary: "Creative-neighborhood day: Shimokitazawa, Koenji, or Nakano, chosen lightly and explored well.",
    history: "Shimokitazawa and Koenji became known for music, theater, vintage shops, and alternative youth culture. Nakano Broadway is a postwar shopping complex that evolved into a dense collector and pop-culture ecosystem."
  },
  day17: {
    summary: "Shimokitazawa by default, with a participatory evening capstone Mai chooses.",
    history: "Shimokitazawa became known for music, theater, vintage shops, and alternative youth culture partly because its fine-grained streets supported independent tenants. Nakano Broadway and Koenji remain swaps only if Mai wants collector hunting or live-house energy."
  },
  day18: {
    summary: "Final Tokyo day is flexible: favorite return, souvenirs, food crawl, packing, or one missed target.",
    history: "A good final day in Tokyo often reflects the city's real nature: not one definitive sight, but the ability to choose your own pocket of food, shopping, transit, memory, and routine."
  }
};

const dayContext = {
  day02: {
    summary: "Arrival day stays deliberately small: reach Namba, rest for real, then let one neon-and-food walk be the first chapter of Japan.",
    timeline: [["Afternoon", "Land at KIX, clear the airport, and travel directly to the Osaka hotel."], ["17:00–19:00", "Check in, shower, unpack only what is needed, and rest."], ["19:00–21:00", "If energy agrees, cross Ebisu Bridge, share one hot Osaka snack, and find the nearest useful konbini."], ["By 21:30", "Return while the lights still feel magical; tomorrow matters more than squeezing in another stop."]],
    history: ["Osaka became Japan's great merchant city because water routes and warehouses connected the country's rice, goods, and money here. The phrase often translated as “the nation's kitchen” originally described this commercial role before it became shorthand for Osaka's appetite.", "Dotonbori began as a 17th-century canal project and grew into a theater district. Restaurants followed the crowds, and the extravagant signs outside are descendants of that competitive entertainment culture: Osaka announcing, loudly and cheerfully, that pleasure is serious business."]
  },
  day03: {
    summary: "Mai's food-is-everywhere day moves from market grazing to one playful southern Osaka neighborhood, with blue hour as the visual payoff.",
    timeline: [["09:00", "Start with a konbini or bakery breakfast and an unhurried Namba walk."], ["10:30–13:00", "Graze through Kuromon and nearby lanes; share portions instead of ordering a full meal at every stop."], ["13:00–16:00", "Rest, browse Namba, or choose Den Den Town if Mai wants games and pop culture."], ["16:30–19:30", "Choose Shinsekai for blue-hour signs and kushikatsu, then return without adding a second major district."]],
    history: ["Kuromon Ichiba developed from fish trading near Enmyoji Temple and became a pantry for Osaka's households and professional cooks. Its modern visitor-facing stalls sit on top of a much older market habit: judging freshness, season, and value at close range.", "Shinsekai was unveiled in 1912 as a vision of the “new world,” borrowing visual ideas from Paris and New York. After wartime decline it reinvented itself as a proudly retro district. Den Den Town tells a later version of the same story, shifting from postwar electronics into games, anime, and collector culture."]
  },
  day04: {
    summary: "Nakazakicho supplies the Mai-centered afternoon; Tenma supplies the izakaya dinner capstone.",
    timeline: [["No-alarm morning", "Sleep, do laundry if useful, and begin with a kissaten, bakery, or simple lunch."], ["12:00–16:30", "Wander Nakazakicho for cafés, little shops, retro lanes, and slow photos."], ["16:30–18:00", "Take a hotel or cafe reset before dinner."], ["18:00–21:00", "Have an easy izakaya dinner in Tenma; karaoke stays optional, not the capstone."]],
    history: ["Nakazakicho's narrow lanes and older wooden buildings later attracted cafes, studios, and small shops. The appeal is aesthetic wandering, not a single monument.", "Tenma grew around Temmangu Shrine and its long shopping arcade, making it a strong lived-in dinner neighborhood without needing Dotonbori energy."]
  },
  day05: {
    summary: "Recovery is the default success. If energy is good, Nunobiki Herb Gardens and the ropeway become the day's romantic soft outing.",
    timeline: [["No-alarm morning", "Sleep, eat near the hotel, and decide only after checking everyone's energy."], ["Late morning–15:00", "If Nunobiki wins: ride from Osaka/Umeda (~60–75 min each way budget), gardens, ropeway, café/terrace pause."], ["15:00–17:30", "Optional Kobe dinner if energy remains high, then return to Osaka."], ["Evening", "If staying in Osaka: depachika picnic, laundry/admin, or a favorite neighborhood loop."]],
    history: ["A flexible day has its own historical logic in Osaka. Ordinary markets and neighborhoods are often more revealing than another landmark when the trip needs stamina protection.", "Nunobiki Herb Garden above Kobe pairs ropeway views with seasonal planting and terrace pauses. It works because it is one contained outing, not a full Kobe checklist."]
  },
  day06: {
    summary: "Nara becomes the bridge from Osaka to Kyoto: deer open the day, Todai-ji supplies the emotional scale, and luggage never gets to become the main character.",
    timeline: [["08:00–09:00", "Check out and send or store luggage; travel toward Kintetsu Nara."], ["10:00–12:30", "Walk or taxi through Nara Park toward Todai-ji, keeping deer encounters playful but brief."], ["12:30–15:00", "Eat kakinoha-zushi or mochi, then choose a short Naramachi or cafe pause."], ["15:00–18:00", "Continue to Kyoto, check in, and keep dinner close to the hotel."]],
    history: ["Nara became Japan's first lasting imperial capital in 710, when the court laid out Heijo-kyo using continental models. Buddhism was not merely private faith: temples, ritual, scholarship, and state power were woven together in the project of governing the country.", "Todai-ji's Great Buddha was cast in the 8th century during epidemics, crop failures, and political anxiety. Emperor Shomu imagined the colossal bronze image as a unifying act of protection. The present hall is smaller than its medieval predecessor, which makes the surviving scale even more startling."]
  },
  day07: {
    summary: "Kyoto's first full day moves from shogunal power at Nijo to market life, then ends with the democratic evening ritual of the Kamo River.",
    timeline: [["09:00–11:30", "Visit Nijo Castle before the day becomes crowded; notice rooms, gardens, and the nightingale floors."], ["12:00–14:00", "Lunch and graze through Nishiki without trying to sample every stall."], ["14:00–17:00", "Rest at the hotel or choose one compact central-Kyoto browse."], ["17:00–20:00", "Watch dusk along the Kamo River and finish with a manageable Pontocho-area dinner."]],
    history: ["Tokugawa Ieyasu built Nijo Castle after winning control of Japan, placing a shogunal residence almost in the shadow of the imperial palace. Its painted rooms and carefully staged approach turned architecture into political theater: every visitor could read rank and power in the spaces they were allowed to enter.", "Centuries later, the castle hosted the announcement that political authority would return to the emperor. Nishiki's food trade and the Kamo's riverbanks tell a less official Kyoto story—merchants, students, couples, and families continually making the old capital their everyday city."]
  },
  day08: {
    summary: "The protected old-Kyoto day begins uphill at Kiyomizu, descends through historic slopes, and lets lantern light—not another checklist item—provide the ending.",
    timeline: [["08:00–09:00", "Taxi uphill and enter Kiyomizu-dera before the lanes become busiest."], ["09:00–12:30", "Explore the temple and descend through Sannenzaka and Ninenzaka at an unhurried pace."], ["12:30–16:30", "Choose lunch, matcha, and a substantial cafe or hotel break."], ["17:00–19:30", "Return only if desired for Yasaka and Gion atmosphere after the light changes."]],
    history: ["Kiyomizu-dera's story begins around a sacred spring in the wooded hills east of Kyoto. Its famous stage projects over the slope without nails, transforming pilgrimage into a carefully framed encounter with the city, seasons, and the possibility of divine assistance.", "The roads below carried worshippers, crafts, food, and lodging toward the temple. Farther down, Gion grew beside Yasaka Shrine into an entertainment quarter governed by highly trained arts and social customs. It remains a living neighborhood, which is why restraint around residents and performers matters."]
  },
  day09: {
    summary: "Arashiyama is about one beautiful reveal and a shared return to the river—not collecting bamboo, gardens, temples, bridge, and mountain as separate obligations.",
    timeline: [["08:00–09:00", "Travel west early enough to experience a quieter river or bamboo approach."], ["09:00–12:00", "Choose one main walking payoff: bamboo, Okochi Sanso, or a garden."], ["12:00–14:30", "Rejoin at Togetsukyo and settle into lunch or a scenic cafe."], ["14:30–17:00", "Take a gentle riverside finish and return before the area becomes stamina debt."]],
    history: ["Arashiyama became a retreat for Heian-period aristocrats who traveled from the capital to compose poetry, admire blossoms and autumn leaves, and turn scenery into cultivated experience. Later temples and villas continued that dialogue between designed garden and borrowed mountain view.", "The name Togetsukyo—Moon Crossing Bridge—comes from an emperor's poetic impression of the moon moving across the bridge. The bamboo grove is only one scene in a much larger landscape of river, working woodland, gardens, and ritual routes."]
  },
  day10: {
    summary: "A purposeful early climb reaches Yotsutsuji's view over southern Kyoto, then gives way to bakery food, river life, supermarket browsing, and recovery.",
    timeline: [["06:45–10:15", "Climb Fushimi Inari's torii route to Yotsutsuji, pause for the city view, and return without adding the summit loop."], ["10:30–13:00", "Rejoin for bakery food and a slow Demachiyanagi or Kamo River Delta visit."], ["13:00–16:30", "Choose a cafe, postcard stop, supermarket, or hotel rest."], ["Evening", "Build a depachika or supermarket picnic and prepare calmly for tomorrow's transfer. Mount Hiei is a full-day replacement, never an add-on."]],
    history: ["Fushimi Inari is the head shrine of thousands of Inari shrines across Japan. Inari's identity expanded from rice and agricultural abundance to encompass commerce and prosperity; foxes serve as messengers, while donated torii record hopes, gratitude, and business success.", "Yotsutsuji sits partway up Mount Inari where the path opens toward southern Kyoto—the rewarding view comes before the summit, not at it. The Kamo River afternoon then supplies the counter-story: students, families, musicians, and birds making the old capital an ordinary living city."]
  },
  day11: {
    summary: "The westward chapter opens with Himeji's white keep, then uses garden, lunch, and train time to reach Hiroshima without turning a transfer into an endurance test.",
    timeline: [["07:30–09:30", "Leave Kyoto with day bags; large luggage should already be forwarded or simplified."], ["09:30–12:30", "Approach Himeji Castle and choose the full interior or exterior-focused route."], ["12:30–15:00", "Visit Koko-en or rest over lunch, then collect an ekiben."], ["15:00–18:00", "Continue to Hiroshima, check in, and eat okonomiyaki only if energy remains."]],
    history: ["Himeji is called the White Heron Castle because its pale plastered walls seem to lift above the city. The surviving complex took shape under Ikeda Terumasa in the early 1600s, when the new Tokugawa order used castles both as fortresses and declarations of political control.", "Its beauty disguises defensive intelligence: confusing approaches, narrow gates, firing positions, and steep interiors were meant to slow attackers. The castle survived war, demolition pressures, and natural disasters, making today's reveal unusually close to encountering an original feudal complex."]
  },
  day12: {
    summary: "Hiroshima receives a full, emotionally uncluttered day: museum first, quiet space afterward, then the memorial axis and Dome as daylight softens.",
    timeline: [["08:30–11:30", "Visit the Peace Memorial Museum while attention and emotional energy are strongest."], ["11:30–13:30", "Take a real quiet break and a gentle lunch; do not rush directly into another attraction."], ["13:30–17:00", "Move through the Memorial Hall, Cenotaph, park, river, and Atomic Bomb Dome."], ["17:00 onward", "Let dusk close the memorial sequence, then choose a calm okonomiyaki dinner."]],
    history: ["Hiroshima began as a castle town in the late 16th century and grew into a regional military and industrial center. At 8:15 on August 6, 1945, the first atomic bomb used in war exploded above the city, killing tens of thousands immediately and many more through injury and radiation.", "The Peace Memorial Park does not preserve a frozen ruin alone. Its design creates an axis among the museum, Cenotaph, and Dome, asking visitors to move from evidence to mourning to public commitment. Hiroshima's larger story is also one of survivors rebuilding a living city and insisting that memory serve peace."]
  },
  day13: {
    summary: "Miyajima is the scenic and romantic payoff of the western chapter: shrine and tide first, island food and forest second, with altitude entirely optional.",
    timeline: [["08:00–09:30", "Travel to Miyajimaguchi and take the ferry; check the tide plan before setting out."], ["09:30–12:30", "Visit Itsukushima Shrine and the waterfront, then eat anago-meshi or island snacks."], ["12:30–16:00", "Choose Omotesando and cafe time, Daisho-in, or the ropeway according to energy."], ["16:00–18:30", "Stay for softer late light if practical, then ferry back without rushing."]],
    history: ["Itsukushima was treated as a sacred island long before its current buildings appeared. To avoid violating that sanctity, worship took place over the water; the shrine's corridors and great torii still use the tide to blur the boundary between architecture, sea, and mountain.", "The 12th-century warrior-statesman Taira no Kiyomori expanded the shrine while cultivating power at the imperial court. Yet Miyajima is not one frozen era: Buddhist halls, pilgrimage paths, merchant food streets, deer, ferries, and tourism have accumulated around the sacred landscape for centuries."]
  },
  day14: {
    summary: "The long train is the experience: browse Hiroshima's ekiben, reveal and score them after departure, then arrive in Tokyo as temporary neighborhood residents rather than sightseers.",
    timeline: [["08:30–10:00", "Check out and reach Hiroshima Station early enough to browse regional ekiben calmly."], ["10:00–14:30", "Ride east, photograph closed and open boxes, trade tastes, score them, and watch the country change."], ["15:00–17:30", "Reach the Tokyo hotel, learn the correct station exit, and fully settle in."], ["Evening", "Choose a depachika, supermarket, ramen, or curry dinner near the hotel; add no sightseeing campaign."]],
    history: ["Japan's first railway opened in 1872, and station boxed meals soon turned travel into a way of tasting place. Ekiben packaging, ingredients, and presentation became miniature regional advertisements, allowing a train journey to carry local identity across the country.", "The Tokaido corridor linking Kyoto, Osaka, and Tokyo has organized movement for centuries, first as a famed highway and now as the country's busiest high-speed rail axis. Arriving by Shinkansen compresses landscapes once measured in days of walking into a single seated chapter."]
  },
  day15: {
    summary: "Ghibli is the scarce-ticket anchor, but Inokashira Park and Kichijoji make the day feel like a neighborhood story rather than a museum extraction.",
    timeline: [["Morning", "Travel to Mitaka or Kichijoji with generous ticket-time margin."], ["Timed window", "Give the Ghibli Museum its full visit without scheduling another central-Tokyo attraction."], ["Afterward–17:00", "Walk through Inokashira Park and pause at a cafe."], ["17:00–20:00", "Browse one Kichijoji shopping street and eat nearby; if tickets failed, let this become the full day."]],
    history: ["Inokashira Pond supplied water to Edo and later became one of Tokyo's early suburban parks. Rail connections transformed nearby Kichijoji into a western neighborhood where green space, small commerce, music, cafes, and dense residential life meet.", "The Ghibli Museum deliberately avoids a prescribed route. Hayao Miyazaki designed it around curiosity, hand-drawn motion, architecture at a child's scale, and discovery without a checklist. That philosophy is the ideal rhythm for the whole day."]
  },
  day16: {
    summary: "A Mai-centered west-Tokyo day pairs Jindaiji's leafy temple lanes and soba tradition with gardens, cute yokai details, and an ending she chooses.",
    timeline: [["09:30–11:00", "Travel toward Chofu and Jindaiji without turning the morning into a commute race."], ["11:00–14:00", "Explore the temple approach, find Kitaro details, and settle into a soba lunch."], ["14:00–17:00", "Choose the botanical gardens, small shops, or a long cafe pause according to weather and mood."], ["17:00–20:00", "Let Mai choose a cozy Kichijoji dinner, dessert, or an early return."]],
    history: ["Jindaiji traces its foundation to the 8th century, making it one of the Tokyo region's oldest temples. Its wooded setting preserves the feeling of a pilgrimage edge outside the old city, while abundant spring water encouraged a local soba tradition that still shapes the approach lanes.", "Chofu is also linked to manga artist Shigeru Mizuki, creator of GeGeGe no Kitaro, whose playful yokai characters appear around the area. Ancient Buddhist space, modern folklore, gardens, and neighborhood food overlap here without requiring a major-city spectacle."]
  },
  day17: {
    summary: "Default to Shimokitazawa, then let Mai choose the participatory evening capstone.",
    timeline: [["10:30–12:00", "Start in Shimokitazawa unless Mai specifically asks for Nakano or Koenji."], ["12:00–15:30", "Anchor lunch around curry, ramen, or a cafe and browse selectively."], ["15:30–18:00", "Take a rest and commit to one participatory activity."], ["18:00–21:00", "Mai chooses karaoke, a small live show, a cozy bar/café, an arcade, or another event; stop before the day becomes retail fatigue."]],
    history: ["Shimokitazawa became a refuge for small theaters, live houses, record shops, vintage clothing, and youth subcultures partly because its fine-grained streets supported independent tenants.", "Nakano Broadway is the swap for focused collector and manga hunting. Koenji is the swap for scruffier live-house energy. The capstone should be an activity, not more shopping."]
  },
  day18: {
    summary: "Kawagoe supplies an Edo-period merchant-town chapter without a hotel move: warehouse street, bell tower, candy alley, and sweet-potato grazing at a weekday pace.",
    timeline: [["08:30–10:00", "Travel from Tokyo and use a bus or taxi from the station if it saves legs."], ["10:00–13:00", "Walk the kurazukuri street, pause for lunch, and snack gradually."], ["13:00–16:30", "Visit Toki no Kane and Kashiya Yokocho; add Kita-in only if the day still feels spacious."], ["16:30–18:30", "Catch warmer light around the old town, then return before the commute peak if practical."]],
    history: ["Kawagoe prospered as a castle and merchant town supplying Edo by road and river, earning the nickname “Little Edo.” Its merchants stored wealth in massive clay-walled warehouses designed to resist the fires that repeatedly devastated dense wooden cities.", "After an 1893 fire destroyed much of the town, merchants rebuilt in the costly kurazukuri style, turning disaster resistance into today's streetscape. Toki no Kane, the bell tower, gave civic time a sound long before wristwatches and phone screens organized the day."]
  },
  day19: {
    summary: "teamLab provides the modern visual anchor; its tea house is the pause, and one excellent food hall supplies the finish rather than launching a second sightseeing day.",
    timeline: [["Morning", "Start slowly and travel with generous margin for the timed admission."], ["Timed entry–3 hours", "Wander teamLab Borderless without trying to find every room; use EN TEA HOUSE as a reset."], ["Mid-afternoon", "Rest at Azabudai or return to the hotel if sensory or walking energy is spent."], ["17:00–20:00", "Choose one Ginza or Nihonbashi food hall and a polished but easy dinner."]],
    history: ["Nihonbashi was the point from which distances on Edo-period highways were measured, making it a symbolic center of national movement and commerce. Ginza later became a showcase of brick architecture, department stores, advertising, and modern consumer culture.", "teamLab belongs to another Tokyo tradition: using new technology to reorganize how bodies experience space. Its borderless rooms allow images to migrate and react, replacing the framed artwork with an unstable environment in which visitors become part of the composition."]
  },
  day20: {
    summary: "Yanesen reveals an older, softer Tokyo through shrine approaches, small shops, temple and cemetery lanes, street snacks, and sunset from Yuyake Dandan.",
    timeline: [["09:30–11:30", "Begin at Nezu Shrine or Sendagi and follow a short, low-pressure route."], ["11:30–14:30", "Eat soba, udon, taiyaki, or cafe lunch and browse ordinary shops."], ["14:30–17:00", "Continue toward Yanaka Ginza and finish around the Yuyake Dandan steps."], ["After 17:00", "Return after sunset; add Asakusa only if everyone actively wants another district."]],
    history: ["Yanaka, Nezu, and Sendagi retained more low-rise texture than many central districts, partly because patterns of earthquake damage, wartime bombing, cemeteries, and later redevelopment unfolded differently here. The result is not untouched Edo, but an unusually legible mixture of eras.", "Nezu Shrine's vermilion gates and festival traditions connect the area to older sacred geography. Yanaka's temples and vast cemetery sit beside a lively shopping street, showing how Tokyo routinely places remembrance, domestic life, food, and commerce within the same walk."]
  },
  day21: {
    summary: "The final day stays open long enough to reveal what the trip actually needs: a missed anchor, favorite return, food celebration, modest spectacle, or simply a graceful ending.",
    timeline: [["No-alarm morning", "Review missed goals, weather, luggage, and energy before choosing the day."], ["11:00–16:00", "Return to a favorite neighborhood, handle souvenirs, or use the buffer for one genuinely wanted experience."], ["16:00–19:30", "Choose a celebratory final meal or sunset spectacle; name the champion melon bread and ekiben."], ["By 21:00", "Pack completely, protect airport-transfer margin, and take one small goodbye walk or konbini run."]],
    history: ["Tokyo has repeatedly rebuilt itself after fire, earthquake, war, and waves of redevelopment. Its identity is therefore less a single preserved center than an accumulation of chosen centers—each station and neighborhood offering a different version of the city.", "Returning somewhere on the last day is historically appropriate in its own small way. Edo and Tokyo have always been cities of routes and routines. Repetition turns a place from an attraction into part of personal memory: the moment a giant metropolis briefly feels like yours."]
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
    mainNotes: {},
    roadmapReady: {},
    dayWindows: {},
    overviewWindows: {},
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
  ["capstone", "Capstone Photo", "The single image that best captures today's main experience."],
  ["food", "Food Photo", "A snack, meal, dessert, drink, or food hall treasure."],
  ["scene", "Scene Photo", "A street, shrine, station, river, shopfront, skyline, or tiny atmosphere proof."],
  ["us", "Us Photo", "A non-perfect couple photo from the day."],
  ["extra", "Extra Photos", "Anything else that belongs in the album for this day."]
];

const defaultCapstonePhotos = {
  day02: "capstones/day02.jpg",
  day03: "capstones/day03.jpg",
  day04: "capstones/day04.jpg",
  day05: "capstones/day05.jpg",
  day06: "capstones/day06.webp",
  day07: "capstones/day07.webp",
  day08: "capstones/day08.jpg",
  day09: "capstones/day09.webp",
  day10: "capstones/day10.jpg",
  day11: "capstones/day11.jpg",
  day12: "capstones/day12.jpg",
  day13: "capstones/day13.jpg",
  day14: "capstones/day14.jpg",
  day15: "capstones/day15.jpg",
  day16: "capstones/day16.jpg",
  day17: "capstones/day17.jpg",
  day18: "capstones/day18.webp",
  day19: "capstones/day19.webp",
  day20: "capstones/day20.jpg",
  day21: "capstones/day21.jpg"
};

function capstoneTaskId(dayId) {
  return `${dayId}.photo.capstone`;
}

function mainGoalPhotoTaskId(dayId) {
  return `${dayId}.photo.main`;
}

function bundledCapstoneUrl(dayId) {
  const relative = defaultCapstonePhotos[dayId];
  if (!relative) return null;
  const base = location.pathname.endsWith("/") ? location.pathname : `${location.pathname.replace(/\/[^/]*$/, "/")}`;
  return `${base}${relative}`;
}

async function capstoneImageUrl(dayId) {
  const photos = await getPhotosForTask(capstoneTaskId(dayId)).catch(() => []);
  const latest = photos.sort((a, b) => a.createdAt.localeCompare(b.createdAt)).at(-1);
  if (latest) return { url: latest.dataUrl, bundled: false };
  const bundled = bundledCapstoneUrl(dayId);
  return bundled ? { url: bundled, bundled: true } : null;
}

async function populateCapstoneHero(day, container) {
  if (!container) return;
  const image = await capstoneImageUrl(day.id);
  container.innerHTML = "";
  if (!image) {
    container.className = "capstone-hero is-empty";
    container.innerHTML = "<p>Capstone photo will appear here.</p>";
    return;
  }
  container.className = `capstone-hero${image.bundled ? " is-bundled" : ""}`;
  const img = document.createElement("img");
  img.alt = `${day.title} capstone`;
  img.src = image.url;
  container.appendChild(img);
  if (image.bundled) {
    const label = document.createElement("span");
    label.className = "capstone-hero-label";
    label.textContent = "Pre-trip capstone";
    container.appendChild(label);
  }
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
      if (taskId.endsWith(".photo.capstone")) renderCalendar();
      if (onPhotosChange) await onPhotosChange();
    });
    wrapper.appendChild(deleteButton);
    container.appendChild(wrapper);
  });
  if (!photos.length) {
    const dayId = taskId.split(".")[0];
    const bundled = bundledCapstoneUrl(dayId);
    if (bundled && taskId.endsWith(".photo.capstone")) {
      const wrapper = document.createElement("div");
      wrapper.className = "quest-photo is-bundled";
      wrapper.innerHTML = `<img alt="Default capstone preview" src="${bundled}"><span class="bundled-label">Default preview</span>`;
      container.appendChild(wrapper);
    }
  }
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
  if (task.id.endsWith(".photo.capstone")) {
    renderCalendar();
    const hero = dayPanel.querySelector(".day-front-page .capstone-hero");
    const dayId = task.id.split(".")[0];
    const match = findDay(dayId);
    if (hero && match) populateCapstoneHero(match.day, hero);
  }
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

function renderRoadmap() {
  const grid = document.querySelector("#roadmapGrid");
  const summary = document.querySelector("#roadmapSummary");
  const alerts = document.querySelector("#planningAlerts");
  if (!grid || !summary || !alerts) return;
  grid.innerHTML = "";
  const uncovered = roadmapGoals.filter((goal) => !goal.days.length);
  const trackable = roadmapGoals.filter((goal) => !goal.persistent);
  const completed = trackable.filter(roadmapGoalCompleted).length;
  summary.className = `coverage-summary ${uncovered.length ? "has-gap" : "complete"}`;
  summary.innerHTML = `<strong>${uncovered.length ? `${uncovered.length} must-dos uncovered` : "All must-dos have a path"}</strong><span>${completed} of ${trackable.length} experience goals completed · persistent safeguards stay active</span>`;

  roadmapGoals.forEach((goal) => {
    const card = document.createElement("article");
    const status = roadmapStatus(goal);
    const dayLabels = goal.days.map((dayId) => findDay(dayId)?.day.short).filter(Boolean).join(" · ");
    card.className = "roadmap-card";
    card.innerHTML = `
      <div class="roadmap-card-heading"><span class="status-pill status-${status.toLowerCase().replaceAll(" ", "-")}">${status}</span><small>${dayLabels || "Unassigned"}</small></div>
      <h3>${goal.goal}</h3>
      <p>${goal.why}</p>
      ${goal.blocker ? `<p class="roadmap-blocker"><strong>Before the trip:</strong> ${goal.blocker}</p>` : ""}
      <p class="roadmap-fallback"><strong>Lower-energy path:</strong> ${goal.fallback}</p>
    `;
    if (goal.days.length) {
      if (["Needs Booking", "Needs Confirmation", "Conditional"].includes(goal.status)) {
        const readinessButton = document.createElement("button");
        readinessButton.type = "button";
        readinessButton.className = "text-button roadmap-ready";
        readinessButton.textContent = state.roadmapReady[goal.id] ? "Set back to pending" : "Mark ready";
        readinessButton.addEventListener("click", () => {
          state.roadmapReady[goal.id] = !state.roadmapReady[goal.id];
          saveState();
          renderOverview();
          renderStats();
        });
        card.appendChild(readinessButton);
      }
      const button = document.createElement("button");
      button.type = "button";
      button.className = "text-button roadmap-open";
      button.textContent = "Open assigned day";
      button.addEventListener("click", () => {
        const match = findDay(goal.days[0]);
        if (!match) return;
        state.activeCity = match.cityId;
        saveState();
        renderNav();
        showDay(match.day);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      card.appendChild(button);
    }
    grid.appendChild(card);
  });

  alerts.innerHTML = `<details class="planning-alerts"><summary>Planning alerts and conditional ideas <span>${planningConstraints.length}</span></summary><div>${planningConstraints.map((item) => `<article><strong>${item.title}</strong><p>${item.text}</p></article>`).join("")}</div></details>`;
}

function deckPoolForDay(day) {
  const cityId = findDay(day.id)?.cityId || state.activeCity;
  const regionId = ({ day06: "nara", day11: "himeji", day12: "hiroshima", day13: "miyajima", day14: "rail" })[day.id] || cityId;
  const regionName = ({ nara: "Nara", himeji: "Himeji", miyajima: "Miyajima", rail: "Shinkansen" })[regionId] || tripData[cityId].name;
  const regional = (regionalQuestPools[regionId] || [])
    .filter((entry) => !entry[3] || entry[3].includes(day.id))
    .map(([id, type, text]) => ({ id, type, text, source: regionName }));
  const daily = day.groups.flatMap(([title, type, items], groupIndex) => {
    if (type !== "side" && type !== "egg") return [];
    return items.map((text, itemIndex) => ({
      id: `${day.id}-${type}-${groupIndex}-${itemIndex}`,
      type: type === "egg" ? "find" : "day",
      text,
      source: type === "egg" ? "Hidden find" : "Today's neighborhood"
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
    card.innerHTML = `<span class="deck-type">${quest.type === "food" ? "Regional food" : quest.source}</span><p>${quest.text}</p><div class="deck-actions"><button type="button" data-action="found">${done ? "Found ✓" : "Found It"}</button><button type="button" data-action="skip">Skip</button></div>`;
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
  library.innerHTML = `<summary>Browse all optional ideas <span>${pool.length}</span></summary><div>${pool.map((quest) => `<p class="${state.deckDone[quest.id] ? "is-found" : ""}"><strong>${quest.type === "food" ? "Regional food" : quest.source}:</strong> ${quest.text}${state.deckDone[quest.id] ? " ✓" : ""}</p>`).join("")}</div>`;
  section.appendChild(library);
  return section;
}

function dailyGuide(day) {
  const main = day.groups.find((group) => group[1] === "main")?.[2]?.[0] || day.theme;
  const context = dayContext[day.id] || { summary: day.theme, timeline: [], history: ["Background notes can be added here later."] };
  const goals = roadmapGoals.filter((goal) => goal.days.includes(day.id));
  const statuses = goals.map(roadmapStatus);
  const priority = ["Needs Confirmation", "Needs Booking", "Conditional", "Ready", "Completed"];
  const status = priority.find((candidate) => statuses.includes(candidate)) || "Ready";
  const card = document.createElement("section");
  card.className = "daily-guide";
  card.innerHTML = `
    <div class="daily-guide-heading"><p class="label">Today's clear path</p><span class="status-pill status-${status.toLowerCase().replaceAll(" ", "-")}">${status}</span></div>
    <h3>${main}</h3>
    <p><strong>Why today matters:</strong> ${goals.length ? goals.map((goal) => goal.goal).join(" · ") : day.theme}</p>
    ${goals.some((goal) => goal.blocker) ? `<p class="roadmap-blocker"><strong>Before the trip:</strong> ${goals.filter((goal) => goal.blocker).map((goal) => goal.blocker).join(" ")}</p>` : ""}
    <section class="context-block merged-summary">
      <h4>Quick Summary</h4>
      <p>${context.summary}</p>
    </section>
    <section class="context-block timeline-block">
      <h4>Recommended Timeline</h4>
      <ol class="day-timeline">${context.timeline.map(([time, activity]) => `<li><time>${time}</time><span>${activity}</span></li>`).join("")}</ol>
      <p class="timeline-note">These are pacing windows, not reservations. Shift them around confirmed tickets, transport, weather, and energy.</p>
    </section>
    <section class="context-block">
      <h4>The Story Behind Today</h4>
      <div class="history-story">${context.history.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
    </section>
  `;
  return card;
}

async function mainGoalReady(day) {
  const note = (state.mainNotes[day.id] || "").trim();
  const photos = await getPhotosForTask(mainGoalPhotoTaskId(day.id)).catch(() => []);
  return Boolean(note) && photos.length > 0;
}

function makeMainGoalCard(day) {
  const main = day.groups.find((group) => group[1] === "main")?.[2]?.[0] || day.theme;
  const taskId = mainTaskId(day);
  const photoTask = {
    id: mainGoalPhotoTaskId(day.id),
    text: "Main goal proof",
    slot: "main",
    dayId: day.id,
    dayTitle: day.title,
    cityId: findDay(day.id)?.cityId || state.activeCity
  };
  const card = document.createElement("section");
  card.className = "main-goal-card";
  card.innerHTML = `
    <div class="main-goal-heading"><p class="label">Today's main goal</p></div>
    <h3>${main}</h3>
    <p class="main-goal-note">Write what you actually did, then add one photo that proves the main goal happened.</p>
  `;

  const writing = document.createElement("label");
  writing.className = "main-goal-writing";
  writing.innerHTML = `<span>What did you do for today's main goal?</span>`;
  const textarea = document.createElement("textarea");
  textarea.rows = 4;
  textarea.placeholder = "A few sentences about how you completed today's main goal…";
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
  hero.className = "capstone-hero";
  section.appendChild(hero);
  populateCapstoneHero(day, hero);
  section.appendChild(dailyGuide(day));
  return section;
}

function makeQuestPage(day) {
  const section = document.createElement("section");
  section.className = "quest-page";
  section.appendChild(makeMainGoalCard(day));
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

function renderOverview() {
  const city = activeCity();
  clearGroup("#ongoingQuests");
  const review = document.querySelector("#planeRideReview");
  if (review) review.innerHTML = "";
  document.querySelector("#albumGrid").innerHTML = "";
  document.querySelector("#calendarGrid").innerHTML = "";

  document.querySelector("#hotelField").value = state.lodging[state.activeCity] || "";
  document.querySelector(".hotel-card label").textContent = city.baseLabel;
  document.querySelector(".hotel-card p").textContent = `${city.name} map routes use this as the starting point. You can leave it blank until the hotel is real.`;
  document.querySelector("#ongoingQuests h2").textContent = `${city.name} Discovery Deck`;

  renderCalendar();
  renderMelonPassport();
  const cityDay = city.days.find((day) => day.date === todayIso()) || city.days[0];
  if (cityDay) document.querySelector("#ongoingQuests").appendChild(renderQuestDeck(cityDay));
  if (review && todayIso() >= "2026-11-10") review.appendChild(makePlaneRideReviewCard());
  renderAlbum();
  setupOverviewCarousel();
}

function setupOverviewCarousel() {
  const host = document.querySelector("#overviewCarouselHost");
  if (!host || host.querySelector(".overview-carousel")) return;
  const review = host.querySelector("#planeRideReview");
  const unlocked = todayIso() >= "2026-11-10";
  const windows = [host.querySelector("#calendarView"), host.querySelector("#discoverView"), host.querySelector("#melonPassport"), host.querySelector("#photoAlbum")].filter(Boolean);
  const labels = ["Calendar", "Discover", "Melon", "Album"];
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
  const today = todayIso();
  Object.entries(tripData).forEach(([cityId, city]) => {
    city.days.forEach((day) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `calendar-day ${day.date === today ? "is-today" : ""}`;
      button.dataset.city = cityId;
      button.dataset.day = day.id;
      const capstone = day.groups.find((group) => group[1] === "main")?.[2]?.[0];
      button.innerHTML = `
        <span class="calendar-photo" aria-hidden="true"></span>
        <small>${city.name}</small>
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
      grid.appendChild(button);
      renderCalendarPhoto(day, button.querySelector(".calendar-photo"));
    });
  });
}

async function renderCalendarPhoto(day, target) {
  if (!target) return;
  const photos = await getPhotosForTask(capstoneTaskId(day.id)).catch(() => []);
  const latest = photos.sort((a, b) => a.createdAt.localeCompare(b.createdAt)).at(-1);
  if (latest) {
    target.style.backgroundImage = `url("${latest.dataUrl}")`;
    target.classList.add("has-photo");
    return;
  }
  const bundled = bundledCapstoneUrl(day.id);
  if (!bundled) return;
  target.style.backgroundImage = `url("${bundled}")`;
  target.classList.add("has-photo");
}

async function renderAlbum() {
  const album = document.querySelector("#albumGrid");
  if (!album) return;
  const photos = await getAllPhotos().catch(() => []);
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

function mapsEmbedUrl(day) {
  const query = `${day.places[0] || day.title} Japan`;
  return `https://maps.google.com/maps?output=embed&q=${encodeURIComponent(query)}`;
}

function mapsRouteUrl(day) {
  const origin = (state.lodging[state.activeCity] || "").trim();
  const places = day.places || [];
  const routeStops = origin ? places : places.slice(1);
  const destination = routeStops[routeStops.length - 1] || places[0] || "Japan";
  const waypoints = routeStops.slice(0, -1).join("|");
  const params = new URLSearchParams({ api: "1", travelmode: "transit", destination });
  if (origin) params.set("origin", origin);
  if (waypoints) params.set("waypoints", waypoints);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function makeMapCard(day) {
  const { card, content } = makeCollapsibleCard({
    className: "map-card",
    label: "Map Layer",
    title: "Where things are",
    badge: "Map",
    open: true
  });

  const iframe = document.createElement("iframe");
  iframe.title = `${day.title} map`;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  iframe.src = mapsEmbedUrl(day);

  const placeList = document.createElement("ul");
  placeList.className = "place-list";
  day.places.forEach((place) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = mapsSearchUrl(`${place}, Japan`);
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = place;
    item.appendChild(link);
    placeList.appendChild(item);
  });

  const actions = document.createElement("div");
  actions.className = "map-actions";

  const pinsLink = document.createElement("a");
  pinsLink.href = mapsSearchUrl(`${day.places.join(" ")} Japan`);
  pinsLink.target = "_blank";
  pinsLink.rel = "noopener";
  pinsLink.textContent = "Open Pins";

  const routeLink = document.createElement("a");
  routeLink.href = mapsRouteUrl(day);
  routeLink.target = "_blank";
  routeLink.rel = "noopener";
  routeLink.textContent = state.lodging[state.activeCity] ? "Route From Hotel" : "Route Day Stops";

  actions.append(pinsLink, routeLink);
  content.append(iframe, placeList, actions);
  return card;
}

function makeDailyPhotoCard(day) {
  const { card, content } = makeCollapsibleCard({
    className: "daily-photo-card",
    label: "Daily Album",
    title: "Photos to catch today",
    badge: "4 core",
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
    const { controls, photos } = makePhotoControls(task, slot === "extra" ? "Add Extras" : "Add Photo");
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
  function goTo(index, behavior = "smooth") {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    viewport.scrollTo({ left: windowLeft(currentIndex), behavior });
    state[storageGroup] = state[storageGroup] || {};
    state[storageGroup][carouselId] = currentIndex;
    saveState();
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
      }
    }, 90);
  }, { passive: true });

  let dragStart = null;
  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.target.closest("button, input, select, textarea, a, summary, iframe, label")) return;
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
    button.innerHTML = `
      <span>${day.date === todayIso() ? `${day.short} Today` : day.short}</span>
    `;
    dayRail.appendChild(button);
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
  const tasks = allTasks();
  const completed = tasks.filter((task) => state.done[task.id]);
  const visible = overviewPanel.classList.contains("hidden") ? cityTasks(state.activeCity) : tasks;
  const visibleDone = visible.filter((task) => state.done[task.id]);
  const discoveries = Object.values(state.deckDone).filter(Boolean).length;
  const totalScore = completed.length + discoveries;
  const mainTotal = visible.filter((task) => task.type === "main").length;
  const mainDone = visibleDone.filter((task) => task.type === "main").length;
  const percent = visible.length ? Math.round((visibleDone.length / visible.length) * 100) : 0;

  document.querySelector("#scoreTotal").textContent = totalScore;
  document.querySelector("#progressTitle").textContent = overviewPanel.classList.contains("hidden")
    ? `${activeCity().name}: ${visibleDone.length} of ${visible.length} cleared`
    : `Whole trip: ${visibleDone.length} of ${visible.length} cleared`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector("#mainCount").textContent = `${mainDone}/${mainTotal}`;
  document.querySelector("#sideCount").textContent = discoveries;
  document.querySelector("#eggCount").textContent = roadmapGoals.length;
  document.querySelector("#maiCount").textContent = mainTotal - mainDone;
}

cityRail.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-city]");
  if (!button) return;
  state.activeCity = button.dataset.city;
  saveState();
  renderNav();
  showOverview();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

dayRail.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  const view = button.dataset.view;
  document.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  if (view === "overview") {
    showOverview();
  } else {
    showDay(activeCity().days.find((day) => day.id === view));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#hotelField").addEventListener("input", (event) => {
  state.lodging[state.activeCity] = event.target.value;
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

renderNav();
if (todayTarget) {
  showDay(todayTarget.day);
} else {
  showOverview();
}
