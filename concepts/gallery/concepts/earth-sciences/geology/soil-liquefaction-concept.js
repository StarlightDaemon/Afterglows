const soilLiquefactionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sl-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #2b2210 0%, #0c0903 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 183, 77, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sl-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sl-svg {
    width: 76px;
    height: 72px;
  }

  /* Seismic S-Wave Horizontal Oscillation */
  .sl-seismic-waves path {
    stroke: #ff9800;
    stroke-width: 1;
    fill: none;
    animation: sl-quake 0.6s ease-in-out infinite alternate;
  }

  @keyframes sl-quake {
    0% { transform: translateX(-3px); }
    100% { transform: translateX(3px); }
  }

  /* Tilting / Sinking Surface Structure */
  .sl-building {
    fill: #78909c;
    stroke: #cfd8dc;
    stroke-width: 1;
    animation: sl-sink-tilt 4s ease-in-out infinite alternate;
  }

  @keyframes sl-sink-tilt {
    0% { transform: translate(32px, 20px) rotate(0deg); }
    50% { transform: translate(32px, 24px) rotate(8deg); }
    100% { transform: translate(32px, 28px) rotate(-14deg); }
  }

  /* Sand boil / water geyser eruption from fluid pressure */
  .sl-sand-boil {
    stroke: #4fc3f7;
    stroke-dasharray: 3 2;
    animation: sl-boil-spray 1.2s linear infinite;
  }

  @keyframes sl-boil-spray {
    to { stroke-dashoffset: -10; }
  }

  /* Saturated slurry layer fluid wave */
  .sl-slurry-bed {
    fill: rgba(255, 183, 77, 0.2);
    stroke: #ffb74d;
    stroke-width: 0.8;
    animation: sl-slurry-flow 1.5s ease-in-out infinite alternate;
  }

  @keyframes sl-slurry-flow {
    0% { transform: scaleY(0.95); }
    100% { transform: scaleY(1.05); }
  }

  .sl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSoilLiquefaction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${soilLiquefactionStyles}</style>
      <div class="sl-box">
        <div class="sl-stage">
          <svg class="sl-svg" viewBox="0 0 76 72">
            <!-- Bedrock Base (Rigid solid substrate) -->
            <rect x="8" y="56" width="60" height="10" fill="#3e2723" stroke="#5d4037" stroke-width="1" />

            <!-- Seismic Shear S-Waves passing through bedrock -->
            <g class="sl-seismic-waves">
              <path d="M 12 61 Q 20 58 28 61 T 44 61 T 60 61" />
            </g>

            <!-- Saturated Silt/Sand Layer (Undergoing Liquefaction) -->
            <path class="sl-slurry-bed" d="M 8 36 Q 24 38 38 36 Q 52 34 68 36 L 68 56 L 8 56 Z" />

            <!-- Quicksand Saturated Grain Matrix Dots -->
            <g fill="#ffe082" opacity="0.6">
              <circle cx="16" cy="44" r="1" />
              <circle cx="24" cy="48" r="1.2" />
              <circle cx="52" cy="46" r="1" />
              <circle cx="60" cy="50" r="1.2" />
            </g>

            <!-- Sand Boil Water Volcano Erupting at Surface -->
            <path d="M 20 36 C 21 32, 23 32, 24 36" fill="#8d6e63" />
            <line x1="22" y1="36" x2="22" y2="24" class="sl-sand-boil" stroke-width="1.2" />

            <!-- Sinking & Tilting Building Monolith -->
            <g class="sl-building">
              <rect x="-8" y="-14" width="16" height="24" rx="1" />
              <!-- Window slits -->
              <rect x="-5" y="-10" width="3" height="4" fill="#263238" stroke="none" />
              <rect x="2" y="-10" width="3" height="4" fill="#263238" stroke="none" />
              <rect x="-5" y="-3" width="3" height="4" fill="#263238" stroke="none" />
              <rect x="2" y="-3" width="3" height="4" fill="#263238" stroke="none" />
            </g>
          </svg>
        </div>
        <div class="sl-label">SOIL LIQUEFACTION</div>
      </div>
    `;
  }
}

customElements.define('concept-soil-liquefaction', ConceptSoilLiquefaction);
