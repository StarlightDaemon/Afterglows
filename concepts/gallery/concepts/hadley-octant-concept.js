const hadleyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ho-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 45%, #18202c 0%, #05080f 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ho-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ho-svg {
    width: 76px;
    height: 72px;
  }

  /* Index Arm Angular Oscillation */
  .ho-index-arm {
    transform-origin: 38px 12px;
    animation: ho-sweep 4s ease-in-out infinite alternate;
  }

  @keyframes ho-sweep {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(20deg); }
  }

  /* Double-reflection celestial light path */
  .ho-light-beam {
    stroke: #ffd700;
    stroke-dasharray: 3 2;
    animation: ho-beam-flow 1.2s linear infinite;
  }

  @keyframes ho-beam-flow {
    to { stroke-dashoffset: -10; }
  }

  /* Mahogany Ebony Frame */
  .ho-octant-frame {
    fill: #2d1810;
    stroke: #ffb300;
    stroke-width: 1.2;
  }

  .ho-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHadleyOctant extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hadleyStyles}</style>
      <div class="ho-box">
        <div class="ho-stage">
          <svg class="ho-svg" viewBox="0 0 76 72">
            <!-- Ebony / Brass Triangular Octant Frame (45° Arc Sector) -->
            <path class="ho-octant-frame" d="M 38 12 L 18 56 A 48 48 0 0 0 58 56 Z" />
            <path d="M 38 18 L 22 53 A 44 44 0 0 0 54 53 Z" fill="#18202c" stroke="#ffb300" stroke-width="0.8" />

            <!-- Inlaid Ivory Arc Graduations Scale (0° - 90°) -->
            <path d="M 16 56 A 48 48 0 0 0 60 56 L 61 59 A 51 51 0 0 1 15 59 Z" fill="#fff9c4" stroke="#ff8f00" stroke-width="0.6" />

            <!-- Index Specular Mirror at Apex (38, 12) -->
            <rect x="35" y="8" width="6" height="4" fill="#00e5ff" stroke="#ffd700" stroke-width="0.8" />

            <!-- Split Horizon Glass on Left Limb (Half-silvered mirror) -->
            <rect x="22" y="32" width="4" height="6" fill="#00e5ff" stroke="#cfd8dc" stroke-width="0.8" />
            <line x1="24" y1="32" x2="24" y2="38" stroke="#ffffff" stroke-width="0.8" />

            <!-- Sighting Telescope / Sight Pin on Right Limb -->
            <rect x="46" y="36" width="10" height="4" rx="1" fill="#424242" stroke="#ffb300" stroke-width="0.8" />

            <!-- Swiveling Index Arm with Vernier Clamp at Limb -->
            <g class="ho-index-arm">
              <!-- Radial Index Bar -->
              <line x1="38" y1="12" x2="38" y2="58" stroke="#ffd54f" stroke-width="1.6" stroke-linecap="round" />
              <!-- Vernier Micrometer Clamping Tangent Screw -->
              <rect x="35" y="55" width="6" height="5" rx="0.8" fill="#ffd700" stroke="#ff6f00" stroke-width="0.6" />
              <!-- Pivot Nut at Apex -->
              <circle cx="38" cy="12" r="2.5" fill="#ffd700" stroke="#ff6f00" stroke-width="0.8" />
            </g>

            <!-- Celestial Double-Reflection Ray Trace: Sun (Top-Left) -> Index Mirror -> Horizon Glass -> Telescope -->
            <circle cx="10" cy="10" r="3" fill="#ffd700" />
            <line x1="12" y1="11" x2="36" y2="10" class="ho-light-beam" stroke-width="1.2" />
            <line x1="36" y1="10" x2="24" y2="34" class="ho-light-beam" stroke-width="1.2" />
            <line x1="24" y1="34" x2="46" y2="38" class="ho-light-beam" stroke-width="1.2" />
          </svg>
        </div>
        <div class="ho-label">HADLEY OCTANT</div>
      </div>
    `;
  }
}

customElements.define('concept-hadley-octant', ConceptHadleyOctant);
