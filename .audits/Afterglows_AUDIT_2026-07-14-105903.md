# Afterglows — Repository Audit — 2026-07-14 (10:59 local)

Auditor: fleet repo auditor (read-only), independent run. Scope: E:/Citadel/Afterglows only.
Note: `.audits/Afterglows_AUDIT_2026-07-14.md` (a prior same-day audit) already existed; per protocol it was left untouched and this report uses a timestamped filename. The prior report was treated as claims and re-verified from disk/git, not trusted.

## 0. Executive summary

Afterglows is a small first-party static website (GitHub Pages, custom domain `afterglows.starlightdaemon.dev`) collecting retro/CRT/matrix-rain CSS-JS demos and experimental UI concepts, governed by a RAIDEN Instance control plane in `.raiden/`. Maturity: active-maintenance portfolio/hobby site; single author; no tests, no CI.

- Commit audited: `d929842` ("chore: ignore local tooling dirs", 2026-07-09 14:53:10 -0600, branch `main`)
- Findings: Critical 0 · High 0 · Medium 2 · Low 5 · Info 2

| Check | Status | Notes |
|---|---|---|
| git integrity | verified | `git fsck` clean except one benign dangling tree; status/log/fsck run directly |
| secret scan | partial | bounded manual pass: worktree pattern grep + all-history added-filename filter (149 names, 0 sensitive); no history-aware scanner installed on this machine |
| dependency audit | verified | `npm audit --package-lock-only --json` against the on-disk lockfile (48 packages) |
| test execution | not-verified | no test suite exists (no test files, no test script) — nothing to run; CI fallback unavailable (gh not installed) |
| CI status | not-verified | no CI definitions exist in-repo; `gh` unavailable; GitHub Pages state lives outside the repo |

`git fetch --all --prune` FAILED at run start, verbatim: `Host key verification failed.` / `fatal: Could not read from remote repository.` All remote comparisons below use possibly-stale remote-tracking refs.

## 1. Identity

- Static website; the repo root is the deployable artifact (no build step). Entry point `index.html`; collections: `matrix_code/` (digital-rain CSS/JS library + 5 demos), `retro/` (CRT simulation toolkit: `crt_demo.html`, `crt_tools.css`), `concepts/` (data-driven gallery: `concepts/gallery/manifest.js` + `index.js`; manifest carries per-component version fields — 78 `version` occurrences). Shared `assets/{css,js,img}`; `_archive/` (retired material incl. `stargate-export/`); `_templates/`; `docs/` (DEMOS_OVERVIEW, DEPLOYMENT_NOTES, THEME_README).
- Ecosystem: Node/npm used solely for a dev server — `devDependencies: { "http-server": "^14.1.1" }`; scripts `dev`/`start` run `npx http-server . -p 3000 -c-1 --cors`. 103 tracked files; 62 tracked .html/.css/.js sources.
- Deployment: GitHub Pages, deploy-from-branch, repo root. `CNAME` = `afterglows.starlightdaemon.dev`; `.nojekyll` present (underscored dirs exposed); `robots.txt`/`sitemap.xml` reference the correct domain.
- Governance: RAIDEN Instance (`.raiden/{writ,local,state,instance}`), Edict v2.0.0 per `.raiden/instance/metadata.json` (`state_schema_version: 2`); executable `commit-msg` hook installed at `.git/hooks/commit-msg` (794 B, Jul 8).

## 2. Current state

- Version: package.json `1.0.0`. No CHANGELOG; concepts manifest is the only per-component version surface. No version-drift contradiction found.
- Branch `main` tracking `origin/main`; `git rev-list --left-right --count origin/main...main` → `0 0` (even) — against stale refs (fetch failed, F4).
- HEAD `d9298423a0ede8ce891d78cf90b4cbaa1d6dbecc`, 2026-07-09.
- Working tree NOT clean (volatile, measured 2026-07-14 ~10:55): 1 staged file (`.gitignore`), 6 modified unstaged files (all under `.raiden/`), 1 untracked dir (`.audits/`). No deletions, no stash.
- CI/CD: none defined in-repo; GitHub Pages branch-deploy is configured GitHub-side. Live site/pipeline status not verified (no sanctioned channel).
- Declared-state reconciliation: see Section D summary in §5/§11; two divergences (F1 context, F3).

