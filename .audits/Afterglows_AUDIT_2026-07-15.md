# Afterglows — Repository Audit
**Date:** 2026-07-15 | **Commit audited:** `d929842` (`d9298423a0ede8ce891d78cf90b4cbaa1d6dbecc`) | **Branch:** main

---

## 0. Executive Summary

Afterglows is a small static website (retro/terminal CSS-JS demo archive) deployed to GitHub Pages, with an embedded RAIDEN Instance governance control-plane in `.raiden/`. Maturity: stable/maintained — no active feature work, low churn, no build pipeline required. Commit audited: `d929842`.

**Finding counts by severity:** Critical: 0 | High: 1 | Medium: 3 | Low: 1 | Info: 5 — 10 total.

**Provenance table (this repo):**

| Check | Status | Detail |
|---|---|---|
| Git integrity | Verified | `git fsck` clean apart from one dangling tree object (normal residue, not corruption) |
| Secret scan (working tree) | Verified | Full pattern grep across tree; all hits are protocol prose / no credential values |
| Secret scan (history) | Not-verified | No history-aware scanner installed (gitleaks/trufflehog absent); bounded manual pass found no candidate strings to trace with `git log -S` |
| Dependency audit | Verified (npm) | `npm audit --package-lock-only` ran clean; 2 moderate, 0 high/critical |
| Test execution | Not-verified | No test suite exists in the repo (no test script, no test framework, no test files) — nothing to run |
| CI status | Not-verified | No CI configuration exists (no `.github/workflows`, no other CI vendor file); `gh` unavailable regardless |

---

## 1. Identity

Afterglows is the canonical source for a live static site at `https://afterglows.starlightdaemon.dev/`, hosted via GitHub Pages ("deploy from branch," root of `main`, custom domain via `CNAME`, `.nojekyll` present). It hosts three demo collections plus a landing page:

- `index.html` + `assets/{css,js}` — landing page/hub (291 lines HTML, ~1540 lines CSS/JS combined)
- `matrix_code/` — standalone digital-rain / terminal-typography CSS+JS library with 4 demo pages
- `retro/` — CRT-monitor simulation toolkit (scanlines, phosphor persistence, curvature)
- `concepts/` — archived experimental UI-motion gallery, manifest-driven, modularized
- `_archive/` — retired material (includes a fully spun-off Stargate project's exported files, kept for reference per decision D-001)
- `_templates/` — scaffolding for new prototypes

**Ecosystem detected:** Node/TypeScript-adjacent tooling only — `package.json` present, but it declares no runtime code, only a single devDependency (`http-server@^14.1.1`) used to serve the static tree locally (`npm run dev` → `npx http-server . -p 3000 -c-1 --cors`). No `engines` field, no `.nvmrc`. No Python/.NET/C++ manifests found. No build step; the site ships hand-authored HTML/CSS/JS as-is. No Dockerfile/compose.

---

## 2. Current State

- **Version:** `package.json` v1.0.0 (unversioned static site; no CHANGELOG present to cross-check).
- **Branch:** `main`, tracking `origin/main`, `branch -vv` shows no ahead/behind divergence recorded locally.
- **Last commit:** `d929842` — "chore: ignore local tooling dirs" (2026-07-09 14:53:10 -0600), a 4-line `.gitignore` change (added `.claude/`, `.serena/`); trivial hygiene, not itself a functional change.
- **What works:** Static HTML/CSS/JS, verified by direct source read — no server code, no env/config reads (`process.env`/`os.environ`/etc. all absent), so there is nothing to functionally break by the OS migration itself.
- **CI/CD pipeline health:** None exists — no `.github/workflows`, no `.gitlab-ci.yml`/`azure-pipelines.yml`/AppVeyor config. Deployment is GitHub Pages "deploy from branch," which needs no Actions workflow. `ciStatus` therefore genuinely N/A for pipeline-health checks (deprecated-action/pinning review), separate from the `gh`-unavailable non-verification of Pages build status.

**Declared-state reconciliation (`.raiden/state/*` vs. observed reality):**
- `CURRENT_STATE.md` claims: GitHub Pages deployment (confirmed via `CNAME`+`.nojekyll`), Stargate fully spun off (confirmed — no live Stargate directory, only archived export), `node_modules/` and `backups/` gitignored (confirmed).
- `OPEN_LOOPS.md` claims **"No open loops... no blocking work identified."** This is contradicted by observed reality: an uncommitted, partially-inaccurate Mac-path remediation is sitting in the working tree right now (see §3/§12) — that in-progress, not-yet-landed work is itself an unrecorded open loop. This divergence is the same root cause reflected in F1/F2 below.
- `WORK_LOG.md`'s newest entry (2026-07-09, Edict v2.0.0) corresponds to commit `4e329c4`; the actual HEAD (`d929842`, same day) is one trivial gitignore commit later and has no corresponding log entry — a minor, low-stakes omission.
- `.raiden/instance/metadata.json` declares `installed_edict_version: "2.0.0"`, consistent with `WORK_LOG.md`'s latest entry — no version drift there.

---

## 3. Migration Stability

**a) Residual Mac paths (`/Users/dante`):** 11 hits, all confined to `.raiden/local/` and `.raiden/state/`, none in site code, verified via `git grep -n 'dante' HEAD`:

