const lilienthalGliderStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a221a 0%, #040805 100%);
    border: 1.5px solid rgba(139, 195, 74, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(139, 195, 74, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lg-svg {
    width: 76px;
    height: 72px;
  }

  /* Lilienthal banking and weight-shift center of gravity control */
  .lg-glider-flight {
    animation: lg-soar-glide 3.8s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes lg-soar-glide {
    0% { transform: translateY(-5px) rotate(-8deg); }
    50% { transform: translateY(2px) rotate(4deg); }
    100% { transform: translateY(-3px) rotate(-5deg); }
  }

  /* Pilot leg swing weight shift */
  .lg-pilot-legs {
    transform-origin: 38px 44px;
    animation: lg-legs-swing 1.9s ease-in-out infinite alternate;
  }

  @keyframes lg-legs-swing {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(10deg); }
  }

  /* Tension rigging wires glint */
  .lg-rigging-wires {
    animation: lg-wire-gleam 2s ease-in-out infinite alternate;
  }

  @keyframes lg-wire-gleam {
    0% { stroke: #dcedc8; opacity: 0.5; }
    100% { stroke: #ffffff; opacity: 0.95; filter: drop-shadow(0 0 1.5px #8bc34a); }
  }

  .lg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(139, 195, 74, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLilienthalHangGlider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lilienthalGliderStyles}</style>
      <div class="lg-box">
        <div class="lg-stage">
          <svg class="lg-svg" viewBox="0 0 76 72">
            <!-- Fliegeberg Artificial Gliding Hill Contour in Background -->
            <path d="M 0 68 Q 28 48 76 66 L 76 72 L 0 72 Z" fill="#1b2e1e" stroke="#33691e" stroke-width="0.6" />

            <!-- Glider Assembly in Flight -->
            <g class="lg-glider-flight">
              <!-- Willow Wand & Cotton Sheeting Monoplane Bat-Wing (Arched Ribs) -->
              <!-- Left Wing Panel -->
              <path d="M 38 28 Q 20 18 6 28 Q 22 38 38 34 Z" fill="#f1f8e9" stroke="#8bc34a" stroke-width="0.8" />
              <!-- Right Wing Panel -->
              <path d="M 38 28 Q 56 18 70 28 Q 54 38 38 34 Z" fill="#f1f8e9" stroke="#8bc34a" stroke-width="0.8" />

              <!-- Willow Cambered Wing Ribs (Radial bat-like skeleton) -->
              <line x1="38" y1="28" x2="12" y2="25" stroke="#aed581" stroke-width="0.5" />
              <line x1="38" y1="28" x2="22" y2="34" stroke="#aed581" stroke-width="0.5" />
              <line x1="38" y1="28" x2="64" y2="25" stroke="#aed581" stroke-width="0.5" />
              <line x1="38" y1="28" x2="54" y2="34" stroke="#aed581" stroke-width="0.5" />

              <!-- Kingpost & Piano Wire Tension Bracing Rigging -->
              <g class="lg-rigging-wires">
                <line x1="38" y1="18" x2="38" y2="28" stroke="#ffd700" stroke-width="1.2" />
                <line x1="38" y1="18" x2="16" y2="26" stroke-width="0.6" />
                <line x1="38" y1="18" x2="60" y2="26" stroke-width="0.6" />
                <line x1="38" y1="38" x2="16" y2="28" stroke-width="0.6" />
                <line x1="38" y1="38" x2="60" y2="28" stroke-width="0.6" />
              </g>

              <!-- Empennage / Rear Radial Tail Fin & Stabilizer -->
              <line x1="38" y1="34" x2="38" y2="48" stroke="#8d6e63" stroke-width="1" />
              <polygon points="34,48 42,48 38,54" fill="#dcedc8" stroke="#8bc34a" stroke-width="0.6" />

              <!-- Aviator (Otto Lilienthal Suspended by Forearms in Aperture) -->
              <circle cx="38" cy="32" r="2.2" fill="#d7ccc8" stroke="#4e342e" stroke-width="0.5" />
              <rect x="36" y="34" width="4" height="7" rx="0.5" fill="#37474f" />
              <!-- Suspended Free-Hanging Legs Shifting Weight -->
              <g class="lg-pilot-legs">
                <line x1="37" y1="41" x2="35" y2="50" stroke="#263238" stroke-width="1.2" stroke-linecap="round" />
                <line x1="39" y1="41" x2="41" y2="50" stroke="#263238" stroke-width="1.2" stroke-linecap="round" />
              </g>
            </g>
          </svg>
        </div>
        <div class="lg-label">LILIENTHAL GLIDER</div>
      </div>
    `;
  }
}

customElements.define('concept-lilienthal-hang-glider', ConceptLilienthalHangGlider);
