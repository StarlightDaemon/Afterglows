# Header & Back-Navigation

This directory documents the shared header + back-navigation system used by the canonical Afterglows site at **https://afterglows.starlightdaemon.dev/**.

The site previously carried its own navigation chrome on every page: the root's logo/site-header block, `matrix_code/index.html`'s in-flow sidebar link back to Afterglows, and `retro/crt_demo.html`'s own in-flow "BACK TO TERMINAL" link. These have been unified into a single, canonical, site-wide controller referenced by root-absolute path from every page — mirroring how the theme/font system (`afterglows-settings.js` / `.css`, see `THEME_README.md`) works.

## Canonical Files

- **`/assets/js/afterglows-header.js`** — the single controller script. Injects a text-only "Afterglows" wordmark (fixed top-left) and, on any page that isn't the root home, a floating "Back" control (fixed bottom-left). Idempotent (`document.querySelector('.ag-header')` guard) and self-suppresses entirely inside iframes.
- **`/assets/css/afterglows-header.css`** — the single stylesheet. Styles `.ag-header`/`.ag-brand`/`.ag-tagline` (wordmark) and `.ag-back`/`.ag-back-link` (back control), reading color/font from the shared `--ag-*` theme tokens with fallbacks to a page's local `--matrix-*` / `--crt-*` tokens when the theme stylesheet isn't loaded.

Both files are linked by root-absolute path (`/assets/css/afterglows-header.css`, `/assets/js/afterglows-header.js`) from every page on the live site: the root `index.html`, the concepts gallery (`concepts/header-animation-concepts.html`), `matrix_code/index.html`, all four `matrix_code/demo_*.html` pages, and `retro/crt_demo.html`. No page carries its own header or back-link markup — the chrome is guaranteed identical everywhere it appears.

## What It Injects

1. **`.ag-header`** — a text-only "Afterglows" wordmark (no logo image; the old logo was retired) plus a small "Experimental Archive" tagline, fixed top-left. The wordmark links to the site root (`/`).
2. **`.ag-back`** — a fixed-position **wrapper** holding a static `.ag-back-link` control, fixed bottom-left. This is the exact same fixed-wrapper / static-child structure the settings gear uses (`.ag-settings` fixed + `.ag-gear` static), so both controls float and stay visible on scroll identically. Layout is deliberately non-overlapping: wordmark top-left, back bottom-left, settings gear bottom-right.

## Back-Navigation Hierarchy

The back target is one level **up**, not always the root:

- **Root home** (`/`, `/index.html`) — no back control. It IS home.
- **A subsite hub** — `matrix_code/index.html`, `retro/crt_demo.html`, the concepts gallery (`concepts/header-animation-concepts.html`) — back goes to the Afterglows root (`/index.html`). This is the default: any page without an explicit override falls back to the root.
- **A demo sub-page** — `matrix_code/demo_classic.html`, `demo_binary.html`, `demo_canvas.html`, `demo_themes.html` — back goes to its own hub, not the root. These pages declare the target explicitly on the `<html>` tag:
  ```html
  <html lang="en" data-ag-back="index.html">
  ```
  so the target is explicit rather than guessed from the URL.

## iframe Behavior

`matrix_code/index.html` embeds the demo pages in a preview `<iframe>`. Chrome belongs to the top-level page only, so `afterglows-header.js` checks `window.self !== window.top` and injects nothing when the document is framed. The embedded demo preview stays clean, but the exact same page opened standalone (its own tab/window) gets its full wordmark + back chrome.

## Adding the System to a New Page

Add both tags to `<head>`, by root-absolute path:

```html
<link rel="stylesheet" href="/assets/css/afterglows-header.css">
<script src="/assets/js/afterglows-header.js"></script>
```

If the new page is a demo/leaf page that should return to a hub instead of the root, add `data-ag-back` to `<html>` pointing at the hub's index, relative to the new page:

```html
<html lang="en" data-ag-back="index.html">
```

Omit the attribute for hub-level pages (they fall back to the root automatically) and for the root itself (which gets no back control regardless).

No per-page header or back-link markup is needed or wanted — the script injects both controls, so hand-authoring either produces duplicate chrome.

## Retired Markup

The root logo/site-header block, `matrix_code/index.html`'s in-flow sidebar "BACK TO AFTERGLOWS" link, and `retro/crt_demo.html`'s in-flow "BACK TO TERMINAL" link have all been removed; the shared controls replace them everywhere. `matrix_code/index.html`'s sidebar title was given extra top margin to clear the injected wordmark. Neither `matrix_tools.css` nor `crt_tools.css` were touched by this change.
