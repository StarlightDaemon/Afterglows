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

  /* Traveling cytoplasmic shuttle streaming packets */
  .slm-shuttle-spark {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #d4ff00;
    z-index: 7;
    animation: slm-shuttle-flow 2.4s ease-in-out infinite alternate;
  }

  .spk1 {
    offset-path: path("M 28 26 Q 59 18 86 22");
    animation-delay: 0s;
  }

  .spk2 {
    offset-path: path("M 28 26 Q 59 50 90 76");
    animation-delay: 0.8s;
  }

  @keyframes slm-shuttle-flow {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

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
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: drop-shadow(0 0 4px #aaff00);
    animation: slm-vein-dilate 1.8s ease-in-out infinite alternate;
  }

  @keyframes slm-vein-dilate {
    0% { stroke-width: 1.8; }
    100% { stroke-width: 3.4; filter: drop-shadow(0 0 8px #ffffff); }
  }

  .slm-branch-vein {
    fill: none;
    stroke: rgba(170, 255, 0, 0.7);
    stroke-width: 1.4;
    stroke-linecap: round;
  }

  /* Pseudopod exploratory front fans expanding and retracting */
  .slm-fan {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 255, 0, 0.5) 0%, transparent 80%);
    animation: slm-fan-expand 2.6s ease-in-out infinite alternate;
  }

  .fa1 { top: 14px; left: 50px; }
  .fa2 { bottom: 30px; right: 46px; animation-delay: 1.3s; }

  @keyframes slm-fan-expand {
    0% { transform: scale(0.5); opacity: 0.3; }
    100% { transform: scale(1.6); opacity: 1; filter: drop-shadow(0 0 6px #d4ff00); }
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

        <div class="slm-shuttle-spark spk1"></div>
        <div class="slm-shuttle-spark spk2"></div>

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
