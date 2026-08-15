const hohmannStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #06121f 0%, #02050a 100%);
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

  /* Central Star / Primary */
  .primary-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #ffcc00 60%, #ff6600 100%);
    box-shadow: 0 0 12px #ffaa00, 0 0 20px rgba(255, 170, 0, 0.4);
    z-index: 8;
  }

  /* Orbits SVG */
  .orbit-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .orbit-inner {
    fill: none;
    stroke: rgba(0, 229, 255, 0.35);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .orbit-outer {
    fill: none;
    stroke: rgba(0, 255, 102, 0.35);
    stroke-width: 1;
    stroke-dasharray: 3 3;
  }

  .orbit-transfer {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.5;
    stroke-dasharray: 4 2;
    filter: drop-shadow(0 0 3px rgba(255, 170, 0, 0.5));
  }

  /* Target Planets */
  .planet-inner {
    position: absolute;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
    offset-path: path("M 65 37 A 28 28 0 1 1 64.9 37");
    animation: orbit-inner-planet 3.6s linear infinite;
    z-index: 6;
  }

  .planet-outer {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #00ff66;
    box-shadow: 0 0 6px #00ff66;
    offset-path: path("M 65 17 A 48 48 0 1 1 64.9 17");
    animation: orbit-outer-planet 7.2s linear infinite;
    z-index: 6;
  }

  /* Transfer Vehicle */
  .transfer-craft {
    position: absolute;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffcc00, 0 0 14px #ffffff;
    offset-path: path("M 65 93 C 30 93, 17 40, 65 17");
    animation: transfer-flight 4.8s ease-in-out infinite;
    z-index: 9;
  }

  /* Delta-V Burn markers */
  .burn-marker {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid #ffaa00;
  }

  .burn-1 { bottom: 34px; left: 62px; }
  .burn-2 { top: 14px; left: 62px; }

  .burn-label-1 {
    position: absolute;
    bottom: 24px;
    left: 56px;
    font-size: 5.5px;
    font-family: monospace;
    color: #ffaa00;
  }

  .burn-label-2 {
    position: absolute;
    top: 6px;
    left: 56px;
    font-size: 5.5px;
    font-family: monospace;
    color: #ffaa00;
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
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes orbit-inner-planet {
    from { offset-distance: 0%; }
    to { offset-distance: 100%; }
  }

  @keyframes orbit-outer-planet {
    from { offset-distance: 0%; }
    to { offset-distance: 100%; }
  }

  @keyframes transfer-flight {
    0% { offset-distance: 0%; opacity: 0; }
    5% { opacity: 1; }
    85% { offset-distance: 100%; opacity: 1; }
    95%, 100% { offset-distance: 100%; opacity: 0; }
  }
`;

class PhysicsHohmannTransfer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hohmannStyles}</style>
      <div class="canvas-box">
        <div class="primary-body"></div>

        <svg class="orbit-svg" viewBox="0 0 130 130">
          <!-- Inner Orbit (r1 = 28) -->
          <circle cx="65" cy="65" r="28" class="orbit-inner" />
          <!-- Outer Orbit (r2 = 48) -->
          <circle cx="65" cy="65" r="48" class="orbit-outer" />
          <!-- Elliptic Transfer Orbit (a = 38) -->
          <path d="M 65 93 C 30 93, 17 40, 65 17" class="orbit-transfer" />
        </svg>

        <div class="burn-marker burn-1"></div>
        <span class="burn-label-1">Δv₁</span>
        <div class="burn-marker burn-2"></div>
        <span class="burn-label-2">Δv₂</span>

        <div class="planet-inner"></div>
        <div class="planet-outer"></div>
        <div class="transfer-craft"></div>

        <div class="hud">
          <span>a = (r₁+r₂)/2</span>
          <span>Δv = Δv₁ + Δv₂</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-hohmann-transfer')) {
  customElements.define('physics-hohmann-transfer', PhysicsHohmannTransfer);
}
