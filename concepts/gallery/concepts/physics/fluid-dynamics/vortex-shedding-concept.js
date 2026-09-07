const vortexStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 40% 50%, #061622 0%, #02070c 100%);
    overflow: hidden;
  }

  .tunnel-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Tunnel boundaries */
  .tunnel-top {
    position: absolute;
    top: 20px;
    left: 8px;
    right: 8px;
    height: 1px;
    background: rgba(0, 229, 255, 0.3);
  }

  .tunnel-bottom {
    position: absolute;
    bottom: 20px;
    left: 8px;
    right: 8px;
    height: 1px;
    background: rgba(0, 229, 255, 0.3);
  }

  /* Fixed cylinder obstruction */
  .cylinder-barrier {
    position: absolute;
    left: 24px;
    top: 50%;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #0099bb 60%, #003344 100%);
    box-shadow: 0 0 10px #00e5ff;
    z-index: 6;
  }

  /* Upstream streamline flow */
  .upstream-lines {
    position: absolute;
    left: 6px;
    top: 28px;
    bottom: 28px;
    width: 18px;
    background: repeating-linear-gradient(0deg, rgba(0, 229, 255, 0.4) 0, rgba(0, 229, 255, 0.4) 1px, transparent 1px, transparent 12px);
  }

  /* Alternating Kármán Vortex Eddies drifting downstream */
  .vortex-eddy {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    pointer-events: none;
    animation: drift-vortex 3.2s linear infinite;
  }

  .eddy-top {
    top: 38px;
    border: 1.5px dashed #00ffff;
    box-shadow: 0 0 6px rgba(0, 255, 255, 0.5);
  }

  .eddy-bottom {
    bottom: 38px;
    border: 1.5px dashed #ff007f;
    box-shadow: 0 0 6px rgba(255, 0, 127, 0.5);
  }

  .e1 { left: 42px; animation-delay: 0s; }
  .e2 { left: 42px; animation-delay: 0.8s; }
  .e3 { left: 42px; animation-delay: 1.6s; }
  .e4 { left: 42px; animation-delay: 2.4s; }

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

  @keyframes drift-vortex {
    0% {
      transform: translateX(0) rotate(0deg) scale(0.6);
      opacity: 0.9;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: translateX(75px) rotate(720deg) scale(1.3);
      opacity: 0;
    }
  }
`;

class PhysicsVortexShedding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vortexStyles}</style>
      <div class="tunnel-box">
        <div class="tunnel-top"></div>
        <div class="tunnel-bottom"></div>
        <div class="upstream-lines"></div>

        <div class="cylinder-barrier"></div>

        <div class="vortex-eddy eddy-top e1"></div>
        <div class="vortex-eddy eddy-bottom e2"></div>
        <div class="vortex-eddy eddy-top e3"></div>
        <div class="vortex-eddy eddy-bottom e4"></div>

        <div class="hud">
          <span>KÁRMÁN VORTEX STREET</span>
          <span>Re = 250</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-vortex-shedding')) {
  customElements.define('physics-vortex-shedding', PhysicsVortexShedding);
}
