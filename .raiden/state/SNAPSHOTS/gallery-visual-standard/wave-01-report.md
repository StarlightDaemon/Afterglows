# Visual Standard Campaign — Wave 01

**Complete: all five candidates approved; local checkpoint commit and continuation authorized.**

## Decisions made

Reviewed 19 historical concepts in Engineering & Technology / Mechanisms & Tools: **3 pass, 5 refine, 11 defer**. Two unchanged Astra Energy Systems studies were also sampled as quality references: 21 concepts considered in total, with 5 passes including references. No concept was added or removed; the gallery remains at 945.

The original combination lock, epicyclic planetary gear, and soldering study pass. Their brass/chrome, technical green/gold, and colorful workbench treatments are preserved. The five candidates improve coupled motion and readable cutaways while keeping wood, leather, metal, and cream visually distinct. The new version is the local default because it explains the mechanism more clearly; the operator approved all five candidates after the grindstone blade revision.

| Concept tag | Previous → candidate | Decision | Rating | Comment |
| --- | --- | --- | --- | --- |
| `concept-solenoid-engine` | v1 → **Refined v2** | Approve | 5/5 | — |
| `concept-treadwheel-crane` | v1 → **Refined v2** | Approve | 5/5 | — |
| `concept-forge-bellows` | v1 → **Refined v2** | Approve | 4/5 | — |
| `concept-butter-churn` | v1 → **Refined v2** | Approve | 4/5 | — |
| `concept-treadle-grindstone` | v1 → **Refined v2** | Approve | 5/5 | — |

All five candidates carry **Codex / Astra / 6** at individual-version and aggregate-concept level. No attribution was guessed for earlier versions. Existing v1 markup/styles are retained verbatim within the source and checked against the immutable expansion baseline.

