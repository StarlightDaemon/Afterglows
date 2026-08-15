const balanceSyphonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bs-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1c150c 0%, #080502 100%);
    border: 1.5px solid rgba(255, 193, 7, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 193, 7, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bs-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mahogany wooden base */
  .bs-base {
    position: absolute;
    bottom: 8px;
    width: 86px;
    height: 8px;
    background: #2d1808;
    border: 1px solid #ffc107;
    border-radius: 2px;
  }

  /* Pivoting balance arm rocker */
  .bs-balance-arm {
    position: absolute;
    top: 24px;
    width: 78px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform-origin: center 20px;
    animation: bs-tilt 5s ease-in-out infinite alternate;
  }

  @keyframes bs-tilt {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  /* Brass boiler flask on left */
  .bs-boiler {
    width: 24px;
    height: 32px;
    border-radius: 6px;
    background: linear-gradient(135deg, #ffe082 0%, #ff8f00 100%);
    border: 1.2px solid #ffffff;
    box-shadow: 0 0 6px #ffb300;
  }

  /* Glass brew carafe on right */
  .bs-glass {
    width: 24px;
    height: 32px;
    border-radius: 6px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 193, 7, 0.1) 80%);
    border: 1.2px solid #ffe082;
    box-shadow: 0 0 4px rgba(255, 224, 130, 0.4);
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  /* Liquid level cycling inside glass */
  .bs-liquid {
    width: 100%;
    height: 60%;
    background: #3e2723;
    border-top: 1.5px solid #ffb300;
    animation: bs-liquid-level 5s ease-in-out infinite alternate;
  }

  @keyframes bs-liquid-level {
    0% { height: 15%; }
    100% { height: 80%; }
  }

  /* Connecting siphon bridge tube */
  .bs-siphon-tube {
    position: absolute;
    top: 12px;
    width: 44px;
    height: 16px;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    border-radius: 8px 8px 0 0;
  }

  /* Spirit burner under boiler */
  .bs-burner {
    position: absolute;
    bottom: 16px;
    left: 16px;
    width: 12px;
    height: 8px;
    background: #ffa000;
    border-radius: 2px;
  }

  .bs-flame {
    position: absolute;
    top: -8px;
    left: 3px;
    width: 6px;
    height: 8px;
    border-radius: 50% 50% 20% 20%;
    background: #00e5ff;
    box-shadow: 0 0 6px #ff3d00;
    animation: bs-flame-snuff 5s ease-in-out infinite alternate;
  }

  @keyframes bs-flame-snuff {
    0%, 40% { opacity: 1; transform: scale(1); }
    60%, 100% { opacity: 0; transform: scale(0.2); }
  }

  .bs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 193, 7, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBalanceSyphon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${balanceSyphonStyles}</style>
      <div class="bs-box">
        <div class="bs-stage">
          <div class="bs-base"></div>

          <div class="bs-burner">
            <div class="bs-flame"></div>
          </div>

          <div class="bs-balance-arm">
            <div class="bs-boiler"></div>
            <div class="bs-siphon-tube"></div>
            <div class="bs-glass">
              <div class="bs-liquid"></div>
            </div>
          </div>
        </div>

        <div class="bs-label">BALANCE COFFEE SYPHON</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-balance-syphon')) {
  customElements.define('concept-balance-syphon', ConceptBalanceSyphon);
}
