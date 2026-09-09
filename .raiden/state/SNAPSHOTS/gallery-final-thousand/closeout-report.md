# Gallery exit report — 1,000 active animations

2026-09-09 · D-013 · requested implementation, review and closeout complete.

## Decisions made

The gallery now contains **1,000 active animations**, **1,005 preserved records**,
**five retired entries**, **13 sections**, and **66 categories**. Versions and
inspection sizes are not additional catalog entries. The final two subjects are:

| Addition | Placement | Design |
|---|---|---|
| Trammel of Archimedes | Mathematics → Geometry & Pattern | Perpendicular sliders drive a rigid bar whose pen traces an ellipse. |
| Linear Chirp | Engineering → Instrumentation & Signals | A constant-amplitude waveform and linked frequency ramp show a 1–8 Hz sweep. |

The subjects were drawn uniformly without replacement using `crypto.randomInt`
from an eligible pool of Trammel of Archimedes, Tusi Couple and Linear Chirp.
Newton's Rings was excluded before the draw because it already exists. The draw
was recorded once, without rerolling, in `selection.json`; the implementation plan
was saved before building. The trammel differs from the existing pantograph and
spirograph mechanisms. The chirp differs from amplitude modulation, fixed-frequency
traces and generic signal artwork.

The trammel keeps its slider spacing and pen distances fixed. The geometry uses
an extension beyond one slider, producing an ellipse with different horizontal
and vertical semiaxes. [Wolfram's trammel example](https://www.wolfram.com/products/applications/geometryexpressions/examples/).
The chirp integrates a linearly increasing frequency into phase; its analytic
frequency ramp is not a spectrogram. The two-second record plays three times
slower for inspection. [MathWorks' linear chirp definition](https://www.mathworks.com/help/signal/ref/chirp.html).

Both additions use self-contained SVG/CSS custom elements with 140×140px gallery
hosts, definitions, motion descriptions, distinctions, aliases, facets, factual
references and Codex/Astra provenance. Off-screen motion pauses; disconnect
removes the observer; reduced-motion rules provide complete static explanations.

The operator's five retirements remain: `concept-will-o-wisp`,
`concept-rotary-dial`, `concept-rotary-phone`, `concept-planchette`, and
`concept-ouija`. Their original records, versions and module URLs remain intact.
Retained Wisp, Wind Rose v3, Rotary Pulse Dial and Spirit Board & Planchette are
unchanged. Every one of the 1,003 pre-pass metadata records and source hashes is
preserved exactly. The new final-pair baseline records this boundary.

## Decisions deferred

No further additions or automatic work follow this closeout. The thousand-active
target and this requested pass are complete; LOOP-005 is closed. Earlier unresolved
campaign revisions—nocturnal dial, octant and heliograph, plus six deferred campaign
subjects—remain documented backlog. They are not silently marked fixed or approved.
This report records implementation and QA completion, not invented operator ratings.

No commit, push, release or deployment was performed. Publication remains a
separate operator action. The loopback review server on port 3022 is deliberately
left available for inspection; no automation was created.

## Critical issues

No blocking implementation issue remains. Work is local and uncommitted, including
the pre-existing campaign/expansion changes. Do not discard that work during a
future checkout or reset. Desktop Chromium and a 390px viewport were checked;
there is no claim of cross-browser certification or a fresh visual re-review of
every existing animation. CSS interpolates closely spaced sampled geometry; the
model tests verify the underlying analytic constraints.

Reduced motion was verified through authored CSS rules in the local harness,
without changing the operator's OS preferences. The mobile capture is downscaled
by the browser preview renderer; DOM measurements independently confirmed the
390px layout without horizontal overflow. A browser attachment timeout was
recovered by reusing the existing tab; neither application page reported errors.

## Changes and verification

| Verification | Result |
|---|---|
| `npm test` | PASS: 1,005 uniquely mapped canonical records, original 660-entry and revised 945-entry preservation, all 1,003 pre-pass records, module queue/retry, lifecycle, provenance and copy fallback. |
| `node scripts/test-final-two.mjs` | PASS: 4,001 trammel poses preserve both slots, three rigid distances and ellipse identity; 20,000 chirp samples match the phase derivative, nine cycles and 18 zero crossings. |
| `npm run gallery:acceptance` | PASS: historical delivery accounting; 341 expansion-source reviews; Wind Rose preservation; both consolidation models/reviews; final two models and source-bound evidence; exactly 1,000 active. |
| `npm run build` | PASS: 1,118 allowlisted artifact files. |
| `npm run site:check` | PASS: 10 public HTML files, 1,118 artifact files and four sitemap URLs. |
| `npm run security:check` | PASS. |
| Documentation counts / `git diff --check` | PASS: all 66 active category counts match; no whitespace errors. |

Browser review covers 25%, 50%, 75% and 85% phases, reduced-motion poses, remount,
native 140px gallery dimensions, narrow layout and search for both new concepts.
Both new hosts remounted with SVG content and zero CSS-animated elements under
the authored reduced-motion rules. The full gallery reported **Showing 1000 of
1000**; all five retired source links were absent from active cards. Searches
returned one relevant new study each. Page-error logs were empty.

The final-pair evidence is `review.json`, four `phase-*.jpg` files,
`reduced-remount.jpg`, `mobile.jpg`, and `gallery-search.jpg`. The review ledger
binds source and image hashes. Authoring lives in `scripts/final-two-models.mjs`
and `scripts/build-final-two.mjs`; metadata is in
`concepts/gallery/manifests/final-two.js`. Canonical sources are in the matching
Geometry & Pattern and Instrumentation & Signals folders. Geometry now has 20
preserved/active studies; Instrumentation has 18. No category or section was added.

Current count surfaces, taxonomy table, README files, changelog, RAIDEN state,
decisions, work log, open-loop disposition and campaign workflow are updated.
Historical snapshots remain historical; acceptance validates each transition
separately. No RAIDEN-managed Writ files were changed.

### Handoff and artifact index

- This directory: `selection.json`, `plan.md`, `baseline.json`, `delivery.json`,
  `review.json`, render evidence and `completion.json` form the current closeout.
- `../gallery-consolidation/report.md`: five retirements and the fresh rotary/
  spirit-board consolidations, with preserved sources and render evidence.
- `../gallery-restoration/report.md`: Wind Rose v3 integration and the earlier
  overlap assessment. Its pending-choice wording describes that past checkpoint.
- `../gallery-visual-standard/wind-rose-restart/`: fresh Wind Rose mathematics,
  design and original phase review.
- `../gallery-expansion-resumed/operator-report.md` and
  `../gallery-expansion/closeout-report.md`: earlier deliveries and source-bound
  visual coverage. Prior exit/completion markers describe their earlier scopes.
- `.raiden/state/OPEN_LOOPS.md`: preserved deferred backlog; no current open work.

Starting and ending branch: `main`; starting and ending HEAD:
`48cf4abb2dfe597909b403da057b68381a2ff595`. Working tree remains dirty with the
pre-existing work plus subsequent authorized changes. Nothing was committed or
published. Reopen only at operator request; run acceptance before future changes
and preserve the recorded baselines. The final review is available at
<http://127.0.0.1:3022/__qa/retirement/> and the full gallery at
<http://127.0.0.1:3022/concepts/>.
