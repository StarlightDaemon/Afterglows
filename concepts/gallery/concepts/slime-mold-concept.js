const slimeMoldStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .slm {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #111403 0%, #030400 100%);
    border: 1.5px solid rgba(200, 255, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(200, 255, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Agar petri dish substrate */
  .slm-petri {
    position: absolute;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    border: 1.5px solid rgba(170, 255, 0, 0.3);
    background: radial-gradient(circle at 50% 50%, rgba(170, 255, 0, 0.05), transparent 70%);
  }

  /* Nutrient oat flake food nodes */
  .slm-food-node {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #aaff00;
    box-shadow: 0 0 8px #d4ff00;
    z-index: 6;
  }

  .fn1 { top: 22px; left: 24px; }
  .fn2 { top: 18px; right: 28px; }
  .fn3 { bottom: 22px; right: 24px; }
  .fn4 { bottom: 26px; left: 30px; }

  /* Pulsing cytoplasmic plasmodium network SVG */
  .slm-network-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .slm-main-vein {
    fill: none;
    stroke: #d4ff00;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: drop-shadow(0 0 4px #aaff00);
    animation: slm-pulse 2.5s ease-in-out infinite alternate;
  }

  .slm-branch-vein {
    fill: none;
    stroke: rgba(170, 255, 0, 0.6);
    stroke-width: 1.2;
    stroke-linecap: round;
    stroke-dasharray: 4 2;
    animation: slm-stream 1.5s linear infinite;
  }

  @keyframes slm-pulse {
    0% { stroke-width: 1.8; filter: drop-shadow(0 0 2px #aaff00); }
    100% { stroke-width: 3; filter: drop-shadow(0 0 8px #ffffff); }
  }

  @keyframes slm-stream {
    to { stroke-dashoffset: -12; }
  }

  /* Pseudopod exploratory front fans */
  .slm-fan {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 255, 0, 0.4) 0%, transparent 80%);
    animation: slm-fan-expand 3s ease-in-out infinite alternate;
  }

  .fa1 { top: 16px; left: 52px; }
  .fa2 { bottom: 32px; right: 48px; }

  @keyframes slm-fan-expand {
    0% { transform: scale(0.6); opacity: 0.3; }
    100% { transform: scale(1.4); opacity: 0.9; }
  }

  .slm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(212, 255, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSlimeMold extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${slimeMoldStyles}</style>
      <div class="slm">
        <div class="slm-petri"></div>

        <div class="slm-fan fa1"></div>
        <div class="slm-fan fa2"></div>

        <svg class="slm-network-svg" viewBox="0 0 118 102">
          <!-- Optimal foraging network interconnects -->
          <path class="slm-main-vein" d="M 28 26 Q 59 18 86 22 Q 88 50 90 76 Q 59 70 34 72 Q 26 50 28 26" />
          <path class="slm-main-vein" d="M 28 26 Q 59 50 90 76" />
          <path class="slm-branch-vein" d="M 86 22 Q 59 50 34 72" />
          <!-- Exploratory branching dendritic tendrils -->
          <path class="slm-branch-vein" d="M 59 18 Q 59 8 54 4" />
          <path class="slm-branch-vein" d="M 90 76 Q 104 84 110 88" />
          <path class="slm-branch-vein" d="M 34 72 Q 18 84 10 90" />
        </svg>

        <div class="slm-food-node fn1"></div>
        <div class="slm-food-node fn2"></div>
        <div class="slm-food-node fn3"></div>
        <div class="slm-food-node fn4"></div>

        <div class="slm-label">PHYSARUM SLIME NETWORK</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-slime-mold')) {
  customElements.define('concept-slime-mold', ConceptSlimeMold);
}
