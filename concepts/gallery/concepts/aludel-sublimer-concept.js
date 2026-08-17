const aludelSublimerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .as-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 70%, #200e12 0%, #080204 100%);
    border: 1.5px solid rgba(255, 82, 82, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 82, 82, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .as-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .as-svg {
    width: 76px;
    height: 72px;
  }

  /* Discrete sublimation vapor parcels ascending through pots */
  .as-vapor-parcel {
    fill: #ff5252;
    box-shadow: 0 0 6px #ff1744;
  }

  .as-vp1 { animation: as-ascend-1 2.2s ease-in-out infinite; }
  .as-vp2 { animation: as-ascend-2 2.2s ease-in-out infinite; animation-delay: 0.75s; }
  .as-vp3 { animation: as-ascend-3 2.2s ease-in-out infinite; animation-delay: 1.5s; }

  @keyframes as-ascend-1 {
    0% { transform: translateY(0) scale(0.6); opacity: 0; }
    20% { opacity: 1; transform: translateY(-10px) scale(1.1); fill: #ff9100; }
    60% { transform: translateY(-24px) scale(0.9); fill: #ff1744; }
    90%, 100% { transform: translateY(-38px) scale(1.3); opacity: 0; }
  }

  @keyframes as-ascend-2 {
    0% { transform: translateY(0) translateX(2px) scale(0.5); opacity: 0; }
    20% { opacity: 1; transform: translateY(-12px) translateX(-2px) scale(1.2); fill: #ffd600; }
    60% { transform: translateY(-26px) translateX(2px) scale(0.9); fill: #ff5252; }
    90%, 100% { transform: translateY(-38px) translateX(0) scale(1.4); opacity: 0; }
  }

  @keyframes as-ascend-3 {
    0% { transform: translateY(0) translateX(-2px) scale(0.6); opacity: 0; }
    20% { opacity: 1; transform: translateY(-10px) translateX(2px) scale(1); fill: #ff5252; }
    60% { transform: translateY(-24px) translateX(-1px) scale(1.1); fill: #ff1744; }
    90%, 100% { transform: translateY(-38px) translateX(0) scale(1.3); opacity: 0; }
  }

  /* Ruby crystalline cinnabar encrustations growing on upper pot walls */
  .as-crystals {
    fill: #ff1744;
    animation: as-crystallize 2s ease-in-out infinite alternate;
  }

  @keyframes as-crystallize {
    0% { opacity: 0.4; transform: scale(0.85); }
    100% { opacity: 1; transform: scale(1.25); filter: drop-shadow(0 0 4px #ff5252); }
  }

  /* Active furnace fire tongues leaping */
  .as-furnace-flame {
    transform-origin: 38px 62px;
    animation: as-flame-flicker 0.6s ease-in-out infinite alternate;
  }

  @keyframes as-flame-flicker {
    0% { transform: translateY(0) scaleY(0.8) scaleX(0.9); fill: #ff3d00; }
    100% { transform: translateY(-3px) scaleY(1.3) scaleX(1.1); fill: #ffd600; filter: drop-shadow(0 0 6px #ff6d00); }
  }

  .as-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 82, 82, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAludelSublimer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${aludelSublimerStyles}</style>
      <div class="as-box">
        <div class="as-stage">
          <svg class="as-svg" viewBox="0 0 76 72">
            <!-- Furnace Base with Heating Grate -->
            <path d="M 22 66 L 54 66 L 50 56 L 26 56 Z" fill="#2d1318" stroke="#ff5252" stroke-width="1" />
            <g class="as-furnace-flame">
              <circle cx="38" cy="60" r="3.5" />
              <circle cx="32" cy="61" r="2.5" />
              <circle cx="44" cy="61" r="2.5" />
              <polygon points="38,55 35,62 41,62" fill="#ffd600" />
            </g>

            <!-- Tier 1: Bottom Cucurbit (Boiling Mineral Matrix) -->
            <path d="M 30 56 C 24 54, 24 46, 32 44 L 32 42 L 44 42 L 44 44 C 52 46, 52 54, 46 56 Z" 
                  fill="rgba(255, 82, 82, 0.08)" stroke="#ff5252" stroke-width="1.2" />

            <!-- Tier 2: Middle Aludel Pear-Pot -->
            <path d="M 32 42 C 26 40, 26 32, 33 30 L 33 28 L 43 28 L 43 30 C 50 32, 50 40, 44 42 Z" 
                  fill="rgba(255, 82, 82, 0.08)" stroke="#ff5252" stroke-width="1.2" />

            <!-- Tier 3: Top Condensing Aludel Cap -->
            <path d="M 33 28 C 28 26, 28 16, 38 8 C 48 16, 48 26, 43 28 Z" 
                  fill="rgba(255, 82, 82, 0.12)" stroke="#ff5252" stroke-width="1.2" />

            <!-- Ascending Sublimation Vapor Parcels -->
            <circle class="as-vapor-parcel as-vp1" cx="38" cy="50" r="2.5" />
            <circle class="as-vapor-parcel as-vp2" cx="38" cy="50" r="2.8" />
            <circle class="as-vapor-parcel as-vp3" cx="38" cy="50" r="2.2" />

            <!-- Sublimed Cinnabar Needles on Inside Walls -->
            <g class="as-crystals">
              <!-- Tier 2 crystals -->
              <polygon points="28,34 31,35 29,37" />
              <polygon points="48,34 45,35 47,37" />
              <!-- Tier 3 crystals -->
              <polygon points="32,20 35,21 33,23" />
              <polygon points="44,20 41,21 43,23" />
              <polygon points="36,12 38,14 40,12" />
            </g>
          </svg>
        </div>
        <div class="as-label">ALUDEL SUBLIMER</div>
      </div>
    `;
  }
}

customElements.define('concept-aludel-sublimer', ConceptAludelSublimer);
