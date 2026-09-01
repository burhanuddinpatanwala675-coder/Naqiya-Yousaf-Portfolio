# Sociology Teacher — Portfolio Website (HTML / CSS / JavaScript)

A premium, static portfolio website for an individual Sociology teacher (O Level & A Level). Built with plain HTML, CSS, and JavaScript — **no framework, no build step, no bundler, no npm install required.** No backend, no database, no CMS, no login. Every page is a real `.html` file; content is pulled in at page-load by small JavaScript modules from the data files in `/js/data/`.

This README is written for someone with no coding background. Every section tells you exactly which file to open and what to change.

---

## 1. Previewing the site on your own computer

Because the pages use JavaScript modules (`<script type="module">`) to pull in content, **opening an `.html` file directly by double-clicking it will not work** — browsers block module imports over the `file://` protocol for security reasons. You need a very simple local server. Pick whichever you have available:

```bash
# Python (most computers already have this)
python3 -m http.server 8000

# Node.js
npx serve .

# VS Code
# Install the "Live Server" extension, right-click index.html, "Open with Live Server"
```

Then open `http://localhost:8000` (or whatever port/URL is shown) in your browser.

**This local-server requirement is only for previewing on your own computer.** Once deployed to any real static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages), everything works automatically over `https://` with no extra steps.

---

## 2. How the site is organized

```
index.html            Home
about.html             About
credentials.html       Credentials & Certifications
teaching.html          My Teaching Approach
testimonials.html      What My Students Say
distinctions.html      Student Distinctions & Achievements
cv.html                Curriculum Vitae
contact.html           Get in Touch
404.html               Not-found page (shown automatically by most hosts)

css/styles.css          All styling (brand colors, layout, responsive rules)

js/data/                 <-- YOU EDIT THESE FILES to update content
  teacher.js              Name, hero copy, About page content, teaching approach
  credentials.js          Qualifications, certifications, training, awards
  certificates.js         Certificate gallery
  testimonials.js         Student/parent testimonials
  achievements.js         Student distinctions/results + statistics
  contact.js               Email, phone, WhatsApp, location, social links

js/components.js         Builds the navbar, footer, and card layouts (rarely needs editing)
js/icons.js               Small inline SVG icons
js/reveal.js               Subtle scroll-reveal animation helper
js/pages/                  One small script per page that renders that page's content

images/                   Photos (teacher portrait, teaching image, social preview image)
certificates/             Certificate files (PDF/JPG/PNG) go here
documents/                 The CV Word document goes here
```

**You should almost never need to edit any `.html` file or anything in `/js/` other than `/js/data/`.** The HTML files just contain empty containers (like `<div id="profile-stats"></div>`) that the JavaScript fills in from the data files.

---

## 3. Updating the teacher profile

Open **`js/data/teacher.js`** in any text editor.

- Replace `[TEACHER NAME]` with the real name — it's used everywhere (nav, hero, footer, page titles) from this one place.
- `heroHeadline` and `heroSubtext` are the two editable blocks of text in the hero section.
- `profileStats` are the four "Academic & Professional Profile" cards on the home page. **Do not fill these in with invented numbers** — replace `[YEARS OF EXPERIENCE]`, `[QUALIFICATION]`, etc. only once you have the real figures.
- `philosophyQuote` is the large quote on the navy section of the home page.
- The `about` object holds every paragraph on the About page, plus the "At a Glance" facts.
- `teachingApproach` is a list of the six numbered sections on the Teaching Approach page.

---

## 4. Updating the photo carousel

The Home page hero and the About page both show a small auto-advancing photo carousel, built from the `photoGallery` array in `js/data/teacher.js`:

```js
photoGallery: [
  { src: 'images/photo-1-class-lecture.jpg', alt: 'Description of the photo' },
  { src: 'images/photo-2-award-ceremony.jpg', alt: 'Description of the photo' },
  // add, remove, or reorder as many as you like
],
```

To add a photo: place the image file in `/images/` and add an object pointing to it. To remove one: delete its object from the array. The order in the array is the order it appears in the carousel. Upright (portrait-orientation) photos with similar cropping work best since they all share the same frame.

