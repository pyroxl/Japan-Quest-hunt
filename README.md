# Running Japan Trip Hunt

The itinerary data reflects the current Tokyo–Hakone–Tokyo sequence: Mai and Brian take small bags to Gora Nov 8–11, while the large luggage stays at APA Nishishinjuku, then return for one night (Nov 11–12). There is no hotel on the night of Nov 12.

From the trip-planning folder, run:

```bash
python3 -m http.server 8000 --directory apps/tokyo-quest
```

Then open:

```text
http://localhost:8000
```

Leave the terminal running while using the app. Stop it with `Ctrl+C`.

If port 8000 is already occupied, use another port:

```bash
python3 -m http.server 8001 --directory apps/tokyo-quest
```

Then open `http://localhost:8001`.

## Daily map implementation

Daily maps use **Leaflet 1.9.4** (`leaflet.js` and `leaflet.css`) with OpenStreetMap tiles. They are not Google My Maps or Google Maps iframe embeds.

- `place-coordinates.js` contains the saved latitude/longitude for each itinerary place.
- `app.js` creates a separate Leaflet map and numbered marker layer for each day.
- Hovering or focusing a numbered place button highlights its marker; hovering/focusing a marker highlights its button.
- On touch devices, the first tap highlights a place and the second tap opens that place’s Google Maps search.
- The map tiles need an internet connection while viewing the map; the Leaflet library and coordinate data are local project files.

## Seeing an older cached version

The app works offline and therefore uses a network-first service-worker cache. This update uses cache `japan-quest-v187`. The menu shows `v187` so you can see which copy is open. The app checks for updates on every launch. Document loads, including the manifest start address, and the shell files (`index.html`, `app.js`, and `styles.css`, with or without a version query) load from the network first and fall back to saved files when offline. An open tab reloads once when the new service worker takes control. If the screen is still old:

1. Open `https://pyroxl.github.io/Japan-Quest-hunt/reset.html` once, or close all Japan Trip Hunt tabs.
2. Start the server again.
3. Open `http://localhost:8000` and refresh once.
4. If it is still stale, do a hard refresh (`Ctrl+Shift+R`).

The guided roadmap, discovery deck, and melon passport use storage version `tokyoQuestHunt.v4`. Existing v3 progress, hotel details, review notes, awards, and photos are preserved.
