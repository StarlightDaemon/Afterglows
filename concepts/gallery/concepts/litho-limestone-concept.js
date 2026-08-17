const lithoLimestoneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ll-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #222018 0%, #080705 100%);
    border: 1.5px solid rgba(255, 238, 88, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 238, 88, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ll-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ll-svg {
    width: 76px;
    height: 72px;
  }

  /* Leather ink roller rolling across stone slab with wide excursion */
  .ll-leather-roller {
    animation: ll-roll-across 2.8s ease-in-out infinite alternate;
  }

  @keyframes ll-roll-across {
    0% { transform: translateX(-22px); }
    100% { transform: translateX(22px); }
  }

  /* Water dampening sponge wiping across the slab */
  .ll-water-sponge {
    animation: ll-sponge-wipe 2.8s ease-in-out infinite alternate;
    animation-delay: -1.4s;
  }

  @keyframes ll-sponge-wipe {
    0% { transform: translateX(-18px); opacity: 0.8; }
    100% { transform: translateX(18px); opacity: 0.8; }
  }

  /* Greasy tusche / lithographic crayon drawing lipophilic attraction */
  .ll-grease-drawing {
    animation: ll-ink-adhere 2.8s ease-in-out infinite alternate;
    transform-origin: 38px 34px;
  }

  @keyframes ll-ink-adhere {
    0% { transform: scale(0.92); fill: #212121; }
    100% { transform: scale(1.08); fill: #000000; filter: drop-shadow(0 0 4px #ffd54f); }
  }

  .ll-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 238, 88, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLithoLimestone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lithoLimestoneStyles}</style>
      <div class="ll-box">
        <div class="ll-stage">
          <svg class="ll-svg" viewBox="0 0 76 72">
            <!-- Solnhofen Bavarian Dense Lithographic Limestone Block Slab -->
            <polygon points="12,18 64,18 68,52 8,52" fill="#fff9c4" stroke="#d7ccc8" stroke-width="1.4" />
            <!-- Stone Slab Thickness Profile -->
            <polygon points="8,52 68,52 68,58 8,58" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="1" />

            <!-- Hydrophilic Water / Gum Arabic Acid Etch Film -->
            <g fill="none" stroke="#4fc3f7" stroke-width="0.8" opacity="0.6">
              <path d="M 14 26 Q 38 22 62 26" />
              <path d="M 12 36 Q 38 32 64 36" />
              <path d="M 10 46 Q 38 42 66 46" />
            </g>

            <!-- Dampening Water Sponge Wiping across slab -->
            <g class="ll-water-sponge">
              <rect x="33" y="14" width="10" height="6" rx="2" fill="#4fc3f7" stroke="#00e5ff" stroke-width="0.8" />
            </g>

            <!-- Lipophilic Greasy Crayon / Tusche Drawn Figure -->
            <g class="ll-grease-drawing">
              <ellipse cx="38" cy="34" rx="9" ry="7" />
              <path d="M 32 38 Q 38 46 44 38" stroke="#ffffff" stroke-width="0.8" fill="none" />
              <circle cx="34" cy="33" r="1.2" fill="#ffffff" />
              <circle cx="42" cy="33" r="1.2" fill="#ffffff" />
            </g>

            <!-- Hand Inking Leather Roller (Walze with Greasy Printing Ink) -->
            <g class="ll-leather-roller">
              <!-- Steel Spindle Axle & Wood Turning Handles -->
              <line x1="24" y1="28" x2="52" y2="28" stroke="#ffd700" stroke-width="1.4" />
              <rect x="20" y="26" width="4" height="4" rx="0.5" fill="#8d6e63" />
              <rect x="52" y="26" width="4" height="4" rx="0.5" fill="#8d6e63" />

              <!-- Heavy Stitched Leather Ink Cylinder -->
              <rect x="24" y="23" width="28" height="10" rx="2" fill="#111111" stroke="#ffeb3b" stroke-width="1" />
              <!-- Wet Ink Glint Line -->
              <line x1="26" y1="25" x2="50" y2="25" stroke="#ffffff" stroke-width="0.8" opacity="0.9" />
            </g>

            <!-- Chemical Principle Readout -->
            <text x="38" y="65" font-family="monospace" font-size="3" fill="#ffee58" text-anchor="middle">SENEFELDER 1796 LITHO</text>
          </svg>
        </div>
        <div class="ll-label">LITHO LIMESTONE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-litho-limestone')) {
  customElements.define('concept-litho-limestone', ConceptLithoLimestone);
}