## 3. Migration stability

**A1 — Residual Mac paths.**
- HEAD (committed content): exactly **11** `/Users/dante` hits, all confined to `.raiden/local/` and `.raiden/state/` — matches the preflight count of 11 exactly. Evidence (`git grep -n 'dante' HEAD`, trimmed):
  - `.raiden/local/README.md:5`, `.raiden/local/prompts/audit-protocol-install-handoff.md:1,40,42,43`, `.raiden/local/prompts/migration-remediation.md:60,61`, `.raiden/state/CURRENT_STATE.md:28`, `.raiden/state/OPEN_LOOPS.md:9`, `.raiden/state/WORK_LOG.md:16,32`
- Working tree: **0** Mac-path hits (ripgrep, standard exclusions; only self-referential text in the prior `.audits/` report). All 11 were rewritten to `E:\Citadel/...` by an **uncommitted** worktree pass (F1). Replacement strings use mixed separators (`E:\Citadel/Raiden/`) and two rewrites falsified historical log entries (F3).
- `/Volumes/`, `/opt/homebrew`, `/Applications/` in HEAD: 0 hits (`git grep -nE` run inside a git pathless context to avoid MSYS mangling — see §11).
- Classification: all 11 committed hits are **inert** (governance prose, prompt archives, historical logs). **Zero LIVE-config Mac paths.** Nothing breaks at runtime on this machine.

**A2 — Toolchain reconciliation.** No declared runtime requirements anywhere: no `engines` in package.json, no .nvmrc/.node-version/.python-version/global.json/Dockerfile/rust-toolchain/csproj (bounded find returned nothing). Installed Node v24.18.0 / npm 11.16.0 satisfy the only usage (dev server). No mismatches.

**A3 — Git integrity.**
- `git fsck --no-progress` → `dangling tree e51527cc3d822d937137c68c2530dd8031f6a12b` (benign), exit 0. Otherwise clean.
- `git status --porcelain=v1 --branch`: `## main...origin/main`; `M  .gitignore` (staged); ` M` on 6 `.raiden/` files; `?? .audits/`.
- Ignored entries (`--ignored=traditional`, counted): **5** — `.claude/`, `audit-reports/`, `backups/`, `node_modules/`, `package-lock.json`.
- Last commit: `d9298423a0ede8ce891d78cf90b4cbaa1d6dbecc 2026-07-09 14:53:10 -0600`.

**A4 — Copy artifacts.** Bounded `find` across the tree (excluding .git, node_modules): **zero** `._*` and **zero** `.DS_Store` files on disk — no AppleDouble pollution in this repo. `.gitignore` cross-check per the 13-repo cleanup list: `.DS_Store` is committed in HEAD; the `._*` entry exists **only in the index and worktree** — `git show HEAD:.gitignore` lacks it, `git show :.gitignore` has it. The cleanup half-landed: staged, never committed (F2).

**A5 — Working-tree deletions.** `git ls-files --deleted` → none. The rsync-exclusion hypothesis produces no fallout here: every excluded pattern that existed (node_modules, .serena) was already gitignored/untracked, so no tracked file was lost. `.serena`: absent on disk, gitignored in committed HEAD, never tracked (`git log --all -- .serena` empty).

**Preflight snapshot reconciliation** (each claim vs observation):
| Preflight claim | Observed | Verdict |
|---|---|---|
| branch main tracking origin/main, even | main, origin/main, 0/0 (stale refs) | confirmed (staleness caveat) |
| clean, no stash | DIRTY: 1 staged + 6 modified + 1 untracked; no stash | diverged — post-copy uncommitted remediation edits (F1/F2) |
| remote origin StarlightDaemon/Afterglows.git | `git@github.com:StarlightDaemon/Afterglows.git` | confirmed |
| 11 /Users/dante hits confined to .raiden/{state,local} | exactly 11 in HEAD, those dirs only; 0 in worktree | confirmed |
| node_modules (4.7M) + .serena existed on Mac, excluded from copy | node_modules present, mtime 2026-07-12 22:40 → reinstalled post-copy (F8); .serena absent, no fallout | consistent; reinstall noted |

