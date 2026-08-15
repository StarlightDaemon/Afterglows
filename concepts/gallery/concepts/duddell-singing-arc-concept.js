const duddellSingingArcStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sa-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #26162a 0%, #08030b 100%);
    border: 1.5px solid rgba(224, 64, 251, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(224, 64, 251, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sa-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sa-svg {
    width: 76px;
    height: 72px;
  }

  /* Electric carbon plasma singing arc discharge */
  .sa-arc-plasma {
    animation: sa-arc-sing 0.12s ease-in-out infinite alternate;
    transform-origin: 38px 30px;
  }

  @keyframes sa-arc-sing {
    0% { transform: scale(0.9) rotate(-2deg); fill: #e040fb; filter: drop-shadow(0 0 4px #e040fb); }
    50% { transform: scale(1.15) rotate(2deg); fill: #ffffff; filter: drop-shadow(0 0 8px #7c4dff); }
    100% { transform: scale(0.85) rotate(-1deg); fill: #00e5ff; filter: drop-shadow(0 0 5px #e040fb); }
  }

  /* Emitted musical acoustic sound waves radiating from arc */
  .sa-music-waves circle {
    stroke: #ea80fc;
    stroke-width: 1;
    fill: none;
    animation: sa-wave-expand 1.4s ease-out infinite;
    transform-origin: 38px 30px;
  }

  @keyframes sa-wave-expand {
    0% { transform: scale(0.6); opacity: 0.9; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  /* Resonant LC tuning coil oscillation glow */
  .sa-lc-coil {
    animation: sa-coil-glow 1.2s ease-in-out infinite alternate;
  }

  @keyframes sa-coil-glow {
    0% { stroke: #ffd700; opacity: 0.6; }
    100% { stroke: #ffea00; opacity: 1; filter: drop-shadow(0 0 3px #ffd700); }
  }

  .sa-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 64, 251, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptDuddellSingingArc extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${duddellSingingArcStyles}</style>
      <div class="sa-box">
        <div class="sa-stage">
          <svg class="sa-svg" viewBox="0 0 76 72">
            <!-- Bakelite & Slate Insulated Base -->
            <rect x="8" y="58" width="60" height="5" rx="1" fill="#212121" stroke="#424242" stroke-width="0.8" />

            <!-- Carbon Electrodes (Horizontal Opposition) -->
            <!-- Left Carbon Rod Holder & Carbon -->
            <rect x="10" y="28" width="14" height="4" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            <polygon points="24,28 34,29 34,31 24,32" fill="#212121" stroke="#757575" stroke-width="0.5" />

            <!-- Right Carbon Rod Holder & Carbon -->
            <rect x="52" y="28" width="14" height="4" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            <polygon points="52,28 42,29 42,31 52,32" fill="#212121" stroke="#757575" stroke-width="0.5" />

            <!-- Singing Plasma Arc Discharge between Carbon Tips -->
            <g class="sa-arc-plasma">
              <ellipse cx="38" cy="30" rx="4" ry="7" />
              <path d="M 34 30 Q 38 23 42 30 Q 38 37 34 30 Z" fill="#ffffff" />
            </g>

            <!-- Radiating Musical Audio Pressure Waves -->
            <g class="sa-music-waves">
              <circle cx="38" cy="30" r="10" stroke-dasharray="2 1" />
              <circle cx="38" cy="30" r="16" stroke-dasharray="3 2" />
            </g>

            <!-- Resonant Shunt LC Tuned Tank Circuit (Inductor + Capacitor) below -->
            <!-- Choke Inductor Coil -->
            <path class="sa-lc-coil" d="M 18 48 Q 21 44 24 48 Q 27 44 30 48 Q 33 44 36 48" fill="none" stroke-width="1.2" />
            <text x="27" y="55" font-family="monospace" font-size="3" fill="#ffd700" text-anchor="middle">L: TANK</text>

            <!-- Mica/Paraffin High-Voltage Capacitor -->
            <g transform="translate(42, 44)">
              <line x1="6" y1="0" x2="6" y2="8" stroke="#00e5ff" stroke-width="1.2" />
              <line x1="9" y1="0" x2="9" y2="8" stroke="#00e5ff" stroke-width="1.2" />
              <line x1="0" y1="4" x2="6" y2="4" stroke="#00e5ff" stroke-width="0.8" />
              <line x1="9" y1="4" x2="15" y2="4" stroke="#00e5ff" stroke-width="0.8" />
              <text x="7.5" y="11" font-family="monospace" font-size="3" fill="#00e5ff" text-anchor="middle">C</text>
            </g>
          </svg>
        </div>
        <div class="sa-label">DUDDELL SINGING ARC</div>
      </div>
    `;
  }
}

customElements.define('concept-duddell-singing-arc', ConceptDuddellSingingArc);
