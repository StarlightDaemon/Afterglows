// Data-driven gallery renderer for the Header Animation Concepts archive.
//
// This module replaces the previous 39 static import statements. It:
//   1. Reads gallery structure/data from ./manifest.js.
//   2. Dynamically imports each concept module so it self-registers its custom
//      element. Imports are fire-and-forget; custom elements auto-upgrade, so
//      the DOM can be rendered before the modules finish loading.
//   3. Renders sections and cards into #gallery-root using the exact class /
//      attribute contract the page CSS depends on.
//   4. Wires the version cyclers for tiles that carry version history.
//
// Dependency-free, no build step, browser ESM only.

import { CATEGORIES, CONCEPTS } from "./manifest.js";
import { installReducedMotion } from "./reduced-motion.js";

// Install before any concept module is imported: concept animations live in
// shadow roots, which the page's document-scope reduced-motion rule cannot
// reach. See reduced-motion.js.
installReducedMotion();

// --- Module loading -------------------------------------------------------
// Path rule: tag "concept-foo-bar" -> "./concepts/foo-bar-concept.js"
// (strip the "concept-" prefix, append "-concept.js").
function modulePathForTag(tag) {
  return `./concepts/${tag.replace(/^concept-/, "")}-concept.js`;
}

// Fire all imports. Elements auto-upgrade once each module defines its custom
// element, so we do not await these before rendering.
function importConceptModules() {
  for (const concept of CONCEPTS) {
    const path = modulePathForTag(concept.tag);
    import(path).catch((error) => {
      console.warn(`Failed to load concept module: ${path}`, error);
    });
  }
}

// --- Rendering helpers ----------------------------------------------------
// Escape text destined for HTML text/attribute contexts.
function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Reusable action row: "Copy" (embed snippet) + "Source" (view module file).
// Rendered as the LAST child of every .concept-card, OUTSIDE the .terminal-box
// so clicking these never triggers version cycling on versioned tiles.
function renderActions(tag, label) {
  const name = tag.replace(/^concept-/, "");
  return (
    `<div class="concept-actions">` +
      `<button type="button" class="concept-action concept-copy" data-tag="${esc(tag)}"` +
        ` aria-label="Copy ${esc(label)} embed code">Copy</button>` +
      `<a class="concept-action concept-source"` +
        ` href="gallery/concepts/${esc(name)}-concept.js"` +
        ` aria-label="View ${esc(label)} source"` +
        ` target="_blank" rel="noopener noreferrer">Source</a>` +
    `</div>`
  );
}

// When a date sort is active this holds "added" or "updated" and every card
// shows the corresponding date next to its status badge; null in curated
// (category-sectioned) mode.
let activeDateField = null;

function renderDateBadge(concept) {
  if (!activeDateField || !concept[activeDateField]) return "";
  return (
    `<span class="meta-badge meta-date">` +
      `${esc(activeDateField)} ${esc(concept[activeDateField].slice(0, 10))}` +
    `</span>`
  );
}

// Single-version (unversioned) card markup.
function renderPlainCard(concept) {
  const { tag, label, badge, badgeCls } = concept;
  return (
    `<div class="concept-card">` +
      `<div class="terminal-box"><${tag}></${tag}></div>` +
      `<div class="concept-label">${esc(label)}</div>` +
      `<div class="concept-meta">` +
        `<span class="meta-badge ${esc(badgeCls)}">${esc(badge)}</span>` +
        renderDateBadge(concept) +
      `</div>` +
      renderActions(tag, label) +
    `</div>`
  );
}

