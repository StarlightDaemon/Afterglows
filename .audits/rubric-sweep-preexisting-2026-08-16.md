# Rubric sweep: pre-existing concepts (2026-08-16)

Classification-only sweep of every concept whose `added` date is not in the 2026-08-15 "New v1" batch, judged against the calibrated geometric-motion rubric (`.audits/perception-calibration-2026-08-16.md`; standing standard in project memory `geometric-motion-rubric.md`). Each concept was classified from a read of its default-version animation code, using the 30-tile ground-truth precedents as anchors. No concept file, manifest, or render code was modified.

- **Total classified: 240** (of 549 manifest entries; the other 309 dated 2026-08-15 are covered by the wave-2 table)
- Two verdicts reused from the calibration session as instructed: concept-fibonacci (Little animation), concept-piano (Partially animated).
- Judged version: the manifest `default` version only.

## Category counts

| Category | Count | Share |
|---|---:|---:|
| No animation | 1 | 0.4% |
| Little animation | 94 | 39.2% |
| Partially animated | 140 | 58.3% |
| Fully animated | 5 | 2.1% |
| **Total** | **240** | 100% |

Genuinely-uncertain classifications: **63** (flagged † below and listed in the last section).

## Full list (worst-first)

### No animation (1)

| # | Concept | Label | Category | Reasoning |
|---:|---|---|---|---|
| 1 | `concept-ascii` | ASCII Box | systems | Whole text block jitters 1px steps only - all motion sub-2px (rubric rule 1) |

### Little animation (94)

