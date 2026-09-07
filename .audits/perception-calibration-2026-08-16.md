# Perception Calibration — 2026-08-16

Measurement-and-calibration session. No manifest, concept file, or render code was modified.
This session resumed an interrupted predecessor (killed mid-run by an API usage limit during a
13-agent classification fan-out) and salvaged its completed work rather than redoing it.

## Session salvage (Wave 0 triage)

Recovered intact from the interrupted session's scratchpad (`69b73679…/scratchpad`):

| Artifact | Status | Reused? |
|---|---|---|
| 30-tile comparison table (`wave0_table.json`) | Complete — all 30 rows with operator rating, fresh f30, blind code-judge prediction | Yes, verbatim |
| All three blind code-judge outputs (`judge_g1/g2/g3.json`) | Complete — 10 tiles each, including the g2 group (tiles 11–20) whose completion was uncertain | Yes |
| Full 309-tile f30 sweep (`sweep309.json`, "instance B" background task) | Complete and valid — 309 unique tags, zero missing/invalid measurements; f30 median 3.52%, p25 2.15%, p75 6.56%, max 38.22% | Yes — no re-measurement performed |
| Calibrated classification rubric (`rubric.txt`) | Complete — the Wave 1 product, derived from the 30 ground-truth ratings | Yes |
| Wave-2 classification (13 parallel batch groups) | **Nothing survived.** No batch group wrote any output file before the limit hit; results were only in agent return messages, which died with the session | Redone from scratch (this session, in waves of 3 concurrent agents, output saved to disk per group) |

Also verified: `git status` clean (no code modified, nothing committed by the interrupted
session), and leftover processes from the dead session were killed (two headless Chrome
instances on debug ports 9460/9461 with their child processes, plus two `http-server`
instances on ports 3100/3199 rooted in this repo).

## The 30-tile ground-truth comparison

Operator rated 30 tiles on a 4-point scale (glance test). `f30` = freshly measured
continuous-playback pixel-diff score (% pixels with channel delta ≥ 30 across an ~850ms
sample). `judge` = blind code-reading prediction made *without* seeing operator ratings.

| # | Tag | Operator | f30 % | Blind judge | Animation (from code) |
|---|---|---|---|---|---|
| 1 | fraunhofer-lines | No animation | 4.49 | Little | opacity/glow only on static geometry; rainbow rect pulses 0.85→1 |
| 2 | bunsen-spectroscope | Little | 0.81 | Partially | small flame scales ±8% w/ hue cycle; rest static |
| 3 | rowland-concave-grating | No animation | 3.45 | Little | opacity/color pulses on thin strokes; zero positional motion |
| 4 | angstrom-spectrum | Little | 3.12 | Little | thin-line opacity shimmer; no position change |
| 5 | langley-bolometer | Partially | 1.64 | Fully | galvo mirror ±18° rock, beam tip sweeps ~8-9 units (post-fix) |
| 6 | lummer-gehrcke-plate | Little | 1.04 | Little | hairline zigzag shimmer + 1-2 unit fringe stretch |
| 7 | wood-echelette-grating | Little | 3.88 | Little | beam stroke-width flare; 1.5-unit stylus bob; facet hue shift |
| 8 | campbell-stokes | Little | 2.01 | Fully | bright ember dot (r~2-2.6) sweeps 28 units + flashing |
| 9 | fitzroy-stormglass | Little | 1.41 | Partially | fern group ~12x26 drifts 4 units + sway |
| 10 | torricelli-barometer | No animation | 0.48 | Partially | mercury top edge rises/falls 6 units in 4px tube over 4s |
| 11 | richard-barograph | Little | 1.98 | Partially | bellows breathe ~5px, pen arm ±8°, dash march |
| 12 | assmann-psychrometer | Little | 4.52 | Fully | fan 360°/1.2s + marching airflow dashes (post-fix) |
| 13 | robinson-anemometer | **Fully** | 4.57 | Fully | 40px filled cup rotor spins 360°/2s |
| 14 | besson-nephoscope | Partially | 3.32 | Fully | comb ±15° rock + 30px cloud drifts 45px |
| 15 | dines-meteorograph | Little | 5.50 | Partially | whole 36x58 assembly sways ~3px ±3° |
| 16 | saussure-hygrometer | Partially | 1.03 | Fully | 24px red needle sweeps ±35° over ivory scale |
| 17 | crova-actinometer | Partially | 1.48 | Partially | glow pulses + 1px thermometer thread rises 12px |
| 18 | laue-diffraction | Partially | 4.76 | Partially | 20 tiny spots flash 0.1→1, beam r pulse (post-fix) |
| 19 | bragg-spectrometer | Partially | 2.11 | Fully | 34px detector arm ±30° sweep + crystal ±15° |
| 20 | wollaston-goniometer | Partially | 1.29 | Fully | 48px graduated wheel rotates 360°/7s |
| 21 | hauy-cleavage | Little | 2.74 | Partially | opacity-only envelope fade 0.9↔0.3; zero positional motion |
| 22 | nicol-prism | Little | 2.80 | Partially | rays throb in place, no positional motion (post-fix) |
| 23 | debye-scherrer | Little | 2.25 | Partially | ring opacity breathe; capillary rotation is a no-op |
| 24 | conoscopic-interference | Little | 10.37 | Fully | near-black isogyre cross ±25° over bright rings |
| 25 | fedorov-stage | Partially | 2.13 | Fully | ring 360°/8s + gimbal ±20° + section ±45° |
| 26 | stereographic-wulff-net | Partially | 2.33 | Partially | dashed overlay ±35°/8s; dots + dashes crawl |
| 27 | piezoelectric-quartz | No animation | 0.69 | Partially | 2px weight bob, 11px needle 26° (~5px tip arc) |
| 28 | meridian-transit-circle | Partially | 3.80 | Fully | tube 60° swing/4.4s (~25px arcs) + star drifts 16px |
| 29 | herschel-forty-foot | Little | 4.27 | Fully | tube 30° seesaw/4.2s (~23px sweep); dark fill, 0.8px outline |
| 30 | fraunhofer-dorpat-refractor | Little | 3.39 | Fully | tube 60° slew/3.8s + governor 360°/1s |

