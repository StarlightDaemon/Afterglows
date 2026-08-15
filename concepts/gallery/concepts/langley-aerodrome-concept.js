const langleyAerodromeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .la-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151e24 0%, #030608 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .la-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .la-svg {
    width: 76px;
    height: 72px;
  }

  /* Tandem wing aerodynamic flight path */
  .la-aerodrome-body {
    animation: la-tandem-fly 3.6s ease-in-out infinite alternate;
    transform-origin: 38px 32px;
  }

  @keyframes la-tandem-fly {
    0% { transform: translateY(-4px) rotate(-3deg); }
    100% { transform: translateY(3px) rotate(3deg); }
  }

  /* Counter-rotating twin pusher propellers */
  .la-prop-left {
    transform-origin: 34px 34px;
    animation: la-prop-spin 0.3s linear infinite;
  }

  .la-prop-right {
    transform-origin: 42px 34px;
    animation: la-prop-spin 0.3s linear infinite reverse;
  }

  @keyframes la-prop-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Houseboat spring catapult launch track */
  .la-launch-rail {
    stroke: #78909c;
    stroke-dasharray: 3 1.5;
  }

  .la-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLangleyAerodrome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${langleyAerodromeStyles}</style>
      <div class="la-box">
        <div class="la-stage">
          <svg class="la-svg" viewBox="0 0 76 72">
            <!-- Potomac River Houseboat Catapult Launch Rail (Bottom) -->
            <rect x="8" y="60" width="60" height="4" rx="1" fill="#37474f" stroke="#546e7a" stroke-width="0.6" />
            <line class="la-launch-rail" x1="10" y1="58" x2="66" y2="58" stroke-width="0.8" />

            <!-- Langley Great Aerodrome Tandem Monoplane Assembly -->
            <g class="la-aerodrome-body">
              <!-- Steel Tubing Longitudinal Spine Fuselage -->
              <line x1="8" y1="32" x2="68" y2="32" stroke="#b0bec5" stroke-width="1.4" />

              <!-- Forward Dihedral Tandem Wing Set (Front / Right) -->
              <!-- Upper & Lower Cambered Wing Planes (Tandem Wing 1) -->
              <path d="M 44 32 L 56 16 L 66 32 L 56 28 Z" fill="#e0f7fa" stroke="#00e5ff" stroke-width="0.8" />
              <line x1="56" y1="16" x2="56" y2="32" stroke="#ffd700" stroke-width="0.8" />

              <!-- Aft Dihedral Tandem Wing Set (Rear / Left) -->
              <path d="M 12 32 L 24 16 L 34 32 L 24 28 Z" fill="#e0f7fa" stroke="#00e5ff" stroke-width="0.8" />
              <line x1="24" y1="16" x2="24" y2="32" stroke="#ffd700" stroke-width="0.8" />

              <!-- Manly-Balzer 52-HP 5-Cylinder Radial Engine Core (Mid-fuselage) -->
              <circle cx="38" cy="32" r="3.5" fill="#263238" stroke="#ffb300" stroke-width="0.8" />
              <circle cx="38" cy="32" r="1.5" fill="#ff5722" />

              <!-- Counter-Rotating Twin Pusher Propellers (Bevel gear driven) -->
              <g class="la-prop-left">
                <line x1="34" y1="26" x2="34" y2="40" stroke="#ffd700" stroke-width="1.2" stroke-linecap="round" />
              </g>
              <g class="la-prop-right">
                <line x1="42" y1="26" x2="42" y2="40" stroke="#ffd700" stroke-width="1.2" stroke-linecap="round" />
              </g>

              <!-- Pénaud Tail & Cruciform Stabilizer (Far Left / Stern) -->
              <polygon points="6,32 10,24 14,32" fill="#80deea" stroke="#00acc1" stroke-width="0.5" />
              <polygon points="6,32 10,40 14,32" fill="#80deea" stroke="#00acc1" stroke-width="0.5" />
            </g>
          </svg>
        </div>
        <div class="la-label">LANGLEY AERODROME</div>
      </div>
    `;
  }
}

customElements.define('concept-langley-aerodrome', ConceptLangleyAerodrome);
