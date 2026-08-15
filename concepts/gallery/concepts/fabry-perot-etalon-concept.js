const fabryPerotEtalonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a24 0%, #05060a 100%);
    border: 1.5px solid rgba(56, 189, 248, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fp-svg {
    width: 76px;
    height: 72px;
  }

  /* Multi-beam internal cavity resonance reflections */
  .fp-cavity-beams {
    animation: fp-beams-pulse 2.2s ease-in-out infinite alternate;
  }

  @keyframes fp-beams-pulse {
    0% { opacity: 0.4; }
    100% { opacity: 1; filter: drop-shadow(0 0 2px #38bdf8); }
  }

  /* Ultra-sharp Fabry-Perot circular interference fringes */
  .fp-fringes {
    animation: fp-fringe-breathe 3s ease-in-out infinite alternate;
  }

  @keyframes fp-fringe-breathe {
    0% { transform: scale(0.96); filter: drop-shadow(0 0 1px #0284c7); }
    100% { transform: scale(1.04); filter: drop-shadow(0 0 3px #38bdf8); }
  }

  /* Partially silvered semi-transparent mirror plates */
  .fp-silver-plates {
    animation: fp-plate-gleam 4s ease-in-out infinite alternate;
  }

  @keyframes fp-plate-gleam {
    0% { stroke: #94a3b8; }
    100% { stroke: #ffffff; }
  }

  .fp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(56, 189, 248, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFabryPerotEtalon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fabryPerotEtalonStyles}</style>
      <div class="fp-box">
        <div class="fp-stage">
          <svg class="fp-svg" viewBox="0 0 76 72">
            <!-- 1897 Charles Fabry & Alfred Pérot Multi-Beam Interferometer Etalon -->
            <!-- Invar Fixed Spacer Barrel & Mounting Cell -->
            <rect x="6" y="16" width="30" height="40" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="0.8" />

            <!-- Twin Semi-Reflective Partially Silvered Glass Plates (Cavity Gap d) -->
            <g class="fp-silver-plates">
              <!-- Plate 1 (Left semi-mirror) -->
              <rect x="14" y="20" width="3" height="32" rx="0.8" fill="#0f172a" stroke-width="0.8" />
              <!-- High-Reflectance Silver/Dielectric Coating (R ~ 95%) -->
              <line x1="17" y1="21" x2="17" y2="51" stroke="#38bdf8" stroke-width="0.8" />

              <!-- Plate 2 (Right semi-mirror) -->
              <rect x="25" y="20" width="3" height="32" rx="0.8" fill="#0f172a" stroke-width="0.8" />
              <line x1="25" y1="21" x2="25" y2="51" stroke="#38bdf8" stroke-width="0.8" />
            </g>

            <!-- Multi-Beam Zig-Zag Internal Resonator Reflections -->
            <g class="fp-cavity-beams" stroke="#38bdf8" fill="none" stroke-width="0.6">
              <path d="M 4 36 L 17 36 L 25 31 L 17 26 L 25 21 L 36 21" />
              <path d="M 17 36 L 25 41 L 17 46 L 25 51 L 36 51" />
              <line x1="17" y1="36" x2="36" y2="36" stroke-width="1" stroke="#ffffff" />
            </g>

            <!-- Output Concentric Sharp Circular Fabry-Perot Haidinger Fringes (Right Field) -->
            <g class="fp-fringes" style="transform-origin: 56px 36px;">
              <!-- Outer Fringe Ring 3 -->
              <circle cx="56" cy="36" r="16" fill="none" stroke="#0284c7" stroke-width="1.2" opacity="0.6" />
              <!-- Middle Fringe Ring 2 (Hyperfine split) -->
              <circle cx="56" cy="36" r="11" fill="none" stroke="#38bdf8" stroke-width="1.4" opacity="0.8" />
              <circle cx="56" cy="36" r="10" fill="none" stroke="#7dd3fc" stroke-width="0.8" opacity="0.7" />
              <!-- Inner Fringe Ring 1 -->
              <circle cx="56" cy="36" r="5" fill="none" stroke="#f0f9ff" stroke-width="1.6" opacity="0.95" />
              <!-- Center Optical Axis Core -->
              <circle cx="56" cy="36" r="1" fill="#ffffff" />
            </g>
          </svg>
        </div>
        <div class="fp-label">FABRY-PÉROT 1897</div>
      </div>
    `;
  }
}

customElements.define('concept-fabry-perot-etalon', ConceptFabryPerotEtalon);
