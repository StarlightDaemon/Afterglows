const heliographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 40% 30%, #201a0d 0%, #060502 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hg-svg {
    width: 76px;
    height: 72px;
  }

  /* Morse Code Keyed Sunlight Flash Beam */
  .hg-flash-beam {
    fill: url(#hg-beam-grad);
    animation: hg-morse-flash 1.6s steps(1, end) infinite;
  }

  @keyframes hg-morse-flash {
    0% { opacity: 0; }
    20% { opacity: 1; }   /* Dot */
    30% { opacity: 0; }
    50% { opacity: 1; }   /* Dash */
    80% { opacity: 1; }
    90% { opacity: 0; }
  }

  /* Specular Mirror Glint */
  .hg-mirror-glint {
    fill: #ffffff;
    animation: hg-specular 1.6s ease-in-out infinite alternate;
  }

  @keyframes hg-specular {
    0% { filter: drop-shadow(0 0 2px #ffd700); }
    100% { filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 14px #ffab00); }
  }

  /* Mechanical Shutter Blinder Vane oscillation */
  .hg-shutter-vane {
    animation: hg-shutter-toggle 1.6s steps(1, end) infinite;
    transform-origin: 34px 24px;
  }

  @keyframes hg-shutter-toggle {
    0% { transform: scaleY(1); }
    20% { transform: scaleY(0.2); }
    30% { transform: scaleY(1); }
    50% { transform: scaleY(0.2); }
    80% { transform: scaleY(0.2); }
    90% { transform: scaleY(1); }
  }

  .hg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHeliographFlash extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${heliographStyles}</style>
      <div class="hg-box">
        <div class="hg-stage">
          <svg class="hg-svg" viewBox="0 0 76 72">
            <defs>
              <linearGradient id="hg-beam-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
                <stop offset="30%" stop-color="#ffd700" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#ff9100" stop-opacity="0.1" />
              </linearGradient>
            </defs>

            <!-- Surveyor Brass Tripod Stand -->
            <path d="M 22 34 L 10 64 M 22 34 L 22 64 M 22 34 L 34 64" stroke="#8d6e63" stroke-width="1.4" stroke-linecap="round" />
            <circle cx="22" cy="34" r="3" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />

            <!-- Circular Signaling Mirror (Left) -->
            <circle cx="22" cy="24" r="10" fill="#cfd8dc" stroke="#ffd700" stroke-width="1.2" />
            <circle class="hg-mirror-glint" cx="22" cy="24" r="7" />

            <!-- Morse Signaling Key & Screen Shutter Box (Right of mirror) -->
            <rect x="32" y="16" width="6" height="16" fill="#3e2723" stroke="#ffb74d" stroke-width="0.8" />
            <!-- Shutter Blinder Louver Slats -->
            <g class="hg-shutter-vane">
              <line x1="33" y1="19" x2="37" y2="19" stroke="#ffd700" stroke-width="1.5" />
              <line x1="33" y1="24" x2="37" y2="24" stroke="#ffd700" stroke-width="1.5" />
              <line x1="33" y1="29" x2="37" y2="29" stroke="#ffd700" stroke-width="1.5" />
            </g>

            <!-- Morse Telegraph Sending Key Lever -->
            <line x1="32" y1="36" x2="42" y2="36" stroke="#cfd8dc" stroke-width="1.2" />
            <circle cx="42" cy="36" r="1.5" fill="#212121" />

            <!-- Expanding Solar Morse Flash Beam Cone (Shooting right across the miles) -->
            <polygon class="hg-flash-beam" points="38,24 72,8 72,40" />

            <!-- Distant Mountain Station Silhouette in Background -->
            <path d="M 48 54 L 58 42 L 72 56 Z" fill="#1b1208" stroke="#3e2723" stroke-width="0.6" />
          </svg>
        </div>
        <div class="hg-label">SOLAR HELIOGRAPH</div>
      </div>
    `;
  }
}

customElements.define('concept-heliograph-flash', ConceptHeliographFlash);
