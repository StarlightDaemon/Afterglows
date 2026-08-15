const kamalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .km-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #15222e 0%, #03080e 100%);
    border: 1.5px solid rgba(79, 195, 247, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(79, 195, 247, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .km-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .km-svg {
    width: 76px;
    height: 72px;
  }

  /* Knotted distance cord vibration/tautness */
  .km-cord-line {
    stroke: #b0bec5;
    stroke-width: 1;
    animation: km-taut 2s ease-in-out infinite alternate;
  }

  @keyframes km-taut {
    0% { stroke: #90a4ae; }
    100% { stroke: #ffffff; filter: drop-shadow(0 0 2px #4fc3f7); }
  }

  /* Polaris Star Sight Beam */
  .km-polaris-beam {
    stroke: #ffd700;
    stroke-dasharray: 3 2;
    animation: km-sight 1.5s linear infinite;
  }

  @keyframes km-sight {
    to { stroke-dashoffset: -10; }
  }

  /* Sea Horizon Beam */
  .km-horizon-beam {
    stroke: #00e5ff;
    stroke-dasharray: 3 2;
    animation: km-sight 1.5s linear infinite;
  }

  /* Wooden Kamal Card Plate */
  .km-card-plate {
    fill: #3e2723;
    stroke: #d7ccc8;
    stroke-width: 1.2;
    animation: km-card-float 3s ease-in-out infinite alternate;
  }

  @keyframes km-card-float {
    0% { transform: translateY(0); }
    100% { transform: translateY(-2px); }
  }

  .km-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(79, 195, 247, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKamalNavigator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kamalStyles}</style>
      <div class="km-box">
        <div class="km-stage">
          <svg class="km-svg" viewBox="0 0 76 72">
            <!-- Sea Horizon Line in background -->
            <line x1="4" y1="52" x2="72" y2="52" stroke="#01579b" stroke-width="1.5" />
            <rect x="4" y="52" width="68" height="14" fill="rgba(1, 87, 155, 0.2)" />

            <!-- Polaris (Pole Star) in Night Sky -->
            <circle cx="62" cy="14" r="2" fill="#ffffff" filter="drop-shadow(0 0 4px #ffd700)" />

            <!-- Navigator's Teeth/Anchor Point on Left -->
            <circle cx="10" cy="36" r="2.5" fill="#cfd8dc" stroke="#90a4ae" stroke-width="0.8" />

            <!-- Knotted Hemp Chord extending from teeth to card center hole -->
            <line x1="10" y1="36" x2="42" y2="36" class="km-cord-line" />
            <!-- Knots (Isba latitude finger units) -->
            <circle cx="18" cy="36" r="1.5" fill="#ffd700" />
            <circle cx="26" cy="36" r="1.5" fill="#ffd700" />
            <circle cx="34" cy="36" r="1.5" fill="#ffd700" />

            <!-- Rectangular Teak Wood Kamal Card -->
            <g class="km-card-plate">
              <rect x="42" y="20" width="16" height="32" rx="1.5" />
              <!-- Center aperture hole for knotted cord string -->
              <circle cx="50" cy="36" r="1.5" fill="#15222e" stroke="#d7ccc8" stroke-width="0.8" />
              <!-- Upper sighting edge notch (Polaris alignment) -->
              <polygon points="50,20 48,22 52,22" fill="#ffd700" />
              <!-- Lower sighting edge notch (Horizon alignment) -->
              <polygon points="50,52 48,50 52,50" fill="#00e5ff" />
            </g>

            <!-- Celestial Sight Ray: Card Top -> Polaris -->
            <line x1="50" y1="20" x2="62" y2="14" class="km-polaris-beam" stroke-width="1" />

            <!-- Horizon Sight Ray: Card Bottom -> Horizon -->
            <line x1="50" y1="52" x2="68" y2="52" class="km-horizon-beam" stroke-width="1" />
          </svg>
        </div>
        <div class="km-label">KAMAL NAVIGATOR</div>
      </div>
    `;
  }
}

customElements.define('concept-kamal-navigator', ConceptKamalNavigator);
