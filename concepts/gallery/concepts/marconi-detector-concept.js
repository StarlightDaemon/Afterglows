const marconiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .md-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152220 0%, #030807 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .md-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .md-svg {
    width: 76px;
    height: 72px;
  }

  /* Moving Endless Soft-Iron Wire Rope Loop */
  .md-wire-loop {
    stroke: #cfd8dc;
    stroke-dasharray: 4 2;
    animation: md-wire-flow 2s linear infinite;
  }

  @keyframes md-wire-flow {
    to { stroke-dashoffset: -12; }
  }

  /* Left/Right Driving Pulleys Rotating */
  .md-pulley {
    transform-origin: 20px 36px;
    animation: md-pulley-spin 4s linear infinite;
  }

  .md-pulley-r {
    transform-origin: 56px 36px;
    animation: md-pulley-spin 4s linear infinite;
  }

  @keyframes md-pulley-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* RF Pickup Coil Spark Demodulation Pulse */
  .md-coil-spark {
    fill: #00e5ff;
    animation: md-rf-pulse 1.2s ease-in-out infinite alternate;
  }

  @keyframes md-rf-pulse {
    0% { opacity: 0.3; filter: drop-shadow(0 0 1px #00e676); }
    100% { opacity: 1; filter: drop-shadow(0 0 6px #00e5ff) drop-shadow(0 0 10px #ffd700); }
  }

  .md-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptMarconiDetector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${marconiStyles}</style>
      <div class="md-box">
        <div class="md-stage">
          <svg class="md-svg" viewBox="0 0 76 72">
            <!-- Polished Teak Instrument Base Baseboard -->
            <rect x="8" y="52" width="60" height="12" rx="1.5" fill="#3e2723" stroke="#8d6e63" stroke-width="1" />

            <!-- Left Ebonite Grooved Pulley Wheel (Clockwork driven) -->
            <g class="md-pulley">
              <circle cx="20" cy="36" r="10" fill="#212121" stroke="#4caf50" stroke-width="1" />
              <line x1="20" y1="28" x2="20" y2="44" stroke="#81c784" stroke-width="0.8" />
              <circle cx="20" cy="36" r="2.5" fill="#ffd700" />
            </g>

            <!-- Right Grooved Idler Pulley Wheel -->
            <g class="md-pulley-r">
              <circle cx="56" cy="36" r="10" fill="#212121" stroke="#4caf50" stroke-width="1" />
              <line x1="56" y1="28" x2="56" y2="44" stroke="#81c784" stroke-width="0.8" />
              <circle cx="56" cy="36" r="2.5" fill="#ffd700" />
            </g>

            <!-- Endless Moving Strand of Braided Soft-Iron Wire -->
            <path class="md-wire-loop" d="M 20 26 L 56 26 A 10 10 0 0 1 56 46 L 20 46 A 10 10 0 0 1 20 26 Z" fill="none" stroke-width="1.4" />

            <!-- Dual Permanent Horseshoe Magnets (Opposing poles at center) -->
            <!-- North Magnet (Red) -->
            <path d="M 32 12 L 32 20 L 35 20 L 35 12 Z" fill="#d32f2f" stroke="#ff5252" stroke-width="0.6" />
            <path d="M 41 12 L 41 20 L 44 20 L 44 12 Z" fill="#1976d2" stroke="#448aff" stroke-width="0.6" />
            <path d="M 32 12 Q 38 6 44 12" fill="none" stroke="#cfd8dc" stroke-width="2" />

            <!-- Glass Tube with RF Primary & Audio Secondary Coaxial Solenoids -->
            <rect x="30" y="24" width="16" height="4" rx="1" fill="rgba(0, 229, 255, 0.2)" stroke="#00e5ff" stroke-width="0.8" />
            <!-- Audio Output Spark Demodulation Node (Driving telephone earpiece) -->
            <circle class="md-coil-spark" cx="38" cy="26" r="2.2" />

            <!-- Connecting Terminals for Aerial & Ground -->
            <circle cx="28" cy="54" r="1.5" fill="#ffd700" stroke="#ff8f00" stroke-width="0.6" />
            <circle cx="48" cy="54" r="1.5" fill="#ffd700" stroke="#ff8f00" stroke-width="0.6" />
          </svg>
        </div>
        <div class="md-label">MARCONI DETECTOR</div>
      </div>
    `;
  }
}

customElements.define('concept-marconi-detector', ConceptMarconiDetector);
