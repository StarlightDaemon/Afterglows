# GitHub Pages Pre-Launch and Release-Readiness Report

Date: 2026-09-06 (America/Denver)
Repository: `StarlightDaemon/Afterglows`
Reviewed ref: local `main` at `dff5fd7c731e44ea8b72dfdfafc1a887cb089364`
Production origin: `https://afterglows.starlightdaemon.dev/`

> **Superseded 2026-09-07:** The Animation Concepts and Physics galleries were
> consolidated at `/concepts/`; `concepts/header-animation-concepts.html` and
> `/physics/` were retired. Current validation covers 10 public HTML files, a
> 739-file Pages artifact, and 4 sitemap URLs. The findings below are retained
> as the historical pre-consolidation release snapshot.

## 1. DECISIONS MADE

- Afterglows is a custom-domain GitHub Pages site implemented as static HTML,
  CSS, and JavaScript. It has no application backend, authentication, commerce,
  forms, analytics, or privileged browser credential requirement, so GitHub
  Pages is an appropriate hosting boundary for its observed behavior.
- The repository should publish the allowlisted `dist/` artifact created by
  `npm run build`, not the repository root. This is recorded as D-003 and
  implemented by `.github/workflows/deploy-pages.yml`.
- The Pages artifact retains `CNAME` and `.nojekyll`. Jekyll processing is not
  used; `.nojekyll` is intentional because `_templates/` is public content.
- Production paths are root-relative because the custom domain is the canonical
  origin, not a `/Afterglows/` project-site subpath.
- Browser-side CSP was tightened without inventing server-side controls GitHub
  Pages cannot supply. Necessary inline Matrix/CRT runtimes use exact hashes.
- The canonical animation-gallery route is `/concepts/`; the legacy source
  filename remains available in the artifact for compatibility.
- IBM Plex Mono, VT323, Space Mono, and Fira Code remain the four selectable
  typography choices. Their WOFF2 files are now first-party assets rather than
  Google Fonts runtime requests. JetBrains Mono is also vendored for the
  existing compatibility mapping. Phosphor palettes remain an independent
  theme axis.

## 2. DECISIONS DEFERRED

- **2a — GitHub Pages Source:** GitHub's repository setting could not be read
  from the available signed-out UI/API session. The intended value is **GitHub
  Actions**, but the local workflow is untracked and absent from `origin/main`,
  so the repository-side transition is not deployable yet. An authorized
  operator must review/commit/push the release changes, set Source to GitHub
  Actions, and observe a successful Pages run.
- **Deployment:** no commit, push, merge, release, or deployment was authorized.
  Local `main` is nine commits ahead of `origin/main`, and the release-readiness
  working tree also contains uncommitted changes.
- **Custom-domain account controls:** GitHub-side domain verification and DNS
  records require authenticated account/DNS access. They were not changed.
- **Future privacy/legal requirements:** no current tracking, form submission,
  or personal-data transmission was found. Product/legal review is required if
  those behaviors are added later; no speculative cookie banner or privacy
  policy was introduced.

## 3. CRITICAL ISSUES

- No unresolved repository-local P0 defect was found after implementation and
  validation.
- The live deployment still predates this release artifact. `/concepts/`
  returns 404, unknown routes show GitHub's generic 404, and
  `/.raiden/state/CURRENT_STATE.md` remains publicly readable. This is the
  material launch blocker until the allowlisted Actions deployment is live.
- **2b — Enforce HTTPS is now behaving correctly:** a request to
  `http://afterglows.starlightdaemon.dev/` redirects once to the canonical HTTPS
  origin and finishes with HTTP 200; direct HTTPS also returns 200 with no
  redirect loop.
- The self-hosted font change is implemented and verified locally but is not on
  the deployed site until the same authorized deployment occurs.

## 4. CHANGES AND VERIFICATION

