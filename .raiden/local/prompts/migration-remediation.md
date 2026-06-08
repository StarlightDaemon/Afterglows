# Migration Remediation Handoff — Afterglows — Edict v0.4.0 Pre-Migration

## Prompt ID

`raiden.shared.handoff.v1`

## Purpose

Afterglows' RAIDEN v0.2.0 install (2026-05-08) was never committed to git. Before the
RAIDEN central agent can run the Edict v0.4.0 migration (v0.3.0 skipped), the v0.2.0
install must be committed and the working tree must be clean.

## Template

```text
You are continuing a bounded work package inside the current repo.

Read first:
- AGENTS.md (on disk, untracked — check if present)
- .raiden/README.md
- .raiden/instance/metadata.json
- .gitignore (if present)

Current objective:
- Commit the existing RAIDEN v0.2.0 install so the RAIDEN central agent can
  proceed with the Edict v0.4.0 migration (v0.3.0 skipped).

Known constraints:
- Do NOT modify any file under .raiden/writ/ — these are RAIDEN-managed.
- Do NOT run the workspace audit.
- Do NOT run raiden_updater.cli apply.
- Commit attribution: no Co-Authored-By or agent attribution lines.

Already true (as of step-2 halt, 2026-05-13):
- RAIDEN v0.2.0 install exists on disk (agent-written 2026-05-08) but was never
  committed. Untracked: .raiden/, AGENTS.md, backups/.
- Current branch: main.
- .raiden/writ/ contains v0.2.0 managed content (OPERATING_RULES.md, OWNERSHIP_BOUNDARY.md,
  README.md). No WORKSPACE_AUDIT_PROTOCOL.md — that is the v0.3.0 add.

Still open:
1. Add canonical audit-output exclusions to .gitignore if not already present
   (create .gitignore if it does not exist):
     # RAIDEN audit outputs — operational findings, not framework content
     audit-reports/
     .raiden/state/AUDIT_LOG.md
     .raiden/state/last-audit.md
   This prevents audit-reports/ from appearing as untracked after commit.
2. Commit the v0.2.0 RAIDEN install. Stage only RAIDEN files:
   - AGENTS.md
   - .raiden/ (entire directory)
   - .gitignore (if created or modified in step 1)
   Do NOT stage: backups/ or any other non-RAIDEN untracked content.
   Suggested commit message:
   "chore: install RAIDEN Instance v0.2.0"
3. Verify clean tree: git status --porcelain should be empty (or only show
   backups/ if that is intentionally untracked).
4. Signal to the operator: Afterglows is ready for the RAIDEN central agent to
   run the v0.4.0 migration prompt from
   /Users/dante/Citadel/Raiden/toolkit/prompts/audit-protocol-migration-v0.4.0-prompt.md
   targeting --instance /Users/dante/Citadel/Afterglows. (v0.3.0 skipped; v0.4.0 applied directly.)

Do not:
- reopen settled naming or architecture
- treat review artifacts as canon unless adopted
- broaden the task beyond committing the v0.2.0 install
- run the workspace audit

Close out with:
- result: v0.2.0 RAIDEN install committed, working tree clean, operator notified
- evidence checked: git log shows RAIDEN commit, git status --porcelain empty
  (or shows only expected untracked non-RAIDEN files),
  .raiden/instance/metadata.json shows installed_edict_version 0.2.0
- remaining risks: confirm backups/ disposition with operator if needed
```
