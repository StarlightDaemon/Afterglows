const invarBaselineStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ib-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151d26 0%, #03060a 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ib-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ib-svg {
    width: 76px;
    height: 72px;
  }

  /* Suspended Catenary Invar Ribbon Tape Gentle Oscillation */
  .ib-invar-wire {
    animation: ib-catenary-sway 2.6s ease-in-out infinite alternate;
  }

  @keyframes ib-catenary-sway {
    0% { d: path("M 10 32 Q 38 37 66 32"); stroke: #00e5ff; }
    100% { d: path("M 10 32 Q 38 35.5 66 32"); stroke: #ffffff; filter: drop-shadow(0 0 2px #00e5ff); }
  }

  /* Calibrated 10kg Tension Weights Bobbing */
  .ib-tension-weight-left {
    animation: ib-weight-bob 2.6s ease-in-out infinite alternate;
  }

  .ib-tension-weight-right {
    animation: ib-weight-bob 2.6s ease-in-out infinite alternate 1.3s;
  }

  @keyframes ib-weight-bob {
    0% { transform: translateY(0); }
    100% { transform: translateY(1.2px); }
  }

  /* Optical reading aligning microscope indicator */
  .ib-microscope-reticle {
    animation: ib-reticle-pulse 1.4s ease-in-out infinite alternate;
  }

  @keyframes ib-reticle-pulse {
    0% { stroke: #ffd700; opacity: 0.6; }
    100% { stroke: #ffff00; opacity: 1; filter: drop-shadow(0 0 2px #ffd700); }
  }

  .ib-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptInvarBaseline extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${invarBaselineStyles}</style>
      <div class="ib-box">
        <div class="ib-stage">
          <svg class="ib-svg" viewBox="0 0 76 72">
            <!-- Ground Baseline Survey Alignment Plane -->
            <line x1="4" y1="58" x2="72" y2="58" stroke="#37474f" stroke-width="0.8" />

            <!-- Left Strainer Straining Tripod & Pulley Head -->
            <polygon points="10,32 4,58 7,58 10,35 13,58 16,58" fill="#263238" stroke="#455a64" stroke-width="0.5" />
            <circle cx="10" cy="32" r="2.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />

            <!-- Right Strainer Straining Tripod & Pulley Head -->
            <polygon points="66,32 60,58 63,58 66,35 69,58 72,58" fill="#263238" stroke="#455a64" stroke-width="0.5" />
            <circle cx="66" cy="32" r="2.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />

            <!-- Left Hanging 10kg Certified Tension Weight -->
            <g class="ib-tension-weight-left">
              <line x1="10" y1="32" x2="8" y2="44" stroke="#cfd8dc" stroke-width="0.8" />
              <rect x="5" y="44" width="6" height="8" rx="1" fill="#37474f" stroke="#78909c" stroke-width="0.6" />
              <text x="8" y="50" font-family="sans-serif" font-size="3" fill="#ffffff" text-anchor="middle">10k</text>
            </g>

            <!-- Right Hanging 10kg Certified Tension Weight -->
            <g class="ib-tension-weight-right">
              <line x1="66" y1="32" x2="68" y2="44" stroke="#cfd8dc" stroke-width="0.8" />
              <rect x="65" y="44" width="6" height="8" rx="1" fill="#37474f" stroke="#78909c" stroke-width="0.6" />
              <text x="68" y="50" font-family="sans-serif" font-size="3" fill="#ffffff" text-anchor="middle">10k</text>
            </g>

            <!-- 24-Meter Nickel-Steel Invar Catenary Ribbon Wire Span -->
            <path class="ib-invar-wire" d="M 10 32 Q 38 37 66 32" fill="none" stroke-width="1.4" />

            <!-- Center Geodetic Aligning Microscope Stand & Fiducial Reglet Mark -->
            <rect x="36" y="42" width="4" height="16" fill="#1b2838" stroke="#546e7a" stroke-width="0.6" />
            <g class="ib-microscope-reticle">
              <circle cx="38" cy="36" r="4.5" fill="none" stroke-width="0.8" />
              <line x1="38" y1="30" x2="38" y2="42" stroke-width="0.6" />
              <line x1="32" y1="36" x2="44" y2="36" stroke-width="0.6" />
            </g>

            <!-- Invar Zero-Expansion Coefficient Equation Banner -->
            <text x="38" y="20" font-family="monospace" font-size="3.2" fill="#80d8ff" text-anchor="middle">INVAR α = 1.2×10⁻⁶/K</text>
          </svg>
        </div>
        <div class="ib-label">INVAR BASELINE</div>
      </div>
    `;
  }
}

customElements.define('concept-invar-baseline', ConceptInvarBaseline);
