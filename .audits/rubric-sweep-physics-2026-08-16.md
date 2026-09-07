# Rubric sweep: Physics & Movement gallery (2026-08-16)

Classification-only sweep of every concept in the Physics & Movement gallery (`physics/gallery/manifest.js`), judged against the calibrated geometric-motion rubric (`.audits/perception-calibration-2026-08-16.md`; standing standard in project memory `geometric-motion-rubric.md`). Each concept was classified from a direct read of its default-version code, anchored to physical subject motion (particles, bodies, waves, mechanisms) rather than axis labels, formulas, or intensity-only effects (stroke-dashoffset marching, opacity pulses, glow, color shifts). No concept file, manifest, or render code was modified.

- **Total classified: 111** (all entries in `physics/gallery/manifest.js`)
- **Calibrated standard applied:** Genuine geometric motion (translate/rotate/scale) of a visible, bright-or-filled element on the concept's main subject; intensity-only effects (opacity/glow/color pulses/dash-marching) discounted.
- **Uncertain classifications flagged:** **9** (flagged † below and listed with reasoning in the final section).

## Category counts

| Category | Count | Share |
|---|---:|---:|
| No animation | 1 | 0.9% |
| Little animation | 53 | 47.7% |
| Partially animated | 57 | 51.4% |
| Fully animated | 0 | 0.0% |
| **Total** | **111** | **100.0%** |

## Full sorted list (worst-first)

### No animation (1)

| # | Concept | Label | Category | Reasoning |
|---:|---|---|---|---|
| 1 | `physics-total-internal-reflection` † | Total Internal Reflection | waves | Laser beam is static; only animation is 3 evanescent wave lines pulsing opacity and translating 1px (sub-2px micro-motion, rubric rule 1) |

### Little animation (53)