Every photo currently in the gallery has had faces blurred (including Naqiya's own), at her request. If you add new photos, blur any faces yourself before adding them here — this site does not do that automatically.

---

## 5. Adding credentials & certifications

Open **`js/data/credentials.js`**. There are five arrays — `academicQualifications`, `teachingQualifications`, `professionalCertifications`, `trainingAndDevelopment`, `awardsAndRecognition`. Each entry looks like:

```js
{
  title: 'Postgraduate Certificate in Education (PGCE)',
  institution: 'University of Example',
  year: '2019',
  description: 'A short sentence describing the qualification.',
}
```

Copy an existing object and edit it to add a new credential; delete one to remove it.

---

## 6. Adding certificates to the gallery

1. Put the certificate file (PDF, JPG, or PNG) into **`/certificates/`**.
2. Open **`js/data/certificates.js`** and add an object:

```js
{
  title: 'PGCE Certificate',
  institution: 'University of Example',
  year: '2019',
  file: 'certificates/pgce-certificate.pdf',
  preview: null, // or 'certificates/pgce-certificate-preview.jpg' for a thumbnail
}
```

The gallery starts **empty on purpose** so the site never links to a certificate that doesn't exist yet.

---

## 7. Replacing the CV (Word document)

The CV is **not** generated by this website — you supply the real file.

1. Place your CV file at **`/documents/teacher-cv.docx`** — the filename must match exactly.
2. To use a different filename, open `js/pages/cv.js` and change the `CV_FILE_PATH` constant near the top.
3. Update `CV_UPDATED_YEAR` in the same file to the year you last updated the document.

---

## 8. Adding testimonials

Open **`js/data/testimonials.js`** and add an object:

```js
{
  quote: 'The exact words the student or parent gave you.',
  name: 'Student Name',
  level: 'A Level Sociology',
  category: 'A Level', // must be exactly: 'O Level', 'A Level', or 'Parent'
  year: '2025',
}
```

The filter buttons (All / O Level / A Level / Parent) work automatically based on `category`.

**Only add testimonials you have permission to publish.**

---

## 9. Adding student distinctions / results

Open **`js/data/achievements.js`**.

```js
{
  name: 'Aisha Khan',
  displayAs: 'firstLast',   // 'full' | 'firstLast' | 'anonymous'
  result: 'A*',
  level: 'A Level Sociology',
  category: 'A Level',      // 'O Level' or 'A Level'
  examSession: 'May/June',
  year: '2025',
  description: '',
}
```

`displayAs` controls student privacy — **set this deliberately based on the permission you have**:

- `'full'` → full name, e.g. "Aisha Khan"
- `'firstLast'` → first name + last initial, e.g. "Aisha K."
- `'anonymous'` → "Student A", "Student B", etc. (assigned automatically by list order)

At the top of the same file, `achievementStats` controls the four statistics banner at the top of the page. **Leave `value` as `null` to hide a statistic entirely** — only fill in a number once it's real and confirmed.

---

## 10. Updating contact details & social links

Open **`js/data/contact.js`**:

- `email`, `phone`, `location`, `teachingMode` — plain text.
- `whatsappNumber` — international format, digits only (e.g. `'447123456789'`). Leave empty to hide the WhatsApp button.
- `whatsappDisplay` — the human-readable number shown as text.
- `social` — a full URL shows that icon in the footer; an empty string hides it.

---

## 11. Brand colors & fonts (reference only)

Defined once as CSS variables at the top of `css/styles.css`:

| Color | Hex | Used for |
|---|---|---|
| Deep Navy | `#1F3A5F` | Navigation, headings, primary buttons |
| Warm Beige | `#F4EFE6` | Page backgrounds |
| Terracotta | `#C76B4A` | Accents, hovers, badges, statistics |
| Charcoal | `#292929` | Body text |
| Off-white | `#FFFDF8` | Cards |

Fonts: **Playfair Display** (headings) and **Inter** (body text), loaded from Google Fonts in the `<head>` of each page.

---

## 12. Deploying the site

There is no build step — the folder you have right now **is** the deployable site. Because every page is a real `.html` file (not a single-page app), every static host serves direct links like `/about.html` correctly with zero extra configuration.

- **Netlify**: drag-and-drop this folder onto the Netlify dashboard, or connect the repository. No build command needed — leave it blank, or use `echo "no build needed"`. Publish directory: the project root (`.`).
- **Vercel**: import the repository as a static project. No build command or output directory setting needed.
- **Cloudflare Pages**: connect the repository, leave the build command empty, set the output directory to the project root.
- **GitHub Pages**: push this folder to a repository and enable Pages (Settings → Pages → Deploy from a branch), pointing at the root of the branch (or a `docs/` folder containing these files).

`404.html` is picked up automatically by all four hosts for unmatched URLs.

### Before going live
Update the placeholder domain (`https://www.example.com`) in every HTML file's `<link rel="canonical">` and `og:url` tags, plus `robots.txt` and `sitemap.xml`, to your real domain.

---

## 13. Final checklist before publishing

- [ ] Replace every `[TEACHER NAME]`, `[QUALIFICATION]`, `[YEAR]`, etc. placeholder in `/js/data/` with real information
- [ ] Update the photo carousel in `js/data/teacher.js` (`photoGallery`) with real photos, faces blurred if that's still the preference
- [ ] Add real credentials in `js/data/credentials.js`
- [ ] Add real certificate files to `/certificates/` and register them in `js/data/certificates.js`
- [ ] Add the real CV to `/documents/teacher-cv.docx`
- [ ] Replace placeholder testimonials in `js/data/testimonials.js` (only with permission)
- [ ] Replace placeholder distinctions in `js/data/achievements.js`, setting `displayAs` deliberately (only with permission)
- [ ] Fill in real contact details and any social links in `js/data/contact.js`
- [ ] Update the placeholder domain in every page's `<head>`, `robots.txt`, and `sitemap.xml`
- [ ] Preview locally with a local server (see Section 1) once more before publishing
