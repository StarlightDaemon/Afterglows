const bunsenSpectroscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bs-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1814 0%, #060403 100%);
    border: 1.5px solid rgba(245, 158, 11, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bs-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bs-svg {
    width: 76px;
    height: 72px;
  }

  /* Bunsen burner flame excitation glow */
  .bs-flame-glow {
    animation: bs-flame-flicker 1.4s ease-in-out infinite alternate;
  }

  @keyframes bs-flame-flicker {
    0% { transform: scale(0.92); fill: #3b82f6; opacity: 0.7; }
    50% { fill: #eab308; opacity: 0.9; }
    100% { transform: scale(1.08); fill: #f97316; opacity: 1; filter: drop-shadow(0 0 3px #ea580c); }
  }

  /* Flint glass prism refraction rays */
  .bs-refracted-ray {
    animation: bs-ray-pulse 2.2s ease-in-out infinite alternate;
  }

  @keyframes bs-ray-pulse {
    0% { stroke: #fbbf24; opacity: 0.5; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #f59e0b); }
  }

  /* Millimeter scale tube projection reflection */
  .bs-scale-beam {
    animation: bs-scale-gleam 3s ease-in-out infinite alternate;
  }

  @keyframes bs-scale-gleam {
    0% { opacity: 0.3; stroke: #38bdf8; }
    100% { opacity: 0.8; stroke: #bae6fd; }
  }

  .bs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(245, 158, 11, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBunsenSpectroscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bunsenSpectroscopeStyles}</style>
      <div class="bs-box">
        <div class="bs-stage">
          <svg class="bs-svg" viewBox="0 0 76 72">
            <!-- 1859 Robert Bunsen & Gustav Kirchhoff Prism Spectroscope -->
            <!-- Central Heavy Cast Iron Pillar Stand -->
            <polygon points="34,66 42,66 39,52 37,52" fill="#292524" stroke="#78716c" stroke-width="0.8" />
            <rect x="28" y="66" width="20" height="3" rx="1" fill="#1c1917" stroke="#b45309" stroke-width="0.8" />

            <!-- Central Round Prism Table & Flint Glass Equilateral Prism -->
            <circle cx="38" cy="36" r="12" fill="#1c1917" stroke="#b45309" stroke-width="0.8" />
            <polygon points="38,28 47,43 29,43" fill="#0284c7" fill-opacity="0.4" stroke="#67e8f9" stroke-width="1.1" />

            <!-- Tube 1: Collimator Tube with Adjustable Slit (Left, 225° direction) -->
            <line x1="12" y1="48" x2="31" y2="39" stroke="#b45309" stroke-width="3" stroke-linecap="round" />
            <rect x="8" y="48" width="5" height="5" rx="1" fill="#78350f" stroke="#fbbf24" stroke-width="0.5" />

            <!-- Bunsen Burner Flame with Salt Sample Platinum Wire Bead -->
            <path class="bs-flame-glow" d="M 6 58 Q 2 50 6 44 Q 10 50 6 58 Z" />
            <line x1="10" y1="50" x2="6" y2="48" stroke="#cbd5e1" stroke-width="0.5" />

            <!-- Tube 2: Observing Telescope with Eyepiece (Right, 315° direction) -->
            <line x1="45" y1="39" x2="64" y2="48" stroke="#b45309" stroke-width="3" stroke-linecap="round" />
            <circle cx="65" cy="49" r="2.5" fill="#451a03" stroke="#f59e0b" stroke-width="0.6" />

            <!-- Tube 3: Scale Tube Projecting Engraved Millimeter Grid (Top) -->
            <line x1="38" y1="12" x2="38" y2="26" stroke="#b45309" stroke-width="2.5" stroke-linecap="round" />
            <circle cx="38" cy="10" r="3" fill="#451a03" stroke="#f59e0b" stroke-width="0.6" />

            <!-- Dispersed Spectrum Light Ray Path -->
            <line x1="12" y1="48" x2="34" y2="37" stroke="#fbbf24" stroke-width="0.8" stroke-dasharray="2 1.5" />
            <line class="bs-refracted-ray" x1="42" y1="37" x2="64" y2="48" stroke-width="1" />
            <!-- Scale Projection Beam -->
            <line class="bs-scale-beam" x1="38" y1="14" x2="42" y2="37" stroke-width="0.6" stroke-dasharray="1.5 1.5" />
          </svg>
        </div>
        <div class="bs-label">BUNSEN-KIRCHHOFF</div>
      </div>
    `;
  }
}

customElements.define('concept-bunsen-spectroscope', ConceptBunsenSpectroscope);
