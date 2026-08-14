# Physics & Movement Concepts Archive

A standalone, manifest-driven interactive gallery of small, independent animated physics simulations, kinematic linkages, wave mechanics, orbital dynamics, and fluid behaviors.

## 📂 Structure

- **`index.html`**: Host gallery page featuring theme controller integration, responsive grid, real-time search, category filtering, and embed copy actions.
- **`gallery/manifest.js`**: Manifest single source of truth containing category definitions, metadata, and attribution records.
- **`gallery/index.js`**: Data-driven gallery renderer, module importer, and filtering logic.
- **`gallery/reduced-motion.js`**: Universal constructable stylesheet injecting `prefers-reduced-motion` suppression into each web component's shadow root.
- **`gallery/concepts/*.js`**: Standalone, dependency-free custom element modules (e.g. `<physics-projectile-arc>`, `<physics-double-pendulum>`).

## 🌌 Categories

1. **Classical Mechanics & Kinematics**: Parabolic ballistics, damped oscillators, chaotic double pendulums, centripetal force vectors, inclined planes, and momentum transfer.
2. **Orbital Mechanics & Gravitation**: Keplerian orbits, Lagrange equilibrium points, gravity assists, three-body choreographies, and gravitational lensing.
3. **Waves, Oscillations & Optics**: 2D wave ripple interference, standing wave harmonics, Doppler shifts, Snell's law refraction, and Chladni resonance patterns.
4. **Fluid Dynamics & Thermodynamics**: Kármán vortex streets, Brownian thermal diffusion, capillary meniscus climb, Archimedes buoyancy, and Bernoulli venturi tubes.
5. **Fields, Electromagnetism & Linkages**: Lorentz cyclotron spirals, 4-bar kinematic linkages, solenoid induction flux, epicyclic gear trains, and superconductor Meissner levitation.

## 🧰 Usage

Each physics concept is packaged as a reusable Custom Element with open Shadow DOM.

Example:
```html
<script type="module" src="./physics/gallery/concepts/projectile-arc-concept.js"></script>
<physics-projectile-arc></physics-projectile-arc>
```
