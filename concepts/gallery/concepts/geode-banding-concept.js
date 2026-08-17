const geodeBandingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e102d 0%, #08030f 100%);
    border: 1.5px solid rgba(206, 147, 216, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(206, 147, 216, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gb-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gb-svg {
    width: 76px;
    height: 72px;
  }

  /* Rhythmic hydrothermal agate growth wave expansion */
  .gb-growth-layer-1 {
    transform-origin: 38px 36px;
    animation: gb-layer-expand 3s ease-in-out infinite alternate;
  }

  .gb-growth-layer-2 {
    transform-origin: 38px 36px;
    animation: gb-layer-expand 3s ease-in-out infinite alternate;
    animation-delay: -1.5s;
  }

  @keyframes gb-layer-expand {
    0% { transform: scale(0.92); }
    100% { transform: scale(1.06); }
  }

  /* Concentric agate rings */
  .gb-ring-1 { fill: #4a148c; stroke: #7b1fa2; stroke-width: 1.2; }
  .gb-ring-2 { fill: #6a1b9a; stroke: #9c27b0; stroke-width: 1.2; }
  .gb-ring-3 { fill: #8e24aa; stroke: #ba68c8; stroke-width: 1.2; }
  .gb-ring-4 { fill: #ab47bc; stroke: #ce93d8; stroke-width: 1.2; }

  /* Central amethyst drusy crystal active growth & sparkle */
  .gb-amethyst {
    transform-origin: 38px 36px;
    animation: gb-druse-sprout 2.2s ease-in-out infinite alternate;
  }

  @keyframes gb-druse-sprout {
    0% { transform: scale(0.75); }
    100% { transform: scale(1.35); }
  }

  .gb-amethyst polygon {
    fill: #e1bee7;
    stroke: #ffffff;
    stroke-width: 0.8;
    filter: drop-shadow(0 0 3px #e040fb);
  }

  /* Hydrothermal circulating mineral fluid spark */
  .gb-fluid-spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #e040fb;
    z-index: 6;
    animation: gb-fluid-orbit 4s linear infinite;
  }

  @keyframes gb-fluid-orbit {
    0% { transform: rotate(0deg) translate(22px) rotate(0deg); }
    100% { transform: rotate(360deg) translate(22px) rotate(-360deg); }
  }

  /* Mineral fluid infiltration rind */
  .gb-crust {
    fill: #3e2723;
    stroke: #795548;
    stroke-width: 1.5;
  }

  .gb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(206, 147, 216, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGeodeBanding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${geodeBandingStyles}</style>
      <div class="gb-box">
        <div class="gb-stage">
          <div class="gb-fluid-spark"></div>

          <svg class="gb-svg" viewBox="0 0 76 72">
            <!-- Outer Basaltic Weathered Host Rock Rind -->
            <path class="gb-crust" d="M 38 6 C 58 6, 70 20, 68 38 C 66 56, 54 66, 38 66 C 20 66, 8 54, 8 36 C 8 18, 20 6, 38 6 Z" />

            <g class="gb-growth-layer-1">
              <!-- Agate Band 1 (Deep outer chalcedony) -->
              <path class="gb-ring-1" d="M 38 10 C 54 10, 64 22, 62 38 C 60 52, 50 62, 38 62 C 24 62, 14 50, 14 36 C 14 20, 24 10, 38 10 Z" />
              <!-- Agate Band 2 (Mid violet layer) -->
              <path class="gb-ring-2" d="M 38 14 C 50 14, 58 24, 56 38 C 54 48, 46 58, 38 58 C 28 58, 20 46, 20 36 C 20 22, 28 14, 38 14 Z" />
            </g>

            <g class="gb-growth-layer-2">
              <!-- Agate Band 3 (Light lavender lace layer) -->
              <path class="gb-ring-3" d="M 38 18 C 46 18, 52 26, 50 38 C 48 44, 42 54, 38 54 C 32 54, 26 42, 26 36 C 26 24, 32 18, 38 18 Z" />
              <!-- Agate Band 4 (White / clear quartz buffer) -->
              <path class="gb-ring-4" d="M 38 22 C 43 22, 47 28, 46 38 C 45 42, 40 50, 38 50 C 35 50, 31 40, 31 36 C 31 26, 35 22, 38 22 Z" />
            </g>

            <!-- Central Hollow Vug (Dark crystalline cavity) -->
            <ellipse cx="38" cy="36" rx="6" ry="7" fill="#0d0414" />

            <!-- Inward-Facing Amethyst Quartz Druse Sprouting Terminations -->
            <g class="gb-amethyst">
              <polygon points="38,29 36,33 40,33" />
              <polygon points="38,43 36,39 40,39" />
              <polygon points="32,36 35,34 35,38" />
              <polygon points="44,36 41,34 41,38" />
              <polygon points="34,31 37,33 35,35" />
              <polygon points="42,31 39,33 41,35" />
              <polygon points="34,41 37,39 35,37" />
              <polygon points="42,41 39,39 41,37" />
            </g>
          </svg>
        </div>
        <div class="gb-label">AGATE GEODE MATRIX</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-geode-banding')) {
  customElements.define('concept-geode-banding', ConceptGeodeBanding);
}
