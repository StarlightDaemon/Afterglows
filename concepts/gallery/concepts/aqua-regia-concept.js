const aquaRegiaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ar-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 65%, #271d05 0%, #0c0801 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ar-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ar-svg {
    width: 76px;
    height: 72px;
  }

  /* Acid fuming vapor rising from neck */
  .ar-fumes {
    stroke: #ff9100;
    stroke-dasharray: 4 4;
    animation: ar-fume-flow 1.5s linear infinite;
  }

  @keyframes ar-fume-flow {
    to { stroke-dashoffset: -16; }
  }

  /* Gold bar dissolving in acid */
  .ar-gold-bar {
    fill: #ffd700;
    stroke: #fff59d;
    stroke-width: 1;
    animation: ar-dissolve 4s ease-in-out infinite alternate;
  }

  @keyframes ar-dissolve {
    0% { transform: scale(1); filter: drop-shadow(0 0 4px #ffd700); }
    100% { transform: scale(0.7); filter: drop-shadow(0 0 8px #ffab00); }
  }

  /* Effervescent reaction bubbles */
  .ar-bubbles circle {
    fill: #ffff8d;
    animation: ar-bubble-rise 1.8s ease-in infinite;
  }

  .ar-bubbles circle:nth-child(2) { animation-delay: 0.4s; }
  .ar-bubbles circle:nth-child(3) { animation-delay: 0.9s; }
  .ar-bubbles circle:nth-child(4) { animation-delay: 1.3s; }

  @keyframes ar-bubble-rise {
    0% { transform: translateY(0) scale(0.6); opacity: 0.2; }
    50% { opacity: 1; }
    100% { transform: translateY(-24px) scale(1.2); opacity: 0; }
  }

  /* Acid solution glow */
  .ar-acid-glow {
    fill: url(#ar-acid-grad);
    animation: ar-acid-pulse 2.5s ease-in-out infinite alternate;
  }

  @keyframes ar-acid-pulse {
    0% { opacity: 0.6; }
    100% { opacity: 0.95; filter: drop-shadow(0 0 6px #ffb300); }
  }

  .ar-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAquaRegia extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${aquaRegiaStyles}</style>
      <div class="ar-box">
        <div class="ar-stage">
          <svg class="ar-svg" viewBox="0 0 76 72">
            <defs>
              <linearGradient id="ar-acid-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ffb300" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#ff6f00" stop-opacity="0.9" />
              </linearGradient>
            </defs>

            <!-- Glass Retort Body -->
            <path d="M 32 10 L 44 10 L 44 26 C 54 30, 60 42, 56 56 C 52 64, 24 64, 20 56 C 16 42, 22 30, 32 26 Z" 
                  fill="rgba(255, 215, 0, 0.05)" stroke="rgba(255, 215, 0, 0.4)" stroke-width="1.2" />

            <!-- Fuming Retort Neck Spout -->
            <path d="M 44 20 Q 64 22 68 36" fill="none" stroke="rgba(255, 215, 0, 0.4)" stroke-width="1.2" />
            <path d="M 44 20 Q 64 22 68 36" fill="none" stroke-width="1" class="ar-fumes" />

            <!-- Boiling Royal Acid Meniscus -->
            <path class="ar-acid-glow" d="M 21 52 C 23 40, 53 40, 55 52 C 52 63, 24 63, 21 52 Z" />

            <!-- Dissolving Gold Ingot (transform centered) -->
            <g transform="translate(38, 52)">
              <rect class="ar-gold-bar" x="-7" y="-4" width="14" height="8" rx="1.5" />
            </g>

            <!-- Reaction Bubbles (Effervescence) -->
            <g class="ar-bubbles">
              <circle cx="34" cy="50" r="1.5" />
              <circle cx="42" cy="49" r="1.8" />
              <circle cx="38" cy="46" r="1.3" />
              <circle cx="45" cy="52" r="1.6" />
            </g>
          </svg>
        </div>
        <div class="ar-label">AQUA REGIA</div>
      </div>
    `;
  }
}

customElements.define('concept-aqua-regia', ConceptAquaRegia);