| File/path | What changed | Why | Verification | Result |
|---|---|---|---|---|
| `.github/workflows/deploy-pages.yml` | Added least-privilege GitHub Pages artifact deployment using current Pages actions. | Stop publishing operational repository contents and make the production artifact explicit. | Workflow and build inputs inspected; artifact built locally. `actionlint` was unavailable. | PASS locally; workflow run not authorized. |
| `scripts/build-site.js`, `package.json`, `.nojekyll` | Added an allowlisted `dist/` build and made local preview serve that artifact with loopback-only, no-CORS, no-directory-listing, no-dotfile defaults. | Match local testing to the intended Pages boundary and prevent accidental repository exposure. | `npm run build`; output guard in build script; local HTTP server smoke test. | PASS — 741 artifact files. |
| `scripts/validate-security.js` | Added CSP/hash, unsafe sink, external font, WOFF2 integrity, target-blank, and preview-hardening checks. | Make security and font-delivery invariants regression-testable. | `npm run security:check`. | PASS — 11 public HTML files plus shared JS/CSS. |
| `scripts/validate-site.js` | Added built-path, metadata, landmark, image-alt, sitemap, CNAME, favicon, social image, and 404 checks. | Catch case-sensitive/broken production output before deployment. | `npm run site:check`. | PASS — 12 built HTML files, 741 artifact files, 5 sitemap URLs. |
| `assets/js/afterglows-header.js`, `assets/js/afterglows-settings.js`, `assets/js/script.js` | Replaced shared HTML-string injection sinks with DOM/text construction. | Reduce injection-prone browser code and satisfy the CSP boundary. | Security validator and browser smoke tests. | PASS. |
| `index.html`, `404.html`, `concepts/header-animation-concepts.html`, `physics/index.html`, `matrix_code/index.html`, `retro/crt_demo.html` | Added/tightened CSP, canonical social/favicon metadata, landmarks/skip links where applicable, and production route corrections. | Resolve launch-critical security, accessibility, sharing, and path issues. | Build/site/security checks; desktop and 320/390/768 px browser checks; keyboard skip-link test. | PASS locally. |
| `assets/css/afterglows-header.css`, `assets/css/styles.css` | Added shared skip-link/visually-hidden support and mobile-safe fixed chrome behavior. | Keep primary navigation usable by keyboard and at narrow viewports. | Manual keyboard and responsive browser checks with no horizontal overflow. | PASS locally. |
| `404.html` | Added a branded, `noindex` recovery page with links to primary collections. | Replace GitHub's generic dead end. | Requested a known-missing route from the local production-style server. | PASS locally; live site still serves generic GitHub 404. |
| `assets/img/afterglows-social-card.jpg` | Added a 1200×630 branded social card. | Provide stable Open Graph/Twitter presentation. | Dimensions/file integrity and metadata target checked by build validator. | PASS. |
| `index.html`, `sitemap.xml`, build alias | Added Physics discovery, updated collection counts, published `/concepts/`, and included canonical routes in sitemap. | Make primary content reachable and crawlable. | Browser CTA/search smoke test and sitemap/artifact validation. | PASS locally; live `/concepts/` still 404. |
| `assets/fonts/`, `assets/css/afterglows-settings.css`, public page CSPs | Added 25 pinned WOFF2 subset files (409,512 bytes total), five upstream OFL notices, local `@font-face` declarations, and `font-src 'self'`; removed all Google Fonts links/preconnects/imports. | Keep the four core font choices and compatibility face without a runtime Google dependency. | WOFF2 magic validation; source/dist host scan; browser exercised IBM, VT323, Space, and Fira buttons and confirmed each computed family plus `document.fonts.check(...)`; CRT verified Fira/VT323. Local request log showed only `/assets/fonts/...` requests. | PASS. |
| `README.md`, `docs/DEPLOYMENT_NOTES.md`, `docs/THEME_README.md`, `CHANGELOG.md`, `.raiden/state/*` | Documented the deployment boundary, theme/font ownership, operating checks, and durable release-readiness state. | Keep repository guidance and RAIDEN Instance state aligned with implementation. | Manual cross-check against scripts, artifact, and live probes. | PASS. |

- Repository/ref verified: local `main` at `dff5fd7`; `main...origin/main`
  is ahead 9; `origin/main` is `71c2ac9`.
- Secrets: no high-confidence privileged credential pattern found in public
  source, built artifact, or the bounded history scan performed during this
  pass.
- Dependency audit: `npm audit --audit-level=high` reported 0 vulnerabilities.
- Google Fonts runtime scan: no `fonts.googleapis.com` or `fonts.gstatic.com`
  reference found in public source or `dist/`.
- Browser journeys: homepage navigation, Physics CTA/gallery/search, Concepts,
  Matrix, CRT, settings controls, and local 404 recovery passed with no material
  console/runtime issue during the pass.
- Independent review (2026-09-07): the security/deployment reviewer found no
  additional material defect; the font reviewer found no high/medium-severity
  issue; and the report-consistency reviewer identified the pending-vs-live
  deployment wording and stale collection counts, which were corrected in
  `.raiden/state/`, `docs/DEPLOYMENT_NOTES.md`, and this report's supporting
  state. A conflicting `/concepts/` observation was rejected after a fresh
  direct GET and HEAD both returned the GitHub generic 404.
- Review follow-up: security validation now rejects Google Fonts references
  introduced through public JavaScript and rejects any remote CSS font source.
  The expected generic-monospace fallback for scientific glyphs absent from
  IBM Plex Mono, Space Mono, and VT323 is documented in
  `assets/fonts/README.md`.

- Build: **PASS**
- Tests: **PASS**
- Accessibility automated check: **NOT RUN** (structural checks passed; no axe-equivalent scanner was installed)
- Manual browser verification: **PASS**
- Deployed-site verification: **FAIL** (HTTPS passes, but production predates the artifact and exposes repository-only content)
- Commit: **NONE**
- Push: **NONE**
- Merge: **NONE**
- Deployment: **NONE**