## What predicts human perception (Wave 1)

Computed on the 30 ground-truth rows:

- **f30 does not predict perception.** Spearman rank correlation between f30 and the
  operator's ordinal rating: **0.045** — statistically indistinguishable from zero.
  Category means overlap completely (No animation: mean f30 2.28%, range 0.48–4.49;
  Little: 3.34%, range 0.81–**10.37**; Partially: 2.39%, range 1.03–4.76). The single
  best f30 threshold classifier for "Partially+" scores 19/30 = 63%, exactly the trivial
  majority-class base rate. The pixel-diff metric measures *changed pixel area*, which is
  dominated by intensity effects (opacity/glow/color) that humans discount.
- **Naive code reading over-predicts.** The blind judges matched the operator on only
  7/30 exact (16 more off by one), and every single miss was an over-prediction (23 over,
  0 under). Humans are systematically harsher than a plain reading of the animation code.
- **What does predict:** geometric motion (translate/rotate/scale) of a discrete,
  bright-or-filled element on the concept's main subject. The judges' structured feature
  "subject geometric motion + non-low contrast" catches **11/11 tiles rated Partially or
  Fully (100% recall)** with 10 false positives (precision 52%). The false positives are
  resolved by amplitude/size/contrast/duty-cycle refinements: tiny movers, few-px drifts,
  dark/low-contrast movers, and intensity-only change of any size all cap at Little; sub-2px
  motion, no-ops, and <6px slow sweeps of narrow elements read as No animation.
- The refined standard is codified in the calibration rubric (recovered from the interrupted
  session as `rubric.txt`; reproduced in the Method note below). It was **fit in-sample on
  these same 30 tiles**, so its in-sample fit is not evidence of validity; its out-of-sample
  performance is untested.

**Confidence:** the directional finding (geometric motion of visible filled elements is what
humans perceive; intensity-only change and f30 area are discounted) is **high confidence** —
the over-prediction asymmetry (23 vs 0) and near-zero f30 correlation are large, consistent
effects even at n=30. The exact category boundaries (px thresholds, duty-cycle caps) are
**low-to-moderate confidence**: single operator, single 2-3s glance protocol, n=30,
boundaries tuned in-sample.

## The fix-commit discrepancy (Wave 0.5)

The interrupted session claimed none of the 30 rated tiles showed fix commits despite several
being in the original sweep's 137-tile flagged list. That claim was **wrong**. Evidence from
`git log` (fix batches 1–7, commits `c9e0d02`…`c7d538f`) against the sweep's flagged list:

17 of the 30 rated tiles were in the 137-flagged list. Their disposition:

