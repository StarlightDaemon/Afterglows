# Matrix & Digital Rain FX Library

This folder is a portable, copy-out library for Matrix-style visual effects — a
CSS file (`matrix_tools.css`), an optional JS helper (`phosphor_theme.js`), and
a set of standalone HTML demos. Drop `matrix_tools.css` into any project and
link it; nothing else is required. `phosphor_theme.js` is optional and only
needed if you want the same color-theme switching the demos use.

## Files

- **`matrix_tools.css`** — the library. Copy this into your project.
- **`phosphor_theme.js`** — optional helper for switching phosphor color
  themes at runtime. Copy it alongside the CSS if you want theme switching.
- **`index.html`** — a demo gallery hub with a sidebar (demo picker + live
  phosphor-theme picker) and an iframe preview.
- **`demo_classic.html`** — pure-CSS katakana rain in three parallax depth
  layers (far/mid/near), no canvas.
- **`demo_canvas.html`** — Canvas rain that reacts to the cursor (brightness
  radius) and to clicks (an expanding pulse ring).
- **`demo_binary.html`** — Canvas rain of pure `0`/`1` glyphs with
  per-column brightness variation and occasional sparkle glyphs.
- **`demo_themes.html`** — all eight phosphor palettes plus three page-local
  film-inspired palettes, side by side on a Canvas rain.

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

`phosphor_theme.js` (optional) wraps this in `window.AfterglowsPhosphor`:
`THEMES` (the theme list), `get()`, `set(key)`, and `onChange(fn)`. It
persists the chosen theme to `localStorage` under `afterglows-phosphor`,
honors a `?phosphor=<key>` URL query for one-off previews (not persisted),
and follows the theme across same-origin tabs via the `storage` event. The
demo pages load it with `<script src="phosphor_theme.js"></script>`; the
gallery hub (`index.html`) uses it to drive a phosphor picker in its
sidebar that live-recolors the iframe preview, and the canvas demos re-read
theme colors via `getComputedStyle` and a `MutationObserver` on
`data-phosphor` so they recolor without a reload.

## CSS Variables

- `--matrix-color` / `--matrix-bg` — foreground and background (pre-existing).
- `--matrix-dim` — secondary/trail glyph color.
- `--matrix-head` — brightest "leading glyph" color.
- `--matrix-glow` — color used for text-shadow / canvas glow.

All variables are theme-driven under `[data-phosphor="..."]`; overriding any
of them (globally or per-element) works the same regardless of the active
theme.
