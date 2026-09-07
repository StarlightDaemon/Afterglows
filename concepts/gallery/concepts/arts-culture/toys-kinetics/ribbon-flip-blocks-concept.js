const ribbonBlocksStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rf-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1122 0%, #08030b 100%);
    border: 1.5px solid rgba(255, 64, 129, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 64, 129, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rf-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Tumbling vertical ladder stack */
  .rf-ladder-stack {
    position: absolute;
    top: 8px;
    width: 44px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  /* Rectangular wooden blocks interwoven with ribbons */
  .rf-block {
    width: 38px;
    height: 10px;
    border-radius: 2px;
    border: 1px solid #ffffff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .rf-b1 {
    background: #ff5252;
    transform-origin: center top;
    animation: rf-top-tilt 2.4s ease-in-out infinite;
  }

  @keyframes rf-top-tilt {
    0%, 20% { transform: rotate(0deg); }
    40%, 60% { transform: rotate(45deg); }
    80%, 100% { transform: rotate(-45deg); }
  }

  .rf-b2 {
    background: #448aff;
    animation: rf-flip-b2 2.4s ease-in-out infinite;
  }

  @keyframes rf-flip-b2 {
    0%, 30% { transform: scaleX(1); }
    50% { transform: scaleX(0.2) skewX(20deg); }
    70%, 100% { transform: scaleX(1); }
  }

  .rf-b3 {
    background: #ffd700;
    animation: rf-flip-b3 2.4s ease-in-out infinite;
  }

  @keyframes rf-flip-b3 {
    0%, 50% { transform: scaleX(1); }
    70% { transform: scaleX(0.2) skewX(-20deg); }
    90%, 100% { transform: scaleX(1); }
  }

  .rf-b4 {
    background: #69f0ae;
  }

  /* Cross-threaded silk ribbon tapes */
  .rf-ribbon {
    width: 4px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0 0 2px #ffffff;
  }

  .rf-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 64, 129, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRibbonFlipBlocks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ribbonBlocksStyles}</style>
      <div class="rf-box">
        <div class="rf-stage">
          <div class="rf-ladder-stack">
            <div class="rf-block rf-b1">
              <div class="rf-ribbon"></div>
              <div class="rf-ribbon"></div>
            </div>

            <div class="rf-block rf-b2">
              <div class="rf-ribbon"></div>
            </div>

            <div class="rf-block rf-b3">
              <div class="rf-ribbon"></div>
              <div class="rf-ribbon"></div>
            </div>

            <div class="rf-block rf-b4">
              <div class="rf-ribbon"></div>
            </div>
          </div>
        </div>

        <div class="rf-label">RIBBON FLIP BLOCKS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ribbon-flip-blocks')) {
  customElements.define('concept-ribbon-flip-blocks', ConceptRibbonFlipBlocks);
}