## 4. Git state & history

All items in this section are VOLATILE (point-in-time, 2026-07-14).

- History: 55 commits total, all within the last 12 months (first `dace720` 2026-01-10 21:21 -0700; last `d929842` 2026-07-09). Single author: StarlightDaemon (55).
- Recent history is dominated by RAIDEN governance chores (Edict v0.2.0 → v2.0.0) plus site work (concepts gallery data-driven refactor, filter/search, a11y/security/SEO audit waves).
- Uncommitted: staged `.gitignore` (+2 lines: `# macOS`, `._*`); unstaged edits to 6 `.raiden/` files (11 insertions/11 deletions — the Mac-path rewrites). Unpushed: none (`git log --branches --not --remotes` empty). Unpulled: unverifiable (fetch failed, F4). Stashes: clean (none). Branch divergence: clean (0/0, stale refs).
- Untracked path classification:
  - `.audits/` — **Tool directory** (expected; holds the prior audit report and this one).
  - Ignored-but-present: `.claude/` (Tool directory; only `launch.json`), `audit-reports/` (3 local RAIDEN audit outputs — intentionally ignored per .gitignore comment), `backups/` (local snapshots incl. `afterglows-pre-flash-20260420-021605.tar.gz` — intentionally ignored, matches state docs), `node_modules/` + `package-lock.json` (ignored by policy).
  - Orphaned artifacts: none. Ambiguous: none.
- `git diff` emits CRLF conversion warnings on the 6 modified `.raiden/` files ("LF will be replaced by CRLF") — an expected Windows-side line-ending posture note, not a content change.

## 5. Open loops

- Declared: `.raiden/state/OPEN_LOOPS.md` says "No open loops at this time"; one closed loop (2026-06-07 WSL→macOS remediation). `CURRENT_STATE.md` "In Progress": ongoing curation only.
- Discovered vs declared: the uncommitted Mac-path/AppleDouble remediation pass (F1/F2) is real in-flight work not recorded in OPEN_LOOPS — a declared-state divergence.
- TODO/FIXME/HACK/XXX/BUG (standard exclusions, `.audits/` also excluded): **4 hits in 2 files**, all inside `.raiden/writ/` protocol documents where the tokens are pattern definitions/severity rules, not real open loops. Zero in site code.
- Skipped tests: no test suite; the `skip` matches (index.html:29, matrix_code/index.html:341, assets/css/styles.css:1320,1331) are a11y skip-links.
- No commented-out code blocks or half-wired features surfaced in bounded review (state docs record dead Stargate hooks as already removed).

## 6. Code quality & structure

- Architecture: flat static site, cleanly partitioned by collection; concepts gallery is data-driven (manifest + render loop, per commits `2009e49`/`1b31dc9`/`848d6ff`); shared assets centralized. Two audit-wave fix commits (`2ae5a64`, `a6202ff`) indicate an existing quality pass (CSS correctness, canvas lifecycle, reduced-motion, a11y, SEO).
- Debt hotspots: none significant for the size; `_archive/` is explicitly quarantined by decision D-002.
- Test coverage: **zero tests** against 62 tracked HTML/CSS/JS files. Test confidence: n/a/none — nothing to pass shallowly; for a visual static site this is a common posture but any regressions rely on manual review (F9).
- Docs: README matches reality (collections, live-site canon, Stargate spin-off). `docs/DEPLOYMENT_NOTES.md` is accurate to the Pages branch-deploy shape and contains no machine-specific paths, so nothing to update for E:/Citadel. CONTRIBUTING.md present.

## 7. Security & compliance

