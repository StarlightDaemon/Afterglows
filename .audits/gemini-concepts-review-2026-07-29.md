# Afterglows Concept Gallery Review (2026-07-29)

## Summary
I reviewed the `manifest.js` file, containing 212 concepts across 29 categories, and conducted a deeper read of roughly 15 of the more complex source files (prioritizing multi-versioned or dense concepts like `constellation`, `microscope`, `blender`, `audio-circle`, etc.). 

The gallery is incredibly robust and sets a high bar for distinct visual and mechanical identity. Based on that standard, I have identified a few organic areas for expansion (Part 1) and three candidates where concepts have drifted into rendering multiple distinct ideas that would benefit from a split (Part 2).

---

## Part 1: Gaps

### Proposed New Categories

**Media & Broadcast**
*(Distinct from the current "Retro" and "Music" offerings by focusing on transmission and playback hardware)*
* **Cassette Deck:** Focuses on the iconic dual-hub cassette with the tape visibly spooling from one side to the other across the playhead. (Mechanically distinct from the existing mainframe "Tape Reels").
* **Radio Transmission:** Concentric signal waves emitting and expanding from a central broadcast tower. (Distinct from the circular sweeping mechanic of "Radar").

**Wilderness & Camp**
*(A new natural theme outside of the existing weather and garden categories)*
* **Campfire:** Flickering, procedural flames with sparks climbing upward and fading. (Mechanically distinct from the static, glowing singular "Ember").
* **Topographic Map:** Slowly undulating elevation contour lines that shift over time to represent changing terrain.

**Vehicles & Transit** 
*(Currently, the "Street" category focuses heavily on infrastructure like traffic lights and crossings)*
* **Airplane Engine / Propeller:** A front-on view of a spinning radial engine or propeller, utilizing motion blur and rotational speed.
* **Subway Train:** A side-profile view of lighted train car windows rushing past in a dark tunnel, creating a stroboscopic/streak effect. (Mechanically distinct from the gate-drop focus of "Train Crossing").

### Additions to Existing Categories

**Science & Bio**
* **Virus / Pathogen:** A spiky, spherical body with slowly undulating surface receptors. (Mechanically distinct from the smooth, floating orbs in "Cell Cluster").
* **Bone / Joint Structure:** A rotating skeletal structure (like a knee joint or spine segment), adding a rigid structural/anatomical element not currently covered by the soft-tissue concepts.

**Ocean & Deep**
* **Whale Song / Acoustics:** Visualized acoustic frequency spectrums rippling deep underwater. (Completely distinct from physical sea creatures or the hardware-based "Sonar").

---

## Part 2: Split Candidates

Based on a sample read of ~15 source files, here are the concepts where the rendered content is fighting for a single slot or has drifted from its original premise:

### 1. Constellation (Category: Space & Spatial)
* **What it currently shows:** The concept has evolved significantly. While versions 1 and 2 show a natural star constellation (dots connected by lines), versions 3 and 4 render a highly technical map complete with a background grid, mapping flares, and HUD-style labels like "chart a-17".
* **The Split:** Extract the technical map into a new **"Star Chart"** or **"Navigation Map"** concept. This allows "Constellation" to return to its pure, natural celestial roots, while the "Star Chart" can lean fully into its technical UI/HUD identity with grids and telemetry.

### 2. Microscope (Category: Science & Bio)
* **What it currently shows:** The concept renders two completely different things at once: the exterior hardware of the microscope sitting on a bench (base, arm, tube, mirror, stage, focus knob) *and* a small circular "view inset" showing cells drifting and coming in and out of focus as the knob is turned.
* **The Split:** Extract the inset cells and focus-blur mechanic into a full-frame **"Microscopic Field"** or **"Microbes"** concept. This gives the dynamic cellular view the space it deserves in the Bio category, while the Microscope hardware can stand alone as a lab instrument (and could potentially be moved to the "Chemistry Lab" category alongside the beaker and bunsen burner).

### 3. Audio Circle (Category: Retro & Symbolic)
* **What it currently shows:** Version 1 is a simple pulsing ring. Version 2, however, implements a complex 16-bar radial spectrum analyzer dancing around a beating speaker hub with distinct phases and ripple effects. 
* **The Split (Moderate Confidence):** The spectrum analyzer is a fantastic, complex mechanic that feels like it has completely outgrown the generic "Audio Circle" label. Splitting V2 out into an **"Equalizer"** or **"Spectrum Analyzer"** (and potentially moving it to the "Music & Sound" category) would give this audio-reactive visualization its own dedicated identity, leaving "Audio Circle" to cover simpler pulsing mechanics.
