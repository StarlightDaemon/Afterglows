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
An archive of experimental UI motions, header animations, and interaction models that never made it to production.

---

### **Shared Site Chrome**

Every page on the live site shares two canonical, root-absolute asset pairs — no per-page header, back-link, theme, or font markup:

- **Theme + font** (`/assets/js/afterglows-settings.js` + `/assets/css/afterglows-settings.css`) — the gear button + panel in the bottom-right corner. See [`docs/THEME_README.md`](docs/THEME_README.md).
- **Header + back navigation** (`/assets/js/afterglows-header.js` + `/assets/css/afterglows-header.css`) — the fixed "Afterglows" wordmark (top-left) and floating Back control (bottom-left). See [`docs/NAV_README.md`](docs/NAV_README.md).

---

> [!NOTE]
> **Looking for Stargate?**
> The Stargate project has ascended to its own dedicated workspace. It is no longer maintained here.
