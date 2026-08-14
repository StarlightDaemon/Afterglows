const fourBarStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #15181c 0%, #06070a 100%);
    overflow: hidden;
  }

  .linkage-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ground Frame Base */
  .ground-bar {
    position: absolute;
    bottom: 30px;
    left: 28px;
    width: 74px;
    height: 4px;
    background: #2a3544;
    border: 1px solid #ffcc00;
  }

  .ground-pivot {
    position: absolute;
    bottom: 28px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
    z-index: 8;
  }

  .pivot-a { left: 28px; }
  .pivot-d { left: 94px; }

  /* Animated Linkage SVG */
  .linkage-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .coupler-curve {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1.2;
    stroke-dasharray: 2 2;
  }

  /* Crank Link (Continuous 360 rotation around Pivot A: 32, 98) */
  .crank-arm {
    position: absolute;
    bottom: 32px;
    left: 32px;
    width: 2px;
    height: 22px;
    background: #ffaa00;
    transform-origin: bottom center;
    animation: rotate-crank 2.8s linear infinite;
    z-index: 6;
  }

  .crank-pin {
    position: absolute;
    top: 0;
    left: 50%;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffaa00;
  }

  /* Rocker Link (Oscillating around Pivot D: 98, 98) */
  .rocker-arm {
    position: absolute;
    bottom: 32px;
    left: 98px;
    width: 2px;
    height: 38px;
    background: #00e5ff;
    transform-origin: bottom center;
    animation: rock-arm 2.8s ease-in-out infinite;
    z-index: 6;
  }

  .rocker-pin {
    position: absolute;
    top: 0;
    left: 50%;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00e5ff;
  }

  .hud {
    position: absolute;
    bottom: 4px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 0, 0.8);
    z-index: 10;
  }

  @keyframes rotate-crank {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rock-arm {
    0%, 100% { transform: rotate(-32deg); }
    50% { transform: rotate(38deg); }
  }
`;

class PhysicsFourBarLinkage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fourBarStyles}</style>
      <div class="linkage-box">
        <svg class="linkage-svg" viewBox="0 0 130 130">
          <!-- Coupler curve trajectory path -->
          <path class="coupler-curve" d="M 45 45 C 55 25, 80 20, 95 38 C 105 52, 90 70, 70 72 C 50 74, 38 60, 45 45 Z" />
        </svg>

        <div class="ground-bar"></div>
        <div class="ground-pivot pivot-a"></div>
        <div class="ground-pivot pivot-d"></div>

        <div class="crank-arm">
          <div class="crank-pin"></div>
        </div>

        <div class="rocker-arm">
          <div class="rocker-pin"></div>
        </div>

        <div class="hud">
          <span>GRASHOF 4-BAR LINKAGE</span>
          <span>CRANK-ROCKER</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-four-bar-linkage')) {
  customElements.define('physics-four-bar-linkage', PhysicsFourBarLinkage);
}
