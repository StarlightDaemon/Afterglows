const cardingDrumStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cd-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e150b 0%, #0a0703 100%);
    border: 1.5px solid rgba(255, 187, 85, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 187, 85, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cd-stage {
    position: relative;
    width: 90px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Large Main Carding Drum */
  .cd-main-drum {
    position: absolute;
    left: 2px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: radial-gradient(circle, #3d2612 0%, #1a1005 70%);
    border: 1.5px solid #ffb04a;
    box-shadow: 0 0 6px rgba(255, 176, 74, 0.3);
    animation: cd-spin-main 2.4s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes cd-spin-main {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Smaller Licker-in / Doffer Drum */
  .cd-doffer-drum {
    position: absolute;
    right: 6px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: radial-gradient(circle, #4a3018 0%, #201306 70%);
    border: 1.5px solid #ffd494;
    box-shadow: 0 0 5px rgba(255, 212, 148, 0.3);
    animation: cd-spin-doffer 1.2s linear infinite reverse;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes cd-spin-doffer {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Carding spoke teeth & crank peg */
  .cd-spoke {
    position: absolute;
    width: 2px;
    background: #ffd494;
  }

  .cd-main-spoke { height: 48px; }
  .cd-doffer-spoke { height: 24px; }

  .cd-pin {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffecb3;
    border: 1px solid #ff9900;
    z-index: 5;
  }

  /* Wool fleece tufts traveling between drums */
  .cd-wool-tuft {
    position: absolute;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #fff8e7;
    z-index: 6;
  }

  .w1 { width: 5px; height: 5px; animation: cd-wool-flow 1.6s linear infinite; }
  .w2 { width: 6px; height: 4px; animation: cd-wool-flow 1.6s linear infinite; animation-delay: 0.55s; }
  .w3 { width: 4px; height: 5px; animation: cd-wool-flow 1.6s linear infinite; animation-delay: 1.1s; }

  @keyframes cd-wool-flow {
    0% { transform: translate(12px, 32px) scale(0.6); opacity: 0; }
    25% { opacity: 1; transform: translate(32px, 26px) scale(1.1); }
    75% { opacity: 1; transform: translate(56px, 28px) scale(0.9); }
    100% { transform: translate(78px, 34px) scale(0.5); opacity: 0; }
  }

  .cd-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 130, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCardingDrum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cardingDrumStyles}</style>
      <div class="cd-box">
        <div class="cd-stage">
          <div class="cd-main-drum">
            <div class="cd-spoke cd-main-spoke" style="transform: rotate(0deg);"></div>
            <div class="cd-spoke cd-main-spoke" style="transform: rotate(45deg);"></div>
            <div class="cd-spoke cd-main-spoke" style="transform: rotate(90deg);"></div>
            <div class="cd-spoke cd-main-spoke" style="transform: rotate(135deg);"></div>
            <div class="cd-pin"></div>
          </div>

          <div class="cd-doffer-drum">
            <div class="cd-spoke cd-doffer-spoke" style="transform: rotate(0deg);"></div>
            <div class="cd-spoke cd-doffer-spoke" style="transform: rotate(60deg);"></div>
            <div class="cd-spoke cd-doffer-spoke" style="transform: rotate(120deg);"></div>
            <div class="cd-pin"></div>
          </div>

          <div class="cd-wool-tuft w1"></div>
          <div class="cd-wool-tuft w2"></div>
          <div class="cd-wool-tuft w3"></div>
        </div>

        <div class="cd-label">TEXTILE DRUM CARDER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-carding-drum')) {
  customElements.define('concept-carding-drum', ConceptCardingDrum);
}
