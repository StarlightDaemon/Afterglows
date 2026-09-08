# Current State

**Branch:** main
**Deployment:** Existing pre-expansion release live at https://afterglows.starlightdaemon.dev/ via D-003's allowlisted GitHub Actions Pages artifact; the 945-concept expansion is not deployed

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

- Site deployed through the allowlisted GitHub Actions Pages workflow (CNAME configured); repository-only paths are excluded from the public artifact.
- Core theme fonts are vendored under `assets/fonts/`; the deployed artifact has no Google Fonts runtime dependency.
- Locked npm dependency graph reports zero known vulnerabilities after updating
  transitive `qs` to 6.16.0.
- The Concepts manifest and taxonomy are the authoritative catalog inventory.
  The former Physics collection uses the same catalog and renderer; component
  tags remain stable while source paths follow the unified taxonomy (D-004).
- Stargate removed from Afterglows; it now lives in its own standalone repo (`E:\Citadel\Stargate`).
- Dead Stargate UI hooks and dead media/sound code removed.
- `backups/` directory excluded from git (local `.gitignore` entry).
- `node_modules/` present (npm project); excluded from git.

- The operator-scoped gallery expansion is reviewed, validated, and locally
  committed. Implementation checkpoint:
  `5f50f196d314e472398c64c44ef636f83698c290`. It has not been pushed,
  released, or deployed. See
  `SNAPSHOTS/gallery-expansion/closeout-report.md` for verification and limitations.

## In Progress

- No gallery-expansion work is in progress. The Afterglows Visual Standard
  Campaign may begin from this clean local checkpoint but has not begun.

## Not Yet Done

- The Afterglows Visual Standard Campaign remains available as the next
  operator-directed body of work.

## Known Constraints

- `_archive/` holds retired material; do not promote to live collections without operator review.
- `node_modules/` is present locally; it should remain gitignored.
