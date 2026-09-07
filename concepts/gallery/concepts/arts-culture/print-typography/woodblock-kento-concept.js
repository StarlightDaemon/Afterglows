const woodblockKentoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wk-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #241a18 0%, #080504 100%);
    border: 1.5px solid rgba(255, 138, 101, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 138, 101, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wk-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wk-svg {
    width: 76px;
    height: 72px;
  }

  /* Traditional bamboo baren rubbing disc circular spiral burnishing */
  .wk-baren-rub {
    animation: wk-baren-spiral 3s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes wk-baren-spiral {
    0% { transform: translate(-6px, -4px) rotate(0deg); }
    50% { transform: translate(4px, 6px) rotate(180deg); }
    100% { transform: translate(-2px, -3px) rotate(360deg); }
  }

  /* Kento registration guide notches (Right-angle corner + straight lateral guide) */
  .wk-kento-mark {
    animation: wk-kento-glow 1.6s ease-in-out infinite alternate;
  }

  @keyframes wk-kento-glow {
    0% { stroke: #ff7043; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #ff7043); }
  }

  /* Washi paper sheet multi-color ink layer saturation */
  .wk-washi-sheet {
    animation: wk-paper-press 2.4s ease-in-out infinite alternate;
  }

  @keyframes wk-paper-press {
    0% { opacity: 0.7; fill: #fffde7; }
    100% { opacity: 0.95; fill: #ffe0b2; filter: drop-shadow(0 0 2px #ffab91); }
  }

  .wk-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 138, 101, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptWoodblockKento extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${woodblockKentoStyles}</style>
      <div class="wk-box">
        <div class="wk-stage">
          <svg class="wk-svg" viewBox="0 0 76 72">
            <!-- Mountain Cherry Wood Plank (Yamazakura Carved Printing Keyblock) -->
            <rect x="8" y="10" width="60" height="52" rx="2" fill="#3e2723" stroke="#6d4c41" stroke-width="1.2" />
            <!-- Woodgrain Lines -->
            <path d="M 12 16 Q 38 14 64 16" fill="none" stroke="#2d1d18" stroke-width="0.6" />
            <path d="M 12 28 Q 38 26 64 28" fill="none" stroke="#2d1d18" stroke-width="0.6" />
            <path d="M 12 42 Q 38 40 64 42" fill="none" stroke="#2d1d18" stroke-width="0.6" />

            <!-- Carved Relief Ukiyo-e Wave / Mount Fuji Contours (Relief Chiseled Lines) -->
            <path d="M 16 46 Q 26 34 38 42 Q 50 30 60 46" fill="none" stroke="#0288d1" stroke-width="1.4" />
            <polygon points="32,32 38,24 44,32" fill="#ffffff" stroke="#00e5ff" stroke-width="0.6" />

            <!-- Carved Kento Registration Marks (Guides for flawless multi-color registration) -->
            <!-- 1. Kagi-Kento (L-shaped right-angle corner guide at bottom right) -->
            <path class="wk-kento-mark" d="M 58 56 L 64 56 L 64 50" fill="none" stroke-width="1.6" stroke-linecap="square" />
            <!-- 2. Hikitome-Kento (Straight lateral line guide at bottom left) -->
            <line class="wk-kento-mark" x1="18" y1="56" x2="30" y2="56" stroke-width="1.6" stroke-linecap="square" />

            <!-- Mulberry Washi Paper Sheet Fitted Exactly Against Kento Notches -->
            <polygon class="wk-washi-sheet" points="16,14 62,14 62,54 16,54" stroke="#d7ccc8" stroke-width="0.5" />

            <!-- Circular Bamboo-Leaf Baren Rubbing Tool (Hand Burnisher) -->
            <g class="wk-baren-rub">
              <!-- Braided Bamboo Leaf Cord Outer Disc -->
              <circle cx="38" cy="36" r="10" fill="#8d6e63" stroke="#ffd700" stroke-width="1" />
              <!-- Internal Woven Twisted Cord Coil (Ategawa) -->
              <circle cx="38" cy="36" r="6" fill="none" stroke="#d7ccc8" stroke-width="0.8" stroke-dasharray="1.5 1.5" />
              <!-- Wooden Bamboo Handle Strap -->
              <rect x="34" y="30" width="8" height="12" rx="1" fill="#4e342e" stroke="#ffb300" stroke-width="0.6" />
            </g>
          </svg>
        </div>
        <div class="wk-label">WOODBLOCK KENTO</div>
      </div>
    `;
  }
}

customElements.define('concept-woodblock-kento', ConceptWoodblockKento);
