const lucidaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cl-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0a1824 0%, #02060a 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cl-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Brass clamp and articulated support rod */
  .cl-rod {
    position: absolute;
    top: 10px;
    left: 14px;
    width: 3px;
    height: 52px;
    background: #ffb74d;
    box-shadow: 0 0 4px #ffa726;
  }

  /* Wollaston 4-sided Glass Prism Head */
  .cl-prism-head {
    position: absolute;
    top: 8px;
    left: 20px;
    width: 22px;
    height: 22px;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(0, 229, 255, 0.3) 70%);
    border: 1.5px solid #00e5ff;
    clip-path: polygon(0% 0%, 100% 30%, 70% 100%, 0% 70%);
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.6);
  }

  /* Optical sightlines & ray reflection */
  .cl-ray-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .cl-ray-path {
    stroke: #00e5ff;
    stroke-dasharray: 4 2;
    animation: cl-ray-flow 1.5s linear infinite;
  }

  @keyframes cl-ray-flow {
    to { stroke-dashoffset: -6; }
  }

  /* Drawing paper easel on bottom right */
  .cl-paper {
    position: absolute;
    bottom: 8px;
    right: 12px;
    width: 44px;
    height: 30px;
    background: #1c2b36;
    border: 1px solid #00e5ff;
    border-radius: 2px;
    box-shadow: inset 0 0 6px rgba(0, 229, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Superimposed ghost image appearing on paper */
  .cl-ghost-sketch {
    width: 26px;
    height: 20px;
    border: 1px dashed rgba(255, 255, 255, 0.8);
    border-radius: 3px;
    animation: cl-ghost-fade 3s ease-in-out infinite alternate;
  }

  @keyframes cl-ghost-fade {
    0% { opacity: 0.3; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1.05); }
  }

  .cl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCameraLucida extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lucidaStyles}</style>
      <div class="cl-box">
        <div class="cl-stage">
          <div class="cl-rod"></div>

          <svg class="cl-ray-svg" viewBox="0 0 96 76">
            <!-- Ray from subject to prism, then down to paper -->
            <path class="cl-ray-path" d="M 88 18 L 32 18 L 62 56" fill="none" stroke-width="1.2" />
          </svg>

          <div class="cl-prism-head"></div>

          <div class="cl-paper">
            <div class="cl-ghost-sketch"></div>
          </div>
        </div>

        <div class="cl-label">CAMERA LUCIDA PRISM</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-camera-lucida')) {
  customElements.define('concept-camera-lucida', ConceptCameraLucida);
}
