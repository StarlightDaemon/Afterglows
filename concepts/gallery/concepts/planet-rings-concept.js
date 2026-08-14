// v1 below is the archived original; v2 adds drifting cloud bands and a ring shadow.
// v3 adds authentic Saturn gas-giant color palette:
// Golden butterscotch and ochre atmospheric bands, concentric Cassini ring division,
// and realistic planetary cast shadow geometry.
const planetRingsStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .planet-rings {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .planet-disc {
    position: absolute;
    top: 26px;
    left: 30px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #d5ffae, rgba(0, 204, 0, 0.75) 58%, rgba(0, 85, 0, 0.95));
    box-shadow: 0 0 14px rgba(0, 204, 0, 0.18);
  }

  .planet-ring-band {
    position: absolute;
    top: 34px;
    left: 12px;
    width: 72px;
    height: 24px;
    border: 2px solid rgba(170, 255, 170, 0.55);
    border-radius: 50%;
    transform: rotate(-18deg);
    animation: ring-wobble 4s ease-in-out infinite;
  }

  .planet-ring-band.back { opacity: 0.28; }
  .planet-ring-band.front {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: rgba(170, 255, 170, 0.85);
    border-bottom-color: rgba(170, 255, 170, 0.85);
  }

  @keyframes ring-wobble {
    0%, 100% { transform: rotate(-18deg) scaleX(1); }
    50% { transform: rotate(-10deg) scaleX(1.04); }
  }
`,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .planet-rings {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .planet-disc {
    position: absolute;
    top: 26px;
    left: 30px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #d5ffae, rgba(0, 204, 0, 0.75) 58%, rgba(0, 85, 0, 0.95));
    box-shadow: 0 0 14px rgba(0, 204, 0, 0.18);
    overflow: hidden;
  }

  .planet-disc::before {
    content: '';
    position: absolute;
    inset: -4px -20px;
    background: repeating-linear-gradient(100deg,
      transparent 0 5px,
      rgba(0, 60, 12, 0.3) 5px 7px,
      transparent 7px 13px);
    animation: planet-rotate 8s linear infinite;
  }

  @keyframes planet-rotate {
    to { transform: translateX(18px); }
  }

  .planet-shadow {
    position: absolute;
    top: 26px;
    left: 30px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
  }

  .planet-shadow::after {
    content: '';
    position: absolute;
    left: -6px;
    right: -6px;
    top: 62%;
    height: 30%;
    background: rgba(0, 10, 2, 0.55);
    filter: blur(1.5px);
    transform: rotate(-18deg);
  }

  .planet-ring-band {
    position: absolute;
    top: 34px;
    left: 12px;
    width: 72px;
    height: 24px;
    border: 2px solid rgba(170, 255, 170, 0.55);
    border-radius: 50%;
    transform: rotate(-18deg);
    animation: ring-wobble 4s ease-in-out infinite;
  }

  .planet-ring-band.back { opacity: 0.28; }
  .planet-ring-band.front {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: rgba(170, 255, 170, 0.85);
    border-bottom-color: rgba(170, 255, 170, 0.85);
  }

  @keyframes ring-wobble {
    0%, 100% { transform: rotate(-18deg) scaleX(1); }
    50% { transform: rotate(-10deg) scaleX(1.04); }
  }
`,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .prc-wrap {
    width: 96px;
    height: 96px;
    position: relative;
  }

  /* Saturn golden-amber gas giant sphere */
  .prc-disc {
    position: absolute;
    top: 26px;
    left: 30px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #fef08a, #f59e0b 55%, #78350f 95%);
    box-shadow: 0 0 16px rgba(245, 158, 11, 0.35);
    overflow: hidden;
  }

  .prc-disc::before {
    content: '';
    position: absolute;
    inset: -4px -20px;
    background: repeating-linear-gradient(100deg,
      transparent 0 4px,
      rgba(180, 83, 9, 0.4) 4px 6px,
      rgba(254, 240, 138, 0.3) 6px 9px,
      transparent 9px 14px);
    animation: planet-rotate 8s linear infinite;
  }

  @keyframes planet-rotate {
    to { transform: translateX(18px); }
  }

  .prc-shadow {
    position: absolute;
    top: 26px;
    left: 30px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
  }

  .prc-shadow::after {
    content: '';
    position: absolute;
    left: -6px;
    right: -6px;
    top: 62%;
    height: 30%;
    background: rgba(15, 23, 42, 0.85);
    filter: blur(1.5px);
    transform: rotate(-18deg);
  }

  /* Dual golden ice rings with Cassini division */
  .prc-ring-band {
    position: absolute;
    top: 34px;
    left: 12px;
    width: 72px;
    height: 24px;
    border: 2px solid rgba(254, 215, 170, 0.7);
    border-radius: 50%;
    transform: rotate(-18deg);
    box-shadow: 0 0 6px rgba(251, 191, 36, 0.3);
    animation: ring-wobble 4s ease-in-out infinite;
  }

  .prc-ring-band.back { opacity: 0.35; }
  .prc-ring-band.front {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: #fed7aa;
    border-bottom-color: #f59e0b;
  }

  @keyframes ring-wobble {
    0%, 100% { transform: rotate(-18deg) scaleX(1); }
    50% { transform: rotate(-10deg) scaleX(1.04); }
  }
`,
};

const planetRingsMarkup = {
  v1: `
    <div class="planet-rings">
      <div class="planet-ring-band back"></div>
      <div class="planet-disc"></div>
      <div class="planet-ring-band front"></div>
    </div>
  `,
  v2: `
    <div class="planet-rings">
      <div class="planet-ring-band back"></div>
      <div class="planet-disc"></div>
      <div class="planet-shadow"></div>
      <div class="planet-ring-band front"></div>
    </div>
  `,
  v3: `
    <div class="prc-wrap">
      <div class="prc-ring-band back"></div>
      <div class="prc-disc"></div>
      <div class="prc-shadow"></div>
      <div class="prc-ring-band front"></div>
    </div>
  `,
};

class ConceptPlanetRings extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${planetRingsStyles[version] || planetRingsStyles.v3}</style>${planetRingsMarkup[version] || planetRingsMarkup.v3}`;
  }
}

if (!customElements.get('concept-planet-rings')) {
  customElements.define('concept-planet-rings', ConceptPlanetRings);
}
