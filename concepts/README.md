# Animation Concepts Archive

The canonical Afterglows gallery contains **660 reusable animation concepts** in
one catalog. The collection is organized into **9 top-level sections** and **43
definitive categories**; each category owns a matching source folder.

## Structure

- `index.html` — canonical `/concepts/` gallery page.
- `gallery/manifest.js` — unified catalog consumed by the gallery.
- `gallery/taxonomy.js` — definitive section/category definitions and migration
  classifications.
- `gallery/manifests/` — preserved metadata/provenance shards for the original
  Concepts and Physics batches.
- `gallery/index.js` — the sole renderer, module loader, filters, sorting,
  version cycling, and Copy/Source actions.
- `gallery/concepts/<section>/<category>/*.js` — canonical custom-element
  implementations. Every concept has one primary physical location.

The former standalone Physics gallery and flat component layouts have been
retired. Existing `concept-*` and `physics-*` custom-element names remain stable;
the prefixes identify their implementation lineage, not separate galleries.

## Definitive taxonomy

| Section | Category | Count |
| --- | --- | ---: |
| Mathematics & Information | Geometry & Pattern | 19 |
|  | Computing, Signals & Interfaces | 14 |
|  | Cryptography & Information | 11 |
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
| Chemistry | Laboratory Chemistry | 7 |
|  | Alchemy & Hermetica | 17 |
| Life Sciences | Cellular Biology & Microbiology | 19 |
|  | Plants, Insects & Terrestrial Ecology | 22 |
|  | Birds & Aviary | 19 |
|  | Marine Life | 13 |
| Earth & Environment | Geology & Earth Processes | 15 |
|  | Meteorology & Atmospheric Phenomena | 23 |
|  | Oceanography & Hydrology | 4 |
| Astronomy & Spaceflight | Astronomy & Astrometry | 24 |
|  | Orbital Mechanics & Gravitation | 10 |
|  | Astronautics & Spaceflight | 3 |
|  | Aeronautics & Flight | 11 |
| Engineering & Technology | Mechanisms & Tools | 19 |
|  | Horology & Chronometry | 17 |
|  | Navigation & Cartography | 17 |
|  | Surveying & Geodesy | 13 |
|  | Telegraphy & Telecommunications | 15 |
|  | Transport, Civic Systems & Commerce | 18 |
|  | Domestic & Office Objects | 11 |
| Arts, Culture & Play | Music & Instruments | 21 |
|  | Games & Sport | 22 |
|  | Toys & Kinetic Play | 12 |
|  | Textiles & Craft | 17 |
|  | Typography & Printmaking | 11 |
|  | Optical Media & Early Cinema | 14 |
| Imagination & Belief | Science Fiction & Encounters | 18 |
|  | Supernatural & Folklore | 16 |
|  | Magic & Occult | 11 |
| **Total** | **43 categories** | **660** |

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
2. Add its metadata to the appropriate shard in `gallery/manifests/`.
3. If the shard's historical category does not map to the desired definitive
   category, add a narrow tag override in `gallery/taxonomy.js`.
4. Preserve the existing origin contribution structure and stamp `added` and
   `updated` as ISO-UTC timestamps; never guess missing model information.
5. Run `npm test`. The validator enforces taxonomy counts, canonical folder
   placement, unique tags/labels/paths, metadata, syntax, custom-element
   registration, and orphan detection across all 660 modules.

Versioned concepts keep all historical frames in one component module and use
the existing `default`/`versions` metadata. Do not duplicate a component merely
to give it a secondary disciplinary association; add facets to the catalog when
cross-disciplinary browsing is needed.
