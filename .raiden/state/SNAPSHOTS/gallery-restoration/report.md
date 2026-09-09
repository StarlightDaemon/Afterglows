# Gallery restoration and retirement shortlist

2026-09-09 · D-011 · restoration complete; one operator choice pending (LOOP-004).

## Decisions made

The operator requested reimplementation of retired catalog animations and a broad
overlap search, with retirement candidates presented for a return to 1,000 active.
Wind Rose was the only retired catalog record. It is restored as **Wind Rose v3**,
using the independently rebuilt meteorological candidate. Current inventory is
**1,001 active / 1,001 preserved**, in **13 sections / 66 categories**. Versions
are presentations of a study and are not counted as separate catalog records.

Wind Rose now belongs to Earth & Environment → Meteorology & Atmospheric
Phenomena (24 studies). Navigation & Cartography contains 16. The stable
`concept-wind-rose` tag, complete v1/v2 implementations and version metadata are
preserved. Its former navigation module URL imports the canonical meteorology
module. The compatibility file is explicitly declared and validated; it does not
create a second study. Prior designs remain historical and did not inform v3.

## Decisions deferred

All three proposed retirement candidates remain active. Retire exactly one only
after the operator chooses it. The strongest recommendation is the first row.

| Proposed retirement | Retain | Overlap and loss |
|---|---|---|
| **Will-o'-the-Wisp** (`concept-will-o-wisp`) | **Will-o'-Wisp** (`concept-wisp`, default v2) | Same folkloric light wandering above marsh reeds. Retained study includes a wandering orb, trailing echoes, reflection, reeds and two versions. Loss: the larger flame, sparks, fog treatment and IGNIS FATUUS caption. |
| Rotary Dial (`concept-rotary-dial`, default v2) | Rotary Phone (`concept-rotary-phone`, default v2) | Same ten-hole dial wind/return mechanism. Revised Phone includes electrical return pulses. Loss: dedicated close-up and multiple digit strokes. |
| Planchette (`concept-planchette`) | Ouija (`concept-ouija`, default v2) | Same pointer-on-lettered-spirit-board interaction in the current implementations. Loss: large heart-shaped pointer and drifting-ring treatment. |

The recommendation concerns subject coverage, not a blanket judgment that the
candidate artwork is worse. Preserve whichever source is retired for later
reconsideration. Nocturnal dial, octant, heliograph and other deferred campaign
subjects remain outside this scope. No general expansion or revision batch follows.

The live comparison is at <http://127.0.0.1:3022/__qa/retirement/>. It contains
the three pairs and restored Wind Rose, live/pause/phase controls, reduced-motion
style previews, remount, and historical Wind Rose version selection. Controls
only affect the preview; there is no retirement action in this page.

## Critical issues

No blocking implementation issue was found. The active count is deliberately
1,001 while awaiting the requested operator choice; the final 1,000-active target
is **not yet met**. The earlier exit and 1,000-active delivery remain historical
records, superseded only for the limited restoration scope by D-011.

This is a catalog-wide metadata and lexical scan with targeted source and render
review, not a new visual certification of every study. Desktop Chromium local
review and a 390px viewport were checked; no cross-browser certification is
claimed. Reduced motion was tested by applying each component's authored media
rules in the local review harness, not by changing the operator's OS preference.

## Changes and verification

- Broad scope: exported metadata and source hashes for all 1,001 records across
  all 13 sections and 66 categories. Compared all **500,500 unordered label/alias
  pairs**, identifying 41 lexical neighbors at the documented threshold.
  Read-only subject reviews examined overlapping mechanisms and implementations
  in addition to name similarity. All six shortlisted sources and current
  default renders were checked. Distinct pairs such as Stirling mechanism versus
  its pressure-volume cycle and Bragg apparatus versus diffraction were retained.
- Wind Rose: integrated the exact reviewed v3 styles and markup. Validation
  removes its three additive blocks and reconstructs the exact previous source,
  ties the archived bytes and metadata to the immutable 945-record baseline,
  and verifies the new source, candidate and compatibility hashes.
- Preservation: `npm test` passed: 1,001 uniquely mapped records; original 660
  historical entries; 25 additive v2 refinements; all 945 revised baseline
  sources/metadata preserved, with Wind Rose restoration separately verified;
  module queue/retry, lifecycle, provenance and copy-fallback checks passed.
- `node scripts/test-wind-rose.js` passed bearing/speed boundaries, 20-record
  conservation, sorted stacks, 1,801 accumulation states and inward cues.
- `npm run gallery:acceptance` passed: historical deliveries unchanged;
  341 expansion sources remain bound to reviewed phase/reduced-motion evidence;
  current restoration validated at 1,001 active, explicitly pending one retirement.
- `npm run build` produced **1,112 allowlisted artifact files**. Site and security
  checks passed. Wave 02 historical evidence gate passed all 26 decisions and
  20 candidates using the preserved Wind Rose history where appropriate.
- Browser checks: all three comparison pairs rendered; integrated v3 rendered at
  its completed distribution; old module URL loaded; v1/v2/v3 switched in the
  review and the actual gallery. Both v3 hosts remounted under reduced-motion
  rules with zero animated CSS elements. Narrow viewport had no horizontal
  overflow. Gallery displayed **Showing 1001 of 1001**, then **Showing 1 of 1001**
  for Wind Rose under Meteorology, with canonical source link and v3 default.
  Both browser tabs reported no page errors.
- Documentation: current inventory surfaces, state, decisions, open loops,
  work log, changelog and campaign scope now reflect restoration and pending choice.

Evidence in this directory:

- `transition.json` — exact before/after metadata and source hashes.
- `previous-wind-rose.js` — immutable pre-restoration source bytes.
- `overlap-assessment.json` — all-record inventory, pair scan, source hashes,
  three proposals, retained distinctions and null operator decision.
- `marsh-light.png`, `rotary-dial.png`, `planchette.png` — current default pairs.
- `wind-rose-v3.png`, `wind-rose-reduced-remount.png`, `wind-rose-mobile.png`,
  `wind-rose-gallery.png` — integration evidence. `review.json` binds these images
  to current sources. Fresh design mathematics and phase evidence remain in
  `../gallery-visual-standard/wind-rose-restart/`.

Starting and ending repository: `main`, HEAD
`48cf4abb2dfe597909b403da057b68381a2ff595`, with pre-existing campaign and resumed
expansion changes plus this restoration uncommitted. No commit, push, release or
deployment occurred. Local review server: port 3022, started with
`$env:AFTERGLOWS_QA_PORT='3022'; node scripts/serve-gallery-qa.js` after building.
The local QA routes and RAIDEN state are excluded from the public build.

Next operator handoff: choose one tag from the shortlist (or another explicit
tag). Record that new decision separately; preserve historical evidence, source
and versions; update active-count surfaces and bounded curation assertions to
1,000; rebuild, validate, confirm filtering and close LOOP-004. Do not rewrite
the prior delivery or retirement records to pretend they were always current.
