# Responsive Layout Integrity Audit — 2026-08-20

Investigation-only pass over static layout integrity at portrait mobile/tablet
viewport widths. No page files were modified. This audit is unrelated to the
geometric-motion animation work; animations were frozen (WAAPI walk,
`playbackRate = 0`, shadow roots included) before every capture so screenshots
show settled static layout.

## Method

- **Stack:** headless Chrome via `puppeteer-core` (the repo's existing audit
  stack), real repo served over a local static HTTP server rooted at the repo
  root — the actual live pages, not harnesses.
- **Per combo:** load with `networkidle2`, 2.2s settle, slow pre-scroll to the
  bottom to trigger IntersectionObserver lazy loads and dynamic imports,
  freeze animations, collect programmatic layout metrics (horizontal-overflow
  elements incl. shadow DOM, small/close touch targets, text clipping, grid
  column stats), then scroll-and-stitch viewport screenshots into a
  full-scroll-height PNG. Scroll-and-stitch (not `captureBeyondViewport`
  clips) was chosen deliberately so `100vh` layouts and fixed chrome render
  exactly as on a real device.
- **Artifacts:** `.audits/tooling/captures/responsive-2026-08-20/`
  - `<page>-<width>.png` — stitched full-page captures (30)
  - `<page>-<width>-pN.png` — full-height segment captures for combos taller
    than the 30,000px canvas cap (concepts 320/375/414/600, physics 320)
  - `sheet-<page>.png` — one contact sheet per page, all widths side by side
  - `slices-*.png` — full-resolution inspection strips
  - `metrics.json` — complete programmatic metrics for all 30 combos
  - Harness scripts: `.audits/tooling/responsive-capture.mjs`,
    `responsive-capture-tall.mjs`, `responsive-sheets.mjs`,
    `responsive-slices.mjs`, `probe-matrix-header.mjs`,
    `probe-retro-header.mjs`, `probe-hub-320.mjs`
- **Stitch artifact caveat:** the fixed site header, Back link, and settings
  gear are repainted at every chunk boundary, so they appear repeatedly down
  each stitched image. Only overlaps confirmed by element-rect probes or
  visible within a single real viewport were recorded as issues.

## Pages tested

| Page | File path | Served URL |
|---|---|---|
| Hub (landing) | `index.html` | `/` |
| Concepts gallery | `concepts/header-animation-concepts.html` | `/concepts/header-animation-concepts.html` |
| Physics gallery | `physics/index.html` | `/physics/` |
| Matrix code | `matrix_code/index.html` | `/matrix_code/` |
| Retro | `retro/crt_demo.html` | `/retro/crt_demo.html` |

All five pages carry `<meta name="viewport" content="width=device-width,
initial-scale=1.0">`, so plain viewport emulation is faithful.

## Breakpoints found in CSS

Width-based media queries (reduced-motion-only queries excluded):

| Breakpoint | Stylesheet | Applies to |
|---|---|---|
| `max-width: 900px` | `assets/css/styles.css:1007` | hub |
| `max-width: 600px` | `assets/css/styles.css:861, 1068` | hub |
| `min-width: 600px and max-width: 1199px` | `assets/css/styles.css:760` | hub |
| `min-width: 768px` | `assets/css/styles.css:141` | hub |
| `max-width: 768px` | `physics/index.html:316` (inline) | physics |
| `min-width: 1200px` | `assets/css/styles.css:148, 749` | hub |
| `min-width: 1600px` | `assets/css/styles.css:155` | hub |
| `min-width: 1700px` | `assets/css/styles.css:1094` | hub |
| `min-width: 2300px` | `assets/css/styles.css:1125` | hub |

Concepts, matrix, and retro have **no width breakpoints at all** — their
narrow-viewport behavior is whatever their intrinsic CSS does, which is the
root cause of several findings below.

## Widths tested

320×568, 375×667, 414×896 (requested), **600×960** and **900×1200** (added —
discovered breakpoints not covered by the requested list), 768×1024
(requested; also a discovered breakpoint). Portrait only. 5 pages × 6 widths
= 30 combos, all captured full-height.

The `min-width` 1200/1600/1700/2300 breakpoints were **not** tested: they are
desktop-landscape enhancement tiers with no plausible portrait device width,
and this pass was portrait-only. Flagged for a future landscape/desktop pass.

