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
    stroke-width: 0.8;
  }

  /* Independent wheel rotation shimmer */
  .jc-wheels rect {
    animation: jc-spin-strip 4s steps(6, end) infinite;
  }

  .jc-wheels rect:nth-child(2) { animation-delay: 0.7s; }
  .jc-wheels rect:nth-child(3) { animation-delay: 1.4s; }
  .jc-wheels rect:nth-child(4) { animation-delay: 2.1s; }
  .jc-wheels rect:nth-child(5) { animation-delay: 2.8s; }

  @keyframes jc-spin-strip {
    0% { fill: #2d1838; }
    50% { fill: #4a148c; }
    100% { fill: #2d1838; }
  }

  /* Plaintext guide rule alignment bar */
  .jc-guide-plain {
    stroke: #00e5ff;
    stroke-width: 1;
    animation: jc-plain-glow 2s ease-in-out infinite alternate;
  }

  @keyframes jc-plain-glow {
    0% { filter: drop-shadow(0 0 1px #00e5ff); }
    100% { filter: drop-shadow(0 0 4px #00e5ff); }
  }

  /* Ciphertext guide rule alignment bar */
  .jc-guide-cipher {
    stroke: #ffd700;
    stroke-width: 1;
    animation: jc-cipher-glow 2s ease-in-out infinite alternate;
  }

  @keyframes jc-cipher-glow {
    0% { filter: drop-shadow(0 0 1px #ffd700); }
    100% { filter: drop-shadow(0 0 4px #ffd700); }
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
          <svg class="jc-svg" viewBox="0 0 76 72">
            <!-- Center Spindle Steel Axle & Thumbscrew Clamps -->
            <rect x="6" y="34" width="64" height="4" fill="#9e9e9e" stroke="#cfd8dc" stroke-width="0.8" />
            <rect x="4" y="28" width="4" height="16" rx="1" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />
            <rect x="68" y="28" width="4" height="16" rx="1" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />

            <!-- Stack of Rotating Cipher Discs (Wheel segments) -->
            <g class="jc-wheels">
              <!-- Disc 1 -->
              <rect class="jc-wheel-rim" x="10" y="18" width="8" height="36" rx="1" />
              <!-- Disc 2 -->
              <rect class="jc-wheel-rim" x="19" y="18" width="8" height="36" rx="1" />
              <!-- Disc 3 -->
              <rect class="jc-wheel-rim" x="28" y="18" width="8" height="36" rx="1" />
              <!-- Disc 4 -->
              <rect class="jc-wheel-rim" x="37" y="18" width="8" height="36" rx="1" />
              <!-- Disc 5 -->
              <rect class="jc-wheel-rim" x="46" y="18" width="8" height="36" rx="1" />
              <!-- Disc 6 -->
              <rect class="jc-wheel-rim" x="55" y="18" width="8" height="36" rx="1" />
            </g>

            <!-- Plaintext Alignment Row (Top Guide Wire) -->
            <line x1="8" y1="26" x2="65" y2="26" class="jc-guide-plain" />
            <g font-family="monospace" font-size="4" fill="#00e5ff" text-anchor="middle" font-weight="bold">
              <text x="14" y="25">A</text>
              <text x="23" y="25">T</text>
              <text x="32" y="25">T</text>
              <text x="41" y="25">A</text>
              <text x="50" y="25">C</text>
              <text x="59" y="25">K</text>
            </g>

            <!-- Ciphertext Result Row (Bottom Guide Wire) -->
            <line x1="8" y1="46" x2="65" y2="46" class="jc-guide-cipher" />
            <g font-family="monospace" font-size="4" fill="#ffd700" text-anchor="middle" font-weight="bold">
              <text x="14" y="49">X</text>
              <text x="23" y="49">M</text>
              <text x="32" y="49">Q</text>
              <text x="41" y="49">Z</text>
              <text x="50" y="49">P</text>
              <text x="59" y="49">W</text>
            </g>

            <!-- Disc Boundary Ribs -->
            <g stroke="#ba68c8" stroke-width="0.5">
              <line x1="10" y1="36" x2="18" y2="36" />
              <line x1="19" y1="36" x2="27" y2="36" />
              <line x1="28" y1="36" x2="36" y2="36" />
              <line x1="37" y1="36" x2="45" y2="36" />
              <line x1="46" y1="36" x2="54" y2="36" />
              <line x1="55" y1="36" x2="63" y2="36" />
            </g>
          </svg>
        </div>
        <div class="jc-label">JEFFERSON CYLINDER</div>
      </div>
    `;
  }
}

customElements.define('concept-jefferson-cylinder', ConceptJeffersonCylinder);
