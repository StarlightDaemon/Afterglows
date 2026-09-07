const planeTableAlidadeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201e16 0%, #070604 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pt-svg {
    width: 76px;
    height: 72px;
  }

  /* Telescopic alidade rotating on map drawing board */
  .pt-alidade-arm {
    transform-origin: 38px 38px;
    animation: pt-pivot-alidade 4.2s ease-in-out infinite alternate;
  }

  @keyframes pt-pivot-alidade {
    0% { transform: rotate(-30deg); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(45deg); }
  }

  /* Cartographic direct field plotting ray line */
  .pt-plot-ray {
    animation: pt-ray-draw 2s ease-in-out infinite alternate;
  }

  @keyframes pt-ray-draw {
    0% { opacity: 0.3; stroke-dashoffset: 20; }
    100% { opacity: 0.9; stroke-dashoffset: 0; stroke: #ffea00; }
  }

  /* Compass trough magnetic needle twitch */
  .pt-compass-needle {
    transform-origin: 60px 48px;
    animation: pt-needle-drift 2.2s ease-in-out infinite alternate;
  }

  @keyframes pt-needle-drift {
    0% { transform: rotate(-4deg); }
    100% { transform: rotate(4deg); }
  }

  .pt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPlaneTableAlidade extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${planeTableAlidadeStyles}</style>
      <div class="pt-box">
        <div class="pt-stage">
          <svg class="pt-svg" viewBox="0 0 76 72">
            <!-- Wooden Surveying Tripod Stand Legs (Below table) -->
            <polygon points="38,50 18,68 22,68 38,54 54,68 58,68" fill="#3e2723" stroke="#5d4037" stroke-width="0.5" />

            <!-- Plane Table Drawing Board (Trapezoidal Perspective Surface) -->
            <polygon points="12,24 64,24 68,52 8,52" fill="#fffde7" stroke="#b0bec5" stroke-width="0.8" />
            <!-- Mounted Topographical Paper Sheet Grid & Inscribed Map Contours -->
            <path d="M 14,26 L 62,26 L 65,50 L 11,50 Z" fill="#fff9c4" stroke="#d7ccc8" stroke-width="0.5" />
            <path d="M 18 36 Q 28 32 36 38 T 54 34" fill="none" stroke="#8d6e63" stroke-width="0.6" stroke-dasharray="1 1" />
            <path d="M 22 44 Q 32 40 42 45 T 58 42" fill="none" stroke="#8d6e63" stroke-width="0.6" stroke-dasharray="1 1" />

            <!-- Circular Spirit Level Bubble on Board -->
            <circle cx="18" cy="30" r="2.5" fill="#e0f2f1" stroke="#00bfa5" stroke-width="0.5" />
            <circle cx="18" cy="30" r="0.8" fill="#00bfa5" />

            <!-- Trough Declination Compass (Right edge) -->
            <rect x="54" y="44" width="12" height="6" rx="0.5" fill="#212121" stroke="#ffd700" stroke-width="0.5" />
            <g class="pt-compass-needle">
              <polygon points="56,47 60,45.5 64,47 60,48.5" fill="#e53935" />
              <polygon points="56,47 60,46 56,47" fill="#42a5f5" />
            </g>

            <!-- Telescopic Alidade with Beveled Brass Fiducial Ruler Edge -->
            <g class="pt-alidade-arm">
              <!-- Brass Beveled Plotting Ruler Blade (Fiducial Edge) -->
              <rect x="18" y="37" width="40" height="3" rx="0.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
              <!-- Sighting Telescope Pillar & Tube -->
              <rect x="36" y="27" width="4" height="10" fill="#ffc107" stroke="#ffa000" stroke-width="0.5" />
              <rect x="22" y="25" width="32" height="3" rx="0.8" fill="#4e342e" stroke="#ffd700" stroke-width="0.7" />
              <!-- Eyepiece & Objective -->
              <rect x="18" y="24.5" width="4" height="4" rx="0.5" fill="#ffd700" />
              <rect x="54" y="24" width="4" height="5" rx="0.8" fill="#ffd700" />

              <!-- Inscribed Direct Sighting / Plotting Ray Vector -->
              <line class="pt-plot-ray" x1="58" y1="26.5" x2="74" y2="26.5" stroke="#ffd700" stroke-width="0.8" stroke-dasharray="2 1" />
            </g>
          </svg>
        </div>
        <div class="pt-label">PLANE TABLE ALIDADE</div>
      </div>
    `;
  }
}

customElements.define('concept-plane-table-alidade', ConceptPlaneTableAlidade);
