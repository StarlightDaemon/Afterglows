const linotypeElevatorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .le-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a1e26 0%, #040609 100%);
    border: 1.5px solid rgba(100, 181, 246, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(100, 181, 246, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .le-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .le-svg {
    width: 76px;
    height: 72px;
  }

  /* Second elevator arm lifting assembled line of brass matrices to distributor bar */
  .le-elevator-arm {
    animation: le-elevator-lift 3.4s ease-in-out infinite alternate;
  }

  @keyframes le-elevator-lift {
    0% { transform: translateY(0); }
    50% { transform: translateY(-16px); }
    100% { transform: translateY(0); }
  }

  /* V-notched brass matrix teeth distributing into magazine channels */
  .le-matrix-teeth {
    animation: le-matrix-gleam 1.8s ease-in-out infinite alternate;
  }

  @keyframes le-matrix-gleam {
    0% { stroke: #ffd700; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #ffd700); }
  }

  /* Molten lead casting pot plunger squirt */
  .le-casting-pot {
    animation: le-plunger-pump 1.7s ease-in-out infinite alternate;
    transform-origin: 24px 50px;
  }

  @keyframes le-plunger-pump {
    0% { transform: translateY(0); }
    100% { transform: translateY(2px); }
  }

  /* Newly cast lead slug line-o'-type ejection */
  .le-lead-slug {
    animation: le-slug-glow 1.7s ease-in-out infinite alternate;
  }

  @keyframes le-slug-glow {
    0% { fill: #cfd8dc; }
    100% { fill: #ff7043; filter: drop-shadow(0 0 3px #ff5722); }
  }

  .le-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(100, 181, 246, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLinotypeElevator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${linotypeElevatorStyles}</style>
      <div class="le-box">
        <div class="le-stage">
          <svg class="le-svg" viewBox="0 0 76 72">
            <!-- Cast Iron Linotype Machine Frame & Distributor Beam (Top) -->
            <rect x="8" y="8" width="60" height="5" rx="1" fill="#263238" stroke="#455a64" stroke-width="0.8" />

            <!-- Rotating Distributor Screws & Combination Bar (Binary Tooth Notches) -->
            <line class="le-matrix-teeth" x1="12" y1="10.5" x2="64" y2="10.5" stroke-width="1.2" stroke-dasharray="2 1" />

            <!-- Inclined Brass Matrix Magazine Channels (Top Right) -->
            <polygon points="44,14 66,14 62,32 40,32" fill="#1b2838" stroke="#90caf9" stroke-width="0.6" />
            <line x1="48" y1="14" x2="44" y2="32" stroke="#64b5f6" stroke-width="0.5" stroke-dasharray="1 1" />
            <line x1="54" y1="14" x2="50" y2="32" stroke="#64b5f6" stroke-width="0.5" stroke-dasharray="1 1" />
            <line x1="60" y1="14" x2="56" y2="32" stroke="#64b5f6" stroke-width="0.5" stroke-dasharray="1 1" />

            <!-- Second Elevator Vertical Arm & Matrix Carrier Jaw -->
            <g class="le-elevator-arm">
              <!-- Heavy vertical lifting slide rail -->
              <rect x="28" y="24" width="4" height="26" fill="#37474f" stroke="#78909c" stroke-width="0.5" />
              <!-- Upper Matrix Gripper Jaws -->
              <rect x="24" y="22" width="12" height="4" rx="0.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

              <!-- Assembled Line of Brass Character Matrices & Steel Spacebands -->
              <g transform="translate(25, 23)">
                <rect x="0" y="0" width="1.8" height="2.5" fill="#ffca28" />
                <rect x="2.2" y="0" width="1.8" height="2.5" fill="#ffca28" />
                <!-- Sliding wedge steel spaceband -->
                <line x1="4.4" y1="-1" x2="4.4" y2="4" stroke="#ffffff" stroke-width="0.6" />
                <rect x="5.2" y="0" width="1.8" height="2.5" fill="#ffca28" />
                <rect x="7.4" y="0" width="1.8" height="2.5" fill="#ffca28" />
              </g>
            </g>

            <!-- Molten Type-Metal Casting Pot (Lead/Antimony/Tin at 550°F) -->
            <g class="le-casting-pot">
              <rect x="12" y="44" width="18" height="14" rx="1.5" fill="#1e293b" stroke="#ff7043" stroke-width="0.8" />
              <!-- Pump Plunger -->
              <rect x="18" y="38" width="4" height="8" fill="#78909c" stroke="#cfd8dc" stroke-width="0.5" />
              <!-- Molten Metal Throat Jet Port -->
              <circle cx="28" cy="48" r="1.5" fill="#ff5722" filter="drop-shadow(0 0 2px #ff5722)" />
            </g>

            <!-- Mold Disk Wheel & Newly Cast Solid Lead Type Slug (Line-o'-Type) -->
            <circle cx="48" cy="50" r="10" fill="#212121" stroke="#b0bec5" stroke-width="1" />
            <!-- Mold Slot & Ejected Hot Lead Slug -->
            <rect class="le-lead-slug" x="42" y="48" width="18" height="3.5" rx="0.5" stroke="#ffffff" stroke-width="0.5" />

            <!-- Galley Tray Receiving Finished Slugs -->
            <rect x="42" y="62" width="26" height="4" fill="#37474f" stroke="#78909c" stroke-width="0.6" />
          </svg>
        </div>
        <div class="le-label">LINOTYPE ELEVATOR</div>
      </div>
    `;
  }
}

customElements.define('concept-linotype-elevator', ConceptLinotypeElevator);
