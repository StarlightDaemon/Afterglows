# Operator-selected retirements and fresh consolidations

2026-09-09 · D-012 · implemented and verified; fresh artwork ready for operator review.

## Decisions made

The operator accepted the first recommended retirement, requested complete
restarts for both other pairs, and clarified that Wind Rose should appear once
at a consistent size. This pass implements those decisions:

| Retired active entries (sources and history preserved) | Active result |
|---|---|
| Will-o'-the-Wisp (`concept-will-o-wisp`) | Keep Will-o'-Wisp (`concept-wisp`, v2), as recommended. |
| Rotary Dial and Rotary Phone | Fresh **Rotary Pulse Dial** (`concept-rotary-pulse-dial`). |
| Planchette and Ouija | Fresh **Spirit Board & Planchette** (`concept-spirit-board`). |
| Neither Wind Rose review size represents a separate study | Keep Wind Rose v3 unchanged; one review panel. |

Inventory: **1,001 − 5 + 2 = 998 active**. There are **1,003 preserved records**,
including five retired records, in **13 sections and 66 categories**. The new
records begin fresh version histories; previous subjects are fully retired from
active filtering, while their original module URLs remain intact. No old scene
code was used as an input to either new implementation.

The review at <http://127.0.0.1:3022/__qa/retirement/> now presents the two fresh
studies, retained Wind Rose and retained Wisp. All hosts share the same review
enlargement (238 × 238px from a 140px host). The actual gallery uses 140 × 140px
hosts for the new studies. Wind Rose's implementation and standard gallery sizing
did not change. Older artwork can have internal margins within its tile; no
catalog-wide rescaling of historical source artwork was performed.

## Decisions deferred

These consolidations leave **two places below the former 1,000-active target**.
No unrelated subjects were added to fill the gap. A later explicitly resumed
selection can choose two distinct studies. The requested retirements and rebuilds
are implemented; LOOP-004 is closed. The current report does not infer operator
visual approval of the fresh artwork. Existing campaign revisions remain deferred.

## Critical issues

No blocking defect was found in this pass. Work is local and uncommitted; no push,
release or deployment occurred. Desktop Chromium and a 390px viewport were checked;
this is not a claim of cross-browser certification or fresh visual review of all
998 active studies. Reduced-motion verification uses the authored CSS rules in
the local review harness, rather than changing the operator's OS preferences.

## Changes and verification

**Fresh rotary design.** Fixed numerals, a perforated metal finger plate, a
highlighted finger selecting 5, and a fixed finger stop establish the action.
On release, a governed return includes a non-pulsing interval, then five contact
interruptions and a cumulative trace. Pulsing follows the nominal 10 pulses/sec
and two-thirds break ratio, slowed eight times for observation; the 220ms pause
becomes 1.76 seconds. The face geometry is schematic, not an exact manufactured
dial drawing. The model follows the historical Post Office educational description
of the mechanism. [P.O. Telecommunications pamphlet, archived transcription](https://www.britishtelephones.com/howdial.htm).

**Fresh board design.** A parchment board carries a fixed alphabet, responses
and numerals. A wooden planchette has a genuinely open SVG aperture. Its window
centers on H, E, L, L and O, with dwell periods and a small excursion to distinguish
the repeated L. A progressive message records the selections before GOODBYE.
This depicts game equipment and a staged sequence, without asserting supernatural
causation. Window-based letter selection is described in the manufacturer's
instructions. [Hasbro's archived instructions](https://www.hasbro.com/common/instruct/Ouija.PDF).

**Preservation and validation.** `baseline.json` captures all 1,001 pre-consolidation
records with complete metadata and SHA-256 source hashes. All remain exact,
including the five retired records, Wind Rose v3 and the retained Wisp. The
decision records the two new metadata objects and source hashes. Historical
660/945-entry baselines, Wind Rose restoration and 341 expansion-review hashes
remain protected. The acceptance gate treats D-012 separately from historical
deliveries instead of rewriting those snapshots.

| Check | Result |
|---|---|
| `npm test` | PASS: 1,003 canonical records, historical preservation, queue/retry, lifecycle, provenance and copy fallback. |
| `npm run gallery:acceptance` | PASS: historical deliveries, 341 source-bound expansion reviews, five selected retirements, two replacements, 998 active. |
| `node scripts/test-curation-models.mjs` | PASS: 10,001 rotary states, exactly five return-only pulse edges, selected-bearing/stop alignment; 16,001 board states, aperture registration, repeat-L excursion, bounds and closed loops. |
| `npm run build` | PASS: 1,115 allowlisted artifact files. |
| `npm run site:check` | PASS: 10 public HTML files, 1,115 artifact files, four sitemap URLs. |
| `npm run security:check` | PASS. |
| `git diff --check` | PASS. |

Browser evidence: four phase poses (25%, 50%, 75%, 85%), reduced-motion poses and
remount, narrow layout without horizontal overflow, native 140px dimensions,
full-gallery count **Showing 998 of 998**, absence of all five retired source links
from active cards, and **Showing 1 of 998** for the consolidated Planchette search.
The two new hosts and Wind Rose remounted with SVG content and zero CSS-animated
elements under authored reduced-motion rules. Both review and gallery tabs
reported no page errors. The live review is left playing for the operator.

Evidence: `decision.json`, `baseline.json`, `review.json`, four `phase-*.jpg`
renders, `reduced-remount.jpg`, `mobile.jpg`, and `gallery-search.jpg`. Source and
image hashes are recorded in the review ledger. The primary authoring files are
`scripts/curation-models.mjs` and `scripts/build-curation-studies.mjs`; catalog
metadata is in `concepts/gallery/manifests/curation.js`. Generated components are
standalone SVG/CSS custom elements with viewport pause and disconnect cleanup.

Repository started and ended on `main`, HEAD
`48cf4abb2dfe597909b403da057b68381a2ff595`, retaining pre-existing uncommitted
campaign/expansion work plus the restoration and this consolidation pass.
Current state, decisions, work log, closed loop, counts, taxonomy table, changelog
and review page are updated. No RAIDEN-managed Writ files were changed.
