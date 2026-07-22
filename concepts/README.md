# Animation Concepts Archive

This folder contains the complete exploration history of header animation concepts that were explored before the final direction was selected, presented as an interactive, manifest-driven gallery.

## 📂 Contents

*   **`header-animation-concepts.html`**: The gallery page shell (toolbar mount point, styles, page chrome). Open this file in a browser to browse all concepts.
*   **`gallery/manifest.js`**: Single source of truth for the gallery — the category list and every concept's metadata (tag, label, category, status badge, version history).
*   **`gallery/index.js`**: The manifest-driven renderer. It dynamically imports each concept module (so custom elements self-register and auto-upgrade), builds the filter toolbar, renders one section per category, and wires version cycling and the per-tile Copy/Source actions.
*   **`gallery/concepts/*.js`**: One self-registering custom-element module per concept (e.g. `aurora-concept.js` defines `<concept-aurora>`). No build step — dependency-free browser ESM.

## 🌌 Concepts Included

The gallery currently holds **48 concepts across 7 categories**:

| Category | Title | Concepts |
| --- | --- | --- |
| `geometry` | Geometry & Pattern | 7 |
| `scanning` | Scanning & Targeting | 7 |
| `systems` | Systems & Diagnostics | 8 |
| `bio` | Science & Bio | 7 |
| `nature` | Nature & Elements | 5 |
| `space` | Space & Spatial | 7 |
| `retro` | Retro & Symbolic | 7 |
| **Total** | | **48** |

Each concept carries a status badge:

*   **Original v1** — untouched archive concepts.
*   **Refined v2 / v3 / v4** — rebuilt concepts; some (Radar, Sonar, Compass, Circuit, Pulse, DNA Helix, Galaxy, Constellation, Pacman, Hourglass) are **versioned tiles**: click the tile (or a version dot) to cycle through its older versions in place, with the badge updating to match.
*   **New v1** — concepts added during the current expansion.

## 🧰 The Toolbar

The gallery page includes a live filter/search toolbar above the grid:

*   **Search** — filters concepts by name as you type.
*   **Category chips** — **isolate** rather than toggle: clicking a category shows only that category's concepts; clicking the same (sole-active) chip again restores all categories. Clicking a different chip switches the isolation to it.
*   **Status chips** (Original / Refined / New) — toggle on/off independently, so any combination of statuses can be shown at once.
*   **Reset** — clears search and restores all categories and statuses.
*   **Live count** — reads "Showing N of 48" and updates with every filter change.

Every tile also carries two actions: **Copy**, which copies a ready-to-paste embed snippet for that concept to the clipboard, and **Source**, which opens the concept's module file directly.

## Usage

Concepts are reusable web components — each one is a self-contained custom element with its own shadow DOM and animation, no dependencies beyond the browser.

To reuse a concept in another page:

1.  Open the gallery and click **Copy** on the tile you want. This copies a two-line embed snippet: a `<script type="module">` tag pointing at the concept's module file, followed by its custom element tag (e.g. `<concept-aurora></concept-aurora>`). Paste both into your page.
2.  Alternatively, click **Source** on a tile to view (or link directly to) the module file under `gallery/concepts/`, then import it and use the custom element tag yourself.

Versioned tiles copy whichever version is currently active in the gallery (via the element's `version` attribute), so cycle to the version you want before copying.
