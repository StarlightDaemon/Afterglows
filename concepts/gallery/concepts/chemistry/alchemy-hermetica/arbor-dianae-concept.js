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

  /* Descending silver nitrate reactant ion droplets */
  .ad-ion-drop {
    fill: #00e5ff;
    filter: drop-shadow(0 0 4px #00e5ff);
  }

  .ad-id1 { animation: ad-drop-fall 2.4s ease-in infinite; }
  .ad-id2 { animation: ad-drop-fall 2.4s ease-in infinite; animation-delay: 1.2s; }

  @keyframes ad-drop-fall {
    0% { transform: translateY(0); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(42px); opacity: 0; }
  }

  /* Dendritic tree growth pulse */
  .ad-branches path {
    stroke: #e0f7fa;
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: ad-grow 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
  }

  @keyframes ad-grow {
    0% { stroke-dashoffset: 40; opacity: 0.4; }
    100% { stroke-dashoffset: 0; opacity: 1; filter: drop-shadow(0 0 3px #00e5ff); }
  }

  /* Sprouting crystal shoots extending outward */
  .ad-shoot-l {
    transform-origin: 27px 34px;
    animation: ad-shoot-grow 3.2s ease-in-out infinite alternate;
  }

  .ad-shoot-r {
    transform-origin: 49px 32px;
    animation: ad-shoot-grow 3.2s ease-in-out infinite alternate;
  }

  .ad-shoot-top {
    transform-origin: 38px 24px;
    animation: ad-shoot-grow 3.2s ease-in-out infinite alternate;
  }

  @keyframes ad-shoot-grow {
    0% { transform: scale(0.3) translateY(4px); opacity: 0.3; }
    100% { transform: scale(1.2) translateY(0); opacity: 1; filter: drop-shadow(0 0 4px #00e5ff); }
  }

  /* Mercury amalgam seed pool */
  .ad-seed {
    fill: #b0bec5;
    animation: ad-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes ad-pulse {
    0% { filter: drop-shadow(0 0 2px #90caf9); transform: scale(0.95); }
    100% { filter: drop-shadow(0 0 6px #00e5ff); transform: scale(1.05); }
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

            <!-- Descending Silver Nitrate Reactant Droplets -->
            <circle class="ad-ion-drop ad-id1" cx="38" cy="14" r="2" />
            <circle class="ad-ion-drop ad-id2" cx="38" cy="14" r="1.8" />

            <!-- Mercury Amalgam Pool -->
            <ellipse class="ad-seed" cx="38" cy="59" rx="14" ry="4" />

            <!-- Dendritic Silver Tree Branches -->
            <g class="ad-branches" stroke-width="1.5" fill="none" stroke-linecap="round">
              <!-- Trunk -->
              <path d="M 38 58 L 38 42" />
              <!-- Primary Branches -->
              <path d="M 38 45 Q 32 38 27 34" />
              <path d="M 38 43 Q 44 36 49 32" />
              <path d="M 38 36 L 38 24" />
            </g>

            <!-- Sprouting Silver Crystal Shoots & Needles -->
            <g class="ad-shoot-l" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round">
              <path d="M 27 34 Q 24 28 20 23" />
              <path d="M 27 34 Q 30 28 33 22" />
              <polygon points="20,23 18,20 23,21" fill="#ffffff" />
              <polygon points="33,22 36,19 35,24" fill="#ffffff" />
            </g>

            <g class="ad-shoot-r" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round">
              <path d="M 49 32 Q 54 25 57 19" />
              <path d="M 49 32 Q 45 25 43 21" />
              <polygon points="57,19 60,16 58,22" fill="#ffffff" />
              <polygon points="43,21 41,18 45,19" fill="#ffffff" />
            </g>

            <g class="ad-shoot-top" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round">
              <path d="M 38 24 Q 34 17 33 12" />
              <path d="M 38 24 Q 42 17 43 12" />
              <polygon points="33,12 31,8 36,10" fill="#ffffff" />
              <polygon points="43,12 45,8 40,10" fill="#ffffff" />
            </g>
          </svg>
        </div>
        <div class="ad-label">ARBOR DIANAE</div>
      </div>
    `;
  }
}

customElements.define('concept-arbor-dianae', ConceptArborDianae);