| # | Concept | Label | Category | Reasoning |
|---:|---|---|---|---|
| 1 | `physics-acoustic-levitation` | Acoustic Radiation Levitation | acoustics | Three levitated droplets only jitter 3px peak-to-peak vertically (translateY ±1.5px) at 1.4s (sub-threshold, narrow mover) |
| 2 | `physics-alfven-waves` | MHD Alfvén Wave | plasma | Nine tiny plasma ions bob only 6px peak-to-peak (translateY ±3px) at 1.5s while field lines sway 3px p-p (narrow amplitude wave) |
| 3 | `physics-beat-frequencies` | Acoustic Beat Envelope | acoustics | Zero transforms; wave curves animate stroke-dashoffset: -16 march; beat envelope and sum signal pulse opacity (0.55 to 1.0) |
| 4 | `physics-black-hole-lensing` | Black Hole Lensing | orbital | 100x38px accretion disk scales only ±4% in place with glow pulse; photon sphere pulses ±2% scale; faint dashed grid rotates 360° at slow 10s |
| 5 | `physics-blackbody-planck` | Planck Blackbody Radiance | thermo | Zero transforms; three Planck radiance curves pulse opacity (0.7 to 1.0) in sequence; Wien locus is stroke-dashoffset: -12 march |
| 6 | `physics-bose-einstein-condensate` | Bose-Einstein Condensation | thermo | Condensate peak breathes scaleY(0.86 to 1.06) (±10% in-place height) at 2.8s alternate while thermal cloud drains opacity (0.9 to 0.45) |
| 7 | `physics-bragg-diffraction` | Bragg Crystal Diffraction | condensed | Zero transforms; X-ray ray lines animate stroke-dashoffset: -18 march at 1.1s; path difference lines and lattice atoms pulse opacity |
| 8 | `physics-bravais-lattices` | 2D Bravais Lattice Nets | condensed | Zero transforms; basis vectors animate stroke-dashoffset: -12 march; unit cell and 12 lattice point dots pulse opacity (0.7 to 1.0) |
| 9 | `physics-buoyancy-archimedes` † | Archimedes Buoyancy | fluids | 40x28px hull bobs only 12px peak-to-peak (translateY ±6px) at 2.2s alternate; waterline moves ±1px (small-drift cap precedent) |
| 10 | `physics-chladni-plate` | Chladni Resonance Plate | waves | Static nodal lines animate stroke-dashoffset shimmer (0 to 20); mode patterns cross-fade opacity over 7.0s; transducer pulses ±12% scale |
| 11 | `physics-compton-scattering` | Compton X-Ray Scattering | quantum | Zero transforms; incident and scattered X-ray waves animate stroke-dashoffset: -18 march; recoil electron pulses opacity |
| 12 | `physics-cyclotron-resonance` | Cyclotron Resonant Acceleration | plasma | Spiral track self-draws via stroke-dashoffset: 250 to 0 over 3.2s; accelerating ion dot itself has no animation rule (static) |
| 13 | `physics-cymatics-membrane` | Cymatics Vibrating Membrane | acoustics | Zero transforms; positive and negative circular membrane sectors cross-fade opacity (0.05 to 1.0) at 1.8s alternate; zero motion |
| 14 | `physics-de-haas-van-alphen` † | De Haas-Van Alphen Oscillation | condensed | Landau tube circle expands r: 16px to 28px (12px radius expansion) at 3.0s alternate; oscillation wave is stroke-dashoffset: 40 march |
| 15 | `physics-diffraction-grating-orders` | Transmission Diffraction Grating | waves | Zero transforms; incident beam and diffracted spectrum rays animate stroke-dashoffset: -16 march at 1.1-1.3s; slits pulse opacity |
| 16 | `physics-fabry-perot-cavity` | Fabry-Pérot Optical Cavity | waves | Standing wave stroke executes in-place scaleY throb (0.7 to 1.3, ±30% height) with opacity surge at 1.2s alternate; mirrors are static |
| 17 | `physics-fermi-surface` | Fermi Surface & Brillouin Zone | condensed | Zero transforms; 2D Fermi contour animates stroke-dashoffset: -26 march and opacity breathe at 1.6-2.2s; symmetry points pulse opacity |
| 18 | `physics-heat-diffusion` | Fourier Heat Diffusion | thermo | Zero transforms; three temperature profile curves cross-fade opacity (0.35 to 1.0) in 5.4s sequence; thermal rod pulses opacity |
| 19 | `physics-helmholtz-coils` | Helmholtz Coils | fields | Zero transforms in keyframes; magnetic field lines animate stroke-dashoffset: -20 march at 1.5s; current and zone pulse opacity |
| 20 | `physics-hydraulic-jump` | Hydraulic Jump | fluids | Stream lines are pure stroke-dashoffset marching; jump roller moves only 3.5px vertically (translateY 0.5px to -3px) with 10% scale at 0.4s |
| 21 | `physics-ising-model` | 2D Ising Ferromagnet | thermo | Zero transforms; spin lattice cells execute a brief 6% duty opacity flicker (1.0 to 0.35 at 94% of 3.2s loop); zero motion |
| 22 | `physics-kelvin-helmholtz` | Kelvin-Helmholtz Billows | fluids | Zero transforms; billow wave boundary animates stroke-dashoffset: -24 march at 1.8s; stream rectangles shimmer opacity |
| 23 | `physics-kundt-tube` | Kundt's Tube Striations | acoustics | Piston translates only 1.6px (translateX ±0.8px, sub-2px rule 1); dust heaps scaleY ±12% in place; pressure wave pulses opacity |
| 24 | `physics-langmuir-probe` | Langmuir Plasma Probe | plasma | Zero transforms; IV characteristic curve animates stroke-dashoffset: -22 march at 2.0s and opacity glow; potential lines pulse opacity |
| 25 | `physics-laser-cavity-modes` | Laser Cavity Transverse Modes | waves | Zero transforms; TEM01 mode lobe spots do in-place scale(0.94 to 1.05) (5% scale) with opacity pulse at 1.6s; beam pulses opacity |
| 26 | `physics-light-cone` † | Spacetime Light Cone | relativity | 4.5px photon pulse translates 56px along null line while cones pulse opacity (0.04 to 0.30) and worldline draws via stroke-dashoffset |
| 27 | `physics-mach-cone` | Mach Cone & Shockwave | waves | 12x8px craft only jitters 1.5px (sub-2px rubric rule 1); shock diamonds flicker opacity; sound wave circles expand in place and fade |
| 28 | `physics-magnetic-dipole-force` | Magnetic Dipole Interaction | fields | Magnets are static; force arrows surge only 5px (translateX 0 to 5px) at 1.4s; flux loops are stroke-dashoffset: -18 march |
| 29 | `physics-magnetic-reconnection` | Magnetic Reconnection | plasma | Central current sheet does in-place scaleX(0.8 to 1.3) with opacity pulse at 1.4s; exhaust jets are stroke-dashoffset: -20 march |
| 30 | `physics-maxwell-boltzmann` | Maxwell-Boltzmann Distribution | thermo | Zero transforms; three Maxwell-Boltzmann distribution curves pulse opacity (0.7 to 1.0) and drop-shadow in sequence; zero motion |
| 31 | `physics-mhd-generator` | Magnetohydrodynamic Channel | plasma | Zero transforms; plasma stream lines animate stroke-dashoffset: 24 to 0 march at 1.5s; B-field dots and EMF arc pulse opacity |
| 32 | `physics-michelson-interferometer` | Michelson Interferometer | waves | 4x20px mirror dithers only 3px (sub-threshold); detector fringe rings scale in place (0.6 to 1.3) with opacity fade at 2.4s |
| 33 | `physics-minkowski-diagram` | Minkowski Spacetime Diagram | relativity | Zero transforms; boosted axis pulses opacity and stroke-width (1.2 to 2.6); simultaneity line and hyperbola are stroke-dashoffset march |
| 34 | `physics-peltier-thermoelectric` | Peltier Thermoelectric Cooler | thermo | Zero transforms; heat flux lines animate stroke-dashoffset: 16 to 0 march at 1.5s; current arrows pulse color; plates are static |
| 35 | `physics-percolation-lattice` | Percolation Phase Transition | thermo | Zero transforms; spanning cluster and isolated cells alternate opacity (0.65 to 1.0 vs 0.9 to 0.55) on static lattice grid |
| 36 | `physics-phonons-dispersion` | Phonon Dispersion Branches | condensed | Zero transforms; optical and acoustic branch dispersion curves animate stroke-dashoffset: -18 march at 1.3-1.7s; bandgap pulses opacity |
| 37 | `physics-piezoelectric-effect` † | Piezoelectric Polarization | condensed | 50x50px crystal block squashes scale(1.0, 1.0) to scale(1.15, 0.85) in place (7.5px vertical compression) at 2.4s alternate; zero translation |
| 38 | `physics-poiseuille-pipe-flow` | Hagen-Poiseuille Viscous Flow | fluids | Five flow velocity arrows translate only 3px horizontally (translateX 0 to 3px) at 1.4s; centerline is stroke-dashoffset march |
| 39 | `physics-quantum-hall-effect` | Quantum Hall Plateaus | condensed | Zero transforms; Hall staircase curve animates stroke-dashoffset: -20 march at 2.2s; SdH oscillation peaks pulse opacity |
| 40 | `physics-quantum-harmonic-oscillator` | Quantum Harmonic Oscillator | quantum | Wavefunction curves scaleY ±15% in place (scaleY 0.85 to 1.15) with opacity/stroke-width glow pulse at 3.6s; zero translation |
| 41 | `physics-quantum-tunneling` | Quantum Barrier Tunneling | quantum | Zero transforms; incident and transmitted wave curves animate stroke-dashoffset: -20 march at 1.8s across static barrier |
| 42 | `physics-schwarzschild-geodesic` | Schwarzschild Perihelion Precession | relativity | Rosette orbit path self-draws via stroke-dashoffset: 300 to 0 over 4.8s; orbiting mass circle itself has no animation rule (static) |
| 43 | `physics-sonic-boom-nwave` | Sonic Boom N-Wave Signature | acoustics | Jet polygon vibrates only 3px peak-to-peak (translateX ±1.5px); Mach cone and N-wave signature are stroke-dashoffset line marches |
| 44 | `physics-stern-gerlach` | Stern-Gerlach Spin Splitting | quantum | Zero transforms; spin-up and spin-down beam paths self-draw via stroke-dashoffset: 40 to 0 over 2.2s; magnet poles are static |
| 45 | `physics-stirling-engine-cycle` | Stirling Thermodynamic Cycle | thermo | Zero transforms; PV cycle loop is stroke-dashoffset: -24 line circulation at 2.4s; four state points pulse opacity in sequence |
| 46 | `physics-superconductor-levitation` | Meissner Levitation | fields | 44x16px puck bobs only 8px peak-to-peak (translateY ±4px) with ±1.5° tilt at 2.4s alternate (below 10px small-drift cap) |
| 47 | `physics-superfluid-fountain` | Superfluid Helium Fountain | condensed | Fountain jet scales scaleY(0.9 to 1.1) in place (±10% height throb) at 1.6s alternate; superleak is stroke-dashoffset march; heater glows |
| 48 | `physics-taylor-couette` | Taylor-Couette Vortical Flow | fluids | Zero transforms; Couette vortex cell loops animate stroke-dashoffset: -20 march at 1.6s; inner cylinder pulses opacity |
| 49 | `physics-tokamak-confinement` | Tokamak Magnetic Confinement | plasma | Zero transforms; helical magnetic line animates stroke-dashoffset: 0 to -24 march at 2.4s; tokamak vessel and core are static |
| 50 | `physics-van-der-pol-oscillator` | Van der Pol Limit Cycle | mechanics | Zero path translation; limit cycle is stroke-dashoffset: -20 march at 1.9s; state dot does in-place scale(0.9 to 1.15) and opacity pulse |
| 51 | `physics-wave-interference` | Wave Interference | waves | Purely expanding concentric ring ripple fades (0 to 110px diameter) from two static emitters; zero translational mover (discounted ripple precedent) |
| 52 | `physics-z-pinch` † | Z-Pinch Plasma Column | plasma | Plasma column compresses scaleX(1.1 to 0.65) in place (14px width change) at 2.0s alternate; zero translation |
| 53 | `physics-zeeman-effect` | Zeeman Spectral Splitting | quantum | Two 1px spectral lines separate 11px horizontally (translateX +7px to -4px) at 2.8s; pi line and field indicator pulse opacity |

