const flutingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fi-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1610 0%, #0a0705 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 171, 64, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fi-stage {
    position: relative;
    width: 96px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Cast iron stand frame */
  .fi-frame {
    position: absolute;
    bottom: 8px;
    width: 82px;
    height: 12px;
    background: #211510;
    border: 1.5px solid #ffab40;
    border-radius: 2px;
  }

  /* Upper Fluted Brass Roller */
  .fi-roller-top {
    position: absolute;
    top: 14px;
    left: 36px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: repeating-conic-gradient(#ffe082 0deg 15deg, #ff8f00 15deg 30deg);
    border: 1.5px solid #ffd54f;
    box-shadow: 0 0 6px rgba(255, 213, 79, 0.4);
    animation: fi-spin-cw 2s linear infinite;
  }

  @keyframes fi-spin-cw {
    to { transform: rotate(360deg); }
  }

  /* Lower Fluted Brass Roller */
  .fi-roller-bot {
    position: absolute;
    top: 34px;
    left: 36px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: repeating-conic-gradient(#ffe082 0deg 15deg, #ff8f00 15deg 30deg);
    border: 1.5px solid #ffd54f;
    box-shadow: 0 0 6px rgba(255, 213, 79, 0.4);
    animation: fi-spin-ccw 2s linear infinite reverse;
  }

  @keyframes fi-spin-ccw {
    to { transform: rotate(360deg); }
  }

  /* Flat ribbon feed on left */
  .fi-ribbon-flat {
    position: absolute;
    top: 35px;
    left: 6px;
    width: 30px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 4px #ffffff;
  }

  /* Crimped accordion ruffled ribbon on right */
  .fi-ribbon-crimped {
    position: absolute;
    top: 29px;
    right: 6px;
    width: 32px;
    height: 14px;
  }

  .fi-crimp-wave {
    stroke: #ffffff;
    stroke-dasharray: 4 2;
    animation: fi-flow-crimp 1s linear infinite;
  }

  @keyframes fi-flow-crimp {
    to { stroke-dashoffset: -6; }
  }

  .fi-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFlutingIron extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${flutingStyles}</style>
      <div class="fi-box">
        <div class="fi-stage">
          <div class="fi-frame"></div>
          <div class="fi-ribbon-flat"></div>

          <div class="fi-roller-top"></div>
          <div class="fi-roller-bot"></div>

          <svg class="fi-ribbon-crimped" viewBox="0 0 32 14">
            <path class="fi-crimp-wave" d="M 0 7 Q 4 0 8 7 Q 12 14 16 7 Q 20 0 24 7 Q 28 14 32 7" fill="none" stroke-width="2" />
          </svg>
        </div>

        <div class="fi-label">VICTORIAN FLUTING IRON</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fluting-iron')) {
  customElements.define('concept-fluting-iron', ConceptFlutingIron);
}