The reference studies are Three-Phase Induction Motor and Regenerative Braking; existing phase and reduced-motion evidence was sampled and its source hashes remain valid. Their coupling of mechanical quantities informed the explanations, without requiring their palette. Bellows mechanism references: [Smithsonian forge bellows](https://www.si.edu/object/forge-bellows-ca-1850:nmah_845591) and [National Park Service blacksmith shop](https://www.nps.gov/places/blacksmith-shop-interior.htm).

## Decisions deferred

- `concept-jansen-linkage`: Foot tracer moves independently of articulated bars. Defer a full kinematic reconstruction with a verified foot locus.
- `concept-trip-hammer`: Cam and helve lack maintained contact, lift direction is inconsistent with the left hammer, and sparks run beyond impact. Defer cam contact/release geometry.
- `concept-pantograph`: Rotating rigid scaffold does not connect to the two traced paths; the 2.5:1 claim needs a solved scaling linkage. Defer geometric reconstruction.
- `concept-peaucellier-linkage`: Rhombus bars stay fixed while vertices and tracer move separately. Defer exact linkage inversion and constraint validation.
- `physics-four-bar-linkage`: Live loop closure is already solved, but suppressed animation removes solved poses and leaves a disconnected static coupler. Defer versioned standalone reduced-motion repair.
- `concept-gears`: Material treatment is strong, but tooth engagement and angular rates need a dedicated meshing check; palette changes alone would not justify a version.
- `concept-piston`: The live crank and piston deserve endpoint geometry verification before refinement; defer a coupled slider-crank reconstruction.
- `concept-wrench`: The nut advances in abrupt axial steps and the open jaw remains engaged through backswing. Defer engagement/disengagement timing and travel refinement.
- `concept-geneva-drive`: Intermittent rotation is legible, but the pin/slot contact and locking dwell require a solved engagement profile. Defer that geometry.
- `concept-vise-anvil`: Material finish is strong, but the movable jaw/lead screw/hammer sequencing needs an explicit workholding explanation. Defer mechanism redesign.
- `concept-centrifugal-governor`: Animated balls and sleeve do not maintain link closure across the orbit. Defer a projected three-dimensional governor with constrained joints.

Shared concern: standalone reduced-motion coverage of historical modules requires per-version review. The gallery's existing suppression shim is unchanged.

## Critical issues

None. No preview failures or usage-limit stop. OS preference switching, hidden-document behavior and broader browser/device coverage remain unverified; reduced-motion screenshots apply actual CSS declarations and are labelled as a style preview.

## Changes and verification

- Starting and ending commit: `dd7e22168cb50a8e7cf6af708c1c9f0d27af60f6` on `main`. Two ahead / zero behind local `origin/main`; no remote refresh.
- Worktree: uncommitted wave work only; no staged changes. No commit, push, merge, release, deployment, dependency change, Writ edit or next wave.
- Product files: the five modules above and `concepts/gallery/manifests/concepts.js`. Stable tags, categories, module URLs and gallery shell are unchanged.
- Local tooling: `scripts/gallery-standard.html`, `scripts/gallery-standard.js`, `scripts/gallery-standard-wave-01.js`, `scripts/validate-gallery-standard.js`, `scripts/serve-gallery-qa.js`, and the narrow version-preservation extension in `scripts/test-gallery-baseline.js`.
- State: this report, [wave-01.json](wave-01.json), [evidence](evidence/), and narrow CURRENT_STATE / OPEN_LOOPS / WORK_LOG updates.

| Check | Result |
| --- | --- |
| npm test | Pass; 945 concepts and 660 preserved historical entries |
| npm run build | Pass; 1,051 allowlisted files |
| npm run site:check | Pass; 10 HTML files, 4 sitemap URLs |
| npm run security:check | Pass |
| npm run gallery:acceptance | Pass; 285 expansion source/evidence hashes unchanged |
| node scripts/validate-gallery-standard.js | Pass; candidate evidence and current source hashes |
| git diff --check | Pass |
| Geometry | 1,201 analytic samples: fixed rod lengths, rope travel, periodic inventories, loop closure |
| Visual | Every candidate at 0/25/50/75/90%, live cycle, reduced-motion pose; final screenshot paths in ledger |
| Lifecycle | All five cancel old CSS animations on disconnect and reconnect successfully |
| Gallery | All five switch v1/v2, Copy the selected version, keep source URLs and match Codex/Astra/6 filters |
| Narrow layout | Every candidate in the gallery at 390×844; content width 375px, no horizontal overflow. Comparison page also 375px without overflow |
| Review controls | Approve / Revise / Keep previous, 1–5 rating, comment, reload persistence, and Copy summary verified using isolated test storage |
| Simplified review | Five recorded approvals/ratings and exact blade comment prefilled; single Play/Pause toggle and optional phase controls verified; all inspection panels initially closed; no desktop overflow |

QA, scripts and RAIDEN paths are excluded from the public artifact. Screenshot bytes returned by the browser are JPEG; this wave's evidence uses the correct .jpg extension. Initial historical assessment screenshots use a shared inspection timeline where a legacy period was unmeasured; all five operator comparison pairs have explicit measured full-cycle periods.

## Operator preview

[Open the local review](http://127.0.0.1:3018/__qa/standard/). The focused page now contains only the revised grindstone, with prior/candidate comparison, one Play/Pause toggle, Approve / Revise / Keep previous, a quality rating and an optional comment. Phase, reduced-motion and reconnect controls, provenance and implementation details are under collapsed Inspection tools. Recorded operator decisions prefill the page; browser-local edits take precedence. The summary is visible and copyable. The page makes no repository writes.

Server: `node scripts/serve-gallery-qa.js`, bound to loopback on port 3018. It stays running with the review tab available. If interrupted, restart that command from the repository root and reopen the URL. Future waves can select a ledger with `AFTERGLOWS_QA_WAVE`; default is 1.

Current standard Codex weekly usage: **16% used**. The operator confirmed no applicable five-hour standard-Codex window; Spark's separate window is not used. Usage checks were 8% before implementation, 9% after the five-concept group, 11% at handoff, 14% after the first operator review, 15% before the requested blade revision, and 16% at revision handoff.

The latest operator-pasted review approves all five candidates; the revised grindstone is now rated 5/5 with an empty comment. Its earlier Revise decision and blade appearance comment remain in revisionHistory. The v2 blade now has a tapered steel profile, bright cutting bevel, ferrule and riveted wooden handle. Its straight edge is tangent at (65,46) to the 25-unit stone centered at (80,66). The revised candidate is accepted.

Only the grindstone product module changed during this revision. Its CSS/keyframes and the four approved product hashes are unchanged; the original v1 remains preserved. Required npm checks were rerun and passed. Fresh phase/live/reduced/mobile comparison evidence is stored as `evidence/grindstone-blade-revision-*.jpg`; reconnect passed and the 390px viewport has 375px content width with no overflow. Prior gallery integration checks remain applicable to unchanged interfaces. The pre-revision source and evidence bindings are preserved in revisionHistory, and `blade-revision-checks.json` records the unchanged hashes/CSS.

The operator replaced the frequent review gates with roughly 20 needed revisions per checkpoint and continuous correction between checkpoints. See [campaign-workflow.md](campaign-workflow.md). The operator explicitly authorized local checkpoint commits for accepted batches and automatic continuation. Candidate embeds keep production source URLs and become publicly available only after a separately authorized deployment.
