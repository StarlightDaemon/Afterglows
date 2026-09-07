const intaglioCopperStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ic-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #261b17 0%, #080403 100%);
    border: 1.5px solid rgba(255, 112, 67, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 112, 67, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ic-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ic-svg {
    width: 76px;
    height: 72px;
  }

  /* Steel upper cylinder roller high-pressure rolling rotation */
  .ic-cylinder-roll {
    transform-origin: 38px 28px;
    animation: ic-spin-roll 2.6s linear infinite;
  }

  @keyframes ic-spin-roll {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Spoked star wheel hand drive turn */
  .ic-star-wheel {
    transform-origin: 60px 28px;
    animation: ic-star-spin 2.6s linear infinite;
  }

  @keyframes ic-star-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Polished copper plate traveling under woolen felts blankets */
  .ic-copper-bed {
    animation: ic-bed-traverse 2.6s ease-in-out infinite alternate;
  }

  @keyframes ic-bed-traverse {
    0% { transform: translateX(-8px); }
    100% { transform: translateX(8px); }
  }

  /* Deep intaglio incised engraved copper line glint */
  .ic-engraved-lines {
    animation: ic-line-gleam 1.4s ease-in-out infinite alternate;
  }

  @keyframes ic-line-gleam {
    0% { stroke: #ff7043; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #ff5722); }
  }

  .ic-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 112, 67, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptIntaglioCopperplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${intaglioCopperStyles}</style>
      <div class="ic-box">
        <div class="ic-stage">
          <svg class="ic-svg" viewBox="0 0 76 72">
            <!-- Intaglio Copperplate Etching Press (Rolling Press / Taille-Douce) -->
            <!-- Heavy Cast Iron Side Frames & Regulating Pressure Screws -->
            <rect x="14" y="16" width="6" height="44" fill="#37474f" stroke="#546e7a" stroke-width="0.8" />
            <rect x="56" y="16" width="6" height="44" fill="#37474f" stroke="#546e7a" stroke-width="0.8" />
            <!-- Pressure Calibrating Screws at Top -->
            <rect x="15.5" y="10" width="3" height="6" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            <rect x="57.5" y="10" width="3" height="6" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

            <!-- Upper Solid Steel Rolling Cylinder (High pressure roller) -->
            <g class="ic-cylinder-roll">
              <circle cx="38" cy="28" r="9" fill="#263238" stroke="#cfd8dc" stroke-width="1.2" />
              <line x1="29" y1="28" x2="47" y2="28" stroke="#78909c" stroke-width="0.8" />
              <line x1="38" y1="19" x2="38" y2="37" stroke="#78909c" stroke-width="0.8" />
            </g>

            <!-- Lower Steel Supporting Roller -->
            <circle cx="38" cy="46" r="7" fill="#212121" stroke="#546e7a" stroke-width="0.8" />

            <!-- Traveling Steel Plank Bed with Etched Copper Plate & Wool Blankets -->
            <g class="ic-copper-bed">
              <!-- Bed Plate Plank -->
              <rect x="10" y="36" width="56" height="4" rx="0.5" fill="#455a64" stroke="#78909c" stroke-width="0.6" />

              <!-- Polished Incised Copper Etching Plate -->
              <rect x="22" y="34" width="32" height="2" fill="#d84315" stroke="#ff7043" stroke-width="0.5" />

              <!-- Micro-Incised Intaglio Grooves Filled with Dense Black Ink -->
              <g class="ic-engraved-lines">
                <line x1="26" y1="34" x2="26" y2="36" stroke-width="0.8" />
                <line x1="30" y1="34" x2="30" y2="36" stroke-width="0.8" />
                <line x1="34" y1="34" x2="34" y2="36" stroke-width="0.8" />
                <line x1="38" y1="34" x2="38" y2="36" stroke-width="0.8" />
                <line x1="42" y1="34" x2="42" y2="36" stroke-width="0.8" />
                <line x1="46" y1="34" x2="46" y2="36" stroke-width="0.8" />
                <line x1="50" y1="34" x2="50" y2="36" stroke-width="0.8" />
              </g>

              <!-- Heavy Woven Felt Blanket (Pushes damp paper into incised lines) -->
              <rect x="20" y="32" width="36" height="2" fill="#d7ccc8" stroke="#efebe9" stroke-width="0.4" />
            </g>

            <!-- Spoked Driving Star-Wheel (Cross Handles) at Right -->
            <g class="ic-star-wheel">
              <line x1="60" y1="14" x2="60" y2="42" stroke="#ffd700" stroke-width="1.4" stroke-linecap="round" />
              <line x1="46" y1="28" x2="74" y2="28" stroke="#ffd700" stroke-width="1.4" stroke-linecap="round" />
              <circle cx="60" cy="28" r="2.5" fill="#ffb300" />
            </g>
          </svg>
        </div>
        <div class="ic-label">INTAGLIO COPPERPLATE</div>
      </div>
    `;
  }
}

customElements.define('concept-intaglio-copperplate', ConceptIntaglioCopperplate);