// Versioned card markup: a cyclable terminal box plus version dots.
function renderVersionedCard(concept) {
  const { tag, label, badge, badgeCls } = concept;
  const versions = concept.versions;
  const defaultVersion = concept.default;

  const frames = versions
    .map(({ v, badge: frameBadge, badgeCls: frameBadgeCls }) => {
      const active = v === defaultVersion ? " is-active" : "";
      return (
        `<div class="concept-frame${active}"` +
          ` data-version-label="${esc(`${label} ${v}`)}"` +
          ` data-badge-label="${esc(frameBadge)}"` +
          ` data-badge-class="${esc(frameBadgeCls)}">` +
          `<${tag} version="${esc(v)}"></${tag}>` +
        `</div>`
      );
    })
    .join("");

  const dots = versions
    .map(({ v }) => {
      const active = v === defaultVersion ? " is-active" : "";
      return (
        `<button class="version-dot${active}" type="button"` +
          ` aria-label="Show ${esc(`${label} ${v}`)}"></button>`
      );
    })
    .join("");

  return (
    `<div class="concept-card">` +
      `<div class="terminal-box is-versioned" tabindex="0" role="button"` +
        ` aria-label="Cycle ${esc(label)} versions">` +
        `<div class="concept-versioner">${frames}</div>` +
      `</div>` +
      `<div class="concept-label">${esc(label)}</div>` +
      `<div class="concept-meta">` +
        `<span class="meta-badge ${esc(badgeCls)}">${esc(badge)}</span>` +
        renderDateBadge(concept) +
      `</div>` +
      `<div class="version-dots" role="group" aria-label="${esc(label)} versions">${dots}</div>` +
      renderActions(tag, label) +
    `</div>`
  );
}

function renderCard(concept) {
  return concept.versioned
    ? renderVersionedCard(concept)
    : renderPlainCard(concept);
}

// (Re)build ONLY #gallery-root from a given concept array, one section per
// category. Categories with no visible concepts are skipped entirely so no
// empty section headers appear. An empty list yields a single message.
// Under a date sort the section structure would bury the timeline, so the
// whole list renders as one flat section instead.
function renderGallery(concepts) {
  const mount = document.getElementById("gallery-root");
  if (!mount) return;

  if (concepts.length === 0) {
    mount.innerHTML =
      `<p class="gallery-empty" role="status">No concepts match your filters.</p>`;
    return;
  }

  if (activeDateField) {
    const title = activeDateField === "added"
      ? "All concepts — newest first"
      : "All concepts — recently updated";
    mount.innerHTML =
      `<section class="gallery-section">` +
        `<h2 class="section-title">${esc(title)}</h2>` +
        `<div class="gallery-grid">${concepts.map(renderCard).join("")}</div>` +
      `</section>`;
    return;
  }

  const sections = CATEGORIES.map((category) => {
    const inCategory = concepts.filter(
      (concept) => concept.category === category.id
    );
    if (inCategory.length === 0) return "";

    const cards = inCategory.map(renderCard).join("");
    return (
      `<section class="gallery-section">` +
        `<h2 class="section-title">${esc(category.title)}</h2>` +
        `<div class="gallery-grid">${cards}</div>` +
      `</section>`
    );
  });

  mount.innerHTML = sections.join("");
}

