const cymaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #15101a 0%, #030205 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cyma-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Circular Membrane Rim */
  .drum-rim {
    fill: #101218;
    stroke: #556677;
    stroke-width: 2;
  }

  /* Anti-nodal displacement sectors (Vibrating) */
  .sector-pos {
    fill: rgba(0, 229, 255, 0.2);
    animation: pulse-pos 1.8s ease-in-out infinite alternate;
  }

  .sector-neg {
    fill: rgba(255, 85, 119, 0.2);
    animation: pulse-neg 1.8s ease-in-out infinite alternate;
  }

  /* Stationary Nodal Lines (Chladni Sand Accumulation) */
  .nodal-line {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-node { fill: #00ff66; }
  .lbl-mode { fill: #00e5ff; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  @keyframes pulse-pos {
    0% { opacity: 0.1; }
    100% { opacity: 0.6; }
  }

  @keyframes pulse-neg {
    0% { opacity: 0.6; }
    100% { opacity: 0.1; }
  }
`;

class PhysicsCymaticsMembrane extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cymaStyles}</style>
      <div class="canvas-box">
        <svg class="cyma-svg" viewBox="0 0 130 130">
          <!-- Circular Membrane Frame -->
          <circle cx="65" cy="65" r="46" class="drum-rim" />

          <!-- (2,1) Mode Quadrupole Sectors -->
          <!-- Top-Right & Bottom-Left (+) -->
          <path d="M 65 65 L 65 19 A 46 46 0 0 1 111 65 Z" class="sector-pos" />
          <path d="M 65 65 L 65 111 A 46 46 0 0 1 19 65 Z" class="sector-pos" />

          <!-- Top-Left & Bottom-Right (-) -->
          <path d="M 65 65 L 19 65 A 46 46 0 0 1 65 19 Z" class="sector-neg" />
          <path d="M 65 65 L 111 65 A 46 46 0 0 1 65 111 Z" class="sector-neg" />

          <!-- Diametral Nodal Lines (x=65, y=65) -->
          <line x1="65" y1="19" x2="65" y2="111" class="nodal-line" />
          <line x1="19" y1="65" x2="111" y2="65" class="nodal-line" />

          <!-- Circular Nodal Ring (m=2, n=1) -->
          <circle cx="65" cy="65" r="26" class="nodal-line" stroke-dasharray="3 2" />

          <!-- Labels -->
          <text x="12" y="14" class="lbl lbl-mode">MODE (m=2, n=1)</text>
          <text x="76" y="14" class="lbl lbl-node">NODAL LINES</text>
        </svg>

        <div class="hud">
          <span>w(r,θ) = J_m(k_mn r) cos(mθ)</span>
          <span>Bessel Membrane Modes</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-cymatics-membrane')) {
  customElements.define('physics-cymatics-membrane', PhysicsCymaticsMembrane);
}
