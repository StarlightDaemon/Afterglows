const sgStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #15101c 0%, #040206 100%);
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

  .sg-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Inhomogeneous Magnet Poles */
  .pole-n {
    fill: #2a2035;
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .pole-s {
    fill: #202535;
    stroke: #00e5ff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Incident unpolarized beam */
  .beam-incident {
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  /* Spin-Up Beam (Deflected Towards Sharp Pole N) */
  .beam-up {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #ff5577);
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: shoot-up 2.2s ease-out infinite;
  }

  /* Spin-Down Beam (Deflected Towards Flat Pole S) */
  .beam-down {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #00e5ff);
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: shoot-down 2.2s ease-out infinite;
  }

  /* Detector Screen Impacts */
  .screen {
    stroke: rgba(255, 255, 255, 0.4);
    stroke-width: 1.5;
  }

  .spot-up {
    fill: #ff5577;
    filter: drop-shadow(0 0 5px #ff5577);
  }

  .spot-down {
    fill: #00e5ff;
    filter: drop-shadow(0 0 5px #00e5ff);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-up { fill: #ff5577; }
  .lbl-down { fill: #00e5ff; }
  .lbl-field { fill: #ffaa00; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.9);
    z-index: 10;
  }

  @keyframes shoot-up {
    0% { stroke-dashoffset: 40; }
    100% { stroke-dashoffset: 0; }
  }

  @keyframes shoot-down {
    0% { stroke-dashoffset: 40; }
    100% { stroke-dashoffset: 0; }
  }
`;

class PhysicsSternGerlach extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sgStyles}</style>
      <div class="canvas-box">
        <svg class="sg-svg" viewBox="0 0 130 130">
          <!-- Inhomogeneous Magnet: Wedge Pole N (sharp) & Flat Pole S -->
          <polygon points="45,20 75,20 60,42" class="pole-n" />
          <text x="57" y="32" class="lbl" fill="#ff5577">N</text>

          <rect x="45" y="85" width="30" height="15" rx="1" class="pole-s" />
          <text x="57" y="96" class="lbl" fill="#00e5ff">S</text>

          <!-- Incident Unpolarized Neutral Atom Beam (Ag) -->
          <line x1="12" y1="65" x2="52" y2="65" class="beam-incident" />
          <text x="12" y="58" class="lbl" fill="#ffaa00">Ag BEAM</text>

          <!-- Deflected Spin Components -->
          <path d="M 52,65 Q 70,62 108,38" class="beam-up" />
          <path d="M 52,65 Q 70,68 108,92" class="beam-down" />

          <!-- Detector Screen -->
          <line x1="110" y1="25" x2="110" y2="105" class="screen" />
          <circle cx="110" cy="38" r="3" class="spot-up" />
          <circle cx="110" cy="92" r="3" class="spot-down" />

          <!-- Labels -->
          <text x="82" y="30" class="lbl lbl-up">|↑⟩ Sz = +ℏ/2</text>
          <text x="82" y="104" class="lbl lbl-down">|↓⟩ Sz = -ℏ/2</text>
          <text x="44" y="60" class="lbl lbl-field">∇Bz &gt; 0</text>
        </svg>

        <div class="hud">
          <span>F_z = -μ_B g_s (∂B_z/∂z)</span>
          <span>Quantized Spin ±½</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-stern-gerlach')) {
  customElements.define('physics-stern-gerlach', PhysicsSternGerlach);
}
