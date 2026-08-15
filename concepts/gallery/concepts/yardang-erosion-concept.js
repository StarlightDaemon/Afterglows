const yardangStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .yd-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #2e1d0d 0%, #0d0702 100%);
    border: 1.5px solid rgba(255, 167, 38, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 167, 38, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .yd-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .yd-svg {
    width: 76px;
    height: 72px;
  }

  /* Aeolian Sandblasting Streamlines */
  .yd-wind-stream {
    stroke: #ffcc80;
    stroke-dasharray: 6 4;
    animation: yd-wind-flow 1.2s linear infinite;
  }

  @keyframes yd-wind-flow {
    to { stroke-dashoffset: -20; }
  }

  /* Aerodynamic Bedrock Yardang Ridge */
  .yd-ridge-lit {
    fill: #b5651d;
    stroke: #ff9800;
    stroke-width: 0.8;
  }

  .yd-ridge-shadow {
    fill: #5c2c16;
    stroke: #795548;
    stroke-width: 0.8;
  }

  .yd-saltation-particles circle {
    fill: #ffe082;
    animation: yd-grain-bounce 1s linear infinite;
  }

  .yd-saltation-particles circle:nth-child(2) { animation-delay: 0.3s; }
  .yd-saltation-particles circle:nth-child(3) { animation-delay: 0.6s; }

  @keyframes yd-grain-bounce {
    0% { transform: translate(-10px, 0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translate(20px, 0); opacity: 0; }
  }

  .yd-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 167, 38, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptYardangErosion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${yardangStyles}</style>
      <div class="yd-box">
        <div class="yd-stage">
          <svg class="yd-svg" viewBox="0 0 76 72">
            <!-- Desert Bedrock Floor / Wind Chute Corridor -->
            <rect x="8" y="10" width="60" height="54" fill="rgba(255, 167, 38, 0.05)" />

            <!-- Streamlined Yardang Ridge 1 (Top Background) -->
            <g transform="translate(10, 16)">
              <path class="yd-ridge-lit" d="M 12 6 C 24 2, 42 4, 48 8 L 48 10 L 12 10 Z" />
              <path class="yd-ridge-shadow" d="M 12 10 L 48 10 L 44 14 C 36 15, 20 14, 12 10 Z" />
            </g>

            <!-- Main Central Streamlined Teardrop Keel Yardang Ridge -->
            <g transform="translate(6, 28)">
              <!-- Prow (Blunt windward head facing left wind) & Tapering Leeward Tail -->
              <path class="yd-ridge-lit" d="M 10 12 C 14 2, 34 4, 56 12 L 10 12 Z" />
              <path class="yd-ridge-shadow" d="M 10 12 L 56 12 C 40 18, 20 20, 10 12 Z" />
              <!-- Fluting Scour Grooves -->
              <line x1="18" y1="10" x2="38" y2="10" stroke="#ffd180" stroke-width="0.6" stroke-dasharray="2 1" />
              <line x1="16" y1="14" x2="42" y2="14" stroke="#8d6e63" stroke-width="0.6" stroke-dasharray="2 1" />
            </g>

            <!-- Yardang Ridge 3 (Bottom Foreground) -->
            <g transform="translate(14, 46)">
              <path class="yd-ridge-lit" d="M 8 6 C 18 2, 36 4, 44 8 L 8 8 Z" />
              <path class="yd-ridge-shadow" d="M 8 8 L 44 8 C 36 12, 16 11, 8 8 Z" />
            </g>

            <!-- Sandblasting Wind Streamlines (Left-to-right uni-directional gale) -->
            <line x1="6" y1="20" x2="68" y2="20" class="yd-wind-stream" stroke-width="1" />
            <line x1="6" y1="46" x2="68" y2="46" class="yd-wind-stream" stroke-width="1" />
            <line x1="6" y1="58" x2="68" y2="58" class="yd-wind-stream" stroke-width="1" />

            <!-- Saltating Sand Grains -->
            <g class="yd-saltation-particles">
              <circle cx="20" cy="22" r="0.8" />
              <circle cx="36" cy="48" r="0.8" />
              <circle cx="50" cy="60" r="0.8" />
            </g>
          </svg>
        </div>
        <div class="yd-label">AEOLIAN YARDANG</div>
      </div>
    `;
  }
}

customElements.define('concept-yardang-erosion', ConceptYardangErosion);
