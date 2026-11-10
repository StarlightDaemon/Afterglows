// Canonical gallery: bounded viewport imports and mounts, accessible metadata,
// taxonomy navigation, provenance filters, versions, and reusable source actions.
import { CATEGORIES, ACTIVE_CONCEPTS as CONCEPTS, SECTIONS } from "./manifest.js";
import { installReducedMotion } from "./reduced-motion.js";
import { ModuleQueue } from "./module-queue.js";
import { createModuleLoader } from "./module-loader.js";
import { queryConcepts, RECENT_LIMIT, statusOf } from "./gallery-query.js";

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
    const title = currentFlatTitle();
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

// --- Gallery navigation ---------------------------------------------------
// The public surface stays intentionally small: Search, Recent/Browse, and
// one Filters button. Topic, ordering, and provenance live in the filter sheet.
const STATUS_TITLES = new Map([
  ["original", "Original"], ["refined", "Refined"],
  ["new", "New"], ["color", "With Color"],
]);
const UNSPECIFIED = "unspecified";
const PAGE_SIZE = 60;

function titleCase(slug) {
  return slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function contributionValues(field) {
  return [...new Set(CONCEPTS.flatMap((concept) =>
    (concept.origin?.contributions || []).map((contribution) => contribution[field] ?? UNSPECIFIED)
  ))].sort((a, b) => String(a).localeCompare(String(b)));
}

function countOptions(valuesForConcept) {
  const counts = new Map();
  CONCEPTS.forEach((concept) => {
    new Set(valuesForConcept(concept)).forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  });
  return counts;
}

const AVAILABLE = {
  origins: contributionValues("agent"),
  models: contributionValues("model"),
  versions: contributionValues("version"),
};
const STATUS_COUNTS = countOptions((concept) => [statusOf(concept)]);
const ORIGIN_COUNTS = countOptions((concept) =>
  (concept.origin?.contributions || []).map((contribution) => contribution.agent)
);
const MODEL_COUNTS = countOptions((concept) =>
  (concept.origin?.contributions || []).map((contribution) => contribution.model ?? UNSPECIFIED)
);
const VERSION_COUNTS = countOptions((concept) =>
  (concept.origin?.contributions || []).map((contribution) => contribution.version ?? UNSPECIFIED)
);

const filterState = {
  view: "recent",
  order: "added",
  query: "",
  section: "",
  category: "",
  statuses: new Set(),
  origins: new Set(),
  models: new Set(),
  versions: new Set(),
};

let searchInput = null;
let countReadout = null;
let filterButton = null;
let filterBadge = null;
let recentTab = null;
let browseTab = null;
let filterLayer = null;
let filterPanel = null;
let sectionSelect = null;
let categorySelect = null;
let orderSelect = null;
let activeFilterRow = null;
let technicalSummary = null;
let renderLimit = PAGE_SIZE;
let lastFiltered = [];
let focusBeforePanel = null;

function parseList(params, name, allowed) {
  const values = (params.get(name) || "").split(",").filter(Boolean);
  return new Set(values.filter((value) => allowed.includes(value)));
}

function applyLocationFilters() {
  const params = new URLSearchParams(window.location.search);
  const section = SECTIONS.find((item) => item.id === params.get("section"));
  const category = CATEGORIES.find((item) => item.id === params.get("category"));
  const requestedBrowse = params.get("view") === "browse";
  const hasBrowseState = requestedBrowse || section || category || params.has("q") || params.has("sort") ||
    params.has("status") || params.has("origin") || params.has("model") || params.has("version");

  filterState.view = hasBrowseState ? "browse" : "recent";
  filterState.query = (params.get("q") || "").trim().slice(0, 120);
  filterState.section = category?.section || section?.id || "";
  filterState.category = category?.id || "";
  filterState.order = ["curated", "added", "updated"].includes(params.get("sort"))
    ? params.get("sort")
    : hasBrowseState ? "curated" : "added";
  filterState.statuses = parseList(params, "status", [...STATUS_COUNTS.keys()]);
  filterState.origins = parseList(params, "origin", AVAILABLE.origins);
  filterState.models = parseList(params, "model", AVAILABLE.models);
  filterState.versions = parseList(params, "version", AVAILABLE.versions);
}

function setOrDelete(params, name, value) {
  if (value) params.set(name, value);
  else params.delete(name);
}

function updateLocationFilters() {
  if (!window.history?.replaceState) return;
  const params = new URLSearchParams();
  if (filterState.view === "browse") params.set("view", "browse");
  setOrDelete(params, "q", filterState.query);
  setOrDelete(params, "section", filterState.section);
  setOrDelete(params, "category", filterState.category);
  if (filterState.view === "browse" && filterState.order !== "curated") params.set("sort", filterState.order);
  const parameterFor = { statuses: "status", origins: "origin", models: "model", versions: "version" };
  Object.entries(parameterFor).forEach(([key, parameter]) => {
    if (filterState[key].size) params.set(parameter, [...filterState[key]].sort().join(","));
  });
  const query = params.toString();
  try {
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  } catch (error) {
    // file:// previews may reject history mutation; filtering still works.
  }
}

function currentFlatTitle() {
  if (filterState.view === "recent") return `Latest ${RECENT_LIMIT} additions`;
  if (filterState.query) return "Search results";
  const category = CATEGORIES.find((item) => item.id === filterState.category);
  const section = SECTIONS.find((item) => item.id === filterState.section);
  const scope = category?.title || section?.title || "All concepts";
  return filterState.order === "updated" ? `${scope} — recently updated` : `${scope} — newest first`;
}

function filterCount() {
  return Number(Boolean(filterState.query)) + Number(Boolean(filterState.category || filterState.section)) +
    filterState.statuses.size + filterState.origins.size + filterState.models.size + filterState.versions.size;
}

function enterBrowseForNarrowing() {
  if (filterState.view === "recent") {
    filterState.view = "browse";
    filterState.order = "added";
  }
}

function clearFilters({ keepView = true } = {}) {
  filterState.query = "";
  filterState.section = "";
  filterState.category = "";
  filterState.statuses.clear();
  filterState.origins.clear();
  filterState.models.clear();
  filterState.versions.clear();
  if (!keepView) {
    filterState.view = "recent";
    filterState.order = "added";
  }
}

function optionLabel(value, title, counts) {
  return `${title} (${counts.get(value) || 0})`;
}

function addOption(select, value, title, parent = select) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = title;
  parent.appendChild(option);
}

