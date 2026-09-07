const solenoidStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151020 0%, #050308 100%);
    overflow: hidden;
  }

  .solenoid-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Magnetic Flux Field Lines */
  .flux-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: flux-pulse 2s ease-in-out infinite alternate;
  }

  .flux-loop {
    fill: none;
    stroke: rgba(255, 0, 200, 0.45);
    stroke-width: 1.2;
    stroke-dasharray: 4 3;
  }

  /* Solenoid Coil Outer Shell */
  .coil-housing {
    position: absolute;
    width: 70px;
    height: 36px;
    border: 1.5px solid #ff00aa;
    border-radius: 4px;
    background: rgba(255, 0, 170, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 4px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(255, 0, 170, 0.3);
    z-index: 5;
  }

  /* Copper Wire Windings */
  .winding {
    width: 4px;
    height: 28px;
    background: linear-gradient(180deg, #ffcc00, #996600);
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(255, 204, 0, 0.5);
  }

  /* Ferromagnetic Core Plunger */
  .iron-plunger {
    position: absolute;
    top: 50%;
    left: 20px;
    width: 42px;
    height: 14px;
    margin-top: -7px;
    background: linear-gradient(180deg, #99aabb 0%, #445566 100%);
    border: 1px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
    z-index: 6;
    animation: plunger-pull 2s ease-in-out infinite alternate;
  }

  /* Core return spring */
  .return-spring {
    position: absolute;
    top: 50%;
    right: 18px;
    width: 22px;
    height: 12px;
    margin-top: -6px;
    border-top: 1.5px dashed #00ffff;
    border-bottom: 1.5px dashed #00ffff;
    z-index: 4;
    animation: spring-squeeze 2s ease-in-out infinite alternate;
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
    color: rgba(255, 0, 170, 0.8);
    z-index: 10;
  }

  @keyframes plunger-pull {
    0% { transform: translateX(0); }
    100% { transform: translateX(26px); }
  }

  @keyframes spring-squeeze {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.4); }
  }

  @keyframes flux-pulse {
    0% { opacity: 0.3; transform: scale(0.96); }
    100% { opacity: 0.85; transform: scale(1.04); }
  }
`;

class PhysicsSolenoidInductance extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${solenoidStyles}</style>
      <div class="solenoid-box">
        <svg class="flux-svg" viewBox="0 0 130 130">
          <ellipse class="flux-loop" cx="65" cy="65" rx="55" ry="40" />
          <ellipse class="flux-loop" cx="65" cy="65" rx="45" ry="28" />
        </svg>

        <div class="coil-housing">
          <div class="winding"></div>
          <div class="winding"></div>
          <div class="winding"></div>
          <div class="winding"></div>
          <div class="winding"></div>
          <div class="winding"></div>
        </div>

        <div class="iron-plunger"></div>
        <div class="return-spring"></div>

        <div class="hud">
          <span>ELECTROMAGNETIC COIL</span>
          <span>L = μN²A/l</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-solenoid-inductance')) {
  customElements.define('physics-solenoid-inductance', PhysicsSolenoidInductance);
}
