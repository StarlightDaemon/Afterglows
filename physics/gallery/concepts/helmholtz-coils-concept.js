const helmholtzStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e161c 0%, #03080c 100%);
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

  /* Helmholtz Coils (Separation d = R) */
  .coil-ring {
    position: absolute;
    top: 25px;
    width: 6px;
    height: 64px;
    background: linear-gradient(180deg, #ffcc00, #996600);
    border: 1.2px solid #ffee66;
    border-radius: 3px;
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.4);
    z-index: 6;
  }

  .coil-left { left: 32px; }
  .coil-right { right: 32px; }

  /* Current Direction Indicators */
  .current-arrow {
    position: absolute;
    top: 28px;
    font-size: 7px;
    font-family: monospace;
    font-weight: bold;
    color: #ffffff;
    z-index: 8;
  }

  .arrow-l { left: 30px; }
  .arrow-r { right: 30px; }

  /* Magnetic Field Lines SVG */
  .field-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .field-line-straight {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .field-line-curve {
    fill: none;
    stroke: rgba(0, 255, 102, 0.4);
    stroke-width: 1.2;
  }

  /* Uniform Field Test Region */
  .uniform-zone {
    position: absolute;
    top: 38px;
    left: 42px;
    width: 46px;
    height: 38px;
    border: 1px dashed rgba(0, 229, 255, 0.5);
    background: rgba(0, 229, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5px;
    font-family: monospace;
    color: #00e5ff;
    z-index: 4;
  }

  .separation-label {
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5.5px;
    font-family: monospace;
    color: #ffcc00;
  }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  /* Motion pass */
  /* Current circulates and the uniform field streams between the coils */
  .field-line-straight, .field-line-curve { stroke-dasharray: 6 4; animation: helm-flow 1.5s linear infinite; }
  .current-arrow { animation: helm-cur 1.5s ease-in-out infinite alternate; }
  .uniform-zone { animation: helm-zone 3s ease-in-out infinite alternate; }
  @keyframes helm-flow { to { stroke-dashoffset: -20; } }
  @keyframes helm-cur { from { opacity: 0.6; } to { opacity: 1; } }
  @keyframes helm-zone { from { opacity: 0.5; } to { opacity: 0.9; } }

`;

class PhysicsHelmholtzCoils extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${helmholtzStyles}</style>
      <div class="canvas-box">
        <div class="coil-ring coil-left"></div>
        <div class="coil-ring coil-right"></div>

        <span class="current-arrow arrow-l">↑</span>
        <span class="current-arrow arrow-r">↑</span>

        <div class="uniform-zone">UNIFORM B_z</div>

        <svg class="field-svg" viewBox="0 0 130 130">
          <!-- Perfectly Straight Central Axis Field Line -->
          <line x1="8" y1="57" x2="122" y2="57" class="field-line-straight" />
          <line x1="8" y1="46" x2="122" y2="46" class="field-line-straight" />
          <line x1="8" y1="68" x2="122" y2="68" class="field-line-straight" />

          <!-- Outer Fringing Field Lines -->
          <path d="M 8 32 C 30 32, 45 28, 65 28 C 85 28, 100 32, 122 32" class="field-line-curve" />
          <path d="M 8 82 C 30 82, 45 86, 65 86 C 85 86, 100 82, 122 82" class="field-line-curve" />

          <!-- Field Direction Arrowheads -->
          <polygon points="68,57 62,54 62,60" fill="#00ff66" />
          <polygon points="68,46 62,43 62,49" fill="#00ff66" />
          <polygon points="68,68 62,65 62,71" fill="#00ff66" />
        </svg>

        <span class="separation-label">d = R (Separation)</span>

        <div class="hud">
          <span>B = (4/5)^(3/2) μ₀ n I / R</span>
          <span>d²B/dz² = 0 (Homogeneous)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-helmholtz-coils')) {
  customElements.define('physics-helmholtz-coils', PhysicsHelmholtzCoils);
}