function populateCategorySelect() {
  if (!categorySelect) return;
  categorySelect.replaceChildren();
  addOption(categorySelect, "", "All categories");
  const sections = filterState.section
    ? SECTIONS.filter((section) => section.id === filterState.section)
    : SECTIONS;
  sections.forEach((section) => {
    const categories = CATEGORIES.filter((category) => category.section === section.id);
    if (!categories.length) return;
    const group = document.createElement("optgroup");
    group.label = section.title;
    categories.forEach((category) => addOption(categorySelect, category.id, `${category.title} (${category.expectedCount})`, group));
    categorySelect.appendChild(group);
  });
  categorySelect.value = filterState.category;
}

function renderCheckGroup(key, title, options, counts, titleFor) {
  const fieldset = document.createElement("fieldset");
  fieldset.className = "filter-check-group";
  const legend = document.createElement("legend");
  legend.textContent = title;
  fieldset.appendChild(legend);
  options.filter((value) => counts.get(value) > 0).forEach((value) => {
    const label = document.createElement("label");
    label.className = "filter-check";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.set = key;
    input.value = value;
    const span = document.createElement("span");
    span.textContent = optionLabel(value, titleFor(value), counts);
    label.append(input, span);
    fieldset.appendChild(label);
  });
  return fieldset;
}

