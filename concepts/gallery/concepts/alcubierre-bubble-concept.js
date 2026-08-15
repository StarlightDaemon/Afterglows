const alcubierreStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ab-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d061c 0%, #030108 100%);
    border: 1.5px solid rgba(186, 104, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(186, 104, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ab-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Spacetime metric compression & expansion grid */
  .ab-grid-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Exotic negative energy warp ring */
  .ab-ring {
    position: absolute;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 2px solid #00ffff;
    box-shadow: 0 0 10px #00ffff, inset 0 0 10px #d500f9;
    animation: ab-ring-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes ab-ring-pulse {
    0% { transform: scale(0.92) rotate(0deg); opacity: 0.8; }
    100% { transform: scale(1.08) rotate(180deg); opacity: 1; }
  }

  /* Flat spacetime central oasis with starship */
  .ab-ship {
    position: absolute;
    width: 16px;
    height: 10px;
    background: #ffffff;
    clip-path: polygon(100% 50%, 0% 0%, 25% 50%, 0% 100%);
    box-shadow: 0 0 6px #ffffff;
    z-index: 5;
  }

  /* Forward spacetime contraction waves */
  .ab-contract-wave {
    stroke: #00e5ff;
    stroke-dasharray: 4 2;
    animation: ab-contract 1.2s linear infinite;
  }

  @keyframes ab-contract {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(-16px); opacity: 0.2; }
  }

  /* Rear spacetime expansion waves */
  .ab-expand-wave {
    stroke: #ff1744;
    stroke-dasharray: 6 3;
    animation: ab-expand 1.2s linear infinite;
  }

  @keyframes ab-expand {
    0% { transform: translateX(0); opacity: 0.2; }
    100% { transform: translateX(16px); opacity: 1; }
  }

  .ab-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(186, 104, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAlcubierreBubble extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${alcubierreStyles}</style>
      <div class="ab-box">
        <div class="ab-stage">
          <svg class="ab-grid-svg" viewBox="0 0 96 76">
            <!-- Contracting Spacetime Ahead (Right) -->
            <path class="ab-contract-wave" d="M 68 15 Q 55 38 68 61" fill="none" stroke-width="1.5" />
            <path class="ab-contract-wave" d="M 78 10 Q 60 38 78 66" fill="none" stroke-width="1.5" />
            <path class="ab-contract-wave" d="M 88 5 Q 65 38 88 71" fill="none" stroke-width="1.5" />

            <!-- Expanding Spacetime Behind (Left) -->
            <path class="ab-expand-wave" d="M 28 15 Q 41 38 28 61" fill="none" stroke-width="1.5" />
            <path class="ab-expand-wave" d="M 18 10 Q 36 38 18 66" fill="none" stroke-width="1.5" />
            <path class="ab-expand-wave" d="M 8 5 Q 31 38 8 71" fill="none" stroke-width="1.5" />
          </svg>

          <div class="ab-ring"></div>
          <div class="ab-ship"></div>
        </div>

        <div class="ab-label">ALCUBIERRE METRIC</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-alcubierre-bubble')) {
  customElements.define('concept-alcubierre-bubble', ConceptAlcubierreBubble);
}
