const STORAGE_KEY = "tokyoQuestHunt.v4";
const APP_VERSION = "japan-quest-v176";
// Apps Script web app. The family passcode stays in Script Properties, not in this file.
var JOURNAL_ENDPOINT = "https://script.google.com/macros/s/AKfycby47Weon2uOWIzhy2hTM9NpogrZSxWhQZ5_mCMqyLS_YN60claov6CoScrJ49ofPby2/exec";
const HIMEJI_LOGIN_URL = "https://himejicastle-ticket.jp/?lng=en-US";
const TEAMLAB_GUIDE_URL = "https://tlba.teamlab.art/tyob10";
const TEAMLAB_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Azabudai Hills Garden Plaza B B1, 5-9 Toranomon, Minato-ku, Tokyo")}`;
const FUJITAYA_MAP_URL = "https://www.google.com/maps/search/?api=1&query=Fujitaya+Miyajima";
const UENO_MAP_URL = "https://www.google.com/maps/search/?api=1&query=Anagomeshi+Ueno+Miyajimaguchi";
const SUISHIN_TABLECHECK_URL = "https://www.tablecheck.com/en/suishin/reserve/message";
const SETSUGETSUKA_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Gora 1300-34, Hakone, Kanagawa")}`;
const HIMEJI_TICKET_NOTE = `BOOKED by Mom (Cynthia King) on the Shirasagi Ticket site. Application number {{copy:SHLMXW4R}}. Reservation ID ZEGU4OXK. The party is 4 adults. The total is JPY 10,400. That is JPY 2,600 per person. Enter Koko-en Garden at any time from 09:00. Last entry is 30 minutes before the garden closes. The garden closes at 17:00. Enter Himeji Castle between 09:30 and 10:00. The castle is open from 09:00 to 17:00. Last entry is 16:00. {{btn:${HIMEJI_LOGIN_URL}|Open ticket login (Mom's account)}} The gate does not accept a screenshot. The gate does not accept a printed ticket. Mom logs in to My Page on her phone. Mom shows the live 2D code in the browser. The phone must have data. Log in on the Shinkansen before you arrive. The signal can be weak in a crowd. Press Entry at each gate. You can cancel at no charge until the castle entry time. Remove your shoes in the main keep. Bring socks with grip. Do not go in again after you leave.`;
const REICHAN_DINNER_NOTE = "Eat an early dinner at Reichan in ekie at Hiroshima Station. Walk in. Do not make a reservation. This is the one Hiroshima okonomiyaki meal on this trip. Allow about JPY 1,000–2,000 per person. Eat lunch in Himeji. Kanawa ekie stays cancelled.";
const SUISHIN_MAIN_NOTE = `BOOKED. The TableCheck reservation ID is {{copy:XJCU9T}}. The status is Accepted. Eat dinner at Suishin main store in Tatemachi. The time is Tue Nov 3 at 18:00. The party is 4 guests. The booking is for a table only. Order a la carte at the table. Do not order okonomiyaki. Anago kamameshi is JPY 2,700. Premium anago-ju is JPY 3,800. That is about $17–24 per person. Nov 3 is a holiday. Do not order a set meal in a private room. The store is open from 11:30 to 22:00. Last order is 20:30. The store is closed on Wednesdays. Do not order the oyster items. Mom hates oysters. You can also call 082-247-4411. The cancellation fee is JPY 2,000 per guest. The fee applies if you cancel within 24 hours. Cancel before 18:00 JST on Mon Nov 2 if the plan changes. Amend the booking from the TableCheck confirmation email. Or cancel the booking from that email. {{link:${SUISHIN_TABLECHECK_URL}|Open TableCheck}}`;
const HIROSHIMA_WEATHER_SWAP = "You can swap Nov 3 and Nov 4 if the Nov 4 forecast is bad. If you swap, do Miyajima on Nov 3. More people come on the holiday. The shrine floats from about 15:00 to 19:45. The Nov 3 high tide is 17:20 (305 cm). On Nov 4 the Peace Memorial Museum is open from 7:30 to 19:00. Entry is JPY 200. Suishin main store is closed on Wednesdays. If Peace Park moves to Wed Nov 4, eat dinner at Suishin ekie. Suishin main store is booked for Tue Nov 3 at 18:00. If you swap the days, cancel that booking before 18:00 JST on Mon Nov 2. Decide from Oct 30 to Nov 1. Use the JMA weekly forecast or tenki.jp for Hatsukaichi. Check the forecast again on the evening of Nov 2.";
const KYOYA_TABELOG_URL = "https://tabelog.com/kyoto/A2601/A260201/26016279/";
const KYOYA_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Kyoya Kiyomizu Yanaginobamba Honke, 207-5 Ayazaimoku-cho, Yanaginobamba-dori Ayanokoji sagaru, Shimogyo-ku, Kyoto")}`;
const KYOYA_NOTE = `BOOKED. Eat dinner at Kyoya Kiyomizu Yanaginobamba Honke (京家 きよみず 柳馬場本家). The Tabelog reservation number is {{copy:FP4YF2QHPJ}}. The time is Sat Oct 31 at 18:30. The party is 5 people. The booking is for seats only. Order a la carte. Order obanzai and yuba. You requested a table with chairs. The table time limit is 2 hours. The section is non-smoking. There is no table charge. A typical dinner is JPY 4,000–5,000 per person. Do not order the set courses. The set courses are built around a pork hot pot. Mai avoids sliced meat. If you cancel on Oct 30, the fee is JPY 2,500 per person. If you cancel on Oct 31, the fee is JPY 5,000 per person. Cancel through Tabelog My Page. The address is 207-5 Ayazaimoku-cho, Yanaginobamba-dori Ayanokoji sagaru, Shimogyo-ku, Kyoto. The shop is just south of Shijo, near Nishiki. {{link:${KYOYA_MAP_URL}|Open the map}} {{link:${KYOYA_TABELOG_URL}|Open the Tabelog page}} The shop phone is 075-352-6556.`;
const MENAMI_SKIP_NOTE = "Skipped. Menami takes bookings by phone only. Do not call Menami. The Oct 31 dinner is Kyoya.";
const EDOBORI_TABELOG_URL = "https://tabelog.com/en/osaka/A2701/A270102/27094721/";
const EDOBORI_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Udon Izakaya Edobori, Osaka")}`;
const EDOBORI_LUNCH_NOTE = `CHOSEN. Walk in at Udon Izakaya Edobori on Tue Oct 27 at 11:00. Do not reserve this lunch. The shop does not take lunch reservations. A meal is about JPY 1,100 per person. The party is 5 people. The shop is open Monday to Saturday from 11:00 to 14:00. Walk about 15 minutes from Hotel Cordia Osaka Hommachi. The room is non-smoking. Mai orders kitsune udon or chikuwa udon. Do not order the chicken tempura. Do not order the meat udon. Do not order tonkatsu. Do not order katsudon. Do not book Honke Shibato. {{link:${EDOBORI_MAP_URL}|Open the map}} {{link:${EDOBORI_TABELOG_URL}|Open the Tabelog page}}`;
const SHIBATO_SKIP_NOTE = "Skipped. Honke Shibato takes bookings by phone only. The price is about JPY 4,920–7,450. Do not call Honke Shibato. Tue Oct 27 lunch is Udon Izakaya Edobori.";
const KURA_TABELOG_URL = "https://tabelog.com/en/osaka/A2701/A270202/27121586/";
const SAKAE_TABELOG_URL = "https://tabelog.com/en/osaka/A2701/A270101/27002305/";
const KURA_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Kura Sushi Global Flagship Dotonbori, Dotonbori 1-4-22, Osaka")}`;
const KURA_NOTE = `Kura Sushi Global Flagship Dotonbori is an idea, and no date is picked. The party would be 5 people. The address is Dotonbori 1-4-22 2F. The shop is open from 11:00 to 24:00. A meal is about JPY 1,000–3,000 per person. The room is non-smoking. Do not treat this as a booking task. Do not choose Sushiro. A walk-in backup is Kaiten Sushi Sakae Hankyu Higashi-dori in Umeda. Sakae is closed on Wednesday. Sakae has 30 seats. Sakae is non-smoking. {{link:${KURA_MAP_URL}|Open the Kura map}} {{link:${KURA_TABELOG_URL}|Open the Kura Tabelog page}} {{link:${SAKAE_TABELOG_URL}|Open the Sakae Tabelog page}}`;
const TOYAMA_TABELOG_URL = "https://tabelog.com/en/tokyo/A1301/A130103/13242663/";
const ICHIBAN_TABELOG_URL = "https://tabelog.com/tokyo/A1301/A130103/13094253/";
const HEIROKU_TABELOG_URL = "https://tabelog.com/tokyo/A1301/A130103/13314997/";
const SUSHIRO_YURAKUCHO_TABELOG_URL = "https://tabelog.com/tokyo/A1301/A130102/13312205/";
const TOYAMA_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Kaiten Toyama Sushi Ginza, Ginza 8-2-16, Tokyo")}`;
const ICHIBAN_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Ichiban Kaiten Sushi, Shimbashi 3-16-4, Tokyo")}`;
const HEIROKU_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Heiroku Sushi Ginza, Shimbashi 1-12-10, Tokyo")}`;
const SUSHIRO_YURAKUCHO_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Sushiro aune Yurakucho, Tokyo")}`;
const TOYAMA_NOTE = `Walk in at Kaiten Toyama Sushi Ginza on Thu Nov 12 at 17:00. That is the Thursday dinner opening. Do not book online. Online booking is for a course only. No booking is needed. The party is 2 people. The party is Brian and Mai. The address is Ginza 8-2-16 B1F. The shop is about 5 minutes from Shimbashi. Dinner is from 17:00 to 21:00. A meal is about JPY 3,000–4,000 per person. The room is non-smoking. Leave between 20:30 and 21:00. Then follow the Airport tonight steps. If Toyama is full, use the backups in this order. First, go to Ichiban Kaiten Sushi. The address is Shimbashi 3-16-4. It is 1 minute from the JR Shimbashi Karasumori exit. It is a belt restaurant. A plate is JPY 165. All seats are non-smoking. Walk in only. It has 23 seats. Second, go to Heiroku Sushi Ginza. The address is Shimbashi 1-12-10. It is 2 minutes from the JR Shimbashi Ginza exit. It has a belt and a tablet. The inside seats are non-smoking. Walk in. It has 71 seats. Third, go to Sushiro aune Yurakucho. The walk is 12–14 minutes. You can reserve it in the Sushiro app. Do not go to Nemuro Hanamaru. The Ginza branch closed in Sep 2026. KITTE is too far. {{link:${TOYAMA_MAP_URL}|Open the Toyama map}} {{link:${TOYAMA_TABELOG_URL}|Open the Toyama Tabelog page}} {{link:${ICHIBAN_MAP_URL}|Open the Ichiban map}} {{link:${ICHIBAN_TABELOG_URL}|Open the Ichiban Tabelog page}} {{link:${HEIROKU_MAP_URL}|Open the Heiroku map}} {{link:${HEIROKU_TABELOG_URL}|Open the Heiroku Tabelog page}} {{link:${SUSHIRO_YURAKUCHO_MAP_URL}|Open the Sushiro map}} {{link:${SUSHIRO_YURAKUCHO_TABELOG_URL}|Open the Sushiro Tabelog page}}`;
const APA_HOTEL_NAME = "APA Hotel & Resort Nishishinjuku Gochome Ekimae Tower";
const APA_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("APA Hotel & Resort Nishishinjuku Gochome Ekimae Tower, 3-14-1 Honmachi, Shibuya-ku, Tokyo")}`;
const APA_NOTE = `BOOKED. Stay at APA Hotel & Resort Nishishinjuku Gochome Ekimae Tower. The address is 3-14-1 Honmachi, Shibuya-ku, Tokyo 151-0071. The hotel is next to Nishi-shinjuku-gochome Station on the Toei Oedo line. The booking is for 2 adults. The party is Brian and Mai. The room is a Double Room. The room is non-smoking. Pay at the property. City tax may be charged at the property. Both KOKO HOTEL Premier Nihonbashi Hamacho stays were cancelled on Aug 18. Do not go to KOKO. Nov 5–8 is 3 nights. The Expedia itinerary number is {{copy:72078146459705}}. The room is a City View on a high floor. The amount due at the property is JPY 82,880. Check in on Thu Nov 5 from 15:00. Check out on Sun Nov 8 by 10:00. You can cancel at no charge until 23:59 hotel time on Wed Nov 4. Nov 11–12 is 1 night. The Expedia itinerary number is {{copy:72078148127176}}. The amount due at the property is JPY 22,269. Check in on Wed Nov 11 from 15:00. Check out on Thu Nov 12 by 10:00. You can cancel at no charge until 23:59 hotel time on Tue Nov 10. There is no hotel on the night of Nov 12. {{link:${APA_MAP_URL}|Open the map}}`;
const AIRPORT_TONIGHT_NOTE = `Airport tonight. Flight BA4609 leaves Haneda at 01:00 on Fri Nov 13. JAL operates the flight. Be at Haneda by about 22:00. There is no hotel on the night of Nov 12. Check out of APA Nishishinjuku by 10:00. Take the bags to the coin lockers at Shimbashi Station. Use the large-suitcase lockers. Lockers can fill by late morning. If the lockers are full, reserve storage near Shimbashi with the ecbo cloak app. From the hotel, take the Toei Oedo line to Daimon or Shiodome. Or go to Shinjuku, then take JR to Shimbashi. Allow about 40 minutes with bags. Then go to teamLab. teamLab is in Azabudai Hills. Take the Hibiya line to Kamiyacho. The ride from Shimbashi is about 10 minutes. After dinner at Kaiten Toyama Sushi Ginza, leave between 20:30 and 21:00. The shop is about 5 minutes from Shimbashi. Get the bags at Shimbashi. From Daimon or Shimbashi, the Toei Asakusa line runs direct to Keikyu Haneda Airport. The ride is about 30 minutes. Do not transfer. The backup route is the Yamanote line. Ride 1 stop from Shimbashi to Hamamatsucho. Then take the Tokyo Monorail. That ride is about 20 minutes.`;
const KINMATA_SKIP_NOTE = "Skipped. Kinmata is too expensive. The price is about JPY 25,300 per person. Do not book it. The Oct 31 dinner is Kyoya.";
const SETSUGETSUKA_NOTE = `BOOKED by Mai on Booking.com. The confirmation number is {{copy:6890781811}}. Check in on Sun Nov 8. Check-in is from 15:00 to 19:30. Check out on Wed Nov 11. Check out by 11:00. The stay is 3 nights. The room is the Superior Room with Tatami Area and Open-Air Bath. The party is 2 adults. Breakfast is included on all 3 nights. Dinner is included on all 3 nights. Do not plan another dinner in Hakone on Nov 8. Do not plan another dinner in Hakone on Nov 9. Do not plan another dinner in Hakone on Nov 10. Do not budget another dinner on those nights. The hotel has two dinner venues. One venue serves seasonal hotpot and a Japanese course. The other venue serves wagyu shabu-shabu and sushi. Mai avoids sliced meat. Request the hotpot and Japanese course venue. Message the hotel through the Booking.com app. The stay is paid in full through Booking.com. The price is JPY 325,507. Pay the hot spring tax at the property. The tax is JPY 150 per person per night. The tax total is JPY 900. You can cancel at no charge until 23:59 JST on Mon Nov 2. From Nov 3 the cancellation fee is the full price. The address is Gora 1300-34, Hakone, Kanagawa. {{link:${SETSUGETSUKA_MAP_URL}|Open the map}} The hotel phone is +81-460-86-1222. Manage the booking in the Booking.com app. Or manage the booking on the Booking.com website. MIYA HOUSE was cancelled at no cost on Aug 6.`;
const ROMANCECAR_OUT_NOTE = "BOOKED. e-Romancecar booking no. {{copy:00081}}. Take SuperHakone 9 (GSE). Leave Shinjuku at 10:00. Arrive at Hakone-Yumoto at 11:21. Sit in car 5, seats 8A and 8B. The seat type is Standard seat. The booking is for 2 adults. The price is JPY 2,300. This price is the limited-express charge only. You need a separate ticket or a Freepass to board. Pay the base fare with Suica or the Hakone Freepass. Show this booking on your phone. Or show a printout of the completion page. Also show the credit card you used to pay. Do not exchange the booking at a ticket counter. The completion page is saved as romancecar.pdf. The file is in the Downloads folder on Brian's phone. A backup copy is in the WhatsApp chat with Mai. Search for 00081. Or open the Docs tab in that chat. A bookmark does not reopen the booking. If you lose both copies, open e-Romancecar. Log in. Select Confirm booking.";
const ROMANCECAR_BACK_NOTE = "NOT BOOKED. Reserve Hakone-Yumoto to Shinjuku. Tickets go on sale on Oct 11. Record [departure time — not booked] and [seats — not booked].";
const FLIGHT_NOTE = "The booking code is {{copy:A3II92}}. JAL sold the ticket through Expedia. The Expedia itinerary is {{copy:73510634155016}}. Prefer A3II92. Iberia QBYM0 may be truncated. Outbound JL7088 is operated by Iberia as IB281. It leaves MAD at 12:30 on Fri Oct 23. It arrives at NRT at 09:30 on Sat Oct 24. The outbound flight is nonstop. There is no Heathrow connection on the way to Tokyo. Return BA4609 is operated by JAL. It leaves HND at 01:00 on Fri Nov 13. It arrives at LHR at 06:25. Then IB3645 is operated by BA. It leaves LHR at 08:45. It arrives at MAD at 12:15. This fare has no advance seat selection. Choose seats free at online check-in, 24 hours before each departure. Reminders are already set for Oct 22 Madrid and Nov 12 Tokyo. Iberia may change this MAD–NRT schedule after Oct 25. Check for a schedule-change notice before travel.";
const SHINKANSEN_OCT24 = "Not booked. Book 4 reserved seats on SmartEX for Sat Oct 24, Shinagawa to Shin-Osaka, for Brian, Mai, Mom Cynthia, and Dad, and the day count is 5 so [how the extra travellers ride — needs confirmation] (unreserved car, separate tickets, or not riding). Record [train number — not booked], [car — not booked], and [seat — not booked].";
const SHINKANSEN_NOV2 = "Not booked. Book 4 reserved seats on SmartEX for Mon Nov 2, Kyoto to Himeji or Shin-Kobe, then Hiroshima, for Brian, Mai, Mom Cynthia, and Dad. Record [train number — not booked], [car — not booked], and [seat — not booked].";
const SHINKANSEN_NOV5 = "Not booked. Book 4 reserved seats on SmartEX for Thu Nov 5, Hiroshima to Tokyo, for Brian, Mai, Mom Cynthia, and Dad, and the day count is 6 so [how the extra travellers ride — needs confirmation] (unreserved car, separate tickets, or not riding). Record [train number — not booked], [car — not booked], and [seat — not booked].";
const APA_LUGGAGE_STATUS = "Mai emailed APA at ah-rnisi5@guest.apa.co.jp on Oct 8, 2026. The reply is still pending. [APA luggage storage Nov 8–11 — needs confirmation]. KOKO storage does not apply.";
const PARENTS_HANEDA_NOTE = "Mom (Cynthia King) and Dad depart Haneda on Nov 10. The date is confirmed. Their Tokyo hotel for Nov 5–10 is not in this app. [parents' Tokyo hotel — needs confirmation]. The flight number is not in this app. [parents' Haneda flight number — needs confirmation]. Do not invent a hotel or a flight number.";
const TEAMLAB_NOTE = `BOOKED. Ticket number {{copy:A4WAUKWPLYPR-0001}}. The ticket is an Entrance Pass for 2 adults. The price is JPY 10,800. Enter between 12:30 and 13:00. The address is Azabudai Hills Garden Plaza B B1, 5-9 Toranomon, Minato-ku, Tokyo. {{link:${TEAMLAB_MAP_URL}|Open the map}} Open the ticket QR code from the teamLab email. Do not use a QR link from this app. You can change the date or the time up to 3 times. Make the change no later than 2 hours before entry. {{link:${TEAMLAB_GUIDE_URL}|Open the guide app}} For inquiries, call +81-3-6230-9666. The line is open from 10:00 to 18:00. EN TEA HOUSE is inside the museum.`;
const FUJITAYA_LUNCH_NOTE = `Eat anago-meshi at Fujitaya on Miyajima. The shop is open from 11:00 to 17:00. Arrive early. Lines form. {{link:${FUJITAYA_MAP_URL}|Open the Fujitaya map}} If you cannot eat at Fujitaya, go to Anagomeshi Ueno at Miyajimaguchi. Ueno is by the ferry pier on the mainland. Ueno is open from 10:00 to 19:00. On Wednesdays it closes at 18:00. Nov 4 is a Wednesday. You can reserve a bento by phone at 0829-56-0006. {{link:${UENO_MAP_URL}|Open the Ueno map}}`;
const MIYAJIMA_RETURN_DINNER = "Eat a light dinner on the way back. Walk in. Do not make a reservation. Use one of these three places at or next to Hiroshima Station. 1. Tsukemen Karabu is the first choice. It serves dipping noodles in ekie at Hiroshima Station. Walk in. 2. Suishin ekie is on Hiroshima Station 1F. Order a la carte. Anago kamameshi is JPY 2,700. Anago-meshi is JPY 3,300. The shop is open from 11:00 to 21:30. Last order is 20:30. It is mostly walk-in. Call 082-567-5519. 3. Hikariya is on minamoa 6F. The shop is casual. The anago tempura bowl is JPY 1,738. The shop is open from 11:00 to 22:00. Last order is 21:30. Call 082-569-7027.";
const MIYAJIMA_TIPS = "Do not feed the deer. Lockers are at the ferry terminals. Bring cash for the street stalls. The fall leaves are mostly still green. They peak around Nov 18.";
const PREVIOUS_STORAGE_KEY = "tokyoQuestHunt.v3";
const OLD_STORAGE_KEY = "tokyoQuestHunt.v2";
const PHOTO_DB_NAME = "japanQuestPhotos";
const PHOTO_STORE = "photos";
const JOURNAL_QUEUE_STORE = "journalQueue";
const JOURNAL_CACHE_STORE = "journalCache";
const JOURNAL_PREFS_KEY = "japanQuestJournal";
const JOURNAL_NAMES = ["Brian", "Mai", "Mom", "Dad", "Paul"];
const TRIP_GUIDE_AUTHOR = "Trip Guide";

const HOTEL_PLACES = new Set([
  "Hotel Cordia Osaka Hommachi",
  "Hotel Monterey Kyoto",
  "Hotel Granvia Hiroshima",
  APA_HOTEL_NAME,
  "Tokinoyu Setsugetsuka"
]);

const LOCKED_HOTELS = [
  { dates: "Osaka · Oct 24–28", note: "Hommachi · 1 room", name: "Hotel Cordia Osaka Hommachi", url: "https://cordia-osaka.com/hommachi/en/" },
  { dates: "Kyoto · Oct 28–Nov 2", note: "Karasuma Oike / Sanjo · 1 room", name: "Hotel Monterey Kyoto", url: "https://www.hotelmonterey.co.jp/en/kyoto/" },
  { dates: "Hiroshima · Nov 2–5", note: "JR Hiroshima Station · 1 room", name: "Hotel Granvia Hiroshima", url: "https://www.hgh.co.jp/english/" },
  { dates: "Tokyo · Nov 5–8 & Nov 11–12", note: APA_NOTE, name: APA_HOTEL_NAME, url: APA_MAP_URL },
  { dates: "Hakone · Nov 8–11", note: "BOOKED. Booking.com {{copy:6890781811}}. Superior Room with Tatami Area and Open-Air Bath. 2 adults. Breakfast and dinner are included. Check-in 15:00–19:30. Check-out 11:00. Paid in full. JPY 325,507.", name: "Tokinoyu Setsugetsuka", url: "https://dormy-hotels.com/resort/hotels/setsugetsuka/" }
];

const LOCKED_HOTEL_WEBSITES = Object.fromEntries(LOCKED_HOTELS.map((hotel) => [hotel.name, hotel.url]));

const RESERVATION_COUNTDOWN = [
  { id: "parent-rooms", name: "Parent rooms: Osaka, Kyoto & Hiroshima", done: true, attention: "done", recommendedOn: "2026-07-14", target: "Oct 24–Nov 5", note: "Hotels are confirmed. The saved record is 1 room at Cordia, 1 room at Monterey, and 1 room at Granvia. [extra parent rooms — needs confirmation] only if Mom and Dad are not in that room. Their Tokyo hotel is a separate gap." },
  { id: "flight-locators", name: "Record ticketed flight details", attention: "needs-confirmation", recommendedOn: "2026-08-03", target: "Oct 23 & Nov 13", note: FLIGHT_NOTE },
  { id: "teamlab", name: "teamLab Borderless", done: true, attention: "booked", recommendedOn: "2026-09-01", target: "Nov 12 · 12:30–13:00", note: TEAMLAB_NOTE, url: TEAMLAB_GUIDE_URL },
  { id: "shinkansen-oct24", name: "Shinkansen Shinagawa to Shin-Osaka", attention: "not-booked", recommendedOn: "2026-10-02", target: "Sat Oct 24", note: SHINKANSEN_OCT24 },
  { id: "shinkansen-nov2", name: "Shinkansen Kyoto to Hiroshima", attention: "not-booked", recommendedOn: "2026-10-02", target: "Mon Nov 2", note: SHINKANSEN_NOV2 },
  { id: "shinkansen-nov5", name: "Shinkansen Hiroshima to Tokyo", attention: "not-booked", recommendedOn: "2026-10-02", target: "Thu Nov 5", note: SHINKANSEN_NOV5 },
  { id: "romancecar-out", name: "Hakone outbound Romancecar", done: true, attention: "booked", recommendedOn: "2026-10-08", target: "Nov 8 · 10:00", note: ROMANCECAR_OUT_NOTE },
  { id: "romancecar-back", name: "Hakone return Romancecar", attention: "not-booked", recommendedOn: "2026-10-11", target: "Nov 11", note: ROMANCECAR_BACK_NOTE },
  { id: "setsugetsuka-record", name: "Tokinoyu Setsugetsuka", done: true, attention: "booked", recommendedOn: "2026-08-03", target: "Nov 8–11 · 3 nights", note: SETSUGETSUKA_NOTE },
  { id: "himeji-tickets", name: "Himeji Castle and Koko-en", done: true, attention: "booked", recommendedOn: "2026-10-07", target: "Nov 2 · 4 adults", note: HIMEJI_TICKET_NOTE, url: HIMEJI_LOGIN_URL },
  { id: "kyoya", name: "Kyoya Kiyomizu Yanaginobamba Honke", done: true, attention: "booked", recommendedOn: "2026-10-07", target: "Sat Oct 31 · 18:30", note: KYOYA_NOTE },
  { id: "hiroshima-dinner", name: "Hiroshima arrival dinner at Reichan", done: true, attention: "done", recommendedOn: "2026-10-07", target: "Mon Nov 2 · party of 4", note: `Decided. ${REICHAN_DINNER_NOTE}` },
  { id: "koko-return", name: "APA Nishishinjuku", done: true, attention: "booked", recommendedOn: "2026-08-18", target: "Nov 5–8 & Nov 11–12", note: APA_NOTE }
];

const WALK_IN_REMINDERS = [
  {
    dayId: "day06",
    questId: "nara-yomogi",
    name: "Fresh yomogi mochi in Nara",
    recommendedOn: "2026-10-28",
    target: "Oct 28 · Deer to Kyoto",
    note: "Walk-in only. No reservation number. Buy fresh yomogi mochi in Nara before the train to Kyoto. [yomogi mochi shop — needs confirmation].",
    checkLabel: "Got the fresh yomogi mochi"
  }
];

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
  day14: APA_HOTEL_NAME,
  day15: APA_HOTEL_NAME,
  day16: APA_HOTEL_NAME,
  day17: "Tokinoyu Setsugetsuka",
  day18: "Tokinoyu Setsugetsuka",
  day19: "Tokinoyu Setsugetsuka",
  day20: APA_HOTEL_NAME,
  day21: APA_HOTEL_NAME
};

const HOTEL_MARKER_ICON = `<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4z"/></svg>`;

function isHotelPlace(place) {
  return HOTEL_PLACES.has(place);
}

function dayMapPlaces(day) {
  const hotel = STAY_HOTEL_BY_DAY[day.id];
  if (!hotel) return day.places.slice();
  if (isTransitTravelDay(day.id)) return day.places.slice();
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
  { id: "osaka-food", goal: "Maximum-pop Osaka and regional food", days: ["day02", "day03", "day04"], status: "Ready", why: "Castle, Den Den, and Shinsekai are the loud Osaka arc. Day 2 does not include Dotonbori. Kuromon and Tenma supply the scored food quest.", blocker: "Day 3 and Day 4 both involve substantial standing.", fallback: "Keep the category limits, hotel reset and first seated Tenma venue." },
  { id: "kobe-nunobiki", goal: "Kobe Nunobiki romantic outing", days: ["day05"], status: "Needs Route Checks", why: "The selected soft outing trades a wider Kobe checklist for ropeway views and gardens. Dinner is On-yasai in Osaka at 20:00.", blocker: "Recheck ropeway and herb-garden hours and maintenance notices.", fallback: "Use the ropeway/view/café version only; parents can take an independent easy Osaka day." },
  { id: "izakaya", goal: "At least one izakaya night", days: ["day04"], status: "Ready", why: "Tenma izakaya dinner is the Day 4 capstone after the scored snack mission.", blocker: "", fallback: "Keep the first seated Tenma venue even if the daytime tasting runs long." },
  { id: "konbini", goal: "7-Eleven and konbini food experience", days: ["day02"], status: "Ready", why: "The first small everyday-Japan ritual begins immediately.", blocker: "", fallback: "Build breakfast from the nearest station or hotel konbini." },
  { id: "nara", goal: "Nara Park", days: ["day06"], status: "Ready", why: "Nara bridges Osaka and Kyoto with one iconic first-trip experience.", blocker: "", fallback: "Use taxis and keep the visit to the park and Todai-ji approach." },
  { id: "nijo", goal: "Nijo Castle", days: ["day09"], status: "Ready", why: "It is Kyoto's strongest non-temple historic anchor and opens the compact central-Kyoto day.", blocker: "", fallback: "Keep Nijo, then skip either the palace or Manga Museum and rejoin at Nishiki or dinner." },
  { id: "mt-inari", goal: "Early Fushimi Inari climb", days: ["day07"], status: "Ready", why: "Mai's hillside torii priority now begins a coherent southeast-to-Higashiyama sweep.", blocker: "", fallback: "Turn around at Yotsutsuji or sooner; parents skip Inari and Tofuku-ji entirely." },
  { id: "higashiyama", goal: "Kiyomizu-dera and Higashiyama", days: ["day07"], status: "Ready", why: "Parents meet the couple at Kiyomizu after the Inari and Tofuku-ji morning, then walk down to Endo lunch for 5.", blocker: "", fallback: "Taxi toward Kiyomizu, descend the slopes, and protect the 13:30 Endo sitting." },
  { id: "arashiyama", goal: "Arashiyama and northwest Kyoto", days: ["day08"], status: "Ready", why: "Bamboo and Togetsukyo lead naturally into Ryoan-ji and Kinkaku-ji via the Randen corridor.", blocker: "", fallback: "Use Togetsukyo and a riverside cafe, skip Ryoan-ji, and meet at Kinkaku-ji by taxi." },
  { id: "matcha", goal: "Matcha and cafe time", days: ["day07", "day08", "day09", "day10"], status: "Ready", why: "Several Kyoto days provide natural, unhurried chances.", blocker: "", fallback: "Use a station, depachika, or hotel-nearby tea stop." },
  { id: "mt-hiei", goal: "Mt Hiei mountain day", days: ["day10"], status: "Needs Route Checks", why: "Mai chose a full Kyoto mountain day with Enryaku-ji and forest paths.", blocker: "Confirm seasonal cable car, ropeway, bus operations and last descent timing.", fallback: "Use the most assisted route and return earlier if weather or legs push back." },
  { id: "mountain-chapter", goal: "Three-night Hakone retreat", days: ["day17", "day18", "day19"], status: "Needs Route Checks", why: "The confirmed Gora hotel beside the station makes the mountain chapter usable by scheduled transport, with Mai's sunrise shrine visit, the reverse classic loop and a real hiking day.", blocker: "Prebook the Nov 9 05:30 taxi. Recheck the November bus, cruise, and ropeway timetable. Recheck the Mount Kintoki trail. Breakfast and dinner are included. Message the hotel through the Booking.com app. Request the hotpot and Japanese course venue.", fallback: "Use the earliest public-transport route to Moto-Hakone if the taxi cannot be arranged; use the H bus and Tozan train to return to Gora if the loop is cancelled." },
  { id: "hakone-return", goal: "Protected Hakone–Tokyo return", days: ["day20"], status: "Needs Booking", why: "A reserved morning rail return avoids highway uncertainty and leaves time for luggage and a soft Tokyo landing.", blocker: "Reserve the Romancecar and allow the Gora-to-Hakone-Yumoto connection margin.", fallback: "Use regular Odakyu services if the preferred Romancecar sells out." },
  { id: "west-chapter", goal: "Himeji, Hiroshima, and Miyajima chapter", days: ["day11", "day12", "day13"], status: "Ready", why: "The westward chapter makes the longer trip feel meaningfully broader.", blocker: "", fallback: "Use castle exterior and garden, central Peace Park, and Miyajima waterfront routes." },
  { id: "tokyo-story", goal: "Tokyo through Shibuya, friends, Asakusa, teamLab and food", days: ["day14", "day15", "day16", "day20", "day21"], status: "Ready", why: "Each Tokyo day has one distinct anchor, with Dad's Shibuya request and Mai's yose visit protected.", blocker: "", fallback: "Protect Shibuya Crossing, the evening with Akko, and Asakusa Engei Hall; trim shopping first." },
  { id: "shibuya-crossing", goal: "Dad's Shibuya Crossing", days: ["day16"], status: "Ready", why: "It gives Dad's Tokyo request a clear morning anchor without jeopardizing the evening meetup.", blocker: "", fallback: "Cross once, take the Hachiko photo, and skip the mall stop." },
  { id: "friends-day", goal: "Evening with Akko", days: ["day16"], status: "Needs Confirmation", why: "The social evening is the protected capstone, so the Shibuya day ends early enough to travel wherever Akko chooses.", blocker: "Confirm meeting point, time, and whether Yoshi is joining.", fallback: "Leave Shibuya by 15:30 and keep dinner seated and unhurried." },
  { id: "asakusa-hall", goal: "Asakusa Engei Hall for Mai", days: ["day20"], status: "Needs Schedule Check", why: "A short yose visit adds rakugo and variety entertainment without taking over the Hakone return day.", blocker: "Check the Nov 11 bill when it is published about one month ahead; special programs can change the normal hours.", fallback: "If the return reaches Shinjuku after 14:00, skip the hall and protect luggage, rest, and dinner." },
  { id: "anime", goal: "Manga or anime culture beyond shopping", days: ["day09", "day15", "day16"], status: "Ready", why: "The optional Kyoto International Manga Museum and Kichijoji provide imaginative culture without relying on shopping.", blocker: "", fallback: "Skip the Manga Museum for a parent rest window and preserve Kichijoji." },
  { id: "teamlab", goal: "teamLab Borderless", days: ["day21"], status: "Ready", why: "Mai already responded strongly to the visual experience. The Entrance Pass is booked for 12:30–13:00.", blocker: "", fallback: "Protect the chosen melon-bread store and final meal, then use another modern-art experience if desired." },
  { id: "melon-finale", goal: "Mai's specific special melon-bread shop", days: ["day21"], status: "Needs Name", why: "This is now a protected final-day food anchor.", blocker: "Exact shop and branch have not been confirmed.", fallback: "Use the best confirmed Tokyo Melonpan branch or repeat the passport champion." },
];

const regionalQuestPools = {
  osaka: [
    ["osaka-takoyaki", "food", "Try takoyaki from a busy specialist.", ["day03"]],
    ["osaka-okonomiyaki", "food", "Share Osaka-style okonomiyaki.", ["day03"]],
    ["osaka-kushikatsu", "food", "Try kushikatsu in Osaka.", ["day03"]],
    ["osaka-negiyaki", "food", "Find negiyaki or another Osaka griddle specialty.", ["day04"]],
    ["osaka-konbini", "food", "Build a konbini breakfast or dessert haul.", ["day02"]],
    ["osaka-solaniwa", "culture", "Keep Solaniwa Onsen Osaka Bay Tower as the weather-proof Osaka reset option.", ["day05"]],
    ["osaka-department-store", "culture", "Browse a department-store restaurant floor for an easy meal and its basement depachika for food souvenirs.", ["day04"]],
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
    ["kyoto-flip-up", "food", "Try a bread from Flip Up! near the hotel and Manga Museum."],
    ["kyoto-handicraft", "culture", "Browse the Kyoto Handicraft Center for traditional crafts and a meaningful keepsake.", ["day09"]],
    ["kyoto-teramachi", "culture", "Walk a bounded stretch of Teramachi Street when it naturally connects the palace, Nishiki, or dinner route.", ["day09"]],
    ["kyoto-department-store", "culture", "Use a department-store restaurant floor for choice and its basement depachika for compact souvenirs.", ["day09"]],
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
    ["tokyo-curry", "food", "Try Japanese curry; CoCo Ichibanya is the easy chain fallback."],
    ["tokyo-yakitori", "food", "Share yakitori at a casual dinner."],
    ["tokyo-teishoku", "food", "Order a teishoku set meal."],
    ["tokyo-taiyaki", "food", "Find taiyaki or ningyo-yaki."],
    ["tokyo-kissaten", "food", "Try a kissaten breakfast or toast set."],
    ["tokyo-bakery", "food", "Check a neighborhood bakery for a new melon bread."],
    ["tokyo-kappabashi", "culture", "Browse Kappabashi for kitchenware or food replicas only if it replaces other Asakusa shopping.", ["day20"]],
    ["tokyo-aoyama-square", "culture", "Browse Japan Traditional Crafts Aoyama Square for one well-made keepsake.", ["day21"]],
    ["tokyo-nakano-broadway", "culture", "Use Nakano Broadway as the optional collector-culture extension after the west-Tokyo day.", ["day15"]],
    ["tokyo-department-store", "culture", "Check a department-store restaurant floor for an easy meal and the basement depachika for souvenirs."],
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
  hakone: "#397b8f"
};

const outsideCityStyles = {
  day02: { from: "tokyo", to: "osaka" },
  day05: { from: "osaka", to: "osaka" }, // optional Kobe day trip
  day06: { from: "nara", to: "kyoto" },
  day10: { from: "kyoto", to: "kyoto" }, // Mt Hiei day trip
  day11: { from: "kyoto", to: "hiroshima" },
  day13: { from: "hiroshima", to: "hiroshima" }, // Miyajima day trip
  day14: { from: "hiroshima", to: "tokyo" },
  day17: { from: "tokyo", to: "hakone" },
  day18: { from: "hakone", to: "hakone" },
  day19: { from: "hakone", to: "hakone" },
  day20: { from: "hakone", to: "tokyo" }
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
  day18: "~2–3 hr",
  day19: "~4–5 hr",
  day20: "~1–2 hr",
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
  day18: "05:00",
  day19: "06:30",
  day20: "06:30",
  day21: "07:00"
};

const vitalEarlyWakeDays = new Set(["day07", "day10", "day11", "day18", "day19"]);

const calendarThumbnailIdeas = {
  day17: "Idea: small bags + Gora mountain railway",
  day18: "Idea: dawn shrine + reverse Hakone loop",
  day19: "Idea: Mount Kintoki summit + Fuji",
  day20: "Idea: suitcases reunited + Asakusa yose curtain"
};

const calendarReferenceLinks = {
  day13: {
    label: "Nov 4 tide plan ↗",
    url: "https://www.miyajima.or.jp/sio/sio11.php"
  },
  day17: {
    label: "Setsugetsuka access ↗",
    url: "https://dormy-hotels.com/resort/hotels/setsugetsuka/access/index.php"
  },
  day18: {
    label: "Live Hakone transport ↗",
    url: "https://www.hakonenavi.jp/international/en/status_information"
  },
  day19: {
    label: "Mount Kintoki guide ↗",
    url: "https://www.hakonenavi.jp/international/en/spot/581"
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

function isTransitTravelDay(dayId) {
  const style = outsideCityStyles[dayId];
  return Boolean(style && style.from !== style.to);
}

function attachCalendarShinkansen(day, card) {
  if (!card || !isTransitTravelDay(day.id)) return;
  card.querySelector(".calendar-shinkansen")?.remove();
  const shinkansen = makeShinkansenDecor();
  card.appendChild(shinkansen);
}

function makeShinkansenDecor() {
  const span = document.createElement("span");
  span.className = "calendar-shinkansen";
  span.setAttribute("aria-hidden", "true");
  span.innerHTML = `
    <svg viewBox="0 0 244 44" xmlns="http://www.w3.org/2000/svg" role="presentation">
      <path d="M14 31V17Q14 12 20 12H190Q207 12 218 19L239 31H14Z" fill="#fffafc" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M14 31H239Q237 36 225 37H21Q14 37 14 31Z" fill="currentColor" opacity="0.96"/>
      <path d="M198 14Q209 16 218 21L235 31H205Z" fill="#8ecbf3" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M20 27H207" fill="none" stroke="currentColor" stroke-width="2" opacity="0.92"/>
      <g fill="#8ecbf3" stroke="currentColor" stroke-width="0.8">
        <rect x="24" y="16" width="12" height="7" rx="2"/>
        <rect x="42" y="16" width="12" height="7" rx="2"/>
        <rect x="72" y="16" width="12" height="7" rx="2"/>
        <rect x="90" y="16" width="12" height="7" rx="2"/>
        <rect x="120" y="16" width="12" height="7" rx="2"/>
        <rect x="138" y="16" width="12" height="7" rx="2"/>
        <rect x="168" y="16" width="12" height="7" rx="2"/>
        <rect x="186" y="16" width="10" height="7" rx="2"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="1" opacity="0.55">
        <path d="M61 13V34"/>
        <path d="M109 13V34"/>
        <path d="M157 13V34"/>
      </g>
      <g fill="#34222a">
        <circle cx="34" cy="37" r="3"/><circle cx="52" cy="37" r="3"/>
        <circle cx="82" cy="37" r="3"/><circle cx="100" cy="37" r="3"/>
        <circle cx="130" cy="37" r="3"/><circle cx="148" cy="37" r="3"/>
        <circle cx="178" cy="37" r="3"/><circle cx="196" cy="37" r="3"/>
      </g>
    </svg>
  `;
  return span;
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
      questDay("day02", "2026-10-24", "Narita to Osaka", "Land in Tokyo, handle the luggage, then continue directly to Osaka.", ["Narita International Airport", "Shinagawa Station", "Shin-Osaka Station", "Hotel Cordia Osaka Hommachi"], "Land around 09:30, clear Narita, forward or carry the luggage, then take the Shinkansen to Osaka with a comfortable buffer.", ["Keep a full buffer for immigration and bags", "Forward the large bags if carrying them makes the transfer hard", "Eat during the transfer or on the train", "Call Hotel Cordia if check-in will be late", "Stop after check-in. Do not add Dotonbori. Kura Sushi Dotonbori has no date"], ["The first Japan train window", "The Shinkansen platform", "The first Osaka hotel-room view"], "Mai gets a calm first day instead of a cross-Tokyo deadline.", "If the flight or immigration runs late, take the next practical reserved train and keep the evening empty."),
      questDay("day03", "2026-10-25", "Castle to Neon", "Monumental, pop-culture and retro-food Osaka in one strong arc.", ["Osaka Castle", "Nippombashi Osaka", "Nipponbashi Denden Town", "Shinsekai Osaka"], "Start at the castle near opening, eat a seated Nippombashi lunch, browse Den Den Town, and be at Sankei Club at 17:00.", ["Photograph the castle across the moat", "Choose the interior by interest", "Find one Den Den display that makes Mai stop", "Share one Osaka snack"], ["Golden castle ornament", "A character detail", "Tsutenkaku framed by signs"], "Mai gets history, games/anime culture and loud Osaka streets.", "Parents can skip Den Den. Still reach Sankei Club in Shinsekai at 17:00."),
      questDay("day04", "2026-10-26", "Kuromon Scores, Tenma Pours", "A timed, scored tasting route with a real finish line and appetite left for dinner.", ["Kuromon Ichiba Market", "Daimaru Shinsaibashi", "Amerikamura", "Hotel Cordia Osaka Hommachi", "Tenma Osaka"], "Complete four shared Kuromon categories by 11:30, one Shinsaibashi food-hall checkpoint and one Amerikamura wildcard; reset at the hotel, then finish at no more than two Tenma venues.", ["Score raw/seafood", "Score one hot or grilled bite", "Score one savory non-seafood bite", "Score one fruit or sweet", "Choose one food-hall checkpoint", "Use one Amerikamura wildcard", "Photograph each item and price", "Reset at the hotel", "Share plates at one Tenma izakaya", "Choose one optional specialist finish"], ["A market preparation detail", "The best value surprise", "A youth-culture snack or drink", "The Tenma dish worth reordering"], "Mai gets a playful food hunt rather than an aimless market wander.", "Parents use a seated Kuromon base, skip Amerikamura if useful and rejoin the first Tenma venue."),
      questDay("day05", "2026-10-27", "Kobe Above the Clouds", "Ropeway views, gardens, and café time. Dinner is On-yasai in Osaka at 20:00.", ["Hotel Cordia Osaka Hommachi", "Shin-Kobe Station", "Nunobiki Ropeway", "Kobe Nunobiki Herb Gardens"], "Make Nunobiki the one contained Kobe outing. Return to Osaka for the booked On-yasai dinner.", ["Ride the ropeway", "Find the best city/harbor view", "Pause at a garden café or terrace", "Choose a Kobe sweet"], ["A ropeway-window reveal", "A garden detail", "Kobe and the harbor below"], "Mai gets the romantic scenic outing already selected.", "Parents use the ropeway/view/café version or take an independent Osaka day. Dinner is still On-yasai at 20:00."),
      questDay("day06", "2026-10-28", "Deer to Kyoto", "Deer, giant Buddha, old streets, then Kyoto.", ["Kintetsu Nara Station", "Nara Park", "Todai-ji Temple", "Naramachi", "Kyoto Station", "Hotel Monterey Kyoto"], "Use Nara as the Osaka-to-Kyoto bridge and make entering Todai-ji's Great Buddha Hall the capstone.", ["Keep the deer stop short", "Try kakinoha-zushi if you want it", "Find a cafe near Naramachi"], ["A deer bow or side-eye", "A detail that makes Todai-ji's scale click", "An old-town shopfront"], "Mai gets an iconic Japan moment before Kyoto begins.", "Shorten Nara and reach Kyoto earlier if legs become the story. The bags stay in the Kintetsu-Nara lockers until you leave.")
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
      questDay("day07", "2026-10-29", "Torii to Old Kyoto", "An energetic southeast-to-north sweep from Mt Inari to Kiyomizu and Gion.", ["Fushimi Inari Taisha", "Yotsutsuji Intersection Kyoto", "Tofuku-ji Temple", "Kiyomizu-dera", "Sannenzaka", "Ninenzaka", "Yasaka Shrine", "Gion Kyoto"], "Mai and Brian climb Fushimi Inari early, make one compact Tofuku-ji visit, then meet the parents near Kiyomizu, walk the old streets downhill, and sit for the high-grade lunch at Tempura Yasaka Endo.", ["Turn around at Yotsutsuji or sooner", "Choose either Tofuku-ji's garden or the Tsutenkyo area", "Finish Gion by late afternoon. Do not plan a night return"], ["A fox detail", "Kyoto spreading out below Mt Inari", "The Kiyomizu panorama", "A sloping-street detail"], "Mai gets torii, old streets and the dream-trip Kyoto view in one coherent corridor.", "Parents skip Inari and Tofuku-ji, taxi toward Kiyomizu, and join the Endo lunch."),
      questDay("day08", "2026-10-30", "Bamboo to Gold", "An early Arashiyama payoff followed by the rock garden and Golden Pavilion.", ["Arashiyama Bamboo Forest", "Togetsukyo Bridge", "Ryoan-ji Temple", "Kinkaku-ji Temple", "Kamishichiken Kyoto"], "Lock the Bamboo Grove and Togetsukyo, eat early, then use the Randen corridor for compact Ryoan-ji and Kinkaku-ji visits.", ["Walk the grove before it becomes busiest", "Use the river cafe as the parent payoff", "Do not add another Arashiyama temple", "Give the rock garden one focused hour", "Use Kamishichiken only for optional tea or wagashi"], ["A bamboo sound or shadow", "Togetsukyo against the mountains", "The first Golden Pavilion reflection"], "Mai gets three distinct Kyoto landscapes without a Saturday Arashiyama crowd.", "Parents skip Ryoan-ji if useful and meet at Kinkaku-ji by taxi."),
      questDay("day09", "2026-10-31", "Palaces to Pontocho", "A compact central-Kyoto history, manga, market and neighborhood day.", ["Nijo Castle", "Kyoto Imperial Palace", "Kyoto International Manga Museum", "Nishiki Market", "Kamo River Kyoto", "Pontocho Alley"], "Enter Nijo at opening, make the Imperial Palace compact, use the Manga Museum as an optional split, lock Nishiki, then reset before dinner at Kyoya.", ["Notice Nijo's nightingale floors", "Keep the palace visit to about an hour", "Use the Manga Museum or a parent rest window", "Bound Nishiki rather than starting a second food mission", "Take a real hotel reset before dinner"], ["A castle gate or painted-room detail", "An Imperial Palace roofline", "A manga-art surprise", "A riverbank dinner approach"], "Mai gets shogun history, imperial history, manga and food without crossing Kyoto again.", "Nijo is shared; parents may skip the palace or Manga Museum and rejoin later."),
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
      questDay("day11", "2026-11-02", "White Heron Westbound", "An optional no-delay To-ji dawn, white-castle reveal, then the first scored train-food ride west.", ["To-ji Temple", "Kyoto Station", "Himeji Station", "Himeji Castle", "Koko-en Garden", "Hiroshima Station", "Hotel Granvia Hiroshima"], "Use To-ji's free grounds only if luggage is handled and you still reach Himeji in time for the 09:30 castle entry. Otherwise begin at Kyoto Station.", ["Skip To-ji unless someone is already awake and the train still leaves on time", "Forward or carry the large bags", "Enter Himeji Castle between 09:30 and 10:00", "Do Koko-en before the castle or after the castle", "Eat lunch in Himeji", "Buy different regional ekiben", "Photograph each box closed and open", "Eat the one Hiroshima okonomiyaki at Reichan"], ["To-ji's pagoda at dawn if earned", "A castle-defense detail", "A garden frame of the keep", "An ekiben package too beautiful to ignore"], "The westward chapter announces itself through a castle and train-food ritual.", "Skipping To-ji is a complete win. The castle entry is booked for 09:30–10:00."),
      questDay("day12", "2026-11-03", "Memory Along the River", "Museum, remembrance, river, and the Dome at dusk without emotional clutter.", ["Hiroshima Peace Memorial Museum", "Hiroshima Peace Memorial Park", "Atomic Bomb Dome", "Hiroshima National Peace Memorial Hall"], "Move from the museum through the Cenotaph and memorial axis, then see the Atomic Bomb Dome at dusk. Suishin main store is booked for 18:00. The booking is table only.", ["Leave time for a quiet break", "Use the National Peace Memorial Hall if a quieter space helps", "Write one private sentence about what should be remembered", "Try momiji manju or a calm cafe instead of adding sightseeing"], ["The alignment through the Cenotaph", "A paper crane or peace message", "The river changing the mood of the park"], "The day feels thoughtful and humane, not consumed as an attraction.", "Shukkeien is optional; emotional room is the priority."),
      questDay("day13", "2026-11-04", "Torii at the Tide", "Miyajima is the centerpiece of the Hiroshima stay. Keep the day unhurried.", ["Miyajimaguchi Station", "Itsukushima Shrine", "Miyajima Omotesando", "Daisho-in Temple", "Miyajima Ropeway"], "Leave the hotel at 07:50. Take the ropeway in the morning. Eat anago-meshi at Fujitaya. See Itsukushima Shrine from 16:00, when the water is high.", ["Ride the JR ferry", "Take the ropeway if the wind is safe", "Eat anago-meshi at Fujitaya", "Visit Daisho-in", "Buy momiji manju on Omotesando", "See Itsukushima Shrine from 16:00 to 17:20", "Do not feed the deer", "Try a grilled oyster only if someone wants it"], ["The torii with water around it after 16:00", "A deer that you do not feed", "Momiji manju on Omotesando"], "Miyajima earns its place as the romantic westward payoff.", "The shrine, the waterfront, and the food street complete the day.")
    ]
  },
  tokyo: {
    name: "Tokyo",
    baseLabel: APA_HOTEL_NAME,
    description: "Tokyo bookends a three-night Hakone retreat: settle in after Hiroshima, escape to Gora with small bags, then return for an easy final Tokyo chapter.",
    ongoing: [
      {
        title: "Our Tokyo Quest",
        type: "side",
        items: ["Find the cafe, bakery, konbini, or supermarket that becomes ours", "Return at least once", "Learn three station exits", "Remember one tiny Tokyo routine worth stealing for home"]
      },
      {
        title: "Tokyo Snack Dex",
        type: "side",
        items: ["Depachika food", "Onigiri", "Ramen", "Curry", "Sushi at two price levels", "Yakitori", "Teishoku", "Hakone trail snack", "Taiyaki or ningyo-yaki", "Kissaten toast", "Mystery snack chosen by packaging"]
      },
      {
        title: "Photo Set",
        type: "side",
        items: ["Mai in front of her Tokyo", "Us reflected in something", "One beautiful food photo", "One stupid food photo", "A quiet street", "Our station sign", "The final dinner or snack"]
      }
    ],
    days: [
      questDay("day14", "2026-11-05", "Ekiben Eastbound", "The long Shinkansen becomes the experience: browse, choose, reveal, share, score, then settle into Tokyo.", ["Hiroshima Station", "Tokyo Station", APA_HOTEL_NAME], "Turn Hiroshima-to-Tokyo into the main ekiben tasting and a calm move into the Tokyo neighborhood.", ["Arrive early enough to browse", "Choose different regional boxes", "Photograph closed packages and open trays", "Trade tastes after departure", "Learn the Nishi-shinjuku-gochome Station exit, the nearest konbini, and the easiest dinner"], ["An unexpected bento ingredient", "A beautiful wrapper or clever compartment", "A train-window scene worth pausing lunch for"], "Train food becomes one of the day's actual memories and Tokyo begins gently.", "No Tokyo sightseeing is required after arrival."),
      questDay("day15", "2026-11-06", "Inokashira and Kichijoji", "A soft imaginative Tokyo day built around the park, cafes and compact neighborhood streets.", [APA_HOTEL_NAME, "Inokashira Park", "Kichijoji Sunroad Shopping District"], "Make the park, cafes and Kichijoji the complete quest, with no timed attraction controlling the day.", ["Walk by the pond", "Find a cafe that belongs in this day", "Browse one shotengai", "Choose a snack or object animated in spirit", "Check bakeries for a new melon-bread style"], ["A duck, bridge, or pond reflection", "A handmade-looking display", "A detail that rewards looking closely"], "Mai gets why Tokyo is not just skyscrapers.", "Keep the day spacious rather than adding another western-Tokyo district."),
      questDay("day16", "2026-11-07", "Scramble Into Their Tokyo", "Give Dad his Shibuya moment, one Mai-friendly pop-culture stop, then protect the evening with Akko.", [APA_HOTEL_NAME, "Shibuya Crossing", "Hachiko Statue", "Shibuya PARCO", "Akko meetup · provisional Chofu Station"], "Cross the Scramble, take the Hachiko photo, eat lunch nearby, choose one compact Mai stop, and leave Shibuya by 15:30 for Akko's evening plan.", ["Cross Shibuya Crossing together", "Take Dad's Hachiko or crossing photo", "Choose one rooftop, cafe, or people-watching view", "Give Mai one focused PARCO or character-culture stop", "Bring a small consumable thank-you gift for Akko"], ["Dad in the crossing", "Hachiko or Shibuya street texture", "The relaxed group dinner with Akko"], "Dad gets his Tokyo icon and Mai gets one playful stop without exhausting the social evening.", "Cross once, take the photo, and skip PARCO if the meetup requires an earlier departure."),
      questDay("day17", "2026-11-08", "Into Hakone", "Tokyo intensity gives way to three confirmed nights at Setsugetsuka, one minute from Gora Station.", ["Shinjuku Station", "Hakone-Yumoto Station", "Gora Station", "Tokinoyu Setsugetsuka", "Hakone Open-Air Museum"], "Leave the large bags at the APA Nishishinjuku front desk. Mai emailed APA at ah-rnisi5@guest.apa.co.jp on Oct 8, 2026. The reply is still pending. [APA luggage storage Nov 8–11 — needs confirmation]. KOKO storage does not apply. Travel with small bags by Romancecar and mountain railway, leave bags at Setsugetsuka, then use the Open-Air Museum before check-in. Check-in is from 15:00 to 19:30.", ["Keep medication and layers in the small bag", "Take the Hakone Tozan Railway to Gora", "Walk one minute from Gora Station to the hotel", "Leave bags before check-in. Check-in is from 15:00 to 19:30", "Give the museum 90–120 minutes before its 17:00 close", "Use only the room bath or a private bath"], ["The mountain railway", "A sculpture against the hills", "The first private-bath evening"], "Mai gets a mountain retreat whose transport begins at the hotel door.", "Parents remain in Tokyo and their Nov 10 Haneda departure is confirmed."),
      questDay("day18", "2026-11-09", "Sunrise Shrine, Reverse Hakone Loop", "Mai reaches Hakone Shrine before the crowds for the 06:13 sunrise, then Lake Ashi, Owakudani, the ropeway and cable car form one continuous return to Gora.", ["Tokinoyu Setsugetsuka", "Hakone Shrine", "Moto-Hakone Port", "Togendai Station", "Owakudani", "Sounzan Station", "Gora Station (Return)"], "Prebook a 05:30 taxi from Setsugetsuka to Hakone Shrine, target a 06:00 arrival, then remain lakeside and complete the classic loop in reverse once the cruise begins.", ["Reach Hakone Shrine around 06:00, before the 06:13 sunrise", "Remember that direct sun can clear the ridge later than 06:13", "Wait until 08:15 only if Mai wants an amulet or goshuin", "Take the first practical cruise from Moto-Hakone to Togendai", "Ride the ropeway through Owakudani to Sounzan", "Descend by cable car to Gora in time for the hotel meal"], ["Shrine gate in blue-hour light", "Lake Ashi around sunrise", "Ropeway over the autumn valley"], "Mai gets the sunrise shrine visit she desperately wants instead of finding it at the crowded end of the day.", "To return to the hotel instead, take the H bus from Hakone Shrine Entrance or Moto-Hakone toward Hakone-Yumoto/Odawara, transfer at Kowakidani Station to the Tozan train for Gora, and allow roughly an hour plus waiting."),
      questDay("day19", "2026-11-10", "Mount Kintoki", "A real Hakone hike with a famous Fuji-facing summit, reached by scheduled buses through Sengoku.", ["Tokinoyu Setsugetsuka", "Sengoku", "Kintoki Shrine Entrance", "Mount Kintoki"], "Start in the morning, hike the common out-and-back route with roughly four hours of walking, and return with daylight margin.", ["Check mountain weather and trail notices", "Use the sightseeing bus from Gora to Sengoku", "Transfer for Kintoki Shrine Entrance or Kintoki-Tozanguchi", "Carry layers, water and a proper trail meal", "Turn around if cloud, wind or footing makes the summit poor value", "Use Pola Museum instead if the hike is cancelled", "Return to Gora for the included hotel dinner and a private bath"], ["Kintoki summit sign with Fuji if visible", "Autumn trail detail", "The first seated post-hike meal"], "Mai gets an unmistakable summit objective after the loop day.", "Mom (Cynthia King) and Dad depart Haneda on Nov 10. The date is confirmed."),
      questDay("day20", "2026-11-11", "Back to Tokyo, Into the Yose", "Return from Hakone by rail, reunite with the luggage, then give Mai a compact dose of old-school Japanese variety entertainment.", ["Tokinoyu Setsugetsuka", "Gora Station", "Hakone-Yumoto Station", "Shinjuku Station", APA_HOTEL_NAME, "Asakusa Engei Hall"], "Take the protected morning train return, recover the large bags, then visit Asakusa Engei Hall for 60–90 minutes only if the transfer lands on time.", ["Leave Gora early for Hakone-Yumoto", "Use the reserved Romancecar to Shinjuku", "Recover the large luggage and check in", "Check the Asakusa Engei Hall bill and stage times", "Watch a compact rakugo or variety segment with Mai", "Eat an easy dinner in Asakusa. The hotel is in Nishi-shinjuku, not in Asakusa"], ["The last mountain railway view", "Suitcases reunited", "Asakusa yose curtain or lanterns"], "Mai gets a living traditional entertainment hall while the day still functions as a soft landing.", "If the Hakone return runs late, protect luggage and rest; Asakusa becomes optional."),
      questDay("day21", "2026-11-12", "Light, Melon Bread, Goodbye", "Immersive art, Mai's chosen bakery, final food and a fully packed suitcase.", [APA_HOTEL_NAME, "Shimbashi Station", "teamLab Borderless Azabudai Hills", "Tokyo Melonpan", "Final Tokyo Dinner"], "Check out of APA by 10:00. Put the bags in Shimbashi coin lockers. Enter teamLab Borderless between 12:30 and 13:00. Then visit Mai's melon-bread shop. Walk in at Kaiten Toyama Sushi Ginza at 17:00. There is no hotel on the night of Nov 12.", ["Find the teamLab room we most want to remember", "Take one abstract photo", "Confirm the exact bakery branch and stock", "Score the special melon bread in the passport", "Buy only the souvenirs still genuinely wanted", "Eat the final this-is-Tokyo meal", "Pack with airport margin", "Name the champion ekiben and melon bread"], ["A reflection that changes the room", "The first crackle of the special melon-bread crust", "One tiny goodbye photo"], "Mai chooses the sweet and emotional ending of the trip.", "Mom and Dad departed from Haneda on Nov 10; this is a couple-only final day.")
    ]
  }
};

const dayGoals = {
  day02: {
    clearPath: "NRT arrival → luggage handoff → Shinagawa/Shinkansen → Osaka check-in.",
    mainGoal: "Reach Osaka smoothly and end the long travel day without adding another district.",
    photoHint: "First Japan train window, Shinkansen platform, or first Osaka hotel-room view."
  },
  day03: {
    clearPath: "Castle near opening → Nippombashi lunch → Den Den → Sankei Club at 17:00.",
    mainGoal: "Finish under Shinsekai's retro signs with kushikatsu shared.",
    photoHint: "Tsutenkaku, kushikatsu plate, or the castle across the moat."
  },
  day04: {
    clearPath: "Four Kuromon scores by 11:30, one food-hall stop, hotel reset, two-stop Tenma finish.",
    mainGoal: "Complete the Snack League scorecard and photograph the winning Tenma bite.",
    photoHint: "Scorecard, Kuromon bite, or the Tenma dish worth reordering."
  },
  day05: {
    clearPath: "Edobori walk-in at 11:00 → Nunobiki ropeway → On-yasai at 20:00.",
    mainGoal: "Catch the best ropeway or garden view over Kobe and the harbor.",
    photoHint: "Ropeway window, harbor panorama, or garden terrace."
  },
  day06: {
    clearPath: "Carry every bag to Kintetsu-Nara, use the coin lockers, see Todai-ji, then collect the bags for Kyoto.",
    mainGoal: "Stand inside Todai-ji's Great Buddha Hall together.",
    photoHint: "The Buddha hall interior, a deer moment, or old Naramachi lane."
  },
  day07: {
    clearPath: "Early Inari climb → compact Tofuku-ji → Kiyomizu reunion → slopes → Endo lunch in Gion.",
    mainGoal: "Share the Kiyomizu panorama after Mai and Brian complete the Inari-to-Tofuku morning.",
    photoHint: "Torii tunnel, Kyoto view from Inari, Kiyomizu panorama, or sloping street."
  },
  day08: {
    clearPath: "Bamboo early → Togetsukyo cafe → early lunch → Ryoan-ji → Kinkaku-ji.",
    mainGoal: "End the west/northwest sweep with the Golden Pavilion reveal.",
    photoHint: "Bamboo path, Togetsukyo with mountains, rock garden, or Golden Pavilion reflection."
  },
  day09: {
    clearPath: "Nijo opening → Imperial Palace → optional Manga Museum → Nishiki → reset → Kamo River → Pontocho → Kyoya.",
    mainGoal: "Finish the shared Nijo day with dinner at Kyoya.",
    photoHint: "Nijo gate/rooms, Imperial roofline, manga art, Nishiki display, or Kamo River."
  },
  day10: {
    clearPath: "Demachiyanagi breakfast, assisted ascent, Enryaku-ji core, one forest walk, comforting dinner after.",
    mainGoal: "Photograph the first wide Kyoto or Lake Biwa view from Mt Hiei.",
    photoHint: "Summit viewpoint, forest path, or Enryaku-ji bell/incense moment."
  },
  day11: {
    clearPath: "Castle entry 09:30–10:00. Koko-en before or after. Lunch in Himeji. Reichan walk-in dinner.",
    mainGoal: "Photograph Himeji's white keep in full and crown Round One of the Ekiben League.",
    photoHint: "Castle reveal, Koko-en frame, or open ekiben on the train."
  },
  day12: {
    clearPath: "Museum first, quiet break, memorial axis, Dome at dusk. Suishin table at 18:00 is booked.",
    mainGoal: "See the Atomic Bomb Dome as daylight softens and photograph the memorial axis.",
    photoHint: "Dome at dusk, Cenotaph alignment, or paper cranes."
  },
  day13: {
    clearPath: "Leave at 07:50. Ropeway, Fujitaya lunch, shrine from 16:00, light station dinner.",
    mainGoal: "Frame the floating torii with water and sky at today's tide.",
    photoHint: "Torii with tide, anago-meshi, or island waterfront."
  },
  day14: {
    clearPath: "Ekiben browse, score, and ride east—then learn the Tokyo hotel neighborhood.",
    mainGoal: "Photograph the winning Main Ekiben League box open on the Shinkansen.",
    photoHint: "Open ekiben trays, beautiful wrapper, or train-window lunch."
  },
  day15: {
    clearPath: "Inokashira Park walk, cafe pause, and a gentle Kichijoji finish.",
    mainGoal: "Capture one pond or street detail that feels like an animated frame.",
    photoHint: "Pond reflection, handmade shop display, or quiet Kichijoji lane."
  },
  day16: {
    clearPath: "Shibuya Crossing and Hachiko → lunch → one Mai stop → leave by 15:30 for Akko.",
    mainGoal: "Get Dad's crossing photo, then arrive relaxed and on time for the evening with Akko.",
    photoHint: "Dad in the crossing, Hachiko, or the relaxed group dinner with Akko."
  },
  day17: {
    clearPath: "Small bags only: SuperHakone 9 at 10:00 to Hakone-Yumoto, mountain railway to Gora, check-in 15:00–19:30. Breakfast and dinner are included.",
    mainGoal: "Reach the Gora ryokan without a hotel shuttle and begin with art or a private bath.",
    photoHint: "Mountain railway, Gora station sign, or sculpture against autumn hills."
  },
  day18: {
    clearPath: "05:30 taxi is not booked → 06:00 Hakone Shrine → 06:13 sunrise → reverse loop back to Gora.",
    mainGoal: "Give Mai a genuinely quiet sunrise shrine visit, then complete the classic Hakone loop in reverse.",
    photoHint: "Empty shrine approach in early light, Lake Ashi from the boat, or the ropeway valley."
  },
  day19: {
    clearPath: "Scheduled buses through Sengoku → Kintoki trailhead → Mount Kintoki → same-way return with a fixed turnaround time.",
    mainGoal: "Reach Mount Kintoki safely and return to Gora with daylight margin.",
    photoHint: "Kintoki summit sign with Fuji beyond, if the mountain is visible."
  },
  day20: {
    clearPath: "Early Hakone rail return → luggage recovery → optional 60–90 minute Asakusa Engei Hall visit.",
    mainGoal: "Reunite with the luggage, then give Mai a compact yose experience if timing stays comfortable.",
    photoHint: "Suitcases reunited, Asakusa lanterns, or the Engei Hall curtain."
  },
  day21: {
    clearPath: "Check out of APA by 10:00 → Shimbashi lockers → teamLab 12:30–13:00 → melon bread → Toyama walk-in at 17:00 → bags at Shimbashi → Asakusa line to Haneda by 22:00.",
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

const dayContext = {
  day02: {
    summary: "JL7088 lands at Narita at 09:30. Iberia operates the flight. It is nonstop from Madrid. Clear immigration. Settle the luggage plan. Go to Shinagawa for the Shinkansen to Shin-Osaka. The Shinkansen seats are not booked yet. Reach Hotel Cordia Osaka Hommachi. Do not add Dotonbori. Do not add kaiten sushi.",
    timeline: [["09:30–12:00", "Land at Narita at 09:30 on JL7088, operated by Iberia. Clear immigration. Collect the bags. Choose forward or carry. [luggage service and deadline — needs confirmation]."], ["12:00–14:00", "Go to Shinagawa. Eat on the way. Keep a buffer before the train."], ["Afternoon", "Ride the Tokaido Shinkansen from Shinagawa to Shin-Osaka. [train number — not booked]. [car — not booked]. [seat — not booked]."], ["Evening", "Go to Hotel Cordia Osaka Hommachi. Check in. Stop. Eat near the hotel if you need food. Do not go to Dotonbori. Do not add kaiten sushi."]],
    history: [
      "Narita opened in 1978 as Tokyo's principal international gateway. Reaching western Tokyo from it crosses much of the metropolis, so the transfer is a real part of the day's time budget.",
      "The Tokaido Shinkansen links Tokyo and Osaka in roughly two and a half hours, compressing a historic intercity corridor into the final chapter of a demanding but possible arrival day."
    ]
  },
  day03: {
    summary: "Castle, character culture and retro food give Osaka one intentionally big day—monumental history in the morning, Den Den browsing in the afternoon, Shinsekai kushikatsu at blue hour. Do not add a fourth district; the arc works because each stop has a different emotional register. Parents can skip the castle interior or shorten Den Den and still meet at Shinsekai for the shared evening finish.",
    timeline: [["08:30–11:30", "Reach Osaka Castle near opening. Photograph the moat view. Enter the keep only if you want the interior."], ["11:30–13:00", "Go south to Nippombashi. Sit down for lunch."], ["13:00–16:00", "Browse one defined part of Den Den Town."], ["17:00", "Be at Shinsekai Kushikatsu Okonomi Sankei Club. Party of 5. Confirmation Resty {{copy:468118574}}. Do not add a fourth district."]],
    history: [
      "Toyotomi Hideyoshi began Osaka Castle in 1583 as the center of his effort to unify Japan. The current keep is a reconstruction and museum, but its moat and walls still establish Osaka's monumental scale.",
      "Shinsekai was unveiled in 1912 as a vision of the new world, with Tsutenkaku tower as its symbol. Den Den Town tells a later popular-culture story, shifting from postwar electronics into games, anime and collector culture.",
      "Put together, the day moves through three different Osaka moods: political power, hobby obsession, and retro street theatre. None of them require completion—only enough time to feel the shift from castle gravity to arcade colour to kushikatsu warmth."
    ]
  },
  day04: {
    summary: "The Osaka Snack League turns Kuromon, Shinsaibashi and Amerikamura into a bounded five-taste quest before a protected Tenma dinner. Four Kuromon categories by 11:30, one depachika checkpoint, one Amerikamura wildcard, then a real hotel reset before izakaya—not more grazing. The scorecard and hard exits turn market abundance into a game Mai can actually win without ruining appetite for dinner.",
    timeline: [["10:00–11:30", "At Kuromon, share four categories: raw or seafood, hot or grilled, savory non-seafood, and fruit or sweet. Leave at 11:30."], ["12:00–14:30", "At Daimaru Shinsaibashi, complete one food-hall stop. Then take one Amerikamura wildcard only."], ["15:00–17:00", "Return to Hotel Cordia Osaka Hommachi. Rest. Stop eating."], ["17:30–21:00", "Go to Tenma. Share plates at one izakaya. Add at most one specialist finish."]],
    history: [
      "Kuromon Ichiba began as a wholesale fish market and became one of Osaka's most famous public market streets. Merchants built reputations on freshness, knife work, and the theatre of preparation behind glass counters.",
      "Tenma grew around Osaka Tenmangu Shrine and its long shopping arcade. Markets, neighborhood restaurants and compact bars make it a strong lived-in dinner district without needing Dotonbori energy.",
      "The Snack League turns that merchant culture into a game: categories, shared bites, photographed receipts, and a hard exit before the body rebels. Tenma then answers a different Osaka instinct—sitting down, sharing plates, and letting the day become conversation rather than consumption."
    ]
  },
  day05: {
    summary: "Walk in at Udon Izakaya Edobori at 11:00 for 5. Mai orders kitsune udon or chikuwa udon. Honke Shibato is skipped. Then ride the Nunobiki ropeway and pause in the gardens. Dinner is booked: Shabushabu On-yasai Sennichimae at 20:00 for 5. Do not add a Kobe dinner.",
    timeline: [["11:00", EDOBORI_LUNCH_NOTE], ["After lunch–15:30", "Go to Shin-Kobe. Allow 60–75 minutes each way. Ride the Nunobiki ropeway. Pause at one garden café or terrace. [ropeway and garden hours — needs confirmation]."], ["15:30–18:00", "Descend. Choose one Kobe sweet if you want it. Do not book a Kobe dinner."], ["20:00", "Be at Shabushabu On-yasai Sennichimae. Party of 5. Confirmation Ebica {{copy:468119458}}."]],
    slowTimeline: [["10:00–11:30", "Sleep in. Eat near Hotel Cordia Osaka Hommachi. Leave when everyone is ready."], ["Late morning", "Go to Shin-Kobe. Ride the ropeway both ways. The view is the main event."], ["Midday–15:00", "Use one terrace or café. Use only the shortest garden section."], ["Afternoon", "Return to Hotel Cordia Osaka Hommachi. Rest."], ["20:00", "Be at On-yasai Sennichimae. Do not add a Kobe dinner."]],
    history: [
      "The Nunobiki slopes rise immediately behind Shin-Kobe, making mountain scenery unusually close to the city and port. For centuries the ridge was admired in poetry and travel writing as a sudden vertical escape from harbour commerce.",
      "The modern ropeway and herb gardens turn that steep terrain into an assisted scenic outing with broad views over Kobe and Osaka Bay. Kobe itself grew as one of Japan's first treaty ports, mixing foreign architecture, hillside neighbourhoods and harbour light.",
      "Choosing Nunobiki is a deliberate refusal of the wider Kobe checklist—no Chinatown circuit, no harbour cruise, no fashion district. The story of the day is proximity: city, ropeway, garden terrace, and an optional sweet before the booked dinner back in Osaka."
    ]
  },
  day06: {
    summary: "Use Nara as the bridge from Osaka to Kyoto. Carry all luggage to Kintetsu-Nara and store it in the coin lockers. Keep the deer stop short. Enter Todai-ji's Great Buddha Hall. Buy fresh yomogi mochi before the train. Collect the bags, then go to Hotel Monterey Kyoto. To-ji is not on this day.",
    timeline: [["08:00–09:00", "Check out of Hotel Cordia Osaka Hommachi. Take all luggage on the Kintetsu train to Kintetsu-Nara. Arrive before 10:00. The large lockers fill in the morning."], ["At Kintetsu-Nara", "Go out through the West ticket gate. Turn left to the coin-locker room. It has 23 extra-large lockers. An extra-large locker costs about ¥800 to ¥1,500 for one day. Pay with coins or an IC card. Suica and ICOCA work. Some lockers take IC cards only. Take a photo of the locker number. Then use the East gate side, Exit 2, for Nara Park and Todai-ji."], ["If the lockers are full", "Use the Tourist Information Centre in the Kintetsu building. It is at Exit 3, 1F. It holds bags from 09:00 to 16:00. It takes the last bag at 14:00. Space is limited."], ["10:00–12:30", "Walk or take a taxi through Nara Park to Todai-ji. Keep the deer stop short."], ["12:30–15:00", "Buy fresh yomogi mochi. Walk-in only. No reservation number. [yomogi mochi shop — needs confirmation]. Add kakinoha-zushi or a short Naramachi café only if you want it."], ["15:00–18:00", "Return to the West gate lockers. Collect the bags. Take the Kintetsu Kyoto Line to Kyoto Station. Check in at Hotel Monterey Kyoto. Do not go to To-ji today."]],
    history: [
      "Nara became Japan's first lasting imperial capital in 710, when the court laid out Heijo-kyo using continental models. Buddhism was not merely private faith: temples, ritual, scholarship, and state power were woven together in the project of governing the country.",
      "Todai-ji's Great Buddha was cast in the 8th century during epidemics, crop failures, and political anxiety. Emperor Shomu imagined the colossal bronze image as a unifying act of protection. The present hall is smaller than its medieval predecessor, which makes the surviving scale even more startling.",
      "The deer roaming Nara Park are not props—they belong to a landscape where sacred precincts, open grass, and animal life have coexisted for centuries. Naramachi's merchant lanes then carry the day toward Kyoto: old shopfronts, sweets, and the quieter scale of a town that once ruled Japan."
    ]
  },
  day07: {
    summary: "The maximum-coverage southeast day climbs Mt Inari, samples one Tofuku-ji section, then meets the parents for Kiyomizu and the old streets down to Gion. Hard pace checks at Yotsutsuji (07:20) and Tofuku-ji exit (09:50) protect the 10:30 reunion. The seated meal is the 13:30 Gion-course lunch at Tempura Yasaka Endo for 5; Paul is not joining. Everything after 16:00 in Gion is evening bonus, not schedule debt. Parents skip Inari and Tofuku-ji, taxi toward Kiyomizu, and join the Endo lunch.",
    timeline: [["05:45–06:15", "Wake, take a packed breakfast and leave promptly. Be at Fushimi Inari's main approach by 06:15; breakfast happens after the climb, not before it."], ["06:15–07:20", "Climb through the torii toward Yotsutsuji. Pace check: if Yotsutsuji is not reached by 07:20, turn around wherever you are—do not chase the summit."], ["07:20–08:15", "Descend and leave the shrine area. Use the train or a short taxi to Tofuku-ji and eat the portable breakfast in transit or before entry."], ["08:50–09:50", "Be at Tofuku-ji for its 09:00 opening. Choose the garden or Tsutenkyo area, not both; leave by 09:50 even if the visit began late."], ["09:50–10:30", "Go toward Kiyomizu. Message the parents. [parents meeting point — needs confirmation]. If you miss the 09:50 exit, take a taxi and still meet at 10:30."], ["10:30–12:00", "Visit Kiyomizu together. The panorama, main hall and Otowa waterfall are the complete visit; begin descending around noon."], ["12:00–13:30", "Walk Sannenzaka and Ninenzaka downhill at a humane pace. Skip a cafe lunch; taxi the last bit if Dad's back is complaining. Be at Endo for 13:30."], ["13:30–15:30", "Eat the Gion course at Kyoto Gion Tempura Yasaka Endo. Party of 5. Booked by Mom. [Endo confirmation number — pending, do not chase]. Paul is not in this party. [who Paul is — needs confirmation]. Do not take the 14:30 sitting. Last order is 14:30."], ["15:30–16:00", "Continue Yasaka and Gion after lunch. The required sightseeing day ends here; anything after 16:00 is an evening bonus, not schedule debt."]],
    evening: { rank: "Most open Kyoto evening", window: "From about 16:00", bestUse: "Stay in Yasaka/Gion for lantern atmosphere, dinner, Shirakawa or a gentle walk toward the Kamo River.", canMove: "Yasaka Shrine, Gion lanes and the architecture of Sannenzaka/Ninenzaka still work after shops close. Fushimi Inari's lower torii can also be atmospheric after dark, but it should not replace this morning's climb.", keepDaylight: "Do not defer Tofuku-ji or Kiyomizu-dera; their interiors, gardens and views require the daytime opening window." },
    history: [
      "Fushimi Inari is the head shrine of thousands of Inari shrines across Japan. Donated torii record hopes, gratitude, and commercial prosperity; foxes serve as Inari's messengers rather than the deity itself.",
      "Tofuku-ji was founded in the 13th century and later became a major Zen complex. Its name deliberately echoes Nara's Todai-ji and Kofuku-ji, claiming continuity with older capital authority while pursuing a different Buddhist path.",
      "Kiyomizu-dera grew around a sacred spring dedicated to Kannon, and the wooden stage projecting from the hillside turns approach into part of the religious experience. Below it, Sannenzaka and Ninenzaka preserve the pilgrimage-and-shopfront scale that made old Kyoto legible on foot, while Yasaka and Gion grew beside the shrine as a living entertainment quarter—not a museum street."
    ]
  },
  day08: {
    summary: "Friday moves from Arashiyama's bamboo and river through Ryoan-ji's rock garden to Kinkaku-ji's Golden Pavilion without adding another Arashiyama temple. Reach the grove by 07:45, treat Togetsukyo and the riverside café as the morning payoff, then use Randen or taxis for compact western temples. Parents may skip Ryoan-ji and meet at Kinkaku-ji; Kamishichiken tea is optional atmosphere, not a third major stop.",
    timeline: [["07:00–07:45", "Leave the hotel with breakfast handled and reach the Bamboo Grove entrance by 07:45. Do not add a temple before the grove."], ["07:45–08:40", "Walk one clear Bamboo Grove route and continue toward the river. Pace check: if still in the grove at 08:40, take the shortest exit toward Togetsukyo."], ["08:40–10:15", "See Togetsukyo. Meet the parents. [Togetsukyo meeting point — needs confirmation]. Take the riverside café pause. Do not add another Arashiyama sight."], ["10:15–11:20", "Eat an early lunch close to the Randen route. Hard departure from Arashiyama by 11:20."], ["11:20–12:30", "Use Randen toward Ryoan-ji, allowing transfer and walking margin. A taxi for the final western legs is the recovery tool if trains or lunch run late."], ["12:30–13:20", "Give Ryoan-ji 40–50 focused minutes. The temple's own guidance estimates about 30–40 minutes; leave by 13:20."], ["13:20–14:10", "Transfer to Kinkaku-ji, preferably by taxi if the bus wait is poor. Pace check: target the gate by 14:10 and treat 15:30 as the latest comfortable arrival."], ["14:10–17:30", "Complete Kinkaku-ji's one-way garden route. Return toward Hotel Monterey Kyoto. Be at Kani Doraku Kyoto Honten at 18:00."]],
    evening: { rank: "Dinner is already booked", window: "Be at Kani Doraku at 18:00", bestUse: "Be at Kani Doraku Kyoto Honten at 18:00. Party of 5. Confirmation HotPepper SE0767510. Use Kamishichiken only for tea or wagashi before that booking.", canMove: "A short Kamishichiken walk can happen before dinner. It does not replace Kani Doraku.", keepDaylight: "Keep the Bamboo Grove, Togetsukyo, Ryoan-ji and Kinkaku-ji in daylight. Ryoan-ji and Kinkaku-ji close at 17:00." },
    history: [
      "Arashiyama became a Heian-period retreat for poetry and seasonal beauty. Aristocrats travelled from the capital to compose verses, admire blossoms and autumn leaves, and borrow mountain scenery into designed gardens and villas.",
      "Togetsukyo—the Moon Crossing Bridge—names an emperor's poetic impression of the moon moving across the span. The bamboo grove is only one scene in a much larger landscape of river, working woodland, gardens, and ritual routes.",
      "Ryoan-ji's dry garden reduces landscape to stone, gravel and interpretation; the temple offers no official solution, so sustained looking becomes the ritual. Kinkaku-ji's reflective pavilion began as shogun Ashikaga Yoshimitsu's retirement villa before becoming a Zen temple—gold, pond and borrowed mountain scenery expressing power and an imagined Pure Land rather than austerity."
    ]
  },
  day09: {
    summary: "Central Kyoto links Nijo, the Imperial Palace, optional manga culture, Nishiki, and dinner at Kyoya in one north-to-south sequence. Enter Nijo at opening. Keep the palace to about one hour. Treat the 16:00–17:45 hotel reset as part of the plan. The Manga Museum is an optional split. Parents may skip the palace or the museum and rejoin for Nishiki or the Kamo River walk. After the reset, walk the Kamo River to Pontocho. Dinner is booked at Kyoya at 18:30. The shop is about 10 minutes from the Shijo end of Pontocho.",
    timeline: [["08:25–08:45", "Arrive at Nijo before opening. Enter at 08:45. [Nijo ticket type and where to buy it — needs confirmation]. Do not start with breakfast or shopping nearby."], ["08:45–10:35", "See Ninomaru Palace, the nightingale corridors and a bounded garden loop. Hard exit by 10:35–10:45."], ["10:45–11:15", "Go to the Kyoto Imperial Palace. Enter through the current public gate after security. [Dad's rest/rejoin point — needs confirmation]."], ["11:15–12:15", "Make the palace a one-hour visit. Its October last admission is 15:20, but using that theoretical margin would break Nishiki and the reset."], ["12:15–13:10", "Take a seated lunch near Karasuma Oike. At 12:45 make the decision: Manga Museum only if everyone is on pace and interested."], ["13:10–14:25", "Optional Manga Museum visit or parent/couple rest split. If arrival would be after 13:30, shorten it to one exhibition plus the Manga Wall or skip it."], ["14:35–15:50", "Walk Nishiki in one direction with a short tasting list. Leave by 15:50 before more stalls begin winding down."], ["16:00–17:45", "Return to the hotel for a real reset. This protected break is part of the plan, not unused sightseeing time."], ["17:45–18:20", "Walk the central Kamo River to Pontocho. From the Shijo end of Pontocho, walk about 10 minutes to dinner."], ["18:30–20:30", KYOYA_NOTE]],
    evening: { rank: "Best structured evening, but already allocated", window: "17:45 onward after the hotel reset", bestUse: "Reset at the hotel. Then walk the Kamo River to Pontocho. Dinner is at Kyoya at 18:30. The shop is about 10 minutes from the Shijo end of Pontocho.", canMove: "The river walk and Pontocho neighborhood experience belong in the evening. They can absorb extra time without threatening an opening hour.", keepDaylight: "Do not push Nijo, the Imperial Palace, Manga Museum or Nishiki into evening. The Palace closes at 16:00 in October–February, the museum at 17:00, and Nishiki is not a reliable night market." },
    history: [
      "Nijo Castle turned Tokugawa architecture into political theatre. The decorated Ninomaru rooms staged hierarchy through painted screens and famously squeaking nightingale floors that warned residents of movement; in 1867 the castle also hosted the announcement returning governing authority to the emperor.",
      "The Kyoto Imperial Palace compound preserves the logic of the court city that preceded modern Tokyo—gates, ceremonial halls, and controlled spaces rebuilt across centuries. Nearby Nishiki Market developed around reliable cold groundwater that helped merchants preserve fish and produce, earning the nickname Kyoto's Kitchen.",
      "Pontocho and the Kamo River connect that historic centre to contemporary Kyoto life: narrow entertainment lanes, riverbank walks, and evening lanterns that belong after dark. Optional manga culture at the International Manga Museum adds a 20th-century layer—comics preserved and read in a converted schoolhouse rather than collected as merchandise."
    ]
  },
  day10: {
    summary: "Mt Hiei receives a full day: assisted ascent, Enryaku-ji's forested precincts, one meaningful walk, and views toward Kyoto or Lake Biwa. Confirm live cable, ropeway and descent times at Demachiyanagi before boarding; the 15:15–16:00 regroup is the hard turnaround even if the forest walk feels unfinished. Pack for Himeji/Hiroshima tonight—do not borrow sleep from tomorrow's westbound transfer.",
    timeline: [["07:15–07:50", "Reach Demachiyanagi, buy breakfast and confirm the day's live cable, ropeway, shuttle and descent times before boarding. Carry food rather than waiting for a long cafe meal."], ["07:50–09:30", "Take the assisted ascent. [Eizan/Yase approach — needs confirmation]. If that ascent fails, use [Sakamoto-side or direct-bus fallback — needs confirmation]."], ["09:30–12:15", "Reach the Enryaku-ji core and focus on Todo: Konpon Chudo, one or two nearby halls, forest atmosphere and a seated pause."], ["12:15–13:00", "Eat the carried lunch or the simplest available mountain meal. At 12:45 choose the afternoon walk using weather, legs and last-service times."], ["13:00–15:15", "Mai and Brian walk one forest route. [forest route — needs confirmation]. Dad uses the assisted core. Do not add a second precinct."], ["15:15–16:00", "Meet at the descent point. [descent transport point — needs confirmation]. This is the hard turnaround even if the walk feels unfinished."], ["16:00–18:30", "Descend with at least one-service margin and take the simplest route to the hotel. If returning via Demachiyanagi, dinner there is optional."], ["By 20:30", "Finish dinner, pack for Himeji/Hiroshima and set out the morning bags. Do not borrow sleep from the westbound transfer."]],
    evening: { rank: "Least dependable Kyoto evening", window: "Only after the actual descent, likely 18:00 or later", bestUse: "A comforting dinner near the hotel—or Demachiyanagi only if the route naturally returns there—followed by packing.", canMove: "No required Day 10 attraction should move into the evening. Dinner is the only flexible neighborhood element.", keepDaylight: "Enryaku-ji, forest paths, viewpoints and mountain transport all require daylight and last-service margin. Treat any unexpectedly early return as recovery time before Day 11." },
    slowTimeline: [["08:30–10:30", "Take the most assisted confirmed ascent after a calm breakfast; avoid an early multi-transfer race."], ["10:30–12:30", "Visit the Todo core only, with Konpon Chudo as the essential temple experience and seated pauses."], ["12:30–14:00", "Eat a proper lunch and use the nearest viewpoint rather than adding a forest route."], ["14:00–16:30", "Begin the assisted descent with generous last-service margin."], ["Evening", "Return to Kyoto early for rest, packing and a comforting dinner."]],
    history: [
      "Saicho founded Enryaku-ji on Mt Hiei in the late 8th century, and the mountain became the center of Tendai Buddhism in Japan. Its scattered precincts trained monks who later shaped several other schools, so the forested mountain geography is part of the institution's meaning—not one building but a religious landscape.",
      "The mountain's position between Kyoto and Lake Biwa made it both a sacred barrier and a strategic vantage. Emperors and warriors treated control of Hiei as control of the capital's spiritual flank.",
      "Modern visitors experience that geography through assisted ascents, cedar corridors, bell sounds, and views that open suddenly toward either the basin of Kyoto or the wider water of Biwa. The day works when treated as mountain time: breakfast carried, one forest walk chosen, and descent planned around last cable or bus service rather than sunset ambition."
    ]
  },
  day11: {
    summary: "Make Himeji the priority. Do not wake the group at 05:00 for To-ji. Enter Himeji Castle between 09:30 and 10:00. The tickets are booked. Visit Koko-en before the castle or after the castle. Eat lunch in Himeji. Buy ekiben. Check in at Hotel Granvia Hiroshima at about 16:00. Eat dinner at Reichan. Walk in. Do not reserve.",
    timeline: [["06:15", "Wake at 06:15. Himeji is the priority. Do not wake the group at 05:00 for To-ji."], ["07:00–09:00", "Go to Kyoto Station. Take the westbound train. [train number — not booked]. [car — not booked]. [seat — not booked]. Go to To-ji only if a person is already awake and the train still leaves on time. [luggage forwarding service and deadline — needs confirmation]."], ["09:00", "You can enter Koko-en Garden from 09:00. Do Koko-en before the castle or after the castle."], ["09:30–10:00", HIMEJI_TICKET_NOTE], ["After the castle", "Eat lunch in Himeji. Buy the ekiben. Score each box for packaging, regional character, variety, flavor, and train happiness."], ["About 16:00", `Check in at Hotel Granvia Hiroshima. ${REICHAN_DINNER_NOTE}`]],
    history: [
      "Himeji is called the White Heron Castle because its pale plastered walls seem to lift above the city. The surviving complex took shape under Ikeda Terumasa in the early 1600s, when the new Tokugawa order used castles both as fortresses and declarations of political control.",
      "Its beauty disguises defensive intelligence: confusing approaches, narrow gates, firing positions, and steep interiors were meant to slow attackers. The castle survived war, demolition pressures, and natural disasters, making today's reveal unusually close to encountering an original feudal complex.",
      "Koko-en beside the moat reframes the keep from below—Edo-style garden rooms built on samurai residence sites. Optional To-ji at dawn adds a free Kyoto pagoda silhouette only if the transfer rhythm stays humane. The day's larger story is departure: Kyoto's temple city giving way to the white keep, then ekiben culture and the long slide west toward Hiroshima."
    ]
  },
  day12: {
    summary: "Visit the Peace Memorial Museum first. Take a quiet break. Walk the memorial axis. See the Atomic Bomb Dome as the light softens. Do not add Shukkeien. Eat dinner at Suishin main store. Order a la carte. Do not order okonomiyaki. The table for 18:00 is booked.",
    timeline: [["08:30–11:30", "Visit the Peace Memorial Museum first. Do this while your attention is strongest."], ["11:30–13:30", "Take a quiet break. Eat a gentle lunch. Do not go straight to another sight."], ["13:30–17:00", "Walk through the Memorial Hall, the Cenotaph, the park, the river, and the Atomic Bomb Dome."], ["18:00", SUISHIN_MAIN_NOTE], ["Weather swap", HIROSHIMA_WEATHER_SWAP]],
    history: [
      "Hiroshima began as a castle town in the late 16th century and grew into a regional military and industrial center. At 8:15 on August 6, 1945, the first atomic bomb used in war exploded above the city, killing tens of thousands immediately and many more through injury and radiation.",
      "The Peace Memorial Park does not preserve a frozen ruin alone. Its design creates an axis among the museum, Cenotaph, and Dome, asking visitors to move from evidence to mourning to public commitment.",
      "Hiroshima's larger story is also one of survivors rebuilding a living city and insisting that memory serve peace. The river, rebuilt avenues, and ordinary lunch spots after the museum are part of that story too—the city refuses to be only a monument."
    ]
  },
  day13: {
    summary: "Make Miyajima the centerpiece of the Hiroshima stay. Leave the hotel at 07:50. Take the ropeway in the morning. Eat anago-meshi at Fujitaya. See Itsukushima Shrine from 16:00, when the water is high. Return on the 18:25 ferry or the 18:40 ferry. Eat a light walk-in dinner at Hiroshima Station.",
    timeline: [
      ["07:50", "Leave the hotel. Take the JR train to Miyajimaguchi. The ride is about 27 minutes. The fare is JPY 420. An IC card is OK. Then take the JR ferry. The ferry is JPY 200 plus the JPY 100 visitor tax. The tax is collected automatically. JR ferries from 9:10 to 16:10 pass close to the torii."],
      ["About 09:00", "Walk through Momijidani to the ropeway. The ropeway goes up from 9:00 to 16:00. The last ride down is 16:30. A round trip is JPY 2,000. Ages 65 and over pay JPY 1,800. Do not reserve. The ropeway stops in strong wind."],
      ["About 11:00", FUJITAYA_LUNCH_NOTE],
      ["About 12:30", "Go to Daisho-in temple. Entry is free. The temple is open from 8:00 to 17:00."],
      ["About 13:30", "Go to Senjokaku and the Omotesando shopping street. Buy snacks. Momiji manju is a good snack. Shops close around 17:00–18:00."],
      ["16:00–17:20", "Go to Itsukushima Shrine at high water. Entry is JPY 300. The shrine is open from 6:30 to 17:30. The shrine looks like it floats when the water is above about 250 cm. On Nov 4 that window is about 16:00–20:45. Do not wait for the 18:21 high tide (313 cm). The low tide is 11:46 (107 cm). That level is not low enough to walk to the torii. The torii restoration is finished. The five-story pagoda has repair work. The East Corridor has repair work."],
      ["About 17:45", "Look at the torii lights. The lights come on at about 17:45. The lights stay on until 23:00."],
      ["18:25 / 18:40", "Take the 18:25 ferry or the 18:40 ferry. You arrive at the hotel at about 19:30. The last JR ferry is 22:14."],
      ["Dinner", MIYAJIMA_RETURN_DINNER],
      ["Tips", MIYAJIMA_TIPS],
      ["Weather swap", HIROSHIMA_WEATHER_SWAP]
    ],
    history: [
      "Itsukushima was treated as a sacred island long before its current buildings appeared. To avoid violating that sanctity, worship took place over the water; the shrine's corridors and great torii still use the tide to blur the boundary between architecture, sea, and mountain.",
      "The 12th-century warrior-statesman Taira no Kiyomori expanded the shrine while cultivating power at the imperial court. Yet Miyajima is not one frozen era: Buddhist halls, pilgrimage paths, merchant food streets, deer, ferries, and tourism have accumulated around the sacred landscape for centuries.",
      "Island food—anago-meshi, grilled oysters, momiji manju—grew from pilgrimage demand and later leisure travel. The morning ropeway and the afternoon shrine are both part of the day. The romantic payoff is the torii standing in high water."
    ]
  },
  day14: {
    summary: "The long train is the experience: browse Hiroshima's ekiben, reveal and score them after departure, then arrive in Tokyo as temporary neighborhood residents rather than sightseers. Photograph closed and open boxes, trade tastes, and score all five Ekiben League categories while the landscape changes. Evening is depachika, supermarket, or ramen near the hotel—no sightseeing campaign after arrival.",
    timeline: [["08:30–10:00", "Check out and reach Hiroshima Station early enough to browse regional ekiben calmly."], ["10:00–14:30", "Ride east, photograph closed and open boxes, trade tastes, score them, and watch the country change."], ["15:00–17:30", "Reach APA Nishishinjuku. From Tokyo Station, take the JR Chuo line to Shinjuku. Then take the Toei Oedo line to Nishi-shinjuku-gochome. Allow about 40 minutes with bags. Learn the station exit. Check in from 15:00."], ["Evening", "Choose a depachika, supermarket, ramen, or curry dinner near Nishi-shinjuku-gochome. Do not plan this dinner in Ningyocho. Add no sightseeing campaign."]],
    history: [
      "Japan's first railway opened in 1872, and station boxed meals soon turned travel into a way of tasting place. Ekiben packaging, ingredients, and presentation became miniature regional advertisements, allowing a train journey to carry local identity across the country.",
      "The Tokaido corridor linking Kyoto, Osaka, and Tokyo has organized movement for centuries, first as a famed highway and now as the country's busiest high-speed rail axis. Arriving by Shinkansen compresses landscapes once measured in days of walking into a single seated chapter.",
      "Making the train the main event reverses the usual arrival panic: no monuments required after Tokyo Station, only learning the hotel exit, the konbini rhythm, and the easiest neighbourhood dinner. Tokyo begins as habitation, not performance."
    ]
  },
  day15: {
    summary: "This is deliberately a Kichijoji and Inokashira neighborhood day: park paths, a cafe, a bakery or small creative shop, and enough unstructured time for the area to feel lived in.",
    timeline: [["Morning", "Go to Kichijoji. Take the Toei Oedo line from Nishi-shinjuku-gochome to Shinjuku. Then take the JR Chuo line to Kichijoji. Allow about 35 minutes. There is no museum deadline."], ["Late morning–14:00", "Walk Inokashira Park and pause at a cafe."], ["14:00–17:00", "Browse one Kichijoji shopping street, bakery, or small creative shop."], ["Evening", "Eat nearby or return to APA Nishishinjuku. The neighborhood itself is the complete day."]],
    history: [
      "Inokashira Pond supplied water to Edo and later became one of Tokyo's early suburban parks. Rail connections transformed nearby Kichijoji into a western neighbourhood where green space, small commerce, music, cafes, and dense residential life meet.",
      "Tokyo is not only skyscrapers—this corner proves the city also lives through ponds, ducks, bakeries, and streets sized for wandering home."
    ]
  },
  day16: {
    summary: "Dad's Shibuya Crossing is the morning anchor, with Hachiko, lunch and one focused Mai-friendly stop before a hard 15:30 departure for Akko. Do not turn Shibuya into a full shopping marathon—the evening meetup is the capstone and should begin without anyone already exhausted.",
    timeline: [["10:00–10:30", "Go from APA Nishishinjuku to Shibuya. Take the Toei Oedo line to Shinjuku. Then take the JR Yamanote line to Shibuya. Allow about 25–35 minutes. Do not set an early alarm after the Kichijoji day."], ["10:30–11:15", "See Hachiko, cross the Scramble, watch one full signal cycle, and take Dad's group photo."], ["11:15–13:30", "Have a seated lunch, then choose exactly one Mai-facing stop; Shibuya PARCO is the default."], ["13:30–15:15", "Use a cafe/rest buffer or one short Shibuya browse—do not add Harajuku."], ["By 15:30", "Leave Shibuya by 15:30. [Akko meeting point and time — needs confirmation]. The map pin is provisional Chofu Station. [whether Yoshi joins — needs confirmation]. [who Yoshi is — needs confirmation]."], ["Evening", "Let Akko choose the neighborhood and dinner; keep it seated, social and unhurried."]],
    history: [
      "Tokyo's residential neighborhoods are as important to understanding the city as its famous districts. Stations, shotengai, temples, parks, and favourite restaurants reveal everyday Japan more honestly than another imported sightseeing plan.",
      "Being shown those routines by friends who live there turns travel into hospitality. The meal they choose carries more cultural weight than any guidebook ranking because it encodes memory, budget, and pride in a local spot.",
      "If the route passes Chofu, Jindaiji traces its foundation to the 8th century and preserves wooded temple lanes and soba tradition on the city's western edge. The area is also linked to GeGeGe no Kitaro creator Shigeru Mizuki, whose yokai details appear in local shopfronts—optional texture, not the day's purpose."
    ]
  },
  day17: {
    summary: "The outbound Romancecar is booked. Take SuperHakone 9 (GSE) at 10:00. Mai and Brian stay 3 nights at Tokinoyu Setsugetsuka. The stay is booked. Leave the large bags at the APA Nishishinjuku front desk. Mai emailed APA at ah-rnisi5@guest.apa.co.jp on Oct 8, 2026. The reply is still pending. [APA luggage storage Nov 8–11 — needs confirmation]. KOKO storage does not apply. Take the small bags. The Hakone hotel is one minute on foot from Gora Station. Check in from 15:00 to 19:30. Check out by 11:00 on Wed Nov 11. Breakfast and dinner are included.",
    timeline: [["By 09:00", "Leave APA Nishishinjuku by 09:00. The check-out time is 10:00. The Romancecar leaves Shinjuku at 10:00. Leave the large bags at the front desk. Mai emailed APA at ah-rnisi5@guest.apa.co.jp on Oct 8, 2026. The reply is still pending. [APA luggage storage Nov 8–11 — needs confirmation]. KOKO storage does not apply. Take the small bags. Ride the Toei Oedo line from Nishi-shinjuku-gochome to Shinjuku. Allow about 20 minutes, including the walk inside Shinjuku Station."], ["10:00–11:21", `${ROMANCECAR_OUT_NOTE} Then take the Hakone Tozan Railway to Gora.`], ["After the train", "Walk about one minute from Gora Station to Tokinoyu Setsugetsuka. Leave the small bags before check-in."], ["13:00–15:00", "Ride one stop to Chokoku-no-Mori. Give the Open-Air Museum 90–120 minutes."], ["15:00–19:30", `${SETSUGETSUKA_NOTE} Use the in-room bath or a private bath. Do not plan a public-bath visit.`]],
    history: [
      "Hakone developed as a mountain crossing on the old Tokaido road and later as a hot-spring retreat. Railways, cable cars and ropeways now stitch steep terrain together without requiring a car.",
      "Gora grew around the upper end of the mountain railway. Staying beside its station makes the area's transport network—rather than a hotel shuttle—the organizing system for the visit.",
      "Setsugetsuka's guest rooms have private open-air or half-open-air baths that are explicitly not hot spring water. Its three private hot-spring baths are free and first-come without reservations, so the room bath remains the dependable private option."
    ]
  },
  day18: {
    summary: "Mai's sunrise Hakone Shrine visit is the non-negotiable anchor. On Nov 9, astronomical sunrise is about 06:13 JST and civil twilight begins around 05:45; surrounding mountains may delay direct sunlight. Prebook a taxi from Setsugetsuka for 05:30 and target a 06:00 arrival. The shrine's staffed amulet and goshuin counter normally begins at 08:15. Remaining at Moto-Hakone for the first practical cruise is the efficient full-day plan. Breakfast and dinner are included at the hotel. Do not buy another dinner. A return to Gora only for breakfast adds a long trip.",
    timeline: [["05:00–05:30", "Wake and dress. Breakfast is included. You leave at 05:30. That is before breakfast. Message the hotel through the Booking.com app. Ask for breakfast before the taxi. Do not buy another breakfast."], ["05:30–06:00", "Take a taxi from Setsugetsuka to Hakone Shrine. [05:30 taxi prebook — not booked]."], ["06:00–07:30", "Visit the cedar approach, main shrine and lakeshore through the 06:13 sunrise. Direct sun may clear the surrounding ridge later."], ["07:30–first practical cruise", "Preferred: remain near Moto-Hakone. Hotel breakfast is included. Buy coffee only if you want it. Do not buy a second breakfast. Use the amulet and goshuin counter after 08:15 only if Mai wants it."], ["Return-to-hotel option", "Before 10:00, board the H bus at Hakone Shrine Entrance or walk to Moto-Hakone Port. Ride toward Hakone-Yumoto/Odawara, get off at Kowakidani Station, then take the Hakone Tozan train uphill to Gora. Allow about an hour plus waiting and recheck the November timetable."], ["Late morning", "Cruise from Moto-Hakone to Togendai, then take the ropeway toward Owakudani."], ["Midday–afternoon", "Pause at Owakudani, continue to Sounzan, and descend by cable car to Gora."], ["Evening", "Return for the included dinner. Do not buy another dinner. Use the in-room bath or a private bath."], ["No-taxi fallback", "Take the earliest workable train and H-bus connection via Kowakidani. This preserves the shrine-first order but will not reach sunrise."]],
    history: [
      "Owakudani was formed by volcanic activity around the Hakone caldera and still vents sulfurous steam. The ropeway makes the geology legible from above before placing visitors directly inside it.",
      "Lake Ashi occupies part of the caldera and historically lay beside the Tokaido checkpoint route. Boat travel now joins the volcanic highlands to the old shrine landscape along the water.",
      "The loop works because every transfer advances the story. If the high route closes, Gora Park, the Open-Air Museum and Pola Museum form a complete low-altitude alternative."
    ]
  },
  day19: {
    summary: "Mount Kintoki is the headline hiking objective, normally a little under two hours each way with a famous Fuji-facing summit. Reach the trailhead by scheduled transport through Sengoku, start in the morning, and use museums as the no-regrets poor-weather substitute. Mom (Cynthia King) and Dad depart Haneda on Nov 10. The date is confirmed.",
    timeline: [["07:00–08:00", "Eat the included breakfast. Check the mountain weather and the live transport notices. Leave Gora on the sightseeing bus toward Sengoku."], ["08:00–09:15", "Transfer at Sengoku. [bus stop: Kintoki Shrine Entrance or Kintoki-Tozanguchi — needs confirmation]. Start the common route."], ["09:15–13:45", "Allow about four hours of walking plus a summit pause. Descend at the turnaround even if Fuji is hidden. [turnaround time — needs confirmation]."], ["13:45–16:00", "Use the scheduled buses back through Sengoku to Gora. Eat a simple snack if you need it."], ["Evening", "Eat the included dinner at Setsugetsuka. Do not buy another dinner. Confirm tomorrow's Romancecar connection. The return ticket is not booked yet."], ["Weather cancellation", "Take the direct sightseeing bus from Gora to Pola Museum instead; do not combine the museum with a shortened unsafe hike."]],
    slowLabel: "Parents' plan",
    slowTimeline: [["Nov 10", PARENTS_HANEDA_NOTE], ["Morning", "Parents check out of their Tokyo hotel. Keep the buffer their flight requires. Do not guess the hotel or the flight number."], ["Departure", "Parents fly from Haneda. This panel is their Tokyo plan. It is not a slower hike."]],
    history: [
      "Mount Kintoki rises on Hakone's northern edge and is associated in folklore with the superhuman child Kintaro. Its open summit is famous for looking across toward Mt Fuji when weather cooperates.",
      "The Sengoku side offers established trailheads and scheduled bus access, making the hike more compatible with a Gora base than a taxi-dependent expedition.",
      "Summit culture here is not about bagging a famous peak list—it is about one unmistakable photograph and the shared story afterward. Mom and Dad follow a separate Tokyo timeline and depart from Haneda on Nov 10."
    ]
  },
  day20: {
    summary: "Check out of Setsugetsuka. Take the morning train back to Tokyo. The return Romancecar is not booked. Tickets go on sale on Oct 11. Recover the large bags at APA Nishishinjuku and check in. If the transfer is on time, take Mai to Asakusa Engei Hall for 60–90 minutes.",
    timeline: [["07:00–08:30", "Eat the included breakfast. Check out by 11:00. Walk to Gora Station. Go down on the Hakone Tozan Railway."], ["Morning–around noon", ROMANCECAR_BACK_NOTE], ["After Shinjuku", "Go to APA Nishishinjuku. Recover the large bags. Check in from 15:00. From Shinjuku Station, take the Toei Oedo line to Nishi-shinjuku-gochome. Allow about 20 minutes."], ["After check-in", "Go to Asakusa Engei Hall if the return is on time. Allow about 45 minutes from the hotel. Check the posted bill."], ["60–90 min", "Watch about 60–90 minutes of the night program. Leave between acts if energy is low."], ["After the hall", "Eat an easy dinner in Asakusa. The hotel is in Nishi-shinjuku. Do not add a second Asakusa sightseeing circuit."]],
    slowTimeline: [["Morning", "Breakfast, checkout and use the same rail route to Shinjuku without adding stops."], ["Early afternoon", "Reach APA Nishishinjuku, recover the large bags, check in, and make the hotel the rest base."], ["Evening", "Skip Asakusa if needed and make hotel rest the complete day."]],
    history: [
      "Hakone's mountain railway and Odakyu connection turned a historic hot-spring region into a practical Tokyo retreat without erasing the drama of the climb.",
      "Returning two nights before the flight converts weather or traffic risk into an inconvenience rather than a departure-day emergency. The psychology shifts from 'last chance to see everything' to 'enough time to do laundry, buy one missing item, and sleep.",
      "Tokyo's final hotel chapter is intentionally mundane—suitcases reunited, neighbourhood ramen, early packing—which is how a long trip should end: not in spectacle, but in calm readiness."
    ]
  },
  day21: {
    summary: "Check out of APA Nishishinjuku by 10:00. Put the bags in Shimbashi coin lockers. Enter teamLab Borderless between 12:30 and 13:00. Then go to Mai's melon-bread shop. Walk in at Kaiten Toyama Sushi Ginza at 17:00. Do not book that dinner. There is no hotel on the night of Nov 12. Flight BA4609 leaves Haneda at 01:00 on Nov 13.",
    timeline: [["By 10:00", "Check out of APA Nishishinjuku by 10:00. Take the bags to the coin lockers at Shimbashi Station. Use the large-suitcase lockers. Lockers can fill by late morning. If the lockers are full, reserve storage near Shimbashi with the ecbo cloak app. From the hotel, take the Toei Oedo line to Daimon or Shiodome. Or go to Shinjuku, then take JR to Shimbashi. Allow about 40 minutes with bags."], ["12:30–13:00", `${TEAMLAB_NOTE} teamLab is in Azabudai Hills. Take the Hibiya line to Kamiyacho. The ride from Shimbashi is about 10 minutes.`], ["After teamLab", "Go to the melon-bread shop. [melon-bread shop and branch — needs confirmation]. Check the same-day stock before you leave the previous stop. Score it in the passport."], ["17:00–20:30", TOYAMA_NOTE], ["20:30–22:00", AIRPORT_TONIGHT_NOTE]],
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
const todayPanel = document.querySelector("#todayPanel");
const journalPanel = document.querySelector("#journalPanel");
const ticketsPanel = document.querySelector("#ticketsPanel");
const foodPanel = document.querySelector("#foodPanel");
const tripCalendar = document.querySelector("#tripCalendar");
let showArchive = false;
let daysShowsDay = false;
let foodListOpen = false;
let grokToastTimer = 0;
const state = loadState();
state.theme = "light";
applyTodayTarget();

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
    foodMapLeftPageReady: false,
    overviewMapChapter: "osaka",
    theme: "light",
    activeCity: "osaka",
    reservations: {
      familyOf8Id: "",
      items: {
        "sankei-club": {
          status: "booked",
          confirmation: "Resty 468118574 · Sun Oct 25 17:00 · 5",
          notes: "Seats only. 恵美須東3-2-17 · 06-7777-7125"
        },
        "onyasai-sennichimae": {
          status: "booked",
          confirmation: "Ebica 468119458 · Tue Oct 27 20:00 · 5",
          notes: "Seats only. 難波3-4-13 味わいばしビル2F · 06-4396-8311"
        },
        "endo": {
          status: "booked",
          confirmation: "Booked by Mom · Thu Oct 29 13:30 · Gion course · 5 · [Endo confirmation number — pending, do not chase]",
          notes: "Paul is not in this party. Do not chase the confirmation number."
        },
        "kani-doraku": {
          status: "booked",
          confirmation: "SE0767510 · Fri Oct 30 18:00 · 5 · 光華 ¥7590",
          notes: "Horigotatsu. Shop 075-211-0671. Phone on file is Hotel Monterey 075-251-7111. Cancel by 2026-10-30 00:00."
        },
        "kanawa-ekie": {
          status: "cancelled",
          confirmation: "Cancelled. TableCheck WFSXPK was cancelled.",
          notes: "Already cancelled. Do not treat this as a live booking."
        }
      }
    }
  };
}

function loadState() {
  const fresh = defaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      return {
        ...fresh,
        ...saved,
        lodging: { ...fresh.lodging, ...(saved.lodging || {}) },
        reservations: {
          familyOf8Id: saved.reservations?.familyOf8Id || "",
          items: { ...fresh.reservations.items, ...(saved.reservations?.items || {}) }
        }
      };
    }

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

function applyTheme() {
  state.theme = "light";
  document.body.dataset.theme = "light";
  document.documentElement.style.colorScheme = "light";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#fff0f6");
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
  day17: "capstones/day17.jpg",
  day18: "capstones/day18.jpg",
  day19: "capstones/day19.webp",
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
    const request = indexedDB.open(PHOTO_DB_NAME, 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        const store = db.createObjectStore(PHOTO_STORE, { keyPath: "id", autoIncrement: true });
        store.createIndex("taskId", "taskId", { unique: false });
        store.createIndex("cityId", "cityId", { unique: false });
      }
      if (!db.objectStoreNames.contains(JOURNAL_QUEUE_STORE)) db.createObjectStore(JOURNAL_QUEUE_STORE, { keyPath: "clientId" });
      if (!db.objectStoreNames.contains(JOURNAL_CACHE_STORE)) db.createObjectStore(JOURNAL_CACHE_STORE, { keyPath: "dayId" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function withStore(storeName, mode, action) {
  return openPhotoDb().then((db) =>
    new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
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

function withPhotoStore(mode, action) {
  return withStore(PHOTO_STORE, mode, action);
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
  return withPhotoStore("readwrite", (store) => storeRequest(store.add(photo)));
}

async function putPhoto(photo) {
  return withPhotoStore("readwrite", (store) => storeRequest(store.put(photo)));
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
      if (photo.clientId) await removeJournalQueueItem(photo.clientId);
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

function galleryAllowsMultiple(task) {
  return !task?.slot || task.slot === "extra" || task.slot === "quest";
}

function makePhotoPickers({ id, multiple = false, onChange }) {
  const pickers = document.createElement("div");
  pickers.className = "photo-pickers";
  const gallery = document.createElement("input");
  const camera = document.createElement("input");
  const galleryLabel = document.createElement("label");
  const cameraLabel = document.createElement("label");
  gallery.id = `${id}.gallery`;
  gallery.type = "file";
  gallery.accept = "image/*";
  gallery.multiple = Boolean(multiple);
  camera.id = `${id}.camera`;
  camera.type = "file";
  camera.accept = "image/*";
  camera.setAttribute("capture", "environment");
  galleryLabel.className = "photo-button";
  galleryLabel.htmlFor = gallery.id;
  galleryLabel.textContent = "Choose from gallery";
  cameraLabel.className = "photo-button";
  cameraLabel.htmlFor = camera.id;
  cameraLabel.textContent = "Take photo";
  [gallery, camera].forEach((input) => {
    input.addEventListener("change", async (event) => {
      await onChange(event.target.files);
      event.target.value = "";
    });
  });
  pickers.append(galleryLabel, cameraLabel, gallery, camera);
  return pickers;
}

async function handlePhotoFiles(files, task, container) {
  for (const file of Array.from(files || [])) {
    if (!file.type.startsWith("image/")) continue;
    const dataUrl = await fileToDataUrl(file);
    const createdAt = new Date().toISOString();
    const clientId = journalClientId();
    const photoId = await addPhoto({
      taskId: task.id,
      cityId: task.cityId || state.activeCity,
      dayId: task.dayId || "",
      dayTitle: task.dayTitle || "",
      caption: task.text,
      slot: task.slot || "quest",
      dataUrl,
      createdAt,
      clientId,
      driveFileId: ""
    });
    await enqueueJournalPhoto({
      clientId,
      photoId,
      dayId: task.dayId || "",
      caption: task.text,
      createdAt,
      author: readJournalPrefs().author || ""
    });
  }
  void flushJournalQueue();
  await renderPhotosForTask(task.id, container);
  await renderAlbum();
  if (task.id.endsWith(".photo.thumbnail") || task.id.endsWith(".photo.capstone")) renderCalendar();
}

function makePhotoControls(task, _buttonText = "Add Photo", onPhotosChange) {
  const controls = document.createElement("div");
  const photos = document.createElement("div");
  controls.className = "photo-controls";
  photos.className = "quest-photos";
  controls.appendChild(makePhotoPickers({
    id: task.id,
    multiple: galleryAllowsMultiple(task),
    onChange: async (files) => {
      await handlePhotoFiles(files, task, photos);
      if (onPhotosChange) await onPhotosChange();
    }
  }));
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
  return [...regional, ...daily].filter((quest, index, all) => all.findIndex((candidate) => candidate.id === quest.id) === index && quest.id !== "nara-yomogi");
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
  const timelineMarkup = (timeline) => timeline.map(([time, activity]) => `<li><time>${escapeHtml(time)}</time><span>${renderGuideHtml(activity)}</span></li>`).join("");
  const slowTimeline = Array.isArray(context.slowTimeline) ? context.slowTimeline : [];
  const hasSlowTimeline = slowTimeline.length > 0;
  const hasBookedTime = mustDoItems(day.id).some((item) => (item.markers || [item.marker]).includes("booked"));
  const card = document.createElement("section");
  card.className = "daily-guide";
  card.innerHTML = `
    <div class="daily-guide-heading"><p class="label">Today's clear path</p></div>
    <h3>${dayClearPath(day)}</h3>
    <section class="context-block merged-summary">
      <h4>Quick Summary</h4>
      <div class="summary-body">${renderGuideHtml(context.summary)}</div>
    </section>
    <section class="context-block timeline-block">
      <div class="timeline-heading">
        <h4>Recommended Timeline</h4>
        ${hasSlowTimeline ? `<div class="timeline-tabs" role="tablist" aria-label="Choose timeline">
          <button type="button" role="tab" aria-selected="true" data-timeline-tab="main">Main plan</button>
          <button type="button" role="tab" aria-selected="false" data-timeline-tab="slow">${escapeHtml(context.slowLabel || "Slow plan")}</button>
        </div>` : ""}
      </div>
      <div data-timeline-panel="main" role="tabpanel"><ol class="day-timeline">${timelineMarkup(context.timeline)}</ol></div>
      ${hasSlowTimeline ? `<div data-timeline-panel="slow" role="tabpanel" hidden><ol class="day-timeline slow-day-timeline">${timelineMarkup(slowTimeline)}</ol></div>` : ""}
      <p class="timeline-note">${hasBookedTime ? "Booked times in this plan are fixed. Other times here are pacing windows. Move only the pacing windows." : "These times are pacing windows, not reservations. Move them around tickets, transport, weather, and energy."}</p>
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
      <div class="history-story">${context.history.map((paragraph) => `<p>${collapsedNoteHtml(paragraph, "More")}</p>`).join("")}</div>
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
  if (day.id === "day21") {
    const airport = document.createElement("section");
    airport.className = "today-card airport-tonight";
    airport.innerHTML = `<h3>Airport tonight</h3>${renderGuideHtml(AIRPORT_TONIGHT_NOTE)}`;
    section.appendChild(airport);
  }
  const hero = document.createElement("div");
  hero.className = "plan-photo";
  section.appendChild(hero);
  populatePlanPhoto(day, hero);
  section.appendChild(dailyGuide(day));
  section.insertAdjacentHTML("beforeend", askGrokButton(day.id));
  const openItemsRow = renderDayOpenItems(day);
  if (openItemsRow) section.appendChild(openItemsRow);
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
      photoWrap.innerHTML = `<img src="${photos[0].dataUrl}" alt="${escapeHtml(title)}">`;
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
    }
    photoWrap.appendChild(makePhotoPickers({
      id: photoTask.id,
      multiple: false,
      onChange: async (files) => {
        if (!files?.[0]) return;
        await Promise.all(photos.map((photo) => removePhoto(photo.id)));
        await handlePhotoFiles(files, photoTask, document.createElement("div"));
        refresh();
        renderAlbum();
      }
    }));

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
    const melonTask = { id: `melon.${id}`, text: title, slot: "melon", dayTitle: "Melon Bread Passport" };
    if (photos[0]) {
      photoWrap.innerHTML = `<img src="${photos[0].dataUrl}" alt="${title}">`;
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
    }
    photoWrap.appendChild(makePhotoPickers({
      id: melonTask.id,
      multiple: false,
      onChange: async (files) => {
        if (!files?.[0]) return;
        await Promise.all(photos.map((photo) => removePhoto(photo.id)));
        await handlePhotoFiles(files, melonTask, document.createElement("div"));
        renderMelonPassport();
        renderAlbum();
      }
    }));
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

/* FOOD MAP PROTOTYPE START
 * All four city chapters contain researched, itinerary-matched places.
 * Remove this block, the matching HTML section, its CSS block, and the
 * render/setup references to undo the prototype.
 */
const CITY_HOTEL_BY_CITY = {
  osaka: "Hotel Cordia Osaka Hommachi",
  kyoto: "Hotel Monterey Kyoto",
  hiroshima: "Hotel Granvia Hiroshima",
  tokyo: APA_HOTEL_NAME
};

const RESTAURANT_BOOKINGS = [
  { id: "sankei-club", name: "Shinsekai Kushikatsu Okonomi Sankei Club", city: "osaka", slot: "Sun Oct 25 · 17:00 · 5 people", dayIds: ["day03"], strength: "Booked", why: "Janjan Yokocho kushikatsu + okonomiyaki after Castle and Den Den. Seats only. Resty {{copy:468118574}}. Shop 06-7777-7125. 恵美須東3-2-17.", tabelogUrl: "https://tabelog.com/osaka/A2701/A270206/27150625/", officialUrl: "https://shinsekai-sankeiclub.jp/shinsekai/", defaultStatus: "booked", confirmation: "Resty 468118574 · Sun Oct 25 17:00 · 5" },
  { id: "edobori", name: "Udon Izakaya Edobori", city: "osaka", slot: "Tue Oct 27 · 11:00 walk-in · 5 people", dayIds: ["day05"], strength: "Walk-in", why: EDOBORI_LUNCH_NOTE, tabelogUrl: EDOBORI_TABELOG_URL, defaultStatus: "walk_in" },
  { id: "shibato", name: "Honke Shibato", city: "osaka", slot: "Tue Oct 27 lunch — skip", dayIds: ["day05"], strength: "Skip", why: SHIBATO_SKIP_NOTE, tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270102/27000005/", officialUrl: "http://www.shibato.net/", defaultStatus: "skip" },
  { id: "kura-dotonbori", name: "Kura Sushi Global Flagship Dotonbori", city: "osaka", slot: "Osaka idea · no date picked · 5 people", dayIds: [], strength: "Idea", why: KURA_NOTE },
  { id: "nakashou", name: "Unagi no Nakashou Namba", city: "osaka", slot: "Flexible Osaka meal", dayIds: ["day03", "day04"], strength: "Considering", why: "Easier Kansai-style unagi backup. Do not stack with Kitan or the Day 4 snack mission.", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270202/27150606/" },
  { id: "nakata", name: "Nikushou Nakata Honten", city: "osaka", slot: "Tue Oct 27 dinner — skip", dayIds: ["day05"], strength: "Skip", why: "Same night as On-yasai. Do not book. Yakiniku can still be a later evening if you want it.", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270202/27001305/", officialUrl: "https://nikusyo-nakata.jp/nanba_honten.html", defaultStatus: "skip" },
  { id: "onyasai-sennichimae", name: "Shabushabu On-yasai Sennichimae", city: "osaka", slot: "Tue Oct 27 · 20:00 · 5 people", dayIds: ["day05"], strength: "Booked", why: "Vegetable-forward shabu after Kobe. Seats only. Ebica {{copy:468119458}}. Shop 06-4396-8311. 難波3-4-13 味わいばしビル2F. Do not also book Nakata or Daibokujou.", tabelogUrl: "https://tabelog.com/osaka/A2701/A270202/27040112/", officialUrl: "https://map.reins.co.jp/onyasai/detail/643968311", defaultStatus: "booked", confirmation: "Ebica 468119458 · Tue Oct 27 20:00 · 5" },
  { id: "kani-jo", name: "Kani Kani Jo", city: "osaka", slot: "Mon Oct 26 dinner — skip", dayIds: ["day04"], strength: "Skip", why: "Crab is booked at Kani Doraku Kyoto. Keep Day 4 as Tenma walk-in.", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270202/27144240/", officialUrl: "https://www.tablecheck.com/en/shops/kanikanijo/reserve", defaultStatus: "skip" },
  { id: "endo", name: "Kyoto Gion Tempura Yasaka Endo", city: "kyoto", slot: "Thu Oct 29 · 13:30 lunch · 5 people", dayIds: ["day07"], strength: "Booked", why: "Booked by Mom. Gion course for exactly 5. Paul is not in this party. [who Paul is — needs confirmation]. Do not chase the number.", tabelogUrl: "https://tabelog.com/en/kyoto/A2601/A260301/26000592/", officialUrl: "https://www.gion-endo.com/", defaultStatus: "booked", confirmation: "Booked by Mom · Thu Oct 29 13:30 · Gion course · 5 · [Endo confirmation number — pending, do not chase]" },
  { id: "kani-doraku", name: "Kani Doraku Kyoto Honten", city: "kyoto", slot: "Fri Oct 30 · 18:00 · 5 people", dayIds: ["day08"], strength: "Booked", why: "HotPepper SE0767510. 光華 course ¥7,590, 9 dishes, horigotatsu non-smoking. After Arashiyama; walk from Hotel Monterey. Shop 075-211-0671. Phone on file is the hotel. Cancel by 2026-10-30 00:00.", tabelogUrl: "https://tabelog.com/en/kyoto/A2601/A260201/26011709/", officialUrl: "https://kanikyoto.owst.jp/", defaultStatus: "booked", confirmation: "SE0767510 · Fri Oct 30 18:00 · 5 · 光華 ¥7590" },
  { id: "kyoya", name: "Kyoya Kiyomizu Yanaginobamba Honke", city: "kyoto", slot: "Sat Oct 31 · 18:30 · seats only · 5 people", dayIds: ["day09"], strength: "Booked", why: KYOYA_NOTE, tabelogUrl: KYOYA_TABELOG_URL, defaultStatus: "booked", confirmation: "Tabelog FP4YF2QHPJ" },
  { id: "menami", name: "Menami", city: "kyoto", slot: "Sat Oct 31 dinner — skip", dayIds: ["day09"], strength: "Skip", why: MENAMI_SKIP_NOTE, tabelogUrl: "https://tabelog.com/kyoto/A2601/A260201/26001266/", officialUrl: "https://www.menami.jp/menu1", defaultStatus: "skip" },
  { id: "kinmata", name: "Kinmata", city: "kyoto", slot: "Sat Oct 31 dinner — skip", dayIds: ["day09"], strength: "Skip", why: KINMATA_SKIP_NOTE, tabelogUrl: "https://tabelog.com/en/kyoto/A2601/A260201/26000452/", officialUrl: "https://www.kinmata.com/en/", defaultStatus: "skip" },
  { id: "kanawa-ekie", name: "Kanawa ekie", city: "hiroshima", slot: "Mon Nov 2 · was 18:30 · 4 people", dayIds: ["day11"], strength: "Cancelled", why: "Cancelled. TableCheck WFSXPK is not a live booking. Nov 2 dinner is a walk-in at Reichan. Do not revive this booking.", officialUrl: "https://www.kanawa.co.jp/kanawaekie/1000", defaultStatus: "cancelled", confirmation: "Cancelled. TableCheck WFSXPK was cancelled." },
  { id: "reichan", name: "Reichan ekie Hiroshima", city: "hiroshima", slot: "Mon Nov 2 · early dinner · walk-in · 4 people", dayIds: ["day11"], strength: "Walk-in", why: "Chosen arrival dinner. Walk in. Do not reserve. This is the one Hiroshima okonomiyaki meal. About JPY 1,000–2,000 per person. Lunch stays in Himeji.", officialUrl: "https://www.o-reichan.jp/shop.htm" },
  { id: "suishin-main", name: "Suishin main store", city: "hiroshima", slot: "Tue Nov 3 · 18:00 · table only · 4 guests", dayIds: ["day12"], strength: "Booked", why: SUISHIN_MAIN_NOTE, officialUrl: SUISHIN_TABLECHECK_URL, defaultStatus: "booked", confirmation: "TableCheck XJCU9T · Accepted" },
  { id: "kanawa", name: "Oyster Ship Kanawa Seto", city: "hiroshima", slot: "Tue Nov 3 dinner idea — skip", dayIds: ["day12"], strength: "Skip", why: "Mom hates oysters. Do not replace the cancelled station booking with another full oyster meal.", tabelogUrl: "https://tabelog.com/hiroshima/A3401/A340116/34000041/", officialUrl: "https://www.kanawa.co.jp/en/seto", defaultStatus: "skip" },
  { id: "kani-shin", name: "Hiroshima Kani Shin", city: "hiroshima", slot: "Wed Nov 4 dinner — skip", dayIds: ["day13"], strength: "Skip", why: "Crab is booked at Kani Doraku Kyoto. Do not stack a second crab kaiseki.", tabelogUrl: "https://tabelog.com/en/hiroshima/A3401/A340114/34033069/", defaultStatus: "skip" },
  { id: "toyama-ginza", name: "Kaiten Toyama Sushi Ginza", city: "tokyo", slot: "Thu Nov 12 · walk in at 17:00 · 2 people", dayIds: ["day21"], strength: "Walk-in", why: TOYAMA_NOTE, defaultStatus: "walk_in" },
  { id: "manten", name: "Manten Sushi Nihonbashi", city: "tokyo", slot: "Thu Nov 12 dinner idea — not the plan", dayIds: ["day21"], strength: "Considering", why: "Not the Nov 12 dinner. The plan is a walk-in at Kaiten Toyama Sushi Ginza. Keep this only if you do not eat at Toyama.", tabelogUrl: "https://tabelog.com/en/tokyo/A1302/A130202/13166422/", officialUrl: "https://www.manten-sushi.com/" },
  { id: "imahan", name: "Ningyocho Imahan Main Store", city: "tokyo", slot: "Thu Nov 12 dinner idea — not the plan", dayIds: ["day21"], strength: "Considering", why: "Not the Nov 12 dinner. The plan is a walk-in at Kaiten Toyama Sushi Ginza. Imahan is in Ningyocho. It is not a few minutes from the hotel. The hotel is APA Nishishinjuku. Keep this only if you do not eat at Toyama.", tabelogUrl: "https://tabelog.com/en/tokyo/A1302/A130204/13003059/", officialUrl: "https://imahan-tokyo.com/official/" },
  { id: "setsugetsuka-meals", name: "Tokinoyu Setsugetsuka", city: "tokyo", slot: "Sun Nov 8–Wed Nov 11 · 3 nights · 2 adults", dayIds: ["day17", "day18", "day19"], strength: "Booked", why: SETSUGETSUKA_NOTE, officialUrl: "https://dormy-hotels.com/resort/hotels/setsugetsuka/", defaultStatus: "booked", confirmation: "Booking.com 6890781811" }
];

function geoDistanceMeters(a, b) {
  const toRad = (degrees) => degrees * Math.PI / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371000 * Math.asin(Math.min(1, Math.sqrt(h)));
}

function formatDistance(meters) {
  const walkMin = Math.max(1, Math.round(meters / 80));
  const distance = meters < 1000 ? `${Math.round(meters)} m` : `${(meters / 1000).toFixed(1)} km`;
  if (walkMin <= 20) return `${distance} · ~${walkMin} min walk`;
  return `${distance} straight-line · subway/taxi, not a walk`;
}

function placeCoordinates(name) {
  return window.PLACE_COORDINATES?.[name];
}

function parseDayIdsFromArea(area) {
  return [...(area || "").matchAll(/Day\s+(\d+)/g)].map((match) => `day${String(match[1]).padStart(2, "0")}`);
}

function foodPlaceDayIds(place) {
  if (place.slotDays?.length) return place.slotDays;
  return parseDayIdsFromArea(place.area);
}

function bookingForPlace(place) {
  return RESTAURANT_BOOKINGS.find((item) => item.name === place.name);
}

function defaultPartySize(booking) {
  if (state.reservations?.familyOf8Id === booking.id) return 8;
  if (booking.id === "setsugetsuka-meals") return 2;
  if (booking.city === "tokyo") {
    const onlyFinalTokyo = booking.dayIds.every((dayId) => ["day20", "day21"].includes(dayId));
    return onlyFinalTokyo ? 2 : 6;
  }
  if (booking.city === "hiroshima") return 4;
  if (booking.city === "osaka") return 5;
  if (booking.city === "kyoto") return 5;
  return 4;
}

function reservationRecord(booking) {
  const stored = state.reservations?.items?.[booking.id] || {};
  let status = stored.status || booking.defaultStatus || "open";
  let confirmation = stored.confirmation || booking.confirmation || "";
  const staleEndo = confirmation === "Booked · Thu Oct 29 13:30 · Gion course · 5 · confirmation number pending";
  if (booking.id === "endo" && (staleEndo || !confirmation.trim())) confirmation = booking.confirmation;
  let notes = stored.notes || booking.notes || "";
  if (booking.id === "kanawa-ekie") {
    status = "cancelled";
    confirmation = "Cancelled. TableCheck WFSXPK was cancelled.";
    notes = "Already cancelled. Do not treat this as a live booking.";
  }
  if (booking.id === "kinmata" || booking.id === "menami" || booking.id === "shibato") status = "skip";
  if (booking.id === "edobori") status = "walk_in";
  if (booking.id === "toyama-ginza") status = "walk_in";
  if (booking.id === "kura-dotonbori") status = "open";
  if (booking.id === "kyoya") {
    status = "booked";
    confirmation = "Tabelog FP4YF2QHPJ";
  }
  if (booking.id === "suishin-main") {
    status = "booked";
    confirmation = "TableCheck XJCU9T · Accepted";
  }
  if (booking.id === "setsugetsuka-meals") {
    status = "booked";
    confirmation = "Booking.com 6890781811";
  }
  return { status, confirmation, notes };
}

function setReservationRecord(bookingId, patch) {
  state.reservations = state.reservations || { familyOf8Id: "", items: {} };
  state.reservations.items[bookingId] = { ...reservationRecord(RESTAURANT_BOOKINGS.find((item) => item.id === bookingId)), ...patch };
  saveState();
}

const ATTENTION_LABEL = {
  booked: "Booked",
  "needs-confirmation": "Needs confirmation",
  "not-booked": "Not booked",
  decision: "Decision needed",
  done: "Done",
  cancelled: "Cancelled",
  info: "Noted"
};

const OPEN_MARKERS = new Set(["needs-confirmation", "not-booked", "decision"]);

const DAY_PARTY = {
  day02: "5. This is the Osaka default, including parents.",
  day03: "5. Sankei Club is booked for 5.",
  day04: "5.",
  day05: "5. On-yasai is booked for 5.",
  day06: "5.",
  day07: "5 at Endo. Paul is not in this party. [who Paul is — needs confirmation].",
  day08: "5. Kani Doraku is booked for 5.",
  day09: "5.",
  day10: "5.",
  day11: "4 in Hiroshima.",
  day12: "4.",
  day13: "4.",
  day14: "6 while parents are in Tokyo.",
  day15: "6.",
  day16: "6 in the daytime. The evening headcount is separate.",
  day17: "2 at Setsugetsuka. That is Mai and Brian. Parents stay in Tokyo.",
  day18: "2.",
  day19: "2 on the hike. Parents depart Haneda today.",
  day20: "2.",
  day21: "2. Mom and Dad left Haneda on Nov 10."
};

const DAY_MUST_DOS = {
  day02: [
    { marker: "needs-confirmation", label: "Flight record", detail: FLIGHT_NOTE },
    { marker: "not-booked", label: "Shinkansen Shinagawa to Shin-Osaka", detail: SHINKANSEN_OCT24 },
    { marker: "needs-confirmation", label: "Luggage", detail: "At Narita, choose forward or carry. [luggage service and deadline — needs confirmation]." },
    { marker: "booked", label: "Hotel Cordia Osaka Hommachi", detail: "Check in after the train. Call the hotel if you will arrive late. Do not add Dotonbori. Do not add kaiten sushi. Kura Sushi Dotonbori has no date." }
  ],
  day03: [
    { marker: "info", label: "Route limit", detail: "Do the castle, one Nippombashi lunch, Den Den, and Sankei Club. Do not add a fourth district." }
  ],
  day04: [
    { marker: "info", label: "Hotel reset", detail: "Return to Hotel Cordia Osaka Hommachi between 15:00 and 17:00. Rest. Stop eating. The hotel is in Hommachi, not Namba." },
    { marker: "info", label: "Tenma dinner", detail: "Go to Tenma after the reset. Share plates at one izakaya. This dinner is a walk-in plan, not a reservation." }
  ],
  day05: [
    { marker: "needs-confirmation", label: "Nunobiki hours", detail: "Leave from Hotel Cordia Osaka Hommachi. Allow 60–75 minutes each way via Umeda to Shin-Kobe. [ropeway and garden hours — needs confirmation]." },
    { marker: "info", label: "No Kobe dinner", detail: "Do not add a Kobe dinner. Dinner is On-yasai in Osaka at 20:00." }
  ],
  day06: [
    { marker: "info", label: "Luggage", detail: "Carry the big bags to Kintetsu-Nara Station. Store them in the coin lockers by the West ticket gate. The room has 23 extra-large lockers. Pay about ¥800 to ¥1,500 with coins or an IC card. Take a photo of the locker number. If the lockers are full, use the Tourist Information Centre at Exit 3, 1F. It holds bags from 09:00 to 16:00 and takes the last bag at 14:00. Collect the bags before the Kintetsu train to Kyoto." },
    { marker: "needs-confirmation", label: "Fresh yomogi mochi", detail: "Buy it in Nara before the train to Kyoto. Walk-in only. No reservation number. [yomogi mochi shop — needs confirmation]." },
    { marker: "info", label: "Not To-ji", detail: "Do not go to To-ji today. To-ji is an optional dawn stop on Day 11 only. Check in at Hotel Monterey Kyoto." }
  ],
  day07: [
    { marker: "needs-confirmation", label: "Parents at Kiyomizu", detail: "Meet around 10:30. [parents meeting point — needs confirmation]." }
  ],
  day08: [
    { marker: "needs-confirmation", label: "Togetsukyo meetup", detail: "Meet at the bridge in the morning. [Togetsukyo meeting point — needs confirmation]." }
  ],
  day09: [
    { marker: "needs-confirmation", label: "Nijo tickets", detail: "Enter at 08:45. [Nijo ticket type and where to buy it — needs confirmation]." },
    { marker: "needs-confirmation", label: "Dad's rejoin point", detail: "[Dad's rest/rejoin point — needs confirmation]." }
  ],
  day10: [
    { marker: "needs-confirmation", label: "Ascent", detail: "Confirm the live cable, ropeway, and bus times at Demachiyanagi before you board. [Eizan/Yase approach — needs confirmation]. [Sakamoto-side or direct-bus fallback — needs confirmation]." },
    { marker: "needs-confirmation", label: "Forest walk", detail: "[forest route — needs confirmation]. Do not add a second trail on the day." },
    { marker: "needs-confirmation", label: "Descent point", detail: "Meet between 15:15 and 16:00. [descent transport point — needs confirmation]." }
  ],
  day11: [
    { marker: "not-booked", label: "Shinkansen Kyoto to Hiroshima", detail: SHINKANSEN_NOV2 },
    { marker: "needs-confirmation", label: "Luggage", detail: "[luggage forwarding service and deadline — needs confirmation]." },
    { marker: "booked", label: "Himeji Castle and Koko-en", detail: HIMEJI_TICKET_NOTE },
    { marker: "info", label: "To-ji", detail: "To-ji is optional and only at dawn. Use it only if someone is already awake and the train still leaves on time." },
    { marker: "info", label: "Ekiben scores", detail: "Score each box on five lines: packaging, regional character, variety, flavor, and train happiness. Write the scores in today's note. There is no separate scorecard screen." },
    { marker: "info", label: "Reichan dinner", detail: REICHAN_DINNER_NOTE }
  ],
  day12: [
    { marker: "info", label: "No extra sights", detail: "Do the museum first. Take a quiet break. See the Dome as the light softens. Do not add Shukkeien." },
    { marker: "info", label: "Weather swap", detail: HIROSHIMA_WEATHER_SWAP }
  ],
  day13: [
    { marker: "info", label: "Miyajima day", detail: "Do not reserve the ropeway. Do not reserve Fujitaya. The backup bento at Ueno can be reserved by phone." },
    { marker: "info", label: "Weather swap", detail: HIROSHIMA_WEATHER_SWAP }
  ],
  day14: [
    { marker: "not-booked", label: "Shinkansen Hiroshima to Tokyo", detail: SHINKANSEN_NOV5 },
    { marker: "booked", label: "APA Nishishinjuku", detail: APA_NOTE },
    { marker: "info", label: "Ekiben scores", detail: "Score each box on packaging, regional character, variety, flavor, and train happiness. Write the scores in today's note." }
  ],
  day15: [
    { marker: "info", label: "No timed ticket", detail: "Walk Inokashira Park. Pause at a café. Browse one Kichijoji street. Do not add a timed attraction." }
  ],
  day16: [
    { marker: "needs-confirmation", label: "Leave Shibuya", detail: "Leave by 15:30. [Akko meeting point and time — needs confirmation]. The pin is provisional Chofu Station. [whether Yoshi joins — needs confirmation]. [who Yoshi is — needs confirmation]." }
  ],
  day17: [
    { marker: "booked", label: "Outbound Romancecar", detail: ROMANCECAR_OUT_NOTE },
    { marker: "needs-confirmation", label: "Large bags", detail: `Leave the large bags at the APA Nishishinjuku front desk before you go to Shinjuku. ${APA_LUGGAGE_STATUS}` }
  ],
  day18: [
    { marker: "not-booked", label: "05:30 taxi", detail: "Ask Setsugetsuka to book a taxi for 05:30 to Hakone Shrine. [05:30 taxi prebook — not booked]. Breakfast is included. You leave before breakfast. Message the hotel through the Booking.com app. Ask for breakfast before the taxi. Do not buy another breakfast." }
  ],
  day19: [
    { marker: "needs-confirmation", label: "Trailhead bus", detail: "Take the sightseeing bus from Gora to Sengoku. [bus stop: Kintoki Shrine Entrance or Kintoki-Tozanguchi — needs confirmation]." },
    { marker: "needs-confirmation", label: "Turnaround", detail: "Descend on time even if Fuji is hidden. [turnaround time — needs confirmation]." },
    { marker: "needs-confirmation", label: "Parents at Haneda", detail: PARENTS_HANEDA_NOTE }
  ],
  day20: [
    { marker: "not-booked", label: "Return Romancecar", detail: ROMANCECAR_BACK_NOTE },
    { marker: "booked", label: "APA return stay", detail: APA_NOTE },
    { marker: "needs-confirmation", label: "Asakusa Engei Hall", detail: "Check the Nov 11 bill. [Asakusa bill and stage times — needs confirmation]. Go only after the luggage is at the hotel." }
  ],
  day21: [
    { marker: "booked", label: "teamLab Borderless", detail: TEAMLAB_NOTE },
    { marker: "info", label: "Airport tonight", detail: AIRPORT_TONIGHT_NOTE },
    { marker: "needs-confirmation", label: "Melon bread", detail: "[melon-bread shop and branch — needs confirmation]. The Asakusabashi pin is a placeholder." },
    { marker: "info", label: "Nov 13 flight", detail: "There is no Nov 13 day page. BA4609 is operated by JAL. It leaves HND at 01:00 on Fri Nov 13. It arrives at LHR at 06:25. Then IB3645 is operated by BA. It leaves LHR at 08:45. It arrives at MAD at 12:15. The booking code is {{copy:A3II92}}. Be at the airport by about 22:00. There is no hotel on the night of Nov 12." }
  ]
};

const TRIP_OPEN_ITEMS = [
  { scope: "Oct 23", marker: "needs-confirmation", label: "Outbound travel day", detail: "There is no Oct 23 day page. Outbound JL7088 is operated by Iberia as IB281. It leaves MAD at 12:30 on Fri Oct 23. It arrives at NRT at 09:30 on Sat Oct 24. The flight is nonstop. The booking code is {{copy:A3II92}}. Iberia may change this MAD–NRT schedule after Oct 25. Check for a schedule-change notice before travel." },
];

function escapeAndHighlight(value) {
  return escapeHtml(value).replace(/\[([^\]]+)\]/g, '<span class="confirm-placeholder">[$1]</span>');
}

function copyCodeButton(code) {
  const safe = escapeHtml(code);
  return `<span class="confirm-code"><span class="confirm-code-value">${safe}</span><button type="button" class="copy-code" data-copy-code="${safe}" aria-live="polite" aria-label="Copy confirmation number ${safe}">Copy</button></span>`;
}

function guideAnchor(kind, href, label) {
  const className = kind === "btn" ? "guide-action" : "guide-link";
  return `<a class="${className}" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
}

function highlightPlaceholders(value) {
  const source = String(value ?? "");
  const re = /\{\{(copy|btn|link):([^}]+)\}\}/g;
  let html = "";
  let last = 0;
  let match;
  while ((match = re.exec(source))) {
    html += escapeAndHighlight(source.slice(last, match.index));
    const kind = match[1];
    const payload = match[2];
    if (kind === "copy") {
      html += copyCodeButton(payload);
    } else {
      const splitAt = payload.indexOf("|");
      const href = splitAt === -1 ? payload : payload.slice(0, splitAt);
      const label = splitAt === -1 ? "Open link" : payload.slice(splitAt + 1);
      html += href.startsWith("https://") ? guideAnchor(kind, href, label) : escapeAndHighlight(label);
    }
    last = match.index + match[0].length;
  }
  html += escapeAndHighlight(source.slice(last));
  return html;
}

function summaryParts(source) {
  const text = String(source ?? "").trim();
  if (!text) return { lead: "", rest: "" };
  const sentences = text.split(/(?<=\.)\s+/);
  let start = 0;
  while (start < sentences.length - 1 && /^(booked|not booked|skipped|decided|chosen)\.?$/i.test(sentences[start].replace(/\{\{[^}]+\}\}/g, "").trim())) start += 1;
  let lead = sentences.slice(0, start + 1).join(" ");
  let rest = sentences.slice(start + 1).join(" ").trim();
  if (!rest && lead.length > 220) {
    const cut = lead.slice(0, 180).replace(/\s+\S*$/, "");
    rest = lead.slice(cut.length).trim();
    lead = cut;
  }
  return { lead, rest };
}

function collapsedNoteHtml(source, moreLabel = "More") {
  const { lead, rest } = summaryParts(source);
  if (!rest) return highlightPlaceholders(lead);
  return `<span class="note-lead">${highlightPlaceholders(lead)}</span> <details class="note-more"><summary>${escapeHtml(moreLabel)}</summary><div class="note-rest">${highlightPlaceholders(rest)}</div></details>`;
}

function renderGuideHtml(value) {
  const source = String(value ?? "");
  const label = /BOOKED|NOT BOOKED|CHOSEN/.test(source) ? "Details" : "More";
  return collapsedNoteHtml(source, label);
}

function plainGuideText(value) {
  return String(value || "")
    .replace(/\{\{copy:([^}]+)\}\}/g, "$1")
    .replace(/\{\{(?:btn|link):([^|}]+)\|([^}]+)\}\}/g, "$2 ($1)");
}

function copyTextWithFallback(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.left = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus();
  area.select();
  area.setSelectionRange(0, area.value.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

function copyTextToClipboard(text) {
  const clipboard = navigator.clipboard;
  if (clipboard && typeof clipboard.writeText === "function") {
    return clipboard.writeText(text).then(() => true).catch(() => copyTextWithFallback(text));
  }
  return Promise.resolve(copyTextWithFallback(text));
}

document.addEventListener("click", (event) => {
  const openDay = event.target.closest?.("button[data-open-day]");
  if (openDay) {
    const found = findDay(openDay.dataset.openDay);
    if (found) showDay(found.day);
    return;
  }
  const ask = event.target.closest?.("button[data-ask-day]");
  if (ask) {
    const found = findDay(ask.dataset.askDay);
    if (!found) return;
    const cityName = tripData[found.cityId]?.name || "";
    copyTextToClipboard(grokPrompt(found.day, cityName)).then((ok) => { if (ok) showGrokToast(); });
    return;
  }
  const button = event.target.closest?.("button[data-copy-code]");
  if (!button) return;
  const code = button.dataset.copyCode || "";
  if (!code) return;
  copyTextToClipboard(code).then((ok) => {
    if (!ok) return;
    const previous = "Copy";
    button.textContent = "Copied";
    button.classList.add("is-copied");
    window.clearTimeout(button._copyTimer);
    button._copyTimer = window.setTimeout(() => {
      button.textContent = previous;
      button.classList.remove("is-copied");
    }, 1500);
  });
});

function attentionFlag(marker) {
  const label = ATTENTION_LABEL[marker] || "Needs confirmation";
  return `<span class="confirm-flag confirm-flag-${marker}">${escapeHtml(label)}</span>`;
}

function bookingAttention(booking, record) {
  if (record.status === "skip") return null;
  if (record.status === "cancelled") return ["cancelled"];
  if (record.status === "cancel_needed") return ["decision"];
  if (record.status === "booked") {
    const text = `${record.confirmation || ""} ${booking.confirmation || ""}`;
    const pending = /pending|needs confirmation|not booked/i.test(text) || !String(record.confirmation || booking.confirmation || "").trim();
    return pending ? ["booked", "needs-confirmation"] : ["booked"];
  }
  if (record.status === "chosen") return ["not-booked"];
  if (record.status === "walk_in") return ["info"];
  if (booking.id === "kura-dotonbori") return ["info"];
  return ["needs-confirmation"];
}

const MUST_DO_DECISION_BOOKINGS = new Set();

function bookingMustDo(booking) {
  const record = reservationRecord(booking);
  if (record.status === "skip" || record.status === "cancelled") return null;
  const promoted = record.status === "booked" || record.status === "chosen" || record.status === "walk_in" || record.status === "cancel_needed" || MUST_DO_DECISION_BOOKINGS.has(booking.id);
  if (!promoted) return null;
  const markers = bookingAttention(booking, record);
  if (!markers) return null;
  const party = defaultPartySize(booking);
  const confirm = record.confirmation || booking.confirmation || "[confirmation number — needs confirmation]";
  let detail = `${booking.slot}. Party of ${party}. ${confirm}.`;
  if (booking.id === "endo") detail = `Be there at 13:30. Party of 5. Booked by Mom. ${confirm}.`;
  if (booking.id === "edobori") {
    return { id: "booking-edobori", markers: ["info"], marker: "info", label: booking.name, detail: EDOBORI_LUNCH_NOTE };
  }
  if (booking.id === "kura-dotonbori") detail = KURA_NOTE;
  if (booking.id === "toyama-ginza") detail = TOYAMA_NOTE;
  if (booking.id === "kyoya") detail = KYOYA_NOTE;
  if (booking.id === "suishin-main") detail = SUISHIN_MAIN_NOTE;
  if (booking.id === "setsugetsuka-meals") detail = SETSUGETSUKA_NOTE;
  const marker = markers.find((item) => OPEN_MARKERS.has(item)) || markers[0];
  return { id: `booking-${booking.id}`, markers, marker, label: booking.name, detail };
}

function mustDoItems(dayId) {
  const party = DAY_PARTY[dayId];
  const partyMarker = party && /needs confirmation|not booked/i.test(party) ? "needs-confirmation" : "info";
  const partyItem = party ? [{ id: `${dayId}-party`, marker: partyMarker, markers: [partyMarker], label: "Headcount", detail: party }] : [];
  const staticItems = (DAY_MUST_DOS[dayId] || []).map((item, index) => ({
    id: `${dayId}-must-${index}`,
    ...item,
    markers: item.markers || [item.marker]
  }));
  const bookings = RESTAURANT_BOOKINGS.filter((booking) => booking.dayIds.includes(dayId)).map(bookingMustDo).filter(Boolean);
  const rank = { "not-booked": 0, decision: 1, "needs-confirmation": 2, booked: 3, info: 4, done: 5 };
  return [...partyItem, ...bookings, ...staticItems].sort((a, b) => (rank[a.marker] ?? 9) - (rank[b.marker] ?? 9));
}

function itemIsOpen(item) {
  return (item.markers || [item.marker]).some((marker) => OPEN_MARKERS.has(marker));
}

function openMustDos(dayId) {
  return mustDoItems(dayId).filter(itemIsOpen);
}

function openItemNoteKey(detail) {
  return String(detail || "").replace(/\s+/g, " ").trim();
}

function openItems() {
  const items = [];
  const byNote = new Map();
  const add = (item) => {
    const noteKey = openItemNoteKey(item.detail);
    const existing = noteKey ? byNote.get(noteKey) : null;
    if (existing) {
      existing.dayIds = [...new Set([...existing.dayIds, ...(item.dayIds || [])])];
      return existing;
    }
    const row = {
      id: item.id,
      group: item.group,
      label: item.label,
      when: item.when || "",
      detail: item.detail,
      dayIds: [...new Set(item.dayIds || [])]
    };
    items.push(row);
    if (noteKey) byNote.set(noteKey, row);
    return row;
  };
  RESERVATION_COUNTDOWN.forEach((item) => {
    if (item.attention !== "not-booked" && item.attention !== "needs-confirmation") return;
    add({
      id: item.id,
      group: item.attention === "not-booked" ? "to-book" : "awaiting",
      label: item.name,
      when: item.target,
      detail: item.note,
      dayIds: COUNTDOWN_DAY_IDS[item.id] || []
    });
  });
  Object.values(tripData).forEach((city) => {
    city.days.forEach((day) => {
      mustDoItems(day.id).forEach((item) => {
        const markers = item.markers || [item.marker];
        const toBook = markers.includes("not-booked");
        const awaiting = markers.includes("needs-confirmation") || markers.includes("decision");
        if (!toBook && !awaiting) return;
        add({
          id: item.id,
          group: toBook ? "to-book" : "awaiting",
          label: item.label,
          when: day.short,
          detail: item.detail,
          dayIds: [day.id]
        });
      });
    });
  });
  TRIP_OPEN_ITEMS.forEach((item, index) => {
    add({
      id: item.id || `trip-open-${index}`,
      group: item.marker === "not-booked" ? "to-book" : "awaiting",
      label: item.label,
      when: item.scope,
      detail: item.detail,
      dayIds: item.dayIds || []
    });
  });
  return items;
}

function renderDayOpenItems(day) {
  const items = openMustDos(day.id);
  if (!items.length) return null;
  const details = document.createElement("details");
  details.className = "day-open-items";
  details.innerHTML = `
    <summary>Open items for this day (${items.length})</summary>
    <ul>
      ${items.map((item) => `
        <li>
          <strong>${escapeHtml(item.label)}</strong>
          <p>${collapsedNoteHtml(item.detail, "Details")}</p>
        </li>
      `).join("")}
    </ul>
  `;
  return details;
}

function openItemDayButtons(dayIds) {
  return dayIds.map((dayId) => {
    const found = findDay(dayId);
    if (!found) return "";
    return `<button type="button" class="open-item-day" data-open-day="${escapeHtml(dayId)}">${escapeHtml(found.day.short)}</button>`;
  }).join("");
}

function renderOpenConfirmations() {
  const list = document.querySelector("#openConfirmationsList");
  const intro = document.querySelector("#openConfirmationsIntro");
  if (!list) return;
  const items = openItems();
  if (intro) {
    intro.textContent = items.length
      ? "To book and awaiting confirmation are listed once. Open the day for that item's details."
      : "Nothing on this list is still open.";
  }
  const groups = [
    ["to-book", "To book"],
    ["awaiting", "Awaiting confirmation"]
  ];
  list.innerHTML = groups.map(([groupId, title]) => {
    const rows = items.filter((item) => item.group === groupId);
    if (!rows.length) return "";
    return `
      <li class="open-confirmation-group">
        <h3>${title}</h3>
        <ul>
          ${rows.map((item) => `
            <li>
              <div class="must-do-item-top">
                <strong>${escapeHtml(item.label)}</strong>
                ${openItemDayButtons(item.dayIds)}
              </div>
              <p class="ticket-meta">${escapeHtml(item.when)}</p>
              <p>${collapsedNoteHtml(item.detail, "Details")}</p>
            </li>
          `).join("")}
        </ul>
      </li>
    `;
  }).join("");
}

function hotelDistanceLine(place, cityId) {
  const hotelName = CITY_HOTEL_BY_CITY[cityId];
  const hotel = placeCoordinates(hotelName);
  if (!hotel || !place.coordinates) return "";
  return `${hotelName.split(" ").slice(0, 2).join(" ")} · ${formatDistance(geoDistanceMeters(hotel, place.coordinates))}`;
}

function sightDistanceLines(place, cityId) {
  const dayIds = foodPlaceDayIds(place);
  const city = tripData[cityId];
  if (!city) return [];
  const days = dayIds.length ? city.days.filter((day) => dayIds.includes(day.id)) : city.days;
  return days.map((day) => {
    const sights = day.places.filter((name) => !HOTEL_PLACES.has(name) && placeCoordinates(name));
    let best = null;
    sights.forEach((name) => {
      const meters = geoDistanceMeters(place.coordinates, placeCoordinates(name));
      if (!best || meters < best.meters) best = { name, meters };
    });
    if (!best) return null;
    const dateLabel = day.date?.slice(5).replace("-", "/") || day.id;
    return `${dateLabel} · ${best.name} · ${formatDistance(best.meters)}`;
  }).filter(Boolean).slice(0, 3);
}

const CITY_FOOD_MAP_PROTOTYPE = {
  osaka: [
    { name: "7-Eleven Osaka Kawaramachi 4-chome", type: "conbini", category: "conbini", typeLabel: "Closest 7-Eleven", area: "Hotel base · ~160 m direct", price: "¥", note: "The nearest mapped 7-Eleven candidate, north of the hotel: check it first for breakfast, drinks and Mai's packaged melonpan baseline.", coordinates: [34.6859309, 135.4991197] },
    { name: "FamilyMart Hommachi 4-chome", type: "conbini", category: "conbini", typeLabel: "Closest FamilyMart", area: "Hotel base · ~210 m direct", price: "¥", note: "East of the hotel near Hommachi Station. The current store listing includes an eat-in area, ATM, Wi-Fi and copying.", coordinates: [34.683325, 135.5001866], officialUrl: "https://as.chizumaru.com/famima/detailMap?accmd=0&account=famima&bid=37995" },
    { name: "Lawson Nishihonmachi 1-chome", type: "conbini", category: "conbini", typeLabel: "Closest Lawson", area: "Hotel base · ~265 m direct", price: "¥", note: "West across Midosuji. Use it for a Lawson breakfast comparison or an alternate ATM/snack run.", coordinates: [34.6823844, 135.4974355], officialUrl: "https://yamabuki-lawson.co.jp/lawson17/" },
    { name: "Café itutu", type: "cafe", category: "cafe", typeLabel: "Zero-effort café", area: "Inside Hotel Cordia", price: "¥¥", note: "The hotel's own first-floor breakfast, lunch and tea lounge. Best fallback when arrival energy or weather says stay put.", coordinates: [34.684601, 135.498514], officialUrl: "https://cordia-osaka.com/hommachi/en/?locale=en&tripla_booking_widget_open=search" },
    { name: "Ourlog Coffee Hommachi", type: "cafe", category: "cafe", typeLabel: "Near-hotel coffee", area: "Hotel base · Awajimachi", price: "¥¥", note: "Independent specialty coffee roughly a few minutes north of the hotel; a better coffee-first option than making a sightseeing detour.", coordinates: [34.6867532, 135.4982412] },
    { name: "JTRRD cafe & Season0", type: "cafe", category: "cafe", typeLabel: "Near-hotel café", area: "Hotel base · Utsubohommachi", price: "¥¥", note: "Colorful smoothies and a sit-down pause northwest of the hotel. Choose this for cute presentation; choose Ourlog for coffee.", coordinates: [34.6861556, 135.4972583] },
    { name: "R Baker Osaka Castle Park", type: "cafe", category: "cafe", typeLabel: "Castle breakfast", area: "Day 3 · Osaka Castle", price: "¥", note: "A bakery-café inside the park near Osakajokoen Station. Useful before the castle or as the parents' seated rest stop.", coordinates: [34.68842, 135.53305], officialUrl: "https://r-baker.com/shops/" },
    { name: "LiLo Coffee Kissa", type: "cafe", category: "cafe", typeLabel: "Shinsaibashi coffee", area: "Day 4 · Shinsaibashi", price: "¥¥", note: "Retro kissaten atmosphere with serious specialty coffee, close to Daimaru and Amerikamura. This is the intentional café, not another snack mission.", coordinates: [34.6710513, 135.5010541], officialUrl: "https://coffee.liloinveve.com/pages/lilo-coffee-kissa-1" },
    { name: "Sennariya Coffee", type: "cafe", category: "cafe", typeLabel: "Historic kissaten", area: "Day 3 · Shinsekai", price: "¥", note: "Founded in 1948 and identifies itself as the birthplace of mixed juice. A strong non-alcoholic pause before the Shinsekai evening.", coordinates: [34.65077, 135.50476], officialUrl: "https://www.sennariya-coffee.jp/" },
    { name: "Sanwa Coffee Works Tenma", type: "cafe", category: "cafe", typeLabel: "Tenma coffee", area: "Day 4 · Tenma", price: "¥¥", note: "Long-running roastery café near the Tenjinbashisuji route. Use only before dinner; after the hotel reset, protect appetite for the Tenma finish.", coordinates: [34.7082518, 135.5124233], officialUrl: "https://store.sanwacoffeeworks.com/pages/about-scw" },
    { name: "CAFE ANNON Namba Main Store", type: "sweet", category: "dessert", typeLabel: "Soufflé dessert", area: "Day 3 · Namba / Den Den", price: "¥¥", note: "A cute soufflé-pancake option near the Namba end of Den Den Town. Treat it as a dessert stop; queues can make it an easy skip.", coordinates: [34.66383, 135.50345] },
    { name: "Uncle Rikuro's Namba Main Store", type: "sweet", category: "cheesecake", typeLabel: "Osaka cheesecake", area: "Day 2/3 · Namba · Ebisubashi-suji", price: "¥¥", note: "Osaka's famous warm, jiggly cheesecake with raisins at the base. One cake is made for sharing, so use this as the group's signature Osaka sweet rather than adding another individual dessert stop.", coordinates: [34.6663213, 135.5005897], officialUrl: "https://www.rikuro.co.jp/shoplist/134.html" },
    { name: "ÉCHIRÉ Marché au Beurre", type: "sweet", category: "bakery", typeLabel: "French butter bakery · Umeda", area: "Hankyu Umeda Main Store · B2F", price: "¥¥¥", note: "Mai's Umeda butter-and-pastry pick inside the depachika. Treat the branch-limited items as a bonus, not a queue obligation.", coordinates: [34.70272, 135.49815], officialUrl: "https://website.hankyu-dept.co.jp/fl/english/honten/store/floorb2.html" },
    { name: "Naruto Taiyaki Honpo Sonezaki", type: "sweet", category: "taiyaki", typeLabel: "Taiyaki · Umeda", area: "Day 5 · Sonezaki · Higashi-Umeda", price: "¥", note: "Walk-in only; no reservation. Grab takeaway ~12:15 on the Umeda pass toward Kobe after lunch. Open 10:00–23:00. Do not make a separate north-Osaka run.", coordinates: [34.69924, 135.50055], officialUrl: "https://www.taiyaki.co.jp/shop/", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270101/27090332/", slotDays: ["day05"], reserve: "no" },
    { name: "TruffleBAKERY Osaka Store", type: "sweet", category: "bakery", typeLabel: "Truffle salt bread · Nakazakicho", area: "Nakazakicho · north of Umeda", price: "¥¥", note: "The Nakazakicho bakery known for white-truffle salt bread. It is an intentional north-Osaka stop, so pair it with Umeda rather than the Namba sightseeing arc.", coordinates: [34.7077497, 135.5067993], officialUrl: "https://www.truffle-bakery.jp/" },
    { name: "Takoyaki Doraku Wanaka Sennichimae", type: "restaurant", category: "takoyaki", typeLabel: "Takoyaki checklist", area: "Day 3 · Namba / Den Den", price: "¥", note: "The famous Sennichimae main shop. Share one order on the Den Den route so takoyaki stays a snack, not the seated lunch.", coordinates: [34.6652095, 135.5034015], officialUrl: "https://takoyaki-wanaka.com/en/" },
    { name: "551 HORAI Main Store", type: "restaurant", category: "butaman", typeLabel: "Butaman · Osaka pork bun", area: "Day 2/3 · Namba · Ebisubashi-suji", price: "¥", note: "The route-friendly flagship for a hot Osaka pork bun. Buy one or two downstairs to share as a snack; the upper floors are a full restaurant, but there is no need to turn this into another meal.", coordinates: [34.666438, 135.4991023], officialUrl: "https://www.551horai.co.jp/shop/list/13/" },
    { name: "Chitose Bekkan", type: "restaurant", category: "nikusui", typeLabel: "Nikusui · Osaka beef soup", area: "Day 3 · Namba Grand Kagetsu", price: "¥¥", note: "The easier itinerary fit for Osaka-born nikusui: beef, soft egg and dashi without noodles. It sits inside Namba Grand Kagetsu and stays open later than the tiny original shop, though it can close when the dashi sells out.", coordinates: [34.6656996, 135.5036018], officialUrl: "https://www.chitose-nikusui.com/" },
    { name: "Okonomiyaki Mizuno", type: "restaurant", category: "okonomiyaki", typeLabel: "Okonomiyaki checklist", area: "Dotonbori · not on Day 2", price: "¥¥", note: "A Dotonbori institution operating since 1945. Day 2 does not go to Dotonbori. Use this pin only if you add Dotonbori on a later Osaka day.", coordinates: [34.6684527, 135.5030691], officialUrl: "https://www.mizuno-osaka.com/" },
    { name: "Chibo Dotonbori Building", type: "restaurant", category: "okonomiyaki", typeLabel: "Okonomiyaki · wife's pick", area: "Dotonbori · not on Day 2", price: "¥¥", note: "The multi-floor Dotonbori flagship. Day 2 does not go to Dotonbori. Choose Chibo or Mizuno on a later day, not both, and not on arrival night.", coordinates: [34.6688364, 135.5039025], officialUrl: "https://www.chibo.com/" },
    { name: "Kushikatsu Daruma Shinsekai Main Store", type: "restaurant", category: "kushikatsu", typeLabel: "Kushikatsu checklist", area: "Day 3 · Shinsekai", price: "¥¥", note: "The classic specialist in the planned evening neighborhood. Walk-in only. Day 3's reserved table is Sankei Club, not Daruma.", coordinates: [34.65208, 135.50616], officialUrl: "https://www.kushikatu-daruma.com/location/" },
    { name: "Shinsekai Kushikatsu Okonomi Sankei Club", type: "restaurant", category: "kushikatsu", typeLabel: "Kushikatsu · booked", area: "Day 3 · Shinsekai / Janjan Yokocho", price: "¥¥", note: "Booked Sun Oct 25 at 17:00 for 5, seats only. Resty 468118574. Address 恵美須東3-2-17. Shop 06-7777-7125.", coordinates: [34.65155, 135.50535], officialUrl: "https://shinsekai-sankeiclub.jp/shinsekai/", tabelogUrl: "https://tabelog.com/osaka/A2701/A270206/27150625/", slotDays: ["day03"], reserve: "yes" },
    { name: "Fukutaro Honten", type: "restaurant", category: "okonomiyaki", typeLabel: "Negiyaki checklist", area: "Day 3/4 · Sennichimae", price: "¥¥", note: "Known for both negiyaki and okonomiyaki near Kuromon and Den Den. Best checklist backup when Mizuno's queue or Dotonbori timing does not work.", coordinates: [34.6655928, 135.5045307], officialUrl: "https://2951.jp/" },
    { name: "Yaki Yaki Haru no Hana", type: "restaurant", typeLabel: "Okonomiyaki · video pick", area: "Kyomachibori · west of hotel", price: "¥¥¥", note: "The original video pick and reservable, but inconvenient from the Namba sightseeing arc. Keep it only if this specific restaurant matters more than easy routing.", coordinates: [34.6887, 135.4918], officialUrl: "http://www.haru-no-hana.com/" },
    { name: "Ajinoya Honten", type: "restaurant", typeLabel: "Okonomiyaki · classic", area: "Day 2/3 · Namba", price: "¥¥", note: "Classic Namba choice with a light, cabbage-forward style. Strong option, but plan for a queue or check its current advance-booking rules.", coordinates: [34.66665, 135.50055], officialUrl: "https://ajinoya-okonomiyaki.com/" },
    { name: "Okonomiyaki AT THE 21 Namba", type: "restaurant", typeLabel: "Okonomiyaki · reservable", area: "Day 3/4 · Namba Sennichimae", price: "¥¥", note: "The reservation-friendly okonomiyaki alternative near Kuromon and Den Den. A practical group choice when famous walk-in queues are unappealing.", coordinates: [34.66472, 135.50535], officialUrl: "https://tabelog.com/en/osaka/A2701/A270202/27136557/" },
    { name: "Tako no Tetsu KITTE Osaka", type: "restaurant", typeLabel: "Takoyaki · cook it yourself", area: "Umeda · intentional detour", price: "¥¥", note: "Cook-it-yourself takoyaki and the best group-activity version. Use only when already in Umeda; it does not fit the current south-Osaka food route naturally.", coordinates: [34.70085, 135.49345], officialUrl: "http://takonotetsu.co.jp/" },
    { name: "Aizuya Namba Walk", type: "restaurant", typeLabel: "Takoyaki · historical style", area: "Day 2/3 · Namba Walk", price: "¥", note: "Small, sauce-free original-style takoyaki plus rajio-yaki. The historical contrast makes this more useful than simply repeating another sauced order.", coordinates: [34.66705, 135.50485], officialUrl: "https://walk.osaka-chikagai.jp/shopguide/572" },
    { name: "Takoya Dotonbori Kukuru Honten", type: "restaurant", typeLabel: "Takoyaki · convenient", area: "Dotonbori · not on Day 2", price: "¥", note: "Large octopus pieces and a softer texture. Day 2 does not go to Dotonbori. Use it only if a later Osaka day adds this street.", coordinates: [34.66867, 135.50072], officialUrl: "https://www.shirohato.com/kukuru/" },
    { name: "Kitan Hibiki", type: "restaurant", category: "yakiniku", typeLabel: "Aged steak · Mai's pick", area: "Day 3 · Namba / Hozenji", price: "¥¥¥", note: "Mai's requested early-evening Namba dinner. Counter-only aged wagyu steak/burger, not the trip yakiniku meal. Oct 25 inventory was empty; Day 3 dinner moved to Sankei Club for 5.", coordinates: [34.66785, 135.5024], officialUrl: "https://tabelog.com/en/osaka/A2701/A270202/27141837/", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270202/27141837/", slotDays: ["day03"], reserve: "yes" },
    { name: "Nikushou Nakata Honten", type: "restaurant", category: "yakiniku", typeLabel: "Yakiniku · premium", area: "Day 5 · Namba", price: "¥¥¥¥", note: "Premium aged-wagyu dinner near Namba. Reservation-worthy, expensive and currently restricted to guests over age 10; treat it as one yakiniku candidate, not the default.", coordinates: [34.66665, 135.50055], officialUrl: "https://nikusyo-nakata.jp/nanba_honten.html", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270202/27001305/", slotDays: ["day05"], reserve: "yes" },
    { name: "Yakiniku Horumon Kurono Ura-Namba Honten", type: "restaurant", typeLabel: "Yakiniku · casual wagyu", area: "Day 3/4 · Ura-Namba", price: "¥¥¥", note: "The cheaper, livelier Oita-wagyu alternative in Ura-Namba. Reservable and much easier to combine with Kuromon, Den Den or Sennichimae.", coordinates: [34.66465, 135.50578], officialUrl: "https://kurono-namba.com/en_us/page-10/" },
    { name: "Ramen Goku Honten", type: "restaurant", typeLabel: "Ramen · route-specific", area: "Tennoji / Abeno", price: "¥", note: "Useful only when already around Tennoji or Abeno. It can pair with Shinsekai, but is not worth crossing Osaka for from Namba.", coordinates: [34.64725, 135.51115], officialUrl: "https://ramen-goku.osaka/" },
    { name: "Naniwa Menjiro", type: "restaurant", typeLabel: "Ramen · station champion", area: "Day 2/3 · Osaka-Namba Station", price: "¥", note: "Excellent and exceptionally convenient inside Kintetsu Osaka-Namba Station. Remember that it is inside the paid station area when planning access.", coordinates: [34.66615, 135.49945], officialUrl: "https://naniwamenjiro.com/store_01" },
    { name: "Menya Joroku Namba", type: "restaurant", typeLabel: "Ramen · dark chuka soba", area: "Day 3 · Namba / Den Den", price: "¥", note: "Known for dark Osaka-style chuka soba in a small shop off the main Namba streets. Strong lunch candidate if the queue fits the day.", coordinates: [34.66395, 135.50505], officialUrl: "https://metronine.osaka/en/spot-details/?spot_id=69027084754" },
    { name: "NEXT Shikaku", type: "restaurant", typeLabel: "Ramen · oyster broth", area: "Day 3 · Doguyasuji / Den Den", price: "¥", note: "Distinctive oyster-based ramen with a deliberately theatrical room. Best adventurous ramen option and directly on the Namba-to-Den-Den route.", coordinates: [34.66355, 135.50492], officialUrl: "https://www.doguyasuji.or.jp/en/shop/nextshikaku/" },
    { name: "Kitashinchi Kushikatsu Bon", type: "restaurant", typeLabel: "Kushikatsu · luxury tasting", area: "Kitashinchi · splurge detour", price: "¥¥¥¥", note: "A luxury tasting-menu interpretation with ingredients such as chateaubriand, foie gras and truffles. Reserve it only for a deliberate fine-dining night.", coordinates: [34.6962, 135.49835], officialUrl: "https://guide.michelin.com/us/en/osaka-region/osaka/restaurant/kitashinchi-kushikatsu-bon" },
    { name: "Tengu", type: "restaurant", typeLabel: "Kushikatsu · atmosphere", area: "Day 3 · Shinsekai", price: "¥", note: "Traditional Janjan Yokocho counter energy and the strongest atmosphere pick. Choose Tengu over Daruma when old-school Shinsekai character matters most.", coordinates: [34.65072, 135.5045], officialUrl: "https://insideosaka.com/tengu/" },
    { name: "Kushikatsu Tanaka Amerikamura", type: "restaurant", typeLabel: "Kushikatsu · chain backup", area: "Day 4 · Amerikamura", price: "¥¥", note: "Reliable national-chain backup directly on the Day 4 route. Convenient, family-friendly and reservable, but not a destination over Tengu or Daruma.", coordinates: [34.6739, 135.4981], officialUrl: "https://restaurant.kushi-tanaka.com/" },
    { name: "DEARBROS Sennichimae", type: "restaurant", typeLabel: "Omurice · flexible lunch", area: "Day 2/3/4 · Namba", price: "¥¥", note: "Rich, meat-heavy omurice near Namba. A flexible lunch fallback when the group wants a filling break from flour dishes, skewers and ramen.", coordinates: [34.66705, 135.50425], officialUrl: "https://www.instagram.com/dearbros_official/" },
    { name: "Shabushabu On-yasai Sennichimae", type: "restaurant", category: "sukiyaki", typeLabel: "Shabu-shabu · booked", area: "Day 5 · Namba / Sennichimae · 味わいばしビル2F", price: "¥¥", note: "Booked Tue Oct 27 at 20:00 for 5, seats only. Ebica 468119458. Vegetable-forward chain shabu after Kobe. Address 難波3-4-13. Shop 06-4396-8311.", coordinates: [34.6669, 135.5017], officialUrl: "https://map.reins.co.jp/onyasai/detail/643968311", tabelogUrl: "https://tabelog.com/osaka/A2701/A270202/27040112/", slotDays: ["day05"], reserve: "yes" },
    { name: "Kani Kani Jo", type: "restaurant", category: "sushi", typeLabel: "Crab · private rooms", area: "Day 4 · Nihonbashi / Kuromon", price: "¥¥¥¥", note: "Crab sashimi, tempura, charcoal grill and sukiyaki in private rooms. Booking this dinner replaces the Tenma food crawl. Party of 5.", coordinates: [34.6659, 135.5066], officialUrl: "https://www.tablecheck.com/en/shops/kanikanijo/reserve", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270202/27144240/", slotDays: ["day04"], reserve: "yes" },
    { name: "Maruyoshi Sushi", type: "restaurant", category: "sushi", typeLabel: "Market sushi · early meal", area: "Kizu Wholesale Market · Daikokucho", price: "¥¥", note: "A small market sushi and seafood-bowl stop with very early hours. Use it as breakfast or early lunch and recheck the market calendar before making the trip.", coordinates: [34.6553, 135.5005] },
    { name: "Udon Izakaya Edobori", type: "restaurant", category: "noodles", typeLabel: "Udon · chosen walk-in", area: "Day 5 · about 15 min from the hotel", price: "¥", note: "CHOSEN. Tue Oct 27 at 11:00. Walk in. Do not reserve lunch. About JPY 1,100 per person. Party of 5. Non-smoking. Mai orders kitsune udon or chikuwa udon. Do not order chicken tempura, meat udon, tonkatsu, or katsudon.", coordinates: [34.689194, 135.493264], officialUrl: EDOBORI_TABELOG_URL, tabelogUrl: EDOBORI_TABELOG_URL, slotDays: ["day05"], reserve: "no" },
    { name: "Kura Sushi Global Flagship Dotonbori", type: "restaurant", category: "sushi", typeLabel: "Kaiten sushi · idea", area: "Dotonbori 1-4-22 2F · no date picked", price: "¥¥", note: "Idea only. No date is picked. Party of 5. Open 11:00–24:00. About JPY 1,000–3,000 per person. Non-smoking. This is not a booking task.", coordinates: [34.668694, 135.503571], tabelogUrl: KURA_TABELOG_URL, reserve: "no" },
    { name: "Kaiten Sushi Sakae Hankyu Higashi-dori", type: "restaurant", category: "sushi", typeLabel: "Kaiten sushi · walk-in backup", area: "Umeda · Hankyu Higashi-dori", price: "¥¥", note: "Walk-in backup if you later choose Kura. Closed on Wednesday. 30 seats. Non-smoking.", coordinates: [34.702991, 135.501007], tabelogUrl: SAKAE_TABELOG_URL, reserve: "no" },
    { name: "Unagi no Nakashou Namba", type: "restaurant", category: "unagi", typeLabel: "Kansai-style eel · backup", area: "Day 3/4 · Namba Ebisubashi", price: "¥¥¥", note: "Easier hours and lower cost than Shibato. Reserve only if this becomes the unagi meal; do not stack it with Kitan.", coordinates: [34.6665, 135.5009], officialUrl: "https://tabelog.com/en/osaka/A2701/A270202/27150606/", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270202/27150606/", slotDays: ["day03", "day04"], reserve: "yes" },
    { name: "Honke Shibato", type: "restaurant", category: "unagi", typeLabel: "Osaka-style eel · skip", area: "Day 5 · Koraibashi", price: "¥¥¥¥", note: "Skipped. Phone-only booking. About JPY 4,920–7,450. Do not call. Tue Oct 27 lunch is Udon Izakaya Edobori.", coordinates: [34.6900344, 135.5037614], officialUrl: "http://www.shibato.net/", tabelogUrl: "https://tabelog.com/en/osaka/A2701/A270102/27000005/", slotDays: ["day05"], reserve: "no" },
    { name: "Ippoutei Honten", type: "restaurant", typeLabel: "High · historic shumai", area: "Day 3 · beside Nankai Namba", price: "¥", note: "Founded in Namba in 1933 and known for soft shumai wrapped in thin egg rather than ordinary flour skins. Inexpensive, distinctive and one of the strongest route-friendly lunches.", coordinates: [34.66285, 135.50215], officialUrl: "https://www.ippoutei.com/" },
    { name: "Kitatake Udon", type: "restaurant", typeLabel: "Medium-high · udon lunch", area: "Day 3 · Namba / Den Den", price: "¥", note: "Excellent specialist lunch beyond ramen, about three minutes from Nankai Namba. Lunch runs only until 15:00 and can finish when the noodles sell out.", coordinates: [34.66255, 135.50365], officialUrl: "http://kamatakeudon.kt.fc2.com/" },
    { name: "Sakenomi Ario", type: "restaurant", typeLabel: "Medium · local izakaya", area: "Namba · Motomachi", price: "¥¥", note: "Small, reservable neighborhood izakaya west of Namba. It has moved from its old Nambanaka address to Motomachi, so use this pin rather than older map results.", coordinates: [34.66205, 135.49675], officialUrl: "https://www.instagram.com/sakenomi_ario/" },
    { name: "Kawara Soba En", type: "restaurant", typeLabel: "Optional · Yamaguchi specialty", area: "Day 3/4 · Ura-Namba", price: "¥¥¥", note: "Green-tea soba presented on a heated roof tile: unusual and photogenic, but Yamaguchi rather than Osaka cuisine. Tiny, evening-only and better reserved if chosen.", coordinates: [34.66385, 135.50515], officialUrl: "https://tabelog.com/osaka/A2701/A270202/27090699/" }
  ],
  kyoto: [
    { name: "FamilyMart Karasuma Rokkaku", type: "conbini", category: "conbini", typeLabel: "Closest FamilyMart", area: "Hotel base · ~140 m south", price: "¥", note: "The quickest mapped supply run from Hotel Monterey: useful for early breakfast, drinks and trail snacks before the sightseeing day starts.", coordinates: [35.00648, 135.75943], officialUrl: "https://store.family.co.jp/points/33097" },
    { name: "Lawson Karasuma Sanjo", type: "conbini", category: "conbini", typeLabel: "Closest Lawson", area: "Hotel base · ~170 m north", price: "¥", note: "A 24-hour option beside Karasuma Oike. Use it for a Lawson breakfast comparison, an ATM stop or an easy late-night fallback on the walk back to the hotel.", coordinates: [35.0092, 135.75954], officialUrl: "https://map.yahoo.co.jp/v3/place/HDPZIRykzBM" },
    { name: "7-Eleven Kyoto Oikedori Tatsuikecho", type: "conbini", category: "conbini", typeLabel: "Nearest useful 7-Eleven", area: "Hotel base · ~350 m northwest", price: "¥", note: "Slightly farther than FamilyMart and Lawson but still close enough for the three-chain breakfast comparison, Seven Bank ATM and packaged melonpan hunt.", coordinates: [35.01057, 135.75772], officialUrl: "https://location.sevenbank.co.jp/sevenbank/spot/detail?code=0000031318&lang=en" },
    { name: "Flip Up!", type: "sweet", category: "bakery", typeLabel: "Neighborhood bakery · wife's pick", area: "Hotel / Manga Museum · Oshikoji", price: "¥", note: "A compact, route-friendly bakery close to the hotel and Manga Museum. Pick one or two breads for breakfast or the Mt Hiei trail rather than building a separate meal around it.", coordinates: [35.0122892, 135.7582458] },
    { name: "Kyoto Gion Tempura Yasaka Endo", type: "restaurant", category: "tempura", typeLabel: "Tempura kaiseki · high-grade lunch", area: "Day 7 · Gion / Yasaka", price: "¥¥¥¥", note: "Protected Day 7 lunch, Thu Oct 29 at 13:30, party of 5. Paul cannot join. No 12:30 inventory; 13:30 is the slot that still fits Kiyomizu. Order the Gion course (~¥11,000 + service). Skip Okabeya that day.", coordinates: [35.0019, 135.7756], officialUrl: "https://www.gion-endo.com/", tabelogUrl: "https://tabelog.com/en/kyoto/A2601/A260301/26000592/", slotDays: ["day07"], reserve: "yes" },
    { name: "Sohonke Nishin Soba Matsuba Honten", type: "restaurant", category: "nishin-soba", typeLabel: "Nishin soba · light evening option", area: "Day 7 · Gion-Shijo / Minamiza", price: "¥¥", note: "Kyoto's signature herring soba beside Minamiza. Useful after Endo lunch only if people still want a small evening meal; skip it if the Gion course was enough.", coordinates: [35.00365, 135.77262], officialUrl: "https://sobamatsuba.co.jp/menu/access.html" },
    { name: "Izuju", type: "restaurant", category: "kyoto-sushi", typeLabel: "Saba-zushi · high priority", area: "Day 7 · Yasaka Shrine", price: "¥¥¥", note: "Traditional Kyoto pressed sushi beside Yasaka. Share saba-zushi or hako-zushi as a tasting; current last order is early enough that this is lunch or early dinner, not a post-show fallback.", coordinates: [35.00362, 135.77853], officialUrl: "https://gion-izuju.com/english-page/" },
    { name: "Kiyomizu Junsei Okabeya", type: "restaurant", category: "tofu-yuba", typeLabel: "Yudofu & yuba · skip if Endo lunch holds", area: "Day 7 · Kiyomizu-dera approach", price: "¥¥¥", note: "Yudofu and yuba on the Kiyomizu approach. Do not use this as Day 7 lunch if Tempura Endo is booked; a kaiseki lunch already fills that slot.", coordinates: [34.99616, 135.78082], officialUrl: "https://www.okabeya.com/lang/en.html" },
    { name: "Yudofu Sagano", type: "restaurant", category: "tofu-yuba", typeLabel: "Yudofu · timing-risk option", area: "Day 8 · Arashiyama / Tenryu-ji", price: "¥¥¥", note: "Classic garden yudofu beside the Arashiyama sights, but it opens at 11:00 and your hard exit is 11:20. Keep the pin for context; do not queue or sacrifice Ryoan-ji and Kinkaku-ji for it.", coordinates: [35.01558, 135.67446], officialUrl: "https://kyoto-sagano.jp/access" },
    { name: "Kani Doraku Kyoto Honten", type: "restaurant", category: "kani", typeLabel: "Crab · booked", area: "Day 8 · Sanjo / Kawaramachi", price: "¥¥¥", note: "Booked Fri Oct 30 at 18:00 for 5. HotPepper SE0767510. 光華 course ¥7,590, 9 dishes, horigotatsu. Shop 075-211-0671. Walk from Hotel Monterey after Arashiyama.", coordinates: [35.008705, 135.766995], officialUrl: "https://kanikyoto.owst.jp/", tabelogUrl: "https://tabelog.com/en/kyoto/A2601/A260201/26011709/", slotDays: ["day08"], reserve: "yes" },
    { name: "Kyoya Kiyomizu Yanaginobamba Honke", type: "restaurant", category: "obanzai", typeLabel: "Obanzai · booked", area: "Day 9 · Yanaginobamba · south of Shijo", price: "¥¥", note: "BOOKED. Sat Oct 31 at 18:30. The party is 5 people. The booking is for seats only. Order a la carte. Order obanzai and yuba. Do not order the set courses. The set courses are built around a pork hot pot. Mai avoids sliced meat. The Tabelog reservation number is FP4YF2QHPJ. The shop is just south of Shijo, near Nishiki. Walk about 10 minutes from the Shijo end of Pontocho.", coordinates: [35.002341, 135.763886], tabelogUrl: KYOYA_TABELOG_URL, slotDays: ["day09"], reserve: "yes" },
    { name: "Menami", type: "restaurant", category: "obanzai", typeLabel: "Obanzai · skip", area: "Day 9 · Sanjo / Kiyamachi", price: "¥¥¥", note: "Skipped. Menami takes bookings by phone only. Do not call Menami. The Oct 31 dinner is Kyoya.", coordinates: [35.00904, 135.77055], officialUrl: "https://www.menami.jp/menu1", tabelogUrl: "https://tabelog.com/kyoto/A2601/A260201/26001266/", slotDays: ["day09"], reserve: "no" },
    { name: "Nishiki Hirano", type: "restaurant", category: "obanzai", typeLabel: "Obanzai & dashimaki", area: "Day 9 · Nishiki Market", price: "¥¥", note: "Useful seated counterpoint to market snacking: a Kyoto-style set or dashimaki omelet without leaving the planned Nishiki window.", coordinates: [35.00498, 135.76242], officialUrl: "https://nishikihirano.com/en/" },
    { name: "Konnamonja", type: "sweet", category: "soy-sweets", typeLabel: "Soy-milk sweets · share", area: "Day 9 · Nishiki Market", price: "¥", note: "Tofu-shop snack stop for soy-milk doughnuts and soft serve. Share one item and eat at the shop; Nishiki asks visitors not to eat while walking.", coordinates: [35.00496, 135.76418], officialUrl: "https://www.kyoto-nishiki.or.jp/en/stores/konnamonja/" },
    { name: "Uchida Tsukemono", type: "restaurant", category: "kyo-pickles", typeLabel: "Kyo-tsukemono · taste/buy", area: "Day 9 · Nishiki Market", price: "¥", note: "Kyoto pickles are a core local food rather than a full meal. Taste one seasonal style or buy a small pack; keep the market visit bounded.", coordinates: [35.00499, 135.76168], officialUrl: "https://www.kyoto-nishiki.or.jp/en/stores/uchida/" },
    { name: "Kinmata", type: "restaurant", category: "kaiseki", typeLabel: "Kyo-kaiseki · skip", area: "Day 9 · east of Nishiki", price: "¥¥¥¥", note: "Skipped. Kinmata is too expensive, about JPY 25,300 per person. Do not book it. The Oct 31 dinner is Kyoya.", coordinates: [35.00389, 135.7657], officialUrl: "https://www.kinmata.com/en/", tabelogUrl: "https://tabelog.com/en/kyoto/A2601/A260201/26000452/", slotDays: ["day09"], reserve: "no" },
    { name: "Zuientei at Hotel Monterey Kyoto", type: "restaurant", category: "kaiseki", typeLabel: "Kaiseki · zero-travel backup", area: "Inside Hotel Monterey · 2F", price: "¥¥¥", note: "A seated backup inside the hotel. Kinmata is skipped. Menami is skipped. Do not use this in place of Kyoya unless you cannot reach Kyoya.", coordinates: [35.00775, 135.75948], officialUrl: "https://www.hotelmonterey.co.jp/en/kyoto/restaurant/shop/78594a0dcf5c178.html" },
    { name: "Ippodo Tea Kyoto Main Store", type: "cafe", category: "tea", typeLabel: "Japanese tea · top pick", area: "Day 9 · Imperial Palace / Teramachi", price: "¥¥", note: "A proper tea experience with staff-guided brewing and wagashi, not simply another matcha dessert. It fits naturally after the Imperial Palace if the afternoon stays on time.", coordinates: [35.01446, 135.76756], officialUrl: "https://global.ippodo-tea.co.jp/pages/store-kyoto" },
    { name: "Gion Tsujiri Gion Main Store", type: "cafe", category: "tea", typeLabel: "Matcha & hojicha", area: "Day 7 · Gion", price: "¥¥", note: "Very easy route fit for tea or a matcha dessert in Gion. Treat it as the convenient tea choice; choose Ippodo when the tea itself is the experience.", coordinates: [35.00165, 135.77514], officialUrl: "https://www.giontsujiri.co.jp/en/store/giontsujiri-honten/" },
    { name: "Maeda Coffee Muromachi Honten", type: "cafe", category: "coffee", typeLabel: "Kyoto kissaten breakfast", area: "Hotel base · Muromachi", price: "¥¥", note: "A Kyoto coffee institution close to Hotel Monterey, open early enough for an actual breakfast. Best low-friction café option; save tea-house time for Ippodo or Gion.", coordinates: [35.00572, 135.75669], officialUrl: "https://www.maedacoffee.com/en/shopinfo/honten/" },
    { name: "Inoda Coffee Main Shop", type: "cafe", category: "coffee", typeLabel: "Historic Kyoto coffee", area: "Day 9 / hotel area · Sanjo-Sakaimachi", price: "¥¥", note: "A roomy, old-school Kyoto coffee alternative open from 07:00. Use it for breakfast or a seated central-city reset; choose Maeda when minimum walking matters.", coordinates: [35.00694, 135.76415], officialUrl: "https://www.inoda-coffee.co.jp/english/shop/" },
    { name: "Kagizen Yoshifusa Shijo Main Store", type: "sweet", category: "kuzukiri", typeLabel: "Kuzukiri · must try", area: "Day 7 · Gion", price: "¥¥", note: "The priority Kyoto dessert stop: chilled translucent kudzu noodles with syrup in a seated tea room, plus seasonal wagashi. It is directly on the Gion route.", coordinates: [35.00347, 135.77643], officialUrl: "https://www.kagizen.co.jp/en/pages/shops-honten" },
    { name: "Honke Nishio Yatsuhashi Shinkyogoku", type: "sweet", category: "yatsuhashi", typeLabel: "Yatsuhashi · share a sample", area: "Day 9 · Nishiki / Shinkyogoku", price: "¥", note: "Try both the cinnamon-baked cracker and soft nama-yatsuhashi if available; one shared pack is enough. This branch is an easy Nishiki add-on, not a separate excursion.", coordinates: [35.00624, 135.76726], officialUrl: "https://www.8284.co.jp/shop/shinkyogoku.html" },
    { name: "Oimatsu Kitano", type: "sweet", category: "wagashi", typeLabel: "Seasonal wagashi", area: "Day 8 · optional Kamishichiken", price: "¥¥", note: "A refined seasonal wagashi stop that fits only if the optional Kamishichiken/Nishijin ending survives the Kinkaku-ji day. Skip without regret if the parents need the hotel.", coordinates: [35.02978, 135.73998], officialUrl: "https://oimatu.co.jp/" },
    { name: "Toraya Karyo Kyoto Ichijo", type: "sweet", category: "wagashi", typeLabel: "Wagashi & yokan · palace route", area: "Day 9 · Kyoto Imperial Palace", price: "¥¥", note: "The route-friendly second wagashi choice: seasonal sweets and yokan in a garden-facing tearoom near the palace. Choose it instead of Oimatsu when Day 8 is already full.", coordinates: [35.02625, 135.75738], officialUrl: "https://global.toraya-group.co.jp/pages/shop-kyoto" },
    { name: "Demachi Futaba", type: "sweet", category: "mochi-dango", typeLabel: "Mame-mochi · later only", area: "Day 10 · Demachiyanagi", price: "¥", note: "Famous salty-sweet bean mochi near the Mt Hiei departure corridor, but it opens after your planned departure. Buy it after the mountain or on another day; never delay the ascent for a queue.", coordinates: [35.03003, 135.76836], officialUrl: "https://www.hieizan.gr.jp/yase/demachifutaba" },
    { name: "Kamo Mitarashi Chaya", type: "sweet", category: "mochi-dango", typeLabel: "Mitarashi dango · optional", area: "Day 10 · Shimogamo / Demachiyanagi", price: "¥", note: "A birthplace-linked Kyoto mitarashi-dango stop. Like Futaba, it opens too late for the outbound Mt Hiei plan; use it only after descent or on a flexible afternoon.", coordinates: [35.03804, 135.77208], officialUrl: "https://www.hieizan.gr.jp/yase/kamo-mitarashi-chaya" }
  ],
  hiroshima: [
    { name: "7-Eleven Heart-in ekie Hiroshima Shinkansen Exit", type: "conbini", category: "conbini", typeLabel: "Closest station 7-Eleven", area: "Hotel Granvia · inside ekie", price: "¥", note: "The lowest-effort supply stop beside the station-connected hotel. Use it for breakfast, drinks or the Shinkansen morning; this branch is outside the ticket gates.", coordinates: [34.39805, 132.47535], officialUrl: "https://www.sn-hiroshima.co.jp/pages/127/" },
    { name: "FamilyMart Hiroshima Station North Exit", type: "conbini", category: "conbini", typeLabel: "Closest FamilyMart", area: "Hotel Granvia · north exit", price: "¥", note: "A useful street-level backup on the north side of the station for an ATM, breakfast or late supplies without crossing through the whole station.", coordinates: [34.39925, 132.47578], officialUrl: "https://store.family.co.jp/points/35382" },
    { name: "Lawson Hiroshima TV", type: "conbini", category: "conbini", typeLabel: "Closest useful Lawson", area: "Hotel Granvia · ~4 min north", price: "¥", note: "The practical Lawson comparison just beyond the Shinkansen exit. Choose it only when you want the different chain; the station 7-Eleven is easier.", coordinates: [34.40018, 132.4771], officialUrl: "https://www.lawson.co.jp/company/fc/seminar/seminar/068451.html" },
    { name: "Reichan ekie Hiroshima", type: "restaurant", category: "okonomiyaki", typeLabel: "Okonomiyaki · Nov 2 dinner", area: "Day 11 · Hiroshima Station ekie 1F", price: "¥¥", note: "Walk in. Do not reserve. This is the one Hiroshima okonomiyaki meal, on Nov 2 after you arrive. About JPY 1,000–2,000 per person. Lunch stays in Himeji.", coordinates: [34.3977, 132.47545], officialUrl: "https://www.o-reichan.jp/shop.htm" },
    { name: "Nagata-ya", type: "restaurant", category: "okonomiyaki", typeLabel: "Okonomiyaki · do not add", area: "Near Peace Park", price: "¥¥", note: "A tourist-friendly classic about ten seconds from the park. Do not use this as another okonomiyaki meal. The one Hiroshima okonomiyaki is Reichan on Nov 2. Day 12 dinner is Suishin main store at 18:00. The table is booked. TableCheck XJCU9T.", coordinates: [34.39328, 132.45357], officialUrl: "https://nagataya-okonomi.com/" },
    { name: "Hiroshima Kani Shin", type: "restaurant", category: "kani", typeLabel: "Crab kaiseki · skip", area: "Day 13 evening · Fukuro-machi", price: "¥¥¥¥", note: "Skip this formal crab dinner because the trip's dedicated crab meal is already booked at Kani Doraku Kyoto.", coordinates: [34.3928, 132.4569], officialUrl: "https://tabelog.com/en/hiroshima/A3401/A340114/34033069/", tabelogUrl: "https://tabelog.com/en/hiroshima/A3401/A340114/34033069/", slotDays: ["day13"], reserve: "yes" },
    { name: "Oyster Ship Kanawa Seto", type: "restaurant", category: "oysters", typeLabel: "Hiroshima oysters · skip", area: "Day 12 · Motoyasu River / Peace Park", price: "¥¥¥", note: "Skip this full oyster meal because Mom hates oysters. Anyone who wants one can share a small grilled-oyster tasting on Miyajima instead.", coordinates: [34.39316, 132.45322], officialUrl: "https://www.kanawa.co.jp/en/seto", tabelogUrl: "https://tabelog.com/hiroshima/A3401/A340116/34000041/", slotDays: ["day12"], reserve: "check" },
    { name: "Kakiya", type: "restaurant", category: "oysters", typeLabel: "Grilled oysters · Miyajima pick", area: "Day 13 · Miyajima Omotesando", price: "¥¥", note: "The island's oyster specialist, directly on the shopping-street route. Do not replace the Fujitaya anago-meshi lunch. Share grilled oysters only if someone wants them. Mom hates oysters.", coordinates: [34.29696, 132.32044], officialUrl: "https://www.kaki-ya.jp/" },
    { name: "Anagomeshi Ueno", type: "restaurant", category: "anagomeshi", typeLabel: "Anago-meshi · backup", area: "Day 13 · JR Miyajimaguchi", price: "¥¥¥", note: "Backup lunch if Fujitaya is not possible. It is by the ferry pier on the mainland. Open 10:00–19:00. On Wednesdays it closes at 18:00. Nov 4 is a Wednesday. You can reserve a bento by phone at 0829-56-0006.", coordinates: [34.31172, 132.30223], officialUrl: "https://www.anagomeshi.com/" },
    { name: "Kunimatsu + Musashibo", type: "restaurant", category: "soupless-tantan", typeLabel: "Soupless tantanmen · station", area: "Day 11/14 · Hiroshima Station ekie 1F", price: "¥", note: "Two respected Hiroshima soupless-tantan styles in one station counter. Mix the noodles thoroughly; it is a fast, distinctive backup when okonomiyaki feels too heavy.", coordinates: [34.39778, 132.47558], officialUrl: "https://www.minamoa-ekie.jp/shop/?id=34" },
    { name: "Bakudanya Shintenchi", type: "restaurant", category: "tsukemen", typeLabel: "Hiroshima tsukemen · spicy dip", area: "Shintenchi · not the Day 12 dinner", price: "¥", note: "Cold noodles and cabbage dipped in a spicy red-pepper broth. This is not the Day 12 dinner. Day 12 dinner is Suishin main store at 18:00. The table is booked. TableCheck XJCU9T. On Day 13 the first station choice is Tsukemen Karabu in ekie.", coordinates: [34.39163, 132.46234], officialUrl: "https://dive-hiroshima.com/en/feature/noodle/" },
    { name: "Musubi Musashi Shinkansen Store", type: "restaurant", category: "local-bites", typeLabel: "Musubi & bento · departure pick", area: "Day 14 · Hiroshima Station ekie 1F", price: "¥", note: "A Hiroshima rice-ball institution and the most useful food pin for the long Tokyo transfer. Buy a musubi set or bento before boarding rather than relying on the train cart.", coordinates: [34.39808, 132.47565], officialUrl: "https://www.city.hiroshima.lg.jp/english/hiroshima-brand-en/1032092/1032094/1014814.html" },
    { name: "Akushu Cafe ORGANIC", type: "cafe", category: "cafe", typeLabel: "Peace Park reset", area: "Day 12 · Orizuru Tower 1F", price: "¥¥", note: "The easiest low-pressure pause by the Atomic Bomb Dome, with coffee and Hiroshima lemon drinks. Use it for decompression, not as another destination on an emotionally full day.", coordinates: [34.39555, 132.45394], officialUrl: "https://akushucafe.com/" },
    { name: "Miyajima Coffee", type: "cafe", category: "cafe", typeLabel: "Miyajima coffee pause", area: "Day 13 · Omotesando", price: "¥¥", note: "A roomy island-roasted coffee stop on the main walking route. Best as a seated reset between the shrine and the optional Daisho-in or ropeway section.", coordinates: [34.29725, 132.32063], officialUrl: "https://miyajimacoffee.com/shop/" },
    { name: "Momijido Main Store", type: "sweet", category: "momiji-manju", typeLabel: "Age-momiji · must share", area: "Day 13 · Miyajima Omotesando", price: "¥", note: "Try one freshly fried age-momiji, the crisp hot version of Hiroshima's maple-leaf cake. Share it immediately; packaged momiji manju is a separate comparison.", coordinates: [34.29704, 132.32071], officialUrl: "https://momijido.com/" },
    { name: "Nishikido Hiroshima Station ekie", type: "sweet", category: "momiji-manju", typeLabel: "Nama-momiji & classic", area: "Day 11/14 · Hiroshima Station ekie 2F", price: "¥", note: "The no-detour place to compare classic sponge-like momiji manju with the chewier nama-momiji style. Buy singles or one small mixed box, not a second dessert mission.", coordinates: [34.39772, 132.47543], officialUrl: "https://www.nisikido.co.jp/en/locations/" },
    { name: "Shimagokoro SETODA ekie", type: "sweet", category: "lemon-sweets", typeLabel: "Setouchi lemon cake", area: "Day 11/14 · Hiroshima Station ekie 2F", price: "¥", note: "A station-friendly Setouchi lemon cake made with local lemon peel. This covers Hiroshima's citrus identity without detouring away from the itinerary.", coordinates: [34.39775, 132.47551], officialUrl: "https://www.patisserie-okumoto.com/shop.html" }
  ],
  tokyo: [
    { name: "7-Eleven Ningyocho Amazake Yokocho", type: "conbini", category: "conbini", typeLabel: "Ningyocho 7-Eleven · not the hotel", area: "Ningyocho · not near APA", price: "¥", note: "This store is in Ningyocho. It is not near APA Nishishinjuku. The hotel is next to Nishi-shinjuku-gochome Station.", coordinates: [35.68653, 139.78433] },
    { name: "Lawson Nihonbashi Hamacho 2-chome", type: "conbini", category: "conbini", typeLabel: "Hamacho Lawson · not the hotel", area: "Nihonbashi Hamacho · not near APA", price: "¥", note: "This Lawson is in Nihonbashi Hamacho. It is not near APA Nishishinjuku. Do not use it as the hotel convenience store.", coordinates: [35.68702, 139.78488], officialUrl: "https://map.yahoo.co.jp/v3/place/qGfFMObFc2A" },
    { name: "FamilyMart Nihonbashi Kakigaracho", type: "conbini", category: "conbini", typeLabel: "Kakigaracho FamilyMart · not the hotel", area: "Nihonbashi · not near APA", price: "¥", note: "This FamilyMart is southeast of Ningyocho. It is not near APA Nishishinjuku.", coordinates: [35.68385, 139.78557] },
    { name: "Kaiten Toyama Sushi Ginza", type: "restaurant", category: "edomae-sushi", typeLabel: "Kaiten sushi · walk-in", area: "Day 21 · Ginza 8-2-16 B1F", price: "¥¥", note: "Walk in Thu Nov 12 at 17:00. 2 people, Brian and Mai. About 5 minutes from Shimbashi. Do not book online. Online booking is for a course only. About JPY 3,000–4,000 per person. Non-smoking. Leave between 20:30 and 21:00.", coordinates: [35.669888, 139.759506], tabelogUrl: TOYAMA_TABELOG_URL, slotDays: ["day21"], reserve: "no" },
    { name: "Ichiban Kaiten Sushi", type: "restaurant", category: "edomae-sushi", typeLabel: "Kaiten sushi · backup 1", area: "Day 21 · Shimbashi 3-16-4", price: "¥", note: "First backup if Toyama is full. 1 minute from the JR Shimbashi Karasumori exit. Belt. JPY 165 a plate. All seats are non-smoking. Walk in only. 23 seats.", coordinates: [35.665791, 139.757278], tabelogUrl: ICHIBAN_TABELOG_URL, slotDays: ["day21"], reserve: "no" },
    { name: "Heiroku Sushi Ginza", type: "restaurant", category: "edomae-sushi", typeLabel: "Kaiten sushi · backup 2", area: "Day 21 · Shimbashi 1-12-10", price: "¥", note: "Second backup if Toyama is full. 2 minutes from the JR Shimbashi Ginza exit. Belt and tablet. Inside seats are non-smoking. Walk in. 71 seats.", coordinates: [35.667781, 139.758808], tabelogUrl: HEIROKU_TABELOG_URL, slotDays: ["day21"], reserve: "no" },
    { name: "Sushiro aune Yurakucho", type: "restaurant", category: "edomae-sushi", typeLabel: "Kaiten sushi · backup 3", area: "Day 21 · Yurakucho", price: "¥", note: "Third backup if Toyama is full. The walk is 12–14 minutes. You can reserve it in the Sushiro app.", coordinates: [35.675439, 139.76286], tabelogUrl: SUSHIRO_YURAKUCHO_TABELOG_URL, slotDays: ["day21"], reserve: "no" },
    { name: "Ningyocho Imahan Main Store", type: "restaurant", category: "sukiyaki", typeLabel: "Sukiyaki · not the Nov 12 plan", area: "Ningyocho · not near the hotel", price: "¥¥¥¥", note: "Not the Nov 12 dinner. The plan is a walk-in at Kaiten Toyama Sushi Ginza. Imahan is not a few minutes from the hotel. The hotel is APA Nishishinjuku. Keep this pin only if you do not eat at Toyama.", coordinates: [35.68577, 139.78349], officialUrl: "https://imahan-tokyo.com/official/" },
    { name: "Kaneko Hannosuke Nihonbashi Main Store", type: "restaurant", category: "tempura", typeLabel: "Edo-style tendon · high priority", area: "Nihonbashi / Mitsukoshimae", price: "¥¥", note: "A dramatic but affordable bowl of sesame-oil-fried Edomae tempura near Tokyo Station. It is not near APA Nishishinjuku. Famous queues make this an off-peak lunch, not a fixed appointment.", coordinates: [35.68633, 139.77491], officialUrl: "https://www.kanekohannosuke.com/" },
    { name: "Manten Sushi Nihonbashi", type: "restaurant", category: "edomae-sushi", typeLabel: "Edomae sushi · not the Nov 12 plan", area: "COREDO Muromachi 2", price: "¥¥¥", note: "Not the Nov 12 dinner. The plan is a walk-in at Kaiten Toyama Sushi Ginza. Keep this pin only if you do not eat at Toyama.", coordinates: [35.6872, 139.77461], officialUrl: "https://www.manten-sushi.com/" },
    { name: "Sushi no Midori Shibuya", type: "restaurant", category: "edomae-sushi", typeLabel: "Sushi · Shibuya lunch option", area: "Day 16 · Shibuya Mark City 4F", price: "¥¥", note: "Generous, approachable sushi directly beside the Crossing route. It fits Dad's Shibuya day, but the queue must not jeopardize the 15:30 departure for Akko.", coordinates: [35.65817, 139.69852], officialUrl: "https://www.shibuyago.com/shop/sushi-no-midori-shibuya/" },
    { name: "Tsukishima Monja Moheji Main Store", type: "restaurant", category: "monjayaki", typeLabel: "Monjayaki · Tokyo-only detour", area: "Tsukishima Monja Street", price: "¥¥", note: "The clearest only-in-Tokyo group food experience: loose savory batter eaten from the griddle with tiny spatulas. It requires a deliberate detour, so use it only if monja becomes a priority dinner.", coordinates: [35.66284, 139.78116], officialUrl: "https://monja-moheji.tokyo/" },
    { name: "Fukagawa-juku Tomioka Hachimangu", type: "restaurant", category: "fukagawa-meshi", typeLabel: "Fukagawa-meshi · local history", area: "Monzen-nakacho / Fukagawa", price: "¥¥", note: "Clam rice in Fukagawa, in east Tokyo. It is not close to APA Nishishinjuku. Pick it for one old-Tokyo lunch. Do not add it to a full sightseeing day.", coordinates: [35.67142, 139.79835], officialUrl: "https://www.gotokyo.org/en/destinations/eastern-tokyo/fukagawa/index.html" },
    { name: "Oden & Robata Takeshi Ningyocho", type: "restaurant", category: "everyday-tokyo", typeLabel: "Ningyocho izakaya · not the hotel", area: "Ningyocho Station · not near APA", price: "¥¥", note: "Oden and small plates in Ningyocho. This shop is not close to APA Nishishinjuku. Do not use it as the hotel-neighborhood dinner.", coordinates: [35.68474, 139.78323], officialUrl: "https://shops.alwayssaisei.co.jp/detail/1240034/" },
    { name: "Soranoiro Nippon", type: "restaurant", category: "tokyo-noodles", typeLabel: "Tokyo shoyu ramen · flexible", area: "Tokyo Station · Ramen Street B1F", price: "¥", note: "A polished shoyu-ramen option with vegan and gluten-free bowls, useful on arrival or the final packing day. Choose this for flexibility and a lighter broth.", coordinates: [35.68153, 139.76806], officialUrl: "https://www.tokyoeki-1bangai.co.jp/street/ramen/en/" },
    { name: "Rokurinsha Tokyo Station", type: "restaurant", category: "tokyo-noodles", typeLabel: "Tsukemen · Tokyo Station icon", area: "Tokyo Station · Ramen Street B1F", price: "¥", note: "Extra-thick dipping noodles with a rich seafood-pork broth. It is the bolder noodle choice, but its queue makes Soranoiro the practical backup.", coordinates: [35.68158, 139.76812], officialUrl: "https://rokurinsha.com/en/menu/" },
    { name: "Boulangerie Le Cinq", type: "cafe", category: "cafe", typeLabel: "Bakery · not near the hotel", area: "Nihonbashi · former KOKO 1F", price: "¥¥", note: "This bakery was inside KOKO HOTEL Premier Nihonbashi Hamacho. Both KOKO stays were cancelled. Do not use it as a zero-travel breakfast. It is not near APA Nishishinjuku.", coordinates: [35.68722, 139.78737], officialUrl: "https://www.boulangerie-le-cinq.com/pages/%E3%83%AB%E3%82%B5%E3%83%B3%E3%82%AF-%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9" },
    { name: "Coffee Hall Kugutsuso", type: "cafe", category: "cafe", typeLabel: "Kichijoji kissaten · top café pick", area: "Day 15 · Kichijoji Daiyagai", price: "¥¥", note: "A cave-like 1979 kissaten founded by members of a puppet-theatre troupe. Coffee, toast, curry or pudding make it an unusually good thematic fit after Inokashira Park.", coordinates: [35.70473, 139.57854], officialUrl: "https://www.kugutsusou.info/" },
    { name: "Chatei Hatou", type: "cafe", category: "cafe", typeLabel: "Shibuya kissaten · quiet buffer", area: "Day 16 · east of Shibuya Station", price: "¥¥", note: "A serious old-school coffee room hidden close to the Scramble. Use it only as the protected rest buffer before leaving for Akko; skip if the lunch queue consumed the margin.", coordinates: [35.65969, 139.70395] },
    { name: "Yanagiya", type: "sweet", category: "taiyaki", typeLabel: "Taiyaki · Ningyocho", area: "Ningyocho Amazake Yokocho · not near APA", price: "¥", note: "One of Tokyo's classic taiyaki names, cooking each crisp fish-shaped cake in an individual iron mold. It is in Ningyocho. It is not next to APA Nishishinjuku. The line can decide the timing.", coordinates: [35.68574, 139.78284], officialUrl: "https://www.nihonbashi-tokyo.jp/en/shops/" },
    { name: "Shigemori Eishindo", type: "sweet", category: "ningyo-yaki", typeLabel: "Ningyo-yaki · origin-neighborhood pick", area: "Ningyocho / Suitengu", price: "¥", note: "The route-fit place to try the small molded cakes named for Ningyocho. Buy a few to share; save Asakusa's landmark-shaped version for comparison only if that day runs easily.", coordinates: [35.68427, 139.78516], officialUrl: "https://www.ningyocho.or.jp/english/feature/index.html" },
    { name: "Kimuraya Ningyo-yaki Main Shop", type: "sweet", category: "ningyo-yaki", typeLabel: "Asakusa ningyo-yaki", area: "Day 20 · Senso-ji / Nakamise", price: "¥", note: "Fresh landmark-shaped cakes beside Senso-ji, useful if Asakusa Engei Hall survives the Hakone return. Compare with Ningyocho; do not buy another large souvenir box.", coordinates: [35.71178, 139.79642], officialUrl: "https://e-asakusa.jp/en/spot/2148" },
    { name: "Tokyo Melonpan Asakusabashi", type: "sweet", category: "melonpan", typeLabel: "Melon bread · placeholder branch", area: "Day 21 · placeholder pin", price: "¥", note: "Placeholder only. [melon-bread shop and branch — needs confirmation]. Do not treat this Asakusabashi branch as booked or confirmed.", coordinates: [35.69719, 139.78457], officialUrl: "https://tokyo-melonpan.net/" }
  ]
};

const CITY_FOOD_TYPES = {
  restaurant: { label: "Restaurants", icon: "🍜", tileImage: "food-icons/restaurant-ramen.png" },
  cafe: { label: "Cafés", icon: "☕", tileImage: "food-icons/cafe-matcha.png" },
  conbini: { label: "Conbini", icon: "🍙", tileImage: "food-icons/conbini-onigiri.png" },
  sweet: { label: "Sweet shops", icon: "★", tileImage: "food-icons/sweet-dango.png" }
};

const OSAKA_FOOD_CATEGORIES = {
  takoyaki: { label: "Takoyaki", icon: "🐙" },
  okonomiyaki: { label: "Okonomiyaki & negiyaki", icon: "🥞" },
  kushikatsu: { label: "Kushikatsu", icon: "🍢" },
  butaman: { label: "Butaman", icon: "🐷" },
  nikusui: { label: "Nikusui", icon: "🥣" },
  izakaya: { label: "Izakayas", icon: "🏮" },
  noodles: { label: "Ramen & noodles", icon: "🍜" },
  yakiniku: { label: "Yakiniku", icon: "🥩" },
  sukiyaki: { label: "Sukiyaki & shabu-shabu", icon: "🍲" },
  sushi: { label: "Sushi & seafood", icon: "🍣" },
  unagi: { label: "Unagi", icon: "🐟" },
  cafe: { label: "Cafés & kissaten", icon: "☕" },
  dessert: { label: "Soufflé pancakes", icon: "🍰" },
  cheesecake: { label: "Osaka cheesecake", icon: "🧀" },
  bakery: { label: "Bakeries & butter sweets", icon: "🥐" },
  taiyaki: { label: "Taiyaki", icon: "🐟" },
  conbini: { label: "Conbini", icon: "🍙" },
  other: { label: "Other local bites", icon: "🍽️" }
};

const OSAKA_PRIMARY_FOOD_TYPES = {
  restaurant: { label: "Dinner & savory", icon: "🍽️", tileImage: "food-icons/restaurant-ramen.png" },
  cafe: { label: "Cafés", icon: "☕", tileImage: "food-icons/cafe-matcha.png" },
  sweet: { label: "Sweets", icon: "★", tileImage: "food-icons/sweet-dango.png" },
  conbini: { label: "Conbini", icon: "🍙", tileImage: "food-icons/conbini-onigiri.png" }
};

const KYOTO_FOOD_CATEGORIES = {
  kaiseki: { label: "Kyo-kaiseki", icon: "🍱" },
  tempura: { label: "Tempura kaiseki", icon: "🍤" },
  kani: { label: "Crab", icon: "🦀" },
  obanzai: { label: "Obanzai", icon: "🥢" },
  "tofu-yuba": { label: "Yudofu, yuba & soy", icon: "⬜" },
  "kyoto-sushi": { label: "Kyoto sushi", icon: "🍣" },
  "nishin-soba": { label: "Nishin soba", icon: "🍜" },
  "kyo-pickles": { label: "Kyo-tsukemono", icon: "🥒" },
  tea: { label: "Tea rooms", icon: "🍵" },
  coffee: { label: "Kyoto coffee", icon: "☕" },
  kuzukiri: { label: "Kuzukiri", icon: "🧊" },
  yatsuhashi: { label: "Yatsuhashi", icon: "🔺" },
  wagashi: { label: "Seasonal wagashi", icon: "🌸" },
  "soy-sweets": { label: "Soy-milk sweets", icon: "🥛" },
  "mochi-dango": { label: "Mochi & dango", icon: "🍡" },
  bakery: { label: "Bakeries", icon: "🥐" },
  conbini: { label: "Conbini", icon: "🍙" }
};

const KYOTO_PRIMARY_FOOD_TYPES = {
  restaurant: { label: "Meals & savory", icon: "🍽️", tileImage: "food-icons/restaurant-ramen.png" },
  cafe: { label: "Tea & cafés", icon: "🍵", tileImage: "food-icons/cafe-matcha.png" },
  sweet: { label: "Kyoto sweets", icon: "★", tileImage: "food-icons/sweet-dango.png" },
  conbini: { label: "Conbini", icon: "🍙", tileImage: "food-icons/conbini-onigiri.png" }
};

const HIROSHIMA_FOOD_CATEGORIES = {
  okonomiyaki: { label: "Hiroshima okonomiyaki", icon: "🥞" },
  oysters: { label: "Hiroshima oysters", icon: "🦪" },
  kani: { label: "Crab", icon: "🦀" },
  anagomeshi: { label: "Anago-meshi", icon: "🍱" },
  "soupless-tantan": { label: "Soupless tantanmen", icon: "🌶️" },
  tsukemen: { label: "Hiroshima tsukemen", icon: "🍜" },
  "local-bites": { label: "Musubi & local bites", icon: "🍙" },
  cafe: { label: "Cafés & pauses", icon: "☕" },
  "momiji-manju": { label: "Momiji manju", icon: "🍁" },
  "lemon-sweets": { label: "Setouchi lemon sweets", icon: "🍋" },
  conbini: { label: "Conbini", icon: "🏪" }
};

const HIROSHIMA_PRIMARY_FOOD_TYPES = {
  restaurant: { label: "Meals & savory", icon: "🍽️", tileImage: "food-icons/restaurant-ramen.png" },
  cafe: { label: "Cafés & pauses", icon: "☕", tileImage: "food-icons/cafe-matcha.png" },
  sweet: { label: "Hiroshima sweets", icon: "★", tileImage: "food-icons/sweet-dango.png" },
  conbini: { label: "Conbini", icon: "🍙", tileImage: "food-icons/conbini-onigiri.png" }
};

const TOKYO_FOOD_CATEGORIES = {
  "edomae-sushi": { label: "Edomae sushi", icon: "🍣" },
  tempura: { label: "Edo tempura & tendon", icon: "🍤" },
  sukiyaki: { label: "Sukiyaki", icon: "🥩" },
  monjayaki: { label: "Monjayaki", icon: "🥞" },
  "fukagawa-meshi": { label: "Fukagawa-meshi", icon: "🦪" },
  "tokyo-noodles": { label: "Tokyo ramen & tsukemen", icon: "🍜" },
  "everyday-tokyo": { label: "Neighborhood izakaya", icon: "🏮" },
  cafe: { label: "Kissaten & cafés", icon: "☕" },
  taiyaki: { label: "Taiyaki", icon: "🐟" },
  "ningyo-yaki": { label: "Ningyo-yaki", icon: "🏮" },
  melonpan: { label: "Melon bread finale", icon: "🍈" },
  conbini: { label: "Conbini", icon: "🏪" }
};

const TOKYO_PRIMARY_FOOD_TYPES = {
  restaurant: { label: "Meals & savory", icon: "🍽️", tileImage: "food-icons/restaurant-ramen.png" },
  cafe: { label: "Kissaten & cafés", icon: "☕", tileImage: "food-icons/cafe-matcha.png" },
  sweet: { label: "Tokyo sweets", icon: "★", tileImage: "food-icons/sweet-dango.png" },
  conbini: { label: "Conbini", icon: "🍙", tileImage: "food-icons/conbini-onigiri.png" }
};

function cityFoodCategory(place) {
  if (place.category) return place.category;
  if (state.activeCity !== "osaka") return place.type;
  const description = `${place.name} ${place.typeLabel}`.toLowerCase();
  if (description.includes("takoyaki") || description.startsWith("tako ")) return "takoyaki";
  if (description.includes("okonomiyaki") || description.includes("negiyaki")) return "okonomiyaki";
  if (description.includes("kushikatsu")) return "kushikatsu";
  if (description.includes("izakaya")) return "izakaya";
  if (/ramen|menya|udon|soba/.test(description)) return "noodles";
  if (description.includes("yakiniku")) return "yakiniku";
  if (place.type === "cafe") return "cafe";
  if (place.type === "sweet") return "dessert";
  if (place.type === "conbini") return "conbini";
  return "other";
}

let activeCityFoodPrototypeMap = null;

function renderRestaurantBookings() {
  const list = document.querySelector("#restaurantBookingsList");
  const legend = document.querySelector("#restaurantPartyLegend");
  if (!list) return;
  if (legend) {
    legend.textContent = state.activeCity === "osaka"
      ? "Party: 5 in Osaka · 8 on the family meal"
      : state.activeCity === "kyoto"
        ? "Party: 5 · Endo lunch is locked at 5 (Paul cannot join) · tick family-of-8 only on the restaurant she asked to bring family to"
        : state.activeCity === "tokyo"
          ? "Party: 6 while parents are in Tokyo · 2 for the Nov 12 finale unless extra guests join"
          : "Party: 4 in Hiroshima · Hakone dinners are couple-only (2)";
  }
  const bookingsIntro = document.querySelector("#restaurantBookingsIntro");
  if (bookingsIntro) {
    bookingsIntro.innerHTML = collapsedNoteHtml("Booked meals: Sankei Club, Sun Oct 25, 17:00, 5 people, Resty {{copy:468118574}}. On-yasai, Tue Oct 27, 20:00, 5 people, Ebica {{copy:468119458}}. Endo, Thu Oct 29, 13:30, 5 people. [Endo confirmation number — pending, do not chase]. Kani Doraku, Fri Oct 30, 18:00, 5 people, SE0767510. Kanawa ekie is cancelled. Nov 2 dinner is a walk-in at Reichan in ekie. Nov 3 dinner at Suishin main store is booked. TableCheck {{copy:XJCU9T}}. Tue Nov 3 at 18:00. 4 guests. Table only. Sat Oct 31 dinner at Kyoya is booked. Tabelog {{copy:FP4YF2QHPJ}}. Sat Oct 31 at 18:30. 5 people. Menami is skipped. Kinmata is skipped. Tue Oct 27 lunch is a walk-in at Udon Izakaya Edobori. Honke Shibato is skipped. Kura Sushi Dotonbori is an idea. No date is picked. Nov 12 dinner is a walk-in at Kaiten Toyama Sushi Ginza at 17:00. Do not book Toyama. Not booked means there is no reservation. Chosen means buy this one now. Booked means the confirmation is saved. Walk-in means no booking is needed. Cancel means a live booking you may cancel. Skip means do not book. Cancelled means the reservation is already cancelled.");
  }
  const bookings = RESTAURANT_BOOKINGS.filter((item) => item.city === state.activeCity);
  const cityPlaces = CITY_FOOD_MAP_PROTOTYPE[state.activeCity] || [];
  list.replaceChildren();
  bookings.forEach((booking) => {
    const record = reservationRecord(booking);
    if (!showArchive && (record.status === "skip" || record.status === "cancelled")) return;
    const party = defaultPartySize(booking);
    const place = cityPlaces.find((candidate) => candidate.name === booking.name);
    const hotelLine = place ? hotelDistanceLine(place, state.activeCity) : "";
    const sightLines = place ? sightDistanceLines(place, state.activeCity) : [];
    const isFamily = state.reservations?.familyOf8Id === booking.id;
    const markers = bookingAttention(booking, record) || ["info"];
    const item = document.createElement("li");
    item.className = `restaurant-booking is-${record.status}${isFamily ? " is-family-eight" : ""}`;
    const bookHref = booking.tabelogUrl || booking.officialUrl || "";
    item.innerHTML = `
      <div class="restaurant-booking-topline">
        <strong>${escapeHtml(booking.name)}</strong>
        <span class="restaurant-booking-flags">${markers.map(attentionFlag).join("")}<span class="restaurant-party-pill">${party} people</span></span>
      </div>
      <p class="restaurant-booking-slot">${escapeHtml(booking.slot)} · ${escapeHtml(booking.strength)}</p>
      <p>${collapsedNoteHtml(booking.why, "Details")}</p>
      ${hotelLine ? `<details class="booking-distances"><summary>Distances</summary><p class="city-food-distances">${escapeHtml(hotelLine)}${sightLines.length ? `<br>${sightLines.map((line) => escapeHtml(line)).join("<br>")}` : ""}</p></details>` : ""}
      <div class="restaurant-booking-actions">
        ${bookHref && record.status !== "cancelled" && record.status !== "walk_in" && booking.id !== "kura-dotonbori" ? `<a href="${escapeHtml(bookHref)}" target="_blank" rel="noopener">${booking.tabelogUrl ? "Book on Tabelog" : "Official / hotel"} ↗</a>` : ""}
        ${booking.confirmUrl ? `<a href="${escapeHtml(booking.confirmUrl)}" target="_blank" rel="noopener">Open confirmation ↗</a>` : ""}
        ${place ? `<button type="button" data-focus-place="${escapeHtml(place.name)}">Show on map</button>` : ""}
        <label class="restaurant-status-label">Status
          <select data-booking-status="${booking.id}"${record.status === "cancelled" ? " disabled" : ""}>
            <option value="open"${record.status === "open" ? " selected" : ""}>Not booked — no reservation yet</option>
            <option value="walk_in"${record.status === "walk_in" ? " selected" : ""}>Walk-in — no booking needed</option>
            <option value="chosen"${record.status === "chosen" ? " selected" : ""}>Chosen — book this one now</option>
            <option value="booked"${record.status === "booked" ? " selected" : ""}>Booked — confirmation saved</option>
            <option value="cancel_needed"${record.status === "cancel_needed" ? " selected" : ""}>Cancel — live booking to cancel</option>
            <option value="skip"${record.status === "skip" ? " selected" : ""}>Skip — do not book</option>
            <option value="cancelled"${record.status === "cancelled" ? " selected" : ""}>Cancelled — reservation is cancelled</option>
          </select>
        </label>
        ${booking.city === "osaka" || booking.city === "kyoto" ? `<label class="restaurant-family-label"><input type="checkbox" data-family-eight="${booking.id}"${isFamily ? " checked" : ""}> Family of 8 — only if this meal is for 8</label>` : ""}
      </div>
      <label class="restaurant-confirm-label">Confirmation number
        <input type="text" data-booking-note="${booking.id}" value="${escapeHtml(record.confirmation || record.notes)}" placeholder="[confirmation number — needs confirmation]"${record.status === "cancelled" ? " disabled" : ""}>
      </label>
    `;
    list.appendChild(item);
  });
  list.querySelectorAll("select[data-booking-status]").forEach((select) => {
    select.addEventListener("change", () => {
      setReservationRecord(select.dataset.bookingStatus, { status: select.value });
      renderRestaurantBookings();
    });
  });
  list.querySelectorAll("input[data-booking-note]").forEach((input) => {
    input.addEventListener("change", () => {
      setReservationRecord(input.dataset.bookingNote, { confirmation: input.value, notes: input.value });
    });
  });
  list.querySelectorAll("input[data-family-eight]").forEach((input) => {
    input.addEventListener("change", () => {
      state.reservations.familyOf8Id = input.checked ? input.dataset.familyEight : "";
      saveState();
      renderCityFoodMapPrototype();
    });
  });
  list.querySelectorAll("button[data-focus-place]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = document.querySelectorAll(".city-food-place");
      const match = [...card].find((node) => node.querySelector("h3")?.textContent === button.dataset.focusPlace);
      match?.click();
      match?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
  renderOpenConfirmations();
}

function renderCityFoodMapPrototype() {
  const mapElement = document.querySelector("#cityFoodLeafletMap");
  const list = document.querySelector("#cityFoodList");
  const filters = document.querySelector("#cityFoodFilters");
  const subfilters = document.querySelector("#cityFoodSubfilters");
  const resultCount = document.querySelector("#cityFoodResultCount");
  const title = document.querySelector("#cityFoodMapTitle");
  const label = document.querySelector("#cityFoodMapLabel");
  const intro = document.querySelector("#cityFoodIntroCopy");
  if (!mapElement || !list || !filters || !subfilters) return;

  renderRestaurantBookings();
  activeCityFoodPrototypeMap?.remove();
  activeCityFoodPrototypeMap = null;
  const places = CITY_FOOD_MAP_PROTOTYPE[state.activeCity] || [];
  const foodCategories = state.activeCity === "osaka" ? OSAKA_FOOD_CATEGORIES
    : state.activeCity === "kyoto" ? KYOTO_FOOD_CATEGORIES
      : state.activeCity === "hiroshima" ? HIROSHIMA_FOOD_CATEGORIES
        : state.activeCity === "tokyo" ? TOKYO_FOOD_CATEGORIES : CITY_FOOD_TYPES;
  const primaryFoodTypes = state.activeCity === "osaka" ? OSAKA_PRIMARY_FOOD_TYPES
    : state.activeCity === "kyoto" ? KYOTO_PRIMARY_FOOD_TYPES
      : state.activeCity === "hiroshima" ? HIROSHIMA_PRIMARY_FOOD_TYPES
        : state.activeCity === "tokyo" ? TOKYO_PRIMARY_FOOD_TYPES : CITY_FOOD_TYPES;
  if (title) title.textContent = `${activeCity().name} Food Map`;
  const isResearchedCity = ["osaka", "kyoto", "hiroshima", "tokyo"].includes(state.activeCity);
  if (label) label.textContent = state.activeCity === "osaka" ? "Osaka food scout · researched picks"
    : state.activeCity === "kyoto" ? "Kyoto food scout · itinerary-matched picks"
      : state.activeCity === "hiroshima" ? "Hiroshima food scout · station, Peace Park & Miyajima"
        : state.activeCity === "tokyo" ? "Tokyo food scout · hotel, day routes & final dinner" : "Snack scout · sample data";
  if (intro) intro.innerHTML = state.activeCity === "osaka"
    ? "<strong>What kind of Osaka food sounds good?</strong> Filter the map by local specialty—from takoyaki and kushikatsu to izakayas, noodles, cafés, and conbini."
    : state.activeCity === "kyoto"
      ? "<strong>What kind of Kyoto food sounds good?</strong> Start with meals, tea, sweets, or hotel-near conbini; meals and sweets then open into the city's traditional specialties."
      : state.activeCity === "hiroshima"
        ? "<strong>What kind of Hiroshima food sounds good?</strong> Start with meals, cafés, sweets, or hotel-near conbini; meals and sweets then open into Hiroshima and Miyajima specialties."
        : state.activeCity === "tokyo"
          ? "<strong>What kind of Tokyo food sounds good?</strong> Start with meals, kissaten, sweets, or hotel-near conbini; meals and sweets then open into Edo traditions and neighborhood favorites."
          : "<strong>What sounds good nearby?</strong> Explore the sample meals, cafés, conbini, and sweet shops for this city.";
  let selectedPrimaryType = "all";
  let selectedCategory = "all";

  const draw = () => {
    const primaryKeys = Object.keys(primaryFoodTypes);
    const categoryKeys = Object.keys(foodCategories);
    const visiblePlaces = places.filter((place) => {
      if (selectedPrimaryType !== "all" && place.type !== selectedPrimaryType) return false;
      if (!showArchive) {
        const linked = bookingForPlace(place);
        if (linked) {
          const record = reservationRecord(linked);
          if (record.status === "skip" || record.status === "cancelled") return false;
        }
      }
      return selectedCategory === "all" || cityFoodCategory(place) === selectedCategory;
    }).slice();
    visiblePlaces.sort((a, b) => primaryKeys.indexOf(a.type) - primaryKeys.indexOf(b.type)
      || categoryKeys.indexOf(cityFoodCategory(a)) - categoryKeys.indexOf(cityFoodCategory(b))
      || a.name.localeCompare(b.name));
    const selectionLabel = selectedCategory !== "all"
      ? foodCategories[selectedCategory].label
      : selectedPrimaryType !== "all" ? primaryFoodTypes[selectedPrimaryType].label : "food overview";
    if (resultCount) resultCount.textContent = `${visiblePlaces.length} ${isResearchedCity ? "researched" : "sample"} ${visiblePlaces.length === 1 ? "place" : "places"} · ${selectionLabel}`;
    list.replaceChildren();
    activeCityFoodPrototypeMap?.remove();
    activeCityFoodPrototypeMap = null;
    mapElement.replaceChildren();

    const cards = new Map();
    let previousGroup = null;
    visiblePlaces.forEach((place) => {
      const category = cityFoodCategory(place);
      const showPrimaryGroups = selectedPrimaryType === "all";
      const showCategoryGroups = selectedPrimaryType !== "all" && selectedCategory === "all" && !subfilters.hidden;
      const group = showPrimaryGroups ? place.type : showCategoryGroups ? category : null;
      if (group && group !== previousGroup) {
        const groupMeta = showPrimaryGroups ? primaryFoodTypes[group] : foodCategories[group];
        if (groupMeta) {
          const heading = document.createElement("h3");
          heading.className = "city-food-group-heading";
          heading.innerHTML = `<span aria-hidden="true">${groupMeta.icon}</span>${escapeHtml(groupMeta.label)}`;
          list.appendChild(heading);
          previousGroup = group;
        }
      }
      const booking = bookingForPlace(place);
      const tabelogUrl = place.tabelogUrl || booking?.tabelogUrl;
      const hotelLine = hotelDistanceLine(place, state.activeCity);
      const sightLines = sightDistanceLines(place, state.activeCity);
      const party = booking ? defaultPartySize(booking) : null;
      const card = document.createElement("article");
      card.className = `city-food-place is-${place.type}${booking ? " is-reservable" : ""}`;
      card.innerHTML = `
        <div class="city-food-place-topline"><span><i aria-hidden="true">${foodCategories[category]?.icon || foodCategories[place.type]?.icon || "🍽️"}</i>${escapeHtml(place.typeLabel)}</span><strong>${escapeHtml(place.price)}</strong></div>
        <h3>${escapeHtml(place.name)}</h3>
        <p class="city-food-area">${escapeHtml(place.area)}${party ? (booking && reservationRecord(booking).status === "walk_in" ? ` · walk-in for ${party}` : booking && reservationRecord(booking).status === "open" ? "" : ` · book for ${party}`) : ""}</p>
        <p>${escapeHtml(place.note)}</p>
        ${hotelLine ? `<p class="city-food-distances"><span>${escapeHtml(hotelLine)}</span>${sightLines.map((line) => `<span>${escapeHtml(line)}</span>`).join("")}</p>` : ""}
        <div class="city-food-place-links">
          <a href="${mapsSearchUrl(`${place.name}, ${activeCity().name}, Japan`)}" target="_blank" rel="noopener">Open in Google Maps ↗</a>
          ${tabelogUrl ? `<a href="${escapeHtml(tabelogUrl)}" target="_blank" rel="noopener">${place.reserve === "no" ? "Open the Tabelog page" : "Tabelog / reserve"} ↗</a>` : ""}
          ${booking?.confirmUrl ? `<a href="${escapeHtml(booking.confirmUrl)}" target="_blank" rel="noopener">Open confirmation ↗</a>` : ""}
          ${place.officialUrl && place.officialUrl !== tabelogUrl ? `<a href="${escapeHtml(place.officialUrl)}" target="_blank" rel="noopener">Official details ↗</a>` : ""}
        </div>
      `;
      cards.set(place.name, card);
      list.appendChild(card);
    });

    if (!window.L || !visiblePlaces.length) {
      mapElement.classList.add("map-unavailable");
      mapElement.textContent = visiblePlaces.length ? "Map unavailable; place cards are still shown." : "No places in this filter.";
      return;
    }
    mapElement.classList.remove("map-unavailable");
    const map = L.map(mapElement, { scrollWheelZoom: false, zoomControl: true });
    activeCityFoodPrototypeMap = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    const points = [];
    const markers = new Map();
    visiblePlaces.forEach((place) => {
      points.push(place.coordinates);
      const icon = L.divIcon({
        className: `city-food-marker-shell is-${place.type}`,
        html: `<span aria-hidden="true">${foodCategories[cityFoodCategory(place)]?.icon || CITY_FOOD_TYPES[place.type]?.icon || "🍽️"}</span>`,
        iconSize: [38, 46],
        iconAnchor: [19, 46],
        tooltipAnchor: [0, -37]
      });
      const marker = L.marker(place.coordinates, { icon, keyboard: true, title: place.name }).addTo(map);
      markers.set(place.name, marker);
      marker.bindTooltip(`<strong>${escapeHtml(place.name)}</strong><br>${escapeHtml(place.area)}`, { direction: "top", offset: [0, -4] });
      marker.on("click", () => {
        cards.forEach((card) => card.classList.remove("is-selected"));
        const card = cards.get(place.name);
        card?.classList.add("is-selected");
        card?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    const hotelName = CITY_HOTEL_BY_CITY[state.activeCity];
    const hotelCoords = placeCoordinates(hotelName);
    if (hotelCoords) {
      points.push(hotelCoords);
      const hotelIcon = L.divIcon({
        className: "city-food-marker-shell is-hotel",
        html: `<span aria-hidden="true">${HOTEL_MARKER_ICON}</span>`,
        iconSize: [38, 46],
        iconAnchor: [19, 46],
        tooltipAnchor: [0, -37]
      });
      L.marker(hotelCoords, { icon: hotelIcon, keyboard: true, title: hotelName }).addTo(map)
        .bindTooltip(`<strong>${escapeHtml(hotelName)}</strong><br>This chapter's hotel`, { direction: "top", offset: [0, -4] });
    }
    cards.forEach((card, placeName) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest("a")) return;
        cards.forEach((candidate) => candidate.classList.remove("is-selected"));
        card.classList.add("is-selected");
        const marker = markers.get(placeName);
        if (marker) {
          map.panTo(marker.getLatLng());
          marker.openTooltip();
        }
      });
    });
    const bounds = L.latLngBounds(points);
    if (bounds.isValid()) map.fitBounds(bounds, { padding: [28, 28], maxZoom: 13 });
    else map.setView(mapFrameCenters[state.activeCity], 11);
    map.whenReady(() => map.invalidateSize());
  };

  const renderSubfilters = () => {
    subfilters.replaceChildren();
    selectedCategory = "all";
    const supportsSubcategories = ["osaka", "kyoto", "hiroshima", "tokyo"].includes(state.activeCity) && ["restaurant", "sweet"].includes(selectedPrimaryType);
    if (!supportsSubcategories) {
      subfilters.hidden = true;
      return;
    }
    const availableCategories = Object.entries(foodCategories).filter(([value]) =>
      places.some((place) => place.type === selectedPrimaryType && cityFoodCategory(place) === value));
    subfilters.hidden = !availableCategories.length;
    availableCategories.forEach(([value, meta]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.foodCategory = value;
      const count = places.filter((place) => place.type === selectedPrimaryType && cityFoodCategory(place) === value).length;
      button.innerHTML = `<span aria-hidden="true">${meta.icon}</span><strong>${escapeHtml(meta.label)}</strong><small>${count}</small>`;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        selectedCategory = selectedCategory === value ? "all" : value;
        subfilters.querySelectorAll("button").forEach((candidate) => {
          const active = candidate.dataset.foodCategory === selectedCategory;
          candidate.classList.toggle("active", active);
          candidate.setAttribute("aria-pressed", String(active));
        });
        draw();
      });
      subfilters.appendChild(button);
    });
  };

  filters.replaceChildren();
  Object.entries(primaryFoodTypes).map(([value, meta]) => [value, meta.label, meta.icon]).forEach(([value, label, icon]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.foodType = value;
    const count = places.filter((place) => place.type === value).length;
    const tileArt = primaryFoodTypes[value].tileImage
      ? `<span class="food-filter-art" aria-hidden="true"><img src="${primaryFoodTypes[value].tileImage}" alt=""></span>`
      : `<span class="food-filter-orb" aria-hidden="true"><i>${icon}</i><b></b></span>`;
    button.innerHTML = `
      ${tileArt}
      <span class="food-filter-copy"><strong>${label}</strong><small>${count} ${count === 1 ? "spot" : "spots"}</small></span>
      <span class="food-filter-check" aria-hidden="true">✓</span>
    `;
    button.classList.toggle("active", value === selectedPrimaryType);
    button.setAttribute("aria-pressed", String(value === selectedPrimaryType));
    button.addEventListener("click", () => {
      selectedPrimaryType = selectedPrimaryType === value ? "all" : value;
      filters.querySelectorAll("button").forEach((candidate) => {
        const active = candidate.dataset.foodType === selectedPrimaryType;
        candidate.classList.toggle("active", active);
        candidate.setAttribute("aria-pressed", String(active));
      });
      renderSubfilters();
      draw();
    });
    filters.appendChild(button);
  });
  draw();
}
/* FOOD MAP PROTOTYPE END */

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
  const questList = document.querySelector("#tripQuestList");
  if (questList) {
    questList.innerHTML = `
      <li><strong>Daily main goals</strong><span>${completed.length} / ${tasks.length}</span><p>Open a day. Complete the main goal there. The ring counts those goals.</p></li>
      ${coreExperienceQuests.map((group) => `<li><strong>${escapeHtml(group.title)}</strong><span>${group.items.length} items</span><p>${escapeHtml(group.description)}</p><ol>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol></li>`).join("")}
      <li><strong>${escapeHtml(activeCity().name)} discoveries</strong><span>${cityDone} / ${cityQuests.length}</span><p>Open ${escapeHtml(activeCity().name)} Quests. Check a discovery when you do it.</p></li>
    `;
  }
}

function escapeIcsText(value) {
  return String(value || "")
    .replaceAll("\\", "\\\\")
    .replaceAll("\n", "\\n")
    .replaceAll(",", "\\,")
    .replaceAll(";", "\\;");
}

function reservationCalendar(items) {
  const stamp = new Date().toISOString().replaceAll(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const events = items.map((item) => {
    const date = item.recommendedOn.replaceAll("-", "");
    const uidName = item.name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "");
    return [
      "BEGIN:VEVENT",
      `UID:${uidName}-${item.recommendedOn}@japan-trip-hunt`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${date}`,
      `SUMMARY:${escapeIcsText(`Japan trip: ${item.name}`)}`,
      `DESCRIPTION:${escapeIcsText(`Trip target: ${item.target}\n${plainGuideText(item.note)}`)}`,
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeIcsText(`Tomorrow: ${item.name}`)}`,
      "END:VALARM",
      "END:VEVENT"
    ].join("\r\n");
  });
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "PRODID:-//Japan Trip Hunt//Reservation Reminders//EN", ...events, "END:VCALENDAR", ""].join("\r\n");
}

function reservationCalendarHref(items) {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(reservationCalendar(items))}`;
}

function countdownMeta(isoDate) {
  const today = Date.parse(`${todayIso()}T00:00:00Z`);
  const days = Math.ceil((Date.parse(`${isoDate}T00:00:00Z`) - today) / 86400000);
  const dateObject = new Date(`${isoDate}T00:00:00Z`);
  const monthLabel = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" }).format(dateObject);
  const dayLabel = new Intl.DateTimeFormat("en", { day: "2-digit", timeZone: "UTC" }).format(dateObject);
  return { days, monthLabel, dayLabel };
}

function walkInReminderItemsHtml(items) {
  return items.map((item) => {
    const { days, monthLabel, dayLabel } = countdownMeta(item.recommendedOn);
    const countdown = days < 0 ? "Passed" : days === 0 ? "Today" : `${days} days`;
    const done = Boolean(item.questId && state.deckDone[item.questId]);
    const calendarName = `japan-trip-${item.name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "")}.ics`;
    return `<li class="${days >= 0 && days <= 7 ? "is-urgent" : ""}${done ? " is-done" : ""}">
      <time class="reservation-date-tile" datetime="${item.recommendedOn}"><span>${monthLabel}</span><strong>${dayLabel}</strong></time>
      <div class="reservation-countdown-copy">
        <div class="reservation-title-row"><strong>${escapeHtml(item.name)}</strong><span class="reservation-countdown-pill">${countdown}</span></div>
        <p>${collapsedNoteHtml(item.note, "Details")}</p>
        <small>Walk-in · no reservation # · ${escapeHtml(item.target)}</small>
        ${item.questId ? `<label class="walk-in-check"><input type="checkbox" data-walk-in-quest="${escapeHtml(item.questId)}"${done ? " checked" : ""}> ${escapeHtml(item.checkLabel || "Got it")}</label>` : ""}
        <a class="calendar-reminder" href="${reservationCalendarHref([item])}" download="${calendarName}" aria-label="Add ${escapeHtml(item.name)} reminder to calendar"><span aria-hidden="true">🗓</span> Add reminder</a>
      </div>
    </li>`;
  }).join("");
}

function bindWalkInChecks(root) {
  root.querySelectorAll("input[data-walk-in-quest]").forEach((input) => {
    if (input.dataset.bound === "true") return;
    input.dataset.bound = "true";
    input.addEventListener("change", () => {
      const questId = input.dataset.walkInQuest;
      if (!questId) return;
      if (input.checked) state.deckDone[questId] = true;
      else delete state.deckDone[questId];
      saveState();
      document.querySelectorAll(`input[data-walk-in-quest="${questId}"]`).forEach((peer) => {
        peer.checked = input.checked;
        peer.closest("li")?.classList.toggle("is-done", input.checked);
      });
    });
  });
}

function renderWalkInReminders(list) {
  const target = list || document.querySelector("#walkInReminderList");
  if (!target) return;
  target.innerHTML = walkInReminderItemsHtml(WALK_IN_REMINDERS);
  bindWalkInChecks(target);
}

function renderLockedHotelsPanel() {
  const panel = document.querySelector(".locked-hotels-panel");
  const list = panel?.querySelector(".locked-hotel-list");
  const reservationList = panel?.querySelector(".reservation-countdown-list");
  const addAllButton = panel?.querySelector("#addAllReservationReminders");
  const badge = panel?.querySelector(".count-badge");
  if (!list) return;
  const pendingReservations = RESERVATION_COUNTDOWN.filter((item) => !item.done);
  if (badge) badge.textContent = `${LOCKED_HOTELS.length} locked · ${pendingReservations.length} still open`;
  list.innerHTML = LOCKED_HOTELS.map((hotel) => `
    <li>
      <span><strong>${hotel.dates}</strong><small>${collapsedNoteHtml(hotel.note, "Details")}</small></span>
      <a href="${hotel.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(hotel.name)} ↗</a>
    </li>
  `).join("");
  if (addAllButton) addAllButton.href = reservationCalendarHref(pendingReservations);
  renderWalkInReminders();
  if (reservationList) {
    const today = Date.parse(`${todayIso()}T00:00:00Z`);
    reservationList.innerHTML = RESERVATION_COUNTDOWN.filter((item) => showArchive || (item.attention || (item.done ? "done" : "needs-confirmation")) !== "done").map((item) => {
      const days = Math.ceil((Date.parse(`${item.recommendedOn}T00:00:00Z`) - today) / 86400000);
      const attention = item.attention || (item.done ? "done" : "needs-confirmation");
      const countdown = attention === "booked" ? "BOOKED" : item.done ? "Done" : days < 0 ? "Still open" : days === 0 ? "Do now" : `${days} days`;
      const dateObject = new Date(`${item.recommendedOn}T00:00:00Z`);
      const monthLabel = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" }).format(dateObject);
      const dayLabel = new Intl.DateTimeFormat("en", { day: "2-digit", timeZone: "UTC" }).format(dateObject);
      const name = item.url
        ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.name)} ↗</a>`
        : `<strong>${escapeHtml(item.name)}</strong>`;
      const calendarName = `japan-trip-${item.name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "")}.ics`;
      const rowClass = attention === "booked" ? "is-booked" : item.done ? "is-done" : days <= 7 ? "is-urgent" : "";
      return `<li class="${rowClass}">
        <time class="reservation-date-tile" datetime="${item.recommendedOn}"><span>${monthLabel}</span><strong>${dayLabel}</strong></time>
        <div class="reservation-countdown-copy">
          <div class="reservation-title-row">${name}<span class="reservation-countdown-pill">${countdown}</span>${attentionFlag(attention)}</div>
          <p>${collapsedNoteHtml(item.note, "Details")}</p>
          <small>Trip target · ${escapeHtml(item.target)}</small>
          ${item.done ? "" : `<a class="calendar-reminder" href="${reservationCalendarHref([item])}" download="${calendarName}" aria-label="Add ${escapeHtml(item.name)} reminder to calendar"><span aria-hidden="true">🗓</span> Add reminder</a>`}
        </div>
      </li>`;
    }).join("");
  }
}

function renderOverview() {
  const review = document.querySelector("#planeRideReview");
  if (review) review.innerHTML = "";
  document.querySelector("#albumGrid").innerHTML = "";
  document.querySelector("#calendarGrid").innerHTML = "";

  renderLockedHotelsPanel();
  renderOpenConfirmations();
  renderTripRouteMap();
  renderCalendar();
  renderTripQuestDashboard();
  renderCityDiscoveryChecklist();
  renderCityFoodMapPrototype();
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
        <desc id="tripMapDesc">Colored travel legs connect Osaka, Kyoto, Hiroshima, Tokyo and Hakone. Hover or focus a leg for its travel time.</desc>
        <g class="japan-outline" aria-hidden="true">
          <path d="M583.7 98.2L590.5 101.5L598.3 110.2L603.9 113.3L608.6 113.2L625.6 107.4L613.6 119.3L611.4 126L611.9 139.3L615.4 141.6L621.5 140L625.5 141.8L614.4 145.1L610.5 143.4L597.4 144.5L589.3 143.2L578.6 137.9L571.7 138.5L558.2 143.4L552.1 147.5L541.8 158.7L526.6 143.1L514 126.2L502.3 122.7L489 124.8L484.6 115.2L478.9 112.8L474 115.3L471.6 119.5L474.6 126.7L479.7 129.3L486.3 143.4L481.6 143.9L474 138L459.5 145.3L456 145.1L453.8 142.3L454 138.7L461.2 129.3L461.8 123.9L458.9 115L463.4 105.7L465 103.9L471.8 103.5L482.7 99.9L485.2 97.4L484.5 92.8L486.1 88.5L488.9 88.3L495.7 95.9L503.5 100L507.7 101L510.7 99.3L515.9 88.1L527 78.8L530.5 71.3L535.9 65.5L539.4 58.3L540.6 50.6L539.9 42.5L545.2 35.6L553.4 35L566.8 71.1L583.7 98.2ZM128.5 298.7L132.9 301.7L139.5 301.3L141.7 304L140.8 307.3L133.5 312.7L142.4 317L139.4 320.8L141.1 324.1L139.2 326L140.4 329.8L126.4 339.4L113.9 355.7L111.2 362.3L104.7 369.4L98.3 365.7L96.7 367.2L96.7 371.7L83.2 375L89 368.1L90.8 357.5L93.7 357L94.3 354.2L91.3 352.6L86.8 356.4L84.4 361.3L85.3 366.6L82.8 368.9L74.4 361.3L74.5 357.1L78.7 357.3L81.4 352.8L80.1 346.2L84.3 336.1L91.1 334.2L102.4 324.1L99.2 321.5L102 319.8L102.7 316.5L101.8 306.6L99.2 302.4L95.5 303.6L93.5 312L97.4 313.5L95.8 318.4L93.1 318.2L89.4 313.3L79.6 316.7L83 312.4L81.5 306.3L83.5 300.4L85.2 307.2L88.8 310.1L88.6 303.8L83.3 293.8L85.4 290.8L91.1 293.8L92.1 290L108.3 289.4L113.8 284.3L120.9 283.8L126.3 287.9L126.4 295.3L128.5 298.7ZM217.7 310.8L224.5 314.7L220.6 326.9L221.9 328.5L210 331.4L204.4 335.3L200.4 340.8L197.3 332.1L189.8 326.8L179.1 328L172 335.3L167.4 337.1L164.6 341.1L159.1 342.2L155.1 340.2L158.6 336.5L153.3 333.8L154.4 330.9L153.4 328.6L158.5 322.2L156.3 319.9L157.8 316.8L146.9 315.8L166.9 311L174.3 303L179.5 301.3L182.4 308.6L184 309L195 310.4L198 307.3L198.4 303.5L200.9 304.7L208.5 303.8L211.8 304.7L217.7 310.8ZM482.8 157.8L489 159.1L483.7 168.2L479.7 180.2L479.1 184.1L483.5 197.6L482.1 215.3L477.2 226.5L471.2 235.7L463.3 237.5L457.8 243L451.2 253.5L441.2 251.9L435.1 256.3L431.7 262.3L428.3 278.5L423 289.3L420.7 292.5L411.2 298.5L400.9 312.6L399.9 318.5L402.1 331.6L395.3 331.2L388.8 334.1L382 343.4L372.6 344.8L367.3 347.8L365.6 346.5L365 344.7L366.8 343.5L370 334.3L380.5 328L378.8 324.3L374.8 323.1L371 327.5L366.9 329L367.3 334.9L364.3 337.4L361.1 330.7L355.1 329L350.6 331.7L345.4 341.1L340.9 344.5L336.2 345.5L335.3 342.2L339.9 333.9L343.1 333.4L339.7 328.4L335.6 328.1L319.5 339.5L303.9 330.8L290.6 328.4L297.9 326.9L298.5 324.6L292.2 322.3L291.3 319.4L289.4 322.8L287.7 321.7L290.3 313.8L292.2 312.4L290 311L286.3 311.9L278.4 319.9L284.1 331.2L282 334.4L266.9 333.6L248.5 348.7L242 348.8L236.6 344.2L234.1 326.6L237 317.5L244 315.6L249.2 310.4L239.9 306.1L233.9 298.8L220.7 295.3L211.3 298.3L196.8 295.9L187.4 296.9L184.6 294.8L174.3 293.7L169.7 287.9L166.6 287.7L163.4 290L156.2 301.3L148.6 290.4L134.3 288.4L131.2 284.5L126.7 284.3L129.6 275L134.2 272.1L143.3 275.1L174.1 265.2L190.3 257.3L197.2 256.7L206.5 258.8L208 263L224 267.7L257.4 272.4L259.4 274.1L256.9 277.8L258.5 280.9L267.2 285.2L274.2 284.3L281.1 281.2L281.7 273.3L284.8 269.9L308.8 256.8L312.8 250.7L315.1 242.6L320.6 238.1L334.6 238.7L333.9 241.5L318.7 247L320 250.9L318.1 257L322.9 262L325.5 262.5L332.2 258.6L356.1 258.4L367.3 253.7L378.4 244.6L393.8 241.5L402.9 230.4L414.9 221.4L422.1 211.6L427.6 207.2L431 200.7L432.2 192.8L426.6 188.1L432.1 186.6L437.7 180.2L439 170.7L441.8 166.8L452 164.6L455.7 160.2L456.9 155L459.6 153.6L465.3 157.1L462.8 167.2L463.7 169.9L469.9 168.3L473.8 172L477.9 169.8L481.1 163.2L480.5 161.5L469 160.7L470.5 157.1L477.1 150.6L482.8 157.8Z" />
        </g>
        ${makeRouteLegSvg("leg-kyoto-hiroshima", "#7b61b9", "M263.2 301.6 Q221 262 171 287.2", "2", "Kyoto → Hiroshima", "~1 hr 45", "train time · Himeji stop", 214, 236)}
        ${makeRouteLegSvg("leg-hiroshima-tokyo", "#2b8a78", "M171 287.2 Q273 220 370.3 320.6", "3", "Hiroshima → Tokyo", "~4 hr", "Shinkansen", 268, 196)}
        ${makeRouteLegSvg("leg-tokyo-hakone", "#d28732", "M370.3 320.6 Q363 300 356 323", "4", "Tokyo → Hakone", "~2 hr 15", "Romancecar + mountain railway", 430, 286)}
        ${makeRouteLegSvg("leg-hakone-tokyo", "#3a77b8", "M356 323 Q365 346 370.3 320.6", "5", "Hakone → Tokyo", "~2 hr 15", "return by rail", 430, 368)}
        ${makeRouteLegSvg("leg-osaka-kyoto", "#e06b8f", "M252.4 308.9 Q250 279 263.2 301.6", "1", "Osaka → Kyoto", "~30 min", "via Nara day", 196, 268)}
        ${makeRouteCitySvg(252.4, 308.9, -18, 34, "end", "Osaka", "Oct 24–28 · 4 nights", "osaka")}
        ${makeRouteCitySvg(263.2, 301.6, 16, -20, "start", "Kyoto", "Oct 28–Nov 2 · 5 nights", "kyoto")}
        ${makeRouteCitySvg(171, 287.2, -16, -20, "end", "Hiroshima", "Nov 2–5 · 3 nights", "hiroshima")}
        ${makeRouteCitySvg(370.3, 320.6, 18, -20, "start", "Tokyo", "APA · Nov 5–8 &amp; 11–12", "tokyo-1")}
        ${makeRouteCitySvg(356, 323, -14, 36, "end", "Hakone", "Nov 8–11 · 3 nights", "hakone")}
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
    routeSvg?.setAttribute("viewBox", mobile ? "70 120 470 280" : "50 30 590 355");
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
  if (!host) return;
  if (!state.foodMapLeftPageReady) {
    state.overviewWindows = state.overviewWindows || {};
    state.overviewWindows.overview = 0;
    state.foodMapLeftPageReady = true;
    saveState();
  }
  const review = host.querySelector("#planeRideReview");
  const unlocked = todayIso() >= "2026-11-10";
  mountFoodPanel();
  const windows = [host.querySelector("#calendarView"), host.querySelector("#tripQuestView"), host.querySelector("#cityQuestView"), host.querySelector("#photoAlbum")].filter(Boolean);
  const labels = ["Calendar", "Trip Questions", `${activeCity().name} Quests`, "Album"];
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
        ${(() => {
          const openItems = openMustDos(day.id);
          if (!openItems.length) return "";
          const unbooked = openItems.some((item) => (item.markers || [item.marker]).includes("not-booked"));
          const label = unbooked ? "Not booked" : "Needs confirmation";
          const marker = unbooked ? "not-booked" : "needs-confirmation";
          return `<span class="calendar-open-flag confirm-flag confirm-flag-${marker}">${label} · ${openItems.length}</span>`;
        })()}
        ${WALK_IN_REMINDERS.filter((item) => item.dayId === day.id).map((item) => `<span class="calendar-walk-in">${escapeHtml(item.name)} · walk-in</span>`).join("")}
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
  } else {
    target.classList.remove("has-photo");
  }
  attachCalendarShinkansen(day, target.closest(".calendar-day"));
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
  hakone: [35.24945, 139.04799]
};

const overviewMapChapters = [
  { id: "osaka", label: "Osaka", cityId: "osaka", dayIds: ["day02", "day03", "day04", "day05", "day06"] },
  { id: "kyoto", label: "Kyoto", cityId: "kyoto", dayIds: ["day07", "day08", "day09", "day10"] },
  { id: "hiroshima", label: "Hiroshima", cityId: "hiroshima", dayIds: ["day11", "day12", "day13"] },
  { id: "tokyo-1", label: "Tokyo 1", cityId: "tokyo", dayIds: ["day14", "day15", "day16"] },
  { id: "hakone", label: "Hakone", cityId: "tokyo", dayIds: ["day17", "day18", "day19"] },
  { id: "tokyo-2", label: "Tokyo 2", cityId: "tokyo", dayIds: ["day20", "day21"] }
];

const overviewDayColors = ["#d75f16", "#c7437a", "#285b96", "#397b8f", "#7b61b9"];

const overviewMapViews = {
  kyoto: { center: [34.9858, 135.7588], zoom: 11 },
  "tokyo-1": { center: [35.6812, 139.68], zoom: 11 },
  hakone: { center: [35.24945, 139.04799], zoom: 12 },
  "tokyo-2": { center: [35.6812, 139.7671], zoom: 12 }
};

const overviewMapFitDayIds = {
  hiroshima: ["day12", "day13"]
};

const placeBackground = {
  "Narita International Airport": "The current nonstop flight reaches NRT around 09:30 on Oct 24. Allow roughly two hours for immigration and baggage before continuing to Shinagawa for the Osaka transfer.",
  "Haneda Airport": "Mom (Cynthia King) and Dad depart Haneda on Nov 10. The date is confirmed. Their Tokyo hotel for Nov 5–10 is not in this app. Their flight number is not in this app. Mai and Brian leave HND at 01:00 on Nov 13 on BA4609, operated by JAL, then connect at LHR.",
  "Shinagawa Station": "Shinagawa is the preferred Tokaido Shinkansen boarding point for the arrival-day Osaka transfer. Reserve a train with enough Narita and luggage margin.",
  "Shin-Osaka Station": "Shin-Osaka is the Tokaido Shinkansen terminus for the arrival-day transfer. Continue to Hommachi and notify Hotel Cordia in advance that check-in will be late.",
  "Kansai International Airport": "KIX sits on an artificial island in Osaka Bay and is the main international gateway for the Kansai region. This itinerary does not land at KIX. The Oct 24 arrival is Narita, then the Shinkansen to Osaka.",
  "Namba Station Osaka": "Namba links the Midosuji subway, private railways toward Nara, and the Namba entertainment zone. The hotel is Hotel Cordia in Hommachi, not a Namba hotel. Day 2 does not include a Dotonbori walk.",
  "Namba Osaka": "Namba is a south-Osaka hub, not the hotel. The reset point is Hotel Cordia Osaka Hommachi. Return to Hommachi to rest and stop eating before Tenma or the Kobe day.",
  "Ebisu Bridge Osaka": "Ebisu Bridge spans the Dotonbori canal and is one of the district's classic photo points, with neon, canal reflections and the running Glico sign nearby. On arrival night it works as a single contained reveal rather than the start of a long crawl.",
  "Dotonbori Osaka": "Dotonbori grew from a 17th-century canal project into Osaka's loudest food-and-entertainment strip. Day 2 does not go to Dotonbori. Do not treat this pin as an arrival-night plan.",
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
  "Kintetsu Nara Station": "Kintetsu-Nara is closer to Todai-ji than JR Nara. Store the big bags in the coin-locker room by the West ticket gate. Then use East gate Exit 2 for Nara Park and Todai-ji. Collect the bags at the West gate before the train to Kyoto.",
  "Nara Park": "Nara Park preserves a landscape where deer, temples and open grass have coexisted for centuries. Keep deer encounters playful and brief—they open the day, but Todai-ji's scale is the capstone.",
  "Todai-ji Temple": "Todai-ji's Great Buddha Hall houses one of the world's largest bronze Buddha images, cast in the 8th century during political and epidemic anxiety. The present hall is smaller than its medieval predecessor, which makes the surviving scale even more startling.",
  "Naramachi": "Naramachi preserves merchant-lane townhouses and small shops south of the park. A short café or shopfront pause here transitions the day from sacred Nara toward Kyoto without adding another major sight.",
  "Kyoto Station": "Kyoto Station is a modern hub at the city's southern edge, linking Shinkansen, subways, buses and luggage services. On transfer days it is logistics—tickets, ekiben, bag forwarding—not a sightseeing destination.",
  "To-ji Temple": "To-ji's five-story pagoda is one of Kyoto's most recognizable skyline markers and the temple grounds are free to enter early. Use it only as an earned dawn bonus when luggage is handled and Himeji timing stays intact.",
  "Himeji Station": "Himeji Station sits a short walk or bus ride from the castle complex. Arriving before opening keeps the white-keep reveal humane and leaves margin for garden time and the westbound train.",
  "Himeji Castle": "Himeji is called the White Heron Castle because its pale plastered walls seem to lift above the city. Defensive design—narrow gates, confusing approaches, steep interiors—sits inside that beauty. The visit is booked. Enter between 09:30 and 10:00. Remove your shoes in the main keep. Bring socks with grip.",
  "Koko-en Garden": "Koko-en is a set of nine Edo-style gardens beside the castle moat, built on the site of samurai residences. It frames the keep from below. Visit it before the castle or after the castle. You can enter from 09:00. The garden closes at 17:00.",
  "Hiroshima Station": "Hiroshima Station anchors the city's modern rail network and ekiben culture. On Day 11 it is the evening arrival point; on Day 14 it is where the eastbound tasting ritual begins before Tokyo.",
  "Hiroshima Peace Memorial Museum": "The museum presents evidence of the August 6, 1945 bombing and its human cost through objects, testimony and context. Visit while attention is strongest; the experience is meant to be faced directly, not rushed through as one item on a list.",
  "Hiroshima Peace Memorial Park": "The park links the museum, Cenotaph, Peace Flame and Atomic Bomb Dome along a designed memorial axis. Walking the axis after the museum lets evidence move toward public mourning and commitment rather than staying abstract.",
  "Atomic Bomb Dome": "The dome preserves the ruined Hiroshima Prefectural Industrial Promotion Hall, one of the few structures left standing near the hypocenter. Seeing it at dusk, after the museum and park walk, changes how the ruin reads against the living city around it.",
  "Hiroshima National Peace Memorial Hall": "The Memorial Hall offers a quieter, more contemplative space for remembrance alongside the main museum route. Use it if you need stillness after the primary exhibits rather than adding another crowded attraction.",
  "Miyajimaguchi Station": "Miyajimaguchi is the JR gateway to the ferry for Miyajima (Itsukushima). On Nov 4 the shrine floats from about 16:00 to 20:45. The 11:46 low tide is not low enough to walk to the torii.",
  "Itsukushima Shrine": "Itsukushima was treated as too sacred to build on directly, so worship took place over the water. The floating corridors and great torii still use the tide to blur the boundary between architecture, sea and mountain. On Nov 4, go from 16:00 to 17:20. Do not wait for the 18:21 high tide.",
  "Miyajima Omotesando": "Omotesando is Miyajima's main merchant street for snacks, momiji manju and souvenir browsing. Shops close around 17:00–18:00. Do not feed the deer.",
  "Daisho-in Temple": "Daisho-in climbs the hillside behind the town with lanterns, halls and forest atmosphere away from the busiest waterfront. Go at about 12:30, after Fujitaya. Entry is free. The temple is open from 8:00 to 17:00.",
  "Miyajima Ropeway": "The Miyajima ropeway climbs toward Mount Misen for broad Seto Inland Sea views. Go up from 9:00 to 16:00. The last ride down is 16:30. Do not reserve. It stops in strong wind.",
  "Tokyo Station": "Tokyo Station's red-brick Marunouchi side is both a Shinkansen hub and a symbol of Meiji-era modernisation. On arrival and departure days it handles ekiben, luggage and final train logistics rather than sightseeing.",
  [APA_HOTEL_NAME]: APA_NOTE,
  "Hotel Cordia Osaka Hommachi": "Hotel Cordia Osaka Hommachi is the confirmed Hommachi base for Oct 24–28. Hommachi subway puts Namba, Dotonbori and Tenma within easy reach without sleeping on the loudest nightlife blocks.",
  "Hotel Monterey Kyoto": "Hotel Monterey Kyoto is the confirmed Karasuma Oike / Sanjo base for Oct 28–Nov 2. The central location keeps Nijo, Nishiki, Kamo River and Pontocho practical without deep Higashiyama hills.",
  "Hotel Granvia Hiroshima": "Hotel Granvia Hiroshima is built directly into JR Hiroshima Station—the confirmed base for Nov 2–5. Miyajima ferries, Peace Park taxis and the Tokyo Shinkansen all start from the same building.",
  "Tokinoyu Setsugetsuka": "Tokinoyu Setsugetsuka is booked for Nov 8–11 in Gora, about one minute on foot from Gora Station. Mai booked it on Booking.com. The confirmation number is 6890781811. The room is the Superior Room with Tatami Area and Open-Air Bath for 2 adults. Check-in is from 15:00 to 19:30 on Sun Nov 8. Check-out is by 11:00 on Wed Nov 11. Breakfast and dinner are included. Do not plan another Hakone dinner on Nov 8, Nov 9, or Nov 10. Request the hotpot and Japanese course venue, because Mai avoids sliced meat. Message the hotel through the Booking.com app. The stay is paid in full: JPY 325,507. Pay the hot spring tax at the property: JPY 150 per person per night, JPY 900 total. Free cancellation ends at 23:59 JST on Mon Nov 2. From Nov 3 the fee is the full price. The address is Gora 1300-34, Hakone, Kanagawa. The hotel phone is +81-460-86-1222. MIYA HOUSE was cancelled at no cost on Aug 6. Guest-room open-air baths are not hot spring water. The three private hot-spring baths are free and first-come.",
  "Inokashira Park": "Inokashira Pond supplied water to Edo and later became one of Tokyo's beloved western parks. Ducks, bridges and lakeside paths make it the soft imaginative counterweight to museum time or the full-day fallback.",
  "Kichijoji Sunroad Shopping District": "Kichijoji's covered shotengai and side streets combine cafes, bakeries, music shops and dense residential life. One browse-and-snack loop here keeps the day feeling like a neighbourhood story rather than a museum extraction.",
  "Chofu Station Tokyo": "Chofu is a western Tokyo residential hub and the practical rail access for the friends-day neighbourhood. Treat it as a meeting point, not a destination in itself.",
  "Jindaiji Temple": "Jindaiji traces its foundation to the 8th century and preserves wooded temple lanes and soba tradition on Tokyo's western edge. Use it only if the friends route there—it is an optional parent-paced pause, not a required checklist temple.",
  "Jindai Botanical Gardens": "The botanical gardens beside Jindaiji offer seasonal planting and quiet paths when a gentler outdoor pause fits the friends-day rhythm. Skip if the social route stays entirely in shops and restaurants.",
  "Akko meetup · provisional Chofu Station": "This pin is provisional. [Akko meeting point and time — needs confirmation]. Chofu Station is not a confirmed meetup. Leave Shibuya by 15:30 once the real point is known.",
  "Shinjuku Station": "Shinjuku is one of the world's busiest rail nodes and the launch point for the Odakyu Romancecar to Hakone-Yumoto. On Hakone days it is transfer logistics with small bags only; on return day it reconnects you with the final Tokyo hotel.",
  "Hakone-Yumoto Station": "Hakone-Yumoto is the transfer between the Odakyu line from Shinjuku and Hakone's mountain transport. Change here to the Hakone Tozan Railway for Gora.",
  "Gora Station": "Gora is the mountain railway terminus and cable-car starting point. Setsugetsuka is about one minute away, which makes scheduled public transport the default for the whole stay.",
  "Hakone Open-Air Museum": "The Open-Air Museum combines modern sculpture with mountain scenery. It is one Tozan Railway stop from Gora and two minutes on foot from Chokoku-no-Mori Station; allow 90–120 minutes before its 17:00 close.",
  "Sounzan Station": "Sounzan connects the Hakone Tozan Cable Car to the ropeway. It is the gateway from Gora into the volcanic high route.",
  "Owakudani": "Owakudani is Hakone's active volcanic valley, known for sulfur vents and black eggs. Check live ropeway status before leaving Gora because wind or volcanic conditions can interrupt service.",
  "Togendai Station": "Togendai is the western ropeway terminus and Lake Ashi cruise pier, turning the high route into a continuous loop rather than a backtrack.",
  "Moto-Hakone Port": "Moto-Hakone is the lake gateway for Mai's shrine-first reverse loop. After the early Hakone Shrine visit, return here for breakfast or coffee and the first practical sightseeing cruise toward Togendai.",
  "Hakone Shrine": "Hakone Shrine sits among cedars near Lake Ashi, historically tied to travelers crossing the old Tokaido. Mai's sunrise visit is the Nov 9 anchor: prebook a 05:30 taxi from Setsugetsuka, arrive around 06:00 for the 06:13 sunrise, and note that the amulet and goshuin counter normally starts at 08:15. For an early public return, take the H bus toward Hakone-Yumoto/Odawara and transfer at Kowakidani Station to the Tozan train for Gora.",
  "Kowakidani Station": "Kowakidani Station converts the lake-to-Gora return into scheduled transport: take the H bus from Moto-Hakone toward Kowakidani, then ride the Hakone Tozan Railway uphill to Gora.",
  "Gora Station (Return)": "This final marker closes the public-transport loop at Gora. Setsugetsuka is about one minute from the station, so no hotel shuttle or taxi is needed.",
  "Gora Park": "Gora Park is the close-to-hotel weather fallback, reached by cable car or a steep walk. Use it with the Open-Air Museum when the ropeway or cruise is closed.",
  "Sengoku": "Sengoku is the practical bus hub for northern Hakone, museums and Mount Kintoki trail access. The sightseeing bus links it with Gora; transfer here for Kintoki Shrine Entrance or Kintoki-Tozanguchi.",
  "Kintoki Shrine Entrance": "Kintoki Shrine Entrance is one common starting point for Mount Kintoki. Confirm the exact outbound and return bus stops before hike day.",
  "Mount Kintoki": "Mount Kintoki is a well-known Hakone hike with a Fuji-facing summit when the sky is clear. Allow about four hours of walking plus stops and keep a fixed turnaround time.",
  "Pola Museum of Art": "Pola Museum pairs a strong modern collection with forest architecture in Sengoku. It is the best poor-weather replacement for Mount Kintoki or a closed high loop.",
  "teamLab Borderless Azabudai Hills": "teamLab Borderless uses moving images you walk through. The Entrance Pass is booked. Enter between 12:30 and 13:00. The address is Azabudai Hills Garden Plaza B B1, 5-9 Toranomon, Minato-ku, Tokyo. Open the ticket QR code from the teamLab email. EN TEA HOUSE is inside the museum.",
  "Tokyo Melonpan": "This pin is a placeholder. [melon-bread shop and branch — needs confirmation]. Do not treat Tokyo Melonpan Asakusabashi as the confirmed stop until Mai names the branch.",
  "Final Tokyo Dinner": "The Nov 12 dinner is a walk-in at Kaiten Toyama Sushi Ginza at 17:00. Do not book it. Online booking is for a course only. If Toyama is full, go to Ichiban Kaiten Sushi, then Heiroku Sushi Ginza, then Sushiro aune Yurakucho.",
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
  if (["day17", "day18", "day19"].includes(day.id)) return mapFrameCenters.hakone;
  if (day.id === "day20") return mapFrameCenters.tokyo;
  return mapFrameCenters[state.activeCity] || [36.2048, 138.2529];
}

function mapsRouteUrl(day) {
  const places = dayMapPlaces(day);
  const fallbackHotel = STAY_HOTEL_BY_DAY[day.id] || (state.lodging[state.activeCity] || "").trim();
  const origin = places[0] || fallbackHotel || "Japan";
  const destination = places.at(-1) || origin;
  const waypoints = places.slice(1, -1).join("|");
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
  const journal = document.createElement("section");
  journal.className = "day-journal";
  content.append(journal, grid);
  mountDayJournal(journal, day);
  return card;
}

function makeWindowCarousel(carouselId, windows, labels, storageGroup = "dayWindows") {
  const carousel = document.createElement("section");
  const viewport = document.createElement("div");
  carousel.className = "day-carousel has-side-navigation";
  viewport.className = "day-window-strip";
  viewport.setAttribute("aria-label", "Swipe or drag between windows");

  const previousButton = document.createElement("button");
  const nextButton = document.createElement("button");
  previousButton.type = "button";
  previousButton.className = "carousel-side-jump is-previous";
  previousButton.innerHTML = '<span class="carousel-side-arrow" aria-hidden="true">‹</span><small></small>';
  nextButton.type = "button";
  nextButton.className = "carousel-side-jump is-next";
  nextButton.innerHTML = '<span class="carousel-side-arrow" aria-hidden="true">›</span><small></small>';

  windows.forEach((window, index) => {
    window.querySelector(":scope > .overview-page-nav")?.remove();
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
  let pageButtons = [];
  const pager = document.createElement("div");
  pager.className = carouselId === "overview" ? "overview-page-chips" : "day-page-chips";
  pager.setAttribute("role", "tablist");
  pager.setAttribute("aria-label", carouselId === "overview" ? "Overview pages" : "Day pages");
  let paging = false;
  let settleTimer;
  function updateControls() {
    const previousIndex = (currentIndex - 1 + windows.length) % windows.length;
    const nextIndex = (currentIndex + 1) % windows.length;
    const previousLabel = labels[previousIndex];
    const nextLabel = labels[nextIndex];
    previousButton.setAttribute("aria-label", `Previous carousel page: ${previousLabel}`);
    previousButton.querySelector("small").textContent = previousLabel;
    nextButton.setAttribute("aria-label", `Next carousel page: ${nextLabel}`);
    nextButton.querySelector("small").textContent = nextLabel;
    pageButtons.forEach((button, index) => {
      button.classList.toggle("active", index === currentIndex);
      button.setAttribute("aria-selected", String(index === currentIndex));
    });
    windows.forEach((window, index) => window.classList.toggle("is-active", index === currentIndex));
    const pageButton = pageButtons[currentIndex];
    if (pageButton && pager.scrollWidth > pager.clientWidth + 4) {
      const left = pageButton.offsetLeft;
      const right = left + pageButton.offsetWidth;
      if (left < pager.scrollLeft) pager.scrollTo({ left: Math.max(0, left - 8), behavior: "auto" });
      else if (right > pager.scrollLeft + pager.clientWidth) pager.scrollTo({ left: right - pager.clientWidth + 8, behavior: "auto" });
    }
  }
  function goTo(index, behavior = "smooth") {
    const previousIndex = currentIndex;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    paging = true;
    clearTimeout(settleTimer);
    viewport.scrollTo({ left: windowLeft(currentIndex), behavior });
    state[storageGroup] = state[storageGroup] || {};
    state[storageGroup][carouselId] = currentIndex;
    saveState();
    updateControls();
    if (previousIndex !== currentIndex) bringWindowToTop(currentIndex);
    settleTimer = setTimeout(() => {
      paging = false;
      const left = windowLeft(currentIndex);
      if (Math.abs(viewport.scrollLeft - left) > 2) viewport.scrollTo({ left, behavior: "auto" });
    }, behavior === "auto" ? 60 : 420);
  }
  viewport.addEventListener("scroll", () => {
    if (paging) return;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      if (paging) return;
      const nextIndex = closestWindowIndex();
      if (nextIndex !== currentIndex) {
        currentIndex = Math.max(0, Math.min(nextIndex, maxIndex));
        state[storageGroup] = state[storageGroup] || {};
        state[storageGroup][carouselId] = currentIndex;
        saveState();
        updateControls();
        bringWindowToTop(currentIndex);
      }
    }, 90);
  }, { passive: true });

  let dragStart = null;
  if (carouselId !== "overview") {
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
  }

  previousButton.addEventListener("click", () => goTo((currentIndex - 1 + windows.length) % windows.length));
  nextButton.addEventListener("click", () => goTo((currentIndex + 1) % windows.length));

  pageButtons = labels.map((label, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = carouselId === "overview" ? "overview-page-chip" : "day-page-chip";
    button.setAttribute("role", "tab");
    button.textContent = label;
    button.addEventListener("click", () => goTo(index));
    pager.appendChild(button);
    return button;
  });

  if (carouselId === "overview") {
    const navigation = document.createElement("nav");
    navigation.className = "overview-carousel-navigation";
    navigation.setAttribute("aria-label", "Overview pages");
    navigation.append(previousButton, nextButton);
    carousel.classList.add("has-top-navigation", "is-paged");
    carousel.classList.remove("has-side-navigation");
    carousel.append(pager, navigation, viewport);
  } else {
    carousel.append(pager, previousButton, viewport, nextButton);
  }
  updateControls();
  requestAnimationFrame(() => goTo(currentIndex, "auto"));
  return carousel;
}

function mountDayView(host, day) {
  host.innerHTML = `
    <div class="day-title">
      <p>${day.short}</p>
      <h2>${day.title}${day.date === todayIso() ? '<span class="today-pill">Today</span>' : ""}</h2>
      <p>${day.theme}</p>
    </div>
  `;
  const windows = [makeDayFrontPage(day), makeQuestPage(day), makeMapCard(day), makeDailyPhotoCard(day)];
  host.appendChild(makeWindowCarousel(day.id, windows, ["Plan", "Quest", "Map", "Photos"]));
}

function renderDay(day) {
  dayPanel.innerHTML = "";
  const back = document.createElement("button");
  back.type = "button";
  back.className = "calendar-back";
  back.textContent = "Calendar";
  back.addEventListener("click", () => {
    daysShowsDay = false;
    showSection("days");
  });
  dayPanel.appendChild(back);
  const host = document.createElement("div");
  dayPanel.appendChild(host);
  mountDayView(host, day);
}

function markScrollableRails() {
  [cityRail, dayRail].forEach((rail) => {
    if (!rail) return;
    const more = rail.scrollWidth > rail.clientWidth + 8 && rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 8;
    rail.classList.toggle("can-scroll", more);
  });
}

function renderNav() {
  document.body.dataset.city = state.activeCity;
  document.querySelectorAll(".city-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.city === state.activeCity);
  });
  dayRail.innerHTML = "";
  activeCity().days.forEach((day) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.dataset.view = day.id;
    applyOutsideCityStyle(button, day, state.activeCity);
    button.innerHTML = `
      <span>${day.short}</span>
    `;
    if (openMustDos(day.id).length) button.classList.add("has-open");
    if (state.openDayId === day.id) button.classList.add("active");
    dayRail.appendChild(button);
  });
  requestAnimationFrame(markScrollableRails);
}

function snapOverviewToActiveCity() {
  requestAnimationFrame(() => {
    const overviewStrip = document.querySelector("#overviewCarouselHost .overview-carousel .day-window-strip");
    const calendarWindow = overviewStrip?.querySelector("#calendarView");
    if (overviewStrip) {
      // Reset the primary overview directly. Calling scrollIntoView on a card
      // inside the hidden window can make the browser restore the wrong page.
      const calendarLeft = calendarWindow?.offsetLeft || 0;
      overviewStrip.scrollLeft = calendarLeft;
      overviewStrip.scrollTo({ left: calendarLeft, behavior: "auto" });
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
    if (overviewStrip) overviewStrip.scrollLeft = calendarWindow?.offsetLeft || 0;
  });
}

function resetOverviewToCalendar() {
  state.overviewWindows = state.overviewWindows || {};
  state.overviewWindows.overview = 1;
}

function mountFoodPanel() {
  const view = document.querySelector("#cityFoodMapView");
  if (view && foodPanel && view.parentElement !== foodPanel) foodPanel.appendChild(view);
}

function syncFoodList() {
  const list = document.querySelector("#cityFoodList");
  const button = document.querySelector("#foodListToggle");
  list?.classList.toggle("is-collapsed", !foodListOpen);
  if (button) {
    button.textContent = foodListOpen ? "Hide place list" : "Show place list";
    button.setAttribute("aria-expanded", String(foodListOpen));
  }
}

function japanTodayIso() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo" }).format(new Date());
}

function tripRows() {
  const rows = [];
  Object.entries(tripData).forEach(([cityId, city]) => {
    city.days.forEach((day) => rows.push({ cityId, cityName: city.name, day }));
  });
  return rows.sort((a, b) => a.day.date.localeCompare(b.day.date));
}

function landingSelection() {
  const today = japanTodayIso();
  const rows = tripRows();
  const exact = rows.find((row) => row.day.date === today);
  if (exact) return { ...exact, phase: "today", today };
  if (today < rows[0].day.date) return { ...rows[0], phase: "before", today };
  if (today > "2026-11-13") return { ...rows.at(-1), phase: "after", today };
  return { ...(rows.find((row) => row.day.date >= today) || rows.at(-1)), phase: "today", today };
}

function daysUntilTrip() {
  const today = Date.parse(`${japanTodayIso()}T00:00:00Z`);
  const start = Date.parse("2026-10-23T00:00:00Z");
  return Math.round((start - today) / 86400000);
}

const COUNTDOWN_DAY_IDS = {
  "himeji-tickets": ["day11"],
  "romancecar-out": ["day17"],
  "romancecar-back": ["day20"],
  teamlab: ["day21"],
  "setsugetsuka-record": ["day17", "day18", "day19"],
  kyoya: ["day09"],
  "koko-return": ["day14", "day15", "day16", "day17", "day20", "day21"],
  "shinkansen-oct24": ["day02"],
  "shinkansen-nov2": ["day11"],
  "shinkansen-nov5": ["day14"],
  "flight-locators": ["day02"]
};

const TICKET_JOURNEY_IDS = new Set(["flight-locators", "shinkansen-oct24", "shinkansen-nov2", "shinkansen-nov5", "romancecar-back"]);

function noteMapUrl(text) {
  const match = String(text || "").match(/\{\{link:(https:\/\/www\.google\.com\/maps\/search\/\?[^|}]+)\|/);
  return match ? match[1] : "";
}

function noteCopyCodes(text) {
  return [...String(text || "").matchAll(/\{\{copy:([^}]+)\}\}/g)].map((match) => match[1]);
}

function partyPhrase(text, fallback = "") {
  const match = String(text || "").match(/(?:party is|booking is for)\s+(\d+)\s+(people|adults|guests)/i);
  return match ? `${match[1]} ${match[2]}` : fallback;
}

function walletCards() {
  const cards = [];
  const seen = new Set();
  RESERVATION_COUNTDOWN.forEach((item) => {
    if (item.attention !== "booked") return;
    const codes = noteCopyCodes(item.note);
    cards.push({
      id: item.id,
      name: item.name,
      when: item.target,
      party: partyPhrase(item.note),
      codes,
      note: item.note,
      map: noteMapUrl(item.note) || mapsSearchUrl(item.name),
      dayIds: COUNTDOWN_DAY_IDS[item.id] || []
    });
    seen.add(item.id);
    codes.forEach((code) => seen.add(code));
  });
  RESTAURANT_BOOKINGS.forEach((booking) => {
    const record = reservationRecord(booking);
    if (record.status !== "booked") return;
    if (seen.has(booking.id)) return;
    const codes = noteCopyCodes(booking.why);
    if (codes.some((code) => seen.has(code))) return;
    const plainCode = !codes.length ? ((record.confirmation || "").match(/\b([A-Z0-9]{6,})\b/) || [])[1] : "";
    cards.push({
      id: booking.id,
      name: booking.name,
      when: booking.slot,
      party: `${defaultPartySize(booking)} people`,
      codes: codes.length ? codes : (plainCode ? [plainCode] : []),
      note: booking.why,
      map: noteMapUrl(booking.why) || mapsSearchUrl(`${booking.name}, Japan`),
      dayIds: booking.dayIds
    });
  });
  return cards;
}

function askGrokButton(dayId) {
  return `<button type="button" class="ask-grok" data-ask-day="${escapeHtml(dayId)}">Ask Grok Bot</button>`;
}

function grokPrompt(day, cityName) {
  const context = dayContext[day.id] || {};
  const goals = dayGoals[day.id] || {};
  const hotel = STAY_HOTEL_BY_DAY[day.id] || "";
  const bookings = RESTAURANT_BOOKINGS.filter((booking) => booking.dayIds.includes(day.id)).map((booking) => {
    const record = reservationRecord(booking);
    return `${booking.name}. Status: ${record.status}. ${booking.slot}. ${plainGuideText(booking.why)}`;
  });
  RESERVATION_COUNTDOWN.forEach((item) => {
    if (!(COUNTDOWN_DAY_IDS[item.id] || []).includes(day.id)) return;
    bookings.push(`${item.name}. ${item.target}. ${plainGuideText(item.note)}`);
  });
  return [
    "Japan Trip Hunt context",
    `Trip day: ${day.title}`,
    `Date: ${day.date}`,
    `City: ${cityName}`,
    `Hotel: ${hotel}`,
    `Party: ${DAY_PARTY[day.id] || ""}`,
    `Clear path: ${goals.clearPath || ""}`,
    "Plan:",
    ...(context.timeline || []).map(([time, activity]) => `${time} — ${plainGuideText(activity)}`),
    "Bookings:",
    ...(bookings.length ? bookings : ["None saved for this day."]),
    "Diet: Mai avoids sliced meat. Mai avoids whole-cut meat. Ground meat is fine. Mom hates oysters. Choose non-smoking restaurants only.",
    "Question: "
  ].join("\n");
}

function showGrokToast() {
  const toast = document.querySelector("#grokToast");
  if (!toast) return;
  toast.hidden = false;
  window.clearTimeout(grokToastTimer);
  grokToastTimer = window.setTimeout(() => { toast.hidden = true; }, 2500);
}

function ticketCardHtml(card) {
  const copies = (card.codes || []).map((code) => copyCodeButton(code)).join(" ");
  const map = card.map ? ` <a class="guide-link" href="${escapeHtml(card.map)}" target="_blank" rel="noopener noreferrer">Open the map</a>` : "";
  const status = card.status ? `<p class="ticket-meta">${escapeHtml(card.status)}</p>` : "";
  return `<article class="ticket-card">
    <h3>${escapeHtml(card.name)}</h3>
    <p class="ticket-meta">${escapeHtml(card.when)}${card.party ? ` · ${escapeHtml(card.party)}` : ""}</p>
    ${status}
    <div class="ticket-links">${copies || "<span>No confirmation number yet.</span>"}${map}</div>
    ${collapsedNoteHtml(card.note, "More")}
  </article>`;
}

function unbookedJourneyCards() {
  const booked = new Set(walletCards().map((card) => card.id));
  return openItems().filter((item) => TICKET_JOURNEY_IDS.has(item.id) && !booked.has(item.id)).map((item) => ({
    id: item.id,
    name: item.label,
    when: item.when,
    party: "",
    codes: noteCopyCodes(item.detail),
    note: item.detail,
    map: noteMapUrl(item.detail),
    status: item.group === "to-book" ? "Not booked" : "Awaiting confirmation"
  }));
}

function renderTickets() {
  if (!ticketsPanel) return;
  const cards = [...walletCards(), ...unbookedJourneyCards()];
  ticketsPanel.innerHTML = `<div class="section-heading"><p class="label">Travel documents</p><h2>Tickets</h2></div><p class="helper-copy">Booking references and travel documents are here. An unbooked journey shows Not booked.</p>${cards.map(ticketCardHtml).join("")}`;
}

const TRIP_CALENDAR_START = "2026-10-23";
const TRIP_CALENDAR_END = "2026-11-13";
const CALENDAR_CITIES = {
  osaka: { name: "Osaka", mark: "Osaka" },
  kyoto: { name: "Kyoto", mark: "Kyoto" },
  hiroshima: { name: "Hiroshima", mark: "Hiro" },
  tokyo: { name: "Tokyo", mark: "Tokyo" },
  hakone: { name: "Hakone", mark: "Hakone" }
};

function isoParts(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month, day };
}

function shiftIso(iso, days) {
  const { year, month, day } = isoParts(iso);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  const nextMonth = String(date.getUTCMonth() + 1).padStart(2, "0");
  const nextDay = String(date.getUTCDate()).padStart(2, "0");
  return `${date.getUTCFullYear()}-${nextMonth}-${nextDay}`;
}

function mondayIndex(iso) {
  const { year, month, day } = isoParts(iso);
  return (new Date(Date.UTC(year, month - 1, day)).getUTCDay() + 6) % 7;
}

function calendarMonthLabel(iso) {
  const { year, month, day } = isoParts(iso);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", { month: "long", timeZone: "UTC" });
}

function spokenDate(iso) {
  const { year, month, day } = isoParts(iso);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", { month: "long", day: "numeric", timeZone: "UTC" });
}

function stayCityForDay(day) {
  const hotel = STAY_HOTEL_BY_DAY[day.id] || "";
  if (hotel.includes("Setsugetsuka")) return "hakone";
  if (hotel.includes("Monterey")) return "kyoto";
  if (hotel.includes("Cordia")) return "osaka";
  if (hotel.includes("Granvia")) return "hiroshima";
  if (hotel.includes("APA")) return "tokyo";
  return "";
}

function tripDateCell(iso, today, beforeTrip, duringTrip) {
  const inRange = iso >= TRIP_CALENDAR_START && iso <= TRIP_CALENDAR_END;
  const row = tripRows().find((entry) => entry.day.date === iso);
  const cityId = row ? stayCityForDay(row.day) : "";
  const city = CALENDAR_CITIES[cityId];
  const cell = document.createElement(row ? "button" : "span");
  cell.className = "trip-date";
  if (!inRange) cell.classList.add("is-outside");
  if (duringTrip && iso === today) cell.classList.add("is-today");
  if (row && state.openDayId === row.day.id) cell.classList.add("is-selected");
  if (beforeTrip && iso === TRIP_CALENDAR_START) cell.classList.add("is-start");
  if (cityId) cell.dataset.city = cityId;
  if (row) {
    cell.type = "button";
    cell.dataset.day = row.day.id;
    cell.setAttribute("aria-pressed", String(state.openDayId === row.day.id));
    cell.setAttribute("aria-label", `${spokenDate(iso)}, ${city ? city.name : ""}. Open this day.`);
    cell.addEventListener("click", () => showDay(row.day));
  } else if (inRange) {
    const note = iso === TRIP_CALENDAR_START ? " Trip start." : iso === TRIP_CALENDAR_END ? " Trip end." : "";
    cell.setAttribute("aria-label", `${spokenDate(iso)}.${note}`);
  } else cell.setAttribute("aria-hidden", "true");
  const isToday = duringTrip && iso === today;
  if (isToday) cell.setAttribute("aria-current", "date");
  if (inRange) {
    const band = document.createElement("span");
    band.className = cityId ? "trip-date-band" : "trip-date-band is-neutral";
    band.setAttribute("aria-hidden", "true");
    cell.appendChild(band);
  }
  const number = document.createElement("span");
  number.className = "trip-date-num";
  number.textContent = String(Number(iso.slice(8)));
  cell.appendChild(number);
  const mark = document.createElement("span");
  mark.className = "trip-date-city";
  if (isToday) mark.textContent = "TODAY";
  else if (city) mark.textContent = city.mark;
  else if (beforeTrip && iso === TRIP_CALENDAR_START) mark.textContent = "Start";
  else if (inRange && iso === TRIP_CALENDAR_END) mark.textContent = "End";
  if (mark.textContent) cell.appendChild(mark);
  if (isToday && row) {
    cell.setAttribute("aria-label", `Today. ${spokenDate(iso)}, ${city ? city.name : ""}. Open this day.`);
  } else if (isToday && inRange) {
    const note = iso === TRIP_CALENDAR_START ? " Trip start." : iso === TRIP_CALENDAR_END ? " Trip end." : "";
    cell.setAttribute("aria-label", `Today. ${spokenDate(iso)}.${note}`);
  }
  return cell;
}

function renderTripCalendar() {
  if (!tripCalendar) return;
  const today = japanTodayIso();
  const beforeTrip = today < TRIP_CALENDAR_START;
  const duringTrip = today >= TRIP_CALENDAR_START && today <= TRIP_CALENDAR_END;
  tripCalendar.replaceChildren();
  if (beforeTrip) {
    const days = daysUntilTrip();
    const line = document.createElement("p");
    line.className = "today-countdown";
    line.textContent = days === 1 ? "The trip starts in 1 day." : `The trip starts in ${days} days.`;
    tripCalendar.appendChild(line);
  }
  const board = document.createElement("div");
  board.className = "trip-calendar-board";
  const weekdays = document.createElement("div");
  weekdays.className = "trip-calendar-weekdays";
  weekdays.setAttribute("aria-hidden", "true");
  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].forEach((label) => {
    const span = document.createElement("span");
    span.textContent = label;
    weekdays.appendChild(span);
  });
  board.appendChild(weekdays);
  const gridStart = shiftIso(TRIP_CALENDAR_START, -mondayIndex(TRIP_CALENDAR_START));
  const gridEnd = shiftIso(TRIP_CALENDAR_END, 6 - mondayIndex(TRIP_CALENDAR_END));
  let previousLabel = "";
  for (let weekStart = gridStart; weekStart <= gridEnd; weekStart = shiftIso(weekStart, 7)) {
    const dates = Array.from({ length: 7 }, (_, index) => shiftIso(weekStart, index));
    const first = calendarMonthLabel(dates[0]);
    const last = calendarMonthLabel(dates[6]);
    const label = first === last ? first : `${first} – ${last}`;
    if (label !== previousLabel) {
      const heading = document.createElement("p");
      heading.className = "trip-calendar-month";
      heading.textContent = label;
      board.appendChild(heading);
      previousLabel = label;
    }
    const week = document.createElement("div");
    week.className = "trip-calendar-week";
    dates.forEach((iso) => week.appendChild(tripDateCell(iso, today, beforeTrip, duringTrip)));
    board.appendChild(week);
  }
  const legend = document.createElement("ul");
  legend.className = "trip-calendar-legend";
  Object.entries(CALENDAR_CITIES).forEach(([id, city]) => {
    const item = document.createElement("li");
    const dot = document.createElement("i");
    dot.dataset.city = id;
    dot.setAttribute("aria-hidden", "true");
    item.append(dot, city.name);
    legend.appendChild(item);
  });
  tripCalendar.append(board, legend);
}

function renderToday() {
  if (!todayPanel) return;
  const selected = landingSelection();
  const { day, cityId, phase } = selected;
  todayPanel.innerHTML = "";
  if (phase === "before") {
    const days = daysUntilTrip();
    const line = document.createElement("p");
    line.className = "today-countdown";
    line.textContent = days === 1 ? "The trip starts in 1 day." : `The trip starts in ${days} days.`;
    todayPanel.appendChild(line);
  }
  const jump = document.createElement("p");
  jump.className = "today-calendar-jump";
  const calendarButton = document.createElement("button");
  calendarButton.type = "button";
  calendarButton.className = "today-calendar-link";
  calendarButton.textContent = "Calendar";
  calendarButton.addEventListener("click", () => {
    daysShowsDay = false;
    showSection("days");
  });
  jump.appendChild(calendarButton);
  todayPanel.appendChild(jump);
  const host = document.createElement("div");
  todayPanel.appendChild(host);
  mountDayView(host, day);
  todayPanel.dataset.cityId = cityId;
}

function placeScreenFilters(name) {
  const cityWrap = document.querySelector(".city-rail-wrap");
  const dayWrap = document.querySelector(".day-rail-wrap");
  const stash = document.querySelector("#filterStash");
  const foodHost = document.querySelector("#foodFilters");
  const overviewHost = document.querySelector("#overviewFilters");
  if (!cityWrap || !dayWrap || !stash) return;
  if (name === "food" && foodHost) {
    foodHost.append(cityWrap);
    stash.append(dayWrap);
  } else if (name === "overview" && overviewHost) {
    overviewHost.append(cityWrap);
    stash.append(dayWrap);
  } else stash.append(cityWrap, dayWrap);
  requestAnimationFrame(markScrollableRails);
}

function showSection(name) {
  document.body.dataset.section = name;
  const dateLabel = document.querySelector("#headerCalendarDate");
  if (dateLabel) dateLabel.textContent = headerDateLabel();
  document.querySelectorAll("#appMenu button[data-section]").forEach((button) => {
    const on = button.dataset.section === name;
    button.classList.toggle("active", on);
    if (on) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  placeScreenFilters(name);
  todayPanel?.classList.toggle("hidden", name !== "today");
  journalPanel?.classList.toggle("hidden", name !== "journal");
  ticketsPanel?.classList.toggle("hidden", name !== "tickets");
  foodPanel?.classList.toggle("hidden", name !== "food");
  overviewPanel.classList.toggle("hidden", name !== "overview");
  const viewingDay = name === "days" && daysShowsDay && Boolean(findDay(state.openDayId));
  dayPanel.classList.toggle("hidden", !viewingDay);
  tripCalendar?.classList.toggle("hidden", name !== "days" || viewingDay);
  if (name === "today") renderToday();
  if (name === "tickets") renderTickets();
  if (name === "food") {
    mountFoodPanel();
    renderCityFoodMapPrototype();
    syncFoodList();
    requestAnimationFrame(() => activeCityFoodPrototypeMap?.invalidateSize());
  }
  if (name === "overview") {
    document.body.dataset.city = state.activeCity;
    renderOverview();
    renderStats();
  }
  if (name === "days" && viewingDay) {
    const found = findDay(state.openDayId);
    state.activeCity = found.cityId;
    document.body.dataset.city = found.cityId;
    renderNav();
    renderDay(found.day);
  }
  if (name === "days" && !viewingDay) renderTripCalendar();
  if (name === "journal") renderJournalSettings();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function showOverview() {
  showSection("overview");
}

function showDay(day) {
  if (!day) return;
  const found = findDay(day.id);
  if (found) state.activeCity = found.cityId;
  state.openDayId = day.id;
  daysShowsDay = true;
  saveState();
  showSection("days");
}

function renderStats() {
  if (!overviewPanel.classList.contains("hidden")) renderTripQuestDashboard();
}

let citySnapArmedFor = null;

cityRail.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-city]");
  if (!button) return;
  const selectedCity = button.dataset.city;
  const section = document.body.dataset.section;
  state.activeCity = selectedCity;
  if (section === "food") {
    citySnapArmedFor = null;
    document.querySelectorAll(".city-chip").forEach((chip) => {
      chip.classList.remove("snap-armed");
      chip.removeAttribute("aria-label");
    });
    saveState();
    renderNav();
    renderCityFoodMapPrototype();
    syncFoodList();
    requestAnimationFrame(() => activeCityFoodPrototypeMap?.invalidateSize());
    return;
  }
  if (section === "days") {
    citySnapArmedFor = null;
    document.querySelectorAll(".city-chip").forEach((chip) => {
      chip.classList.remove("snap-armed");
      chip.removeAttribute("aria-label");
    });
    if (!activeCity().days.some((day) => day.id === state.openDayId)) state.openDayId = "";
    saveState();
    renderNav();
    showSection("days");
    return;
  }
  const shouldSnap = citySnapArmedFor === selectedCity;
  citySnapArmedFor = shouldSnap ? null : selectedCity;
  resetOverviewToCalendar();
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
    resetOverviewToCalendar();
    saveState();
    showOverview();
  } else {
    showDay(activeCity().days.find((day) => day.id === view));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
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

cityRail.addEventListener("scroll", markScrollableRails, { passive: true });
dayRail.addEventListener("scroll", markScrollableRails, { passive: true });
window.addEventListener("resize", markScrollableRails);

const menuButton = document.querySelector("#menuButton");
const appMenu = document.querySelector("#appMenu");

function menuButtons() {
  return appMenu ? [...appMenu.querySelectorAll("button")] : [];
}

function openMenu() {
  if (!appMenu || !menuButton) return;
  appMenu.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
  const current = appMenu.querySelector("[aria-current='page']") || menuButtons()[0];
  current?.focus();
}

function closeMenu(restoreFocus) {
  if (!appMenu || !menuButton || appMenu.hidden) return;
  appMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  if (restoreFocus) menuButton.focus();
}

menuButton?.addEventListener("click", () => {
  if (appMenu?.hidden) openMenu();
  else closeMenu(false);
});

appMenu?.addEventListener("click", (event) => {
  const sectionButton = event.target.closest("button[data-section]");
  if (!sectionButton) return;
  if (sectionButton.dataset.section === "days") daysShowsDay = false;
  closeMenu(false);
  showSection(sectionButton.dataset.section);
});

document.querySelector("#archiveToggle")?.addEventListener("click", () => {
  const archive = document.querySelector("#archiveToggle");
  showArchive = !showArchive;
  archive.setAttribute("aria-pressed", String(showArchive));
  archive.textContent = showArchive ? "Hide skipped" : "Show skipped";
  showSection(document.body.dataset.section || "today");
});

document.addEventListener("pointerdown", (event) => {
  if (!appMenu || appMenu.hidden) return;
  if (event.target.closest("#appMenu") || event.target.closest("#menuButton")) return;
  closeMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (!appMenu || appMenu.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu(true);
    return;
  }
  if (event.key !== "Tab") return;
  const items = menuButtons();
  const first = items[0];
  const last = items.at(-1);
  if (!first || !last) return;
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

document.querySelector("#foodListToggle")?.addEventListener("click", () => {
  foodListOpen = !foodListOpen;
  syncFoodList();
});

function headerDateLabel() {
  const iso = japanTodayIso();
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

function readJournalPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(JOURNAL_PREFS_KEY) || "{}");
    return {
      author: saved.author || "",
      passcode: saved.passcode || "",
      lastSync: saved.lastSync || "",
      notes: saved.notes || {}
    };
  } catch {
    return { author: "", passcode: "", lastSync: "", notes: {} };
  }
}

function writeJournalPrefs(prefs) {
  localStorage.setItem(JOURNAL_PREFS_KEY, JSON.stringify(prefs));
}

function journalClientId() {
  if (window.crypto?.randomUUID) return crypto.randomUUID();
  return `photo-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function journalQueueAll() {
  return withStore(JOURNAL_QUEUE_STORE, "readonly", (store) => storeRequest(store.getAll()));
}

function putJournalQueueItem(item) {
  return withStore(JOURNAL_QUEUE_STORE, "readwrite", (store) => storeRequest(store.put(item)));
}

function removeJournalQueueItem(clientId) {
  return withStore(JOURNAL_QUEUE_STORE, "readwrite", (store) => storeRequest(store.delete(clientId)));
}

function readJournalCache(dayId) {
  return withStore(JOURNAL_CACHE_STORE, "readonly", (store) => storeRequest(store.get(dayId)));
}

function writeJournalCache(record) {
  return withStore(JOURNAL_CACHE_STORE, "readwrite", (store) => storeRequest(store.put(record)));
}

async function enqueueJournalPhoto(item) {
  await putJournalQueueItem({
    clientId: item.clientId,
    photoId: item.photoId,
    dayId: item.dayId,
    caption: item.caption || "",
    createdAt: item.createdAt,
    author: item.author || "",
    status: "pending",
    attempts: 0,
    lastError: ""
  });
  renderJournalStatus();
}

function journalConfigured() {
  return Boolean(String(JOURNAL_ENDPOINT || "").trim());
}

async function journalPost(payload, options = {}) {
  const prefs = readJournalPrefs();
  const response = await fetch(JOURNAL_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ ...payload, passcode: prefs.passcode }),
    keepalive: Boolean(options.keepalive)
  });
  const data = await response.json();
  if (!response.ok || !data.ok) throw new Error(data.error || "Journal sync failed.");
  return data;
}

function markJournalSynced() {
  const prefs = readJournalPrefs();
  prefs.lastSync = new Date().toISOString();
  writeJournalPrefs(prefs);
  renderJournalStatus();
}

function downscaleJpeg(dataUrl, maxEdge, quality) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, maxEdge / Math.max(image.width, image.height, 1));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", quality).split(",")[1]);
    };
    image.onerror = () => reject(new Error("The photo could not be prepared."));
    image.src = dataUrl;
  });
}

let journalSyncing = false;

async function flushJournalQueue() {
  if (journalSyncing || !journalConfigured()) return;
  const prefs = readJournalPrefs();
  if (!prefs.author || !prefs.passcode) return;
  journalSyncing = true;
  try {
    const items = await journalQueueAll();
    let synced = false;
    for (const item of items) {
      if (item.status === "synced") continue;
      try {
        const photos = await getAllPhotos();
        const photo = photos.find((entry) => entry.clientId === item.clientId || entry.id === item.photoId);
        if (!photo?.dataUrl) continue;
        const author = item.author || prefs.author;
        const day = findDay(item.dayId || photo.dayId);
        const image = await downscaleJpeg(photo.dataUrl, 2048, 0.85);
        const thumb = await downscaleJpeg(photo.dataUrl, 400, 0.7);
        const result = await journalPost({
          action: "uploadPhoto",
          dayId: item.dayId || photo.dayId,
          date: day?.day.date || "",
          author,
          caption: item.caption || photo.caption || "",
          clientId: item.clientId,
          createdAt: item.createdAt || photo.createdAt,
          image,
          thumb
        });
        photo.driveFileId = result.fileId;
        await putPhoto(photo);
        item.status = "synced";
        item.fileId = result.fileId;
        item.lastError = "";
        await putJournalQueueItem(item);
        synced = true;
      } catch (error) {
        item.status = "pending";
        item.attempts = (item.attempts || 0) + 1;
        item.lastError = error.message || "Upload failed.";
        await putJournalQueueItem(item);
      }
    }
    if (synced) markJournalSynced();
  } finally {
    journalSyncing = false;
    renderJournalStatus();
  }
}

async function syncJournalNote(dayId, options = {}) {
  if (!journalConfigured()) return;
  const prefs = readJournalPrefs();
  if (!prefs.author || !prefs.passcode) return;
  const text = prefs.notes[dayId] || "";
  if (!text.trim() && !options.allowEmpty) return;
  const day = findDay(dayId);
  await journalPost({
    action: "saveNote",
    dayId,
    date: day?.day.date || "",
    author: prefs.author,
    text
  }, options);
  markJournalSynced();
}

function journalThumbSrc(photo) {
  const thumb = photo.thumb || "";
  if (!thumb) return "";
  if (thumb.startsWith("data:")) return thumb;
  return `data:image/jpeg;base64,${thumb}`;
}

function renderDailyRecap(list, notes) {
  if (!notes.length) return;
  const card = document.createElement("article");
  card.className = "daily-recap";
  const title = document.createElement("h3");
  title.textContent = "Daily recap";
  card.appendChild(title);
  notes.forEach((note) => {
    const text = document.createElement("p");
    text.textContent = note.note;
    card.appendChild(text);
  });
  list.appendChild(card);
}

function renderFamilyJournal(host, day, record) {
  const list = host.querySelector(".family-journal-list");
  if (!list) return;
  const author = readJournalPrefs().author;
  const recapNotes = (record?.notes || []).filter((note) => note.author === TRIP_GUIDE_AUTHOR && note.note);
  const notes = (record?.notes || []).filter((note) => note.author !== author && note.author !== TRIP_GUIDE_AUTHOR && note.note);
  const photos = (record?.photos || []).filter((photo) => photo.author !== author);
  list.replaceChildren();
  renderDailyRecap(list, recapNotes);
  if (!notes.length && !photos.length) {
    if (!recapNotes.length) {
      const empty = document.createElement("p");
      empty.className = "family-empty";
      empty.textContent = "No family notes for this day yet.";
      list.appendChild(empty);
    }
    return;
  }
  notes.forEach((note) => {
    const block = document.createElement("article");
    block.className = "family-note";
    const name = document.createElement("strong");
    name.textContent = note.author;
    const text = document.createElement("p");
    text.textContent = note.note;
    block.append(name, text);
    list.appendChild(block);
  });
  photos.forEach((photo) => {
    const block = document.createElement("article");
    block.className = "family-photo";
    const name = document.createElement("strong");
    name.textContent = photo.author;
    block.appendChild(name);
    const src = journalThumbSrc(photo);
    if (src) {
      const image = document.createElement("img");
      image.alt = photo.caption || `${photo.author} photo`;
      image.src = src;
      block.appendChild(image);
    }
    if (photo.caption) {
      const caption = document.createElement("p");
      caption.textContent = photo.caption;
      block.appendChild(caption);
    }
    list.appendChild(block);
  });
}

function authorServerNote(record) {
  const author = readJournalPrefs().author;
  if (!author) return "";
  const row = (record?.notes || []).find((note) => note.author === author);
  return row?.note || "";
}

function rememberJournalNote(dayId, text) {
  const next = readJournalPrefs();
  next.notes[dayId] = text;
  writeJournalPrefs(next);
}

function setJournalSyncStatus(host, text) {
  const line = host.querySelector(".journal-sync-line");
  if (line) line.textContent = text;
}

const journalNoteHosts = new Set();

function flushVisibleJournalNotes(options = {}) {
  journalNoteHosts.forEach((host) => {
    if (!host.isConnected) {
      journalNoteHosts.delete(host);
      return;
    }
    if (host.closest(".hidden")) return;
    void host.__journalNote?.flush(options);
  });
}

async function refreshDayJournal(day, host) {
  const entry = host.__journalNote;
  const cached = await readJournalCache(day.id).catch(() => null);
  if (host.isConnected && cached) {
    renderFamilyJournal(host, day, cached);
    entry?.applyRemote(authorServerNote(cached), { authoritative: false });
  }
  if (!journalConfigured() || !readJournalPrefs().passcode) {
    entry?.applyRemote("", { failed: true });
    return;
  }
  try {
    const data = await journalPost({ action: "list", dayId: day.id });
    const record = { dayId: day.id, notes: data.notes || [], photos: data.photos || [], fetchedAt: new Date().toISOString() };
    await writeJournalCache(record);
    if (host.isConnected) renderFamilyJournal(host, day, record);
    entry?.applyRemote(authorServerNote(record), { authoritative: true });
    markJournalSynced();
  } catch {
    if (host.isConnected && cached) renderFamilyJournal(host, day, cached);
    entry?.applyRemote("", { failed: true });
  }
}

function mountDayJournal(host, day) {
  const prefs = readJournalPrefs();
  host.innerHTML = `
    <p class="journal-label">Journal</p>
    <label class="journal-field">What happened today?
      <textarea class="journal-note" maxlength="4000"></textarea>
    </label>
    <p class="journal-sync-line" aria-live="polite"></p>
    <div class="family-journal-list"></div>
  `;
  const note = host.querySelector(".journal-note");
  note.value = prefs.notes[day.id] || "";
  const entry = {
    userEdited: false,
    hydrated: false,
    serverHadNote: false,
    blockEmptySync: true,
    lastSynced: null,
    timer: 0,
    applyRemote(remote, options = {}) {
      if (!host.isConnected) return;
      if (options.failed) {
        entry.hydrated = true;
        entry.blockEmptySync = true;
        if (note.value.trim()) void entry.flush();
        else if (!navigator.onLine) setJournalSyncStatus(host, "Will sync when online");
        return;
      }
      if (!options.authoritative) {
        if (!entry.userEdited && !note.value.trim() && String(remote || "").trim()) {
          note.value = remote;
          rememberJournalNote(day.id, remote);
        }
        return;
      }
      const text = String(remote || "");
      entry.serverHadNote = Boolean(text.trim());
      entry.hydrated = true;
      if (!entry.userEdited && text.trim()) {
        note.value = text;
        rememberJournalNote(day.id, text);
        entry.lastSynced = text;
        entry.blockEmptySync = true;
        setJournalSyncStatus(host, "Saved");
        return;
      }
      if (entry.userEdited && !note.value.trim() && text.trim()) {
        note.value = text;
        rememberJournalNote(day.id, text);
        entry.lastSynced = text;
        entry.userEdited = false;
        entry.blockEmptySync = true;
        setJournalSyncStatus(host, "Saved");
        return;
      }
      entry.blockEmptySync = !entry.userEdited || !note.value.trim();
      entry.lastSynced = entry.userEdited ? null : text;
      if (!entry.userEdited && !text.trim() && note.value.trim()) {
        void entry.flush();
        return;
      }
      if (entry.userEdited && note.value.trim() && note.value !== text) {
        void entry.flush();
        return;
      }
      if (note.value.trim()) setJournalSyncStatus(host, navigator.onLine ? "Saved" : "Will sync when online");
    },
    async flush(options = {}) {
      window.clearTimeout(entry.timer);
      if (!host.isConnected || !entry.hydrated) return;
      const text = note.value;
      rememberJournalNote(day.id, text);
      if (text === entry.lastSynced) {
        if (host.isConnected && (text.trim() || entry.lastSynced === "")) setJournalSyncStatus(host, "Saved");
        return;
      }
      if (!text.trim() && entry.blockEmptySync) return;
      if (!navigator.onLine) {
        setJournalSyncStatus(host, "Will sync when online");
        return;
      }
      const current = readJournalPrefs();
      if (!journalConfigured() || !current.author || !current.passcode) {
        setJournalSyncStatus(host, "Saved");
        return;
      }
      setJournalSyncStatus(host, "Saving…");
      try {
        await syncJournalNote(day.id, { keepalive: Boolean(options.keepalive), allowEmpty: text.trim() === "" });
        entry.lastSynced = text;
        entry.serverHadNote = Boolean(text.trim());
        if (host.isConnected) setJournalSyncStatus(host, "Saved");
      } catch {
        if (host.isConnected) setJournalSyncStatus(host, "Will sync when online");
      }
    }
  };
  host.__journalNote = entry;
  journalNoteHosts.add(host);
  note.addEventListener("input", () => {
    entry.userEdited = true;
    if (entry.hydrated) entry.blockEmptySync = false;
    rememberJournalNote(day.id, note.value);
    window.clearTimeout(entry.timer);
    if (!navigator.onLine) {
      setJournalSyncStatus(host, "Will sync when online");
      return;
    }
    setJournalSyncStatus(host, "Saving…");
    entry.timer = window.setTimeout(() => { void entry.flush(); }, 1500);
  });
  note.addEventListener("blur", () => { void entry.flush(); });
  refreshDayJournal(day, host);
}

async function waitingPhotoCount() {
  const items = await journalQueueAll().catch(() => []);
  return items.filter((item) => item.status !== "synced").length;
}

function renderJournalStatus() {
  const status = document.querySelector("#journalStatus");
  if (!status) return;
  const prefs = readJournalPrefs();
  waitingPhotoCount().then((count) => {
    const lines = [];
    if (!journalConfigured()) lines.push("Journal sync is not set up yet.");
    lines.push(count === 1 ? "1 photo waiting to upload." : `${count} photos waiting to upload.`);
    lines.push(prefs.lastSync ? `Last sync: ${new Date(prefs.lastSync).toLocaleString()}.` : "No sync yet.");
    lines.push(prefs.passcode ? "Passcode saved on this phone." : "No passcode saved.");
    status.textContent = lines.join(" ");
  });
}

function renderJournalSettings() {
  if (!journalPanel) return;
  const prefs = readJournalPrefs();
  const known = JOURNAL_NAMES.includes(prefs.author);
  journalPanel.innerHTML = `
    <div class="section-heading"><p class="label">Shared memory</p><h2>Family journal</h2></div>
    <p class="journal-setup-note" id="journalStatus"></p>
    <label class="journal-field">Your name
      <select id="journalAuthor">
        <option value="">Choose a name</option>
        ${JOURNAL_NAMES.map((name) => `<option${name === prefs.author ? " selected" : ""}>${name}</option>`).join("")}
        <option value="custom"${prefs.author && !known ? " selected" : ""}>Custom</option>
      </select>
    </label>
    <label class="journal-field" id="journalCustomWrap">Custom name
      <input id="journalCustomName" type="text" maxlength="40" value="${escapeHtml(known ? "" : prefs.author)}">
    </label>
    <label class="journal-field">Family passcode
      <input id="journalPasscode" type="password" autocomplete="current-password" maxlength="80">
    </label>
    <div class="journal-actions">
      <button type="button" id="journalSave">Save on this phone</button>
      <button type="button" id="journalSyncNow">Sync now</button>
      <button type="button" id="journalBackup">Save all photos</button>
    </div>
    <p class="journal-waiting" id="journalBackupStatus"></p>
  `;
  const customWrap = journalPanel.querySelector("#journalCustomWrap");
  const authorSelect = journalPanel.querySelector("#journalAuthor");
  const toggleCustom = () => { customWrap.hidden = authorSelect.value !== "custom"; };
  authorSelect.addEventListener("change", toggleCustom);
  toggleCustom();
  journalPanel.querySelector("#journalSave").addEventListener("click", () => {
    const next = readJournalPrefs();
    const selected = authorSelect.value;
    const custom = journalPanel.querySelector("#journalCustomName").value.trim();
    next.author = selected === "custom" ? custom : selected;
    const typed = journalPanel.querySelector("#journalPasscode").value;
    if (typed) next.passcode = typed;
    writeJournalPrefs(next);
    journalPanel.querySelector("#journalPasscode").value = "";
    renderJournalStatus();
    void flushJournalQueue();
  });
  journalPanel.querySelector("#journalSyncNow").addEventListener("click", () => { void flushJournalQueue(); });
  journalPanel.querySelector("#journalBackup").addEventListener("click", () => { void downloadAllPhotos(); });
  renderJournalStatus();
}

function dataUrlBytes(dataUrl) {
  const b64 = String(dataUrl).split(",")[1] || "";
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function crc32(bytes) {
  let crc = -1;
  for (let index = 0; index < bytes.length; index += 1) {
    crc ^= bytes[index];
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (~crc) >>> 0;
}

function zipStore(files) {
  const encoder = new TextEncoder();
  const parts = [];
  const central = [];
  let offset = 0;
  files.forEach((file) => {
    const name = encoder.encode(file.name);
    const data = file.data;
    const crc = crc32(data);
    const local = new Uint8Array(30 + name.length);
    const view = new DataView(local.buffer);
    view.setUint32(0, 0x04034b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 0x0800, true);
    view.setUint32(14, crc, true);
    view.setUint32(18, data.length, true);
    view.setUint32(22, data.length, true);
    view.setUint16(26, name.length, true);
    local.set(name, 30);
    parts.push(local, data);
    const cen = new Uint8Array(46 + name.length);
    const cenView = new DataView(cen.buffer);
    cenView.setUint32(0, 0x02014b50, true);
    cenView.setUint16(4, 20, true);
    cenView.setUint16(6, 20, true);
    cenView.setUint16(8, 0x0800, true);
    cenView.setUint32(16, crc, true);
    cenView.setUint32(20, data.length, true);
    cenView.setUint32(24, data.length, true);
    cenView.setUint16(28, name.length, true);
    cenView.setUint32(42, offset, true);
    cen.set(name, 46);
    central.push(cen);
    offset += local.length + data.length;
  });
  const centralSize = central.reduce((sum, part) => sum + part.length, 0);
  const eocd = new Uint8Array(22);
  const eocdView = new DataView(eocd.buffer);
  eocdView.setUint32(0, 0x06054b50, true);
  eocdView.setUint16(8, files.length, true);
  eocdView.setUint16(10, files.length, true);
  eocdView.setUint32(12, centralSize, true);
  eocdView.setUint32(16, offset, true);
  return new Blob([...parts, ...central, eocd], { type: "application/zip" });
}

async function downloadAllPhotos() {
  const status = document.querySelector("#journalBackupStatus");
  const photos = await getAllPhotos().catch(() => []);
  if (!photos.length) {
    if (status) status.textContent = "No photos are saved on this phone.";
    return;
  }
  const files = photos.map((photo, index) => ({
    name: `${photo.dayId || "photo"}-${index + 1}.jpg`,
    data: dataUrlBytes(photo.dataUrl)
  }));
  const url = URL.createObjectURL(zipStore(files));
  const link = document.createElement("a");
  link.href = url;
  link.download = "japan-trip-photos.zip";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  if (status) status.textContent = `Saved ${photos.length} photos into one zip file.`;
}

function startJournalSync() {
  void flushJournalQueue();
  window.addEventListener("online", () => {
    void flushJournalQueue();
    flushVisibleJournalNotes();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flushVisibleJournalNotes({ keepalive: true });
  });
  window.addEventListener("pagehide", () => flushVisibleJournalNotes({ keepalive: true }));
  window.setInterval(() => { void flushJournalQueue(); }, 3 * 60 * 1000);
}

document.querySelector("#headerCalendar")?.addEventListener("click", () => {
  if (document.body.dataset.section === "days" && !daysShowsDay) showSection("today");
  else {
    daysShowsDay = false;
    showSection("days");
  }
});

applyTheme();
renderNav();
resetOverviewToCalendar();
saveState();
showSection("today");
startJournalSync();
