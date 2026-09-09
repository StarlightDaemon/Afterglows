# Wave 02 — five deeper scene rebuilds

Retirement update: after the review below, the operator chose to retire wind
rose for now and possibly revisit it later. It is excluded from the active
gallery and routine review, with canonical source and both versions preserved.
The active gallery has 944 studies; the full preserved inventory remains 945.
Wave 02 has 16 approvals, three open revision requests and one retirement.
See `wind-rose-retirement.json` for the exact instruction.

Latest operator review: four of these five rebuilds are approved (globe 5/5,
kamal 4/5, chip log 4/5, semaphore 3/5). Semaphore retains the approved comment
"Could use more details"; it is not a revision request. Wind rose is Revise at
4/5 with no comment; clarification was requested. Wave 02 now has 16 approvals
and four open revision requests. Exact feedback: `operator-review.json`. The
implementation and sweep report below describes the review submission.

The operator explicitly resumed work for globe, wind rose, kamal, chip log and
semaphore. All five have been rebuilt and swept; one focused operator review is
ready at http://127.0.0.1:3018/__qa/standard/. These candidates are not yet approved.

## Result

| Study | What now happens | Visual assessment |
| --- | --- | --- |
| Wireframe globe | A projected grid rotates around a tilted axis; the gold meridian and marker dim on the far side. | Clear depth, a trackable rotation and a quieter, more deliberate composition. |
| Wind rose | A ship follows a plotted bearing on a parchment chart to a coastal destination. | The rose has a purpose within a readable journey, rather than independent decorative motion. |
| Kamal | The card moves through an overshoot and settles with its two edges aligned to the star sightline and horizon. | The viewer can see both the adjustment and its successful result; the final sweep separated the card, hand and sleeve. |
| Chip log | A boat moves away from the weighted board; its reel pays out rope as a sandglass drains and knots are counted. | Boat, log, rope and timer now explain one measurement process. |
| Semaphore | One articulated signal is set and held; a second tower copies it after an observation delay. | Both the mechanism and the purpose of its changing shapes are visible. |

These are the assistant's visual assessments, not operator ratings. The 12 prior
approvals and their exact source hashes are unchanged. Nocturnal dial, Hadley
octant and heliograph remain open revision requests outside this five-item scope.
The six earlier assessment deferrals remain unchanged.

## Preservation and review

- Historical v1 implementations remain byte-identical after removing the three
  declared additive v2 blocks. No catalog entries, dependencies or provenance were removed.
- The rejected first v2 sources are archived in `previous/`, with hashes, exact
  operator feedback and original evidence paths retained in the wave ledger.
- The five replacements remain v2 candidates because they revise unaccepted work.
  New decisions start blank; the other 15 decisions remain in the full summary.
  A separate review-storage revision prevents old browser ratings being applied
  silently to the replacements.
- Comparisons run at native playback speed. The normal review page keeps only
  Play/Pause, Approve/Revise/Keep previous, rating and optional comments visible;
  inspection tools remain collapsed.

## Sweep

- All five: 0/25/50/75/90% phase inspection, native live playback, reduced-motion
  CSS poses, disconnect cleanup and reconnect. No browser errors observed; each
  reduced-motion preview has zero active CSS animations.
- All five: 390px gallery visual review, v1/v2 switching, source links, combined
  Codex/Astra/6 filters and copied embed text containing `version="v2"`. No
  horizontal overflow. Final kamal silhouette was rechecked after its correction.
- 1,201 numerical samples verify sphere projection bounds, kamal sightline
  alignment, reel travel, course geometry and delayed signal copying.
- `npm test`, build, site, security and gallery acceptance passed. Catalog remains
  945 concepts; artifact remains 1,051 allowlisted files, 10 HTML pages, four
  sitemap URLs. Campaign source/evidence and whitespace checks passed.
- Evidence in this directory is bound to current component hashes in `wave-02.json`.
  Earlier evidence remains available through each candidate's revision history.

Weekly account usage read 22% before this work and 24% at the closing sweep.
These are shared account readings, not a precise per-task token charge.
Work remains local and uncommitted at HEAD
`48cf4abb2dfe597909b403da057b68381a2ff595`. No push, release or deployment occurred.

## Limits and references

Testing used the local Chromium-based in-app browser. Actual OS motion-preference
switching, hidden-document transitions and other browsers/devices were not
exercised. The new scenes use CSS SVG path animation. The stable poses use the
same defined geometry when animation is suppressed.

The chip-log scene compresses distance and a 28-second interval into a short loop;
its reset is an illustrative transition. The historical instrument counts knots
paid out during a timed interval. [Royal Museums Greenwich](https://www.rmg.co.uk/collections/objects/rmgc-object-42932).

The kamal is a side-view explanation of a card spanning the star and horizon;
distances and anatomy are schematic. [The Mariners' Museum](https://exploration.marinersmuseum.org/object/kamal/).

The semaphore poses demonstrate delayed copying, not particular historical words
or a complete encoding protocol. Its regulator and two hinged indicators follow
the basic mechanism. [University of Salford telegraphy collection](https://cntr.salford.ac.uk/comms/telegraphy.php).

The wind-rose course and globe are illustrative compositions, not navigational
charts or geospatial datasets. Candidate embeds remain local until separately
authorized deployment.
