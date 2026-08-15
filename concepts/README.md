# Animation Concepts Archive

This folder contains the complete exploration history of header animation concepts that were explored before the final direction was selected, presented as an interactive, manifest-driven gallery.

## 📂 Contents

*   **`header-animation-concepts.html`**: The gallery page shell (toolbar mount point, styles, page chrome). Open this file in a browser to browse all concepts. The page's explainer note (with the three status-badge examples) sits at the bottom of the page, below the gallery grid.
*   **`gallery/manifest.js`**: Single source of truth for the gallery — the category list and every concept's metadata (tag, label, category, status badge, version history, and `added`/`updated` ISO-UTC timestamps that drive the date sorts; historical values were backfilled from git author dates, so stamp both fields by hand when adding or revising a concept).
*   **`gallery/index.js`**: The manifest-driven renderer. It dynamically imports each concept module (so custom elements self-register and auto-upgrade), builds the filter toolbar, renders one section per category, and wires version cycling and the per-tile Copy/Source actions.
*   **`gallery/concepts/*.js`**: One self-registering custom-element module per concept (e.g. `aurora-concept.js` defines `<concept-aurora>`). No build step — dependency-free browser ESM.

## 🌌 Concepts Included

The gallery currently holds **561 concepts across 35 categories**, ranging from
pure geometric/mathematical abstraction all the way to historical instruments,
scientific apparatus, and ordinary everyday subjects:

| Category | Title | Concepts |
| --- | --- | --- |
| `geometry` | Geometry & Pattern | 19 |
| `systems` | Systems & Scanning | 19 |
| `bio` | Science & Bio | 22 |
| `lab` | Lab & Optics | 33 |
| `nature` | Nature & Weather | 26 |
| `space` | Space & Spatial | 19 |
| `scifi` | Sci-Fi & Encounters | 18 |
| `occult` | Supernatural & Occult | 18 |
| `arcane` | Magic & Arcane | 19 |
| `retro` | Retro & Symbolic | 23 |
| `mech` | Mechanisms & Tools | 29 |
| `home` | Home & Office | 18 |
| `ocean` | Ocean & Deep | 21 |
| `city` | City & Commerce | 17 |
| `music` | Music & Sound | 21 |
| `games` | Games & Sport | 18 |
| `garden` | Garden & Insects | 20 |
| `birds` | Birds & Aviary | 18 |
| `textile` | Textiles & Craft | 17 |
| `toys` | Toys & Playthings | 18 |
| `alchemy` | Alchemy & Hermetica | 10 |
| `geology` | Geology & Earth Sciences | 10 |
| `cipher` | Ciphers & Cryptography | 10 |
| `optics` | Optics & Early Cinema | 10 |
| `navigation` | Navigation & Cartography | 10 |
| `horology` | Horology & Chronometry | 10 |
| `telecom` | Telegraphy & Early Telecom | 10 |
| `acoustics` | Acoustics & Early Phonography | 10 |
| `surveying` | Surveying & Geodesy | 10 |
| `aero` | Aeronautics & Early Flight | 10 |
| `print` | Typography & Historical Printmaking | 10 |
| `astronomy` | Observational Astronomy & Astrometry | 10 |
| `crystallography` | Crystallography & Goniometry | 10 |
| `meteorology` | Historical Meteorology & Atmospheric Instrumentation | 10 |
| `spectroscopy` | Historical Spectroscopy & Prismatics | 8 |
| **Total** | | **561** |

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
*   **Origin chips** (Claude / Gemini) — toggle on/off independently, filtering by which agent(s) built or revised each concept (see **Origin & Attribution** below). A concept touched by both agents matches either chip.
*   **Model / Version chips** — toggle on/off independently, filtering by which model tier (e.g. Sonnet) and specific version (e.g. 5) made a contribution. Unlike the fixed Origin chips, these are generated from whatever values actually appear in `manifest.js` — a new model/version shows up as its own chip automatically, no code change needed. Concepts with no tracked model/version fall under an **Unspecified** chip in each group (currently most of the archive — see **Origin & Attribution** below).
*   **Reset** — clears search and restores all categories, statuses, origins, models, versions, and the curated sort.
*   **Live count** — reads "Showing N of 561" and updates with every filter change.

Every tile also carries two actions: **Copy**, which copies a ready-to-paste embed snippet for that concept to the clipboard, and **Source**, which opens the concept's module file directly.

## 🏷️ Origin & Attribution

Every entry in `manifest.js` carries an `origin` field: `{ contributions: [{ agent,
model, version }, ...] }`, ordered oldest contribution first. `agent` is drawn from
`"claude"` / `"gemini"` (extend with a new string, e.g. `"codex"`, if another tool
contributes); `model` is the model tier/family (e.g. `"sonnet"`, `"opus"`), `version`
its specific version (e.g. `"5"`) — both `null` where not known. This is what the
toolbar's **Origin**, **Model**, and **Version** chips filter on (by `agent`,
`model`, and `version` respectively — a concept can match multiple chips within a
group if it has more than one contribution, e.g. a Gemini-then-Claude concept
matches both the Claude and Gemini Origin chips).

As of 2026-08-07: the 200 concepts that predate that date were all built with some
Claude model per repo history, backfilled as `{ contributions: [{ agent: "claude",
model: null, version: null }] }` since per-concept model detail wasn't tracked at
the time. The 40 concepts added 2026-08-06/07 carry exact data on the Claude side —
26 built solely by Gemini, 14 built by Gemini and then patched or rebuilt by Claude
Sonnet 5 (`{ agent: "claude", model: "sonnet", version: "5" }`). Gemini's specific
model/version was never confirmed, so those stay `null` too rather than guessed.

**This is a standing requirement, not a one-time backfill.** Any agent — Claude,
Gemini, or otherwise — adding a new concept or revising an existing one must
add/update its `origin` field accordingly. Never fabricate a model you aren't
certain of; use `null` instead.

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