// --- Version cyclers ------------------------------------------------------
// Ported verbatim from the trailing inline <script> in
// header-animation-concepts.html. Same click / keydown(Enter/Space) / dot
// behavior, same aria-label and badge updates.
function wireVersioners() {
  document.querySelectorAll('.terminal-box.is-versioned').forEach((box) => {
    const versioner = box.querySelector('.concept-versioner');
    const frames = Array.from(versioner.querySelectorAll('.concept-frame'));
    const dots = Array.from(box.parentElement.querySelectorAll('.version-dot'));
    const metaBadge = box.parentElement.querySelector('.concept-meta .meta-badge');
    const conceptLabel = box.parentElement.querySelector('.concept-label')?.textContent.trim() || 'concept';
    let currentIndex = frames.findIndex((frame) => frame.classList.contains('is-active'));

    if (currentIndex === -1) currentIndex = frames.length - 1;

    // Hidden frames keep animating, so without this a newly shown version
    // lands at an arbitrary mid-cycle phase — for concepts with long idle
    // or dark stretches (Anglerfish, Wind Chimes), every version then looks
    // identical when tabbing through. Rewinding the incoming frame's
    // animations makes each version play its full cycle from the start.
    // Shadow roots must be walked explicitly: getAnimations({subtree:true})
    // from the light DOM does not cross the shadow boundary here.
    const restartFrameAnimations = (frame) => {
      const host = frame.firstElementChild;
      if (!host || !host.shadowRoot) return;
      [host, ...host.shadowRoot.querySelectorAll('*')].forEach((node) => {
        node.getAnimations().forEach((animation) => {
          animation.currentTime = 0;
        });
      });
    };

    const render = (nextIndex) => {
      const changed = nextIndex !== currentIndex;
      currentIndex = nextIndex;
      frames.forEach((frame, index) => {
        frame.classList.toggle('is-active', index === currentIndex);
      });
      if (changed) restartFrameAnimations(frames[currentIndex]);
      dots.forEach((dot, index) => {
        dot.classList.toggle('is-active', index === currentIndex);
        dot.setAttribute('aria-pressed', index === currentIndex ? 'true' : 'false');
      });

      const activeFrame = frames[currentIndex];
      if (metaBadge) {
        metaBadge.textContent = activeFrame.dataset.badgeLabel || activeFrame.dataset.versionLabel || '';
        metaBadge.className = 'meta-badge';
        if (activeFrame.dataset.badgeClass) {
          activeFrame.dataset.badgeClass.split(/\s+/).filter(Boolean).forEach((className) => {
            metaBadge.classList.add(className);
          });
        }
      }

      if (activeFrame.dataset.versionLabel) {
        box.setAttribute('aria-label', `Cycle ${conceptLabel} versions. Currently showing ${activeFrame.dataset.versionLabel}`);
      }
    };

    const cycle = () => {
      render((currentIndex + 1) % frames.length);
    };

    box.addEventListener('click', cycle);
    box.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        cycle();
      }
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', (event) => {
        event.stopPropagation();
        render(index);
      });
    });

    render(currentIndex);
  });
}

// --- Filter toolbar -------------------------------------------------------
// The toolbar is created once and inserted BEFORE #gallery-root (outside it),
// so it survives re-renders and the search input keeps focus while typing.

// Map a concept's badgeCls to a status id used for filtering.
function statusOf(concept) {
  if (/\bmeta-status-color\b/.test(concept.badgeCls)) return "color";
  if (/\bmeta-status-refined\b/.test(concept.badgeCls)) return "refined";
  if (/\bmeta-status-new\b/.test(concept.badgeCls)) return "new";
  return "original";
}

const STATUSES = [
  { id: "original", title: "Original" },
  { id: "refined", title: "Refined" },
  { id: "new", title: "New" },
  { id: "color", title: "With Color" },
];

// A concept's origin.contributions may list more than one contributor (e.g.
// Gemini built it, Claude later patched or rebuilt it) — origin filtering is
// an "any contribution's agent matches" test, not an exact-match like status.
function agentsOf(concept) {
  return (concept.origin && Array.isArray(concept.origin.contributions))
    ? concept.origin.contributions.map((contribution) => contribution.agent)
    : [];
}

const ORIGINS = [
  { id: "claude", title: "Claude" },
  { id: "gemini", title: "Gemini" },
];

// Model/version aren't a fixed list like agents — new values show up as new
// contributions get recorded, so their chip sets are derived from whatever's
// actually present in CONCEPTS rather than hardcoded. A missing (null) value
// gets its own "Unspecified" bucket rather than being dropped.
function fieldOf(field) {
  return (concept) =>
    (concept.origin && Array.isArray(concept.origin.contributions))
      ? concept.origin.contributions.map((contribution) => contribution[field])
      : [];
}
const modelsOf = fieldOf("model");
const versionsOf = fieldOf("version");

