const braggSpectrometerStyles = `
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
    background: radial-gradient(circle at 50% 50%, #1e1b18 0%, #080605 100%);
    border: 1.5px solid rgba(251, 191, 36, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(251, 191, 36, 0.15);
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

  /* Rotating crystal table (theta rotation) */
  .bs-crystal-stage {
    transform-origin: 38px 46px;
    animation: bs-crystal-sweep 4s ease-in-out infinite alternate;
  }

  @keyframes bs-crystal-sweep {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  /* 2-theta detector arm tracking ionization chamber */
  .bs-detector-arm {
    transform-origin: 38px 46px;
    animation: bs-arm-sweep 4s ease-in-out infinite alternate;
  }

  @keyframes bs-arm-sweep {
    0% { transform: rotate(-30deg); }
    100% { transform: rotate(30deg); }
  }

  /* Bragg constructive interference reflection ray beam */
  .bs-reflected-ray {
    animation: bs-bragg-peak 4s ease-in-out infinite alternate;
  }

  @keyframes bs-bragg-peak {
    0% { opacity: 0.15; stroke-width: 0.6; stroke: #fbbf24; }
    45% { opacity: 0.2; }
    50% { opacity: 1; stroke-width: 1.6; stroke: #ffffff; filter: drop-shadow(0 0 3px #f59e0b); }
    55% { opacity: 0.2; }
    100% { opacity: 0.15; stroke-width: 0.6; stroke: #fbbf24; }
  }

  /* Ionization current pulse */
  .bs-ion-burst {
    animation: bs-ion-flash 4s ease-in-out infinite alternate;
  }

  @keyframes bs-ion-flash {
    0% { opacity: 0; transform: scale(0.6); }
    48% { opacity: 0; }
    50% { opacity: 1; transform: scale(1.3); }
    54% { opacity: 0; }
    100% { opacity: 0; }
  }

  .bs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(251, 191, 36, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBraggSpectrometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${braggSpectrometerStyles}</style>
      <div class="bs-box">
        <div class="bs-stage">
          <svg class="bs-svg" viewBox="0 0 76 72">
            <!-- 1913 W.H. & W.L. Bragg X-Ray Crystal Spectrometer -->
            <!-- Heavy Cast Iron Base & Graduated Brass Circle -->
            <ellipse cx="38" cy="58" rx="26" ry="6" fill="#1c1917" stroke="#78716c" stroke-width="1" />
            <path d="M 16 46 A 22 22 0 0 1 60 46" fill="none" stroke="#d97706" stroke-width="1.2" stroke-dasharray="1 1.5" />

            <!-- Collimated Incident X-Ray Slits & Source Tube (Left) -->
            <rect x="6" y="24" width="14" height="8" rx="1.5" fill="#292524" stroke="#d97706" stroke-width="0.8" />
            <line x1="20" y1="28" x2="38" y2="46" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3 1.5" opacity="0.8" />

            <!-- 2-Theta Detector Arm with Cylindrical Ionization Chamber -->
            <g class="bs-detector-arm">
              <line x1="38" y1="46" x2="62" y2="22" stroke="#b45309" stroke-width="1.6" />
              <!-- Ionization Chamber Cylinder & Sulfur Dioxide Gas Cell -->
              <rect x="56" y="16" width="14" height="8" rx="2" transform="rotate(-45 63 20)" fill="#451a03" stroke="#f59e0b" stroke-width="1" />
              <line class="bs-reflected-ray" x1="38" y1="46" x2="63" y2="20" />
              <!-- Ionization current pulse inside chamber -->
              <circle class="bs-ion-burst" cx="63" cy="20" r="3" fill="#fef08a" />
            </g>

            <!-- Theta Specimen Mount with Rock Salt (NaCl) Crystal Cleavage Plate -->
            <g class="bs-crystal-stage">
              <!-- Central Pivot Post & Vernier Carrier -->
              <circle cx="38" cy="46" r="5" fill="#292524" stroke="#f59e0b" stroke-width="1" />
              <!-- Rock Salt Crystal Rhombus -->
              <polygon points="38,37 45,43 38,49 31,43" fill="#0284c7" stroke="#bae6fd" stroke-width="0.8" opacity="0.85" />
              <!-- Cleavage atomic planes -->
              <line x1="33" y1="41" x2="43" y2="41" stroke="#ffffff" stroke-width="0.6" opacity="0.6" />
              <line x1="33" y1="45" x2="43" y2="45" stroke="#ffffff" stroke-width="0.6" opacity="0.6" />
            </g>
          </svg>
        </div>
        <div class="bs-label">BRAGG 2d sinθ=nλ</div>
      </div>
    `;
  }
}

customElements.define('concept-bragg-spectrometer', ConceptBraggSpectrometer);
