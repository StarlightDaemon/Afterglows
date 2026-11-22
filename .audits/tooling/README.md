# Audit Tooling

Browser capture and inspection scripts used to produce the visual, responsive
and motion evidence under `.audits/`. They are repository-only: the Pages build
never ships this directory.

## Requirements

- Node.js 24 (the version CI uses).
- Install the audit tooling from its own lockfile, from the repository root:

  ```bash
  npm ci --prefix .audits/tooling --include=dev --ignore-scripts --no-audit --no-fund
  ```

  This creates `.audits/tooling/node_modules/`, which `.gitignore` already
  excludes. Re-run it after a fresh clone.
- The gallery suite and profiler use installed Chrome Stable on Windows, macOS
  or Linux. Set `CHROME_PATH` to select a different executable. Older capture
  scripts default to the standard Windows Chrome path.

## Gallery verification

Run `npm run test:browser` from the repository root. It builds once and serves
`dist/` on a temporary loopback port. Playback, search, desktop and mobile
pagination, Matrix motion preferences, and Retro keyboard controls
each get a fresh browser context. Pull requests and
Pages deployments run this same command. Individual gallery tests below use
the existing build. The older visual captures serve the source tree directly.

## Startup and search profiling

Run this command against an existing build. Build and output paths resolve
from the working directory. Choose a separate output directory for each run.

```sh
npm run profile:gallery -- --build dist --out .audits/tooling/captures/startup-current
```

Each profile uses five cold contexts. The output contains six screenshots and
`report.json` with browser version, renderer hash, profile settings, raw
samples and medians. Desktop uses 20 ms emulated latency, and mobile uses
60 ms and 4× CPU throttling. Use `--baseline <report.json>` to verify result
signatures and record screenshot hash matches on the same browser and host.
The profiler reports timing and screenshot differences for inspection.

Generated images and metrics go under `.audits/tooling/captures/`, which is
gitignored as reproducible, high-volume evidence.

## Current tools

These target pages that exist on the current site:

| Script | Purpose |
|---|---|
| `verify-capture.mjs` | Full-page stitched capture plus layout metrics at one or more viewports. Page keys: `hub`, `concepts`, `physics` (the Physical Sciences view of the unified gallery), `matrix`, `retro`, or any URL path. |
| `snap-viewport.mjs` | Single-viewport screenshot at a scroll position, for inspecting one region. Same page keys. |
| `test-viewport-playback.mjs` | Run `npm run build`, then `node .audits/tooling/test-viewport-playback.mjs` to check preview loading, visibility, tab switching, stale imports, versions, reduced motion, and import recovery in Chromium. |
| `test-load-more.mjs` | Run `npm run build`, then `node .audits/tooling/test-load-more.mjs` to verify pagination, live animations, version selection, focus, and ordering. Add `--mobile` for the touch-emulated viewport. |
| `test-gallery-search.mjs` | Run `npm run build`, then `node .audits/tooling/test-gallery-search.mjs` to check catalog loading, search input, filter choices, deep links, and keyboard focus. |
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
