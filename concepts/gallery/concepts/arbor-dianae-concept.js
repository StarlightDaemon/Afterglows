const arborDianaeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ad-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 70%, #0d1b2a 0%, #030712 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ad-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ad-svg {
    width: 76px;
    height: 72px;
  }

  /* Dendritic tree growth pulse */
  .ad-branches path {
    stroke: #e0f7fa;
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: ad-grow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
  }

  @keyframes ad-grow {
    0% { stroke-dashoffset: 40; opacity: 0.3; }
    100% { stroke-dashoffset: 0; opacity: 1; filter: drop-shadow(0 0 3px #00e5ff); }
  }

  /* Sparkling crystal buds at tips */
  .ad-crystals circle {
    fill: #ffffff;
    animation: ad-sparkle 2s ease-in-out infinite alternate;
  }

  .ad-crystals circle:nth-child(2n) {
    animation-delay: 0.7s;
  }

  .ad-crystals circle:nth-child(3n) {
    animation-delay: 1.3s;
  }

  @keyframes ad-sparkle {
    0% { transform: scale(0.6); opacity: 0.4; fill: #80deea; }
    100% { transform: scale(1.4); opacity: 1; fill: #ffffff; filter: drop-shadow(0 0 4px #00e5ff); }
  }

  /* Mercury amalgam seed pool */
  .ad-seed {
    fill: #b0bec5;
    animation: ad-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes ad-pulse {
    0% { filter: drop-shadow(0 0 2px #90caf9); }
    100% { filter: drop-shadow(0 0 6px #00e5ff); }
  }

  .ad-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptArborDianae extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${arborDianaeStyles}</style>
      <div class="ad-box">
        <div class="ad-stage">
          <svg class="ad-svg" viewBox="0 0 76 72">
            <!-- Glass Flask Contour -->
            <path d="M 33 10 L 43 10 L 43 22 L 58 54 A 10 10 0 0 1 48 64 L 28 64 A 10 10 0 0 1 18 54 L 33 22 Z" 
                  fill="rgba(0, 229, 255, 0.05)" stroke="rgba(0, 229, 255, 0.5)" stroke-width="1.2" />

            <!-- Mercury Amalgam Pool -->
            <ellipse class="ad-seed" cx="38" cy="59" rx="14" ry="4" />

            <!-- Dendritic Silver Tree Branches -->
            <g class="ad-branches" stroke-width="1.4" fill="none" stroke-linecap="round">
              <!-- Trunk -->
              <path d="M 38 58 L 38 42" />
              <!-- Primary Branches -->
              <path d="M 38 45 Q 32 38 27 34" />
              <path d="M 38 43 Q 44 36 49 32" />
              <path d="M 38 36 L 38 24" />
              <!-- Sub-Branches -->
              <path d="M 27 34 Q 24 28 22 25" />
              <path d="M 27 34 Q 30 28 32 24" />
              <path d="M 49 32 Q 53 26 55 22" />
              <path d="M 49 32 Q 46 26 44 23" />
              <path d="M 38 24 Q 35 18 34 14" />
              <path d="M 38 24 Q 41 18 42 14" />
            </g>

            <!-- Silver Crystal Clusters -->
            <g class="ad-crystals">
              <circle cx="22" cy="25" r="1.5" />
              <circle cx="32" cy="24" r="1.5" />
              <circle cx="55" cy="22" r="1.5" />
              <circle cx="44" cy="23" r="1.5" />
              <circle cx="34" cy="14" r="1.5" />
              <circle cx="42" cy="14" r="1.5" />
              <circle cx="27" cy="34" r="1.2" />
              <circle cx="49" cy="32" r="1.2" />
            </g>
          </svg>
        </div>
        <div class="ad-label">ARBOR DIANAE</div>
      </div>
    `;
  }
}

customElements.define('concept-arbor-dianae', ConceptArborDianae);
