const atwoodStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 40%, #0d1512 0%, #050806 100%);
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

  /* Support bracket */
  .bracket {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 10px;
    border-top: 2px solid #506055;
    border-left: 1.5px solid #506055;
    border-right: 1.5px solid #506055;
    border-radius: 2px 2px 0 0;
  }

  .axle-pin {
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
    z-index: 10;
  }

  /* Pulley wheel */
  .pulley-wheel {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-radius: 50%;
    border: 1.5px solid #00ff66;
    background: rgba(0, 40, 20, 0.6);
    box-shadow: 0 0 8px rgba(0, 255, 102, 0.3);
    z-index: 5;
    animation: spin-pulley 3s ease-in-out infinite alternate;
  }

  .pulley-spokes {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .spoke {
    stroke: rgba(0, 255, 102, 0.5);
    stroke-width: 1;
  }

  /* Cable lines */
  .cable-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  .cable-line {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    stroke-linecap: round;
  }

  /* Suspended Masses */
  .mass-wrapper-1 {
    position: absolute;
    left: 53px;
    top: 18px;
    animation: mass-1-travel 3s ease-in-out infinite alternate;
    z-index: 6;
  }

  .mass-1 {
    width: 16px;
    height: 16px;
    margin-left: -8px;
    background: linear-gradient(135deg, #1a4430, #0a2215);
    border: 1.5px solid #00ff66;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6px;
    font-family: monospace;
    font-weight: bold;
    color: #00ff66;
    box-shadow: 0 0 6px rgba(0, 255, 102, 0.4);
  }

  .mass-wrapper-2 {
    position: absolute;
    left: 77px;
    top: 18px;
    animation: mass-2-travel 3s ease-in-out infinite alternate;
    z-index: 6;
  }

  .mass-2 {
    width: 22px;
    height: 24px;
    margin-left: -11px;
    background: linear-gradient(135deg, #443015, #22150a);
    border: 1.5px solid #ffaa00;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6px;
    font-family: monospace;
    font-weight: bold;
    color: #ffaa00;
    box-shadow: 0 0 6px rgba(255, 170, 0, 0.4);
  }

  /* Vector arrows */
  .vec-t {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 10px;
    background: #00e5ff;
    box-shadow: 0 0 3px #00e5ff;
  }

  .vec-t::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -2px;
    border: 2.5px solid transparent;
    border-bottom-color: #00e5ff;
  }

  .vec-g1 {
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 12px;
    background: #ff5577;
  }

  .vec-g1::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: -2px;
    border: 2.5px solid transparent;
    border-top-color: #ff5577;
  }

  .vec-g2 {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 18px;
    background: #ff5577;
  }

  .vec-g2::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: -2px;
    border: 2.5px solid transparent;
    border-top-color: #ff5577;
  }

  /* Telemetry readout */
  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  @keyframes spin-pulley {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(240deg); }
  }

  @keyframes mass-1-travel {
    0% { transform: translateY(70px); }
    100% { transform: translateY(22px); }
  }

  @keyframes mass-2-travel {
    0% { transform: translateY(22px); }
    100% { transform: translateY(70px); }
  }
`;

class PhysicsAtwoodMachine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${atwoodStyles}</style>
      <div class="canvas-box">
        <div class="bracket"></div>
        <div class="axle-pin"></div>

        <div class="pulley-wheel">
          <svg class="pulley-spokes" viewBox="0 0 24 24">
            <line x1="12" y1="0" x2="12" y2="24" class="spoke" />
            <line x1="0" y1="12" x2="24" y2="12" class="spoke" />
            <line x1="3.5" y1="3.5" x2="20.5" y2="20.5" class="spoke" />
            <line x1="3.5" y1="20.5" x2="20.5" y2="3.5" class="spoke" />
          </svg>
        </div>

        <svg class="cable-svg" viewBox="0 0 130 130">
          <path class="cable-line" d="M 53 95 L 53 18 A 12 12 0 0 1 77 18 L 77 95" />
        </svg>

        <div class="mass-wrapper-1">
          <div class="mass-1">
            m₁
            <div class="vec-t"></div>
            <div class="vec-g1"></div>
          </div>
        </div>

        <div class="mass-wrapper-2">
          <div class="mass-2">
            m₂
            <div class="vec-t"></div>
            <div class="vec-g2"></div>
          </div>
        </div>

        <div class="hud">
          <span>a = g(m₂-m₁)/(m₁+m₂)</span>
          <span>T = 2m₁m₂g/(m₁+m₂)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-atwood-machine')) {
  customElements.define('physics-atwood-machine', PhysicsAtwoodMachine);
}
