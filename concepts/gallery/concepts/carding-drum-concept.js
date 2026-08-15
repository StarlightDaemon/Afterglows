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
    border: 1.5px dashed #ffb04a;
    box-shadow: 0 0 6px rgba(255, 176, 74, 0.3);
    animation: cd-spin-main 4s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes cd-spin-main {
    to { transform: rotate(360deg); }
  }

  /* Smaller Licker-in / Doffer Drum */
  .cd-doffer-drum {
    position: absolute;
    right: 6px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: radial-gradient(circle, #4a3018 0%, #201306 70%);
    border: 1.5px dashed #ffd494;
    box-shadow: 0 0 5px rgba(255, 212, 148, 0.3);
    animation: cd-spin-doffer 2s linear infinite reverse;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes cd-spin-doffer {
    to { transform: rotate(360deg); }
  }

  /* Brass center pins */
  .cd-pin {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffecb3;
    border: 1px solid #ff9900;
  }

  /* Wool fiber web streaming between drums */
  .cd-fiber-stream {
    position: absolute;
    top: 24px;
    left: 42px;
    width: 22px;
    height: 26px;
    pointer-events: none;
  }

  .cd-fiber-line {
    stroke: #fff8e7;
    stroke-dasharray: 4 3;
    animation: cd-fibers 1s linear infinite;
  }

  @keyframes cd-fibers {
    to { stroke-dashoffset: -7; }
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
            <div class="cd-pin"></div>
          </div>

          <div class="cd-doffer-drum">
            <div class="cd-pin"></div>
          </div>

          <svg class="cd-fiber-stream" viewBox="0 0 22 26">
            <path class="cd-fiber-line" d="M 0 4 Q 11 8 22 12" fill="none" stroke-width="1.2" />
            <path class="cd-fiber-line" d="M 0 12 Q 11 15 22 18" fill="none" stroke-width="1.2" style="animation-delay: -0.3s;" />
            <path class="cd-fiber-line" d="M 0 20 Q 11 22 22 24" fill="none" stroke-width="1.2" style="animation-delay: -0.6s;" />
          </svg>
        </div>

        <div class="cd-label">TEXTILE DRUM CARDER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-carding-drum')) {
  customElements.define('concept-carding-drum', ConceptCardingDrum);
}
