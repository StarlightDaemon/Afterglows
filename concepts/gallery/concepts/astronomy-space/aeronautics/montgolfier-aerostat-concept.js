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

  /* Hot air aerostat buoyancy floating ascension with wide sweep */
  .ma-balloon-float {
    animation: ma-buoyant-bob 4.2s ease-in-out infinite alternate;
    transform-origin: 38px 32px;
  }

  @keyframes ma-buoyant-bob {
    0% { transform: translateY(10px) rotate(-8deg) scale(0.96); }
    100% { transform: translateY(-10px) rotate(8deg) scale(1.04); }
  }

  /* Straw and wool burner brazier flame flickering */
  .ma-brazier-fire {
    animation: ma-flame-flicker 0.8s ease-in-out infinite alternate;
    transform-origin: 38px 48px;
  }

  @keyframes ma-flame-flicker {
    0% { transform: scale(0.85); fill: #ff9800; }
    100% { transform: scale(1.25); fill: #ffeb3b; filter: drop-shadow(0 0 6px #ff5722); }
  }

  /* Ascending hot-air convective ember sparks rising into envelope throat */
  .ma-ember-spark {
    position: absolute;
    top: 50px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ff5722, 0 0 12px #ffd700;
    z-index: 6;
    animation: ma-ember-rise 1.6s linear infinite;
  }

  .em1 { left: 42px; animation-delay: 0s; }
  .em2 { left: 46px; animation-delay: 0.8s; }

  @keyframes ma-ember-rise {
    0% { transform: translateY(12px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-24px) scale(1.2); opacity: 0; }
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
          <div class="ma-ember-spark em1"></div>
          <div class="ma-ember-spark em2"></div>

          <svg class="ma-svg" viewBox="0 0 76 72">
            <!-- Floating Montgolfière Aerostat Assembly -->
            <g class="ma-balloon-float">
              <!-- Ornate Royal Blue & Golden Fleur-de-lis Paper-Silk Balloon Envelope -->
              <path d="M 38 6 C 22 6 18 22 26 38 L 32 46 L 44 46 L 50 38 C 58 22 54 6 38 6 Z" fill="#1a237e" stroke="#ffd700" stroke-width="1.4" />

              <!-- Gilded Decorative Drapery Swags & Zodiacal Sun Medallions -->
              <path d="M 23 24 Q 38 32 53 24" fill="none" stroke="#ffd700" stroke-width="1" />
              <path d="M 27 34 Q 38 40 49 34" fill="none" stroke="#ffd700" stroke-width="1" />
              <!-- Royal Sun / Fleur-de-lis Emblem in Center -->
              <circle cx="38" cy="20" r="4" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
              <line x1="38" y1="13" x2="38" y2="27" stroke="#ffeb3b" stroke-width="0.8" />
              <line x1="31" y1="20" x2="45" y2="20" stroke="#ffeb3b" stroke-width="0.8" />

              <!-- Burning Straw & Wool Iron Grate Brazier -->
              <rect x="34" y="46" width="8" height="3" fill="#212121" stroke="#ffb300" stroke-width="0.8" />
              <g class="ma-brazier-fire">
                <polygon points="35,46 38,39 41,46" fill="#ff5722" />
                <polygon points="36.5,46 38,41 39.5,46" fill="#ffeb3b" />
              </g>

              <!-- Suspension Shroud Rigging Cords -->
              <line x1="32" y1="46" x2="30" y2="54" stroke="#d7ccc8" stroke-width="0.8" />
              <line x1="44" y1="46" x2="46" y2="54" stroke="#d7ccc8" stroke-width="0.8" />

              <!-- Wicker Passenger Gallery Basket -->
              <rect x="28" y="54" width="20" height="7" rx="1.5" fill="#5d4037" stroke="#8d6e63" stroke-width="1" />
              <line x1="28" y1="57.5" x2="48" y2="57.5" stroke="#d7ccc8" stroke-width="0.8" />
            </g>

            <!-- Altitude / Atmosphere Cloud Puffs -->
            <ellipse cx="14" cy="62" rx="10" ry="3" fill="rgba(255,255,255,0.08)" />
            <ellipse cx="64" cy="58" rx="8" ry="2.5" fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>
        <div class="ma-label">MONTGOLFIER AEROSTAT 1783</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-montgolfier-aerostat')) {
  customElements.define('concept-montgolfier-aerostat', ConceptMontgolfierAerostat);
}
