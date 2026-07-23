# CRT & Retro FX Archive

A standalone collection of CSS tools to add retro Monitor, Terminal, and CRT effects to any web project.

## 📂 Contents

*   **`crt_tools.css`** - The core library. Import this into any project.
*   **`crt_demo.html`** - A visual gallery showing the effects in action. Color theme and font are set via the shared site gear (see below), not an in-page picker.

## 🚀 How to Use

1.  Copy `crt_tools.css` to your project.
2.  Link it in your HTML: `<link rel="stylesheet" href="crt_tools.css">`
3.  Apply classes to your elements:

### Available Classes

| Class | Effect |
| :--- | :--- |
| `.scanlines` | Adds visual horizontal scanlines. |
| `.scanlines-flicker` | Adds animated, flickering scanlines (more intense). |
| `.refresh-sweep` | Adds a slow vertical brightness band drifting down the element, like a CRT caught on camera. |
| `.phosphor-glow` | Adds the classic "bloom" text-shadow. |
| `.chromatic-text` | Adds Red/Blue text separation (Abberation). |
| `.glitch-text` | Animates the text with a cyberpunk glitch effect (Requires `data-text` attribute). |
| `.crt-cursor` | A blinking block cursor. Append as an empty inline element, e.g. `<span class="crt-cursor"></span>`. |
| `.terminal-box` | Preset container with border, glow, and background color. |
| `.screen-curve` | Adds an inner shadow to simulate a curved tube TV. |
| `.anim-power-on` | An animation class that makes an element "pop" in like an old TV turning on. |

No class was renamed or removed from the previous version of this library —
`.refresh-sweep` and `.crt-cursor` are new, additive utilities.

## 🎨 Themes

`crt_tools.css` ships eight live phosphor color themes as
`[data-phosphor="..."]` CSS-variable blocks, defined right inside the CSS
file — copy just `crt_tools.css` into a project and every theme comes with
it. Applying a theme is one attribute on `<html>`; removing the attribute
(or setting it to `p1`) falls back to the default green.

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

`crt_demo.html` no longer carries its own inline phosphor-switching copy.
Like every other page on the site, it loads the shared site-wide controller
by root-absolute path (`/assets/js/afterglows-settings.js` +
`/assets/css/afterglows-settings.css`), which injects a gear button + panel
(bottom-right) for picking the color theme. It persists to the same
`localStorage` key, `afterglows-phosphor`, that the portable `crt_tools.css`
(and `matrix_code`'s `matrix_tools.css`) read via `html[data-phosphor]`, so
this folder still stays dependency-free if you only copy `crt_tools.css` out
— you just won't get a picker UI unless you build or borrow one.

The shared gear also adds a font picker not present in the old inline
control: `localStorage['afterglows-font']` (IBM, VT323, Space, or Fira),
applied as `html[data-font]`, which changes `crt_demo.html`'s own page
chrome typeface. This is separate from `crt_tools.css`'s color variables
below and has no effect on them.

## 🎨 Customization

The effects use CSS variables. You can override them inline or in your own CSS:

```css
:root {
    --crt-green: #00ff41; /* Driven "phosphor color" — changes with the active theme */
    --crt-glow: #00ff41;  /* Glow/text-shadow color, also theme-driven */
    --crt-amber: #ffb000; /* Static accent, not theme-driven */
    --crt-bg: #0a0a0a;
}
```

- `--crt-green` — the phosphor foreground color. The name is kept for
  backward compatibility; under every theme (not just green ones) this is
  still the variable that's actually driven — e.g. under `p3` it holds the
  amber color.
- `--crt-dim` — secondary/muted phosphor color (labels, dim text).
- `--crt-head` — brightest highlight color.
- `--crt-glow` — color used for glow/text-shadow/box-shadow.
- `--crt-bg` — screen background color.
- `--crt-amber`, `--crt-blue`, `--crt-red` — static accent constants, not
  affected by the active theme.

Per-element overrides work too, as shown in `crt_demo.html`'s "inline var
override" panel, which sets `--crt-green: var(--crt-red)` on a single box to
recolor it red regardless of the page-wide theme.
