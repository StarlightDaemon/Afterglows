# Changelog

All notable changes to this project are documented here, in [Keep a
Changelog](https://keepachangelog.com/en/1.1.0/) style. This project follows
[Semantic Versioning](https://semver.org/); versions are recorded as
annotated git tags, and `package.json`'s `version` field is bumped to match
each tag.

Versioning starts at `0.1.0` rather than `1.0.0` because the earliest history
predates Afterglows existing as its own project — see [1.0.0](#100) below for
where it became canonical. Retroactive tags were assigned during a
2026-07-24 tagging pass that read the full commit history; see
`.audits/Afterglows_AUDIT_2026-07-22.md` and its predecessors for the audit
trail some of these entries reference.

## [Unreleased]

### Added
- Three gallery concepts from the verified subset of an external concept
  review (see `.audits/gemini-review-verification-2026-08-01.md`):
  - **Star Chart** (`space`, versioned) — the technical HUD-style map
    extracted from Constellation v3/v4.
  - **Microbial Field** (`bio`) — Microscope's view-inset focus-blur
    mechanic, given the full frame: reticle stays crisp while the specimen
    field hunts focus; a flagellate crosses the field.
  - **Virus** (`bio`) — spiked capsid in slow tumble, ten receptor spikes
    reaching/retracting on independent clocks, squirming nucleocapsid.
  - (A fourth concept from the same review, Knee Joint, was added and then
    cut in the same cycle's library-trim pass below — never released, so
    it isn't listed as a standalone addition.)
- **Mothership** (`ufo`) — complete new build replacing the one cut in
  the trim pass below (a replacement, not a refinement, so it restarts
  at New v1): the Independence Day archetype — a hull wider than the
  frame looming over a city skyline, low clouds sliding beneath the rim,
  chasing rim lights, and the center aperture running its charge-up /
  beam-drop / windows-flare cycle. Gallery lands at **200 concepts** net
  of everything this cycle (across the 20 consolidated categories — see
  Changed below).

### Removed
- **Tape Dispenser** (`office`), **Power Drill** (`workshop`) and
  **Depth Gauge** (`ocean`) — cut from the gallery in curation review.
- **Topographic Map** (`nature`) — added earlier in this cycle from the
  external review, then cut before release: the contour mechanic doesn't
  animate compellingly without drifting into radar territory.
- **Weave Grid** (`geometry`) — cut in curation review. The original
  never read as more than two sliding line-grids, and a rebuild attempt
  pivoted it toward a fabric loom — the wrong identity for the geometry
  category, so the concept was retired instead.
- **Library-trim pass** (212 → **199 across 29 categories**): twelve
  concepts cut on the judgment that none was likely to reach a solid
  result without substantial rework, plus **Knee Joint** (`bio`, added
  this same cycle, never released). Not a quality verdict on any one of
  them — each remains a candidate to revisit from git history if a
  different take on the subject comes up. **Jump Shot** and **Soccer
  Goal** (`sport`) were mid-retrofit into versioned tiles in this same
  cycle; **Laser Scan** (`scanning`) and **Portal** (`space`) were
  versioned Original-v1/Refined-v2 tiles — Portal in particular is
  earmarked to return in a future take; **Barometer** (`weather`),
  **Hammer & Nail** and **Handsaw** (`workshop`), **Windshield Wipers**
  (`street`), **Mothership** (`ufo`), **Lungs** (`bio`), **Skull**
  (`occult`) and **Popcorn** (`kitchen`) round out the cut. Full
  reasoning and per-concept notes in
  `.audits/concept-revision-tracker-2026-08-03.md`.

- Gallery **date sorting**: every manifest entry now carries `added`/
  `updated` ISO-UTC timestamps (backfilled from git author dates; the 39
  originals date to the 2026-04-20 modularization, their earliest tracked
  form). A new Sort dropdown offers Curated / Newest first / Recently
  updated; the date sorts render one flat newest-first grid with the date
  on each card.
- Gallery toolbar: the 29-chip category wall is now a compact
  `Categories: All ▾` disclosure drawer whose toggle summarises the current
  selection; isolate semantics unchanged.

### Changed
- **Category consolidation: 29 → 20.** Nine merges, no concept left
  unhoused: scanning→`systems` (Systems & Scanning), optics+labwork→`lab`
  (Lab & Optics), weather→`nature` (Nature & Weather), ufo→`scifi`
  (Sci-Fi & Encounters), workshop+clockwork→`mech` (Mechanisms & Tools),
  kitchen+office→`home` (Home & Office), street+money→`city` (City &
  Commerce), play+sport→`games` (Games & Sport), insects→`garden`
  (Garden & Insects). The remaining eleven categories carry over
  unchanged. Average category size rises from ~7 to 10 (range 5–15).
- **Revision pass over 34 concepts** (dictated review; working list in
  `.audits/concept-revision-tracker-2026-08-03.md`). Every rebuild ships
  as a new tile version with the prior render preserved on the version
  cycler: 32 concepts step "New v1" → **Refined v2** (Jump Shot, Bowling
  Strike, Bunsen Burner, Cash Register, Caterpillar, Cell Cluster, Coin
  Flip, Desk Fan, Dice Roll, Venus Flytrap, Fractal Tree, Hummingbird,
  Jack-in-the-Box, Joystick, Ladybug, Praying Mantis, Molecule Chain,
  Piggy Bank, Planet Rings, Scissors, Pencil Sharpener, Slinky, Soccer
  Goal, Spider, Stapler, Swan, Tape Reels, Typewriter, Wand Cast, Weather
  Vane, Windsock, Wind-up Robot, Woodpecker), and the already-versioned
  **Pacman** and **Circuit** append **Refined v3** with their prior v2
  restored on the cycler.
- **Music Box** steps "New v1" → **Refined v2** (original preserved on the
  cycler): the winding key moves to its own mount in the case's clear
  end-cap instead of colliding with the comb teeth, the open lid re-skews
  from a centered origin so it stays inside the tile, and the comb becomes
  a graduated bass-to-treble bank mounted above the cylinder.
- **Automated refinement pass over the 8 backlog concepts** (working list
  in `.audits/concept-revision-tracker-2026-08-03.md`), each stepping
  "New v1" → **Refined v2** with the original preserved on the cycler:
  **Ferris Wheel** (the rim's marquee-bulb ring was entirely invisible —
  its mask gradient sized farthest-corner put the ring outside the
  element's clipped circle; also hub/leg-apex alignment and gondola ground
  clearance), **Soldering Iron** (the iron's tip landed ~14px off the pad
  and never touched the joint it was making; a cooled bead now sits on the
  neighboring pad), **Claw Machine** (grab centered and fingers actually
  wrap the prize; the slip now tumbles the prize back onto its starting
  spot through a full backspin so the loop closes without a teleport),
  **Traffic Light** (stop phase now hands directly to green instead of
  0.64s of all-dark; housing/hoods re-centered), **Wrench & Bolt** (the nut now actually seats against a
  flange on a new workpiece plate, descend steps sync to stroke ends, and
  the loop resets behind a fade while the wrench visibly lifts back to the
  top), **Wind Chimes** (tubes ride one 5.2s breeze as a traveling wave
  instead of five unrelated periods that let neighbors cross; the striker
  now reaches both tubes it rings), **Anglerfish** (illicium rooted on the
  head instead of floating 20px above it, lower-jaw teeth point up, eye
  brought inside the outline, prey motes all eaten by the jaw snap), and
  **Hot Air Balloon** (burner frame added with the flame anchored to it
  and flaring up into the envelope mouth, sandbag hung off the basket rim
  on a cord, drift re-centered off the tile's clip edge).
- **Anglerfish** steps again to **Refined v3** (v1 and v2 stay on the
  cycler): a full rebuild of the deep-sea ambush on top of v2's anatomy
  fixes. The lure now casts a real light field that carries the reveal
  (idle halo → bloom → snap flash → decay), the mouth gains an upper jaw
  so the snap closes teeth-on-teeth, the whole fish lunges forward at the
  strike and eats the prey motes at contact, and the body picks up dorsal
  spines fitted to its curved outline, a flicking pectoral fin, and flank
  photophores that glimmer through the dark phase.
- **Wind Chimes** steps again to **Refined v3** (v1 and v2 stay on the
  cycler): a full rebuild that makes the wind the protagonist. A 7s cycle
  stages calm micro-sway, then a visible gust front — staggered streaks
  sweeping left-to-right — that heels the whole rig over on its hanger,
  kicks the tubes in a left-to-right cascade (each ringing as the front
  reaches it, with a second flicker on the buffet) and whips the striker
  clattering through the rack, before an underdamped settle back to calm.
- **Traffic Light** steps again to **Refined v3** (v1 and v2 stay on the
  cycler): a tightened presentation of the signal — compact housing with
  refit hoods and lamps, the pole planted to the tile's base, and the
  ground spill tracking the active lamp. Same 8s cycle and monochrome
  luminance lamp semantics as v2.
- **Traffic Light** steps once more to **Refined v4** (v1–v3 stay on the
  cycler): the gallery's first deliberate color break. The lamps run
  standard US colors (red, yellow, green) on the same 8s cycle, each
  throwing a colored halo flare and tinting the ground spill, with unlit
  lenses faintly holding their color; the housing keeps the gallery's
  green chrome so the tile belongs while the light pops.
- **Traffic Light** lands on **Refined v5** (v1–v4 stay on the cycler):
  v4's colored signal on a slower, re-proportioned 12s cycle — green
  holds longest (6s), red takes the middle share (4.5s), and yellow
  stays a brief intermediate (1.5s), with red handing straight back to
  green at the wrap.
- **Constellation** returns to its natural celestial identity: reduced to
  v1/v2 (default v2); the chart versions moved to Star Chart.
- **Microscope** is now versioned: v1 preserves the original
  two-subjects-at-once render; new v2 lets the instrument stand alone —
  recentred, with the objective turret clicking between ×100/×400 and the
  focus knob re-hunting after each swap.

### Fixed
- **Eye** steps "Refined v2" → **Refined v3** (prior v2 preserved on the
  cycler): the lids' elliptical crease curve fell short of the almond
  clip-path's pointed corners, leaving a triangular sliver of the eyeball
  background exposed at both tips even at full blink closure — fixed with
  flat, unrounded end-caps on each lid. The saccade also moved
  asymmetrically (-17px left vs. +15px right), clipping the iris ring hard
  against the corner when looking left while looking right never got
  close; both directions now move a matched ±14px.
- **Disco Ball** steps "New v1" → **Refined v2** (original preserved on
  the cycler): the thrown light spots swept on a pivot only 30px below
  the frame's top edge with radii up to 54px, so several of the five
  carriers sliced against the tile's hard overflow edge every rotation —
  half-moon ellipses popping in and out at the top-left corner and side
  edges instead of full, clean dots. The rod is now longer, centring the
  ball's — and the spots' pivot — at the frame's vertical middle with
  equal clearance on every side, and the throw radii are trimmed from a
  44-54px spread to 33-40px so the full swept circle, including the
  spot's own footprint at its most-rotated orientation, stays inside the
  frame.
- **Disco Ball** steps **Refined v2** → **Refined v3** (both priors
  preserved on the cycler): the ball itself read as a flat tiled disc —
  a uniform facet grid with no sense of it being a lit sphere, and only
  one glint standing in for a few hundred individual mirror tiles.
  v3 adds a volumetric layer over the grid (same technique Crystal Ball
  uses) that brightens toward an upper-left key light and darkens
  toward the rim, so the facets read as wrapped over a sphere instead
  of stamped onto a circle; two smaller glints now twinkle on their own
  out-of-sync clocks alongside the original, so the surface catches
  light at several points at once rather than exactly one.
- **Disco Ball** steps **Refined v3** → **Refined v4** (all three
  priors preserved on the cycler): every facet in a given row still
  shared exactly the same two-tone brightness, which reads as a printed
  pattern rather than individual mirror tiles — real disco balls, both
  vintage broken-shard and modern uniform-glass alike, are made of many
  small chips that each catch light at a slightly different angle. Two
  tiled sparkle layers (one bright fleck per facet, one larger one per
  2×2 block) now sit over the grid and scroll with the same rotation,
  breaking the uniform stripes into a mosaic of individually-lit chips.

### Fixed
- **Version cycler: tabbing through a tile's iterations now replays each
  version from the start of its cycle.** Hidden frames keep animating, so
  a newly shown version used to land at an arbitrary mid-cycle phase — for
  concepts with long idle or dark stretches (Anglerfish spends ~65% of its
  cycle near-black; Wind Chimes v1–v3 share an identical resting rack) every
  version looked the same when cycling, as if only the latest existed. The
  cycler now rewinds the incoming frame's shadow-root animations to zero on
  switch, so each iteration performs its full story deterministically.

## [1.8.1] - 2026-07-24

### Fixed
- Resolved 3 Dependabot alerts by bumping transitive `follow-redirects`
  (GHSA-r4q5-vmmm-2653) and `qs` (GHSA-w7fw-mjwx-w883, GHSA-q8mj-m7cp-5q26)
  under the `http-server` devDependency to patched versions within existing
  semver ranges. `http-server` itself stays at 14.1.1.

## [1.8.0] - 2026-07-24

### Changed
- Unified the four-page `matrix_code` demo hub into one full-screen page
  with a MODE control (Classic / Rain / Binary); fixed an invisible-cursor
  interaction bug where the effect measured ~0 net luminance gain; retired
  the old `demo_*.html` pages behind redirect stubs so inbound links keep
  working.
- Decoupled the rain's color entirely from the site-wide theme controller —
  its own local COLOR control (all eight phosphors plus three film
  extras), persisted separately, with a one-time "Match Global" snapshot
  button.

### Added
- Film-accurate FILM mode, rebuilt from production research rather than the
  popular falling-glyph simplification (stationary glyph grid, cascading
  illumination waves, in-place glyph mutation). Now the default mode; RAIN
  remains available but was slower and is no longer the default.
- DRAFT mode: the production's original horizontal code design before its
  rotation to vertical Japanese text.
- TRACE mode: the *Sneakers* "no more secrets" decode effect.

### Fixed
- Restored the ASCII Box concept's dropped v1 as a proper cyclable version
  (it had shipped with a "Refined v2" badge but no actual v1 in its version
  history).

## [1.7.0] - 2026-07-23

### Added
- Concepts gallery build-out, phase 4 — the largest single content push:
  19 new categories (Kitchen, Ocean, Street, Music, Workshop, Play, Optics,
  Bio, Weather, Garden, Office, Labwork, Sport, Birds, Textile, Money, Toys,
  Insects) plus new Geometry concepts (Lissajous, Moire Rings, Fibonacci
  Spiral, Pendulum Wave, Fractal Tree).
- Three more Original-v1-to-Refined-v2 rebuild batches: Target Lock/Loading
  Bar/Signal/Digital Noise, Bin Counter/Glitch Text/Atom/EKG, Grid/Wormhole/
  Audio Circle.
- Gallery grows to **212 concepts across 29 categories**.

### Fixed
- Eleven correctness fixes to concepts added during this push: Fibonacci
  Spiral (true-to-phi construction), Lissajous (correct 3:2 figure), Grid
  (rebuilt as an actual grid, with the globe split out into a new Space
  concept), Praying Mantis (ambush pose), Piggy Bank (standing on its
  legs), Pencil Sharpener (pencil actually feeds in), Stapler (paper/staple
  alignment), Watering Can (pours onto the seedling), Disco Ball (mirror-
  facet grid), Raven (corvid silhouette), Joystick (mono green palette).

## [1.6.0] - 2026-07-22

### Added
- Concepts gallery build-out, phase 3: expanded Nature, Space, Occult, and
  Retro categories, plus a new Clockwork & Mechanisms category. Gallery
  grows to 99 concepts across 12 categories.

## [1.5.0] - 2026-07-22

### Added
- One shared header/back-navigation system (`afterglows-header.js`/`.css`)
  replacing every page's own header/back markup: a fixed wordmark plus a
  floating Back control that follows real site hierarchy — hub pages
  (matrix_code, retro, concepts) go to the Afterglows root, demo sub-pages
  go to their own hub, and the root home shows no Back control. Chrome
  self-suppresses inside iframes.

### Removed
- The root logo/site-header block and the matrix_code/retro in-flow
  "BACK TO..." links, all replaced by the shared header/back system.

See `docs/NAV_README.md` for the full design.

## [1.4.0] - 2026-07-22

### Added
- Live eight-phosphor color-theme picker for `matrix_code` and `retro`,
  alongside a full visual rebuild of both demo areas to the concepts
  gallery's quality bar (depth-layered CSS rain, DPR-crisp canvas engines,
  a fully CRT-styled `crt_demo.html`).
- Unified theme + font control: replaced three previously-divergent theme
  implementations (root, matrix_code, retro) with one canonical site-wide
  controller (`assets/js/afterglows-settings.js` + `afterglows-settings.css`)
  covering 8 phosphor palettes and 4 fonts, referenced by every subsite.
  One-time migration adopts the old per-site storage keys.

### Removed
- Two redundant theme variants (P1+ Matrix, IBM Blue) folded into the
  final 8-phosphor set.

See `docs/THEME_README.md` for the full design.

## [1.3.0] - 2026-07-22

### Added
- New Nature & Elements category (Rainfall, Lightning, Aurora, Ocean
  Waves, Ember) plus four targeted single-concept additions (Cube Spin,
  Fingerprint Scan, Moon Phases, Space Invader) filling gaps in existing
  categories.
- Four new themed categories — UFOs & Encounters, High Sci-Fi,
  Supernatural & Occult, Magic & Arcane (26 tiles) — plus six
  Original-v1 concepts rebuilt to Refined v2 (Hex, Eye, Laser Scan, Server
  Rack, Bio-Rhythm, Portal).
- Gallery grows to 74 concepts across 11 categories.

### Changed
- Page renamed to "Animation Concepts Archive" (display text only); its
  explainer block moved below the gallery grid.

## [1.2.1] - 2026-07-22

### Fixed
- Category filter chips now isolate to a single category on click (click
  again to restore all), instead of the previous non-isolating behavior.
- `package-lock.json` is no longer gitignored — the lockfile is now
  committed, making dependency resolution reproducible across clones.
- `package.json`'s `license` field now matches `LICENSE`/`CONTRIBUTING.md`
  (MIT) instead of the previously-declared ISC.
- Removed stray `backups/stray-local-files/{DNA,Sonar,Radar}` leftovers.

This directly resolves findings F4, F5, and F11 from
`.audits/Afterglows_AUDIT_2026-07-22.md`.

## [1.2.0] - 2026-07-01

### Changed
- Concepts gallery rebuilt as data-driven: ~700 lines of hand-written tile
  markup replaced by a manifest (`gallery/manifest.js`) and a render loop
  (`gallery/index.js`) that dynamically imports each concept module.
  Adding a concept is now a manifest entry plus a module file — no HTML
  edits. Rendered output was verified byte-for-byte equivalent to the
  previous gallery.

### Added
- Filter and search toolbar: live name search, category chips, and
  Original/Refined/New status chips, with a live "Showing N of 39" count.
- Per-tile Copy (portable embed snippet to clipboard) and Source (view the
  concept's module file) actions.

This is the architecture the entire subsequent concepts gallery build-out
(1.3.0-1.7.0) is built on.

## [1.1.0] - 2026-06-15

### Fixed
- Audit wave 1: CSS correctness fixes and canvas animation lifecycle
  correctness (animation loops previously ran uncancelled with no
  visibility handling).
- Audit wave 2: `prefers-reduced-motion` support added site-wide, plus
  security, accessibility, and SEO fixes.

This is the first recorded audit-and-fix cycle for the site, and the
baseline that later reports in `.audits/` (2026-07-14 onward) measure
against.

## [1.0.0] - 2026-04-20

### Changed
- Afterglows declared the canonical source, with its own deployment notes
  and `CNAME` domain — the point where it stopped being a shared workspace
  with the Stargate project and became its own independently deployed
  site.
- Dead Stargate UI hooks removed from the shared codebase (Stargate spun
  off into its own repository).
- Concepts gallery expanded, renamed, flattened, and modularized into its
  current component shape.
- Site chrome fixes: canonical logo restored, dead media/sound hooks
  removed, card actions and gallery links standardized.

## [0.2.0] - 2026-01-31

### Changed
- Renamed the Matrix Code and Retro directories to snake_case
  (`matrix_code/`, `retro/`) and moved `LICENSE` to the repo root.
- Restructured and simplified the repository documentation and README.

## [0.1.0] - 2026-01-11

### Added
- Initial Afterglows site setup, alongside the Stargate dialing-system
  prototype sharing this repository at the time: Mark III established as
  the stable dialing-UI mainline (side-panel layout with a state machine),
  and the first Matrix Code digital-rain demo variations with a live
  gallery.

At this point Afterglows and Stargate were not yet split into separate
projects — see [1.0.0](#100) for that milestone.

[1.8.1]: #181---2026-07-24
[1.8.0]: #180---2026-07-24
[1.7.0]: #170---2026-07-23
[1.6.0]: #160---2026-07-22
[1.5.0]: #150---2026-07-22
[1.4.0]: #140---2026-07-22
[1.3.0]: #130---2026-07-22
[1.2.1]: #121---2026-07-22
[1.2.0]: #120---2026-07-01
[1.1.0]: #110---2026-06-15
[1.0.0]: #100---2026-04-20
[0.2.0]: #020---2026-01-31
[0.1.0]: #010---2026-01-11
