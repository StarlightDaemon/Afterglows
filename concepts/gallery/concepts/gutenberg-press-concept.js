const gutenbergPressStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221c16 0%, #080604 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 183, 77, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gp-svg {
    width: 76px;
    height: 72px;
  }

  /* Wooden screw lever bar pulling stroke */
  .gp-lever-bar {
    transform-origin: 38px 24px;
    animation: gp-pull-lever 3.2s ease-in-out infinite alternate;
  }

  @keyframes gp-pull-lever {
    0% { transform: rotate(-22deg); }
    50% { transform: rotate(18deg); }
    100% { transform: rotate(-15deg); }
  }

  /* Platen vertical screw compression stroke */
  .gp-platen-stroke {
    animation: gp-platen-press 3.2s ease-in-out infinite alternate;
  }

  @keyframes gp-platen-press {
    0% { transform: translateY(0); }
    50% { transform: translateY(2.5px); }
    100% { transform: translateY(0); }
  }

  /* Leather ink balls (Dabbers / Bällchen) inking movement */
  .gp-ink-balls {
    transform-origin: 18px 46px;
    animation: gp-ink-dab 1.6s ease-in-out infinite alternate;
  }

  @keyframes gp-ink-dab {
    0% { transform: translateY(-2px) rotate(-6deg); }
    100% { transform: translateY(1.5px) rotate(6deg); }
  }

  /* Printed folio impression clarity */
  .gp-imprint-glow {
    animation: gp-print-gleam 2s ease-in-out infinite alternate;
  }

  @keyframes gp-print-gleam {
    0% { opacity: 0.5; }
    100% { opacity: 1; fill: #ffd54f; filter: drop-shadow(0 0 2px #ffb300); }
  }

  .gp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGutenbergPress extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gutenbergPressStyles}</style>
      <div class="gp-box">
        <div class="gp-stage">
          <svg class="gp-svg" viewBox="0 0 76 72">
            <!-- Oak Wooden Frame (Cheeks, Cap & Winter Beam) -->
            <!-- Left & Right Upright Cheeks -->
            <rect x="22" y="10" width="6" height="54" fill="#3e2723" stroke="#5d4037" stroke-width="0.8" />
            <rect x="48" y="10" width="6" height="54" fill="#3e2723" stroke="#5d4037" stroke-width="0.8" />
            <!-- Upper Head/Cap Beam -->
            <rect x="18" y="10" width="40" height="7" rx="1" fill="#4e342e" stroke="#6d4c41" stroke-width="0.8" />
            <!-- Lower Winter Beam -->
            <rect x="18" y="58" width="40" height="6" rx="1" fill="#4e342e" stroke="#6d4c41" stroke-width="0.8" />

            <!-- Wooden Spindle Screw Mechanism & Large Thread -->
            <rect x="35" y="17" width="6" height="12" fill="#d7ccc8" stroke="#8d6e63" stroke-width="0.6" />
            <line x1="35" y1="20" x2="41" y2="20" stroke="#5d4037" stroke-width="1" />
            <line x1="35" y1="23" x2="41" y2="23" stroke="#5d4037" stroke-width="1" />
            <line x1="35" y1="26" x2="41" y2="26" stroke="#5d4037" stroke-width="1" />

            <!-- Long Hand Lever Bar (The Rounce/Bar) -->
            <g class="gp-lever-bar">
              <line x1="38" y1="24" x2="68" y2="16" stroke="#ffd700" stroke-width="1.8" stroke-linecap="round" />
              <circle cx="68" cy="16" r="2.2" fill="#8d6e63" stroke="#d7ccc8" stroke-width="0.5" />
            </g>

            <!-- Heavy Brass/Oak Platen Pressure Board -->
            <g class="gp-platen-stroke">
              <rect x="28" y="30" width="20" height="5" rx="0.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.7" />
              <!-- Hose & Garter Coupling -->
              <rect x="36" y="27" width="4" height="3" fill="#8d6e63" />
            </g>

            <!-- Sliding Carriage Bed with Type Forme & Rag Paper Sheet -->
            <rect x="12" y="44" width="52" height="6" rx="1" fill="#2d1d16" stroke="#4e342e" stroke-width="0.8" />
            <!-- Movable Metal Lead Type Lines (Forme) in Chase -->
            <rect x="28" y="38" width="20" height="4" fill="#212121" stroke="#9e9e9e" stroke-width="0.5" />
            <g class="gp-imprint-glow">
              <line x1="30" y1="39.5" x2="46" y2="39.5" stroke="#ffffff" stroke-width="0.6" stroke-dasharray="1.5 1" />
              <line x1="30" y1="41" x2="46" y2="41" stroke="#ffffff" stroke-width="0.6" stroke-dasharray="1.5 1" />
            </g>

            <!-- Dog-Skin Leather Ink Balls (Dabbers) at Left -->
            <g class="gp-ink-balls">
              <!-- Wooden handle -->
              <line x1="10" y1="36" x2="16" y2="44" stroke="#8d6e63" stroke-width="1.2" />
              <!-- Stuffed wool & ink head -->
              <circle cx="16" cy="44" r="3.5" fill="#111111" stroke="#424242" stroke-width="0.5" />
            </g>
          </svg>
        </div>
        <div class="gp-label">GUTENBERG PRESS</div>
      </div>
    `;
  }
}

customElements.define('concept-gutenberg-press', ConceptGutenbergPress);
