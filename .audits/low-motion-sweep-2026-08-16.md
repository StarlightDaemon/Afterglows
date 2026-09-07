# Low-Motion Sweep — 2026-08-16

Measurement-only pass. No manifest, concept file, or render code was modified in this session.

## Method

Reused the validated continuous-playback pixel-diff harness from the 2026-08-15 session
(`motioncheck.mjs` + `cdp.mjs`, session `d7795819`) unchanged: drove the real gallery page
in headless Chrome via raw CDP (no synthetic timing, no frozen animations), switched the
sort to `curated` so every manifest concept renders, scrolled each concept's `.terminal-box`
into view, polled the Web Animations API until the lazy system genuinely resumed it
(`running > 0` or `total == 0`), then captured two real screenshots of the box's page-coordinate
clip ~850ms apart and pixel-diffed them in-page (canvas `getImageData`, per-pixel max-channel
delta, reporting `frac30` = fraction of pixels with delta ≥ 30). Two headless Chrome instances
ran in parallel (one per gallery, separate debug ports/profiles) to keep wall-clock down on
a 660-tile full sweep.

## Summary

| Gallery | Concepts measured | Errors | Flagged (< 1.0% f30) |
|---|---|---|---|
| `concepts/gallery` | 549 | 0 | 111 |
| `physics/gallery` | 111 | 0 | 26 |
| **Total** | **660** | **0** | **137 (20.8%)** |

Concept counts were read directly from `concepts/gallery/manifest.js` (549 `tag:` entries)
and `physics/gallery/manifest.js` (111 `tag:` entries) at the start of this session — every
concept in both manifests was measured; nothing was pre-filtered or skipped.

**Threshold: `frac30 < 1.0%`.** The full 660-tile distribution has no sharp bimodal gap —
it is a smooth, continuous, right-skewed curve (see distribution note below), so no single
cliff cleanly separates "clearly animated" from "clearly subtle." Given that, the threshold
was set at the one genuine local feature the data does show: binning the distribution at
0.25-point resolution, the 0.75%–1.00% bin contains 48 tiles — roughly double both
neighboring bins (26 in 0.50–0.75%, 21 in 1.00–1.25%) and the single densest bin in the
entire dataset. That's a real (if modest) density spike, and it sits almost exactly on the
1.0% mark, which is also the upper edge of this session's own already-cited "0.8–2%"
incidentally-found low-motion band — two independent signals landing on the same number.
Cutting there flags 137/660 (20.8%), which is wide enough to catch more than just the
bottom handful (63 tiles score under 0.5%) without flooding toward where real motion is
already confirmed: three prior verification passes tonight found `concept-grid` at 3.7% f30,
`hourglass` at 5.2%, and `radar` at 7% all "clearly animated," and this sweep's own
measurement of `concept-grid` landed at 3.680% — consistent with that calibration and with
2.7 points of margin above the 1.0% threshold. A tighter cut (e.g. 0.5%) would have missed
real candidates in the 0.5–1.0% range; a looser one (e.g. 2.0%, the top of the previously-cited
band) would have flagged 237/660 (36%) — over a third of the gallery, which is flooding
territory the operator explicitly wanted avoided.

## Score distribution (for future sessions — no need to re-measure)

0.25-point-wide bins, full 660-tile dataset, up to 9%:

```
0.00-0.25%  40   0.75-1.00%  48   1.50-1.75%  31   2.25-2.50%  19   3.00-3.25%  20
0.25-0.50%  23   1.00-1.25%  21   1.75-2.00%  21   2.50-2.75%  15   3.25-3.50%  17
0.50-0.75%  26   1.25-1.50%  27   2.00-2.25%  25   2.75-3.00%  25   3.50-3.75%  18
```

Density peaks around 0.75–1.00% then declines roughly monotonically (with noise, not a
clean gap) out past 9%, where the confirmed-animated cluster (grid 3.68%, hourglass ~5.2%,
radar ~7%, pulse ~33.7%) lives. Below 1.0%: 137 tiles (20.8%). Below 2.0%: 237 (35.9%).
Below 0.5%: 63 (9.5%). No consecutive-value gap anywhere under 6% exceeds ~0.08 points —
i.e., there is no structurally significant cliff in this metric; the 1.0% cut is a density-peak
+ prior-calibration argument, not a discovered cluster boundary, and that should be stated
plainly to whoever picks this up next.

## Wave 3 characterization

Every one of the 137 flagged tiles had its animation code read (keyframe amplitudes, JS/rAF
logic, cycle timing) and was sorted into one of three buckets:

| Category | Concepts gallery | Physics gallery | Total |
|---|---|---|---|
| `low-amplitude-candidate` — real fix candidate | 46 | 18 | **64** |
| `subtle-by-design` — leave alone | 34 | 3 | **37** |
| `other` — distinct, smaller defect | 31 | 5 | **36** |

`low-amplitude-candidate` is the majority as expected: continuously-running, correctly-coded
animations whose amplitude, stroke width, or moving-element size is simply too small against
the tile's full clip area to register.

**`other` breaks into two distinct sub-patterns, worth separating for a future session:**

