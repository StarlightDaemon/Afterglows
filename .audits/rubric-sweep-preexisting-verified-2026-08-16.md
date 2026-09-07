# Rubric sweep, pre-existing concepts — VISUALLY VERIFIED (2026-08-16 session, run 2026-08-17)

Frame-capture verification of all 240 pre-existing concepts (manifest `added` date not in the
2026-08-15 batch), re-classifying every tile from **rendered frames**, not code. This supersedes the
code-reading-only pass in `.audits/rubric-sweep-preexisting-2026-08-16.md`, whose verdicts were treated
as unverified candidates per the calibration finding that blind code-reading over-predicts (23 over / 0
under on the 30-tile ground truth). No concept file, manifest, or render code was modified.

## Method

Continuous-playback grid-montage harness (reused from the 2026-08-16/17 121-tile verification session:
`grid.mjs` + `cdp.mjs`, real headless-Chrome playback via CDP, no timing manipulation). Per tile:
scroll into view, wait for lazy-resume, **2800ms settle** (clears ease-in-out slow starts), then 4 frames
at 850ms gap captured and composited into one labeled grid PNG per ~15-tile batch; every grid read
visually against the geometric-motion rubric (`.audits/perception-calibration-2026-08-16.md`).
16 batches, uncertain-first ordering (the prior report's 63 flagged tiles in batches 1–5).

Anti-false-negative protocol applied throughout, per the standing lessons:
- Any tile reading suspiciously static, event-driven, or borderline was **re-shot in isolation or a
  small batch at a different gap** (250–620ms, 7–8 frames) before concluding. 16 tiles got re-checks:
  crosswalk, eye, flytrap, fractal-tree, grasshopper, octopus, owl, piggybank, toaster, tornado,
  tape-reels, woodpecker, solder, disco, flower, atm.
- Two genuine aliasing catches: **tape-reels** (2.6s/rev, 6-fold spokes: 850ms sample ≡ 58° mod 60 —
  looked frozen; real rotation confirmed at 300ms) and **tornado** (1.1s writhe invisible at 850ms,
  clearly continuous at 350ms). Both would have been false downgrades without the re-shoot.

Scope reconciliation: manifest has 549 entries; 240 have `added` ≠ 2026-08-15 — exactly matching the
prior report's worklist (zero set difference in both directions).

## Category counts (verified)

| Category | Verified count | Share | Prior (code-read) count |
|---|---:|---:|---:|
| No animation | 1 | 0.4% | 1 |
| Little animation | 94 | 39.2% | 94 |
| Partially animated | 140 | 58.3% | 140 |
| Fully animated | 5 | 2.1% | 5 |
| **Total** | **240** | 100% | 240 |

## Comparison against the code-reading report

**8 of 240 verdicts changed (3.3%)** — 4 downgrades and 4 upgrades. The aggregate
category counts are coincidentally identical (the 4↓ and 4↑ cancel exactly), but the specific tiles moved:

| Concept | Code-read verdict | Verified verdict | Direction |
|---|---|---|---|
| `concept-crosswalk` | Partially animated | Little animation | ↓ down |
| `concept-eye` | Partially animated | Little animation | ↓ down |
| `concept-flytrap` | Little animation | Partially animated | ↑ up |
| `concept-fractal-tree` | Little animation | Partially animated | ↑ up |
| `concept-grasshopper` | Little animation | Partially animated | ↑ up |
| `concept-owl` | Partially animated | Little animation | ↓ down |
| `concept-piggybank` | Partially animated | Little animation | ↓ down |
| `concept-solder` | Little animation | Partially animated | ↑ up |

What this says about code-reading bias:

- **The rubric-anchored code-read was far better calibrated than naive code-reading.** The calibration
  session's blind judges (pre-rubric) missed 23/30 tiles, all over-predictions. This report's
  rubric-anchored pass missed only 8/240 (3.3%), and symmetrically (4 over, 4 under) — the calibrated
  rubric, not visual access per se, removed most of the bias.
- **The uncertainty flags were well-placed.** 7 of the 8 changes were among the 63 tiles the prior
  report itself flagged uncertain (11% flip rate inside the flagged set); only 1 of 177 "confident"
  verdicts flipped (0.6%: solder). Prioritizing flagged tiles for verification was the right call.
- **Where code-reading still errs, the errors are specific and legible.** The 4 downgrades are all
  "coded motion that never visually materializes" (crosswalk's leg swing, eye's saccades, owl's head
  swivel, piggybank's wiggle chain — each checked across 11+ frames at two gaps). The 4 upgrades are
  all "duty-cycle or amplitude underestimates" where real playback shows motion landing in essentially
  every glance window (flytrap, fractal-tree, grasshopper, solder).

## Still ambiguous after visual inspection

None held out as unclassifiable — every tile got a verdict from frames. The closest judgment calls,
classified but worth naming: **moon-phase** (dramatic phase sweep, but the mover is a near-black disc
over a bright moon — held at Little on the conoscopic-interference GT precedent), **noise** (full-field
grain churn with no discrete mover — held at Partially as TV-static-class constant change),
**grid** (movers teleport between gridline positions rather than sweeping — held at Partially on
salience), and **woodpecker/disco** (confirmed Partially only after isolation re-shoots).

## Full verified list

### No animation (1)

| # | Concept | Label | Category | Visual evidence |
|---:|---|---|---|---|
| 1 | `concept-ascii` | ASCII Box | systems | OK box pixel-identical across all 4 frames - sub-2px jitter invisible. |

### Little animation (94)

| # | Concept | Label | Category | Visual evidence |
|---:|---|---|---|---|
| 1 | `concept-alchemical-transmutation` | Alchemical Transmutation | arcane | Center shape morphs ingot-sun-star in place with glow - clip-path/opacity morph, no travel. |
| 2 | `concept-alien-signal` | Alien Signal | scifi | Bright spectral column stays at identical position all 4 frames; only brightness varies. Waterfall texture change imperceptible at glance. |
| 3 | `concept-angler` | Anglerfish | ocean | Fish visible in f1-f2, faded to near-invisible outline in f3-f4 - opacity reveal dominates; lure dot essentially stationary. |
| 4 | `concept-audio-circle` | Audio Circle | retro | Radial bars lengthen/shorten in place (tip travel visible but in-place scale); hub static. Discounted equalizer-throb category. |
| 5 | `concept-bathysphere` | Bathysphere | ocean | Sphere near-identical position; beam/motes vary faintly - small amplitudes. |
| 6 | `concept-beaker` | Boiling Beaker | lab | Liquid mass identical position across frames; f4 shows brightness/color dip only. Bubbles too small to register. |
| 7 | `concept-binary-counter` | Bin Counter | systems | Register digits content-swap (0x4-0x8) and cells light - zero geometric motion. |
| 8 | `concept-blender` | Blender | home | Jar/liquid pixel-identical across frames except LED state change f3-f4. |
| 9 | `concept-bubble-column` | Bubble Column | ocean | Bubble train at different heights each frame but movers are ~4-9px dots - tiny-mover cap holds; scene otherwise static. |
| 10 | `concept-bunsen` | Bunsen Burner | lab | Flame is in-place scale/color change (blue to yellow) - the GT bunsen-spectroscope flame precedent; collar event not caught. |
| 11 | `concept-candle` | Séance Candle | occult | Flame near-identical with slight lean once - in-place flicker. |
| 12 | `concept-cash-register` | Cash Register | city | Register static; display amounts swap; drawer barely open once - content swaps dominate. |
| 13 | `concept-cauldron` | Cauldron | arcane | Cauldron identical; steam wisps/bubble dots shift faintly; rim glow pulses - in-place flicker. |
| 14 | `concept-cell-cluster` | Cell Cluster | bio | Nucleus stretches to ellipse f2-f4 (in-place morph); cell positions near-identical - shape morph, no travel. |
| 15 | `concept-centrifuge` | Centrifuge | lab | Rotor blobs barely differ across frames under the smoke lid; rpm readout content-swaps 4k-13k. Reads static. |
| 16 | `concept-chimes` | Wind Chimes | music | Tubes near-vertical in 3 of 4 frames; one frame catches the brief gust splay - episodic (~15% duty). |
| 17 | `concept-coffee` | Coffee Cup | home | Cup identical; steam wisps shift faintly - dim small movers. |
| 18 | `concept-constellation` | Constellation | space | Star nodes at identical positions; only dashed-line presence/brightness differs - intensity sequencing. |
| 19 | `concept-crop-circle` | Crop Circles | scifi | Ring pattern static; self-draw brightness and small tracer circles differ - dash/draw effects discounted. |
| 20 | `concept-crosswalk` **‡** | Crosswalk Signal | city | 11 frames across two gaps (850/520ms): figure always standing with legs together - white or dim; only countdown digits, hand color and WALK/WAIT text change. The coded 46-deg leg swing never appears at glance sampling; reads as content/intensity swaps. |
| 21 | `concept-cryopod` | Cryo Pod | scifi | Pod identical across frames; only frost/glow intensity shifts. |
| 22 | `concept-crystal-ball` | Crystal Ball | arcane | Ball identical position; f3 shows eye apparition (opacity morph); mist drift imperceptible across frames. |
| 23 | `concept-cursor-prompt` | Cursor Prompt | retro | Prompt line content/cursor state differs only - blink/typing content swap, zero geometric motion. |
| 24 | `concept-dartboard` | Darts | games | Board static; dart-flight caught mid-air in none of 4 frames (score text swaps 20/45/BULL); red ring shifts slightly - episodic events, mostly still. |
| 25 | `concept-distillation` | Distillation | lab | Apparatus static; receiving-flask level differs between frames (slow fill) - discounted height fill, drops tiny. |
| 26 | `concept-eclipse` | Eclipse | space | Corona ring static with small bright bead at different rim spots; dark-disc slide reads as glow change - conoscopic dark-mover precedent. |
| 27 | `concept-ekg` | EKG | bio | Bright spike appears at different x per frame but it is the fixed trace lit by a traveling reveal - discounted intensity propagation; baseline trace static. |
| 28 | `concept-ember` | Ember | nature | Flame glow near-identical; only tiny spark dots differ - in-place flicker plus 3px movers. |
| 29 | `concept-etch-a-sketch` | Etch A Sketch | toys | Line self-draws (stylus dot at different points, hairline trace); f2 catches the brief frame-shake tilt. Drawing effect + episodic shake reads mostly static. |
| 30 | `concept-eye` **‡** | Eye | systems | 1 of 7 frames catches a full lid blink; all others show the iris essentially centered with only the glint shifting a few px. Mostly-static ring with occasional blink - duty cap holds. |
| 31 | `concept-fibonacci` | Fibonacci Spiral | geometry | Spiral/cell geometry identical; only segment brightness differs between frames - border-color/opacity sequencing. |
| 32 | `concept-firefly` | Fireflies | nature | 3-4px glow dots at different positions/brightness - tiny movers with blink. |
| 33 | `concept-flamingos` | Flamingos | birds | Pose near-identical; only small head/neck shifts - small amplitudes. |
| 34 | `concept-force-field` | Force Field | scifi | Mesh/core static; one frame catches the small bolt spark - fill flashes and pulses only. |
| 35 | `concept-ghost` | Ghost | occult | Ghost position near-identical all 4 frames; only eye state and slight dimming change. 9px slow bob invisible at glance spacing. |
| 36 | `concept-glitch` | Glitch Text | systems | 3 of 4 frames identical static SYSTEM text; f2 catches the brief inverted-box flash - episodic intensity burst. |
| 37 | `concept-gramophone` | Gramophone | music | Horn/platter static (symmetric spin reads frozen); only faint label-dot/ripple changes. |
| 38 | `concept-graveyard` | Graveyard Mist | occult | Scene static; 10px dark bat at different sky spots in 2 frames - dark tiny mover. |
| 39 | `concept-haunted-mirror` | Haunted Mirror | occult | Empty mirror then apparition fading in - pure opacity develop. |
| 40 | `concept-hex` | Hex | geometry | Lattice geometry static; f2 catches the bright fill wave - pure luminance sequencing across cells. |
| 41 | `concept-hydrothermal-vent` | Hydrothermal Vent | ocean | Vent static; dark smoke plume shape shifts subtly - low-contrast movers. |
| 42 | `concept-invader` | Space Invader | retro | Sprite at identical position all frames; only subtle two-frame arm swap. Reads static. |
| 43 | `concept-kettle` | Kettle | home | Small body tilts and faint steam puffs; whistle star once - small amplitudes and intensity. |
| 44 | `concept-knitting` | Knitting | textile | Fabric/needles near-identical; yarn ball stripe pattern rotates subtly. All below glance threshold. |
| 45 | `concept-lattice` | Diamond Lattice | geometry | Hairline grid texture near-identical across all frames - texture scroll imperceptible. |
| 46 | `concept-level` | Spirit Level | mech | Body tilt changes subtly; bubble shifts a few px; readout content-swaps. Small amplitudes. |
| 47 | `concept-lightning` | Lightning | nature | All 4 frames show identical dark clouds - bolt flash (12% duty) missed entirely; tile reads static. |
| 48 | `concept-macrame` | Macramé | textile | Knot panel near-identical; fringe angles shift slightly; knots glow - small/discounted. |
| 49 | `concept-mantis` | Praying Mantis | garden | Small foreleg/head angle shifts between frames; strike not caught (5% duty). Reads near-static. |
| 50 | `concept-microscope` | Microscope | bio | Instrument identical across frames; magnification label swaps x100-x400 - reads static. |
| 51 | `concept-molecule` | Molecule Chain | bio | Node positions identical across frames; only glow sequence travels the chain - intensity propagation. |
| 52 | `concept-moon-phase` | Moon Phases | space | Phase sweeps dramatically full-to-dark across 4 frames, but the mover is the near-black shadow disc over the bright moon - exactly the conoscopic-interference GT precedent the operator rated Little. |
| 53 | `concept-mothership` | Mothership | scifi | Ship hover near-identical in 3 of 4 frames; f4 catches the beam extension - episodic (22% duty). |
| 54 | `concept-murmuration` | Murmuration | birds | 4px bird dots occupy different positions and the flock ring fades in/out - tiny movers plus intensity; reads as shimmer, not motion. |
| 55 | `concept-music-box` | Music Box | music | Box near-identical; small note glyphs appear briefly; cylinder texture change imperceptible. |
| 56 | `concept-neon` | Neon Sign | lab | Different letters lit per frame (flicker) and the 6px moth at different orbit points - intensity dominates, only mover is tiny. |
| 57 | `concept-neuron` | Neuron | bio | Bright blip visible mid-axon in 1 of 4 frames, near terminal in others - ~9px mover at ~30% duty; duty cap and small size hold. |
| 58 | `concept-owl` **‡** | Owl | birds | 11 frames across two gaps: body/head orientation identical throughout; only eye state (blink) and chest glow change. The coded +/-15deg head swivel is not visible at glance sampling. |
| 59 | `concept-petri` | Petri Dish | bio | Colonies appear/grow in place with CFU counter swaps - in-place scale growth, no travel. |
| 60 | `concept-piggybank` **‡** | Piggy Bank | city | Pig pose identical in all 11 frames; only the ~14px coin appears above the slot in 3 frames - small episodic mover, wiggle/tail-spring never visible. |
| 61 | `concept-planet-rings` | Planet Rings | space | Planet static; ring tilt differs only slightly between frames - small slow wobble. |
| 62 | `concept-polaroid` | Instant Photo | retro | Photo develops dark-to-full-scene across frames - pure opacity develop; frame/body static, eject not caught. |
| 63 | `concept-poppet-doll` | Poppet Doll | occult | Doll identical in 3 of 4 frames; f3 catches ward ring + pin thrust - episodic event under duty cap. |
| 64 | `concept-potion` | Potion | arcane | Flask static; tiny bubble/sparkle dots shift; liquid brightness pulses. |
| 65 | `concept-prism` | Prism | lab | Prism/spectrum geometry static; only ray brightness/thickness varies - intensity only. |
| 66 | `concept-pulse` | Pulse | bio | Bar heights differ per frame but all in-place height throb - the discounted equalizer category (same as audio-circle). |
| 67 | `concept-raven` | Raven | occult | Raven pose identical across frames; moon glow varies - episodic micro-motions not caught. |
| 68 | `concept-rubber-duck` | Rubber Duck | toys | Duck at near-identical position with small tilt; bubbles differ - small drift. |
| 69 | `concept-saucer` | Flying Saucer | scifi | Saucer position near-identical (few px); dome lamp color cycles - intensity only. |
| 70 | `concept-scrying-pool` | Scrying Pool | arcane | Pool ring static; eye manifests via opacity/scale morph - intensity dominated. |
| 71 | `concept-server-lights` | Server Rack | systems | Rack static; 5px cyan blip at different rail spots; LEDs/meters flicker - tiny mover plus intensity. |
| 72 | `concept-signal` | Signal | systems | Bars grow in place, status text swaps - discounted equalizer/content categories. |
| 73 | `concept-snowfall` | Snowfall | nature | 2-4px flakes at different positions - tiny-mover cap; scene otherwise static. |
| 74 | `concept-sonar` | Sonar | systems | Ring geometry identical; only small contact blips appear at different spots - expanding-ring fades plus tiny movers. |
| 75 | `concept-spirit-box` | Spirit Box | occult | Equalizer bars/colors and text change; strip marker snaps once - content/intensity dominated. |
| 76 | `concept-spirit-orbs` | Spirit Orbs | occult | Orbs rearrange across frames but individual movers are 6-15px at ~6px/s with glow flicker - small slow movers per crystal-ball/fitzroy precedents. |
| 77 | `concept-star-chart` | Star Chart | space | Chart geometry identical; node glints vary - pure intensity. |
| 78 | `concept-submarine` | Submarine | ocean | Hull position near-identical across frames (few px bob); sonar ring visible once - small amplitudes. |
| 79 | `concept-swan` | Swan | birds | Neck-down dip caught in 1 of 4 frames; otherwise identical glide pose - episodic (22% duty) event, slow 2px/s glide. |
| 80 | `concept-testtube` | Test Tube Rack | lab | Rack static; tube colors change and foam appears - color/fill intensity changes. |
| 81 | `concept-tidepool` | Tidepool | ocean | Pool/anemone static in place; crab blob shifts between frames but small and opacity-gated. |
| 82 | `concept-titration` | Titration | lab | Readings and endpoint color swap; burette level creeps - slow small changes. |
| 83 | `concept-toaster` | Toaster | home | 8 frames at 350ms: toast up in only 2, coil-glow body in 6 - travel is brief, loop dominated by static glowing body; duty cap holds. |
| 84 | `concept-traffic-light` | Traffic Light | city | Only lamp colors/halos swap (green to yellow) - zero geometric motion. |
| 85 | `concept-tuning-fork` | Tuning Fork | music | Fork static; mallet appears once; prong shiver sub-3px blur - brief/small. |
| 86 | `concept-turntable` | Turntable | retro | Platter reads frozen (radially symmetric grooves); tonearm parked in 3 of 4 frames with one state change - mostly static at glance. |
| 87 | `concept-tympani` | Tympani | music | Drum static; mallet heads shift slightly between frames - brief strikes (~16% duty), ripple fades. |
| 88 | `concept-vacuum-radio` | Vacuum Tube Radio | home | 2px-wide red needle at progressively different dial positions (~9px/frame) - tiny slow mover, tube glow is intensity. |
| 89 | `concept-vending` | Vending Machine | city | Machine identical in 3 of 4 frames; f2 catches the small can mid-drop - brief small-mover event. |
| 90 | `concept-virus` | Virus | bio | Spike ring rotated only slightly between frames (26s/rev); core morph subtle - slow low-amplitude motion. |
| 91 | `concept-visitor` | The Visitor | scifi | Head identical position; one frame catches eye blink - intensity/brief events only. |
| 92 | `concept-volcano` | Volcano | nature | Cone static; one frame catches eruption spark dots - episodic tiny movers. |
| 93 | `concept-wand` | Wand Cast | arcane | Wand at modestly different rest/flick angles; sparkle dots tiny - episodic flick under duty cap, sparks are 2-4px. |
| 94 | `concept-weaverbird` | Weaverbird | birds | Nest static; bird head at slightly different weave spots - small wiggles. |

### Partially animated (140)

| # | Concept | Label | Category | Visual evidence |
|---:|---|---|---|---|
| 1 | `concept-abduction` | Abduction Beam | scifi | Orange target dots at different heights in the beam each frame - continuous rise cycle. |
| 2 | `concept-accordion` | Accordion | music | Red end-board at different positions with bellows folds visibly compressed/expanded - continuous squeeze cycle. |
| 3 | `concept-albatross` | Albatross | birds | Bird at different soar positions/banks every frame - continuous glide. |
| 4 | `concept-android` | Android | scifi | Bright visor pupil at a different sweep position each frame - continuous 27px eye travel. |
| 5 | `concept-ant` | Ant | garden | Ant at different trail positions (incl. reaching the anthill with crumb) - continuous scuttle. |
| 6 | `concept-asteroid` | Asteroid Drift | space | Rocks at clearly different positions every frame - continuous drift of multiple bronze movers. |
| 7 | `concept-astral-projection` | Astral Projection | arcane | Astral double at different levitation heights/stream states across frames - continuous rise cycle. |
| 8 | `concept-atm` | Cash Machine | city | 8 frames at 520ms: purple card slides between slot positions and green bills eject/rise across several frames alongside the screen sequence - real recurring movers, not just content swaps. |
| 9 | `concept-atom` | Atom | bio | Electron comet streaks at different orbit angles every frame - continuous fast orbits. |
| 10 | `concept-aurora` | Aurora | nature | Curtain bands occupy clearly different lean/positions in every frame - large bright soft-edged shapes in continuous sway. |
| 11 | `concept-balance-scale` | Balance Scale | city | Brass beam at different tilts (level/right-down/left-down) with pans tracking - large continuous tilt cycle. |
| 12 | `concept-balloon` | Hot Air Balloon | city | Balloon rig and clouds at different positions/scales across frames - continuous drift. |
| 13 | `concept-bee` | Bee | garden | Bee at a clearly different position every frame - continuous looping flight. |
| 14 | `concept-bell` | Bell | music | Gold bell cup at different swing tilts with counter-swinging clapper across frames - continuous rock. |
| 15 | `concept-billiards` | Billiards Break | games | Rack, cue strike and scatter states across frames - large multi-ball motion. |
| 16 | `concept-bio` | Bio-Rhythm | bio | Waveform peaks at visibly different phases each frame; bright dot rides at different heights - full-width continuous scroll. |
| 17 | `concept-blocks` | Building Blocks | toys | Stack, single block falling high, landed, restacked - large drops across frames. |
| 18 | `concept-blood` | Blood Flow | bio | RBCs and large white WBC at different vessel positions every frame - continuous streaming. |
| 19 | `concept-bowling` | Bowling Strike | games | Ball at different lane positions and pins caught mid-scatter; STRIKE phase - large staged motion. |
| 20 | `concept-broom` | Enchanted Broom | arcane | Broom at different lean angles/floor positions every frame - continuous banking sweep. |
| 21 | `concept-butterfly` | Butterfly | garden | Butterfly at different tile positions every frame - continuous traverse. |
| 22 | `concept-caterpillar` | Caterpillar | garden | Worm at different leaf positions with compressed/stretched hump states - continuous crawl. |
| 23 | `concept-centrifugal-governor` | Centrifugal Governor | mech | Flyball arms at clearly different spread angles every frame - continuous governor swing. |
| 24 | `concept-circuit` | Circuit | systems | Bright white pulse glow at a different trace location every frame - traveling packet reads clearly. |
| 25 | `concept-claw` | Claw Machine | games | Claw/trolley at different positions incl. holding prize and TRY AGAIN phases - sequential large motion. |
| 26 | `concept-clock-face` | Clock Face | mech | Red second hand at a clearly different bearing every frame - fast continuous sweep. |
| 27 | `concept-coinflip` | Coin Flip | city | Gold coin at different toss heights with tumble squash - continuous large arc. |
| 28 | `concept-combo-lock` | Combo Lock | mech | Dial pointer at a different bearing every frame (CLICK caught) - large rotating dial. |
| 29 | `concept-comet` | Comet | space | Comet at very different diagonal positions across frames (including off-tile phase) - large continuous crossing. |
| 30 | `concept-compass` | Compass | systems | Large red needle at visibly different bearings across frames (~30deg range) - saussure-hygrometer precedent. |
| 31 | `concept-cube` | Cube Spin | geometry | Wireframe cube at four distinctly different rotation angles - large continuous parallax of bright green edges. |
| 32 | `concept-dice` | Dice Roll | games | Dice settled, sum shown, mid-tumble at edge, tumbling pair - large motion states across frames. |
| 33 | `concept-disco` | Disco Ball | lab | Colored pinspot glows reposition clearly around the room every frame (30-40px orbit moves); floor color swaps are secondary - real continuous travel of visible movers. |
| 34 | `concept-dna-helix` | DNA Helix | bio | Colored base nodes in visibly different crossing configurations every frame - continuous helix weave. |
| 35 | `concept-dragonfly` | Dragonfly | garden | Dragonfly at different positions/orientations incl. perched and darting - continuous flight. |
| 36 | `concept-drawbridge` | Drawbridge | city | Spans at different raise angles (65deg to flat) with ship crossing - large staged rotation. |
| 37 | `concept-drop-spindle` | Drop Spindle | textile | Whorl squash-rotation states and rig height visibly differ across frames - continuous spin/drop. |
| 38 | `concept-dyson` | Dyson Swarm | scifi | Gold panels at clearly different orbit positions each frame - continuous layered revolution. |
| 39 | `concept-embroidery-hoop` | Embroidery Hoop | textile | Needle rig at different hoop positions every frame; pattern grows - continuous punching travel. |
| 40 | `concept-falcon-stoop` | Falcon Stoop | birds | Falcon at very different dive positions/poses with speed streaks - large fast staged motion. |
| 41 | `concept-ferris` | Ferris Wheel | city | Colored gondolas at different rim positions each frame - continuous wheel rotation. |
| 42 | `concept-fingerprint` | Fingerprint Scan | systems | Bright scanline bar at a different height every frame (top/mid/bottom sweep) - large continuous sweep. |
| 43 | `concept-flashlight` | Flashlight | lab | Light cone at different pan angles revealing crate/eyes - large sweeping wedge. |
| 44 | `concept-flower` | Daisy Bloom | garden | 7 frames at 520ms catch the unfurl mid-transition (closed bud, half-open, full bloom) plus visible head sway - continuous bloom cycle. |
| 45 | `concept-flytrap` **‡** | Venus Flytrap | garden | Large bright red trap head occupies a visibly different pose in nearly every 520ms interval (rotation + open/close ~10-20deg) - continuous geometric motion, not the brief-snap-only read the code suggested. |
| 46 | `concept-foosball` | Foosball | games | Ball at different field positions with rod/player states changing - continuous play. |
| 47 | `concept-fractal-tree` **‡** | Fractal Tree | geometry | Continuous whole-subject growth from bare Y to full canopy across 7 consecutive frames (3.1s) - large, smooth, always-in-motion geometric change; far above draw-like hairline growth. |
| 48 | `concept-galaxy` | Galaxy | space | Spiral-arm pattern at visibly different rotation each frame - continuous full-tile rotation. |
| 49 | `concept-gears` | Gears | mech | Gear spoke/hole patterns at visibly different rotations across frames - continuous meshed rotation. |
| 50 | `concept-geneva-drive` | Geneva Drive | mech | Ruby pin at a clearly different orbit position every frame; cross indexes - continuous driver rotation. |
| 51 | `concept-golf` | Golf Putt | games | Ball at different green positions through to holed-out - continuous roll. |
| 52 | `concept-grasshopper` **‡** | Grasshopper | garden | Insect visible in 6 of 7 frames at dramatically different positions/poses (crouch, mid-leap, landing) - large-amplitude motion lands in essentially every glance window. |
| 53 | `concept-grid` | Grid | geometry | Full-length bright highlight lines + glowing node at different grid positions every frame - large, salient position changes each interval. |
| 54 | `concept-hatchling` | Hatchling | birds | Egg intact, hatched with chick, chick in shell, reset - staged motion events across the loop. |
| 55 | `concept-hologram` | Hologram | scifi | Meridian ring width visibly oscillates across frames (squash-rotation) and scanline band sits at different heights - continuous compound motion. |
| 56 | `concept-hourglass` | Hourglass | retro | Sand masses at visibly different levels across frames with falling stream - continuous drain/fill. |
| 57 | `concept-hummingbird` | Hummingbird | birds | Bird at different hover positions around the flower with wing blur - continuous flitting. |
| 58 | `concept-jackbox` | Jack-in-the-Box | toys | Closed, lid flipped open, jester popped - large staged motions across the loop. |
| 59 | `concept-jellyfish` | Jellyfish | ocean | Bell width visibly pulses (wide/narrow squash) with glide and tentacle spread changes - continuous compound motion. |
| 60 | `concept-joystick` | Joystick | retro | Glossy red balltop at a different lean every frame; button lamp alternates - continuous stick sweep. |
| 61 | `concept-kaleidoscope` | Kaleidoscope | toys | Gem rosette at clearly different rotations with morphing petals - continuous rotation. |
| 62 | `concept-kelp` | Kelp Forest | ocean | Stalk tips at different sway angles and orange fish at different positions across frames. |
| 63 | `concept-kite` | Kite | games | Kite at different positions/banks with tail repositioned every frame - continuous swoop. |
| 64 | `concept-ladybug` | Ladybug | garden | Ladybug at progressively different positions along the leaf - continuous walk. |
| 65 | `concept-lighthouse` | Lighthouse | lab | Beam wedge at a different bearing every frame - continuous rotating sweep. |
| 66 | `concept-lissajous` | Lissajous | geometry | Bright comet-tailed dot at clearly different curve positions each frame - continuous path travel. |
| 67 | `concept-loading-bar` | Loading Bar | systems | Fill advances 38-64-100% across frames - bright leading edge travels ~100px; unmistakable progress motion. |
| 68 | `concept-loom` | Loom | textile | Shuttle at different traverse positions and warp shed reconfigures - continuous weaving cycle. |
| 69 | `concept-manta` | Manta Ray | ocean | Pectoral wings at different flap states every frame - continuous articulated flapping. |
| 70 | `concept-marbles-run` | Marble Run | toys | Pink marble at a different course position every frame - continuous full-course run. |
| 71 | `concept-marimba` | Marimba | music | Blue/pink mallet heads at different bar positions every frame with strike glows - continuous alternation. |
| 72 | `concept-metronome` | Metronome | music | Pendulum arm at a clearly different angle every frame - continuous swing. |
| 73 | `concept-microbes` | Microbial Field | bio | Bright cyan flagellate at a clearly different field position every frame - continuous crossing. |
| 74 | `concept-microwave` | Microwave | home | Meal bowl at clearly different turntable positions across frames; countdown ticks - continuous orbit. |
| 75 | `concept-moire` | Moiré Rings | geometry | Interference fringe centers/rings at clearly different positions each frame - full-field pattern sweep is visible motion. |
| 76 | `concept-nautilus` | Nautilus | ocean | Shell at different positions/rotations with jet plume - continuous thrust-glide cycle. |
| 77 | `concept-newtons-cradle` | Newton's Cradle | toys | End balls at different swing positions across frames (left ball clearly raised once) - continuous alternation. |
| 78 | `concept-noise` | Digital Noise | systems | Full-field grain completely re-randomized every frame plus interference band at different heights - constant unmistakable churn (TV-static class). |
| 79 | `concept-ocean-wave` | Ocean Waves | nature | White surf crest profile visibly shifts between frames - continuous layer scroll. |
| 80 | `concept-octopus` | Octopus | ocean | Arm poses visibly differ in every 620ms interval (curl/spread/droop of large bright arms) - continuous aggregate wriggle of the main subject. |
| 81 | `concept-orrery` | Orrery | mech | Planet arms at dramatically different rotations every frame - continuous orbits. |
| 82 | `concept-ostrich` | Ostrich | birds | Legs at clearly different stride phases every frame with dust kicks - continuous run cycle. |
| 83 | `concept-ouija` | Ouija | occult | Walnut planchette at a clearly different board position every frame - continuous high-contrast glide. |
| 84 | `concept-peacock` | Peacock | birds | Fan folded, fully displayed, and half-closed across frames - large open/close sweeps. |
| 85 | `concept-pendulum` | Pendulum | mech | Brass bob at different swing positions with tick/tock alternation - continuous arc. |
| 86 | `concept-pendulum-wave` | Pendulum Wave | geometry | Nine bobs in visibly different swing configurations every frame (aligned/splayed/wave) - continuous multi-pendulum motion. |
| 87 | `concept-piano` | Piano Keys | music | Different keys depressed and colored note glyphs at different rise heights every frame - the reused calibration verdict holds visually. |
| 88 | `concept-pinball` | Pinball | games | Ball at different playfield positions; bumpers flash; score climbs - continuous ricochet. |
| 89 | `concept-pinking-shears` | Pinking Shears | textile | Blades at different scissor angles with growing zigzag edge and falling clippings - continuous snipping. |
| 90 | `concept-piston` | Piston | mech | Crank pin at different orbit positions and crosshead at different heights - visible mechanism cycle. |
| 91 | `concept-poltergeist` | Poltergeist | occult | Levitating objects in different arrangements/heights every frame - staggered continuous motion. |
| 92 | `concept-pong` | Pong Rally | retro | Ball and both paddles at different positions every frame; score updates - continuous rally. |
| 93 | `concept-projector` | Film Projector | lab | Reel spokes at different rotations, beam flicker, screen scene changes every frame - compound continuous activity. |
| 94 | `concept-radar` | Radar | systems | Conic sweep wedge at a different bearing every frame; blips update - continuous rotation. |
| 95 | `concept-rain` | Rainfall | nature | Bright streak field at different fall positions every frame - constant full-field geometric motion. |
| 96 | `concept-raingauge` | Rain Gauge | nature | Cyan water column at different fill levels each frame (12-0-4mm) - continuous level motion. |
| 97 | `concept-rocket` | Rocket Launch | space | Pad-liftoff-gone-reset across the 4 frames; mid-liftoff flame caught - large staged travel. |
| 98 | `concept-rotary-dial` | Rotary Dial | retro | Dial at different pull/return rotations (digit windows 5/2 visible mid-pull) - large rotating disc motion. |
| 99 | `concept-roulette` | Roulette | games | Pocket wheel at different rotations between f1-f2 and ball repositions; SPINNING/NO MORE BETS phases - decelerating spin reads. |
| 100 | `concept-rune-circle` | Rune Circle | arcane | Glyph ring and hexagram at visibly different rotations across frames (f4 markedly so) - slow layered rotation still reads. |
| 101 | `concept-satellite` | Satellite | space | Satellite at a different arc position/angle every frame - continuous traversal. |
| 102 | `concept-scissors` | Scissors | textile | Shears at different advance positions; ribbon halves peel - continuous cutting traverse. |
| 103 | `concept-sewing-machine` | Sewing Machine | textile | Red fabric marker travels steadily across the bed frame-to-frame; needle/take-up chug - continuous mechanism motion. |
| 104 | `concept-sharpener` | Pencil Sharpener | home | Pencil at different feed depths and crank at different orbit points; shavings fall - continuous mechanism. |
| 105 | `concept-slinky` | Slinky | toys | Rainbow coil at different cascade positions/orientations every frame - continuous end-over-end travel. |
| 106 | `concept-solder` **‡** | Soldering Iron | mech | 7 frames at 520ms: iron tip and wire at visibly different positions in every interval (~10-16px strokes around the joint) - continuous working motion, not the 30%-duty holds the code read suggested. |
| 107 | `concept-spellbook` | Spellbook | arcane | Page caught mid-flip standing up in f2; rune glyphs at different rise heights every frame - compound continuous motion. |
| 108 | `concept-spider` | Spider | garden | Bright gold-banded spider at clearly different heights on its silk line each frame - continuous drop/reel travel. |
| 109 | `concept-spinning-top` | Spinning Top | toys | Top upright with streaks, then tilted, then toppled flat across the 4 frames - precession and topple are large visible pose changes. |
| 110 | `concept-sprout` | Sprout | nature | Continuous staged growth nub-to-full-sprout across all 4 frames - large whole-subject geometric change always in progress. |
| 111 | `concept-square-stack` | Square Stack | geometry | Nested bright outlines at very different rotation angles every frame - large sweeping corner arcs (cube precedent). |
| 112 | `concept-stamp` | Rubber Stamp | home | Stamp assembly at different travel/press positions incl. APPROVED impressions - motion spans the loop. |
| 113 | `concept-stapler` | Stapler | home | Large red head at visibly different open/closed angles in every frame - the snap cycle lands in every interval. |
| 114 | `concept-tape-reels` | Tape Reels | retro | At 300ms the spoke asterisks sit at visibly different rotations every frame - real 2.6s/rev rotation (850ms grid was a 60deg-symmetry alias). |
| 115 | `concept-target-lock` | Target Lock | systems | Brackets converge/scatter and tick ring rotates between frames (LOCK state caught once) - layered reconfiguration each interval. |
| 116 | `concept-tarot` | Tarot Draw | arcane | Middle/first cards at different flip states across frames (mid-flip narrow card caught; back face shown) - staggered perspective flips. |
| 117 | `concept-tatting-shuttle` | Tatting Shuttle | textile | Amber shuttle at clearly different figure-8 positions every frame - continuous looping. |
| 118 | `concept-terraform` | Terraform | scifi | Terraform front sweeps the planet (barren-to-green progression) and satellite at different orbit positions each frame. |
| 119 | `concept-tesseract` | Tesseract | geometry | Nested cubes at clearly different rotation/inversion states every frame - continuous 4D tumble. |
| 120 | `concept-tetris` | Falling Blocks | retro | T-piece at different fall heights, line-clear state caught - stepped descent reads clearly. |
| 121 | `concept-theremin` | Theremin | music | Orange hand at different distances from the pitch rod each frame; VU bars track - continuous sweep. |
| 122 | `concept-thermometer` | Thermometer | nature | Crimson column at visibly different heights (29-14C) with readout tracking - continuous large rise/fall. |
| 123 | `concept-tornado` | Tornado | nature | At 350ms the funnel visibly sways/squashes continuously (shape differs every frame; debris drifts) - the 1.1s writhe was aliased at 850ms but is real. |
| 124 | `concept-train-crossing` | Train Crossing | city | Boom gate up in f1-f2, down in f3-f4 with train carriages caught in f4 - large staged motions. |
| 125 | `concept-triangle-mesh` | Triangle Mesh | geometry | Full-field lattice at clearly different rotation angles each frame - large fast rotation is unmistakable. |
| 126 | `concept-typewriter` | Typewriter | home | Typed text progresses, carriage/typebar states differ every frame - continuous chug. |
| 127 | `concept-violin-bow` | Violin Bow | music | Bow at clearly different stroke positions/angles every frame - continuous bowing. |
| 128 | `concept-vise-anvil` | Vise & Anvil | mech | Hammer at different swing angles with sparks; jaw slides - continuous strike cycle. |
| 129 | `concept-warp` | Warp Jump | scifi | Streak field at different lengths/positions every frame incl. a flash phase - fast continuous radial motion. |
| 130 | `concept-watering-can` | Watering Can | garden | Can at different tilts incl. mid-pour with droplets; sprout grows - staged large motion. |
| 131 | `concept-weathervane` | Weather Vane | nature | Copper arrow at a clearly different bearing every frame - continuous hunting swings. |
| 132 | `concept-windsock` | Windsock | nature | Sock chain at very different lift angles across frames (horizontal to drooping) - continuous whip articulation. |
| 133 | `concept-windup-robot` | Wind-up Robot | toys | Arms/legs/key at different march poses every frame - continuous 1Hz march. |
| 134 | `concept-wireframe-globe` | Wireframe Globe | space | Meridian ellipse widths visibly different each frame (breathing fake-spin) plus bright scan band at different heights - continuous compound motion, cube-family wireframe. |
| 135 | `concept-wisp` | Will-o'-Wisp | occult | Bright cyan orb at a clearly different position every frame - continuous wander. |
| 136 | `concept-woodpecker` | Woodpecker | birds | At 250ms the head visibly alternates trunk-contact/pulled-back in most intervals (~10px rapid hammer arcs) - fast repetitive geometric motion on the main subject. |
| 137 | `concept-wormhole` | Wormhole | space | Three 7px bright motes at clearly different orbit positions every frame - fast continuous spirals of multiple bright movers; rings static. |
| 138 | `concept-wrench` | Wrench & Bolt | mech | Wrench handle at a clearly different angle every frame around the bolt - continuous ratchet strokes. |
| 139 | `concept-yoyo` | Yo-Yo | games | Disc at different string lengths (mid-drop, sleeper, returned) - large vertical travel. |
| 140 | `concept-zipper` | Zipper | textile | Chrome slider at very different heights with teeth open/closed - continuous travel. |

### Fully animated (5)

| # | Concept | Label | Category | Visual evidence |
|---:|---|---|---|---|
| 1 | `concept-anemometer` | Anemometer | nature | Orange cup rotor at a different rotation every frame with needle and readout changes - large bright fast spin. |
| 2 | `concept-chattering-teeth` | Chattering Teeth | toys | Jaws at different open/closed states and rig at different tilts/positions every frame - big, fast, always moving. |
| 3 | `concept-deskfan` | Desk Fan | home | Large cream rotor at different blur/blade orientations with head oscillation - very fast big bright rotation. |
| 4 | `concept-pacman` | Pacman | retro | Large bright Pac-Man at different positions with mouth open/closed states, ghost tracking, dots consumed - constant fast motion of big filled elements. |
| 5 | `concept-spinning-wheel` | Spinning Wheel | textile | Wheel spokes and flyer cross at different rotations every frame - large bright fast continuous spin. |

**‡** = verdict changed from the code-reading report.

---
*Method: real-playback frame-grid verification (16 batches of ~15 + 8 isolation/small-batch re-shoots),
sequential, no sub-agent fan-out. Judged against the calibrated geometric-motion rubric. No code changes.*
