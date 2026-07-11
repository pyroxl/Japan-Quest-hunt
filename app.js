const STORAGE_KEY = "tokyoQuestHunt.v3";
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
    description: "Local rhythm, Kawagoe, Ghibli/Kichijoji, teamLab, friends, creative streets, and old Tokyo.",
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
        title: "Day 15 - Akko / Yoshi Local Japan Quest",
        theme: "Let people who live there show us their Japan.",
        places: ["Tokyo Station", "Ueno Park", "Kichijoji"],
        groups: [
          ["Main quest", "main", ["Spend time in Akko and Yoshi's chosen neighborhood or chosen meeting area, letting them lead."]],
          ["Side quests", "side", ["Ask them for one place they genuinely like, not the place they think tourists should see.", "Eat something they recommend without over-researching it first.", "Learn one neighborhood fact, memory, or routine from them.", "Take a group photo that does not feel stiff.", "Get one local-life tip we would never have found alone."]],
          ["Hidden eggs", "egg", ["A residential street detail: small garden, laundry, bicycle line, local noticeboard, tiny shrine.", "A shop where the staff seem to know regulars.", "A moment where the day feels more like visiting friends than sightseeing."]],
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
    description: "Share genuinely different versions across the route. One bun can count for both of us.",
    type: "side",
    items: [
      "Konbini baseline melon bread",
      "Fresh neighborhood-bakery classic",
      "Jumbo fresh-baked version",
      "Actual melon-flavored or melon-cream version",
      "Cream, custard, or ice-cream-filled version",
      "Chocolate or chocolate-chip version",
      "Matcha, hojicha, or tea-flavored version",
      "Strawberry or another fruit variation",
      "Caramel or cinnamon variation",
      "Wildcard version neither of us has seen before",
      "Crown the Mai Champion: best classic, flavored, value, and overall"
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
      "Eat one meal recommended by Sayaka or Akko without over-researching it"
    ]
  },
  {
    title: "Small Keepsakes",
    description: "The two culture experiences that actually feel personal, plus a thank-you.",
    type: "side",
    items: [
      "Buy, write, stamp, and mail a postcard from Japan",
      "Make one compact craft only if we genuinely want the finished object",
      "Write or choose a thank-you card for Sayaka or Akko"
    ]
  }
];

