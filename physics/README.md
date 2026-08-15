# Physics & Movement Concepts Archive

A standalone, manifest-driven interactive gallery of small, independent animated physics simulations, kinematic linkages, wave mechanics, orbital dynamics, and fluid behaviors.

## 📂 Structure

- **`index.html`**: Host gallery page featuring theme controller integration, responsive grid, real-time search, category filtering, and embed copy actions.
- **`gallery/manifest.js`**: Manifest single source of truth containing category definitions, metadata, and attribution records.
- **`gallery/index.js`**: Data-driven gallery renderer, module importer, and filtering logic.
- Reduced-motion support is shared with the concepts gallery: `concepts/gallery/reduced-motion.js` injects `prefers-reduced-motion` suppression into each web component's shadow root (this gallery passes its `PHYSICS-` tag prefix).
- **`gallery/concepts/*.js`**: Standalone, dependency-free custom element modules (e.g. `<physics-projectile-arc>`, `<physics-double-pendulum>`).

## 🌌 Categories

1. **Classical Mechanics & Kinematics**: Parabolic ballistics, damped oscillators, chaotic double pendulums, centripetal force vectors, inclined planes, momentum transfer, Atwood machines, brachistochrone descent curves, gyroscopic precession cones, and Coriolis atmospheric deflection.
2. **Orbital Mechanics & Gravitation**: Keplerian orbits, Lagrange equilibrium points, gravity assists, three-body choreographies, black hole gravitational lensing, tidal locking, Hohmann orbital transfers, Roche limit tidal disruptions, gravitational redshift, and Laplace orbital resonances.
3. **Waves, Oscillations & Optics**: 2D wave ripple interference, standing wave harmonics, Doppler shifts, Snell's law refraction, Foucault pendulums, Chladni resonance plates, supersonic Mach shock cones, total internal reflection with evanescent fields, Michelson interferometry, and Fabry-Pérot optical cavities.
4. **Fluid Dynamics & Thermodynamics**: Kármán vortex streets, Brownian thermal diffusion, capillary meniscus climb, Archimedes buoyancy, Bernoulli venturi tubes, Rayleigh-Bénard convection, supercritical hydraulic jumps, Magnus aerodynamic lift, Rayleigh-Taylor interface instabilities, and Carnot heat engine cycles.
5. **Fields, Electromagnetism & Linkages**: Lorentz cyclotron spirals, 4-bar kinematic linkages, solenoid induction flux, epicyclic gear trains, synchrotron accelerators, superconductor Meissner levitation, Faraday homopolar generators, Hall effect voltage sensors, Helmholtz uniform field coils, and magnetic mirror confinement bottles.

## 🧰 Usage

Each physics concept is packaged as a reusable Custom Element with open Shadow DOM.

Example:
```html
<script type="module" src="./physics/gallery/concepts/projectile-arc-concept.js"></script>
<physics-projectile-arc></physics-projectile-arc>
```
