# CRT archetype visual distinctiveness review — 2026-08-20

Scope: retro/crt_tools.css `[data-crt-archetype]` presets, judged from real
screenshots of the live demo page (retro/crt_demo.html) served at repo root,
each archetype applied through the page's own TUBE buttons, phosphor pinned
to P1 for all captures.

Archetypes reviewed (11): default, studio, consumer, worn, terminal, vector
(pre-existing) + arcade, hires, radar, surveillance, portable (new this
session).

Method: headless Chrome (puppeteer-core, same stack as the motion-verification
harness), one full-grid screenshot per archetype after a 1.4s settle following
the button click; full contact sheet + 1:1 same-panel crop sheets for the
confusable groups. Tools: .audits/tooling/crt-archetypes.mjs,
crt-archetype-sheet.mjs, crt-crop-sheet.mjs; captures under
.audits/tooling/captures/crt-arch-*.png, final sheet
crt-archetype-sheet-final.png.

## Verdicts (initial capture)

| new archetype | verdict | closest neighbor | note |
|---|---|---|---|
| arcade | distinct | consumer/terminal | wide 6px black gaps + punchy bloom, mono-clean — reads as its own thing |
| radar | distinct | vector/worn | huge halo bloom, dome vignette, massive slow trace |
| surveillance | distinct | consumer | mono (no fringe) + heaviest snow + fast bright hum bar vs consumer's color fringing |
| hires | **FAIL** | studio | at a glance indistinguishable from studio in every panel |
| portable | **FAIL (marginal)** | surveillance | both read "noisy mono tube with rolling band"; all knob deltas too small |

No archetype looked broken, glitched, or unintentional.

## Fixes (new presets only; studio/consumer/etc. untouched)

- **hires**: pushed to its honest identity — sterile multisync flatness.
  scanline-dark .10→.05, bloom .42→.15, fringe .15→.05, vignette .35→.18,
  curve 2→1px, sweep .15→.08, noise .08→.04, flicker-depth .006→.004.
  Studio now owns "soft reference-monitor halo"; hires owns "LCD-sharp,
  glowless, dead-flat".
- **portable**: leaned into the tiny-tube identity and handed the hum-bar/snow
  signature back to surveillance. curve 18→26px (steepest of any preset),
  vignette 1.6→1.9, bloom 1.45→1.65, sweep 1.4→0.9, noise 1.1→0.85.
  Portable now reads "curvy dark-cornered bloomy little screen"; surveillance
  keeps "flat, snowiest, fast bright band".

## Re-verification

Re-captured all 11 after the edits (same pipeline). Crop sheets
crt-crop-sysready2.png / crt-crop-noise2.png and the final contact sheet
confirm: hires vs studio now separable at a glance (halo vs no halo, faint
snow vs none, sweep band vs none); portable vs surveillance separable
(corner rounding + vignette + bloom vs even snow field + hum bar). Closest
remaining pair is portable vs radar, still clearly apart: radar's fuzzy
halo text, brighter noise field, and giant sweep trace vs portable's tight
dense stripes and darker field.
