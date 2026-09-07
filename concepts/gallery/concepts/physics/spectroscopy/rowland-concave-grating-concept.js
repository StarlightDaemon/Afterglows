const rowlandConcaveGratingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a24 0%, #05070d 100%);
    border: 1.5px solid rgba(56, 189, 248, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rc-svg {
    width: 76px;
    height: 72px;
  }

  /* Rowland circle diffraction focus resonance */
  .rc-rowland-circle {
    animation: rc-circle-glow 3s ease-in-out infinite alternate;
  }

  @keyframes rc-circle-glow {
    0% { stroke: #0284c7; opacity: 0.5; }
    100% { stroke: #38bdf8; opacity: 0.9; filter: drop-shadow(0 0 2px #0ea5e9); }
  }

  /* Concave ruled grating ruled lines gleam */
  .rc-grating-shimmer {
    animation: rc-grating-flash 2.5s ease-in-out infinite alternate;
  }

  @keyframes rc-grating-flash {
    0% { stroke: #94a3b8; }
    100% { stroke: #ffffff; filter: drop-shadow(0 0 2px #38bdf8); }
  }

  /* Diffracted spectral rays sweeping their focus along the plate arc */
  .rc-spectrum-focus {
    transform-origin: 38px 59px;
    animation: rc-focus-pulse 2s ease-in-out infinite alternate,
               rc-fan-sweep 3.2s ease-in-out infinite alternate;
  }

  @keyframes rc-focus-pulse {
    0% { opacity: 0.65; }
    100% { opacity: 1; filter: drop-shadow(0 0 2.5px #f43f5e); }
  }

  @keyframes rc-fan-sweep {
    0% { transform: rotate(-9deg); }
    100% { transform: rotate(9deg); }
  }

  .rc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(56, 189, 248, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRowlandConcaveGrating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rowlandConcaveGratingStyles}</style>
      <div class="rc-box">
        <div class="rc-stage">
          <svg class="rc-svg" viewBox="0 0 76 72">
            <!-- 1882 Henry Augustus Rowland Concave Reflection Diffraction Grating -->
            <!-- Rowland Circle (Diameter = Radius of Curvature R of Grating) -->
            <circle class="rc-rowland-circle" cx="38" cy="36" r="26" fill="#091322" stroke-dasharray="2 2" stroke-width="0.8" />

            <!-- Entrance Slit S on Rowland Circle (Top Right, ~60°) -->
            <circle cx="51" cy="13" r="2" fill="#facc15" stroke="#ca8a04" stroke-width="0.6" />
            <line x1="57" y1="7" x2="45" y2="19" stroke="#fbbf24" stroke-width="0.7" />

            <!-- Concave Speculum Metal Grating G on Rowland Circle (Bottom, 270°) -->
            <path class="rc-grating-shimmer" d="M 28 61 Q 38 58 48 61" fill="none" stroke-width="2.2" />
            <!-- Ruled Diamond Micro-Grooves (20,000 lines per inch) -->
            <line x1="33" y1="58" x2="33" y2="62" stroke="#bae6fd" stroke-width="0.5" />
            <line x1="38" y1="57" x2="38" y2="61" stroke="#bae6fd" stroke-width="0.5" />
            <line x1="43" y1="58" x2="43" y2="62" stroke="#bae6fd" stroke-width="0.5" />

            <!-- Incident Diverging Light Beam from Slit to Concave Grating -->
            <path d="M 51 13 L 34 60" stroke="#fef08a" stroke-width="0.7" stroke-dasharray="2 1.5" opacity="0.7" />
            <path d="M 51 13 L 42 60" stroke="#fef08a" stroke-width="0.7" stroke-dasharray="2 1.5" opacity="0.7" />

            <!-- Photographic Film Plate P along Rowland Circle Arc (Top Left) -->
            <path d="M 16 26 A 26 26 0 0 1 28 14" fill="none" stroke="#ef4444" stroke-width="1.8" />

            <!-- Self-Focused Diffracted Spectral Rays (No lenses required!) -->
            <g class="rc-spectrum-focus" stroke-width="1.3">
              <!-- Violet Ray -->
              <line x1="38" y1="59" x2="26" y2="15" stroke="#a855f7" />
              <!-- Cyan/Green Ray -->
              <line x1="38" y1="59" x2="21" y2="20" stroke="#06b6d4" />
              <!-- Red Ray -->
              <line x1="38" y1="59" x2="17" y2="26" stroke="#f43f5e" />
              <!-- Focused spectral spots on the plate -->
              <circle cx="26" cy="15" r="1.9" fill="#c084fc" />
              <circle cx="21" cy="20" r="1.9" fill="#22d3ee" />
              <circle cx="17" cy="26" r="1.9" fill="#fb7185" />
            </g>
          </svg>
        </div>
        <div class="rc-label">ROWLAND CIRCLE 1882</div>
      </div>
    `;
  }
}

customElements.define('concept-rowland-concave-grating', ConceptRowlandConcaveGrating);
