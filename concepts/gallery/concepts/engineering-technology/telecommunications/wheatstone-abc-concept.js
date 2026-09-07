const wheatstoneAbcStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wa-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a14 0%, #060503 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 183, 77, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wa-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wa-svg {
    width: 76px;
    height: 72px;
  }

  /* Stepping Alphabet Pointer Needle */
  .wa-pointer-needle {
    transform-origin: 38px 36px;
    animation: wa-spell-step 6s steps(6, end) infinite;
  }

  @keyframes wa-spell-step {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(72deg); }
    40% { transform: rotate(144deg); }
    60% { transform: rotate(216deg); }
    80% { transform: rotate(288deg); }
    100% { transform: rotate(360deg); }
  }

  /* Depressed Key Button Flash */
  .wa-key-button {
    animation: wa-key-press 1s ease-in-out infinite alternate;
  }

  @keyframes wa-key-press {
    0% { fill: #cfd8dc; }
    100% { fill: #ff3d00; filter: drop-shadow(0 0 3px #ff3d00); }
  }

  .wa-case {
    fill: #3e2723;
    stroke: #ffb74d;
    stroke-width: 1.2;
  }

  .wa-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptWheatstoneAbc extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wheatstoneAbcStyles}</style>
      <div class="wa-box">
        <div class="wa-stage">
          <svg class="wa-svg" viewBox="0 0 76 72">
            <!-- Mahogany Octagonal Case Frame -->
            <polygon class="wa-case" points="26,6 50,6 68,24 68,48 50,66 26,66 8,48 8,24" />

            <!-- Circular White Enamel Letter Dial -->
            <circle cx="38" cy="36" r="23" fill="#fffde7" stroke="#8d6e63" stroke-width="0.8" />
            <circle cx="38" cy="36" r="14" fill="#2d1c14" stroke="#ffb74d" stroke-width="0.8" />

            <!-- Outer Peripheral Key Pushbuttons (30 brass keys around rim) -->
            <g fill="#d7ccc8" stroke="#5d4037" stroke-width="0.5">
              <circle cx="38" cy="10" r="1.8" class="wa-key-button" />
              <circle cx="56.4" cy="17.6" r="1.8" />
              <circle cx="64" cy="36" r="1.8" />
              <circle cx="56.4" cy="54.4" r="1.8" />
              <circle cx="38" cy="62" r="1.8" />
              <circle cx="19.6" cy="54.4" r="1.8" />
              <circle cx="12" cy="36" r="1.8" />
              <circle cx="19.6" cy="17.6" r="1.8" />
            </g>

            <!-- Letter Labels on Dial Ring -->
            <g font-family="monospace" font-size="3.5" font-weight="bold" fill="#212121" text-anchor="middle">
              <text x="38" y="16">A</text>
              <text x="54" y="24">E</text>
              <text x="60" y="37">J</text>
              <text x="54" y="50">O</text>
              <text x="38" y="58">T</text>
              <text x="22" y="50">W</text>
              <text x="16" y="37">Z</text>
              <text x="22" y="24">+</text>
            </g>

            <!-- Stepping Steel Pointer Needle -->
            <g class="wa-pointer-needle">
              <line x1="38" y1="36" x2="38" y2="16" stroke="#ff3d00" stroke-width="1.4" stroke-linecap="round" />
              <polygon points="38,13 36,17 40,17" fill="#ff3d00" />
              <!-- Counterweight Tail -->
              <circle cx="38" cy="42" r="2" fill="#78909c" />
            </g>

            <!-- Center Pivot Bushing -->
            <circle cx="38" cy="36" r="3" fill="#ffd700" stroke="#ff8f00" stroke-width="0.8" />
            <circle cx="38" cy="36" r="1" fill="#000000" />
          </svg>
        </div>
        <div class="wa-label">WHEATSTONE ABC TELEGRAPH</div>
      </div>
    `;
  }
}

customElements.define('concept-wheatstone-abc', ConceptWheatstoneAbc);
