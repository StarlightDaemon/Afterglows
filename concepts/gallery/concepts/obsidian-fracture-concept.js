const obsidianFractureStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .of-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 35% 30%, #15181c 0%, #050608 100%);
    border: 1.5px solid rgba(144, 164, 174, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(144, 164, 174, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .of-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .of-svg {
    width: 76px;
    height: 72px;
  }

  /* Conchoidal Hertzian Cone Fracture Ripple Waves */
  .of-ripples path {
    fill: none;
    stroke: #b0bec5;
    stroke-width: 1;
    animation: of-shockwave 2.5s ease-out infinite;
  }

  .of-ripples path:nth-child(2) { animation-delay: 0.5s; }
  .of-ripples path:nth-child(3) { animation-delay: 1.0s; }
  .of-ripples path:nth-child(4) { animation-delay: 1.5s; }

  @keyframes of-shockwave {
    0% { opacity: 0.2; stroke: #546e7a; }
    50% { opacity: 1; stroke: #eceff1; filter: drop-shadow(0 0 2px #cfd8dc); }
    100% { opacity: 0.4; stroke: #78909c; }
  }

  /* Impact initiation point (Bulb of Percussion) */
  .of-impact-point {
    fill: #ffffff;
    animation: of-strike 2.5s ease-in-out infinite alternate;
  }

  @keyframes of-strike {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 4px #ffffff); }
  }

  /* Glassy Obsidian Core */
  .of-glass-body {
    fill: #1a1e24;
    stroke: #455a64;
    stroke-width: 1.2;
  }

  .of-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(176, 190, 197, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptObsidianFracture extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${obsidianFractureStyles}</style>
      <div class="of-box">
        <div class="of-stage">
          <svg class="of-svg" viewBox="0 0 76 72">
            <!-- Volcanic Glass Obsidian Block Contour -->
            <polygon class="of-glass-body" points="14,14 62,10 66,58 48,64 12,56" />

            <!-- Conchoidal Fracture Ripples (Expanding concentric curved arcs) -->
            <g class="of-ripples">
              <!-- Ripple Arc 1 (Near percussion point) -->
              <path d="M 22 26 C 26 22, 34 22, 38 26" />
              <!-- Ripple Arc 2 -->
              <path d="M 18 34 C 26 26, 42 26, 48 34" />
              <!-- Ripple Arc 3 -->
              <path d="M 16 44 C 28 32, 50 32, 58 44" />
              <!-- Ripple Arc 4 -->
              <path d="M 14 54 C 30 38, 56 38, 64 54" />
            </g>

            <!-- Radial Hackle / Fissure Cleavage Lines radiating from point -->
            <g stroke="#78909c" stroke-width="0.7" stroke-dasharray="2 2">
              <line x1="28" y1="18" x2="16" y2="44" />
              <line x1="30" y1="18" x2="38" y2="58" />
              <line x1="32" y1="18" x2="60" y2="48" />
            </g>

            <!-- Percussion Strike Point (Bulb of Percussion origin) -->
            <g transform="translate(30, 18)">
              <circle class="of-impact-point" cx="0" cy="0" r="2" />
            </g>

            <!-- Vitreous Gloss Highlight Glint -->
            <path d="M 52 14 L 60 12 L 62 24" fill="none" stroke="#eceff1" stroke-width="1.2" opacity="0.8" />
          </svg>
        </div>
        <div class="of-label">CONCHOIDAL FRACTURE</div>
      </div>
    `;
  }
}

customElements.define('concept-obsidian-fracture', ConceptObsidianFracture);
