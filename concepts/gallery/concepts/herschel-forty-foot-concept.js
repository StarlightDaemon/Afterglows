const herschelFortyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hf-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151824 0%, #030408 100%);
    border: 1.5px solid rgba(100, 181, 246, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(100, 181, 246, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hf-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hf-svg {
    width: 76px;
    height: 72px;
  }

  /* 40-foot iron tube elevation by block and tackle pulleys */
  .hf-giant-tube {
    transform-origin: 20px 54px;
    animation: hf-elevate-tube 4.2s ease-in-out infinite alternate;
  }

  @keyframes hf-elevate-tube {
    0% { transform: rotate(-12deg); }
    100% { transform: rotate(18deg); }
  }

  /* Timber scaffolding gantry circular track turntable rotation */
  .hf-gantry-frame {
    animation: hf-turntable-swivel 3.6s ease-in-out infinite alternate;
    transform-origin: 38px 62px;
  }

  @keyframes hf-turntable-swivel {
    0% { transform: scaleX(0.98); }
    100% { transform: scaleX(1.02); }
  }

  /* 48-inch speculum metal mirror deep starlight reflection */
  .hf-speculum-gleam {
    animation: hf-speculum-flash 2s ease-in-out infinite alternate;
  }

  @keyframes hf-speculum-flash {
    0% { fill: #90caf9; opacity: 0.6; }
    100% { fill: #ffffff; opacity: 1; filter: drop-shadow(0 0 3px #64b5f6); }
  }

  .hf-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(100, 181, 246, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHerschelFortyFoot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${herschelFortyStyles}</style>
      <div class="hf-box">
        <div class="hf-stage">
          <svg class="hf-svg" viewBox="0 0 76 72">
            <!-- Circular Ground Foundation Wall & Rollers Track (Slough, England) -->
            <ellipse cx="38" cy="62" rx="30" ry="6" fill="#1b2432" stroke="#455a64" stroke-width="0.8" />

            <!-- Wooden Pyramid/A-Frame Scaffolding Gantry Truss (Beam Network) -->
            <g class="hf-gantry-frame">
              <!-- Giant Diagonal Pine Struts -->
              <line x1="12" y1="62" x2="38" y2="8" stroke="#5d4037" stroke-width="1.2" />
              <line x1="64" y1="62" x2="38" y2="8" stroke="#5d4037" stroke-width="1.2" />
              <line x1="24" y1="62" x2="38" y2="8" stroke="#5d4037" stroke-width="0.8" />
              <line x1="52" y1="62" x2="38" y2="8" stroke="#5d4037" stroke-width="0.8" />

              <!-- Cross-Bracing Horizontal Gallery Platforms -->
              <line x1="22" y1="44" x2="54" y2="44" stroke="#8d6e63" stroke-width="0.8" />
              <line x1="28" y1="28" x2="48" y2="28" stroke="#8d6e63" stroke-width="0.8" />
              <!-- Top Pulley Head & Tackle Sheaves -->
              <rect x="35" y="6" width="6" height="4" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            </g>

            <!-- 40-Foot Sheet-Iron Telescope Tube & Front-View Observer's Platform -->
            <g class="hf-giant-tube">
              <!-- 4-Foot Diameter Rolled Sheet Iron Tube -->
              <rect x="18" y="44" width="46" height="8" rx="1" fill="#263238" stroke="#90caf9" stroke-width="0.8" />

              <!-- 48-Inch Speculum Metal Mirror (Copper & Tin Alloy at Bottom / Left) -->
              <rect class="hf-speculum-gleam" x="18" y="44" width="3" height="8" rx="0.5" />

              <!-- Front-View Eyepiece at Open Tube Mouth (Herschelian Front-View) -->
              <circle cx="64" cy="45" r="1.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

              <!-- Observer's Sighting Basket / Cradled Gallery (Top Right) -->
              <rect x="62" y="38" width="8" height="6" rx="0.5" fill="#4e342e" stroke="#8d6e63" stroke-width="0.6" />

              <!-- Suspended Rigging Tackle Ropes (From Gantry Apex to Tube) -->
              <line x1="38" y1="8" x2="56" y2="44" stroke="#cfd8dc" stroke-width="0.6" stroke-dasharray="2 1" />
            </g>

            <!-- Enceladus / Mimas Moon Discovery Annotation -->
            <text x="38" y="66" font-family="monospace" font-size="3" fill="#90caf9" text-anchor="middle">HERSCHEL 40-FT REFLECTOR</text>
          </svg>
        </div>
        <div class="hf-label">HERSCHEL 40-FT</div>
      </div>
    `;
  }
}

customElements.define('concept-herschel-forty-foot', ConceptHerschelFortyFoot);