const UNSPECIFIED = "unspecified";
function idOf(value) {
  return value === null ? UNSPECIFIED : value;
}
function titleCase(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function deriveChips(getValues, titleFor) {
  const seen = new Set();
  CONCEPTS.forEach((concept) => getValues(concept).forEach((value) => seen.add(value)));
  const known = [...seen].filter((value) => value !== null).sort();
  const chips = known.map((value) => ({ id: idOf(value), title: titleFor(value) }));
  if (seen.has(null)) chips.push({ id: UNSPECIFIED, title: "Unspecified" });
  return chips;
}

const MODELS = deriveChips(modelsOf, titleCase);
const VERSIONS = deriveChips(versionsOf, (value) => value);

// Live filter state. Defaults show everything.
const activeCategories = new Set(CATEGORIES.map((category) => category.id));
const activeStatuses = new Set(STATUSES.map((status) => status.id));
const activeOrigins = new Set(ORIGINS.map((origin) => origin.id));
const activeModels = new Set(MODELS.map((model) => model.id));
const activeVersions = new Set(VERSIONS.map((version) => version.id));
let searchTerm = "";
let sortMode = "curated"; // "curated" | "added" | "updated"

// Cached toolbar element references, populated by initToolbar().
let searchInput = null;
let sortSelect = null;
let catToggle = null;
let countReadout = null;

// True when a concept passes all three filter dimensions.
function isVisible(concept) {
  if (!activeCategories.has(concept.category)) return false;
  if (!activeStatuses.has(statusOf(concept))) return false;
  if (!agentsOf(concept).some((agent) => activeOrigins.has(agent))) return false;
  if (!modelsOf(concept).some((model) => activeModels.has(idOf(model)))) return false;
  if (!versionsOf(concept).some((version) => activeVersions.has(idOf(version)))) return false;
  if (searchTerm && !concept.label.toLowerCase().includes(searchTerm)) {
    return false;
  }
  return true;
}

// Recompute the visible list, apply the active sort, rebuild the gallery,
// re-wire versioners, and refresh the count readout.
function applyFilters() {
  let visible = CONCEPTS.filter(isVisible);
  activeDateField = sortMode === "curated" ? null : sortMode;
  if (activeDateField) {
    // ISO-UTC strings sort lexicographically; newest first.
    visible = visible.slice().sort((a, b) =>
      (b[activeDateField] || "").localeCompare(a[activeDateField] || "")
    );
  }
  renderGallery(visible);
  wireVersioners();
  if (countReadout) {
    countReadout.textContent = `Showing ${visible.length} of ${CONCEPTS.length}`;
  }
}

function makeChip(filter, value, title) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "filter-chip";
  chip.dataset.filter = filter;
  chip.dataset.value = value;
  chip.setAttribute("aria-pressed", "true");
  chip.textContent = title;
  return chip;
}

