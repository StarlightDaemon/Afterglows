# Animation Concepts Archive

The active Afterglows gallery contains **1,000 reusable animation concepts**.
The preserved catalog contains **1,005**, including five retired studies. Two
fresh studies consolidate the rotary and spirit-board pairs. Wind Rose remains
active as v3, at the standard gallery size. The collection has **13 sections**
and **66 categories**; each category owns a matching source folder. Trammel of
Archimedes and Linear Chirp complete the target. This pass is closed; no automatic
continuation is pending.

## Structure

- `index.html` — canonical `/concepts/` gallery page.
- `gallery/manifest.js` — unified catalog consumed by the gallery.
- `gallery/taxonomy.js` — definitive section/category definitions and migration
  classifications.
- `gallery/manifests/` — preserved historical metadata and direct canonical
  discipline shards for the expansion.
- `gallery/index.js` — the renderer, filters, sorting, version cycling, and
  Copy/Source actions.
- `gallery/module-queue.js` and `gallery/module-loader.js` — bounded imports,
  shared pending loads, caching, and recovery from temporary import failures.
- `gallery/concepts/<section>/<category>/*.js` — canonical custom-element
  implementations. Every concept has one primary physical location.

The former standalone Physics gallery and flat component layouts have been
retired. Existing `concept-*` and `physics-*` custom-element names remain stable;
the prefixes identify their implementation lineage, not separate galleries.

## Definitive taxonomy

| Section | Category | Active count |
| --- | --- | ---: |
| Mathematics & Information | Geometry & Pattern | 20 |
|  | Computing, Signals & Interfaces | 14 |
|  | Cryptography & Information | 11 |
|  | Statistics & Probability | 16 |
| Data Science & Optimization | Optimization & Decision Methods | 5 |
|  | Statistical Learning | 11 |
| Computing | Algorithms & Data Structures | 25 |
|  | Information Theory & Coding | 9 |
|  | Computer Networks | 15 |
|  | Distributed Systems | 9 |
|  | Runtime & Storage | 6 |
| Physical Sciences | Classical Mechanics & Kinematics | 18 |
|  | Fluid Dynamics | 20 |
|  | Waves & Optics | 18 |
|  | Acoustics & Sonic Physics | 20 |
|  | Electricity & Electromagnetism | 18 |
|  | Relativity & Spacetime | 11 |
|  | Quantum, Atomic & Nuclear Physics | 14 |
|  | Thermal & Statistical Physics | 16 |
|  | Plasma & Magnetohydrodynamics | 10 |
|  | Condensed Matter & Crystallography | 24 |
|  | Spectroscopy & Prismatics | 8 |
| Chemistry | Molecular Chemistry | 12 |
|  | Materials & Processing | 19 |
|  | Industrial Chemistry | 9 |
|  | Laboratory Chemistry | 7 |
|  | Alchemy & Hermetica | 17 |
| Human Health | Anatomy & Physiology | 20 |
|  | Neuroscience & Senses | 10 |
|  | Immunity & Medicine | 10 |
| Life Sciences | Molecular Genetics | 14 |
|  | Cellular Biology & Microbiology | 25 |
|  | Ecology & Evolution | 7 |
|  | Plants, Insects & Terrestrial Ecology | 30 |
|  | Birds & Aviary | 19 |
|  | Marine Life | 13 |
| Earth & Environment | Climate & Cryosphere | 6 |
|  | Geology & Earth Processes | 16 |
|  | Meteorology & Atmospheric Phenomena | 24 |
|  | Oceanography & Hydrology | 18 |
| Astronomy & Spaceflight | Astronomy & Astrometry | 29 |
|  | Orbital Mechanics & Gravitation | 10 |
|  | Astronautics & Spaceflight | 15 |
|  | Aeronautics & Flight | 11 |
| Engineering & Technology | Civil Infrastructure & Logistics | 16 |
|  | Energy Systems | 17 |
|  | Instrumentation & Signals | 18 |
|  | Control & Robotics | 18 |
|  | Mechanisms & Tools | 19 |
|  | Horology & Chronometry | 17 |
|  | Navigation & Cartography | 16 |
|  | Surveying & Geodesy | 13 |
|  | Telegraphy & Telecommunications | 14 |
|  | Transport, Civic Systems & Commerce | 18 |
|  | Domestic & Office Objects | 11 |
| Mind & Society | Economics & Collective Systems | 10 |
|  | Perception & Communication | 14 |
| Arts, Culture & Play | Music & Instruments | 21 |
|  | Games & Sport | 22 |
|  | Toys & Kinetic Play | 12 |
|  | Textiles & Craft | 17 |
|  | Typography & Printmaking | 11 |
|  | Optical Media & Early Cinema | 14 |
| Imagination & Belief | Science Fiction & Encounters | 18 |
|  | Supernatural & Folklore | 14 |
|  | Magic & Occult | 11 |
| **Active total** | **66 categories** | **1,000** |

