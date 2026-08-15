const vergeFoliotStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vf-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a14 0%, #080604 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 171, 64, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vf-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vf-svg {
    width: 76px;
    height: 72px;
  }

  /* Horizontal Foliot Bar Oscillation with Adjustable Hang-Weights */
  .vf-foliot-bar {
    transform-origin: 38px 12px;
    animation: vf-foliot-swing 2s ease-in-out infinite alternate;
  }

  @keyframes vf-foliot-swing {
    0% { transform: rotate(-20deg); }
    100% { transform: rotate(20deg); }
  }

  /* Vertical Verge Spindle with Pallet Flags */
  .vf-verge-spindle {
    transform-origin: 38px 36px;
    animation: vf-verge-twist 2s ease-in-out infinite alternate;
  }

  @keyframes vf-verge-twist {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  /* Stepping Crown Wheel (Sawtooth contrate wheel) */
  .vf-crown-wheel {
    animation: vf-crown-step 2s steps(6, end) infinite;
  }

  @keyframes vf-crown-step {
    0% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
    100% { transform: translateY(0); }
  }

  .vf-iron-frame {
    fill: #3e2723;
    stroke: #ffb74d;
    stroke-width: 1;
  }

  .vf-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptVergeFoliot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vergeFoliotStyles}</style>
      <div class="vf-box">
        <div class="vf-stage">
          <svg class="vf-svg" viewBox="0 0 76 72">
            <!-- Medieval Wrought Iron Clock Post Frame -->
            <line x1="16" y1="8" x2="16" y2="64" stroke="#5d4037" stroke-width="1.5" />
            <line x1="60" y1="8" x2="60" y2="64" stroke="#5d4037" stroke-width="1.5" />
            <line x1="12" y1="64" x2="64" y2="64" stroke="#5d4037" stroke-width="2" />

            <!-- Horizontal Foliot Bar (Top oscillating balance crossbar) -->
            <g class="vf-foliot-bar">
              <line x1="10" y1="12" x2="66" y2="12" stroke="#ffb74d" stroke-width="2" stroke-linecap="round" />
              <!-- Notched Weight Brackets -->
              <line x1="14" y1="10" x2="14" y2="14" stroke="#ffd54f" stroke-width="0.8" />
              <line x1="20" y1="10" x2="20" y2="14" stroke="#ffd54f" stroke-width="0.8" />
              <line x1="56" y1="10" x2="56" y2="14" stroke="#ffd54f" stroke-width="0.8" />
              <line x1="62" y1="10" x2="62" y2="14" stroke="#ffd54f" stroke-width="0.8" />
              <!-- Left Suspended Regulating Weight (Regulateur) -->
              <rect x="18" y="14" width="4" height="6" fill="#8d6e63" stroke="#ffd54f" stroke-width="0.6" rx="0.5" />
              <!-- Right Suspended Regulating Weight -->
              <rect x="54" y="14" width="4" height="6" fill="#8d6e63" stroke="#ffd54f" stroke-width="0.6" rx="0.5" />
            </g>

            <!-- Vertical Verge Arbor (Spindle with upper & lower pallet flags) -->
            <g class="vf-verge-spindle">
              <line x1="38" y1="12" x2="38" y2="60" stroke="#cfd8dc" stroke-width="1.8" />
              <!-- Upper Pallet Flag (Engaging top of crown wheel) -->
              <polygon points="38,26 44,28 38,30" fill="#ffd700" stroke="#ff8f00" stroke-width="0.6" />
              <!-- Lower Pallet Flag (Engaging bottom of crown wheel at 90°/180° offset) -->
              <polygon points="38,48 32,50 38,52" fill="#ffd700" stroke="#ff8f00" stroke-width="0.6" />
            </g>

            <!-- Horizontal Crown Wheel (Contrate wheel with triangular saw-teeth) -->
            <g class="vf-crown-wheel" transform="translate(18, 32)">
              <!-- Wheel Rim -->
              <rect x="0" y="4" width="40" height="4" fill="#4e342e" stroke="#ffb74d" stroke-width="0.8" />
              <!-- Upright Triangular Saw-Teeth on Wheel Face -->
              <polygon points="2,4 4,-4 8,4" fill="#ffd54f" />
              <polygon points="12,4 14,-4 18,4" fill="#ffd54f" />
              <polygon points="22,4 24,-4 28,4" fill="#ffd54f" />
              <polygon points="32,4 34,-4 38,4" fill="#ffd54f" />
            </g>

            <!-- Bottom Pivot Foot Bearing Bracket (Cock) -->
            <rect x="34" y="58" width="8" height="4" fill="#5d4037" stroke="#ffb74d" stroke-width="0.8" />
            <circle cx="38" cy="60" r="1.5" fill="#ffd700" />
          </svg>
        </div>
        <div class="vf-label">VERGE & FOLIOT</div>
      </div>
    `;
  }
}

customElements.define('concept-verge-foliot', ConceptVergeFoliot);
