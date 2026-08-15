const giffardAirshipStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ga-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a18 0%, #060403 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 171, 64, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ga-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ga-svg {
    width: 76px;
    height: 72px;
  }

  /* Dirigible forward propulsion and gentle pitch */
  .ga-airship-hull {
    animation: ga-cruise-pitch 4s ease-in-out infinite alternate;
    transform-origin: 38px 30px;
  }

  @keyframes ga-cruise-pitch {
    0% { transform: translateY(-3px) rotate(-2deg); }
    100% { transform: translateY(3px) rotate(2deg); }
  }

  /* 3-bladed 11-foot propeller high-speed rotation */
  .ga-propeller {
    transform-origin: 18px 46px;
    animation: ga-spin-prop 0.4s linear infinite;
  }

  @keyframes ga-spin-prop {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Steam engine downward exhaust puff */
  .ga-steam-exhaust path {
    stroke: #eceff1;
    stroke-width: 0.8;
    fill: none;
    animation: ga-puff-smoke 1.2s ease-out infinite;
    transform-origin: 38px 50px;
  }

  @keyframes ga-puff-smoke {
    0% { transform: scale(0.6) translateY(0); opacity: 0.8; }
    100% { transform: scale(1.6) translateY(8px); opacity: 0; }
  }

  .ga-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGiffardSteamAirship extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${giffardAirshipStyles}</style>
      <div class="ga-box">
        <div class="ga-stage">
          <svg class="ga-svg" viewBox="0 0 76 72">
            <!-- 1852 Giffard Steam Dirigible Assembly -->
            <g class="ga-airship-hull">
              <!-- Elongated Spindle-Shaped Hydrogen Gas Envelope (Cigar Form) -->
              <path d="M 6 24 C 18 16 58 16 70 24 C 58 32 18 32 6 24 Z" fill="#cfd8dc" stroke="#ffab40" stroke-width="1.2" />

              <!-- Suspension Netting & Longitudinal Keel Beam Spine -->
              <path d="M 12 24 Q 38 28 64 24" fill="none" stroke="#90a4ae" stroke-width="0.5" stroke-dasharray="2 1" />
              <line x1="16" y1="36" x2="60" y2="36" stroke="#8d6e63" stroke-width="1" />

              <!-- Suspension Rigging Lines -->
              <line x1="20" y1="26" x2="24" y2="36" stroke="#b0bec5" stroke-width="0.5" />
              <line x1="38" y1="28" x2="38" y2="36" stroke="#b0bec5" stroke-width="0.5" />
              <line x1="56" y1="26" x2="52" y2="36" stroke="#b0bec5" stroke-width="0.5" />

              <!-- Suspended Keel Platform with 3-HP Coke-Fired Steam Boiler -->
              <rect x="26" y="42" width="24" height="6" rx="1" fill="#3e2723" stroke="#6d4c41" stroke-width="0.6" />
              <!-- Boiler & Safety Chimney (Inverted downward chimney to prevent gas ignition) -->
              <rect x="34" y="40" width="8" height="6" fill="#37474f" stroke="#ffab40" stroke-width="0.6" />
              <line x1="38" y1="46" x2="38" y2="52" stroke="#212121" stroke-width="1.2" />

              <!-- Downward Steam Exhaust Puffs -->
              <g class="ga-steam-exhaust">
                <path d="M 36 53 Q 38 56 40 53" />
                <path d="M 35 56 Q 38 59 41 56" />
              </g>

              <!-- 3-Bladed 110 RPM Pusher/Tractor Propeller (Left) -->
              <line x1="18" y1="45" x2="26" y2="45" stroke="#ffd700" stroke-width="0.8" />
              <g class="ga-propeller">
                <circle cx="18" cy="46" r="1.5" fill="#ffd700" />
                <line x1="18" y1="38" x2="18" y2="54" stroke="#ffab40" stroke-width="1.4" stroke-linecap="round" />
                <line x1="11" y1="42" x2="25" y2="50" stroke="#ffab40" stroke-width="1.4" stroke-linecap="round" />
              </g>

              <!-- Triangular Sailcloth Steering Rudder (Right / Aft) -->
              <polygon points="60,32 72,28 60,40" fill="#ffe082" stroke="#ffb300" stroke-width="0.6" />
            </g>
          </svg>
        </div>
        <div class="ga-label">GIFFARD AIRSHIP 1852</div>
      </div>
    `;
  }
}

customElements.define('concept-giffard-steam-airship', ConceptGiffardSteamAirship);
