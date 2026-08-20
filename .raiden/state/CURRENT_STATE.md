# Current State

**Branch:** main
**Deployment:** Live at https://afterglows.starlightdaemon.dev/ via GitHub Pages

---

## Project

Afterglows is a workspace and live site for visual experiments, CSS/JS libraries, and design ideas from retired projects. Published as a standalone site with its own custom domain. Items here may be reused, moved, or retired as their value changes.

**Status:** Active — maintained collection; Stargate fully spun off.

---

## Collections

- **Matrix Code** (`matrix_code/`) — standalone CSS/JS library for digital rain, cyberpunk typography, and terminal aesthetics.
- **Retro** (`retro/`) — high-fidelity CRT monitor simulation toolkit (scanlines, phosphor persistence, screen curvature).
- **Concepts** (`concepts/`) — archived experimental UI motions, header animations, and interaction models; gallery modularized and versioned.

---

## Confirmed Current State

- Site deployed from repository root via GitHub Pages (CNAME configured).
- Concepts gallery curated to 200 concepts across 20 categories, with an
  active iterative refinement pass (Refined v2/v3/v4) reworking individual
  concepts' motion and physics; components versioned.
- Stargate removed from Afterglows; it now lives in its own standalone repo (`E:\Citadel\Stargate`).
- Dead Stargate UI hooks and dead media/sound code removed.
- `backups/` directory excluded from git (local `.gitignore` entry).
- `node_modules/` present (npm project); excluded from git.

## In Progress

- Per-concept geometric-motion/physics refinement pass across the concepts
  gallery (category by category — plasma, acoustics, statistical/thermo,
  fields/relativity/quantum, and others), most recently condensed-matter
  tiles.

## Not Yet Done

- No blocking work identified.

## Known Constraints

- `_archive/` holds retired material; do not promote to live collections without operator review.
- `node_modules/` is present locally; it should remain gitignored.
