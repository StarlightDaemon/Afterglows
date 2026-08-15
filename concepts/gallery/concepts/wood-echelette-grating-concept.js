const woodEcheletteGratingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .we-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a14 0%, #060503 100%);
    border: 1.5px solid rgba(251, 146, 60, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(251, 146, 60, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .we-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .we-svg {
    width: 76px;
    height: 72px;
  }

  /* Blazed sawtooth groove facet specular reflection gleam */
  .we-blaze-facets {
    animation: we-facet-shimmer 2.5s ease-in-out infinite alternate;
  }

  @keyframes we-facet-shimmer {
    0% { stroke: #ea580c; opacity: 0.6; }
    100% { stroke: #fdba74; opacity: 1; filter: drop-shadow(0 0 3px #f97316); }
  }

  /* Concentrated energy beam into blaze diffraction order m */
  .we-blazed-order {
    animation: we-order-glow 2s ease-in-out infinite alternate;
  }

  @keyframes we-order-glow {
    0% { stroke-width: 1.2; stroke: #fb923c; opacity: 0.7; }
    100% { stroke-width: 2; stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 4px #ea580c); }
  }

  /* Diamond carver stylus ruling angle */
  .we-carver-diamond {
    animation: we-diamond-tap 3s ease-in-out infinite alternate;
  }

  @keyframes we-diamond-tap {
    0% { transform: translateY(0); }
    100% { transform: translateY(1.5px); }
  }

  .we-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(251, 146, 60, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptWoodEcheletteGrating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${woodEcheletteGratingStyles}</style>
      <div class="we-box">
        <div class="we-stage">
          <svg class="we-svg" viewBox="0 0 76 72">
            <!-- 1910 Robert W. Wood Blazed Echelette Reflection Grating -->
            <!-- Thick Polished Copper/Aluminum Substrate Block -->
            <rect x="12" y="44" width="52" height="18" rx="2" fill="#1c1917" stroke="#78350f" stroke-width="0.9" />

            <!-- Asymmetric Sawtooth Ruled Micro-Grooves (Blaze Angle theta_B) -->
            <g class="we-blaze-facets" fill="#7c2d12" stroke-width="0.9">
              <polygon points="14,44 19,38 19,44" />
              <polygon points="19,44 24,38 24,44" />
              <polygon points="24,44 29,38 29,44" />
              <polygon points="29,44 34,38 34,44" />
              <polygon points="34,44 39,38 39,44" />
              <polygon points="39,44 44,38 44,44" />
              <polygon points="44,44 49,38 49,44" />
              <polygon points="49,44 54,38 54,44" />
              <polygon points="54,44 59,38 59,44" />
              <polygon points="59,44 64,38 64,44" />
            </g>

            <!-- Diamond Scribing Tool Edge (Ruling the Grooves) -->
            <g class="we-carver-diamond" style="transform-origin: 39px 24px;">
              <polygon points="39,36 36,26 42,26" fill="#38bdf8" stroke="#e0f2fe" stroke-width="0.6" />
              <rect x="37.5" y="16" width="3" height="10" fill="#64748b" />
            </g>

            <!-- Incident Broad Infrared Light Beam -->
            <line x1="20" y1="12" x2="34" y2="38" stroke="#fdba74" stroke-width="1.1" stroke-dasharray="2.5 1.5" />

            <!-- Blazed Order Reflection Concentration (80-90% efficiency in 1st order!) -->
            <line class="we-blazed-order" x1="34" y1="38" x2="56" y2="12" />

            <!-- Weak Un-Blazed Zero Order Specular Ray (Suppressed) -->
            <line x1="34" y1="38" x2="44" y2="12" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="1.5 2" opacity="0.4" />
          </svg>
        </div>
        <div class="we-label">WOOD ECHELETTE 1910</div>
      </div>
    `;
  }
}

customElements.define('concept-wood-echelette-grating', ConceptWoodEcheletteGrating);
