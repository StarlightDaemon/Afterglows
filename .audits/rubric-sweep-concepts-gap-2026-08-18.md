# Rubric sweep: Concepts gallery gap inventory (2026-08-18)

Code-reading classification sweep of the **333 concepts** in the concepts gallery gap set (`concepts/gallery/`), judged strictly against the calibrated geometric-motion perception rubric (`.audits/perception-calibration-2026-08-16.md`). Every concept is classified from a direct read of its active default-version source code, anchored to genuine geometric motion (translate, rotate, scale) of a visible, bright-or-filled element on the concept's main subject. Intensity-only effects (opacity pulses, glow, color-cycling, dash-marching, text/content swaps) are discounted.

No concept file, manifest entry, or render code was modified, staged, or committed. This is a read-only audit report.

## Gap-Set Inventory Derivation

The concepts gallery manifest (`concepts/gallery/manifest.js`) defines the canonical inventory of **549 total concepts**.

Cross-referencing against the two established, already-covered sets:
1. **The 95-tile pre-existing fix assignment** listed in `.audits/rubric-sweep-preexisting-verified-2026-08-16.md` (consisting of the 1 No animation and 94 Little animation pre-existing concepts addressed in fix commits `fe03821`–`82acb51`).
2. **The 121-tile newest batch** documented in the current CHANGELOG entry for v1.9.0 (commits `d793634`–`4b0a0ff`).

The two covered sets are completely disjoint (zero overlap). Subtracting both sets from the full 549-concept manifest establishes the exact **333-concept gap set**:

```
Total Manifest Concepts:          549
- Pre-existing 95-Tile Fix Set:   -95
- Newest 121-Tile Fix Batch:     -121
-------------------------------------
Gap-Set Classification Universe:  333
```

### Composition of the 333 Gap Concepts

- **145 pre-existing concepts** (manifest `added` date prior to 2026-08-15): the 140 `Partially animated` and 5 `Fully animated` concepts verified in `rubric-sweep-preexisting-verified-2026-08-16.md`, including 128 concepts carrying `With Color` revisions/versions (e.g. `concept-radar`, `concept-sonar`, `concept-compass`, `concept-circuit`, `concept-dna-helix`, `concept-atom`, `concept-ekg`, etc.).
- **188 additions from the 2026-08-15 expansion batch** (309 total additions minus the 121 tiles fixed in the 1.9.0 batch).

## Category counts

| Category | Count | Share |
|---|---:|---:|
| No animation | 8 | 2.4% |
| Little animation | 25 | 7.5% |
| Partially animated | 289 | 86.8% |
| Fully animated | 11 | 3.3% |
| **Total** | **333** | **100.0%** |

---

## Full classified list

### No animation (8)

Concepts where geometric motion is completely absent, is below the sub-2px threshold, or occurs only as an unperceivable micro-burst (<5% duty cycle).

| # | Concept | Label | Category | Visual evidence & motion rationale |
|---:|---|---|---|---|
| 1 | `concept-bowerbird` | Satin Bowerbird Avenue | birds | Bird bob is only a 2px translateY + 5deg rotation (sub-3px effective tip travel); token 'shimmer' is brightness/scale only — both fall below the no-animation threshold. |
| 2 | `concept-fata-morgana` | Fata Morgana Superior Mirage | nature | Thermal shimmer lines move ~1px and the mirage stack only translates +/-2px with a barely-visible skew; everything is at or below the sub-2px no-animation threshold. |
| 3 | `concept-leyden-jar` | Leyden Jar High-Voltage Condenser | lab | The only motion is an instant spark scaleX flip visible for ~3% of the 2.2s loop (steps(1), no interpolation) — deep under the duty-cycle no-animation cutoff; everything else is static. |
| 4 | `concept-hydraulic-ram` | Hydraulic Ram Shock Pump | mech | All motion is brief (~5-15% duty) and sub-6px: the waste valve snaps only 5px, the air dome pulses ~2px, and the jet's height change is a brief <10%-duty burst — collectively below the no-animation threshold. |
| 5 | `concept-piezoelectric-quartz` | Curie Piezoelectric Quartz Electrometer | crystallography | Weight bobs only 2px vertically and needle swings ~5px tip arc - below human glance threshold (ground-truth operator rating: No animation). |
| 6 | `concept-torricelli-barometer` | Torricellian Mercury Vacuum Barometer | meteorology | Mercury meniscus in 4px glass tube creeps only 6px slowly over 4.0s - reads static at glance (ground-truth operator rating: No animation). |
| 7 | `concept-fraunhofer-lines` | Fraunhofer Solar Absorption Lines | spectroscopy | Static absorption spectrum; thin dark absorption lines pulse opacity/glow in place with zero geometric translation (ground-truth operator rating: No animation). |
| 8 | `concept-rowland-concave-grating` | Rowland Concave Reflection Grating | spectroscopy | Concave grating and Rowland circle pulse opacity/glow in place; ray fan sweep is ±9° thin hairline outline with zero position change (ground-truth operator rating: No animation). |


### Little animation (25)

Concepts where animation is dominated by intensity effects (opacity pulses, color cycles, glow, stroke-dashoffset marching) or where geometric motion is constrained to low-contrast boundaries, narrow amplitudes (few px drift), or very slow rotation (>12s period).

