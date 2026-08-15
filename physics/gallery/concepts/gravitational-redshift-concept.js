const redshiftStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 80%, #150a18 0%, #050208 100%);
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

  /* Gravitating Mass Surface at bottom */
  .mass-surface {
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 36px;
    border-radius: 50% 50% 0 0;
    background: radial-gradient(ellipse at 50% 0%, #442255, #150820);
    border-top: 1.5px solid #aa55ff;
    box-shadow: 0 0 16px rgba(170, 85, 255, 0.4);
    z-index: 5;
  }

  /* Potential Well Curves SVG */
  .field-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .potential-contour {
    fill: none;
    stroke: rgba(170, 85, 255, 0.25);
    stroke-width: 1;
    stroke-dasharray: 3 3;
  }

  /* Stretched Light Wave Climbing Upwards */
  .photon-beam {
    fill: none;
    stroke: url(#redshiftGrad);
    stroke-width: 2;
    filter: drop-shadow(0 0 4px rgba(255, 85, 119, 0.6));
    animation: wave-propagate 2.4s linear infinite;
  }

  /* Climbing photon packet */
  .photon-pulse {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    offset-path: path("M 65 105 L 65 20");
    animation: climb-potential 2.4s linear infinite;
    z-index: 8;
  }

  /* Detector plates */
  .detector-emitter {
    position: absolute;
    bottom: 22px;
    left: 45px;
    width: 40px;
    height: 3px;
    background: #00e5ff;
    border-radius: 1px;
    box-shadow: 0 0 6px #00e5ff;
  }

  .detector-receiver {
    position: absolute;
    top: 18px;
    left: 45px;
    width: 40px;
    height: 3px;
    background: #ff5577;
    border-radius: 1px;
    box-shadow: 0 0 6px #ff5577;
  }

  .label-emit {
    position: absolute;
    bottom: 28px;
    right: 8px;
    font-size: 5.5px;
    font-family: monospace;
    color: #00e5ff;
  }

  .label-recv {
    position: absolute;
    top: 14px;
    right: 8px;
    font-size: 5.5px;
    font-family: monospace;
    color: #ff5577;
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
    color: rgba(255, 170, 255, 0.85);
    z-index: 10;
  }

  @keyframes climb-potential {
    0% {
      offset-distance: 0%;
      background: #00e5ff;
      box-shadow: 0 0 8px #00e5ff;
      opacity: 0;
    }
    10% { opacity: 1; }
    50% {
      background: #ffcc00;
      box-shadow: 0 0 8px #ffcc00;
    }
    85% {
      offset-distance: 100%;
      background: #ff5577;
      box-shadow: 0 0 8px #ff5577;
      opacity: 1;
    }
    95%, 100% {
      offset-distance: 100%;
      opacity: 0;
    }
  }

  @keyframes wave-propagate {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -32; }
  }
`;

class PhysicsGravitationalRedshift extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${redshiftStyles}</style>
      <div class="canvas-box">
        <svg class="field-svg" viewBox="0 0 130 130">
          <defs>
            <linearGradient id="redshiftGrad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stop-color="#00e5ff" />
              <stop offset="50%" stop-color="#ffcc00" />
              <stop offset="100%" stop-color="#ff5577" />
            </linearGradient>
          </defs>

          <!-- Gravitational Potential Contours -->
          <path d="M 10 95 Q 65 85 120 95" class="potential-contour" />
          <path d="M 15 65 Q 65 58 115 65" class="potential-contour" />
          <path d="M 20 38 Q 65 34 110 38" class="potential-contour" />

          <!-- Ascending Wave with Increasing Wavelength -->
          <path d="M 65 105 
                   C 69 101, 61 97, 65 93
                   C 70 88, 60 83, 65 77
                   C 72 70, 58 63, 65 55
                   C 74 44, 56 33, 65 20" 
                class="photon-beam" 
                stroke-dasharray="8 2" />
        </svg>

        <div class="mass-surface"></div>
        <div class="detector-emitter"></div>
        <div class="detector-receiver"></div>
        <div class="photon-pulse"></div>

        <span class="label-emit">λ_emit (Blue)</span>
        <span class="label-recv">λ_rec (Red)</span>

        <div class="hud">
          <span>Δν/ν₀ = gh/c²</span>
          <span>ν_obs = ν₀√(1-2GM/rc²)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-gravitational-redshift')) {
  customElements.define('physics-gravitational-redshift', PhysicsGravitationalRedshift);
}