| File:line | Content class | Severity |
|---|---|---|
| `.raiden/local/README.md:5` | Live pointer: "Central framework repo (this machine): `/Users/dante/Citadel/Raiden/`" | High |
| `.raiden/local/prompts/audit-protocol-install-handoff.md:1,40,42,43` | Literal agent-executable instructions/commands referencing `/Users/dante/Citadel/{Afterglows,Raiden}` (e.g. `python3 -m raiden_updater.cli plan --instance /Users/dante/Citadel/Afterglows ...`) | High |
| `.raiden/local/prompts/migration-remediation.md:60-61` | Same class — operator/agent handoff instructions naming the old path as the place to run the next migration prompt from | High |
| `.raiden/state/CURRENT_STATE.md:28` | Narrative: "Stargate... now lives in its own standalone repo (`/Users/dante/Citadel/Stargate`)" | Low (inert prose) |
| `.raiden/state/OPEN_LOOPS.md:9`, `WORK_LOG.md:16,32` | Historical log entries describing a **2026-06-07** WSL→macOS remediation and a pre-RAIDEN Stargate spinoff — both true statements of what existed *at that historical time* (before this machine's E:\Citadel existed) | Low (inert, and historically accurate as written) |

Verified `E:\Citadel\Raiden` exists on this machine (sibling repo), confirming the High-classified paths are genuinely stale: an agent following `audit-protocol-install-handoff.md` or `migration-remediation.md` literally would `cd`/reference a nonexistent path on this Windows host, and `python3` itself is not on this machine's PATH (only `uv`) — a second, independent reason those literal commands would not execute as written.

**b) Toolchain reconciliation:** No `engines` field, `.nvmrc`, or other runtime pin declared in `package.json` — no mismatch to flag against installed Node v24.18.0.

**c) Git integrity/state:** `git fsck` — clean, one dangling tree object noted (`e51527cc3d822d937137c68c2530dd8031f6a12b`; normal non-corruption residue, not evidence of a problem). HEAD `d9298423a0ede8ce891d78cf90b4cbaa1d6dbecc`, 2026-07-09 14:53:10 -0600, branch `main` tracking `origin/main`. Working tree has 6 modified-but-uncommitted files plus 5 untracked/ignored top-level entries (detailed in §4).

