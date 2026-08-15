const vigenereStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1e2d 0%, #02080f 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vg-svg {
    width: 76px;
    height: 72px;
  }

  /* Coordinate Laser Reticle Crosshairs (Row & Column sweep) */
  .vg-crosshair-h {
    stroke: #ff4081;
    stroke-width: 1;
    animation: vg-sweep-h 4s ease-in-out infinite alternate;
  }

  @keyframes vg-sweep-h {
    0% { transform: translateY(0px); }
    50% { transform: translateY(14px); }
    100% { transform: translateY(28px); }
  }

  .vg-crosshair-v {
    stroke: #00e5ff;
    stroke-width: 1;
    animation: vg-sweep-v 4s ease-in-out infinite alternate;
  }

  @keyframes vg-sweep-v {
    0% { transform: translateX(0px); }
    50% { transform: translateX(20px); }
    100% { transform: translateX(36px); }
  }

  /* Intersecting Target Cell Flash */
  .vg-target-cell {
    fill: #ffd700;
    animation: vg-cell-glow 2s ease-in-out infinite alternate;
  }

  @keyframes vg-cell-glow {
    0% { opacity: 0.4; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 6px #ffd700); }
  }

  /* Tabula Matrix Grid dots */
  .vg-matrix {
    fill: #90caf9;
    opacity: 0.7;
  }

  .vg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptVigenereTabula extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vigenereStyles}</style>
      <div class="vg-box">
        <div class="vg-stage">
          <svg class="vg-svg" viewBox="0 0 76 72">
            <!-- Outer Tabula Recta Square Frame -->
            <rect x="12" y="10" width="52" height="52" fill="rgba(0, 229, 255, 0.05)" stroke="#00e5ff" stroke-width="1.2" />

            <!-- Row Header Key Labels (Left edge) -->
            <g font-family="monospace" font-size="3" fill="#ff4081" text-anchor="middle">
              <text x="8" y="16">K</text>
              <text x="8" y="26">E</text>
              <text x="8" y="36">Y</text>
              <text x="8" y="46">W</text>
              <text x="8" y="56">D</text>
            </g>

            <!-- Column Header Plaintext Labels (Top edge) -->
            <g font-family="monospace" font-size="3" fill="#00e5ff" text-anchor="middle">
              <text x="18" y="7">P</text>
              <text x="28" y="7">L</text>
              <text x="38" y="7">A</text>
              <text x="48" y="7">I</text>
              <text x="58" y="7">N</text>
            </g>

            <!-- Matrix Shift Lines -->
            <g stroke="rgba(0, 229, 255, 0.2)" stroke-width="0.5">
              <line x1="12" y1="20" x2="64" y2="20" />
              <line x1="12" y1="30" x2="64" y2="30" />
              <line x1="12" y1="40" x2="64" y2="40" />
              <line x1="12" y1="50" x2="64" y2="50" />
              <line x1="22" y1="10" x2="22" y2="62" />
              <line x1="32" y1="10" x2="32" y2="62" />
              <line x1="42" y1="10" x2="42" y2="62" />
              <line x1="52" y1="10" x2="52" y2="62" />
            </g>

            <!-- Matrix Sample Alphabet Dots/Letters -->
            <g class="vg-matrix" font-family="monospace" font-size="2.8" text-anchor="middle">
              <text x="17" y="18">K</text><text x="27" y="18">L</text><text x="37" y="18">M</text><text x="47" y="18">N</text><text x="57" y="18">O</text>
              <text x="17" y="28">E</text><text x="27" y="28">F</text><text x="37" y="28">G</text><text x="47" y="28">H</text><text x="57" y="28">I</text>
              <text x="17" y="38">Y</text><text x="27" y="38">Z</text><text x="37" y="38">A</text><text x="47" y="38">B</text><text x="57" y="38">C</text>
              <text x="17" y="48">W</text><text x="27" y="48">X</text><text x="37" y="48">Y</text><text x="47" y="48">Z</text><text x="57" y="48">A</text>
              <text x="17" y="58">D</text><text x="27" y="58">E</text><text x="37" y="58">F</text><text x="47" y="58">G</text><text x="57" y="58">H</text>
            </g>

            <!-- Scanning Row Laser (Horizontal Key Crosshair) -->
            <line class="vg-crosshair-h" x1="6" y1="28" x2="68" y2="28" stroke-dasharray="2 1" />

            <!-- Scanning Column Laser (Vertical Plaintext Crosshair) -->
            <line class="vg-crosshair-v" x1="27" y1="5" x2="27" y2="65" stroke-dasharray="2 1" />

            <!-- Intersection Target Box -->
            <g transform="translate(37, 36)">
              <rect class="vg-target-cell" x="-4" y="-4" width="8" height="8" rx="1" fill="#ffd700" stroke="#ffab00" stroke-width="0.8" />
              <text x="0" y="2" font-family="sans-serif" font-size="4" font-weight="bold" fill="#000000" text-anchor="middle">A</text>
            </g>
          </svg>
        </div>
        <div class="vg-label">TABULA RECTA</div>
      </div>
    `;
  }
}

customElements.define('concept-vigenere-tabula', ConceptVigenereTabula);
