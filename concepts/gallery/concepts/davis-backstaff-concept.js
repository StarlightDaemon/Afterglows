const davisBackstaffStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .db-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 40% 40%, #1f1810 0%, #080604 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 183, 77, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .db-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .db-svg {
    width: 76px;
    height: 72px;
  }

  /* Sunlight Shadow Ray from Sun Vane to Horizon Slit */
  .db-shadow-ray {
    stroke: #ffd54f;
    stroke-dasharray: 4 2;
    animation: db-shadow-flow 1.5s linear infinite;
  }

  @keyframes db-shadow-flow {
    to { stroke-dashoffset: -12; }
  }

  /* Sight Line from Eyepiece Vane to Horizon */
  .db-sight-line {
    stroke: #00e5ff;
    stroke-dasharray: 3 2;
    animation: db-sight-flow 1.5s linear infinite;
  }

  @keyframes db-sight-flow {
    to { stroke-dashoffset: -10; }
  }

  /* Pearwood / Lignum Vitae Main Frame */
  .db-frame {
    fill: #3e2723;
    stroke: #ffb74d;
    stroke-width: 1;
  }

  .db-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptDavisBackstaff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${davisBackstaffStyles}</style>
      <div class="db-box">
        <div class="db-stage">
          <svg class="db-svg" viewBox="0 0 76 72">
            <!-- Sun in upper left (Behind navigator's back) -->
            <circle cx="8" cy="10" r="4" fill="#ffd700" filter="drop-shadow(0 0 4px #ff9800)" />

            <!-- Main Wooden Long Staff Spine -->
            <line x1="16" y1="46" x2="64" y2="28" stroke="#5d4037" stroke-width="2.5" stroke-linecap="round" />
            <line x1="16" y1="46" x2="64" y2="28" stroke="#ffb74d" stroke-width="0.8" />

            <!-- Small 60-Degree Shadow Arch Arc at Front (Left) -->
            <path class="db-frame" d="M 24 43 A 18 18 0 0 1 20 22 L 24 24 A 14 14 0 0 0 28 41 Z" />
            <!-- Sliding Shadow Vane on 60-Deg Arc -->
            <rect x="18" y="26" width="5" height="3" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.5" />

            <!-- Large 30-Degree Sight Arch Arc at Back (Right) -->
            <path class="db-frame" d="M 52 32 A 32 32 0 0 1 62 58 L 58 59 A 28 28 0 0 0 48 34 Z" />
            <!-- Sliding Sight Vane (Eyepiece) on 30-Deg Arc -->
            <rect x="56" y="44" width="5" height="4" fill="#cfd8dc" stroke="#90a4ae" stroke-width="0.5" />

            <!-- Horizon Vane at Extreme Tip of Staff (Slit window) -->
            <rect x="14" y="44" width="4" height="6" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.6" />
            <circle cx="16" cy="47" r="1" fill="#00e5ff" />

            <!-- Sunlight Ray Casting Shadow of Sun Vane onto Horizon Slit -->
            <line x1="8" y1="10" x2="20" y2="28" stroke="#ffd700" stroke-width="1.2" opacity="0.6" />
            <line x1="20" y1="28" x2="16" y2="47" class="db-shadow-ray" stroke-width="1.2" />

            <!-- Navigator's Visual Sight Line from Eyepiece Vane through Horizon Slit to Sea Horizon -->
            <line x1="58" y1="46" x2="16" y2="47" class="db-sight-line" stroke-width="1" />
            <line x1="16" y1="47" x2="4" y2="47.5" class="db-sight-line" stroke-width="1" />
          </svg>
        </div>
        <div class="db-label">DAVIS BACKSTAFF</div>
      </div>
    `;
  }
}

customElements.define('concept-davis-backstaff', ConceptDavisBackstaff);