| # | Concept | Label | Category | Reasoning |
|---:|---|---|---|---|
| 1 | `concept-alchemical-transmutation` | Alchemical Transmutation | arcane | 40px gold shape morphs via opacity/clip-path/in-place scale (~6px edge movement); channels and ingot are opacity flashes - no translation anywhere |
| 2 | `concept-alien-signal` † | Alien Signal | scifi | Waterfall columns are dim (0.3-0.6 alpha) texture stripes scrolling; the dominant bright spike is opacity-only pulse |
| 3 | `concept-angler` † | Anglerfish | ocean | Dominated by opacity reveal and lure glow; jaw snap ~10px arc at <40% duty, lunge 8px brief, prey/snow are 2-3px movers |
| 4 | `concept-audio-circle` † | Audio Circle | retro | 16-bar equalizer is scaleY-in-place throb (~17px tip travel) plus hub scale beat and ripple fades - all discounted categories |
| 5 | `concept-bathysphere` | Bathysphere | ocean | Hull sway is only +/-2.5deg (~6px), marine snow motes are 2px movers, beam is opacity flicker - all capped categories |
| 6 | `concept-beaker` † | Boiling Beaker | lab | Movers are 4-7px bubbles rising 30px (tiny-mover cap); surface roil/flame flicker are in-place scale; liquid is brightness pulse |
| 7 | `concept-binary-counter` | Bin Counter | systems | Bit digits flip via content swap and cells light up; clock LED blinks - all content/intensity change, zero geometric motion |
| 8 | `concept-blender` † | Blender | home | Jar shake is sub-2px, blades are a 14px fast blur, bubbles 4px, liquid surface morphs ~6px - all tiny/discounted movers |
| 9 | `concept-bubble-column` † | Bubble Column | ocean | Movers are 4-9px bubbles rising 70px (tiny-mover cap, same boundary as beaker); shafts/surface are opacity-sway |
| 10 | `concept-bunsen` | Bunsen Burner | lab | Flame is in-place scaleY/scaleX + yellow-to-blue color morph; collar 16px rotates 18deg briefly; flicker is 2px - all discounted |
| 11 | `concept-candle` | Séance Candle | occult | Flame gutter is in-place rotate/scale flicker (tip ~8px); halo/smoke/drips are opacity and scaleY - matches GT bunsen-spectroscope flame precedent |
| 12 | `concept-cash-register` | Cash Register | city | Drawer slides only 14px with long static holds; lever/keys/ring are brief - moving-motion duty ~26% of 6s loop, under the 40% cap |
| 13 | `concept-cauldron` | Cauldron | arcane | Brew pulse and fire tongues are in-place scale flicker; bursts/steam are faint 5-6px risers - no bright geometric sweep |
| 14 | `concept-cell-cluster` † | Cell Cluster | bio | Mitosis is a shape/clip-path morph with nucleus scaleX stretch; daughters drift only 9px slowly; orbs float 2-3px |
| 15 | `concept-centrifuge` † | Centrifuge | lab | High-speed rotor is hidden under the near-opaque smoke lid for most of the loop; visible geometric motion (lid open/close, spin-up) is ~22% duty |
| 16 | `concept-chimes` | Wind Chimes | music | Tubes sway mostly +/-1.5-2deg (2-4px) with one brief 12deg gust; impact is glow flare; wind streaks faint - large motion duty ~15% |
| 17 | `concept-coffee` | Coffee Cup | home | Steam ribbons drift 7px faint/blurred, sheen slides 18px over 6s at low contrast - small dim movers only |
| 18 | `concept-constellation` | Constellation | space | Node scale-pulses in place, dash-offset marching lines, 1-2px network drift - all discounted categories |
| 19 | `concept-crop-circle` | Crop Circles | scifi | Rings self-draw via stroke-dashoffset (discounted dash effect); tracer orb is a 4px tiny mover; flare is opacity |
| 20 | `concept-cryopod` | Cryo Pod | scifi | Sleeper breathe is blurred in-place scale; frost/sparkles/LEDs/vents are opacity effects - zero bright geometric sweep |
| 21 | `concept-crystal-ball` † | Crystal Ball | arcane | Nebula mists are 6px-blurred soft blobs drifting 14-16px slowly; glimpse/sparks are opacity - low-contrast movers cap at Little |
| 22 | `concept-cursor-prompt` | Cursor Prompt | retro | Single blinking block cursor - opacity-only change, zero geometric motion |
| 23 | `concept-dartboard` † | Darts | games | Each dart flies 90px in ~0.5s but total motion duty is ~25% of the 6s loop (under 40% cap); ripples/bull/score are opacity and content swaps |
| 24 | `concept-distillation` | Distillation | lab | Coolant is background-position stripe march (discounted); bubbles/droplets are 3px movers; distillate is slow height fill; flame is in-place flicker |
| 25 | `concept-eclipse` | Eclipse | space | Only mover is the dark lunar disc sliding 18px over 4.6s - dark-mover-over-bright-rings matches GT conoscopic-interference (Little) |
| 26 | `concept-ekg` † | EKG | bio | Trace is fixed geometry lit by a traveling mask reveal (intensity propagation); cursor is a 2px hairline; heart is in-place scale pulse |
| 27 | `concept-ember` | Ember | nature | Flames are in-place flicker (rotate 3deg / scale 7%), sparks are 3px movers, base is glow pulse - all discounted |
| 28 | `concept-etch-a-sketch` † | Etch A Sketch | toys | Stylus is a 5px tiny mover; lines self-draw via width/height growth (2px hairlines); knob rotation subtle; frame shake only ~12% duty |
| 29 | `concept-fibonacci` | Fibonacci Spiral | geometry | REUSED calibration-session verdict: spiral-tracing illusion is border-color/opacity sequencing across six static cells - no transform in the file |
| 30 | `concept-firefly` | Fireflies | nature | Five 3-4px bugs wander 10-30px slowly with blink glow - tiny movers plus intensity |
| 31 | `concept-flamingos` | Flamingos | birds | Body rocks only +/-3.5deg; neck dip moves the 8px head ~12px at ~35% duty - small amplitudes throughout |
| 32 | `concept-flytrap` † | Venus Flytrap | garden | Lobe snap is dramatic but brief (26deg in ~2% of the 9s loop, closed hold 28%); fly is a 4px mover; geometric-motion duty ~25% |
| 33 | `concept-force-field` | Force Field | scifi | Hex mesh is sequential fill/stroke flashes; bolt is a 4px mover for 12% of loop; core is in-place scale pulse |
| 34 | `concept-fractal-tree` † | Fractal Tree | geometry | Tree grows/withers via scaleY of 1-4px thin segments (draw-like growth); hold-phase sway is only +/-2.5deg |
| 35 | `concept-ghost` † | Ghost | occult | Large glowing ghost bobs only ~9px at slow 4.2s with +/-2deg tilt; tails skew in place; phase is opacity - close to dines-meteorograph sway precedent |
| 36 | `concept-glitch` † | Glitch Text | systems | Text tears are 4-9px RGB-split jumps confined to ~8-10% of the loop (long static holds); rest is content swap and flash |
| 37 | `concept-gramophone` | Gramophone | music | Platter spin animates only brightness; real movers are a 5px label dot orbit and fading ripple arcs; horn vibe is 1.5px sub-threshold |
| 38 | `concept-grasshopper` † | Grasshopper | garden | Leap arc is large (64px) but motion occupies only ~35-40% of the loop and the insect is invisible for another 36% - duty-cycle cap |
| 39 | `concept-graveyard` | Graveyard Mist | occult | Bat is a 10px near-black mover; fog blobs are 3px-blurred 0.3-alpha drifts; moon is opacity - dark/low-contrast movers cap at Little |
| 40 | `concept-haunted-mirror` | Haunted Mirror | occult | Apparition is opacity fade with 8px slow drift; sheen sweep lasts ~19% of loop; crack/eyes are flashes |
| 41 | `concept-hex` | Hex | geometry | Honeycomb wave is pure fill/stroke luminance sequencing across static polygons - zero geometric motion |
| 42 | `concept-hydrothermal-vent` | Hydrothermal Vent | ocean | Smoke puffs rise 42px but are near-black on dark bg (low contrast); shrimp are 6px movers; throat is glow pulse |
| 43 | `concept-invader` † | Space Invader | retro | Large bright sprite but motion is only 6px stepped shuffles plus two-frame pixel swap - small amplitude discrete steps |
| 44 | `concept-kettle` | Kettle | home | Steam puffs are blurred 10px risers, lid rattle is 2.5px, whistle rays and burner are opacity flashes |
| 45 | `concept-knitting` † | Knitting | textile | Needle working motion is ~8px; fabric growth is background-position march; ball rotation is fine-stripe pattern at slow 6s/rev - all at/below thresholds |
| 46 | `concept-lattice` | Diamond Lattice | geometry | Only animation is background-position drift of a 1px-line grid texture at 14px/4s - hairline texture scroll |
| 47 | `concept-level` † | Spirit Level | mech | 10px bubble wanders ~20px slowly over 7s with holds; body rock is only +/-3.2deg; readout is content swap |
| 48 | `concept-lightning` † | Lightning | nature | Bolt and sheet are opacity flashes totaling ~12% of the 4.4s loop with long dark holds - intensity-only bursts |
| 49 | `concept-macrame` | Macramé | textile | Knots pulse in place (scale 1.1 + 4deg), strands rotate slowly with ~9px tip travel, fringe sways +/-3deg - all small/discounted |
| 50 | `concept-mantis` † | Praying Mantis | garden | 93deg raptorial strike lasts only ~5% of the 7s loop; head turn/body rock are 2-10deg; fly is a 4px mover - duty-cycle capped |
| 51 | `concept-microscope` | Microscope | bio | Turret shift is 6px twice per 9s, knob is a 10px wheel with tiny marker, stage nudge 3px, mirror rock 10deg - all small/brief |
| 52 | `concept-molecule` † | Molecule Chain | bio | Charge pulse is a 5px mover (campbell-stokes tiny-dot precedent); nodes breathe in place; rig tumbles only +/-2deg |
| 53 | `concept-moon-phase` † | Moon Phases | space | Sole mover is the near-black shadow disc sliding over the bright moon (9s cycle) - dark-mover-over-bright precedent (conoscopic GT rated Little) |
| 54 | `concept-mothership` | Mothership | scifi | Beam extension is ~22% duty, ship looms 1.5px, city/impact are brightness flashes, clouds are slow faint drifts |
| 55 | `concept-murmuration` † | Murmuration | birds | Ten 4px bird dots jitter 6-8px inside a whole-cloud sway/scale - tiny movers plus whole-scene transform, both capped |
| 56 | `concept-music-box` | Music Box | music | Cylinder is background-position march; teeth pluck 9deg briefly; 12px key rotates with holds; notes are brief floaters - all small/discounted |
| 57 | `concept-neon` † | Neon Sign | lab | Sign is letter-flicker and glow (intensity); the only mover is a 6px moth orbiting - small mover on a side detail |
| 58 | `concept-neuron` † | Neuron | bio | 9px spike and trace blip travel only during ~30% of the 3.8s loop; rest is sequenced glow flashes on static geometry |
| 59 | `concept-petri` | Petri Dish | bio | Colonies are 6-12px in-place scale growth; UV sweep line visible only ~32% of the 10s loop; count is content swap |
| 60 | `concept-planet-rings` | Planet Rings | space | Band texture drifts 18px over 8s (slow texture scroll); ring wobble is 8deg/scaleX 1.04 (~5px) - small slow motions |
| 61 | `concept-polaroid` † | Instant Photo | retro | 54px eject slide lasts only 16% of the 8s loop; the rest is opacity/blur develop, sheen sweep and +/-2.5deg wobble |
| 62 | `concept-poppet-doll` † | Poppet Doll | occult | Pin thrust is 32px but only ~40% duty with holds; doll twitch is +/-4deg; heart is in-place scale; ward is expanding-ring fade |
| 63 | `concept-potion` | Potion | arcane | Liquid is brightness surge + 3px slosh; bubbles are 2.5-5px risers; vapor is faint wisps - all tiny/intensity |
| 64 | `concept-prism` | Prism | lab | Beam, spectrum rays and spark all animate opacity/box-shadow/scale only - zero positional motion |
| 65 | `concept-pulse` † | Pulse | bio | Eight bars grow/shrink in place via height (equalizer throb) - same discounted category as audio-circle |
| 66 | `concept-raven` | Raven | occult | Head look is +/-15deg of an 18px head (~5px arcs), caw/tail/ruffle are brief flicks, feather falls only in last 15% - small and episodic |
| 67 | `concept-rubber-duck` | Rubber Duck | toys | Large duck bobs only ~5px with +/-4deg rock; bubbles are 4-8px risers; ripples are expanding fades - small-drift cap |
| 68 | `concept-saucer` † | Flying Saucer | scifi | Large saucer hovers only 7px at slow 3.6s with +/-2deg tilt; perimeter lights are blink sequence; glow/trail are opacity |
| 69 | `concept-scrying-pool` | Scrying Pool | arcane | Drop is a 4px mover; ripples are expanding fades; the eye manifests via opacity/scale morph - no bright geometric sweep |
| 70 | `concept-server-lights` | Server Rack | systems | LEDs blink, load meters are in-place scaleX; only real mover is a 5px blip sliding the rail (tiny-mover cap) |
| 71 | `concept-signal` | Signal | systems | Bars are in-place height growth, waves are expanding arc fades, status is content swap - all discounted categories |
| 72 | `concept-snowfall` † | Snowfall | nature | Flakes are 2-4px dots drifting down slowly (tiny-mover cap, campbell-stokes precedent); ground shifts 1.5px |
| 73 | `concept-solder` | Soldering Iron | mech | Iron nudges ~13px and wire slides 16px with long holds (~30% duty); bead is scale morph; smoke/tip/temp are intensity |
| 74 | `concept-sonar` | Sonar | systems | Acoustic rings are expanding-circle fades (discounted ripple) and contacts are opacity/scale blips - no persistent geometric mover |
| 75 | `concept-spirit-box` | Spirit Box | occult | Frequency strip is background texture march; equalizer bars are in-place height; LED/EVP text are flashes |
| 76 | `concept-spirit-orbs` † | Spirit Orbs | occult | Four 6-15px orbs drift 26-52px on slow (7.5-11s) wander paths - small slow movers plus glow flare (crystal-ball precedent) |
| 77 | `concept-star-chart` | Star Chart | space | Nodes scale-pulse in place, lines fade, flares pop - purely intensity effects on a static chart |
| 78 | `concept-submarine` † | Submarine | ocean | Hull bobs only 5px at 5s; prop is scaleY flutter; wake bubbles are 4px; pings are expanding fades |
| 79 | `concept-swan` † | Swan | birds | Neck dip (52deg, ~25px) lasts ~22% of the 9s loop; glide is 16px over 9s (~2px/s) - episodic and slow |
| 80 | `concept-testtube` | Test Tube Rack | lab | Reactions are color changes; fizz/drops are 3px movers; precipitate/foam are 10px height fills - intensity and tiny movers |
| 81 | `concept-tidepool` | Tidepool | ocean | Anemone is in-place scale/rotate pulse; crab creeps ~16px behind opacity gating; caustics are intensity - all small/discounted |
| 82 | `concept-titration` | Titration | lab | Titrant level drops 26px very slowly, drops are 3px, flask swirl is +/-2deg; the endpoint event is a color flash |
| 83 | `concept-toaster` † | Toaster | home | Toast pop is 34-38px but actual motion is ~20% of the 4.6s loop - most of the cycle is static body with coil glow |
| 84 | `concept-traffic-light` | Traffic Light | city | Signal cycle is entirely lamp/halo/ground-spill color and glow swaps - zero geometric motion |
| 85 | `concept-tuning-fork` | Tuning Fork | music | Prong shiver is +/-3px decaying vibration; mallet strike is brief; waves are expanding-ring fades (GT tuning-fork-chronograph precedent) |
| 86 | `concept-turntable` † | Turntable | retro | Platter grooves/label are near-radially-symmetric so the 3.2s spin reads frozen (tape-reels rebuild note confirms); tonearm sweeps 38deg over 9s (~3px/s) |
| 87 | `concept-tympani` | Tympani | music | Mallet strike occupies ~16% of the 2.4s loop; head deform is 3% scale; ripples are expanding fades; needle jump is 10px brief |
| 88 | `concept-vacuum-radio` † | Vacuum Tube Radio | home | Red needle is a 2x10px mover sliding 48px slowly (11px/s); magic-eye is in-place scaleX; tubes are glow pulses |
| 89 | `concept-vending` † | Vending Machine | city | Dropping can is an 8x12px mover (~26% duty), coin is 5px, flap swing is brief - small staggered events |
| 90 | `concept-virus` † | Virus | bio | Tumble is 360deg/26s (~7px/s spike-tip speed); spikes reach in place (scaleY); core is border-radius morph; float is 3px |
| 91 | `concept-visitor` | The Visitor | scifi | Head tilt is +/-4.5deg whole-subject sway (~8px at crown, 6.5s); blinks are brief scaleY; aura/third-eye are glow pulses |
| 92 | `concept-volcano` | Volcano | nature | Bombs are 3-4px movers on ~25% duty arcs; lava is a 4px column scaleY grow; ash is a blurred faint blob (campbell-stokes tiny-mover precedent) |
| 93 | `concept-wand` | Wand Cast | arcane | Wand flick is ~20% duty (caps at Little); sparks are 2.5-4px tiny movers; tip charge and star glints are intensity/scale pops |
| 94 | `concept-weaverbird` | Weaverbird | birds | Bird wiggle is +/-12deg/3px of a 32px rig; blade loop is in-place scale; nest and branch sways are 2-3deg |

