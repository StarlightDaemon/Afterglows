# Decisions

## D-014

- Date: 2026-09-09
- Status: Release authorized; deployment verification in progress
- Decision: The operator requested pushing everything live if ready. Commit and
  push the completed gallery and its evidence to main, using the existing
  allowlisted GitHub Pages workflow after release checks pass.
- Scope: Publish 1,000 active / 1,005 preserved records, including the revised
  Wind Rose, two consolidations and final two additions. Preserve five retirements
  and the deferred revision backlog. No additional animation batch is implied.
- Readiness: npm test, gallery:acceptance, build, site:check, security:check and
  dependency audit passed; zero known dependency vulnerabilities.
- Evidence: `SNAPSHOTS/gallery-live-release/report.md`. LOOP-006 tracks deployment.

## D-013

- Date: 2026-09-09
- Status: Complete — final target met and engagement closed
- Decision: At operator request, randomly select two eligible concepts, plan
  and implement them, add them to the gallery, document and close out the pass.
- Outcome: Trammel of Archimedes and Linear Chirp, selected without replacement
  using a recorded random draw, bring the total to 1,000 active / 1,005 preserved.
  Five retirements, prior metadata and all 1,003 pre-pass sources remain exact.
- Scope: Supersedes the two-place shortfall/defer in D-012. No additional batch,
  automatic continuation, commit, push, release or deployment is implied.
- Evidence: `SNAPSHOTS/gallery-final-thousand/selection.json`, `plan.md`,
  `baseline.json`, `delivery.json`, `review.json`, `completion.json` and
  `closeout-report.md`. LOOP-005 is closed.

## D-012

- Date: 2026-09-09
- Status: Implemented; fresh replacements ready for visual review
- Decision: Retire `concept-will-o-wisp`, retain `concept-wisp`. Retire both
  `concept-rotary-dial` and `concept-rotary-phone`; build one fresh rotary dial.
  Retire both `concept-planchette` and `concept-ouija`; build one fresh combined
  board/pointer study. Preserve all old records, sources, versions and evidence.
- Wind Rose: keep v3, remove the confusing second-size review panel, and use
  consistent preview and gallery sizing. No separate Wind Rose record is added.
- Accounting: 1,001 - 5 + 2 = 998 active; 1,003 preserved; 13 sections / 66
  categories. The former 1,000 target has two open places; no filler additions.
- Scope: supersedes D-011 pending choice. No unrelated revisions or publication.
- Evidence: `SNAPSHOTS/gallery-consolidation/decision.json`, `baseline.json`,
  `review.json` and `report.md`. LOOP-004 is closed.

## D-011

- Date: 2026-09-09
- Status: Historical restoration; choice resolved by D-012
- Decision: At explicit operator request, restore all retired catalog studies
  and broadly assess overlapping animations for one proposed retirement.
  Wind Rose is the sole retired record and now defaults to the fresh
  meteorological v3. Its prior versions, evidence and embed URL are preserved.
- Accounting: 1,001 active / 1,001 preserved, 13 sections and 66 categories.
  No candidate is retired until the operator selects one; target is 1,000 active.
- Scope: Supersedes D-007 retirement and D-010 stop only for this requested
  restoration and shortlist. No broader revision batch or publication.
- Evidence: `SNAPSHOTS/gallery-restoration/report.md`, `transition.json`,
  `overlap-assessment.json` and integration screenshots. LOOP-004 tracks choice.

## D-010

- Date: 2026-09-09
- Status: Complete — engagement closed
- Decision: At operator request, finish the exit report and strategy handoff,
  close the current engagement and defer all remaining campaign/integration work.
  No automatic continuation or new batch follows this exit. This supersedes
  earlier standing continuation guidance for the closed engagement.
- Accounting: The delivered set is 1,000 active studies plus the completed Wind
  Rose replacement, 1,001 including that replacement without counting its older
  versions again. Canonical catalog and retirement state remain unchanged.
- Disposition: LOOP-003 is complete; LOOP-002 is closed administratively with
  unresolved visual revisions and integration recorded as deferred backlog.
  Closeout does not fabricate Wind Rose approval, a rating or reactivation.
- Evidence: `SNAPSHOTS/gallery-exit-handoff.md` and `gallery-exit-completion.json`.

## D-009

- Date: 2026-09-09
- Status: Candidate ready for operator assessment
- Decision: At explicit operator request, restart Wind Rose from a fresh
  meteorological definition, discarding both earlier models as design inputs.
  Build a new observation-to-distribution animation with synthetic data,
  FROM directions, frequency-length branches, speed bands and separate calm.
