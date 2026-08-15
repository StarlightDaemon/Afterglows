const laueDiffractionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ld-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161a22 0%, #06080c 100%);
    border: 1.5px solid rgba(80, 200, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(80, 200, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ld-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ld-svg {
    width: 76px;
    height: 72px;
  }

  /* Central collimated X-ray beam pulse */
  .ld-primary-beam {
    animation: ld-beam-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes ld-beam-pulse {
    0% { r: 1.8px; opacity: 0.8; fill: #ffffff; }
    100% { r: 2.8px; opacity: 1; fill: #a5f3fc; filter: drop-shadow(0 0 3px #38bdf8); }
  }

  /* 4-fold Laue diffraction spot rings flashing with crystal lattice resonance */
  .ld-spot-inner {
    animation: ld-spots-glow 2.4s ease-in-out infinite alternate;
  }

  .ld-spot-outer {
    animation: ld-spots-glow-outer 3.2s ease-in-out infinite alternate;
  }

  @keyframes ld-spots-glow {
    0% { opacity: 0.35; filter: drop-shadow(0 0 1px #0284c7); }
    50% { opacity: 0.95; filter: drop-shadow(0 0 2.5px #38bdf8); }
    100% { opacity: 0.5; filter: drop-shadow(0 0 1px #0284c7); }
  }

  @keyframes ld-spots-glow-outer {
    0% { opacity: 0.2; }
    50% { opacity: 0.85; filter: drop-shadow(0 0 2px #7dd3fc); }
    100% { opacity: 0.3; }
  }

  /* Crystal lattice reflection cones */
  .ld-lattice-grid {
    animation: ld-lattice-spin 12s linear infinite;
    transform-origin: 38px 36px;
  }

  @keyframes ld-lattice-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .ld-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(125, 211, 252, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLaueDiffraction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${laueDiffractionStyles}</style>
      <div class="ld-box">
        <div class="ld-stage">
          <svg class="ld-svg" viewBox="0 0 76 72">
            <!-- 1912 Max von Laue X-Ray Crystal Diffraction Photographic Plate -->
            <!-- Photographic Film Plate Frame -->
            <rect x="8" y="6" width="60" height="60" rx="3" fill="#0d1117" stroke="#1f2937" stroke-width="1.2" />
            <circle cx="38" cy="36" r="28" fill="none" stroke="#334155" stroke-dasharray="1 3" stroke-width="0.6" />
            <circle cx="38" cy="36" r="18" fill="none" stroke="#334155" stroke-dasharray="1 3" stroke-width="0.6" />

            <!-- Rotating Crystal Orientation Guides -->
            <g class="ld-lattice-grid" stroke="#0ea5e9" stroke-width="0.4" opacity="0.3">
              <line x1="38" y1="8" x2="38" y2="64" stroke-dasharray="2 2" />
              <line x1="10" y1="36" x2="66" y2="36" stroke-dasharray="2 2" />
              <line x1="18" y1="16" x2="58" y2="56" stroke-dasharray="2 2" />
              <line x1="18" y1="56" x2="58" y2="16" stroke-dasharray="2 2" />
            </g>

            <!-- Inner 4-fold Laue Diffraction Spots (Zincblende 100 face) -->
            <g class="ld-spot-inner" fill="#38bdf8">
              <circle cx="38" cy="22" r="1.4" />
              <circle cx="38" cy="50" r="1.4" />
              <circle cx="24" cy="36" r="1.4" />
              <circle cx="52" cy="36" r="1.4" />
              <circle cx="28" cy="26" r="1.2" />
              <circle cx="48" cy="26" r="1.2" />
              <circle cx="28" cy="46" r="1.2" />
              <circle cx="48" cy="46" r="1.2" />
            </g>

            <!-- Outer High-Order Harmonic Spots -->
            <g class="ld-spot-outer" fill="#a5f3fc">
              <circle cx="38" cy="12" r="1.1" />
              <circle cx="38" cy="60" r="1.1" />
              <circle cx="14" cy="36" r="1.1" />
              <circle cx="62" cy="36" r="1.1" />
              <circle cx="20" cy="18" r="0.9" />
              <circle cx="56" cy="18" r="0.9" />
              <circle cx="20" cy="54" r="0.9" />
              <circle cx="56" cy="54" r="0.9" />
              <circle cx="48" cy="14" r="0.8" />
              <circle cx="28" cy="14" r="0.8" />
              <circle cx="48" cy="58" r="0.8" />
              <circle cx="28" cy="58" r="0.8" />
            </g>

            <!-- Central Direct Beam Absorption Lead Washer Shadow & Core -->
            <circle cx="38" cy="36" r="4.5" fill="#020617" stroke="#38bdf8" stroke-width="0.8" />
            <circle class="ld-primary-beam" cx="38" cy="36" r="2" fill="#ffffff" />
          </svg>
        </div>
        <div class="ld-label">LAUE 1912</div>
      </div>
    `;
  }
}

customElements.define('concept-laue-diffraction', ConceptLaueDiffraction);