Counts describe the active gallery. Five retired records remain preserved.
The current closeout and evidence are in `.raiden/state/SNAPSHOTS/gallery-final-thousand/`.

The gallery accepts deep links through `section` and `category` query
parameters, for example `/concepts/?section=physics` and
`/concepts/?section=physics&category=electromagnetism`.

## Reusing a concept

Every implementation is a dependency-free Custom Element with open Shadow DOM.
Use a tile's **Copy** action to obtain its current canonical module URL and tag:

```html
<script type="module"
  src="https://afterglows.starlightdaemon.dev/concepts/gallery/concepts/physics/mechanics/projectile-arc-concept.js"></script>
<physics-projectile-arc></physics-projectile-arc>
```

## Adding or recategorizing concepts

1. Add the component to its definitive
   `gallery/concepts/<section>/<category>/` folder.
2. Add new subjects to a discipline shard in `gallery/manifests/` using
   `expansionEntries`, and import that shard directly in `gallery/manifest.js`.
   Each entry states its canonical section and category. Historical shards and
   taxonomy overrides preserve earlier placements; new entries do not need them.
3. Record a concise definition, motion thesis, relevant aliases and facets,
   authoritative references, and an independently designed animation cycle.
   Definitions and motion descriptions belong in the manifest, which supplies
   accessible card details and search text.
4. Record actual contributions and whole-second ISO-UTC `added` and `updated`
   timestamps; never guess missing model information. Update the category's
   `expectedCount` in `gallery/taxonomy.js`.
5. Run `npm test`, build, site and security checks, then review the animation
   at multiple phases and with reduced motion. The validator checks taxonomy,
   canonical paths, unique identities, metadata, syntax, registration, and orphans.

The gallery mounts only nearby active versions and limits concurrent module
imports. Keep component lifecycles safe to disconnect and remount, pause
animation off-screen, and provide an understandable reduced-motion state.
A failed preview retries only when revisited, using a fresh request URL to bypass
browser-cached failures. Canonical metadata, Source links, and copied embeds
retain the stable module URL.

Versioned concepts keep all historical frames in one component module and use
the existing `default`/`versions` metadata. Do not duplicate a component merely
to give it a secondary disciplinary association; add facets to the catalog when
cross-disciplinary browsing is needed.

## Expansion acceptance

`npm run gallery:acceptance` verifies the operator-approved delivered scope,
selection outcomes, unique canonical modules, and current-source visual-review
evidence. The original research pool and the delivered/deferred decision are
retained under `.raiden/state/SNAPSHOTS/gallery-expansion/`. The resumed delivery,
preservation baseline, operator report, and 56 further source-bound reviews are
under `.raiden/state/SNAPSHOTS/gallery-expansion-resumed/`. The gate preserves the historical
1,000-active delivery, all 55 formerly deferred subjects plus Frost Heave, and
all baseline sources and metadata. A bounded restoration transition separately
verifies Wind Rose v3, its previous implementations and compatibility URL. Current
acceptance separately verifies D-012 and D-013: 1,000 active / 1,005 preserved,
five explicit retirements, two consolidations, two final additions and unchanged
prior sources. Final-pair model tests and source-bound render evidence are required.
These local review artifacts are excluded from the public site build.
