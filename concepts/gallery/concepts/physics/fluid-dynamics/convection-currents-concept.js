const convectionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #150f18 0%, #050308 100%);
    overflow: hidden;
  }

  .convection-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Thermal Boundary Plates */
  .cool-plate-top {
    position: absolute;
    top: 18px;
    left: 12px;
    right: 12px;
    height: 5px;
    background: #0088cc;
    border-bottom: 1.5px solid #00ffff;
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
  }

  .hot-plate-bottom {
    position: absolute;
    bottom: 18px;
    left: 12px;
    right: 12px;
    height: 5px;
    background: #cc3300;
    border-top: 1.5px solid #ff5500;
    box-shadow: 0 0 10px rgba(255, 85, 0, 0.6);
  }

  .plate-label-cold {
    position: absolute;
    top: 10px;
    left: 16px;
    font-size: 6px;
    font-family: monospace;
    color: #00ffff;
  }

  .plate-label-hot {
    position: absolute;
    bottom: 10px;
    left: 16px;
    font-size: 6px;
    font-family: monospace;
    color: #ff5500;
  }

  /* Rayleigh-Bénard Convection Roll Cells */
  .cell-left {
    position: absolute;
    left: 20px;
    top: 32px;
    width: 42px;
    height: 64px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 100, 50, 0.5);
    animation: rotate-cell-cw 3s linear infinite;
  }

  .cell-right {
    position: absolute;
    right: 20px;
    top: 32px;
    width: 42px;
    height: 64px;
    border-radius: 50%;
    border: 1.5px dashed rgba(0, 200, 255, 0.5);
    animation: rotate-cell-ccw 3s linear infinite;
  }

  /* Rising hot central plume */
  .hot-plume {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 24px;
    margin: -12px 0 0 -3px;
    background: linear-gradient(0deg, #ff3300, #ffff00);
    border-radius: 3px;
    box-shadow: 0 0 8px #ff3300;
    animation: plume-rise 1.5s ease-in-out infinite alternate;
  }

  .hud {
    position: absolute;
    bottom: 2px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(255, 150, 50, 0.8);
    z-index: 10;
  }

  @keyframes rotate-cell-cw {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rotate-cell-ccw {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  @keyframes plume-rise {
    0% { transform: translateY(4px) scaleY(0.85); opacity: 0.8; }
    100% { transform: translateY(-4px) scaleY(1.15); opacity: 1; }
  }
`;

class PhysicsConvectionCurrents extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${convectionStyles}</style>
      <div class="convection-box">
        <span class="plate-label-cold">COLD SINK T_c</span>
        <div class="cool-plate-top"></div>

        <div class="cell-left"></div>
        <div class="cell-right"></div>
        <div class="hot-plume"></div>

        <div class="hot-plate-bottom"></div>
        <span class="plate-label-hot">HEAT SOURCE T_h</span>

        <div class="hud">
          <span>RAYLEIGH-BÉNARD</span>
          <span>Ra = 1.7×10⁴</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-convection-currents')) {
  customElements.define('physics-convection-currents', PhysicsConvectionCurrents);
}
