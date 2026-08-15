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

  /* Sublimation vapor particles ascending through necks */
  .as-sublime-stream {
    stroke: #ff5252;
    stroke-dasharray: 4 3;
    animation: as-stream 1.5s linear infinite;
  }

  @keyframes as-stream {
    to { stroke-dashoffset: -14; }
  }

  /* Ruby crystalline cinnabar encrustations growing on upper pot walls */
  .as-crystals {
    fill: #ff1744;
    animation: as-crystallize 2.8s ease-in-out infinite alternate;
  }

  @keyframes as-crystallize {
    0% { opacity: 0.3; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 3px #ff5252); }
  }

  /* Furnace coal embers glowing */
  .as-furnace-flame {
    fill: #ff9100;
    animation: as-flame 1.8s ease-in-out infinite alternate;
  }

  @keyframes as-flame {
    0% { transform: scale(0.9); opacity: 0.7; fill: #ff3d00; }
    100% { transform: scale(1.1); opacity: 1; fill: #ffd600; filter: drop-shadow(0 0 4px #ff6d00); }
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
            <circle class="as-furnace-flame" cx="38" cy="60" r="3.5" />
            <circle class="as-furnace-flame" cx="32" cy="61" r="2.5" />
            <circle class="as-furnace-flame" cx="44" cy="61" r="2.5" />

            <!-- Tier 1: Bottom Cucurbit (Boiling Mineral Matrix) -->
            <path d="M 30 56 C 24 54, 24 46, 32 44 L 32 42 L 44 42 L 44 44 C 52 46, 52 54, 46 56 Z" 
                  fill="rgba(255, 82, 82, 0.08)" stroke="#ff5252" stroke-width="1.2" />

            <!-- Tier 2: Middle Aludel Pear-Pot -->
            <path d="M 32 42 C 26 40, 26 32, 33 30 L 33 28 L 43 28 L 43 30 C 50 32, 50 40, 44 42 Z" 
                  fill="rgba(255, 82, 82, 0.08)" stroke="#ff5252" stroke-width="1.2" />

            <!-- Tier 3: Top Condensing Aludel Cap -->
            <path d="M 33 28 C 28 26, 28 16, 38 8 C 48 16, 48 26, 43 28 Z" 
                  fill="rgba(255, 82, 82, 0.12)" stroke="#ff5252" stroke-width="1.2" />

            <!-- Central Sublimation Vapor Shaft -->
            <line x1="38" y1="52" x2="38" y2="12" class="as-sublime-stream" stroke-width="1.5" />

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
