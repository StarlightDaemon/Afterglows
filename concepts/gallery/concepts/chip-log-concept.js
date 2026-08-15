const chipLogStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cl-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #0d222e 0%, #03080d 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cl-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cl-svg {
    width: 76px;
    height: 72px;
  }

  /* Knotted Line Running Off Reel into the Sea */
  .cl-line-flow {
    stroke: #b0bec5;
    stroke-dasharray: 6 6;
    animation: cl-stream-run 1.2s linear infinite;
  }

  @keyframes cl-stream-run {
    to { stroke-dashoffset: -24; }
  }

  /* Rotating Hand Reel Spool */
  .cl-reel-spool {
    transform-origin: 22px 24px;
    animation: cl-reel-spin 2s linear infinite;
  }

  @keyframes cl-reel-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* 28-Second Sandglass Trickle */
  .cl-sand-stream {
    stroke: #ffd54f;
    stroke-dasharray: 2 1;
    animation: cl-sand-fall 0.8s linear infinite;
  }

  @keyframes cl-sand-fall {
    to { stroke-dashoffset: 6; }
  }

  /* Floating Drogue Chip Board in Sea Waves */
  .cl-drogue-bob {
    animation: cl-bob 2s ease-in-out infinite alternate;
  }

  @keyframes cl-bob {
    0% { transform: translate(54px, 46px) rotate(-5deg); }
    100% { transform: translate(54px, 48px) rotate(8deg); }
  }

  .cl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptChipLog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${chipLogStyles}</style>
      <div class="cl-box">
        <div class="cl-stage">
          <svg class="cl-svg" viewBox="0 0 76 72">
            <!-- Ocean Waves Background -->
            <path d="M 4 48 Q 20 44 38 48 Q 56 52 72 48 L 72 66 L 4 66 Z" fill="rgba(1, 87, 155, 0.25)" stroke="#0288d1" stroke-width="0.8" />

            <!-- Wooden Hand Reel Mechanism on Ship's Taffrail (Top-Left) -->
            <g transform="translate(4, 8)">
              <!-- Reel Frame Brackets & Handles -->
              <rect x="14" y="4" width="4" height="24" rx="1" fill="#4e342e" stroke="#8d6e63" stroke-width="0.8" />
              <!-- Rotating Reel Spool and Crossbars -->
              <g class="cl-reel-spool">
                <circle cx="16" cy="16" r="10" fill="#3e2723" stroke="#ffb300" stroke-width="0.8" />
                <line x1="8" y1="16" x2="24" y2="16" stroke="#ffb300" stroke-width="1.2" />
                <line x1="16" y1="8" x2="16" y2="24" stroke="#ffb300" stroke-width="1.2" />
                <circle cx="16" cy="16" r="3" fill="#cfd8dc" />
              </g>
            </g>

            <!-- Knotted Line running out over water -->
            <path d="M 24 24 Q 38 32 54 46" fill="none" stroke="#e0e0e0" stroke-width="1" class="cl-line-flow" />

            <!-- Trailing Wooden Quadrant Drogue Board (Chip) Weighted with Lead Base -->
            <g class="cl-drogue-bob">
              <!-- Pie-Wedge Quarter Circle Wooden Board -->
              <path d="M 0 0 L 12 -8 A 14 14 0 0 1 12 8 Z" fill="#5d4037" stroke="#bcaaa4" stroke-width="0.8" />
              <!-- Lead Weight on Curved Edge -->
              <path d="M 11 -6 A 14 14 0 0 1 11 6" fill="none" stroke="#78909c" stroke-width="2" />
              <!-- 3-Strand Bridle Rigging Line -->
              <line x1="0" y1="0" x2="-6" y2="0" stroke="#cfd8dc" stroke-width="0.8" />
            </g>

            <!-- 28-Second Sandglass Timer (Top-Right) -->
            <g transform="translate(58, 8)">
              <!-- Brass Sandglass Cage -->
              <rect x="0" y="0" width="12" height="20" rx="1" fill="none" stroke="#ffd700" stroke-width="0.8" />
              <!-- Glass Bulbs -->
              <path d="M 2 2 L 10 2 L 6 10 L 10 18 L 2 18 L 6 10 Z" fill="rgba(255, 215, 0, 0.15)" stroke="rgba(255, 255, 255, 0.6)" stroke-width="0.6" />
              <!-- Trickling Sand Stream & Heap -->
              <line x1="6" y1="10" x2="6" y2="16" class="cl-sand-stream" stroke-width="0.8" />
              <polygon points="3,17 9,17 6,15" fill="#ffd54f" />
            </g>
          </svg>
        </div>
        <div class="cl-label">CHIP LOG & KNOTS</div>
      </div>
    `;
  }
}

customElements.define('concept-chip-log', ConceptChipLog);
