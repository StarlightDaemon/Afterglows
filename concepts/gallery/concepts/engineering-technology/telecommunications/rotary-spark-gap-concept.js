const sparkGapStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151828 0%, #03040c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-svg {
    width: 76px;
    height: 72px;
  }

  /* Spinning Rotary Electrode Disc */
  .sg-rotary-wheel {
    transform-origin: 38px 36px;
    animation: sg-spin 1.5s linear infinite;
  }

  @keyframes sg-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* High-Voltage Quenched Radio Frequency Spark Arc Flash */
  .sg-spark-arc {
    stroke: #00e5ff;
    stroke-width: 3.5;
    stroke-linecap: round;
    animation: sg-spark-zap 0.2s steps(2, end) infinite;
  }

  @keyframes sg-spark-zap {
    0% { opacity: 0.2; stroke: #80d8ff; }
    50% { opacity: 1; stroke: #ffffff; filter: drop-shadow(0 0 6px #00e5ff) drop-shadow(0 0 12px #d500f9); }
    100% { opacity: 0.1; }
  }

  /* Stationary High Voltage Electrode Posts */
  .sg-electrode-post {
    fill: #ffd700;
    stroke: #ff9100;
    stroke-width: 0.8;
  }

  .sg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRotarySparkGap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sparkGapStyles}</style>
      <div class="sg-box">
        <div class="sg-stage">
          <svg class="sg-svg" viewBox="0 0 76 72">
            <!-- Heavy Bakelite Housing Frame -->
            <rect x="8" y="8" width="60" height="56" rx="2" fill="rgba(0, 229, 255, 0.05)" stroke="rgba(0, 229, 255, 0.3)" stroke-width="1" />

            <!-- Stationary Top High-Voltage Electrode Post (Left AC Line) -->
            <path class="sg-electrode-post" d="M 34 6 L 42 6 L 40 18 L 36 18 Z" />
            <circle cx="38" cy="18" r="2" fill="#ffd700" />

            <!-- Stationary Bottom High-Voltage Electrode Post (Right AC Line) -->
            <path class="sg-electrode-post" d="M 36 54 L 40 54 L 42 66 L 34 66 Z" />
            <circle cx="38" cy="54" r="2" fill="#ffd700" />

            <!-- High-Speed Spinning Rotary Disc Assembly -->
            <g class="sg-rotary-wheel">
              <!-- Insulating Disc Rotor -->
              <circle cx="38" cy="36" r="20" fill="#212121" stroke="#455a64" stroke-width="1" />
              <!-- 8 Radial Copper Stud Electrodes on Disc Perimeter -->
              <g fill="#ffab40">
                <circle cx="38" cy="18" r="3" />
                <circle cx="50.7" cy="23.3" r="3" />
                <circle cx="56" cy="36" r="3" />
                <circle cx="50.7" cy="48.7" r="3" />
                <circle cx="38" cy="54" r="3" />
                <circle cx="25.3" cy="48.7" r="3" />
                <circle cx="20" cy="36" r="3" />
                <circle cx="25.3" cy="23.3" r="3" />
              </g>
              <!-- Center Steel Motor Shaft Hub -->
              <circle cx="38" cy="36" r="5" fill="#37474f" stroke="#78909c" stroke-width="0.8" />
              <circle cx="38" cy="36" r="2" fill="#cfd8dc" />
            </g>

            <!-- High Voltage Incandescent Spark Gap Arcs (Top & Bottom Discharges) -->
            <line x1="38" y1="18" x2="38" y2="20" class="sg-spark-arc" />
            <line x1="38" y1="52" x2="38" y2="54" class="sg-spark-arc" />

            <!-- RF Radiation Electromagnetic Wave Pulses -->
            <g stroke="#d500f9" stroke-width="0.6" fill="none" opacity="0.6" stroke-dasharray="2 2">
              <circle cx="38" cy="36" r="27" />
              <circle cx="38" cy="36" r="31" />
            </g>
          </svg>
        </div>
        <div class="sg-label">ROTARY SPARK GAP</div>
      </div>
    `;
  }
}

customElements.define('concept-rotary-spark-gap', ConceptRotarySparkGap);
