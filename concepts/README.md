# Animation Concepts Archive

This folder contains the complete exploration history of header animation concepts that were explored before the final direction was selected, presented as an interactive, manifest-driven gallery.

## 📂 Contents

*   **`header-animation-concepts.html`**: The gallery page shell (toolbar mount point, styles, page chrome). Open this file in a browser to browse all concepts. The page's explainer note (with the three status-badge examples) sits at the bottom of the page, below the gallery grid.
*   **`gallery/manifest.js`**: Single source of truth for the gallery — the category list and every concept's metadata (tag, label, category, status badge, version history, and `added`/`updated` ISO-UTC timestamps that drive the date sorts; historical values were backfilled from git author dates, so stamp both fields by hand when adding or revising a concept).
*   **`gallery/index.js`**: The manifest-driven renderer. It dynamically imports each concept module (so custom elements self-register and auto-upgrade), builds the filter toolbar, renders one section per category, and wires version cycling and the per-tile Copy/Source actions.
*   **`gallery/concepts/*.js`**: One self-registering custom-element module per concept (e.g. `aurora-concept.js` defines `<concept-aurora>`). No build step — dependency-free browser ESM.

## 🌌 Concepts Included

The gallery currently holds **240 concepts across 20 categories**, ranging from
pure geometric/mathematical abstraction all the way to ordinary everyday
subjects (consolidated 2026-08-03 from the original 29 categories):

| Category | Title | Concepts |
| --- | --- | --- |
| `geometry` | Geometry & Pattern | 12 |
| `systems` | Systems & Scanning | 14 |
| `bio` | Science & Bio | 13 |
| `lab` | Lab & Optics | 12 |
| `nature` | Nature & Weather | 15 |
| `space` | Space & Spatial | 12 |
| `scifi` | Sci-Fi & Encounters | 13 |
| `occult` | Supernatural & Occult | 11 |
| `arcane` | Magic & Arcane | 11 |
| `retro` | Retro & Symbolic | 12 |
| `mech` | Mechanisms & Tools | 12 |
| `home` | Home & Office | 11 |
| `ocean` | Ocean & Deep | 11 |
| `city` | City & Commerce | 12 |
| `music` | Music & Sound | 12 |
| `games` | Games & Sport | 11 |
| `garden` | Garden & Insects | 12 |
| `birds` | Birds & Aviary | 12 |
| `textile` | Textiles & Craft | 11 |
| `toys` | Toys & Playthings | 11 |
| **Total** | | **240** |

Each concept carries a status badge:

*   **Original v1** — untouched archive concepts. As of this revision **none
    remain**: every original concept has been rebuilt to the current bar.
*   **Refined v2 / v3 / v4** — rebuilt concepts; many carry **versioned tiles**:
    click the tile (or a version dot) to cycle through its older versions in
    place, with the badge updating to match. The full set of 11 Original v1
    concepts (Grid, Target Lock, Bin Counter, Digital Noise, Loading Bar,
    Signal, Glitch Text, Atom, EKG, Wormhole, Audio Circle) were rebuilt to
    Refined v2 with the original preserved on each tile's cycler, joining the
    earlier refinements (Hex, Radar, Eye, Sonar, Laser Scan, Compass, Server
    Rack, Circuit, Pulse, Bio-Rhythm, DNA Helix, Galaxy, Constellation,
    Portal, Pacman, Hourglass). The 2026-08-03 revision pass rebuilt 34
    more — 32 stepping "New v1" → Refined v2, plus Pacman and Circuit to
    Refined v3 — each with its prior render preserved on the cycler.
*   **New v1** — concepts added during the content expansion (the
    everyday-subject categories introduced mid-2026, plus extensions to
    `geometry`, `bio`, `nature` and `space` — the latest being the
    2026-08-01 additions Star Chart (split out of Constellation v3/v4),
    Microbial Field (split out of Microscope's view inset) and Virus, and
    the 2026-08-03 Mothership rebuild).

## 🧰 The Toolbar

The gallery page includes a live filter/search toolbar above the grid:

*   **Search** — filters concepts by name as you type.
*   **Sort** — a dropdown with three modes: **Curated** (the default manifest order, sectioned by category), **Newest first** (by `added` date), and **Recently updated** (by `updated` date). The two date sorts flatten the gallery into a single newest-first grid and add the relevant date to each card's badge row.
*   **Categories drawer** — a compact `Categories: All ▾` toggle that discloses the full chip row; the toggle doubles as a summary of the current selection. Chips **isolate** rather than toggle: clicking a category shows only that category's concepts; clicking the same (sole-active) chip again restores all categories. Clicking a different chip switches the isolation to it.
*   **Status chips** (Original / Refined / New) — toggle on/off independently, so any combination of statuses can be shown at once.
*   **Reset** — clears search and restores all categories, statuses, and the curated sort.
*   **Live count** — reads "Showing N of 240" and updates with every filter change.

Every tile also carries two actions: **Copy**, which copies a ready-to-paste embed snippet for that concept to the clipboard, and **Source**, which opens the concept's module file directly.

## 🎛️ Theme + Font Control

The gallery page loads the site-wide settings controller
(`/assets/js/afterglows-settings.js` + `/assets/css/afterglows-settings.css`),
which injects the same gear button + panel used on every other Afterglows
page into the bottom-right corner. It lets you pick one of 8 phosphor color
themes (p1 Green, p31 Fast Green, p3 Amber, p4 Paper White, p7 Blue-White, p2
Stoplight, p14 Violet, neon Neon Blue) and one of 4 fonts (IBM, VT323, Space,
Fira), persisted to `localStorage` under `afterglows-phosphor` and
`afterglows-font` respectively and shared live across every page on the site.

This control only affects the gallery's own page chrome (toolbar, headings,
explainer text). The concept tiles themselves keep their own hard-coded
palettes by design — each is a self-contained custom element with its own
shadow DOM, so the site theme intentionally does not reach inside them.

## 🧭 Header + Back Navigation

The gallery page also loads the shared header controller
(`/assets/js/afterglows-header.js` + `/assets/css/afterglows-header.css`),
which injects the same fixed "Afterglows" wordmark (top-left) and floating
Back control (bottom-left) used on every other Afterglows page. As a subsite
hub, the gallery's Back control goes to the Afterglows root (`/index.html`) —
it doesn't declare `data-ag-back`, so it falls back to the root by default.
See `../docs/NAV_README.md` for the full system.

## Usage

Concepts are reusable web components — each one is a self-contained custom element with its own shadow DOM and animation, no dependencies beyond the browser.

To reuse a concept in another page:

1.  Open the gallery and click **Copy** on the tile you want. This copies a two-line embed snippet: a `<script type="module">` tag pointing at the concept's module file, followed by its custom element tag (e.g. `<concept-aurora></concept-aurora>`). Paste both into your page.
2.  Alternatively, click **Source** on a tile to view (or link directly to) the module file under `gallery/concepts/`, then import it and use the custom element tag yourself.

Versioned tiles copy whichever version is currently active in the gallery (via the element's `version` attribute), so cycle to the version you want before copying.
