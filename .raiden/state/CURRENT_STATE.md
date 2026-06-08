# Current State

**Last updated:** 2026-05-15
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
- Concepts gallery modularized and expanded; components versioned.
- Stargate removed from Afterglows; it now lives in its own standalone repo (`/Users/dante/Citadel/Stargate`).
- Dead Stargate UI hooks and dead media/sound code removed.
- `backups/` directory excluded from git (local `.gitignore` entry).
- `node_modules/` present (npm project); excluded from git.
- RAIDEN Instance installed at Edict v0.4.0.

## In Progress

- Ongoing curation of concepts and library items.

## Not Yet Done

- No blocking work identified.

## Known Constraints

- `_archive/` holds retired material; do not promote to live collections without operator review.
- `node_modules/` is present locally; it should remain gitignored.
