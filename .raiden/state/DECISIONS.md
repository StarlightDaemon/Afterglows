# Decisions

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
- Status: Accepted — pending deployment
- Decision: GitHub Pages must publish only the allowlisted artifact produced by `.github/workflows/deploy-pages.yml`; the repository root must not remain the deployment artifact.
- Rationale: the repository contains operational state, audits, tooling, package metadata, and retired material that do not belong on the public site origin.

## D-004

- Date: 2026-09-07
- Status: Active
- Decision: All reusable animation concepts belong to one canonical gallery at `/concepts/`. Every component has one primary placement in the 9-section, 43-category taxonomy, and its canonical source file lives in the matching category folder. The standalone Physics gallery and legacy flat source routes are retired.
- Rationale: Physics concepts are animation concepts rather than a peer product. One catalog removes duplicate renderers and navigation while the explicit taxonomy makes mathematical, scientific, technical, cultural, and imaginative subject areas independently browsable.
