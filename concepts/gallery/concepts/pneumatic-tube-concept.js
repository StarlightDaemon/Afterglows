const pneumaticStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pnu {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020803;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Clear pneumatic tube pathway SVG */
  .pnu-tube-svg {
    position: absolute;
    inset: 0;
    width: 118px;
    height: 102px;
  }

  /* Suction pressure flow stream arrows */
  .pnu-air-flow {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.6);
    box-shadow: 0 0 3px #8cffaa;
  }

  /* Dispatch / Receiving station hopper */
  .pnu-station {
    position: absolute;
    bottom: 8px;
    right: 12px;
    width: 28px;
    height: 32px;
    background: linear-gradient(180deg, #008818, #011a05);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .pnu-station-door {
    width: 18px;
    height: 18px;
    border: 1px solid #d6ffe0;
    background: #020f04;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pnu-dock-light {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #8cffaa;
    animation: pnu-dock-blink 2.8s ease-in-out infinite;
  }

  @keyframes pnu-dock-blink {
    0%, 70% { opacity: 0.3; }
    80%, 100% { opacity: 1; filter: drop-shadow(0 0 6px #ffffff); }
  }

  /* Traveling cylindrical capsule carrier */
  .pnu-capsule {
    position: absolute;
    width: 22px;
    height: 10px;
    background: linear-gradient(90deg, #d6ffe0, #00aa22 30%, #00aa22 70%, #d6ffe0);
    border: 1px solid #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 8px #8cffaa;
    z-index: 4;
    offset-path: path("M 10 18 L 84 18 C 96 18 96 46 84 46 L 28 46 C 16 46 16 78 28 78 L 92 78");
    animation: pnu-capsule-travel 3.2s cubic-bezier(0.2, 0.7, 0.3, 1) infinite;
  }

  @keyframes pnu-capsule-travel {
    0% { offset-distance: 0%; opacity: 0; }
    5% { opacity: 1; }
    90% { offset-distance: 100%; opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Vacuum pressure gauge */
  .pnu-gauge {
    position: absolute;
    top: 6px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptPneumaticTube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pneumaticStyles}</style>
      <div class="pnu">
        <div class="pnu-gauge">VAC: -18 PSI</div>

        <svg class="pnu-tube-svg" viewBox="0 0 118 102">
          <!-- Glass/brass pneumatic tubing tracks -->
          <path d="M 10 18 L 84 18 C 96 18 96 46 84 46 L 28 46 C 16 46 16 78 28 78 L 92 78" stroke="rgba(140, 255, 170, 0.4)" stroke-width="12" fill="none" stroke-linecap="round" />
          <path d="M 10 18 L 84 18 C 96 18 96 46 84 46 L 28 46 C 16 46 16 78 28 78 L 92 78" stroke="rgba(0, 204, 0, 0.8)" stroke-width="10" fill="none" stroke-linecap="round" />
          <path d="M 10 18 L 84 18 C 96 18 96 46 84 46 L 28 46 C 16 46 16 78 28 78 L 92 78" stroke="#010e04" stroke-width="6" fill="none" stroke-linecap="round" />
        </svg>

        <div class="pnu-capsule"></div>

        <div class="pnu-station">
          <div class="pnu-station-door">
            <div class="pnu-dock-light"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pneumatic-tube')) {
  customElements.define('concept-pneumatic-tube', ConceptPneumaticTube);
}
