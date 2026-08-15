const columbianEagleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ce-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a18 0%, #060403 100%);
    border: 1.5px solid rgba(255, 193, 7, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ce-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ce-svg {
    width: 76px;
    height: 72px;
  }

  /* Counterbalancing cast-iron American eagle lever tilt on main beam */
  .ce-eagle-counterbalance {
    transform-origin: 38px 18px;
    animation: ce-eagle-tilt 3.2s ease-in-out infinite alternate;
  }

  @keyframes ce-eagle-tilt {
    0% { transform: rotate(-8deg); }
    50% { transform: rotate(12deg); }
    100% { transform: rotate(-6deg); }
  }

  /* Hand lever pull bar */
  .ce-pull-handle {
    transform-origin: 38px 32px;
    animation: ce-lever-stroke 3.2s ease-in-out infinite alternate;
  }

  @keyframes ce-lever-stroke {
    0% { transform: rotate(-20deg); }
    50% { transform: rotate(16deg); }
    100% { transform: rotate(-16deg); }
  }

  /* Interlocking compound lever platen press */
  .ce-platen-descent {
    animation: ce-platen-crush 3.2s ease-in-out infinite alternate;
  }

  @keyframes ce-platen-crush {
    0% { transform: translateY(0); }
    50% { transform: translateY(2.8px); }
    100% { transform: translateY(0); }
  }

  .ce-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 193, 7, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptColumbianEaglePress extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${columbianEagleStyles}</style>
      <div class="ce-box">
        <div class="ce-stage">
          <svg class="ce-svg" viewBox="0 0 76 72">
            <!-- George Clymer 1813 Columbian Press Ornate Cast Iron Frame -->
            <!-- Classical Fluted Iron Columns (Left & Right) with Caduceus & Foliage Relief -->
            <rect x="18" y="18" width="6" height="42" fill="#212121" stroke="#ffb300" stroke-width="0.8" />
            <rect x="52" y="18" width="6" height="42" fill="#212121" stroke="#ffb300" stroke-width="0.8" />
            <rect x="14" y="58" width="48" height="6" rx="1" fill="#212121" stroke="#ffd700" stroke-width="0.8" />

            <!-- Main Counterweight Top Beam with Sculptured Cast-Iron American Eagle -->
            <g class="ce-eagle-counterbalance">
              <!-- Great Horizontal Counterbalance Lever Beam -->
              <rect x="20" y="16" width="36" height="4" rx="0.5" fill="#3e2723" stroke="#ffd700" stroke-width="0.8" />

              <!-- Majestic Cast-Iron Spread-Winged Eagle Counterweight (Center Top) -->
              <g transform="translate(38, 14)">
                <!-- Spread Wings -->
                <path d="M 0 0 C -8 -8 -16 -4 -18 2 C -10 0 0 2 0 0 Z" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
                <path d="M 0 0 C 8 -8 16 -4 18 2 C 10 0 0 2 0 0 Z" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
                <!-- Eagle Body & Olive Branch / Cornucopia in Talons -->
                <ellipse cx="0" cy="-2" rx="3" ry="5" fill="#ffb300" />
                <circle cx="0" cy="-7" r="2" fill="#ffd700" />
                <polygon points="0,-7 3,-6 0,-5" fill="#ffffff" />
                <!-- Cornucopia counterweight ballast -->
                <circle cx="-14" cy="4" r="2.5" fill="#ffca28" />
                <circle cx="14" cy="4" r="2.5" fill="#ffca28" />
              </g>

              <!-- Central Fulcrum Pivot Pin -->
              <circle cx="38" cy="18" r="2" fill="#ffffff" />
            </g>

            <!-- Compound Interlocking Lever Bar Mechanism (No screw required) -->
            <g class="ce-pull-handle">
              <line x1="38" y1="32" x2="68" y2="24" stroke="#ffd700" stroke-width="1.8" stroke-linecap="round" />
              <circle cx="68" cy="24" r="2" fill="#ff8f00" />
              <line x1="38" y1="20" x2="38" y2="34" stroke="#ffca28" stroke-width="1.2" />
            </g>

            <!-- Heavy Cast Iron Platen Board -->
            <g class="ce-platen-descent">
              <rect x="26" y="34" width="24" height="6" rx="0.5" fill="#424242" stroke="#ffc107" stroke-width="0.8" />
            </g>

            <!-- Bed Forme of Type with Paper Imprint -->
            <rect x="22" y="46" width="32" height="5" fill="#1b1b1b" stroke="#757575" stroke-width="0.6" />
            <line x1="26" y1="44" x2="50" y2="44" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="1 1" />
          </svg>
        </div>
        <div class="ce-label">COLUMBIAN EAGLE PRESS</div>
      </div>
    `;
  }
}

customElements.define('concept-columbian-eagle-press', ConceptColumbianEaglePress);
