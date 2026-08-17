const vitriolStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 65%, #052615 0%, #010c06 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vt-svg {
    width: 76px;
    height: 72px;
  }

  /* Vitriol green liquor convective shimmer */
  .vt-liquor {
    fill: rgba(0, 230, 118, 0.15);
    stroke: #00e676;
    stroke-width: 1.2;
    animation: vt-liquor-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes vt-liquor-pulse {
    0% { filter: drop-shadow(0 0 2px #00b0ff); }
    100% { filter: drop-shadow(0 0 8px #00e676); }
  }

  /* Rising convective solute flow packets in liquor */
  .vt-solute-packet {
    position: absolute;
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #69f0ae;
    box-shadow: 0 0 6px #69f0ae, 0 0 10px #ffffff;
    z-index: 5;
    animation: vt-solute-rise 2s ease-in-out infinite;
  }

  .sol1 { left: 28px; animation-delay: 0s; }
  .sol2 { left: 48px; animation-delay: 0.7s; }
  .sol3 { left: 34px; animation-delay: 1.4s; }

  @keyframes vt-solute-rise {
    0% { bottom: 20px; opacity: 0; transform: scale(0.5); }
    20% { opacity: 1; transform: scale(1); }
    80% { opacity: 1; transform: scale(1.2); }
    100% { bottom: 52px; opacity: 0; transform: scale(0.6); }
  }

  /* Rhombic crystals actively growing on central seed thread */
  .vt-crystals polygon {
    fill: #1de9b6;
    stroke: #e0f2f1;
    stroke-width: 1;
    animation: vt-grow 2.6s ease-in-out infinite alternate;
  }

  .vt-crystals polygon:nth-child(even) {
    animation-delay: 0.8s;
  }

  @keyframes vt-grow {
    0% { transform: scale(0.6); opacity: 0.6; filter: brightness(0.9); }
    100% { transform: scale(1.4); opacity: 1; filter: brightness(1.3) drop-shadow(0 0 6px #00e676); }
  }

  /* Suspended nucleation thread */
  .vt-thread {
    stroke: #80cbc4;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .vt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptVitriolCrystallizer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vitriolStyles}</style>
      <div class="vt-box">
        <div class="vt-stage">
          <div class="vt-solute-packet sol1"></div>
          <div class="vt-solute-packet sol2"></div>
          <div class="vt-solute-packet sol3"></div>

          <svg class="vt-svg" viewBox="0 0 76 72">
            <!-- Glass Jar Vessel -->
            <path d="M 22 14 L 54 14 L 54 18 L 58 24 L 58 60 C 58 64, 18 64, 18 60 L 18 24 L 22 18 Z" 
                  fill="rgba(0, 230, 118, 0.05)" stroke="rgba(0, 230, 118, 0.4)" stroke-width="1.2" />

            <!-- Emerald Vitriol Solution Body -->
            <path class="vt-liquor" d="M 20 30 C 30 28, 46 28, 56 30 L 56 60 C 56 62, 20 62, 20 60 Z" />

            <!-- Suspension Cross-Rod & Thread -->
            <line x1="20" y1="14" x2="56" y2="14" stroke="#a7ffeb" stroke-width="1.5" />
            <line x1="38" y1="14" x2="38" y2="56" class="vt-thread" />

            <!-- Rhombic Vitriol Crystals nucleating along thread -->
            <g class="vt-crystals">
              <!-- Top Crystal Cluster -->
              <polygon points="38,30 44,35 38,40 32,35" style="transform-origin: 38px 35px;" />
              <!-- Upper Mid Crystal -->
              <polygon points="38,38 46,43 38,48 30,43" style="transform-origin: 38px 43px;" />
              <!-- Main Lower Rhombohedron -->
              <polygon points="38,44 48,50 38,56 28,50" style="transform-origin: 38px 50px;" />
              <!-- Bottom Accent Crystal -->
              <polygon points="38,52 43,56 38,60 33,56" style="transform-origin: 38px 56px;" />
            </g>
          </svg>
        </div>
        <div class="vt-label">GREEN VITRIOL</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-vitriol-crystallizer')) {
  customElements.define('concept-vitriol-crystallizer', ConceptVitriolCrystallizer);
}
