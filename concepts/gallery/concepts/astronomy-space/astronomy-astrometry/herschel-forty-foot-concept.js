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

  /* 40-foot sheet-iron tube wide elevation by block and tackle pulleys */
  .hf-giant-tube {
    transform-origin: 18px 52px;
    animation: hf-elevate-tube 4s ease-in-out infinite alternate;
  }

  @keyframes hf-elevate-tube {
    0% { transform: rotate(-5deg); }
    100% { transform: rotate(36deg); }
  }

  /* Timber scaffolding gantry circular track turntable swiveling */
  .hf-gantry-frame {
    animation: hf-turntable-swivel 3.2s ease-in-out infinite alternate;
    transform-origin: 38px 62px;
  }

  @keyframes hf-turntable-swivel {
    0% { transform: translateX(-5px); }
    100% { transform: translateX(5px); }
  }

  /* 48-inch speculum metal mirror deep starlight reflection */
  .hf-speculum-gleam {
    animation: hf-speculum-flash 2s ease-in-out infinite alternate;
  }

  @keyframes hf-speculum-flash {
    0% { fill: #90caf9; }
    100% { fill: #ffffff; filter: drop-shadow(0 0 6px #64b5f6); }
  }

  /* Starlight photon beam entering tube mouth */
  .hf-star-photon {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #64b5f6;
    z-index: 6;
    animation: hf-photon-travel 1.8s linear infinite;
  }

  @keyframes hf-photon-travel {
    0% { transform: translate(32px, -22px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(4px, 4px) scale(1.2); opacity: 0; }
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
          <div class="hf-star-photon"></div>

          <svg class="hf-svg" viewBox="0 0 76 72">
            <!-- Circular Ground Foundation Wall & Rollers Track (Slough, England) -->
            <ellipse cx="38" cy="62" rx="30" ry="6" fill="#1b2432" stroke="#64b5f6" stroke-width="1" />

            <!-- Wooden Pyramid/A-Frame Scaffolding Gantry Truss with Turntable Swivel -->
            <g class="hf-gantry-frame">
              <!-- Giant Diagonal Pine Struts -->
              <line x1="12" y1="62" x2="38" y2="8" stroke="#8d6e63" stroke-width="1.6" />
              <line x1="64" y1="62" x2="38" y2="8" stroke="#8d6e63" stroke-width="1.6" />
              <line x1="24" y1="62" x2="38" y2="8" stroke="#6d4c41" stroke-width="1.2" />
              <line x1="52" y1="62" x2="38" y2="8" stroke="#6d4c41" stroke-width="1.2" />

              <!-- Cross-Bracing Horizontal Gallery Platforms -->
              <line x1="20" y1="44" x2="56" y2="44" stroke="#ffd54f" stroke-width="1.2" />
              <line x1="26" y1="28" x2="50" y2="28" stroke="#ffd54f" stroke-width="1.2" />
              <!-- Top Pulley Head & Tackle Sheaves -->
              <rect x="34" y="6" width="8" height="5" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
            </g>

            <!-- 40-Foot Sheet-Iron Telescope Tube & Front-View Observer's Platform (Bold & Prominent) -->
            <g class="hf-giant-tube">
              <!-- 4-Foot Diameter Rolled Sheet Iron Tube -->
              <rect x="16" y="44" width="50" height="12" rx="2" fill="#263238" stroke="#64b5f6" stroke-width="1.4" />
              <line x1="16" y1="50" x2="66" y2="50" stroke="#90caf9" stroke-width="0.8" />

              <!-- 48-Inch Speculum Metal Mirror (Copper & Tin Alloy at Bottom / Left) -->
              <rect class="hf-speculum-gleam" x="16" y="44" width="4" height="12" rx="1" />

              <!-- Front-View Eyepiece at Open Tube Mouth (Herschelian Front-View) -->
              <circle cx="66" cy="46" r="2.2" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />

              <!-- Observer's Sighting Basket / Cradled Gallery (Top Right) -->
              <rect x="62" y="36" width="9" height="7" rx="1" fill="#4e342e" stroke="#ffd54f" stroke-width="0.8" />

              <!-- Suspended Rigging Tackle Ropes (From Gantry Apex to Tube) -->
              <line x1="38" y1="8" x2="58" y2="44" stroke="#cfd8dc" stroke-width="1" stroke-dasharray="3 1" />
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

if (!customElements.get('concept-herschel-forty-foot')) {
  customElements.define('concept-herschel-forty-foot', ConceptHerschelFortyFoot);
}
