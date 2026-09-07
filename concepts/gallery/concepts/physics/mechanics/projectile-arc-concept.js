const projectileStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 60%, #0d1a10 0%, #050806 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
  }

  /* Coordinate grid lines */
  .grid-axis {
    position: absolute;
    bottom: 20px;
    left: 10px;
    right: 10px;
    height: 1px;
    background: rgba(0, 204, 0, 0.4);
  }

  .grid-axis-y {
    position: absolute;
    bottom: 20px;
    left: 18px;
    top: 15px;
    width: 1px;
    background: rgba(0, 204, 0, 0.25);
  }

  .grid-ticks {
    position: absolute;
    bottom: 16px;
    left: 20px;
    right: 10px;
    height: 4px;
    background: repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.3) 0, rgba(0, 204, 0, 0.3) 1px, transparent 1px, transparent 18px);
  }

  /* Parabolic guide curve */
  .arc-path {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .arc-curve {
    fill: none;
    stroke: rgba(0, 204, 0, 0.25);
    stroke-width: 1.5;
    stroke-dasharray: 3 3;
  }

  /* Apex telemetry marker */
  .apex-marker {
    position: absolute;
    top: 26px;
    left: 64px;
    width: 6px;
    height: 6px;
    border-top: 1px solid #ffcc00;
    border-left: 1px solid #ffcc00;
    transform: rotate(45deg);
  }

  .apex-label {
    position: absolute;
    top: 16px;
    left: 50px;
    font-size: 7px;
    font-family: monospace;
    color: #ffcc00;
    letter-spacing: 0.5px;
    opacity: 0.85;
  }

  /* Projectile and trajectory animation */
  .projectile-wrapper {
    position: absolute;
    inset: 0;
    animation: flight-cycle 3s cubic-bezier(0.2, 0.0, 0.8, 1) infinite;
  }

  .projectile-node {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 10%, #00ff66 60%, #006622 100%);
    box-shadow: 0 0 8px #00ff66, 0 0 14px rgba(0, 255, 102, 0.5);
  }

  /* Velocity vectors */
  .vec-vx {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 14px;
    height: 1px;
    background: #00e5ff;
    box-shadow: 0 0 4px #00e5ff;
  }

  .vec-vx::after {
    content: '';
    position: absolute;
    right: 0;
    top: -2px;
    border: 2px solid transparent;
    border-left-color: #00e5ff;
  }

  .vec-vy {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 1px;
    height: 14px;
    background: #ff5577;
    transform-origin: top;
    box-shadow: 0 0 4px #ff5577;
    animation: vy-vector 3s linear infinite;
  }

  /* Launch canon and ground impact ripple */
  .launcher {
    position: absolute;
    bottom: 20px;
    left: 16px;
    width: 8px;
    height: 8px;
    border: 1px solid rgba(0, 204, 0, 0.7);
    border-radius: 2px;
    background: #0a2210;
  }

  .impact-ripple {
    position: absolute;
    bottom: 17px;
    left: 104px;
    width: 16px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid #00ff66;
    opacity: 0;
    animation: impact-pulse 3s linear infinite;
  }

  .telemetry-readout {
    position: absolute;
    bottom: 4px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 204, 0, 0.6);
  }

  @keyframes flight-cycle {
    0% {
      transform: translate(20px, 110px);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    50% {
      transform: translate(65px, 32px);
    }
    90% {
      transform: translate(110px, 110px);
      opacity: 1;
    }
    95%, 100% {
      transform: translate(110px, 110px);
      opacity: 0;
    }
  }

  @keyframes vy-vector {
    0% { transform: scaleY(-1.2); }
    50% { transform: scaleY(0); }
    90%, 100% { transform: scaleY(1.2); }
  }

  @keyframes impact-pulse {
    0%, 88% { opacity: 0; transform: scale(0.3); }
    91% { opacity: 1; transform: scale(1); }
    98%, 100% { opacity: 0; transform: scale(1.8); }
  }
`;

class PhysicsProjectileArc extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${projectileStyles}</style>
      <div class="canvas-box">
        <svg class="arc-path" viewBox="0 0 130 130">
          <path class="arc-curve" d="M 20 110 Q 65 -45 110 110" />
        </svg>
        <div class="grid-axis"></div>
        <div class="grid-axis-y"></div>
        <div class="grid-ticks"></div>
        <div class="launcher"></div>
        <div class="apex-marker"></div>
        <span class="apex-label">y_max</span>
        <div class="impact-ripple"></div>
        <div class="projectile-wrapper">
          <div class="projectile-node">
            <div class="vec-vx"></div>
            <div class="vec-vy"></div>
          </div>
        </div>
        <div class="telemetry-readout">
          <span>θ=45°</span>
          <span>g=9.81m/s²</span>
          <span>v₀=28m/s</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-projectile-arc')) {
  customElements.define('physics-projectile-arc', PhysicsProjectileArc);
}