| # | Concept | Label | Category | Visual evidence & motion rationale |
|---:|---|---|---|---|
| 1 | `concept-fluidic-logic` | Fluidic Logic Gate | systems | Bistable fluid jet switching is intensity/color-dominant; liquid slug pulses in static channel with LED indicator swaps - zero geometric travel of channel walls (Little). |
| 2 | `concept-wind-tunnel` | Aerodynamic Wind Tunnel | lab | Aerofoil pitches only ±4° in place; smoke streamlines are discounted dash-offset marches and tip vortex is faint - below Partially threshold (Little). |
| 3 | `concept-kelvin-dropper` | Kelvin Water Dropper | lab | Falling droplets are only 5x8px (tiny-mover precedent) despite a continuous 38px fall; the spark flash is a near-invisible <5%-duty burst. |
| 4 | `concept-crookes-tube` | Maltese Cross Cathode Tube | lab | Electron beam and phosphor screen only flicker/pulse opacity in place; the Maltese cross shadow itself never moves. |
| 5 | `concept-synaptic-vesicle` | Synaptic Vesicle Exocytosis | bio | The fusing vesicle only grows ~3-4px via scale (exocytosis budding) and the small 5px neurotransmitter dots drop just 14px while fading — both modest, tiny-mover-scale motions rather than a clear large sweep. |
| 6 | `concept-camera-lucida` | Camera Lucida Prism | lab | The ghost sketch only fades/brightens with a tiny ~2px scale change; the ray path is a discounted dash-offset march and everything else (prism, rod, paper) is static. |
| 7 | `concept-fulgurite-glass` | Petrified Fulgurite Lightning | nature | The glass tube branches only pulse color/glow/stroke-width in place; the lightning flash is a brief ~4%-duty opacity blip. |
| 8 | `concept-tiddlywinks` | Tiddlywinks Squidger & Pot | games | The bright cyan flying wink (10px, glowing) makes a real ~32px leap, but the visible travel spans only ~35% of the 3s loop — just under the 40% duty cap, so it rates Little despite the decent amplitude. |
| 9 | `concept-ansible-relay` | Subspace Ansible Matrix | scifi | The two-tone qubit disc rotates in place (not a symmetric no-op, per the code's own comment) but there's no positional sweep — at a glance it reads as a small flickering coin rather than clear directional motion. |
| 10 | `concept-aqua-regia` | Aqua Regia Gold Dissolution | alchemy | Effervescent bubbles (2-3px, bright yellow) continuously rise 30px matching the tiny-mover precedent; the gold bar mostly shrinks via scale (~5.6px-equivalent) rather than translating, and the acid meniscus is an intensity-only glow pulse. |
| 11 | `concept-spagyric-calcination` | Spagyric Quintessence Still | alchemy | The quintessence orb pulses scale substantially in relative terms (0.6x->1.6x) but stays small in absolute size (max ~14px); the three principle streams are discounted dash-offset marches. |
| 12 | `concept-subduction-zone` | Subduction Trench & Arc Plume | geology | Dewatering fluid bubbles (1.8-2.2px) rise 22px matching the tiny-mover precedent; slab motion and magma plume are discounted dash-offset marches, and the volcano glow is an intensity-only pulse. |
| 13 | `concept-pillow-lava` | Submarine Pillow Lava Ooze | geology | The inflating lobe scales 0.8x->1.22x but stays a small (~26x16px), dark, low-contrast obsidian shape (~4px radius change); fissures are intensity-only glow pulses and vapor is a discounted dash-march. |
| 14 | `concept-onetime-pad` | One-Time Pad Key Strip | cipher | Burning embers are only 0.8-1.2px dots despite a 29px rise — an extreme tiny-mover case; the fire edge and key-group text are intensity-only color/glow pulses with no position change. |
| 15 | `concept-playfair-matrix` | Playfair Digram Matrix | cipher | The four digram corner nodes only pulse scale (~3px radius change) and glow in place at fixed grid positions; the rectangle bounding box merely pulses border width/color — no element ever translates. |
| 16 | `concept-kamal-navigator` | Kamal Latitude Guide | navigation | The kamal card only floats 5px with a tiny 2.5deg tilt — under the calibrated Partially sweep threshold; the sight beams are discounted dash-offset marches and the cord is an intensity-only color pulse. |
| 17 | `concept-traverse-board` | Traverse Board Dead Reckoning | navigation | The bone pegs pulse scale (0.9x->2x) and opacity in place but stay small in absolute size (max ~7px diameter) — matches the small-dot-pulse Little precedent; no element translates. |
| 18 | `concept-davis-backstaff` | Davis Quadrant Backstaff | navigation | The sun only pulses scale (~1.6px radius) and glow in place; shadow-ray and sight-line are discounted dash-offset marches, and the sighting vanes/arcs are entirely static despite being labeled 'sliding'. |
| 19 | `concept-telegraph-sounder` | Telegraph Sounder & Resonator | telecom | The lever arm only snaps instantly (steps(1), no interpolation) through a modest ~7px tip sweep for Morse dot/dash clicks; the acoustic sound-ring is a continuously expanding thin outline (not filled) — neither individually clears the Partially bar clearly. |
| 20 | `concept-phonautograph` | Scott Smoked-Drum Phonautograph | acoustics | The recording cylinder only wobbles 2px vertically (not true rotation) and the crank wheel is a real but small 6px-radius spin; the fixed white sound-trace is a genuine dash-offset march but that mechanism is explicitly discounted by the rubric — nothing here reaches the Partially amplitude. |
| 21 | `concept-bell-graphophone` | Bell-Tainter Wax Graphophone | acoustics | The cylinder only wobbles ~1.5px (not true rotation) and the hearing tubes swing a modest ~7px tip sweep; the sapphire head bobs just 2px and groove lines are an intensity-only glint pulse — nothing clears the Partially threshold. |
| 22 | `concept-tuning-fork-chronograph` | Hipp-Breguet Tuning Fork Chronograph | acoustics | The fork tines only flex ~1.6px in width and the drum wobbles just 2px (not true rotation); the sine-wave trace is a genuine but discounted dash-offset march, and the coil is an intensity-only glow pulse. |
| 23 | `concept-gunters-chain` | Gunter's 66-Foot Surveyor Chain | surveying | The tally tag swings only ~6.7px and the pull handles shift 6px; the chain links use a genuine but discounted dash-offset march — nothing here reaches the Partially amplitude. |
| 24 | `concept-nicol-prism` | Nicol Polarizing Iceland Spar Prism | crystallography | Incident and refracted rays pulse brightness/glow in place (opacity 0.6↔1.0); photon blips run along fixed paths, but zero positional deflection of prism facets or split ray paths occurs (ground-truth operator rating: Little animation). |
| 25 | `concept-assmann-psychrometer` | Assmann Aspirated Psychrometer | meteorology | Fan rotates 360°/1.2s and airflow dashes march, but thin stroke and dash-marching airflow dominate; thermometer column is static and housing whir is a 1.4s vibration (ground-truth operator rating: Little animation). |


### Partially animated (289)

Concepts with clear, visible, continuous or well-staged geometric motion (translating particles, rotating dials/arms, oscillating linkages, expanding waveforms, rising columns) of prominent filled or bright elements on the main subject.

| # | Concept | Label | Category | Visual evidence & motion rationale |
|---:|---|---|---|---|
| 1 | `concept-grid` | Grid | geometry | Full-length bright highlight lines + glowing node at different grid positions every frame - large, salient position changes each interval. |
| 2 | `concept-square-stack` | Square Stack | geometry | Nested bright outlines at very different rotation angles every frame - large sweeping corner arcs (cube precedent). |
| 3 | `concept-triangle-mesh` | Triangle Mesh | geometry | Full-field lattice at clearly different rotation angles each frame - large fast rotation is unmistakable. |
| 4 | `concept-cube` | Cube Spin | geometry | Wireframe cube at four distinctly different rotation angles - large continuous parallax of bright green edges. |
| 5 | `concept-lissajous` | Lissajous | geometry | Bright comet-tailed dot at clearly different curve positions each frame - continuous path travel. |
| 6 | `concept-moire` | Moiré Rings | geometry | Interference fringe centers/rings at clearly different positions each frame - full-field pattern sweep is visible motion. |
| 7 | `concept-pendulum-wave` | Pendulum Wave | geometry | Nine bobs in visibly different swing configurations every frame (aligned/splayed/wave) - continuous multi-pendulum motion. |
| 8 | `concept-fractal-tree` | Fractal Tree | geometry | Continuous whole-subject growth from bare Y to full canopy across 7 consecutive frames (3.1s) - large, smooth, always-in-motion geometric change; far above draw-like hairline growth. |
| 9 | `concept-radar` | Radar | systems | Conic sweep wedge at a different bearing every frame; blips update - continuous rotation. |
| 10 | `concept-target-lock` | Target Lock | systems | Brackets converge/scatter and tick ring rotates between frames (LOCK state caught once) - layered reconfiguration each interval. |
| 11 | `concept-compass` | Compass | systems | Large red needle at visibly different bearings across frames (~30deg range) - saussure-hygrometer precedent. |
| 12 | `concept-fingerprint` | Fingerprint Scan | systems | Bright scanline bar at a different height every frame (top/mid/bottom sweep) - large continuous sweep. |
| 13 | `concept-noise` | Digital Noise | systems | Full-field grain completely re-randomized every frame plus interference band at different heights - constant unmistakable churn (TV-static class). |
| 14 | `concept-loading-bar` | Loading Bar | systems | Fill advances 38-64-100% across frames - bright leading edge travels ~100px; unmistakable progress motion. |
| 15 | `concept-circuit` | Circuit | systems | Bright white pulse glow at a different trace location every frame - traveling packet reads clearly. |
| 16 | `concept-bio` | Bio-Rhythm | bio | Waveform peaks at visibly different phases each frame; bright dot rides at different heights - full-width continuous scroll. |
| 17 | `concept-dna-helix` | DNA Helix | bio | Colored base nodes in visibly different crossing configurations every frame - continuous helix weave. |
| 18 | `concept-atom` | Atom | bio | Electron comet streaks at different orbit angles every frame - continuous fast orbits. |
| 19 | `concept-microbes` | Microbial Field | bio | Bright cyan flagellate at a clearly different field position every frame - continuous crossing. |
| 20 | `concept-blood` | Blood Flow | bio | RBCs and large white WBC at different vessel positions every frame - continuous streaming. |
| 21 | `concept-rain` | Rainfall | nature | Bright streak field at different fall positions every frame - constant full-field geometric motion. |
| 22 | `concept-aurora` | Aurora | nature | Curtain bands occupy clearly different lean/positions in every frame - large bright soft-edged shapes in continuous sway. |
| 23 | `concept-ocean-wave` | Ocean Waves | nature | White surf crest profile visibly shifts between frames - continuous layer scroll. |
| 24 | `concept-tornado` | Tornado | nature | At 350ms the funnel visibly sways/squashes continuously (shape differs every frame; debris drifts) - the 1.1s writhe was aliased at 850ms but is real. |
| 25 | `concept-sprout` | Sprout | nature | Continuous staged growth nub-to-full-sprout across all 4 frames - large whole-subject geometric change always in progress. |
| 26 | `concept-galaxy` | Galaxy | space | Spiral-arm pattern at visibly different rotation each frame - continuous full-tile rotation. |
| 27 | `concept-wormhole` | Wormhole | space | Three 7px bright motes at clearly different orbit positions every frame - fast continuous spirals of multiple bright movers; rings static. |
| 28 | `concept-wireframe-globe` | Wireframe Globe | space | Meridian ellipse widths visibly different each frame (breathing fake-spin) plus bright scan band at different heights - continuous compound motion, cube-family wireframe. |
| 29 | `concept-comet` | Comet | space | Comet at very different diagonal positions across frames (including off-tile phase) - large continuous crossing. |
| 30 | `concept-satellite` | Satellite | space | Satellite at a different arc position/angle every frame - continuous traversal. |
| 31 | `concept-rocket` | Rocket Launch | space | Pad-liftoff-gone-reset across the 4 frames; mid-liftoff flame caught - large staged travel. |
| 32 | `concept-asteroid` | Asteroid Drift | space | Rocks at clearly different positions every frame - continuous drift of multiple bronze movers. |
| 33 | `concept-abduction` | Abduction Beam | scifi | Orange target dots at different heights in the beam each frame - continuous rise cycle. |
| 34 | `concept-dyson` | Dyson Swarm | scifi | Gold panels at clearly different orbit positions each frame - continuous layered revolution. |
| 35 | `concept-warp` | Warp Jump | scifi | Streak field at different lengths/positions every frame incl. a flash phase - fast continuous radial motion. |
| 36 | `concept-hologram` | Hologram | scifi | Meridian ring width visibly oscillates across frames (squash-rotation) and scanline band sits at different heights - continuous compound motion. |
| 37 | `concept-android` | Android | scifi | Bright visor pupil at a different sweep position each frame - continuous 27px eye travel. |
| 38 | `concept-terraform` | Terraform | scifi | Terraform front sweeps the planet (barren-to-green progression) and satellite at different orbit positions each frame. |
| 39 | `concept-ouija` | Ouija | occult | Walnut planchette at a clearly different board position every frame - continuous high-contrast glide. |
| 40 | `concept-poltergeist` | Poltergeist | occult | Levitating objects in different arrangements/heights every frame - staggered continuous motion. |
| 41 | `concept-wisp` | Will-o'-Wisp | occult | Bright cyan orb at a clearly different position every frame - continuous wander. |
| 42 | `concept-spellbook` | Spellbook | arcane | Page caught mid-flip standing up in f2; rune glyphs at different rise heights every frame - compound continuous motion. |
| 43 | `concept-rune-circle` | Rune Circle | arcane | Glyph ring and hexagram at visibly different rotations across frames (f4 markedly so) - slow layered rotation still reads. |
| 44 | `concept-tarot` | Tarot Draw | arcane | Middle/first cards at different flip states across frames (mid-flip narrow card caught; back face shown) - staggered perspective flips. |
| 45 | `concept-hourglass` | Hourglass | retro | Sand masses at visibly different levels across frames with falling stream - continuous drain/fill. |
| 46 | `concept-joystick` | Joystick | retro | Glossy red balltop at a different lean every frame; button lamp alternates - continuous stick sweep. |
| 47 | `concept-tape-reels` | Tape Reels | retro | At 300ms the spoke asterisks sit at visibly different rotations every frame - real 2.6s/rev rotation (850ms grid was a 60deg-symmetry alias). |
| 48 | `concept-tetris` | Falling Blocks | retro | T-piece at different fall heights, line-clear state caught - stepped descent reads clearly. |
| 49 | `concept-pong` | Pong Rally | retro | Ball and both paddles at different positions every frame; score updates - continuous rally. |
| 50 | `concept-rotary-dial` | Rotary Dial | retro | Dial at different pull/return rotations (digit windows 5/2 visible mid-pull) - large rotating disc motion. |
| 51 | `concept-gears` | Gears | mech | Gear spoke/hole patterns at visibly different rotations across frames - continuous meshed rotation. |
| 52 | `concept-pendulum` | Pendulum | mech | Brass bob at different swing positions with tick/tock alternation - continuous arc. |
| 53 | `concept-clock-face` | Clock Face | mech | Red second hand at a clearly different bearing every frame - fast continuous sweep. |
| 54 | `concept-piston` | Piston | mech | Crank pin at different orbit positions and crosshead at different heights - visible mechanism cycle. |
| 55 | `concept-orrery` | Orrery | mech | Planet arms at dramatically different rotations every frame - continuous orbits. |
| 56 | `concept-combo-lock` | Combo Lock | mech | Dial pointer at a different bearing every frame (CLICK caught) - large rotating dial. |
| 57 | `concept-microwave` | Microwave | home | Meal bowl at clearly different turntable positions across frames; countdown ticks - continuous orbit. |
| 58 | `concept-jellyfish` | Jellyfish | ocean | Bell width visibly pulses (wide/narrow squash) with glide and tentacle spread changes - continuous compound motion. |
| 59 | `concept-kelp` | Kelp Forest | ocean | Stalk tips at different sway angles and orange fish at different positions across frames. |
| 60 | `concept-train-crossing` | Train Crossing | city | Boom gate up in f1-f2, down in f3-f4 with train carriages caught in f4 - large staged motions. |
| 61 | `concept-balloon` | Hot Air Balloon | city | Balloon rig and clouds at different positions/scales across frames - continuous drift. |
| 62 | `concept-ferris` | Ferris Wheel | city | Colored gondolas at different rim positions each frame - continuous wheel rotation. |
| 63 | `concept-metronome` | Metronome | music | Pendulum arm at a clearly different angle every frame - continuous swing. |
| 64 | `concept-piano` | Piano Keys | music | Different keys depressed and colored note glyphs at different rise heights every frame - the reused calibration verdict holds visually. |
| 65 | `concept-bell` | Bell | music | Gold bell cup at different swing tilts with counter-swinging clapper across frames - continuous rock. |
| 66 | `concept-wrench` | Wrench & Bolt | mech | Wrench handle at a clearly different angle every frame around the bolt - continuous ratchet strokes. |
| 67 | `concept-solder` | Soldering Iron | mech | 7 frames at 520ms: iron tip and wire at visibly different positions in every interval (~10-16px strokes around the joint) - continuous working motion, not the 30%-duty holds the code read suggested. |
| 68 | `concept-dice` | Dice Roll | games | Dice settled, sum shown, mid-tumble at edge, tumbling pair - large motion states across frames. |
| 69 | `concept-roulette` | Roulette | games | Pocket wheel at different rotations between f1-f2 and ball repositions; SPINNING/NO MORE BETS phases - decelerating spin reads. |
| 70 | `concept-pinball` | Pinball | games | Ball at different playfield positions; bumpers flash; score climbs - continuous ricochet. |
| 71 | `concept-claw` | Claw Machine | games | Claw/trolley at different positions incl. holding prize and TRY AGAIN phases - sequential large motion. |
| 72 | `concept-yoyo` | Yo-Yo | games | Disc at different string lengths (mid-drop, sleeper, returned) - large vertical travel. |
| 73 | `concept-kite` | Kite | games | Kite at different positions/banks with tail repositioned every frame - continuous swoop. |
| 74 | `concept-lighthouse` | Lighthouse | lab | Beam wedge at a different bearing every frame - continuous rotating sweep. |
| 75 | `concept-disco` | Disco Ball | lab | Colored pinspot glows reposition clearly around the room every frame (30-40px orbit moves); floor color swaps are secondary - real continuous travel of visible movers. |
| 76 | `concept-flashlight` | Flashlight | lab | Light cone at different pan angles revealing crate/eyes - large sweeping wedge. |
| 77 | `concept-projector` | Film Projector | lab | Reel spokes at different rotations, beam flicker, screen scene changes every frame - compound continuous activity. |
| 78 | `concept-weathervane` | Weather Vane | nature | Copper arrow at a clearly different bearing every frame - continuous hunting swings. |
| 79 | `concept-windsock` | Windsock | nature | Sock chain at very different lift angles across frames (horizontal to drooping) - continuous whip articulation. |
| 80 | `concept-thermometer` | Thermometer | nature | Crimson column at visibly different heights (29-14C) with readout tracking - continuous large rise/fall. |
| 81 | `concept-raingauge` | Rain Gauge | nature | Cyan water column at different fill levels each frame (12-0-4mm) - continuous level motion. |
| 82 | `concept-flower` | Daisy Bloom | garden | 7 frames at 520ms catch the unfurl mid-transition (closed bud, half-open, full bloom) plus visible head sway - continuous bloom cycle. |
| 83 | `concept-watering-can` | Watering Can | garden | Can at different tilts incl. mid-pour with droplets; sprout grows - staged large motion. |
| 84 | `concept-bee` | Bee | garden | Bee at a clearly different position every frame - continuous looping flight. |
| 85 | `concept-butterfly` | Butterfly | garden | Butterfly at different tile positions every frame - continuous traverse. |
| 86 | `concept-ladybug` | Ladybug | garden | Ladybug at progressively different positions along the leaf - continuous walk. |
| 87 | `concept-flytrap` | Venus Flytrap | garden | Large bright red trap head occupies a visibly different pose in nearly every 520ms interval (rotation + open/close ~10-20deg) - continuous geometric motion, not the brief-snap-only read the code suggested. |
| 88 | `concept-stapler` | Stapler | home | Large red head at visibly different open/closed angles in every frame - the snap cycle lands in every interval. |
| 89 | `concept-sharpener` | Pencil Sharpener | home | Pencil at different feed depths and crank at different orbit points; shavings fall - continuous mechanism. |
| 90 | `concept-stamp` | Rubber Stamp | home | Stamp assembly at different travel/press positions incl. APPROVED impressions - motion spans the loop. |
| 91 | `concept-typewriter` | Typewriter | home | Typed text progresses, carriage/typebar states differ every frame - continuous chug. |
| 92 | `concept-bowling` | Bowling Strike | games | Ball at different lane positions and pins caught mid-scatter; STRIKE phase - large staged motion. |
| 93 | `concept-golf` | Golf Putt | games | Ball at different green positions through to holed-out - continuous roll. |
| 94 | `concept-billiards` | Billiards Break | games | Rack, cue strike and scatter states across frames - large multi-ball motion. |
| 95 | `concept-hummingbird` | Hummingbird | birds | Bird at different hover positions around the flower with wing blur - continuous flitting. |
| 96 | `concept-woodpecker` | Woodpecker | birds | At 250ms the head visibly alternates trunk-contact/pulled-back in most intervals (~10px rapid hammer arcs) - fast repetitive geometric motion on the main subject. |
| 97 | `concept-peacock` | Peacock | birds | Fan folded, fully displayed, and half-closed across frames - large open/close sweeps. |
| 98 | `concept-hatchling` | Hatchling | birds | Egg intact, hatched with chick, chick in shell, reset - staged motion events across the loop. |
| 99 | `concept-sewing-machine` | Sewing Machine | textile | Red fabric marker travels steadily across the bed frame-to-frame; needle/take-up chug - continuous mechanism motion. |
| 100 | `concept-loom` | Loom | textile | Shuttle at different traverse positions and warp shed reconfigures - continuous weaving cycle. |
| 101 | `concept-zipper` | Zipper | textile | Chrome slider at very different heights with teeth open/closed - continuous travel. |
| 102 | `concept-scissors` | Scissors | textile | Shears at different advance positions; ribbon halves peel - continuous cutting traverse. |
| 103 | `concept-coinflip` | Coin Flip | city | Gold coin at different toss heights with tumble squash - continuous large arc. |
| 104 | `concept-atm` | Cash Machine | city | 8 frames at 520ms: purple card slides between slot positions and green bills eject/rise across several frames alongside the screen sequence - real recurring movers, not just content swaps. |
| 105 | `concept-balance-scale` | Balance Scale | city | Brass beam at different tilts (level/right-down/left-down) with pans tracking - large continuous tilt cycle. |
| 106 | `concept-spinning-top` | Spinning Top | toys | Top upright with streaks, then tilted, then toppled flat across the 4 frames - precession and topple are large visible pose changes. |
| 107 | `concept-jackbox` | Jack-in-the-Box | toys | Closed, lid flipped open, jester popped - large staged motions across the loop. |
| 108 | `concept-slinky` | Slinky | toys | Rainbow coil at different cascade positions/orientations every frame - continuous end-over-end travel. |
| 109 | `concept-blocks` | Building Blocks | toys | Stack, single block falling high, landed, restacked - large drops across frames. |
| 110 | `concept-windup-robot` | Wind-up Robot | toys | Arms/legs/key at different march poses every frame - continuous 1Hz march. |
| 111 | `concept-spider` | Spider | garden | Bright gold-banded spider at clearly different heights on its silk line each frame - continuous drop/reel travel. |
| 112 | `concept-ant` | Ant | garden | Ant at different trail positions (incl. reaching the anthill with crumb) - continuous scuttle. |
| 113 | `concept-dragonfly` | Dragonfly | garden | Dragonfly at different positions/orientations incl. perched and darting - continuous flight. |
| 114 | `concept-grasshopper` | Grasshopper | garden | Insect visible in 6 of 7 frames at dramatically different positions/poses (crouch, mid-leap, landing) - large-amplitude motion lands in essentially every glance window. |
| 115 | `concept-caterpillar` | Caterpillar | garden | Worm at different leaf positions with compressed/stretched hump states - continuous crawl. |
| 116 | `concept-nautilus` | Nautilus | ocean | Shell at different positions/rotations with jet plume - continuous thrust-glide cycle. |
| 117 | `concept-manta` | Manta Ray | ocean | Pectoral wings at different flap states every frame - continuous articulated flapping. |
| 118 | `concept-octopus` | Octopus | ocean | Arm poses visibly differ in every 620ms interval (curl/spread/droop of large bright arms) - continuous aggregate wriggle of the main subject. |
| 119 | `concept-accordion` | Accordion | music | Red end-board at different positions with bellows folds visibly compressed/expanded - continuous squeeze cycle. |
| 120 | `concept-violin-bow` | Violin Bow | music | Bow at clearly different stroke positions/angles every frame - continuous bowing. |
| 121 | `concept-marimba` | Marimba | music | Blue/pink mallet heads at different bar positions every frame with strike glows - continuous alternation. |
| 122 | `concept-theremin` | Theremin | music | Orange hand at different distances from the pitch rod each frame; VU bars track - continuous sweep. |
| 123 | `concept-falcon-stoop` | Falcon Stoop | birds | Falcon at very different dive positions/poses with speed streaks - large fast staged motion. |
| 124 | `concept-ostrich` | Ostrich | birds | Legs at clearly different stride phases every frame with dust kicks - continuous run cycle. |
| 125 | `concept-albatross` | Albatross | birds | Bird at different soar positions/banks every frame - continuous glide. |
| 126 | `concept-embroidery-hoop` | Embroidery Hoop | textile | Needle rig at different hoop positions every frame; pattern grows - continuous punching travel. |
| 127 | `concept-pinking-shears` | Pinking Shears | textile | Blades at different scissor angles with growing zigzag edge and falling clippings - continuous snipping. |
| 128 | `concept-drop-spindle` | Drop Spindle | textile | Whorl squash-rotation states and rig height visibly differ across frames - continuous spin/drop. |
| 129 | `concept-tatting-shuttle` | Tatting Shuttle | textile | Amber shuttle at clearly different figure-8 positions every frame - continuous looping. |
| 130 | `concept-newtons-cradle` | Newton's Cradle | toys | End balls at different swing positions across frames (left ball clearly raised once) - continuous alternation. |
| 131 | `concept-marbles-run` | Marble Run | toys | Pink marble at a different course position every frame - continuous full-course run. |
| 132 | `concept-kaleidoscope` | Kaleidoscope | toys | Gem rosette at clearly different rotations with morphing petals - continuous rotation. |
| 133 | `concept-astral-projection` | Astral Projection | arcane | Astral double at different levitation heights/stream states across frames - continuous rise cycle. |
| 134 | `concept-broom` | Enchanted Broom | arcane | Broom at different lean angles/floor positions every frame - continuous banking sweep. |
| 135 | `concept-geneva-drive` | Geneva Drive | mech | Ruby pin at a clearly different orbit position every frame; cross indexes - continuous driver rotation. |
| 136 | `concept-vise-anvil` | Vise & Anvil | mech | Hammer at different swing angles with sparks; jaw slides - continuous strike cycle. |
| 137 | `concept-centrifugal-governor` | Centrifugal Governor | mech | Flyball arms at clearly different spread angles every frame - continuous governor swing. |
| 138 | `concept-foosball` | Foosball | games | Ball at different field positions with rod/player states changing - continuous play. |
| 139 | `concept-tesseract` | Tesseract | geometry | Nested cubes at clearly different rotation/inversion states every frame - continuous 4D tumble. |
| 140 | `concept-drawbridge` | Drawbridge | city | Spans at different raise angles (65deg to flat) with ship crossing - large staged rotation. |
| 141 | `concept-ferrofluid` | Ferrofluid | lab | Spike cluster morphs and translates 18px vertically (translateY -12px to +6px) along magnetic field lines at 2.4s alternate - continuous geometric spike growth. |
| 142 | `concept-solenoid-engine` | Solenoid Engine | mech | Iron plunger armature translates 24px into solenoid coil at 1.4s driving connecting rod and 360° flywheel rotation - continuous mechanism motion. |
| 143 | `concept-geyser` | Geothermal Geyser | nature | Thermal water and steam column shoots 42px vertically at 2.4s cycle with vent splashing - large continuous staged vertical eruption. |
| 144 | `concept-stroboscope` | Stroboscope | retro | Slotted shutter disc rotates 360° continuously at 1.8s while strobe illumination pulses - continuous rotating disc motion. |
| 145 | `concept-ball-lightning` | Ball Lightning | nature | Luminous plasma orb translates 32px horizontally and 22px vertically along chaotic 2D wander at 2.8s - continuous bright mover travel. |
| 146 | `concept-tourbillon` | Tourbillon | mech | Escapement carriage rotates 360° continuously over 4.0s while balance spring oscillates ±30° at 0.8s - compound continuous mechanism rotation. |
| 147 | `concept-sextant` | Sextant | ocean | Index arm sweeps ±22° arc (~26px tip sweep) across graduated arc at 3.4s with vernier index and telescope tracking - continuous angular sweep. |
| 148 | `concept-pneumatic-tube` | Pneumatic Tube | city | Brass carrier capsule translates 84px along curved delivery tube at 2.8s - large continuous translation of filled capsule. |
| 149 | `concept-water-wheel` | Water Wheel | mech | 44px spoked bucket wheel rotates 360° continuously at 3.2s with water chute stream - continuous rotation of prominent wheel. |
| 150 | `concept-caliper` | Vernier Caliper | mech | Sliding vernier jaw translates 28px horizontally along main graduated scale at 3.0s alternate - continuous linear traverse. |
| 151 | `concept-calliope` | Steam Calliope | music | Four steam whistle valves oscillate 12px vertically with steam jets flaring in musical sequence at 1.6s - continuous valve mechanism motion. |
| 152 | `concept-antikythera` | Antikythera Mechanism | mech | Main drive wheel (360°/4.8s) meshes with differential planetary gears and pointer indicators - continuous meshed gear train rotation. |
| 153 | `concept-planchette` | Planchette | occult | Heart-shaped wooden planchette translates 36px across board along figure-8 track at 3.2s - continuous high-contrast glide. |
| 154 | `concept-matter-synthesizer` | Matter Synthesizer | scifi | Dual focus emitter arms translate 20px horizontally while central crystal lattice articulates - continuous mechanism positioning. |
| 155 | `concept-will-o-wisp` | Will-o'-the-Wisp | occult | Glowing cyan orb wanders 28px horizontally and 18px vertically across field at 2.2s - continuous bright mover traverse. |
| 156 | `concept-origami-crane` | Origami Crane | birds | Paper crane wings flap ±25° (~20px wingtip sweep) continuously at 1.8s - continuous articulated wing motion. |
| 157 | `concept-jacquard-loom` | Jacquard Loom | textile | Punched card chain advances 24px vertically while selector needle hooks reciprocate 16px at 2.0s - continuous mechanism cycle. |
| 158 | `concept-harmonograph` | Harmonograph | geometry | Dual pendulum arms swing ±18° driving drawing pen across 40px Lissajous trajectory over 4.0s - continuous compound harmonic motion. |
| 159 | `concept-dipping-bird` | Dipping Bird | toys | Glass bird tilts ±35° (~30px beak arc) dipping into water cup at 3.2s cycle with internal fluid transfer - continuous rocking cycle. |
| 160 | `concept-astrolabe` | Astrolabe | space | Openwork rete pointer framework rotates 360° continuously over 6.0s across coordinate plate - continuous rotating astronomical dial. |
| 161 | `concept-pachinko` | Pachinko Machine | games | Steel ball cascades down 52px vertical pin field bouncing between deflection pins at 2.4s - continuous cascading traverse. |
| 162 | `concept-tellurion` | Tellurion | space | Earth globe orbits sun at 40px radius (360°/5.0s) while moon circles earth at 1.6s - continuous multi-body orbital motion. |
| 163 | `concept-aneroid-barometer` | Aneroid Barometer | lab | Corrugated metal vacuum capsule compresses 6px driving main indicator pointer ±28° (~22px tip arc) at 2.8s - continuous needle sweep. |
| 164 | `concept-jansen-linkage` | Jansen Linkage | mech | 8-bar Jansen walking leg linkage articulates through full 32px stride cycle at 2.2s - continuous kinematic mechanism motion. |
| 165 | `concept-stirling-engine` | Stirling Engine | mech | Displacer and power pistons reciprocate 18px in 90° quadrature driving 360° flywheel at 1.6s - continuous engine mechanism cycle. |
| 166 | `concept-jacobs-ladder` | Jacob's Ladder | lab | High-voltage spark arc climbs 44px vertically between diverging V-electrodes before breaking at 1.8s - continuous climbing arc sweep. |
| 167 | `concept-singing-bowl` | Singing Bowl | music | Wooden friction striker rotates 360° around bowl rim at 2.4s while acoustic standing waves oscillate - continuous circular traverse. |
| 168 | `concept-planimeter` | Polar Planimeter | lab | Tracer arm sweeps ±25° and measuring wheel translates along irregular contour over 4.0s cycle - continuous linkage articulation. |
| 169 | `concept-trip-hammer` | Trip Hammer | mech | Water-driven cam rotates 360° lifting heavy pivoted hammer that drops 28px strike onto anvil at 1.4s - large continuous strike motion. |
| 170 | `concept-spinthariscope` | Spinthariscope | lab | Coordinated zinc-sulfide scintillation flashes pulse and scale (0.2→1.0) along radial alpha paths at 1.8s - continuous coordinated emission on core subject. |
| 171 | `concept-funicular` | Funicular Railway | city | Dual counterbalanced cable cars translate 54px along 30° inclined railway over 4.5s - continuous large translation of filled cars. |
| 172 | `concept-pantograph` | Pantograph | mech | Bright white linkage arm sweeps ~28px tip travel (22deg over a ~72px arm) continuously at 3.5s, plus two glowing tracer/pen dots continuously loop-tracing their curves. |
| 173 | `concept-cuckoo-clock` | Cuckoo Clock | home | Bright green/white pendulum leaf bob swings continuously ±14deg (~12px tip) at 1.6s, close to the comb-rock Partially precedent, plus the white cuckoo bird pops out on a ~45% duty cycle. |
| 174 | `concept-fresnel-lens` | Fresnel Lens | lab | A bright translucent-green beam wedge sweeps +/-14deg (~29px tip arc) continuously at 4s as the concept's core collimated-beam action; lamp flicker and dash-marching rays are discounted intensity. |
| 175 | `concept-galton-board` | Galton Board | games | Bright glowing 7px white balls (strong glow) bounce through the pegboard over a 58px vertical path continuously (staggered so one is always moving) — clears the calibrated Partially sweep threshold, bigger/brighter than the tiny-mover precedents. |
| 176 | `concept-escapement-deadbeat` | Graham Deadbeat Escapement | mech | A 10px bright green pendulum bob swings ~28px (+/-12deg over a 68px rod) continuously at 2s, well past the moderate-sweep threshold; the escape wheel also visibly steps. |
| 177 | `concept-herons-fountain` | Heron's Fountain | mech | Bright white-cyan jet visibly grows/shrinks 16px continuously at a fast 1.2s cycle, plus both chamber water levels shift ~7-9px in alternation. |
| 178 | `concept-volvelle` | Volvelle Astronomical Wheel | retro | A 40px bright white-tipped index pointer completes a full rotation every 6s, matching the calibrated wheel/needle Partially precedent; middle and lunar discs also continuously rotate underneath. |
| 179 | `concept-peaucellier-linkage` | Peaucellier-Lipkin Linkage | mech | A 9px bright white tracer dot moves 44px vertically continuously at 3s, plus two smaller rhombus-joint dots articulate alongside it. |
| 180 | `concept-heliostat` | Heliostat Array | systems | A 10px bright glowing sun orb sweeps 88px continuously across nearly the full tile width; mirror facets also visibly tilt +/-35deg in sync. |
| 181 | `concept-barycenter-binary` | Binary Star Barycenter | space | Two bright glowing stars (14px cyan primary, 9px orange secondary) continuously orbit the barycenter every 4s at up to ~34px radius, directly matching the tellurion orbiting-globe Partially precedent. |
| 182 | `concept-seiche-oscillation` | Lake Seiche Oscillation | nature | The large translucent-cyan water plane sloshes +/-14deg continuously (~24px sweep at its lower edge) at 4s, directly matching the comb-rock +/-15deg Partially precedent; gauge floats also see-saw 14px. |
| 183 | `concept-treadwheel-crane` | Medieval Treadwheel Crane | mech | 48px orange spoked treadwheel rotates continuously 360deg/4s (matches the water-wheel bright-spoke Partially precedent), plus the hoisted stone block visibly rises/falls 24px on the crane cable. |
| 184 | `concept-bubble-chamber` | Glaser Bubble Chamber | lab | Four small nucleation bubbles blink near-full-swing (opacity 0.3->1, scale 0.4->1.2) staggered continuously along the tracks — matches the spinthariscope coordinated-blinking exception since the bubbles ARE the concept's core visual. |
| 185 | `concept-anaphoric-clock` | Anaphoric Clepsydra Clock | retro | A bright white clepsydra float rises/falls 56px continuously within its narrow tube over 8s — a large, clearly visible sweep that clears the Partially threshold despite the narrow tube, unlike the smaller torricelli-barometer mercury column. |
| 186 | `concept-chromatography` | Paper Chromatography Separation | lab | Four bright colored pigment bands (20x4px, glowing) rise up to 40px continuously over 6s (~70% duty) alongside a rising solvent front, clearly exceeding the Partially sweep threshold. |
| 187 | `concept-trapjaw-strike` | Trap-Jaw Mandible Snap | garden | Two bright white/green mandible blades snap through an 85deg arc (~36px tip sweep each), visible across ~45% of the 2s loop — right at the duty threshold but large/bright/fast enough to read as clear motion, the concept's whole point. |
| 188 | `concept-maelstrom-vortex` | Oceanic Maelstrom Vortex | ocean | The full 82px asymmetric spiral-arm pattern (bright glowing cyan strokes) rotates continuously 360deg/4s — large and fast, though thin-stroke rather than filled so short of Fully. |
| 189 | `concept-tide-clock` | Lunar Tide Clock Dial | home | A 30px bright white/cyan tide hand with a glowing arrow tip completes a full rotation every 8s — matches the calibrated rotating-needle Partially precedent. |
| 190 | `concept-bimetallic-coil` | Bimetallic Spiral Thermostat | mech | The bright gold/white bimetallic spiral (the concept's main subject) rocks +/-12deg continuously (~16px tip sweep at its outer radius) at 4s, matching the jansen-linkage rocking-triangle Partially precedent. |
| 191 | `concept-dendrochronology` | Dendrochronology Tree Core | bio | A bright glowing yellow-white 5px scanner cursor sweeps 70px continuously across the wood core every 4s — a large, unmissable sweep matching the matter-synthesizer scanline Partially precedent. |
| 192 | `concept-phantasmagoria` | Phantasmagoria Projector | arcane | The bright glowing ghost specter (32x38px, white/purple) scales dramatically 0.7->1.25 (~79% size change) plus a 6px bob, continuously at 3s — similar to the erupting-geyser Partially case; lantern also rolls 10px. |
| 193 | `concept-peristaltic-pump` | Peristaltic Roller Pump | mech | Three bright white/cyan 10px roller balls continuously orbit a 14px-radius circle every 3s as the pump rotor spins — a fast, clearly visible circular sweep of filled bright elements, the concept's core mechanism. |
| 194 | `concept-pyriform-egg` | Pyriform Cliff-Ledge Egg | birds | The bright teal/green pyriform egg (the concept's entire subject) wobbles through a 42deg arc continuously (~24px tip sweep) at 2.4s, directly illustrating why the egg rolls in circles instead of off the cliff. |
| 195 | `concept-lock-gate` | Canal Miter Lock Gate | city | A bright orange 22x10px boat rises/falls 24px continuously over 6s, the translucent water level shifts ~38px, and the gate leaves swing through a 57deg arc (~36px tip) — multiple clear continuous geometric sweeps on the concept's main elements. |
| 196 | `concept-cribbage-board` | Cribbage Pegboard Tracker | games | Two bright brass/silver pegs (5x9px, glowing) continuously leapfrog across the full 72px board width with an 8px hop each step, every 3s — a large, clear, unbroken sweep of the game's core action. |
| 197 | `concept-fluting-iron` | Victorian Fluting Iron | textile | Two 24px fluted rollers with a bright orange/gold conic-gradient pattern spin 360deg/2s in opposite directions — a fast, clearly patterned rotation (not a plain circle) matching the spoked-wheel Partially precedent. |
| 198 | `concept-balance-syphon` | Belgian Balance Coffee Siphon | home | The balance arm (carrying a bright gold boiler and glowing glass carafe at its tips) rocks +/-8deg continuously over 5s, giving each vessel an ~11px tip sweep — just clears the calibrated Partially threshold. |
| 199 | `concept-dowsing-rods` | Divining Dowsing Rods | occult | Each 44px-long glowing gold dowsing wire sweeps ~54px continuously through a 70deg arc every 4s as the rods cross — a large, bright, unmissable sweep that is literally the concept's core action. |
| 200 | `concept-alcubierre-bubble` | Alcubierre Metric Bubble | scifi | Six colored (cyan/red) curved contraction/expansion wave lines continuously translate 16px at a fast 1.2s pace — the concept's entire visual point; the ring itself is a near-no-op (plain circle) intensity pulse. |
| 201 | `concept-carrom-board` | Carrom Board & Striker | games | The bright white/blue striker disc (11px) sweeps 24px up and back across ~40% of the 3s loop as it 'flicks' — right at the duty threshold but bright/sized enough to register; the queen coin's pocketing motion is a much briefer ~15%-duty snap. |
| 202 | `concept-pythagorean-monochord` | Pythagorean Monochord | music | The bright cream/gold movable bridge (6x18px, glowing) slides 21px continuously between ratio positions every 6s — a clear sweep exceeding the Partially threshold; the vibrating string is a fast but tiny (~6px) shimmer. |
| 203 | `concept-hexaflexagon` | Hexaflexagon Folding Cycle | geometry | The large (76px, ~65% of tile) brightly colored hexagon continuously scales 0.6->1.05 (a ~75% size swing) while rotating through 240deg over 4s — big and saturated, though moderate rather than fast speed keeps it short of Fully. |
| 204 | `concept-antlion-pit` | Antlion Sand Pitfall | garden | The glowing orange-red prey ant (9x6px) slides ~33px into the pit continuously across 80% of the 3s loop — a clear, sustained sweep depicting the concept's core predation action. |
| 205 | `concept-psychograph` | Psychograph Automatic Writing | occult | The bright gold brass writing armature (44px rod + pen nib) both rotates 25deg and translates ~27px continuously over 4s, tracing across the page — matches the harmonograph arm-sweep Partially precedent. |
| 206 | `concept-cash-carrier` | Overhead Wire Cash Carrier | city | The trolley shuttle (with bright gold pulley wheels and a glowing cash cup) glides 46px continuously between stations across 70% of the 4s loop — a large, clear, well-sustained sweep. |
| 207 | `concept-rigid-heddle` | Rigid Heddle Loom Shed | textile | The heddle frame (12x52px) rises/falls 20px continuously while the bright orange-red shuttle (22x6px, glowing) darts 46px across ~40% of the 3s loop — multiple clear sweeps depicting the core weaving action. |
| 208 | `concept-reuleaux-rotor` | Reuleaux Constant-Width Rotor | geometry | The 54px translucent-green Reuleaux triangle (bright glowing outline) rotates a full 360deg every 3s continuously plus a small 4px orbital wobble — a fast, large, clearly-shaped rotation; short of Fully since the fill is only 25% opacity. |
| 209 | `concept-crinoline-cage` | Victorian Crinoline Cage | textile | The full crinoline cage (with white-bordered hoop rings) rocks +/-8deg continuously over 3s, giving the outermost 72px hoop a ~10px tip sweep — just clears the calibrated threshold at a faster pace than similar slow-rock cases. |
| 210 | `concept-viking-sunstone` | Viking Sunstone Polarizer | ocean | The bright white/cyan/gold sunstone crystal (32px, gradient+glow) rotates through a 52deg arc continuously (~18px tip sweep) over 6s — brighter and larger-swing than the similar calcite-birefringence Little case. |
| 211 | `concept-kalliroscope` | Kalliroscope Rheoscopic Flow | lab | The full-chamber swirl pattern (thin white dashed streamlines) rotates 360deg/6s while also dash-marching, filling most of the 78px chamber — similar large/bright continuous swirl to the maelstrom-vortex Partially case. |
| 212 | `concept-pelican-pouch` | Pelican Gular Pouch Scoop | birds | The translucent yellow-pink gular pouch dramatically scales (0.4x->1.3x, ~34px effective height change) continuously over 4s as it 'scoops' — matches the erupting-geyser Partially precedent. |
| 213 | `concept-bullroarer` | Aerodynamic Bullroarer | music | The 14x32px wood-grain blade (gold-bordered, glowing) sweeps a large ~70px-diameter circle continuously every 1.2s while also fluttering fast — a fast, large-radius spin matching multiple orbiting-element Partially precedents. |
| 214 | `concept-bat-echolocation` | Bat Biosonar Echolocation | bio | Four colored (cyan outgoing, magenta returning) dashed sonar arcs continuously translate 35px across the stage — a large, clear, colorful sweep depicting the concept's whole point; the bat/moth flutters are only sub-3px tiny bobs. |
| 215 | `concept-butter-churn` | Wooden Dasher Butter Churn | home | The bright cream-colored dasher plunger (18x60px) plunges up/down 22px continuously every 2s — a clear, sustained sweep depicting the churn's core dashing action; butter-grain splashes add small 14px bright dots. |
| 216 | `concept-cable-car-grip` | Underground Cable Car Grip | city | The red/pink grip lever (22px, bright-bordered) rocks +/-15deg continuously over 4s (~12px tip sweep) — just clears the calibrated threshold; the underground cable is a discounted texture march (background-position shift). |
| 217 | `concept-gecko-setae` | Gecko Nanoscale Setae Pad | bio | The green seta stalk (12x46px) both rotates 22deg and translates 6px continuously over 3s (~18px tip sweep) simulating shear-adhesion — the concept's core mechanism, clearing the Partially threshold. |
| 218 | `concept-hoopoe-crest` | Hoopoe Erectile Crown Crest | birds | The crest fan (5 colorful gradient feathers, 44x32px) rotates 35deg while scaling 0.4x->1x (2.5x growth) across 40% of the 3.5s loop — a dramatic, clearly visible fan-opening display, the concept's core action. |
| 219 | `concept-ribbon-flip-blocks` | Jacob's Ribbon Flip Toy | toys | Three bright colored blocks (red/blue/gold, 38x10px) cascade through rotation (90deg swing) and edge-on scaleX flips (~30px effective width collapse) across the 2.4s loop at ~40% duty each — a dynamic, clearly visible tumbling cascade. |
| 220 | `concept-feather-shuttlecock` | Aerodynamic Feather Shuttlecock | games | The shuttlecock (white cork + translucent feather skirt, 36x24px) continuously traces a large flight arc (~50px+ range in both axes) across the full 3s rally loop — a big, sustained, unmissable sweep. |
| 221 | `concept-soil-liquefaction` | Seismic Soil Liquefaction | geology | The gray building block visibly sinks 8px while tilting through a dramatic 22deg swing continuously over 4s — a clear, unmissable 'sinking structure' visual (the concept's core point) even though net displacement is modest; seismic shake and sand boil are smaller/discounted supporting effects. |
| 222 | `concept-vigenere-tabula` | Vigenère Tabula Recta Matrix | cipher | Two colored (pink/cyan) crosshair lines sweep 28px and 36px continuously across the full tabula grid over 4s — a large, clear scanning motion, similar to the dendrochronology scanner-cursor Partially precedent despite the thin 1px lines. |
| 223 | `concept-wheatstone-cryptograph` | Wheatstone Clockwork Cryptograph | cipher | Two colored needle hands (26px gold plaintext hand, 18px red ciphertext hand) both rotate continuously at ~8s and ~7.7s respectively — directly matching the calibrated rotating-needle Partially precedent. |
| 224 | `concept-cardan-grille` | Cardan Steganographic Grille | cipher | The large perforated grille plate (52x52px) slides 10px diagonally across 40% of the 4s loop — just clears the calibrated Partially sweep threshold at an uncapped duty cycle. |
| 225 | `concept-adfgvx-cipher` | ADFGVX Fractionation Matrix | cipher | A translucent green row-highlight steps through 6 positions (34px total range) every 0.5s continuously — a fairly brisk scanning cadence down the Polybius grid, clearing the Partially threshold despite being stepped rather than smooth. |
| 226 | `concept-praxinoscope-drum` | Praxinoscope Mirror Drum | optics | The 56px rotor (dashed outer ring + 12-facet mirror prism) rotates continuously 360deg/6s, filling most of the stage — a large, moderately fast rotation matching swirl/wheel Partially precedents. |
| 227 | `concept-phenakistiscope-disk` | Phenakistiscope Slotted Strobe Disk | optics | The 60px strobe disk (with 8 white phase-figure dots at ~18px radius) rotates continuously 360deg/4s, filling most of the stage — a large, moderately fast rotation matching wheel/dial Partially precedents. |
| 228 | `concept-mutoscope-reel` | Mutoscope Flipbook Reel | optics | The gold crank arm (12px) completes a full rotation every 2s continuously, matching the calibrated orbiting-crankpin Partially precedent; the flip-card also fast-cycles through translate+28deg rotation every 0.4s. |
| 229 | `concept-zoopraxiscope-projector` | Zoopraxiscope Projection Disk | optics | Two counter-rotating discs (36px glass picture disk at 6s, 38px dashed shutter disk at 3s, reverse direction) create a dynamic differential spin filling ~42% of the stage — matches wheel-rotation Partially precedents. |
| 230 | `concept-anorthoscope-distort` | Anorthoscope Anamorphic Disk | optics | Two large counter-rotating discs (60-62px, ~68% of the stage) spin at 5s and 4s respectively — the front disc's 4 bright white radial slit lines are clearly visible sweeping around continuously, matching the zoopraxiscope counter-rotating-disc Partially precedent. |
| 231 | `concept-nocturnal-dial` | Nocturnal Star Clock Dial | navigation | The bright gold alidade pointer (28px, arrowhead tip) sweeps through a 115deg arc continuously (~56px tip sweep) over 6s — directly matching the astrolabe/needle-sweep Partially precedent. |
| 232 | `concept-chip-log` | Chip Log & Knot Line | navigation | The 20px reel spool (bright gold crossbars) spins continuously 360deg/2s — a fast, clearly visible wheel rotation matching the water-wheel/spoke Partially precedent; the drogue board only bobs ~4-5px. |
| 233 | `concept-pelorus-dial` | Pelorus Bearing Sighter | navigation | The alidade sighting vane (26px, gold+white) sweeps through a 115deg arc continuously (~52px tip sweep) over 6s — directly matching the nocturnal-dial/astrolabe rotating-arm Partially precedent. |
| 234 | `concept-cross-staff` | Jacob's Cross-Staff | navigation | The sliding transversal cross-vane (5x40px, gold-accented) translates 18px continuously along the staff over 4s — clears the calibrated Partially sweep threshold; star/horizon sight rays are discounted dash-offset marches. |
| 235 | `concept-hadley-octant` | Hadley Reflecting Octant | navigation | The bright gold index arm (46px) sweeps through a 35deg arc continuously (~28px tip sweep) over 4s — clears the calibrated Partially threshold; the light beam is a discounted dash-offset march. |
| 236 | `concept-lead-sounding` | Deep Sea Sounding Lead | navigation | The sounding lead assembly (fathom line + conical gray weight) drops 20px continuously over 3.5s — a clear, moderate-speed sweep depicting the sounding action; the sediment puff is a supporting intensity+scale effect. |
| 237 | `concept-station-pointer` | Three-Arm Station Pointer | navigation | Two independent gold vernier arms (28px each) both sweep 30deg (~15px tip each) continuously over 4s in a scissoring motion — clears the calibrated Partially threshold with two simultaneous movers. |
| 238 | `concept-grasshopper-escapement` | Grasshopper Articulated Escapement | horology | The escape wheel steps through 8 positions every 2s (0.25s per step — a fast, visibly jittery ratcheting cadence, unlike slower stepped cases) while both grasshopper leg-pallets simultaneously swing ~6px each; combined this reads as continuous mechanical motion. |
| 239 | `concept-duplex-escapement` | Duplex Chronometer Escapement | horology | The 36px balance crossbar swings through a 60deg arc continuously every 1s (~19px tip sweep, fast) — clearly exceeds the Partially threshold; the duplex escape wheel also steps fast (0.25s/step). |
| 240 | `concept-verge-foliot` | Verge & Foliot Crown Escapement | horology | The 56px foliot balance bar swings through a 40deg arc continuously every 2s (~20px tip sweep) — clears the Partially threshold; the verge spindle counter-twists a smaller ~7px, and the crown wheel's step is a near-1px no-op. |
| 241 | `concept-anchor-recoil` | Anchor Recoil Escapement | horology | The anchor pallet frame (gold claws) swings 32deg continuously (~13px tip sweep) over 2s while the escape wheel smoothly rotates ~45deg with a recoil kick (not stepped, unlike other escapements here) — combined continuous motion clears the Partially threshold. |
| 242 | `concept-cylinder-escapement` | Cylinder Frictional Escapement | horology | The 40px balance crossbar swings through a 90deg arc continuously every 2s (~31px tip sweep) — clearly exceeds the Partially threshold; the escape wheel also steps fast (0.25s/step) beneath it. |
| 243 | `concept-chronometer-detent` | Spring-Detent Marine Escapement | horology | The balance roller assembly swings +/-35deg continuously every 2s (~11px sweep) while the escape wheel steps fast (0.25s/step) — matches the calibrated escapement Partially precedents from this batch. |
| 244 | `concept-gridiron-pendulum` | Harrison Gridiron Pendulum | horology | The full gridiron pendulum assembly (46px, with a bright gold/brass bob) swings 36deg continuously (~29px tip sweep) over 2.4s — clearly exceeds the Partially threshold, matching pendulum-swing precedents. |
| 245 | `concept-clepsydra-clock` | Ctesibius Clepsydra Water Clock | horology | The float+rack assembly rises/falls 14px continuously over 4s while the linked dial-gear's red pointer needle sweeps ~10.5px through 60deg — both clear the calibrated Partially threshold. |
| 246 | `concept-baudot-distributor` | Baudot Multiplex Distributor | telecom | The bright white wiper arm (28px, glowing gold contact tip) sweeps a full continuous rotation every 4s — directly matches the calibrated rotating-needle Partially precedent; the 4-sector color pulses are intensity-only. |
| 247 | `concept-wheatstone-abc` | Wheatstone ABC Dial Telegraph | telecom | The red pointer needle jumps ~25px per 72deg step, stepping around the dial once per second (6 steps/6s) — a large-amplitude, brisk-enough cadence to read as active motion, between the alberti-disk (Little) and adfgvx (Partially) stepped precedents but closer to the latter given the large jump size. |
| 248 | `concept-marconi-detector` | Marconi Magnetic Detector | telecom | Two 20px pulley wheels (green-bordered, cross-spoke pattern) both rotate continuously 360deg/4s — the visible spoke cross sweeping through all angles reads as real windmill-like motion; the wire loop is a discounted dash-march. |
| 249 | `concept-hughes-telegraph` | Hughes Printing Telegraph | telecom | The 32px typewheel disk (with character labels) rotates continuously 360deg/3s — matches the wheel-rotation Partially precedent; the platen hammer only strikes 4px and the paper ribbon is a discounted dash-march. |
| 250 | `concept-strowger-switch` | Strowger Rotary Stepper Switch | telecom | The wiper shaft steps through vertical lift (8px) then rotary scan (25deg, ~5.8px) in 6 discrete jumps over 4s (~0.67s/step) — a reasonably brisk two-motion selector action, similar cadence to the adfgvx-cipher stepped Partially precedent. |
| 251 | `concept-siphon-recorder` | Kelvin Siphon Recorder | telecom | The bright white capillary siphon tube (28px) vibrates through an 18deg arc fast (0.8s, ~9px tip sweep) — just clears the calibrated threshold; the wavy ink trace uses a solid dasharray ('30 0') so its scroll animation is a likely near-no-op, similar to the flagged phonautograph case. |
| 252 | `concept-rotary-spark-gap` | Rotary Quenched Spark Gap | telecom | The 40px rotor disc (with 8 bright orange 6px stud electrodes at ~18px radius) spins continuously 360deg/1.5s — fast, large, and clearly visible, strongly matching the wheel-rotation Partially precedent. |
| 253 | `concept-edison-tinfoil` | Edison Tinfoil Phonograph | acoustics | The tinfoil mandrel (28x18px, light gray with foil texture) rotates via rotateX without perspective, producing a visible squash-and-recover cycle every 2.4s similar to the thaumatrope Fully precedent but on a smaller/less saturated element; the crank arm also completes a full rotation every 2.4s. |
| 254 | `concept-manometric-flame` | Koenig Manometric Flame | acoustics | The 4-sided mirror box (26x38px) rotates via rotateY without perspective, producing a visible squash-and-recover cycle every 3.2s similar to the edison-tinfoil/thaumatrope precedent; the burner flame and diaphragm are fast but tiny flickers, and the sawtooth waveform's dasharray ('30 0') likely makes its scroll a near no-op. |
| 255 | `concept-poulsen-telegraphone` | Poulsen Magnetic Telegraphone | acoustics | Two 26px spoked brass reels both rotate continuously 360deg/1.8s — the visible gold spoke cross sweeping through all angles reads as real motion, matching the marconi-detector/spoked-wheel Partially precedent; the wire span is a discounted dash-march. |
| 256 | `concept-ramsden-theodolite` | Ramsden 3-Foot Geodetic Theodolite | surveying | The bright gold telescope tube (48px) sweeps through a 40deg arc continuously (~17px tip sweep) over 3.6s — clears the calibrated Partially threshold; the azimuth ring is an intensity-only glow pulse and the sight beam is a discounted dash-march. |
| 257 | `concept-borda-repeating-circle` | Borda Repeating Circle | surveying | Two independent telescope bars (48px each, gold-accented) rotate in opposite scissoring motion — the upper one sweeps 60deg (~25px tip) continuously over 4s — clearly exceeds the Partially threshold. |
| 258 | `concept-jacobs-staff` | Jacob's Surveyor Cross-Staff | surveying | The sliding cross-piece transom (3.5x40px, gold-accented) translates 28px continuously along the staff every 3s — clearly exceeds the Partially threshold, directly depicting the instrument's core sliding-sight action. |
| 259 | `concept-plane-table-alidade` | Plane Table Telescopic Alidade | surveying | The bright gold telescopic alidade arm (40px ruler blade) sweeps through a 75deg arc continuously (~26px tip sweep) over 4.2s — clearly exceeds the Partially threshold; the compass needle only twitches ~0.6px. |
| 260 | `concept-dioptra-level` | Heron of Alexandria Dioptra Level | surveying | The gold-bordered dioptra sighting bar (52px) sweeps through a 32deg arc continuously (~14.5px tip sweep) over 3.6s — clears the calibrated Partially threshold; the worm-gear's thin line also spins a full continuous rotation every 3s. |
| 261 | `concept-torquetum-equatorial` | Torquetum Geodetic Armillary | surveying | The sighting crista arm sweeps 40deg continuously (~11px tip sweep) over 3.2s while the equatorial plate (with visible cross-hair marks) rotates a full circle every 4.8s — combined this clears the calibrated Partially threshold. |
| 262 | `concept-cayley-governable-glider` | Sir George Cayley 1804 Glider | aero | The full glider assembly (56px fuselage+wing) bobs and pitches continuously (~6-10px combined translate+rotate) over 3.4s, simulating flight — clears the calibrated threshold; streamlines are a discounted dash-march. |
| 263 | `concept-lilienthal-hang-glider` | Otto Lilienthal Hang Glider | aero | The full glider wing assembly (64px wide) bobs and pitches continuously (~7-10px combined translate+rotate) over 3.8s, simulating soaring flight — clears the calibrated threshold; pilot legs swing a smaller ~3px. |
| 264 | `concept-giffard-steam-airship` | Henri Giffard Steam Dirigible | aero | The 3-blade propeller (16px) spins very fast (360deg/0.4s) — a clear, fast, visible rotation; the large cigar-shaped hull also bobs/pitches gently (~6-8px combined) over 4s. |
| 265 | `concept-langley-aerodrome` | Langley Aerodrome Monoplane | aero | Two counter-rotating propellers (14px each) spin very fast (360deg/0.3s) — clear, fast rotation; the large tandem-wing fuselage (60px) also bobs/pitches ~7-9px combined over 3.6s. |
| 266 | `concept-eiffel-aero-tunnel` | Eiffel Suction Wind Tunnel | aero | The suction fan's bright gold blades (26-32px long) spin extremely fast (360deg/0.25s) — a strong, clear, fast rotation visible as a blur; the airfoil model separately pitches ~6px and the manometer fluid shifts modestly. |
| 267 | `concept-sikorsky-grand-four` | Sikorsky Grand 4-Engine Wing | aero | Four propellers (16px each) all spin very fast (360deg/0.3s) simultaneously across the wing — a strong, clear, fast rotation matching the giffard/langley propeller Partially precedent; the fuselage itself only bobs ~4-5px. |
| 268 | `concept-gutenberg-press` | Gutenberg Oak Screw Press | print | The bright gold hand lever bar (32px) sweeps through a 40deg arc continuously (~22px tip sweep) over 3.2s — clearly the concept's core pressing action and well exceeds the Partially threshold; platen and ink balls move a smaller few px. |
| 269 | `concept-linotype-elevator` | Linotype Matrix Elevator | print | The elevator arm (bright gold gripper jaws + matrix line) lifts 16px continuously over 3.4s — the concept's core mechanism and clearly exceeds the Partially threshold; casting pot and lead slug are smaller/intensity effects. |
| 270 | `concept-stanhope-toggle` | Stanhope Cast-Iron Toggle Press | print | Compound toggle linkage levers rotate 24° driving heavy iron platen down 14px at 3.4s - continuous press mechanism cycle. |
| 271 | `concept-woodblock-kento` | Ukiyo-e Kento Registration Block | print | Baren rubbing pad executes 18px spiral translation over woodblock kento mark at 3.0s - continuous hand tool traverse. |
| 272 | `concept-intaglio-copperplate` | Intaglio Copperplate Rolling Press | print | Star wheel rotates 360° while rolling bed traverses 16px horizontally through heavy pressure cylinder at 2.6s - continuous press traversal. |
| 273 | `concept-columbian-eagle-press` | Clymer Columbian Eagle Press | print | Cast-iron counterweight eagle tilts 8° while operating lever sweeps 20° driving platen 12px at 3.2s - continuous mechanical press stroke. |
| 274 | `concept-guilloche-rose-engine` | Guilloché Banknote Rose Engine | print | Rose engine headstock rotates 360°/4.8s while rosette cam rocks laterally 2.4px guiding cutting tool - continuous lathe mechanism motion. |
| 275 | `concept-punchcutting-matrix` | Steel Punch & Copper Matrix | print | Steel letter punch translates 14px vertically striking copper matrix block with spark flash at 2.4s - continuous striking mechanism. |
| 276 | `concept-meridian-transit-circle` | Airy Meridian Transit Circle | astronomy | Telescope tube executes 60° vertical swing over 4.4s (~25px arc) while target star drifts 16px across the transit reticle (ground-truth operator rating: Partially animated). |
| 277 | `concept-filar-micrometer` | Spiderweb Filar Position Micrometer | astronomy | Spider-wire measuring reticle traverses 14px across eyepiece field via micrometer screw at 3.2s - continuous reticle travel. |
| 278 | `concept-coelostat-mirror` | Coelostat Solar Tracking Mirror | astronomy | Primary tracking mirror rotates 360° continuously over 4.0s redirecting reflected beam to fixed telescope - continuous mirror rotation. |
| 279 | `concept-spectroheliograph` | Hale Monochromatic Spectroheliograph | astronomy | Narrow spectral selection slit scans 20px horizontally across monochromatic solar disk at 3.2s - continuous scanning slit traverse. |
| 280 | `concept-mural-quadrant` | Tycho Brahe Great Mural Quadrant | astronomy | Sighting alidade arm sweeps 10° arc (~18px travel) along graduated stone quadrant wall at 4.4s - continuous astronomical sighting sweep. |
| 281 | `concept-laue-diffraction` | Max von Laue X-Ray Diffraction | crystallography | Central X-ray beam radius pulses and 20 diffraction spots flash in coordinated sequence (opacity 0.1↔1.0) along crystal symmetry axes (ground-truth operator rating: Partially animated). |
| 282 | `concept-bragg-spectrometer` | Bragg Ionization X-Ray Spectrometer | crystallography | 34px detector ionization arm sweeps ±30° arc over 4.2s while crystal mount rotates in 1:2 theta/2-theta synchronization (ground-truth operator rating: Partially animated). |
| 283 | `concept-wollaston-goniometer` | Wollaston Reflecting Optical Goniometer | crystallography | 48px graduated circle wheel rotates 360° continuously over 7.0s with crystal carrier and reflection ray tracking (ground-truth operator rating: Partially animated). |
| 284 | `concept-fedorov-stage` | Fedorov Universal 5-Axis Microscope Stage | crystallography | Outer universal stage ring rotates 360°/8s while inner gimbal tilts ±20° and thin-section mineral plate oscillates ±45° (ground-truth operator rating: Partially animated). |
| 285 | `concept-stereographic-wulff-net` | Wulff Stereographic Projection Net | crystallography | Dashed great-circle overlay rocks ±35° over 8s while projection poles and great circles shift across stereonet (ground-truth operator rating: Partially animated). |
| 286 | `concept-besson-nephoscope` | Besson Comb Nephoscope | meteorology | Nephoscope comb arm rocks ±15° over 4.0s while 30px cloud shape drifts 45px across viewing grid (ground-truth operator rating: Partially animated). |
| 287 | `concept-saussure-hygrometer` | Saussure Human Hair Hygrometer | meteorology | 24px red indicator needle sweeps ±35° arc over ivory scale at 3.0s driven by hair hygrometer tension (ground-truth operator rating: Partially animated). |
| 288 | `concept-crova-actinometer` | Crova Absolute Solar Actinometer | meteorology | Thermometer liquid thread rises/falls 12px within aperture housing while actinometer shield glow pulses (ground-truth operator rating: Partially animated). |
| 289 | `concept-langley-bolometer` | Langley Infrared Spectrobolometer | spectroscopy | Galvanometer mirror rocks ±18° at 3.2s with reflected beam tip sweeping ~8-9px across scale; bolometer grid wheatstone bridge pulses glow (ground-truth operator rating: Partially animated). |


### Fully animated (11)

Concepts dominated by fast (≤3s period), continuous, large-amplitude rotation, oscillation, or multi-element motion of prominent bright/filled subjects.

| # | Concept | Label | Category | Visual evidence & motion rationale |
|---:|---|---|---|---|
| 1 | `concept-pacman` | Pacman | retro | Large bright Pac-Man at different positions with mouth open/closed states, ghost tracking, dots consumed - constant fast motion of big filled elements. |
| 2 | `concept-anemometer` | Anemometer | nature | Orange cup rotor at a different rotation every frame with needle and readout changes - large bright fast spin. |
| 3 | `concept-deskfan` | Desk Fan | home | Large cream rotor at different blur/blade orientations with head oscillation - very fast big bright rotation. |
| 4 | `concept-spinning-wheel` | Spinning Wheel | textile | Wheel spokes and flyer cross at different rotations every frame - large bright fast continuous spin. |
| 5 | `concept-chattering-teeth` | Chattering Teeth | toys | Jaws at different open/closed states and rig at different tilts/positions every frame - big, fast, always moving. |
| 6 | `concept-crookes-radiometer` | Crookes Radiometer | lab | Four diamond vanes (black/silver alternating) rotate 360° continuously at 1.5s on needle pivot - fast continuous rotation of large bright/filled subject matching the calibrated Fully precedent. |
| 7 | `concept-thaumatrope` | Thaumatrope | toys | Two-sided disc executes continuous fast 360° flip/squash rotation at 1.0s alternating bird-in-cage images - fast continuous geometric flip matching the calibrated Fully precedent. |
| 8 | `concept-whirligig` | Kinetic Whirligig | toys | 32px white/green 2-blade propeller spins 360deg/0.6s continuously (bright filled blades, ~27% of tile), plus a separate fast chopping axe-arm; direct analog of the ground-truth Fully rotor. |
| 9 | `concept-aeolipile` | Hero's Aeolipile Engine | mech | 32px bright gold sphere (off-center highlight + two white nozzle marks) spins 360deg/0.8s continuously — matches the ground-truth Fully 4-cup-rotor precedent in size, brightness, and speed. |
| 10 | `concept-euler-disk` | Euler's Spinning Disk | toys | The bright 48px rainbow-gradient disk (~41% of tile) continuously orbits and tilts through a fast 3D wobble (0.25s/0.08s cycles), a vivid unmissable spin — matches ground-truth Fully criteria on size, brightness, and speed. |
| 11 | `concept-robinson-anemometer` | Robinson 4-Cup Mechanical Anemometer | meteorology | 40px filled 4-cup rotor spins 360° continuously every 2.0s with gear drive and anemometer spindle (ground-truth operator rating: Fully animated). |


---
*Method: Code-reading classification of all 333 gap concepts in `concepts/gallery/` judged against the calibrated geometric-motion rubric (`.audits/perception-calibration-2026-08-16.md`). No browser automation or Playwright tooling used. No files modified outside this report.*
