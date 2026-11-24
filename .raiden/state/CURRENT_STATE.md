# Current State

Current facts only. Dated history is in `WORK_LOG.md`; decisions in `DECISIONS.md`; open, deferred and held items in `OPEN_LOOPS.md`.

## Release and deployment

- **Release:** v2.0.0 (2026-11-10), annotated tag on `ad75ba9`, published as the GitHub Release "v2.0.0 — Unified 1,000-study gallery" (marked Latest).
- **Live site:** https://afterglows.starlightdaemon.dev/, deployed by the allowlisted GitHub Actions Pages workflow. **Every push to `main` deploys.** HTTPS is enforced on the custom domain.
- **Latest deploy:** `37d8d6a` (2026-11-23, documentation only); the Pages workflow succeeded.
- **Evidence:** release and closeout reports in `SNAPSHOTS/gallery-live-release/report.md` and `SNAPSHOTS/gallery-final-thousand/closeout-report.md`, the GitHub Release, and the dated entries in `WORK_LOG.md` (the 2.0 closeout audit, production health and GitHub checks are in its 2026-11-10 and 2026-11-23 entries).
- **Engagement:** the 2.0 work is closed out. LOOP-009 (visual-standard remainder) restarted 2026-11-24 with the nocturnal dial: a rewritten v2 is on branch `claude/nocturnal-dial`, not merged, awaiting the owner's rating (D-018). Octant, heliograph and six others stay deferred.

## Collections

- **Matrix Code** (`matrix_code/`): CSS/JS library for digital rain, cyberpunk typography and terminal aesthetics.
- **Retro** (`retro/`): CRT monitor simulation toolkit (scanlines, phosphor persistence, screen curvature).
- **Concepts** (`concepts/`): the single catalog of animation studies, **1,000 active / 1,005 preserved** (five retired) in 13 sections and 66 categories. The manifest and taxonomy are the authoritative inventory (D-004).

## How it works now

- **Gallery (D-015):** `/concepts/` opens on the latest 36 studies with Search, Recent/Browse, Filters and a result count. Topic, order and provenance live in a filter sheet; URL state is shareable and validated, and legacy `section`/`category` links still work. Results load 60 cards at a time; previews mount only in the viewport.
- **Retired URLs:** the standalone `/physics/` gallery and the 660 flat module URLs from v1.10.0 return the branded 404 (a deliberate breaking change in v2.0.0; no consumers were found).
- **Publishing:** the build ships an explicit allowlist (`scripts/build-site.js`); repository-only paths return 404 in production. Workflow actions are pinned to commit SHAs and kept current by Dependabot.
- **Dependencies (D-017):** the root site has no npm dependencies. `npm start` builds and serves `dist/` through the loopback-only `scripts/serve-site.js`. Core fonts are vendored under `assets/fonts/` with their licences.
- **Checks:** `npm test` (11 suites, including a 150 KB gzip budget per concept module with two hash-pinned exemptions), `npm run security:check`, `npm run test:browser` and `npm run site:check`, all run in CI before every deploy.

## Constraints

- Concept sources in the preserved baselines are byte-hash protected; change them only in an owner-approved visual-standard wave, and record the change in `SNAPSHOTS/gallery-visual-standard/loop-009/revisions.json` (D-018).
- `_archive/` holds retired material; don't promote it to a live collection without the owner's review.
- If a visual-standard wave revisits LVDT or phased array, generate their waveform frames at runtime and drop their size-budget exemptions (D-017).
- Implementation and QA never stand in for the owner's visual ratings.
- The `commit-msg` hook rejects `Co-Authored-By` lines; mainline is `main`.
