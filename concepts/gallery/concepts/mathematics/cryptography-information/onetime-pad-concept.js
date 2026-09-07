const onetimePadStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .op-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #291208 0%, #0c0402 100%);
    border: 1.5px solid rgba(255, 112, 67, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 112, 67, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .op-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .op-svg {
    width: 76px;
    height: 72px;
  }

  /* Consuming Fire Ember Line burning used key */
  .op-fire-edge {
    stroke: #ff3d00;
    stroke-width: 1.5;
    animation: op-burn 2s ease-in-out infinite alternate;
  }

  @keyframes op-burn {
    0% { stroke: #bf360c; stroke-width: 1; opacity: 0.35; filter: drop-shadow(0 0 2px #ff9100); }
    100% { stroke: #ffffff; stroke-width: 3.5; opacity: 1; filter: drop-shadow(0 0 12px #ff3d00); }
  }

  /* Used key strip torn off the pad and flung away to be burnt */
  .op-sheet-tear {
    animation: op-tear-away 3.4s ease-in-out infinite;
  }

  @keyframes op-tear-away {
    0%, 12% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    60% { transform: translate(10px, -20px) rotate(9deg); opacity: 1; }
    78% { transform: translate(16px, -30px) rotate(14deg); opacity: 0; }
    79%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  }

  /* Sparks and ash particles rising */
  .op-embers circle {
    fill: #ffab40;
    animation: op-ember-fly 1.5s ease-out infinite;
  }

  .op-embers circle:nth-child(2) { animation-delay: 0.4s; }
  .op-embers circle:nth-child(3) { animation-delay: 0.8s; }
  .op-embers circle:nth-child(4) { animation-delay: 1.2s; }

  @keyframes op-ember-fly {
    0% { transform: translate(0, 0) scale(2.4); opacity: 1; }
    100% { transform: translate(9px, -28px) scale(0.4); opacity: 0; }
  }

  /* 5-Letter Key Groups Glowing */
  .op-key-text text {
    font-family: monospace;
    font-size: 3.8px;
    font-weight: bold;
    fill: #e0e0e0;
  }

  .op-active-group {
    fill: #ffeb3b !important;
    animation: op-group-glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes op-group-glow {
    0% { filter: drop-shadow(0 0 1px #ff9800); opacity: 0.35; }
    100% { filter: drop-shadow(0 0 5px #ffd600); opacity: 1; }
  }

  .op-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 112, 67, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptOnetimePad extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${onetimePadStyles}</style>
      <div class="op-box">
        <div class="op-stage">
          <svg class="op-svg" viewBox="0 0 76 72">
            <!-- Paper Pad Sheet Boundary -->
            <path d="M 14 22 L 62 16 L 60 62 L 16 62 Z" fill="#2d221e" stroke="#8d6e63" stroke-width="1" />

            <!-- Charred Burned Top Edge (Used sheet destruction) -->
            <path class="op-fire-edge" d="M 14 22 Q 26 26 38 20 Q 50 24 62 16" fill="none" />

            <!-- Used key strip being torn away for destruction -->
            <g class="op-sheet-tear">
              <path d="M 14 22 L 62 16 L 62 23 L 14 29 Z" fill="#d7ccc8" stroke="#a1887f" stroke-width="0.6" />
              <text x="20" y="27.5" font-family="monospace" font-size="3.8" font-weight="bold" fill="#4e342e">74920  18395</text>
            </g>

            <!-- Flying Burning Embers -->
            <g class="op-embers">
              <circle cx="24" cy="22" r="1" />
              <circle cx="36" cy="18" r="0.8" />
              <circle cx="48" cy="20" r="1.2" />
              <circle cx="56" cy="16" r="0.8" />
            </g>

            <!-- One-Time Pad 5-Letter Code Groups -->
            <g class="op-key-text">
              <!-- Consumed Line 1 (Burnt remnant) -->
              <text x="20" y="27" fill="#6d4c41" opacity="0.6">74920  18395</text>

              <!-- Active Line 2 (Current key in use) -->
              <text x="20" y="36" class="op-active-group">KQZMP  VBLTW</text>

              <!-- Remaining Unused Lines (Future keys) -->
              <text x="20" y="44">82041  59173</text>
              <text x="20" y="52">JHXNC  DPROA</text>
              <text x="20" y="60">31958  40627</text>
            </g>

            <!-- Sheet Header / Serial Identification -->
            <rect x="18" y="12" width="40" height="4" fill="#3e2723" stroke="#ff7043" stroke-width="0.6" />
            <text x="38" y="15" font-family="monospace" font-size="2.6" fill="#ffab91" text-anchor="middle">OTP-SERIES-ALPHA</text>
          </svg>
        </div>
        <div class="op-label">ONE-TIME PAD</div>
      </div>
    `;
  }
}

customElements.define('concept-onetime-pad', ConceptOnetimePad);
