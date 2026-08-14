// Reduced-motion coverage for physics concept custom elements.
//
// Adopted stylesheet carrying suppression rules into every concept shadow root.
// Evaluated live when OS setting changes.

const REDUCED_MOTION_CSS = `
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;

let sheet = null;
function reducedMotionSheet() {
  if (sheet) return sheet;
  sheet = new CSSStyleSheet();
  sheet.replaceSync(REDUCED_MOTION_CSS);
  return sheet;
}

export function installReducedMotion() {
  if (typeof CSSStyleSheet === "undefined" || !("replaceSync" in CSSStyleSheet.prototype)) {
    return;
  }

  const native = Element.prototype.attachShadow;
  if (native.__agReducedMotionPhysics) return;

  function attachShadow(init) {
    const root = native.call(this, init);
    if (this.tagName.startsWith("PHYSICS-") || this.tagName.startsWith("CONCEPT-")) {
      try {
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, reducedMotionSheet()];
      } catch (error) {
        console.warn("Reduced-motion sheet could not be adopted", error);
      }
    }
    return root;
  }
  attachShadow.__agReducedMotionPhysics = true;

  Element.prototype.attachShadow = attachShadow;
}