---

## Issue catalog by page

Severity legend: **[BREAK]** = breaks usability · **[COSMETIC]** = cosmetic only.

### Hub (`index.html`)

- **H1 [BREAK] — 320px only: project cards force horizontal scroll and are
  clipped.** `document.scrollWidth` 351 vs viewport 320 (52 overflowing
  elements). Every `.project-card` renders 330.5px wide inside a 320px
  viewport; the right ~31px of all four cards (PROMOTED/LIBRARY badges,
  right-hand "Docs" links, tech chips) and the footer are cut off unless the
  user scrolls horizontally. Root cause: `.project-card { aspect-ratio: 2/3 }`
  (`assets/css/styles.css:540`) — as text wraps taller at narrow widths the
  ratio forces the card *wider* (content height ~496px → width 330px), so the
  `1fr` grid column cannot shrink to fit. Clean at 375px and above.
- **H2 [COSMETIC] — 320–600px: huge empty voids inside project cards.** The
  same `aspect-ratio: 2/3` makes single-column cards enormously tall
  (558×837px at 600px) with content filling well under half the card; the
  page reads as mostly empty framing.
- **H3 [COSMETIC] — 320–414px: settings gear overlaps footer links at the end
  of scroll.** The footer is the last content, so at the bottom of the page
  the fixed bottom-right gear permanently covers part of the centered footer
  text/link (`afterglows.starlightdaemon.dev`); the two adjacent footer links
  also sit closer than a fingertip (flagged by close-pair metric at
  320–600px).
- **H4 [COSMETIC] — all widths: small touch targets.** Project card links
  ~47×20px, footer links ~103×16px — below the ~44px recommended touch
  height.
- **H5 [COSMETIC] — exactly 600px: conflicting breakpoint boundary.** Both
  `@media (min-width: 600px) and (max-width: 1199px)` (2-col projects grid)
  and `@media (max-width: 600px)` (1-col) match at exactly 600px; the later
  block wins, so a 600px viewport gets the mobile single column while 601px
  gets two columns. Not visually broken, but the boundary is self-contradictory.

### Concepts gallery (`concepts/header-animation-concepts.html`)

- **C1 [BREAK] — 320px (and near-miss at 375px): fixed Back/gear controls
  overlap the filter toolbar in the initial viewport.** At 320×568 the
  STATUS/ORIGIN filter chip rows (doc y≈497–532) land exactly under the fixed
  bottom-left Back link and bottom-right settings gear before any scrolling:
  taps aimed at the left chips hit Back, and the gear covers the right end of
  the chip rows (confirmed close-pair/overlap metrics: `filter-chip` vs
  `ag-back-link` ×3, `filter-chip` vs `ag-gear`). At 375px they are within
  4px of each other. Clean at 414px and above.
- **C2 [COSMETIC] — 320px: version-legend chips at the page bottom sit under
  the Back control at end of scroll** (last content; cannot scroll past it).
- **C3 [COSMETIC] — all widths: dense sub-44px touch targets.** 635 flagged
  interactive elements at 320px: per-tile Copy (44×22) and Source (56×22)
  buttons and filter chips (~79×23) are all well under recommended touch
  height, in tightly packed rows.
- **C4 [COSMETIC] — 320–414px: extreme page length.** The default view
  renders 309 tiles in one single-column grid ≈ **83,300px** tall at 320px
  (~146 screens). No pagination/virtualization at mobile widths; finding
  anything below the fold is a scroll endurance exercise.
- **Positive:** the tile grid itself holds up well — single column of
  224px tiles at 320px (279px at 375, 318px at 414), tiles centered, labels
  and badges wrap without clipping, no horizontal overflow at any width.
  Column counts step 1→2→3 at 600/768px sensibly.

### Physics gallery (`physics/index.html`)

- **P1 [BREAK] — 320px: category chip rows overlapped by fixed Back/gear in
  the initial viewport.** Same mechanism as C1: at 320×568 the bottom rows of
  the category chip toolbar (y≈480–516) sit under the fixed Back link and
  gear (`cat-chip` vs `ag-back-link` ×2, vs `ag-gear` ×1). At 375px the
  Reset button and a chip are within 4px of Back. Clean from 414px up
  (only transient tile-action proximity while scrolling, see P4).
