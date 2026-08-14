const slingshotStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 60% 40%, #100a1c 0%, #04020a 100%);
    overflow: hidden;
  }

  .slingshot-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Gravity well rings */
  .well-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    margin: -40px 0 0 -40px;
    border-radius: 50%;
    border: 1px dashed rgba(180, 100, 255, 0.25);
  }

  .well-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin: -25px 0 0 -25px;
    border-radius: 50%;
    border: 1px dotted rgba(180, 100, 255, 0.35);
  }

  /* Moving Jupiter-like planet with orbital motion */
  .planet-host {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 22px;
    height: 22px;
    margin: -11px 0 0 -11px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffccaa 0%, #cc6633 60%, #441100 100%);
    box-shadow: 0 0 12px rgba(255, 120, 50, 0.5);
    z-index: 6;
  }

  .planet-vector {
    position: absolute;
    top: -8px;
    left: 50%;
    width: 1.5px;
    height: 12px;
    background: #ffaa44;
  }

  .planet-vector::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2.5px;
    border: 3px solid transparent;
    border-bottom-color: #ffaa44;
  }

  /* Hyperbolic slingshot trajectory path */
  .hyperbola-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .flyby-path {
    fill: none;
    stroke: rgba(0, 229, 255, 0.3);
    stroke-width: 1.5;
    stroke-dasharray: 4 3;
  }

  /* Spacecraft probe. The flyer is a 0x0 point so the path coordinates line
     up with the box; a full-size flyer would put its center on the path and
     displace the probe by a rotating corner offset. Default offset-rotate
     keeps the exhaust tail trailing the flight direction. */
  .probe-flyer {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    offset-path: path("M 10 115 C 30 100, 60 85, 76 65 C 85 50, 78 30, 60 20 C 45 15, 25 10, -5 8");
    animation: probe-flight 3.5s cubic-bezier(0.2, 0.1, 0.8, 1) infinite;
  }

  .probe-body {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ffff, 0 0 14px rgba(0, 255, 255, 0.8);
  }

  .exhaust-tail {
    position: absolute;
    top: 2px;
    right: 6px;
    width: 12px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ffff);
    border-radius: 1px;
  }

  .vin-label {
    position: absolute;
    bottom: 22px;
    left: 10px;
    font-size: 6.5px;
    font-family: monospace;
    color: #00e5ff;
  }

  .vout-label {
    position: absolute;
    top: 8px;
    left: 10px;
    font-size: 6.5px;
    font-family: monospace;
    color: #ff55aa;
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
    color: rgba(180, 100, 255, 0.8);
    z-index: 10;
  }

  @keyframes probe-flight {
    0% {
      offset-distance: 0%;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    95%, 100% {
      offset-distance: 100%;
      opacity: 0;
    }
  }
`;

class PhysicsGravitationalSlingshot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${slingshotStyles}</style>
      <div class="slingshot-box">
        <div class="well-ring"></div>
        <div class="well-inner"></div>

        <svg class="hyperbola-svg" viewBox="0 0 130 130">
          <path class="flyby-path" d="M 10 115 C 30 100, 60 85, 76 65 C 85 50, 78 30, 60 20 C 45 15, 25 10, -5 8" />
        </svg>

        <div class="planet-host">
          <div class="planet-vector"></div>
        </div>

        <span class="vin-label">v_in = 12 km/s</span>
        <span class="vout-label">v_out = 28 km/s</span>

        <div class="probe-flyer">
          <div class="probe-body">
            <div class="exhaust-tail"></div>
          </div>
        </div>

        <div class="hud">
          <span>GRAVITY ASSIST</span>
          <span>+Δv = 16 km/s</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-gravitational-slingshot')) {
  customElements.define('physics-gravitational-slingshot', PhysicsGravitationalSlingshot);
}
