# Responsive Layout Fix

A static HTML/CSS/JavaScript demo project for a web-developer portfolio.

It shows a real responsive-layout problem and its fix: a product card with a
hard-coded width that overflows a phone screen, corrected with fluid widths and
responsive spacing.

> **Demo project — created for portfolio purposes.** It is not work delivered to
> a real client.

## What the page contains

- **Before / After** comparison blocks (side by side on desktop, stacked on mobile).
- A product card with a CSS-generated image placeholder, name, price and button.
- **What was fixed** — three fixes: horizontal overflow, responsive spacing, button fit.
- **Technologies used** — HTML5, CSS3, vanilla JavaScript.
- A **Mobile preview** button in the header that widens the demo device frames.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Semantic page markup |
| `styles.css` | All styles, including the deliberately broken card and the fix |
| `script.js` | Only the mobile-preview toggle (a few lines) |
| `README.md` | This file |

## Why JavaScript is minimal

The page works without JavaScript. `script.js` only toggles the `preview-on`
class on `<body>` when the reader clicks **Mobile preview**, and keeps the
button's `aria-pressed` state in sync. Everything else — layout, comparison,
responsive behaviour — is pure HTML and CSS.

## The bug and the fix (short version)

**Original CSS error:** the card was given a fixed width (`width: 480px`) with
`max-width` unset, and its inner elements (image, text block, button) used more
fixed pixel widths. Inside a ~320–375 px viewport the card could not shrink, so
it overflowed the screen, produced horizontal scrolling and pushed the "Add to
cart" button out of view.

**Fix:**

1. `max-width: 100%` and fluid/flexible widths so the card can never exceed its
   container (prevents horizontal overflow).
2. Padding and gaps replaced fixed pixel margins, tuned with media queries
   (responsive spacing).
3. The button uses `width: 100%` with `min-width: 0` on flex children so it
   always fits smaller screens.

The broken version is kept on purpose inside `.product-card--broken` so the
problem remains visible in the **Before** panel.

## Run locally

No build step, no dependencies. Open `index.html` in any modern browser, or
double-click the file.

## Publish on GitHub Pages (free)

1. Create a new **public** repository on GitHub.
2. Upload `index.html`, `styles.css`, `script.js` and `README.md`.
3. Open **Settings → Pages**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`, then **Save**.
4. After a minute, the site appears at
   `https://<your-username>.github.io/<repository-name>/`.

A public repository and GitHub Pages are free of charge.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Edge, Safari). Uses Flexbox, CSS
Grid, custom properties and `clamp()`.

## Licence

Free to use as a portfolio demo. No warranty.