| Disposition | Tiles | Verdict |
|---|---|---|
| `subtle-by-design` — deliberately excluded from fixing | bunsen-spectroscope, lummer-gehrcke-plate, wood-echelette-grating, campbell-stokes, fitzroy-stormglass, torricelli-barometer, dines-meteorograph, saussure-hygrometer, crova-actinometer, hauy-cleavage, piezoelectric-quartz (11) | Correct exclusion per the sweep's own categorization |
| `other` (phase-sampling miss) — excluded per sweep's explicit recommendation | besson-nephoscope (1) | Correct exclusion — and vindicated: operator rated it "Partially animated" |
| `low-amplitude-candidate` — **actually fixed** | assmann-psychrometer (batch 2), laue-diffraction (batch 3), nicol-prism (batch 3), langley-bolometer (batch 4) (4) | The "no fix commits" claim was false; these four files are in the fix commits |
| `low-amplitude-candidate` — **genuine gap, never fixed** | angstrom-spectrum (1) | Flagged as a real fix candidate but appears in no fix batch |

Repo-wide, the fix campaign touched 68 files: 59 of the 64 `low-amplitude-candidate` tiles
(batches 1–6) plus all 9 `zero-rendered-consequence` defects from the `other` category
(batch 7). **Five low-amplitude candidates were never fixed**: `concept-stratum-fault`,
`concept-geode-banding`, `concept-fibonacci`, `concept-angstrom-spectrum`, `concept-piano`.
That is the real gap — 5/64 candidates dropped, one of which (angstrom-spectrum) happened to
land in the operator's 30-tile sample.

Post-fix operator ratings of the four fixed tiles are also informative: langley-bolometer and
laue-diffraction reached "Partially animated," but assmann-psychrometer and nicol-prism still
only rate "Little animation" — both fixes leaned on dash-marching and in-place throbbing,
i.e. intensity-dominant techniques the Wave 1 finding says humans discount.

## Wave 2 — Full 309-tile classification under the calibrated rubric

All 309 tiles in the tracked universe (279 previously-unrated + 30 ground-truth) are now classified: the 75
recovered from the two interrupted sessions were verified readable and reused verbatim; the remaining 204
(groups 4–13 in full, plus group 14's first four entries — `zeppelin-lattice-girder`, `sikorsky-grand-four`,
`gutenberg-press`, `linotype-elevator`) were freshly classified this session by reading each concept's actual
animation code against the calibrated rubric (geometric motion of a visible, bright-or-filled element on the
main subject; intensity-only change and duty-cycled bursts discounted or capped). For the 30 ground-truth
tiles, the operator's own rating is used directly (it is more authoritative than any code-prediction).

Two recurring non-obvious findings from the fresh pass, beyond the rubric itself:
- **3D squash-rotation as motion**: `rotateX`/`rotateY` without a `perspective` renders as a squash-and-recover
  cycle, not a 3D spin (`edison-tinfoil`, `manometric-flame`) — genuine geometric motion, not a no-op.
  `thaumatrope` (ground-truth Fully) uses the same trick.
- **Dead/orphaned CSS**: `emerald-tablet`'s `.et-sun-moon` rotation animation targets a class never applied in
  the markup (zero effect); `columnar-basalt`'s `.cb-cap` transition is likewise never applied. Both still
  read as Little/no-op regardless, since the rest of each tile is intensity-only.

### The 5 aliasing-flagged tiles, re-evaluated

The original sweep flagged these five as `low-amplitude-candidate`; the fix session (batch 1–7) investigated
using f30 pixel-diff percentage and left all five unfixed as "confirmed healthy" aliasing false positives.
That verdict relied on the same f30 metric this report's Wave 1 finding showed has ~zero correlation with
human perception (Spearman 0.045). Re-read against the geometric-motion rubric instead of f30:

| Tile | Old f30-based verdict | New rubric verdict | Why |
|---|---|---|---|
| `concept-stratum-fault` | healthy (aliasing) | **Little animation** | Two large dark-filled crust blocks shear only 7px each; genuine but low-contrast/narrow-amplitude motion, not a defect-free no-op |
| `concept-geode-banding` | healthy (aliasing) | **Little animation** | Every animated element is a pure color/glow/drop-shadow pulse; zero transforms anywhere in the file |
| `concept-fibonacci` | healthy (aliasing) | **Little animation** | The spiral-tracing illusion is achieved entirely via border-color/opacity sequencing across six static cells — no transform in the file |
| `concept-angstrom-spectrum` | healthy (aliasing) | **Little animation** | Matches the operator's own ground-truth rating exactly; grid ticks and Balmer lines are pure intensity pulses |
| `concept-piano` | healthy (aliasing) | **Partially animated** | Four colored note glyphs rise 28px, staggered so one is essentially always in motion — a real, near-continuous geometric sweep the f30-based check missed |

Four of five confirm "Little animation" — not further defects requiring a fix, but also not the operator's
"healthy, ignore" framing; they are genuinely subtle by the calibrated standard, consistent with how the rest
of the intensity-only population reads. `concept-piano` is the one genuine surprise: its note-glyph animation
is real geometric motion that f30 apparently under-weighted (small glyphs, low pixel count) — it reads as
Partially animated, not merely "aliasing."