1. **Phase-sampling misses (most of the 36):** the animation has real, often large amplitude,
   but it's a brief burst inside a long static hold/plateau in its cycle (e.g. `concept-glitch`'s
   corruption tear only occupies ~10% of a 4.2s cycle; `concept-microscope` holds static
   44–94% of a 9s cycle; `concept-testtube`, `concept-witch-hazel`, `concept-sprout`,
   `concept-mantis`, `concept-woodpecker`, `concept-peg-solitaire`, `concept-geyser`,
   `concept-besson-nephoscope`, `concept-terraform`, `physics-stern-gerlach`, and others follow
   this shape). These are **not** amplitude bugs — a two-frame 850ms sample can simply land in
   the quiet part of the cycle. Not recommended for amplitude-tuning fixes; if anything, a
   future measurement pass could re-sample these with a longer window before drawing
   conclusions.
2. **Zero/near-zero rendered consequence (genuine smaller defect, ~9 tiles):** the code
   animates a property that has little to no visible effect regardless of amplitude —
   `concept-funicular`'s pulley "rotates" but is a plain marking-free circle; `concept-fluidic-logic`'s
   core keyframe sets the same opacity (0.95) at every stop, a literal no-op; `concept-gunters-chain`
   animates `stroke-dashoffset` on a fully-solid `dasharray` (no gap to move); `physics-magnetic-reconnection`'s
   CSS animation targets a class that isn't present on any element in the markup; `physics-bernoulli-venturi`'s
   actual pressure-indicator columns are static divs while only decorative particles move;
   `concept-ansible-relay`'s "spin" rotates a perfectly symmetric filled circle; `concept-phonautograph`
   and `concept-tuning-fork-chronograph` both label a ~0.8px translate as a "rotation"/"revolution."
   These are structurally different from amplitude tuning — worth their own targeted look.

Full per-tile detail (score, gallery, category, and the one-line code finding) is in the
ranked table below.

## Ranked flagged list (lowest score first)

