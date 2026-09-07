const geckoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gs-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d2215 0%, #030a05 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 230, 118, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gs-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Smooth glass substrate surface on top */
  .gs-glass-wall {
    position: absolute;
    top: 8px;
    width: 88px;
    height: 6px;
    background: rgba(0, 229, 255, 0.2);
    border-bottom: 1.5px solid #00e5ff;
    box-shadow: 0 0 6px rgba(0, 229, 255, 0.4);
  }

  /* Microscopic Seta stalk flexing and adhering */
  .gs-seta-stem {
    position: absolute;
    bottom: 10px;
    width: 12px;
    height: 46px;
    background: linear-gradient(180deg, #69f0ae 0%, #1b5e20 100%);
    border: 1px solid #00e676;
    border-radius: 4px 4px 6px 6px;
    transform-origin: bottom center;
    animation: gs-shear-adhere 3s ease-in-out infinite alternate;
  }

  @keyframes gs-shear-adhere {
    0% { transform: rotate(-10deg) translateY(6px); }
    100% { transform: rotate(12deg) translateY(0); }
  }

  /* Nanoscale Spatulae branch fan at tip */
  .gs-spatulae-svg {
    position: absolute;
    top: 14px;
    width: 64px;
    height: 32px;
    animation: gs-spatula-peel 3s ease-in-out infinite alternate;
  }

  @keyframes gs-spatula-peel {
    0% { transform: scaleY(0.8); opacity: 0.6; }
    100% { transform: scaleY(1.1); opacity: 1; filter: drop-shadow(0 0 4px #00e676); }
  }

  .gs-spatula-fiber {
    stroke: #69f0ae;
    stroke-width: 1.2;
    fill: none;
  }

  .gs-triangle-pad {
    fill: #00e5ff;
    stroke: #ffffff;
    stroke-width: 0.5;
  }

  /* Van der Waals electrostatic atomic attraction fields */
  .gs-vdw-glow {
    position: absolute;
    top: 10px;
    width: 58px;
    height: 4px;
    background: #00e5ff;
    box-shadow: 0 0 8px #00e5ff, 0 0 16px #69f0ae;
    animation: gs-vdw-pulse 1.5s ease-in-out infinite alternate;
  }

  @keyframes gs-vdw-pulse {
    0% { opacity: 0.3; }
    100% { opacity: 1; }
  }

  .gs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGeckoSetae extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${geckoStyles}</style>
      <div class="gs-box">
        <div class="gs-stage">
          <div class="gs-glass-wall"></div>
          <div class="gs-vdw-glow"></div>

          <div class="gs-seta-stem"></div>

          <svg class="gs-spatulae-svg" viewBox="0 0 64 32">
            <!-- Branched terminal spatulae stalks -->
            <path class="gs-spatula-fiber" d="M 32 30 Q 24 16 12 6" />
            <path class="gs-spatula-fiber" d="M 32 30 Q 32 14 32 4" />
            <path class="gs-spatula-fiber" d="M 32 30 Q 40 16 52 6" />

            <!-- Triangular nanoscale spatulae pads in contact with glass -->
            <polygon class="gs-triangle-pad" points="8,4 16,4 12,8" />
            <polygon class="gs-triangle-pad" points="28,2 36,2 32,6" />
            <polygon class="gs-triangle-pad" points="48,4 56,4 52,8" />
          </svg>
        </div>

        <div class="gs-label">GECKO SETAE ADHESION</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-gecko-setae')) {
  customElements.define('concept-gecko-setae', ConceptGeckoSetae);
}
