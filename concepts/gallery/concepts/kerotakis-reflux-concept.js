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

  /* Ascending sulphur/mercury vapor packets surging up central riser */
  .kr-vapor-packet {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffb142;
    box-shadow: 0 0 6px #ffb142, 0 0 10px #ffffff;
    z-index: 6;
    animation: kr-vapor-surge 1.6s linear infinite;
  }

  .vp1 { animation-delay: 0s; }
  .vp2 { animation-delay: 0.8s; }

  @keyframes kr-vapor-surge {
    0% { transform: translateY(14px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-20px) scale(1.3); opacity: 0; }
  }

  /* Descending condensed reflux droplets falling down side walls */
  .kr-reflux-drop {
    position: absolute;
    width: 3.5px;
    height: 5px;
    border-radius: 50% 50% 20% 20%;
    background: #ffd700;
    box-shadow: 0 0 6px #ffd700;
    z-index: 6;
    animation: kr-reflux-fall 1.8s linear infinite;
  }

  .rd-left { left: 24px; animation-delay: 0.3s; }
  .rd-right { right: 24px; animation-delay: 1.1s; }

  @keyframes kr-reflux-fall {
    0% { transform: translateY(-16px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(18px) scale(1.1); opacity: 0; }
  }

  /* Suspended metal palette changing state (Mary's blackening to gold patina) */
  .kr-palette {
    transform-origin: 38px 33px;
    animation: kr-patina 3.2s ease-in-out infinite alternate;
  }

  @keyframes kr-patina {
    0% { transform: scale(0.85); fill: #2c2530; stroke: #6b5b75; }
    50% { transform: scale(1.05); fill: #8d4f18; stroke: #e58e26; }
    100% { transform: scale(1.25); fill: #ffd700; stroke: #fff07c; filter: drop-shadow(0 0 6px #ffd700); }
  }

  /* Boiling sulphur base */
  .kr-boiler {
    animation: kr-bubble 1.8s ease-in-out infinite alternate;
  }

  @keyframes kr-bubble {
    0% { transform: scaleY(0.92); fill: #ff793f; }
    100% { transform: scaleY(1.12); fill: #ffb142; }
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
          <div class="kr-vapor-packet vp1"></div>
          <div class="kr-vapor-packet vp2"></div>
          <div class="kr-reflux-drop rd-left"></div>
          <div class="kr-reflux-drop rd-right"></div>

          <svg class="kr-svg" viewBox="0 0 76 72">
            <!-- Furnace Base -->
            <path d="M 22 66 L 54 66 L 50 56 L 26 56 Z" fill="#2d1b2e" stroke="#f5a623" stroke-width="1.2" />
            <ellipse class="kr-boiler" cx="38" cy="55" rx="14" ry="4" />

            <!-- Cylindrical Glass / Metal Vessel -->
            <rect x="24" y="20" width="28" height="36" rx="2" fill="rgba(245, 166, 35, 0.12)" stroke="#f5a623" stroke-width="1.4" />

            <!-- Upper Condensation Dome / Cap -->
            <path d="M 22 20 Q 38 4 54 20" fill="none" stroke="#f5a623" stroke-width="1.6" />
            
            <!-- Central Vapor Riser Tube -->
            <line x1="38" y1="52" x2="38" y2="22" stroke="#ffb142" stroke-width="1.8" />

            <!-- Suspended Triangular Palette (Metal Leaf undergoing transmutation) -->
            <polygon class="kr-palette" points="38,28 47,38 29,38" stroke-width="1.2" />

            <!-- Reflux Return Side Walls -->
            <path d="M 26 22 L 26 50" fill="none" stroke="rgba(255, 215, 0, 0.4)" stroke-width="1.2" />
            <path d="M 50 22 L 50 50" fill="none" stroke="rgba(255, 215, 0, 0.4)" stroke-width="1.2" />
          </svg>
        </div>
        <div class="kr-label">KEROTAKIS REFLUX</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-kerotakis-reflux')) {
  customElements.define('concept-kerotakis-reflux', ConceptKerotakisReflux);
}
