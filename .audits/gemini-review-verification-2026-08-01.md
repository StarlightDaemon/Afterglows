# Verification of Gemini Concept Review — 2026-08-01

Source under review: `.audits/gemini-concepts-review-2026-07-29.md` (the prompt's paste
placeholder was left unfilled; this file was used as the report).

Baseline read directly from `concepts/gallery/manifest.js`: **212 concepts, 29 categories**.
Both figures in the report's preamble are accurate.

---

## Wave 0 — Split candidates

### Ember (`ember-concept.js`, `concept-ember`, category `nature`, unversioned)
**Report claim ("static, glowing singular Ember"): WRONG.**

Actual render — 84×100 frame:
- Three stacked teardrop flame layers (`.outer` 42px, `.mid` 28px, `.core` 15px), each with
  `border-radius: 50% 4% 50% 50%` rotated ~-45° so the sharp corner points up.
- All three run `ember-flicker` at different rates (0.52s / 0.38s / 0.30s) with alternating
  and alternate-reverse directions — rotate -45°→-42° plus a `scale(1.07, 0.94)` squash.
  This is an actively flickering flame, not a static glow.
- Three `.ember-spark` particles on `ember-spark-rise` (2.1s, staggered −0.3s / −1.0s / −1.6s),
  each rising 34px with a per-spark `--spark-drift` (−10px / +7px / −3px), scaling to 0.4 and
  fading out. Rising, drifting, fading sparks.
- A pulsing elliptical base glow (`ember-glow`, 1.6s).

**Consequence:** the report's proposed **Campfire** ("flickering procedural flames with sparks
climbing upward and fading") is a description of Ember as it already exists. Not a gap.
Additionally `candle-concept.js` has a flame that leans, gutters and smokes; `bunsen`,
`cauldron` and `volcano` cover further flame/heat territory. Flame is a saturated area.

### Constellation (`constellation-concept.js`, versioned v1–v4, default v4, category `space`)
**Report claim: PARTIALLY ACCURATE — the v3/v4 half is right, the v1/v2 half is not.**

- **v1** — `.stars`, a 100×100 box with six 4px `.star-dot`s at inline-styled positions, each
  running `twinkle` (2s, staggered 0.3s). **There are no connecting lines in v1.** The report
  describes v1 and v2 together as "dots connected by lines"; that applies to v2 only.
- **v2** — `.constellation-refined`, a 104px circular vignette disc (layered radial gradients,
  inset glow) containing an SVG with six dashed `.constellation-line` segments animating
  `stroke-dashoffset` and seven `.constellation-node` divs (three `major`). The whole
  `.constellation-network` group drifts on a 7s loop. Natural night-sky reading. Correct.
- **v3** — `.constellation-chart`, a **square** 104px framed panel: crosshair background
  gradients, two concentric guide circles (46px / 82px), a 4-line `.constellation-chart-grid`
  (two vertical at 24px insets, two horizontal), seven SVG lines, eight nodes, and two
  `.constellation-chart-label` spans reading literally **"chart"** (top-left) and **"a-17"**
  (bottom-right). Technical/HUD reading. Correct.
- **v4** — identical markup to v3 plus the `twinkle-more` class (brighter nodes/lines/labels,
  faster node animation) **and** a `.constellation-chart-flares` block of four flare dots on
  `chart-flare` (2.1s). **The "mapping flares" the report attributes to v3 and v4 exist only
  in v4.**

Net: the drift the report identifies is real and substantial — v1/v2 and v3/v4 share a file
and a name but not a visual language (round vignette vs. square gridded panel with telemetry
labels). Two factual corrections: v1 has no lines, and flares are v4-only.

### Microscope (`microscope-concept.js`, `concept-microscope`, category `bio`, unversioned)
**Report claim: CONFIRMED ACCURATE.**

Single 116×96 frame renders both subjects simultaneously:
- **Hardware:** `.mi-base`, `.mi-arm` (rotated −8°), `.mi-tube` (rotated 24°), `.mi-turret`
  with two `.mi-obj` objectives, `.mi-stage` + `.mi-slide` (both on the 9s `mi-nudge`),
  `.mi-mirror` (rocking −14°↔−24° on 9s), `.mi-shaft` light cone, and `.mi-knob` running the
  9s `mi-knob` hunt (0° → −70° → +40° → −15° → settle → +25° → +10°).
- **Inset field:** `.mi-view`, a 42px circular bordered field pinned top-right, containing
  three `.mi-cell` blobs. Each cell runs two animations at once — `mi-cell` drift/rotate at
  its own duration (6s / 7.4s / 6.8s) and the shared 9s `mi-focus`, which animates
  `filter: blur()` from 2.2px through 2.6px down to 0 at 46–64%, then back to 1.6px at 68%
  and 0.2px after. That blur curve is keyed to the knob curve and to the stage nudge.
