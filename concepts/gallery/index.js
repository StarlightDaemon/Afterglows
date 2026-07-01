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

// Single-version (unversioned) card markup.
function renderPlainCard(concept) {
  const { tag, label, badge, badgeCls } = concept;
  return (
    `<div class="concept-card">` +
      `<div class="terminal-box"><${tag}></${tag}></div>` +
      `<div class="concept-label">${esc(label)}</div>` +
      `<div class="concept-meta">` +
        `<span class="meta-badge ${esc(badgeCls)}">${esc(badge)}</span>` +
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
function renderGallery(concepts) {
  const mount = document.getElementById("gallery-root");
  if (!mount) return;

  if (concepts.length === 0) {
    mount.innerHTML =
      `<p class="gallery-empty" role="status">No concepts match your filters.</p>`;
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

    const render = (nextIndex) => {
      currentIndex = nextIndex;
      frames.forEach((frame, index) => {
        frame.classList.toggle('is-active', index === currentIndex);
      });
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
  if (/\bmeta-status-refined\b/.test(concept.badgeCls)) return "refined";
  if (/\bmeta-status-new\b/.test(concept.badgeCls)) return "new";
  return "original";
}

const STATUSES = [
  { id: "original", title: "Original" },
  { id: "refined", title: "Refined" },
  { id: "new", title: "New" },
];

// Live filter state. Defaults show everything.
const activeCategories = new Set(CATEGORIES.map((category) => category.id));
const activeStatuses = new Set(STATUSES.map((status) => status.id));
let searchTerm = "";

// Cached toolbar element references, populated by initToolbar().
let searchInput = null;
let countReadout = null;

// True when a concept passes all three filter dimensions.
function isVisible(concept) {
  if (!activeCategories.has(concept.category)) return false;
  if (!activeStatuses.has(statusOf(concept))) return false;
  if (searchTerm && !concept.label.toLowerCase().includes(searchTerm)) {
    return false;
  }
  return true;
}

// Recompute the visible list, rebuild the gallery, re-wire versioners, and
// refresh the count readout.
function applyFilters() {
  const visible = CONCEPTS.filter(isVisible);
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

  // Category filter group.
  const categoryGroup = document.createElement("div");
  categoryGroup.className = "toolbar-group";
  categoryGroup.setAttribute("role", "group");
  categoryGroup.setAttribute("aria-label", "Filter by category");
  const categoryLabel = document.createElement("span");
  categoryLabel.className = "toolbar-group-label";
  categoryLabel.textContent = "Category";
  categoryGroup.appendChild(categoryLabel);
  const categoryChips = CATEGORIES.map((category) =>
    makeChip("category", category.id, category.title)
  );
  categoryChips.forEach((chip) => categoryGroup.appendChild(chip));
  toolbar.appendChild(categoryGroup);

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

  const allChips = categoryChips.concat(statusChips);
  allChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      const next = !pressed;
      chip.setAttribute("aria-pressed", next ? "true" : "false");
      const set =
        chip.dataset.filter === "category" ? activeCategories : activeStatuses;
      if (next) set.add(chip.dataset.value);
      else set.delete(chip.dataset.value);
      applyFilters();
    });
  });

  reset.addEventListener("click", () => {
    activeCategories.clear();
    CATEGORIES.forEach((category) => activeCategories.add(category.id));
    activeStatuses.clear();
    STATUSES.forEach((status) => activeStatuses.add(status.id));
    searchTerm = "";
    searchInput.value = "";
    allChips.forEach((chip) => chip.setAttribute("aria-pressed", "true"));
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
