const scytaleStyles = `
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
    background: radial-gradient(circle at 50% 50%, #201912 0%, #0a0704 100%);
    border: 1.5px solid rgba(212, 163, 89, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(212, 163, 89, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sc-svg {
    width: 76px;
    height: 72px;
  }

  /* Ribbon winding / unwinding translation */
  .sc-ribbon-bands polygon {
    fill: #d4a359;
    stroke: #faedcd;
    stroke-width: 0.8;
    animation: sc-band-shimmer 3s ease-in-out infinite alternate;
  }

  .sc-ribbon-bands polygon:nth-child(even) {
    fill: #bc8a3e;
    animation-delay: 0.7s;
  }

  @keyframes sc-band-shimmer {
    0% { filter: brightness(0.9); }
    100% { filter: brightness(1.2) drop-shadow(0 0 3px rgba(212, 163, 89, 0.4)); }
  }

  /* Aligned secret message letters flashing along horizontal line */
  .sc-message text {
    font-family: monospace;
    font-size: 5px;
    font-weight: bold;
    fill: #ffffff;
    animation: sc-text-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes sc-text-pulse {
    0% { fill: #fefae0; filter: drop-shadow(0 0 1px #d4a359); }
    100% { fill: #ffffff; filter: drop-shadow(0 0 4px #ffd166); }
  }

  /* Wooden baton rod */
  .sc-baton {
    fill: #583110;
    stroke: #804e1e;
    stroke-width: 1.2;
  }

  .sc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(212, 163, 89, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptScytaleRod extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${scytaleStyles}</style>
      <div class="sc-box">
        <div class="sc-stage">
          <svg class="sc-svg" viewBox="0 0 76 72">
            <!-- Wooden Cylinder Baton Shaft -->
            <rect class="sc-baton" x="8" y="24" width="60" height="24" rx="3" />

            <!-- End Caps / Lathe turned finials -->
            <ellipse cx="8" cy="36" rx="3" ry="12" fill="#381e09" stroke="#804e1e" stroke-width="1" />
            <ellipse cx="68" cy="36" rx="3" ry="12" fill="#583110" stroke="#804e1e" stroke-width="1" />

            <!-- Helically Wound Leather Parchment Strip Bands -->
            <g class="sc-ribbon-bands">
              <polygon points="12,24 20,24 14,48 6,48" />
              <polygon points="20,24 28,24 22,48 14,48" />
              <polygon points="28,24 36,24 30,48 22,48" />
              <polygon points="36,24 44,24 38,48 30,48" />
              <polygon points="44,24 52,24 46,48 38,48" />
              <polygon points="52,24 60,24 54,48 46,48" />
              <polygon points="60,24 68,24 62,48 54,48" />
            </g>

            <!-- Deciphered Horizontal Plaintext Alignment Line -->
            <line x1="10" y1="36" x2="66" y2="36" stroke="rgba(255, 255, 255, 0.4)" stroke-width="0.6" stroke-dasharray="2 1" />

            <!-- Greek / Latin Cipher Text Characters aligned across strips -->
            <g class="sc-message" text-anchor="middle">
              <text x="14" y="38">S</text>
              <text x="22" y="38">E</text>
              <text x="30" y="38">C</text>
              <text x="38" y="38">R</text>
              <text x="46" y="38">E</text>
              <text x="54" y="38">T</text>
              <text x="62" y="38">A</text>
            </g>

            <!-- Trailing Unwound Ribbon Tails -->
            <path d="M 66 46 Q 72 56 68 64" fill="none" stroke="#d4a359" stroke-width="2" />
            <path d="M 10 26 Q 4 16 8 8" fill="none" stroke="#d4a359" stroke-width="2" />
          </svg>
        </div>
        <div class="sc-label">SPARTAN SCYTALE</div>
      </div>
    `;
  }
}

customElements.define('concept-scytale-rod', ConceptScytaleRod);
