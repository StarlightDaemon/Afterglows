# Physics & Movement Concepts Archive

A standalone, manifest-driven interactive gallery of small, independent animated physics simulations, kinematic linkages, wave mechanics, orbital dynamics, and fluid behaviors.

## 📂 Structure

- **`index.html`**: Host gallery page featuring theme controller integration, responsive grid, real-time search, category filtering, and embed copy actions.
- **`gallery/manifest.js`**: Manifest single source of truth containing category definitions, metadata, and attribution records.
- **`gallery/index.js`**: Data-driven gallery renderer, module importer, and filtering logic.
- Reduced-motion support is shared with the concepts gallery: `concepts/gallery/reduced-motion.js` injects `prefers-reduced-motion` suppression into each web component's shadow root (this gallery passes its `PHYSICS-` tag prefix).
- **`gallery/concepts/*.js`**: Standalone, dependency-free custom element modules (e.g. `<physics-projectile-arc>`, `<physics-double-pendulum>`).

## 🌌 Categories

The gallery currently holds **111 concepts across 11 categories**:

1. **Classical Mechanics & Kinematics** (11): Parabolic ballistics, damped oscillators, chaotic double pendulums, centripetal force vectors, inclined planes, momentum transfer, Atwood machines, brachistochrone descent curves, gyroscopic precession cones, Coriolis atmospheric deflection, and Van der Pol limit cycles.
2. **Orbital Mechanics & Gravitation** (10): Keplerian orbits, Lagrange equilibrium points, gravity assists, three-body choreographies, black hole gravitational lensing, tidal locking, Hohmann orbital transfers, Roche limit tidal disruptions, gravitational redshift, and Laplace orbital resonances.
3. **Waves, Oscillations & Optics** (12): 2D wave ripple interference, standing wave harmonics, Doppler shifts, Snell's law refraction, Foucault pendulums, Chladni resonance plates, supersonic Mach shock cones, total internal reflection with evanescent fields, Michelson interferometry, Fabry-Pérot optical cavities, laser cavity transverse modes, and transmission diffraction gratings.
4. **Fluid Dynamics & Thermodynamics** (14): Kármán vortex streets, Brownian thermal diffusion, capillary meniscus climb, Archimedes buoyancy, Bernoulli venturi tubes, Rayleigh-Bénard convection, supercritical hydraulic jumps, Magnus aerodynamic lift, Rayleigh-Taylor interface instabilities, Carnot heat engine cycles, Kelvin-Helmholtz billows, Taylor-Couette vortical flows, Hagen-Poiseuille viscous flows, and cavitating vortex cores.
5. **Fields, Electromagnetism & Linkages** (13): Lorentz cyclotron spirals, 4-bar kinematic linkages, solenoid induction flux, epicyclic gear trains, synchrotron accelerators, superconductor Meissner levitation, Faraday homopolar generators, Hall effect voltage sensors, Helmholtz uniform field coils, magnetic mirror confinement bottles, Lenz eddy current braking, magnetic dipole interactions, and synchrotron radiation emission cones.
6. **Relativity & Spacetime** (7): Spacetime light cones, Lorentz length contraction, relativistic time dilation, gravitational wave quadrupole strain, Lense-Thirring frame dragging, Schwarzschild perihelion precession, and Minkowski spacetime diagrams.
7. **Quantum Mechanics & Modern Physics** (8): Quantum barrier tunneling, Stern-Gerlach spin splitting, photoelectric effect, quantum harmonic oscillators, Bohr atom transitions, Compton X-ray scattering, Zeeman spectral splitting, and electron wave interference.
8. **Statistical Mechanics & Thermodynamics** (9): Maxwell-Boltzmann distributions, 2D Ising ferromagnets, free expansion entropy, Bose-Einstein condensation, Planck blackbody radiance, Fourier heat diffusion, Stirling thermodynamic cycles, percolation phase transitions, and Peltier thermoelectric cooling.
9. **Acoustics & Sonic Physics** (8): Kundt's tube striations, acoustic radiation levitation, Helmholtz resonance cavities, acoustic beat envelopes, sonic boom N-wave signatures, rotational acoustic Doppler shifts, cymatics vibrating membranes, and acoustic quartz wind streaming.
10. **Plasma & High-Energy Electrodynamics** (9): Tokamak magnetic confinement, Debye screening spheres, cyclotron resonant acceleration, MHD Alfvén waves, Z-pinch plasma columns, magnetic reconnection, Van Allen radiation belts, Langmuir plasma probes, and magnetohydrodynamic channels.
11. **Condensed Matter & Solid State** (10): Bragg crystal diffraction, phonon dispersion branches, Josephson supercurrents, Fermi surfaces & Brillouin zones, quantum Hall plateaus, piezoelectric polarization, Bloch electron oscillations, 2D Bravais lattice nets, superfluid helium fountains, and De Haas-Van Alphen oscillations.

## 🧰 Usage

Each physics concept is packaged as a reusable Custom Element with open Shadow DOM.

Example:
```html
<script type="module" src="./physics/gallery/concepts/projectile-arc-concept.js"></script>
<physics-projectile-arc></physics-projectile-arc>
```
