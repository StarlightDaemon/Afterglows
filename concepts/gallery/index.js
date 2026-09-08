// Canonical gallery: bounded viewport imports and mounts, accessible metadata,
// taxonomy navigation, provenance filters, versions, and reusable source actions.
import { CATEGORIES, CONCEPTS, SECTIONS } from "./manifest.js";
import { installReducedMotion } from "./reduced-motion.js";
import { ModuleQueue } from "./module-queue.js";
import { createModuleLoader } from "./module-loader.js";
import { matchesProvenance } from "./provenance.js";

installReducedMotion(["CONCEPT-", "PHYSICS-"]);
const moduleQueue = new ModuleQueue(createModuleLoader((path) => import(path), import.meta.url));

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
function renderActions(concept) {
  const { tag, label, module } = concept;
  const sourceHref = `gallery/${module.replace(/^\.\//, "")}`;
  return (
    `<div class="concept-actions">` +
      `<button type="button" class="concept-action concept-copy" data-tag="${esc(tag)}"` +
        ` aria-label="Copy ${esc(label)} embed code">Copy</button>` +
      `<a class="concept-action concept-source"` +
        ` href="${esc(sourceHref)}"` +
        ` aria-label="View ${esc(label)} source"` +
        ` target="_blank" rel="noopener noreferrer">Source</a>` +
    `</div>`
  );
}

// Definitions and motion theses have one fact home in the manifest.
// Native details gives keyboard and touch users the same access as pointer users.
function renderDescription(concept) {
  if (!concept.definition) return "";
  return `<details class="concept-description"><summary>About <span class="sr-status">${esc(concept.label)}</span></summary>` +
    `<p>${esc(concept.definition)}</p><p>${esc(concept.motionThesis)}</p></details>`;
}

const searchText = new Map(CONCEPTS.map((concept) => [concept.tag, [
  concept.label, concept.definition, concept.motionThesis,
  ...(concept.aliases || []), ...(concept.facets || []),
  SECTIONS.find((section) => section.id === concept.section)?.title,
  CATEGORIES.find((category) => category.id === concept.category)?.title,
].filter(Boolean).join(" ").toLowerCase()]));

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
    `<div class="concept-card" data-concept="${esc(tag)}">` +
      `<div class="terminal-box"><template class="concept-payload"><${tag}></${tag}></template></div>` +
      `<div class="concept-label">${esc(label)}</div>` +
      `<div class="concept-meta">` +
        `<span class="meta-badge ${esc(badgeCls)}">${esc(badge)}</span>` +
        renderDateBadge(concept) +
      `</div>` +
      renderActions(concept) + renderDescription(concept) +
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
          `<template class="concept-payload"><${tag} version="${esc(v)}"></${tag}></template>` +
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
    `<div class="concept-card" data-concept="${esc(tag)}">` +
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
      renderActions(concept) + renderDescription(concept) +
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
    const title = sortMode === "newest"
      ? "Newest additions"
      : activeDateField === "added"
        ? "All concepts — newest first"
        : "All concepts — recently updated";
    mount.innerHTML =
      `<section class="gallery-section">` +
        `<h2 class="section-title">${esc(title)}</h2>` +
        `<div class="gallery-grid">${concepts.map(renderCard).join("")}</div>` +
      `</section>`;
    return;
  }

  const sections = SECTIONS.map((section) => {
    const categories = CATEGORIES
      .filter((category) => category.section === section.id)
      .map((category) => {
        const inCategory = concepts.filter(
          (concept) => concept.category === category.id
        );
        if (inCategory.length === 0) return "";
        return (
          `<section class="gallery-section" data-category="${esc(category.id)}">` +
            `<h3 class="section-title">${esc(category.title)}</h3>` +
            `<div class="gallery-grid">${inCategory.map(renderCard).join("")}</div>` +
          `</section>`
        );
      })
      .join("");

    if (!categories) return "";
    return (
      `<section class="gallery-supersection" data-section="${esc(section.id)}">` +
        `<h2 class="supersection-title">${esc(section.title)}</h2>` +
        categories +
      `</section>`
    );
  });

  mount.innerHTML = sections.join("");
}

// The full catalog contains lightweight card shells. Only nearby active
// versions are mounted; disconnecting hosts also stops component JS lifecycles.
// Templates never upgrade, even after their module is cached by the browser.
let lazyObserver = null;
let intersectionState = new Map();

function unmountBox(box) {
  box.querySelectorAll("[data-mounted-concept]").forEach((host) => host.remove());
}