// Build the toolbar ONCE and insert it before #gallery-root.
function initToolbar() {
  const mount = document.getElementById("gallery-root");
  if (!mount) return;

  const toolbar = document.createElement("div");
  toolbar.className = "gallery-toolbar";
  toolbar.setAttribute("role", "search");
  toolbar.setAttribute("aria-label", "Filter and search concepts");

  // Search input.
  searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.className = "concept-search";
  searchInput.placeholder = "Search concepts by name…";
  searchInput.setAttribute("aria-label", "Search concepts by name");
  toolbar.appendChild(searchInput);

  // Sort mode. Curated keeps the category sections; the two date sorts
  // flatten the gallery into one newest-first grid (see renderGallery).
  sortSelect = document.createElement("select");
  sortSelect.className = "concept-sort";
  sortSelect.setAttribute("aria-label", "Sort concepts");
  [
    ["curated", "Sort: Curated"],
    ["added", "Sort: Newest first"],
    ["updated", "Sort: Recently updated"],
  ].forEach(([value, title]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = title;
    sortSelect.appendChild(option);
  });
  toolbar.appendChild(sortSelect);

  // Category filter: a compact toggle that discloses the chip drawer.
  // The toggle doubles as the current-selection summary.
  const categoryGroup = document.createElement("div");
  categoryGroup.className = "toolbar-group";
  categoryGroup.setAttribute("role", "group");
  categoryGroup.setAttribute("aria-label", "Filter by category");
  catToggle = document.createElement("button");
  catToggle.type = "button";
  catToggle.className = "filter-chip cat-toggle";
  catToggle.setAttribute("aria-expanded", "false");
  catToggle.setAttribute("aria-controls", "cat-drawer");
  categoryGroup.appendChild(catToggle);
  toolbar.appendChild(categoryGroup);

  const catDrawer = document.createElement("div");
  catDrawer.className = "cat-drawer";
  catDrawer.id = "cat-drawer";
  catDrawer.setAttribute("role", "group");
  catDrawer.setAttribute("aria-label", "Category filters");
  const categoryChips = CATEGORIES.map((category) =>
    makeChip("category", category.id, category.title)
  );
  categoryChips.forEach((chip) => catDrawer.appendChild(chip));

  // The toggle summary reflects the sole isolated category, or "All".
  const updateCatSummary = () => {
    const sole =
      activeCategories.size === 1
        ? CATEGORIES.find((category) => activeCategories.has(category.id))
        : null;
    catToggle.textContent = `Categories: ${sole ? sole.title : "All"} ▾`;
  };
  updateCatSummary();

  catToggle.addEventListener("click", () => {
    const open = catDrawer.classList.toggle("is-open");
    catToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Status filter group.
  const statusGroup = document.createElement("div");
  statusGroup.className = "toolbar-group";
  statusGroup.setAttribute("role", "group");
  statusGroup.setAttribute("aria-label", "Filter by status");
  const statusLabel = document.createElement("span");
  statusLabel.className = "toolbar-group-label";
  statusLabel.textContent = "Status";
  statusGroup.appendChild(statusLabel);
  const statusChips = STATUSES.map((status) =>
    makeChip("status", status.id, status.title)
  );
  statusChips.forEach((chip) => statusGroup.appendChild(chip));
  toolbar.appendChild(statusGroup);

  // Origin filter group: which agent(s) built or revised the concept.
  const originGroup = document.createElement("div");
  originGroup.className = "toolbar-group";
  originGroup.setAttribute("role", "group");
  originGroup.setAttribute("aria-label", "Filter by origin");
  const originLabel = document.createElement("span");
  originLabel.className = "toolbar-group-label";
  originLabel.textContent = "Origin";
  originGroup.appendChild(originLabel);
  const originChips = ORIGINS.map((origin) =>
    makeChip("origin", origin.id, origin.title)
  );
  originChips.forEach((chip) => originGroup.appendChild(chip));
  toolbar.appendChild(originGroup);

  // Model filter group: which model tier/family made the contribution.
  const modelGroup = document.createElement("div");
  modelGroup.className = "toolbar-group";
  modelGroup.setAttribute("role", "group");
  modelGroup.setAttribute("aria-label", "Filter by model");
  const modelLabel = document.createElement("span");
  modelLabel.className = "toolbar-group-label";
  modelLabel.textContent = "Model";
  modelGroup.appendChild(modelLabel);
  const modelChips = MODELS.map((model) => makeChip("model", model.id, model.title));
  modelChips.forEach((chip) => modelGroup.appendChild(chip));
  toolbar.appendChild(modelGroup);

  // Version filter group: which specific model version made the contribution.
  const versionGroup = document.createElement("div");
  versionGroup.className = "toolbar-group";
  versionGroup.setAttribute("role", "group");
  versionGroup.setAttribute("aria-label", "Filter by model version");
  const versionLabel = document.createElement("span");
  versionLabel.className = "toolbar-group-label";
  versionLabel.textContent = "Version";
  versionGroup.appendChild(versionLabel);
  const versionChips = VERSIONS.map((version) => makeChip("version", version.id, version.title));
  versionChips.forEach((chip) => versionGroup.appendChild(chip));
  toolbar.appendChild(versionGroup);

  // Reset button.
  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "filter-reset";
  reset.textContent = "Reset";
  toolbar.appendChild(reset);

  // Count readout.
  countReadout = document.createElement("span");
  countReadout.className = "filter-count";
  countReadout.setAttribute("role", "status");
  toolbar.appendChild(countReadout);

  // The chip drawer renders as a full-width row under the controls.
  toolbar.appendChild(catDrawer);

  mount.parentNode.insertBefore(toolbar, mount);

  // --- Wiring ---
  // Debounce the search input a touch so typing stays smooth.
  let searchTimer = null;
  searchInput.addEventListener("input", () => {
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      searchTerm = searchInput.value.trim().toLowerCase();
      applyFilters();
    }, 120);
  });

  sortSelect.addEventListener("change", () => {
    sortMode = sortSelect.value;
    applyFilters();
  });

  const allChips = categoryChips.concat(statusChips, originChips, modelChips, versionChips);

  // Category chips ISOLATE rather than toggle: clicking one narrows
  // activeCategories down to just that category. Clicking the same chip
  // again while it is the sole active category restores the all-on default.
  // Clicking a different category chip switches the isolation to it.
  categoryChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const value = chip.dataset.value;
      const isSoleActive =
        activeCategories.size === 1 && activeCategories.has(value);

      activeCategories.clear();
      if (isSoleActive) {
        CATEGORIES.forEach((category) => activeCategories.add(category.id));
      } else {
        activeCategories.add(value);
      }

      categoryChips.forEach((categoryChip) => {
        categoryChip.setAttribute(
          "aria-pressed",
          activeCategories.has(categoryChip.dataset.value) ? "true" : "false"
        );
      });
      updateCatSummary();
      applyFilters();
    });
  });

  // Status chips keep the original toggle (exclude) semantics.
  statusChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      const next = !pressed;
      chip.setAttribute("aria-pressed", next ? "true" : "false");
      if (next) activeStatuses.add(chip.dataset.value);
      else activeStatuses.delete(chip.dataset.value);
      applyFilters();
    });
  });

  // Origin chips: same independent toggle (exclude) semantics as status.
  originChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      const next = !pressed;
      chip.setAttribute("aria-pressed", next ? "true" : "false");
      if (next) activeOrigins.add(chip.dataset.value);
      else activeOrigins.delete(chip.dataset.value);
      applyFilters();
    });
  });

  // Model / version chips: same independent toggle (exclude) semantics.
  modelChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      const next = !pressed;
      chip.setAttribute("aria-pressed", next ? "true" : "false");
      if (next) activeModels.add(chip.dataset.value);
      else activeModels.delete(chip.dataset.value);
      applyFilters();
    });
  });

  versionChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      const next = !pressed;
      chip.setAttribute("aria-pressed", next ? "true" : "false");
      if (next) activeVersions.add(chip.dataset.value);
      else activeVersions.delete(chip.dataset.value);
      applyFilters();
    });
  });

  reset.addEventListener("click", () => {
    activeCategories.clear();
    CATEGORIES.forEach((category) => activeCategories.add(category.id));
    activeStatuses.clear();
    STATUSES.forEach((status) => activeStatuses.add(status.id));
    activeOrigins.clear();
    ORIGINS.forEach((origin) => activeOrigins.add(origin.id));
    activeModels.clear();
    MODELS.forEach((model) => activeModels.add(model.id));
    activeVersions.clear();
    VERSIONS.forEach((version) => activeVersions.add(version.id));
    searchTerm = "";
    searchInput.value = "";
    sortMode = "curated";
    sortSelect.value = "curated";
    allChips.forEach((chip) => chip.setAttribute("aria-pressed", "true"));
    updateCatSummary();
    applyFilters();
  });
}

