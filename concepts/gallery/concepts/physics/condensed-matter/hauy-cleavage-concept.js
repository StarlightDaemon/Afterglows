const hauyCleavageStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1424 0%, #08040a 100%);
    border: 1.5px solid rgba(216, 180, 254, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(216, 180, 254, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hc-svg {
    width: 76px;
    height: 72px;
  }

  /* Stepped outer calcite scalenohedron facets shearing apart along cleavage planes */
  .hc-stepped-left {
    transform-origin: 38px 36px;
    animation: hc-cleave-left 3.2s ease-in-out infinite alternate;
  }

  .hc-stepped-right {
    transform-origin: 38px 36px;
    animation: hc-cleave-right 3.2s ease-in-out infinite alternate;
  }

  @keyframes hc-cleave-left {
    0% { transform: translate(0, 0); opacity: 1; }
    100% { transform: translate(-8px, -4px); opacity: 0.5; }
  }

  @keyframes hc-cleave-right {
    0% { transform: translate(0, 0); opacity: 1; }
    100% { transform: translate(8px, 4px); opacity: 0.5; }
  }

  /* Central core primitive rhombohedral unit cell (Molécule Intégrante) */
  .hc-primitive-rhomb-group {
    transform-origin: 38px 36px;
    animation: hc-unit-emerge 3.2s ease-in-out infinite alternate;
  }

  @keyframes hc-unit-emerge {
    0% { transform: scale(0.75) rotate(-6deg); }
    100% { transform: scale(1.35) rotate(6deg); filter: drop-shadow(0 0 8px #d946ef); }
  }

  /* Cleavage fracture spark */
  .hc-cleave-spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #c084fc;
    z-index: 6;
    animation: hc-spark-slide 1.6s linear infinite;
  }

  @keyframes hc-spark-slide {
    0% { transform: translate(-22px, -12px); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(22px, 12px); opacity: 0; }
  }

  .hc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(216, 180, 254, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHauyCleavage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hauyCleavageStyles}</style>
      <div class="hc-box">
        <div class="hc-stage">
          <div class="hc-cleave-spark"></div>

          <svg class="hc-svg" viewBox="0 0 76 72">
            <!-- 1784 René-Just Haüy Calcite Cleavage & Integral Molecule Theory -->
            <!-- Outer Stepped Scalenohedron Envelope Layers with Cleaving Separation -->
            <g class="hc-stepped-left" fill="#3b0764" fill-opacity="0.3" stroke="#c084fc" stroke-width="1">
              <polygon points="38,8 32,14 38,18 38,8" />
              <polygon points="38,14 28,22 38,28 38,14" />
              <polygon points="38,20 22,30 38,38 38,20" />
              <polygon points="38,26 16,38 38,48 38,26" />
              <polygon points="38,48 22,56 38,64 38,48" />
            </g>

            <g class="hc-stepped-right" fill="#3b0764" fill-opacity="0.3" stroke="#c084fc" stroke-width="1">
              <polygon points="38,8 44,14 38,18 38,8" />
              <polygon points="38,14 48,22 38,28 38,14" />
              <polygon points="38,20 54,30 38,38 38,20" />
              <polygon points="38,26 60,38 38,48 38,26" />
              <polygon points="38,48 54,56 38,64 38,48" />
            </g>

            <!-- Decapitated Cleavage Planes -->
            <g stroke="#ffffff" stroke-width="1.2" stroke-dasharray="3 2">
              <line x1="16" y1="38" x2="60" y2="38" />
              <line x1="22" y1="30" x2="54" y2="56" />
            </g>

            <!-- Central Primitive Rhombohedron (Molécule Intégrante Core) with Dynamic Emergence -->
            <g class="hc-primitive-rhomb-group">
              <!-- Top Face -->
              <polygon points="38,26 46,31 38,36 30,31" fill="#e879f9" stroke="#ffffff" stroke-width="1" />
              <!-- Left Face -->
              <polygon points="30,31 38,36 38,47 30,42" fill="#9333ea" stroke="#d8b4fe" stroke-width="1" />
              <!-- Right Face -->
              <polygon points="38,36 46,31 46,42 38,47" fill="#7e22ce" stroke="#d8b4fe" stroke-width="1" />
            </g>
          </svg>
        </div>
        <div class="hc-label">HAÜY CLEAVAGE 1784</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-hauy-cleavage')) {
  customElements.define('concept-hauy-cleavage', ConceptHauyCleavage);
}
