const gravTimeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1220 0%, #020306 100%);
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

  .grav-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Gravitational well curvature */
  .well-curve {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Deep well clock (slow ticks) */
  .clock-deep {
    fill: #152230;
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 4px rgba(255, 85, 119, 0.6));
  }

  .hand-deep {
    stroke: #ff5577;
    stroke-width: 1.5;
    stroke-linecap: round;
    transform-origin: 65px 95px;
    animation: rotate-deep 6s linear infinite;
  }

  /* Far field clock (fast ticks) */
  .clock-far {
    fill: #152230;
    stroke: #00ff66;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 4px rgba(0, 255, 102, 0.6));
  }

  .hand-far {
    stroke: #00ff66;
    stroke-width: 1.5;
    stroke-linecap: round;
    transform-origin: 65px 28px;
    animation: rotate-far 2s linear infinite;
  }

  /* Graviton / Photon redshift exchange line */
  .redshift-beam {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.2;
    stroke-dasharray: 4 2;
    animation: beam-flow 2s linear infinite;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-far { fill: #00ff66; }
  .lbl-deep { fill: #ff5577; }
  .lbl-well { fill: #00e5ff; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes rotate-far {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes rotate-deep {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes beam-flow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -12; }
  }
`;

class PhysicsGravitationalTimeDilation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gravTimeStyles}</style>
      <div class="canvas-box">
        <svg class="grav-svg" viewBox="0 0 130 130">
          <!-- Gravitational Potential Well Curve -->
          <path d="M 15 35 Q 40 40 55 75 Q 65 110 75 75 Q 90 40 115 35" class="well-curve" />

          <!-- Photon Redshift Transmission Path -->
          <line x1="65" y1="84" x2="65" y2="39" class="redshift-beam" />

          <!-- Far-field Clock (Weak Gravity: Fast Time) -->
          <circle cx="65" cy="28" r="10" class="clock-far" />
          <line x1="65" y1="28" x2="65" y2="20" class="hand-far" />
          <text x="12" y="16" class="lbl lbl-far">r → ∞ : dt/dτ = 1.0 (FAST)</text>

          <!-- Deep-well Clock (Strong Gravity: Slow Time) -->
          <circle cx="65" cy="95" r="10" class="clock-deep" />
          <line x1="65" y1="95" x2="65" y2="87" class="hand-deep" />
          <text x="12" y="118" class="lbl lbl-deep">r ~ r_s : dτ/dt = √(1 - r_s/r) (SLOW)</text>

          <text x="78" y="60" class="lbl lbl-well">ν_obs &lt; ν_emit</text>
        </svg>

        <div class="hud">
          <span>dτ = dt √(1 - 2GM/rc²)</span>
          <span>Gravitational Redshift</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-gravitational-time-dilation')) {
  customElements.define('physics-gravitational-time-dilation', PhysicsGravitationalTimeDilation);
}
