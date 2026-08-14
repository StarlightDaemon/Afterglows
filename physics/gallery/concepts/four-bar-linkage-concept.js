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

  /* Crank Link (Continuous 360 rotation around Pivot A: 33, 98).
     Crank a=22, coupler b=56, rocker c=38, ground g=66 — Grashof
     crank-rocker (a+g < b+c). Rocker and coupler keyframes below are the
     solved loop closure at 15° crank steps, so all four joints stay
     kinematically consistent. */
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

  /* Coupler Link — anchored on the crank pin; its rotation keyframes are
     solved relative to the crank frame so its far end lands on the rocker
     pin. */
  .coupler-link {
    position: absolute;
    top: 0;
    left: 50%;
    width: 56px;
    height: 2px;
    margin-top: -1px;
    background: linear-gradient(90deg, #ffaa00, #00e5ff);
    box-shadow: 0 0 4px rgba(0, 229, 255, 0.4);
    transform-origin: left center;
    animation: swing-coupler 2.8s linear infinite;
    z-index: 5;
  }

  .coupler-mid {
    position: absolute;
    top: 50%;
    left: 28px;
    width: 4px;
    height: 4px;
    margin: -2px 0 0 -2px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 5px #00e5ff;
  }

  /* Rocker Link (Oscillating around Pivot D: 99, 98) */
  .rocker-arm {
    position: absolute;
    bottom: 32px;
    left: 98px;
    width: 2px;
    height: 38px;
    background: #00e5ff;
    transform-origin: bottom center;
    animation: rock-arm 2.8s linear infinite;
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
    0% { transform: rotate(-18.1deg); }
    4.17% { transform: rotate(-10.1deg); }
    8.33% { transform: rotate(-3.4deg); }
    12.5% { transform: rotate(1.3deg); }
    16.67% { transform: rotate(3.2deg); }
    20.83% { transform: rotate(1.5deg); }
    25% { transform: rotate(-4.2deg); }
    29.17% { transform: rotate(-13deg); }
    33.33% { transform: rotate(-23.1deg); }
    37.5% { transform: rotate(-33deg); }
    41.67% { transform: rotate(-41.7deg); }
    45.83% { transform: rotate(-49deg); }
    50% { transform: rotate(-55deg); }
    54.17% { transform: rotate(-59.8deg); }
    58.33% { transform: rotate(-63.6deg); }
    62.5% { transform: rotate(-66.3deg); }
    66.67% { transform: rotate(-67.7deg); }
    70.83% { transform: rotate(-67.4deg); }
    75% { transform: rotate(-64.8deg); }
    79.17% { transform: rotate(-59.9deg); }
    83.33% { transform: rotate(-53deg); }
    87.5% { transform: rotate(-44.7deg); }
    91.67% { transform: rotate(-35.8deg); }
    95.83% { transform: rotate(-26.8deg); }
    100% { transform: rotate(-18.1deg); }
  }

  @keyframes swing-coupler {
    0% { transform: rotate(-14.6deg); }
    4.17% { transform: rotate(-31.8deg); }
    8.33% { transform: rotate(-49.7deg); }
    12.5% { transform: rotate(-68.6deg); }
    16.67% { transform: rotate(-88.8deg); }
    20.83% { transform: rotate(-110.2deg); }
    25% { transform: rotate(-132.6deg); }
    29.17% { transform: rotate(-154.7deg); }
    33.33% { transform: rotate(-175.1deg); }
    37.5% { transform: rotate(-192.9deg); }
    41.67% { transform: rotate(-207.9deg); }
    45.83% { transform: rotate(-220.6deg); }
    50% { transform: rotate(-231.5deg); }
    54.17% { transform: rotate(-241.1deg); }
    58.33% { transform: rotate(-249.9deg); }
    62.5% { transform: rotate(-258.4deg); }
    66.67% { transform: rotate(-267deg); }
    70.83% { transform: rotate(-276.3deg); }
    75% { transform: rotate(-286.8deg); }
    79.17% { transform: rotate(-298.8deg); }
    83.33% { transform: rotate(-312.3deg); }
    87.5% { transform: rotate(-326.8deg); }
    91.67% { transform: rotate(-342.1deg); }
    95.83% { transform: rotate(-358.1deg); }
    100% { transform: rotate(-374.6deg); }
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
          <!-- Coupler midpoint locus (solved from the same loop closure) -->
          <path class="coupler-curve" d="M 60.1 68.9 L 65.5 68.7 L 70.4 69.5 L 74.2 71.2 L 76.6 73.5 L 77.1 76.2 L 75.6 79.1 L 72.4 82.3 L 68.1 86 L 63.4 89.8 L 58.9 93.3 L 54.5 96.1 L 50.4 98.1 L 46.7 99.1 L 43.5 99.1 L 40.8 98.1 L 38.9 96.3 L 37.8 93.5 L 37.8 89.9 L 38.9 85.6 L 41.3 81.1 L 44.9 76.7 L 49.4 73.1 L 54.6 70.4 L 60.1 68.9 Z" />
        </svg>

        <div class="ground-bar"></div>
        <div class="ground-pivot pivot-a"></div>
        <div class="ground-pivot pivot-d"></div>

        <div class="crank-arm">
          <div class="crank-pin"></div>
          <div class="coupler-link">
            <div class="coupler-mid"></div>
          </div>
        </div>

        <div class="rocker-arm">
          <div class="rocker-pin"></div>
        </div>

        <div class="hud">
          <span>GRASHOF 4-BAR</span>
          <span>CRANK-ROCKER</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-four-bar-linkage')) {
  customElements.define('physics-four-bar-linkage', PhysicsFourBarLinkage);
}
