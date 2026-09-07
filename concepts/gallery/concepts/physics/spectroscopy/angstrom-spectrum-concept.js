const angstromSpectrumStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .as-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a1524 0%, #05040a 100%);
    border: 1.5px solid rgba(192, 132, 252, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(192, 132, 252, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .as-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .as-svg {
    width: 76px;
    height: 72px;
  }

  /* Wavelength grid scale lines (10^-10 m metric scale) */
  .as-angstrom-grid {
    animation: as-grid-glow 3s ease-in-out infinite alternate;
  }

  @keyframes as-grid-glow {
    0% { stroke: #7e22ce; opacity: 0.5; }
    100% { stroke: #c084fc; opacity: 0.9; filter: drop-shadow(0 0 2px #a855f7); }
  }

  /* Hydrogen Balmer spectral series lines emission flash */
  .as-balmer-series {
    animation: as-balmer-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes as-balmer-pulse {
    0% { opacity: 0.6; stroke-width: 1; }
    100% { opacity: 1; stroke-width: 1.6; filter: drop-shadow(0 0 4px #ffffff); }
  }

  /* Traveling spectral vernier crosshair scanning across wavelengths */
  .as-vernier-cursor {
    animation: as-cursor-sweep 3.6s ease-in-out infinite alternate;
  }

  @keyframes as-cursor-sweep {
    0% { transform: translateX(0); }
    100% { transform: translateX(45px); }
  }

  .as-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(216, 180, 254, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAngstromSpectrum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${angstromSpectrumStyles}</style>
      <div class="as-box">
        <div class="as-stage">
          <svg class="as-svg" viewBox="0 0 76 72">
            <!-- 1868 Anders Jonas Ångström Normal Solar Spectrum & 10^-10 m Standard -->
            <!-- Normal Solar Spectrum Atlas Plate Border -->
            <rect x="8" y="16" width="60" height="40" rx="2" fill="#0f0c16" stroke="#581c87" stroke-width="0.9" />

            <!-- Absolute Wavelength Scale Ticks (4000 Å ... 7000 Å) -->
            <g class="as-angstrom-grid" stroke-width="0.5">
              <line x1="14" y1="18" x2="14" y2="24" />
              <line x1="22" y1="18" x2="22" y2="22" />
              <line x1="30" y1="18" x2="30" y2="24" />
              <line x1="38" y1="18" x2="38" y2="22" />
              <line x1="46" y1="18" x2="46" y2="24" />
              <line x1="54" y1="18" x2="54" y2="22" />
              <line x1="62" y1="18" x2="62" y2="24" />
              <!-- Baseline Rule Line -->
              <line x1="12" y1="24" x2="64" y2="24" />
            </g>

            <!-- Numeric Scale Labels (Ångström units) -->
            <g font-size="4.5" font-family="monospace" fill="#c084fc" opacity="0.8">
              <text x="11" y="14">4000</text>
              <text x="27" y="14">5000</text>
              <text x="43" y="14">6000</text>
              <text x="58" y="14">7000</text>
            </g>

            <!-- Fundamental Hydrogen Balmer Lines (H-delta, H-gamma, H-beta, H-alpha) -->
            <g class="as-balmer-series">
              <!-- H-delta (4102 Å Violet) -->
              <line x1="16" y1="26" x2="16" y2="50" stroke="#c084fc" stroke-width="1.2" />
              <!-- H-gamma (4340 Å Blue-Violet) -->
              <line x1="21" y1="26" x2="21" y2="50" stroke="#818cf8" stroke-width="1.2" />
              <!-- H-beta (4861 Å Cyan-Green) -->
              <line x1="29" y1="26" x2="29" y2="50" stroke="#34d399" stroke-width="1.4" />
              <!-- H-alpha (6563 Å Bright Crimson-Red) -->
              <line x1="57" y1="26" x2="57" y2="50" stroke="#f43f5e" stroke-width="1.6" />
            </g>

            <!-- Telluric & Solar Multi-line Forest (Fine Absorption Splittings) -->
            <g stroke="#3b0764" stroke-width="0.5" opacity="0.7">
              <line x1="24" y1="28" x2="24" y2="48" />
              <line x1="26" y1="28" x2="26" y2="48" />
              <line x1="35" y1="28" x2="35" y2="48" />
              <line x1="37" y1="28" x2="37" y2="48" />
              <line x1="42" y1="28" x2="42" y2="48" />
              <line x1="48" y1="28" x2="48" y2="48" />
              <line x1="51" y1="28" x2="51" y2="48" />
            </g>

            <!-- Sweeping Vernier Cursor / Optical Micrometer -->
            <g class="as-vernier-cursor">
              <line x1="15" y1="16" x2="15" y2="56" stroke="#ffffff" stroke-width="1.4" filter="drop-shadow(0 0 3px #c084fc)" />
              <polygon points="15,16 12,11 18,11" fill="#f43f5e" />
              <polygon points="15,56 12,61 18,61" fill="#f43f5e" />
              <circle cx="15" cy="38" r="2" fill="#ffd600" />
            </g>
          </svg>
        </div>
        <div class="as-label">ÅNGSTRÖM 10⁻¹⁰m</div>
      </div>
    `;
  }
}

customElements.define('concept-angstrom-spectrum', ConceptAngstromSpectrum);
