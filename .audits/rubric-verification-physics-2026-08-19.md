# Physics/gallery rendered-verification & fix pass — 2026-08-19

Full rendered verification of all 111 concepts in `physics/gallery/manifest.js` against the
calibrated geometric-motion rubric (`.audits/perception-calibration-2026-08-16.md`), followed by
fixes for every concept that failed. This session **supersedes** the code-read-only sweep
`.audits/rubric-sweep-physics-2026-08-16.md`, which was used only as a prioritization hint.

## Method

- Reused `.audits/tooling/capture.mjs` + `montage.mjs` from the concepts/gallery 95-tile campaign.
  One minimal harness adaptation: a `--page` option (default unchanged) and a conditional
  curated-sort switch, since physics/gallery renders all tiles up front with no sort control.
- **Negative control passed before any measurement**: with all animations frozen via the Web
  Animations API (playbackRate=0, shadow roots walked), a static tile diffed to **exactly 0
  changed pixels** while containing real content (meanLum 16.4, 64 colors sampled).
- Every tile: scrolled into view on the real gallery page, 900ms settle, 3 real unmanipulated
  frames at 850ms intervals, consecutive-pair pixel diff (channel delta ≥ 30) + diff-mask bbox.
- Visual judgment via 8 contact sheets (f0|f1|f2|diff-mask) of all 111 tiles, judged on geometric
  motion (translate/rotate/scale) of discrete bright/filled subject elements; intensity-only
  effects (opacity, glow, color, dash-march, state swaps) discounted.
- Borderline/zero/ambiguous results re-shot in isolation at 300ms × 5 frames before concluding
  (carnot-cycle, electron-double-slit; plus phase-alias zero pairs on zeeman, maxwell-boltzmann,
  percolation, cymatics explained by symmetric alternate-animation sampling, all fails by code
  regardless).
- Every fix re-verified with the same harness + montage before committing.

## Results

- **Total covered: 111/111** (no concept skipped).
- **Passed clean on first inspection: 52.**
- **Passed only after isolation re-shoot: 0** (both re-shot pending tiles failed).
- **Failed and fixed: 59** — committed in 7 batches:
  - fbc4d04 waves/optics + strays (10)
  - 29c8dc6 fluids + thermo cycles (7)
  - 023e983 fields/relativity/quantum (13)
  - 791fc55 statistical/thermo (8)
  - 17a1dab acoustics (6)
  - 92bbc8b plasma (7)
  - 3d6616a condensed matter (8)

### Fixed concepts (one line each)

waves/optics: total-internal-reflection (photon pulse on beam), wave-interference (plunger dip +
bobbing cork), chladni-plate (migrating sand grains), mach-cone (sweeping craft+cone assembly),
michelson-interferometer (photon walking full path), fabry-perot-cavity (bouncing intracavity
photon), laser-cavity-modes (bouncing cavity photon), diffraction-grating-orders (three order
pulses splitting at the grating), black-hole-lensing (orbiting disk hot spot), van-der-pol
(state dot traces limit cycle).

fluids: carnot-cycle (offset-path runner frozen in real render → waypoint translate keyframes),
hydraulic-jump (tracer parcels through the jump), buoyancy-archimedes (bob deepened past
small-drift cap + pitch), kelvin-helmholtz (orbiting billow parcels), taylor-couette (orbiting
cell parcels), poiseuille-pipe-flow (velocity-profile tracers), cavitating-vortex (bubbles moved
into rotating frame).

fields/relativity/quantum: superconductor-levitation (18px float), hall-effect
(bigger/brighter/continuous carriers), helmholtz-coils (streaming test charges),
magnetic-dipole-force (magnets pull together), light-cone (dual null photons, calmed cone glow),
schwarzschild-geodesic (precessing orbit tracer), minkowski-diagram (scissoring boost axes),
quantum-tunneling (tunnelling wave packet), stern-gerlach (flying atoms on split beams),
quantum-harmonic-oscillator (coherent packet sloshing), compton-scattering (in/out photon +
recoil electron choreography), zeeman-effect (full 25px merge-split sweep), electron-double-slit
(two brighter electrons through both slits).

thermo: maxwell-boltzmann (sliding v_mp marker), ising-model (rotating spin flips), BEC
(condensing atoms + deeper peak growth), blackbody-planck (Wien locus tracker), heat-diffusion
(conducted heat packets), stirling-engine-cycle (PV-loop runner), percolation-lattice
(cluster-walking probe), peltier-thermoelectric (pumped carriers).

acoustics: kundt-tube (dancing grains + 8px piston stroke), acoustic-levitation (12px droplet
oscillation), beat-frequencies (envelope-riding tracer), sonic-boom-nwave (sweeping
jet/cone/N-wave frame), cymatics-membrane (migrating grains), acoustic-streaming-vortex
(tracers inside rotating vortices).

plasma: tokamak-confinement (circulating plasma bunch), cyclotron-resonance (ion riding spiral),
alfven-waves (16px staggered transverse wave), z-pinch (imploding rings + driven arrows),
magnetic-reconnection (inflow parcels + ejected plasmoids), langmuir-probe (I-V sweep runner),
mhd-generator (streaming plasma slugs).

condensed: bragg-diffraction (photons on both beams), phonons-dispersion (branch quasiparticles),
fermi-surface (circulating quasiparticle), quantum-hall-effect (staircase sweep dot),
piezoelectric-effect (stronger squash + driven press + displacing charges), bravais-lattices
(unit-cell walker), superfluid-fountain (erupting droplets), de-haas-van-alphen (Landau-orbit
electron).

## Ambiguities and how they were resolved

- **capillary-action** (PASS): climbing liquid column is a moving fill boundary, not a discrete
  mover — kept as pass per the thermometer/46px-rise precedent in the calibration report.
- **cyclotron-resonance** self-drawing spiral: moving-mask vs dash-technique ambiguity — resolved
  by treating dashoffset self-draw as discounted and animating the ion itself.
- **buoyancy-archimedes** 12px hull bob sat exactly on the 10px small-drift cap — resolved by
  fixing (deepened to 18px + pitch) rather than silently passing.
- **cavitating-vortex / acoustic-streaming-vortex**: real 360° rotation that rendered as
  dash-crawl because the rotating shapes are rotation-invariant circles — treated as fail;
  fixed by placing discrete tracers inside the rotating frames.
- **zeeman pair-2 diff of exactly 0**: phase-symmetric sampling of a 0/50/100 alternate keyframe
  (t1+t2 = period), not a frozen animation; motion confirmed in pair 1 and by code.

## Notable defect found

`carnot-cycle`'s runner used `offset-path`/`offset-distance` animation, which was **frozen in
real rendering** (runner parked at one loop corner; isolation re-shoot at 300ms showed a
0-changed-pixel pair). Replaced with waypoint `translate` keyframes — the technique used by all
other runner fixes in this pass.

## Status

**Physics/gallery verification and fixing is complete in full: 111/111 verified, 59/59 failing
concepts fixed and re-verified, nothing uncovered.** Local commits only, not pushed.
