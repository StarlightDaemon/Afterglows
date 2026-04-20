const planetRingsStyles = `
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
`;

class ConceptPlanetRings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${planetRingsStyles}</style>
      <div class="planet-rings">
        <div class="planet-ring-band back"></div>
        <div class="planet-disc"></div>
        <div class="planet-ring-band front"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-planet-rings')) {
  customElements.define('concept-planet-rings', ConceptPlanetRings);
}
