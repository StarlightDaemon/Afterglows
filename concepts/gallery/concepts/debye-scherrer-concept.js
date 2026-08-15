const debyeScherrerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ds-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a1e1d 0%, #060908 100%);
    border: 1.5px solid rgba(52, 211, 153, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(52, 211, 153, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ds-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ds-svg {
    width: 76px;
    height: 72px;
  }

  /* Polycrystalline powder diffraction cones expanding outward */
  .ds-diffraction-cones {
    animation: ds-cones-pulse 2.8s ease-in-out infinite alternate;
  }

  @keyframes ds-cones-pulse {
    0% { opacity: 0.4; stroke-width: 0.6; stroke: #34d399; }
    50% { opacity: 0.95; stroke-width: 1.2; stroke: #a7f3d0; filter: drop-shadow(0 0 2px #10b981); }
    100% { opacity: 0.5; stroke-width: 0.7; stroke: #34d399; }
  }

  /* Symmetric Debye rings on unrolled cylindrical strip film */
  .ds-film-rings {
    animation: ds-rings-gleam 2s ease-in-out infinite alternate;
  }

  @keyframes ds-rings-gleam {
    0% { opacity: 0.5; }
    100% { opacity: 1; filter: drop-shadow(0 0 2px #6ee7b7); }
  }

  /* Rotating central powder specimen capillary */
  .ds-capillary-spin {
    animation: ds-cap-spin 4s linear infinite;
    transform-origin: 38px 36px;
  }

  @keyframes ds-cap-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .ds-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(52, 211, 153, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptDebyeScherrer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${debyeScherrerStyles}</style>
      <div class="ds-box">
        <div class="ds-stage">
          <svg class="ds-svg" viewBox="0 0 76 72">
            <!-- 1916 Debye-Scherrer Cylindrical Powder Diffraction Camera -->
            <!-- Cylindrical Camera Outer Drum Rim -->
            <circle cx="38" cy="36" r="28" fill="#132a1f" stroke="#059669" stroke-width="1.2" />
            <circle cx="38" cy="36" r="25" fill="#064e3b" fill-opacity="0.3" stroke="#047857" stroke-dasharray="2 2" stroke-width="0.6" />

            <!-- Primary X-Ray Collimator Pinholes (Left to Right) -->
            <line x1="6" y1="36" x2="38" y2="36" stroke="#6ee7b7" stroke-width="1.2" />
            <!-- Beam Stop Trap Pinhole (Right) -->
            <rect x="63" y="33" width="7" height="6" rx="1" fill="#022c22" stroke="#10b981" stroke-width="0.8" />

            <!-- Nested Forward & Back-Reflection Debye Cones -->
            <g class="ds-diffraction-cones" fill="none">
              <!-- Forward Cones (2-theta < 90°) -->
              <path d="M 38 36 L 58 16" />
              <path d="M 38 36 L 58 56" />
              <path d="M 38 36 L 64 24" />
              <path d="M 38 36 L 64 48" />
              <!-- Back-Reflection Cones (2-theta > 90°) -->
              <path d="M 38 36 L 18 16" />
              <path d="M 38 36 L 18 56" />
              <path d="M 38 36 L 12 24" />
              <path d="M 38 36 L 12 48" />
            </g>

            <!-- Symmetric Debye Arcs / Rings on Circumferential Film Strip -->
            <g class="ds-film-rings" stroke="#ecfdf5" fill="none" stroke-width="1.2">
              <path d="M 56 18 A 28 28 0 0 1 56 54" stroke-dasharray="3 3" />
              <path d="M 62 26 A 28 28 0 0 1 62 46" stroke-dasharray="3 2" />
              <path d="M 20 18 A 28 28 0 0 0 20 54" stroke-dasharray="3 3" />
              <path d="M 14 26 A 28 28 0 0 0 14 46" stroke-dasharray="3 2" />
            </g>

            <!-- Central Glass Capillary Containing Random Polycrystalline Powder -->
            <g class="ds-capillary-spin">
              <circle cx="38" cy="36" r="3.5" fill="#047857" stroke="#34d399" stroke-width="0.8" />
              <circle cx="38" cy="36" r="1.5" fill="#ffffff" />
            </g>
          </svg>
        </div>
        <div class="ds-label">DEBYE-SCHERRER 1916</div>
      </div>
    `;
  }
}

customElements.define('concept-debye-scherrer', ConceptDebyeScherrer);
