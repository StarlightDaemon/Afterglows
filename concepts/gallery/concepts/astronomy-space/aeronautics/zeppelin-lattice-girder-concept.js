const zeppelinLatticeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .zg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #171d24 0%, #040608 100%);
    border: 1.5px solid rgba(144, 202, 249, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(144, 202, 249, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: zg-hull-float 3.2s ease-in-out infinite alternate;
  }

  @keyframes zg-hull-float {
    0% { transform: translate(-8px, -10px) rotate(-8deg) scale(0.94); }
    100% { transform: translate(8px, 10px) rotate(8deg) scale(1.06); }
  }

  .zg-svg {
    width: 76px;
    height: 72px;
  }

  /* Triangular stamped duralumin girder lattice glint */
  .zg-lattice-truss path {
    animation: zg-truss-gleam 2.2s ease-in-out infinite alternate;
  }

  @keyframes zg-truss-gleam {
    0% { stroke: #90caf9; opacity: 0.7; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 3px #64b5f6); }
  }

  /* Internal goldbeater's skin hydrogen gas cell breathing */
  .zg-gas-cell {
    animation: zg-gas-expand 2.6s ease-in-out infinite alternate;
    transform-origin: 38px 34px;
  }

  @keyframes zg-gas-expand {
    0% { transform: scale(0.88); opacity: 0.25; }
    100% { transform: scale(1.15); opacity: 0.55; fill: #4fc3f7; }
  }

  /* Structural wire bracing tension load spark */
  .zg-spoke-spark {
    position: absolute;
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #90caf9;
    z-index: 6;
    animation: zg-spoke-travel 1.8s ease-in-out infinite;
  }

  .spk1 {
    offset-path: path("M 38 34 L 58 21");
    animation-delay: 0s;
  }

  .spk2 {
    offset-path: path("M 38 34 L 18 47");
    animation-delay: 0.9s;
  }

  @keyframes zg-spoke-travel {
    0% { offset-distance: 0%; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  .zg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(144, 202, 249, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptZeppelinLatticeGirder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${zeppelinLatticeStyles}</style>
      <div class="zg-box">
        <div class="zg-stage">
          <div class="zg-spoke-spark spk1"></div>
          <div class="zg-spoke-spark spk2"></div>

          <svg class="zg-svg" viewBox="0 0 76 72">
            <!-- Zeppelin Rigid 16-Sided Ring Girder Transverse Frame -->
            <!-- Internal High-Pressure Hydrogen Gas Cell -->
            <polygon class="zg-gas-cell" points="38,12 48,14 56,22 60,34 56,46 48,54 38,56 28,54 20,46 16,34 20,22 28,14" fill="#0288d1" />

            <!-- Main Ring Transverse Duralumin Polygonal Ring -->
            <polygon points="38,10 49,13 58,21 62,34 58,47 49,55 38,58 27,55 18,47 14,34 18,21 27,13" fill="none" stroke="#64b5f6" stroke-width="1.4" />

            <!-- Radial Steel Wire Bracing Spoke Network -->
            <g fill="none" stroke="#cfd8dc" stroke-width="0.6" stroke-dasharray="1 1" opacity="0.9">
              <line x1="38" y1="34" x2="38" y2="10" />
              <line x1="38" y1="34" x2="58" y2="21" />
              <line x1="38" y1="34" x2="62" y2="34" />
              <line x1="38" y1="34" x2="58" y2="47" />
              <line x1="38" y1="34" x2="38" y2="58" />
              <line x1="38" y1="34" x2="18" y2="47" />
              <line x1="38" y1="34" x2="14" y2="34" />
              <line x1="38" y1="34" x2="18" y2="21" />
            </g>

            <!-- Central Axial Wire Tunnel Hub -->
            <circle cx="38" cy="34" r="3.5" fill="#1e293b" stroke="#ffd700" stroke-width="0.8" />
            <circle cx="38" cy="34" r="1.5" fill="#00e5ff" />

            <!-- Triangular Open-Lattice Duralumin Girder Detail -->
            <g class="zg-lattice-truss" fill="none" stroke-width="0.8">
              <path d="M 38 10 L 44 12 L 49 13 L 53 17 L 58 21 L 60 27 L 62 34 L 60 41 L 58 47 L 53 51 L 49 55 L 44 56 L 38 58" />
              <path d="M 38 10 L 32 12 L 27 13 L 23 17 L 18 21 L 16 27 L 14 34 L 16 41 L 18 47 L 23 51 L 27 55 L 32 56 L 38 58" />
            </g>

            <!-- Lower Keel Triangular Catwalk Corridor -->
            <polygon points="34,58 42,58 38,64" fill="#37474f" stroke="#90caf9" stroke-width="0.8" />
          </svg>
        </div>
        <div class="zg-label">ZEPPELIN LATTICE GIRDER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-zeppelin-lattice-girder')) {
  customElements.define('concept-zeppelin-lattice-girder', ConceptZeppelinLatticeGirder);
}
