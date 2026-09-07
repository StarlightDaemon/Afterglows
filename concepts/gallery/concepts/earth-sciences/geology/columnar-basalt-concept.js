const columnarBasaltStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #1c1917 0%, #09090b 100%);
    border: 1.5px solid rgba(251, 146, 60, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(251, 146, 60, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cb-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cb-svg {
    width: 76px;
    height: 72px;
  }

  /* Thermal contraction joint fissures */
  .cb-fissures {
    stroke: #ff5722;
    stroke-width: 1.2;
  }

  /* Stepped Hexagonal Column Vertical Settling Shear */
  .cb-col-1 { animation: cb-column-settle-1 3.5s ease-in-out infinite alternate; }
  .cb-col-2 { animation: cb-column-settle-2 3.5s ease-in-out infinite alternate; }
  .cb-col-3 { animation: cb-column-settle-3 3.5s ease-in-out infinite alternate; }
  .cb-col-4 { animation: cb-column-settle-4 3.5s ease-in-out infinite alternate; }

  @keyframes cb-column-settle-1 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-4px); }
  }

  @keyframes cb-column-settle-2 {
    0% { transform: translateY(0); }
    100% { transform: translateY(5px); }
  }

  @keyframes cb-column-settle-3 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-5px); }
  }

  @keyframes cb-column-settle-4 {
    0% { transform: translateY(0); }
    100% { transform: translateY(4px); }
  }

  .cb-columns polygon {
    stroke: #57534e;
    stroke-width: 0.8;
  }

  .cb-p1 { fill: #292524; }
  .cb-p2 { fill: #383532; }
  .cb-p3 { fill: #44403c; }

  /* Ascending Molten Magma Surge Pulses in fissure joints */
  .cb-magma-pulse {
    position: absolute;
    width: 4px;
    height: 6px;
    border-radius: 2px;
    background: #ffffff;
    box-shadow: 0 0 6px #ff5722, 0 0 12px #ff9100;
    z-index: 5;
  }

  .mp1 { left: 32px; animation: cb-magma-up-1 2.2s linear infinite; }
  .mp2 { left: 56px; animation: cb-magma-up-2 2.2s linear infinite; animation-delay: 1.1s; }

  @keyframes cb-magma-up-1 {
    0% { transform: translateY(48px) scale(0.6); opacity: 0; }
    30% { opacity: 1; transform: translateY(32px) scale(1.2); }
    80% { opacity: 1; transform: translateY(14px) scale(0.9); }
    100% { transform: translateY(0px) scale(0.4); opacity: 0; }
  }

  @keyframes cb-magma-up-2 {
    0% { transform: translateY(52px) scale(0.6); opacity: 0; }
    30% { opacity: 1; transform: translateY(36px) scale(1.2); }
    80% { opacity: 1; transform: translateY(18px) scale(0.9); }
    100% { transform: translateY(4px) scale(0.4); opacity: 0; }
  }

  /* Molten thermal base */
  .cb-magma-base {
    fill: url(#cb-magma-grad);
    animation: cb-base-glow 2s ease-in-out infinite alternate;
  }

  @keyframes cb-base-glow {
    0% { opacity: 0.7; }
    100% { opacity: 1; filter: drop-shadow(0 0 6px #ff5722); }
  }

  .cb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(251, 146, 60, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptColumnarBasalt extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${columnarBasaltStyles}</style>
      <div class="cb-box">
        <div class="cb-stage">
          <div class="cb-magma-pulse mp1"></div>
          <div class="cb-magma-pulse mp2"></div>

          <svg class="cb-svg" viewBox="0 0 76 72">
            <defs>
              <linearGradient id="cb-magma-grad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ff3d00" stop-opacity="0.9" />
                <stop offset="100%" stop-color="#ff9100" stop-opacity="0.2" />
              </linearGradient>
            </defs>

            <!-- Lower Magma Reservoir Bed -->
            <rect class="cb-magma-base" x="10" y="58" width="56" height="8" rx="2" />

            <!-- Hexagonal Basalt Columns Structure -->
            <g class="cb-columns">
              <!-- Column 1 (Left low) -->
              <g class="cb-col-1">
                <polygon class="cb-p1" points="14,40 22,36 30,40 30,60 14,60" />
                <polygon class="cb-p3" points="14,40 22,36 30,40 22,44" />
              </g>

              <!-- Column 2 (Tall Center-Left) -->
              <g class="cb-col-2">
                <polygon class="cb-p2" points="26,24 38,18 50,24 50,60 26,60" />
                <polygon class="cb-p3" points="26,24 38,18 50,24 38,30" />
              </g>

              <!-- Column 3 (Mid-Height Right) -->
              <g class="cb-col-3">
                <polygon class="cb-p1" points="46,32 56,27 66,32 66,60 46,60" />
                <polygon class="cb-p3" points="46,32 56,27 66,32 56,37" />
              </g>

              <!-- Column 4 (Stepped Front Center) -->
              <g class="cb-col-4">
                <polygon class="cb-p2" points="30,42 42,37 54,42 54,62 30,62" />
                <polygon class="cb-p3" points="30,42 42,37 54,42 42,47" />
              </g>
            </g>

            <!-- Glowing Thermal Contraction Joint Lines (Hexagonal cooling fissures) -->
            <g class="cb-fissures" fill="none">
              <line x1="26" y1="24" x2="26" y2="60" />
              <line x1="50" y1="24" x2="50" y2="60" />
              <line x1="38" y1="30" x2="38" y2="37" />
              <line x1="30" y1="42" x2="30" y2="62" />
              <line x1="54" y1="42" x2="54" y2="62" />
              <line x1="42" y1="47" x2="42" y2="62" />
            </g>
          </svg>
        </div>
        <div class="cb-label">COLUMNAR BASALT</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-columnar-basalt')) {
  customElements.define('concept-columnar-basalt', ConceptColumnarBasalt);
}