function makeFilterPanel() {
  filterLayer = document.createElement("div");
  filterLayer.className = "filter-layer";
  filterLayer.hidden = true;
  filterLayer.innerHTML = `<div class="filter-scrim" aria-hidden="true"></div>`;

  filterPanel = document.createElement("aside");
  filterPanel.className = "filter-panel";
  filterPanel.id = "gallery-filters";
  filterPanel.setAttribute("role", "dialog");
  filterPanel.setAttribute("aria-modal", "true");
  filterPanel.setAttribute("aria-labelledby", "filter-panel-title");
  filterPanel.innerHTML =
    `<div class="filter-panel-header"><div>` +
      `<h2 id="filter-panel-title">Browse and filter</h2>` +
      `<p>Choose a topic or adjust how the catalog is ordered.</p>` +
    `</div><button type="button" class="filter-close" aria-label="Close filters">&times;</button></div>`;

  const form = document.createElement("div");
  form.className = "filter-form";

  const sectionField = document.createElement("label");
  sectionField.className = "filter-field";
  sectionField.innerHTML = `<span>Discipline</span>`;
  sectionSelect = document.createElement("select");
  sectionSelect.className = "filter-select";
  sectionSelect.setAttribute("aria-label", "Discipline");
  addOption(sectionSelect, "", "All disciplines");
  SECTIONS.forEach((section) => addOption(sectionSelect, section.id, section.title));
  sectionField.appendChild(sectionSelect);

  const categoryField = document.createElement("label");
  categoryField.className = "filter-field";
  categoryField.innerHTML = `<span>Category</span>`;
  categorySelect = document.createElement("select");
  categorySelect.className = "filter-select";
  categorySelect.setAttribute("aria-label", "Category");
  categoryField.appendChild(categorySelect);

  const orderField = document.createElement("label");
  orderField.className = "filter-field";
  orderField.innerHTML = `<span>Order</span>`;
  orderSelect = document.createElement("select");
  orderSelect.className = "filter-select";
  orderSelect.setAttribute("aria-label", "Order");
  [["curated", "Curated by topic"], ["added", "Newest added"], ["updated", "Recently updated"]]
    .forEach(([value, title]) => addOption(orderSelect, value, title));
  orderField.appendChild(orderSelect);
  form.append(sectionField, categoryField, orderField);

  const technical = document.createElement("details");
  technical.className = "technical-filters";
  technicalSummary = document.createElement("summary");
  technicalSummary.textContent = "Technical metadata";
  technical.appendChild(technicalSummary);
  technical.appendChild(renderCheckGroup("statuses", "Status", [...STATUS_COUNTS.keys()], STATUS_COUNTS, (value) => STATUS_TITLES.get(value)));
  technical.appendChild(renderCheckGroup("origins", "Origin", AVAILABLE.origins, ORIGIN_COUNTS, titleCase));
  technical.appendChild(renderCheckGroup("models", "Model", AVAILABLE.models, MODEL_COUNTS, (value) => value === UNSPECIFIED ? "Unspecified" : titleCase(value)));
  technical.appendChild(renderCheckGroup("versions", "Model version", AVAILABLE.versions, VERSION_COUNTS, (value) => value === UNSPECIFIED ? "Unspecified" : value));
  form.appendChild(technical);

  const actions = document.createElement("div");
  actions.className = "filter-panel-actions";
  actions.innerHTML = `<button type="button" class="filter-clear">Clear filters</button><button type="button" class="filter-done">Show results</button>`;
  form.appendChild(actions);
  filterPanel.appendChild(form);
  filterLayer.appendChild(filterPanel);
  document.body.appendChild(filterLayer);

  filterLayer.querySelector(".filter-scrim").addEventListener("click", closeFilterPanel);
  filterLayer.querySelector(".filter-close").addEventListener("click", closeFilterPanel);
  filterLayer.querySelector(".filter-done").addEventListener("click", closeFilterPanel);
  filterLayer.querySelector(".filter-clear").addEventListener("click", () => {
    clearFilters();
    syncControls();
    applyFilters();
  });
  sectionSelect.addEventListener("change", () => {
    filterState.section = sectionSelect.value;
    filterState.category = "";
    enterBrowseForNarrowing();
    populateCategorySelect();
    syncControls();
    applyFilters();
  });
  categorySelect.addEventListener("change", () => {
    filterState.category = categorySelect.value;
    if (filterState.category) {
      filterState.section = CATEGORIES.find((category) => category.id === filterState.category)?.section || "";
    }
    enterBrowseForNarrowing();
    syncControls();
    applyFilters();
  });
  orderSelect.addEventListener("change", () => {
    filterState.view = "browse";
    filterState.order = orderSelect.value;
    syncControls();
    applyFilters();
  });
  technical.addEventListener("change", (event) => {
    const input = event.target.closest("input[data-set]");
    if (!input) return;
    const selected = filterState[input.dataset.set];
    if (input.checked) selected.add(input.value);
    else selected.delete(input.value);
    enterBrowseForNarrowing();
    syncControls();
    applyFilters();
  });

  document.addEventListener("keydown", (event) => {
    if (filterLayer.hidden) return;
    if (event.key === "Escape") closeFilterPanel();
    if (event.key !== "Tab") return;
    const focusable = [...filterPanel.querySelectorAll("button, select, input, summary")]
      .filter((element) => !element.disabled && !element.hidden && element.offsetParent !== null);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function openFilterPanel() {
  focusBeforePanel = document.activeElement;
  filterLayer.hidden = false;
  document.body.classList.add("filters-open");
  filterButton.setAttribute("aria-expanded", "true");
  filterPanel.querySelector(".filter-close").focus();
}

function closeFilterPanel() {
  if (!filterLayer || filterLayer.hidden) return;
  filterLayer.hidden = true;
  document.body.classList.remove("filters-open");
  filterButton.setAttribute("aria-expanded", "false");
  focusBeforePanel?.focus?.();
}

function labelForFilter(key, value) {
  if (key === "section") return SECTIONS.find((item) => item.id === value)?.title || value;
  if (key === "category") return CATEGORIES.find((item) => item.id === value)?.title || value;
  if (key === "statuses") return STATUS_TITLES.get(value) || value;
  if (value === UNSPECIFIED) return "Unspecified";
  return key === "versions" ? value : titleCase(value);
}

function updateActiveFilters() {
  const filters = [];
  if (filterState.query) filters.push(["query", filterState.query]);
  if (filterState.category) filters.push(["category", filterState.category]);
  else if (filterState.section) filters.push(["section", filterState.section]);
  ["statuses", "origins", "models", "versions"].forEach((key) => {
    filterState[key].forEach((value) => filters.push([key, value]));
  });
  activeFilterRow.replaceChildren();
  filters.forEach(([key, value]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "active-filter";
    button.dataset.clear = key;
    button.dataset.value = value;
    const label = key === "query" ? `“${value}”` : labelForFilter(key, value);
    button.textContent = `${label} ×`;
    button.setAttribute("aria-label", `Remove ${label} filter`);
    activeFilterRow.appendChild(button);
  });
  if (filters.length) {
    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "active-filter-clear";
    clear.textContent = "Clear all";
    activeFilterRow.appendChild(clear);
  }
  activeFilterRow.hidden = filters.length === 0;
}

function syncControls() {
  if (searchInput) searchInput.value = filterState.query;
  recentTab?.setAttribute("aria-pressed", filterState.view === "recent" ? "true" : "false");
  browseTab?.setAttribute("aria-pressed", filterState.view === "browse" ? "true" : "false");
  if (sectionSelect) sectionSelect.value = filterState.section;
  populateCategorySelect();
  if (orderSelect) orderSelect.value = filterState.order;
  filterPanel?.querySelectorAll("input[data-set]").forEach((input) => {
    input.checked = filterState[input.dataset.set].has(input.value);
  });
  const count = filterCount();
  if (filterBadge) {
    filterBadge.textContent = count ? String(count) : "";
    filterBadge.hidden = count === 0;
  }
  if (technicalSummary) {
    const advanced = filterState.statuses.size + filterState.origins.size + filterState.models.size + filterState.versions.size;
    technicalSummary.textContent = advanced ? `Technical metadata (${advanced})` : "Technical metadata";
  }
  updateActiveFilters();
}

function appendLoadMore(rendered, total) {
  if (rendered >= total) return;
  const wrapper = document.createElement("div");
  wrapper.className = "load-more-wrap";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "load-more";
  button.textContent = `Load more (${total - rendered} remaining)`;
  wrapper.appendChild(button);
  document.getElementById("gallery-root")?.appendChild(wrapper);
}

function applyFilters({ resetPage = true } = {}) {
  if (resetPage) renderLimit = PAGE_SIZE;
  lastFiltered = queryConcepts(CONCEPTS, filterState, searchText, AVAILABLE);
  activeDateField = filterState.view === "recent" || filterState.order === "added"
    ? "added"
    : filterState.order === "updated" ? "updated" : null;
  const rendered = lastFiltered.slice(0, renderLimit);
  renderGallery(rendered);
  appendLoadMore(rendered.length, lastFiltered.length);
  wireVersioners();
  installLazyObserver();
  updateLocationFilters();
  syncControls();

  if (countReadout) {
    if (filterState.view === "recent") countReadout.textContent = `${lastFiltered.length} recent`;
    else if (rendered.length < lastFiltered.length) countReadout.textContent = `${rendered.length} of ${lastFiltered.length} loaded`;
    else countReadout.textContent = `${lastFiltered.length} result${lastFiltered.length === 1 ? "" : "s"}`;
  }
}

function initToolbar() {
  const mount = document.getElementById("gallery-root");
  if (!mount) return;
  const toolbar = document.createElement("div");
  toolbar.className = "gallery-toolbar";
  toolbar.setAttribute("role", "region");
  toolbar.setAttribute("aria-label", "Search and browse concepts");

  searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.className = "concept-search";
  searchInput.maxLength = 120;
  searchInput.placeholder = `Search all ${CONCEPTS.length.toLocaleString()} concepts…`;
  searchInput.setAttribute("aria-label", "Search all concepts by name, definition, or topic");

  const viewTabs = document.createElement("div");
  viewTabs.className = "view-tabs";
  viewTabs.setAttribute("role", "group");
  viewTabs.setAttribute("aria-label", "Gallery view");
  recentTab = document.createElement("button");
  recentTab.type = "button";
  recentTab.className = "view-tab";
  recentTab.textContent = "Recent";
  browseTab = document.createElement("button");
  browseTab.type = "button";
  browseTab.className = "view-tab";
  browseTab.textContent = "Browse";
  viewTabs.append(recentTab, browseTab);

  filterButton = document.createElement("button");
  filterButton.type = "button";
  filterButton.className = "filter-button";
  filterButton.setAttribute("aria-expanded", "false");
  filterButton.setAttribute("aria-controls", "gallery-filters");
  filterButton.append("Filters ");
  filterBadge = document.createElement("span");
  filterBadge.className = "filter-button-count";
  filterBadge.hidden = true;
  filterButton.appendChild(filterBadge);

  countReadout = document.createElement("span");
  countReadout.className = "filter-count";
  countReadout.setAttribute("role", "status");
  countReadout.setAttribute("aria-live", "polite");
  countReadout.tabIndex = -1;

  activeFilterRow = document.createElement("div");
  activeFilterRow.className = "active-filters";
  activeFilterRow.setAttribute("aria-label", "Active filters");
  activeFilterRow.hidden = true;

  toolbar.append(searchInput, viewTabs, filterButton, countReadout, activeFilterRow);
  mount.parentNode.insertBefore(toolbar, mount);
  makeFilterPanel();

  let searchTimer = null;
  searchInput.addEventListener("input", () => {
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      filterState.query = searchInput.value.trim();
      if (filterState.query) enterBrowseForNarrowing();
      applyFilters();
    }, 160);
  });
  recentTab.addEventListener("click", () => {
    clearFilters({ keepView: false });
    applyFilters();
  });
  browseTab.addEventListener("click", () => {
    filterState.view = "browse";
    filterState.order = "curated";
    applyFilters();
  });
  filterButton.addEventListener("click", openFilterPanel);
  activeFilterRow.addEventListener("click", (event) => {
    if (event.target.closest(".active-filter-clear")) {
      clearFilters();
    } else {
      const button = event.target.closest(".active-filter");
      if (!button) return;
      const key = button.dataset.clear;
      if (key === "query") filterState.query = "";
      else if (key === "section") filterState.section = "";
      else if (key === "category") {
        filterState.category = "";
        filterState.section = "";
      } else filterState[key].delete(button.dataset.value);
    }
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
  const loadMore = event.target.closest(".load-more");
  if (loadMore) {
    renderLimit += PAGE_SIZE;
    applyFilters({ resetPage: false });
    (document.querySelector(".load-more") || countReadout)?.focus?.();
    return;
  }
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
  ensureLiveRegion();
  wireCopyDelegation();
  applyFilters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