- Working-tree secrets: pattern scan (`api[_-]?key|secret|token|passwd|password|BEGIN ... PRIVATE KEY`, standard exclusions) → all hits are RAIDEN protocol prose about secret-handling rules and `.raiden/local/prompts/instance-session-startup.md` describing a scoped-token ceremony (token requested from operator at session start, never stored). **No credential values found. Nothing to redact.**
- History secrets (bounded manual pass — provenance: **partial**): all filenames ever added across all refs (`git log --all --diff-filter=A --name-only`, 149 unique names) filtered for `.env|.pem|key|secret|credential|.p12|id_rsa|keystore` → **zero hits**. No worktree candidates existed to drive `git log -S` value searches. No history-aware scanner installed on this machine; full-history content coverage is not claimed.
- Env files: none exist anywhere (bounded find: no `.env`, `.env.*`, `*.env`). `.gitignore` proactively excludes them. Site code reads no env/config at runtime (no `process.env`/`import.meta.env` hits) — config-completeness N/A, no `.env.example` needed.
- Licensing: LICENSE file is **MIT** (Copyright 2026 StarlightDaemon) but package.json declares `"license": "ISC"` — metadata mismatch (F7). No vendored third-party code found in `assets/js` (first-party scripts); not a fork.

## 8. Infrastructure-as-code

N/A — no Dockerfile, compose file, or deployment manifest present (verified by bounded find); deployment is GitHub Pages branch-deploy configured outside the repo.

## 10. Dependencies & tooling

- Node/npm (lockfile: `package-lock.json` → npm). `npm audit --package-lock-only --json`: **0 critical, 0 high, 2 moderate, 0 low** across 48 packages (1 prod, 48 total). Both moderates are in the dev-only `http-server` tree: `qs` (arrayLimit-bypass DoS + stringify DoS; vulnerable range 6.7.0–6.15.1) and `follow-redirects` (leaks auth headers to cross-domain redirect targets). Fixes available upstream. Exposure is limited to running the local dev server (F5).
- `npm outdated`: not-checked — it requires resolving against the registry per installed tree semantics and adds little here (single dev dep); recorded as not-run by choice, audit covered the risk surface.
- Lockfile health: lockfile exists on disk but is **gitignored by explicit committed policy** — the dev toolchain is not reproducible from the repo alone (F6). Lockfile + node_modules mtimes (2026-07-12 22:40) show a post-migration `npm install` was already performed on this machine (F8).
- No other ecosystems: no Python/C#/C++/userscript manifests (bounded find).

## 11. Oddities

- **Falsified history in uncommitted edits (F3):** the path-rewrite pass edited *historical* log entries: worktree `.raiden/state/OPEN_LOOPS.md:9` and `WORK_LOG.md:16` now claim the 2026-06-07 WSL→macOS remediation corrected `/mnt/e/` paths to `E:\Citadel/` — historically false (they were corrected to `/Users/dante/Citadel/`; the Windows path did not exist in June). Rewrites also produced mixed-separator paths (`E:\Citadel/Raiden/`).
- **Prior same-day audit:** `.audits/Afterglows_AUDIT_2026-07-14.md` exists (earlier session). Every load-bearing claim in it that this run re-tested independently (11 HEAD hits, 0 worktree hits, 149/0 history filenames, npm audit counts, fsck dangling tree, fetch failure) reproduced exactly; no divergences found between the two runs.
- **MSYS path-mangling hazard (methodology note for the fleet):** in Git Bash, patterns beginning with `/Users/...` passed as CLI args get POSIX-to-Windows path-converted, silently returning false negatives from `git grep`/`grep`. This run hit it once and re-verified with a non-slash-anchored pattern; prefer ripgrep (Grep tool) or patterns not starting with `/`.
- `git fetch` failure is an SSH host-key trust problem on this machine (`Host key verification failed`), not repo-specific — likely fleet-wide for SSH remotes (F4).
- fsck's single `dangling tree e51527c` is unreferenced garbage, benign.
- RAIDEN claims summary (for fleet three-way reconciliation): branch main; live at afterglows.starlightdaemon.dev via GitHub Pages; active maintenance; no open loops; last work 2026-07-09 (Edict v2.0.0 + state normalization); Edict 2.0.0 / state schema 2 in metadata.json; Stargate spun off (D-001); `_archive/` quarantine rule (D-002); node_modules present and gitignored; backups/ gitignored. All confirmed except "no open loops" (uncommitted remediation in flight) and the two rewritten historical entries.

