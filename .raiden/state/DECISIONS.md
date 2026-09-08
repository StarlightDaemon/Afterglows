# Decisions

## D-006

- Date: 2026-09-07
- Status: Active
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
