const hughesStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ht-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a14 0%, #060503 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 171, 64, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ht-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ht-svg {
    width: 76px;
    height: 72px;
  }

  /* Continuously Rotating Typewheel Rim */
  .ht-typewheel {
    transform-origin: 38px 26px;
    animation: ht-wheel-spin 3s linear infinite;
  }

  @keyframes ht-wheel-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Advancing Printed Paper Ribbon Tape */
  .ht-paper-ribbon {
    stroke-dasharray: 4 2;
    animation: ht-tape-feed 1.2s linear infinite;
  }

  @keyframes ht-tape-feed {
    to { stroke-dashoffset: -12; }
  }

  /* Printing Platen Hammer Strike */
  .ht-platen-hammer {
    transform-origin: 38px 50px;
    animation: ht-strike 0.6s ease-in-out infinite alternate;
  }

  @keyframes ht-strike {
    0% { transform: translateY(0); }
    100% { transform: translateY(-4px); filter: drop-shadow(0 0 3px #ff9100); }
  }

  .ht-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHughesTelegraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hughesStyles}</style>
      <div class="ht-box">
        <div class="ht-stage">
          <svg class="ht-svg" viewBox="0 0 76 72">
            <!-- Brass & Cast Iron Frame Chassis -->
            <rect x="10" y="52" width="56" height="12" rx="1.5" fill="#3e2723" stroke="#8d6e63" stroke-width="1" />

            <!-- Continuously Rotating Letter/Number Typewheel Disk (Top Center) -->
            <g class="ht-typewheel">
              <circle cx="38" cy="26" r="16" fill="#2d1c14" stroke="#ffb74d" stroke-width="1.2" />
              <circle cx="38" cy="26" r="6" fill="#4e342e" stroke="#ffd700" stroke-width="0.8" />
              <!-- Typeface Characters on Rim -->
              <g font-family="monospace" font-size="3" fill="#ffe082" text-anchor="middle">
                <text x="38" y="14">A</text>
                <text x="48" y="20">F</text>
                <text x="50" y="30">K</text>
                <text x="46" y="38">P</text>
                <text x="38" y="41">T</text>
                <text x="30" y="38">W</text>
                <text x="26" y="30">Z</text>
                <text x="28" y="20">5</text>
              </g>
            </g>

            <!-- Inking Roller touching top of typewheel -->
            <circle cx="38" cy="8" r="3.5" fill="#212121" stroke="#ff3d00" stroke-width="0.6" />

            <!-- Moving Paper Tape Strip running under typewheel -->
            <rect x="6" y="41" width="64" height="6" fill="#fffde7" stroke="#d7ccc8" stroke-width="0.6" />
            <line x1="8" y1="44" x2="68" y2="44" stroke="#212121" stroke-width="0.8" class="ht-paper-ribbon" />

            <!-- Electromagnetic Platen Hammer (Striking paper against lowest type character) -->
            <g class="ht-platen-hammer">
              <rect x="35" y="47" width="6" height="6" rx="1" fill="#cfd8dc" stroke="#ff8f00" stroke-width="0.8" />
              <rect x="34" y="53" width="8" height="5" fill="#ffd700" stroke="#ff8f00" stroke-width="0.6" />
            </g>

            <!-- Electromagnet Solenoid Coils at Base -->
            <rect x="22" y="55" width="10" height="6" rx="1" fill="#b71c1c" stroke="#ff5252" stroke-width="0.6" />
            <rect x="44" y="55" width="10" height="6" rx="1" fill="#b71c1c" stroke="#ff5252" stroke-width="0.6" />
          </svg>
        </div>
        <div class="ht-label">HUGHES TELEGRAPH</div>
      </div>
    `;
  }
}

customElements.define('concept-hughes-telegraph', ConceptHughesTelegraph);
