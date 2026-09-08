# Open Loops

## Open

- **LOOP-002 — Visual Standard Campaign:** all five Wave 01 candidates are
  approved, including the revised grindstone at 5/5. The operator requests
  roughly 20 revisions per review checkpoint and faster continuation after
  clear corrections. See `campaign-workflow.md` alongside the wave ledger.
  Local checkpoint commits and automatic continuation are explicitly authorized.
  Checkpoint the accepted wave, then prepare the next review.
  Evidence and preview instructions:
  `SNAPSHOTS/gallery-visual-standard/wave-01-report.md`.

---

## Closed

- **2026-09-07 — LOOP-001, gallery expansion:** the operator ended additions
  at the completed scope and requested review/close-out. Implemented subjects
  are reviewed; unimplemented research is explicitly deferred in
  `SNAPSHOTS/gallery-expansion/delivery.json`. See `closeout-report.md` in that
  directory for evidence and verification limitations. The implementation is
  locally checkpointed at `5f50f196d314e472398c64c44ef636f83698c290`;
  no push, release, or deployment occurred.

- **2026-09-07 — Release-readiness deployment:** pushed the unified gallery and
  maintenance commits to `main`; the allowlisted GitHub Actions Pages workflow
  completed successfully. Production acceptance confirmed `/concepts/` deep
  links, branded 404 responses for retired and repository-only paths,
  self-hosted assets, and the absence of Google Fonts requests. The dependency
  audit was cleared by updating transitive `qs` to 6.16.0.
- **2026-06-07** — WSL→macOS migration remediation complete. All `/mnt/e/` paths corrected to `E:\Citadel/` across AGENTS.md, prompt files, and state files. `commit-msg` hook execute bit set. `node_modules` reinstalled clean on ARM64 macOS.
