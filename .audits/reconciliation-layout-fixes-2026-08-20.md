# Reconciliation — Responsive Layout Fixes vs. Audit — 2026-08-20

Reconciles the 20 findings in `responsive-layout-audit-2026-08-20.md` against
the four fix commits from the same day:

- `e2eb39d` fix(matrix): control panel below header + internally scrollable
- `a30e026` fix(retro): main/grid shrink to viewport instead of forcing 980px
- `c380ed0` fix(chrome): dock Back + gear into the site bar below 480px
- `a4f661c` fix(hub): cards/content fit 320px (aspect-ratio auto ≤600px +
  overflow-wrap on the domain token)

Every status below was determined by **fresh inspection at current HEAD**
(`a4f661c`) using `.audits/tooling/verify-capture.mjs`,
`snap-viewport.mjs`, `probe-matrix-header.mjs`,
`probe-matrix-reachability.mjs`, and targeted element probes — not from
commit messages. Recapture artifacts: `.audits/tooling/captures/verify/recon-*`.

## Status table

| ID | Status | Evidence / note |
|---|---|---|
| H1 | **closed** | `a4f661c`. Hub 320: scrollWidth 320, 0 overflowing elements; capture shows all four cards fully visible incl. right-edge badges/Docs links. Root cause was twofold (card ratio min-width transfer **and** the unbreakable `afterglows.starlightdaemon.dev` token); both fixed. |
| H2 | **closed** | Side effect of `a4f661c`: with `aspect-ratio: auto` ≤600px, cards are content-sized — 251px tall at 320 and 209px at 600 (~80% content fill) vs. 837px mostly-empty pre-fix. |
| H3 | **partial** | Gear-over-footer overlap closed by `c380ed0` (chrome docks top at ≤480; footer confirmed clear at 320 and 414 end-of-scroll snaps). The sub-point remains: the two adjacent footer links still sit closer than a fingertip (close-pair still flagged at 320) — same class as H4. |
| H4 | **open** | Untouched. Project-card links still 20px tall, footer links 16px (probed at 320/600). |
| H5 | **open** | Untouched. Probed: exactly 600px → 1 column (max-600 wins), 601px → 2 columns. Boundary still double-matched. Note: `a4f661c` added rules to the max-600 block, so the 600-inclusive boundary now also governs the card-ratio switch — tightening should account for that. |
| C1 | **closed** | `c380ed0`. Concepts 320 (audit's break width, not just the 375/414 verified in the fix session): 0 overlapping and 0 close interactive pairs; chips clear of chrome in initial viewport. |
| C2 | **closed** | `c380ed0`. End-of-scroll snap at 320: version-legend chips (ORIGINAL/REFINED/NEW/WITH COLOR) fully visible, no chrome over them. |
| C3 | **open** | Untouched. At 320: Copy 44×22, filter chips ~72–138×23. |
| C4 | **open** | Untouched. Concepts at 320 still renders 83,301px tall (recon metric identical to audit). |
| P1 | **closed** | `c380ed0`. Physics 320: 0 overlaps, 0 close pairs. |
| P2 | **open** | Untouched — and worse than the audit's frozen snapshot suggests. Live sampling at 375 over ~3s: the `physics-spring-mass-damper` SVG's right edge peaks at 385.4px vs. tile right 348.3 (37px past the tile) and viewport 375 (10.4px past). The overflow is animation-phase-dependent, so frozen captures (incl. `verify-capture.mjs`, which froze at a benign phase and reported 0 overflow) can miss it — check this tile with live sampling, not freezes. |
| P3 | **open** | Untouched. At 320: Copy 44×21, category chips 92–150×28. |
| P4 | **closed** | `c380ed0`. At 414 the corner chrome no longer exists (docked into the bar), so tile Copy/Source rows can't collide with it at any scroll position; recon 414: 0 overlaps/close pairs. |
| M1 | **closed** | `e2eb39d`. Probe at 320/414/900/1280: `coveredButtons` empty at all four; MODE row top = 92 vs. header bottom 56. |
| M2 | **closed** | `e2eb39d`. Reachability probe at 320×568: panel `overflow-y: auto` (scrollHeight 824 / clientHeight 410); Neon Blue, Resurrections, Virus, Neon Gold, Match Global all scroll into view inside the viewport and pass `elementFromPoint` hit-testing. |
| M3 | **closed** | `e2eb39d` (panel capped above the old chrome) + `c380ed0` (chrome docked at ≤480 anyway). Recon 320: 0 overlaps, 0 close pairs. |
| R1 | **closed** | `a30e026`. Retro 320/600/900: scrollWidth == viewport at all three, 0 overflowing elements. |
| R2 | **closed** | Same root cause as R1. Probed h1 + subtitle at 320/375/414: scrollWidth == clientWidth (no clipping); title wraps to two lines at 320 instead of truncating. |
| R3 | **closed** | Same root cause as R1. Captures at 320/600: full tube/color chip toolbar visible and on-screen. (Bonus: retro's 320 chip-vs-Back-corner overlap, observed mid-fix-session before the docking commit, is also gone.) |
| R4 | **open** | Untouched. Theme/color buttons still 31px tall at 320/375/414. |

Multi-issue fixes, confirmed individually: `a30e026` (retro) closed **R1 + R2 +
R3** with one root-cause fix; `c380ed0` (shared chrome) closed **C1, C2, P1,
P4, M3** and the chrome half of **H3**, each verified on its own page/width;
`a4f661c` (hub) closed **H1 + H2**; `e2eb39d` closed **M1 + M2** and
contributed to M3.

## New observations (not in the original 20)

- **Hub at 600×960:** a project-card "Docs" link sits under the floating gear
  in the initial viewport (doc y≈883 vs. gear 888–936). 600px is above the
  480px docking threshold, so the corner gear still floats there; the overlap
  is scroll-recoverable (P4-class, cosmetic). Emerged because content-sized
  cards (`a4f661c`) shifted layout upward at ≤600px.
- **P2 severity:** see table — live peak overflow is ~7× the audit's frozen
  measurement; treat frozen-capture "0 overflow" on animated tiles as
  inconclusive.

## Summary

- **Closed: 12** (H1, H2, C1, C2, P1, P4, M1, M2, M3, R1, R2, R3)
- **Open: 7** (H4, H5, C3, C4, P2, P3, R4)
- **Partial: 1** (H3 — chrome overlap fixed; adjacent footer-link proximity remains)

## Reachability-probe tooling

`probe-matrix-reachability.mjs` **persisted and is usable**:
`.audits/tooling/probe-matrix-reachability.mjs` (2.6KB, saved 02:59 during
the fix session), re-run successfully during this reconciliation. It is
matrix-specific (hardcoded to `/matrix_code/` at 320×568 and the five
rain-color button labels), so future reachability checks on other pages —
e.g. retro's still-open R4 touch targets — reuse its pattern
(`scrollIntoView` + rect bounds + `elementFromPoint` hit-test) with a
different page/selector list rather than running it as-is.
