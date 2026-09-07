const wollastonGoniometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1c1a17 0%, #060504 100%);
    border: 1.5px solid rgba(245, 158, 11, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wg-svg {
    width: 76px;
    height: 72px;
  }

  /* Graduated vertical brass limb wheel rotation */
  .wg-graduated-circle {
    transform-origin: 38px 36px;
    animation: wg-wheel-rotation 7s linear infinite;
  }

  @keyframes wg-wheel-rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Optical reflection off crystal facet alignment flash */
  .wg-signal-flash {
    animation: wg-facet-reflection 3.5s ease-in-out infinite alternate;
  }

  @keyframes wg-facet-reflection {
    0% { opacity: 0.1; stroke: #f59e0b; }
    50% { opacity: 1; stroke: #ffffff; filter: drop-shadow(0 0 3px #fbbf24); }
    100% { opacity: 0.2; stroke: #f59e0b; }
  }

  /* Sighting crosshair pulse */
  .wg-reticle {
    animation: wg-reticle-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes wg-reticle-pulse {
    0% { opacity: 0.5; }
    100% { opacity: 0.9; }
  }

  .wg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(245, 158, 11, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptWollastonGoniometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wollastonGoniometerStyles}</style>
      <div class="wg-box">
        <div class="wg-stage">
          <svg class="wg-svg" viewBox="0 0 76 72">
            <!-- 1809 William Hyde Wollaston Reflecting Contact Goniometer -->
            <!-- Heavy Triangular Brass Pillar Stand -->
            <polygon points="34,66 42,66 39,52 37,52" fill="#292524" stroke="#78716c" stroke-width="0.8" />
            <rect x="26" y="66" width="24" height="3" rx="1" fill="#1c1917" stroke="#b45309" stroke-width="0.8" />

            <!-- Graduated Vertical Circle Rim with 360-degree ticks -->
            <g class="wg-graduated-circle">
              <circle cx="38" cy="36" r="24" fill="#1e1814" stroke="#d97706" stroke-width="1.2" />
              <circle cx="38" cy="36" r="20" fill="none" stroke="#b45309" stroke-width="0.5" stroke-dasharray="1.5 2" />
              <!-- Degree Spoke Marks -->
              <line x1="38" y1="12" x2="38" y2="16" stroke="#fbbf24" stroke-width="0.8" />
              <line x1="38" y1="56" x2="38" y2="60" stroke="#fbbf24" stroke-width="0.8" />
              <line x1="14" y1="36" x2="18" y2="36" stroke="#fbbf24" stroke-width="0.8" />
              <line x1="58" y1="36" x2="62" y2="36" stroke="#fbbf24" stroke-width="0.8" />
              <line x1="21" y1="19" x2="24" y2="22" stroke="#fbbf24" stroke-width="0.6" />
              <line x1="55" y1="53" x2="52" y2="50" stroke="#fbbf24" stroke-width="0.6" />
              <line x1="21" y1="53" x2="24" y2="50" stroke="#fbbf24" stroke-width="0.6" />
              <line x1="55" y1="19" x2="52" y2="22" stroke="#fbbf24" stroke-width="0.6" />
            </g>

            <!-- Fixed Vernier Sighting Index Plate (Top) -->
            <path d="M 35 9 L 41 9 L 38 13 Z" fill="#fbbf24" stroke="#92400e" stroke-width="0.5" />

            <!-- Sighting Collimator Telescope Tube & Crosshair Ray -->
            <line x1="8" y1="36" x2="32" y2="36" stroke="#eab308" stroke-width="0.8" opacity="0.6" stroke-dasharray="2 1.5" />
            
            <!-- Central Wax-Mounted Faceted Mineral Crystal -->
            <polygon points="38,31 43,35 41,41 35,41 33,35" fill="#10b981" stroke="#a7f3d0" stroke-width="0.8" />

            <!-- Reflected Ray to Fixed Distant Sighting Horizon / Slit -->
            <line class="wg-signal-flash" x1="38" y1="36" x2="64" y2="14" stroke-width="1.2" />

            <!-- Central Brass Thumbwheel Pin -->
            <circle cx="38" cy="36" r="3" fill="#78350f" stroke="#fbbf24" stroke-width="0.8" />
          </svg>
        </div>
        <div class="wg-label">WOLLASTON 1809</div>
      </div>
    `;
  }
}

customElements.define('concept-wollaston-goniometer', ConceptWollastonGoniometer);
