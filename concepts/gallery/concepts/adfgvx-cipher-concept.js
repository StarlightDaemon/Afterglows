const adfgvxStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ad-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152219 0%, #030805 100%);
    border: 1.5px solid rgba(76, 175, 80, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ad-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ad-svg {
    width: 76px;
    height: 72px;
  }

  /* Columnar Transposition Ribbon Flow */
  .ad-ribbon-stream {
    stroke: #69f0ae;
    stroke-dasharray: 4 2;
    animation: ad-stream 1.5s linear infinite;
  }

  @keyframes ad-stream {
    to { stroke-dashoffset: -12; }
  }

  /* Fractionated coordinate pulse */
  .ad-coord-header {
    fill: #aed581;
    animation: ad-coord-flash 2s ease-in-out infinite alternate;
  }

  @keyframes ad-coord-flash {
    0% { filter: drop-shadow(0 0 1px #4caf50); }
    100% { filter: drop-shadow(0 0 4px #81c784); }
  }

  /* Polybius Grid lines */
  .ad-polybius-grid {
    fill: rgba(76, 175, 80, 0.08);
    stroke: #4caf50;
    stroke-width: 0.8;
  }

  .ad-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(76, 175, 80, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAdfgvxCipher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${adfgvxStyles}</style>
      <div class="ad-box">
        <div class="ad-stage">
          <svg class="ad-svg" viewBox="0 0 76 72">
            <!-- 6x6 Polybius Matrix Frame (Left Side) -->
            <rect class="ad-polybius-grid" x="8" y="14" width="34" height="34" rx="2" />

            <!-- ADFGVX Column Header Labels (Top) -->
            <g class="ad-coord-header" font-family="monospace" font-size="3" text-anchor="middle" font-weight="bold">
              <text x="16" y="11">A</text>
              <text x="21" y="11">D</text>
              <text x="26" y="11">F</text>
              <text x="31" y="11">G</text>
              <text x="36" y="11">V</text>
              <text x="40" y="11">X</text>
            </g>

            <!-- ADFGVX Row Header Labels (Left) -->
            <g class="ad-coord-header" font-family="monospace" font-size="3" text-anchor="middle" font-weight="bold">
              <text x="5" y="19">A</text>
              <text x="5" y="25">D</text>
              <text x="5" y="31">F</text>
              <text x="5" y="37">G</text>
              <text x="5" y="42">V</text>
              <text x="5" y="47">X</text>
            </g>

            <!-- Matrix Grid Cells Division -->
            <g stroke="rgba(76, 175, 80, 0.25)" stroke-width="0.5">
              <line x1="8" y1="20" x2="42" y2="20" />
              <line x1="8" y1="26" x2="42" y2="26" />
              <line x1="8" y1="32" x2="42" y2="32" />
              <line x1="8" y1="38" x2="42" y2="38" />
              <line x1="8" y1="44" x2="42" y2="44" />
              <line x1="14" y1="14" x2="14" y2="48" />
              <line x1="19" y1="14" x2="19" y2="48" />
              <line x1="24" y1="14" x2="24" y2="48" />
              <line x1="29" y1="14" x2="29" y2="48" />
              <line x1="34" y1="14" x2="34" y2="48" />
            </g>

            <!-- Active Target Fractionation Pair (e.g. Target letter "K" -> "FA") -->
            <rect x="24" y="26" width="5" height="6" fill="#ffd700" opacity="0.8" />
            <text x="26.5" y="30.5" font-family="monospace" font-size="3.5" font-weight="bold" fill="#000000" text-anchor="middle">K</text>

            <!-- Fractionation Conduits routing to Columnar Transposition Ribbons -->
            <path class="ad-ribbon-stream" d="M 42 30 L 48 30 L 48 18 L 54 18" fill="none" stroke-width="1.2" />
            <path class="ad-ribbon-stream" d="M 42 30 L 48 30 L 48 40 L 54 40" fill="none" stroke-width="1.2" />

            <!-- Transposition Columns on Right -->
            <rect x="54" y="12" width="16" height="48" fill="#1b2e21" stroke="#81c784" stroke-width="0.8" />
            <g font-family="monospace" font-size="3" fill="#c8e6c9" text-anchor="middle">
              <text x="58" y="16">F</text><text x="66" y="16">A</text>
              <text x="58" y="24">D</text><text x="66" y="24">G</text>
              <text x="58" y="32">X</text><text x="66" y="32">V</text>
              <text x="58" y="40">A</text><text x="66" y="40">D</text>
              <text x="58" y="48">V</text><text x="66" y="48">F</text>
              <text x="58" y="56">G</text><text x="66" y="56">X</text>
            </g>
          </svg>
        </div>
        <div class="ad-label">ADFGVX CIPHER</div>
      </div>
    `;
  }
}

customElements.define('concept-adfgvx-cipher', ConceptAdfgvxCipher);
