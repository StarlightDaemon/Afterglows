# Afterglows — Repository Audit
**Date:** 2026-07-22 | **Commit audited:** `ce101c0` (`ce101c053a54417d62e7ca63f1dd76b9f65fc05b`) | **Branch:** main

---

## 0. Executive Summary

Afterglows is a small static website (retro/terminal CSS-JS demo archive) deployed to GitHub Pages, with an embedded RAIDEN Instance governance control-plane in `.raiden/`. The zero-build, no-framework, no-bundler layout described in the operator's known-layout note is **confirmed unchanged**: `matrix_code/`, `retro/`, `concepts/` (with a `gallery/` subfolder), `docs/`, and root `index.html` all present exactly as described. One new top-level tool directory has appeared since the last audit: `.serena/` (Serena MCP project config/cache, gitignored). Maturity: stable/maintained — no active feature work on site content since 2026-07-01; only governance (`.raiden/`) and hygiene commits since.

**Finding counts by severity:** Critical: 0 | High: 0 | Medium: 4 | Low: 2 | Info: 6 — 12 total.

**Provenance table:**

| Check | Status | Detail |
|---|---|---|
| Prior-audit reconciliation | Verified | Two prior reports found in `.audits/` (2026-07-14, 2026-07-15) plus three legacy reports in in-repo `audit-reports/`; most recent (2026-07-15, 10 findings F1–F10) used as declared baseline and reconciled item-by-item below |
| Git integrity | Verified | `git fsck` clean apart from one dangling tree object (`e51527cc...`), same object as last pass — normal residue, not corruption |
| Secret scan (working tree) | Verified | Full pattern grep across tree; all hits are protocol prose / token-handling procedure docs, no credential values |
| Secret scan (history) | Not-verified | No history-aware scanner installed (gitleaks/trufflehog absent); bounded manual pass found no candidate strings to trace with `git log -S` |
| Dependency audit | Verified (npm) | `npm audit --package-lock-only` ran clean; 2 moderate, 0 high/critical (same two advisories as last pass — `follow-redirects`, `qs`) |
| Test execution | Not-verified — N/A | No test suite exists in the repo (no test script, no test framework, no test files) — nothing to run |
| CI status | Verified (upgrade from prior pass) | No `.github/workflows` exists (confirmed absent), but `gh` is now authenticated and `gh run list` confirms GitHub's automatic "pages build and deployment" check has run and succeeded 5 times through 2026-07-16, most recently after HEAD — live deployment path confirmed working |
| `git fetch --all --prune` | Verified | Succeeded this pass (prior pass failed with SSH host-key error); `origin/main` matches local HEAD, no divergence |

---

## 1. Identity

Afterglows is the canonical source for a live static site at `https://afterglows.starlightdaemon.dev/`, hosted via GitHub Pages ("deploy from branch," root of `main`, custom domain via `CNAME`, `.nojekyll` present). Consumption model: browse the live site, or copy/link individual CSS/JS files directly from the repo (`matrix_tools.css`, `crt_tools.css`, gallery concept modules) into other projects — confirmed by each toolkit's README instructing "link the stylesheet" / "copy `crt_tools.css` to your project."

