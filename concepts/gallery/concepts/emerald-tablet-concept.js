const emeraldTabletStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .et-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #032b1b 0%, #010d08 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .et-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .et-svg {
    width: 76px;
    height: 72px;
  }

  /* Emerald tablet breathing glow */
  .et-slab {
    fill: #004d2c;
    stroke: #00e676;
    stroke-width: 1.2;
    animation: et-slab-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes et-slab-pulse {
    0% { filter: drop-shadow(0 0 2px rgba(0, 230, 118, 0.3)); }
    100% { filter: drop-shadow(0 0 8px rgba(0, 230, 118, 0.8)); }
  }

  /* Inscribed Hermetic Runes / Glyphs shining */
  .et-glyphs path, .et-glyphs line, .et-glyphs circle {
    stroke: #b9f6ca;
    fill: none;
    stroke-width: 1;
    animation: et-glyph-glow 2.5s ease-in-out infinite alternate;
  }

  @keyframes et-glyph-glow {
    0% { opacity: 0.4; stroke: #69f0ae; }
    100% { opacity: 1; stroke: #ffffff; filter: drop-shadow(0 0 2px #00e676); }
  }

  /* Celestial and Terrestrial oscillating linkage ("As Above, So Below") */
  .et-linkage {
    stroke: #ffd700;
    stroke-dasharray: 2 3;
    animation: et-link 2s linear infinite;
  }

  @keyframes et-link {
    to { stroke-dashoffset: -10; }
  }

  .et-sun-moon {
    animation: et-orbit 6s linear infinite;
    transform-origin: 38px 20px;
  }

  @keyframes et-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .et-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptEmeraldTablet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${emeraldTabletStyles}</style>
      <div class="et-box">
        <div class="et-stage">
          <svg class="et-svg" viewBox="0 0 76 72">
            <!-- Emerald Slab Base -->
            <polygon class="et-slab" points="16,8 60,8 64,64 12,64" />

            <!-- Inscribed Glyphs -->
            <g class="et-glyphs">
              <!-- Celestial Sun & Moon Symbols at Top -->
              <circle cx="38" cy="18" r="4" />
              <path d="M 38 12 L 38 14 M 38 22 L 38 24 M 32 18 L 34 18 M 42 18 L 44 18" />

              <!-- Central Hexagram / Seal of Solomon -->
              <polygon points="38,26 46,38 30,38" />
              <polygon points="38,42 46,30 30,30" />

              <!-- "As Above, So Below" Vertical Resonance Rays -->
              <line x1="38" y1="20" x2="38" y2="48" class="et-linkage" stroke-width="1.2" />

              <!-- Lower Terrestrial Salt & Sulfur Alchemical Marks -->
              <!-- Sulfur -->
              <polygon points="26,50 31,58 21,58" />
              <line x1="26" y1="58" x2="26" y2="61" />
              <line x1="23" y1="60" x2="29" y2="60" />

              <!-- Salt -->
              <circle cx="38" cy="54" r="3.5" />
              <line x1="34.5" y1="54" x2="41.5" y2="54" />

              <!-- Mercury -->
              <circle cx="50" cy="53" r="3" />
              <path d="M 47 48 Q 50 51 53 48" />
              <line x1="50" y1="56" x2="50" y2="61" />
              <line x1="47.5" y1="58.5" x2="52.5" y2="58.5" />
            </g>
          </svg>
        </div>
        <div class="et-label">TABULA SMARAGDINA</div>
      </div>
    `;
  }
}

customElements.define('concept-emerald-tablet', ConceptEmeraldTablet);
