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
    `</div>`
  );
}

function renderCard(concept) {
  return concept.versioned
    ? renderVersionedCard(concept)
    : renderPlainCard(concept);
}

// Build #gallery-root: one section per category, containing all concept cards
// for that category from CONCEPTS.
function renderGallery() {
  const mount = document.getElementById("gallery-root");
  if (!mount) return;

  const sections = CATEGORIES.map((category) => {
    const inCategory = CONCEPTS.filter(
      (concept) => concept.category === category.id
    );

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

// --- Bootstrap ------------------------------------------------------------
// Kick off module loading immediately (fire-and-forget), then render the full
// gallery and wire versioners once the DOM is ready. #gallery-root may not
// exist yet at parse time.
function init() {
  renderGallery();
  wireVersioners();
}

importConceptModules();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
