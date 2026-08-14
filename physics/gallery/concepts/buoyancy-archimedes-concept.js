const buoyancyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 60%, #05141e 0%, #02060a 100%);
    overflow: hidden;
  }

  .aquarium-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Fluid tank */
  .fluid-tank {
    position: absolute;
    bottom: 16px;
    left: 14px;
    right: 14px;
    height: 60px;
    background: rgba(0, 200, 255, 0.12);
    border: 1.5px solid rgba(0, 229, 255, 0.4);
    border-top: none;
    border-radius: 0 0 4px 4px;
    overflow: hidden;
  }

  .waterline {
    position: absolute;
    top: 0;
    left: -20px;
    width: 150px;
    height: 3px;
    background: #00e5ff;
    box-shadow: 0 0 8px #00e5ff;
    animation: water-wave 2s ease-in-out infinite alternate;
  }

  /* Floating Hull Bobbing */
  .floating-hull {
    position: absolute;
    top: 44px;
    left: 45px;
    width: 40px;
    height: 28px;
    animation: hull-bob 2.2s ease-in-out infinite alternate;
    z-index: 6;
  }

  .hull-body {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #3a4a58 0%, #15222e 100%);
    border: 1px solid #ffffff;
    border-radius: 2px 2px 8px 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-family: monospace;
    color: #e0f0ff;
  }

  /* Upward Buoyancy Vector FB */
  .vec-fb {
    position: absolute;
    top: -18px;
    left: 50%;
    width: 2px;
    height: 18px;
    margin-left: -1px;
    background: #00ffff;
    box-shadow: 0 0 6px #00ffff;
  }

  .vec-fb::before {
    content: '';
    position: absolute;
    top: 0;
    left: -3px;
    border: 3.5px solid transparent;
    border-bottom-color: #00ffff;
  }

  .fb-label {
    position: absolute;
    top: -12px;
    left: 4px;
    font-size: 6px;
    font-family: monospace;
    color: #00ffff;
    font-weight: bold;
  }

  /* Downward Gravity Vector mg */
  .vec-mg {
    position: absolute;
    bottom: -18px;
    left: 50%;
    width: 2px;
    height: 18px;
    margin-left: -1px;
    background: #ffaa00;
    box-shadow: 0 0 6px #ffaa00;
  }

  .vec-mg::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3px;
    border: 3.5px solid transparent;
    border-top-color: #ffaa00;
  }

  .mg-label {
    position: absolute;
    bottom: -12px;
    left: 4px;
    font-size: 6px;
    font-family: monospace;
    color: #ffaa00;
    font-weight: bold;
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

  @keyframes hull-bob {
    0% { transform: translateY(-6px); }
    100% { transform: translateY(6px); }
  }

  @keyframes water-wave {
    0% { transform: translateY(-1px) skewY(-1deg); }
    100% { transform: translateY(1px) skewY(1deg); }
  }
`;

class PhysicsBuoyancyArchimedes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${buoyancyStyles}</style>
      <div class="aquarium-box">
        <div class="fluid-tank">
          <div class="waterline"></div>
        </div>

        <div class="floating-hull">
          <div class="vec-fb">
            <span class="fb-label">F_b</span>
          </div>
          <div class="hull-body">m</div>
          <div class="vec-mg">
            <span class="mg-label">mg</span>
          </div>
        </div>

        <div class="hud">
          <span>BUOYANT EQUILIBRIUM</span>
          <span>F_b = ρgV</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-buoyancy-archimedes')) {
  customElements.define('physics-buoyancy-archimedes', PhysicsBuoyancyArchimedes);
}
