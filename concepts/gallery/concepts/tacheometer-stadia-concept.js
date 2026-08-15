const tacheometerStadiaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ts-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #162420 0%, #030806 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ts-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ts-svg {
    width: 76px;
    height: 72px;
  }

  /* Stadia reticle optical crosshairs & interval hair glow */
  .ts-reticle-hairs {
    animation: ts-hairs-glow 2s ease-in-out infinite alternate;
  }

  @keyframes ts-hairs-glow {
    0% { stroke: #00e676; }
    100% { stroke: #ffffff; filter: drop-shadow(0 0 2px #00e676); }
  }

  /* Distant E-pattern leveling staff rod reading shift */
  .ts-staff-rod {
    animation: ts-staff-sway 3.2s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes ts-staff-sway {
    0% { transform: translateY(-3px); }
    100% { transform: translateY(3px); }
  }

  /* Optical rangefinder calculation beam */
  .ts-range-cone {
    animation: ts-cone-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes ts-cone-pulse {
    0% { opacity: 0.15; }
    100% { opacity: 0.4; fill: #69f0ae; }
  }

  .ts-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTacheometerStadia extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tacheometerStadiaStyles}</style>
      <div class="ts-box">
        <div class="ts-stage">
          <svg class="ts-svg" viewBox="0 0 76 72">
            <!-- Circular Eyepiece Field of View Ring (Looking through Telescope) -->
            <circle cx="38" cy="36" r="28" fill="#081812" stroke="#00e676" stroke-width="1.4" />
            <circle cx="38" cy="36" r="26" fill="none" stroke="#2e7d32" stroke-width="0.6" stroke-dasharray="2 1" />

            <!-- Optical Tacheometric Triangulation Cone (1:100 Ratio Stadia Constant) -->
            <polygon class="ts-range-cone" points="38,36 30,12 46,12" fill="#00e676" />
            <polygon class="ts-range-cone" points="38,36 30,60 46,60" fill="#00e676" />

            <!-- Sighted Surveyor's E-Pattern Leveling Rod / Stadia Staff (Vertical in center) -->
            <g class="ts-staff-rod">
              <!-- Wooden Staff Body -->
              <rect x="35" y="10" width="6" height="52" fill="#ffffff" stroke="#37474f" stroke-width="0.5" />
              <!-- Black & Red Alternating Metric 'E' Block Divisions -->
              <rect x="35" y="12" width="4" height="4" fill="#000000" />
              <rect x="37" y="16" width="4" height="4" fill="#d32f2f" />
              <rect x="35" y="20" width="4" height="4" fill="#000000" />
              <rect x="37" y="24" width="4" height="4" fill="#d32f2f" />
              <rect x="35" y="28" width="4" height="4" fill="#000000" />
              <rect x="37" y="32" width="4" height="4" fill="#d32f2f" />
              <rect x="35" y="36" width="4" height="4" fill="#000000" />
              <rect x="37" y="40" width="4" height="4" fill="#d32f2f" />
              <rect x="35" y="44" width="4" height="4" fill="#000000" />
              <rect x="37" y="48" width="4" height="4" fill="#d32f2f" />
              <rect x="35" y="52" width="4" height="4" fill="#000000" />
            </g>

            <!-- Diaphragm Glass Spider-Web Stadia Reticle Crosshairs -->
            <g class="ts-reticle-hairs" fill="none" stroke-width="0.8">
              <!-- Main Vertical Center Wire -->
              <line x1="38" y1="8" x2="38" y2="64" />
              <!-- Main Horizontal Center Crosshair Wire -->
              <line x1="10" y1="36" x2="66" y2="36" stroke-width="1" />
              <!-- Upper Stadia Interval Wire (Interval s = Upper - Lower) -->
              <line x1="24" y1="24" x2="52" y2="24" />
              <!-- Lower Stadia Interval Wire -->
              <line x1="24" y1="48" x2="52" y2="48" />
            </g>

            <!-- Distance Law Formula Annotation -->
            <text x="38" y="61" font-family="monospace" font-size="3" fill="#b9f6ca" text-anchor="middle">DIST = 100 × S</text>
          </svg>
        </div>
        <div class="ts-label">TACHEOMETER STADIA</div>
      </div>
    `;
  }
}

customElements.define('concept-tacheometer-stadia', ConceptTacheometerStadia);