### Partially animated (57)

| # | Concept | Label | Category | Reasoning |
|---:|---|---|---|---|
| 1 | `physics-acoustic-streaming-vortex` | Acoustic Quartz Wind Streaming | acoustics | Two streaming vortices rotate 360° continuously in opposite directions at 3.0s (100% duty) flanking the acoustic jet stream |
| 2 | `physics-atwood-machine` | Atwood Machine | mechanics | 24px pulley rotates 240° while two filled masses (16x18px, 14x16px) translate 48px vertically in counter-motion over 3.0s (100% duty) |
| 3 | `physics-bernoulli-venturi` | Bernoulli Venturi Tube | fluids | 7x3px bright stream particle translates 108px across full length of constriction tube at 2.2s while stretching scaleX 1.0 to 2.5 |
| 4 | `physics-bloch-oscillations` | Bloch Electron Oscillations | condensed | 6px Bloch electron translates 80px horizontally and 40px vertically (cx: 25 to 105, cy: 75 to 35) along energy band over 3.2s |
| 5 | `physics-bohr-atom` | Bohr Atom Transitions | quantum | Electron rotates 360° circular orbit at 3.0s while emitted photon wave packet shoots 57px diagonally (translate 45px, -35px) |
| 6 | `physics-brachistochrone-curve` | Brachistochrone Curve | mechanics | Three runner dots race ~120px across the tile while 28px generating circle translates 70px and rotates 360° over 3.2s |
| 7 | `physics-brownian-motion` | Brownian Motion | fluids | 14px bright colloid node executes 8-step random walk jumping ±18px across cell over 4.8s while solvent molecules jitter 8px rapidly |
| 8 | `physics-capillary-action` † | Capillary Meniscus Action | fluids | Liquid column in capillary tube climbs 46px vertically (height 8px to 54px) over 3.4s (60% active climb duty cycle) |
| 9 | `physics-carnot-cycle` | Carnot Heat Engine | fluids | 6px bright state runner dot traces ~160px closed PV cycle perimeter continuously over 4.0s (100% duty) |
| 10 | `physics-cavitating-vortex` | Cavitating Vortex Core | fluids | Vortex streamlines rotate 360° continuously at 2.5s (100% duty) while cavity core pulses r: 6px to 9px at 1.8s |
| 11 | `physics-centripetal-force` | Centripetal Force | mechanics | 84px diameter rotor carrying tether and 10px bright mass node rotates 360° continuously every 3.0s (100% duty) |
| 12 | `physics-collision-elastic` | Elastic Collision | mechanics | Two 20x14px gliders translate 20px and 28px in collision approach, bounce, and rebound cycle over 3.2s (85% duty) |
| 13 | `physics-convection-currents` | Rayleigh-Bénard Convection | fluids | Two 42x64px dashed convection cells rotate 360° continuously in opposite directions at 3.0s while 6x24px hot plume bobs 8px |
| 14 | `physics-coriolis-deflection` | Coriolis Deflection | mechanics | 8px projectile translates 90px along deflected curved track over 2.8s (85% duty) while 102px globe frame rotates 360°/6.0s |
| 15 | `physics-cycloid-gear` | Epicyclic Planetary Gear | fields | 96px carrier frame (360°/6s) carrying three 32px planet gears (rotate 360°/2s reverse) and 32px sun gear (rotate 360°/1.5s) |
| 16 | `physics-debye-shielding` | Debye Screening Sphere | plasma | Four electron pairs rock 45° angular sweep (~23px arc) back and forth around central ion at 3.0s alternate (100% duty) |
| 17 | `physics-doppler-effect` | Doppler Shift | waves | 10px bright white/cyan source translates 75px horizontally over 2.8s (80% duty) emitting expanding compressed Doppler wave fronts |
| 18 | `physics-doppler-rotational` | Rotational Acoustic Doppler | acoustics | Source buzzer and pointer rotate 360° continuously in circular orbit at 2.8s (100% duty) with expanding Doppler wave ripples |
| 19 | `physics-double-pendulum` | Double Pendulum | mechanics | Two linked arms (38px and 36px) swing continuously across 110° and 255° chaotic angular sweeps over 4.8s (100% duty) |
| 20 | `physics-electron-double-slit` | Electron Wave Interference | quantum | Electron dot translates 90px horizontally across slits (cx: 20 to 110) over 2.4s while wave ripples expand from r=4 to r=45 |
| 21 | `physics-entropy-free-expansion` | Free Expansion Entropy | thermo | Five gas molecule dots translate 48-62px across the partition boundary into the empty chamber at 3.0s alternate (100% duty) |
| 22 | `physics-foucault-pendulum` | Foucault Pendulum | waves | 80px pendulum line with 8px bob swings 68px peak-to-peak horizontally at 2.0s continuously (100% duty) on precessing 88px dial |
| 23 | `physics-four-bar-linkage` | Four-Bar Linkage | fields | Full 4-bar linkage: 22px crank rotates 360°, 56px coupler tumbles 360°, and 38px rocker swings 71° arc continuously at 2.8s |
| 24 | `physics-frame-dragging` | Lense-Thirring Frame Dragging | relativity | Cyan Kerr vortex spacetime spiral rotates 360° continuously at 4.0s (100% duty) around central black hole horizon |
| 25 | `physics-gravitational-redshift` | Gravitational Redshift | orbital | Bright 8px photon pulse translates 85px vertically climbing the gravitational potential well over 2.4s (85% duty) with hue shift |
| 26 | `physics-gravitational-slingshot` | Gravity Assist Slingshot | orbital | 8px probe translates ~110px along hyperbolic gravity-assist trajectory across the tile over 3.5s (85% duty) |
| 27 | `physics-gravitational-waves` | Gravitational Wave Quadrupole Strain | relativity | 85px quadrupole ring squashes from scale(1.3, 0.7) to scale(0.7, 1.3) (±30% deformation) at 2.4s alternate with expanding chirp waves |
| 28 | `physics-gyroscopic-precession` | Gyroscopic Precession | mechanics | 44px axle with 30px flywheel disk executes 360° horizontal precession sweep around pivot at 4.0s (100% duty) |
| 29 | `physics-hall-effect` † | Hall Effect Voltage | fields | Three 6px carrier electrons translate 45px diagonally across the semiconductor slab at 2.0s (staggered continuous drift) |
| 30 | `physics-helmholtz-resonator` | Helmholtz Resonance Cavity | acoustics | 22x10px air plug oscillates 16px peak-to-peak vertically (translateY ±8px) at 1.8s alternate (100% duty) with cavity wave scaling |
| 31 | `physics-hohmann-transfer` | Hohmann Transfer | orbital | Two orbiting planets (10px at r=28/3.6s, 12px at r=48/7.2s) plus 9px craft translating 95px elliptical transfer path over 4.8s |
| 32 | `physics-homopolar-generator` † | Faraday Homopolar Disk | fields | 66px diameter filled copper disk with 4 radial spokes rotates 360° continuously every 3.0s (100% duty, border with Fully) |
| 33 | `physics-incline-friction` | Incline & Friction | mechanics | Filled 22x14px mass cube slides 80px continuously down the 30° ramp over 2.8s (~75% motion duty cycle) |
| 34 | `physics-josephson-junction` | Josephson Supercurrent | condensed | Cooper pair dot translates 48px horizontally (translateX -24px to +24px) across the junction barrier over 2.0s (100% duty) |
| 35 | `physics-kepler-orbit` | Kepler Orbit | orbital | 8px bright planet body traces 90x64px elliptical orbit (rx=45, ry=32) continuously over 4.0s (100% duty) |
| 36 | `physics-lagrange-points` | Lagrange Points | orbital | Full two-body system frame (central star, planet M2, 5 L-points) rotates 360° continuously over 6.0s while Trojan satellite orbits 360°/1.8s |
| 37 | `physics-lenz-eddy-currents` | Lenz Eddy Current Braking | fields | 30x45px copper plate swings 48° arc (±24°, ~28px tip travel) through magnet gap at 2.8s alternate (100% duty) |
| 38 | `physics-lorentz-contraction` | Lorentz Length Contraction | relativity | Contracted 28x14px relativistic rod assembly translates 80px horizontally across the frame at 2.6s linear infinite (100% duty) |
| 39 | `physics-lorentz-force` | Lorentz Force | fields | 10px cyclotron particle with 16px force vector continuously orbits 76px diameter circle at 2.4s (100% duty) |
| 40 | `physics-magnetic-mirror` | Magnetic Mirror Bottle | fields | 6px bright trapped ion continuously bounces along 140px helical bounce path across 82px field bottle over 3.6s (100% duty) |
| 41 | `physics-magnus-effect` | Magnus Effect Lift | fluids | 36x36px spin arrow rotor rotates 360° CCW continuously at 2.0s (100% duty) surrounded by stroke-dashoffset streamlines |
| 42 | `physics-orbital-resonance` | Laplace Resonance (1:2:4) | orbital | Three colored moons (6px, 7px, 8px) continuously circle primary along 44px, 70px, 100px diameter orbits in 1:2:4 resonance (2s, 4s, 8s) |
| 43 | `physics-particle-accelerator` | Synchrotron Accelerator | fields | 8px particle bunch node continuously orbits 86px diameter accelerator ring at fast 1.2s per revolution (100% duty) |
| 44 | `physics-photoelectric-effect` | Photoelectric Effect | quantum | Photon wave packet translates 42px diagonally over 2.4s while ejected 5px photoelectron translates 62px horizontally across plates |
| 45 | `physics-projectile-arc` | Projectile Arc | mechanics | Bright 8px filled projectile node translates ~120px along a parabolic trajectory (90px dx, 78px dy) over 3.0s (90% duty cycle) |
| 46 | `physics-rayleigh-taylor` | Rayleigh-Taylor Instability | fluids | Heavy fluid boundary morphs (d: path) forming 58px falling spike at 3.6s alternate while bubble rises 16px and vortices rotate 180° |
| 47 | `physics-roche-limit` | Roche Limit Disruption | orbital | 14px satellite follows 140px spiral infall path over 5.0s (85% duty) while moon body elongates from scale(1,1) to scale(2.4, 0.3) |
| 48 | `physics-snells-law-refraction` | Snell's Law Refraction | waves | 10px bright photon pulse translates ~100px along refracted piecewise ray path across media boundary over 2.4s (80% duty) |
| 49 | `physics-solenoid-inductance` | Solenoid Inductance | fields | 42x14px solid iron plunger translates 26px horizontally into coil at 2.0s alternate (100% duty) while return spring compresses 60% |
| 50 | `physics-spring-mass-damper` | Spring-Mass Damper | mechanics | Substantial 48x22px cyan-bordered mass block translates 32px peak-to-peak vertically at 2.2s continuously (100% duty) with stretching spring |
| 51 | `physics-standing-wave` | Standing Wave Resonance | waves | 2px green standing wave path continuously morphs across 60px peak-to-peak transverse envelope amplitude at 1.2s alternate (100% duty) |
| 52 | `physics-synchrotron-radiation` | Synchrotron Radiation Cone | fields | Electron and radiation cone rotate 360° circular orbit continuously at fast 2.0s (100% duty) with radiation cone intensity flash |
| 53 | `physics-three-body-figure8` | Three-Body Figure 8 | orbital | Three 8px colored mass dots continuously trace full 100x70px figure-8 trajectory over 4.2s (100% duty, staggered phases) |
| 54 | `physics-tidal-locking` | Tidal Locking | orbital | 86px orbit arm carrying 16px tidally locked moon rotates 360° continuously every 4.5s (100% duty) |
| 55 | `physics-time-dilation` | Relativistic Time Dilation | relativity | Two 8px light pulses bounce continuously: rest frame bounces 60px vertically at 1.6s, moving frame translates 70x60px zigzag at 3.2s |
| 56 | `physics-van-allen-trapping` | Van Allen Radiation Belt | plasma | Trapped particle path oscillates 18px peak-to-peak vertically (translateY ±9px) along magnetic dipole line at 1.7s alternate |
| 57 | `physics-vortex-shedding` | Vortex Shedding (Kármán) | fluids | Four 18px vortex eddy rings continuously process downstream, each translating 75px while rotating 720° over 3.2s (100% aggregate duty) |

