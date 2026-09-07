const gridironStyles = `
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
    background: radial-gradient(circle at 50% 40%, #1a1e28 0%, #05080f 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
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

  /* Gridiron Pendulum Harmonic Oscillation */
  .gp-pendulum-assembly {
    transform-origin: 38px 8px;
    animation: gp-swing 2.4s ease-in-out infinite alternate;
  }

  @keyframes gp-swing {
    0% { transform: rotate(-18deg); }
    100% { transform: rotate(18deg); }
  }

  /* Heavy Brass Bob Glow */
  .gp-bob-plate {
    fill: #ffb300;
    stroke: #ffd54f;
    stroke-width: 1;
    animation: gp-bob-shimmer 2.4s ease-in-out infinite alternate;
  }

  @keyframes gp-bob-shimmer {
    0% { filter: drop-shadow(0 0 2px #ff8f00); }
    100% { filter: drop-shadow(0 0 6px #ffd700); }
  }

  .gp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGridironPendulum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gridironStyles}</style>
      <div class="gp-box">
        <div class="gp-stage">
          <svg class="gp-svg" viewBox="0 0 76 72">
            <!-- Top Suspension Cock & Spring Bracket -->
            <rect x="32" y="6" width="12" height="4" rx="1" fill="#424242" stroke="#90a4ae" stroke-width="0.8" />

            <!-- Complete Gridiron Oscillating Assembly -->
            <g class="gp-pendulum-assembly">
              <!-- Thin Steel Suspension Spring -->
              <line x1="38" y1="8" x2="38" y2="14" stroke="#cfd8dc" stroke-width="1" />

              <!-- Top Cross-Frame Spreader (Steel) -->
              <rect x="28" y="14" width="20" height="2" fill="#78909c" stroke="#b0bec5" stroke-width="0.4" />

              <!-- Gridiron Rod Lattice (5 Steel rods expanding down + 4 Brass rods expanding up) -->
              <!-- Outer Steel Rods (Expanding Down) -->
              <line x1="29" y1="15" x2="29" y2="44" stroke="#b0bec5" stroke-width="0.9" />
              <line x1="47" y1="15" x2="47" y2="44" stroke="#b0bec5" stroke-width="0.9" />

              <!-- Inner Steel Rods (Expanding Down) -->
              <line x1="33" y1="20" x2="33" y2="44" stroke="#b0bec5" stroke-width="0.9" />
              <line x1="43" y1="20" x2="43" y2="44" stroke="#b0bec5" stroke-width="0.9" />

              <!-- Central Steel Rod to Bob (Expanding Down) -->
              <line x1="38" y1="20" x2="38" y2="52" stroke="#b0bec5" stroke-width="1.2" />

              <!-- Middle Brass Rods (High Thermal Expansion Coefficient, Expanding UP) -->
              <line x1="31" y1="44" x2="31" y2="20" stroke="#ffd700" stroke-width="1" />
              <line x1="45" y1="44" x2="45" y2="20" stroke="#ffd700" stroke-width="1" />
              <line x1="35" y1="44" x2="35" y2="20" stroke="#ffd700" stroke-width="1" />
              <line x1="41" y1="44" x2="41" y2="20" stroke="#ffd700" stroke-width="1" />

              <!-- Intermediate Cross-Bars (Spreader bars connecting brass to steel) -->
              <rect x="30" y="20" width="16" height="2" fill="#ffb300" stroke="#ff8f00" stroke-width="0.4" />
              <rect x="28" y="44" width="20" height="2" fill="#78909c" stroke="#b0bec5" stroke-width="0.4" />

              <!-- Heavy Cylindrical Brass Pendulum Bob -->
              <circle class="gp-bob-plate" cx="38" cy="54" r="8" />
              <circle cx="38" cy="54" r="4" fill="#3e2723" stroke="#ffd700" stroke-width="0.6" />

              <!-- Bottom Rating Nut (Fine pitch regulation screw) -->
              <polygon points="38,62 36,65 40,65" fill="#ffd700" stroke="#ff8f00" stroke-width="0.5" />
            </g>
          </svg>
        </div>
        <div class="gp-label">GRIDIRON PENDULUM</div>
      </div>
    `;
  }
}

customElements.define('concept-gridiron-pendulum', ConceptGridironPendulum);