## 12. Findings index

Root-cause grouping: F1 is the parent for the uncommitted post-migration remediation pass; F2 (its .gitignore half, staged) and F3 (its side-effect on historical records) are sub-items of the same evidenced pass (same session window, mtimes 2026-07-14 00:30–00:39).

| ID | Severity | Effort | Blast Radius | Location | Finding (one line) | Volatile? | Cross-ref |
|---|---|---|---|---|---|---|---|
| F1 | Medium | Bounded | Cross-cutting | .raiden/local/* + .raiden/state/* (6 files) | Mac-path remediation (all 11 `/Users/dante` → `E:\Citadel/`) exists only as uncommitted worktree edits; HEAD still carries all 11 inert hits; work unrecorded in OPEN_LOOPS | Yes | - |
| F2 | Low | Trivial | Cross-cutting | .gitignore | `._*` ignore entry staged but not committed (`.DS_Store` already in HEAD) — the 13-repo AppleDouble cleanup only half-landed here; zero `._*`/`.DS_Store` files actually on disk | Yes | - |
| F3 | Low | Trivial | Cross-cutting | .raiden/state/OPEN_LOOPS.md:9; .raiden/state/WORK_LOG.md:16 | Uncommitted rewrite pass falsified two historical 2026-06-07 log entries and produced mixed-separator paths (`E:\Citadel/Raiden/`) | Yes | - |
| F4 | Medium | Bounded | Cross-cutting | remote origin (git@github.com:StarlightDaemon/Afterglows.git) | `git fetch` fails: `Host key verification failed` — SSH to GitHub unusable on this machine; push/pull blocked, remote-tracking refs stale | Yes | - |
| F5 | Low | Bounded | Localized | package-lock.json (untracked) | npm audit: 2 moderate advisories (qs DoS x2; follow-redirects header leak) in the dev-only http-server tree; 0 high/critical; 1 prod dep total | No | - |
| F6 | Low | Trivial | Localized | .gitignore (`package-lock.json` entry) | Lockfile deliberately gitignored — dev toolchain not reproducible from the repo alone | No | - |
| F7 | Low | Trivial | Localized | package.json:16 vs LICENSE | package.json declares ISC while the LICENSE file is MIT | No | - |
| F8 | Info | Trivial | Localized | node_modules/, package-lock.json | node_modules + lockfile regenerated on this machine 2026-07-12 22:40 — post-copy `npm install` already performed despite rsync exclusion; matches CURRENT_STATE claim | Yes | - |
| F9 | Info | Bounded | Localized | repo-wide | No test suite and no in-repo CI; GitHub Pages branch-deploy; live pipeline/site status unverifiable (gh unavailable) | No | - |

Tally: Critical 0 · High 0 · Medium 2 · Low 5 · Info 2.

Untracked-file classification note: `.audits/` is a Tool directory (this report and the prior one live there).

### Key evidencing commands (re-run before finalizing)

```
git grep -n 'dante' HEAD            # 11 hits, .raiden/{local,state} only
git show HEAD:.gitignore | grep -c '_\*'   # 0 — ._* not in HEAD
git show :.gitignore | tail -2      # "# macOS" / "._*" — staged only
git status --porcelain=v1 --branch  # M .gitignore(staged); 6x ' M' .raiden; ?? .audits/
git fetch --all --prune             # Host key verification failed. / fatal: Could not read from remote repository.
npm audit --package-lock-only --json  # 2 moderate, 0 high/critical, 48 pkgs
git log --all --diff-filter=A --name-only --format= | sort -u | wc -l  # 149; sensitive-name filter: 0
```
