const enigmaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .en-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152219 0%, #030805 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .en-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .en-svg {
    width: 76px;
    height: 72px;
  }

  /* Electric current path tracing through rotors */
  .en-current-path {
    stroke: #00e676;
    stroke-dasharray: 4 2;
    animation: en-spark-trace 1.2s linear infinite;
  }

  @keyframes en-spark-trace {
    to { stroke-dashoffset: -12; }
  }

  /* Stepping pawl mechanical click */
  .en-pawl {
    stroke: #69f0ae;
    animation: en-pawl-step 2s steps(2, end) infinite;
  }

  @keyframes en-pawl-step {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(-8deg); }
    100% { transform: rotate(0deg); }
  }

  /* Lampboard letter bulb illuminating upon circuit completion */
  .en-bulb {
    fill: #ffd600;
    animation: en-bulb-glow 1.8s ease-in-out infinite alternate;
  }

  @keyframes en-bulb-glow {
    0% { opacity: 0.3; filter: drop-shadow(0 0 1px #ffd600); }
    100% { opacity: 1; filter: drop-shadow(0 0 8px #ffd600) drop-shadow(0 0 12px #00e676); }
  }

  .en-rotor-body {
    fill: #263238;
    stroke: #546e7a;
    stroke-width: 1;
  }

  .en-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptEnigmaRotors extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${enigmaStyles}</style>
      <div class="en-box">
        <div class="en-stage">
          <svg class="en-svg" viewBox="0 0 76 72">
            <!-- Reflector (Umkehrwalze / UKW) on Left -->
            <path d="M 8 16 L 16 16 L 16 52 L 8 52 Z" fill="#1b2a21" stroke="#00e676" stroke-width="1.2" />
            <text x="12" y="14" font-family="monospace" font-size="3" fill="#69f0ae" text-anchor="middle">UKW</text>

            <!-- Rotor I (Left Rotor) -->
            <rect class="en-rotor-body" x="18" y="16" width="10" height="36" rx="1" />
            <text x="23" y="14" font-family="monospace" font-size="3" fill="#90a4ae" text-anchor="middle">I</text>

            <!-- Rotor II (Middle Rotor) -->
            <rect class="en-rotor-body" x="30" y="16" width="10" height="36" rx="1" />
            <text x="35" y="14" font-family="monospace" font-size="3" fill="#90a4ae" text-anchor="middle">II</text>

            <!-- Rotor III (Right Fast Rotor) -->
            <rect class="en-rotor-body" x="42" y="16" width="10" height="36" rx="1" />
            <text x="47" y="14" font-family="monospace" font-size="3" fill="#90a4ae" text-anchor="middle">III</text>

            <!-- Entry Wheel (Stator / ETW) on Right -->
            <rect x="54" y="18" width="6" height="32" rx="1" fill="#37474f" stroke="#78909c" stroke-width="1" />

            <!-- Stepping Ratchet Pawls at top of rotors -->
            <g class="en-pawl" stroke-width="1.2">
              <line x1="28" y1="20" x2="30" y2="16" stroke="#69f0ae" />
              <line x1="40" y1="20" x2="42" y2="16" stroke="#69f0ae" />
              <line x1="52" y1="20" x2="54" y2="16" stroke="#69f0ae" />
            </g>

            <!-- Internal Scrambling Circuitry (Cross-wired current path) -->
            <!-- Forward Path: ETW -> Rotor III -> Rotor II -> Rotor I -> UKW -->
            <path class="en-current-path" d="M 57 26 L 47 34 L 35 22 L 23 44 L 14 38" fill="none" stroke-width="1.2" />
            
            <!-- Reflector Return Loop -->
            <path d="M 14 38 Q 10 30 14 22" fill="none" stroke="#00e676" stroke-width="1.2" />

            <!-- Return Path: UKW -> Rotor I -> Rotor II -> Rotor III -> Lampboard Bulb -->
            <path class="en-current-path" d="M 14 22 L 23 30 L 35 46 L 47 24 L 64 24" fill="none" stroke-width="1.2" />

            <!-- Illuminated Lampboard Bulb Result -->
            <g transform="translate(65, 34)">
              <circle class="en-bulb" cx="0" cy="0" r="4.5" />
              <text x="0" y="1.5" font-family="sans-serif" font-size="4" font-weight="bold" fill="#212121" text-anchor="middle">Q</text>
            </g>

            <!-- Rotor Contact Studs -->
            <g fill="#ffeb3b">
              <circle cx="18" cy="22" r="0.8" />
              <circle cx="18" cy="38" r="0.8" />
              <circle cx="30" cy="30" r="0.8" />
              <circle cx="30" cy="44" r="0.8" />
              <circle cx="42" cy="24" r="0.8" />
              <circle cx="42" cy="46" r="0.8" />
            </g>
          </svg>
        </div>
        <div class="en-label">ENIGMA ROTOR STEP</div>
      </div>
    `;
  }
}

customElements.define('concept-enigma-rotors', ConceptEnigmaRotors);
