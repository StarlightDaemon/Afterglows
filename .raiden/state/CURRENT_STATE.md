# Current State

**Branch:** main
**Release:** **v2.0.0** (2026-11-10) — annotated tag on `ad75ba9`, published as
the GitHub Release "v2.0.0 — Unified 1,000-study gallery" (marked Latest).
**Deployment:** Live at https://afterglows.starlightdaemon.dev/ through the
allowlisted GitHub Actions Pages workflow; every push to `main` deploys.
Production was health-checked at 2026-11-10 closeout (see below).
**Engagement:** The 2.0 work is closed out. No loops are open; the deferred
campaign backlog below resumes only on a new operator instruction.

---

## Project

Afterglows is a workspace and live site for visual experiments, CSS/JS libraries, and design ideas from retired projects. Published as a standalone site with its own custom domain. Items here may be reused, moved, or retired as their value changes.

**Status:** Active — maintained collection; Stargate fully spun off.

---

## Collections

- **Matrix Code** (`matrix_code/`) — standalone CSS/JS library for digital rain, cyberpunk typography, and terminal aesthetics.
- **Retro** (`retro/`) — high-fidelity CRT monitor simulation toolkit (scanlines, phosphor persistence, screen curvature).
- **Concepts** (`concepts/`) — the single catalog of reusable animation concepts:
  **1,000 active / 1,005 preserved** studies (five retired) in 13 sections and
  66 categories; gallery modularized and versioned.

---

## Confirmed Current State

- **Gallery (D-015, live):** `/concepts/` opens on the latest 36 studies with
  only Search, Recent/Browse, Filters and result count exposed. Topic, order and
  provenance use a responsive filter sheet; shareable URL state is validated,
  legacy `section`/`category` deep links remain valid and large result sets
  render progressively.
- **Catalog (D-004):** the Concepts manifest and taxonomy are the authoritative
  inventory. The former Physics collection uses the same catalog and renderer;
  component tags are stable while source paths follow the unified taxonomy.
  The standalone `/physics/` gallery and the 660 flat module URLs from v1.10.0
  are retired and return the branded 404 — a deliberate, documented breaking
  change in v2.0.0. No local or public GitHub consumer of the old URLs was found
  at closeout, so no compatibility shims were added.
- **Publishing:** the build ships an explicit allowlist (`scripts/build-site.js`);
  repository-only paths return 404 in production. Workflow actions are pinned to
  commit SHAs and kept current by `.github/dependabot.yml`. HTTPS is enforced on
  the custom domain.
- **Dependencies (D-017):** the project has **no npm dependencies**; `npm ci`
  installs nothing and the deploy's `npm audit --audit-level=high` gate cannot
  be blocked by dev tooling. `npm start` builds and serves `dist/` through the
  dependency-free, loopback-only `scripts/serve-site.js`.
- **Checks:** `npm test` (11 suites, including preview-server behavior and a
  150 KB gzip budget per concept module with two hash-pinned exemptions),
  `npm run security:check`, `npm run build` and `npm run site:check` all run in
  CI before every deploy.
- Core theme fonts are vendored under `assets/fonts/` with their licenses; the
  deployed artifact has no Google Fonts runtime dependency.
- Location references are relative to the repository root; RAIDEN and Stargate
  locations live in `.raiden/local/README.md`. Stargate is its own standalone
  repo.
- Audit tooling under `.audits/tooling/` is documented in its README; its
  `puppeteer-core` install is local to that directory and gitignored.

## 2.0 closeout (2026-11-10)

- Workspace audit at `7acd6ca`: 0 Critical/High/Medium, 6 Low, 11 Info. All six
  Low findings are resolved: F-02–F-05 fixed, F-01 implemented and F-06 accepted
  with a size budget (D-017). The report and summaries are in gitignored,
  protocol-owned files (`audit-reports/`, `AUDIT_LOG.md`, `last-audit.md`).
- Production health at closeout: sitemap routes, `robots.txt`, `sitemap.xml`,
  social card and favicons return 200; unknown paths serve the branded 404;
  HTTP redirects to HTTPS; the Let's Encrypt certificate is valid to
  2027-01-15; Pages reports `built` with HTTPS enforced.
- GitHub at closeout: no open PRs, issues, Dependabot alerts or secret-scanning
  alerts; `main` is the only branch. Code scanning is not configured (optional
  for a dependency-free static site).

## History

- Gallery expansion, resumed expansion, consolidation and the final two
  additions (D-010–D-013) are complete; evidence and handoffs live under
  `SNAPSHOTS/` (closeout: `SNAPSHOTS/gallery-final-thousand/closeout-report.md`).
- First production release of the thousand-study gallery: `6c0fe58`, D-014
  (`SNAPSHOTS/gallery-live-release/report.md`).
- D-015 navigation and the dependency remediation shipped at `2d9db68` under
  D-016 after deploys had been blocked 2026-10-21 to 2026-11-10.
- Implementation and QA completion never stand in for operator visual ratings.

## Deferred follow-up

- The fresh Wind Rose candidate is integrated under D-011. Its original
  design review remains at `SNAPSHOTS/gallery-visual-standard/wind-rose-restart/`;
  the newer restoration report records integrated-gallery checks.

- The Afterglows Visual Standard Campaign has checkpointed all five approved
  Wave 01 candidates at `48cf4abb2dfe597909b403da057b68381a2ff595`.
  Wave 02 assessed 26 communication/navigation concepts. Historical operator review of the
  20 v2 candidates recorded 16 approvals, three open revision requests and one
  retired wind rose (since restored under D-011); six other subjects remain deferred. Four of the five deeper
  rebuilds are approved. See `SNAPSHOTS/gallery-visual-standard/wave-02-rebuild/report.md`,
  `wave-02.json`, `wave-02-report.md`, `wave-02-rebuild/operator-review.json`
  (exact feedback) and `wave-02-reassessment.md` in that directory.
  The operator requests roughly 20 revisions per review checkpoint and continuous
  correction between checkpoints; see `campaign-workflow.md` in that directory.
  Automatic continuation is stopped by D-010.

## Deferred, not marked resolved

- Preserve all 16 approvals and the historical wind-rose retirement record. Nocturnal dial,
  octant and heliograph remain open revision requests outside the completed
  five-study pass (LOOP-002). Wind Rose restoration is separately authorized and
  complete under D-011; no approval of unrelated revisions is inferred.
- If a visual-standard wave revisits LVDT or phased array, generate their
  waveform frames at runtime and drop their size-budget exemptions (D-017).

## Known Constraints

- `_archive/` holds retired material; do not promote to live collections without operator review.
- Concept sources in the preserved baselines are byte-hash protected; change
  them only through an operator-approved visual-standard wave.
- `commit-msg` hook forbids `Co-Authored-By` lines; mainline is `main`.
