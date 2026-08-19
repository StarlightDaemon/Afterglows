const levitationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0c1822 0%, #03060a 100%);
    overflow: hidden;
  }

  .levitation-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Magnetic Track on bottom */
  .magnet-track {
    position: absolute;
    bottom: 24px;
    left: 18px;
    right: 18px;
    height: 14px;
    display: flex;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  }

  .pole-block {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-family: monospace;
    font-weight: bold;
  }

  .pole-n {
    background: #cc2233;
    color: #ffffff;
    border-top: 1.5px solid #ff4455;
  }

  .pole-s {
    background: #1155cc;
    color: #ffffff;
    border-top: 1.5px solid #3388ff;
  }

  /* Quantum Flux Pinning Lines */
  .flux-tube-svg {
    position: absolute;
    bottom: 36px;
    left: 25px;
    right: 25px;
    height: 38px;
    width: 80px;
    opacity: 0.5;
  }

  .flux-strand {
    stroke: #00ffff;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Hovering Superconductor Puck */
  .superconductor-puck {
    position: absolute;
    top: 45px;
    width: 44px;
    height: 16px;
    background: linear-gradient(180deg, #384855 0%, #1a2228 100%);
    border: 1.5px solid #00ffff;
    border-radius: 4px;
    box-shadow: 0 0 12px #00ffff, 0 8px 16px rgba(0, 229, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6.5px;
    font-family: monospace;
    color: #00ffff;
    z-index: 6;
    animation: quantum-float 2.4s ease-in-out infinite alternate;
  }

  /* Cryo vapor wisps */
  .cryo-vapor {
    position: absolute;
    bottom: -6px;
    left: 6px;
    right: 6px;
    height: 6px;
    background: radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.6), transparent);
    border-radius: 50%;
    animation: vapor-glow 1.2s ease-in-out infinite alternate;
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

  @keyframes quantum-float {
    0% { transform: translateY(-12px) rotate(-3deg); }
    100% { transform: translateY(6px) rotate(3deg); }
  }

  @keyframes vapor-glow {
    0% { opacity: 0.4; transform: scaleX(0.9); }
    100% { opacity: 0.9; transform: scaleX(1.1); }
  }
`;

class PhysicsSuperconductorLevitation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${levitationStyles}</style>
      <div class="levitation-box">
        <svg class="flux-tube-svg" viewBox="0 0 80 40">
          <line class="flux-strand" x1="15" y1="0" x2="15" y2="40" />
          <line class="flux-strand" x1="30" y1="0" x2="30" y2="40" />
          <line class="flux-strand" x1="50" y1="0" x2="50" y2="40" />
          <line class="flux-strand" x1="65" y1="0" x2="65" y2="40" />
        </svg>

        <div class="superconductor-puck">
          YBCO
          <div class="cryo-vapor"></div>
        </div>

        <div class="magnet-track">
          <div class="pole-block pole-n">N</div>
          <div class="pole-block pole-s">S</div>
          <div class="pole-block pole-n">N</div>
          <div class="pole-block pole-s">S</div>
        </div>

        <div class="hud">
          <span>MEISSNER EFFECT</span>
          <span>FLUX PINNING T&lt;Tc</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-superconductor-levitation')) {
  customElements.define('physics-superconductor-levitation', PhysicsSuperconductorLevitation);
}
