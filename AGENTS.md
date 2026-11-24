# Afterglows

Retro terminal archives and web demos: the Matrix Code and Retro libraries plus the Concepts gallery (1,000 active studies). It is a public GitHub repository (StarlightDaemon/Afterglows) and the source of the live site https://afterglows.starlightdaemon.dev/.

## Run and test

Node.js 24. The root site has **no npm dependencies**, so there is nothing to install.

- Test: `npm test` (13 suites, a few seconds)
- Security check: `npm run security:check` (HTML policies, preview server and the workflow rules in `scripts/workflow-policy.js`)
- Build: `npm run build` (writes the allowlisted Pages artifact to `dist/`, which Git ignores)
- Site check: `npm run site:check` (run it after a build)
- Preview: `npm start` (builds, then serves `dist/` on loopback only)
- Browser suite: `npm run test:browser`. It needs Chrome Stable and the audit tooling, installed once per clone or worktree with `npm ci --prefix .audits/tooling --include=dev --ignore-scripts --no-audit --no-fund`.

Before every deploy, CI (`.github/workflows/deploy-pages.yml`) runs `npm ci`, `npm audit --audit-level=high`, then the test, security, browser and site checks.

## Layout

- `matrix_code/`, `retro/`: the two libraries
- `concepts/`: the gallery and its catalog; authoring guide in `concepts/README.md`
- `scripts/`: build, preview, validation and test scripts
- `assets/`: shared assets and vendored fonts with their licenses
- `_archive/`: retired material; don't promote it to a live collection without the owner's review
- `_templates/`: the template for new prototypes (see `CONTRIBUTING.md`)
- `.audits/`: past audit reports and the browser tooling; repository-only, never published
- `.raiden/state/`: the project records (see below)

## Key rules

- Main branch is `main`. Agent work goes on `<agent>/<task>` branches in their own worktrees.
- **Every push to `main` deploys the live site** through GitHub Actions Pages. Pushing is a deployment. See Standing delegation v1 in AGENTS.md.
- No `Co-Authored-By` or other agent attribution lines in commits; the `commit-msg` hook enforces this. Never bypass it.
- Keep the root site dependency-free (D-017). Don't add npm packages to the root `package.json`.
- A new top-level folder reaches Pages only if it's added to `publicDirectories` in `scripts/build-site.js`, and its HTML files must be added to the scan in `scripts/validate-security.js`.
- Concept sources in the preserved baselines are byte-hash protected. Change them only in a visual-standard wave the owner has approved.
- Audit output (`audit-reports/`, `.raiden/state/AUDIT_LOG.md`, `.raiden/state/last-audit.md`) is gitignored. Older reports are kept outside the repo in the workspace `evidence\audit-reports` folder.
- Don't edit `.raiden/writ/` or `.raiden/instance/`. They're historical RAIDEN v2 text kept for the old tooling. Where they, `.raiden/README.md` or `.raiden/local/` disagree with this file, this file wins.

## Project records

This file and `.raiden/state/` are authoritative for this repo. Read in this order and stop when you have what you need:
1. `.raiden/state/CURRENT_STATE.md`: release, deployment, what's active now and known constraints.
2. The `## Active` section at the top of `.raiden/state/OPEN_LOOPS.md`: open, deferred and held items (statuses: `open`, `deferred`, `held: <who>`, `no-action`, `accepted`, `closed`).
3. Only when needed: `DECISIONS.md` (why things are the way they are; IDs `D-0xx`), `WORK_LOG.md` and `SNAPSHOTS/` (history and evidence).

Current picture: one open loop, the visual-standard campaign remainder (LOOP-009), restarted with the nocturnal dial; the other subjects stay deferred until the owner names the next one. Release and publication evidence is linked from `CURRENT_STATE.md` and the closed entries in `OPEN_LOOPS.md`.

Update `CURRENT_STATE.md` and `OPEN_LOOPS.md` when you finish or pause work. Keep one home per fact and link evidence; don't paste it in. Never renumber or reuse a loop or decision ID. Medium+ audit findings become loops.

## Working in parallel

One agent per worktree. Before starting, read the Claims section of `../../HANDOFF.md` (the workspace folder two levels above the repo or worktree root, outside Git, so every worktree sees the same file) and `git worktree list`, then add your claim line there; mark it done when you finish. Separate tasks may run in parallel only when both claims are listed there and they don't touch the same files. The owner (or the agent they assign) merges branches and updates `.raiden/state/`. Releases, deployments, the hook and Git config are one-at-a-time work.

A stale worktree record from another machine (`afterglows-milestone-2`) shows as prunable: leave it alone and never run `git worktree prune`.

This repository is public: don't commit personal names, absolute local paths or details of the owner's private tooling.

## Standing delegation v1 (operator: StarlightDaemon)
Applies to every agent working in this repo: Claude Code, Codex, Gemini CLI.

Do without asking, then report once at the end of the task:
- Read, build, test, lint. Wait for CI yourself; don't hand back "pending".
- Create agent branches (claude/*, codex/*, gemini/*); commit, rebase,
  fast-forward and merge them. Create agent worktrees.
- Push agent branches (never force). Open and update PRs; enable auto-fix.
- Merge a PR into the default branch when all checks pass, no review
  requests changes, and the merge doesn't publish (see Publication surface).
- Delete agent branches, local and remote, once their commits are in the
  default branch or another pushed branch.
- Keep records current: HANDOFF, OPEN-LOOPS, CHANGELOG and any doc that
  describes branch or PR state.

Ask once, in one message listing everything pending:
- Tags, releases, leaving a -dev version, or any merge that publishes.
- Force push, or rewriting history that's already pushed.
- Any other deletion: worktrees, backup refs, files or branches an agent
  didn't create, commits that exist nowhere else.
- Committing, moving or discarding StarlightDaemon's uncommitted work.
- CI workflows, branch protection, repo settings, secrets, agent permission
  settings, and this section.
- Anything against live hosts, services or devices.

Stop and report: failing checks you can't fix within the task, conflicts in
files StarlightDaemon is editing, or anything this section doesn't cover.

### Publication surface
Merging to `main` publishes: every push to `main` deploys the live site https://afterglows.starlightdaemon.dev/ through `.github/workflows/deploy-pages.yml`. Every merge to `main` is gated.
