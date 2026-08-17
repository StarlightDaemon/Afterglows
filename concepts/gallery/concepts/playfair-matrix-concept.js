const playfairStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pf-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e132b 0%, #08040d 100%);
    border: 1.5px solid rgba(171, 71, 188, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(171, 71, 188, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pf-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pf-svg {
    width: 76px;
    height: 72px;
  }

  /* Rectangular Digram Bounding Box Pulse */
  .pf-rect-box {
    fill: rgba(224, 64, 251, 0.12);
    stroke: #e040fb;
    stroke-width: 1;
    stroke-dasharray: 3 2;
    animation: pf-box-pulse 2.5s ease-in-out infinite alternate;
  }

  @keyframes pf-box-pulse {
    0% { filter: drop-shadow(0 0 1px #ba68c8); stroke: #ab47bc; stroke-width: 1; fill: rgba(224, 64, 251, 0.05); }
    100% { filter: drop-shadow(0 0 6px #e040fb); stroke: #ffffff; stroke-width: 2.4; fill: rgba(224, 64, 251, 0.35); }
  }

  /* Plaintext Corner Pair Nodes (Gold) */
  .pf-node-plain {
    fill: #ffd700;
    animation: pf-plain-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes pf-plain-pulse {
    0% { transform: scale(0.7); opacity: 0.5; }
    100% { transform: scale(1.6); opacity: 1; filter: drop-shadow(0 0 6px #ffd700); }
  }

  /* Ciphertext Swapped Corner Pair Nodes (Cyan) */
  .pf-node-cipher {
    fill: #00e5ff;
    animation: pf-cipher-pulse 2s ease-in-out infinite alternate;
    animation-delay: 1s;
  }

  @keyframes pf-cipher-pulse {
    0% { transform: scale(0.7); opacity: 0.5; }
    100% { transform: scale(1.6); opacity: 1; filter: drop-shadow(0 0 6px #00e5ff); }
  }

  /* Digram swap: plaintext nodes slide along the swap vectors to the cipher corners */
  .pf-swap-r {
    animation: pf-swap-right 3s ease-in-out infinite;
  }

  .pf-swap-l {
    animation: pf-swap-left 3s ease-in-out infinite;
  }

  @keyframes pf-swap-right {
    0%, 12% { transform: translate(0, 0); opacity: 1; }
    55% { transform: translate(20px, 0); opacity: 1; }
    70%, 92% { transform: translate(20px, 0); opacity: 0; }
    100% { transform: translate(0, 0); opacity: 1; }
  }

  @keyframes pf-swap-left {
    0%, 12% { transform: translate(0, 0); opacity: 1; }
    55% { transform: translate(-20px, 0); opacity: 1; }
    70%, 92% { transform: translate(-20px, 0); opacity: 0; }
    100% { transform: translate(0, 0); opacity: 1; }
  }

  .pf-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(171, 71, 188, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPlayfairMatrix extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${playfairStyles}</style>
      <div class="pf-box">
        <div class="pf-stage">
          <svg class="pf-svg" viewBox="0 0 76 72">
            <!-- 5x5 Key Matrix Outer Frame -->
            <rect x="13" y="11" width="50" height="50" fill="rgba(171, 71, 188, 0.05)" stroke="#ab47bc" stroke-width="1.2" rx="2" />

            <!-- 5x5 Internal Division Lines -->
            <g stroke="rgba(171, 71, 188, 0.25)" stroke-width="0.6">
              <line x1="13" y1="21" x2="63" y2="21" />
              <line x1="13" y1="31" x2="63" y2="31" />
              <line x1="13" y1="41" x2="63" y2="41" />
              <line x1="13" y1="51" x2="63" y2="51" />
              <line x1="23" y1="11" x2="23" y2="61" />
              <line x1="33" y1="11" x2="33" y2="61" />
              <line x1="43" y1="11" x2="43" y2="61" />
              <line x1="53" y1="11" x2="53" y2="61" />
            </g>

            <!-- 5x5 Keyed Alphabet Grid (e.g. Keyword "MONARCHY" + remainder) -->
            <g font-family="monospace" font-size="3.5" fill="#ce93d8" text-anchor="middle">
              <text x="18" y="17.5">M</text><text x="28" y="17.5">O</text><text x="38" y="17.5">N</text><text x="48" y="17.5">A</text><text x="58" y="17.5">R</text>
              <text x="18" y="27.5">C</text><text x="28" y="27.5">H</text><text x="38" y="27.5">Y</text><text x="48" y="27.5">B</text><text x="58" y="27.5">D</text>
              <text x="18" y="37.5">E</text><text x="28" y="37.5">F</text><text x="38" y="37.5">G</text><text x="48" y="37.5">I</text><text x="58" y="37.5">K</text>
              <text x="18" y="47.5">L</text><text x="28" y="47.5">P</text><text x="38" y="47.5">Q</text><text x="48" y="47.5">S</text><text x="58" y="47.5">T</text>
              <text x="18" y="57.5">U</text><text x="28" y="57.5">V</text><text x="38" y="57.5">W</text><text x="48" y="57.5">X</text><text x="58" y="57.5">Z</text>
            </g>

            <!-- Digram Rectangle Swap Geometry: Input "H" (28, 27.5) & "S" (48, 47.5) -> Output "B" (48, 27.5) & "P" (28, 47.5) -->
            <rect class="pf-rect-box" x="23" y="21" width="30" height="30" rx="1" />

            <!-- Diagonal Cross Swap Vector Lines -->
            <line x1="28" y1="26" x2="48" y2="26" stroke="#ffd700" stroke-width="0.8" stroke-dasharray="1 1" />
            <line x1="28" y1="46" x2="48" y2="46" stroke="#00e5ff" stroke-width="0.8" stroke-dasharray="1 1" />

            <!-- Input Plaintext Corner Nodes (Gold), sliding to their cipher corners -->
            <g transform="translate(28, 26)"><g class="pf-swap-r"><circle class="pf-node-plain" cx="0" cy="0" r="3.5" /></g></g>
            <g transform="translate(48, 46)"><g class="pf-swap-l"><circle class="pf-node-plain" cx="0" cy="0" r="3.5" /></g></g>

            <!-- Encrypted Ciphertext Corner Nodes (Cyan) -->
            <g transform="translate(48, 26)"><circle class="pf-node-cipher" cx="0" cy="0" r="3.5" /></g>
            <g transform="translate(28, 46)"><circle class="pf-node-cipher" cx="0" cy="0" r="3.5" /></g>
          </svg>
        </div>
        <div class="pf-label">PLAYFAIR DIGRAM</div>
      </div>
    `;
  }
}

customElements.define('concept-playfair-matrix', ConceptPlayfairMatrix);