- **P2 [COSMETIC] — 375px only: `physics-spring-mass-damper` tile SVG
  overflows its tile.** A 100px-wide SVG inside the tile's shadow DOM extends
  ~17px past the tile box into the grid gutter and 1.4px past the viewport
  edge (metrics: right edge 376.4 at vw 375). Not present at 320 (wider
  single-column tile) or 414+.
- **P3 [COSMETIC] — all widths: sub-44px touch targets** (236 flagged at
  320px: Copy 44×21, Source 57×21, chips 92×28).
- **P4 [COSMETIC] — 414px: transient proximity of tile Copy/Source buttons to
  the fixed Back/gear** at certain scroll positions (flagged pairs at doc
  y≈850); recoverable by nudging the scroll, but on a 2-column layout the
  fixed controls hover over tile action rows fairly often.
- **Positive:** tile grid legibility holds at the smallest width — 296px
  single-column tiles at 320px, 168px 2-column tiles at 375px (labels wrap,
  nothing clips), and the `max-width: 768px` breakpoint's
  `minmax(150px, 1fr)` grid behaves as intended. No horizontal scroll at any
  width except the 1.4px P2 case.

### Matrix code (`matrix_code/index.html`)

- **M1 [BREAK] — all tested widths: the first control row is hidden behind
  the fixed site header.** `.controls` is `position: fixed; top: 18px`
  (`matrix_code/index.html:158-161`) but the injected `.ag-header` is 56px
  tall with a vastly higher z-index, so the MODE row label and every mode
  button that wraps onto the first row render ~23px of their 30px height
  underneath the header, which also intercepts the clicks. Probed rects:
  at 320/414px the **default-active "Film" button** is buried (top 33,
  header bottom 56); at 900px Film, Classic, Rain, and Binary are all buried.
  (Out of this pass's scope but confirmed while probing: at desktop 1280px
  the entire six-button mode row is buried — this is a global bug, not just a
  narrow-viewport one.)
- **M2 [BREAK] — 320×568: bottom controls unreachable.** The control panel
  extends to y=858 in a 568px viewport on a page with `body { overflow:
  hidden }` — there is no scrolling, so **Neon Blue, Resurrections, Virus,
  Neon Gold, and Match Global can never be seen or tapped** at this size.
  At 375×667 the panel just fits (bottom ≈633); at 414+ comfortable.
- **M3 [COSMETIC] — 320px: fixed Back link and gear sit within ~4px of the
  Stoplight/Violet color buttons** (close-pair metric ×2 + gear) — high
  mis-tap risk in the only viewport region left for the wrapped buttons.

### Retro (`retro/crt_demo.html`)

- **R1 [BREAK] — every tested width (320–900px): the whole content column is
  a fixed intrinsic 980px wide and overflows horizontally.** `<main>` has no
  width; `body` is a centering column flexbox, so `main` sizes to the demo
  grid's intrinsic width — `repeat(auto-fit, minmax(300px, 1fr))` with 40px
  gaps resolves to 3×300 + 2×40 = 980px at *every* viewport (probed: main
  left/right = −330/650 at 320px … −40/940 at 900px). Horizontal scroll is
  forced everywhere below ~1060px. At 320px only the middle demo column is
  visible (left/right thirds of every demo row off-screen); at 600px the
  outer columns are half-clipped ("SYSTEM READY", "CORRUPTION DETECTED" boxes
  cut); even at 900px, 40px is clipped off each side.
