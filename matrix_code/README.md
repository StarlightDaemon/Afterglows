# Matrix & Digital Rain FX Library

This folder is a portable, copy-out library for Matrix-style visual effects — a
CSS file (`matrix_tools.css`), an optional JS helper (`phosphor_theme.js`), and
one full-screen demo page. Drop `matrix_tools.css` into any project and link
it; nothing else is required. `phosphor_theme.js` is optional and only needed
if you want the same color-theme switching the demo uses.

On the live site, `index.html` is the whole experience: one page of digital
rain with a MODE control (top-center) switching between three renderings, and
the shared site-wide settings gear (bottom-right,
`/assets/js/afterglows-settings.js` + `/assets/css/afterglows-settings.css`)
for phosphor color theme and font. The former four separate demo pages
(`demo_classic.html`, `demo_canvas.html`, `demo_binary.html`,
`demo_themes.html`) are retired; the files remain only as `noindex` redirect
stubs so old links land on the matching mode.

## Files

- **`matrix_tools.css`** — the library. Copy this into your project.
- **`phosphor_theme.js`** — optional helper for switching phosphor color
  themes at runtime. Copy it alongside the CSS if you want theme switching in
  a project that doesn't use the site-wide controller. No live page on this
  site loads it anymore — it's shipped purely as a portable helper.
- **`index.html`** — the demo: one full-screen page with three modes.
- **`demo_classic.html` / `demo_canvas.html` / `demo_binary.html` /
  `demo_themes.html`** — redirect stubs for retired URLs; not demos.

## Modes

Switched from the MODE row (top-center); the choice persists to
`localStorage['afterglows-matrix-mode']` and is deep-linkable by hash:

- **FILM** (`#film`, default) — the films' actual code effect, rebuilt from
  production interviews (Simon Whiteley / Animal Logic) and frame analyses:
  glyphs sit on a fixed grid and never move; each "raindrop" is a wave of
  illumination cascading down a column, lighting the cell under its head
  near-white while passed cells settle to code color and decay like
  phosphor. Lit cells occasionally mutate their glyph in place, and every
  glyph renders **mirrored** (half-width katakana + numerals + a few
  Latin/punctuation strays), matching the production's flipped characters.
  Deliberately non-interactive — it's a faithful recreation, not a toy.
- **CLASSIC** (`#classic`) — pure-CSS katakana rain in three parallax depth
  layers (far/mid/near) with haze + scanlines, driven entirely by
  `matrix_tools.css`'s public classes (`.matrix-rain`, `.m-col`,
  `.fast/.med/.slow`). Deliberately kept CSS-only: this mode is the live
  demonstration of the stylesheet API.
- **RAIN** (`#rain`; `#canvas` accepted as a legacy alias) — Canvas katakana
  rain. Interactive: a glyph halo lights the code around the cursor, columns
  near it accelerate and brighten, and a click launches an expanding pulse
  ring of lit glyphs.
- **BINARY** (`#binary`) — Canvas rain of pure `0`/`1` glyphs with per-column
  brightness variation and occasional sparkle bit-flips. Same engine as RAIN
  (a style config, not a second implementation), so it shares the cursor and
  click interactions.
- **DRAFT** (`#draft`) — a reconstruction of the production's *original*
  horizontal design: before the code was rotated vertical to match Japanese
  text convention, it streamed sideways "like lines of programming". Same
  stationary-grid illumination-wave mechanic as FILM, transposed to rows,
  with unmirrored glyphs (the "seen from inside" flip belongs to the
  finished vertical version). No footage of the prototype survives; this is
  an informed reconstruction, not a recreation.
