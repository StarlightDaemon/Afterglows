const shuttleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1e22 0%, #030a0c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sc-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Court net guideline */
  .sc-net {
    position: absolute;
    bottom: 8px;
    left: 45px;
    width: 6px;
    height: 28px;
    border-left: 2px dashed #76ff03;
  }

  /* Shuttlecock in flight trajectory */
  .sc-birdie {
    position: absolute;
    width: 36px;
    height: 24px;
    display: flex;
    align-items: center;
    animation: sc-flight-rally 3s ease-in-out infinite;
  }

  @keyframes sc-flight-rally {
    0% { top: 38px; left: 10px; transform: rotate(-25deg) scale(0.9); }
    30% { top: 12px; left: 42px; transform: rotate(0deg) scale(1.1); }
    50% { top: 36px; left: 62px; transform: rotate(35deg) scale(0.95); }
    55% { top: 36px; left: 62px; transform: rotate(-145deg) scale(0.95); }
    80% { top: 14px; left: 38px; transform: rotate(-180deg) scale(1.1); }
    100% { top: 38px; left: 10px; transform: rotate(-205deg) scale(0.9); }
  }

  /* Rounded leather-covered cork base */
  .sc-cork-base {
    width: 10px;
    height: 10px;
    border-radius: 50% 0 0 50%;
    background: #ffffff;
    border: 1px solid #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
    z-index: 5;
  }

  /* Flared conical goose feather skirt */
  .sc-feathers-svg {
    width: 24px;
    height: 22px;
  }

  .sc-quill {
    stroke: #ffffff;
    stroke-width: 1.2;
    fill: rgba(255, 255, 255, 0.25);
  }

  .sc-binding-thread {
    stroke: #76ff03;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .sc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFeatherShuttlecock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${shuttleStyles}</style>
      <div class="sc-box">
        <div class="sc-stage">
          <div class="sc-net"></div>

          <div class="sc-birdie">
            <div class="sc-cork-base"></div>

            <svg class="sc-feathers-svg" viewBox="0 0 24 22">
              <!-- Overlapping goose feather vane skirt -->
              <polygon class="sc-quill" points="0,11 24,0 24,22" />
              <!-- Twin binding thread loops around feathers -->
              <line class="sc-binding-thread" x1="12" y1="5" x2="12" y2="17" />
              <line class="sc-binding-thread" x1="18" y1="2" x2="18" y2="20" />
            </svg>
          </div>
        </div>

        <div class="sc-label">FEATHER SHUTTLECOCK</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-feather-shuttlecock')) {
  customElements.define('concept-feather-shuttlecock', ConceptFeatherShuttlecock);
}
