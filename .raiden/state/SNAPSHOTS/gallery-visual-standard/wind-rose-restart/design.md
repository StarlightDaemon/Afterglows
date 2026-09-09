# Wind Rose — fresh meteorological study

## Operator request and scope

On 2026-09-09 the operator requested a complete restart: “completely scrap both
the old and new model … determine what a wind rose is, build the animation for it.”
Both earlier designs are discarded as design inputs. This implementation has new
data, geometry, composition, timing and explanatory context. It imports no earlier
Wind Rose scene or authoring code.

The completed replacement is staged as a standalone review candidate. The retired
canonical entry and its v1/v2 history remain untouched until the operator assesses
the replacement. This preserves the completed 1,000-active / 1,001-preserved
gallery and its source-bound acceptance evidence. No new catalog entry is added.
No commit or publication is part of this restart.

## Definition and design choice

A meteorological wind rose summarizes the frequency and strength of wind from
different directions at a location. The National Weather Service gives this
definition in its [glossary](https://forecast.weather.gov/glossary.php?word=WIND+ROSE).
The [Bureau of Meteorology guide](https://www.bom.gov.au/climate/averages/wind/wind_rose.shtml)
explains north-up FROM-direction branches, speed segments and frequency encoded
by segment length. Its particular calm-circle and speed-bin format is one possible
format, not a requirement for all wind roses.

The earlier Portolan subject used the cartographic/compass meaning of the term.
This restart deliberately adopts the meteorological meaning. The defining action
is aggregation of wind observations into a polar histogram. The chart never spins.
If accepted into the catalog, its appropriate placement is Earth & Environment /
Meteorology & Atmospheric Phenomena, with the existing stable subject identity
handled through an explicit migration decision at integration.

## Data and visual encoding

The [20 observations](observations.json) are synthetic, equal-duration records,
not measurements from a station. The tile says SYNTHETIC. Bearings are degrees
clockwise from north, describing where the wind comes FROM. Eight direction bins
use `floor((normalizedBearing + 22.5) / 45) % 8`.

Calm is explicitly defined for this demonstration as speed below 1 m/s and has
no direction. Non-calm speed bins are [1,3), [3,6), and [6,infinity) m/s, colored
gold, teal and coral. The calm count is separate from the directional histogram.

| Direction | Gold | Teal | Coral | Total |
| --- | ---: | ---: | ---: | ---: |
| N | 1 | 0 | 0 | 1 |
| NE | 0 | 1 | 0 | 1 |
| E | 1 | 1 | 0 | 2 |
| SE | 1 | 0 | 0 | 1 |
| S | 1 | 1 | 0 | 2 |
| SW | 1 | 2 | 2 | 5 |
| W | 1 | 2 | 1 | 4 |
| NW | 0 | 1 | 1 | 2 |
| **Directional** | **6** | **8** | **4** | **18** |

Two calm readings complete the total of 20. Southwest is 25% of the complete
record; west is 20%; calm is 10%. All percentages include calm in the denominator.

The plot uses a fixed **count** scale during accumulation, avoiding misleading
percentages from a changing prefix denominator. Each observation adds eight SVG
units of radial length, not area. Rings mark 1, 3 and 5 observations. The center
is (70,65), maximum branch radius is 40, and each sector spans 36 degrees with a
nine-degree gap. Low/middle/high bands remain sorted: inserting a lower-speed
reading shifts existing higher-speed bands outward without changing their thickness.

## Motion and readability

The 18-second cycle introduces one observation every 0.6 seconds after an initial
0.8-second setup. A colored arrow points inward along the measured FROM bearing;
the readout gives its binned direction and speed. The corresponding speed band
then grows. Calm readings change only the separate calm count.

Most incoming cues use an outer corridor at radius 61–57. The two southerly cues
use unused space at radius 35–29 outside their short branch, keeping the southern
direction label, readout and speed legend clear. These are observation cues, not
particles that form the histogram. All cues remain inside the frame.

The complete distribution holds from 12.8 to 17.3 seconds, then fades before
replay. Reduced motion shows the completed 15-second pose with all 20 readings,
the full legend and calm 2/20. Discrete readout labels use step-end transitions
so text does not crossfade on top of other text.

The review page shows an enlarged study and its actual 140-pixel gallery size,
with one Play/Pause control. Explanations and source links accompany the animation;
phase, reduced-style and remount controls are collapsed under inspection details.

## Implementation and verification

- [Standalone candidate](wind-rose-candidate.js): about 58 KB, open Shadow DOM,
  CSS keyframes, IntersectionObserver pause, disconnect cleanup, no network or
  shared runtime dependencies. Identical spans are compressed during authoring.
- Authoring/model: `scripts/wind-rose-model.mjs` and
  `scripts/build-wind-rose-candidate.mjs`. The old designs are never imported.
- Local review: `scripts/wind-rose-review.html` and `wind-rose-review.js`, served
  through three exact loopback-only QA routes. The candidate and review tooling
  are excluded from the public build.
- `node scripts/test-wind-rose.js`: PASS for bearing wrap and bin boundaries,
  speed boundaries, calm handling, exact totals, 1,801 accumulation states,
  monotonic retained observations, maximum branch radius, inward cues and
  frame/readout/legend clearance for all observation-arrow vertices.
- Actual browser review: 5%, 28.5%, 30%, 55%, 58.5%, 85% and reduced-motion pose,
  including both southerly cues. Both previews register. Reduced style yields
  zero running CSS animation and the completed readout. Remounting reconnects
  both studies. Live playback and the 390-pixel mobile layout were inspected.
- The gallery's existing tests, build, site/security and acceptance checks remain
  passing. All 945 revised baseline records/sources and retirement decisions
  remain unchanged. Source-bound evidence is recorded in [review.json](review.json).

Source/mechanism review was read-only; the primary agent performed all edits and
render inspection. Remaining limits: actual OS preference switching and browser
document visibility transitions were not exercised, nor was another browser
engine. The completed candidate awaits operator visual assessment and is not
approved, integrated or deployed by this report.

## Inspect or resume

Run `node scripts/build-wind-rose-candidate.mjs` after an authoring change, then
`node scripts/test-wind-rose.js`. Re-capture evidence and update its hash after
any candidate change. Start the QA server with `AFTERGLOWS_QA_PORT=3021` and
`node scripts/serve-gallery-qa.js`; open
`http://127.0.0.1:3021/__qa/wind-rose/`.

The operator preview is left available locally at handoff. Prior approval,
rejection and retirement records are historical evidence and remain intact.
