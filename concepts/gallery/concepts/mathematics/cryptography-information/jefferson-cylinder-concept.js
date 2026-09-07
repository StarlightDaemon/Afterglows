const jeffersonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .jc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1c1524 0%, #08050d 100%);
    border: 1.5px solid rgba(224, 64, 251, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(224, 64, 251, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jc-svg {
    width: 76px;
    height: 72px;
  }

  /* Disc wheel rim lines */
  .jc-wheel-rim {
    fill: #2d1838;
    stroke: #ba68c8;
    stroke-width: 1;
  }

  /* Independent wheel rotation indexing translation */
  .w1 { animation: jc-disc-spin 2.2s ease-in-out infinite alternate; }
  .w2 { animation: jc-disc-spin 2.6s ease-in-out infinite alternate; animation-delay: -0.4s; }
  .w3 { animation: jc-disc-spin 2.0s ease-in-out infinite alternate; animation-delay: -0.8s; }
  .w4 { animation: jc-disc-spin 2.8s ease-in-out infinite alternate; animation-delay: -1.2s; }
  .w5 { animation: jc-disc-spin 2.4s ease-in-out infinite alternate; animation-delay: -0.6s; }
  .w6 { animation: jc-disc-spin 2.1s ease-in-out infinite alternate; animation-delay: -1.0s; }

  @keyframes jc-disc-spin {
    0% { transform: translateY(-5px); }
    100% { transform: translateY(5px); }
  }

  /* Plaintext guide rule alignment bar */
  .jc-guide-plain {
    stroke: #00e5ff;
    stroke-width: 1.4;
    animation: jc-plain-glow 2s ease-in-out infinite alternate;
  }

  @keyframes jc-plain-glow {
    0% { filter: drop-shadow(0 0 1px #00e5ff); }
    100% { filter: drop-shadow(0 0 6px #00e5ff); }
  }

  /* Ciphertext guide rule alignment bar */
  .jc-guide-cipher {
    stroke: #ffd700;
    stroke-width: 1.4;
    animation: jc-cipher-glow 2s ease-in-out infinite alternate;
  }

  @keyframes jc-cipher-glow {
    0% { filter: drop-shadow(0 0 1px #ffd700); }
    100% { filter: drop-shadow(0 0 6px #ffd700); }
  }

  /* Encryption cipher decode spark scanning along alignment row */
  .jc-scan-spark {
    position: absolute;
    top: 29px;
    left: 15px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00e5ff, 0 0 12px #ffffff;
    z-index: 6;
    animation: jc-scan-across 2.8s linear infinite;
  }

  @keyframes jc-scan-across {
    0% { transform: translateX(0); opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { transform: translateX(57px); opacity: 0; }
  }

  .jc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 64, 251, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptJeffersonCylinder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${jeffersonStyles}</style>
      <div class="jc-box">
        <div class="jc-stage">
          <div class="jc-scan-spark"></div>

          <svg class="jc-svg" viewBox="0 0 76 72">
            <!-- Center Spindle Steel Axle & Thumbscrew Clamps -->
            <rect x="4" y="34" width="68" height="4" fill="#9e9e9e" stroke="#cfd8dc" stroke-width="1" />
            <rect x="2" y="26" width="5" height="20" rx="1" fill="#ffd54f" stroke="#ff8f00" stroke-width="1" />
            <rect x="69" y="26" width="5" height="20" rx="1" fill="#ffd54f" stroke="#ff8f00" stroke-width="1" />

            <!-- Stack of Rotating Cipher Discs (Wheel segments with dynamic independent rotation) -->
            <g class="jc-wheels">
              <!-- Disc 1 -->
              <g class="w1">
                <rect class="jc-wheel-rim" x="10" y="18" width="8" height="36" rx="1" />
                <text x="14" y="25" font-family="monospace" font-size="4" fill="#00e5ff" text-anchor="middle" font-weight="bold">A</text>
                <text x="14" y="38" font-family="monospace" font-size="4" fill="#ffffff" text-anchor="middle">R</text>
                <text x="14" y="49" font-family="monospace" font-size="4" fill="#ffd700" text-anchor="middle" font-weight="bold">X</text>
              </g>
              <!-- Disc 2 -->
              <g class="w2">
                <rect class="jc-wheel-rim" x="19" y="18" width="8" height="36" rx="1" />
                <text x="23" y="25" font-family="monospace" font-size="4" fill="#00e5ff" text-anchor="middle" font-weight="bold">T</text>
                <text x="23" y="38" font-family="monospace" font-size="4" fill="#ffffff" text-anchor="middle">B</text>
                <text x="23" y="49" font-family="monospace" font-size="4" fill="#ffd700" text-anchor="middle" font-weight="bold">M</text>
              </g>
              <!-- Disc 3 -->
              <g class="w3">
                <rect class="jc-wheel-rim" x="28" y="18" width="8" height="36" rx="1" />
                <text x="32" y="25" font-family="monospace" font-size="4" fill="#00e5ff" text-anchor="middle" font-weight="bold">T</text>
                <text x="32" y="38" font-family="monospace" font-size="4" fill="#ffffff" text-anchor="middle">L</text>
                <text x="32" y="49" font-family="monospace" font-size="4" fill="#ffd700" text-anchor="middle" font-weight="bold">Q</text>
              </g>
              <!-- Disc 4 -->
              <g class="w4">
                <rect class="jc-wheel-rim" x="37" y="18" width="8" height="36" rx="1" />
                <text x="41" y="25" font-family="monospace" font-size="4" fill="#00e5ff" text-anchor="middle" font-weight="bold">A</text>
                <text x="41" y="38" font-family="monospace" font-size="4" fill="#ffffff" text-anchor="middle">G</text>
                <text x="41" y="49" font-family="monospace" font-size="4" fill="#ffd700" text-anchor="middle" font-weight="bold">Z</text>
              </g>
              <!-- Disc 5 -->
              <g class="w5">
                <rect class="jc-wheel-rim" x="46" y="18" width="8" height="36" rx="1" />
                <text x="50" y="25" font-family="monospace" font-size="4" fill="#00e5ff" text-anchor="middle" font-weight="bold">C</text>
                <text x="50" y="38" font-family="monospace" font-size="4" fill="#ffffff" text-anchor="middle">K</text>
                <text x="50" y="49" font-family="monospace" font-size="4" fill="#ffd700" text-anchor="middle" font-weight="bold">P</text>
              </g>
              <!-- Disc 6 -->
              <g class="w6">
                <rect class="jc-wheel-rim" x="55" y="18" width="8" height="36" rx="1" />
                <text x="59" y="25" font-family="monospace" font-size="4" fill="#00e5ff" text-anchor="middle" font-weight="bold">K</text>
                <text x="59" y="38" font-family="monospace" font-size="4" fill="#ffffff" text-anchor="middle">E</text>
                <text x="59" y="49" font-family="monospace" font-size="4" fill="#ffd700" text-anchor="middle" font-weight="bold">W</text>
              </g>
            </g>

            <!-- Plaintext Alignment Row (Top Guide Wire) -->
            <line x1="8" y1="26" x2="65" y2="26" class="jc-guide-plain" />

            <!-- Ciphertext Result Row (Bottom Guide Wire) -->
            <line x1="8" y1="46" x2="65" y2="46" class="jc-guide-cipher" />
          </svg>
        </div>
        <div class="jc-label">JEFFERSON CYLINDER 1795</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-jefferson-cylinder')) {
  customElements.define('concept-jefferson-cylinder', ConceptJeffersonCylinder);
}
