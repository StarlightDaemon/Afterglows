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

Pending release commit, push, workflow completion and live verification.

## Handoff

Production: https://afterglows.starlightdaemon.dev/concepts/.
Implementation evidence and limitations remain indexed in
`../gallery-final-thousand/closeout-report.md`. Publication does not add operator
visual ratings or resolve the deferred backlog. No additional work is scheduled.
