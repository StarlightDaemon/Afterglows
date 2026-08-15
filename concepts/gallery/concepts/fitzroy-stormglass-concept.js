const fitzroyStormglassStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151e28 0%, #05080e 100%);
    border: 1.5px solid rgba(147, 197, 253, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(147, 197, 253, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-svg {
    width: 76px;
    height: 72px;
  }

  /* Camphor crystal dendrites growing and drifting in liquid */
  .sg-crystal-ferns {
    animation: sg-crystal-drift 5s ease-in-out infinite alternate;
  }

  @keyframes sg-crystal-drift {
    0% { transform: translateY(0px) rotate(-2deg); opacity: 0.7; }
    50% { opacity: 1; filter: drop-shadow(0 0 3px #e0f2fe); }
    100% { transform: translateY(-4px) rotate(2deg); opacity: 0.8; }
  }

  /* Floating feather crystals settling at the bottom */
  .sg-feathers {
    animation: sg-feather-shimmer 3s ease-in-out infinite alternate;
  }

  @keyframes sg-feather-shimmer {
    0% { opacity: 0.4; }
    100% { opacity: 0.95; filter: drop-shadow(0 0 2px #bae6fd); }
  }

  /* Liquid meniscus reflection */
  .sg-liquid-gleam {
    animation: sg-liquid-pulse 4s ease-in-out infinite alternate;
  }

  @keyframes sg-liquid-pulse {
    0% { opacity: 0.3; }
    100% { opacity: 0.7; }
  }

  .sg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(147, 197, 253, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFitzroyStormglass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fitzroyStormglassStyles}</style>
      <div class="sg-box">
        <div class="sg-stage">
          <svg class="sg-svg" viewBox="0 0 76 72">
            <!-- 1860 Admiral Robert FitzRoy Chemical Weather Storm Glass Phial -->
            <!-- Polished Brass Mounting Plate / Stand -->
            <rect x="22" y="6" width="32" height="60" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
            <!-- Engraved Forecast Scale Ticks on Brass Backing (Fair, Storm, Rain) -->
            <line x1="24" y1="18" x2="28" y2="18" stroke="#94a3b8" stroke-width="0.5" />
            <line x1="24" y1="32" x2="28" y2="32" stroke="#94a3b8" stroke-width="0.5" />
            <line x1="24" y1="46" x2="28" y2="46" stroke="#94a3b8" stroke-width="0.5" />

            <!-- Hermetically Sealed Cylindrical Glass Phial -->
            <rect x="30" y="8" width="16" height="52" rx="8" fill="#0c4a6e" fill-opacity="0.3" stroke="#93c5fd" stroke-width="1.2" />

            <!-- Hydroalcoholic Camphor Solution Fill Level Meniscus -->
            <path class="sg-liquid-gleam" d="M 31 16 Q 38 18 45 16" fill="none" stroke="#e0f2fe" stroke-width="0.8" />

            <!-- Growing Camphor / Nitrate Dendritic Fern Crystals -->
            <g class="sg-crystal-ferns" stroke="#ffffff" fill="none" stroke-width="0.7">
              <!-- Central Fern Frond Stem -->
              <path d="M 38 52 Q 37 38 39 26" />
              <!-- Feathery Side Needles -->
              <path d="M 38 46 L 33 42 M 38 46 L 43 42" />
              <path d="M 38 40 L 32 36 M 38 40 L 44 36" />
              <path d="M 38 34 L 34 30 M 38 34 L 42 30" />
              <path d="M 38 28 L 35 25 M 38 28 L 41 25" />
            </g>

            <!-- Bottom Precipitated Crystal Bed ("Turbid Liquid with Spots") -->
            <g class="sg-feathers" fill="#f0f9ff" stroke="#bae6fd" stroke-width="0.4">
              <polygon points="32,54 36,50 38,55 34,56" />
              <polygon points="40,55 42,49 45,54 42,56" />
              <circle cx="34" cy="48" r="0.8" />
              <circle cx="43" cy="46" r="0.8" />
              <circle cx="37" cy="49" r="0.7" />
            </g>

            <!-- Glass Reflection Specular Strip -->
            <line x1="33" y1="12" x2="33" y2="52" stroke="#ffffff" stroke-width="0.6" opacity="0.5" />
          </svg>
        </div>
        <div class="sg-label">FITZROY STORM GLASS</div>
      </div>
    `;
  }
}

customElements.define('concept-fitzroy-stormglass', ConceptFitzroyStormglass);