function mountBox(box) {
  if (!box.isConnected || !intersectionState.get(box) || document.hidden) return;
  box.querySelectorAll("template.concept-payload").forEach((template) => {
    const frame = template.closest(".concept-frame");
    if (frame && !frame.classList.contains("is-active")) return;
    if (template.parentElement.querySelector("[data-mounted-concept]")) return;
    const host = template.content.firstElementChild.cloneNode(true);
    host.dataset.mountedConcept = "true";
    template.after(host);
  });
}

function requestBox(box) {
  const concept = CONCEPT_BY_TAG.get(box.closest(".concept-card").dataset.concept);
  const wanted = () => box.isConnected && intersectionState.get(box) && !document.hidden;
  box.setAttribute("aria-busy", "true");
  moduleQueue.request(concept.module, wanted).then((loaded) => {
    if (loaded && wanted()) {
      box.querySelector(".concept-load-error")?.remove();
      mountBox(box);
    }
  }).catch((error) => {
    if (!wanted()) return;
    console.error(`Failed to load concept module: ${concept.module}`, error);
    if (!box.querySelector(".concept-load-error")) {
      const message = document.createElement("span");
      message.className = "concept-load-error";
      message.setAttribute("role", "status");
      message.textContent = "Preview unavailable. Revisit to retry.";
      box.appendChild(message);
    }
  }).finally(() => box.removeAttribute("aria-busy"));
}

function installLazyObserver() {
  lazyObserver?.disconnect();
  intersectionState = new Map();
  lazyObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      intersectionState.set(entry.target, entry.isIntersecting);
      if (entry.isIntersecting) requestBox(entry.target);
      else unmountBox(entry.target);
    }
  }, { rootMargin: "200px 0px", threshold: 0 });
  document.querySelectorAll("#gallery-root .terminal-box").forEach((box) => lazyObserver.observe(box));
}

// A hidden page has no live tile instances, including timer-driven legacy ones.
document.addEventListener("visibilitychange", () => {
  intersectionState.forEach((visible, box) => {
    if (document.hidden) unmountBox(box);
    else if (visible) requestBox(box);
  });
});

