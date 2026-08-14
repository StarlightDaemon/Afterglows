const capillaryStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 60%, #061922 0%, #02070c 100%);
    overflow: hidden;
  }

  .capillary-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Liquid Reservoir */
  .reservoir-dish {
    position: absolute;
    bottom: 18px;
    left: 18px;
    right: 18px;
    height: 38px;
    background: rgba(0, 229, 255, 0.15);
    border: 1.5px solid rgba(0, 229, 255, 0.4);
    border-top: none;
    border-radius: 0 0 6px 6px;
  }

  .waterline-base {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
  }

  /* Glass Capillary Tube */
  .capillary-tube {
    position: absolute;
    bottom: 24px;
    left: 56px;
    width: 18px;
    height: 80px;
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    border-top: none;
    border-bottom: none;
    background: rgba(255, 255, 255, 0.03);
    z-index: 5;
  }

  /* Rising capillary column */
  .climbing-liquid {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, #00ffff 0%, rgba(0, 229, 255, 0.4) 100%);
    animation: capillary-rise 3.4s ease-out infinite;
  }

  /* Concave Meniscus Curve */
  .meniscus {
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    height: 6px;
    border-bottom: 2px solid #ffffff;
    border-radius: 0 0 50% 50%;
    box-shadow: 0 2px 6px rgba(0, 255, 255, 0.8);
  }

  /* Surface tension adhesion vectors */
  .tension-arrow-l {
    position: absolute;
    top: -10px;
    left: 1px;
    width: 1.5px;
    height: 10px;
    background: #ffcc00;
  }

  .tension-arrow-l::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    border: 2.5px solid transparent;
    border-bottom-color: #ffcc00;
  }

  .tension-arrow-r {
    position: absolute;
    top: -10px;
    right: 1px;
    width: 1.5px;
    height: 10px;
    background: #ffcc00;
  }

  .tension-arrow-r::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    border: 2.5px solid transparent;
    border-bottom-color: #ffcc00;
  }

  .height-label {
    position: absolute;
    left: 80px;
    top: 42px;
    font-size: 6.5px;
    font-family: monospace;
    color: #ffcc00;
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

  @keyframes capillary-rise {
    0% {
      height: 8px;
      opacity: 0.7;
    }
    60% {
      height: 54px;
      opacity: 1;
    }
    88% {
      height: 54px;
      opacity: 1;
    }
    100% {
      height: 54px;
      opacity: 0;
    }
  }
`;

class PhysicsCapillaryAction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${capillaryStyles}</style>
      <div class="capillary-box">
        <div class="reservoir-dish">
          <div class="waterline-base"></div>
        </div>

        <div class="capillary-tube">
          <div class="climbing-liquid">
            <div class="meniscus"></div>
            <div class="tension-arrow-l"></div>
            <div class="tension-arrow-r"></div>
          </div>
        </div>

        <span class="height-label">Δh = 2γcosθ/ρgr</span>

        <div class="hud">
          <span>SURFACE TENSION</span>
          <span>JURIN'S LAW</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-capillary-action')) {
  customElements.define('physics-capillary-action', PhysicsCapillaryAction);
}
