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

  /* Conchoidal Hertzian Cone Fracture Ripple Waves expanding outward */
  .of-ripples {
    transform-origin: 30px 18px;
    animation: of-conchoidal-expand 2.2s cubic-bezier(0.1, 0.7, 0.3, 1) infinite;
  }

  @keyframes of-conchoidal-expand {
    0% { transform: scale(0.3); opacity: 1; }
    80% { opacity: 1; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  /* Detached knapped prismatic obsidian razor blade shearing away */
  .of-knapped-flake {
    animation: of-blade-detach 2.2s ease-out infinite;
    transform-origin: 30px 18px;
  }

  @keyframes of-blade-detach {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    15% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(8px, 14px) rotate(8deg); opacity: 0; }
  }

  /* Impact initiation point (Bulb of Percussion strike spark) */
  .of-impact-spark {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #90caf9;
    z-index: 6;
    animation: of-strike-flash 2.2s ease-in-out infinite;
  }

  @keyframes of-strike-flash {
    0% { transform: scale(0.4); opacity: 0; }
    10% { transform: scale(1.6); opacity: 1; }
    30% { transform: scale(0.8); opacity: 0.8; }
    100% { transform: scale(0.4); opacity: 0; }
  }

  /* Glassy Obsidian Core */
  .of-glass-body {
    fill: #1a1e24;
    stroke: #455a64;
    stroke-width: 1.4;
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
          <div class="of-impact-spark" style="top: 24px; left: 34px;"></div>

          <svg class="of-svg" viewBox="0 0 76 72">
            <!-- Volcanic Glass Obsidian Block Contour -->
            <polygon class="of-glass-body" points="14,14 62,10 66,58 48,64 12,56" />

            <!-- Conchoidal Fracture Ripples (Expanding concentric curved arcs) -->
            <g class="of-ripples" fill="none" stroke="#eceff1" stroke-width="1.4">
              <!-- Ripple Arc 1 -->
              <path d="M 22 26 C 26 22, 34 22, 38 26" />
              <!-- Ripple Arc 2 -->
              <path d="M 18 34 C 26 26, 42 26, 48 34" stroke-width="1.6" />
              <!-- Ripple Arc 3 -->
              <path d="M 16 44 C 28 32, 50 32, 58 44" stroke-width="1.8" />
              <!-- Ripple Arc 4 -->
              <path d="M 14 54 C 30 38, 56 38, 64 54" stroke-width="2" />
            </g>

            <!-- Knapped Prismatic Blade Flake Detachment -->
            <g class="of-knapped-flake">
              <polygon points="30,18 42,32 36,48 26,38" fill="#37474f" stroke="#ffffff" stroke-width="1.2" />
            </g>

            <!-- Radial Hackle / Fissure Cleavage Lines radiating from point -->
            <g stroke="#78909c" stroke-width="1" stroke-dasharray="2 2">
              <line x1="28" y1="18" x2="16" y2="44" />
              <line x1="30" y1="18" x2="38" y2="58" />
              <line x1="32" y1="18" x2="60" y2="48" />
            </g>

            <!-- Vitreous Gloss Highlight Glint -->
            <path d="M 52 14 L 60 12 L 62 24" fill="none" stroke="#eceff1" stroke-width="1.4" opacity="0.9" />
          </svg>
        </div>
        <div class="of-label">CONCHOIDAL FRACTURE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-obsidian-fracture')) {
  customElements.define('concept-obsidian-fracture', ConceptObsidianFracture);
}
