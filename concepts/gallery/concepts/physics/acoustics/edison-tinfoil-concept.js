const edisonTinfoilStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .et-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a15 0%, #080604 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.4);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .et-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .et-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating grooved cylinder mandrel */
  .et-mandrel {
    animation: et-spin-mandrel 2.4s linear infinite;
    transform-origin: 38px 36px;
  }

  @keyframes et-spin-mandrel {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
  }

  /* Hand crank rotation */
  .et-crank {
    transform-origin: 60px 36px;
    animation: et-turn-crank 2.4s linear infinite;
  }

  @keyframes et-turn-crank {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Diaphragm stylus vibration */
  .et-stylus {
    transform-origin: 38px 24px;
    animation: et-stylus-buzz 0.15s ease-in-out infinite alternate;
  }

  @keyframes et-stylus-buzz {
    0% { transform: translateY(0px) scaleY(1); }
    100% { transform: translateY(0.8px) scaleY(0.95); }
  }

  /* Audio acoustic horn wave emission */
  .et-sound-wave {
    animation: et-wave-pulse 1.2s ease-out infinite;
    opacity: 0;
    transform-origin: 22px 18px;
  }

  @keyframes et-wave-pulse {
    0% { opacity: 0.8; transform: scale(0.6) translate(0, 0); }
    50% { opacity: 0.5; }
    100% { opacity: 0; transform: scale(1.4) translate(-6px, -6px); }
  }

  .et-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptEdisonTinfoil extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${edisonTinfoilStyles}</style>
      <div class="et-box">
        <div class="et-stage">
          <svg class="et-svg" viewBox="0 0 76 72">
            <!-- Cast-Iron Base Plate & Lathe Bed -->
            <rect x="6" y="50" width="64" height="6" rx="1" fill="#1b1b1b" stroke="#616161" stroke-width="0.8" />
            <rect x="10" y="44" width="6" height="6" fill="#37474f" stroke="#78909c" stroke-width="0.6" />
            <rect x="60" y="44" width="6" height="6" fill="#37474f" stroke="#78909c" stroke-width="0.6" />

            <!-- Grooved Lead-Screw Axis Shaft -->
            <line x1="8" y1="36" x2="68" y2="36" stroke="#b0bec5" stroke-width="1.8" />
            <line x1="12" y1="36" x2="22" y2="36" stroke="#ffd54f" stroke-width="1.2" stroke-dasharray="1.5 1.5" />

            <!-- Tinfoil Mandrel Cylinder with Grooved Sound Tracks -->
            <g class="et-mandrel">
              <rect x="24" y="27" width="28" height="18" rx="2" fill="#cfd8dc" stroke="#eceff1" stroke-width="0.8" />
              <!-- Tinfoil embossed foil texture lines -->
              <line x1="28" y1="27" x2="28" y2="45" stroke="#78909c" stroke-width="0.6" />
              <line x1="32" y1="27" x2="32" y2="45" stroke="#78909c" stroke-width="0.6" />
              <line x1="36" y1="27" x2="36" y2="45" stroke="#78909c" stroke-width="0.6" />
              <line x1="40" y1="27" x2="40" y2="45" stroke="#78909c" stroke-width="0.6" />
              <line x1="44" y1="27" x2="44" y2="45" stroke="#78909c" stroke-width="0.6" />
              <line x1="48" y1="27" x2="48" y2="45" stroke="#78909c" stroke-width="0.6" />
            </g>

            <!-- Diaphragm Housing & Stylus Needle -->
            <g class="et-stylus">
              <rect x="33" y="16" width="10" height="7" rx="1" fill="#ffb300" stroke="#ffe082" stroke-width="0.7" />
              <!-- Steel needle tracing foil track -->
              <polygon points="37,23 39,23 38,28" fill="#ffffff" />
            </g>

            <!-- Brass Speaking/Listening Cone Funnel Horn -->
            <path d="M 33 19.5 L 18 12 L 18 27 Z" fill="rgba(255, 179, 0, 0.35)" stroke="#ffb300" stroke-width="0.8" />
            <!-- Emitted Acoustic Rings -->
            <path class="et-sound-wave" d="M 15 11 A 9 9 0 0 0 15 28" fill="none" stroke="#ffe082" stroke-width="0.8" />

            <!-- Flywheel & Hand Crank at Right -->
            <circle cx="60" cy="36" r="8" fill="none" stroke="#ffb300" stroke-width="1.2" />
            <g class="et-crank">
              <line x1="60" y1="36" x2="68" y2="36" stroke="#ffb300" stroke-width="1.2" />
              <circle cx="68" cy="36" r="1.8" fill="#8d6e63" stroke="#d7ccc8" stroke-width="0.5" />
            </g>
          </svg>
        </div>
        <div class="et-label">EDISON TINFOIL</div>
      </div>
    `;
  }
}

customElements.define('concept-edison-tinfoil', ConceptEdisonTinfoil);
