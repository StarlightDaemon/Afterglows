# Work Log

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

- Stargate removed from Afterglows; spun off to `E:\Citadel/Stargate` standalone repo.
- Concepts gallery modularized and versioned; components restructured.
- Dead Stargate UI hooks and dead media/sound code removed.
- `backups/` directory added to `.gitignore`.
