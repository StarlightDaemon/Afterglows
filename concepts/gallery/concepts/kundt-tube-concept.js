const kundtTubeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .kt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #172421 0%, #040907 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.4);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kt-svg {
    width: 76px;
    height: 72px;
  }

  /* Stroked brass resonance excitation rod longitudinal vibration */
  .kt-sound-rod {
    animation: kt-rod-hum 0.12s linear infinite alternate;
  }

  @keyframes kt-rod-hum {
    0% { transform: translateX(-0.6px); }
    100% { transform: translateX(0.6px); }
  }

  /* Lycopodium dust mounds bouncing at acoustic nodes */
  .kt-dust-pile {
    animation: kt-dust-swirl 0.8s ease-in-out infinite alternate;
  }

  @keyframes kt-dust-swirl {
    0% { transform: scaleY(0.85); opacity: 0.75; }
    100% { transform: scaleY(1.25); opacity: 1; filter: drop-shadow(0 0 2px #00e676); }
  }

  /* Standing acoustic wave pressure envelope inside tube */
  .kt-standing-wave {
    animation: kt-wave-phase 1.6s ease-in-out infinite alternate;
  }

  @keyframes kt-wave-phase {
    0% { opacity: 0.3; stroke: #69f0ae; }
    100% { opacity: 0.85; stroke: #b9f6ca; filter: drop-shadow(0 0 2px #00e676); }
  }

  .kt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKundtTube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kundtTubeStyles}</style>
      <div class="kt-box">
        <div class="kt-stage">
          <svg class="kt-svg" viewBox="0 0 76 72">
            <!-- Lab Support Pillars & Clamps -->
            <rect x="10" y="52" width="56" height="4" rx="1" fill="#263238" stroke="#455a64" stroke-width="0.6" />
            <rect x="22" y="44" width="4" height="8" fill="#37474f" stroke="#78909c" stroke-width="0.5" />
            <rect x="50" y="44" width="4" height="8" fill="#37474f" stroke="#78909c" stroke-width="0.5" />

            <!-- Stroked Brass Excitation Rod & Piston (Left) -->
            <g class="kt-sound-rod">
              <rect x="4" y="34" width="22" height="4" rx="1" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
              <!-- Tight-fitting sound disc piston at tube entrance -->
              <rect x="25" y="29" width="2" height="14" fill="#cfd8dc" stroke="#90a4ae" stroke-width="0.5" />
            </g>

            <!-- Transparent Heavy Glass Acoustic Resonance Tube -->
            <rect x="26" y="27" width="44" height="18" rx="2" fill="rgba(0, 230, 118, 0.05)" stroke="#00e676" stroke-width="1" />

            <!-- Adjustable Adjustable Brass Piston Stopper at Right End -->
            <rect x="67" y="29" width="3" height="14" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            <line x1="70" y1="36" x2="74" y2="36" stroke="#b0bec5" stroke-width="1.2" />

            <!-- Standing Wave Nodes & Antinodes (Acoustic Velocity Amplitude) -->
            <g class="kt-standing-wave" fill="none" stroke-width="0.8">
              <!-- Upper harmonic envelope -->
              <path d="M 27 36 Q 33 29 39 36 Q 45 43 51 36 Q 57 29 63 36 Q 66 39.5 67 36" />
              <!-- Lower symmetric harmonic envelope -->
              <path d="M 27 36 Q 33 43 39 36 Q 45 29 51 36 Q 57 43 63 36 Q 66 32.5 67 36" stroke-dasharray="1 1" />
            </g>

            <!-- Lycopodium Yellow/Green Spore Mounds Collected at Velocity Nodes -->
            <g class="kt-dust-pile">
              <!-- Node Mound 1 -->
              <path d="M 29 44 Q 33 39 37 44 Z" fill="#b9f6ca" />
              <!-- Node Mound 2 -->
              <path d="M 41 44 Q 45 39 49 44 Z" fill="#b9f6ca" />
              <!-- Node Mound 3 -->
              <path d="M 53 44 Q 57 39 61 44 Z" fill="#b9f6ca" />
              <!-- Fine Striated Dust Ribs along floor -->
              <circle cx="33" cy="41" r="0.6" fill="#ffffff" />
              <circle cx="45" cy="41" r="0.6" fill="#ffffff" />
              <circle cx="57" cy="41" r="0.6" fill="#ffffff" />
            </g>
          </svg>
        </div>
        <div class="kt-label">KUNDT TUBE</div>
      </div>
    `;
  }
}

customElements.define('concept-kundt-tube', ConceptKundtTube);