- Plus a `.mi-mag` label reading `×400`.

Both the hardware and the focus-blur cell view are present and the focus mechanic is genuinely
knob-synchronised. The report's description is accurate down to the mirror.

### Audio Circle (`audio-circle-concept.js`, versioned v1/v2, default v2, category `retro`)
**Report claim: CONFIRMED ACCURATE.**

- **v1** — `.audio-c`, a 50px disc (radial-gradient fill, 2px accent border, outer + inset
  glow) pulsing `scale(1)↔scale(1.1)` on a 1s loop, with two pseudo-element rings (70px, 90px,
  0.3s offset) expanding and fading on `audio-ring`. "Simple pulsing ring" is fair.
- **v2** — `.ac2`, 104px: a dashed guide ring, **sixteen** `.ac2-spoke` wrappers at exact
  22.5° increments (k0–k15), each holding one `.ac2-bar` that scales on `ac2-dance` with a
  per-bar `--dur` (1.10s–1.55s) and `--ph` phase offset, `transform-origin: 50% 100%`;
  a 22px `.ac2-hub` speaker cone on `ac2-beat` (1.3s, scale 1.22 → 0.96); and two
  `.ac2-ripple` rings offset by 0.65s expanding to scale 2.4.

Every specific in the claim — 16 bars, radial, distinct phases, beating hub, ripples — checks
out.

**Caveat the report does not raise:** if v2 is extracted, what remains as "Audio Circle" (v1)
is a pulsing dot with two expanding rings — nearly identical in mechanic to `sonar-concept.js`
**v1** (`.sonar-basic`, two rings expanding from centre) and to `sonar` v2's ping rings. The
split leaves behind a concept with a duplication problem of its own.

---

## Wave 1 — Whale Song / Equalizer overlap

**Assessment: the overlap is worse than the report's two items suggest — the bar/spectrum
space is already occupied three times over in the shipped gallery.**

Existing frequency/amplitude-bar renders:
- `pulse-concept.js` — v1 three bars, v2 **eight** vertical bars in a flex row, staggered
  `animation-delay` 0s–0.7s, animating height 18%→100%. This is already, mechanically, an
  equalizer.
- `signal-concept.js` — v1 four bars; v2 five strength bars climbing with a dropout.
- `spirit-box-concept.js` — `.sb-grille` bars that jump when a voice breaks through.
- `audio-circle-concept.js` v2 — the 16-bar radial version.
- `alien-signal-concept.js` — a **spectrogram waterfall**: eight dash-pattern frequency columns
  drifting downward at per-column rates, plus a bright narrowband spike and a `1420.4 MHz`
  readout. This is the closest existing thing to "visualized frequency spectrum" and the report
  does not mention it at all.

Also relevant: `sonar-concept.js` v2 is **not** "hardware-based" as the report asserts — it is
a dark circular field with a transducer dot and three expanding acoustic ping rings. That is
already an abstract underwater-acoustics render, which erodes the claimed distance between
Sonar and Whale Song.

Would the two end up the same mechanic in different skins? For the proposals as written,
**yes** — both are "bars/columns whose magnitude animates to imply audio", and both would also
duplicate Pulse v2 and Alien Signal.

**Recommendation: build only one, and it is not the Equalizer.**
- **Reject "Equalizer / Spectrum Analyzer" as a new concept.** A linear bar spectrum already
  ships as Pulse v2. (This does not settle the *Audio Circle split* itself — see summary.)
- **Whale Song may proceed only under a named constraint:** it must render **swept-frequency
  call contours** — continuous curved traces whose frequency glides over time (a whale
  glissando), attenuating and blurring as they travel outward through the water column — with
  **no vertical amplitude bars** and **no downward-scrolling column waterfall**. Those two
  exclusions are what keep it off Pulse v2 and off Alien Signal respectively. Without that
  constraint it is a third copy of an existing mechanic.

---

## Wave 2 — Gap ideas already covered under another name

Checked all 212 manifest labels; no exact name collisions exist for any of the nine. Mechanic
collisions found:

