# Visual Standard Campaign — Wave 02

Latest: the operator resumed five deeper rebuilds. They are complete and ready
for one focused review; see `wave-02-rebuild/report.md`. Twelve approvals remain
intact and three other revision requests remain open. The initial batch report
below is retained for context.

Operator review returned 12 approvals and eight revision requests across the 20 v2 candidates. The operator approved the recalibration plan and requested a hold to conserve weekly usage; see `wave-02-reassessment.md`. Resume only on explicit operator instruction. Of 26 historical concepts assessed, 20 were modified and six deferred; none were added to the 945-concept catalog. Historical v1 source and provenance remain intact.

## Decisions made

- Accepted Wave 01 checkpoint: `48cf4abb2dfe597909b403da057b68381a2ff595` (five approvals).
- Applied the operator's roughly 20-revision cadence in four internal groups of five. Clear corrections were completed without intermediate operator gates.
- Retained each study's material and color treatment, correcting detached geometry, timing, stable poses and readability. All new versions credit Codex / Astra / 6.

## Review

Open http://127.0.0.1:3018/__qa/standard/ for all 20 comparisons. Controls are Approve, Revise, Keep previous, quality rating, Play/Pause and optional comment; inspection tools are collapsed. Copy the summary after reviewing.

| Candidate | Refinement |
| --- | --- |
| wireframe-globe | Retained the green wire sphere; separated stable meridians and softened the scanning band. |
| rotary-phone | Ten finger holes, a steady handset and five discrete return pulses make a single dialled digit legible. |
| wind-rose | The printed rose stays fixed; a restrained course marker travels along a rhumb line. |
| nocturnal-dial | The index approaches and dwells on a sighting direction; a quiet polar reference and larger dial preserve the brass instrument. |
| kamal-navigator | Hold the measured card and taut cord together; moving light along the two sight lines explains a held observation. |
| traverse-board | The recording peg now dwells at discrete chart holes, with restrained fixed pegs and an intact static record. |
| chip-log | The reel turns on its own axle, a fixed chip meets its bridle, and the knotted line advances at the reel rim speed. |
| davis-backstaff | A held observation keeps both vanes attached to their rays; directional light paths retain purposeful motion. |
| pelorus-dial | Inset the sight ray, steady the support ring, and give the bearing arm time to settle at each reading. |
| cross-staff | Restore the crosspiece at the sighting position; keep the star and horizon lines attached and animate only their directional traces. |
| hadley-octant | Keep the index at the illustrated sighting and let the ray sequence carry the explanation; enlarge the ebony-and-brass frame. |
| lead-sounding | A fixed line origin pays out to the moving weight; seabed contact precedes the short silt cloud. |
| station-pointer | The outer arms settle on the two plotted landmarks; the stable pose retains all three measured directions. |
| chappe-semaphore | Three articulated arms move together between held code poses; remove unrelated packet and beacon effects. |
| baudot-distributor | Twenty contact divisions form four five-contact groups; the active sector follows the sweeping brush. |
| wheatstone-abc | The dial advances in eight exact character positions and the active key matches the pointer. |
| heliograph-flash | Hold the aimed mirror steady; key depression and a restrained reflected beam now share a dot-and-dash timing. |
| telegraph-sounder | The armature moves down toward the coils; coil glow and click rings follow the dot-and-dash contact sequence. |
| siphon-recorder | A visible capillary tip writes a travelling trace; coil and ink displacement share the same phase. |
| rotary-spark-gap | Separate the electrodes with visible gaps; each of eight alignments per revolution triggers one short arc. |

## Decisions deferred

- **concept-sextant**: Fixed numerical altitude does not follow the moving arm; defer a solved double-reflection optical reconstruction.
- **concept-loran-navigation**: The vessel does not follow a computed time-difference intersection; defer exact station/hyperbola geometry.
- **concept-viking-sunstone**: The two images do not model polarization or intensity matching; defer a physically explained optical model and historical uncertainty.
- **concept-marconi-detector**: The coil response is unrelated to moving-wire magnetic history; defer a legible hysteresis/demodulation explanation.
- **concept-hughes-telegraph**: Typewheel, platen and paper advance need a shared character-selection model; defer printing synchronization.
- **concept-strowger-switch**: The wiper leaves the contact-bank geometry during rotation; defer a projected bank and exact two-motion selection model.

The operator's exact 20 decisions, ratings and comments are preserved in `wave-02-operator-review.json` and applied to the ledger. Twelve are approved; eight require revision. Standing local checkpoint authorization persists, with new implementation held for the current recalibration discussion. Push, release and deployment remain separate decisions.

## Critical issues

None found in the completed local checks. Deferred subjects remain unchanged.

## Changes and verification

- Changed 20 component modules, their manifest version/provenance entries, bounded baseline and campaign validators, the local authoring script, internal inspection controls and campaign state/evidence. No dependency or Writ edits.
- npm test, build, site:check, security:check, gallery:acceptance, campaign evidence validation and git diff --check passed. Public artifact: 1,051 allowlisted files, 10 HTML files and four sitemap URLs; no repository-only QA or RAIDEN paths.
- Source-bound evidence covers five phases (0/25/50/75/90%), live playback, reduced-motion CSS and disconnect/reconnect for all 20. All reduced previews reported zero active CSS animations and all reconnect checks passed.
- All 20 were visually reviewed in the 390px gallery with v1/v2 switching, Copy confirmation, source links and combined Codex/Astra/6 filtering; no horizontal overflow. Evidence is in `wave-02-evidence/`; per-concept paths and current hashes are recorded in `wave-02.json`.
- Weekly Codex usage: 16% before work, 17/18/18/18% at subgroup checks, 20% at final review. The account response exposes no standard five-hour window; Spark's window is separate.
- Starting and ending HEAD: `48cf4abb2dfe597909b403da057b68381a2ff595`. Wave 02 remains uncommitted pending operator review. No fetch, pull, push, release or deployment occurred.

## Verification limits

- Reduced-motion preview applies actual component CSS; OS preference switching was not exercised.
- Local Chromium-based in-app browser only; hidden-document transitions and broader device/cross-browser behavior not verified.
- Copy success was confirmed in the gallery UI; clipboard bytes were not independently read. Canonical production v2 embeds require a separately authorized deployment.
- Phase controls sample explicit inspection intervals. Wave 02 pairs play at native timing; this does not claim that different historical subcycles are normalized.
- These are compact illustrative refinements; six subjects needing deeper physical reconstruction remain deferred and unchanged.

## Historical references

- [concept-traverse-board](https://www.rmg.co.uk/collections/objects/rmgc-object-43910): Historical course and speed peg recording context.
- [concept-baudot-distributor](https://collection.sciencemuseumgroup.org.uk/objects/co33376/baudot-distributor-for-printing-telegraph): Material and historical artifact reference.
- [concept-wheatstone-abc](https://blog.sciencemuseum.org.uk/revealing-the-real-cooke-and-wheatstone-telegraph-dial/): Dial telegraph historical context; eight-position animation remains an illustrative simplification.
