# Afterglows

> *Where old code goes to dream.*

Afterglows is the canonical source for the live site at **https://afterglows.starlightdaemon.dev/**.

This repository owns the Afterglows site, demos, documentation, and shared assets. Other repositories may link here, but they do not serve as the source of truth for the live Afterglows deployment.

Afterglows is a workspace for visual experiments, snippets, and design ideas that no longer live in their original projects.

Items here may be reused, moved, or retired over time, but are kept available while they still have practical or exploratory value.

---

### **The Collection**

#### 🟢 **Matrix Code**
A standalone CSS & JS library for digital rain, cyberpunk typography, and terminal aesthetics.

#### 📺 **Retro**
A toolkit for high-fidelity CRT monitor simulation, including scanlines, phosphor persistence, and screen curvature.

#### 🧪 **Concepts**
The single catalog of 945 reusable motion studies, organized into 13 disciplines
and 63 definitive category folders spanning mathematics, physical sciences,
living systems, technology, culture, and imagination.

---

### **Shared Site Chrome**

Every page on the live site shares two canonical, root-absolute asset pairs — no per-page header, back-link, theme, or font markup:

- **Theme + font** (`/assets/js/afterglows-settings.js` + `/assets/css/afterglows-settings.css`) — the gear button + panel in the bottom-right corner. See [`docs/THEME_README.md`](docs/THEME_README.md).
- **Header + back navigation** (`/assets/js/afterglows-header.js` + `/assets/css/afterglows-header.css`) — the fixed "Afterglows" wordmark (top-left) and floating Back control (bottom-left). See [`docs/NAV_README.md`](docs/NAV_README.md).

IBM Plex Mono, VT323, Space Mono, Fira Code, and the Matrix page's JetBrains
Mono face are self-hosted under [`assets/fonts/`](assets/fonts/). The built
release artifact does not contact Google Fonts.

### Development and deployment

- `npm start` serves a loopback-only local preview with dotfiles, directory listings, and CORS disabled.
- `npm test` validates the gallery manifests and concept modules.
- `npm run security:check` verifies public-page CSP coverage and shared-script safety invariants.
- `npm run build` creates the allowlisted `dist/` artifact used by GitHub Pages. Operational directories and repository metadata are deliberately excluded.
- `npm run site:check` validates built internal paths, canonical metadata, social cards, favicons, the sitemap, and the custom 404 page.

See [`docs/DEPLOYMENT_NOTES.md`](docs/DEPLOYMENT_NOTES.md) for the Pages configuration.

---

> [!NOTE]
> **Looking for Stargate?**
> The Stargate project has ascended to its own dedicated workspace. It is no longer maintained here.
