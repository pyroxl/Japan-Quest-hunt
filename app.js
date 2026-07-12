const STORAGE_KEY = "tokyoQuestHunt.v4";
const APP_VERSION = "japan-quest-v75";
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
        title: "Day 2 - First Bite of Osaka",
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
        title: "Day 3 - Castle to Neon",
        theme: "Castle, character culture, retro signs, and food.",
        places: ["Osaka Castle", "Nipponbashi Denden Town", "Shinsekai Osaka"],
        groups: [
          ["Main quest", "main", ["Move from Osaka Castle to Den Den Town, then finish under Shinsekai's blue-hour signs with kushikatsu."]],
          ["Side quests", "side", ["Take the castle-and-moat photo.", "Have one proper seated lunch.", "Find one display that makes Mai stop.", "Share one snack before dinner."]],
          ["Hidden eggs", "egg", ["A retro sign in Shinsekai.", "A character/anime/gaming detail in Den Den Town.", "A snack you did not know existed this morning."]],
          ["Mai-coded moment", "mai", ["Mai finds the food-everywhere feeling delightful rather than overwhelming."]],
          ["Soft landing", "soft", ["Parents choose one southern district; the couple does both without adding a fourth district."]]
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
        title: "Day 5 - Deer to Kyoto",
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
        title: "Day 7 - Lantern-Lit Higashiyama",
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
        title: "Day 8 - River, Bamboo, Breathe",
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
        title: "Day 13 - Ghibli or Not Ghibli",
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
  { id: "osaka-food", goal: "Maximum-pop Osaka and regional food", days: ["day02", "day03", "day04"], status: "Ready", why: "Dotonbori and Castle/Den Den/Shinsekai provide the loud Osaka arc; the scored Kuromon mission and Tenma supply the food quest.", blocker: "Day 3 and Day 4 both involve substantial standing.", fallback: "Keep the category limits, hotel reset and first seated Tenma venue." },
  { id: "kobe-nunobiki", goal: "Kobe Nunobiki romantic outing", days: ["day05"], status: "Needs Route Checks", why: "The selected soft outing trades a wider Kobe checklist for ropeway views, gardens and an optional dinner.", blocker: "Recheck ropeway and herb-garden hours and maintenance notices.", fallback: "Use the ropeway/view/café version only; parents can take an independent easy Osaka day." },
  { id: "izakaya", goal: "At least one izakaya night", days: ["day04"], status: "Ready", why: "Tenma izakaya dinner is the Day 4 capstone after the scored snack mission.", blocker: "", fallback: "Keep the first seated Tenma venue even if the daytime tasting runs long." },
  { id: "konbini", goal: "7-Eleven and konbini food experience", days: ["day02"], status: "Ready", why: "The first small everyday-Japan ritual begins immediately.", blocker: "", fallback: "Build breakfast from the nearest station or hotel konbini." },
  { id: "nara", goal: "Nara Park", days: ["day06"], status: "Ready", why: "Nara bridges Osaka and Kyoto with one iconic first-trip experience.", blocker: "", fallback: "Use taxis and keep the visit to the park and Todai-ji approach." },
  { id: "nijo", goal: "Nijo Castle", days: ["day07"], status: "Ready", why: "It is Kyoto's strongest non-temple historic anchor and the shared afternoon meeting point.", blocker: "", fallback: "Taxi to the castle; shorten or skip optional Nishiki." },
  { id: "mt-inari", goal: "Early Fushimi Inari climb", days: ["day07"], status: "Ready", why: "Mai's hillside torii priority pairs with Nijo on one energetic split day.", blocker: "", fallback: "Turn around at Yotsutsuji or sooner; parents skip the climb entirely." },
  { id: "higashiyama", goal: "Kiyomizu-dera and Higashiyama", days: ["day08"], status: "Ready", why: "This is Mai's protected old-Kyoto atmosphere day.", blocker: "", fallback: "Taxi uphill, visit Kiyomizu, then descend only as far as energy allows." },
  { id: "arashiyama", goal: "Arashiyama scenery day", days: ["day09"], status: "Ready", why: "One garden or bamboo reveal, then a shared riverside cafe—not a temple collection.", blocker: "", fallback: "Togetsukyo, riverside bench/cafe, and one excellent sweet." },
  { id: "matcha", goal: "Matcha and cafe time", days: ["day07", "day08", "day09", "day10"], status: "Ready", why: "Several Kyoto days provide natural, unhurried chances.", blocker: "", fallback: "Use a station, depachika, or hotel-nearby tea stop." },
  { id: "mt-hiei", goal: "Mt Hiei mountain day", days: ["day10"], status: "Needs Route Checks", why: "Mai chose a full Kyoto mountain day with Enryaku-ji and forest paths.", blocker: "Confirm seasonal cable car, ropeway, bus operations and last descent timing.", fallback: "Use the most assisted route and return earlier if weather or legs push back." },
  { id: "mountain-chapter", goal: "Three-night Kawaguchiko retreat", days: ["day17", "day18", "day19"], status: "Needs Route Checks", why: "One Fuji-area hotel creates a deliberate quiet escape between two Tokyo stays, with active and gentle versions each day.", blocker: "November weather, local bus schedules, trail status and Tokyo luggage handling need confirmation.", fallback: "Keep the lake hotel and use ropeway, museums, cafes and short shoreline walks instead of a hike." },
  { id: "fuji-return", goal: "Protected Kawaguchiko–Tokyo return", days: ["day20"], status: "Needs Booking", why: "Returning on Nov 11 creates a full buffer before the flight and leaves time for missed Tokyo priorities.", blocker: "Reserve the return bus or train and allow road-delay margin.", fallback: "Use the rail route via Otsuki if highway conditions look unreliable." },
  { id: "west-chapter", goal: "Himeji, Hiroshima, and Miyajima chapter", days: ["day11", "day12", "day13"], status: "Ready", why: "The westward chapter makes the longer trip feel meaningfully broader.", blocker: "", fallback: "Use castle exterior and garden, central Peace Park, and Miyajima waterfront routes." },
  { id: "tokyo-story", goal: "Tokyo through Ghibli, friends, teamLab and food", days: ["day14", "day15", "day16", "day21"], status: "Ready", why: "The tightened Tokyo chapter keeps only the personally distinct anchors.", blocker: "", fallback: "Protect Ghibli/friends and use the final day for the strongest available ticket and bakery route." },
  { id: "ghibli", goal: "Ghibli and cute-culture experience", days: ["day15"], status: "Needs Booking", why: "It gives Mai a soft, imaginative Tokyo anchor.", blocker: "Ghibli Museum tickets must be secured.", fallback: "Make Inokashira Park and Kichijoji the complete day." },
  { id: "friends-day", goal: "Akko/Yoshi home-neighborhood day", days: ["day16"], status: "Needs Confirmation", why: "The most authentic Tokyo capstone is a meal and neighborhood tour chosen by friends who live there.", blocker: "Confirm neighborhood name, availability, and dinner plan.", fallback: "Keep it seated and social; if near Chofu, Jindaiji and soba are a strong optional anchor." },
  { id: "anime", goal: "Manga or anime culture beyond shopping", days: ["day15", "day16"], status: "Ready", why: "Ghibli covers imaginative culture; the friends' neighborhood may add local character spots or optional Chofu/Kitaro details.", blocker: "", fallback: "Use one compact Nakano or themed-cafe stop only if Mai actively asks on another day." },
  { id: "teamlab", goal: "teamLab Borderless", days: ["day21"], status: "Needs Booking", why: "Mai already responded strongly to the visual experience.", blocker: "Timed admission must be booked.", fallback: "Protect the chosen melon-bread store and final meal, then use another modern-art experience if desired." },
  { id: "melon-finale", goal: "Mai's specific special melon-bread shop", days: ["day21"], status: "Needs Name", why: "This is now a protected final-day food anchor.", blocker: "Exact shop and branch have not been confirmed.", fallback: "Use the best confirmed Tokyo Melonpan branch or repeat the passport champion." },
];

