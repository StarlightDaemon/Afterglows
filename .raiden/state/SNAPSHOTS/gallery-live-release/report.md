# Gallery production release — 2026-09-09

## Scope and authorization

The operator requested: “Push everything to live if we are ready to”. D-014
authorizes committing and pushing all completed gallery work and documentation
to main, deploying through the existing allowlisted GitHub Pages workflow.

The release contains 1,000 active animations, 1,005 preserved records, five
retirements, 13 sections and 66 categories. It includes Wind Rose v3, Rotary
Pulse Dial, Spirit Board & Planchette, Trammel of Archimedes and Linear Chirp,
plus the completed expansion and visual revisions documented in prior reports.
Three campaign revision requests and six other campaign subjects stay deferred.
Earlier reports saying no deployment occurred describe their historical passes.

## Release readiness

- `npm test`: gallery structure, historical source/metadata preservation,
  module loading/retry, reduced-motion lifecycle, provenance and copy fallback pass.
- `npm run gallery:acceptance`: 341 source-bound expansion render reviews,
  consolidation and final-pair model/render evidence, and 1,000/1,005 totals pass.
- `npm run build` and `npm run site:check`: 1,118 allowlisted artifact files,
  10 public HTML files and four sitemap URLs pass.
- `npm run security:check` passes; `npm audit --audit-level=high` reports zero
  known vulnerabilities.
- Remote main fetched; no remote commits conflict with the three local checkpoints.
- Repository-only state, scripts and evidence remain outside the Pages artifact.
- Added Git attributes to preserve exact bytes for reviewed component sources
  and archived evidence. Eight existing sources use CRLF; storing those bytes
  preserves the existing review hashes on Linux without rewriting baselines.
  Ordinary text uses LF. An isolated export of the exact staged tree passed
  npm test, gallery:acceptance, build, site:check and security:check. Git diff
  whitespace validation passes with CRLF recognized as a line terminator.

## Deployment

Release commit: `6c0fe58a88b97f967b124365917d0e7592cd048e`,
`feat(concepts): complete curated thousand-animation gallery`. All three earlier
local checkpoints and the completed work were pushed normally to main.

[GitHub Pages run 34330183996](https://github.com/StarlightDaemon/Afterglows/actions/runs/34330183996)
completed successfully, including both build and deploy jobs.

Production verification passed:

- 53 public files match the tested staged artifact byte for byte, covering the
  full static gallery import/manifest graph, homepage/gallery HTML, final pair,
  consolidations, retained Wisp, five retired source modules, Wind Rose v3 and
  its preserved old-URL shim. Details: `live-verification.json`.
- Browser “Browse all” reports **Showing 1000 of 1000**, with 1,000 cards and no
  cards for the five retired tags. The matching manifest preserves 1,005 records.
- Trammel of Archimedes and Linear Chirp render on production. Wind Rose renders
  its v3 by default in Meteorology & Atmospheric Phenomena. Search works and no
  browser error logs were returned. Screenshots and DOM observations are indexed
  by `browser-verification.json`.
- `.raiden/state/CURRENT_STATE.md`, `scripts/retirement-review.html`,
  `package.json` and `__qa/retirement/` return HTTP 404 on production.

D-014 and LOOP-006 are complete. The subsequent documentation commit records this
verified release and its evidence; it changes no public artifact files. No version
tag was requested or created. Production testing is a deployment smoke test,
not a new visual review of every historical animation; prior evidence and deferred
revision limitations remain in force.

## Handoff

Production: https://afterglows.starlightdaemon.dev/concepts/.
Implementation evidence and limitations remain indexed in
`../gallery-final-thousand/closeout-report.md`. Publication does not add operator
visual ratings or resolve the deferred backlog. No additional work is scheduled.
