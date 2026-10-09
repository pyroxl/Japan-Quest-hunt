# Japan Trip Journal

This folder is the Google Apps Script that stores family notes and photos in Brian's Google Drive. The phone app calls the deployed web app. The family passcode is a Script Property. Do not put the passcode in this repo.

## Deploy

1. Open https://script.google.com while you are signed in as Brian.
2. Click **New project**.
3. Select the sample `Code.gs` text. Delete it.
4. Paste the full text of `journal/Code.gs` from this repo.
5. Name the project `Japan Trip Journal`.
6. Click the gear icon. Open **Project settings**.
7. Under **Script properties**, click **Add script property**.
8. Set the property name to `JOURNAL_PASSCODE`.
9. Set the value to the family passcode. Click **Save script properties**.
10. Do not paste that passcode into the repo, the site, or a screenshot.
11. Click **Deploy**. Click **New deployment**.
12. Click the gear next to **Select type**. Choose **Web app**.
13. Set **Execute as** to **Me**.
14. Set **Who has access** to **Anyone**.
15. Click **Deploy**.
16. Click **Authorize access**. Allow the script to use Google Drive and Google Sheets.
17. Copy the **Web app** URL. The URL ends in `/exec`.
18. Open `app.js` in this repo. Set `JOURNAL_ENDPOINT` to that URL.
19. Publish the site again so each phone loads `app.js?v182`.

The first successful call creates the Drive folder `Japan Trip Journal 2026`, one subfolder per trip day, and the Google Sheet `Japan Trip Journal notes`.

## Update the script later

1. Edit `Code.gs` in the Apps Script project.
2. Click **Deploy**. Click **Manage deployments**.
3. Click the pencil on the web app.
4. Set **Version** to **New version**.
5. Click **Deploy**. The `/exec` URL stays the same.

## Calls

The app sends a `POST` body as plain text JSON. It does not set `Content-Type: application/json`, so the browser does not send a preflight.

Every body includes `passcode`. A wrong passcode returns `{"ok":false,"error":"Wrong passcode."}`.

- `uploadPhoto` saves a JPEG in that day's folder. The same `clientId` does not create a second file.
- `saveNote` keeps one row for each `dayId` and `author`.
- `list` returns notes and photos. A list for one day includes a base64 thumbnail. The viewer does not sign in to Google.
- `doGet?action=thumb&id=FILE_ID&passcode=...` returns the same thumbnail as text.

Sheet columns are `timestamp`, `dayId`, `date`, `author`, `note`, and `photo file ids`.
