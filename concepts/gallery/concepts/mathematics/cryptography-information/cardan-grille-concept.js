const cardanStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a14 0%, #080604 100%);
    border: 1.5px solid rgba(239, 108, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(239, 108, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cg-svg {
    width: 76px;
    height: 72px;
  }

  /* Perforated Masking Grille Translation Slide */
  .cg-mask-plate {
    fill: #3e2723;
    stroke: #ef6c00;
    stroke-width: 1;
    animation: cg-grille-slide 4s ease-in-out infinite alternate;
  }

  @keyframes cg-grille-slide {
    0% { transform: translate(0px, 0px); }
    30% { transform: translate(0px, 0px); }
    70% { transform: translate(-8px, -6px); }
    100% { transform: translate(-8px, -6px); }
  }

  /* Secret exposed letters glowing through apertures */
  .cg-secret-text text {
    font-family: monospace;
    font-size: 4px;
    font-weight: bold;
    fill: #ffd54f;
    animation: cg-reveal-glow 2s ease-in-out infinite alternate;
  }

  @keyframes cg-reveal-glow {
    0% { filter: drop-shadow(0 0 1px #ff9800); fill: #ffe082; }
    100% { filter: drop-shadow(0 0 4px #ff3d00); fill: #ffffff; }
  }

  /* Background innocent dummy text */
  .cg-dummy-lines {
    stroke: #8d6e63;
    stroke-width: 0.6;
    opacity: 0.4;
  }

  .cg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(239, 108, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCardanGrille extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cardanStyles}</style>
      <div class="cg-box">
        <div class="cg-stage">
          <svg class="cg-svg" viewBox="0 0 76 72">
            <!-- Background Parchment Letter Sheet -->
            <rect x="12" y="10" width="52" height="52" fill="#d7ccc8" stroke="#a1887f" stroke-width="1" />

            <!-- Innocent Dummy Letter Manuscript Text Lines -->
            <g class="cg-dummy-lines">
              <line x1="16" y1="16" x2="60" y2="16" />
              <line x1="16" y1="24" x2="60" y2="24" />
              <line x1="16" y1="32" x2="60" y2="32" />
              <line x1="16" y1="40" x2="60" y2="40" />
              <line x1="16" y1="48" x2="60" y2="48" />
              <line x1="16" y1="56" x2="60" y2="56" />
            </g>

            <!-- Embedded Secret Characters in Manuscript -->
            <g class="cg-secret-text" text-anchor="middle">
              <text x="22" y="17">F</text>
              <text x="46" y="25">L</text>
              <text x="30" y="33">E</text>
              <text x="54" y="41">E</text>
              <text x="38" y="49">N</text>
              <text x="22" y="57">O</text>
              <text x="50" y="57">W</text>
            </g>

            <!-- Cardan Brass Perforated Mask Plate with Precision Windows -->
            <g class="cg-mask-plate">
              <!-- Grille Base with Cutouts using Path XOR winding or Compound Rects -->
              <path d="M 12 10 L 64 10 L 64 62 L 12 62 Z 
                       M 18 13 L 26 13 L 26 19 L 18 19 Z 
                       M 42 21 L 50 21 L 50 27 L 42 27 Z 
                       M 26 29 L 34 29 L 34 35 L 26 35 Z 
                       M 50 37 L 58 37 L 58 43 L 50 43 Z 
                       M 34 45 L 42 45 L 42 51 L 34 51 Z 
                       M 18 53 L 26 53 L 26 59 L 18 59 Z 
                       M 46 53 L 54 53 L 54 59 L 46 59 Z" fill-rule="evenodd" />
            </g>

            <!-- Corner Alignment Guide Marks on Grille -->
            <circle cx="15" cy="13" r="1" fill="#ef6c00" />
            <circle cx="61" cy="13" r="1" fill="#ef6c00" />
            <circle cx="15" cy="59" r="1" fill="#ef6c00" />
            <circle cx="61" cy="59" r="1" fill="#ef6c00" />
          </svg>
        </div>
        <div class="cg-label">CARDAN GRILLE</div>
      </div>
    `;
  }
}

customElements.define('concept-cardan-grille', ConceptCardanGrille);
