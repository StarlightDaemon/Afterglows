const guntersChainStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221d14 0%, #080603 100%);
    border: 1.5px solid rgba(255, 193, 7, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gc-svg {
    width: 76px;
    height: 72px;
  }

  /* Surveyor Chain Link Flex & Stretching Flow */
  .gc-chain-links path {
    animation: gc-link-flow 2.4s linear infinite;
    stroke: #ffca28;
    stroke-width: 2.2;
    /* Real dash gaps: the previous "24 0" solid pattern made the
       dashoffset animation a rendered no-op */
    stroke-dasharray: 10 6;
  }

  @keyframes gc-link-flow {
    to { stroke-dashoffset: -32; }
  }

  /* Brass tally tags swinging at 10-link intervals */
  .gc-tally-tag {
    transform-origin: 38px 36px;
    animation: gc-tag-swing 1.6s ease-in-out infinite alternate;
  }

  @keyframes gc-tag-swing {
    0% { transform: rotate(-24deg); }
    100% { transform: rotate(24deg); }
  }

  /* Chaining pin pulled, carried a chain-length forward, and re-planted */
  .gc-pin-runner {
    filter: drop-shadow(0 0 3px #ef5350);
    animation: gc-pin-carry 4s ease-in-out infinite;
  }

  @keyframes gc-pin-carry {
    0%, 10% { transform: translate(0, 0); opacity: 1; }
    35% { transform: translate(22px, -12px); opacity: 1; }
    60%, 78% { transform: translate(44px, 0); opacity: 1; }
    88% { transform: translate(44px, 0); opacity: 0; }
    92% { transform: translate(0, 0); opacity: 0; }
    100% { transform: translate(0, 0); opacity: 1; }
  }

  /* Heavy swivel brass pull handles */
  .gc-handle-pull {
    animation: gc-pull-tension 1.2s ease-in-out infinite alternate;
  }

  @keyframes gc-pull-tension {
    0% { transform: translateX(-3px); }
    100% { transform: translateX(3px); }
  }

  .gc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 193, 7, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGuntersChain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${guntersChainStyles}</style>
      <div class="gc-box">
        <div class="gc-stage">
          <svg class="gc-svg" viewBox="0 0 76 72">
            <!-- Soil / Ground Baseline Contour (Grass & Land Survey Plane) -->
            <path d="M 4 56 Q 20 54 38 56 T 72 54" fill="none" stroke="#5d4037" stroke-width="1" />
            <polygon points="4,56 72,54 72,68 4,68" fill="#1b150e" />

            <!-- Steel Surveying Arrow / Chaining Pin in Ground -->
            <line x1="16" y1="46" x2="16" y2="58" stroke="#cfd8dc" stroke-width="1.2" />
            <circle cx="16" cy="46" r="2.2" fill="none" stroke="#e53935" stroke-width="1" />

            <line x1="60" y1="46" x2="60" y2="58" stroke="#cfd8dc" stroke-width="1.2" />
            <circle cx="60" cy="46" r="2.2" fill="none" stroke="#e53935" stroke-width="1" />

            <!-- Chaining pin being carried forward one chain-length -->
            <g class="gc-pin-runner">
              <line x1="16" y1="46" x2="16" y2="58" stroke="#ffffff" stroke-width="1.4" />
              <circle cx="16" cy="46" r="2.6" fill="none" stroke="#ff5252" stroke-width="1.3" />
            </g>

            <!-- Gunter's 66-Foot 100-Link Wrought Iron Chain Span -->
            <g class="gc-chain-links">
              <!-- Linked Rods & Connecting Oval Rings -->
              <path d="M 12 36 L 24 36 L 26 38 L 28 34 L 30 36 L 42 36 L 44 38 L 46 34 L 48 36 L 60 36 L 64 36" />
            </g>

            <!-- Heavy Brass Cast Swivel Pull Handles at Terminals -->
            <g class="gc-handle-pull">
              <!-- Left Swivel Handle -->
              <path d="M 12 33 L 6 33 Q 4 36 6 39 L 12 39" fill="none" stroke="#ffd700" stroke-width="1.5" />
              <circle cx="12" cy="36" r="1.5" fill="#ffb300" />

              <!-- Right Swivel Handle -->
              <path d="M 64 33 L 70 33 Q 72 36 70 39 L 64 39" fill="none" stroke="#ffd700" stroke-width="1.5" />
              <circle cx="64" cy="36" r="1.5" fill="#ffb300" />
            </g>

            <!-- Brass Notched Tally Tags (Marking 10, 20, 30, 40, 50 Links) -->
            <!-- Center 50-Link Round Tally Disc -->
            <g class="gc-tally-tag">
              <line x1="38" y1="36" x2="38" y2="44" stroke="#ffd700" stroke-width="0.8" />
              <circle cx="38" cy="46" r="3.2" fill="#ffb300" stroke="#ffd700" stroke-width="0.6" />
              <circle cx="38" cy="46" r="1" fill="#1b150e" />
            </g>

            <!-- 20-Link 2-Prong Brass Tally Tag -->
            <g transform="translate(-14, 0)">
              <line x1="38" y1="36" x2="38" y2="42" stroke="#ffd700" stroke-width="0.8" />
              <polygon points="36,42 40,42 39,46 38,44 37,46" fill="#ffd700" />
            </g>

            <!-- 30-Link 3-Prong Brass Tally Tag -->
            <g transform="translate(14, 0)">
              <line x1="38" y1="36" x2="38" y2="42" stroke="#ffd700" stroke-width="0.8" />
              <polygon points="35,42 41,42 40,46 39,44 38,46 37,44 36,46" fill="#ffd700" />
            </g>

            <!-- Chain Math Readout -->
            <text x="38" y="22" font-family="monospace" font-size="3.5" fill="#ffe082" text-anchor="middle">1 CHAIN = 66 FT = 4 RODS</text>
          </svg>
        </div>
        <div class="gc-label">GUNTER'S CHAIN</div>
      </div>
    `;
  }
}

customElements.define('concept-gunters-chain', ConceptGuntersChain);
