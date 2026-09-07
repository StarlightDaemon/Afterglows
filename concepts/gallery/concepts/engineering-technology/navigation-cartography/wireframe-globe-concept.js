const wireframeGlobeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Wireframe globe: static latitude rings plus meridians that squash
     and re-inflate out of phase, faking a spinning wire sphere. A polar
     scan band sweeps the surface and the limb carries a soft glow.
     (Split out of Grid, where it had drifted away from its name.) */
  .wg {
    width: 96px;
    height: 96px;
    position: relative;
    transform: rotate(12deg);
  }

  .wg-sphere {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.85);
    background: radial-gradient(circle at 36% 30%,
      rgba(0, 204, 0, 0.16),
      rgba(0, 40, 8, 0.25) 55%,
      rgba(0, 10, 2, 0.5) 100%);
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.35), inset 0 0 14px rgba(0, 204, 0, 0.2);
  }

  /* Latitudes: fixed squashed rings. */
  .wg-lat {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 50%;
    border: 1px solid rgba(0, 204, 0, 0.45);
    border-radius: 50%;
  }

  .wg-lat.l1 { height: 30px; margin-top: -32px; left: 12px; right: 12px; }
  .wg-lat.equator { height: 44px; margin-top: -22px; border-color: rgba(140, 255, 170, 0.75); }
  .wg-lat.l4 { height: 30px; margin-top: 2px; left: 12px; right: 12px; }

  /* Meridians: vertical rings whose width breathes out of phase,
     reading as rotation about the polar axis. */
  .wg-mer {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 50%;
    width: 88px;
    margin-left: -44px;
    border: 1px solid rgba(0, 204, 0, 0.55);
    border-radius: 50%;
    animation: wg-spin 3.6s linear infinite;
  }

  .wg-mer.m1 { animation-delay: 0s; }
  .wg-mer.m2 { animation-delay: -0.9s; }
  .wg-mer.m3 { animation-delay: -1.8s; }
  .wg-mer.m4 { animation-delay: -2.7s; }

  @keyframes wg-spin {
    0% { transform: scaleX(1); opacity: 0.7; }
    25% { transform: scaleX(0.45); opacity: 0.5; }
    49.99% { transform: scaleX(0.04); opacity: 0.35; }
    /* Back face: the ring keeps thinning through the pole and
       re-inflates dimmer while "behind" the sphere. */
    50% { transform: scaleX(0.04); opacity: 0.2; }
    75% { transform: scaleX(0.45); opacity: 0.16; }
    99.99% { transform: scaleX(1); opacity: 0.2; }
    100% { transform: scaleX(1); opacity: 0.7; }
  }

  /* Polar scan band sweeping top to bottom and back. */
  .wg-scan {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(180deg,
      transparent,
      rgba(140, 255, 170, 0.35) 45%,
      rgba(190, 255, 205, 0.5) 55%,
      transparent);
    filter: blur(1px);
    animation: wg-scan 4.8s ease-in-out infinite;
  }

  @keyframes wg-scan {
    0%, 100% { top: 8px; left: 22px; right: 22px; opacity: 0.4; }
    25% { left: 8px; right: 8px; opacity: 0.9; }
    50% { top: 78px; left: 22px; right: 22px; opacity: 0.4; }
    75% { left: 8px; right: 8px; opacity: 0.9; }
  }

  /* Axis stubs poking out of the poles. */
  .wg-axis {
    position: absolute;
    left: 50%;
    width: 1px;
    height: 8px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.8);
  }

  .wg-axis.top { top: -3px; }
  .wg-axis.bottom { bottom: -3px; }
`;

class ConceptWireframeGlobe extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wireframeGlobeStyles}</style>
      <div class="wg">
        <div class="wg-sphere"></div>
        <div class="wg-lat l1"></div>
        <div class="wg-lat equator"></div>
        <div class="wg-lat l4"></div>
        <div class="wg-mer m1"></div>
        <div class="wg-mer m2"></div>
        <div class="wg-mer m3"></div>
        <div class="wg-mer m4"></div>
        <div class="wg-scan"></div>
        <div class="wg-axis top"></div>
        <div class="wg-axis bottom"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-wireframe-globe')) {
  customElements.define('concept-wireframe-globe', ConceptWireframeGlobe);
}