### Partially animated (140)

| # | Concept | Label | Category | Reasoning |
|---:|---|---|---|---|
| 1 | `concept-abduction` | Abduction Beam | scifi | Bright 14x18px yellow/orange target rises 64-74px through the beam (~80% duty cycle); ship bob 3px and beam pulse are secondary |
| 2 | `concept-accordion` | Accordion | music | Filled 16x54px red bass end-board translates 18px continuously at 3.2s while bellows folds visibly compress (scaleX 0.55) |
| 3 | `concept-albatross` | Albatross | birds | White filled bird (14x24 body + 44px wings) soars ~50px translate with ±16-18 deg banking over 6.5s, continuous |
| 4 | `concept-android` | Android | scifi | Bright glowing 12x7px cyan pupil sweeps 27px across the visor near-continuously at 3.4s; head sway and LED pulses secondary |
| 5 | `concept-ant` | Ant | garden | Ant assembly plus bright emerald 10x8px crumb translate 68px continuously across the tile with scuttling legs (always in motion) |
| 6 | `concept-asteroid` | Asteroid Drift | space | Four bronze/gold rocks (4-30px) drift fully across the 104px tile on continuous linear paths (3.6-11s) while tumbling |
| 7 | `concept-astral-projection` | Astral Projection | arcane | Bright white/cyan 30x36px astral double levitates 28px continuously (4.5s); aura bloom and cord skew secondary |
| 8 | `concept-atm` | Cash Machine | city | Card slides 24px in/out and three bright emerald bills rise ~14px rotating; combined motion duty ~58% of the 7s loop |
| 9 | `concept-atom` | Atom | bio | Three bright 7px electrons sweep full 92px tilted orbits continuously at 2.6-4.4s per rev |
| 10 | `concept-aurora` † | Aurora | nature | Four 18x70px bright curtain bands sway continuously (skew +/-10deg + 7px translate = ~15px top-edge travel, staggered phases) |
| 11 | `concept-balance-scale` | Balance Scale | city | 84px brass beam tilts 16deg with pans translating 14px and weight dropping 40px; motion spans ~76% of the 7s loop |
| 12 | `concept-balloon` | Hot Air Balloon | city | Three white clouds cross the full 104px tile continuously (9-12s) plus whole balloon rig drifts ~13px; flame bursts secondary |
| 13 | `concept-bee` | Bee | garden | 20x12px amber bee flies a continuous looping path spanning ~70x40px of the tile over 6s, always in motion |
| 14 | `concept-bell` | Bell | music | 48x44px bright gold bell cup swings +/-22deg continuously at 2.6s (~16px rim travel) with counter-swinging clapper |
| 15 | `concept-billiards` | Billiards Break | games | Ivory cue ball dashes 48px and five bright 9px balls scatter 14-28px; motion covers ~60% of the 5s loop |
| 16 | `concept-bio` † | Bio-Rhythm | bio | Three full-width sine waveforms scroll leftward continuously (104px per 7-12.5s) while a bright 6px dot rides +/-27px vertically |
| 17 | `concept-blocks` | Building Blocks | toys | Three 26x22px primary-color blocks drop 70-110px, bounce and tumble off in sequence spanning most of the 6s loop |
| 18 | `concept-blood` | Blood Flow | bio | Four 13-16px crimson RBCs plus a 19px white WBC stream across the full 116px vessel continuously at staggered phases |
| 19 | `concept-bowling` | Bowling Strike | games | 18px marbled ball rolls 52px up-lane then six white pins scatter 11-18px with rotation; motion spans ~72% of the 5s loop |
| 20 | `concept-broom` | Enchanted Broom | arcane | Large golden broom rig (48x80px) banks across ~42px with +/-22deg rotation continuously at 4.4s |
| 21 | `concept-butterfly` | Butterfly | garden | 52x34px orange butterfly traverses the full 116px tile continuously over 8s with fast wing flaps |
| 22 | `concept-caterpillar` | Caterpillar | garden | 56px striped monarch worm crawls 50px across the leaf over 80% of the loop with continuous traveling hump wave |
| 23 | `concept-centrifugal-governor` | Centrifugal Governor | mech | Two bright 14px brass flyballs swing 34deg on 36px arms (~20px ball travel) continuously at 3.2s; sleeve slides 24px |
| 24 | `concept-circuit` | Circuit | systems | Bright 8px white pulse dot travels the full ~180px copper trace continuously at 2.6s plus a second branch pulse |
| 25 | `concept-claw` | Claw Machine | games | Trolley slides 48px, claw drops 46px, pink prize is carried 40px and tumbles 360deg - sequential motion spans nearly the whole 9s loop |
| 26 | `concept-clock-face` | Clock Face | mech | 36px crimson second hand sweeps 360deg/6s (fast 60-step tick, near-continuous); matches GT wollaston-goniometer precedent |
| 27 | `concept-coinflip` | Coin Flip | city | Bright 26px gold coin tosses 58px up and back over ~72% of the loop with fast scaleY tumbling |
| 28 | `concept-combo-lock` | Combo Lock | mech | 42px tick-marked dial spins through 305/118/212-degree combination turns (~60% motion duty); shackle pops 9px - wollaston-wheel precedent |
| 29 | `concept-comet` | Comet | space | Bright cyan comet (8px nucleus + 44px glowing tail) crosses the full 104px tile diagonally, continuous 5.5s loop |
| 30 | `concept-compass` | Compass | systems | 54px red/blue needle swings +/-15deg continuously over 5s (saussure-hygrometer precedent) |
| 31 | `concept-crosswalk` † | Crosswalk Signal | city | White walk-cycle figure with legs/arms swinging ~46deg fast during the 44% WALK phase; WAIT phase is flashing hand + countdown |
| 32 | `concept-cube` † | Cube Spin | geometry | 46px 3D wireframe cube rotates 360deg/7s with perspective - large continuous parallax motion, though faces are 1px outlines not fills |
| 33 | `concept-dice` | Dice Roll | games | Two bright 24px dice tumble in with 50-58px bounce arcs and rotation over ~64% of the 5s loop |
| 34 | `concept-disco` | Disco Ball | lab | Five glowing 7px pinspots orbit 30-40px radii continuously at 3-4.5s/rev while the 40px mirror ball texture-scrolls and glints sweep |
| 35 | `concept-dna-helix` | DNA Helix | bio | Twelve bright 12px base nodes sweep 46px horizontally in staggered continuous 2.8s crossings (rotating-helix illusion) |
| 36 | `concept-dragonfly` | Dragonfly | garden | Glowing cyan dragonfly (30px abdomen) darts a continuous ~56x22px path over 5s with fast wing flaps |
| 37 | `concept-drawbridge` | Drawbridge | city | Two 36px orange spans rotate +/-65deg (~38px tip sweep) while a 32px steamship crosses the full canal mid-loop |
| 38 | `concept-drop-spindle` | Drop Spindle | textile | 32px gold whorl squash-rotates (rotateY) at 0.5s continuously while the whole rig drops/rises 22px (edison-tinfoil squash precedent) |
| 39 | `concept-dyson` | Dyson Swarm | scifi | Eleven bright 9px gold panels ride three rotating orbit rings (62-100px dia) in continuous 9-23s revolutions |
| 40 | `concept-embroidery-hoop` | Embroidery Hoop | textile | Golden 38px needle rig punches 26px vertically at 0.9s continuously while the canvas coordinate-steps 4-7px |
| 41 | `concept-eye` † | Eye | systems | 34px bright-ringed iris makes 14-31px saccade jumps plus full-height lid blinks; motion events land in any 2-3s glance window despite ~25% duty |
| 42 | `concept-falcon-stoop` | Falcon Stoop | birds | 44x48px falcon dives 72px and flares wings while bright cyan speed streaks rush the full tile height at 0.5-0.7s continuously |
| 43 | `concept-ferris` | Ferris Wheel | city | 72px golden spoked wheel turns 360deg/14s carrying six glowing colored gondolas (~16px/s rim speed), plus counter-rotating bulb ring |
| 44 | `concept-fingerprint` | Fingerprint Scan | systems | Bright 76px-wide scanline bar with 22px glow band sweeps 86px vertically at 2.4s alternate, continuous |
| 45 | `concept-flashlight` | Flashlight | lab | 96px light cone pans -38 to +2deg with the torch (~60% motion duty), sweeping tens of px and revealing crate/eyes |
| 46 | `concept-flower` | Daisy Bloom | garden | Eight white 22px petals unfurl outward from the head while the whole bloom sways +/-7.5deg (~11px) continuously |
| 47 | `concept-foosball` | Foosball | games | Rod with three bright players slides 16px p-p continuously, players flip 360deg, and the 7px ball runs a ~70px path each loop |
| 48 | `concept-galaxy` | Galaxy | space | Full-tile bright cyan spiral-arm pattern rotates continuously (22s/rev, ~13px/s at rim) with counter-rotating star layer |
| 49 | `concept-gears` | Gears | mech | Three bright metal gears (24/34/46px) with visible teeth and spokes rotate continuously at 3.65-7s/rev (wollaston-wheel precedent) |
| 50 | `concept-geneva-drive` | Geneva Drive | mech | Bright ruby 8px pin orbits the 56px brass driver continuously at 3.2s while the slotted steel cross wheel indexes 90deg each cycle |
| 51 | `concept-golf` | Golf Putt | games | Bright 8px ball rolls 62px across the green with a break over ~60% of the 6s loop; putter tap and flag wave secondary |
| 52 | `concept-grid` | Grid | geometry | Bright 6px glowing node plus full-length 2px highlight lines hop 24px between gridlines repeatedly on 5s/7s cycles (piano-glyph salience) |
| 53 | `concept-hatchling` | Hatchling | birds | Egg rocks, 30px turquoise cap pops off 16px with 48deg tumble, 20px yellow chick rises 14px and chirps - staged motion spans ~60% of 6s loop |
| 54 | `concept-hologram` † | Hologram | scifi | Meridian ring squash-rotates (14px width oscillation at 3.6s) while the wireframe globe bobs 6px and a scanline sweeps 60px |
| 55 | `concept-hourglass` | Hourglass | retro | 36px-wide golden sand masses drain/fill ~16px every 1.8s cycle with visible stream and falling 4px grains - continuous level motion |
| 56 | `concept-hummingbird` | Hummingbird | birds | Emerald bird flits ~38px between flower and rest points (~76% motion duty) with fast wing blur and tail wag |
| 57 | `concept-jackbox` | Jack-in-the-Box | toys | Lid flips 95deg, 24px jester pops up 46px and bobs, brass crank arm spins 360deg/1.2s continuously - motion through most of the 5s loop |
| 58 | `concept-jellyfish` | Jellyfish | ocean | Bright 48px violet bell squash-pulses (~14px width change) while the whole body glides 14px and cyan tentacles sway - continuous compound motion |
| 59 | `concept-joystick` | Joystick | retro | Glossy 18px red balltop sweeps ~17px as the chrome stick tilts 30deg continuously at 2.6s |
| 60 | `concept-kaleidoscope` | Kaleidoscope | toys | Six bright 38px gem petals ride a rotating rosette (360deg/12s) while morph-breathing 8px in/out at 4s |
| 61 | `concept-kelp` | Kelp Forest | ocean | Five jointed amber kelp stalks sway +/-10deg with compounded upper segments (~15-20px tip travel) while the orange fish crosses the full tile |
| 62 | `concept-kite` | Kite | games | 28x36px rainbow diamond kite swoops a ~44px range with +/-14deg banking continuously over 7s, trailing ribbon bows |
| 63 | `concept-ladybug` | Ladybug | garden | 30px glossy scarlet ladybug walks 64px across the leaf continuously over 8s with paddling legs and brief wing flare |
| 64 | `concept-lighthouse` | Lighthouse | lab | Large golden conic beam wedge rotates 360deg/6s sweeping the entire tile continuously |
| 65 | `concept-lissajous` | Lissajous | geometry | Bright 6px beam dot with 5-ghost comet tail retraces the full-tile Lissajous curve continuously (offset-path, 6s) |
| 66 | `concept-loading-bar` | Loading Bar | systems | Bright segmented fill with white leading edge advances ~100px in stall-and-burst rhythm over 72% of the 3.6s loop |
| 67 | `concept-loom` | Loom | textile | Golden 16px shuttle flies 76px each way (50% duty) while the beater bar slams 16px twice per 3s and warps shed |
| 68 | `concept-manta` | Manta Ray | ocean | Large cyan-edged pectoral wings flap +/-12-14deg with articulated tips (~15-20px travel) continuously at 3.6s plus 6px glide bob |
| 69 | `concept-marbles-run` | Marble Run | toys | Bright 8px iridescent marble runs the entire ~130px course continuously each 3.6s loop, tripping gate and bell |
| 70 | `concept-marimba` | Marimba | music | Two bright-headed mallets hop ~46px between bars with 12px strikes, alternating continuously at 2.8s |
| 71 | `concept-metronome` | Metronome | music | 58px chrome pendulum arm with brass bob swings +/-24deg at 2s (~46px tip sweep), continuous |
| 72 | `concept-microbes` | Microbial Field | bio | Bright glowing 15px flagellate crosses the full 100px field continuously (10s); cells drift and focus hunts as secondary motion |
| 73 | `concept-microwave` | Microwave | home | Bright 14px meal bowl orbits the turntable ellipse (~36px wide) continuously at 3.4s for 78% of the loop; countdown/lamp secondary |
| 74 | `concept-moire` † | Moiré Rings | geometry | Grating drift (~10-20px) plus slow rotation drives large emergent moire fringe sweeps across the whole tile - the fringes themselves move continuously |
| 75 | `concept-nautilus` | Nautilus | ocean | Large ivory/chestnut shell body jet-thrusts 16px and glides back every 3.2s with rotation, waving tentacles and cyan jet plume |
| 76 | `concept-newtons-cradle` | Newton's Cradle | toys | Chrome 12px balls on 52px pendulums swing 42deg (~37px arcs) in continuous alternation - one ball always in motion |
| 77 | `concept-noise` † | Digital Noise | systems | Full-field static grain re-randomizes at 0.55s steps while an interference band rolls the full tile height every 2.9s - constant spatial churn |
| 78 | `concept-ocean-wave` | Ocean Waves | nature | Three filled sapphire/turquoise wave layers with white surf crest scroll 104px continuously at 3.6-8s |
| 79 | `concept-octopus` † | Octopus | ocean | Eight terracotta arms curl 10-18deg continuously at staggered 3.4-4.8s phases (aggregate wriggle is the subject); chromatophores pulse |
| 80 | `concept-orrery` | Orrery | mech | Bright 8-9px planets orbit at 26px/42px radii continuously (6s/13.5s) with a 2.2s moon sub-orbit |
| 81 | `concept-ostrich` | Ostrich | birds | Full-speed run cycle: legs stride +/-35-40deg at 0.6s (~20px foot arcs) with 4px torso bounce and dust kicks, always moving |
| 82 | `concept-ouija` | Ouija | occult | 30x32px walnut planchette glides a ~54x56px path over the light parchment board for ~78% of the 9s loop - high-contrast mover |
| 83 | `concept-owl` † | Owl | birds | Large bright 42px head swivels +/-14-16deg near-continuously (~18px edge travel) plus periodic full blinks and wing shrugs |
| 84 | `concept-peacock` | Peacock | birds | Nine 44px feather rays with glowing eyespots fan open to +/-80deg and close (~60px tip arcs, ~50% motion duty) |
| 85 | `concept-pendulum` | Pendulum | mech | 58px arm with 16px brass bob swings +/-26deg at 2.4s continuously (~52px bob arc); escapement wheel steps |
| 86 | `concept-pendulum-wave` | Pendulum Wave | geometry | Nine bright 9px bobs on 46-62px rods swing +/-16deg at stepped 1.5-2.1s periods - continuous traveling-wave weave |
| 87 | `concept-piano` | Piano Keys | music | REUSED calibration-session verdict: four colored note glyphs rise 28px staggered so one is essentially always in motion |
| 88 | `concept-piggybank` † | Piggy Bank | city | 14px gold coin falls 32px into the slot, then pig wiggle + 40deg tail spring + ear flick chain to ~54% motion duty |
| 89 | `concept-pinball` | Pinball | games | Bright 8px chrome ball ricochets around the full playfield continuously for ~92% of the 6s loop; flippers snap and bumpers flash |
| 90 | `concept-pinking-shears` | Pinking Shears | textile | Steel shear blades scissor +/-16-20deg continuously at 1.8s (~16px tip travel) with falling thread clippings |
| 91 | `concept-piston` | Piston | mech | 26px chrome piston strokes 16px at 1.6s while the crank disc spins 360deg/1.6s with orbiting brass pin - fast continuous mechanism |
| 92 | `concept-poltergeist` | Poltergeist | occult | Three bright 14-20px objects levitate 22-48px with rotation wobbles, staggered across ~80% of the 6.5s loop |
| 93 | `concept-pong` | Pong Rally | retro | Glowing ball traverses the court continuously (4s) while both 20px neon paddles track up/down 21-35px |
| 94 | `concept-projector` | Film Projector | lab | Two spoked film reels (18/24px) spin 360deg at 1.1-1.6s with visible spoke patterns; screen runs Technicolor scene cuts |
| 95 | `concept-radar` | Radar | systems | Bright cyan conic sweep wedge rotates 360deg/3.4s across the full 96px scope continuously, lighting IFF blips |
| 96 | `concept-rain` † | Rainfall | nature | Nine bright-tipped 14px rain streaks fall the full 126px tile height continuously at ~100px/s - constant full-field motion |
| 97 | `concept-raingauge` | Rain Gauge | nature | 22px-wide cyan water column with white meniscus rises 50px over ~54% of the 8s loop while drops fall and splash (hourglass precedent) |
| 98 | `concept-rocket` | Rocket Launch | space | 16x44px white rocket shakes then lifts 150px off-tile (30-70% of loop) with extending flame and billowing smoke |
| 99 | `concept-rotary-dial` | Rotary Dial | retro | 76px dial with ten white-ringed finger holes spins 83-196deg pulls and spring-returns across ~60% of the 7.5s loop |
| 100 | `concept-roulette` | Roulette | games | 70px red/black pocket wheel spins 3.25 revolutions (decelerating) while the ivory ball counter-orbits 2.6 revs - motion for 72% of loop |
| 101 | `concept-rune-circle` | Rune Circle | arcane | Eight bright gold glyphs orbit on the outer ring (360deg/14s) with counter-rotating dashed ring and hexagram - continuous layered rotation |
| 102 | `concept-satellite` | Satellite | space | Gold-bus satellite with 38px solar-wing span arcs across the full 104px tile continuously every 7s |
| 103 | `concept-scissors` | Scissors | textile | Brass shears advance 96px across the ribbon (85% of loop) while steel blades snip +/-20deg at 0.5s and cut halves peel apart |
| 104 | `concept-sewing-machine` † | Sewing Machine | textile | Machine chugs continuously at 1.7Hz: needle strokes 8px, take-up lever swings 40deg, marked balance wheel spins 360deg/0.6s |
| 105 | `concept-sharpener` | Pencil Sharpener | home | Chrome crank with green knob orbits 360deg/1.4s continuously while pencil feeds/retracts and curled shavings fall 26px |
| 106 | `concept-slinky` | Slinky | toys | Seven bright rainbow rings cascade end-over-end 28x18px with 100deg flips at 2.6s while the whole staircase conveys beneath |
| 107 | `concept-spellbook` | Spellbook | arcane | 33x38px parchment leaf performs a full perspective page-flip (rotateY 168deg) out and back across ~65% of the loop; runes rise 34px |
| 108 | `concept-spider` † | Spider | garden | Gold-banded spider drops/reels 18px on its silk line while pendulum-swaying ~9px laterally, continuously at 5s |
| 109 | `concept-spinning-top` † | Spinning Top | toys | 32px rainbow body spins via fast stripe march (0.3s) with growing precession wobble and a final 78deg topple |
| 110 | `concept-sprout` † | Sprout | nature | 44px stem grows, 26px leaves unfurl 66deg and golden bud blooms in staged sequence covering ~60% of the 7s loop |
| 111 | `concept-square-stack` † | Square Stack | geometry | Three nested square outlines (34-90px) rotate 90deg out and back at 3s staggered - corners sweep large continuous arcs, though strokes are 1px |
| 112 | `concept-stamp` | Rubber Stamp | home | Wooden stamp assembly travels 62px to the document, presses with bounces and returns - motion spans ~90% of the 5.5s loop |
| 113 | `concept-stapler` † | Stapler | home | 68px red head snaps 24deg down (~28px tip arc) and rears back each 3s cycle with flash and staple appearing (~40% motion duty) |
| 114 | `concept-tape-reels` | Tape Reels | retro | Two 28px six-spoke hubs spin 360deg/2.6s (spokes designed asymmetric for visible rotation) with running tape window |
| 115 | `concept-target-lock` | Target Lock | systems | Bright tick-ring rotates 360deg/7s, corner brackets converge, and the 6px blip hunts ~38px before settling - layered continuous motion |
| 116 | `concept-tarot` | Tarot Draw | arcane | Three 26x42px gold-edged cards lift 9px and perform staggered 180deg perspective flips (one flip every ~3s) |
| 117 | `concept-tatting-shuttle` | Tatting Shuttle | textile | 32px amber shuttle loops a continuous figure-8 (~32px range) with rotation at 3.2s while the thread cinches |
| 118 | `concept-terraform` | Terraform | scifi | Golden satellite orbits the 96px ring continuously (8s) while the cyan terraform wavefront sweeps the planet for ~50% of the loop |
| 119 | `concept-tesseract` | Tesseract | geometry | Nested bright-bordered cubes continuously invert through each other (scale 0.42-2.38 with counter-rotation) inside a 360deg/10s rig |
| 120 | `concept-tetris` | Falling Blocks | retro | Bright purple 27x18px T-piece steps down 73px (8 steps over 72% of the 4.5s loop) with line-clear flash |
| 121 | `concept-theremin` | Theremin | music | Orange 18px hand sweeps ~19px diagonally toward the pitch rod continuously at 3.6s; field rings pulse and scope trace surges |
| 122 | `concept-thermometer` | Thermometer | nature | Glowing crimson column rises/falls 46px through the loop (far above the torricelli 6px No-precedent) while a 34px cloud crosses 64px |
| 123 | `concept-tornado` † | Tornado | nature | Seven-ring funnel writhes continuously (scaleX squash-spin ~11px at 1.1s + 9px sway) with tossed debris - whole subject always deforming |
| 124 | `concept-train-crossing` | Train Crossing | city | Four-car streamliner crosses 344px fast (38% of loop) and the striped boom gate swings 72deg down and up; lamps alternate |
| 125 | `concept-triangle-mesh` † | Triangle Mesh | geometry | Entire 104px hex-clipped mesh rotates 360deg/4.5s continuously with pattern shift - large fast rotation of 1px lattice lines |
| 126 | `concept-typewriter` | Typewriter | home | Three chrome typebars swing 38deg at 2Hz continuously (~14px arcs) while the 64px carriage steps across 36px and snaps back with lever flick |
| 127 | `concept-violin-bow` | Violin Bow | music | 52px-tall bow assembly strokes 36px p-p diagonally at 2.6s continuously; string vibrates and rosin puffs rise |
| 128 | `concept-vise-anvil` | Vise & Anvil | mech | 18x48px gunmetal jaw slides 18px (~45% duty) plus 22px hammer swings 38deg and strikes with sparks |
| 129 | `concept-warp` | Warp Jump | scifi | 15 bright cyan streaks continuously shoot outward, growing to 44px and traveling 52px in 1.4s - fast continuous radial motion but each mover is 2px narrow |
| 130 | `concept-watering-can` | Watering Can | garden | 52px bright emerald can assembly tips 32deg and returns (~36% rotating) with gated droplet fall between - some geometric motion ~68% of loop |
| 131 | `concept-weathervane` | Weather Vane | nature | 52px copper arrow hunts through swings up to 66deg (~30px tip travel) at moderate speed, ~45% duty |
| 132 | `concept-windsock` | Windsock | nature | 5-segment 78px orange/white sock chain lifts 37deg with whip articulation, continuous motion across the 4s loop |
| 133 | `concept-windup-robot` | Wind-up Robot | toys | Continuous 1Hz march: arms swing 24deg (~8px tips), legs 20deg, brass key arms spin 360deg/1s in a 20px circle - multiple bright movers |
| 134 | `concept-wireframe-globe` † | Wireframe Globe | space | Four meridian rings scaleX-breathe to fake polar spin plus a 70px-travel scan band - wireframe/outline movers like the cube family |
| 135 | `concept-wisp` | Will-o'-Wisp | occult | 10x12px bright cyan orb wanders a ~130px path across the whole tile continuously (11s) with trailing echoes and a sliding water gleam |
| 136 | `concept-woodpecker` † | Woodpecker | birds | 34px headset rig hammers 18deg bursts (~10px beak arcs, rapid) at ~45% duty incl. slow holds - duty borderline against the 40% cap |
| 137 | `concept-wormhole` † | Wormhole | space | Three 7px bright motes trace fast genuine spirals (carrier 360deg/2.4s + 37px infall); falling rings are contracting ripples (discounted), swirl is dim |
| 138 | `concept-wrench` | Wrench & Bolt | mech | 56px bright wrench ratchets +/-30deg power strokes (~42px handle arcs) ~70% of the loop, hex nut steps 60deg, tool rides 24px back up |
| 139 | `concept-yoyo` | Yo-Yo | games | 28px red/blue disc drops and climbs 58px (32% duty) on a scaling string; sleep-phase conic spin at 45deg symmetry reads as shimmer more than rotation |
| 140 | `concept-zipper` | Zipper | textile | 20x16px chrome slider travels 70px up and back at ~35px/s for ~80% of the loop while brass teeth mesh behind it |

