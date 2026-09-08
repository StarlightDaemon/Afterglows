# Open Loops

## Open

- No open work from the operator-scoped gallery expansion.

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
