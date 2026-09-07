const heddleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rh-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e150d 0%, #0a0704 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 183, 77, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rh-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rigid Heddle Frame oscillating UP and DOWN */
  .rh-heddle-frame {
    position: absolute;
    left: 44px;
    width: 12px;
    height: 52px;
    background: #3e2723;
    border: 1.5px solid #ffb74d;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 5;
    animation: rh-shed-shift 3s ease-in-out infinite alternate;
  }

  @keyframes rh-shed-shift {
    0% { transform: translateY(-10px); }
    100% { transform: translateY(10px); }
  }

  /* Eye Holes & Slits in Heddle */
  .rh-eye {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffe082;
    border: 0.5px solid #ff8f00;
  }

  .rh-slit {
    width: 2px;
    height: 8px;
    background: #ffe082;
  }

  /* Warp yarn shed geometry */
  .rh-warp-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Weft boat shuttle darting through shed */
  .rh-shuttle {
    position: absolute;
    top: 32px;
    width: 22px;
    height: 6px;
    background: #d84315;
    border: 1px solid #ffffff;
    border-radius: 6px 6px 2px 2px;
    box-shadow: 0 0 5px #ff5722;
    animation: rh-shuttle-pass 3s ease-in-out infinite alternate;
  }

  @keyframes rh-shuttle-pass {
    0%, 25% { left: 16px; opacity: 1; }
    45%, 55% { left: 62px; opacity: 1; }
    75%, 100% { left: 16px; opacity: 1; }
  }

  /* Finished woven fabric beam on left */
  .rh-cloth {
    position: absolute;
    left: 8px;
    width: 16px;
    height: 38px;
    background: repeating-linear-gradient(0deg, #ffb74d 0px 3px, #d84315 3px 6px);
    border: 1px solid #ffb74d;
    border-radius: 2px;
  }

  .rh-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRigidHeddle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${heddleStyles}</style>
      <div class="rh-box">
        <div class="rh-stage">
          <div class="rh-cloth"></div>

          <svg class="rh-warp-svg" viewBox="0 0 96 76">
            <!-- Upper Shed Warp Lines -->
            <line x1="24" y1="30" x2="50" y2="20" stroke="#ffe082" stroke-width="1.2" />
            <line x1="50" y1="20" x2="88" y2="38" stroke="#ffe082" stroke-width="1.2" />

            <!-- Lower Shed Warp Lines -->
            <line x1="24" y1="46" x2="50" y2="56" stroke="#ffe082" stroke-width="1.2" />
            <line x1="50" y1="56" x2="88" y2="38" stroke="#ffe082" stroke-width="1.2" />
          </svg>

          <div class="rh-heddle-frame">
            <div class="rh-slit"></div>
            <div class="rh-eye"></div>
            <div class="rh-slit"></div>
            <div class="rh-eye"></div>
            <div class="rh-slit"></div>
          </div>

          <div class="rh-shuttle"></div>
        </div>

        <div class="rh-label">RIGID HEDDLE LOOM</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-rigid-heddle')) {
  customElements.define('concept-rigid-heddle', ConceptRigidHeddle);
}