function questDay(id, date, title, theme, places, main, side, eggs, mai, soft) {
  return {
    id,
    date,
    short: new Date(`${date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    title: `Day ${Number(id.replace("day", ""))} - ${title}`,
    theme,
    places,
    groups: [
      ["Main quest", "main", [main]],
      ["Side quests", "side", side],
      ["Hidden eggs", "egg", eggs],
      ["Mai-coded moment", "mai", [mai]],
      ["Soft landing", "soft", [soft]]
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
      questDay("day04", "2026-10-26", "Normal-Life Osaka Quest", "Cafes, small shops, lived-in food streets, and an optional participatory night.", ["Tenma Osaka", "Fukushima Osaka", "Nakazakicho Osaka"], "Choose one local-feeling neighborhood cluster and let the day breathe.", ["Find a kissaten, cafe, or bakery", "Eat a casual izakaya dinner", "Try a 60–90 minute private karaoke box only if tonight feels right", "Take a street photo with no landmark", "Choose a neighborhood worth returning to"], ["A charming tiny restaurant sign", "A tucked-away shop", "A houseplant, noren, lantern, or doorway detail"], "Mai gets the imagine-living-here-for-an-afternoon feeling.", "Pick one neighborhood, not all three by default."),
      questDay("day05", "2026-10-27", "Open Osaka Quest", "No Umeda Sky Building and no forced replacement.", ["Namba Osaka", "Tenma Osaka", "Fukushima Osaka", "Osaka Aquarium Kaiyukan"], "Choose the day by actual energy: local Osaka, food quest, recovery, or Kaiyukan only if Mai wants the aquarium.", ["Sleep without an alarm", "Do laundry or one useful admin task", "Browse a depachika or supermarket for dinner", "Find a different melon-bread style", "If Kobe wins, let it replace Osaka rather than adding both"], ["A supermarket hotel-picnic find", "A bakery tray worth photographing", "The moment choosing less improves the trip"], "Mai chooses the shape of the day instead of inheriting a substitute attraction.", "A recovery day is a successful day."),
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
      questDay("day10", "2026-11-01", "Soft Kyoto Quest", "Early torii for Mai and us, then river, bakery, supermarket, and recovery.", ["Fushimi Inari Taisha", "Demachiyanagi Station", "Kamo River Delta"], "Walk through Fushimi Inari's torii early and turn back when the experience feels complete, then rejoin for ordinary Kyoto.", ["Find a bakery breakfast", "Sit near the Kamo River Delta", "Shop a supermarket or depachika for a hotel picnic", "Write or mail a postcard", "Look for matcha, hojicha, or tea-flavored melon bread"], ["A fox detail", "A quiet torii section", "A stepping-stone or local river routine"], "Kyoto becomes somewhere to exist, not only sightsee.", "Let this day repair the trip battery.")
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
    description: "Eight Tokyo calendar days: arrival and ekiben settling, Ghibli, friends' local Japan, pop culture, Kawagoe, teamLab, old Tokyo, and favorite returns.",
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
      questDay("day16", "2026-11-07", "Sayaka / Akko Local Japan Quest", "Let friends define their neighborhood and arrive as thoughtful guests, not tourists.", ["Chofu Station Tokyo", "Jindaiji Temple", "Tokyo"], "Spend time in Sayaka's or Akko's chosen neighborhood, let them lead, and make the social time the achievement.", ["Confirm neighborhood outing, restaurant, or actual home invitation", "Bring comparable modest commercially packaged non-meat gifts for separate hosts", "Wear clean socks and arrive on time, not early", "If entering a home, say ojamashimasu and handle the genkan carefully", "Offer the gift with both hands and follow the host's lead", "Ask before photographing home or family", "Say itadakimasu and gochisousama deshita", "Leave without overstaying; say ojama shimashita and send a specific thank-you", "Ask for one place and meal they genuinely like"], ["A residential garden, bicycle line, or noticeboard", "A shop where staff know regulars", "The moment it feels like visiting friends"], "Mai feels welcomed into a real corner of Japan.", "Do not attach a major sightseeing add-on."),
      questDay("day17", "2026-11-08", "Open Pop-Culture Quest", "Choose one creative neighborhood now; solve the participatory night with Mai later.", ["Shimokitazawa Station", "Koenji Station", "Nakano Broadway"], "Choose Shimokitazawa, Koenji, or Nakano and explore it well; the final pop-culture capstone remains open.", ["Find cafe, curry, ramen, crepe, or bakery", "Browse records, books, vintage, manga, or one odd shop", "Investigate karaoke, a small live show, arcade, or specific event", "Find a flavored melon bread", "Record which night option Mai actually wants"], ["A hand-drawn sign", "A tiny upstairs or basement shop", "A weirdly specific collectible"], "Mai finds something cute, nostalgic, strange, or deeply her.", "Stop before browsing becomes a stamina tax."),
      questDay("day18", "2026-11-09", "Kawagoe Little Edo Quest", "Warehouse streets, bell tower, candy alley, and sweet-potato snacks.", ["Kawagoe Station", "Kurazukuri no Machinami", "Toki no Kane", "Kashiya Yokocho"], "Walk the warehouse street and make Toki no Kane in late-afternoon light the capstone.", ["Try one sweet-potato thing", "Find a storybook shopfront", "Buy one tiny candy-alley sweet", "Find a cafe that slows the day", "Use bus or taxi between station and old town if helpful"], ["Bell sound, view, or snack", "An excessive sweet-potato item", "A quieter side street"], "Mai chooses the cutest Kawagoe detail.", "Return early if the compact old-town loop already won."),
      questDay("day19", "2026-11-10", "teamLab / Modern Tokyo Quest", "Immersive art, tea, and one polished food-hall finish.", ["teamLab Borderless Azabudai Hills", "Azabudai Hills", "Ginza Mitsukoshi", "Nihonbashi Tokyo"], "Visit teamLab Borderless at the booked time and use EN TEA HOUSE as the natural pause.", ["Find the room we most want to remember", "Take one abstract photo", "Try EN TEA HOUSE", "Browse one food hall without buying everything", "Split the fanciest reasonable sweet"], ["A reflection that changes the room", "Food displayed like jewelry", "A tiny modern design detail"], "Mai finds one room, light effect, or dessert that feels magical.", "teamLab plus one food stop is enough."),
      questDay("day20", "2026-11-11", "Older Tokyo and Melon Bread Quest", "Yanesen's small streets, shops, sweets, and a possible Asakusa jumbo round.", ["Nezu Shrine", "Sendagi Station", "Yanaka Ginza", "Yuyake Dandan", "Asakusa Kagetsudo"], "Move through Nezu/Sendagi and finish at Yanaka Ginza and the sunset steps; add Asakusa only if everyone actively wants it.", ["Visit Nezu Shrine or a small temple", "Try soba, udon, taiyaki, or a cafe", "Browse small ordinary shops", "If Asakusa happens, score the jumbo melon bread", "Buy and mail a postcard if still open"], ["A Showa-feeling storefront", "A cat or cat motif", "A sunset view from Yuyake Dandan"], "Old Tokyo feels softer and cuter than expected.", "Skip Asakusa if Yanesen already gave enough."),
      questDay("day21", "2026-11-12", "Final Food / Favorites Quest", "No new stress. Collect the ending.", ["Tokyo Station", "Ginza", "Kichijoji", "Shibuya"], "Choose the final day by mood, but keep a celebratory dinner and a deliberate favorite-neighborhood return or wanted spectacle.", ["Revisit one Tokyo place", "Buy the snack or small souvenir we kept thinking about", "Find a final wildcard melon bread or repeat the champion", "Eat the final this-is-Tokyo meal", "Choose Shibuya spectacle only if it genuinely appeals", "Pack with margin", "Name the champion ekiben and melon bread"], ["A final station sound", "A final konbini choice", "One tiny goodbye photo"], "Mai chooses the emotional ending: cozy, tasty, cute, fancy, nostalgic, or low-key.", "Protect tomorrow's airport transfer.")
    ]
  }
};

const emergencyCards = [
  ["Rain Card", "soft", ["Department-store food hall", "Station underground shopping", "Cafe plus bookstore/shop browse", "Museum, aquarium, cinema, or indoor character street if convenient", "Hotel-area dinner"]],
  ["Low-Energy Card", "soft", ["One good meal", "One tiny walk", "One useful errand", "One photo", "Back before anyone starts silently resenting the train system"]],
  ["Mai Joy Card", "mai", ["Cute cafe", "Character goods or handmade-looking shop", "Park or pond", "Beautiful dessert", "Soft neighborhood wander"]],
  ["Us Card", "side", ["Split a dessert", "Pick tomorrow's first stop together", "Take one non-perfect couple photo", "Buy one small shared souvenir", "Sit without researching anything for 15 minutes"]]
];

const awards = ["Best Japan day", "Best snack", "Best meal", "Cutest thing Mai found", "Best unplanned moment", 'Best "we live here now" moment', "Funniest small failure", "Place that felt most like ours", "The quest we accidentally completed", "One sentence we should remember"];

const hiddenDayGroupTypes = new Set(["mai", "soft"]);
const sharedDayGroupTypes = new Set(["side"]);

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
    summary: "A normal-life Osaka day: pick a neighborhood, eat casually, browse small shops, and avoid turning the day into a race.",
    history: "Tenma, Fukushima, and Nakazakicho show different layers of Osaka beyond postcard sights: local food streets, rail-linked working neighborhoods, and older small-scale streets that have become cafe and creative pockets."
  },
  day05: {
    summary: "Nara is the bridge between Osaka and Kyoto: deer, Todai-ji, old streets, then onward to the Kyoto base.",
    history: "Nara was Japan's first permanent capital in the 8th century. Todai-ji and its Great Buddha were imperial-scale projects meant to express Buddhist protection of the state, which is why the temple still feels monumental today."
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
    summary: "Friends day is for Akko and Yoshi's local Japan, letting people who live there set the rhythm.",
    history: "Tokyo's residential neighborhoods are as important to understanding the city as its famous districts. Visiting locals on their home turf reveals the everyday networks of stations, shopping streets, temples, parks, and favorite restaurants."
  },
  day16: {
    summary: "Creative-neighborhood day: Shimokitazawa, Koenji, or Nakano, chosen lightly and explored well.",
    history: "Shimokitazawa and Koenji became known for music, theater, vintage shops, and alternative youth culture. Nakano Broadway is a postwar shopping complex that evolved into a dense collector and pop-culture ecosystem."
  },
  day17: {
    summary: "Older Tokyo day: Yanaka, Nezu, Sendagi, and optional Ueno or Asakusa if energy remains.",
    history: "Yanaka and nearby neighborhoods kept more old-town texture than many Tokyo areas after disasters and redevelopment. Nezu Shrine, Ueno, and Asakusa connect this area to temple culture, old shopping streets, museums, and classic shitamachi atmosphere."
  },
  day18: {
    summary: "Final Tokyo day is flexible: favorite return, souvenirs, food crawl, packing, or one missed target.",
    history: "A good final day in Tokyo often reflects the city's real nature: not one definitive sight, but the ability to choose your own pocket of food, shopping, transit, memory, and routine."
  }
};

const chapterBackground = {
  osaka: "Osaka's merchant-city identity comes through food streets, markets, neighborhood rail life, and a willingness to enjoy the city loudly.",
  kyoto: "Kyoto layers imperial, shogunal, religious, craft, market, and ordinary river life; the plan works best when those layers are experienced slowly.",
  hiroshima: "This chapter connects a surviving feudal castle, Hiroshima's modern history and peace work, Miyajima's sacred island landscape, and the long rail journey east.",
  tokyo: "Tokyo is a network of neighborhoods rather than one center: creative districts, old downtown streets, suburban parks, local shopping streets, and intensely modern art all coexist."
};

const dayContext = Object.fromEntries(
  Object.entries(tripData).flatMap(([cityId, city]) =>
    city.days.map((day) => [day.id, { summary: day.theme, history: chapterBackground[cityId] }])
  )
);

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
const quickSidebar = document.querySelector(".quick-sidebar");
const quickMenu = document.querySelector(".quick-menu");
const overviewPanel = document.querySelector("#overviewPanel");
const dayPanel = document.querySelector("#dayPanel");
const tripOverview = document.querySelector("#tripOverview");
const cityOverview = document.querySelector("#cityOverview");
const state = loadState();
const todayTarget = applyTodayTarget();
const desktopMenuQuery = window.matchMedia("(min-width: 980px)");

function defaultState() {
  return {
    done: {},
    awards: {},
    cityWrap: {},
    planeRide: {},
    lodging: { osaka: "", kyoto: "", hiroshima: "", tokyo: "" },
    activeCity: "osaka",
    overviewMode: "trip"
  };
}

function loadState() {
  const fresh = defaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return { ...fresh, ...saved, lodging: { ...fresh.lodging, ...(saved.lodging || {}) } };

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

function overviewMode() {
  return state.overviewMode === "city" ? "city" : "trip";
}

function setOverviewMode(mode) {
  state.overviewMode = mode === "city" ? "city" : "trip";
  document.querySelectorAll("[data-overview-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.overviewMode === state.overviewMode);
  });
  tripOverview?.classList.toggle("hidden", state.overviewMode !== "trip");
  cityOverview?.classList.toggle("hidden", state.overviewMode !== "city");
  renderStats();
}

function syncQuickMenu() {
  if (!quickMenu) return;
  if (desktopMenuQuery.matches) {
    quickMenu.setAttribute("open", "");
  } else {
    quickMenu.removeAttribute("open");
  }
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
    .filter(({ group }) => !hiddenDayGroupTypes.has(group[1]));
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
  coreExperienceQuests.forEach((group, groupIndex) => {
    group.items.forEach((text, itemIndex) => tasks.push({ id: itemId("core", groupIndex, itemIndex), type: group.type, text }));
  });
  Object.entries(tripData).forEach(([cityId, city]) => {
    city.ongoing.forEach((group, groupIndex) => {
      if (group.type !== "side") return;
      const scope = cityId === "tokyo" ? "ongoing" : `${cityId}.ongoing`;
      group.items.forEach((text, itemIndex) => tasks.push({ id: itemId(scope, groupIndex, itemIndex), type: group.type, text }));
    });
    city.days.forEach((day) => {
      countableDayGroupEntries(day).forEach(({ group, groupIndex }) => {
        group[2].forEach((text, itemIndex) => tasks.push({ id: itemId(day.id, groupIndex, itemIndex), type: group[1], text }));
      });
    });
  });
  emergencyCards.forEach((group, groupIndex) => {
    group[2].forEach((text, itemIndex) => tasks.push({ id: itemId("emergency", groupIndex, itemIndex), type: group[1], text }));
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
    if (day) badge.textContent = remainingForDay(day);
  });
}

function isPhotoQuest(title, text) {
  return /\bphoto|picture|album|reflected\b/i.test(`${title} ${text}`);
}

const dailyPhotoSlots = [
  ["food", "Food Photo", "A snack, meal, dessert, drink, or food hall treasure."],
  ["scene", "Scene Photo", "A street, shrine, station, river, shopfront, skyline, or tiny atmosphere proof."],
  ["us", "Us Photo", "A non-perfect couple photo from the day."],
  ["extra", "Extra Photos", "Anything else that belongs in the album for this day."]
];

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

async function renderPhotosForTask(taskId, container) {
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
      await renderPhotosForTask(taskId, container);
      await renderAlbum();
    });
    wrapper.appendChild(deleteButton);
    container.appendChild(wrapper);
  });
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
}

function makePhotoControls(task, buttonText = "Add Photo") {
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
  });
  controls.append(button, fileInput);
  renderPhotosForTask(task.id, photos);
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
  section.querySelectorAll(".quest-card, .award-card").forEach((node) => node.remove());
}

function renderOverview() {
  const city = activeCity();
  clearGroup("#ongoingQuests");
  clearGroup("#emergencyCards");
  document.querySelector("#cityWrapUp").innerHTML = "";
  document.querySelector("#planeRideReview").innerHTML = "";
  document.querySelector("#albumGrid").innerHTML = "";
  document.querySelector("#calendarGrid").innerHTML = "";

  document.querySelector("#hotelField").value = state.lodging[state.activeCity] || "";
  document.querySelector(".hotel-card label").textContent = city.baseLabel;
  document.querySelector(".hotel-card p").textContent = `${city.name} map routes use this as the starting point. You can leave it blank until the hotel is real.`;
  document.querySelector("#ongoingQuests h2").textContent = `${city.name} Side Quests`;

  renderCalendar();
  sharedSideGroups(city).forEach((group) => {
    document.querySelector("#ongoingQuests").appendChild(makeCard(group, group.scope, group.groupIndex, group.meta || {}));
  });
  emergencyCards.forEach(([title, type, items], index) => {
    document.querySelector("#emergencyCards").appendChild(makeCard({ title, type, items }, "emergency", index));
  });
  document.querySelector("#cityWrapUp").appendChild(makeCityWrapUpCard());
  document.querySelector("#planeRideReview").appendChild(makePlaneRideReviewCard());
  renderAlbum();
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
      button.innerHTML = `
        <small>${city.name}</small>
        <strong>${formatCalendarDate(day.date)}</strong>
        <span>${day.title.replace(/^Day \d+ - /, "")}</span>
      `;
      button.addEventListener("click", () => {
        state.activeCity = cityId;
        saveState();
        renderNav();
        showDay(day);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      grid.appendChild(button);
    });
  });
}

async function renderAlbum() {
  const album = document.querySelector("#albumGrid");
  if (!album) return;
  const photos = await getAllPhotos().catch(() => []);
  album.innerHTML = "";
  if (!photos.length) {
    const empty = document.createElement("p");
    empty.className = "album-empty";
    empty.textContent = "Add photos from photo quests and they will collect here for the whole trip.";
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
    lines.push(`${city.name}: ${completed}/${tasks.length} quests cleared`);
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
  intro.textContent = "Use this on the flight home to turn the quests, city notes, photos, and awards into one final review.";
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
    badge: "3 core",
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

function makeContextCard(day) {
  const context = dayContext[day.id] || { summary: day.theme, history: "Background notes can be added here later." };
  const { card, content } = makeCollapsibleCard({
    className: "context-card",
    label: "Context",
    title: "Summary and background",
    badge: "Read",
    open: true
  });
  content.innerHTML = `
    <section class="context-block">
      <h4>Quick Summary</h4>
      <p>${context.summary}</p>
    </section>
    <section class="context-block">
      <h4>Historical Background</h4>
      <p>${context.history}</p>
    </section>
  `;
  return card;
}

function renderDay(day) {
  dayPanel.innerHTML = `
    <div class="day-title">
      <p>${day.short}</p>
      <h2>${day.title}${day.date === todayIso() ? '<span class="today-pill">Today</span>' : ""}</h2>
      <p>${day.theme}</p>
    </div>
  `;
  dayPanel.appendChild(makeContextCard(day));
  dayPanel.appendChild(makeMapCard(day));
  dayPanel.appendChild(makeDailyPhotoCard(day));
  visibleGroupEntries(day).forEach(({ group, groupIndex }) => {
    const [title, type, items] = group;
    dayPanel.appendChild(makeCard({ title, type, items }, day.id, groupIndex, { dayId: day.id, dayTitle: day.title }));
  });
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
      <span class="nav-count" data-day-count="${day.id}">${remainingForDay(day)}</span>
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
  setOverviewMode(overviewMode());
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
  const visible = overviewPanel.classList.contains("hidden") || overviewMode() === "city" ? cityTasks(state.activeCity) : tasks;
  const visibleDone = visible.filter((task) => state.done[task.id]);
  const totalScore = completed.reduce((sum, task) => sum + pointsFor(task.type), 0);
  const mainTotal = visible.filter((task) => task.type === "main").length;
  const mainDone = visibleDone.filter((task) => task.type === "main").length;
  const percent = visible.length ? Math.round((visibleDone.length / visible.length) * 100) : 0;

  document.querySelector("#scoreTotal").textContent = totalScore;
  document.querySelector("#progressTitle").textContent = overviewPanel.classList.contains("hidden") || overviewMode() === "city"
    ? `${activeCity().name}: ${visibleDone.length} of ${visible.length} cleared`
    : `Whole trip: ${visibleDone.length} of ${visible.length} cleared`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector("#mainCount").textContent = `${mainDone}/${mainTotal}`;
  document.querySelector("#sideCount").textContent = visibleDone.filter((task) => task.type === "side").length;
  document.querySelector("#eggCount").textContent = visibleDone.filter((task) => task.type === "egg").length;
  document.querySelector("#maiCount").textContent = visible.length - visibleDone.length;
}

cityRail.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-city]");
  if (!button) return;
  state.activeCity = button.dataset.city;
  state.overviewMode = "city";
  saveState();
  renderNav();
  showOverview();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

quickSidebar.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-jump]");
  if (!button) return;
  if (!desktopMenuQuery.matches) quickMenu?.removeAttribute("open");
  if (overviewPanel.classList.contains("hidden")) {
    showOverview();
  }
  if (button.dataset.mode) {
    setOverviewMode(button.dataset.mode);
    saveState();
  }
  requestAnimationFrame(() => {
    const target = document.querySelector(button.dataset.jump);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelector(".overview-switch")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-overview-mode]");
  if (!button) return;
  setOverviewMode(button.dataset.overviewMode);
  saveState();
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

desktopMenuQuery.addEventListener("change", syncQuickMenu);

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

syncQuickMenu();
renderNav();
if (todayTarget) {
  showDay(todayTarget.day);
} else {
  showOverview();
}
