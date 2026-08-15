const ramsdenTheodoliteStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a2218 0%, #050a04 100%);
    border: 1.5px solid rgba(76, 175, 80, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rt-svg {
    width: 76px;
    height: 72px;
  }

  /* 3-foot Great Achromatic Transit Telescope Altitude Swivel */
  .rt-telescope {
    transform-origin: 38px 26px;
    animation: rt-scope-elevate 3.6s ease-in-out infinite alternate;
  }

  @keyframes rt-scope-elevate {
    0% { transform: rotate(-18deg); }
    50% { transform: rotate(4deg); }
    100% { transform: rotate(22deg); }
  }

  /* Horizontal Azimuth 36-Inch Circle & Reading Microscope Alignment */
  .rt-azimuth-ring {
    animation: rt-ring-glow 2s ease-in-out infinite alternate;
  }

  @keyframes rt-ring-glow {
    0% { stroke: #81c784; }
    100% { stroke: #c8e6c9; filter: drop-shadow(0 0 2px #4caf50); }
  }

  /* Geodetic triangulation sighting laser/ray beam */
  .rt-sight-beam {
    stroke-dasharray: 4 2;
    animation: rt-beam-dash 1s linear infinite;
  }

  @keyframes rt-beam-dash {
    to { stroke-dashoffset: -12; }
  }

  .rt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(129, 199, 132, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRamsdenTheodolite extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ramsdenTheodoliteStyles}</style>
      <div class="rt-box">
        <div class="rt-stage">
          <svg class="rt-svg" viewBox="0 0 76 72">
            <!-- Heavy Mahogany / Brass Geodetic Tripod Base -->
            <polygon points="38,58 16,70 20,70 38,60 56,70 60,70" fill="#3e2723" stroke="#5d4037" stroke-width="0.6" />
            <!-- Tribrach Leveling Screws -->
            <circle cx="28" cy="58" r="1.8" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            <circle cx="48" cy="58" r="1.8" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

            <!-- 36-Inch Horizontal Graduated Azimuth Circle (Divided by Ramsden Engine) -->
            <ellipse class="rt-azimuth-ring" cx="38" cy="52" rx="22" ry="5" fill="#1b2e1b" stroke="#81c784" stroke-width="1.2" />
            <ellipse cx="38" cy="52" rx="16" ry="3.5" fill="none" stroke="#ffd700" stroke-width="0.6" stroke-dasharray="1 1.5" />

            <!-- Vertical A-Frame Brass Support Trunnion Pillars -->
            <path d="M 26 52 L 34 26 L 37 26 L 31 52 Z" fill="#2e3b2e" stroke="#ffd700" stroke-width="0.6" />
            <path d="M 50 52 L 42 26 L 39 26 L 45 52 Z" fill="#2e3b2e" stroke="#ffd700" stroke-width="0.6" />

            <!-- Dual Reading Micrometer Microscopes for Circle Sub-Arcsecond Reading -->
            <!-- Left Microscope -->
            <line x1="20" y1="46" x2="26" y2="52" stroke="#cfd8dc" stroke-width="1.4" />
            <circle cx="19" cy="45" r="1.5" fill="#ffd700" />
            <!-- Right Microscope -->
            <line x1="56" y1="46" x2="50" y2="52" stroke="#cfd8dc" stroke-width="1.4" />
            <circle cx="57" cy="45" r="1.5" fill="#ffd700" />

            <!-- Achromatic Transit Telescope with Objective Lens and Sighting Vector -->
            <g class="rt-telescope">
              <!-- Central trunnion axis pivot hub & spirit level -->
              <circle cx="38" cy="26" r="3.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
              <rect x="30" y="24" width="16" height="2" rx="0.5" fill="#00e676" opacity="0.8" />

              <!-- Main brass telescope tube -->
              <rect x="14" y="24.5" width="48" height="3" rx="1" fill="#4e342e" stroke="#ffd700" stroke-width="0.8" />
              <!-- Eyepiece section (Left) -->
              <rect x="10" y="24" width="5" height="4" rx="0.5" fill="#ffd700" />
              <!-- Objective dew shield / lens (Right) -->
              <rect x="58" y="23" width="5" height="6" rx="1" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />

              <!-- Sighting Line of Collimation Ray -->
              <line class="rt-sight-beam" x1="63" y1="26" x2="76" y2="26" stroke="#b9f6ca" stroke-width="0.8" />
            </g>
          </svg>
        </div>
        <div class="rt-label">RAMSDEN THEODOLITE</div>
      </div>
    `;
  }
}

customElements.define('concept-ramsden-theodolite', ConceptRamsdenTheodolite);