// --- Copy usage ("Copy" action) ------------------------------------------
// Absolute origin for the pasted embed snippet, so copied code works on any
// site (the Source link stays relative for local preview — see renderActions).
const EMBED_ORIGIN =
  "https://afterglows.starlightdaemon.dev/concepts/gallery/concepts";

// Single shared visually-hidden live region for all copy announcements.
// Created once by ensureLiveRegion(); reused for every tile.
let liveRegion = null;
function ensureLiveRegion() {
  if (liveRegion) return liveRegion;
  liveRegion = document.createElement("div");
  liveRegion.className = "sr-status";
  liveRegion.setAttribute("role", "status");
  liveRegion.setAttribute("aria-live", "polite");
  (document.querySelector("main") || document.body).appendChild(liveRegion);
  return liveRegion;
}

function announce(message, assertive = false) {
  const region = ensureLiveRegion();
  region.setAttribute("aria-live", assertive ? "assertive" : "polite");
  region.textContent = message;
}

// Robust clipboard write: async Clipboard API in a secure context (localhost
// counts), otherwise a temporary off-screen <textarea> + execCommand fallback.
// Returns a Promise<boolean> of whether the copy succeeded.
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fall through to the legacy path below.
    }
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    return ok;
  } catch (error) {
    return false;
  }
}