`concept-fibonacci` and `concept-piano` fall outside the tracked 309-tile Wave-2 universe (present in the
original 137-flagged sweep but never assigned to `sweep309`/sub-groups); their re-classifications are reported
above but excluded from the 309-tile tally below to keep that count clean.

### Category counts, all 309 tiles

| Category | Count | Share |
|---|---|---|
| Fully animated | 6 | 1.9% |
| Partially animated | 149 | 48.2% |
| Little animation | 146 | 47.2% |
| No animation | 8 | 2.6% |

**Fully animated (6):** aeolipile, crookes-radiometer, euler-disk, robinson-anemometer\*, thaumatrope, whirligig
— all fast (≤3s), continuous rotation/squash of a large, bright, filled element on the main subject.
(\*ground-truth operator rating; the only Fully in the original 30-tile sample.)

### Compared against the original sweep and the fix campaign

Cross-referencing the 309-tile tally against `flagged137.json` (the original low-motion sweep) and
`fixed68.json` (batches 1–7) — restricted to the concepts-gallery subset that overlaps the tracked 309
universe (111 of 137 flagged, 45 of 68 fixed; the rest fall outside this session's tracked set and are out of
scope here):

- **Of the 111 originally-flagged tiles in scope:** 34 now read Partially/Fully animated (genuinely resolved
  by amplitude standards, not just f30), 54 still read Little/No animation. Some of the 54 were flagged
  `other`/`subtle-by-design` and deliberately never touched; the rest are `low-amplitude-candidate` tiles the
  fix batches did address but whose fixes leaned on techniques (dash-marching, color/glow pulses, in-place
  scale) the calibrated rubric discounts.
- **Of the 45 fixed tiles (batches 1–7) in scope:** only 20 (44%) now read Partially/Fully animated — the
  fix demonstrably worked by human-perception standards. The other 25 (56%) still read Little animation
  despite the fix commit, e.g. `assmann-psychrometer`, `nicol-prism`, `crookes-tube`, `kelvin-dropper`,
  `phonautograph`, `tuning-fork-chronograph`, `gunters-chain`, `ansible-relay`, `fluidic-logic`,
  `telegraph-sounder`, `bell-graphophone`, `aqua-regia`, `camera-lucida`, `davis-backstaff`, `spagyric-calcination`,
  `subduction-zone`, `synaptic-vesicle`, `playfair-matrix`, `tiddlywinks`, `traverse-board`, `wind-tunnel`,
  `pillow-lava`, `fulgurite-glass`, `kamal-navigator`, `onetime-pad`. This is the clearest confirmation yet of
  the Wave 1 finding: many of the batch fixes amplified dash-marches, glow pulses, or in-place color/scale
  changes — real code changes, measurably higher f30 — that still don't register as geometric motion to a
  human glance.

### Full sorted list (all 309 tiles)

Source: `code-predicted` = this session's code-level classification against the calibrated rubric;
`GT (operator)` = the operator's actual glance-test rating from the 30-tile ground-truth sample (used as-is,
not re-predicted).

