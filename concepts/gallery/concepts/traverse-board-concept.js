const traverseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221812 0%, #0a0604 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 171, 64, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tb-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tb-svg {
    width: 76px;
    height: 72px;
  }

  /* Inserted Bone Pegs blinking with half-hour intervals */
  .tb-pegs circle {
    fill: #ffffff;
    stroke: #ff9100;
    stroke-width: 0.6;
    animation: tb-peg-glow 2s ease-in-out infinite alternate;
  }

  .tb-pegs circle:nth-child(2n) { animation-delay: 0.6s; }
  .tb-pegs circle:nth-child(3n) { animation-delay: 1.2s; }

  @keyframes tb-peg-glow {
    0% { filter: drop-shadow(0 0 1px #ff9100); }
    100% { filter: drop-shadow(0 0 4px #ffd700); fill: #fffde7; }
  }

  /* Wooden Oak Board Texture */
  .tb-board-plate {
    fill: #3e2723;
    stroke: #8d6e63;
    stroke-width: 1.2;
  }

  .tb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTraverseBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${traverseStyles}</style>
      <div class="tb-box">
        <div class="tb-stage">
          <svg class="tb-svg" viewBox="0 0 76 72">
            <!-- Shaped Oak Traverse Board Plate (Upper compass circle + lower speed grid) -->
            <path class="tb-board-plate" d="M 38 6 C 54 6, 64 16, 64 32 C 64 38, 62 44, 60 46 L 60 64 L 16 64 L 16 46 C 14 44, 12 38, 12 32 C 12 16, 22 6, 38 6 Z" />

            <!-- Upper 32-Point Compass Rose Dial -->
            <circle cx="38" cy="28" r="20" fill="#2d1c14" stroke="#ffb74d" stroke-width="0.8" />
            <!-- Fleur-de-lis North Marker -->
            <polygon points="38,10 36,16 40,16" fill="#ffd700" />

            <!-- Radial Peg Hole Arrays (8 holes per wind point for 4-hour watch) -->
            <g stroke="#ffab40" stroke-width="0.4" stroke-dasharray="1.5 2">
              <line x1="38" y1="12" x2="38" y2="24" />
              <line x1="49.3" y1="16.7" x2="43.7" y2="22.3" />
              <line x1="54" y1="28" x2="42" y2="28" />
              <line x1="49.3" y1="39.3" x2="43.7" y2="33.7" />
              <line x1="38" y1="44" x2="38" y2="32" />
              <line x1="26.7" y1="39.3" x2="32.3" y2="33.7" />
              <line x1="22" y1="28" x2="34" y2="28" />
              <line x1="26.7" y1="16.7" x2="32.3" y2="22.3" />
            </g>

            <!-- Lower Speed Knot Peg Grid (Knots per half-hour) -->
            <rect x="20" y="50" width="36" height="12" fill="#2d1c14" stroke="#ffb74d" stroke-width="0.8" />
            <g stroke="rgba(255, 183, 77, 0.4)" stroke-width="0.5">
              <line x1="20" y1="54" x2="56" y2="54" />
              <line x1="20" y1="58" x2="56" y2="58" />
              <line x1="29" y1="50" x2="29" y2="62" />
              <line x1="38" y1="50" x2="38" y2="62" />
              <line x1="47" y1="50" x2="47" y2="62" />
            </g>

            <!-- Active Bone Pegs inserted in compass course & speed holes -->
            <g class="tb-pegs">
              <!-- Compass course pegs inserted (recording headings during watch) -->
              <circle cx="38" cy="14" r="1.2" />
              <circle cx="46" cy="20" r="1.2" />
              <circle cx="50" cy="28" r="1.2" />
              <circle cx="38" cy="20" r="1.2" />

              <!-- Speed knot pegs in lower table -->
              <circle cx="24.5" cy="54" r="1" />
              <circle cx="33.5" cy="54" r="1" />
              <circle cx="42.5" cy="58" r="1" />
              <circle cx="51.5" cy="54" r="1" />
            </g>

            <!-- Lanyard Cord attached to peg cluster -->
            <path d="M 38 28 Q 44 40 48 48" fill="none" stroke="#cfd8dc" stroke-width="0.6" stroke-dasharray="1 1" />
          </svg>
        </div>
        <div class="tb-label">TRAVERSE BOARD</div>
      </div>
    `;
  }
}

customElements.define('concept-traverse-board', ConceptTraverseBoard);