- **R2 [BREAK] — 320–414px: page title clipped.** The `h1` ("CRT & RETRO
  EFFECTS") and subtitle span the 980px box, so both are truncated on both
  sides ("HOR · SCANLINE · GLITCH · PUR" at 320px).
- **R3 [BREAK] — 320–600px: phosphor/CRT-type chip toolbar partially or
  wholly off-screen.** At 320px the entire chip box (STYLIZED, STUDIO,
  CONSUMER TV, … + color row) sits right of the visible region — the page's
  main controls are invisible without horizontal scrolling; at 600px the
  leading chips of each row are cut off on the left.
- **R4 [COSMETIC] — all widths: theme/color buttons ~31px tall,** below
  recommended touch size.
- Checked and cleared: the `h1` is *not* covered by the fixed header — the
  header JS's `ag-has-header` body padding (56px) compensates correctly
  (probed at 4 widths). Doubled-header appearances in stitched captures are
  stitch artifacts.

### Cross-site pattern

The shared fixed bottom chrome (Back bottom-left, settings gear bottom-right,
from `afterglows-header.css`) is the common mechanism behind C1, P1, M3, and
H3: on any page whose interactive content reaches the bottom viewport corners
at ≤414px, the floating controls sit on top of it with no reserved
safe-area/clearance. A future fix pass should treat these as one systemic
issue rather than four page bugs.

---

## Priority list (severity-ordered) for a future fix pass

1. **R1/R2/R3 — Retro 980px intrinsic width** (breaks all six tested widths;
   worst single finding in the audit). Give `main`/`.grid` `width: 100%` and
   let the grid collapse (`minmax(min(300px, 100%), 1fr)` or a narrow-width
   media query). One root cause clears three BREAK findings.
2. **M2 — Matrix 320px: unreachable controls** on an unscrollable page
   (5 controls cannot be used at all).
3. **M1 — Matrix: control panel top row buried under the site header** at
   every width (default-active mode button invisible on phones; whole mode
   row at desktop). Push `.controls` below `--agh-bar-h` (top ≥ 56+18px).
4. **H1 — Hub 320px: `aspect-ratio: 2/3` cards force horizontal scroll**
   and clip all four project cards. Relax/remove the ratio below ~360px.
5. **C1 + P1 (+ M3, H3) — fixed Back/gear colliding with bottom-corner
   content at 320–375px** on concepts and physics (filter chips under the
   controls in the *initial* viewport). Systemic fix in the shared chrome
   (e.g. bottom padding reserved on `ag-has-header` pages, or shrink/dock
   behavior at narrow widths).
6. **H2 — Hub card voids at 320–600px** (worst-looking cosmetic issue).
7. **P2 — spring-mass-damper SVG overflow at 375px** (single-tile fix).
8. **C3/P3/H4/R4 — sub-44px touch targets across all pages** (Copy/Source
   buttons, chips, footer/project links) — one sizing pass.
9. **C4 — 83k-px concepts scroll at 320px** (consider mobile pagination or
   collapsed sections).
10. **H5 — 600px double-match breakpoint boundary** in `styles.css`
    (tighten to 599px/600px).
11. **C2 — concepts footer legend chips under Back at page bottom (320px).**

## Totals

| Page | Breaks usability | Cosmetic only | Total |
|---|---|---|---|
| Hub | 1 (H1) | 4 (H2–H5) | 5 |
| Concepts gallery | 1 (C1) | 3 (C2–C4) | 4 |
| Physics gallery | 1 (P1) | 3 (P2–P4) | 4 |
| Matrix code | 2 (M1, M2) | 1 (M3) | 3 |
| Retro | 3 (R1–R3) | 1 (R4) | 4 |
| **Total** | **8** | **12** | **20** |

## Test coverage statement

- All 5 pages × all 6 widths (320/375/414/600/768/900, portrait) were loaded,
  settled, measured, and captured over their **entire scrollable height** —
  no combo failed. Combos exceeding the single-canvas cap (concepts at
  320/375/414/600 up to 83,301px; physics at 320, 31,869px) are covered by
  the `-pN` segment captures.
- **Not tested, by scope decision:** the `min-width` 1200/1600/1700/2300
  breakpoints (desktop-landscape tiers, no plausible portrait width) — left
  for a landscape/desktop pass. Landscape orientation generally untested.
- **Partial-content caveat (concepts):** the live default view renders 309 of
  549 concepts ("Newest additions"). Grid/layout CSS is identical for the
  remaining 240, so the layout findings apply, but per-tile intra-content
  quirks in the non-rendered 240 tiles (like physics P2) were not in view.
- **Matrix below-fold caveat:** the page is `overflow: hidden`; layout below
  the fold was captured via stitching for analysis, but a real user cannot
  scroll to it — recorded as finding M2, not a coverage gap.
- Interactive states (open settings panel, category drawers, search results,
  versioner frames) and dark/light theme variants were out of scope for this
  static pass.