| # | Tile | Predicted | Source |
|---|---|---|---|
| 1 | aeolipile | Fully animated | code-predicted |
| 2 | crookes-radiometer | Fully animated | code-predicted |
| 3 | euler-disk | Fully animated | code-predicted |
| 4 | robinson-anemometer | Fully animated | GT (operator) |
| 5 | thaumatrope | Fully animated | code-predicted |
| 6 | whirligig | Fully animated | code-predicted |
| 7 | adfgvx-cipher | Partially animated | code-predicted |
| 8 | alcubierre-bubble | Partially animated | code-predicted |
| 9 | anaphoric-clock | Partially animated | code-predicted |
| 10 | anchor-recoil | Partially animated | code-predicted |
| 11 | aneroid-barometer | Partially animated | code-predicted |
| 12 | anorthoscope-distort | Partially animated | code-predicted |
| 13 | antikythera | Partially animated | code-predicted |
| 14 | antlion-pit | Partially animated | code-predicted |
| 15 | astrolabe | Partially animated | code-predicted |
| 16 | balance-syphon | Partially animated | code-predicted |
| 17 | ball-lightning | Partially animated | code-predicted |
| 18 | barycenter-binary | Partially animated | code-predicted |
| 19 | bat-echolocation | Partially animated | code-predicted |
| 20 | baudot-distributor | Partially animated | code-predicted |
| 21 | besson-nephoscope | Partially animated | GT (operator) |
| 22 | bimetallic-coil | Partially animated | code-predicted |
| 23 | borda-repeating-circle | Partially animated | code-predicted |
| 24 | bragg-spectrometer | Partially animated | GT (operator) |
| 25 | bubble-chamber | Partially animated | code-predicted |
| 26 | bullroarer | Partially animated | code-predicted |
| 27 | butter-churn | Partially animated | code-predicted |
| 28 | cable-car-grip | Partially animated | code-predicted |
| 29 | caliper | Partially animated | code-predicted |
| 30 | calliope | Partially animated | code-predicted |
| 31 | cardan-grille | Partially animated | code-predicted |
| 32 | carrom-board | Partially animated | code-predicted |
| 33 | cash-carrier | Partially animated | code-predicted |
| 34 | cayley-governable-glider | Partially animated | code-predicted |
| 35 | chip-log | Partially animated | code-predicted |
| 36 | chromatography | Partially animated | code-predicted |
| 37 | chronometer-detent | Partially animated | code-predicted |
| 38 | clepsydra-clock | Partially animated | code-predicted |
| 39 | coelostat-mirror | Partially animated | code-predicted |
| 40 | columbian-eagle-press | Partially animated | code-predicted |
| 41 | cribbage-board | Partially animated | code-predicted |
| 42 | crinoline-cage | Partially animated | code-predicted |
| 43 | cross-staff | Partially animated | code-predicted |
| 44 | crova-actinometer | Partially animated | GT (operator) |
| 45 | cuckoo-clock | Partially animated | code-predicted |
| 46 | cylinder-escapement | Partially animated | code-predicted |
| 47 | dendrochronology | Partially animated | code-predicted |
| 48 | dioptra-level | Partially animated | code-predicted |
| 49 | dipping-bird | Partially animated | code-predicted |
| 50 | dowsing-rods | Partially animated | code-predicted |
| 51 | duplex-escapement | Partially animated | code-predicted |
| 52 | edison-tinfoil | Partially animated | code-predicted |
| 53 | eiffel-aero-tunnel | Partially animated | code-predicted |
| 54 | escapement-deadbeat | Partially animated | code-predicted |
| 55 | feather-shuttlecock | Partially animated | code-predicted |
| 56 | fedorov-stage | Partially animated | GT (operator) |
| 57 | ferrofluid | Partially animated | code-predicted |
| 58 | filar-micrometer | Partially animated | code-predicted |
| 59 | fluting-iron | Partially animated | code-predicted |
| 60 | fresnel-lens | Partially animated | code-predicted |
| 61 | funicular | Partially animated | code-predicted |
| 62 | galton-board | Partially animated | code-predicted |
| 63 | gecko-setae | Partially animated | code-predicted |
| 64 | geyser | Partially animated | code-predicted |
| 65 | giffard-steam-airship | Partially animated | code-predicted |
| 66 | grasshopper-escapement | Partially animated | code-predicted |
| 67 | gridiron-pendulum | Partially animated | code-predicted |
| 68 | guilloche-rose-engine | Partially animated | code-predicted |
| 69 | gutenberg-press | Partially animated | code-predicted |
| 70 | hadley-octant | Partially animated | code-predicted |
| 71 | harmonograph | Partially animated | code-predicted |
| 72 | heliostat | Partially animated | code-predicted |
| 73 | herons-fountain | Partially animated | code-predicted |
| 74 | hexaflexagon | Partially animated | code-predicted |
| 75 | hoopoe-crest | Partially animated | code-predicted |
| 76 | hughes-telegraph | Partially animated | code-predicted |
| 77 | intaglio-copperplate | Partially animated | code-predicted |
| 78 | jacobs-ladder | Partially animated | code-predicted |
| 79 | jacobs-staff | Partially animated | code-predicted |
| 80 | jacquard-loom | Partially animated | code-predicted |
| 81 | jansen-linkage | Partially animated | code-predicted |
| 82 | kalliroscope | Partially animated | code-predicted |
| 83 | langley-aerodrome | Partially animated | code-predicted |
| 84 | langley-bolometer | Partially animated | GT (operator) |
| 85 | laue-diffraction | Partially animated | GT (operator) |
| 86 | lead-sounding | Partially animated | code-predicted |
| 87 | lilienthal-hang-glider | Partially animated | code-predicted |
| 88 | linotype-elevator | Partially animated | code-predicted |
| 89 | lock-gate | Partially animated | code-predicted |
| 90 | maelstrom-vortex | Partially animated | code-predicted |
| 91 | manometric-flame | Partially animated | code-predicted |
| 92 | marconi-detector | Partially animated | code-predicted |
| 93 | matter-synthesizer | Partially animated | code-predicted |
| 94 | meridian-transit-circle | Partially animated | GT (operator) |
| 95 | mural-quadrant | Partially animated | code-predicted |
| 96 | mutoscope-reel | Partially animated | code-predicted |
| 97 | nocturnal-dial | Partially animated | code-predicted |
| 98 | origami-crane | Partially animated | code-predicted |
| 99 | pachinko | Partially animated | code-predicted |
| 100 | pantograph | Partially animated | code-predicted |
| 101 | peaucellier-linkage | Partially animated | code-predicted |
| 102 | pelican-pouch | Partially animated | code-predicted |
| 103 | pelorus-dial | Partially animated | code-predicted |
| 104 | peristaltic-pump | Partially animated | code-predicted |
| 105 | phantasmagoria | Partially animated | code-predicted |
| 106 | phenakistiscope-disk | Partially animated | code-predicted |
| 107 | planchette | Partially animated | code-predicted |
| 108 | plane-table-alidade | Partially animated | code-predicted |
| 109 | planimeter | Partially animated | code-predicted |
| 110 | pneumatic-tube | Partially animated | code-predicted |
| 111 | poulsen-telegraphone | Partially animated | code-predicted |
| 112 | praxinoscope-drum | Partially animated | code-predicted |
| 113 | psychograph | Partially animated | code-predicted |
| 114 | punchcutting-matrix | Partially animated | code-predicted |
| 115 | pyriform-egg | Partially animated | code-predicted |
| 116 | pythagorean-monochord | Partially animated | code-predicted |
| 117 | ramsden-theodolite | Partially animated | code-predicted |
| 118 | reuleaux-rotor | Partially animated | code-predicted |
| 119 | ribbon-flip-blocks | Partially animated | code-predicted |
| 120 | rigid-heddle | Partially animated | code-predicted |
| 121 | rotary-spark-gap | Partially animated | code-predicted |
| 122 | saussure-hygrometer | Partially animated | GT (operator) |
| 123 | seiche-oscillation | Partially animated | code-predicted |
| 124 | sextant | Partially animated | code-predicted |
| 125 | sikorsky-grand-four | Partially animated | code-predicted |
| 126 | singing-bowl | Partially animated | code-predicted |
| 127 | siphon-recorder | Partially animated | code-predicted |
| 128 | soil-liquefaction | Partially animated | code-predicted |
| 129 | solenoid-engine | Partially animated | code-predicted |
| 130 | spectroheliograph | Partially animated | code-predicted |
| 131 | spinthariscope | Partially animated | code-predicted |
| 132 | stanhope-toggle | Partially animated | code-predicted |
| 133 | station-pointer | Partially animated | code-predicted |
| 134 | stereographic-wulff-net | Partially animated | GT (operator) |
| 135 | stirling-engine | Partially animated | code-predicted |
| 136 | stroboscope | Partially animated | code-predicted |
| 137 | strowger-switch | Partially animated | code-predicted |
| 138 | tellurion | Partially animated | code-predicted |
| 139 | tide-clock | Partially animated | code-predicted |
| 140 | torquetum-equatorial | Partially animated | code-predicted |
| 141 | tourbillon | Partially animated | code-predicted |
| 142 | trapjaw-strike | Partially animated | code-predicted |
| 143 | treadwheel-crane | Partially animated | code-predicted |
| 144 | trip-hammer | Partially animated | code-predicted |
| 145 | verge-foliot | Partially animated | code-predicted |
| 146 | vigenere-tabula | Partially animated | code-predicted |
| 147 | viking-sunstone | Partially animated | code-predicted |
| 148 | volvelle | Partially animated | code-predicted |
| 149 | water-wheel | Partially animated | code-predicted |
| 150 | wheatstone-abc | Partially animated | code-predicted |
| 151 | wheatstone-cryptograph | Partially animated | code-predicted |
| 152 | will-o-wisp | Partially animated | code-predicted |
| 153 | wollaston-goniometer | Partially animated | GT (operator) |
| 154 | woodblock-kento | Partially animated | code-predicted |
| 155 | zoopraxiscope-projector | Partially animated | code-predicted |
| 156 | aeolian-harp | Little animation | code-predicted |
| 157 | airlock-cycle | Little animation | code-predicted |
| 158 | alberti-disk | Little animation | code-predicted |
| 159 | aludel-sublimer | Little animation | code-predicted |
| 160 | angstrom-spectrum | Little animation | GT (operator) |
| 161 | ansible-relay | Little animation | code-predicted |
| 162 | aqua-regia | Little animation | code-predicted |
| 163 | arago-spot | Little animation | code-predicted |
| 164 | arbor-dianae | Little animation | code-predicted |
| 165 | armillary-sphere | Little animation | code-predicted |
| 166 | assmann-psychrometer | Little animation | GT (operator) |
| 167 | athanor-furnace | Little animation | code-predicted |
| 168 | azoth-seal | Little animation | code-predicted |
| 169 | bacteriophage | Little animation | code-predicted |
| 170 | balneum-mariae | Little animation | code-predicted |
| 171 | barchan-dune | Little animation | code-predicted |
| 172 | bell-graphophone | Little animation | code-predicted |
| 173 | bioluminescence | Little animation | code-predicted |
| 174 | bismuth-crystal | Little animation | code-predicted |
| 175 | blink-comparator | Little animation | code-predicted |
| 176 | bobbin-lace | Little animation | code-predicted |
| 177 | bunsen-spectroscope | Little animation | GT (operator) |
| 178 | calcite-birefringence | Little animation | code-predicted |
| 179 | camera-lucida | Little animation | code-predicted |
| 180 | campbell-stokes | Little animation | GT (operator) |
| 181 | carding-drum | Little animation | code-predicted |
| 182 | cartesian-diver | Little animation | code-predicted |
| 183 | chappe-semaphore | Little animation | code-predicted |
| 184 | chrysalis | Little animation | code-predicted |
| 185 | claude-glass | Little animation | code-predicted |
| 186 | cloud-chamber | Little animation | code-predicted |
| 187 | columnar-basalt | Little animation | code-predicted |
| 188 | conoscopic-interference | Little animation | GT (operator) |
| 189 | core-memory | Little animation | code-predicted |
| 190 | coronagraph-mask | Little animation | code-predicted |
| 191 | crepuscular-rays | Little animation | code-predicted |
| 192 | crookes-tube | Little animation | code-predicted |
| 193 | cuneiform-tablet | Little animation | code-predicted |
| 194 | cupellation-calcine | Little animation | code-predicted |
| 195 | cuttlefish | Little animation | code-predicted |
| 196 | davis-backstaff | Little animation | code-predicted |
| 197 | debye-scherrer | Little animation | GT (operator) |
| 198 | dines-meteorograph | Little animation | GT (operator) |
| 199 | duddell-singing-arc | Little animation | code-predicted |
| 200 | emerald-tablet | Little animation | code-predicted |
| 201 | enigma-rotors | Little animation | code-predicted |
| 202 | fitzroy-stormglass | Little animation | GT (operator) |
| 203 | fluidic-logic | Little animation | code-predicted |
| 204 | forge-bellows | Little animation | code-predicted |
| 205 | foxfire | Little animation | code-predicted |
| 206 | fraunhofer-dorpat-refractor | Little animation | GT (operator) |
| 207 | fulgurite-glass | Little animation | code-predicted |
| 208 | fusee-chain | Little animation | code-predicted |
| 209 | geode-banding | Little animation | code-predicted |
| 210 | geodesic-sphere | Little animation | code-predicted |
| 211 | glass-harmonica | Little animation | code-predicted |
| 212 | glaucus-nudibranch | Little animation | code-predicted |
| 213 | goethe-glass | Little animation | code-predicted |
| 214 | gravitational-lensing | Little animation | code-predicted |
| 215 | gunters-chain | Little animation | code-predicted |
| 216 | hauy-cleavage | Little animation | GT (operator) |
| 217 | heliograph-flash | Little animation | code-predicted |
| 218 | heliometer-micrometer | Little animation | code-predicted |
| 219 | hermetic-caduceus | Little animation | code-predicted |
| 220 | herschel-forty-foot | Little animation | GT (operator) |
| 221 | homunculus | Little animation | code-predicted |
| 222 | invar-baseline | Little animation | code-predicted |
| 223 | jefferson-cylinder | Little animation | code-predicted |
| 224 | kaiserpanorama | Little animation | code-predicted |
| 225 | kamal-navigator | Little animation | code-predicted |
| 226 | kamea-square | Little animation | code-predicted |
| 227 | kelvin-dropper | Little animation | code-predicted |
| 228 | kerotakis-reflux | Little animation | code-predicted |
| 229 | kettle-lake | Little animation | code-predicted |
| 230 | kirlian-aura | Little animation | code-predicted |
| 231 | litho-limestone | Little animation | code-predicted |
| 232 | loran-navigation | Little animation | code-predicted |
| 233 | lummer-gehrcke-plate | Little animation | GT (operator) |
| 234 | lyrebird | Little animation | code-predicted |
| 235 | mantle-hotspot | Little animation | code-predicted |
| 236 | mobius-strip | Little animation | code-predicted |
| 237 | monotype-caster | Little animation | code-predicted |
| 238 | montgolfier-aerostat | Little animation | code-predicted |
| 239 | mycelium-network | Little animation | code-predicted |
| 240 | newton-rings | Little animation | code-predicted |
| 241 | nicol-prism | Little animation | GT (operator) |
| 242 | nixie-tube | Little animation | code-predicted |
| 243 | nodal-tide | Little animation | code-predicted |
| 244 | obsidian-fracture | Little animation | code-predicted |
| 245 | obsidian-mirror | Little animation | code-predicted |
| 246 | onetime-pad | Little animation | code-predicted |
| 247 | ouroboros | Little animation | code-predicted |
| 248 | peg-solitaire | Little animation | code-predicted |
| 249 | pelican-still | Little animation | code-predicted |
| 250 | penrose-tiling | Little animation | code-predicted |
| 251 | phonautograph | Little animation | code-predicted |
| 252 | pillow-lava | Little animation | code-predicted |
| 253 | pitot-prandtl-tube | Little animation | code-predicted |
| 254 | playfair-matrix | Little animation | code-predicted |
| 255 | pyrosome | Little animation | code-predicted |
| 256 | quipu-khipu | Little animation | code-predicted |
| 257 | radiolarian | Little animation | code-predicted |
| 258 | reed-harmonium | Little animation | code-predicted |
| 259 | remontoire-spring | Little animation | code-predicted |
| 260 | richard-barograph | Little animation | GT (operator) |
| 261 | rotary-phone | Little animation | code-predicted |
| 262 | rubens-tube | Little animation | code-predicted |
| 263 | runic-compass | Little animation | code-predicted |
| 264 | rutherford-scattering | Little animation | code-predicted |
| 265 | schlieren-airflow | Little animation | code-predicted |
| 266 | scytale-rod | Little animation | code-predicted |
| 267 | shadowbox-diorama | Little animation | code-predicted |
| 268 | shishi-odoshi | Little animation | code-predicted |
| 269 | siphonophore | Little animation | code-predicted |
| 270 | slime-mold | Little animation | code-predicted |
| 271 | solar-sail | Little animation | code-predicted |
| 272 | spagyric-calcination | Little animation | code-predicted |
| 273 | speleothem-drip | Little animation | code-predicted |
| 274 | spirograph | Little animation | code-predicted |
| 275 | stellarator | Little animation | code-predicted |
| 276 | stereoscope | Little animation | code-predicted |
| 277 | stratum-fault | Little animation | code-predicted |
| 278 | subduction-zone | Little animation | code-predicted |
| 279 | sundew | Little animation | code-predicted |
| 280 | sundog | Little animation | code-predicted |
| 281 | synaptic-vesicle | Little animation | code-predicted |
| 282 | tacheometer-stadia | Little animation | code-predicted |
| 283 | tardigrade | Little animation | code-predicted |
| 284 | telegraph-sounder | Little animation | code-predicted |
| 285 | thaumaturgy-circle | Little animation | code-predicted |
| 286 | tiddlywinks | Little animation | code-predicted |
| 287 | traverse-board | Little animation | code-predicted |
| 288 | treadle-grindstone | Little animation | code-predicted |
| 289 | tuning-fork-chronograph | Little animation | code-predicted |
| 290 | van-de-graaff | Little animation | code-predicted |
| 291 | vitriol-crystallizer | Little animation | code-predicted |
| 292 | water-strider | Little animation | code-predicted |
| 293 | wind-rose | Little animation | code-predicted |
| 294 | wind-tunnel | Little animation | code-predicted |
| 295 | witch-hazel | Little animation | code-predicted |
| 296 | wood-echelette-grating | Little animation | GT (operator) |
| 297 | wright-wing-warp | Little animation | code-predicted |
| 298 | yardang-erosion | Little animation | code-predicted |
| 299 | zenith-telescope | Little animation | code-predicted |
| 300 | zeppelin-lattice-girder | Little animation | code-predicted |
| 301 | zoetrope | Little animation | code-predicted |
| 302 | bowerbird | No animation | code-predicted |
| 303 | fata-morgana | No animation | code-predicted |
| 304 | fraunhofer-lines | No animation | GT (operator) |
| 305 | hydraulic-ram | No animation | code-predicted |
| 306 | leyden-jar | No animation | code-predicted |
| 307 | piezoelectric-quartz | No animation | GT (operator) |
| 308 | rowland-concave-grating | No animation | GT (operator) |
| 309 | torricelli-barometer | No animation | GT (operator) |
