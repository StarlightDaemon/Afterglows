const conoscopicInterferenceStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ci-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221428 0%, #08030b 100%);
    border: 1.5px solid rgba(236, 72, 153, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(236, 72, 153, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ci-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ci-svg {
    width: 76px;
    height: 72px;
  }

  /* Uniaxial optic axis Maltese cross (isogyres) continuous crystal stage rotation */
  .ci-isogyre-cross {
    animation: ci-isogyre-sweep 3.6s linear infinite;
    transform-origin: 38px 36px;
  }

  @keyframes ci-isogyre-sweep {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Concentric chromatic spectral isochrome rings breathing expansion */
  .ci-isochrome-rings {
    animation: ci-rings-pulse 2.2s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes ci-rings-pulse {
    0% { transform: scale(0.88); filter: drop-shadow(0 0 2px #ec4899); }
    100% { transform: scale(1.15); filter: drop-shadow(0 0 8px #f43f5e); }
  }

  /* Rotating quartz wedge compensator indicator line */
  .ci-compensator-ray {
    animation: ci-comp-sweep 3.6s linear infinite reverse;
    transform-origin: 38px 36px;
  }

  @keyframes ci-comp-sweep {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .ci-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(244, 114, 182, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptConoscopicInterference extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${conoscopicInterferenceStyles}</style>
      <div class="ci-box">
        <div class="ci-stage">
          <svg class="ci-svg" viewBox="0 0 76 72">
            <!-- Polarizing Petrographic Microscope Conoscopic Interference Figure -->
            <!-- Bertrand Lens Circular Field of View Mask -->
            <circle cx="38" cy="36" r="28" fill="#180b1f" stroke="#701a75" stroke-width="1.2" />

            <!-- Concentric Newton Color Isochromes (Interference Color Rings) -->
            <g class="ci-isochrome-rings">
              <!-- 4th Order Ring (Red-Green) -->
              <circle cx="38" cy="36" r="24" fill="none" stroke="#06b6d4" stroke-width="2.2" opacity="0.8" />
              <circle cx="38" cy="36" r="22" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.85" />
              <!-- 3rd Order Ring (Yellow-Violet) -->
              <circle cx="38" cy="36" r="18" fill="none" stroke="#a855f7" stroke-width="2.2" opacity="0.9" />
              <circle cx="38" cy="36" r="15" fill="none" stroke="#eab308" stroke-width="2" opacity="0.95" />
              <!-- 2nd Order Ring (Blue-Orange) -->
              <circle cx="38" cy="36" r="12" fill="none" stroke="#3b82f6" stroke-width="2.2" opacity="0.95" />
              <circle cx="38" cy="36" r="9" fill="none" stroke="#f97316" stroke-width="2" opacity="1" />
              <!-- 1st Order Ring (White-Gray Melatope Center) -->
              <circle cx="38" cy="36" r="5" fill="none" stroke="#ffffff" stroke-width="1.6" opacity="1" />
            </g>

            <!-- Black Isogyre Cross (Maltese cross showing vibration directions) -->
            <g class="ci-isogyre-cross">
              <!-- Vertical Isogyre Brush -->
              <path d="M 35 8 C 36 20, 36 28, 38 36 C 40 28, 40 20, 41 8 Z" fill="#000000" stroke="#f43f5e" stroke-width="0.5" />
              <path d="M 35 64 C 36 52, 36 44, 38 36 C 40 44, 40 52, 41 64 Z" fill="#000000" stroke="#f43f5e" stroke-width="0.5" />
              <!-- Horizontal Isogyre Brush -->
              <path d="M 10 35 C 22 36, 30 36, 38 38 C 30 40, 22 40, 10 41 Z" fill="#000000" stroke="#f43f5e" stroke-width="0.5" />
              <path d="M 66 35 C 54 36, 46 36, 38 38 C 46 40, 54 40, 66 41 Z" fill="#000000" stroke="#f43f5e" stroke-width="0.5" />
              <!-- Central Melatope Eye (Optic axis emergence point) -->
              <circle cx="38" cy="36" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)" />
            </g>

            <!-- Gypsum Plate 45° Compensator Axis Line -->
            <g class="ci-compensator-ray">
              <line x1="18" y1="18" x2="58" y2="54" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="2 2" />
            </g>
          </svg>
        </div>
        <div class="ci-label">CONOSCOPY ISOGYRES</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-conoscopic-interference')) {
  customElements.define('concept-conoscopic-interference', ConceptConoscopicInterference);
}