const planningConstraints = [
  { title: "Private-only onsen rule", text: "Use only an in-room private bath, reservable private/family bath, clothed footbath, or skip bathing." },
  { title: "Ticket watch", text: "Ghibli Museum and teamLab remain protected roadmap goals with booking fallbacks." },
  { title: "Nice-to-have: Miyajima stay", text: "Consider an island splurge only if budget and luggage logistics support it; Hiroshima base remains a complete trip." },
  { title: "Nice-to-have: parents' extension", text: "A Tokyo extension after Mai and the user leave remains separate from the core trip." }
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

const calendarThumbnailIdeas = {
  day17: "Idea: small bags + first Fuji reveal",
  day18: "Idea: two bikes + lake + Fuji",
  day19: "Idea: Mitsutoge summit marker + Fuji",
  day20: "Idea: small bags reunite with suitcases"
};

function calendarWalkLabel(dayId) {
  const walk = dayWalkingTime[dayId];
  return walk ? `${walk} walk` : "";
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
    baseLabel: "Future Osaka hotel",
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
      questDay("day02", "2026-10-24", "First Bite of Osaka", "Land, recover, and let Japan arrive through food and lights.", ["Kansai International Airport", "Namba Station Osaka", "Ebisu Bridge Osaka", "Dotonbori Osaka"], "Reach Osaka, rest properly, then cross Ebisu Bridge for one neon photo and one hot snack if the body agrees.", ["Find the nearest useful konbini", "Take the we-made-it photo", "Choose tomorrow's breakfast candidate", "Start the melon passport with a packaged baseline if hunger agrees"], ["A canal reflection", "A food sign bigger than expected", "A dessert too cute for jet lag"], "Mai gets one real first-night Japan moment without pressure.", "Stop while Dotonbori still feels magical."),
      questDay("day03", "2026-10-25", "Castle to Neon", "Monumental, pop-culture and retro-food Osaka in one strong arc.", ["Osaka Castle", "Nippombashi Osaka", "Nipponbashi Denden Town", "Shinsekai Osaka"], "Start at the castle near opening, eat a seated Nippombashi lunch, browse Den Den Town and reach Shinsekai for blue hour and kushikatsu.", ["Photograph the castle across the moat", "Choose the interior by interest", "Find one Den Den display that makes Mai stop", "Share one Osaka snack", "Finish with kushikatsu"], ["Golden castle ornament", "A character detail", "Tsutenkaku framed by signs"], "Mai gets history, games/anime culture and loud Osaka streets.", "Parents choose Den Den or Shinsekai—not both."),
      questDay("day04", "2026-10-26", "Kuromon Scores, Tenma Pours", "A timed, scored tasting route with a real finish line and appetite left for dinner.", ["Kuromon Ichiba Market", "Daimaru Shinsaibashi", "Amerikamura", "Namba Osaka", "Tenma Osaka"], "Complete four shared Kuromon categories by 11:30, one Shinsaibashi food-hall checkpoint and one Amerikamura wildcard; reset at the hotel, then finish at no more than two Tenma venues.", ["Score raw/seafood", "Score one hot or grilled bite", "Score one savory non-seafood bite", "Score one fruit or sweet", "Choose one food-hall checkpoint", "Use one Amerikamura wildcard", "Photograph each item and price", "Reset at the hotel", "Share plates at one Tenma izakaya", "Choose one optional specialist finish"], ["A market preparation detail", "The best value surprise", "A youth-culture snack or drink", "The Tenma dish worth reordering"], "Mai gets a playful food hunt rather than an aimless market wander.", "Parents use a seated Kuromon base, skip Amerikamura if useful and rejoin the first Tenma venue."),
      questDay("day05", "2026-10-27", "Kobe Above the Clouds", "Ropeway views, gardens, café time and an optional Kobe dinner.", ["Namba Osaka", "Shin-Kobe Station", "Nunobiki Ropeway", "Kobe Nunobiki Herb Gardens"], "Make Nunobiki the one contained Kobe outing and do not add a wider city checklist.", ["Ride the ropeway", "Find the best city/harbor view", "Pause at a garden café or terrace", "Choose a Kobe sweet", "Add Kobe dinner only if it improves the day"], ["A ropeway-window reveal", "A garden detail", "Kobe and the harbor below"], "Mai gets the romantic scenic outing already selected.", "Parents use the ropeway/view/café version or take an independent Osaka day."),
      questDay("day06", "2026-10-28", "Deer to Kyoto", "Deer, giant Buddha, old streets, then Kyoto.", ["Kintetsu Nara Station", "Nara Park", "Todai-ji Temple", "Naramachi", "Kyoto Station"], "Use Nara as the Osaka-to-Kyoto bridge and make entering Todai-ji's Great Buddha Hall the capstone.", ["Observe or feed deer without making them the entire day", "Try yomogi mochi or kakinoha-zushi", "Find a cafe near Naramachi", "Make the luggage strategy feel competent"], ["A deer bow or side-eye", "A detail that makes Todai-ji's scale click", "An old-town shopfront"], "Mai gets an iconic Japan moment before Kyoto begins.", "Shorten Nara and reach Kyoto earlier if luggage or legs become the story.")
    ]
  },
  kyoto: {
    name: "Kyoto",
    baseLabel: "Future Kyoto hotel",
    description: "Old streets, Mt Inari, Nijo, Arashiyama and a full Mt Hiei mountain day.",
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
      questDay("day07", "2026-10-29", "Torii Before Breakfast", "One intentionally energetic split day: hillside torii, shogun history, then food and river atmosphere.", ["Fushimi Inari Taisha", "Yotsutsuji Intersection Kyoto", "Nijo Castle", "Kamo River Kyoto", "Pontocho Alley"], "Mai and Brian climb Fushimi Inari early, then meet the parents for Nijo Castle and finish around the Kamo River/Pontocho.", ["Turn around at Yotsutsuji or sooner if the climb is complete", "Notice the nightingale floors at Nijo", "Take a real midday reset", "Try one optional Nishiki snack only if the route has room", "Find an atmospheric but manageable dinner"], ["A fox detail", "Kyoto spreading out below Mt Inari", "A castle gate or painted-room detail"], "Mai gets two of her strongest Kyoto priorities without sacrificing a mountain day later.", "Parents skip Mt Inari; everyone may skip Nishiki."),
      questDay("day08", "2026-10-30", "Lantern-Lit Higashiyama", "The big preserved-street, temple-on-the-hill day.", ["Kiyomizu-dera", "Sannenzaka", "Ninenzaka", "Yasaka Shrine", "Gion Kyoto"], "Protect Kiyomizu and the old streets, then let lantern-lit Yasaka/Gion be the atmospheric end.", ["Use a taxi uphill if it saves the day", "Find one matcha or wagashi stop", "Take Mai's dream-trip Kyoto photo", "Move respectfully through Gion without chasing geiko or maiko"], ["A sloping-street detail", "The Kiyomizu panorama", "A lantern-lit corner"], "Mai gets the old-Japan feeling without an overstuffed day.", "Cafe/base-point strategy beats heroic walking."),
      questDay("day09", "2026-10-31", "River, Bamboo, Breathe", "One garden or bamboo reveal, then a shared riverside regroup.", ["Arashiyama Station Kyoto", "Togetsukyo Bridge", "Arashiyama Bamboo Forest", "Tenryu-ji Temple", "Okochi Sanso Garden"], "Choose Tenryu-ji garden, Okochi Sanso, or a manageable bamboo section, then rejoin the family at a riverside cafe; the rowboat is off the list.", ["See Togetsukyo and the river", "Choose one walking payoff rather than collecting all three", "Find the scenic cafe/rest base", "Try one excellent Arashiyama sweet"], ["A mountain-and-river frame", "A bamboo sound or shadow", "A garden detail worth remembering"], "Mai gets a beautiful open-air Kyoto day.", "Return before scenery becomes stamina debt."),
      questDay("day10", "2026-11-01", "Sacred Mountain Hiei", "A full mountain day of forest paths, sacred precincts and views over Kyoto and Lake Biwa.", ["Demachiyanagi Station Kyoto", "Eizan Cable Hiei Station", "Enryaku-ji Temple", "Hieizan Sakamoto Station"], "Use the assisted ascent and choose one meaningful Mt Hiei forest walk linking the Enryaku-ji experience and viewpoints.", ["Confirm the seasonal cable car, ropeway and bus route", "Visit the core Enryaku-ji precinct without collecting every building", "Find one quiet forest section", "Pause for a Kyoto or Lake Biwa view", "Carry a bakery breakfast or trail snack", "Return for a restorative Kyoto dinner"], ["A bell or incense sound in the forest", "A moss, cedar, or stone-path detail", "The first wide Lake Biwa or Kyoto view"], "Mai gets the mountain-and-nature Kyoto day she actively chose.", "Dad uses the most assisted route and may return earlier while Mai and Brian walk farther.")
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
      questDay("day11", "2026-11-02", "White Heron Westbound", "White-castle reveal, humane pacing, then the first scored train-food ride west.", ["Himeji Station", "Himeji Castle", "Koko-en Garden", "Hiroshima Station"], "See Himeji's white keep, choose interior or exterior-plus-Koko-en by mobility, then continue to Hiroshima.", ["Forward or simplify large luggage", "Photograph the first full castle reveal", "Buy different regional ekiben", "Photograph each box closed and open", "Score all five Ekiben League categories", "Eat Hiroshima-style okonomiyaki after check-in if energy agrees"], ["A castle-defense detail", "A garden frame of the keep", "An ekiben package too beautiful to ignore"], "The westward chapter announces itself through a castle and train-food ritual.", "Dad's exterior-and-garden version is a complete win."),
      questDay("day12", "2026-11-03", "Memory Along the River", "Museum, remembrance, river, and the Dome at dusk without emotional clutter.", ["Hiroshima Peace Memorial Museum", "Hiroshima Peace Memorial Park", "Atomic Bomb Dome", "Hiroshima National Peace Memorial Hall"], "Move from the museum through the Cenotaph and memorial axis, then see the Atomic Bomb Dome at dusk.", ["Leave time for a quiet break", "Use the National Peace Memorial Hall if a quieter space helps", "Write one private sentence about what should be remembered", "Try momiji manju or a calm cafe instead of adding sightseeing"], ["The alignment through the Cenotaph", "A paper crane or peace message", "The river changing the mood of the park"], "The day feels thoughtful and humane, not consumed as an attraction.", "Shukkeien is optional; emotional room is the priority."),
      questDay("day13", "2026-11-04", "Torii at the Tide", "Torii, tide, deer, island food, forest, and dusk if the day allows.", ["Miyajimaguchi Station", "Itsukushima Shrine", "Miyajima Omotesando", "Daisho-in Temple", "Miyajima Ropeway"], "See Itsukushima Shrine and the torii at the day's tide, then let the island—not a completion list—be the payoff.", ["Ride the ferry", "Try anago-meshi", "Try a grilled oyster if appealing", "Compare warm and packaged momiji manju", "Choose Daisho-in or ropeway only by energy", "Stay for softer island atmosphere if practical"], ["Torii reflected or revealed by low tide", "A deer behaving like a local", "A forest, lantern, or sea detail away from the busiest street"], "Miyajima earns its place as the romantic westward payoff.", "Shrine, waterfront, food street, and cafe are a complete parent version.")
    ]
  },
  tokyo: {
    name: "Tokyo",
    baseLabel: "Future Tokyo hotel",
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
      questDay("day14", "2026-11-05", "Ekiben Eastbound", "The long Shinkansen becomes the experience: browse, choose, reveal, share, score, then settle into Tokyo.", ["Hiroshima Station", "Tokyo Station", "Tokyo Hotel Area"], "Turn Hiroshima-to-Tokyo into the main ekiben tasting and a calm move into the Tokyo neighborhood.", ["Arrive early enough to browse", "Choose different regional boxes", "Photograph closed packages and open trays", "Trade tastes after departure", "Score all five categories", "Learn the Tokyo hotel station exit, konbini, and easiest dinner"], ["An unexpected bento ingredient", "A beautiful wrapper or clever compartment", "A train-window scene worth pausing lunch for"], "Train food becomes one of the day's actual memories and Tokyo begins gently.", "No Tokyo sightseeing is required after arrival."),
      questDay("day15", "2026-11-06", "Ghibli or Not Ghibli", "Soft imaginative Tokyo.", ["Ghibli Museum Mitaka", "Inokashira Park", "Kichijoji Sunroad Shopping District"], "If tickets work, visit Ghibli Museum and walk back through Inokashira Park; otherwise make the park and Kichijoji the complete quest.", ["Walk by the pond", "Find a cafe that belongs in this day", "Browse one shotengai", "Choose a snack or object animated in spirit", "Check bakeries for a new melon-bread style"], ["A duck, bridge, or pond reflection", "A handmade-looking display", "A detail that rewards looking closely"], "Mai gets why Tokyo is not just skyscrapers.", "Keep the post-museum plan gentle. Wonder uses battery."),
      questDay("day16", "2026-11-07", "Tokyo Through Their Eyes", "Let people who live here show us their everyday Japan.", ["Chofu Station Tokyo", "Jindaiji Temple", "Jindai Botanical Gardens", "Friends Neighborhood Tokyo"], "Travel to Akko and Yoshi's home neighborhood, follow their lead through local spots, and let the dinner they choose be the capstone.", ["Ask them for one place they genuinely like", "Eat something they recommend without over-researching it", "Learn one neighborhood fact, memory, or routine from them", "Take a relaxed group photo", "Bring a small consumable thank-you gift", "Use Jindaiji or the botanical gardens only if the friends route them there"], ["A lived-in shopfront or local sign", "Steam rising from a recommended kitchen", "A tiny charm, statue, or hand-painted detail"], "Mai gets welcomed into a real corner of Japan.", "Keep it seated and social; let the friends choose the pace and dinner spot."),
      questDay("day17", "2026-11-08", "First Fuji Evening", "Tokyo intensity gives way to three quiet nights beside Lake Kawaguchiko.", ["Shinjuku Station", "Kawaguchiko Station", "Lake Kawaguchiko"], "Send or store large luggage, travel with small bags, and arrive early enough to settle in and watch the light change on Fuji.", ["Confirm final Tokyo luggage handling", "Reserve the highway bus or Fuji Excursion", "Keep essential medication and layers in the small bag", "Confirm the private-bath plan", "Reach the hotel with dinner margin"], ["The first clear Fuji reveal", "Lake light from the room or shore", "A quiet arrival drink or meal"], "Mai gets a deliberate Fuji escape rather than another complicated transfer chapter.", "Arrival, the view and dinner are the complete parent day."),
      questDay("day18", "2026-11-09", "Pedal Around Fuji", "The first active day is an e-bike circuit around the lake, with Mount Tenjoyama as the short bad-cycling fallback.", ["Lake Kawaguchiko", "Oishi Park", "Fuji Omuro Sengen Shrine", "Kawaguchi Asama Shrine", "Mt Fuji Panorama Ropeway"], "Complete the planned Kawaguchiko e-bike circuit—or a defined partial circuit if wind or energy says stop—and finish with one bikes-and-Fuji photograph.", ["Reserve suitable e-bikes", "Check wind, rain and Fuji visibility", "Mark lunch, toilet and turnaround stops", "Use lights and helmets", "Use the Tenjoyama ropeway/ridge walk as the short non-bike fallback", "Save legs and trail food for tomorrow's summit"], ["Bikes framed beside the lake", "Fuji changing angle around the circuit", "A shrine, red leaves, or local snack stop"], "Mai gets a complete active Fuji day before the summit day.", "Parents choose Oishi Park, the ropeway, a museum or hotel time and reunite for dinner."),
      questDay("day19", "2026-11-10", "Mitsutoge Summit", "Mitsutoge is today's headline summit, using the mountain-road trailhead out-and-back route after the required open-trail and weather checks.", ["Mitsutoge Trailhead", "Mount Mitsutoge", "Lake Kawaguchiko", "Itchiku Kubota Art Museum", "Oishi Park"], "Reach the Mitsutoge summit marker safely, take the Fuji summit photograph, and return by the same route with daylight margin.", ["Confirm the official closure is lifted", "Check wind, temperature and trail conditions", "Do not substitute the longer Mitsutoge Station approach", "Carry layers, water and a proper trail meal", "Set a non-negotiable turnaround time", "Confirm tomorrow's reserved Tokyo return"], ["Mitsutoge summit marker with Fuji", "Rock, ridge, or trail detail", "The first seated post-hike meal"], "Mai gets an unmistakable summit objective after the bike day.", "Parents keep the same room and use the separate slow lake, museum, café or hotel timeline."),
      questDay("day20", "2026-11-11", "Back to Tokyo Glow", "Return to Tokyo with a full buffer before the flight and an easy afternoon for laundry, shopping or anything missed.", ["Kawaguchiko Station", "Shinjuku Station", "Tokyo Hotel Area"], "Take the reserved morning return, recover or receive the large bags, check in, and complete only the most useful Tokyo reset tasks.", ["Allow road-delay margin or use the Otsuki rail fallback", "Recover the large luggage", "Do laundry if still needed", "Buy only priority items", "Choose an easy neighborhood dinner"], ["The last Fuji glimpse", "Suitcases reunited", "A calm final-Tokyo dinner"], "Tokyo feels like a soft landing and finale, not another race.", "The transfer and hotel reset are a complete day."),
      questDay("day21", "2026-11-12", "Light, Melon Bread, Goodbye", "Immersive art, Mai's chosen bakery, final food and a fully packed suitcase.", ["teamLab Borderless Azabudai Hills", "Tokyo Melonpan", "Final Tokyo Dinner", "Tokyo Station"], "Visit teamLab at the booked time, make Mai's exact melon-bread shop a real stop, then finish with one celebratory meal and complete packing.", ["Find the teamLab room we most want to remember", "Take one abstract photo", "Confirm the exact bakery branch and stock", "Score the special melon bread in the passport", "Buy only the souvenirs still genuinely wanted", "Eat the final this-is-Tokyo meal", "Pack with airport margin", "Name the champion ekiben and melon bread"], ["A reflection that changes the room", "The first crackle of the special melon-bread crust", "One tiny goodbye photo"], "Mai chooses the sweet and emotional ending of the trip.", "Dad may skip teamLab and join the bakery/final meal; nothing else is required.")
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
    clearPath: "Early Inari climb, real midday reset, Nijo reunion, Kamo/Pontocho dinner.",
    mainGoal: "Reunite at Nijo with one morning photo to share—torii, fox, or nightingale floors.",
    photoHint: "Torii tunnel, Kyoto view from Inari, or Nijo gate/floors."
  },
  day08: {
    clearPath: "Kiyomizu early, slope streets down, long cafe break, Gion lanterns after dark.",
    mainGoal: "Capture the lantern-lit Gion or Kiyomizu panorama that defines old Kyoto.",
    photoHint: "Kiyomizu stage view, sloping street, or lantern-lit Gion corner."
  },
  day09: {
    clearPath: "One bamboo/garden reveal, riverside regroup at Togetsukyo, leave before overload.",
    mainGoal: "Reunite at Togetsukyo with one scenery photo you chose—bamboo, garden, or river.",
    photoHint: "Bamboo path, garden detail, or Togetsukyo with mountains behind."
  },
  day10: {
    clearPath: "Assisted ascent, Enryaku-ji core, one forest walk, comforting Kyoto dinner after.",
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
    summary: "Arrival day stays deliberately small: reach Namba, rest for real, then let one neon-and-food walk be the first chapter of Japan.",
    timeline: [["Afternoon", "Land at KIX, clear the airport, and travel directly to the Osaka hotel."], ["17:00–19:00", "Check in, shower, unpack only what is needed, and rest."], ["19:00–21:00", "If energy agrees, cross Ebisu Bridge, share one hot Osaka snack, and find the nearest useful konbini."], ["By 21:30", "Return while the lights still feel magical; tomorrow matters more than squeezing in another stop."]],
    history: ["Osaka became Japan's great merchant city because water routes and warehouses connected the country's rice, goods, and money here. The phrase often translated as “the nation's kitchen” originally described this commercial role before it became shorthand for Osaka's appetite.", "Dotonbori began as a 17th-century canal project and grew into a theater district. Restaurants followed the crowds, and the extravagant signs outside are descendants of that competitive entertainment culture: Osaka announcing, loudly and cheerfully, that pleasure is serious business."]
  },
  day03: {
    summary: "Castle, character culture and retro food give Osaka one intentionally big day.",
    timeline: [["08:30–11:30", "Reach Osaka Castle near opening; enjoy the reveal and choose the interior by interest."], ["11:30–13:00", "Travel south and sit for a substantial Nippombashi lunch."], ["13:00–16:00", "Browse a defined Den Den Town segment."], ["16:00–19:30", "Continue to Shinsekai for blue-hour signs and kushikatsu; add no fourth district."]],
    history: ["Toyotomi Hideyoshi began Osaka Castle in 1583 as the center of his effort to unify Japan. The current keep is a reconstruction and museum, but its moat and walls still establish Osaka's monumental scale.", "Shinsekai was unveiled in 1912 as a vision of the new world. Den Den Town tells a later popular-culture story, shifting from postwar electronics into games, anime and collector culture."]
  },
  day04: {
    summary: "The Osaka Snack League turns Kuromon, Shinsaibashi and Amerikamura into a bounded five-taste quest before a protected Tenma dinner.",
    timeline: [["10:00–11:30", "At Kuromon, share and score exactly four categories: raw/seafood, hot/grilled, savory non-seafood and fruit/sweet. Hard exit at 11:30."], ["12:00–14:30", "Use Daimaru Shinsaibashi for one controlled food-hall checkpoint and seating; continue to Amerikamura for one wildcard only."], ["15:00–17:00", "Return to the Namba hotel for a real reset and stop eating."], ["17:30–21:00", "Go to Tenma: one izakaya for shared plates, then at most one specialist negiyaki, ramen, gyoza or dessert finish."]],
    history: ["Kuromon Ichiba began as a wholesale fish market and became one of Osaka's most famous public market streets. The snack mission works because shared portions, category limits and a hard exit turn abundance into a game instead of a blur.", "Tenma grew around Osaka Tenmangu Shrine and its long shopping arcade. Markets, neighborhood restaurants and compact bars make it a strong lived-in dinner district without needing Dotonbori energy."]
  },
  day05: {
    summary: "Kobe Nunobiki remains the selected romantic outing, with the ropeway and gardens doing the work instead of a wider Kobe checklist.",
    timeline: [["Sleep-in morning", "Leave Osaka/Umeda when ready; budget roughly 60-75 minutes each way toward Shin-Kobe."], ["Late morning–15:30", "Ride the ropeway, explore a chosen garden segment and take a café/terrace pause."], ["15:30–18:00", "Descend and choose a Kobe sweet or optional dinner according to appetite."], ["Evening", "Return to Osaka without adding another Kobe district."]],
    slowTimeline: [["10:00–11:30", "Sleep in, eat near the Osaka hotel and leave only when everyone feels ready."], ["Late morning", "Travel to Shin-Kobe and ride the ropeway both ways; the view is the main event."], ["Midday–15:00", "Use one terrace or café and only the shortest comfortable garden section."], ["Afternoon", "Return directly to Osaka for a proper hotel rest."], ["Evening", "Eat close to the hotel; Kobe dinner is unnecessary."]],
    history: ["The Nunobiki slopes rise immediately behind Shin-Kobe, making mountain scenery unusually close to the city and port.", "The modern ropeway and herb gardens turn that steep terrain into an assisted scenic outing with broad views over Kobe and Osaka Bay."]
  },
  day06: {
    summary: "Nara becomes the bridge from Osaka to Kyoto: deer open the day, Todai-ji supplies the emotional scale, and luggage never gets to become the main character.",
    timeline: [["08:00–09:00", "Check out and send or store luggage; travel toward Kintetsu Nara."], ["10:00–12:30", "Walk or taxi through Nara Park toward Todai-ji, keeping deer encounters playful but brief."], ["12:30–15:00", "Eat kakinoha-zushi or mochi, then choose a short Naramachi or cafe pause."], ["15:00–18:00", "Continue to Kyoto, check in, and keep dinner close to the hotel."]],
    history: ["Nara became Japan's first lasting imperial capital in 710, when the court laid out Heijo-kyo using continental models. Buddhism was not merely private faith: temples, ritual, scholarship, and state power were woven together in the project of governing the country.", "Todai-ji's Great Buddha was cast in the 8th century during epidemics, crop failures, and political anxiety. Emperor Shomu imagined the colossal bronze image as a unifying act of protection. The present hall is smaller than its medieval predecessor, which makes the surviving scale even more startling."]
  },
  day07: {
    summary: "An early Mt Inari climb and afternoon Nijo visit share one energetic day, with a deliberate reset between them and a soft river-food ending.",
    timeline: [["06:45–10:15", "Mai and Brian climb through Fushimi Inari's torii to Yotsutsuji or the point where the experience feels complete; parents sleep in."], ["10:30–12:30", "Eat, return to the hotel if useful, and reset rather than racing across Kyoto."], ["13:00–16:00", "Meet at Nijo Castle for the palace rooms, nightingale floors, and gardens."], ["17:00–20:00", "Choose Kamo River dusk and a Pontocho-area dinner; Nishiki is optional."]],
    history: ["Fushimi Inari is the head shrine of thousands of Inari shrines across Japan. Donated torii record hopes, gratitude, and commercial prosperity; foxes serve as Inari's messengers.", "Tokugawa Ieyasu built Nijo Castle after winning control of Japan. Its painted rooms and staged approaches turned architecture into political theater, and the castle later hosted the announcement that authority would return to the emperor."]
  },
  day08: {
    summary: "The protected old-Kyoto day begins uphill at Kiyomizu, descends through historic slopes, and lets lantern light—not another checklist item—provide the ending.",
    timeline: [["08:00–09:00", "Taxi uphill and enter Kiyomizu-dera before the lanes become busiest."], ["09:00–12:30", "Explore the temple and descend through Sannenzaka and Ninenzaka at an unhurried pace."], ["12:30–16:30", "Choose lunch, matcha, and a substantial cafe or hotel break."], ["17:00–19:30", "Let Yasaka Shrine and Gion provide the lantern-lit atmospheric ending."]],
    history: ["Kiyomizu-dera's story begins around a sacred spring in the wooded hills east of Kyoto. Its famous stage projects over the slope without nails, transforming pilgrimage into a carefully framed encounter with the city, seasons, and the possibility of divine assistance.", "The roads below carried worshippers, crafts, food, and lodging toward the temple. Farther down, Gion grew beside Yasaka Shrine into an entertainment quarter governed by highly trained arts and social customs. It remains a living neighborhood, which is why restraint around residents and performers matters."]
  },
  day09: {
    summary: "Arashiyama is about one beautiful reveal and a shared return to the river—not collecting bamboo, gardens, temples, bridge, and mountain as separate obligations.",
    timeline: [["08:00–09:00", "Travel west early enough to experience a quieter river or bamboo approach."], ["09:00–12:00", "Choose one main walking payoff: Tenryu-ji garden, Okochi Sanso, or bamboo—not all three."], ["12:00–14:30", "Rejoin at Togetsukyo and settle into lunch or a scenic cafe; rowboat is off the list."], ["14:30–17:00", "Take a gentle riverside finish and return before the area becomes stamina debt."]],
    history: ["Arashiyama became a retreat for Heian-period aristocrats who traveled from the capital to compose poetry, admire blossoms and autumn leaves, and turn scenery into cultivated experience. Later temples and villas continued that dialogue between designed garden and borrowed mountain view.", "The name Togetsukyo—Moon Crossing Bridge—comes from an emperor's poetic impression of the moon moving across the bridge. The bamboo grove is only one scene in a much larger landscape of river, working woodland, gardens, and ritual routes."]
  },
  day10: {
    summary: "Mt Hiei receives a full day: assisted ascent, Enryaku-ji's forested precincts, one meaningful walk, and views toward Kyoto or Lake Biwa.",
    timeline: [["07:30–09:30", "Travel toward the selected Mt Hiei ascent with bakery breakfast and a confirmed seasonal transport plan."], ["09:30–13:00", "Reach Enryaku-ji and focus on one core precinct rather than collecting every hall."], ["13:00–16:00", "Mai and Brian add the chosen forest/viewpoint walk; Dad uses the assisted route and seated pauses."], ["16:00–19:30", "Descend with operating-hour margin and return to Kyoto for a comforting dinner before tomorrow's transfer."]],
    slowTimeline: [["08:30–10:30", "Take the most assisted confirmed ascent after a calm breakfast; avoid an early multi-transfer race."], ["10:30–12:30", "Visit the Todo core only, with Konpon Chudo as the essential temple experience and seated pauses."], ["12:30–14:00", "Eat a proper lunch and use the nearest viewpoint rather than adding a forest route."], ["14:00–16:30", "Begin the assisted descent with generous last-service margin."], ["Evening", "Return to Kyoto early for rest, packing and a comforting dinner."]],
    history: ["Saicho founded Enryaku-ji on Mt Hiei in the late 8th century, and the mountain became the center of Tendai Buddhism in Japan. Its temples trained monks who later shaped several major Buddhist traditions.", "The mountain's position between Kyoto and Lake Biwa made it both a sacred barrier and a strategic landscape. Forest paths and scattered precincts are central to the experience: Mt Hiei is not one building but a religious geography."]
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
    summary: "Akko and Yoshi show their home neighborhood; the dinner they choose is the most authentic Tokyo capstone of the trip.",
    timeline: [["Late morning", "Travel toward the friends' neighborhood; confirm the exact meeting point once Chofu or another base is locked in."], ["Midday–afternoon", "Follow Akko and Yoshi through the local spots they genuinely like—not a tourist checklist."], ["Optional", "If the route passes Chofu, Jindaiji temple lanes, soba, or the botanical gardens can anchor a parent-paced pause."], ["Evening", "Let the friends choose dinner; keep the day seated, social, and unhurried."]],
    history: ["Tokyo's residential neighborhoods are as important to understanding the city as its famous districts. Being shown everyday shops, routines, and food by people who live there is more valuable than importing another sightseeing plan.", "If the friends are near Chofu, Jindaiji traces its foundation to the 8th century and preserves a pilgrimage-edge feeling outside the old city. Chofu is also linked to GeGeGe no Kitaro creator Shigeru Mizuki, whose yokai details appear around the area."]
  },
  day17: {
    summary: "Everyone begins a three-night Kawaguchiko retreat with small bags while the large luggage waits at the final Tokyo hotel.",
    timeline: [["Morning", "Send large luggage onward or leave it with the returning Tokyo hotel."], ["Late morning–afternoon", "Take a reserved highway bus or Fuji Excursion from Shinjuku to Kawaguchiko."], ["15:00–17:30", "Check in early enough to enjoy the lake, room and bath plan."], ["18:00 onward", "Eat at the lodging; no further achievement is required."]],
    history: ["The Fuji Five Lakes sit along Mt Fuji's northern base in a landscape shaped by lava flows and water.", "Kawaguchiko's Tokyo access, lakeshore and hot-spring hotels make it a practical place to inhabit for several days instead of chasing a single Fuji photograph."]
  },
  day18: {
    summary: "Complete the Kawaguchiko e-bike circuit as its own win, with Mount Tenjoyama as the compact fallback and Mitsutoge protected for tomorrow.",
    timeline: [["07:30–09:00", "Check wind, rain and rental status; collect reserved e-bikes."], ["09:00–12:00", "Ride the first half of the lake circuit with a planned viewpoint and food stop."], ["12:00–15:00", "Complete the circuit or use the agreed partial-loop exit before fatigue changes the day."], ["Evening", "Return the bikes, eat well and recover at the same hotel."]],
    history: ["The official town guide describes the Kawaguchiko circuit as just under 20 kilometers and recommends cycling as a flexible way to connect lakeside viewpoints, museums, parks and shrines.", "Giving the circuit its own day keeps the ride playful and preserves fresh legs, food and attention for the Mitsutoge summit tomorrow."]
  },
  day19: {
    summary: "Mitsutoge is the headline summit objective, using the shorter mountain-road trailhead out-and-back route after the required official reopening and conditions checks.",
    timeline: [["06:30–07:30", "Confirm the official trail reopening, weather and wind; eat properly and leave with layers, water and food."], ["Morning", "Reach the mountain-road trailhead and climb steadily toward the summit."], ["Summit window", "Touch the summit marker, take the Fuji photograph and start down before the fixed turnaround time."], ["Afternoon", "Return by the same route and have a seated recovery meal."], ["Evening", "Rejoin everyone, confirm tomorrow's Tokyo return and sleep early."]],
    slowTimeline: [["Morning", "Keep a slow hotel breakfast while the hikers depart."], ["Late morning", "Choose Oishi Park, Itchiku Kubota Art Museum or a short north-shore outing."], ["Afternoon", "Use a café, private bath or hotel lounge; do not build a second transport chain."], ["Evening", "Reunite for the summit story and final Kawaguchiko dinner."]],
    history: ["Mitsutoge is a small group of peaks north of Mt Fuji, prized because the summit ridge looks directly toward Fuji rather than standing on it.", "The mountain-road trailhead shortens the ascent enough to make a same-way summit day practical; the longer Mitsutoge Station approach remains outside this plan."]
  },
  day20: {
    summary: "A reserved morning return creates a protected final Tokyo chapter for luggage, laundry, missed priorities and an easy dinner.",
    timeline: [["07:00–09:00", "Breakfast, one last Fuji look and checkout."], ["Morning–early afternoon", "Use the reserved Shinjuku bus, with rail via Otsuki as the road-delay fallback."], ["Afternoon", "Check in, recover the large bags, and do laundry or one priority shopping cluster."], ["Evening", "Eat near the hotel and keep the final full day fresh."]],
    history: ["Kawaguchiko developed as a Tokyo-accessible resort through both the Fujikyuko railway and highway-bus network.", "Returning two nights before the flight converts weather or traffic risk into an inconvenience rather than a departure-day emergency."]
  },
  day21: {
    summary: "The final full day protects three things only: teamLab, Mai's chosen special melon bread, and a fully packed, well-fed ending.",
    timeline: [["Morning", "Use a morning teamLab time if available and travel with generous admission margin."], ["Timed entry–3 hours", "Explore Borderless without trying to locate every room; use the tea house or Azabudai for a reset."], ["Mid-afternoon–18:00", "Go to Mai's exact melon-bread shop and complete the final passport score; handle only essential souvenirs."], ["18:00–21:00", "Eat the final celebratory meal, name the ekiben and melon-bread champions, and pack completely."]],
    history: ["teamLab belongs to Tokyo's long habit of using new technology to reorganize how bodies experience space. Its moving images replace the framed artwork with an environment visitors help shape.", "Melon bread is a modern Japanese bakery form rather than a single fixed recipe. Ending with Mai's chosen specialist turns a humble everyday food into a personal trip ritual—the kind of memory repetition and anticipation make larger than the object itself."]
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
    <p><strong>Why today matters:</strong> ${goals.length ? goals.map((goal) => goal.goal).join(" · ") : day.theme}</p>
    ${goals.some((goal) => goal.blocker) ? `<p class="roadmap-blocker"><strong>Before the trip:</strong> ${goals.filter((goal) => goal.blocker).map((goal) => goal.blocker).join(" ")}</p>` : ""}
    <section class="context-block merged-summary">
      <h4>Quick Summary</h4>
      <p>${context.summary}</p>
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

  const city = activeCity();
  const hotelField = document.querySelector("#hotelField");
  const hotelLabel = document.querySelector("#hotelLabel");
  const hotelHelp = document.querySelector("#hotelHelp");
  if (hotelField) {
    hotelField.value = state.lodging[state.activeCity] || "";
    hotelField.placeholder = `Paste ${city.name} hotel name or address later`;
  }
  if (hotelLabel) hotelLabel.textContent = city.baseLabel;
  if (hotelHelp) hotelHelp.textContent = `${city.name} day maps use this as the starting point until the hotel is locked in.`;

  renderCalendar();
  renderTripQuestDashboard();
  renderCityDiscoveryChecklist();
  renderMelonPassport();
  if (review && todayIso() >= "2026-11-10") review.appendChild(makePlaneRideReviewCard());
  renderAlbum();
  setupOverviewCarousel();
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
          <span class="calendar-walk">${calendarWalkLabel(day.id)}</span>
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
      grid.appendChild(button);
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

function mapsEmbedUrl(day) {
  const query = `${day.places[0] || day.title} Japan`;
  return `https://maps.google.com/maps?output=embed&q=${encodeURIComponent(query)}`;
}

function mapsRouteUrl(day) {
  const places = day.places || [];
  const hotel = (state.lodging[state.activeCity] || "").trim();
  const origin = hotel || places[0] || "Japan";
  const destination = places.at(-1) || origin;
  const waypoints = (hotel ? places : places.slice(1, -1)).join("|");
  const params = new URLSearchParams({ api: "1", travelmode: "transit", destination });
  params.set("origin", origin);
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

  const dayMapLink = document.createElement("a");
  dayMapLink.href = mapsRouteUrl(day);
  dayMapLink.target = "_blank";
  dayMapLink.rel = "noopener";
  dayMapLink.textContent = state.lodging[state.activeCity] ? "Open Day Map from Hotel" : "Open Day Map";

  actions.append(dayMapLink);
  content.append(iframe, placeList, actions);
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
    if (overviewStrip) overviewStrip.scrollTo({ left: 0, behavior: "auto" });
    state.overviewWindows = state.overviewWindows || {};
    state.overviewWindows.overview = 0;
    saveState();
    const firstCityDay = document.querySelector(`#calendarGrid .calendar-day[data-city="${state.activeCity}"]`);
    if (firstCityDay) firstCityDay.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  });
}

function showOverview() {
  document.body.dataset.city = state.activeCity;
  overviewPanel.classList.remove("hidden");
  dayPanel.classList.add("hidden");
  document.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.view === "overview"));
  renderOverview();
  renderStats();
  snapOverviewToActiveCity();
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

cityRail.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-city]");
  if (!button) return;
  state.activeCity = button.dataset.city;
  saveState();
  renderNav();
  showOverview();
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
