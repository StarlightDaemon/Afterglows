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
    background: radial-gradient(circle at 35% 35%, #ffffff, rgba(0, 204, 0, 0.85) 58%, rgba(0, 85, 0, 0.95));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 16px rgba(0, 255, 100, 0.5);
    animation: planet-disc-bob 1.8s ease-in-out infinite alternate;
  }

  @keyframes planet-disc-bob {
    0% { transform: translateY(-4px) scale(0.96); }
    100% { transform: translateY(4px) scale(1.04); }
  }

  .planet-ring-band {
    position: absolute;
    top: 34px;
    left: 10px;
    width: 76px;
    height: 24px;
    border: 2px solid #00ff66;
    border-radius: 50%;
    transform-origin: 50% 50%;
    animation: ring-wobble 1.8s ease-in-out infinite alternate;
  }

  .planet-ring-band.back { opacity: 0.35; }
  .planet-ring-band.front {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: #ffffff;
    border-bottom-color: #00ff66;
    box-shadow: 0 0 8px #00ff66;
  }

  @keyframes ring-wobble {
    0% { transform: rotate(-28deg) scale(0.9, 0.7); }
    100% { transform: rotate(14deg) scale(1.1, 1.3); }
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
    background: radial-gradient(circle at 35% 35%, #ffffff, rgba(0, 204, 0, 0.85) 58%, rgba(0, 85, 0, 0.95));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 16px rgba(0, 255, 100, 0.5);
    overflow: hidden;
    animation: planet-disc-bob 1.8s ease-in-out infinite alternate;
  }

  @keyframes planet-disc-bob {
    0% { transform: translateY(-4px) scale(0.96); }
    100% { transform: translateY(4px) scale(1.04); }
  }

  .planet-disc::before {
    content: '';
    position: absolute;
    inset: -4px -20px;
    background: repeating-linear-gradient(100deg,
      transparent 0 5px,
      rgba(0, 60, 12, 0.5) 5px 7px,
      transparent 7px 13px);
    animation: planet-rotate 1.2s linear infinite;
  }

  @keyframes planet-rotate {
    0% { transform: translateX(-18px); }
    100% { transform: translateX(18px); }
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
    animation: planet-disc-bob 1.8s ease-in-out infinite alternate;
  }

  .planet-shadow::after {
    content: '';
    position: absolute;
    left: -6px;
    right: -6px;
    top: 62%;
    height: 30%;
    background: rgba(0, 10, 2, 0.65);
    filter: blur(1.5px);
    transform: rotate(-18deg);
  }

  .planet-ring-band {
    position: absolute;
    top: 34px;
    left: 10px;
    width: 76px;
    height: 24px;
    border: 2px solid #00ff66;
    border-radius: 50%;
    transform-origin: 50% 50%;
    animation: ring-wobble 1.8s ease-in-out infinite alternate;
  }

  .planet-ring-band.back { opacity: 0.35; }
  .planet-ring-band.front {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: #ffffff;
    border-bottom-color: #00ff66;
    box-shadow: 0 0 8px #00ff66;
  }

  @keyframes ring-wobble {
    0% { transform: rotate(-28deg) scale(0.9, 0.7); }
    100% { transform: rotate(14deg) scale(1.1, 1.3); }
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
    background: radial-gradient(circle at 35% 35%, #ffffff, #f59e0b 55%, #78350f 95%);
    border: 1.5px solid #fde047;
    box-shadow: 0 0 16px rgba(245, 158, 11, 0.5);
    overflow: hidden;
    animation: planet-disc-bob 1.8s ease-in-out infinite alternate;
  }

  @keyframes planet-disc-bob {
    0% { transform: translateY(-4px) scale(0.96); }
    100% { transform: translateY(4px) scale(1.04); }
  }

  .prc-disc::before {
    content: '';
    position: absolute;
    inset: -4px -20px;
    background: repeating-linear-gradient(100deg,
      transparent 0 4px,
      rgba(180, 83, 9, 0.5) 4px 6px,
      rgba(254, 240, 138, 0.4) 6px 9px,
      transparent 9px 14px);
    animation: planet-rotate 1.2s linear infinite;
  }

  @keyframes planet-rotate {
    0% { transform: translateX(-18px); }
    100% { transform: translateX(18px); }
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
    animation: planet-disc-bob 1.8s ease-in-out infinite alternate;
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
    left: 10px;
    width: 76px;
    height: 24px;
    border: 2.5px solid rgba(254, 215, 170, 0.85);
    border-radius: 50%;
    transform-origin: 50% 50%;
    box-shadow: 0 0 8px rgba(251, 191, 36, 0.5);
    animation: ring-wobble 1.8s ease-in-out infinite alternate;
  }

  .prc-ring-band.back { opacity: 0.35; }
  .prc-ring-band.front {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: #ffffff;
    border-bottom-color: #f59e0b;
  }

  @keyframes ring-wobble {
    0% { transform: rotate(-28deg) scale(0.9, 0.7); }
    100% { transform: rotate(14deg) scale(1.1, 1.3); }
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
