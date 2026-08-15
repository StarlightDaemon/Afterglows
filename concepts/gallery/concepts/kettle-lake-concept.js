const kettleLakeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .kl-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d2830 0%, #030d12 100%);
    border: 1.5px solid rgba(77, 208, 225, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(77, 208, 225, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kl-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kl-svg {
    width: 76px;
    height: 72px;
  }

  /* Glacial turquoise meltwater pool shimmer */
  .kl-water {
    fill: #00bcd4;
    animation: kl-water-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes kl-water-pulse {
    0% { filter: drop-shadow(0 0 2px #00838f); opacity: 0.8; }
    100% { filter: drop-shadow(0 0 8px #4dd0e1); opacity: 1; }
  }

  /* Melting subterranean ice core shrinking */
  .kl-ice-core {
    fill: #e0f7fa;
    stroke: #b2ebf2;
    stroke-width: 0.8;
    animation: kl-ice-melt 4s ease-in-out infinite alternate;
  }

  @keyframes kl-ice-melt {
    0% { transform: scale(1.1); opacity: 0.9; }
    100% { transform: scale(0.75); opacity: 0.4; }
  }

  /* Glacial outwash gravel layers */
  .kl-moraine {
    fill: #455a64;
    stroke: #78909c;
    stroke-width: 1;
  }

  .kl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(77, 208, 225, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKettleLake extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kettleLakeStyles}</style>
      <div class="kl-box">
        <div class="kl-stage">
          <svg class="kl-svg" viewBox="0 0 76 72">
            <!-- Glacial Outwash Plain Plain Profile (Sand & Gravel Moraine) -->
            <path class="kl-moraine" d="M 8 36 L 24 36 L 30 54 L 46 54 L 52 36 L 68 36 L 68 62 L 8 62 Z" />

            <!-- Stratified Outwash Gravel Layers (Sediment bedding lines) -->
            <line x1="8" y1="44" x2="22" y2="44" stroke="#90a4ae" stroke-width="0.8" stroke-dasharray="2 2" />
            <line x1="54" y1="44" x2="68" y2="44" stroke="#90a4ae" stroke-width="0.8" stroke-dasharray="2 2" />
            <line x1="8" y1="52" x2="26" y2="52" stroke="#90a4ae" stroke-width="0.8" stroke-dasharray="2 2" />
            <line x1="50" y1="52" x2="68" y2="52" stroke="#90a4ae" stroke-width="0.8" stroke-dasharray="2 2" />

            <!-- Melting Detached Glacier Dead-Ice Block -->
            <g transform="translate(38, 54)">
              <polygon class="kl-ice-core" points="0,-12 8,-2 4,6 -4,6 -8,-2" />
            </g>

            <!-- Turquoise Kettle Lake Meltwater Pool filling the collapse basin -->
            <ellipse class="kl-water" cx="38" cy="46" rx="14" ry="4.5" />
            <ellipse cx="38" cy="46" rx="9" ry="2.2" fill="#e0f7fa" opacity="0.6" />

            <!-- Calving Melt Droplets -->
            <circle cx="34" cy="48" r="0.8" fill="#ffffff" />
            <circle cx="42" cy="48" r="0.8" fill="#ffffff" />

            <!-- Kettle Rim Topography Flanks -->
            <line x1="24" y1="36" x2="30" y2="54" stroke="#b0bec5" stroke-width="1.2" />
            <line x1="52" y1="36" x2="46" y2="54" stroke="#b0bec5" stroke-width="1.2" />
          </svg>
        </div>
        <div class="kl-label">GLACIAL KETTLE LAKE</div>
      </div>
    `;
  }
}

customElements.define('concept-kettle-lake', ConceptKettleLake);
