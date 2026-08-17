const lummerGehrckePlateStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a22 0%, #050609 100%);
    border: 1.5px solid rgba(52, 211, 153, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(52, 211, 153, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lg-svg {
    width: 76px;
    height: 72px;
  }

  /* Internal glancing reflection ray bouncing down parallel plate */
  .lg-glancing-rays {
    stroke: #34d399;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #059669);
  }

  /* Traveling laser photon packet bouncing down internal reflection path */
  .lg-photon-packet {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #34d399;
    z-index: 6;
    offset-path: path("M 15 29 L 20 44 L 28 32 L 36 44 L 44 32 L 52 44 L 60 32 L 68 44");
    animation: lg-photon-bounce 2.2s linear infinite;
  }

  @keyframes lg-photon-bounce {
    0% { offset-distance: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Grazing emergent parallel interference beams */
  .lg-emergent-beams {
    stroke: #6ee7b7;
    stroke-width: 1;
    filter: drop-shadow(0 0 2px #34d399);
  }

  /* High-resolution Zeeman/hyperfine spectral line pairs with scanning sweep */
  .lg-hyperfine-split {
    animation: lg-fringe-sweep 2.4s ease-in-out infinite alternate;
  }

  @keyframes lg-fringe-sweep {
    0% { transform: translateX(-4px); }
    100% { transform: translateX(4px); }
  }

  .lg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(52, 211, 153, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLummerGehrckePlate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lummerGehrckePlateStyles}</style>
      <div class="lg-box">
        <div class="lg-stage">
          <div class="lg-photon-packet"></div>

          <svg class="lg-svg" viewBox="0 0 76 72">
            <!-- 1901 Otto Lummer & Ernst Gehrcke Multiple-Interference Resolving Plate -->
            <!-- Long Plane-Parallel Optical Quartz/Glass Plate -->
            <rect x="8" y="32" width="60" height="12" rx="1" fill="#064e3b" fill-opacity="0.3" stroke="#059669" stroke-width="1.2" />

            <!-- Entrance Prism Cemented to Top Left of Plate -->
            <polygon points="12,32 20,32 12,24" fill="#047857" stroke="#34d399" stroke-width="1" />

            <!-- Incident Collimated Light Ray into Coupling Prism -->
            <line x1="6" y1="20" x2="15" y2="29" stroke="#fef08a" stroke-width="1.2" />

            <!-- Multiple Glancing Internal Reflections Near Critical Angle -->
            <path class="lg-glancing-rays" d="M 15 29 L 20 44 L 28 32 L 36 44 L 44 32 L 52 44 L 60 32 L 68 44" fill="none" />

            <!-- Grazing Emergent Parallel Rays at Top Surface -->
            <g class="lg-emergent-beams" stroke-dasharray="3 2">
              <line x1="28" y1="32" x2="36" y2="16" />
              <line x1="44" y1="32" x2="52" y2="16" />
              <line x1="60" y1="32" x2="68" y2="16" />
            </g>

            <!-- High-Resolution Spectral Hyperfine Doublet Fringe Lines with Sighting Sweep -->
            <g class="lg-hyperfine-split" stroke="#ecfdf5" stroke-width="1.2">
              <line x1="50" y1="10" x2="50" y2="20" />
              <line x1="53" y1="10" x2="53" y2="20" />
              <line x1="65" y1="10" x2="65" y2="20" />
              <line x1="68" y1="10" x2="68" y2="20" />
            </g>
          </svg>
        </div>
        <div class="lg-label">LUMMER-GEHRCKE 1901</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lummer-gehrcke-plate')) {
  customElements.define('concept-lummer-gehrcke-plate', ConceptLummerGehrckePlate);
}
