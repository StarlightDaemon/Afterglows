const spectroheliographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sh-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #281615 0%, #080303 100%);
    border: 1.5px solid rgba(255, 82, 82, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 82, 82, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sh-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sh-svg {
    width: 76px;
    height: 72px;
  }

  /* Dual mechanical scanning slits moving in exact synchronism across solar disc */
  .sh-scanning-slit-1 {
    animation: sh-scan-motion 3.2s ease-in-out infinite alternate;
  }

  .sh-scanning-slit-2 {
    animation: sh-scan-motion 3.2s ease-in-out infinite alternate;
  }

  @keyframes sh-scan-motion {
    0% { transform: translateX(-10px); }
    100% { transform: translateX(10px); }
  }

  /* Hydrogen-Alpha 656.3nm deep monochromatic red emission flare */
  .sh-halpha-core {
    animation: sh-flare-radiate 1.8s ease-in-out infinite alternate;
    transform-origin: 22px 34px;
  }

  @keyframes sh-flare-radiate {
    0% { transform: scale(0.95); opacity: 0.7; }
    100% { transform: scale(1.08); opacity: 1; filter: drop-shadow(0 0 4px #ff1744); }
  }

  /* Diffraction grating dispersion spectrum rainbow band */
  .sh-diffraction-grating {
    animation: sh-grating-glow 2s ease-in-out infinite alternate;
  }

  @keyframes sh-grating-glow {
    0% { stroke: #ffd700; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #ff5252); }
  }

  .sh-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 82, 82, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSpectroheliograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spectroheliographStyles}</style>
      <div class="sh-box">
        <div class="sh-stage">
          <svg class="sh-svg" viewBox="0 0 76 72">
            <!-- George Ellery Hale 1892 Monochromatic Spectroheliograph Optical Instrument -->
            <!-- Incident Full-Spectrum Sun Image (Left) -->
            <g class="sh-halpha-core">
              <!-- Solar Photosphere Disc -->
              <circle cx="22" cy="34" r="14" fill="#ff8a80" stroke="#ff1744" stroke-width="1" />
              <!-- Solar Flocculi / Hydrogen Prominence Tendrils & Sunspots -->
              <circle cx="18" cy="30" r="1.5" fill="#b71c1c" />
              <circle cx="26" cy="36" r="2" fill="#b71c1c" />
              <path d="M 22 20 Q 28 16 34 22" fill="none" stroke="#ff1744" stroke-width="1.2" />
            </g>

            <!-- First Entrance Slit (Scanning across solar image) -->
            <g class="sh-scanning-slit-1">
              <rect x="21" y="16" width="2" height="36" rx="0.5" fill="#ffd700" stroke="#ffeb3b" stroke-width="0.5" />
              <line x1="22" y1="18" x2="22" y2="50" stroke="#ffffff" stroke-width="0.6" />
            </g>

            <!-- Rowland Concave Diffraction Grating / Dispersion Prisms (Center) -->
            <g class="sh-diffraction-grating">
              <polygon points="38,20 46,26 38,32" fill="#37474f" stroke="#ffd700" stroke-width="0.8" />
              <!-- Grating Ruled Lines (15,000 lines/inch) -->
              <line x1="40" y1="22" x2="40" y2="30" stroke="#00e5ff" stroke-width="0.6" stroke-dasharray="0.8 0.8" />
            </g>

            <!-- Second Exit Slit (Isolating strictly the Hydrogen-Alpha 656.3nm Fraunhofer line) -->
            <g class="sh-scanning-slit-2">
              <rect x="53" y="16" width="2" height="36" rx="0.5" fill="#ffd700" stroke="#ffeb3b" stroke-width="0.5" />
              <line x1="54" y1="18" x2="54" y2="50" stroke="#ff1744" stroke-width="1" />
            </g>

            <!-- Photographic Glass Plate Recording Complete Monochromatic Solar Atmosphere (Right) -->
            <rect x="58" y="18" width="12" height="32" rx="1" fill="#1e1e24" stroke="#ff8a80" stroke-width="0.8" />
            <!-- Built-up Monochromatic H-Alpha Image Strip -->
            <circle cx="64" cy="34" r="5" fill="#b71c1c" stroke="#ff1744" stroke-width="0.6" />

            <!-- Fraunhofer H-Alpha Wavelength Annotation -->
            <text x="38" y="62" font-family="monospace" font-size="3" fill="#ff5252" text-anchor="middle">HYDROGEN-ALPHA 656.3nm</text>
          </svg>
        </div>
        <div class="sh-label">SPECTROHELIOGRAPH</div>
      </div>
    `;
  }
}

customElements.define('concept-spectroheliograph', ConceptSpectroheliograph);
