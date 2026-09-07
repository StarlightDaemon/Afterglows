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

  /* Emerald tablet slab breathing glow */
  .et-slab {
    fill: #004d2c;
    stroke: #00e676;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 4px rgba(0, 230, 118, 0.5));
  }

  /* Orbiting celestial Sol & Luna gem at top */
  .et-sun-moon {
    transform-origin: 38px 18px;
    animation: et-orb-orbit 3.6s linear infinite;
  }

  @keyframes et-orb-orbit {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Seal of Solomon counter-rotating elemental triangles */
  .et-tri-up {
    transform-origin: 38px 34px;
    animation: et-rot-up 3s ease-in-out infinite alternate;
  }

  .et-tri-dn {
    transform-origin: 38px 34px;
    animation: et-rot-dn 3s ease-in-out infinite alternate;
  }

  @keyframes et-rot-up {
    0% { transform: rotate(-25deg); }
    100% { transform: rotate(25deg); }
  }

  @keyframes et-rot-dn {
    0% { transform: rotate(25deg); }
    100% { transform: rotate(-25deg); }
  }

  /* Vertical oscillating transmutation spark packet: As Above, So Below */
  .et-spark-packet {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffd700, 0 0 14px #00e676;
    z-index: 6;
    animation: et-as-above-so-below 2.4s ease-in-out infinite alternate;
  }

  @keyframes et-as-above-so-below {
    0% { transform: translate(0, -18px) scale(0.7); }
    100% { transform: translate(0, 18px) scale(1.3); }
  }

  /* Inscribed Hermetic Runes / Glyphs */
  .et-glyphs path, .et-glyphs line, .et-glyphs circle {
    stroke: #b9f6ca;
    fill: none;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 2px #00e676);
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
          <div class="et-spark-packet"></div>

          <svg class="et-svg" viewBox="0 0 76 72">
            <!-- Emerald Slab Base -->
            <polygon class="et-slab" points="16,8 60,8 64,64 12,64" />

            <!-- Inscribed Glyphs -->
            <g class="et-glyphs">
              <!-- Celestial Sun & Moon Symbols at Top -->
              <g class="et-sun-moon">
                <circle cx="38" cy="18" r="4" fill="#003318" stroke="#ffd700" stroke-width="1.2" />
                <circle cx="38" cy="12" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 4px #ffd700)" />
              </g>

              <!-- Central Hexagram / Seal of Solomon with Counter-Rotation -->
              <polygon class="et-tri-up" points="38,26 46,38 30,38" stroke="#00e676" stroke-width="1.2" />
              <polygon class="et-tri-dn" points="38,42 46,30 30,30" stroke="#ffd700" stroke-width="1.2" />

              <!-- "As Above, So Below" Vertical Resonance Rays -->
              <line x1="38" y1="18" x2="38" y2="52" stroke="#ffffff" stroke-width="1" stroke-dasharray="2 2" />

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

if (!customElements.get('concept-emerald-tablet')) {
  customElements.define('concept-emerald-tablet', ConceptEmeraldTablet);
}
