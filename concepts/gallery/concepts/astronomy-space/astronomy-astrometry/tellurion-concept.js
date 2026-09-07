const tellurionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tel {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 30% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Central glowing Sun lamp */
  .tel-sun {
    position: absolute;
    left: 20px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #ffffff 0%, #d6ffe0 40%, #00aa22 80%);
    box-shadow: 0 0 14px #ffffff, 0 0 26px #8cffaa;
    z-index: 5;
  }

  /* Main geared revolving arm */
  .tel-arm-rig {
    position: absolute;
    left: 32px;
    width: 72px;
    height: 72px;
    transform-origin: 0px 36px;
    animation: tel-orbit-year 10s linear infinite;
  }

  @keyframes tel-orbit-year {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Brass arm linkage bar */
  .tel-arm-bar {
    position: absolute;
    top: 35px;
    left: 0;
    width: 54px;
    height: 2px;
    background: #d6ffe0;
    box-shadow: 0 0 4px #8cffaa;
  }

  /* Geared epicyclic housing at Earth station */
  .tel-earth-station {
    position: absolute;
    top: 24px;
    left: 42px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Tilted Earth Globe (23.5° axial tilt) */
  .tel-earth-globe {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(90deg, #ffffff 0% 50%, #003308 50% 100%);
    border: 1px solid #d6ffe0;
    box-shadow: 0 0 6px #8cffaa;
    transform: rotate(23.5deg);
    z-index: 4;
    animation: tel-earth-spin 2s linear infinite;
  }

  @keyframes tel-earth-spin {
    0% { transform: rotate(23.5deg) scaleX(1); }
    50% { transform: rotate(23.5deg) scaleX(-1); }
    100% { transform: rotate(23.5deg) scaleX(1); }
  }

  /* Revolving Moon in orbit around Earth */
  .tel-moon-orbit {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px dotted rgba(140, 255, 170, 0.4);
    animation: tel-moon-rev 2.2s linear infinite;
  }

  @keyframes tel-moon-rev {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .tel-moon-sphere {
    position: absolute;
    top: -2px;
    left: 14px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #ffffff;
  }

  /* Celestial solar rays */
  .tel-solar-ray {
    position: absolute;
    left: 32px;
    top: 50px;
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.6), transparent);
    pointer-events: none;
  }

  /* Caption */
  .tel-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptTellurion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tellurionStyles}</style>
      <div class="tel">
        <div class="tel-sun"></div>
        <div class="tel-solar-ray"></div>

        <div class="tel-arm-rig">
          <div class="tel-arm-bar"></div>
          <div class="tel-earth-station">
            <div class="tel-earth-globe"></div>
            <div class="tel-moon-orbit">
              <div class="tel-moon-sphere"></div>
            </div>
          </div>
        </div>

        <div class="tel-label">TELLURION ORRERY</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tellurion')) {
  customElements.define('concept-tellurion', ConceptTellurion);
}
