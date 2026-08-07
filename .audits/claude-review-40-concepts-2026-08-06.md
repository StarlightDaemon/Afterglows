# Re-review: 40 Newly Implemented Concepts (2026-08-06)

Content-quality pass over the 40 concept files Gemini implemented from
`.audits/gemini-concepts-expansion-2026-08-06.md`. Structural correctness (manifest
entries, scope discipline, syntax, no duplicates) was verified separately and passed
clean — see the implementation session notes. This pass checks whether each file's
code actually delivers what its own proposal promised, and whether it holds to house
style. Every file was read by two independent reviewers (a direct 4-way split done
here, plus a second independent 4-way split from an earlier orchestration pass);
where the two disagreed, the file was read a third time directly to resolve it.

## High severity — delivers a different (or contradictory) mechanic than promised

**`alchemical-transmutation-concept.js`** — corroborated by three independent reads.
The proposal specified a lead ingot in a transmutation circle undergoing a solid →
liquid → crystal phase transition. The shipped file is a boiling-flask + serpentine
condenser coil + drip + collector-beaker apparatus — structurally near-identical to
the existing `distillation-concept.js` (flame → boil → coil → drip → receiver) and
to `cauldron-concept.js`'s fire/boil/bubble/steam group. No phase transition,
`border-radius`/`clip-path` morph, or crystal geometry appears anywhere. This is
exactly the "unidirectional particle-stream / boiling-drip apparatus" pattern Part 1
of the audit flagged as already overused, which this proposal was specifically
designed to avoid — the implementation missed the entire point of the proposal.

**`broom-concept.js`** — confirmed by direct read. The proposal's whole distinguishing
point was airborne banked flight with "no ground contact... anywhere in the
animation." The shipped file's own top comment reads "sweeping in a lively cadence:
hopping and tilting **across floorboards**... kicking up... dust motes **in its
wake**," and includes an explicit `.brm-floor` element labeled "Floorboards
baseline." This is a grounded floor-sweeping broom, not a flying one — the opposite
of what made the concept distinct from an ordinary broom prop in the first place.

## Moderate — real, verifiable gaps against the proposal

- **`gramophone-concept.js`** — the record disc (`.gram-platter`) never rotates; its
  `gram-spin` keyframes only pulse a `drop-shadow`. The "rotating vinyl record" is
  the concept's own headline feature.
- **`manta-concept.js`** — wing base and tip segments share identical keyframe timing
  with no `animation-delay` between them, so it reads as synchronized flapping, not
  the promised phase-shifted traveling wave.
- **`octopus-concept.js`** — the three chromatophore patches share one animation and
  pulse in lockstep — exactly the "uniform opacity/brightness pulse" the proposal
  said to avoid. (Arm independence, the other half of the proposal, is done well.)
- **`violin-bow-concept.js`** — the bow only wobbles vertically at a fixed horizontal
  position; it never slides lengthwise along the string (confirmed twice, once with
  exact pixel bounds).
- **`etch-a-sketch-concept.js`** — the line segments are static and fully visible from
  frame 0; only a dot travels over an already-complete path. The core "coordinate
  line drawing" claim isn't delivered (confirmed twice).
- **`marbles-run-concept.js`** — the funnel segment is a straight interpolated move
  with a scale dip, no spiral/rotational motion (confirmed twice); no bell-trigger or
  collection-bowl element exists.
- **`embroidery-hoop-concept.js`** — real CSS bug, confirmed twice with identical
  diagnosis: `emb-petal-glow`'s `rotate(var(--rot, 0deg))` runs continuously and
  overrides each petal's static fan-rotation, but `--rot` is never defined anywhere
  — all four petals render unrotated, losing the floral fan layout.
- **`chattering-teeth-concept.js`** — confirmed by direct read: no `translateX`
  anywhere in the file (`cht-waddle` only does `translateY`/`rotate`). The promised
  horizontal shuffle is entirely absent — the same failure mode as `windup-robot`,
  which this concept was specifically supposed to differ from.
- **`vise-anvil-concept.js`** — no hammer element exists; sparks and deformation come
  from the vise jaw clamping, not a strike (confirmed twice).
- **`theremin-concept.js`** — the hand's animated bounding box overlaps the antenna's
  box at the animation's midpoint (exact coordinates checked), contradicting the
  "never touches" premise.
- **`macrame-concept.js`** — the diagonal cord strands are fully static; no
  crossing/cinching motion is depicted, only the knot blobs scale/brighten in place.
- **`weaverbird-concept.js`** — the nest cross-hatch is a static background at full
  density from mount; the proposal's "mesh density visibly grows" beat is absent.

## Minor — small mismatches, low priority

- `pinking-shears-concept.js` — top/bottom blade `transform-origin` points don't
  match (10px offset), so the scissor action doesn't hinge on a shared pivot; teeth
  are a dashed border rather than a literal zigzag edge.
- `tatting-shuttle-concept.js` — the three picots pulse in unison rather than
  staggering into place radially.
- `kaleidoscope-concept.js` — a static per-petal `transform` is dead code, always
  overridden by the running animation; harmless.