- Delivery: A complete standalone review candidate is staged outside the
  canonical gallery. Prior sources and feedback remain historical evidence;
  no acceptance, reactivation or deployment is inferred. D-007's retirement
  remains in effect pending assessment, and D-008's delivered counts stay intact.
- Evidence: `SNAPSHOTS/gallery-visual-standard/wind-rose-restart/design.md` and
  `review.json` in that directory.

## D-008

- Date: 2026-09-08
- Status: Active
- Decision: Resume additions at explicit operator request to reach 1,000 active
  gallery studies, preserving retirement and visual-campaign decisions. This
  supersedes D-006's stop for further additions, while its earlier delivery
  remains historical evidence. D-007 stays in force. The new target implies
  1,001 preserved records with one retired study. No publication is authorized.
- Outcome: Completed locally on 2026-09-09; all 56 additions reviewed and all
  revised baseline sources preserved. No further additions are needed.
- Evidence: `SNAPSHOTS/gallery-expansion-resumed/operator-report.md`, assessment,
  delivery, preservation baseline and source-bound render ledger.

## D-007

- Status: Historical retirement; superseded by D-011
- Decision: Temporarily retire Portolan Wind Rose (`concept-wind-rose`) from
  the active gallery at operator request, with possible later reconsideration.
  Preserve canonical source, v1/v2 metadata, provenance and review history.
- Implementation: `ACTIVE_CONCEPTS` drives gallery display and filtering;
  `CONCEPTS` retains retired records and source compatibility. At this retirement
  checkpoint there were 945 preserved / 944 active studies. D-008 subsequently
  expanded the gallery while retaining this retirement decision.
- Evidence: `SNAPSHOTS/gallery-visual-standard/wave-02-rebuild/wind-rose-retirement.json`.
  Revisit only on operator request; no deployment is implied.


## D-006

- Date: 2026-09-07
- Status: Historical delivery; stop on additions superseded by D-008
- Decision: Stop gallery additions at the implemented scope, finish review and
  documentation, and retain the remaining selected research as explicitly
  deferred. `SNAPSHOTS/gallery-expansion/delivery.json` records the operator
  instruction and delivered/deferred outcome. No automatic continuation toward
  the original 1,000-concept target is authorized. The completed 945-concept
  implementation is locally checkpointed at
  `5f50f196d314e472398c64c44ef636f83698c290`; no push, release, or deployment
  is authorized or implied.
- Rationale: The operator changed the objective from further expansion to
  closing out completed work. The original selection remains available for audit,
  and the local checkpoint provides a clean base for the Afterglows Visual
  Standard Campaign.

## D-005

- Date: 2026-09-07
- Status: Active
- Decision: Canonical expansion shards declare section and category directly;
  historical shards and migration overrides retain their original purpose.
  Definitions and motion theses live in manifest metadata, feed search, and
  appear through accessible About disclosures. Contributor filters derive from
  provenance. Full-catalog cards use inert templates, bounded viewport imports,
  and mounting of only nearby active versions.
- Rationale: Additions need honest disciplinary placement without a growing
  migration table, while the full catalog must stay usable as it grows. Inert
  templates prevent cached definitions from upgrading every off-screen card;
  disconnecting hosts invokes JavaScript lifecycle cleanup as well as stopping
  CSS animation work. D-004's canonical-gallery and one-primary-placement
  principles remain in force.

## D-001

- Date: 2026-05-08 (pre-RAIDEN)
- Status: Active
- Decision: Stargate is removed from Afterglows and maintained in its own standalone repo.
- Rationale: Stargate outgrew its place as an Afterglows exhibit; it has its own multi-generational architecture and warrants a dedicated workspace.

## D-002

- Date: 2026-05-08 (pre-RAIDEN)
- Status: Active
- Decision: `_archive/` holds retired material that is not deleted outright; it is not promoted to live collections without operator review.
- Rationale: retired experiments may have future reference value; archiving rather than deleting preserves that option.

## D-003

- Date: 2026-09-06
- Status: Accepted — deployed (completion recorded in OPEN_LOOPS.md)
- Decision: GitHub Pages must publish only the allowlisted artifact produced by `.github/workflows/deploy-pages.yml`; the repository root must not remain the deployment artifact.
- Rationale: the repository contains operational state, audits, tooling, package metadata, and retired material that do not belong on the public site origin.

## D-004

- Date: 2026-09-07
- Status: Active
- Decision: All reusable animation concepts belong to one canonical gallery at `/concepts/`. Every component has one primary placement in the definitive taxonomy, and its canonical source file lives in the matching category folder. The standalone Physics gallery and legacy flat source routes are retired.
- Rationale: Physics concepts are animation concepts rather than a peer product. One catalog removes duplicate renderers and navigation while the explicit taxonomy makes mathematical, scientific, technical, cultural, and imaginative subject areas independently browsable.
