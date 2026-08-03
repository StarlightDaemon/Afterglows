// v1 below is the archived original; v2 adds drifting cloud bands and a ring shadow.
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

  /* Cloud bands drifting across the surface, so it reads as a rotating
     sphere rather than a flat glowing disc. */
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

  /* Shadow the front ring band casts across the planet's lower half. */
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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${planetRingsStyles[version] || planetRingsStyles.v2}</style>${planetRingsMarkup[version] || planetRingsMarkup.v2}`;
  }
}

if (!customElements.get('concept-planet-rings')) {
  customElements.define('concept-planet-rings', ConceptPlanetRings);
}
