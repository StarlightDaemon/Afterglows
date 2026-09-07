const kameaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .km-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1f1708 0%, #080501 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .km-stage {
    position: relative;
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 3x3 Magic Square Grid Matrix (Saturn / Lo Shu: sum 15) */
  .km-grid {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    border: 1.5px solid #ffd700;
    box-shadow: inset 0 0 8px rgba(255, 215, 0, 0.3);
  }

  .km-cell {
    border: 0.5px solid rgba(255, 215, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 7.5px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.85);
  }

  /* Planetary Sigil connecting numbers in sequential path */
  .km-sigil-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .km-sigil-path {
    stroke: #ffd700;
    stroke-width: 1.6;
    fill: none;
    filter: drop-shadow(0 0 4px #ffd700);
  }

  /* Planetary tracing spark traversing numbers 1 -> 9 sequentially */
  .km-sigil-spark {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #ffd700;
    z-index: 6;
    offset-path: path("M 38 63 L 63 13 L 13 38 L 13 13 L 38 38 L 63 63 L 63 38 L 13 63 L 38 13");
    animation: km-spark-trace 3.6s linear infinite;
  }

  @keyframes km-spark-trace {
    0% { offset-distance: 0%; opacity: 0; }
    5% { opacity: 1; }
    95% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Concentric occult containment ring with continuous rotation */
  .km-circle {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1.2px dashed rgba(255, 215, 0, 0.6);
    animation: km-circle-rot 4s linear infinite;
    pointer-events: none;
  }

  @keyframes km-circle-rot {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .km-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKameaSquare extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kameaStyles}</style>
      <div class="km-box">
        <div class="km-stage">
          <div class="km-circle"></div>
          <div class="km-sigil-spark"></div>

          <div class="km-grid">
            <div class="km-cell">4</div>
            <div class="km-cell">9</div>
            <div class="km-cell">2</div>
            <div class="km-cell">3</div>
            <div class="km-cell">5</div>
            <div class="km-cell">7</div>
            <div class="km-cell">8</div>
            <div class="km-cell">1</div>
            <div class="km-cell">6</div>
          </div>

          <svg class="km-sigil-svg" viewBox="0 0 76 76">
            <!-- Sigil path passing through numbers 1 to 9 -->
            <path class="km-sigil-path" d="M 38 63 L 63 13 L 13 38 L 13 13 L 38 38 L 63 63 L 63 38 L 13 63 L 38 13" />
          </svg>
        </div>

        <div class="km-label">KAMEA MAGIC SQUARE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-kamea-square')) {
  customElements.define('concept-kamea-square', ConceptKameaSquare);
}