// Build the two-line embed snippet for a card. The version (if any) is read
// from the DOM at click time: the active frame's inner concept-* element.
function buildSnippet(card, tag) {
  const name = tag.replace(/^concept-/, "");
  const scriptLine =
    `<script type="module" src="${EMBED_ORIGIN}/${name}-concept.js"></` +
    `script>`;

  let version = "";
  const activeFrame = card.querySelector(".concept-frame.is-active");
  if (activeFrame) {
    const el = activeFrame.querySelector(tag);
    version = (el && el.getAttribute("version")) || "";
  }

  const tagLine = version
    ? `<${tag} version="${version}"></${tag}>`
    : `<${tag}></${tag}>`;

  return `${scriptLine}\n${tagLine}`;
}

// Delegated click handler on the persistent #gallery-root (attached once).
async function handleGalleryClick(event) {
  const button = event.target.closest(".concept-copy");
  if (!button) return;

  const card = button.closest(".concept-card");
  if (!card) return;

  const tag = button.dataset.tag;
  const label = card.querySelector(".concept-label")?.textContent.trim() || tag;
  const snippet = buildSnippet(card, tag);
  const ok = await copyText(snippet);

  const original = button.dataset.copyLabel || button.textContent;
  button.dataset.copyLabel = original;

  if (ok) {
    button.textContent = "Copied ✓";
    button.classList.add("is-copied");
    announce(`Copied ${label} embed code.`);
  } else {
    button.textContent = "Failed";
    announce("Copy failed", true);
  }

  // Revert after a beat; guard against the button having been re-rendered
  // (renderGallery replaces innerHTML on filter changes).
  window.setTimeout(() => {
    if (!button.isConnected) return;
    button.textContent = button.dataset.copyLabel || "Copy";
    button.classList.remove("is-copied");
  }, 1500);
}

// Attach the delegated copy listener ONCE to the persistent #gallery-root.
function wireCopyDelegation() {
  const mount = document.getElementById("gallery-root");
  if (!mount || mount.dataset.copyWired === "true") return;
  mount.dataset.copyWired = "true";
  mount.addEventListener("click", handleGalleryClick);
}

// --- Bootstrap ------------------------------------------------------------
// Kick off module loading immediately (fire-and-forget), then build the
// toolbar once, render the full gallery, and wire versioners once the DOM is
// ready. #gallery-root may not exist yet at parse time.
function init() {
  initToolbar();
  ensureLiveRegion();
  wireCopyDelegation();
  applyFilters();
}

importConceptModules();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
