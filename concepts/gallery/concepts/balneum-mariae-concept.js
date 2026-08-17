const balneumMariaeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bm-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 70%, #0d1e2d 0%, #03080e 100%);
    border: 1.5px solid rgba(79, 195, 247, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(79, 195, 247, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bm-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bm-svg {
    width: 76px;
    height: 72px;
  }

  /* Boiling water convection bath */
  .bm-water-bath {
    fill: rgba(3, 169, 244, 0.22);
    stroke: #29b6f6;
    stroke-width: 1;
    animation: bm-simmer 1.6s ease-in-out infinite alternate;
  }

  @keyframes bm-simmer {
    0% { transform: scaleY(0.96); }
    100% { transform: scaleY(1.04); }
  }

  /* Distillate droplets falling from alembic beaks into receivers */
  .bm-drop {
    fill: #ffffff;
    filter: drop-shadow(0 0 3px #4fc3f7);
  }

  .bm-dl1 { animation: bm-drip-fall 1.8s ease-in infinite; }
  .bm-dl2 { animation: bm-drip-fall 1.8s ease-in infinite; animation-delay: 0.9s; }
  .bm-dr1 { animation: bm-drip-fall 1.8s ease-in infinite; animation-delay: 0.45s; }
  .bm-dr2 { animation: bm-drip-fall 1.8s ease-in infinite; animation-delay: 1.35s; }

  @keyframes bm-drip-fall {
    0% { transform: translateY(0) scale(0.6); opacity: 0; }
    20% { opacity: 1; transform: translateY(2px) scale(1); }
    80% { opacity: 1; }
    100% { transform: translateY(16px) scale(0.8); opacity: 0; }
  }

  /* Convection bubbles rising in water bath */
  .bm-bubble {
    fill: #81d4fa;
    opacity: 0.8;
  }

  .b1 { animation: bm-bubble-rise 2s linear infinite; }
  .b2 { animation: bm-bubble-rise 2s linear infinite; animation-delay: 0.7s; }
  .b3 { animation: bm-bubble-rise 2s linear infinite; animation-delay: 1.4s; }

  @keyframes bm-bubble-rise {
    0% { transform: translateY(0); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.8; }
    100% { transform: translateY(-16px); opacity: 0; }
  }

  /* Gentle flame underneath */
  .bm-flame {
    fill: #ffb74d;
    transform-origin: center;
    animation: bm-heat 0.8s ease-in-out infinite alternate;
  }

  @keyframes bm-heat {
    0% { transform: scale(0.85) scaleY(0.8); opacity: 0.7; }
    100% { transform: scale(1.15) scaleY(1.2); opacity: 1; filter: drop-shadow(0 0 5px #ff9800); }
  }

  .bm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(79, 195, 247, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBalneumMariae extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${balneumMariaeStyles}</style>
      <div class="bm-box">
        <div class="bm-stage">
          <svg class="bm-svg" viewBox="0 0 76 72">
            <!-- Lamp / Heat Source -->
            <g transform="translate(38, 64)">
              <ellipse class="bm-flame" cx="0" cy="0" rx="10" ry="3" />
            </g>

            <!-- Outer Water Bath Cauldron Vessel -->
            <path d="M 16 40 L 16 56 C 16 62, 60 62, 60 56 L 60 40 Z" fill="#263238" stroke="#78909c" stroke-width="1.2" />
            <path class="bm-water-bath" d="M 18 42 C 28 40, 48 40, 58 42 L 58 55 C 58 59, 18 59, 18 55 Z" />

            <!-- Rising Convection Bubbles -->
            <circle class="bm-bubble b1" cx="34" cy="56" r="1.5" />
            <circle class="bm-bubble b2" cx="42" cy="57" r="1.8" />
            <circle class="bm-bubble b3" cx="38" cy="55" r="1.3" />

            <!-- Left Distillation Cucurbit & Alembic Arm -->
            <path d="M 24 24 L 28 24 L 28 36 C 33 39, 33 49, 28 52 C 23 52, 23 39, 28 36 L 24 36 Z" 
                  fill="rgba(79, 195, 247, 0.08)" stroke="#4fc3f7" stroke-width="1" />
            <!-- Left Alembic Beak Spout -->
            <path d="M 28 24 Q 22 24 14 36" fill="none" stroke="#4fc3f7" stroke-width="1.2" />
            <!-- Left Receiver Vial -->
            <path d="M 11 48 L 17 48 L 17 56 C 17 58, 11 58, 11 56 Z" fill="rgba(79, 195, 247, 0.2)" stroke="#4fc3f7" stroke-width="0.8" />
            <!-- Left Falling Droplets -->
            <circle class="bm-drop bm-dl1" cx="14" cy="37" r="1.5" />
            <circle class="bm-drop bm-dl2" cx="14" cy="37" r="1.3" />

            <!-- Right Distillation Cucurbit & Alembic Arm -->
            <path d="M 48 24 L 52 24 L 52 36 C 57 39, 57 49, 52 52 C 47 52, 47 39, 52 36 L 48 36 Z" 
                  fill="rgba(79, 195, 247, 0.08)" stroke="#4fc3f7" stroke-width="1" />
            <!-- Right Alembic Beak Spout -->
            <path d="M 48 24 Q 54 24 62 36" fill="none" stroke="#4fc3f7" stroke-width="1.2" />
            <!-- Right Receiver Vial -->
            <path d="M 59 48 L 65 48 L 65 56 C 65 58, 59 58, 59 56 Z" fill="rgba(79, 195, 247, 0.2)" stroke="#4fc3f7" stroke-width="0.8" />
            <!-- Right Falling Droplets -->
            <circle class="bm-drop bm-dr1" cx="62" cy="37" r="1.5" />
            <circle class="bm-drop bm-dr2" cx="62" cy="37" r="1.3" />
          </svg>
        </div>
        <div class="bm-label">BALNEUM MARIAE</div>
      </div>
    `;
  }
}

customElements.define('concept-balneum-mariae', ConceptBalneumMariae);