## Uncertain classifications (9)

These are boundary cases where the code read alone does not cleanly resolve the rubric category (sub-2px translations, column fills, small-drift caps, and large rotating disks near the Fully boundary). They are flagged rather than forced; a future Fable visual-verification pass will confirm.

| Concept | Leaned verdict | Why uncertain |
|---|---|---|
| `physics-total-internal-reflection` | No animation | Laser beam is static; only animated elements are 3 evanescent wave strokes pulsing opacity 0.3→0.9 while translating 1px vertically (translateY 0 to -1px). Sub-2px motion classifies as No animation per rubric rule 1, though opacity pulsing could be seen as subtle intensity-only animation (Little). |
| `physics-buoyancy-archimedes` | Little animation | 40x28px floating hull oscillates 12px peak-to-peak (translateY ±6px) at 2.2s alternate. Sits right on the boundary between the small-drift cap (e.g. rubber-duck 10px bob -> Little, submarine 5px bob -> Little) and a distinct moderate translation (>10-15px). |
| `physics-light-cone` | Little animation | Spacetime diagram relies on opacity glow for future/past cones and stroke-dashoffset for worldline self-drawing, but a small 4.5px photon pulse translates 56px diagonally along the null line over 3.2s. Sits on the tiny-mover on static diagram boundary. |
| `physics-z-pinch` | Little animation | 35px-wide plasma column compresses scaleX 1.1 to 0.65 in place (14px edge movement) at 2.0s alternate. In-place scaling of a solid column without translation sits near the Little / Partially border. |
| `physics-piezoelectric-effect` | Little animation | 50x50px crystal block squashes scale(1.15, 0.85) in place (7.5px vertical compression) at 2.4s alternate. It is an in-place geometric deformation of a large block, but has zero translation and no moving mechanism. |
| `physics-de-haas-van-alphen` | Little animation | Landau tube circle expands from r=16px to r=28px (12px radial expansion, 24px diameter) at 3.0s alternate. In-place radial expansion of a single circular boundary sits near the Little / Partially threshold. |
| `physics-capillary-action` | Partially animated | Liquid column height climbs 46px (height: 8px to 54px) over 3.4s (60% active climb duty cycle). Height-growth / fill effects without translation are sometimes discounted in lab diagrams, but a 46px vertical sweep in a clear glass tube is a large prominent change (similar to concept-thermometer 46px rise rated Partially). |
| `physics-homopolar-generator` | Partially animated | 66px diameter filled copper disk with 4 radial spokes rotates 360° continuously every 3.0s (100% duty). Large and continuous, but at 3.0s rotation period and moderate contrast gradient, it sits near the boundary with Fully animated (which typically features faster rotation ≤2s like robinson-anemometer). |
| `physics-hall-effect` | Partially animated | Three 6px carrier electrons translate 45px diagonally across the semiconductor bar at 2.0s staggered. Small individual movers (6px) can be capped at Little, but here there are 3 distinct carriers continuously crossing the entire active zone. |

---
*Method: Direct code-reading classification of all 111 manifest entries against the calibrated geometric-motion rubric (.audits/perception-calibration-2026-08-16.md). Focus anchored to physical subject motion rather than diagram annotations or stroke-dashoffset wave marching. No browser testing or Playwright verification was performed. No code modified, nothing committed or pushed.*
