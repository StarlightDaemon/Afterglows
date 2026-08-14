const chladniStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151810 0%, #050804 100%);
    overflow: hidden;
  }

  .plate-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Square resonant plate */
  .metal-plate {
    position: absolute;
    width: 90px;
    height: 90px;
    background: #0d140e;
    border: 1.5px solid #aaff00;
    box-shadow: 0 0 10px rgba(170, 255, 0, 0.25), inset 0 0 14px rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Central driver transducer */
  .center-driver {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #aaff00;
    box-shadow: 0 0 10px #aaff00;
    z-index: 6;
    animation: pulse-transducer 0.6s ease-in-out infinite alternate;
  }

  /* Chladni nodal figures (SVG geometric sand lines) */
  .chladni-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .nodal-curve {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-dasharray: 2 3;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8));
    animation: nodal-shimmer 2.4s ease-in-out infinite alternate;
  }

  .nodal-mode-2 {
    fill: none;
    stroke: #aaff00;
    stroke-width: 1.2;
    stroke-dasharray: 1 2;
    opacity: 0.6;
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
    color: rgba(170, 255, 0, 0.8);
    z-index: 10;
  }

  @keyframes pulse-transducer {
    0% { transform: scale(0.9); opacity: 0.8; }
    100% { transform: scale(1.15); opacity: 1; }
  }

  @keyframes nodal-shimmer {
    0% {
      stroke-dashoffset: 0;
      opacity: 0.85;
    }
    100% {
      stroke-dashoffset: 20;
      opacity: 1;
    }
  }
`;

class PhysicsChladniPlate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${chladniStyles}</style>
      <div class="plate-box">
        <div class="metal-plate">
          <svg class="chladni-svg" viewBox="0 0 90 90">
            <!-- Nodal figure curves: m=3, n=3 mode lines -->
            <ellipse class="nodal-curve" cx="45" cy="45" rx="30" ry="30" />
            <path class="nodal-curve" d="M 0 45 Q 45 45 45 0 M 90 45 Q 45 45 45 0 M 0 45 Q 45 45 45 90 M 90 45 Q 45 45 45 90" />
            <circle class="nodal-mode-2" cx="45" cy="45" r="18" />
          </svg>
          <div class="center-driver"></div>
        </div>

        <div class="hud">
          <span>CHLADNI NODAL PATTERN</span>
          <span>f = 2.48 kHz</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-chladni-plate')) {
  customElements.define('physics-chladni-plate', PhysicsChladniPlate);
}
