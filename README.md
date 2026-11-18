# KLdev

Portfolio and services site for KLdev (Kevin López). Plain HTML, CSS and JavaScript: no build step, no dependencies.

## Structure

```
index.html          home page (English; Spanish lives in js/main.js)
projects/           one case-study page per project
css/styles.css      design tokens and styles
js/config.js        contact settings
js/main.js          language switch, services brief, navigation, contact form
assets/             fonts (Archivo, Public Sans), screenshots, favicon
```

## Run locally

```
python3 -m http.server 8000
```

Open http://localhost:8000.

## Contact form

Set `endpoint` in `js/config.js` to any URL that accepts a JSON POST (Formspree, a Cloudflare Worker, and so on).
The body is `{ name, contact, message, services, language }`.

If `endpoint` is empty but `email` is set, the form opens a prefilled email.
If both are empty, it opens a prefilled text message to the number in the contact section.

## Content to update

- Phone number: the Call and Text links in `index.html`, and `telephone` in the JSON-LD block.
- Projects: the project grid in `index.html` ("Selected work") and one page per project in `projects/`. To add a project, copy a project page, add a tile to the grid, and add its Spanish strings to `js/main.js`. Replace `assets/img/lee-*.webp` when a site changes.
- Spanish copy: the `ES` object at the top of `js/main.js`. Every translatable element in `index.html` has a `data-i18n` key.
- Before launch with a real domain: add `<link rel="canonical">` and an absolute `og:image` to `index.html`.

## Deploy

Any static host works. On Cloudflare Workers (static assets), `wrangler.jsonc` is already set up:

```
npx wrangler deploy
```

Or connect the repository in the Cloudflare dashboard with no build command and `npx wrangler deploy` as the deploy command.
