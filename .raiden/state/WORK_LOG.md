# Work Log

## 2026-09-07 — Unified Animation Concepts taxonomy

- Audited the 549-item Concepts archive and 111-item Physics archive as one 660-component corpus; confirmed unique tags, labels, and filenames and no component-level dependency blocker.
- Reclassified every component into one of 43 definitive categories under 9 top-level sections, including distinct mechanics, electromagnetism, fluids, waves/optics, acoustics, quantum/atomic, thermal/statistical, plasma, condensed-matter, and spectroscopy folders.
- Moved all canonical component implementations into matching section/category folders, retained existing `concept-*` and `physics-*` custom-element tags, and replaced tag-derived module URLs with explicit catalog paths.
- Unified the manifests and renderer at `/concepts/`, added section/category filtering and deep links, and retired the standalone Physics page, renderer, homepage card, sitemap entry, and long-form Concepts filename.
- Replaced the partial gallery validator with recursive validation covering taxonomy integrity, metadata, canonical paths, syntax, custom-element registration, and orphan detection for all 660 modules.
- Bounded the newest-additions landing view to 36 tiles and changed module loading to follow the rendered view instead of requesting all 660 implementations immediately.
- Verified gallery, security, allowlisted build, and built-site checks; browser acceptance confirmed the 660-item full view, the 177-item Physical Sciences section, the 18-item Electricity & Electromagnetism category, canonical Source links, clean console output, and no 390px horizontal overflow.

## 2026-09-07 — Homepage poster-card responsive refinement

- Compared the deployed and pending local homepages and traced the oversized-card/readability issue to fixed 2:3 posters paired with undersized card typography and verbose summaries.
- Preserved the exact 2:3 movie-poster silhouette across responsive one-, two-, and four-column layouts and made description, heading, link, and badge typography respond to each poster's own width.
- Reconciled the new responsive typesetting with the deployed card kit: restored the original 1.5rem card inset, 1rem content-band gap, description-owned flexible middle, header alignment, and tag wrapping directly above the divider while retaining the pending 44px link targets.
- Expanded all four current editorial summaries with progressive container-based tiers: narrow posters render compact copy, posters at least 380px wide reveal a second sentence, and exceptionally wide posters at least 480px wide reveal a third editorial beat.
- Verified the current cards at 390, 768, 1170, 1280, and 1920px viewports: every card held a measured 0.6667 width-to-height ratio, selected the correct copy tier, and reported no internal overflow. At the void-prone 1170px two-column layout, 25.5px description copy now fills 91–98% of its available region instead of 47–59%.
- Re-ran recursive gallery, security, dependency, allowlisted build, built-site, whitespace, and browser-console validation successfully.

## 2026-09-06 — GitHub Pages release-readiness pass

- Replaced repository-root Pages publishing with an allowlisted `dist/` artifact and least-privilege GitHub Actions deployment workflow (D-003).
- Added CSP validation, removed shared-script HTML injection sinks, and hardened the loopback-only local preview.
- Self-hosted all theme typography (IBM Plex Mono, VT323, Space Mono, Fira Code, and Matrix's JetBrains Mono compatibility face), bundled the upstream OFL notices, removed Google Fonts requests, and restricted public font loading to the site origin.
- Added built-site path and metadata validation, a custom 404 page, canonical `/concepts/` route, favicon declarations, and a 1200×630 social preview card.
- Verified gallery structure, dependency advisories, CSP invariants, build output, internal routes, metadata, and sitemap coverage locally; deployment remains an operator-controlled external action.
- Saved the implementation decisions, deferred GitHub-side actions, remaining live-site gaps, and verification evidence to `.audits/github-pages-release-readiness-2026-09-06.md` for independent agent review.
- Ran three read-only specialist reviews covering deployment/security, font/runtime behavior, and report consistency; corrected pending-vs-live deployment wording and stale collection counts, documented expected missing-glyph fallback, and hardened remote-font regression checks.

## 2026-07-09 — Edict v2.0.0 + state normalization

- RAIDEN Instance updated to Edict v2.0.0 (from v1.0.1): README.md, OPERATING_RULES.md, WORKSPACE_AUDIT_PROTOCOL.md, FORK_REVIEW_PROTOCOL.md, and AGENTS.md updated; ROUTING_POLICY.md added; MODEL_TIERS.md removed (managed_file_removal, expected — not replaced by the new package). `hooks/commit-msg` unchanged.
- `state_schema_version: 2` stamped in `.raiden/instance/metadata.json` (this operation is the install mechanism of record for that stamp).
- Local overlay: `.raiden/local/MODEL_MAP.md` (gitignored tier-to-model map) removed; `.raiden/local/ROUTING.md` (routing ladder, R1-R4 + offload pool) created in its place.
- State normalization applied per the Fact-Home Rule (`.raiden/writ/OPERATING_RULES.md`):
  - Relocated from `CURRENT_STATE.md` (unique history, not previously logged): RAIDEN Instance had been updated to Edict v1.0.0 on 2026-06-12 (commit 5e45d4d).
  - Removed from `CURRENT_STATE.md`: hand-written "Last updated" footer (git history is now the timestamp of record), and a restatement of the 2026-06-07 WSL→macOS migration remediation that duplicated the entry already recorded below.
  - Removed from `OPEN_LOOPS.md`: the "Edict v0.6.1" version restatement in the 2026-06-07 closed-loop entry (duplicate of the version already recorded in the 2026-06-07 entry below; installed Edict version lives in `metadata.json`, not state prose).
  - `GOALS.md` and `DECISIONS.md`: no version strings, "Last Updated"/"Last Verified" footers, or loop-status restatements found; no changes needed.

## 2026-06-07 — WSL→macOS migration remediation

- All `/mnt/e/` paths corrected to `E:\Citadel/` across AGENTS.md, two prompt files, and state files.
- `commit-msg` hook execute bit set (`chmod +x`); RAIDEN Co-Authored-By enforcement now active.
- `node_modules` deleted and reinstalled clean on ARM64 macOS; lockfile name verified.
- Edict v0.6.1 confirmed clean; migration audit closed.

## 2026-05-15 — RAIDEN state population

- State files populated from README and git history.
- Session-startup prompt seeded to `.raiden/local/prompts/` (D-0039 one-off seed).

## 2026-05-08 — RAIDEN Edict v0.2.0 → v0.4.0 install

- RAIDEN Instance installed and migrated to v0.4.0; WORKSPACE_AUDIT_PROTOCOL.md in Writ.

## Pre-RAIDEN notable events

- Stargate removed from Afterglows; spun off to `E:\Citadel\Stargate` standalone repo.
- Concepts gallery modularized and versioned; components restructured.
- Dead Stargate UI hooks and dead media/sound code removed.
- `backups/` directory added to `.gitignore`.
