// Data-driven gallery renderer for the Physics & Movement Concepts archive.
//
// 1. Reads gallery structure/data from ./manifest.js.
// 2. Dynamically imports each concept module so it self-registers its custom element.
// 3. Builds search and category filter controls.
// 4. Renders responsive grid sections with Copy and Source buttons.

import { CATEGORIES, CONCEPTS } from "./manifest.js";
import { installReducedMotion } from "./reduced-motion.js";

installReducedMotion();

// Tag format: "physics-foo-bar" -> "./concepts/foo-bar-concept.js"
function modulePathForTag(tag) {
  const name = tag.replace(/^physics-/, "");
  return `./concepts/${name}-concept.js`;
}

function importConceptModules() {
  for (const concept of CONCEPTS) {
    const path = modulePathForTag(concept.tag);
    import(path).catch((error) => {
      console.warn(`Failed to load physics concept module: ${path}`, error);
    });
  }
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderActions(tag, label) {
  const name = tag.replace(/^physics-/, "");
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

function renderGallery(concepts) {
  const mount = document.getElementById("gallery-root");
  if (!mount) return;

  if (concepts.length === 0) {
    mount.innerHTML = `<p class="gallery-empty" role="status">No physics concepts match your filters.</p>`;
    return;
  }

  const sections = CATEGORIES.map((category) => {
    const inCategory = concepts.filter(
      (concept) => concept.category === category.id
    );
    if (inCategory.length === 0) return "";

    const cards = inCategory.map(renderPlainCard).join("");
    return (
      `<section class="gallery-section">` +
        `<h2 class="section-title">${esc(category.title)}</h2>` +
        `<div class="gallery-grid">${cards}</div>` +
      `</section>`
    );
  });

  mount.innerHTML = sections.join("");
}

// --- Filtering & State ---------------------------------------------------
let activeSearch = "";
let activeCategory = null; // null = all

function getFilteredConcepts() {
  return CONCEPTS.filter((concept) => {
    if (activeCategory && concept.category !== activeCategory) {
      return false;
    }
    if (activeSearch) {
      const q = activeSearch.toLowerCase();
      const matchLabel = concept.label.toLowerCase().includes(q);
      const matchTag = concept.tag.toLowerCase().includes(q);
      if (!matchLabel && !matchTag) return false;
    }
    return true;
  });
}

function updateGalleryView() {
  const filtered = getFilteredConcepts();
  renderGallery(filtered);
  updateCounter(filtered.length);
}

function updateCounter(showingCount) {
  const counter = document.getElementById("filter-count");
  if (counter) {
    counter.textContent = `Showing ${showingCount} of ${CONCEPTS.length}`;
  }
}

function wireToolbar() {
  const searchInput = document.getElementById("concept-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value.trim();
      updateGalleryView();
    });
  }

  const chips = document.querySelectorAll(".cat-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const catId = chip.dataset.category;
      if (activeCategory === catId) {
        activeCategory = null;
        chip.setAttribute("aria-pressed", "false");
      } else {
        activeCategory = catId;
        chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
        chip.setAttribute("aria-pressed", "true");
      }
      updateGalleryView();
    });
  });

  const resetBtn = document.getElementById("filter-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      activeSearch = "";
      activeCategory = null;
      if (searchInput) searchInput.value = "";
      chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
      updateGalleryView();
    });
  }
}

function wireCopyButtons() {
  document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest(".concept-copy");
    if (!copyBtn) return;
    const tag = copyBtn.dataset.tag;
    const name = tag.replace(/^physics-/, "");
    const snippet = `<script type="module" src="./physics/gallery/concepts/${name}-concept.js"></script>\n<${tag}></${tag}>`;

    navigator.clipboard.writeText(snippet).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "COPIED!";
      copyBtn.classList.add("is-copied");
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.remove("is-copied");
      }, 1500);
    }).catch((err) => {
      console.error("Clipboard copy failed", err);
    });
  });
}

function init() {
  importConceptModules();
  updateGalleryView();
  wireToolbar();
  wireCopyButtons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
