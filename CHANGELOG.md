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
- **Constellation** returns to its natural celestial identity: reduced to
  v1/v2 (default v2); the chart versions moved to Star Chart.
- **Microscope** is now versioned: v1 preserves the original
  two-subjects-at-once render; new v2 lets the instrument stand alone —
  recentred, with the objective turret clicking between ×100/×400 and the
  focus knob re-hunting after each swap.

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
