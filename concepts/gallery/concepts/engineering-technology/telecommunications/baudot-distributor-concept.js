const baudotStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bd-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152228 0%, #03080c 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bd-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bd-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating Commutator Wiper Contact Brush */
  .bd-wiper-arm {
    transform-origin: 38px 36px;
    animation: bd-wiper-spin 4s linear infinite;
  }

  @keyframes bd-wiper-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Multiplex 5-Bit Telegraph Segment Pulses */
  .bd-segment-ring path {
    stroke-width: 2.2;
    fill: none;
  }

  .bd-s1 { stroke: #00e676; animation: bd-pulse-bit 1s ease-in-out infinite alternate; }
  .bd-s2 { stroke: #ffd700; animation: bd-pulse-bit 1s ease-in-out infinite alternate 0.2s; }
  .bd-s3 { stroke: #00e5ff; animation: bd-pulse-bit 1s ease-in-out infinite alternate 0.4s; }
  .bd-s4 { stroke: #ff4081; animation: bd-pulse-bit 1s ease-in-out infinite alternate 0.6s; }

  @keyframes bd-pulse-bit {
    0% { opacity: 0.4; }
    100% { opacity: 1; filter: drop-shadow(0 0 4px currentColor); }
  }

  .bd-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBaudotDistributor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${baudotStyles}</style>
      <div class="bd-box">
        <div class="bd-stage">
          <svg class="bd-svg" viewBox="0 0 76 72">
            <!-- Brass Distributor Outer Stator Ring -->
            <circle cx="38" cy="36" r="32" fill="#1b2820" stroke="#00e676" stroke-width="1.2" />
            <circle cx="38" cy="36" r="22" fill="#0d1712" stroke="#2e7d32" stroke-width="0.8" />
            <circle cx="38" cy="36" r="10" fill="#263238" stroke="#00e676" stroke-width="0.8" />

            <!-- 4-Quadrant Time-Division Multiplexed Sectors (Sector 1 to 4) -->
            <g class="bd-segment-ring">
              <!-- Quadrant 1: Sector A (5 pulses) -->
              <path class="bd-s1" d="M 38 8 A 28 28 0 0 1 66 36" />
              <!-- Quadrant 2: Sector B (5 pulses) -->
              <path class="bd-s2" d="M 66 36 A 28 28 0 0 1 38 64" />
              <!-- Quadrant 3: Sector C (5 pulses) -->
              <path class="bd-s3" d="M 38 64 A 28 28 0 0 1 10 36" />
              <!-- Quadrant 4: Sector D (5 pulses) -->
              <path class="bd-s4" d="M 10 36 A 28 28 0 0 1 38 8" />
            </g>

            <!-- 5-Bit Sub-Segment Insulator Notch Dividers -->
            <g stroke="#03080c" stroke-width="1.5">
              <line x1="38" y1="5" x2="38" y2="12" />
              <line x1="57.8" y1="16.2" x2="52.8" y2="21.2" />
              <line x1="69" y1="36" x2="62" y2="36" />
              <line x1="57.8" y1="55.8" x2="52.8" y2="50.8" />
              <line x1="38" y1="67" x2="38" y2="60" />
              <line x1="18.2" y1="55.8" x2="23.2" y2="50.8" />
              <line x1="7" y1="36" x2="14" y2="36" />
              <line x1="18.2" y1="16.2" x2="23.2" y2="21.2" />
            </g>

            <!-- Rotating Wiper Arm (Silver-copper spring contact sweeping contacts) -->
            <g class="bd-wiper-arm">
              <line x1="38" y1="36" x2="38" y2="8" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" />
              <!-- Wiper Trailing Contact Shoe -->
              <circle cx="38" cy="8" r="2" fill="#ffd700" filter="drop-shadow(0 0 4px #00e676)" />
              <!-- Counterweight Arm -->
              <line x1="38" y1="36" x2="38" y2="48" stroke="#78909c" stroke-width="1.2" />
              <circle cx="38" cy="48" r="2.5" fill="#455a64" />
            </g>

            <!-- Center Motor Axle Spindle -->
            <circle cx="38" cy="36" r="3.5" fill="#ffd700" stroke="#ff8f00" stroke-width="0.8" />
            <circle cx="38" cy="36" r="1.2" fill="#000000" />
          </svg>
        </div>
        <div class="bd-label">BAUDOT DISTRIBUTOR</div>
      </div>
    `;
  }
}

customElements.define('concept-baudot-distributor', ConceptBaudotDistributor);
