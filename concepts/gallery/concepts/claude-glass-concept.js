const claudeGlassStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #20170a 0%, #080502 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: cg-mirror-tilt 3.6s ease-in-out infinite alternate;
  }

  @keyframes cg-mirror-tilt {
    0% { transform: rotate(-8deg) translateY(-2px); }
    100% { transform: rotate(8deg) translateY(2px); }
  }

  .cg-svg {
    width: 76px;
    height: 72px;
  }

  /* Reflected Claude Glass Romantic Landscape Parallax Panning */
  .cg-landscape {
    animation: cg-parallax-pan 3.6s ease-in-out infinite alternate;
  }

  @keyframes cg-parallax-pan {
    0% { transform: translateX(-6px); }
    100% { transform: translateX(6px); }
  }

  /* Curved Obsidian Convex Glass Specular Highlight Sweeping Arc */
  .cg-specular-arc {
    stroke: #ffffff;
    stroke-width: 1.4;
    animation: cg-specular-sweep 3.6s ease-in-out infinite alternate;
  }

  @keyframes cg-specular-sweep {
    0% { transform: translateY(-3px) scaleX(0.9); opacity: 0.5; }
    100% { transform: translateY(3px) scaleX(1.1); opacity: 0.95; filter: drop-shadow(0 0 4px #ffd700); }
  }

  .cg-frame {
    fill: #3e2723;
    stroke: #ffb300;
    stroke-width: 1.2;
  }

  .cg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptClaudeGlass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${claudeGlassStyles}</style>
      <div class="cg-box">
        <div class="cg-stage">
          <svg class="cg-svg" viewBox="0 0 76 72">
            <!-- Folding Pocket Shagreen / Leather Case Cover (Hinged at bottom) -->
            <path d="M 18 56 L 38 68 L 58 56 L 50 48 L 26 48 Z" fill="#2d1b14" stroke="#8d6e63" stroke-width="1" />

            <!-- Oval Sharkskin / Brass Mirror Bezel Frame -->
            <ellipse class="cg-frame" cx="38" cy="32" rx="26" ry="24" />
            <ellipse cx="38" cy="32" rx="23" ry="21" fill="#1b120c" stroke="#ffb300" stroke-width="0.8" />

            <!-- Reflected Landscape in Convex Black Mirror (Curved horizon, sunset mountains, glowing sun) -->
            <g class="cg-landscape" clip-path="url(#cg-mirror-clip)">
              <!-- Sepia / Amber Tonal Sky -->
              <ellipse cx="38" cy="32" rx="28" ry="24" fill="#3e2723" />
              <circle cx="38" cy="24" r="5.5" fill="#ffd54f" opacity="0.9" filter="drop-shadow(0 0 6px #ffb300)" />

              <!-- Distant Mountain Ranges (Compressed picturesque silhouette) -->
              <path d="M 10 38 Q 28 24 38 34 Q 48 22 66 38 L 66 54 L 10 54 Z" fill="#2e1c11" />
              <!-- Foreground Romantic Oak Tree Silhouette on Left -->
              <path d="M 22 46 Q 18 34 26 28 Q 30 36 28 46" fill="#1b0f08" stroke="#ffb300" stroke-width="0.8" />
            </g>

            <!-- Clip Path for Oval Glass Face -->
            <defs>
              <clipPath id="cg-mirror-clip">
                <ellipse cx="38" cy="32" rx="22" ry="20" />
              </clipPath>
            </defs>

            <!-- Convex Glass Surface Specular Reflection Arc -->
            <path class="cg-specular-arc" d="M 22 18 C 28 14, 48 14, 54 18" fill="none" stroke-linecap="round" />
            <path d="M 24 21 C 30 18, 46 18, 52 21" fill="none" stroke="#ffe082" stroke-width="0.6" opacity="0.6" />

            <!-- Velvet Pocket Handle Loop at Bottom -->
            <circle cx="38" cy="62" r="3" fill="none" stroke="#ffb300" stroke-width="1" />
          </svg>
        </div>
        <div class="cg-label">CLAUDE GLASS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-claude-glass')) {
  customElements.define('concept-claude-glass', ConceptClaudeGlass);
}
