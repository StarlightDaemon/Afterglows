# Audit Tooling

Browser capture and inspection scripts used to produce the visual, responsive
and motion evidence under `.audits/`. They are repository-only: the Pages build
never ships this directory.

## Requirements

- Node.js 24 (the version CI uses).
- `puppeteer-core` 25 (tested with 25.17.0). It is intentionally **not** in the
  root `package.json`, so the root lockfile and the deploy audit gate stay free
  of browser-automation dependencies. Install it beside the scripts:

  ```bash
  npm install --prefix .audits/tooling --no-save --no-package-lock --ignore-scripts puppeteer-core@25
  ```

  This creates `.audits/tooling/node_modules/`, which `.gitignore` already
  excludes. Re-run it after a fresh clone.
- A local Chrome or Chromium. Every script launches
  `C:\Program Files\Google\Chrome\Application\chrome.exe` unless the
  `CHROME_PATH` environment variable points elsewhere.

Each script serves the repository root itself over a loopback HTTP server, so no
build step or separate dev server is needed. Paths resolve from the script's own
location; run the scripts from any working directory.

Generated images and metrics go under `.audits/tooling/captures/`, which is
gitignored as reproducible, high-volume evidence.

## Current tools

These target pages that exist on the current site:

| Script | Purpose |
|---|---|
| `verify-capture.mjs` | Full-page stitched capture plus layout metrics at one or more viewports. Page keys: `hub`, `concepts`, `physics` (the Physical Sciences view of the unified gallery), `matrix`, `retro`, or any URL path. |
| `snap-viewport.mjs` | Single-viewport screenshot at a scroll position, for inspecting one region. Same page keys. |
| `montage.mjs`, `responsive-sheets.mjs`, `responsive-slices.mjs` | Post-process existing captures into contact sheets and slices. They read from `captures/` and do not load pages. |

Example, from the repository root:

```bash
node .audits/tooling/verify-capture.mjs concepts 375x667 1280x900 --tag=check
```

```bash
node .audits/tooling/snap-viewport.mjs physics 1280x900 end --tag=check
```

## Historical harnesses

Kept as the reproducible record behind dated audit reports. They predate the
2026-09-07 gallery unification and the D-015 navigation, so they address pages
that no longer exist and should not be expected to run unchanged:

| Script | Original target and record |
|---|---|
| `capture.mjs` | Motion-diff harness for the former `concepts/header-animation-concepts.html` gallery (override with `--page`; the current gallery renders cards lazily, so tag lookup needs adapting before reuse). |
| `responsive-capture.mjs`, `responsive-capture-tall.mjs` | 2026-08-20 responsive layout audit (`captures/responsive-2026-08-20/`), including the former `/physics/` page. |
| `crt-archetypes.mjs`, `crt-archetype-sheet.mjs`, `crt-crop-sheet.mjs` | 2026-08-20 CRT archetype distinctiveness review. |
| `probe-hub-320.mjs`, `probe-matrix-header.mjs`, `probe-matrix-reachability.mjs`, `probe-retro-header.mjs` | One-off header and reachability probes from the August layout fixes. |