| Gap idea | Verdict |
|---|---|
| **Campfire** | **Duplicate.** Ember already flickers with rising, drifting, fading sparks (Wave 0). Candle/Bunsen/Cauldron/Volcano add further flame coverage. |
| **Subway Train** | **Duplicate of an existing sub-element.** `train-crossing-concept.js` already renders `.tc-train` — four `.tc-car` silhouettes with `repeating-linear-gradient` lit-window strips, plus a `::after` speed-streak block, sweeping 130px → −214px across the frame. Lighted car windows rushing past as a streak is the exact proposed mechanic; it is already animating inside Train Crossing. |
| **Airplane Engine / Propeller** | **High-risk duplicate.** `deskfan-concept.js` renders four petal blades on a fast rotation behind a spoked cage ring with a dedicated `.df-blur` overlay — front-on spinning blades with motion blur. `anemometer-concept.js` adds a second variable-rate rotor-with-blur. A radial engine face would be a reskin of Desk Fan's blade assembly. |
| **Radio Transmission** | **High-risk duplicate.** `signal-concept.js` v2 is already "an antenna hunting for signal": a tripod-based mast with `.sg2-wave` arcs expanding from the mast tip. Concentric waves emitted from a broadcast mast is that concept. |
| **Cassette Deck** | **Partial duplicate.** `tape-reels-concept.js` is not "mainframe" as the report assumes — it is a 96×60 rounded rectangular deck body with two 28px hubs side by side (right one `animation-direction: reverse`) and a small centre `.tape-window`. That is already a cassette-shaped dual-hub transport. Only the visible spooling ribbon and playhead would be new. |
| **Topographic Map** | **Clear.** No contour-line terrain render exists. `moire-concept.js` (concentric ring gratings) is visually adjacent but is an interference-fringe mechanic, not elevation contours; `terraform-concept.js` is a planet disc greening. Soft adjacency only. |
| **Virus / Pathogen** | **Clear.** `cell-cluster-concept.js` is three smooth drifting orbs; `petri-concept.js` is blooming colonies on agar. Neither has a spiked/receptor surface. |
| **Bone / Joint Structure** | **Clear.** `skull-concept.js` is the only skeletal render (cranium/sockets/nose/jaw with ember eyes, occult framing). A rotating articulated joint or spine segment is mechanically distinct. Soft adjacency only. |
| **Whale Song / Acoustics** | **Conflicted** — see Wave 1. Overlaps Alien Signal's spectrogram waterfall, Pulse v2's bar meter, and Sonar v2's underwater ring field. |

---

## Summary

**Verified and ready to hand to a build session**
- **Constellation split** (extract v3/v4 into a separate "Star Chart" / "Navigation Map").
  The drift is real and confirmed in source. Two factual corrections to carry forward: v1 has
  no connecting lines, and the flares are v4-only.
- **Microscope split** (extract the inset cell field + focus-blur into a full-frame concept).
  Claim confirmed in full; the file genuinely renders two subjects at once.
- **Topographic Map** — no existing coverage.
- **Virus / Pathogen** — no existing coverage.
- **Bone / Joint Structure** — no existing coverage.

**Not ready**
- **Campfire** — *duplicate.* Ember is an active flickering flame with rising sparks; the
  report's premise about it is factually wrong.
- **Subway Train** — *duplicate.* The lit-window streak already animates inside Train Crossing.
- **Radio Transmission** — *duplicate.* Signal v2 is already a mast radiating expanding waves.
- **Airplane Engine / Propeller** — *duplicate.* Reskin of Desk Fan's blur-blade assembly
  (and Anemometer's rotor).
- **Cassette Deck** — *overclaimed.* Tape Reels is already a dual-hub deck body, not a
  mainframe; only the ribbon path and playhead would be new. Viable only if re-scoped to
  those additions, which is thin for a new slot.
- **Whale Song / Acoustics** — *needs a decision.* Proceed only with the named constraint in
  Wave 1 (swept-frequency call contours; no amplitude bars, no scrolling column waterfall).
- **Audio Circle split** — *needs a decision, not a duplicate.* The v1/v2 divergence is
  confirmed exactly as described, so the split is defensible on its own. But (a) the proposed
  name "Equalizer / Spectrum Analyzer" collides with Pulse v2, which is already a bar
  equalizer — "Radial Spectrum" separates cleanly; and (b) the report does not account for
  what is left behind: standalone v1 is a pulsing dot with expanding rings, near-identical to
  Sonar v1. Decide the residual-v1 question before splitting.

**On the reviewing agent's reliability:** claims verified against source came out 2 confirmed
(Microscope, Audio Circle), 1 partial (Constellation), 1 wrong (Ember). The errors cluster in
statements about concepts the report did *not* read — Ember, Tape Reels, Sonar and Train
Crossing were each characterised confidently from the manifest label alone, and each
characterisation was wrong. The deep-read findings held up; the from-the-label inferences did
not.