// --- Version cyclers ------------------------------------------------------
// Ported verbatim from the trailing inline <script> in
// concepts/index.html. Same click / keydown(Enter/Space) / dot
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

    const render = (nextIndex) => {
      const changed = nextIndex !== currentIndex;
      currentIndex = nextIndex;
      frames.forEach((frame, index) => {
        frame.classList.toggle('is-active', index === currentIndex);
      });
      if (changed) { unmountBox(box); mountBox(box); }
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

// --- Wave 2: Newest additions --------------------------------------------
// Cap the landing view so a large same-day import cannot unexpectedly render
// hundreds of live custom elements before the visitor chooses a section.
const NEWEST_LIMIT = 36;
const NEWEST_CONCEPTS = CONCEPTS
  .slice()
  .sort((a, b) => (b.added || "").localeCompare(a.added || ""))
  .slice(0, NEWEST_LIMIT);
const NEWEST_TAGS = new Set(NEWEST_CONCEPTS.map((concept) => concept.tag));
const NEWEST_DATE = NEWEST_CONCEPTS[0]?.added?.slice(0, 10) || "";

function isNewest(concept) {
  return NEWEST_TAGS.has(concept.tag);
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

const ORIGINS = deriveChips(agentsOf, titleCase);

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

// Live filter state. Preserve the lightweight newest-additions landing view;
// section/category deep links open directly in curated taxonomy mode.
const activeSections = new Set(SECTIONS.map((section) => section.id));
const activeCategories = new Set(CATEGORIES.map((category) => category.id));
const activeStatuses = new Set(STATUSES.map((status) => status.id));
const activeOrigins = new Set(ORIGINS.map((origin) => origin.id));
const activeModels = new Set(MODELS.map((model) => model.id));
const activeVersions = new Set(VERSIONS.map((version) => version.id));
let searchTerm = "";
let sortMode = "newest"; // "newest" | "curated" | "added" | "updated"

// Cached toolbar element references, populated by initToolbar().
let searchInput = null;
let sortSelect = null;
let catToggle = null;
let countReadout = null;

// True when a concept passes all three filter dimensions.
function isVisible(concept) {
  if (!activeSections.has(concept.section)) return false;
  if (!activeCategories.has(concept.category)) return false;
  if (!activeStatuses.has(statusOf(concept))) return false;
  if (!matchesProvenance(concept.origin?.contributions || [], {
    origins: activeOrigins, models: activeModels, versions: activeVersions,
  })) return false;
  if (searchTerm && !searchText.get(concept.tag).includes(searchTerm)) {
    return false;
  }
  return true;
}

// Recompute the visible list, apply the active sort, rebuild the gallery,
// re-wire versioners, install the lazy observer, and refresh the count readout.
function applyFilters() {
  let visible = CONCEPTS.filter(isVisible);

  if (sortMode === "newest") {
    // Newest additions: only the latest batch, sorted by added desc.
    // Concepts without a matching added date are excluded gracefully.
    visible = visible.filter(isNewest)
      .sort((a, b) => b.added.localeCompare(a.added));
    activeDateField = "added";
  } else if (sortMode === "curated") {
    activeDateField = null;
  } else {
    // "added" or "updated" date sort
    activeDateField = sortMode;
    visible = visible.slice().sort((a, b) =>
      (b[activeDateField] || "").localeCompare(a[activeDateField] || "")
    );
  }

  renderGallery(visible);
  wireVersioners();
  installLazyObserver();
  updateBannerVisibility();

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

// --- Newest-additions banner (Wave 2) ------------------------------------
// A dismissable banner shown at the top of the gallery when in "newest" mode.
// Clicking "Browse all" switches to curated mode (full gallery).
let newestBanner = null;

const NEWEST_COUNT = NEWEST_TAGS.size;

function ensureNewestBanner() {
  if (newestBanner) return newestBanner;
  newestBanner = document.createElement("div");
  newestBanner.className = "newest-banner";
  newestBanner.setAttribute("role", "status");
  newestBanner.innerHTML =
    `<span class="newest-banner-text">` +
      `<span class="newest-banner-icon">&#10022;</span> ` +
      `<strong>${NEWEST_COUNT} newest additions</strong> &middot; added ${NEWEST_DATE}` +
    `</span>` +
    `<button type="button" class="newest-browse-all" id="newest-browse-all">` +
      `Browse all concepts &rarr;` +
    `</button>`;

  newestBanner.querySelector(".newest-browse-all").addEventListener("click", () => {
    sortMode = "curated";
    if (sortSelect) sortSelect.value = "curated";
    applyFilters();
  });

  return newestBanner;
}

function updateBannerVisibility() {
  if (!newestBanner) return;
  newestBanner.style.display = sortMode === "newest" ? "" : "none";
}

function applyLocationFilters() {
  const params = new URLSearchParams(window.location.search);
  const sectionId = params.get("section");
  const categoryId = params.get("category");
  const section = SECTIONS.find((item) => item.id === sectionId);
  const category = CATEGORIES.find((item) => item.id === categoryId);

  if (section) {
    activeSections.clear();
    activeSections.add(section.id);
    sortMode = "curated";
  }
  if (category) {
    activeCategories.clear();
    activeCategories.add(category.id);
    activeSections.clear();
    activeSections.add(category.section);
    sortMode = "curated";
  }
}

function updateLocationFilters() {
  if (!window.history?.replaceState) return;
  const params = new URLSearchParams(window.location.search);
  const sectionId = activeSections.size === 1 ? [...activeSections][0] : null;
  const categoryId = activeCategories.size === 1 ? [...activeCategories][0] : null;
  if (sectionId) params.set("section", sectionId);
  else params.delete("section");
  if (categoryId) params.set("category", categoryId);
  else params.delete("category");
  const query = params.toString();
  try {
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  } catch (error) {
    // file:// previews may reject history mutation; filtering still works.
  }
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
  searchInput.placeholder = "Search names, definitions, topics…";
  searchInput.setAttribute("aria-label", "Search names, definitions, and topics");
  toolbar.appendChild(searchInput);

  // Curated is the default for the unified taxonomy; date sorts flatten it.
  sortSelect = document.createElement("select");
  sortSelect.className = "concept-sort";
  sortSelect.setAttribute("aria-label", "Sort concepts");
  [
    ["newest", "Sort: Newest additions"],
    ["curated", "Sort: Curated"],
    ["added", "Sort: Newest first"],
    ["updated", "Sort: Recently updated"],
  ].forEach(([value, title]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = title;
    sortSelect.appendChild(option);
  });
  sortSelect.value = sortMode;
  toolbar.appendChild(sortSelect);

  const sectionGroup = document.createElement("div");
  sectionGroup.className = "toolbar-group section-filter-group";
  sectionGroup.setAttribute("role", "group");
  sectionGroup.setAttribute("aria-label", "Filter by top-level section");
  const sectionLabel = document.createElement("span");
  sectionLabel.className = "toolbar-group-label";
  sectionLabel.textContent = "Sections";
  sectionGroup.appendChild(sectionLabel);
  const sectionChips = SECTIONS.map((section) =>
    makeChip("section", section.id, section.title)
  );
  sectionChips.forEach((chip) => {
    chip.setAttribute("aria-pressed", activeSections.has(chip.dataset.value) ? "true" : "false");
    sectionGroup.appendChild(chip);
  });
  toolbar.appendChild(sectionGroup);

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
  categoryChips.forEach((chip) => {
    chip.setAttribute("aria-pressed", activeCategories.has(chip.dataset.value) ? "true" : "false");
    catDrawer.appendChild(chip);
  });

  const syncCategoryAvailability = () => {
    const narrowed = activeSections.size === 1;
    categoryChips.forEach((chip) => {
      const category = CATEGORIES.find((item) => item.id === chip.dataset.value);
      chip.hidden = narrowed && !activeSections.has(category.section);
    });
  };
  syncCategoryAvailability();

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
      if (searchTerm && sortMode === "newest") {
        sortMode = "curated";
        sortSelect.value = sortMode;
      }
      applyFilters();
    }, 120);
  });

  sortSelect.addEventListener("change", () => {
    sortMode = sortSelect.value;
    applyFilters();
  });

  const allChips = sectionChips.concat(categoryChips, statusChips, originChips, modelChips, versionChips);

  sectionChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const value = chip.dataset.value;
      const isSoleActive = activeSections.size === 1 && activeSections.has(value);
      activeSections.clear();
      if (isSoleActive) SECTIONS.forEach((section) => activeSections.add(section.id));
      else activeSections.add(value);

      activeCategories.clear();
      CATEGORIES.forEach((category) => activeCategories.add(category.id));
      sortMode = "curated";
      sortSelect.value = "curated";
      sectionChips.forEach((sectionChip) => {
        sectionChip.setAttribute("aria-pressed", activeSections.has(sectionChip.dataset.value) ? "true" : "false");
      });
      categoryChips.forEach((categoryChip) => categoryChip.setAttribute("aria-pressed", "true"));
      syncCategoryAvailability();
      updateCatSummary();
      updateLocationFilters();
      applyFilters();
    });
  });

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
        const category = CATEGORIES.find((item) => item.id === value);
        activeSections.clear();
        activeSections.add(category.section);
      }
      sortMode = "curated";
      sortSelect.value = "curated";

      categoryChips.forEach((categoryChip) => {
        categoryChip.setAttribute(
          "aria-pressed",
          activeCategories.has(categoryChip.dataset.value) ? "true" : "false"
        );
      });
      sectionChips.forEach((sectionChip) => {
        sectionChip.setAttribute("aria-pressed", activeSections.has(sectionChip.dataset.value) ? "true" : "false");
      });
      syncCategoryAvailability();
      updateCatSummary();
      updateLocationFilters();
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
    activeSections.clear();
    SECTIONS.forEach((section) => activeSections.add(section.id));
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
    syncCategoryAvailability();
    updateCatSummary();
    updateLocationFilters();
    applyFilters();
  });
}

