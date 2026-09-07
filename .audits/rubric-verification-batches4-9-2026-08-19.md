# Rubric Verification — 95-tile batch, slices 3–8 (batches 4/9–9/9) — 2026-08-19

Final slice of the 95-tile geometric-motion verification campaign. Covers the six
remaining commits: `115ef19`, `dc9bd51`, `d1d2b9c`, `18145b6`, `1eb125d`, `82acb51`
(62 tiles). Judged against the perception-calibration rubric
(`perception-calibration-2026-08-16.md`): genuine geometric motion
(translate/rotate/scale) of a discrete bright-or-filled element on the concept's
main subject; intensity-only effects discounted.

## Method

- Harness: `.audits/tooling/capture.mjs` (real gallery page, scroll-into-view,
  900ms settle, 2 real unmanipulated screenshots 850ms apart, in-browser pixel
  diff at channel-delta ≥ 30) + `montage.mjs` contact sheets, unchanged from
  slices 1–2.
- Negative control re-run this session before any measurement: frozen
  `concept-candle` diffed to **exactly 0 changed pixels** with real content
  (64 unique colors sampled, meanLum 28.1) — harness still trustworthy.
- Borderline tiles got an isolation re-shoot at 4–5 frames / 300–400ms before
  any conclusion, per slice-1/2 protocol.

## Result: all 62 tiles pass; zero fixes required

| Commit | Tiles | Clean on first pair | Passed after re-shoot | Fixes |
|---|---|---|---|---|
| 115ef19 (batch 4/9) | 11 | 6 | 5 (glitch, graveyard, haunted-mirror, hex, invader) | 0 |
| dc9bd51 (batch 5/9) | 11 | 9 | 2 (microscope, moon-phase) | 0 |
| d1d2b9c (batch 6/9) | 10 | 8 | 2 (owl, potion) | 0 |
| 18145b6 (batch 7/9) | 10 | 7 | 3 (rubber-duck, saucer, prism) | 0 |
| 1eb125d (batch 8/9) | 10 | 8 | 2 (titration, traffic-light) | 0 |
| 82acb51 (batch 9/9) | 10 | 5 | 5 (turntable, vacuum-radio, vending, wand, weaverbird) | 0 |

All 19 re-shot tiles turned out to be phase-sampling artifacts of the single
850ms pair, not defects — every one showed clear geometric motion at faster
sampling. Notable cases:

- `concept-prism` diffed to **exactly 0** on the 850ms pair (two samples landing
  symmetric on an alternate-direction cycle); at 400ms it shows 7–19% per pair —
  beam-angle sweep plus prism drift.
- `concept-microscope` reads static at a glance in stills, but code + frame
  comparison confirms the chrome drawtube/brass turret rack ~9px vertically
  (1.6s alternate, `mic-rack`), slide nudges ±6px — visible tube displacement
  between f0/f3. Marginal but clears the rubric. (Side note, no action taken:
  v3's stylesheet tail carries orphaned `mi2-*` keyframes that nothing in v3
  references — dead CSS, the live `mic-*` keyframes are the ones applying.)
- `concept-moon-phase`: full phase cycle (full → new → crescent → gibbous) —
  whole-disc high-contrast transformation, judged Partially+ despite the mover
  being the dark terminator.
- `concept-vending`: duty-cycled can-drop; can visible mid-fall / landed in 3 of
  5 frames at 400ms.

## Campaign status

With slices 1–2 (batches 1–3, commits `fe03821`, `9953fae`, `379c0f2`) already
verified, **the 95-tile batch verification is finished in full**. No fix commits
were produced by this slice; the batch-4–9 conversions all hold up under real
gallery inspection.
