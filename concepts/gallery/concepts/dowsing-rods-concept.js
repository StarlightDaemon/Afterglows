const dowsingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151022 0%, #06040a 100%);
    border: 1.5px solid rgba(186, 104, 200, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(186, 104, 200, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dr-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Subterranean aquifer water vein */
  .dr-aquifer {
    position: absolute;
    bottom: 8px;
    width: 86px;
    height: 16px;
    border-radius: 8px;
    background: linear-gradient(90deg, transparent 0%, rgba(0, 229, 255, 0.4) 50%, transparent 100%);
    border-top: 1px dashed #00e5ff;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.3);
  }

  /* Geomagnetic ley line radiation pulses */
  .dr-ley-pulse {
    position: absolute;
    bottom: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px dashed rgba(186, 104, 200, 0.4);
    animation: dr-pulse 2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes dr-pulse {
    0% { transform: scale(0.2); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  /* Left Brass Dowsing Rod */
  .dr-rod-left {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 48px;
    height: 4px;
    transform-origin: 4px 2px;
    animation: dr-cross-left 4s ease-in-out infinite alternate;
  }

  @keyframes dr-cross-left {
    0% { transform: rotate(-35deg); }
    100% { transform: rotate(35deg); }
  }

  .dr-handle-l {
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 16px;
    background: #ffb74d;
    border: 1px solid #ffffff;
    border-radius: 2px;
  }

  .dr-wire-l {
    position: absolute;
    left: 4px;
    top: 0;
    width: 46px;
    height: 2px;
    background: #ffd54f;
    box-shadow: 0 0 4px #ffd54f;
  }

  /* Right Brass Dowsing Rod */
  .dr-rod-right {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 48px;
    height: 4px;
    transform-origin: 44px 2px;
    animation: dr-cross-right 4s ease-in-out infinite alternate;
  }

  @keyframes dr-cross-right {
    0% { transform: rotate(35deg); }
    100% { transform: rotate(-35deg); }
  }

  .dr-handle-r {
    position: absolute;
    right: 0;
    top: 0;
    width: 6px;
    height: 16px;
    background: #ffb74d;
    border: 1px solid #ffffff;
    border-radius: 2px;
  }

  .dr-wire-r {
    position: absolute;
    right: 4px;
    top: 0;
    width: 46px;
    height: 2px;
    background: #ffd54f;
    box-shadow: 0 0 4px #ffd54f;
  }

  .dr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(186, 104, 200, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptDowsingRods extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dowsingStyles}</style>
      <div class="dr-box">
        <div class="dr-stage">
          <div class="dr-aquifer"></div>
          <div class="dr-ley-pulse"></div>

          <div class="dr-rod-left">
            <div class="dr-handle-l"></div>
            <div class="dr-wire-l"></div>
          </div>

          <div class="dr-rod-right">
            <div class="dr-handle-r"></div>
            <div class="dr-wire-r"></div>
          </div>
        </div>

        <div class="dr-label">DIVINING DOWSING RODS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-dowsing-rods')) {
  customElements.define('concept-dowsing-rods', ConceptDowsingRods);
}
