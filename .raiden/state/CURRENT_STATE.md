# Current State

**Branch:** main
**Deployment:** Live at https://afterglows.starlightdaemon.dev/ via legacy repository-root GitHub Pages publishing; D-003's allowlisted Actions artifact is implemented locally but not yet deployed

---

## Project

Afterglows is a workspace and live site for visual experiments, CSS/JS libraries, and design ideas from retired projects. Published as a standalone site with its own custom domain. Items here may be reused, moved, or retired as their value changes.

**Status:** Active — maintained collection; Stargate fully spun off.

---

## Collections

- **Matrix Code** (`matrix_code/`) — standalone CSS/JS library for digital rain, cyberpunk typography, and terminal aesthetics.
- **Retro** (`retro/`) — high-fidelity CRT monitor simulation toolkit (scanlines, phosphor persistence, screen curvature).
- **Concepts** (`concepts/`) — the single catalog of reusable animation concepts, organized by discipline and definitive category; gallery modularized and versioned.

---

## Confirmed Current State

- Site deployed from repository root via GitHub Pages (CNAME configured).
- Core theme fonts are vendored under `assets/fonts/`; the pending release artifact has no Google Fonts runtime dependency.
- Concepts gallery contains 660 concepts across 9 top-level sections and 43
  definitive category folders. The former Physics collection is integrated
  into the same catalog and renderer; component tags remain stable while
  source paths follow the unified taxonomy.
- Stargate removed from Afterglows; it now lives in its own standalone repo (`E:\Citadel\Stargate`).
- Dead Stargate UI hooks and dead media/sound code removed.
- `backups/` directory excluded from git (local `.gitignore` entry).
- `node_modules/` present (npm project); excluded from git.

## In Progress

- Per-concept geometric-motion refinement pass across the unified Concepts
  gallery, most recently the physical-science categories.

## Not Yet Done

- No blocking work identified.

## Known Constraints

- `_archive/` holds retired material; do not promote to live collections without operator review.
- `node_modules/` is present locally; it should remain gitignored.