### Fully animated (5)

| # | Concept | Label | Category | Reasoning |
|---:|---|---|---|---|
| 1 | `concept-anemometer` | Anemometer | nature | ~68px rotor with three orange filled cups spins 360deg/2.6s continuously - large, bright, fast; plus red needle +/-70deg sweep |
| 2 | `concept-chattering-teeth` | Chattering Teeth | toys | Large bright red jaws (62px) chatter +/-14deg at 2.8Hz while the whole rig waddles/bounces 6px and shuffles 14px - big, fast, always moving |
| 3 | `concept-deskfan` | Desk Fan | home | 52px cream 4-blade rotor spins 360deg/0.35s - large bright filled element in very fast continuous rotation (robinson-anemometer precedent), plus head oscillation |
| 4 | `concept-pacman` | Pacman | retro | 42px golden Pac-Man travels 66px chomping at 0.45s while the 26px red ghost chases - two large bright elements in constant fast motion |
| 5 | `concept-spinning-wheel` | Spinning Wheel | textile | 62px spoked cherry wheel spins 360deg/1.6s continuously (over half the tile, robinson precedent) plus 0.4s flyer cross and rocking treadle |

## Uncertain classifications (63)

These are boundary cases where the code read alone does not cleanly resolve the rubric category (duty-cycle near the 40% cap, movers near the tiny/small threshold, wireframe/outline movers, near-radially-symmetric spinners, texture scrolls, full-field effects). They are flagged rather than forced; a frame-dump pass would settle them.

