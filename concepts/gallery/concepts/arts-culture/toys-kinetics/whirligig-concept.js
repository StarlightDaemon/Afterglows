const whirligigStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .whg {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mounting post at bottom */
  .whg-post {
    position: absolute;
    bottom: 6px;
    left: 48px;
    width: 6px;
    height: 38px;
    background: linear-gradient(90deg, #004408, #8cffaa, #004408);
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    z-index: 1;
  }

  /* Weather vane horizontal deck */
  .whg-deck {
    position: absolute;
    bottom: 38px;
    left: 14px;
    width: 86px;
    height: 6px;
    background: linear-gradient(180deg, #008818, #011405);
    border: 1px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    z-index: 2;
  }

  /* Front wind turbine propeller */
  .whg-propeller-rig {
    position: absolute;
    bottom: 25px;
    left: 10px;
    width: 32px;
    height: 32px;
    animation: whg-prop-spin 0.6s linear infinite;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes whg-prop-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 4 Wooden propeller blades */
  .whg-blade {
    position: absolute;
    width: 30px;
    height: 6px;
    background: linear-gradient(90deg, #ffffff, #00aa22);
    border: 1px solid #ffffff;
    border-radius: 3px;
    box-shadow: 0 0 4px #8cffaa;
  }
  .whg-blade.b2 { transform: rotate(90deg); }

  .whg-prop-hub {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #005510;
    box-shadow: 0 0 6px #ffffff;
  }

  /* Jointed woodchopper figure */
  .whg-figure-rig {
    position: absolute;
    bottom: 44px;
    right: 28px;
    width: 24px;
    height: 36px;
    z-index: 3;
  }

  .whg-figure-torso {
    position: absolute;
    bottom: 0;
    left: 8px;
    width: 8px;
    height: 18px;
    background: #008818;
    border: 1px solid #d6ffe0;
    border-radius: 2px;
  }

  .whg-figure-head {
    position: absolute;
    top: -8px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
  }

  /* Jointed swinging arms and axe */
  .whg-axe-arm {
    position: absolute;
    top: 4px;
    left: 6px;
    width: 20px;
    height: 3px;
    background: #8cffaa;
    transform-origin: left center;
    animation: whg-chop 0.6s ease-in-out infinite alternate;
  }

  @keyframes whg-chop {
    0% { transform: rotate(-55deg); }
    100% { transform: rotate(20deg); }
  }

  /* Axe head */
  .whg-axe-head {
    position: absolute;
    right: 0;
    top: -4px;
    width: 6px;
    height: 10px;
    background: #ffffff;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    box-shadow: 0 0 4px #ffffff;
  }

  /* Wood log on chopping block */
  .whg-log {
    position: absolute;
    bottom: 44px;
    right: 14px;
    width: 12px;
    height: 12px;
    background: #011d07;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 2px;
    z-index: 2;
  }

  /* Caption */
  .whg-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptWhirligig extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${whirligigStyles}</style>
      <div class="whg">
        <div class="whg-post"></div>
        <div class="whg-deck"></div>
        <div class="whg-log"></div>

        <div class="whg-propeller-rig">
          <div class="whg-blade b1"></div>
          <div class="whg-blade b2"></div>
          <div class="whg-prop-hub"></div>
        </div>

        <div class="whg-figure-rig">
          <div class="whg-figure-torso">
            <div class="whg-figure-head"></div>
          </div>
          <div class="whg-axe-arm">
            <div class="whg-axe-head"></div>
          </div>
        </div>

        <div class="whg-label">WIND WHIRLIGIG</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-whirligig')) {
  customElements.define('concept-whirligig', ConceptWhirligig);
}