**d) Copy-artifact residue:** None found inside this repo — `find . -iname '._*' -o -iname '.DS_Store'` (excluding `.git`) returned nothing, and `git status --porcelain` shows no `._*`/`.DS_Store` untracked entries. (Note: the *parent* `E:\Citadel\` workspace directory itself is heavily littered with `._*` AppleDouble files and a `.DS_Store` from the copy-migration — visible one level up from this repo root — but none of that residue has leaked into the Afterglows repository itself.)

The committed `.gitignore` (HEAD) already covers `.DS_Store` but has **no** `._*` rule; a staged-but-uncommitted change adds one (see F3, §12). Since no `._*` files exist in-repo today, this is a latent gap rather than an active leak.

**e) Other Mac-specific paths:** `grep -rnIE '/Users/|/Volumes/|~/Library'` (excluding `.audits/`) returned nothing beyond the 11 `/Users/dante` hits already catalogued above — no additional hits.

---

## 4. Git State & History
*(all findings in this section are Volatile — point-in-time)*

- **Working tree:** not clean. 6 tracked files modified but uncommitted: `.gitignore` (staged, adds `._*` rule), `.raiden/local/README.md`, `.raiden/local/prompts/audit-protocol-install-handoff.md`, `.raiden/local/prompts/migration-remediation.md`, `.raiden/state/CURRENT_STATE.md`, `.raiden/state/OPEN_LOOPS.md`, `.raiden/state/WORK_LOG.md` — all modified/unstaged (worktree) except `.gitignore`, which is staged (index) but not committed.
- **Stash:** empty (`git stash list` — none).
- **Unpushed:** none (`git log --branches --not --remotes` — empty; `branch -vv` shows no ahead/behind marker against `origin/main`).
- **Unpulled:** could not confirm against the true remote — `git fetch --all --prune` failed with "Host key verification failed" (SSH host key not trusted from this sandbox); recorded honestly rather than assumed clean.
- **First commit:** 2026-01-10 21:21:35 -0700. **Last commit:** 2026-07-09 14:53:10 -0600.
- **12-month commit volume:** 55 commits.
- **`git shortlog -sn`:** produced no output in this environment (unexpected for a repo with 20+ commits visible via `git log`; likely a mailmap/environment quirk rather than an empty history — `git log --oneline -20` independently confirms commits exist with author `StarlightDaemon`).
- **Untracked/ignored top-level entries**, classified:
  - `.audits/` — Tool directory (this audit's own output location; contains a prior same-day-fleet audit `Afterglows_AUDIT_2026-07-14-105903.md`).
  - `.claude/` — Tool directory (gitignored per `d929842`; contains `launch.json` dev-server launch config only).
  - `audit-reports/` — Tool directory / expected (gitignored per `.gitignore` line 41 by explicit repo policy; holds 3 prior internal audit docs dated 2026-06-15).
  - `backups/` — Tool directory by policy (gitignored, "local snapshots — not repo content"); contains one 1.6 MB pre-flash tarball (`afterglows-pre-flash-20260420-021605.tar.gz`) and a `stray-local-files/` subfolder — see F5, the subfolder's contents are Ambiguous rather than clearly expected.
  - `node_modules/` — Tool directory (npm-managed, gitignored, expected).
  - `package-lock.json` — **not** a simple "tool directory" case; it is a real dependency-manifest file that is gitignored and has never been committed (see F4). Classified as Orphaned/structural, not routine tooling.

---

## 5. Open Loops

Declared (`OPEN_LOOPS.md`): "No open loops at this time." Cross-referenced against discovery:

- **Not declared, but present:** the uncommitted Mac-path remediation across 6 files (§3a/§12) is itself unfinished, unrecorded work — a real open loop the state doc does not surface.
- `grep -rnIE 'TODO|FIXME|HACK|XXX|BUG'` (excluding `.git`, `node_modules`, `dist`, `build`, `.output`, `.wxt`, `bin`, `obj`): **8 raw hits**, all either (a) inside `.raiden/writ/` protocol documents defining what these tokens *mean* for audits (not real markers), or (b) a coincidental substring in a package-lock integrity hash (`...XXXevb5dJ...`), or (c) mentions of the previous audit reports discussing this exact null result. **Zero real TODO/FIXME/HACK/XXX/BUG markers in any site source file.**
- `grep -rnIE 'it\.skip|describe\.skip|test\.skip|xfail|@Ignore'`: zero hits (consistent with no test suite existing at all).
- No commented-out code blocks or half-wired features were observed in a sample of the core site files (`index.html`, `assets/js/*.js`, `assets/css/*.css`).

---

## 6. Code Quality & Structure

Architecture: flat, per-collection static directories (`matrix_code/`, `retro/`, `concepts/`), each self-contained (HTML + CSS + optional JS), plus a shared `assets/` for the landing page. No framework, no bundler, no transpilation — consistent with the declared "vanilla CSS/JS, self-contained" contribution policy in `CONTRIBUTING.md`.

Two prior in-repo audits (gitignored, not part of version control: `audit-reports/AFTERGLOWS_AUDIT_REPORT.md` dated 2026-06-15, and this fleet's own `.audits/Afterglows_AUDIT_2026-07-14-105903.md` dated 2026-07-14) previously flagged: zero `prefers-reduced-motion` support, uncancellable canvas `requestAnimationFrame` loops with no visibility handling, and a `.project-grid`/`.projects-grid` CSS selector-name mismatch. **Independently spot-checked in this pass:** `prefers-reduced-motion` is now present in 11 files including `assets/css/styles.css`; `matrix_code/demo_canvas.html` now has `visibilitychange`-gated `cancelAnimationFrame`/`requestAnimationFrame`; `index.html`'s `projects-grid` class matches the CSS selector consistently (5 occurrences in `styles.css`). These match `git log` commits `2ae5a64` ("fix: css correctness and canvas lifecycle — audit wave 1") and `a6202ff` ("fix: reduced-motion, security, a11y, seo — audit wave 2"). **No outstanding issues of that class found in this pass** (see F6).

**Test coverage state:** no test files exist anywhere in the repo (`*.test.*`, `*.spec.*`, `test/`/`tests/` paths all absent), and `package.json` has no `test` script or test-framework devDependency. Given the codebase is ~2,000+ lines of hand-written interactive JS/CSS (canvas animations, theme toggling, gallery filtering) with zero automated assertions, **confidence label: no-coverage / not applicable** — there is no assertion suite to rate for shallowness, only its total absence.

**Doc state:** `README.md`, `CONTRIBUTING.md`, and `docs/{DEMOS_OVERVIEW,DEPLOYMENT_NOTES,THEME_README}.md` are internally consistent with each other and with observed structure; none reference the old Mac path or any OS-specific path at all (verified by grep for `Users|Volumes|/mnt/|WSL|macOS|ARM64` in `docs/` — zero hits).

---

## 7. Security & Compliance

**Working-tree secrets:** pattern grep for API keys/secrets/tokens/passwords/private-key headers across the tree returned only: (a) prior audit-report prose *about* the scan itself, and (b) `.raiden/local/prompts/instance-session-startup.md` and `.raiden/writ/*` describing a scoped-GitHub-token *handling procedure* (request from operator, `gh auth login --with-token`, void after session) — procedural documentation, not a credential. **No actual secret values found; nothing to redact.**

**History-borne secrets:** not-verified — no history-aware scanner installed (gitleaks/trufflehog absent). Bounded manual pass: the working-tree scan above surfaced no plausible candidate string, so no `git log -S` trace was run. Recorded honestly as unscanned rather than claimed clean.

**Env files:** none exist anywhere in the repo (`find` for `.env`/`.env.*`/`*.env` — zero results). `.gitignore` proactively excludes `.env*` patterns regardless. No env/config reads found in source (`process.env`, `os.environ`, `IConfiguration`, `GM_getValue`, etc. all absent) — config-completeness cross-reference is N/A, no `.env.example` is needed or present.

**Licensing:** `LICENSE` present at repo root — MIT, copyright StarlightDaemon 2026. `CONTRIBUTING.md` reiterates MIT for contributions. No vendored third-party JS/CSS libraries were detected (grep for common library signatures/embedded copyright headers returned nothing) — no unattributed-vendor-code concern.

---

## 8. Infrastructure-as-Code

N/A — no Dockerfile, compose file, or other IaC artifact present in this repo.

---

## 10. Dependencies & Tooling

**Ecosystem:** Node, npm (confirmed by `package-lock.json` with `"lockfileVersion": 3` and an npm-shaped `node_modules/`; no `pnpm-lock.yaml`/`yarn.lock`/`bun.lockb` present).

- **Lockfile health:** present locally (48 resolved packages, all transitive under the single devDependency `http-server@^14.1.1`), but **not committed to git** — `.gitignore` line 6 explicitly excludes `package-lock.json`, and `git log --all -- package-lock.json` / `git ls-files --error-unmatch package-lock.json` both confirm it has never been tracked in this repo's history. Dependency resolution is therefore not pinned or reproducible across clones/CI.
- **`npm outdated`:** exit 0, no output — nothing flagged as outdated for the single devDependency at this resolution.
- **`npm audit --package-lock-only --json`:** metadata severity summary — `{info: 0, low: 0, moderate: 2, high: 0, critical: 0, total: 2}` (`follow-redirects` ≤1.15.11, GHSA-r4q5-vmmm-2653, header-leak-on-redirect; `qs` 6.7.0–6.15.1, two DoS advisories GHSA-w7fw-mjwx-w883/GHSA-q8mj-m7cp-5q26). Both are transitive dependencies of `http-server`, a local-dev-only tool never shipped as part of the deployed static site.
- No Python, .NET, or C++ manifests exist — those ecosystem checks are not applicable to this repo.

---

## 11. Oddities

- `backups/stray-local-files/` (gitignored, untracked) holds three oddly-named, seemingly unrelated files: `DNA` (0 bytes), `Sonar` (0 bytes), and `Radar` (4,117 bytes — plain text that reads as accidental redirected grep output referencing `concepts/header-animation-concepts.html` line matches, not a meaningful artifact). Provenance and purpose are unclear; classified Ambiguous.
- HEAD's most recent commit (`d929842`, a trivial `.gitignore` hygiene change) postdates `WORK_LOG.md`'s newest entry by one commit with no corresponding log line — a minor, low-stakes documentation gap.
- `git shortlog -sn` produced no output despite `git log` clearly showing commits from author `StarlightDaemon` — noted as an environment/mailmap quirk, not investigated further (low value, out of scope for a read-only pass).
- Two generations of self-audit reports already exist in this repo (`audit-reports/*` from 2026-06-15, `.audits/Afterglows_AUDIT_2026-07-14-105903.md` from 2026-07-14), both gitignored/untracked — this repo has a demonstrated, repeated pattern of self-auditing without committing the governance remediation those audits recommend (the current uncommitted Mac-path edit is the same pattern recurring).

---

## 12. Findings Index

| ID | Severity | Effort | Blast Radius | Location | Finding | Volatile? | Cross-ref |
|---|---|---|---|---|---|---|---|
| F1 | High | Trivial | Localized | `.raiden/local/README.md:5`; `.raiden/local/prompts/audit-protocol-install-handoff.md:1,40,42,43`; `.raiden/local/prompts/migration-remediation.md:60-61` | Committed (HEAD) governance/prompt files still point agent tooling at `/Users/dante/Citadel/Raiden/` and `/Users/dante/Citadel/Afterglows`, including literal executable commands (`python3 -m raiden_updater.cli ...`); path does not exist on this Windows host (real location verified as `E:\Citadel\Raiden`), and `python3` itself is not on this machine's PATH | No | |
| F2 | Medium | Trivial | Localized | `.gitignore` (staged); `.raiden/local/*` (3 files) + `.raiden/state/*` (3 files), all worktree-modified not committed | A Mac-path remediation for all 11 `/Users/dante` hits exists only as an uncommitted worktree edit; HEAD is unaffected (still carries all 11). The edit also rewrites *historical* log entries (`OPEN_LOOPS.md:9`, `WORK_LOG.md:16,32`) to anachronistically claim a 2026-06-07 event already corrected paths to `E:\Citadel/`, which was not true at that historical date, and introduces mixed path separators (e.g. `E:\Citadel/Stargate`). `OPEN_LOOPS.md` still declares "no open loops" while this exact unrecorded, partially-inaccurate work sits pending | Yes | |
| F3 | Medium | Trivial | Localized | `.gitignore` (staged, uncommitted) | A `._*` (macOS AppleDouble) ignore rule is staged but not committed; HEAD's committed `.gitignore` lacks it (though `.DS_Store` is already covered). No `._*` residue currently exists in-repo, so this is a latent gap, not an active leak | No | |
| F4 | Medium | Trivial | Localized | `package-lock.json`; `.gitignore:6` | Lockfile is explicitly gitignored and has never been committed (`git log --all` / `git ls-files` both confirm), so dependency resolution for the sole devDependency (`http-server`) is not pinned/reproducible across clones; `npm audit` currently shows 2 moderate transitive vulnerabilities (`follow-redirects`, `qs`) that could silently change on a fresh install elsewhere | No | |
| F5 | Low | Trivial | Localized | `backups/stray-local-files/{DNA,Sonar,Radar}` | Three oddly-named, unclear-purpose files (two empty, one containing what looks like accidental grep-output text) sit in a gitignored local directory; provenance ambiguous | No | |
| F6 | Info | — | Localized | `assets/css/styles.css`; `matrix_code/demo_canvas.html`; `index.html` | Prior internally-flagged code-quality issues (missing `prefers-reduced-motion`, uncancelled canvas rAF loops, `.projects-grid` selector mismatch) were independently spot-checked in this pass and confirmed already remediated (git log `2ae5a64`, `a6202ff`) | No | |
| F7 | Info | — | Localized | `package-lock.json` / `node_modules/http-server` | `npm audit`: 2 moderate, 0 high/critical, both transitive under a dev-only local-preview tool never shipped to the deployed static site | No | |
| F8 | Info | — | Cross-cutting | repo-wide | No test suite exists at all (no test script, framework, or test files) — test execution and coverage are not-verified/not-applicable rather than failing | No | |
| F9 | Info | — | Cross-cutting | repo root | No CI/CD configuration exists (no `.github/workflows` or other CI vendor file); GitHub Pages "deploy from branch" needs none, so this is a genuine N/A rather than a gap | No | |
| F10 | Info | — | Localized | `.git/` (dangling tree `e51527cc...`) | `git fsck` reports one dangling tree object; normal non-corruption residue, repo otherwise fsck-clean | Yes | |

