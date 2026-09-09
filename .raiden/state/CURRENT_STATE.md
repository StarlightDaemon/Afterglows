# Current State

**Branch:** main
**Deployment:** D-014 authorizes publishing the completed 1,000-active gallery through the existing allowlisted GitHub Pages workflow; release checks passed, deployment verification in progress. See `SNAPSHOTS/gallery-live-release/report.md`.

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
  `5f50f196d314e472398c64c44ef636f83698c290`. Publication was deferred at that
  historical checkpoint and is now authorized under D-014. See
  `SNAPSHOTS/gallery-expansion/closeout-report.md` for verification and limitations.

- Historical resumed expansion completed locally with: **1,000 active studies / 1,001 preserved
  records**, 13 sections and 66 categories. All 56 additions are reviewed at four
  phases and in reduced-motion poses; all 945 revised baseline records and source
  hashes are unchanged. LOOP-003 is closed. See
  `SNAPSHOTS/gallery-expansion-resumed/operator-report.md` for acceptance evidence
  and limitations. That historical pass ended uncommitted and undeployed at
  `48cf4abb2dfe597909b403da057b68381a2ff595`; D-014 now covers publication.

## Current engagement — complete

The operator requested two random additions and full closeout (D-013). A recorded
uniform draw from three eligible concepts selected Trammel of Archimedes and
Linear Chirp. Both are implemented, reviewed and integrated. The target is met:
**1,000 active / 1,005 preserved**, five retired entries, 13 sections, 66 categories.

All 1,003 pre-pass records and source hashes remain exact, including Wind Rose v3,
the fresh rotary and spirit-board consolidations, retained Wisp and five retired
studies. LOOP-005 is closed. Current closeout, verification, evidence index and
handoff: `SNAPSHOTS/gallery-final-thousand/closeout-report.md`. Completion marker:
`SNAPSHOTS/gallery-final-thousand/completion.json`.

No further additions, review batch or automatic continuation is pending. The local
review remains available on port 3022 for the operator. Implementation and QA
completion do not fabricate operator visual ratings. Unrelated campaign requests
remain deferred below. D-014 separately authorizes publication of this work.

The release pass is committing and publishing the pre-existing campaign/expansion
work and subsequent restoration/consolidation/final additions together. LOOP-006
tracks deployment verification; the production report above records its outcome.

## Deferred follow-up

- The fresh Wind Rose candidate is integrated under D-011. Its original
  design review remains at `SNAPSHOTS/gallery-visual-standard/wind-rose-restart/`;
  the newer restoration report records integrated-gallery checks.

- The Afterglows Visual Standard Campaign has checkpointed all five approved
  Wave 01 candidates at `48cf4abb2dfe597909b403da057b68381a2ff595`.
  Wave 02 assessed 26 communication/navigation concepts. Historical operator review of the
  20 v2 candidates recorded 16 approvals, three open revision requests and one
  retired wind rose (since restored under D-011); six other subjects remain deferred. Four of the five deeper
  rebuilds are approved. The operator retired wind rose from the active gallery
  for possible later reconsideration, preserving its source and versions. See
  `SNAPSHOTS/gallery-visual-standard/wave-02-rebuild/report.md`.
  See `SNAPSHOTS/gallery-visual-standard/wave-02.json` and `wave-02-report.md`
  for source-bound evidence, checks and limitations. Exact feedback is in
  `wave-02-rebuild/operator-review.json`; the refinement rationale is in
  `wave-02-reassessment.md` in that directory. Wave 02 is included in D-014.
  The operator requests roughly 20 revisions per review checkpoint and continuous
  correction between checkpoints; see `campaign-workflow.md` in that directory.
  Local checkpoint authorization for accepted batches is retained as historical
  campaign context; automatic continuation is stopped by D-010. Its retirement checkpoint
  had 944 active / 945 preserved studies; current expanded totals are recorded
  above. Current deployment status is recorded at the top of this document.

## Deferred, not marked resolved

- Preserve all 16 approvals and the historical wind-rose retirement record. Nocturnal dial,
  octant and heliograph remain open revision requests outside the completed
  five-study pass (LOOP-002). Wind Rose restoration is separately authorized and
  complete under D-011; no approval of unrelated revisions is inferred.

## Known Constraints

- `_archive/` holds retired material; do not promote to live collections without operator review.
- `node_modules/` is present locally; it should remain gitignored.
