const montgolfierAerostatStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ma-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221824 0%, #060408 100%);
    border: 1.5px solid rgba(255, 152, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 152, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ma-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ma-svg {
    width: 76px;
    height: 72px;
  }

  /* Hot air aerostat buoyancy floating ascension */
  .ma-balloon-float {
    animation: ma-buoyant-bob 3.6s ease-in-out infinite alternate;
    transform-origin: 38px 32px;
  }

  @keyframes ma-buoyant-bob {
    0% { transform: translateY(3px) rotate(-1deg); }
    100% { transform: translateY(-4px) rotate(1.5deg); }
  }

  /* Straw and wool burner brazier flame flickering */
  .ma-brazier-fire {
    animation: ma-flame-flicker 0.15s ease-in-out infinite alternate;
    transform-origin: 38px 48px;
  }

  @keyframes ma-flame-flicker {
    0% { transform: scale(0.9) translateY(0); fill: #ff9800; }
    100% { transform: scale(1.15) translateY(-0.8px); fill: #ffeb3b; filter: drop-shadow(0 0 3px #ff5722); }
  }

  /* Thermal buoyant hot-air vortex circulation within paper-silk envelope */
  .ma-thermal-flow path {
    stroke: #ffcc80;
    stroke-width: 0.6;
    fill: none;
    animation: ma-thermal-rise 1.8s linear infinite;
  }

  @keyframes ma-thermal-rise {
    to { stroke-dashoffset: -12; }
  }

  .ma-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 152, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptMontgolfierAerostat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${montgolfierAerostatStyles}</style>
      <div class="ma-box">
        <div class="ma-stage">
          <svg class="ma-svg" viewBox="0 0 76 72">
            <!-- Floating Montgolfière Aerostat Assembly -->
            <g class="ma-balloon-float">
              <!-- Ornate Royal Blue & Golden Fleur-de-lis Paper-Silk Balloon Envelope -->
              <path d="M 38 6 C 22 6 18 22 26 38 L 32 46 L 44 46 L 50 38 C 58 22 54 6 38 6 Z" fill="#1a237e" stroke="#ffd700" stroke-width="1.2" />

              <!-- Gilded Decorative Drapery Swags & Zodiacal Sun Medallions -->
              <path d="M 23 24 Q 38 32 53 24" fill="none" stroke="#ffd700" stroke-width="0.8" />
              <path d="M 27 34 Q 38 40 49 34" fill="none" stroke="#ffd700" stroke-width="0.8" />
              <!-- Royal Sun / Fleur-de-lis Emblem in Center -->
              <circle cx="38" cy="20" r="3.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
              <line x1="38" y1="14" x2="38" y2="26" stroke="#ffeb3b" stroke-width="0.6" />
              <line x1="32" y1="20" x2="44" y2="20" stroke="#ffeb3b" stroke-width="0.6" />

              <!-- Internal Thermal Hot Air Updraft Convection Currents -->
              <g class="ma-thermal-flow" stroke-dasharray="4 2">
                <path d="M 35 44 C 32 32 30 20 38 12 C 46 20 44 32 41 44" />
              </g>

              <!-- Burning Straw & Wool Iron Grate Brazier -->
              <rect x="34" y="46" width="8" height="3" fill="#212121" stroke="#ffb300" stroke-width="0.5" />
              <g class="ma-brazier-fire">
                <polygon points="35,46 38,40 41,46" fill="#ff5722" />
                <polygon points="36.5,46 38,42 39.5,46" fill="#ffeb3b" />
              </g>

              <!-- Suspension Shroud Rigging Cords -->
              <line x1="32" y1="46" x2="30" y2="54" stroke="#d7ccc8" stroke-width="0.6" />
              <line x1="44" y1="46" x2="46" y2="54" stroke="#d7ccc8" stroke-width="0.6" />

              <!-- Wicker Passenger Gallery Basket (Circular Balustrade) -->
              <rect x="28" y="54" width="20" height="7" rx="1.5" fill="#5d4037" stroke="#8d6e63" stroke-width="0.8" />
              <line x1="28" y1="57.5" x2="48" y2="57.5" stroke="#d7ccc8" stroke-width="0.5" />
            </g>

            <!-- Altitude / Atmosphere Cloud Puffs -->
            <ellipse cx="14" cy="62" rx="10" ry="3" fill="rgba(255,255,255,0.08)" />
            <ellipse cx="64" cy="58" rx="8" ry="2.5" fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>
        <div class="ma-label">MONTGOLFIER AEROSTAT</div>
      </div>
    `;
  }
}

customElements.define('concept-montgolfier-aerostat', ConceptMontgolfierAerostat);
