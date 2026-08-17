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

  /* Rotor stepping vertical index shifts */
  .en-rotor-1 { animation: en-step-rot-1 3s ease-in-out infinite alternate; }
  .en-rotor-2 { animation: en-step-rot-2 1.5s ease-in-out infinite alternate; }
  .en-rotor-3 { animation: en-step-rot-3 0.75s ease-in-out infinite alternate; }

  @keyframes en-step-rot-1 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-3px); }
  }

  @keyframes en-step-rot-2 {
    0% { transform: translateY(0); }
    100% { transform: translateY(4px); }
  }

  @keyframes en-step-rot-3 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-6px); }
  }

  /* Electric cipher current spark packet traversing rotors */
  .en-cipher-spark {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00e676, 0 0 14px #ffd600;
    z-index: 6;
    animation: en-spark-roundtrip 2.2s linear infinite;
  }

  @keyframes en-spark-roundtrip {
    0% { transform: translate(26px, -4px); opacity: 0; }
    10% { opacity: 1; transform: translate(20px, -2px); }
    25% { transform: translate(6px, 6px); }
    40% { transform: translate(-10px, -6px); }
    50% { transform: translate(-26px, 2px); } /* Reflector bounce */
    65% { transform: translate(-10px, 8px); }
    80% { transform: translate(6px, -8px); }
    90% { opacity: 1; transform: translate(24px, 0px); }
    100% { transform: translate(28px, 0px); opacity: 0; }
  }

  /* Stepping pawl mechanical click */
  .en-pawl {
    stroke: #69f0ae;
    animation: en-pawl-step 0.75s ease-in-out infinite alternate;
  }

  @keyframes en-pawl-step {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-12deg); }
  }

  /* Lampboard letter bulb */
  .en-bulb {
    fill: #ffd600;
    animation: en-bulb-glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes en-bulb-glow {
    0% { opacity: 0.4; }
    100% { opacity: 1; filter: drop-shadow(0 0 8px #ffd600) drop-shadow(0 0 12px #00e676); }
  }

  .en-rotor-body {
    fill: #263238;
    stroke: #546e7a;
    stroke-width: 1.2;
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
          <div class="en-cipher-spark"></div>

          <svg class="en-svg" viewBox="0 0 76 72">
            <!-- Reflector (Umkehrwalze / UKW) on Left -->
            <path d="M 8 16 L 16 16 L 16 52 L 8 52 Z" fill="#1b2a21" stroke="#00e676" stroke-width="1.2" />
            <text x="12" y="14" font-family="monospace" font-size="3" fill="#69f0ae" text-anchor="middle">UKW</text>

            <!-- Rotor I (Left Rotor) -->
            <g class="en-rotor-1">
              <rect class="en-rotor-body" x="18" y="16" width="10" height="36" rx="1" />
              <text x="23" y="14" font-family="monospace" font-size="3" fill="#90a4ae" text-anchor="middle">I</text>
              <line x1="18" y1="26" x2="28" y2="34" stroke="#00e676" stroke-width="1.2" />
              <line x1="18" y1="42" x2="28" y2="22" stroke="#00e676" stroke-width="1.2" />
            </g>

            <!-- Rotor II (Middle Rotor) -->
            <g class="en-rotor-2">
              <rect class="en-rotor-body" x="30" y="16" width="10" height="36" rx="1" />
              <text x="35" y="14" font-family="monospace" font-size="3" fill="#90a4ae" text-anchor="middle">II</text>
              <line x1="30" y1="34" x2="40" y2="24" stroke="#00e676" stroke-width="1.2" />
              <line x1="30" y1="22" x2="40" y2="44" stroke="#00e676" stroke-width="1.2" />
            </g>

            <!-- Rotor III (Right Fast Rotor) -->
            <g class="en-rotor-3">
              <rect class="en-rotor-body" x="42" y="16" width="10" height="36" rx="1" />
              <text x="47" y="14" font-family="monospace" font-size="3" fill="#90a4ae" text-anchor="middle">III</text>
              <line x1="42" y1="24" x2="52" y2="38" stroke="#00e676" stroke-width="1.2" />
              <line x1="42" y1="44" x2="52" y2="26" stroke="#00e676" stroke-width="1.2" />
            </g>

            <!-- Entry Wheel (Stator / ETW) on Right -->
            <rect x="54" y="18" width="6" height="32" rx="1" fill="#37474f" stroke="#78909c" stroke-width="1.2" />

            <!-- Stepping Ratchet Pawls at top of rotors -->
            <g class="en-pawl" stroke-width="1.4">
              <line x1="28" y1="20" x2="30" y2="16" stroke="#69f0ae" />
              <line x1="40" y1="20" x2="42" y2="16" stroke="#69f0ae" />
              <line x1="52" y1="20" x2="54" y2="16" stroke="#69f0ae" />
            </g>

            <!-- Reflector Return Loop -->
            <path d="M 16 38 Q 10 30 16 22" fill="none" stroke="#00e676" stroke-width="1.4" />

            <!-- Illuminated Lampboard Bulb Result -->
            <g transform="translate(65, 34)">
              <circle class="en-bulb" cx="0" cy="0" r="4.5" />
              <text x="0" y="1.5" font-family="sans-serif" font-size="4" font-weight="bold" fill="#212121" text-anchor="middle">Q</text>
            </g>

            <!-- Rotor Contact Studs -->
            <g fill="#ffeb3b">
              <circle cx="18" cy="22" r="0.9" />
              <circle cx="18" cy="38" r="0.9" />
              <circle cx="30" cy="30" r="0.9" />
              <circle cx="30" cy="44" r="0.9" />
              <circle cx="42" cy="24" r="0.9" />
              <circle cx="42" cy="46" r="0.9" />
            </g>
          </svg>
        </div>
        <div class="en-label">ENIGMA ROTOR STEP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-enigma-rotors')) {
  customElements.define('concept-enigma-rotors', ConceptEnigmaRotors);
}
