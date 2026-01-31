# Afterglows Graveyard Index

## 1. Executive Summary

This audit of the `/mnt/e/Afterglows` workspace reveals a **single-repo static site collection** serving as an experimental archive. The workspace relies on simple `npm` tooling (`http-server`) to serve a root launcher (`index.html`) that links to various sub-projects ("graves").

**Key Findings:**
- **Total Graves Detected:** 4 (3 Present, 1 Missing)
- **Top Risk:** The **"Stargate"** project—referenced as the primary feature of the site in all documentation and the root index—is **COMPLETELY MISSING** from the filesystem.
- **Topology:** Monorepo. Root acts as a "Launcher" (Category A), subdirectories are "Graves" (Category B).
- **State:** The site itself is functional as a launcher, but broken due to the missing Stargate module.

**Classification Summary:**
- **(A) Site Tooling:** Root index, Assets, Docs
- **(B) Content Graves:** Matrix Code, Retro, Concepts, Stargate (Missing)
- **(C) Shared / Support:** Templates, global CSS
- **(D) Unknown:** None

---

## 2. Afterglows Site Tooling Overview

The "Afterglows" root functionality is purely a **Launcher/Indexer**. It does not build the sub-projects; it simply links to them.

- **Root:** `/mnt/e/Afterglows`
- **Entry Point:** `index.html` (Static HTML5)
- **Engine:** `http-server` (via `npm start`)
- **Assets:** `/assets/css/` (Shared styles, fonts, theme toggle logic)
- **Indexing:** Manual. The `index.html` file hardcodes links to sub-projects. There is no auto-discovery.
- **Hosting:** Configured for GitHub Pages (inferred from `README.md` badges).

**Boundaries:**
- The root `index.html`, `package.json`, `assets/`, and `docs/` constitute the **Tooling**.
- All other directories (`matrix_code/`, `retro/`, `concepts/`) are **Content**.

---

## 3. Projects Table

| Grave | Path | Category | Type | Stack | Status | Confidence | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Matrix Code** | `/matrix_code` | Content | Lib / Demo | CSS, HTML | Stable | High | Standalone CSS library. |
| **Retro** | `/retro` | Content | Lib / Demo | CSS, HTML | Stable | High | CRT/Scanline effect library. |
| **Concepts** | `/concepts` | Content | Archive | CSS, HTML | Abandoned | High | "Graveyard" of 30+ header ideas. |
| **Stargate** | *MISSING* | **LOST** | App | JS, Canvas | **MISSING** | High | **CRITICAL:** Folder not found. |
| **_archive** | `/_archive` | Archive | Old Site | HTML | Legacy | High | Contains Beta index. |

---

## 4. Per-Grave Detail Sections

### 4.1. Matrix Code
- **Path:** `/mnt/e/Afterglows/matrix_code`
- **Category:** (B) AFTERGLOWS CONTENT GRAVES
- **Type:** Library / CSS
- **Stack:** CSS (Variables), HTML
- **Repo:** Part of Monorepo
- **What it is:** A standalone CSS library (`matrix_tools.css`) for creating digital rain, binary counters, and glitch text effects. Includes a demo gallery.
- **What exists:** `matrix_tools.css`, `index.html`, `README.md`.
- **Status signals:** Stable, documented.
- **Risks:** None. Functional.
- **Confidence:** High.

### 4.2. Retro
- **Path:** `/mnt/e/Afterglows/retro`
- **Category:** (B) AFTERGLOWS CONTENT GRAVES
- **Type:** Library / CSS
- **Stack:** CSS (Variables), HTML
- **Repo:** Part of Monorepo
- **What it is:** A toolkit for retro CRT monitor effects. Provides classes for scanlines, phosphor glow, screen curvature, and power-on animations.
- **What exists:** `crt_tools.css`, `crt_demo.html`, `README.md`.
- **Status signals:** Stable, documented, active.
- **Risks:** None.
- **Confidence:** High.

### 4.3. Concepts
- **Path:** `/mnt/e/Afterglows/concepts`
- **Category:** (B) AFTERGLOWS CONTENT GRAVES
- **Type:** Archive / Gallery
- **Stack:** HTML, CSS
- **Repo:** Part of Monorepo
- **What it is:** A gallery of 30+ experimental "header animations" that were rejected or explored before the final Stargate design.
- **What exists:** `all_concepts_gallery.html` (Single massive file), `README.md`.
- **Status signals:** Abandoned (Explicitly "Graveyard of discarded concepts").
- **Risks:** Low. Pure archival value.
- **Confidence:** High.

### 4.4. Stargate (MISSING)
- **Path:** `.../Stargate` (Expected)
- **Category:** (B) AFTERGLOWS CONTENT GRAVES
- **Type:** Web Application / Simulation
- **Stack:** HTML5 Canvas, Unknown JS
- **Status:** **MISSING / LOST**
- **Evidence of existence:**
    - Root `index.html` links to `Stargate/dialingsystem.html`.
    - `README.md` links to `Stargate/README.md`.
    - `docs/DEMOS_OVERVIEW.md` describes it as the "Main project archive".
- **Risk:** **CRITICAL**. The core application is missing from the workspace.

### 4.5. _archive
- **Path:** `/mnt/e/Afterglows/_archive`
- **Category:** (B) CONTENT / (A) OLD TOOLING
- **Type:** Legacy Site Versions
- **Stack:** HTML
- **What it is:** Older versions of the main site index (`index.beta.html`, `main-site.html`).
- **Status signals:** Archived.
- **Confidence:** High.

---

## 5. GitHub & README Triage
- **Remote:** `origin` -> `https://github.com/StarlightDaemon/Afterglows.git`
- **Branch:** `main`

**Accuracy Concerns:**
1.  **Stargate References:** The root `README.md` and `index.html` claim `Stargate` exists and is "Active". This is **FALSE** in the current workspace.
2.  **Broken Links:** All links pointing to `./Stargate/*` are dead.

**Proposed Future Fixes:**
- **Immediate:** Locate the `Stargate` files from git history or backups.
- **If Lost:** Remove `Stargate` section from `index.html` and `README.md` to reflect reality.
- **Hygiene:** `_templates` and `docs` are well organized.

## 6. Unknowns & Ambiguities

- **Where is Stargate?**
    - It is not hidden (checked `list_dir`).
    - It is not ignored (checked `.gitignore`).
    - *Action:* Needs to be pulled from `origin/main` or restored from backup.

---
*Generated by Afterglows Audit Agent (Gemini 3 Pro)*
