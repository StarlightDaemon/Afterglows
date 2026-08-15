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
    animation: lg-glance-pulse 2.4s ease-in-out infinite alternate;
  }

  @keyframes lg-glance-pulse {
    0% { stroke: #34d399; opacity: 0.5; }
    100% { stroke: #a7f3d0; opacity: 1; filter: drop-shadow(0 0 2px #059669); }
  }

  /* Grazing emergent parallel interference beams */
  .lg-emergent-beams {
    animation: lg-beam-shimmer 2s ease-in-out infinite alternate;
  }

  @keyframes lg-beam-shimmer {
    0% { opacity: 0.3; stroke: #6ee7b7; }
    100% { opacity: 0.95; stroke: #ffffff; filter: drop-shadow(0 0 2px #34d399); }
  }

  /* High-resolution Zeeman/hyperfine spectral line pairs */
  .lg-hyperfine-split {
    animation: lg-split-flash 2.8s ease-in-out infinite alternate;
  }

  @keyframes lg-split-flash {
    0% { transform: scaleY(0.9); }
    100% { transform: scaleY(1.1); }
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
          <svg class="lg-svg" viewBox="0 0 76 72">
            <!-- 1901 Otto Lummer & Ernst Gehrcke Multiple-Interference Resolving Plate -->
            <!-- Long Plane-Parallel Optical Quartz/Glass Plate (Length ~ 20cm, thickness ~ 5mm) -->
            <rect x="8" y="32" width="60" height="12" rx="1" fill="#064e3b" fill-opacity="0.3" stroke="#059669" stroke-width="0.9" />

            <!-- Entrance Prism Cemented to Top Left of Plate -->
            <polygon points="12,32 20,32 12,24" fill="#047857" stroke="#34d399" stroke-width="0.7" />

            <!-- Incident Collimated Light Ray into Coupling Prism -->
            <line x1="6" y1="20" x2="15" y2="29" stroke="#fef08a" stroke-width="0.9" />

            <!-- Multiple Glancing Internal Reflections Near Critical Angle -->
            <path class="lg-glancing-rays" d="M 15 29 L 20 44 L 28 32 L 36 44 L 44 32 L 52 44 L 60 32 L 68 44" fill="none" stroke-width="0.8" />

            <!-- Grazing Emergent Parallel Rays at Top Surface (High Resolving Power R > 300,000) -->
            <g class="lg-emergent-beams" stroke-width="0.7" stroke-dasharray="2 1.5">
              <line x1="28" y1="32" x2="36" y2="16" />
              <line x1="44" y1="32" x2="52" y2="16" />
              <line x1="60" y1="32" x2="68" y2="16" />
            </g>

            <!-- High-Resolution Spectral Hyperfine Doublet Fringe Lines (Top Right Focus) -->
            <g class="lg-hyperfine-split" stroke="#ecfdf5" stroke-width="0.9">
              <line x1="50" y1="12" x2="50" y2="20" />
              <line x1="52" y1="12" x2="52" y2="20" />
              <line x1="66" y1="12" x2="66" y2="20" />
              <line x1="68" y1="12" x2="68" y2="20" />
            </g>
          </svg>
        </div>
        <div class="lg-label">LUMMER-GEHRCKE 1901</div>
      </div>
    `;
  }
}

customElements.define('concept-lummer-gehrcke-plate', ConceptLummerGehrckePlate);
