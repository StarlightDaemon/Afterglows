const cayleyGliderStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152028 0%, #03060a 100%);
    border: 1.5px solid rgba(3, 169, 244, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(3, 169, 244, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cg-svg {
    width: 76px;
    height: 72px;
  }

  /* Aerodynamic lift and gliding pitch glide path */
  .cg-glider-body {
    animation: cg-glide-pitch 3.4s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes cg-glide-pitch {
    0% { transform: translateY(-4px) rotate(-6deg); }
    50% { transform: translateY(2px) rotate(3deg); }
    100% { transform: translateY(-3px) rotate(-4deg); }
  }

  /* Cruciform universal-joint tail unit balance oscillation */
  .cg-cruciform-tail {
    transform-origin: 18px 36px;
    animation: cg-tail-trim 2s ease-in-out infinite alternate;
  }

  @keyframes cg-tail-trim {
    0% { transform: rotate(-5deg); }
    100% { transform: rotate(5deg); }
  }

  /* Aerodynamic laminar streamlines airflow over kite wing */
  .cg-streamlines path {
    stroke: #81d4fa;
    stroke-width: 0.8;
    fill: none;
    animation: cg-flow-dash 1.4s linear infinite;
  }

  @keyframes cg-flow-dash {
    to { stroke-dashoffset: -20; }
  }

  .cg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(3, 169, 244, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCayleyGovernableGlider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cayleyGliderStyles}</style>
      <div class="cg-box">
        <div class="cg-stage">
          <svg class="cg-svg" viewBox="0 0 76 72">
            <!-- Laminar Atmospheric Aerodynamic Streamlines -->
            <g class="cg-streamlines" stroke-dasharray="10 4">
              <path d="M 4 20 Q 30 14 72 18" />
              <path d="M 4 36 Q 30 30 72 34" />
              <path d="M 4 52 Q 30 46 72 50" />
            </g>

            <!-- Cayley 1804 Fixed-Wing Cambered Glider Assembly -->
            <g class="cg-glider-body">
              <!-- Long Cedar Fuselage Pole / Broomstick Spar -->
              <line x1="10" y1="36" x2="66" y2="36" stroke="#ffd700" stroke-width="1.6" />

              <!-- Cambered Monoplane Kite Wing (Oblique high-aspect cambered linen surface) -->
              <!-- Wing Ribs & Spar -->
              <path d="M 32 36 L 46 22 L 56 36 L 46 32 Z" fill="#e0f7fa" stroke="#03a9f4" stroke-width="0.8" />
              <!-- Dihedral angle cross spar -->
              <line x1="46" y1="22" x2="46" y2="36" stroke="#ffd700" stroke-width="1" />
              <!-- Center of Lift / Center of Pressure indicator -->
              <circle cx="46" cy="30" r="1.5" fill="#00e5ff" filter="drop-shadow(0 0 2px #00e5ff)" />

              <!-- Cruciform Universal Joint Tail (Elevator + Rudder in one) -->
              <g class="cg-cruciform-tail">
                <!-- Vertical Rudder Fin -->
                <polygon points="12,36 18,26 22,36" fill="#80deea" stroke="#00bcd4" stroke-width="0.6" />
                <!-- Horizontal Stabilizer Elevator Plane -->
                <line x1="12" y1="36" x2="22" y2="36" stroke="#00e5ff" stroke-width="1.8" />
                <polygon points="12,36 18,46 22,36" fill="#80deea" stroke="#00bcd4" stroke-width="0.6" />
                <!-- Universal Brass Gimbal Joint Pin -->
                <circle cx="22" cy="36" r="1.2" fill="#ffd700" />
              </g>

              <!-- Adjustable Lead Balancing Nose Weight (Front at Right) -->
              <circle cx="66" cy="36" r="2.5" fill="#78909c" stroke="#cfd8dc" stroke-width="0.6" />
            </g>

            <!-- Cayley First Principles Formula Annotation -->
            <text x="38" y="64" font-family="monospace" font-size="3" fill="#81d4fa" text-anchor="middle">LIFT = CL × ½ρV²S</text>
          </svg>
        </div>
        <div class="cg-label">CAYLEY GLIDER 1804</div>
      </div>
    `;
  }
}

customElements.define('concept-cayley-governable-glider', ConceptCayleyGovernableGlider);