| Tag | Gallery | f30 | Category | Finding |
|---|---|---|---|---|
| concept-glitch | concepts | 0.000% | other | v2 RGB-split/corruption bursts only occur in brief 30-34% and 66-72% windows of a 4.2s steps(1) cycle, so most 850ms samples land in the long static hold between tears. |
| concept-lightning | concepts | 0.000% | other | storm-strike/storm-sheet keyframes hold opacity at 0 for ~40% of the 4.4s cycle then flash briefly at 41-49% and 75-77%; sample likely caught the dead zone. |
| concept-cursor-prompt | concepts | 0.000% | other | block cursor is a full opacity 1->0 on/off blink via steps(1) every 500ms (large amplitude), but the discrete single-frame flip is easily missed by an unlucky-phase 850ms sample. |
| concept-traffic-light | concepts | 0.000% | other | v6 lamp colors switch via steps(1) at fixed points in a 12s cycle (green 0-50%, amber 50-62.5%, red 62.5-100%); long steady color dwells dominate so most samples miss the instant transition. |
| concept-stratum-fault | concepts | 0.000% | low-amplitude-candidate | crust blocks shear translateY +-7px on ~41x60px sub-blocks and a seismic ripple scales 10px->50px, real continuous motion but modest pixel footprint relative to the full 118x102 tile. |
| concept-leyden-jar | concepts | 0.000% | other | spark discharge is a steps(1) 2.2s cycle where the flash is visible only ~94-97% of the period (~66ms); ~93% of the cycle is fully static so most samples land in the dead zone. |
| concept-crookes-tube | concepts | 0.000% | low-amplitude-candidate | electron beam gradient flickers opacity 0.85->1 continuously every 0.15s, a small delta on a translucent linear-gradient strip. |
| concept-fulgurite-glass | concepts | 0.000% | low-amplitude-candidate | glass-tube glow pulses opacity 0.6->1 with drop-shadow blur 6px->10px continuously but on thin dashed strokes with tiny rendered area; the lightning-bolt flash itself is a separate rare burst. |
| concept-hydraulic-ram | concepts | 0.000% | other | clack-valve/air-dome/jet animations hold static for ~75% of the 1.2s cycle then move briefly for the remaining ~25%, so most samples catch the static majority. |
| concept-adfgvx-cipher | concepts | 0.000% | low-amplitude-candidate | continuous stroke-dashoffset flow along thin conduit lines and a text-glow blur pulse (1px->4px) are real but produce a very small rendered-pixel delta. |
| physics-ising-model | physics | 0.000% | subtle-by-design | comment explicitly frames it as "thermal fluctuations," spins flickering opacity 1->0.35 against otherwise-stable ferromagnetic domains; intentional subtlety fits the depicted physics. |
| physics-cymatics-membrane | physics | 0.000% | low-amplitude-candidate | antinodal sector opacity pulses 0.1->0.6 on top of an already-low base fill-alpha (0.2), giving a faint rendered delta despite continuous animation over sizable quadrant areas. |
| concept-crepuscular-rays | concepts | 0.030% | subtle-by-design | god-ray beams continuously brighten/dim (opacity 0.6->1, brightness 0.9->1.3) with staggered delays; slow atmospheric drift is fitting subtlety for this light phenomenon. |
| concept-goethe-glass | concepts | 0.030% | subtle-by-design | spout water level rises via stroke-dashoffset over a slow 5s cycle, modeling the barometer's gradual response to air pressure — subtlety is the whole point of the instrument. |
| physics-helmholtz-resonator | physics | 0.036% | low-amplitude-candidate | air-plug bounces +-4px and the compliance ring scales 0.9-1.1, but the ring is stroke-only (fill:none) so the shape change barely alters rendered pixels. |
| concept-centrifuge | concepts | 0.050% | other | v2 rotor genuinely spins fast for ~70% of the 8s cycle, but the safety lid is closed over it near the start/end of the cycle; sample likely landed during a closed-lid dwell, missing the visible spin. |
| concept-traverse-board | concepts | 0.060% | low-amplitude-candidate | bone-peg glow animates on ~1px-radius circles with a near-identical color shift (#ffffff to #fffde7) and small blur change; real but too tiny to register. |
| concept-kettle-lake | concepts | 0.089% | subtle-by-design | depicts a melting glacial ice core shrinking and shimmering meltwater, explicitly framed as a slow melt process, appropriate to animate gently. |
| concept-geode-banding | concepts | 0.094% | low-amplitude-candidate | tiny amethyst crystal polygons (a few px) sparkle via color/blur change and the crust has glow-only shimmer (no shape change); both too small/faint to register meaningfully. |
| concept-campbell-stokes | concepts | 0.094% | subtle-by-design | solar focal burn point slowly drifts across the recording card over a 6s cycle, modeling the sunshine recorder's real slow daily sun-tracking burn trace. |
| concept-piggybank | concepts | 0.104% | other | Real coin-drop/wiggle/tail-spring/clink burst (rotate ±2.5deg, tail -70deg, coin translateY 32px) only fires ~20% of the 3.5s loop, so most random samples land in the idle body-only frame. |
| physics-mach-cone | physics | 0.117% | low-amplitude-candidate | Only animated element is the craft, jittering translateY ±0.5px at 0.15s; everything else (shock cone, diamonds) is static. |
| concept-funicular | concepts | 0.124% | other | Summit pulley "rotates" 360deg but is a plain marking-free circle so the spin is visually a no-op; the two tram cars do move ~80px along offset-path but are small (18x14) triangular shapes. |
| concept-coffee | concepts | 0.134% | subtle-by-design | Steam ribbons sway skewX ±7deg/translateY -7px/opacity 0.3-0.8 and a highlight sheen slides 18px, classic gentle wisping-steam design amplitude. |
| physics-light-cone | physics | 0.143% | low-amplitude-candidate | Worldline stroke-dashoffset draw and a photon dot moving cx/cy ~55px are real but confined to 1-2.5px-wide SVG strokes/dot in a 130x130 canvas, so changed area is tiny. |
| concept-onetime-pad | concepts | 0.154% | low-amplitude-candidate | Ember particles are r=0.8-1.2px dots flying 18px, and the other two animations are filter drop-shadow/stroke-color pulses only, negligible pixel footprint. |
| concept-piezoelectric-quartz | concepts | 0.154% | subtle-by-design | Electrometer needle swings rotate 0deg->26deg over 3s, a textbook slow-deflecting instrument-needle pattern; weight bobs only 2px. |
| concept-mantle-hotspot | concepts | 0.179% | subtle-by-design | Plume conduit and plate-boundary use dashoffset flow (thin dashed lines) plus a small scale 0.9->1.1 pulse, apt subtlety for a slow geologic upwelling process. |
| concept-kamal-navigator | concepts | 0.188% | low-amplitude-candidate | Card only bobs translateY 2px, cord change is stroke-color-only, and both sight beams just flow dashoffset -10 along thin static lines. |
| concept-speleothem-drip | concepts | 0.198% | subtle-by-design | Drop genuinely falls 30px with squash/stretch, but sits idle roughly 60% of the 2.2s cycle before/after the fall, mimicking an intermittent natural cave drip. |
| concept-wind-tunnel | concepts | 0.203% | low-amplitude-candidate | Streamline SVG shifts translateX only 4px, and vortex eddies (8px, dashed circles) rotate/scale/fade on tiny elements. |
| concept-pillow-lava | concepts | 0.203% | low-amplitude-candidate | Lobe scale pulses 0.9->1.08 (~18%), fissures are stroke-color/filter-glow only, and quench vapor is a thin dashoffset flow, all small-contrast changes. |
| concept-galton-board | concepts | 0.208% | low-amplitude-candidate | Beads genuinely fall ~58px through the pegboard but are only 3x3px dots, so the changed pixel area per frame is minute despite the real path motion. |
| concept-jackbox | concepts | 0.213% | other | Lid rotates -95deg and jack pops height 0->46px, large amplitude, but the pop sequence occupies only ~44% of the 5s loop, with the rest idle apart from a tiny 12px crank-arm spin. |
| concept-athanor-furnace | concepts | 0.213% | subtle-by-design | Continuous flame flicker (scaleY 0.9-1.1, skew ±2deg at 0.2s) and elixir bubble pulse (scale 0.8-1.15) read as intentional small-amplitude fire/bubbling-liquid effects. |
| concept-antlion-pit | concepts | 0.213% | low-amplitude-candidate | Sand grains are 2x2px dots sliding 36px, the ant is a 6x4px dot sliding down, and mandibles only scaleX to 0.4 briefly, all tiny-footprint elements. |
| physics-magnetic-dipole-force | physics | 0.224% | low-amplitude-candidate | Force vectors only shift translateX 2px with an opacity 0.6->1 fade on a 12px arrow; flux loops merely flow dashoffset -18 along thin dashed curves. |
| concept-camera-lucida | concepts | 0.228% | low-amplitude-candidate | Ray path dash-flows offset -6 (barely a dash-width) and the ghost sketch is a thin dashed outline fading opacity 0.3->1 with a 10% scale change, small footprint throughout. |
| physics-langmuir-probe | physics | 0.230% | low-amplitude-candidate | I-V curve just dash-flows offset -20 along a thin stroke, and the floating/plasma potential markers are opacity-only pulses on static dashed lines. |
| concept-assmann-psychrometer | concepts | 0.233% | low-amplitude-candidate | Fan impeller is an 8px cross rotating, airflow arrows are thin dashoffset-flow lines, and the wet-bulb wick change is fill-color/glow only, all small, thin-element changes. |
| concept-microscope | concepts | 0.263% | other | Turret/knob/mirror/stage all use mi2-* keyframes that hold static 44-94% of the 9s cycle with only brief ~2-4% transitions, so most sampled frames show no motion despite real amplitude (turret translateX -6px, knob rotate up to -70deg) during the burst. |
| concept-bubble-chamber | concepts | 0.288% | subtle-by-design | bub-expand scales 4 tiny 2-3.5px nucleation bubbles 0.4x->1.2x with opacity 0.3->1 continuously (staggered, no holds), genuinely animating but inherently small since it depicts microscopic bubble tracks. |
| concept-lilienthal-hang-glider | concepts | 0.293% | subtle-by-design | lg-soar-glide continuously translates the whole glider group -5px to 2px and rotates -8deg to 4deg over 3.8s ease-in-out alternate, a modest intentional soaring/banking motion. |
| concept-torricelli-barometer | concepts | 0.312% | subtle-by-design | Mercury column SVG height/y breathes from 38px/y22 to 44px/y16 (~16% change) over 4s continuous alternate, appropriately subtle for a barometric reading. |
| physics-coriolis-deflection | physics | 0.316% | other | The 8s full rotation is applied to a rotationally near-symmetric dashed circular ring (.spin-indicator), which has near-zero visual consequence; the higher-amplitude offset-path projectile travel is brief and fades in/out. |
| concept-lummer-gehrcke-plate | concepts | 0.337% | subtle-by-design | Continuous (no-hold) stroke-color/opacity pulses on the glancing-ray zigzag path and emergent beam lines depict a subtle optical glint/interference-fringe shimmer. |
| concept-bunsen-spectroscope | concepts | 0.342% | subtle-by-design | bs-flame-flicker continuously scales the flame path 0.92x-1.08x with color cycling blue->yellow->orange, a plausible small candle/burner flicker; refracted-ray and scale-beam are matching opacity pulses. |
| physics-magnetic-reconnection | physics | 0.347% | other | The .jet-arrow stroke-dashoffset animation (defined in CSS) targets no actual element in the markup (outflow paths lack the class), so it never renders; only a subtle opacity 0.6->1.0 pulse on the tiny current-sheet ellipse is actually live. |
| concept-witch-hazel | concepts | 0.352% | other | wh-valve rotation (±25deg) and the seed-shoot translate/scale burst are confined to roughly 65-78% of the 3s cycle; the rest of the cycle (~2s) holds completely static, so most sampled frames show no motion. |
| concept-sprout | concepts | 0.357% | other | The 7s cycle grows the stem/leaves/bud through 48% of the timeline then holds fully static (scaleY 1, opacity 1, no motion) for the 48-88% bloomed plateau (~2.8s), dominating most sample windows. |
| concept-hauy-cleavage | concepts | 0.362% | subtle-by-design | Continuous alternate opacity 0.9->0.3->0.9 on the stepped scalenohedron layers plus fill/stroke color glow on the primitive rhombohedron, a plausible slow crystal-growth-style shimmer. |
| concept-fitzroy-stormglass | concepts | 0.377% | subtle-by-design | sg-crystal-drift continuously translates the dendritic fern crystals -4px with ±2deg rotate and opacity 0.7->1 over 5s, fitting a slow camphor-crystal drift. |
| concept-wand | concepts | 0.392% | other | wand-flick holds the wand static at -38deg for 0-34% and 56-100% of the 4.6s cycle, with the actual ±14-22deg flick burst confined to a ~1s window, so most sampled frames catch the static held pose. |
| concept-subduction-zone | concepts | 0.397% | low-amplitude-candidate | Motion is continuous (no holds) but confined to thin stroke-dashoffset marching ants on narrow lines and 1-1.2px-radius fluid-rise circles scaling to ~1.4-2.4px, technically running but visually tiny. |
| concept-ember | concepts | 0.412% | subtle-by-design | ember-flicker continuously rotates the flame layers ±1.5-3deg and scales ~±7% at high frequency (0.3-0.52s), a plausible small candle/ember flicker amplitude. |
| concept-claude-glass | concepts | 0.422% | subtle-by-design | cg-tonal-shift continuously animates filter brightness 0.85->1.2 and sepia 0.8->0.3 across the whole reflected-landscape group over 3.5s, a slow convex-mirror tonal breathing effect. |
| concept-gramophone | concepts | 0.431% | low-amplitude-candidate | The platter itself never rotates (gramc-spin only pulses filter brightness 1->1.2); actual spin is a 3px label dot orbiting a tiny 46x8px ellipse, and needle-jitter/horn-vibe are sub-pixel (0.5px/0.6deg). |
| concept-rubens-tube | concepts | 0.446% | subtle-by-design | rbn-flicker continuously scales all 15 flame divs ±8% (scaleY 0.92-1.08) in sync, a plausible flame-flicker amplitude depicting the standing acoustic wave. |
| concept-wood-echelette-grating | concepts | 0.446% | subtle-by-design | Continuous stroke-color/opacity shimmer (0.6->1) across the 10-facet sawtooth group and stroke-width 1.2->2 glow on the blazed-order ray depict a subtle specular glint. |
| concept-davis-backstaff | concepts | 0.476% | low-amplitude-candidate | Only motion is continuous stroke-dashoffset marching ants (-12/-10) on thin ~1-1.2px sight/shadow-ray lines, technically always running but minimal visual footprint. |
| concept-carrom-board | concepts | 0.481% | other | Queen-pocket (33px diagonal move) and striker-flick (24px travel) keyframes hold static 60-70% of each 3s cycle, so most sampled windows land on the frozen phase. |
| physics-total-internal-reflection | physics | 0.485% | subtle-by-design | Evanescent waves translateY 0->-1px with opacity 0.3->0.9, fittingly subtle for a decaying near-field effect. |
| concept-mothership | concepts | 0.491% | other | Rich scene but dominated by an 8s duty-cycled superlaser beam/impact flash active only ~20% of the loop, plus rim-lights/core that are just tiny 3-14px dots pulsing opacity, most sampled windows catch the quiet ambient phase. |
| concept-pitot-prandtl-tube | concepts | 0.501% | subtle-by-design | Manometer liquid columns shift only ±1.5px, an intentionally needle/gauge-like subtlety for a differential-pressure instrument. |
| concept-dines-meteorograph | concepts | 0.501% | subtle-by-design | Balloon sways ±3deg/3px, stylus rocks ±5deg, bimetal strip scales ±10%, all small, continuous, fitting a delicate airborne recording instrument. |
| physics-van-der-pol-oscillator | physics | 0.520% | low-amplitude-candidate | Limit-cycle dash-offset flow and a 2.5px orbiting dot (opacity 0.6->1, scale 0.9->1.15) are continuously running but cover very little rendered area. |
| concept-cryopod | concepts | 0.521% | low-amplitude-candidate | Continuous but small: sleeper breathe scale 1->1.12, frost/LED/temp opacity pulses 0.25-1 on small elements, vent puffs mostly duty-cycled to a brief window. |
| concept-spagyric-calcination | concepts | 0.541% | low-amplitude-candidate | Dash-flow conduits and a quintessence orb pulsing scale 0.85->1.15 are continuous but confined to tiny (3-3.5px radius) circles. |
| concept-mantis | concepts | 0.546% | other | Huge femur/tibia swings (-108deg to -15deg) and the fly snatch only occur in a ~2% window of the 7s cycle; the rest is near-static aside from a small continuous ±8deg antenna wiggle. |
| concept-synaptic-vesicle | concepts | 0.555% | low-amplitude-candidate | Continuous vesicle fuse-pulse (scaleY 0.7->1.2) and 3px neurotransmitter dots diffusing 14px are always running but occupy minimal pixel area. |
| concept-chronometer-detent | concepts | 0.565% | low-amplitude-candidate | Escape wheel steps 360deg and balance roller swings ±35deg continuously, but both are thin/small (9-16px radius) so little area actually changes per frame. |
| concept-zoopraxiscope-projector | concepts | 0.575% | low-amplitude-candidate | Glass disk and shutter disk rotate continuously (6s/3s) but are thin strokes/small dots (r=1.5-19) contributing little changed area. |
| concept-fusee-chain | concepts | 0.575% | subtle-by-design | Mainspring barrel rotates a full turn only every 8s, an intentionally slow, gradual mechanical winding motion. |
| concept-aqua-regia | concepts | 0.580% | low-amplitude-candidate | Bubbles rise 24px and gold bar scales 30% continuously, but the moving shapes themselves are tiny (1.3-1.8px dots, 14x8px bar) so little area changes. |
| concept-laue-diffraction | concepts | 0.580% | low-amplitude-candidate | Diffraction spot opacity pulses (0.2-0.95) and beam radius 1.8->2.8px run continuously but on sub-3px dots, plus a near-invisible 12s lattice rotation at opacity 0.3. |
| concept-fluidic-logic | concepts | 0.605% | other | The core Coanda jet-switch animation (fld-coanda-switch) sets opacity: 0.95 at every keyframe (0%, 40%, 50%, 90%, 100%), a no-op animation with zero visual change despite running. |
| concept-bell-graphophone | concepts | 0.610% | low-amplitude-candidate | Cylinder bob (0.5px), sapphire float (0.7px), and groove glint opacity are all continuous but sub-pixel/thin-line scale; only the hearing-tube sway (±3deg) is moderate. |
| physics-zeeman-effect | physics | 0.612% | low-amplitude-candidate | Split spectral lines only shimmer opacity 0.65->1 with a glow filter, no positional change, just a glow pulse on thin 2px lines. |
| physics-bloch-oscillations | physics | 0.617% | other | The electron dot (r=3) traverses a large 80px arc via animated cx/cy, but its footprint is a tiny 6px circle so very few pixels differ between sampled frames despite the large spatial excursion. |
| physics-hydraulic-jump | physics | 0.628% | low-amplitude-candidate | Jump-roller wobbles only 1.5px/4% scale and streamline dash-offsets flow continuously but are thin dashed strokes contributing little changed area. |
| concept-nicol-prism | concepts | 0.660% | low-amplitude-candidate | Only stroke color/opacity keyframes pulse on ~1px-wide SVG lines (incident, o-ray, e-ray, balsam cut); no transform/position change at all. |
| concept-jacobs-ladder | concepts | 0.689% | other | Arc-climb keyframes swing bottom 40px->92px and width 14px->44px (large positional amplitude) but the spark is a thin ~6px-tall sliver against a dark box, so its swept pixel footprint is tiny relative to the 118x102 canvas despite the real displacement. |
| concept-saussure-hygrometer | concepts | 0.699% | subtle-by-design | Thin brass index needle sweeps ±35deg over a slow 4s cycle plus a 3px hair-strand stretch and counterweight drop, a classic slow-drifting instrument-needle design. |
| concept-wheatstone-abc | concepts | 0.704% | other | Pointer needle uses steps(6,end) over 6s, holding each 72deg position static for ~1s before an instantaneous jump, so most 850ms sample windows land inside a static hold rather than the jump itself. |
| concept-viking-sunstone | concepts | 0.714% | low-amplitude-candidate | Crystal rotates ±18deg/scales 0.95-1.05 and pol-ring rotates 360deg over 10s, but crystal is only 32px and semi-transparent (0.25-0.7 alpha gradient) against a dark background, muting the rendered contrast delta. |
| physics-snells-law-refraction | physics | 0.714% | low-amplitude-candidate | A 6px photon dot travels the full ray path (25,25)->(88,114) via translate, but its tiny footprint against the 130x130 canvas keeps the changed-pixel count low despite the real distance traveled. |
| physics-quantum-harmonic-oscillator | physics | 0.719% | low-amplitude-candidate | Only opacity pulses (0.65->1 on wavefunctions, 0.6->0.95 on energy lines) with staggered delays; no positional or shape change at all. |
| physics-kelvin-helmholtz | physics | 0.730% | low-amplitude-candidate | Billow-wave uses a marching dash-offset (-22) and stream rects shimmer opacity 0.75->1; both are thin-stroke/low-contrast changes over a large but mostly static background. |
| concept-playfair-matrix | concepts | 0.739% | low-amplitude-candidate | Plain/cipher node circles scale 0.9->1.2 but radius is only ~2.5px so absolute swept area is minimal; the rect-box pulse only shifts stroke color/glow. |
| physics-fermi-surface | physics | 0.755% | low-amplitude-candidate | Fermi contour uses a marching dash-offset (-16) and sym-pt dots pulse opacity 0.6->1; both are thin-stroke/small-dot changes on an otherwise static k-space diagram. |
| concept-aneroid-barometer | concepts | 0.759% | subtle-by-design | Needle sweeps a full -42deg to +45deg arc, lever tilts ±15deg, and capsule scales 0.75-1.25, all over a slow 5s cycle, a deliberate full-range barometer gauge sweep. |
| concept-mutoscope-reel | concepts | 0.764% | low-amplitude-candidate | Card-flip, crank rotation, and viewing-hood flash all act on tiny sub-elements (12x8 card, thin ~12px-radius crank arm, small triangular glow) within a 76x72 viewBox. |
| physics-stern-gerlach | physics | 0.765% | other | Beam-draw uses stroke-dashoffset 40->0 with ease-out timing over 2.2s, so the reveal completes in roughly the first third of the cycle and then holds static (fully drawn) until an abrupt reset, making most sample windows catch no change. |
| physics-minkowski-diagram | physics | 0.770% | low-amplitude-candidate | Boosted-axis opacity pulses 0.65->1 and simultaneity/hyperbola lines use marching dash-offsets (-14/-16); all are thin-stroke, low-contrast changes. |
| concept-tuning-fork-chronograph | concepts | 0.774% | other | The revolving/advancing chronograph drum only translates 0.8px despite its name implying real rotation, giving near-zero visible motion; the fork-tine vibration is a genuinely tiny ±4% scaleX at 12.5Hz. |
| concept-butter-churn | concepts | 0.779% | low-amplitude-candidate | Dasher plunger swings 22px (-10px to 12px) but the staff/head are only 3-16px wide, and butter-grain splashes are 4px dots, so the actual swept pixel area stays small. |
| concept-spinthariscope | concepts | 0.784% | subtle-by-design | Scintillation flashes are intentionally brief, tiny (3-4px), staggered dots meant to depict individual radioactive decay events, appropriately understated for the phenomenon. |
| concept-yardang-erosion | concepts | 0.784% | subtle-by-design | Wind-streamline marching-ants and tiny saltating sand-grain dots depict a slow aeolian erosion process, matching the gradual geological process design pattern. |
| concept-tiddlywinks | concepts | 0.798% | low-amplitude-candidate | The flying wink leaps a real ~30px arc with rotation, but it's only a 7px dot, so its swept pixel footprint against the 96x76 stage stays small. |
| concept-testtube | concepts | 0.803% | other | Liquid-color keyframes hold a flat color for ~80% of the 9s cycle (transitions confined to brief 8-18%/90-97% windows) and fizz bubbles are visibility-gated to a narrow window, so most sample pairs land during static holds despite substantial color amplitude. |
| concept-peaucellier-linkage | concepts | 0.803% | low-amplitude-candidate | only tiny 4-6px tracer/rhombus dots move (up to ~44px range) while the main SVG linkage bars/rhombus stay static, so visible changed area is minuscule. |
| concept-dendrochronology | concepts | 0.803% | low-amplitude-candidate | scanner cursor is a 2px-wide line sweeping 8px->78px over 4s, real displacement but negligible pixel footprint. |
| concept-pneumatic-tube | concepts | 0.813% | low-amplitude-candidate | 22x10px capsule travels the full offset-path with fade in/out, but tiny object size against a large static tube diagram keeps changed-pixel area low. |
| concept-pachinko | concepts | 0.813% | low-amplitude-candidate | 5px ball bounces along an offset-path and 4x8px tulip petals rotate 0->-25deg, both real motion but tiny elements against a static playfield. |
| concept-siphon-recorder | concepts | 0.813% | subtle-by-design | hair-fine capillary siphon needle rotates -8deg to 10deg and coil twists +-5deg, a deliberately delicate vibrating-instrument-needle effect. |
| concept-marconi-detector | concepts | 0.823% | low-amplitude-candidate | pulleys spin 360deg/4s and wire-loop dash flows, but all motion is confined to thin 1-1.4px strokes and a 2.2px spark dot. |
| concept-haunted-mirror | concepts | 0.828% | other | apparition/eye/crack/sheen effect has large opacity and transform swings but holds steady for long plateaus (e.g. figure fixed 46-66%, eyes fixed 50-70% of a 9s loop), so an 850ms sample can land entirely within a static hold. |
| physics-hohmann-transfer | physics | 0.847% | low-amplitude-candidate | planets and transfer craft continuously traverse full orbital offset-paths, but the moving dots are only 6-8px so visible changed area stays tiny. |
| concept-tide-clock | concepts | 0.848% | subtle-by-design | classic rotating clock/instrument hand sweeping 360deg over a slow 8s cycle, textbook subtle needle motion. |
| concept-woodpecker | concepts | 0.858% | other | rapid -16deg hammer jabs are compressed into brief windows of a 5s cycle separated by long static listening holds (e.g. 56-88% held at fixed rotation), so sampling often lands in a static stretch. |
| concept-crova-actinometer | concepts | 0.863% | subtle-by-design | thermometer mercury stem gradually rises (SVG y/height 34/16->22/28) alongside slow disk-glow and ray-opacity pulses, a gradual instrument-reading effect. |
| physics-roche-limit | physics | 0.867% | low-amplitude-candidate | moon travels a continuous 5s offset-path with real scale/rotate tidal-stretch deformation, but the object is only 10px and rings are thin dashed strokes. |
| physics-acoustic-levitation | physics | 0.867% | subtle-by-design | trapped droplets jitter only +-1.5px, appropriately tiny motion depicting a particle held stable at a pressure node. |
| concept-planimeter | concepts | 0.873% | low-amplitude-candidate | polar and tracer arms swing 30-45deg and a pin traces a full offset-path, but arms are only 2px-wide lines so changed pixel area is small. |
| concept-peg-solitaire | concepts | 0.873% | other | only one 6px jump-peg animates a 3-keyframe leap with long static holds (0-30% and 60-100% of a 3s loop) while all 32 other pegs never move. |
| concept-herons-fountain | concepts | 0.878% | low-amplitude-candidate | jet height and spray arc pulse continuously with real amplitude change, but both are thin (2px jet, dotted arc) so total changed area is small. |
| concept-fibonacci | concepts | 0.883% | low-amplitude-candidate | golden-spiral cells wake via border-color/opacity changes but animate only 1-2px outlines and near-transparent fills, so pixel delta per frame is minor. |
| concept-phonautograph | concepts | 0.883% | other | the cylinder's labeled rotation is actually a translateY of just 0.8px (not a real spin), so the primary described motion has almost no visual consequence. |
| concept-wheatstone-cryptograph | concepts | 0.888% | subtle-by-design | two thin clock-style hands continuously rotate at slightly different rates (8s vs 7.7s) to depict differential-gear cipher advance, a deliberate slow-dial-needle effect. |
| physics-bernoulli-venturi | physics | 0.888% | other | manometer fluid columns (the actual pressure indicator) are static height divs with no animation; only decorative 4x2px flow particles move, so the concept's key visual never changes. |
| concept-punchcutting-matrix | concepts | 0.893% | low-amplitude-candidate | steel punch only translates 8px vertically and the impact-spark flash/copper-letter glow are brief accents on small SVG shapes within the tile. |
| concept-ansible-relay | concepts | 0.913% | other | the qubit orb's dominant animation is a 360deg rotate of a perfectly symmetric filled circle (zero rendered effect); the only real motion is a tiny scale 0.9->1.15 pulse and a fast 0.7->1.0 opacity flicker on the dashed beam line. |
| concept-geyser | concepts | 0.922% | other | the plume's scaleY 0.05->1.1 eruption is a large, genuinely dramatic keyframe amplitude, but it only occupies a short slice of a slow 4.2s ease-in-out cycle, so a random 850ms sample window usually lands in the near-flat quiescent phase. |
| concept-arbor-dianae | concepts | 0.927% | subtle-by-design | dendritic silver-tree branches draw in via stroke-dashoffset and crystal buds gently pulse scale 0.6->1.4, a slow mercury-amalgam crystal-growth process where restrained motion fits the phenomenon. |
| concept-langley-bolometer | concepts | 0.942% | low-amplitude-candidate | IR flux and platinum-strip animations are just opacity/stroke-width/color pulses on thin lines, and the galvanometer mirror only swings ±18deg on a tiny needle graphic. |
| concept-raven | concepts | 0.947% | subtle-by-design | body breathe is scaleY 1->1.03, with occasional brief head-look/blink/caw/feather-fall accents spread across a 9s cycle, a deliberately life-like idle creature animation, mostly still by design. |
| concept-angstrom-spectrum | concepts | 0.952% | low-amplitude-candidate | grid and Balmer-series lines only pulse opacity/stroke-width/color (e.g. opacity 0.5->0.9) with no positional movement of any element. |
| physics-time-dilation | physics | 0.954% | low-amplitude-candidate | the only moving elements are tiny 2.5-3px-radius light-pulse dots traveling along static mirror/path guides, so real displacement covers very few pixels. |
| concept-telegraph-sounder | concepts | 0.967% | low-amplitude-candidate | lever arm rotates only 6deg and the acoustic sound-ring expands from a small r=4 base circle, keeping the affected area tiny. |
| concept-rotary-spark-gap | concepts | 0.972% | low-amplitude-candidate | the disc genuinely spins 360deg/1.5s but its visible marks are 1.5px-radius stud dots, and the spark-arc flashes are 2px line segments. |
| concept-kelvin-dropper | concepts | 0.977% | low-amplitude-candidate | falling water droplets are only 3x5px despite traveling ~38px down a narrow 6px stream tube, keeping the changed pixel footprint small. |
| concept-gunters-chain | concepts | 0.977% | other | the chain-link path has stroke-dasharray 24 0 (fully solid, no gap), so animating stroke-dashoffset produces zero visible change; only the tally-tag ±8deg swing and a 2px handle jiggle are real but negligible. |
| concept-invar-baseline | concepts | 0.977% | subtle-by-design | catenary sag shifts only ~1.5px and weights bob ~1.2px, fittingly near-invisible motion for a display about Invar's near-zero (1.2x10^-6/K) thermal expansion baseline wire. |
| concept-besson-nephoscope | concepts | 0.977% | other | the comb bar's ±15deg sweep and cloud's ~45px drift are sizable amplitudes, but they're spread across slow 5-6s ease/linear cycles with long hold/fade portions, so brief samples often miss the active transition. |
| concept-piano | concepts | 0.982% | low-amplitude-candidate | each key only depresses translateY 3px with a brief color/glow flash, and floating note glyphs are small fading text that moves only ~22px before vanishing. |
| physics-doppler-rotational | physics | 0.985% | low-amplitude-candidate | only a small r=3 buzzer dot and its velocity arrow orbit (radius ~28px); the main wavefront diagram (the blue/red-shift illustration) is entirely static. |
| concept-terraform | concepts | 0.992% | other | large designed amplitude (a light band sweeping the full planet width, blooms fading 0->1, clouds appearing) is real, but it's spread over a slow 12s cycle with long static hold phases, so short sample windows often catch a quiescent moment. |

## Confirmation

All 549 `concepts/gallery` and all 111 `physics/gallery` concepts were measured — 660 total,
zero measurement errors, nothing pre-filtered or skipped. All 137 tiles that scored below the
1.0% threshold were characterized (137/137, no gaps). No manifest, concept file, or render
code was modified in this session.
