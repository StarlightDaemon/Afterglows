const semaphoreStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .st-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #1a162b 0%, #080612 100%);
    border: 1.5px solid rgba(179, 136, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(179, 136, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .st-stage {
    position: relative;
    width: 90px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Telegraph stone tower mast */
  .st-tower {
    position: absolute;
    bottom: 0px;
    width: 18px;
    height: 34px;
    background: #231b3d;
    border: 1.5px solid #b388ff;
    border-bottom: none;
    clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
  }

  .st-mast-pole {
    position: absolute;
    bottom: 30px;
    width: 3px;
    height: 24px;
    background: #b388ff;
    box-shadow: 0 0 4px #b388ff;
  }

  /* Main pivoting regulator bar */
  .st-regulator {
    position: absolute;
    top: 18px;
    width: 48px;
    height: 4px;
    background: #ffffff;
    border: 1px solid #b388ff;
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(179, 136, 255, 0.8);
    transform-origin: center center;
    animation: st-reg-dance 6s steps(1) infinite;
  }

  @keyframes st-reg-dance {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(45deg); }
    50% { transform: rotate(-45deg); }
    75% { transform: rotate(90deg); }
    100% { transform: rotate(0deg); }
  }

  /* Left Indicator Wing */
  .st-wing-left {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 18px;
    height: 3px;
    background: #ffd54f;
    border-radius: 1.5px;
    box-shadow: 0 0 5px #ffd54f;
    transform-origin: left center;
    animation: st-wing-l-dance 6s steps(1) infinite;
  }

  @keyframes st-wing-l-dance {
    0% { transform: rotate(45deg); }
    25% { transform: rotate(135deg); }
    50% { transform: rotate(-45deg); }
    75% { transform: rotate(-135deg); }
    100% { transform: rotate(45deg); }
  }

  /* Right Indicator Wing */
  .st-wing-right {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 18px;
    height: 3px;
    background: #ffd54f;
    border-radius: 1.5px;
    box-shadow: 0 0 5px #ffd54f;
    transform-origin: right center;
    animation: st-wing-r-dance 6s steps(1) infinite;
  }

  @keyframes st-wing-r-dance {
    0% { transform: rotate(-45deg); }
    25% { transform: rotate(-135deg); }
    50% { transform: rotate(45deg); }
    75% { transform: rotate(135deg); }
    100% { transform: rotate(-45deg); }
  }

  /* Optical telescope crosshairs */
  .st-crosshair {
    position: absolute;
    inset: 4px;
    border: 1px dashed rgba(179, 136, 255, 0.25);
    border-radius: 50%;
    pointer-events: none;
  }

  .st-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(179, 136, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSemaphoreTelegraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${semaphoreStyles}</style>
      <div class="st-box">
        <div class="st-stage">
          <div class="st-crosshair"></div>
          <div class="st-tower"></div>
          <div class="st-mast-pole"></div>

          <div class="st-regulator">
            <div class="st-wing-left"></div>
            <div class="st-wing-right"></div>
          </div>
        </div>

        <div class="st-label">CHAPPE SEMAPHORE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-semaphore-telegraph')) {
  customElements.define('concept-semaphore-telegraph', ConceptSemaphoreTelegraph);
}
