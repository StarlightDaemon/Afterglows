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

  /* Uniaxial/Biaxial optic axis Maltese cross (isogyres) rotation */
  .ci-isogyre-cross {
    animation: ci-isogyre-sweep 6s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes ci-isogyre-sweep {
    0% { transform: rotate(0deg); opacity: 0.95; }
    50% { transform: rotate(25deg); opacity: 0.85; }
    100% { transform: rotate(-25deg); opacity: 0.95; }
  }

  /* Concentric chromatic spectral isochrome rings breathing */
  .ci-isochrome-rings {
    animation: ci-rings-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes ci-rings-pulse {
    0% { transform: scale(0.96); filter: drop-shadow(0 0 1px #ec4899); }
    100% { transform: scale(1.04); filter: drop-shadow(0 0 4px #f43f5e); }
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
            <g class="ci-isochrome-rings" style="transform-origin: 38px 36px;">
              <!-- 4th Order Ring (Red-Green) -->
              <circle cx="38" cy="36" r="24" fill="none" stroke="#06b6d4" stroke-width="1.8" opacity="0.6" />
              <circle cx="38" cy="36" r="22" fill="none" stroke="#f43f5e" stroke-width="1.6" opacity="0.7" />
              <!-- 3rd Order Ring (Yellow-Violet) -->
              <circle cx="38" cy="36" r="18" fill="none" stroke="#a855f7" stroke-width="1.8" opacity="0.75" />
              <circle cx="38" cy="36" r="15" fill="none" stroke="#eab308" stroke-width="1.6" opacity="0.8" />
              <!-- 2nd Order Ring (Blue-Orange) -->
              <circle cx="38" cy="36" r="12" fill="none" stroke="#3b82f6" stroke-width="1.8" opacity="0.85" />
              <circle cx="38" cy="36" r="9" fill="none" stroke="#f97316" stroke-width="1.6" opacity="0.9" />
              <!-- 1st Order Ring (White-Gray Melatope Center) -->
              <circle cx="38" cy="36" r="5" fill="none" stroke="#fef08a" stroke-width="1.4" opacity="0.95" />
            </g>

            <!-- Black Isogyre Cross (Maltese cross showing vibration directions) -->
            <g class="ci-isogyre-cross">
              <!-- Vertical Isogyre Brush -->
              <path d="M 36 8 C 37 20, 37 28, 38 36 C 39 28, 39 20, 40 8 Z" fill="#030712" opacity="0.95" />
              <path d="M 36 64 C 37 52, 37 44, 38 36 C 39 44, 39 52, 40 64 Z" fill="#030712" opacity="0.95" />
              <!-- Horizontal Isogyre Brush -->
              <path d="M 10 36 C 22 37, 30 37, 38 38 C 30 39, 22 39, 10 40 Z" fill="#030712" opacity="0.95" />
              <path d="M 66 36 C 54 37, 46 37, 38 38 C 46 39, 54 39, 66 40 Z" fill="#030712" opacity="0.95" />
              <!-- Central Melatope Eye (Optic axis emergence point) -->
              <circle cx="38" cy="36" r="2.2" fill="#030712" stroke="#ffffff" stroke-width="0.5" />
            </g>
          </svg>
        </div>
        <div class="ci-label">CONOSCOPY ISOGYRES</div>
      </div>
    `;
  }
}

customElements.define('concept-conoscopic-interference', ConceptConoscopicInterference);
