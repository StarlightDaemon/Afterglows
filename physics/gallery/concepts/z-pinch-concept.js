const zpinchStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1c101a 0%, #060205 100%);
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

  .zp-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Axial Current Cylinder (Plasma Column) */
  .plasma-column {
    fill: rgba(255, 51, 187, 0.2);
    stroke: #ff33bb;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 5px #ff33bb);
    animation: compress-column 2s ease-in-out infinite alternate;
  }

  /* Induced Azimuthal Magnetic Field Rings B_theta */
  .b-ring {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.2;
    stroke-dasharray: 4 2;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Inward Radial Lorentz Pinch Force J_z x B_theta */
  .pinch-arrow {
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-jz { fill: #ff33bb; }
  .lbl-b { fill: #00e5ff; }
  .lbl-pinch { fill: #ffaa00; }

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

  @keyframes compress-column {
    0% { transform: scaleX(1.1); transform-origin: 65px 65px; }
    100% { transform: scaleX(0.65); transform-origin: 65px 65px; }
  }
`;

class PhysicsZPinch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${zpinchStyles}</style>
      <div class="canvas-box">
        <svg class="zp-svg" viewBox="0 0 130 130">
          <!-- Pinched Plasma Cylinder in Center -->
          <rect x="50" y="20" width="30" height="90" rx="4" class="plasma-column" />
          <text x="56" y="14" class="lbl lbl-jz">CURRENT J_z ↓</text>

          <!-- Azimuthal B_θ Loops -->
          <ellipse cx="65" cy="38" rx="44" ry="12" class="b-ring" />
          <ellipse cx="65" cy="65" rx="44" ry="12" class="b-ring" />
          <ellipse cx="65" cy="92" rx="44" ry="12" class="b-ring" />

          <!-- Inward Radial Magnetic Pinch Force J x B -->
          <line x1="22" y1="65" x2="42" y2="65" class="pinch-arrow" />
          <polygon points="46,65 41,62 41,68" fill="#ffaa00" />

          <line x1="108" y1="65" x2="88" y2="65" class="pinch-arrow" />
          <polygon points="84,65 89,62 89,68" fill="#ffaa00" />

          <!-- Labels -->
          <text x="12" y="58" class="lbl lbl-pinch">F = J_z × B_θ</text>
          <text x="88" y="58" class="lbl lbl-b">FIELD B_θ</text>
        </svg>

        <div class="hud">
          <span>Bennett Relation μ₀I² = 8πNk_BT</span>
          <span>Z-Pinch Compression</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-z-pinch')) {
  customElements.define('physics-z-pinch', PhysicsZPinch);
}
