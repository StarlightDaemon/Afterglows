const clepsydraStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0e202d 0%, #03080e 100%);
    border: 1.5px solid rgba(79, 195, 247, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(79, 195, 247, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cp-svg {
    width: 76px;
    height: 72px;
  }

  /* Precision water droplets dripping from orifice */
  .cp-water-drips line {
    stroke: #80d8ff;
    stroke-dasharray: 2 4;
    animation: cp-drip 1s linear infinite;
  }

  @keyframes cp-drip {
    to { stroke-dashoffset: 12; }
  }

  /* Rising Float & Geared Rack */
  .cp-float-rack {
    animation: cp-float-rise 4s ease-in-out infinite alternate;
  }

  @keyframes cp-float-rise {
    0% { transform: translateY(6px); }
    100% { transform: translateY(-8px); }
  }

  /* Turning Hourly Dial Pinion */
  .cp-dial-gear {
    transform-origin: 56px 20px;
    animation: cp-gear-turn 4s ease-in-out infinite alternate;
  }

  @keyframes cp-gear-turn {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(60deg); }
  }

  .cp-reservoir {
    fill: #263238;
    stroke: #4fc3f7;
    stroke-width: 1;
  }

  .cp-water-level {
    fill: rgba(3, 169, 244, 0.25);
  }

  .cp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(79, 195, 247, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptClepsydraClock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${clepsydraStyles}</style>
      <div class="cp-box">
        <div class="cp-stage">
          <svg class="cp-svg" viewBox="0 0 76 72">
            <!-- Upper Constant-Head Water Supply Cistern (Top Left) -->
            <rect class="cp-reservoir" x="10" y="8" width="20" height="16" rx="1" />
            <rect class="cp-water-level" x="11" y="12" width="18" height="11" />
            <!-- Overflow Waste Pipe (Maintaining steady water head pressure) -->
            <path d="M 10 13 L 6 13 L 6 30" fill="none" stroke="#29b6f6" stroke-width="0.8" />

            <!-- Calibrated Orifice Dropper Nozzle -->
            <path d="M 20 24 L 20 28" fill="none" stroke="#ffd700" stroke-width="1.2" />
            <!-- Trickling Water Drip Stream -->
            <g class="cp-water-drips">
              <line x1="20" y1="28" x2="20" y2="40" stroke-width="1.2" />
            </g>

            <!-- Lower Measuring Cylinder Vessel -->
            <rect class="cp-reservoir" x="12" y="38" width="16" height="28" rx="1" />
            <!-- Water Accumulation in Base -->
            <rect class="cp-water-level" x="13" y="46" width="14" height="19" />

            <!-- Rising Cork Float & Vertical Toothed Rack Assembly -->
            <g class="cp-float-rack">
              <!-- Float Disc -->
              <ellipse cx="20" cy="46" rx="6" ry="2.5" fill="#8d6e63" stroke="#ffd54f" stroke-width="0.8" />
              <!-- Vertical Toothed Rack Rod -->
              <line x1="20" y1="44" x2="20" y2="12" stroke="#cfd8dc" stroke-width="1.5" />
              <!-- Rack Teeth on Right Side of Rod -->
              <g stroke="#ffd54f" stroke-width="0.6">
                <line x1="21" y1="14" x2="23" y2="14" />
                <line x1="21" y1="18" x2="23" y2="18" />
                <line x1="21" y1="22" x2="23" y2="22" />
                <line x1="21" y1="26" x2="23" y2="26" />
                <line x1="21" y1="30" x2="23" y2="30" />
                <line x1="21" y1="34" x2="23" y2="34" />
              </g>
            </g>

            <!-- Hourly Indicator Pinion Gear (Right) -->
            <g class="cp-dial-gear">
              <!-- Pinion Gear Meshing with Rack -->
              <circle cx="56" cy="20" r="12" fill="#2d1c14" stroke="#ffb74d" stroke-width="1" />
              <circle cx="56" cy="20" r="4" fill="#3e2723" stroke="#ffd700" stroke-width="0.8" />
              <!-- Gear Teeth around Dial -->
              <g stroke="#ffd54f" stroke-width="0.6">
                <line x1="56" y1="8" x2="56" y2="12" />
                <line x1="68" y1="20" x2="64" y2="20" />
                <line x1="56" y1="32" x2="56" y2="28" />
                <line x1="44" y1="20" x2="48" y2="20" />
              </g>
              <!-- Hourly Pointer Needle -->
              <line x1="56" y1="20" x2="56" y2="10" stroke="#ff3d00" stroke-width="1.2" stroke-linecap="round" />
            </g>

            <!-- Constant Head Siphon Tube at Base -->
            <path d="M 14 62 A 4 4 0 0 1 10 58 L 10 50" fill="none" stroke="#29b6f6" stroke-width="0.8" />
          </svg>
        </div>
        <div class="cp-label">CTESIBIUS CLEPSYDRA</div>
      </div>
    `;
  }
}

customElements.define('concept-clepsydra-clock', ConceptClepsydraClock);