Confirmed collections (unchanged from prior audit):
- `index.html` + `assets/{css,js,img}` — landing page/hub
- `matrix_code/` — standalone digital-rain / terminal-typography CSS+JS library, 4 demo pages + a JS-driven demo hub (`index.html`)
- `retro/` — CRT-monitor simulation toolkit (scanlines, phosphor persistence, curvature)
- `concepts/` — archived experimental UI-motion gallery; `header-animation-concepts.html` entry point driven by a modular `gallery/` engine (manifest + 38 concept modules)
- `_archive/` — retired material (includes the spun-off Stargate project's exported files)
- `_templates/` — scaffolding for new prototypes

**Ecosystem confirmed:** package.json declares no runtime code, only devDependency `http-server@^14.1.1` for local serving (`npm run dev` → `npx http-server . -p 3000 -c-1 --cors`). No `engines` field, no build step, no Dockerfile. This matches the operator's known-layout note exactly — no framework or bundler has been introduced.

---

## 2. Current State

- **Version:** `package.json` v1.0.0 (unversioned static site; no CHANGELOG).
- **Branch:** `main`, tracking `origin/main`, confirmed even with local remote-ref, no ahead/behind.
- **Last commit:** `ce101c0` — "chore(raiden): de-path bridge - migrate local paths to Windows Citadel root (E:\Citadel)" (2026-07-15), touching only `.raiden/local/` and `.raiden/state/` files.
- **What works:** Static HTML/CSS/JS confirmed by direct source read; `matrix_code/index.html` verified as a working JS-driven demo hub whose four `data-src` iframe targets (`demo_classic.html`, `demo_canvas.html`, `demo_binary.html`, `demo_themes.html`) all exist on disk — no dead references found. GitHub Pages deployment independently confirmed live via `gh run list` (see provenance table).

**Declared-state reconciliation (`.raiden/state/*` vs. observed reality):**
- `CURRENT_STATE.md` claims GitHub Pages deployment (confirmed), Stargate fully spun off (confirmed — no live Stargate directory), `node_modules/`/`backups/` gitignored (confirmed).
- `OPEN_LOOPS.md` still declares "No open loops at this time... no blocking work identified." Unlike the 2026-07-15 pass (which caught an active contradiction — uncommitted remediation work sitting unrecorded), this claim is **now accurate**: the working tree is fully clean and that remediation has since landed as `ce101c0`.
- No governance doc anywhere mentions the `.serena/` directory's addition, or documents the `concepts/gallery/` engine's existence — these are gaps in toolkit-level docs, not in `.raiden/` state docs (see §5, §7).

---

## 3. Git State & History
*(all findings in this section are Volatile — point-in-time)*

- **Working tree:** clean. `git status --porcelain=v1 --ignored=traditional` shows zero modified/staged files; only `.audits/` untracked (this audit's own output dir) and the expected gitignored entries (`.claude/`, `.serena/`, `audit-reports/`, `backups/`, `node_modules/`, `package-lock.json`).
- **Stash:** empty.
- **Unpushed:** none (`git log --branches --not --remotes` empty; `branch -vv` shows `[origin/main]` with no ahead/behind marker).
- **Unpulled:** confirmed none — `git fetch --all --prune` succeeded this pass (unlike the prior pass, which failed on SSH host-key verification); local HEAD matches `origin/main`.
- **First commit:** 2026-01-10 21:21:35 -0700. **Last commit:** 2026-07-15 12:18:03 -0600.
- **12-month commit volume:** 57 commits (up from 55 at last audit — 2 new commits, both `.raiden`/`.gitignore` hygiene, no site-content changes).
- **`git shortlog -sn`:** produced no output again in this environment — same quirk noted in the prior audit (`git log --oneline` independently confirms commits from author `StarlightDaemon`); not investigated further, low value.
- **Untracked/ignored top-level entries**, classified:
  - `.audits/` — Tool directory (this audit's output location; now holds two prior reports plus this one).
  - `.claude/` — Tool directory (gitignored; `launch.json` dev-server config only).
  - `.serena/` — **New since last audit.** Tool directory (Serena MCP project config/cache: `project.yml`, `project.local.yml`, own `.gitignore`); gitignored via `.gitignore:50`. Expected/benign.
  - `audit-reports/` — Tool directory (gitignored per policy; holds 3 prior internal audit docs dated 2026-06-15, unchanged).
  - `backups/` — Tool directory by policy (gitignored); contains one 1.6 MB pre-flash tarball and `stray-local-files/` (see F5, unchanged).
  - `node_modules/` — Tool directory (npm-managed, gitignored, expected).
  - `package-lock.json` — Orphaned/structural, not routine tooling (see F4, unchanged, still gitignored and never committed).

---

## 4. Prior-Audit Reconciliation

Baseline: `.audits/Afterglows_AUDIT_2026-07-15.md` (10 findings, F1–F10).

| Prior ID | Prior Finding | Status Now | Evidence |
|---|---|---|---|
| F1 (High) | Committed governance/prompt files pointed agent tooling at nonexistent `/Users/dante/...` paths | **Resolved** | `grep -rnI '/Users/dante'` across the tree returns zero hits; commit `ce101c0` rewrote all 6 affected files to `E:\Citadel` paths |
| F2 (Medium) | Mac-path remediation existed only as an uncommitted worktree edit, contradicting `OPEN_LOOPS.md`'s "no open loops" claim | **Resolved** | The edit is now committed as `ce101c0`; working tree is clean; `OPEN_LOOPS.md`'s claim is no longer contradicted |
| F3 (Medium) | `._*` ignore rule was staged but not committed | **Resolved** | `.gitignore:53` now carries `._*` in HEAD, landed via commit `3e4da96` ("chore: ignore AppleDouble and .DS_Store files") |
| F4 (Medium) | `package-lock.json` gitignored, never committed — dependency resolution not pinned/reproducible | **Still open** | `.gitignore:6` still excludes it; `git ls-files --error-unmatch package-lock.json` still fails; same 2 moderate transitive advisories reproduce on fresh install |
| F5 (Low) | `backups/stray-local-files/{DNA,Sonar,Radar}` — ambiguous, unexplained provenance | **Still open** | Same three files, identical sizes (0, 0, 4117 bytes), unchanged since last pass |
| F6 (Info) | Prior code-quality fixes (reduced-motion, canvas lifecycle, selector-name match) confirmed remediated | **Still holds — no regression** | No commits touched `assets/`, `index.html`, or `matrix_code/` since the fixes landed; spot-check of `.gitignore`/structure shows no reversion |
| F7 (Info) | `npm audit`: 2 moderate (follow-redirects, qs), dev-only transitive deps | **Still open, unchanged** | Identical two advisories reproduce this pass |
| F8 (Info) | No test suite exists | **Still open — N/A**, unchanged | No test script, framework, or test files found |
| F9 (Info) | No CI/CD configuration exists | **Still open, unchanged — but verification upgraded** | No `.github/workflows` file exists (confirmed again), but this pass additionally confirmed via `gh run list` that GitHub's automatic Pages-deployment check is running and succeeding — a stronger positive signal than the prior pass could produce (which had no `gh` access) |
| F10 (Info, Volatile) | Dangling tree object `e51527cc...` in `git fsck` | **Still present, unchanged** | Same object hash reproduces; non-corruption residue |

---

## 5. Open Loops

Declared (`OPEN_LOOPS.md`): "No open loops at this time." Cross-referenced against discovery — **no contradiction found this pass** (contrast with the 2026-07-15 pass, which caught one).

- `grep -rnIE 'TODO|FIXME|HACK|XXX|BUG'` (excluding `.git`, `node_modules`, `.audits`, `audit-reports`): hits are confined to `.raiden/writ/` protocol documents defining what these tokens *mean* for audits, and one coincidental substring inside a package-lock integrity hash (`...XXXevb5dJ...`). **Zero real TODO/FIXME/HACK/XXX/BUG markers in any site source file.**
- `grep` for skip/xfail patterns: all hits are either protocol-document prose, a `.skip-link` CSS accessibility class (unrelated to test-skipping), or a JS comment describing category-filtering logic (`concepts/gallery/index.js:130`) — no actual skipped tests (none exist to skip).
- Undeclared documentation gaps exist (see §7) but these are completion-state facts, not "blocking work" in the sense `OPEN_LOOPS.md` speaks to.

---

## 6. Security & Compliance

**Working-tree secrets:** pattern grep for API keys/secrets/tokens/passwords/private-key headers returned only procedural documentation: `.raiden/local/prompts/instance-session-startup.md` (scoped-GitHub-token request/void procedure) and `.raiden/writ/*` (protocol documents describing what a secret-scan finding *is*). **No actual secret values found; nothing to redact.**

**History-borne secrets:** not-verified — no history-aware scanner installed (gitleaks/trufflehog absent from this environment). Bounded manual pass: the working-tree scan surfaced no plausible candidate string, so no `git log -S` trace was run. Recorded honestly as unscanned rather than claimed clean.

**Env files:** none exist anywhere in the repo. `.gitignore` proactively excludes `.env*` patterns regardless.

**Licensing:** `LICENSE` at repo root is **MIT** (copyright StarlightDaemon, 2026), and `CONTRIBUTING.md` reiterates MIT for contributions. However, **`package.json`'s `"license"` field declares `"ISC"`** — a direct mismatch against the repo's actual license file (see F11, new this pass). No vendored third-party JS/CSS libraries were detected (grep for common library signatures/embedded copyright headers returned nothing) — no unattributed-vendor-code concern.

---

## 7. Project Inventory & Completion State

| Sub-project | Files / Size | Last touched | Demo entry point (structural read) | Classification |
|---|---|---|---|---|
| **Landing hub** (`index.html` + `assets/`) | 1 HTML (16.6 KB) + `assets/{css,js,img}` (6 files) | `a6202ff` (2026-06-15) | Root `index.html` links to all four collections plus `_archive`; all `href` targets (`retro/crt_demo.html`, `retro/README.md`, `matrix_code/index.html`, `matrix_code/README.md`, `concepts/header-animation-concepts.html`, `concepts/README.md`, `_archive/index.beta.html`) verified to exist on disk — no dead links | **Finished and documented** |
| **`matrix_code/`** | 7 files (~40 KB): `matrix_tools.css`, `README.md`, `index.html` (hub), 4 demo HTML pages | `a6202ff` (2026-06-15) | `index.html` is a JS-driven demo hub with an `<iframe>` preview pane and four `data-src` demo cards (`demo_classic.html`, `demo_canvas.html`, `demo_binary.html`, `demo_themes.html`) — all four targets verified present on disk, no dead references. Working demo confirmed structurally | **Functional but undocumented** — `README.md` documents only `matrix_tools.css`'s CSS classes; it never mentions `index.html`'s existence as a demo hub, nor any of the 4 demo HTML files (see F12) |
| **`retro/`** | 3 files (~10.4 KB): `crt_tools.css`, `crt_demo.html`, `README.md` | `a6202ff` (2026-06-15) | `README.md` explicitly names both `crt_tools.css` and `crt_demo.html` and matches the two files actually present | **Finished and documented** |
| **`concepts/`** (incl. `gallery/`) | 43 files total: `README.md`, `header-animation-concepts.html` (10.7 KB), `gallery/manifest.js` (10.3 KB, data for 38 concepts across 6 categories), `gallery/index.js` (18.3 KB, render/filter/search engine), 38 individual `gallery/concepts/*-concept.js` modules | `848d6ff` (2026-07-01, most recent feature commit: "add per-tile copy-usage and view-source") | `header-animation-concepts.html` loads `<script type="module" src="./gallery/index.js">` and renders into `#gallery-root` — confirmed the modular `gallery/` engine is genuinely wired in as the live implementation, not a parallel/orphaned system | **Functional but undocumented** — `concepts/README.md` was written for an earlier, simpler version of this demo: it describes the file as a single static archive ("copy the CSS/HTML... to reuse any specific effect") with no mention of the `gallery/` engine, its manifest-driven architecture, or the filter/search/copy-usage/view-source features added across 3 commits in 2026-07 (`2009e49`, `1b31dc9`, `848d6ff`). `docs/DEMOS_OVERVIEW.md` has the same gap (describes it as "a gallery of 30+ header animation concepts... explored before the final Stargate selection" — accurate as far as it goes, but silent on the interactive engine). Grouped under one root cause: **documentation not updated alongside the 2026-07 gallery-modularization feature work** (see F12) |
| **`_archive/`** | 4 files: `index.beta.html`, `main-site.html`, `stargate-export/{stargate_logic.js, stargate_styles.css}` | `a6202ff` (2026-06-15) | Referenced from root `index.html` (`_archive/index.beta.html`), target exists. No dedicated README, but `.raiden/state/CURRENT_STATE.md` explicitly documents this directory's retired-material purpose and the "no promote without operator review" constraint | **Orphaned experiment (declared, not undocumented)** — intentionally retired material with a clear governance note explaining its status; distinct from an undocumented orphan |
| **`_templates/`** | 4 files: `README_TEMPLATE.md`, `prototype-template/{demo.html, script.js, styles.css}` | `a6202ff` (2026-06-15) | Scaffolding kit for new prototypes; not linked from root `index.html` (by design — it is a template, not a demo) | **Finished and documented** (per its own stated purpose as a template, not a live demo) |
| **`docs/`** | 3 files: `DEMOS_OVERVIEW.md`, `DEPLOYMENT_NOTES.md`, `THEME_README.md` | `30f3b75` (2026-04-19) | Internally consistent with each other and with observed structure for everything except the `concepts/gallery/` gap noted above | **Functional but partially stale** (see F12 grouping) |

---

## 8. Dependencies & Tooling

**Ecosystem:** Node, npm (confirmed via `package-lock.json`, `lockfileVersion: 3`, npm-shaped `node_modules/`; no `pnpm-lock.yaml`/`yarn.lock`/`bun.lockb`).

- **Lockfile health:** present locally (48 resolved packages under the single devDependency `http-server@^14.1.1`), but still **not committed** — `.gitignore:6` excludes it, `git ls-files --error-unmatch package-lock.json` fails, `git log --all -- package-lock.json` is empty (F4, unchanged).
- **`npm outdated`:** exit 0, no output.
- **`npm audit --package-lock-only --json`:** `{info: 0, low: 0, moderate: 2, high: 0, critical: 0, total: 2}` — `follow-redirects` (GHSA-r4q5-vmmm-2653, header-leak-on-redirect) and `qs` (GHSA-w7fw-mjwx-w883 / GHSA-q8mj-m7cp-5q26, DoS via array parsing), both transitive under `http-server`, a local-dev-only tool never shipped as part of the deployed static site.
- **CI:** no `.github/workflows` directory exists. GitHub's automatic Pages-deployment check (not a repo-authored workflow) has run 5 times through 2026-07-16 and succeeded every time (`gh run list`), confirming the deploy path is live and healthy.
- No Python, .NET, or C++ manifests exist — those ecosystem checks are N/A.

---

## 9. Oddities

- `package.json` declares `"license": "ISC"` while the repo's actual `LICENSE` file (and `CONTRIBUTING.md`) both say MIT — a direct, easily-checked mismatch (F11, new this pass).
- `backups/stray-local-files/{DNA, Sonar, Radar}` — two 0-byte files and one 4,117-byte text file that reads as accidental redirected grep output referencing `concepts/header-animation-concepts.html` — unclear provenance, unchanged since last audit (F5).
- `git shortlog -sn` produces no output despite `git log` clearly showing commits from author `StarlightDaemon` — environment/mailmap quirk, reproduces identically to the last two audits, not investigated further (low value, out of scope for a read-only pass).
- Three generations of self-audit reports now exist in this repo across two locations (`audit-reports/*` from 2026-06-15, `.audits/Afterglows_AUDIT_2026-07-14-105903.md` and `Afterglows_AUDIT_2026-07-15.md`), all gitignored/untracked — this repo has a demonstrated, repeated pattern of self-auditing. Unlike the pattern noted in the last audit, this pass found the most recent remediation (Mac-path fix) **was** committed before the next audit cycle, breaking the previously-noted "audit without landing the fix" pattern.
- `.serena/` appeared as a new gitignored tool directory since the last audit — consistent with the existing `.gitignore:50` entry (`.serena/`), which already anticipated this addition.

---

## 10. Findings Index

| ID | Severity | Effort | Blast Radius | Location | Finding | Volatile? | Cross-ref |
|---|---|---|---|---|---|---|---|
| F4 | Medium | Trivial | Localized | `package-lock.json`; `.gitignore:6` | Lockfile is gitignored and has never been committed, so dependency resolution for the sole devDependency (`http-server`) is not pinned/reproducible across clones; `npm audit` currently shows 2 moderate transitive vulnerabilities (`follow-redirects`, `qs`) that could silently change on a fresh install elsewhere | No | Prior F4 (still open) |
| F11 | Medium | Trivial | Localized | `package.json` (`"license": "ISC"`); `LICENSE` (MIT); `CONTRIBUTING.md` (MIT) | `package.json`'s declared license (ISC) does not match the repository's actual `LICENSE` file (MIT) or `CONTRIBUTING.md`'s reiteration of MIT — a metadata inconsistency a package registry or downstream consumer would surface | No | New this pass |
| F12 | Medium | Bounded | Cross-cutting | `concepts/README.md`; `docs/DEMOS_OVERVIEW.md`; `matrix_code/README.md` | Two toolkits' documentation has fallen behind their actual implementation: (a) `concepts/README.md` and `docs/DEMOS_OVERVIEW.md` describe `header-animation-concepts.html` as a static single-file archive, with no mention of the `gallery/` engine (manifest-driven, 38 concept modules, filter/search, per-tile copy-usage/view-source) that has been the live implementation since commits `2009e49`/`1b31dc9`/`848d6ff` (2026-07-01); (b) `matrix_code/README.md` documents only `matrix_tools.css`'s CSS classes and never mentions `index.html`'s existence as a JS-driven demo hub or any of its 4 iframed demo HTML files. Both toolkits are verified functional (all referenced files exist, no dead links) — this is a documentation-lag finding grouped under one root cause: READMEs not updated alongside feature/structure additions | No | New this pass (related to prior F6's code-quality-fix confirmation, but distinct — this is a docs gap, not a regression) |
| F5 | Low | Trivial | Localized | `backups/stray-local-files/{DNA,Sonar,Radar}` | Three oddly-named, unclear-purpose files (two empty, one containing what looks like accidental grep-output text) sit in a gitignored local directory; provenance ambiguous | No | Prior F5 (still open) |
| F10 | Info | — | Localized | `.git/` (dangling tree `e51527cc...`) | `git fsck` reports one dangling tree object; normal non-corruption residue, repo otherwise fsck-clean; identical object reproduces across three consecutive audits | Yes | Prior F10 (still open) |
| F7 | Info | — | Localized | `package-lock.json` / `node_modules/http-server` | `npm audit`: 2 moderate, 0 high/critical, both transitive under a dev-only local-preview tool never shipped to the deployed static site | No | Prior F7 (still open) |
| F8 | Info | — | Cross-cutting | repo-wide | No test suite exists at all (no test script, framework, or test files) — test execution and coverage are not-verified/not-applicable rather than failing | No | Prior F8 (still open) |
| F9 | Info | — | Cross-cutting | repo root; GitHub Actions | No repo-authored CI/CD workflow exists; GitHub's automatic Pages "deploy from branch" build/deployment check requires none and is independently confirmed live and succeeding via `gh run list` (upgrade from not-verified to verified this pass) | No | Prior F9 (still open, verification upgraded) |
| F13 | Info | — | Localized | `.serena/` (gitignored) | New local tool directory (Serena MCP project config/cache) appeared since the last audit; already anticipated by an existing `.gitignore` rule, no action implied | No | New this pass |
| F6 | Info | — | Localized | `assets/css/styles.css`; `matrix_code/demo_canvas.html`; `index.html` | Prior code-quality fixes (reduced-motion support, cancellable canvas rAF loops, `.projects-grid` selector match) remain in place — no regression found; no site-content commits have landed since they were verified last pass | No | Prior F6 (confirmed holding) |

**Absolute report path:** `E:\Citadel\Afterglows\.audits\Afterglows_AUDIT_2026-07-22.md`
**Severity tally:** Critical: 0 | High: 0 | Medium: 4 | Low: 2 | Info: 6 | **Total: 12**
