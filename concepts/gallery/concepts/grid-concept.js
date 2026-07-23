const gridStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original scrolling grid disc --- */
  .grid-globe {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid var(--accent, #00cc00);
    background: repeating-linear-gradient(0deg, transparent 0 9px, rgba(0, 204, 0, 0.5) 10px),
                repeating-linear-gradient(90deg, transparent 0 9px, rgba(0, 204, 0, 0.5) 10px);
    animation: spin-slow 8s linear infinite;
    background-size: 200% 200%;
  }

  @keyframes spin-slow {
    to { background-position: 100% 100%; }
  }

  /* --- v2: wireframe globe ---
     Static latitude rings plus meridians that squash and re-inflate
     out of phase, faking a spinning wire sphere. A polar scan band
     sweeps the surface and the limb carries a soft glow. */
  .gg2 {
    width: 96px;
    height: 96px;
    position: relative;
    transform: rotate(12deg);
  }

  .gg2-sphere {
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
  .gg2-lat {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 50%;
    border: 1px solid rgba(0, 204, 0, 0.45);
    border-radius: 50%;
  }

  .gg2-lat.l1 { height: 30px; margin-top: -32px; left: 12px; right: 12px; }
  .gg2-lat.l2 { height: 40px; margin-top: -20px; }
  .gg2-lat.l3 { height: 40px; margin-top: -20px; transform: none; }
  .gg2-lat.equator { height: 44px; margin-top: -22px; border-color: rgba(140, 255, 170, 0.75); }
  .gg2-lat.l4 { height: 30px; margin-top: 2px; left: 12px; right: 12px; }

  /* Meridians: vertical rings whose width breathes out of phase,
     reading as rotation about the polar axis. */
  .gg2-mer {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 50%;
    width: 88px;
    margin-left: -44px;
    border: 1px solid rgba(0, 204, 0, 0.55);
    border-radius: 50%;
    animation: gg2-spin 3.6s linear infinite;
  }

  .gg2-mer.m1 { animation-delay: 0s; }
  .gg2-mer.m2 { animation-delay: -0.9s; }
  .gg2-mer.m3 { animation-delay: -1.8s; }
  .gg2-mer.m4 { animation-delay: -2.7s; }

  @keyframes gg2-spin {
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
  .gg2-scan {
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
    animation: gg2-scan 4.8s ease-in-out infinite;
  }

  @keyframes gg2-scan {
    0%, 100% { top: 8px; left: 22px; right: 22px; opacity: 0.4; }
    25% { left: 8px; right: 8px; opacity: 0.9; }
    50% { top: 78px; left: 22px; right: 22px; opacity: 0.4; }
    75% { left: 8px; right: 8px; opacity: 0.9; }
  }

  /* Axis stubs poking out of the poles. */
  .gg2-axis {
    position: absolute;
    left: 50%;
    width: 1px;
    height: 8px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.8);
  }

  .gg2-axis.top { top: -3px; }
  .gg2-axis.bottom { bottom: -3px; }
`;

const gridMarkup = {
  v1: `<div class="grid-globe"></div>`,
  v2: `
    <div class="gg2">
      <div class="gg2-sphere"></div>
      <div class="gg2-lat l1"></div>
      <div class="gg2-lat equator"></div>
      <div class="gg2-lat l4"></div>
      <div class="gg2-mer m1"></div>
      <div class="gg2-mer m2"></div>
      <div class="gg2-mer m3"></div>
      <div class="gg2-mer m4"></div>
      <div class="gg2-scan"></div>
      <div class="gg2-axis top"></div>
      <div class="gg2-axis bottom"></div>
    </div>
  `,
};

class ConceptGrid extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${gridStyles}</style>${gridMarkup[version] || gridMarkup.v2}`;
  }
}

if (!customElements.get('concept-grid')) {
  customElements.define('concept-grid', ConceptGrid);
}
