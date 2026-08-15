const gyroStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #15101a 0%, #060408 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 260px;
  }

  /* Central Pivot & Stand */
  .stand-base {
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translateX(-50%);
    width: 36px;
    height: 4px;
    background: #3a2544;
    border: 1px solid #ff55aa;
    border-radius: 2px;
  }

  .stand-post {
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 38px;
    background: linear-gradient(180deg, #ff55aa, #3a2544);
    border-radius: 1.5px;
  }

  .pivot-joint {
    position: absolute;
    top: 66px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ff55aa;
    z-index: 10;
  }

  /* Precession Track SVG */
  .precession-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .precession-ellipse {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1.2;
    stroke-dasharray: 2 2;
  }

  /* Precessing Rotor Assembly */
  .precession-arm-wrapper {
    position: absolute;
    top: 66px;
    left: 50%;
    width: 0;
    height: 0;
    animation: gyro-precess 4s linear infinite;
    z-index: 6;
  }

  .rotor-axle {
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 2px;
    background: #ffcc00;
    transform-origin: left center;
    transform: rotate(-30deg);
    box-shadow: 0 0 4px #ffcc00;
  }

  .flywheel-disk {
    position: absolute;
    right: 8px;
    top: 50%;
    width: 8px;
    height: 30px;
    margin-top: -15px;
    border-radius: 4px;
    background: radial-gradient(ellipse at center, #ff55aa 0%, #771144 70%, #220011 100%);
    border: 1px solid #ff88cc;
    box-shadow: 0 0 10px rgba(255, 85, 170, 0.6);
    animation: spin-flywheel 0.25s linear infinite;
  }

  /* Vector Indicators */
  .vec-l {
    position: absolute;
    right: -14px;
    top: -1px;
    width: 14px;
    height: 2px;
    background: #00e5ff;
    box-shadow: 0 0 4px #00e5ff;
  }

  .vec-l::after {
    content: '';
    position: absolute;
    right: -1px;
    top: -2px;
    border: 3px solid transparent;
    border-left-color: #00e5ff;
  }

  .vec-tau {
    position: absolute;
    right: 12px;
    top: 18px;
    width: 12px;
    height: 2px;
    background: #ff5577;
  }

  .vec-tau::after {
    content: '';
    position: absolute;
    right: -1px;
    top: -2px;
    border: 3px solid transparent;
    border-left-color: #ff5577;
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
    color: rgba(255, 85, 170, 0.85);
    z-index: 10;
  }

  @keyframes gyro-precess {
    0% { transform: rotate(0deg) scaleX(1); }
    25% { transform: rotate(90deg) scaleX(0.7); }
    50% { transform: rotate(180deg) scaleX(1); }
    75% { transform: rotate(270deg) scaleX(0.7); }
    100% { transform: rotate(360deg) scaleX(1); }
  }

  @keyframes spin-flywheel {
    0% { filter: brightness(1) drop-shadow(0 0 2px #ff88cc); }
    50% { filter: brightness(1.6) drop-shadow(0 0 6px #ffffff); }
    100% { filter: brightness(1) drop-shadow(0 0 2px #ff88cc); }
  }
`;

class PhysicsGyroscopicPrecession extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gyroStyles}</style>
      <div class="canvas-box">
        <svg class="precession-svg" viewBox="0 0 130 130">
          <!-- Horizontal Precession Orbit -->
          <ellipse cx="65" cy="44" rx="38" ry="12" class="precession-ellipse" />
          <!-- Vertical Axis Reference -->
          <line x1="65" y1="20" x2="65" y2="66" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="2 2" />
        </svg>

        <div class="stand-base"></div>
        <div class="stand-post"></div>
        <div class="pivot-joint"></div>

        <div class="precession-arm-wrapper">
          <div class="rotor-axle">
            <div class="flywheel-disk"></div>
            <div class="vec-l" title="Angular Momentum L"></div>
            <div class="vec-tau" title="Torque τ"></div>
          </div>
        </div>

        <div class="hud">
          <span>Ω_p = τ / L</span>
          <span>τ = r × mg, L = Iω</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-gyroscopic-precession')) {
  customElements.define('physics-gyroscopic-precession', PhysicsGyroscopicPrecession);
}
