const temStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151016 0%, #040205 100%);
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

  .tem-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Optical Cavity Curved Mirrors (Fabry-Perot Resonator) */
  .mirror {
    stroke: #00e5ff;
    stroke-width: 2;
    fill: none;
  }

  /* Fundamental Gaussian Beam Envelope (TEM00) */
  .beam-tem00 {
    fill: rgba(255, 85, 119, 0.2);
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #ff5577);
  }

  /* Higher-Order Transverse Beam Lobes (TEM01 / TEM11 Cross-section) */
  .lobe-spot {
    fill: #00ff66;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-tem00 { fill: #ff5577; }
  .lbl-tem01 { fill: #00ff66; }
  .lbl-mir { fill: #00e5ff; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 85, 119, 0.9);
    z-index: 10;
  }
`;

class PhysicsLaserCavityModes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${temStyles}</style>
      <div class="canvas-box">
        <svg class="tem-svg" viewBox="0 0 130 130">
          <!-- Curved Cavity Mirrors (R1, R2) -->
          <path d="M 15 25 Q 20 65 15 105" class="mirror" />
          <path d="M 115 25 Q 110 65 115 105" class="mirror" />
          <text x="14" y="20" class="lbl lbl-mir">MIRROR R₁</text>
          <text x="76" y="20" class="lbl lbl-mir">MIRROR R₂</text>

          <!-- Confocal Gaussian Beam Waist w₀ (TEM₀₀) -->
          <path d="
            M 17 38
            Q 65 58 113 38
            L 113 92
            Q 65 72 17 92
            Z
          " class="beam-tem00" />

          <!-- Beam Waist Center Indicator w₀ -->
          <line x1="65" y1="58" x2="65" y2="72" stroke="#ffaa00" stroke-width="1.2" />
          <text x="58" y="54" class="lbl" fill="#ffaa00">2w₀</text>

          <!-- Inset: Transverse Mode Cross-Sections -->
          <!-- TEM₀₀ Spot -->
          <circle cx="35" cy="112" r="4" fill="#ff5577" />
          <text x="25" y="122" class="lbl lbl-tem00">TEM₀₀</text>

          <!-- TEM₀₁ Double Lobes -->
          <circle cx="60" cy="112" r="3" class="lobe-spot" />
          <circle cx="68" cy="112" r="3" class="lobe-spot" />
          <text x="56" y="122" class="lbl lbl-tem01">TEM₀₁</text>

          <!-- TEM₁₁ Quad Lobes -->
          <circle cx="95" cy="108" r="2.5" class="lobe-spot" />
          <circle cx="102" cy="108" r="2.5" class="lobe-spot" />
          <circle cx="95" cy="115" r="2.5" class="lobe-spot" />
          <circle cx="102" cy="115" r="2.5" class="lobe-spot" />
          <text x="94" y="122" class="lbl lbl-tem01">TEM₁₁</text>
        </svg>

        <div class="hud">
          <span>w(z) = w₀ √(1 + (z/z_R)²)</span>
          <span>Hermite-Gaussian Modes</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-laser-cavity-modes')) {
  customElements.define('physics-laser-cavity-modes', PhysicsLaserCavityModes);
}
