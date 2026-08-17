const fraunhoferLinesStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fl-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a1622 0%, #06050a 100%);
    border: 1.5px solid rgba(168, 85, 247, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(168, 85, 247, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fl-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fl-svg {
    width: 76px;
    height: 72px;
  }

  /* Continuous prismatic rainbow dispersion ribbon */
  .fl-rainbow-band {
    animation: fl-rainbow-shimmer 2.4s ease-in-out infinite alternate;
  }

  @keyframes fl-rainbow-shimmer {
    0% { filter: drop-shadow(0 0 2px #a855f7); opacity: 0.85; }
    100% { filter: drop-shadow(0 0 6px #ec4899); opacity: 1; }
  }

  /* Dark solar absorption Fraunhofer lines */
  .fl-dark-line {
    animation: fl-line-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes fl-line-pulse {
    0% { opacity: 0.6; }
    100% { opacity: 1; stroke-width: 1; }
  }

  /* Sodium D double-line split indicator */
  .fl-d-doublet {
    animation: fl-doublet-gleam 2s ease-in-out infinite alternate;
  }

  @keyframes fl-doublet-gleam {
    0% { stroke: #fbbf24; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 4px #f59e0b); }
  }

  /* Measuring reticle actively scanning the spectrum line by line */
  .fl-scanner {
    animation: fl-scan 2.4s ease-in-out infinite alternate;
  }

  @keyframes fl-scan {
    0% { transform: translateX(-36px); }
    100% { transform: translateX(18px); }
  }

  /* Incident solar light beam */
  .fl-solar-beam {
    position: absolute;
    top: 6px;
    left: 8px;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #ffffff, transparent);
    box-shadow: 0 0 6px #ffffff;
    opacity: 0.8;
  }

  .fl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(216, 180, 254, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFraunhoferLines extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fraunhoferLinesStyles}</style>
      <div class="fl-box">
        <div class="fl-stage">
          <div class="fl-solar-beam"></div>

          <svg class="fl-svg" viewBox="0 0 76 72">
            <!-- 1814 Joseph von Fraunhofer Solar Absorption Spectrum -->
            <defs>
              <linearGradient id="fl-solar-spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#7e22ce" />
                <stop offset="18%" stop-color="#3b82f6" />
                <stop offset="35%" stop-color="#06b6d4" />
                <stop offset="50%" stop-color="#22c55e" />
                <stop offset="68%" stop-color="#eab308" />
                <stop offset="82%" stop-color="#f97316" />
                <stop offset="100%" stop-color="#ef4444" />
              </linearGradient>
            </defs>

            <!-- Dispersion Spectrum Ribbon Frame -->
            <rect x="8" y="24" width="60" height="24" rx="2" fill="#030712" stroke="#475569" stroke-width="0.8" />

            <!-- Continuous Solar Emission Background Gradient -->
            <rect class="fl-rainbow-band" x="10" y="26" width="56" height="20" rx="1" fill="url(#fl-solar-spectrum)" />

            <!-- Dark Fraunhofer Absorption Lines -->
            <g class="fl-dark-line" stroke="#030712" fill="none">
              <!-- Line A (Atmospheric O2 - Deep Red 759nm) -->
              <line x1="63" y1="26" x2="63" y2="46" stroke-width="1.3" />
              <!-- Line B (O2 - 687nm) -->
              <line x1="59" y1="26" x2="59" y2="46" stroke-width="0.9" />
              <!-- Line C (Hydrogen H-alpha - 656nm) -->
              <line x1="55" y1="26" x2="55" y2="46" stroke-width="1.2" />
              <!-- Line D (Sodium D1 & D2 Doublet - 589nm) -->
              <line x1="47" y1="26" x2="47" y2="46" stroke-width="0.8" />
              <line x1="48" y1="26" x2="48" y2="46" stroke-width="0.8" />
              <!-- Line E (Iron Fe - 527nm) -->
              <line x1="39" y1="26" x2="39" y2="46" stroke-width="0.9" />
              <!-- Line b (Magnesium triplet - 517nm) -->
              <line x1="36" y1="26" x2="36" y2="46" stroke-width="1.2" />
              <!-- Line F (Hydrogen H-beta - 486nm) -->
              <line x1="30" y1="26" x2="30" y2="46" stroke-width="1.3" />
              <!-- Line G (Calcium & Iron - 431nm) -->
              <line x1="22" y1="26" x2="22" y2="46" stroke-width="1" />
              <!-- Line H & K (Calcium Ca II - 397nm & 393nm) -->
              <line x1="14" y1="26" x2="14" y2="46" stroke-width="1.4" />
              <line x1="12" y1="26" x2="12" y2="46" stroke-width="1.6" />
            </g>

            <!-- Letter Indicators above Spectrum Bar -->
            <g font-size="5" font-family="monospace" fill="#e2e8f0" opacity="0.85">
              <text x="11" y="20">H</text>
              <text x="21" y="20">G</text>
              <text x="29" y="20">F</text>
              <text x="35" y="20">b</text>
              <text x="46" y="20">D</text>
              <text x="54" y="20">C</text>
              <text x="62" y="20">A</text>
            </g>

            <!-- Precision Sighting Crosshair Reticle scanning across the band -->
            <g class="fl-scanner">
              <line class="fl-d-doublet" x1="47.5" y1="10" x2="47.5" y2="48" stroke-width="1.6" />
              <polygon points="45,10 50,10 47.5,15" fill="#fbbf24" />
            </g>
          </svg>
        </div>
        <div class="fl-label">FRAUNHOFER 1814</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fraunhofer-lines')) {
  customElements.define('concept-fraunhofer-lines', ConceptFraunhoferLines);
}
