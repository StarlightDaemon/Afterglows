const nicolPrismStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .np-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161c24 0%, #06080c 100%);
    border: 1.5px solid rgba(56, 189, 248, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .np-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .np-svg {
    width: 76px;
    height: 72px;
  }

  /* Unpolarized incident ray entering Iceland spar */
  .np-incident-ray {
    animation: np-incident-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes np-incident-pulse {
    0% { stroke: #cbd5e1; opacity: 0.7; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #94a3b8); }
  }

  /* Ordinary ray total internal reflection onto black absorbing coating */
  .np-o-ray {
    animation: np-o-ray-pulse 2.6s ease-in-out infinite alternate;
  }

  @keyframes np-o-ray-pulse {
    0% { stroke: #ef4444; opacity: 0.5; }
    50% { stroke: #f87171; opacity: 0.9; filter: drop-shadow(0 0 2px #ef4444); }
    100% { stroke: #ef4444; opacity: 0.5; }
  }

  /* Extraordinary ray transmitted through Canada balsam line */
  .np-e-ray {
    animation: np-e-ray-glow 2.2s ease-in-out infinite alternate;
  }

  @keyframes np-e-ray-glow {
    0% { stroke: #38bdf8; opacity: 0.7; stroke-width: 1.2; }
    100% { stroke: #e0f2fe; opacity: 1; stroke-width: 1.6; filter: drop-shadow(0 0 3px #0ea5e9); }
  }

  /* Canada balsam diagonal cement film gleam */
  .np-balsam-cut {
    animation: np-balsam-gleam 3s ease-in-out infinite alternate;
  }

  @keyframes np-balsam-gleam {
    0% { stroke: #fde047; opacity: 0.4; }
    100% { stroke: #ffffff; opacity: 0.9; }
  }

  .np-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(56, 189, 248, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptNicolPrism extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${nicolPrismStyles}</style>
      <div class="np-box">
        <div class="np-stage">
          <svg class="np-svg" viewBox="0 0 76 72">
            <!-- 1828 William Nicol Polarizing Iceland Spar Prism -->
            <!-- Brass Tube Outer Mount Housing -->
            <rect x="14" y="16" width="48" height="40" rx="3" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
            <!-- Absorbing Black Lampblack Base Layer -->
            <rect x="16" y="52" width="44" height="3" fill="#020617" stroke="#334155" stroke-width="0.5" />

            <!-- Calcite Rhombohedron Body (Cut at 68° angle) -->
            <polygon points="18,22 58,18 58,50 18,54" fill="#0f172a" stroke="#0ea5e9" stroke-width="1" />

            <!-- Canada Balsam Diagonal Cut Glue Film -->
            <line class="np-balsam-cut" x1="18" y1="54" x2="58" y2="18" stroke-width="1.2" stroke-dasharray="3 1.5" />

            <!-- Incident Unpolarized Light Ray -->
            <line class="np-incident-ray" x1="6" y1="36" x2="22" y2="36" stroke-width="1.2" />
            <!-- Unpolarized cross ticks -->
            <line x1="12" y1="33" x2="12" y2="39" stroke="#94a3b8" stroke-width="0.8" />
            <circle cx="16" cy="36" r="1.2" fill="#94a3b8" />

            <!-- O-Ray: Ordinary Ray Total Internal Reflection (TIR) down to black absorber -->
            <path class="np-o-ray" d="M 22 36 L 38 36 L 46 52" fill="none" stroke-width="1" stroke-dasharray="2 1" />
            <!-- Absorption spark at base -->
            <circle cx="46" cy="52" r="1.2" fill="#ef4444" />

            <!-- E-Ray: Extraordinary Ray linearly polarized output (Transmitted through balsam) -->
            <path class="np-e-ray" d="M 22 36 L 38 36 L 70 36" fill="none" />
            <!-- Linear Polarization E-vector indicators -->
            <line x1="48" y1="32" x2="48" y2="40" stroke="#38bdf8" stroke-width="0.8" />
            <line x1="56" y1="32" x2="56" y2="40" stroke="#38bdf8" stroke-width="0.8" />
            <line x1="64" y1="32" x2="64" y2="40" stroke="#38bdf8" stroke-width="0.8" />
          </svg>
        </div>
        <div class="np-label">NICOL PRISM 1828</div>
      </div>
    `;
  }
}

customElements.define('concept-nicol-prism', ConceptNicolPrism);