- **TRACE** (`#trace`) — code that resolves into readable text, in the
  lineage of the Sneakers (1992) decrypting credits, the "no more secrets"
  effect, and XScreenSaver's `xmatrix -trace` (which recreates the film's
  own phone-trace terminal). A dim churning glyph field surrounds a message
  line whose characters lock in one by one, in random order, then hold and
  cycle to the next message (the film's opening terminal sequence).

RAIN and BINARY are two style configurations of a single canvas drop engine —
column model, trail/head rendering, and interaction are shared. FILM, DRAFT
and TRACE are additional draw paths on the same canvas that share the
sizing, reduced-motion, visibility, and resize plumbing. Only RAIN and
BINARY are interactive; the other canvas modes are faithful recreations.

## Usage

Link the stylesheet in your HTML:
```html
<link rel="stylesheet" href="matrix_tools.css">
```

## Features

### 1. Classic Digital Rain
Creates falling columns of text.
- **Container**: `.matrix-rain`
- **Columns**: `.m-col`
- **Speed Modifiers**: `.fast`, `.med`, `.slow`

### 2. Dense / Heavy Matrix
A denser variation of the matrix effect.
- **Container**: `.dense-matrix`
- **Columns**: `.dense-col`

### 3. Binary Counter
Animated binary numbers flipping between 0 and 1.
- **Class**: `.binary-count` (automatically adds animation via `::after` pseudo-element)

### 4. Glitch Text
Applies a cyberpunk glitch effect to text.
- **Class**: `.glitch-text`
- **Attribute**: `data-text` (Must match the text content for the effect to work)
- **Example**: `<div class="glitch-text" data-text="SYSTEM FAILURE">SYSTEM FAILURE</div>`

### 5. Utility
- **Terminal Box**: `.terminal-box` - A styled container with a green border and semi-transparent background.

## Themes

`matrix_tools.css` ships eight live phosphor color themes as
`[data-phosphor="..."]` CSS-variable blocks — they live inside the CSS file
itself, so copying just `matrix_tools.css` into another project brings every
theme with it. Applying a theme is a single attribute on `<html>`; removing
the attribute (or setting it to `p1`) falls back to the default green.

| Key | Name | Identity |
| :-- | :--- | :------- |
| `p1` (default) | Green Phosphor | Classic green screen |
| `p31` | Fast Green | Cooler, softer green — Amdek / DEC / Tektronix |
| `p3` | Amber | DEC VT220 / Hercules amber |
| `p4` | Paper White | Early B&W TVs, TRS-80, Commodore PET |
| `p7` | Blue-White | Radar / oscilloscope cascade phosphor |
| `p2` | Stoplight Green | Blue-shifted, saturated green — oscillography / radar |
| `p14` | Violet | Rare blue-violet phosphor |
| `neon` | Neon Blue | Modern cyberpunk pairing — **not** a historical phosphor |

The first seven are stylized takes on real historical CRT phosphor types;
`neon` is a deliberate modern extra, not a phosphor reference.

On the demo page the shared settings gear (bottom-right, canonical
`localStorage['afterglows-phosphor']` key) governs only the page chrome —
header, back button, controls bar, font. The rain itself is themed by its own
COLOR row in the top control bar, fully independent of the gear in **both**
directions: the gear never recolors the rain, and picking a rain color never
touches the global theme. The rain's choice persists separately under
`localStorage['afterglows-matrix-rain-color']` and offers the same eight
phosphors plus three film extras (Resurrections blue, Virus red, Neon Gold —
defined as `[data-phosphor]` blocks in the page, not the library). A
"⇐ Match Global" button copies the current global theme into the rain color
as a one-time snapshot — not a live link.

Apply a theme by setting `data-phosphor` on `<html>`:
```html
<html data-phosphor="p3">
```
or from JS:
```js
document.documentElement.setAttribute('data-phosphor', 'p3');
// back to default green:
document.documentElement.removeAttribute('data-phosphor');
```

To override colors manually instead of using a preset theme, set the
variables directly (on `:root` or on any container):
```css
:root {
    --matrix-color: #ff00ff;
    --matrix-glow: #ff00ff;
}
```

The demo's rain reads its palette *values* from these same CSS
`[data-phosphor]` blocks through a hidden probe element (`paletteFor()` in
`index.html`), so the local color options can never drift from the library's
definitions — only the *active selection* is independent of the global theme.

## Header + Back Navigation

Like every other page on the site, `index.html` loads the shared header
controller (`/assets/js/afterglows-header.js` +
`/assets/css/afterglows-header.css`), which injects the fixed "Afterglows"
wordmark (top-left) and a floating Back control (bottom-left). `index.html`
is a subsite hub: its Back control goes to the Afterglows root
(`/index.html`), the default when a page declares no override. See
`../docs/NAV_README.md` for the full system.

`phosphor_theme.js` (optional, for downstream copies) wraps theme switching
in `window.AfterglowsPhosphor`: `THEMES` (the theme list), `get()`,
`set(key)`, and `onChange(fn)`. It persists the chosen theme to
`localStorage` under `afterglows-phosphor` — the same key the site-wide
controller reads and writes — honors a `?phosphor=<key>` URL query for
one-off previews (not persisted), and follows the theme across same-origin
tabs via the `storage` event.

## CSS Variables

- `--matrix-color` / `--matrix-bg` — foreground and background (pre-existing).
- `--matrix-dim` — secondary/trail glyph color.
- `--matrix-head` — brightest "leading glyph" color.
- `--matrix-glow` — color used for text-shadow / canvas glow.

All variables are theme-driven under `[data-phosphor="..."]`; overriding any
of them (globally or per-element) works the same regardless of the active
theme.
