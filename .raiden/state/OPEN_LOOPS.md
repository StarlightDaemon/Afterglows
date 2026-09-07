# Open Loops

## Open

- **2026-09-07 — Release-readiness deployment:** review and commit the pending
  release changes, push them to `main`, switch the GitHub Pages Source to
  **GitHub Actions**, and verify the completed workflow. Production acceptance
  must confirm the unified `/concepts/` taxonomy and deep links, absence of the
  retired `/physics/` collection, the branded 404, self-hosted fonts with no
  Google requests, and denial of repository-only paths such as `/.raiden/`.

---

## Closed

- **2026-06-07** — WSL→macOS migration remediation complete. All `/mnt/e/` paths corrected to `E:\Citadel/` across AGENTS.md, prompt files, and state files. `commit-msg` hook execute bit set. `node_modules` reinstalled clean on ARM64 macOS.