- `tesseract-concept.js` — comment overclaims "8 struts" / true 3D; only 4 flat
  struts exist and no `perspective`/`preserve-3d` is used. Core inner/outer
  scale-inversion effect itself works and is genuinely distinct from `cube-concept.js`.
- `vacuum-radio-concept.js` — grille vibration (1 of 3 promised elements) is absent;
  the tube glow and magic-eye tuning are done well.
- `foosball-concept.js` — the ball's position resets abruptly each loop (a visible
  "teleport" from goal back to mid-field) rather than fading/continuity-matching.
- `murmuration-concept.js` — the downward swoop beat is present but subtle (±8px in
  a 76px container).
- `astral-projection-concept.js` — "motes radiate" is one expanding ring, not
  discrete particles.
- `nautilus-concept.js`, `accordion-concept.js` — very minor cosmetic notes (weak
  tentacle counter-phase; bellows board slide slightly overlaps its own footprint).

## Confirmed clean — delivers the mechanic as proposed

`bathysphere-concept.js`, `hydrothermal-vent-concept.js`, `tidepool-concept.js`,
`tympani-concept.js`, `scrying-pool-concept.js`, `drop-spindle-concept.js`,
`falcon-stoop-concept.js`, `albatross-concept.js`, `drawbridge-concept.js`,
`centrifugal-governor-concept.js`, `poppet-doll-concept.js`, `flamingos-concept.js`,
`marimba-concept.js` (minor nit only — bars vary by height not width, still reads).

Two headline "must get this right" checks both passed cleanly, independently
confirmed by two reviews each:
- **`newtons-cradle-concept.js`** — the three middle balls carry zero animation and
  stay genuinely stationary; only the end balls swing, phase-locked to strike at the
  correct instants. Correct momentum-through-stationary-media.
- **`geneva-drive-concept.js`** — genuinely intermittent: holds 0–70%, steps 90°
  across 70–85%, holds again to 100%. Correctly distinct from `gears-concept.js`'s
  continuous rotation.

## Summary

2 high-severity (wrong mechanic entirely), 12 moderate (real, verifiable gaps against
the proposal), 9 minor. 17 of 40 files need no changes. Nothing here is a scope
violation — every file is structurally sound (shadow DOM, guard, tag, sizing, no
external deps, no duplicate mechanics vs. the existing 200) — these are all
"delivers less than promised," not "broken" or "off-spec on structure."

## Fixes applied (2026-08-06/07)

All 2 high-severity and 12 moderate findings were fixed directly (by hand, not a
fresh Gemini pass) and independently re-verified against each specific finding —
14/14 confirmed to actually resolve the issue, zero syntax errors, zero new
regressions. The 9 minor findings were left as-is (out of the agreed fix scope).

- **`alchemical-transmutation-concept.js`** — fully rebuilt: real lead ingot →
  molten sphere → gold star `clip-path` morph (matching 10-vertex polygons on both
  ends so the morph interpolates smoothly, not a jump-cut), 6 pulsing energy-channel
  spokes, zero trace of the old flask/coil/drip/beaker apparatus.
- **`broom-concept.js`** — fully rebuilt: no floor element, no sweeping; a genuine
  `brm-bank-flight` S-curve translation across the frame, dust motes now trailing
  from the moving rig as a spark contrail.
- **`gramophone-concept.js`** — added an off-center orbiting marker on the platter
  rim (the disc itself is a flat ellipse, so a literal `rotate()` would look wrong;
  the marker sweeping the rim is what makes "it's spinning" readable).
- **`manta-concept.js`** — added a 0.5s `animation-delay` between wing base and tip
  segments, producing a genuine phase-lagged traveling wave.
- **`octopus-concept.js`** — replaced the single shared chromatophore layer with
  three independently-timed patches.
- **`violin-bow-concept.js`** — added horizontal slide to the bow stroke.
- **`etch-a-sketch-concept.js`** — the five line segments now grow from zero,
  timed to the stylus's existing travel windows, instead of being pre-drawn.
- **`marbles-run-concept.js`** — the funnel segment now genuinely spirals (rotation
  accumulates through two turns, then holds constant — no snap-back glitch); added
  a bell-trigger element and a collection bowl.
- **`embroidery-hoop-concept.js`** — fixed the real bug: each petal now declares
  the `--rot` custom property the always-on glow animation was reading (and
  clobbering to 0deg because it was never defined).
- **`chattering-teeth-concept.js`** — added a second animation (on `margin-left`,
  alongside the existing `transform`-based hop) so the toy actually shuffles
  horizontally instead of hopping in place.
- **`vise-anvil-concept.js`** — added the missing hammer, swinging down to strike
  in sync with the existing spark burst and billet glow.
- **`theremin-concept.js`** — shrank the hand's closest approach so its bounding
  box no longer overlaps the antenna's.
- **`macrame-concept.js`** — the diagonal cords now swing through a shallower angle
  at each knot's cinch point, giving real crossing motion.
- **`weaverbird-concept.js`** — added a slow-cycle density overlay so the nest
  mesh visibly thickens over time.

One cosmetic note from the verification pass: `broom-concept.js`'s rig transiently
extends a few pixels past the host bounds at its sharpest bank angles; `overflow:
hidden` on the host absorbs this cleanly (same safety margin other concepts in the
gallery already rely on), so it's not a visible defect.
