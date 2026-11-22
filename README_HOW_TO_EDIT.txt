FIREGY LTD — HOW TO EDIT & UPDATE YOUR WEBSITE (NO CODING TOOLS NEEDED)
=======================================================================

This folder is 100% self-contained. It has zero dependency on Tab, WordPress,
databases, or paid plugins. Every photo, sample report PDF, style, and page
lives right here in these files.

WHAT IS IN THIS FOLDER
----------------------
- index.html      Main page wrapper, browser title ("Getting you compliant"),
                  favicon, and Google/AI-search metadata (firegy.co.uk).
- app.js          All website text: services, descriptions, phone number,
                  address, About copy, Guides/Articles, Privacy/Terms/Cookies,
                  and the Quote Form delivery to office@firegy.co.uk.
- styles.css      All colours, spacing, fonts (Poppins), and mobile/desktop
                  layout rules.
- assets/         All website photos and logos (hero fleet photo, service
                  carousel photos, Firegy logo, favicon).
- samples/        All 9 anonymised Sample Report PDFs linked from the
                  service cards.

HOW TO EDIT TEXT (PHONE NUMBER, SERVICES, GUIDES, ETC.)
-------------------------------------------------------
1. Open `app.js` in any plain text editor (Notepad on Windows, TextEdit in
   Plain Text mode on Mac, or directly via Google Drive's text editor).
2. Press Ctrl+F (Windows) or Cmd+F (Mac) to find the exact wording you want
   to change.
3. Edit only the words INSIDE the quotation marks ("...") — keep the quotes
   and commas around them intact.
4. Save `app.js`.

HOW TO EDIT COLOURS OR FONTS
----------------------------
1. Open `styles.css` in any plain text editor.
2. At the top of the file you'll see the brand colours:
     --red:   #EC2024;   (Firegy Red)
     --green: #48B850;   (Firegy Green)
3. Change any colour hex code or spacing value and save `styles.css`.

HOW TO REPLACE A PHOTO OR SAMPLE PDF
------------------------------------
- Photos: Open the `assets/` folder, find the photo you want to replace
  (for example `hero.jpg` or `svc-fra.jpg`), and replace it with your new
  photo using the EXACT SAME filename.
- Sample Reports: Open the `samples/` folder and replace any PDF using the
  EXACT SAME filename (for example `sample-fire-risk-assessment.pdf`).

HOW TO PUBLISH AN UPDATE IN 10 SECONDS (CLOUDFLARE PAGES OR NETLIFY)
--------------------------------------------------------------------
On Cloudflare Pages (Free — £0/year):
1. Log in to https://dash.cloudflare.com -> Workers & Pages -> firegy.
2. Click "Create new deployment".
3. Drag and drop this whole folder (or `Firegy_Website_LIVE_Ready.zip`) into
   the upload box and click "Save and Deploy".
4. Live on https://www.firegy.co.uk/ within ~10 seconds!

On Netlify Drop (Free — £0/year):
1. Log in to https://app.netlify.com -> Sites -> firegy -> Deploys.
2. Drag and drop this whole folder onto the "Drag and drop your site output
   folder here" area.
3. Live on https://www.firegy.co.uk/ within ~10 seconds!

ONE-TIME QUOTE FORM ACTIVATION (FIRST SUBMISSION ONLY)
------------------------------------------------------
The Quote Form sends enquiries straight to `office@firegy.co.uk` via
FormSubmit (no backend server required).
The VERY FIRST time you test the Quote Form on https://www.firegy.co.uk/,
FormSubmit will email a one-time "Activate Form" confirmation link to
`office@firegy.co.uk`. Click that link once — after that, every customer
quote request arrives straight in `office@firegy.co.uk` automatically.
