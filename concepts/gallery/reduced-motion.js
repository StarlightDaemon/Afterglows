// Reduced-motion coverage for the concept custom elements.
//
// WHY THIS EXISTS
// Every concept module renders into its own shadow root. The page's
// @media (prefers-reduced-motion: reduce) block in
// header-animation-concepts.html uses a document-scope universal selector,
// and document stylesheets do not cross a shadow boundary — so that rule
// styles the gallery chrome and nothing inside the tiles. Measured before
// this shim: with prefers-reduced-motion forced to "reduce", all 1828
// animations across all 243 concept instances were still playing.
//
// HOW IT WORKS
// A single constructable stylesheet carrying the same suppression rule the
// rest of the site uses (assets/css/styles.css, retro/crt_tools.css,
// matrix_code/matrix_tools.css) is adopted into every concept shadow root at
// creation time. The rule stays inside an @media block, so the browser
// re-evaluates it live when the OS setting changes — no matchMedia listener,
// no re-render.
//
// Adopted sheets come BEFORE the shadow root's own <style> in cascade order,
// so the !important declarations here are what make it win. Import this
// module before any concept module so the patch is installed before the
// first element upgrades.

const REDUCED_MOTION_CSS = `
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;

// Built once and shared by reference across every shadow root.
let sheet = null;
function reducedMotionSheet() {
  if (sheet) return sheet;
  sheet = new CSSStyleSheet();
  sheet.replaceSync(REDUCED_MOTION_CSS);
  return sheet;
}

// Patch attachShadow rather than walking the DOM after the fact: concept
// modules are imported fire-and-forget and their elements upgrade whenever
// each import resolves, so there is no single moment at which every shadow
// root is known to exist. Scoped to the given host tag prefixes so no other
// component on the page is affected.
//
// Shared by both galleries: concepts/gallery uses the default CONCEPT-
// prefix; physics/gallery imports this module and passes ["PHYSICS-"].
const activePrefixes = new Set();

export function installReducedMotion(prefixes = ["CONCEPT-"]) {
  if (typeof CSSStyleSheet === "undefined" || !("replaceSync" in CSSStyleSheet.prototype)) {
    return; // No constructable stylesheets; nothing safe to do here.
  }

  for (const prefix of prefixes) activePrefixes.add(prefix);

  const native = Element.prototype.attachShadow;
  if (native.__agReducedMotion) return; // Idempotent; new prefixes registered above.

  function attachShadow(init) {
    const root = native.call(this, init);
    const tag = this.tagName;
    let matches = false;
    for (const prefix of activePrefixes) {
      if (tag.startsWith(prefix)) { matches = true; break; }
    }
    if (matches) {
      try {
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, reducedMotionSheet()];
      } catch (error) {
        console.warn("Reduced-motion sheet could not be adopted", error);
      }
    }
    return root;
  }
  attachShadow.__agReducedMotion = true;

  Element.prototype.attachShadow = attachShadow;
}