| Concept | Leaned verdict | Why uncertain |
|---|---|---|
| `concept-alien-signal` | Little animation | Waterfall columns are dim (0.3-0.6 alpha) texture stripes scrolling; the dominant bright spike is opacity-only pulse |
| `concept-angler` | Little animation | Dominated by opacity reveal and lure glow; jaw snap ~10px arc at <40% duty, lunge 8px brief, prey/snow are 2-3px movers |
| `concept-audio-circle` | Little animation | 16-bar equalizer is scaleY-in-place throb (~17px tip travel) plus hub scale beat and ripple fades - all discounted categories |
| `concept-aurora` | Partially animated | Four 18x70px bright curtain bands sway continuously (skew +/-10deg + 7px translate = ~15px top-edge travel, staggered phases) |
| `concept-beaker` | Little animation | Movers are 4-7px bubbles rising 30px (tiny-mover cap); surface roil/flame flicker are in-place scale; liquid is brightness pulse |
| `concept-bio` | Partially animated | Three full-width sine waveforms scroll leftward continuously (104px per 7-12.5s) while a bright 6px dot rides +/-27px vertically |
| `concept-blender` | Little animation | Jar shake is sub-2px, blades are a 14px fast blur, bubbles 4px, liquid surface morphs ~6px - all tiny/discounted movers |
| `concept-bubble-column` | Little animation | Movers are 4-9px bubbles rising 70px (tiny-mover cap, same boundary as beaker); shafts/surface are opacity-sway |
| `concept-cell-cluster` | Little animation | Mitosis is a shape/clip-path morph with nucleus scaleX stretch; daughters drift only 9px slowly; orbs float 2-3px |
| `concept-centrifuge` | Little animation | High-speed rotor is hidden under the near-opaque smoke lid for most of the loop; visible geometric motion (lid open/close, spin-up) is ~22% duty |
| `concept-crosswalk` | Partially animated | White walk-cycle figure with legs/arms swinging ~46deg fast during the 44% WALK phase; WAIT phase is flashing hand + countdown |
| `concept-crystal-ball` | Little animation | Nebula mists are 6px-blurred soft blobs drifting 14-16px slowly; glimpse/sparks are opacity - low-contrast movers cap at Little |
| `concept-cube` | Partially animated | 46px 3D wireframe cube rotates 360deg/7s with perspective - large continuous parallax motion, though faces are 1px outlines not fills |
| `concept-dartboard` | Little animation | Each dart flies 90px in ~0.5s but total motion duty is ~25% of the 6s loop (under 40% cap); ripples/bull/score are opacity and content swaps |
| `concept-ekg` | Little animation | Trace is fixed geometry lit by a traveling mask reveal (intensity propagation); cursor is a 2px hairline; heart is in-place scale pulse |
| `concept-etch-a-sketch` | Little animation | Stylus is a 5px tiny mover; lines self-draw via width/height growth (2px hairlines); knob rotation subtle; frame shake only ~12% duty |
| `concept-eye` | Partially animated | 34px bright-ringed iris makes 14-31px saccade jumps plus full-height lid blinks; motion events land in any 2-3s glance window despite ~25% duty |
| `concept-flytrap` | Little animation | Lobe snap is dramatic but brief (26deg in ~2% of the 9s loop, closed hold 28%); fly is a 4px mover; geometric-motion duty ~25% |
| `concept-fractal-tree` | Little animation | Tree grows/withers via scaleY of 1-4px thin segments (draw-like growth); hold-phase sway is only +/-2.5deg |
| `concept-ghost` | Little animation | Large glowing ghost bobs only ~9px at slow 4.2s with +/-2deg tilt; tails skew in place; phase is opacity - close to dines-meteorograph sway precedent |
| `concept-glitch` | Little animation | Text tears are 4-9px RGB-split jumps confined to ~8-10% of the loop (long static holds); rest is content swap and flash |
| `concept-grasshopper` | Little animation | Leap arc is large (64px) but motion occupies only ~35-40% of the loop and the insect is invisible for another 36% - duty-cycle cap |
| `concept-hologram` | Partially animated | Meridian ring squash-rotates (14px width oscillation at 3.6s) while the wireframe globe bobs 6px and a scanline sweeps 60px |
| `concept-invader` | Little animation | Large bright sprite but motion is only 6px stepped shuffles plus two-frame pixel swap - small amplitude discrete steps |
| `concept-knitting` | Little animation | Needle working motion is ~8px; fabric growth is background-position march; ball rotation is fine-stripe pattern at slow 6s/rev - all at/below thresholds |
| `concept-level` | Little animation | 10px bubble wanders ~20px slowly over 7s with holds; body rock is only +/-3.2deg; readout is content swap |
| `concept-lightning` | Little animation | Bolt and sheet are opacity flashes totaling ~12% of the 4.4s loop with long dark holds - intensity-only bursts |
| `concept-mantis` | Little animation | 93deg raptorial strike lasts only ~5% of the 7s loop; head turn/body rock are 2-10deg; fly is a 4px mover - duty-cycle capped |
| `concept-moire` | Partially animated | Grating drift (~10-20px) plus slow rotation drives large emergent moire fringe sweeps across the whole tile - the fringes themselves move continuously |
| `concept-molecule` | Little animation | Charge pulse is a 5px mover (campbell-stokes tiny-dot precedent); nodes breathe in place; rig tumbles only +/-2deg |
| `concept-moon-phase` | Little animation | Sole mover is the near-black shadow disc sliding over the bright moon (9s cycle) - dark-mover-over-bright precedent (conoscopic GT rated Little) |
| `concept-murmuration` | Little animation | Ten 4px bird dots jitter 6-8px inside a whole-cloud sway/scale - tiny movers plus whole-scene transform, both capped |
| `concept-neon` | Little animation | Sign is letter-flicker and glow (intensity); the only mover is a 6px moth orbiting - small mover on a side detail |
| `concept-neuron` | Little animation | 9px spike and trace blip travel only during ~30% of the 3.8s loop; rest is sequenced glow flashes on static geometry |
| `concept-noise` | Partially animated | Full-field static grain re-randomizes at 0.55s steps while an interference band rolls the full tile height every 2.9s - constant spatial churn |
| `concept-octopus` | Partially animated | Eight terracotta arms curl 10-18deg continuously at staggered 3.4-4.8s phases (aggregate wriggle is the subject); chromatophores pulse |
| `concept-owl` | Partially animated | Large bright 42px head swivels +/-14-16deg near-continuously (~18px edge travel) plus periodic full blinks and wing shrugs |
| `concept-piggybank` | Partially animated | 14px gold coin falls 32px into the slot, then pig wiggle + 40deg tail spring + ear flick chain to ~54% motion duty |
| `concept-polaroid` | Little animation | 54px eject slide lasts only 16% of the 8s loop; the rest is opacity/blur develop, sheen sweep and +/-2.5deg wobble |
| `concept-poppet-doll` | Little animation | Pin thrust is 32px but only ~40% duty with holds; doll twitch is +/-4deg; heart is in-place scale; ward is expanding-ring fade |
| `concept-pulse` | Little animation | Eight bars grow/shrink in place via height (equalizer throb) - same discounted category as audio-circle |
| `concept-rain` | Partially animated | Nine bright-tipped 14px rain streaks fall the full 126px tile height continuously at ~100px/s - constant full-field motion |
| `concept-saucer` | Little animation | Large saucer hovers only 7px at slow 3.6s with +/-2deg tilt; perimeter lights are blink sequence; glow/trail are opacity |
| `concept-sewing-machine` | Partially animated | Machine chugs continuously at 1.7Hz: needle strokes 8px, take-up lever swings 40deg, marked balance wheel spins 360deg/0.6s |
| `concept-snowfall` | Little animation | Flakes are 2-4px dots drifting down slowly (tiny-mover cap, campbell-stokes precedent); ground shifts 1.5px |
| `concept-spider` | Partially animated | Gold-banded spider drops/reels 18px on its silk line while pendulum-swaying ~9px laterally, continuously at 5s |
| `concept-spinning-top` | Partially animated | 32px rainbow body spins via fast stripe march (0.3s) with growing precession wobble and a final 78deg topple |
| `concept-spirit-orbs` | Little animation | Four 6-15px orbs drift 26-52px on slow (7.5-11s) wander paths - small slow movers plus glow flare (crystal-ball precedent) |
| `concept-sprout` | Partially animated | 44px stem grows, 26px leaves unfurl 66deg and golden bud blooms in staged sequence covering ~60% of the 7s loop |
| `concept-square-stack` | Partially animated | Three nested square outlines (34-90px) rotate 90deg out and back at 3s staggered - corners sweep large continuous arcs, though strokes are 1px |
| `concept-stapler` | Partially animated | 68px red head snaps 24deg down (~28px tip arc) and rears back each 3s cycle with flash and staple appearing (~40% motion duty) |
| `concept-submarine` | Little animation | Hull bobs only 5px at 5s; prop is scaleY flutter; wake bubbles are 4px; pings are expanding fades |
| `concept-swan` | Little animation | Neck dip (52deg, ~25px) lasts ~22% of the 9s loop; glide is 16px over 9s (~2px/s) - episodic and slow |
| `concept-toaster` | Little animation | Toast pop is 34-38px but actual motion is ~20% of the 4.6s loop - most of the cycle is static body with coil glow |
| `concept-tornado` | Partially animated | Seven-ring funnel writhes continuously (scaleX squash-spin ~11px at 1.1s + 9px sway) with tossed debris - whole subject always deforming |
| `concept-triangle-mesh` | Partially animated | Entire 104px hex-clipped mesh rotates 360deg/4.5s continuously with pattern shift - large fast rotation of 1px lattice lines |
| `concept-turntable` | Little animation | Platter grooves/label are near-radially-symmetric so the 3.2s spin reads frozen (tape-reels rebuild note confirms); tonearm sweeps 38deg over 9s (~3px/s) |
| `concept-vacuum-radio` | Little animation | Red needle is a 2x10px mover sliding 48px slowly (11px/s); magic-eye is in-place scaleX; tubes are glow pulses |
| `concept-vending` | Little animation | Dropping can is an 8x12px mover (~26% duty), coin is 5px, flap swing is brief - small staggered events |
| `concept-virus` | Little animation | Tumble is 360deg/26s (~7px/s spike-tip speed); spikes reach in place (scaleY); core is border-radius morph; float is 3px |
| `concept-wireframe-globe` | Partially animated | Four meridian rings scaleX-breathe to fake polar spin plus a 70px-travel scan band - wireframe/outline movers like the cube family |
| `concept-woodpecker` | Partially animated | 34px headset rig hammers 18deg bursts (~10px beak arcs, rapid) at ~45% duty incl. slow holds - duty borderline against the 40% cap |
| `concept-wormhole` | Partially animated | Three 7px bright motes trace fast genuine spirals (carrier 360deg/2.4s + 37px infall); falling rings are contracting ripples (discounted), swirl is dim |

---
*Method: sequential code-read classification (31 batches), default-version CSS/keyframe analysis with pixel-travel and duty-cycle estimates, anchored to the calibration ground truth. No background tasks or sub-agent fan-out. No code changes.*
