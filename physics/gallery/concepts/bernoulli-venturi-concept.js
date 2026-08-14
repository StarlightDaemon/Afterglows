const venturiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #081624 0%, #02060c 100%);
    overflow: hidden;
  }

  .venturi-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Pipe profile SVG */
  .pipe-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .pipe-wall {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.8;
  }

  .pipe-fluid-bg {
    fill: rgba(0, 229, 255, 0.08);
  }

  /* Manometer Vertical Pressure Columns */
  .manometer-tube {
    position: absolute;
    top: 18px;
    width: 8px;
    border: 1px solid rgba(0, 229, 255, 0.5);
    border-top: none;
    background: rgba(0, 229, 255, 0.05);
    display: flex;
    flex-direction: column-reverse;
  }

  .tube-1 {
    left: 26px;
    height: 38px;
  }

  .tube-2 {
    left: 61px;
    height: 48px;
  }

  .tube-3 {
    left: 96px;
    height: 38px;
  }

  .fluid-column {
    width: 100%;
    background: linear-gradient(180deg, #00ffff, #007799);
    border-top: 1.5px solid #ffffff;
    box-shadow: 0 0 4px #00ffff;
  }

  .col-high { height: 28px; }
  .col-low { height: 10px; }

  /* Flow particle streamers accelerating through throat */
  .stream-particle {
    position: absolute;
    top: 75px;
    width: 4px;
    height: 2px;
    border-radius: 1px;
    background: #ffffff;
    box-shadow: 0 0 4px #00ffff;
    animation: flow-stream 2.2s linear infinite;
  }

  .p1 { animation-delay: 0s; }
  .p2 { animation-delay: 0.55s; }
  .p3 { animation-delay: 1.1s; }
  .p4 { animation-delay: 1.65s; }

  .v1-label {
    position: absolute;
    bottom: 24px;
    left: 20px;
    font-size: 6px;
    font-family: monospace;
    color: #00e5ff;
  }

  .v2-label {
    position: absolute;
    bottom: 24px;
    left: 56px;
    font-size: 6px;
    font-family: monospace;
    color: #ffaa00;
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
    color: rgba(0, 229, 255, 0.8);
    z-index: 10;
  }

  @keyframes flow-stream {
    0% {
      left: 10px;
      transform: scaleX(1);
    }
    35% {
      left: 50px;
      transform: scaleX(1.5);
    }
    60% {
      left: 78px;
      transform: scaleX(2.5);
    }
    100% {
      left: 118px;
      transform: scaleX(1);
    }
  }
`;

class PhysicsBernoulliVenturi extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${venturiStyles}</style>
      <div class="venturi-box">
        <svg class="pipe-svg" viewBox="0 0 130 130">
          <!-- Fluid background inside pipe -->
          <polygon class="pipe-fluid-bg" points="10,55 45,55 60,66 70,66 85,55 120,55 120,95 85,95 70,84 60,84 45,95 10,95" />
          <!-- Top pipe contour with neck -->
          <path class="pipe-wall" d="M 10 55 L 45 55 Q 55 55 60 66 L 70 66 Q 75 55 85 55 L 120 55" />
          <!-- Bottom pipe contour with neck -->
          <path class="pipe-wall" d="M 10 95 L 45 95 Q 55 95 60 84 L 70 84 Q 75 95 85 95 L 120 95" />
        </svg>

        <!-- Manometers -->
        <div class="manometer-tube tube-1"><div class="fluid-column col-high"></div></div>
        <div class="manometer-tube tube-2"><div class="fluid-column col-low"></div></div>
        <div class="manometer-tube tube-3"><div class="fluid-column col-high"></div></div>

        <!-- Streamline particles -->
        <div class="stream-particle p1"></div>
        <div class="stream-particle p2"></div>
        <div class="stream-particle p3"></div>
        <div class="stream-particle p4"></div>

        <span class="v1-label">v₁, P_high</span>
        <span class="v2-label">v₂ &gt; v₁, P_low</span>

        <div class="hud">
          <span>BERNOULLI VENTURI</span>
          <span>P + ½ρv² = CONST</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-bernoulli-venturi')) {
  customElements.define('physics-bernoulli-venturi', PhysicsBernoulliVenturi);
}
