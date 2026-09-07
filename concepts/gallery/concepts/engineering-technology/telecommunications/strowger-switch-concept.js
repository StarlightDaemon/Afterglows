const strowgerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ss-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152228 0%, #03080c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ss-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ss-svg {
    width: 76px;
    height: 72px;
  }

  /* Two-Motion Wiper Shaft (Vertical lift step then rotary scan) */
  .ss-wiper-shaft {
    animation: ss-step-and-turn 4s steps(6, end) infinite;
  }

  @keyframes ss-step-and-turn {
    0% { transform: translateY(0px) rotate(0deg); }
    30% { transform: translateY(-8px) rotate(0deg); }
    60% { transform: translateY(-8px) rotate(25deg); }
    80% { transform: translateY(-8px) rotate(25deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  /* Ratchet Stepping Solenoid Armature Click */
  .ss-solenoid-click {
    fill: #ffd700;
    animation: ss-pulse 0.4s steps(2, end) infinite;
  }

  @keyframes ss-pulse {
    0% { opacity: 0.3; }
    100% { opacity: 1; filter: drop-shadow(0 0 4px #00e5ff); }
  }

  .ss-contact-bank {
    stroke: #81d4fa;
    stroke-width: 0.8;
  }

  .ss-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptStrowgerSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${strowgerStyles}</style>
      <div class="ss-box">
        <div class="ss-stage">
          <svg class="ss-svg" viewBox="0 0 76 72">
            <!-- Cast Iron Switch Frame Bracket -->
            <rect x="14" y="6" width="48" height="60" rx="2" fill="#1b2830" stroke="#455a64" stroke-width="1" />

            <!-- Cylindrical Semi-Circular Bank of 100 Contact Terminals (Lower Half) -->
            <g class="ss-contact-bank">
              <path d="M 22 42 C 22 42, 38 46, 54 42" fill="none" />
              <path d="M 22 48 C 22 48, 38 52, 54 48" fill="none" />
              <path d="M 22 54 C 22 54, 38 58, 54 54" fill="none" />
              <path d="M 22 60 C 22 60, 38 64, 54 60" fill="none" />
              <!-- Contact Pins -->
              <g fill="#ffd54f">
                <circle cx="26" cy="43" r="0.8" />
                <circle cx="34" cy="45" r="0.8" />
                <circle cx="42" cy="45" r="0.8" />
                <circle cx="50" cy="43" r="0.8" />
                <circle cx="26" cy="49" r="0.8" />
                <circle cx="34" cy="51" r="0.8" />
                <circle cx="42" cy="51" r="0.8" />
                <circle cx="50" cy="49" r="0.8" />
              </g>
            </g>

            <!-- Vertical Stepping Magnet Coil (Top Left) -->
            <rect x="18" y="10" width="8" height="12" rx="1" fill="#b71c1c" stroke="#ff5252" stroke-width="0.6" />
            <!-- Rotary Stepping Magnet Coil (Top Right) -->
            <rect x="50" y="10" width="8" height="12" rx="1" fill="#b71c1c" stroke="#ff5252" stroke-width="0.6" />

            <!-- Vertical Central Shaft with Circular Ratchet Hub -->
            <g class="ss-wiper-shaft" style="transform-origin: 38px 48px;">
              <!-- Central Steel Spindle Shaft -->
              <line x1="38" y1="8" x2="38" y2="58" stroke="#cfd8dc" stroke-width="2" />
              <!-- Circular Vertical/Rotary Ratchet Teeth Cylinder -->
              <rect x="35" y="24" width="6" height="12" fill="#ffd700" stroke="#ff8f00" stroke-width="0.6" />

              <!-- Wiper Finger Arm Assembly (Making contact with terminal pin) -->
              <line x1="38" y1="48" x2="50" y2="43" stroke="#00e5ff" stroke-width="1.4" stroke-linecap="round" />
              <circle cx="50" cy="43" r="1.5" class="ss-solenoid-click" />
            </g>

            <!-- Ratchet Pawl Fingers (Vertical & Rotary triggers) -->
            <polygon points="26,26 34,28 34,26" fill="#cfd8dc" />
            <polygon points="50,32 42,34 42,32" fill="#cfd8dc" />
          </svg>
        </div>
        <div class="ss-label">STROWGER SELECTOR</div>
      </div>
    `;
  }
}

customElements.define('concept-strowger-switch', ConceptStrowgerSwitch);
