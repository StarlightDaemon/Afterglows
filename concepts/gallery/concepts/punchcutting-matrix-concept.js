const punchcuttingMatrixStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pm-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a14 0%, #080603 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pm-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pm-svg {
    width: 76px;
    height: 72px;
  }

  /* Hardened steel letter punch descending to strike copper bar */
  .pm-steel-punch {
    animation: pm-strike-punch 2.4s ease-in-out infinite alternate;
  }

  @keyframes pm-strike-punch {
    0% { transform: translateY(-14px); }
    70% { transform: translateY(0); }
    80% { transform: translateY(-2px); }
    100% { transform: translateY(-14px); }
  }

  /* Impact spark flash when striking matrix */
  .pm-impact-spark {
    animation: pm-flash-spark 2.4s ease-in-out infinite alternate;
  }

  @keyframes pm-flash-spark {
    0% { opacity: 0; transform: scale(0.3); }
    68% { opacity: 0; }
    72% { opacity: 1; transform: scale(2.2); }
    80% { opacity: 0; }
    100% { opacity: 0; }
  }

  /* Justified copper matrix indentation glint */
  .pm-copper-letter {
    animation: pm-letter-gleam 2s ease-in-out infinite alternate;
  }

  @keyframes pm-letter-gleam {
    0% { fill: #d84315; }
    100% { fill: #ffcc80; filter: drop-shadow(0 0 2px #ffab40); }
  }

  .pm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPunchcuttingMatrix extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${punchcuttingMatrixStyles}</style>
      <div class="pm-box">
        <div class="pm-stage">
          <svg class="pm-svg" viewBox="0 0 76 72">
            <!-- Heavy Steel Anvil Base & Clamping Vise -->
            <polygon points="16,56 60,56 64,68 12,68" fill="#212121" stroke="#616161" stroke-width="0.8" />
            <!-- Vise Jaw Guide Screws -->
            <circle cx="20" cy="62" r="1.8" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            <circle cx="56" cy="62" r="1.8" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

            <!-- Soft Copper Matrix Bar (Bar of pure red copper receiving impression) -->
            <rect x="22" y="44" width="32" height="12" rx="1" fill="#bf360c" stroke="#ff7043" stroke-width="0.8" />

            <!-- Struck Intaglio Letter Impression in Copper ('g' or 'R' Garamond Letterform) -->
            <g class="pm-copper-letter">
              <text x="38" y="53" font-family="serif" font-size="8" font-weight="bold" text-anchor="middle" font-style="italic">R</text>
            </g>

            <!-- Hardened Forged Steel Letter Punch (Relief letter cut on tip) -->
            <g class="pm-steel-punch">
              <!-- Square Steel Shank Body -->
              <rect x="33" y="12" width="10" height="28" rx="0.5" fill="#37474f" stroke="#cfd8dc" stroke-width="0.8" />
              <!-- Chamfered Head receiving hammer blow -->
              <polygon points="32,12 44,12 42,8 34,8" fill="#607d8b" stroke="#cfd8dc" stroke-width="0.6" />
              <!-- Hand-Carved Relief Letter on Tip Face -->
              <rect x="35" y="40" width="6" height="4" fill="#cfd8dc" stroke="#eceff1" stroke-width="0.5" />
              <text x="38" y="43.5" font-family="serif" font-size="5" font-weight="bold" fill="#212121" text-anchor="middle" font-style="italic">R</text>
            </g>

            <!-- Striking Impact Spark Flash -->
            <g class="pm-impact-spark" transform="translate(38, 44)">
              <circle cx="0" cy="0" r="3" fill="#ffffff" filter="drop-shadow(0 0 3px #ffeb3b)" />
              <line x1="-5" y1="-3" x2="5" y2="3" stroke="#ffeb3b" stroke-width="0.8" />
              <line x1="-3" y1="4" x2="3" y2="-4" stroke="#ffeb3b" stroke-width="0.8" />
            </g>

            <!-- Typefounder's Eyeglass Magnifier / Graver Tool at Right -->
            <line x1="58" y1="28" x2="68" y2="42" stroke="#ffd700" stroke-width="1.2" />
            <polygon points="56,26 60,26 58,22" fill="#cfd8dc" />
          </svg>
        </div>
        <div class="pm-label">PUNCH & MATRIX</div>
      </div>
    `;
  }
}

customElements.define('concept-punchcutting-matrix', ConceptPunchcuttingMatrix);
