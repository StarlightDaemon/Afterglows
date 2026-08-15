const kerotakisStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .kr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 65%, #1d1024 0%, #08030d 100%);
    border: 1.5px solid rgba(245, 166, 35, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(245, 166, 35, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kr-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kr-svg {
    width: 76px;
    height: 72px;
  }

  /* Sulphur vapor rising */
  .kr-vapor {
    stroke-dasharray: 4 3;
    animation: kr-rise 1.6s linear infinite;
  }

  @keyframes kr-rise {
    to { stroke-dashoffset: -14; }
  }

  /* Condensate droplets returning down */
  .kr-reflux {
    stroke-dasharray: 3 4;
    animation: kr-fall 1.4s linear infinite;
  }

  @keyframes kr-fall {
    to { stroke-dashoffset: 14; }
  }

  /* Suspended metal palette changing state (Mary's blackening to gold patina) */
  .kr-palette {
    animation: kr-patina 4s ease-in-out infinite alternate;
  }

  @keyframes kr-patina {
    0% { fill: #2c2530; stroke: #6b5b75; }
    50% { fill: #8d4f18; stroke: #e58e26; }
    100% { fill: #ffd700; stroke: #fff07c; filter: drop-shadow(0 0 4px #ffd700); }
  }

  /* Boiling sulphur base */
  .kr-boiler {
    animation: kr-bubble 2s ease-in-out infinite alternate;
  }

  @keyframes kr-bubble {
    0% { transform: scaleY(0.95); fill: #ff793f; }
    100% { transform: scaleY(1.05); fill: #ffb142; }
  }

  .kr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(245, 166, 35, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKerotakisReflux extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kerotakisStyles}</style>
      <div class="kr-box">
        <div class="kr-stage">
          <svg class="kr-svg" viewBox="0 0 76 72">
            <!-- Furnace Base -->
            <path d="M 22 66 L 54 66 L 50 56 L 26 56 Z" fill="#2d1b2e" stroke="#f5a623" stroke-width="1" />
            <ellipse class="kr-boiler" cx="38" cy="55" rx="14" ry="4" />

            <!-- Cylindrical Glass / Metal Vessel -->
            <rect x="24" y="20" width="28" height="36" rx="2" fill="rgba(245, 166, 35, 0.08)" stroke="#f5a623" stroke-width="1.2" />

            <!-- Upper Condensation Dome / Cap -->
            <path d="M 22 20 Q 38 4 54 20" fill="none" stroke="#f5a623" stroke-width="1.5" />
            
            <!-- Central Vapor Riser Tube -->
            <line x1="38" y1="52" x2="38" y2="22" stroke="#ffb142" stroke-width="1.5" class="kr-vapor" />

            <!-- Suspended Triangular Palette (Metal Leaf undergoing transmutation) -->
            <polygon class="kr-palette" points="38,28 47,38 29,38" stroke-width="1" />

            <!-- Reflux Return Streams along walls -->
            <path class="kr-reflux" d="M 26 22 L 26 50" fill="none" stroke="#ffd700" stroke-width="1.2" />
            <path class="kr-reflux" d="M 50 22 L 50 50" fill="none" stroke="#ffd700" stroke-width="1.2" />
          </svg>
        </div>
        <div class="kr-label">KEROTAKIS REFLUX</div>
      </div>
    `;
  }
}

customElements.define('concept-kerotakis-reflux', ConceptKerotakisReflux);
