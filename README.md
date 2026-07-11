# Running Japan Trip Hunt

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

## Seeing an older cached version

The app works offline and therefore uses a network-first service-worker cache. This update uses cache `japan-quest-v28`, checks for updates on every launch, and falls back to saved files when offline. If an already-open tab still shows the old route:

1. Close all Japan Trip Hunt tabs.
2. Start the server again.
3. Open `http://localhost:8000` and refresh once.
4. If it is still stale, do a hard refresh (`Ctrl+Shift+R`).

The guided roadmap, discovery deck, and melon passport use storage version `tokyoQuestHunt.v4`. Existing v3 progress, hotel details, review notes, awards, and photos are preserved.