// --- Copy usage ("Copy" action) ------------------------------------------
// Absolute origin for the pasted embed snippet, so copied code works on any
// site (the Source link stays relative for local preview — see renderActions).
const EMBED_ORIGIN =
  "https://afterglows.starlightdaemon.dev/concepts/gallery/";
const CONCEPT_BY_TAG = new Map(CONCEPTS.map((concept) => [concept.tag, concept]));

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
  const previousFocus = document.activeElement;
  let textarea;
  try {
    textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    return document.execCommand("copy");
  } catch (error) {
    return false;
  } finally {
    textarea?.remove();
    if (previousFocus?.isConnected) previousFocus.focus?.({ preventScroll: true });
  }
}

// Build the two-line embed snippet for a card. The version (if any) is read
// from the DOM at click time: the active frame's inner concept-* element.
function buildSnippet(card, concept) {
  const { tag, module } = concept;
  const scriptLine =
    `<script type="module" src="${EMBED_ORIGIN}${module.replace(/^\.\//, "")}"></` +
    `script>`;

  let version = "";
  const activeFrame = card.querySelector(".concept-frame.is-active");
  if (activeFrame) {
    const el = activeFrame.querySelector(tag) || activeFrame.querySelector("template").content.firstElementChild;
    version = el.getAttribute("version") || "";
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
  const concept = CONCEPT_BY_TAG.get(tag);
  if (!concept) return;
  const label = card.querySelector(".concept-label")?.textContent.trim() || tag;
  const snippet = buildSnippet(card, concept);
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
// Build the toolbar once, render the requested taxonomy view, load its modules,
// wire versioners,
// and install the lazy observer once the DOM is ready.
// #gallery-root may not exist yet at parse time.
function init() {
  applyLocationFilters();
  initToolbar();
  ensureNewestBanner();
  ensureLiveRegion();
  wireCopyDelegation();
  // Insert the banner before the toolbar (toolbar is now in the DOM).
  const mount = document.getElementById("gallery-root");
  const toolbar = document.querySelector(".gallery-toolbar");
  if (newestBanner && mount && mount.parentNode) {
    mount.parentNode.insertBefore(newestBanner, toolbar || mount);
  }
  applyFilters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
