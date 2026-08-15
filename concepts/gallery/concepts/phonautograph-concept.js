const phonautographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pa-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b18 0%, #080605 100%);
    border: 1.5px solid rgba(230, 230, 230, 0.4);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pa-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pa-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating lampblack-smoked cylinder */
  .pa-cylinder {
    animation: pa-spin-cylinder 3s linear infinite;
    transform-origin: 48px 36px;
  }

  @keyframes pa-spin-cylinder {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-0.8px); }
    100% { transform: translateY(0px); }
  }

  /* Hog bristle stylus sound vibration */
  .pa-bristle {
    animation: pa-bristle-wiggle 0.12s ease-in-out infinite alternate;
    transform-origin: 32px 36px;
  }

  @keyframes pa-bristle-wiggle {
    0% { transform: rotate(-6deg); }
    100% { transform: rotate(6deg); }
  }

  /* White sound-wave trace line drawn through black soot */
  .pa-white-trace path {
    stroke: #ffffff;
    stroke-width: 1;
    fill: none;
    animation: pa-trace-scroll 1.5s linear infinite;
    filter: drop-shadow(0 0 2px #ffffff);
  }

  @keyframes pa-trace-scroll {
    to { stroke-dashoffset: -28; }
  }

  /* Plaster acoustic barrel horn vibration */
  .pa-horn {
    animation: pa-horn-thrum 0.24s ease-in-out infinite alternate;
    transform-origin: 18px 36px;
  }

  @keyframes pa-horn-thrum {
    0% { transform: scale(0.98); }
    100% { transform: scale(1.02); }
  }

  .pa-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 255, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPhonautograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${phonautographStyles}</style>
      <div class="pa-box">
        <div class="pa-stage">
          <svg class="pa-svg" viewBox="0 0 76 72">
            <!-- Heavy Mahogany / Oak Bed Base -->
            <rect x="6" y="52" width="64" height="6" rx="1" fill="#2d1d16" stroke="#5c4033" stroke-width="0.8" />

            <!-- Scott Parabolic Plaster/Zinc Acoustic Collector Cone (Left) -->
            <g class="pa-horn">
              <path d="M 6 22 Q 18 27 24 33 L 24 39 Q 18 45 6 50 Z" fill="#4a4036" stroke="#d7ccc8" stroke-width="0.8" />
              <!-- Interior horn shadow -->
              <path d="M 6 25 Q 16 30 22 34 L 22 38 Q 16 42 6 47 Z" fill="#201c18" />
              <!-- Elastic Parchment Diaphragm at Throat -->
              <line x1="24" y1="33" x2="24" y2="39" stroke="#ffe082" stroke-width="1.2" />
            </g>

            <!-- Flexible Pig's Bristle / Boar Stylus (Leveraged to membrane) -->
            <g class="pa-bristle">
              <line x1="24" y1="36" x2="34" y2="36" stroke="#d7ccc8" stroke-width="0.8" />
              <polygon points="34,35 36,36 34,37" fill="#ffffff" />
            </g>

            <!-- Lampblack-Smoked Paper Recording Cylinder (Right) -->
            <g class="pa-cylinder">
              <!-- Lead-screw brass threaded arbor axle -->
              <line x1="32" y1="36" x2="68" y2="36" stroke="#ffd700" stroke-width="1.4" />
              <line x1="58" y1="36" x2="68" y2="36" stroke="#ffb300" stroke-width="1" stroke-dasharray="1 1" />

              <!-- Smoked Matte-Black Carbon Soot Surface -->
              <rect x="35" y="22" width="26" height="28" rx="2" fill="#111111" stroke="#424242" stroke-width="0.8" />

              <!-- Inscribed Au Clair de la Lune Sound Waveforms (White lines scratched through soot) -->
              <g class="pa-white-trace">
                <path d="M 35 28 Q 38 25 41 28 T 47 28 T 53 28 T 59 28 L 61 28" stroke-dasharray="28 0" />
                <path d="M 35 36 Q 38 31 41 36 T 47 36 T 53 36 T 59 36 L 61 36" stroke-dasharray="28 0" />
                <path d="M 35 44 Q 38 41 41 44 T 47 44 T 53 44 T 59 44 L 61 44" stroke-dasharray="28 0" />
              </g>
            </g>

            <!-- Hand Crank Wheel (Far Right) -->
            <circle cx="68" cy="36" r="6" fill="none" stroke="#ffd700" stroke-width="1" />
            <line x1="68" y1="36" x2="72" y2="32" stroke="#ffd700" stroke-width="1" />
            <circle cx="72" cy="32" r="1.2" fill="#8d6e63" />
          </svg>
        </div>
        <div class="pa-label">PHONAUTOGRAPH</div>
      </div>
    `;
  }
}

customElements.define('concept-phonautograph', ConceptPhonautograph);
