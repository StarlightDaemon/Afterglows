# Theme Files

This directory contains documentation for the shared theme + font system used by the canonical Afterglows site at **https://afterglows.starlightdaemon.dev/**.

The site previously had three incompatible theme/font implementations: the root's `data-theme`/`theme`/`site-font` system (driven by `theme-toggle.js`), `matrix_code`'s two phosphor pickers (`index.html`'s sidebar and `demo_themes.html`'s in-page row, both built on `phosphor_theme.js`), and `retro/crt_demo.html`'s own inline copy of the picker. These have been unified into a single, canonical, site-wide controller referenced by root-absolute path from every page.

## Canonical Files

- **`/assets/js/afterglows-settings.js`** — the single controller script. Applies the persisted phosphor theme + font to `<html>` as early as possible (before first paint, to avoid a flash of the default theme), injects an identical gear-button + settings panel into the bottom-right corner of every page, persists choices to `localStorage`, and live-syncs across tabs and same-origin iframes via the `storage` event. Exposes `window.AfterglowsSettings` (`THEMES`, `FONTS`, `getPhosphor()`, `setPhosphor(key)`, `getFont()`, `setFont(key)`, `onPhosphorChange(fn)`, `onFontChange(fn)`).
- **`/assets/css/afterglows-settings.css`** — the single stylesheet. Defines the 8 phosphor palettes as generic `--ag-*` tokens (`--ag-color`, `--ag-color-rgb`, `--ag-dim`, `--ag-head`, `--ag-glow`, `--ag-bg`) keyed off `html[data-phosphor]`, the 4 font tokens as `--ag-font` keyed off `html[data-font]`, and the `.ag-*` gear/panel component styles.

Both files are linked by root-absolute path (`/assets/js/afterglows-settings.js`, `/assets/css/afterglows-settings.css`) from every page on the live site: the root `index.html`, the concepts gallery (`concepts/header-animation-concepts.html`), `matrix_code/index.html`, and `retro/crt_demo.html`. There is no per-page theme markup left anywhere — the gear and panel are injected by the script itself, so the control is guaranteed identical everywhere.

`matrix_code`'s former standalone iframe demo pages have been consolidated into `matrix_code/index.html` as switchable modes, so every live page now carries the gear. `matrix_code/phosphor_theme.js` — the older, lighter-weight boot-shim those pages used — is no longer loaded by any live page; it remains shipped purely as an optional portable helper for downstream copies of `matrix_tools.css` (see `matrix_code/README.md`).

## Themes Available

8 canonical phosphor themes, all colors — every survivor from the old systems that made the cut, plus two the unification retired:

| Key | Name |
| :-- | :--- |
| `p1` (default) | Green |
| `p31` | Fast Green |
| `p3` | Amber |
| `p4` | Paper White |
| `p7` | Blue-White |
| `p2` | Stoplight |
| `p14` | Violet |
| `neon` | Neon Blue |

**Retired:** the old root-only themes **P1+ Matrix** and **IBM Blue** are gone. P1+ Matrix was visually identical to canonical `p1`, so it added nothing. IBM Blue's accent color duplicated `neon`, and its blue-tinted background conflicted with the near-black aesthetic the phosphor library (`matrix_tools.css` / `crt_tools.css`) is built around, so it didn't unify cleanly with the other seven.

## Fonts Available

4 fonts, exposed as picker buttons:

- **IBM** (IBM Plex Mono) — default
- **VT323**
- **Space** (Space Mono)
- **Fira** (Fira Code)

JetBrains Mono still exists as an `--ag-font` mapping (`html[data-font="jetbrains"]`) in `afterglows-settings.css` for compatibility, but it is not exposed as a picker button in the panel.

## Storage Contract

Single source of truth, read on every page load and kept live across tabs/iframes via the `storage` event:

- `localStorage['afterglows-phosphor']` → one of `p1 p31 p3 p4 p7 p2 p14 neon`, applied as `html[data-phosphor]`. The default, `p1`, clears the attribute rather than setting it. This is the **same key and value format** the portable libraries `matrix_code/matrix_tools.css` and `retro/crt_tools.css` already read — a theme picked anywhere on the site is already in effect for those libraries with no extra wiring.
- `localStorage['afterglows-font']` → one of `ibm vt323 space fira`, applied as `html[data-font]`.

A `?phosphor=<key>` / `?font=<key>` URL query previews a theme/font for the current load only (useful for deep links or screenshots) without persisting it.

### One-time migration

On first load, `afterglows-settings.js` checks for the two new keys; if either is unset, it adopts the corresponding old root-only key so returning visitors don't see their choice reset:

- old `theme` → new `afterglows-phosphor`: `p1-green` → `p1`, `p1-matrix` → `p1`, `p3-amber` → `p3`, `p4-white` → `p4`, `ibm-blue` → `neon`.
- old `site-font` → new `afterglows-font` (1:1, same 4 keys).

## Retired Files

**`assets/css/theme-toggle.css`** and **`assets/js/theme-toggle.js`** still exist in the repo but are no longer used by any live page. They're retained solely because the archived snapshot `_archive/main-site.html` still links them directly (`../assets/css/theme-toggle.css`, `../assets/js/theme-toggle.js`) to preserve that page as a point-in-time capture of the old root design. Do not link these files from any live page — use the canonical controller above instead.

`assets/css/styles.css` (the root stylesheet) no longer defines its color scheme in per-theme `body[data-theme="..."]` blocks; it maps its own design-system variables onto the shared `--ag-*` tokens in a single block on `body`, so every phosphor theme drives the whole page from one source of truth. It still defines its own `[data-font="..."]` blocks mapping `--ag`-independent variables (`--font-mono`, `--font-display`), driven by the same `html[data-font]` attribute the shared controller sets.

## Beta Theme

The original retro terminal theme created for this project is saved as `index.beta.html` and can be accessed via the footer link.
