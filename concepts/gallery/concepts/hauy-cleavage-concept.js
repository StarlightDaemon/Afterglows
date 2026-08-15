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

  /* Stepped calcite scalenohedron dissolving into fundamental rhombohedron */
  .hc-stepped-layers {
    animation: hc-cleavage-cycle 5s ease-in-out infinite alternate;
  }

  @keyframes hc-cleavage-cycle {
    0% { opacity: 0.9; stroke-width: 0.7; }
    50% { opacity: 0.3; stroke-width: 0.4; }
    100% { opacity: 0.9; stroke-width: 0.7; }
  }

  /* Central core primitive rhombohedral unit cell pulsing */
  .hc-primitive-rhomb {
    animation: hc-unit-glow 2.5s ease-in-out infinite alternate;
  }

  @keyframes hc-unit-glow {
    0% { fill: #c084fc; stroke: #f3e8ff; filter: drop-shadow(0 0 1px #a855f7); }
    100% { fill: #e879f9; stroke: #ffffff; filter: drop-shadow(0 0 4px #d946ef); }
  }

  /* Cleavage fracture plane flash */
  .hc-cleavage-line {
    animation: hc-fracture-gleam 2s ease-in-out infinite alternate;
  }

  @keyframes hc-fracture-gleam {
    0% { stroke: #d8b4fe; opacity: 0.3; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #c084fc); }
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
          <svg class="hc-svg" viewBox="0 0 76 72">
            <!-- 1784 René-Just Haüy Calcite Cleavage & Integral Molecule Theory -->
            <!-- Outer Stepped Scalenohedron Envelope ("Dogtooth Spar") -->
            <g class="hc-stepped-layers" fill="none" stroke="#a855f7">
              <!-- Tier 1 Top Peak -->
              <polygon points="38,8 44,14 38,18 32,14" stroke-width="0.7" fill="#3b0764" fill-opacity="0.3" />
              <!-- Tier 2 Stepped Layer -->
              <polygon points="38,14 48,22 38,28 28,22" stroke-width="0.7" fill="#3b0764" fill-opacity="0.25" />
              <!-- Tier 3 Stepped Layer -->
              <polygon points="38,20 54,30 38,38 22,30" stroke-width="0.7" fill="#3b0764" fill-opacity="0.2" />
              <!-- Tier 4 Stepped Layer -->
              <polygon points="38,26 60,38 38,48 16,38" stroke-width="0.7" fill="#3b0764" fill-opacity="0.15" />
              <!-- Lower Symmetrical Tiers -->
              <polygon points="38,48 54,56 38,64 22,56" stroke-width="0.7" fill="#3b0764" fill-opacity="0.2" />
            </g>

            <!-- Decapitated Cleavage Planes & Decrescent Sub-blocks -->
            <g class="hc-cleavage-line" fill="none" stroke-width="0.8">
              <line x1="16" y1="38" x2="60" y2="38" stroke-dasharray="2 1.5" />
              <line x1="22" y1="30" x2="54" y2="56" stroke-dasharray="2 1.5" />
              <line x1="22" y1="56" x2="54" y2="30" stroke-dasharray="2 1.5" />
            </g>

            <!-- Central Primitive Rhombohedron (Molécule Intégrante Core) -->
            <g>
              <!-- Top Face -->
              <polygon class="hc-primitive-rhomb" points="38,26 46,31 38,36 30,31" />
              <!-- Left Face -->
              <polygon points="30,31 38,36 38,47 30,42" fill="#9333ea" stroke="#d8b4fe" stroke-width="0.6" />
              <!-- Right Face -->
              <polygon points="38,36 46,31 46,42 38,47" fill="#7e22ce" stroke="#d8b4fe" stroke-width="0.6" />
            </g>
          </svg>
        </div>
        <div class="hc-label">HAÜY CLEAVAGE 1784</div>
      </div>
    `;
  }
}

customElements.define('concept-hauy-cleavage', ConceptHauyCleavage);
