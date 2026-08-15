const fedorovStageStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fs-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1c14 0%, #060503 100%);
    border: 1.5px solid rgba(234, 179, 8, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(234, 179, 8, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fs-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fs-svg {
    width: 76px;
    height: 72px;
  }

  /* Outer A1 azimuth brass ring rotation */
  .fs-outer-ring {
    transform-origin: 38px 36px;
    animation: fs-a1-spin 8s linear infinite;
  }

  @keyframes fs-a1-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Middle A2 east-west tilt gimbal axis oscillation */
  .fs-middle-gimbal {
    transform-origin: 38px 36px;
    animation: fs-tilt-gimbal 4.5s ease-in-out infinite alternate;
  }

  @keyframes fs-tilt-gimbal {
    0% { transform: rotate(-20deg) scaleX(0.85); }
    100% { transform: rotate(20deg) scaleX(1.1); }
  }

  /* Inner crystal thin section rotation (A5 axis) */
  .fs-inner-crystal {
    transform-origin: 38px 36px;
    animation: fs-crystal-spin 5s ease-in-out infinite alternate;
  }

  @keyframes fs-crystal-spin {
    0% { transform: rotate(45deg); opacity: 0.8; }
    100% { transform: rotate(-45deg); opacity: 1; filter: drop-shadow(0 0 2px #facc15); }
  }

  .fs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(234, 179, 8, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFedorovStage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fedorovStageStyles}</style>
      <div class="fs-box">
        <div class="fs-stage">
          <svg class="fs-svg" viewBox="0 0 76 72">
            <!-- 1891 Evgraf Fedorov Universal 5-Axis Microscope Stage -->
            <!-- Fixed Base Ring Attached to Petrographic Microscope -->
            <circle cx="38" cy="36" r="30" fill="#14110b" stroke="#713f12" stroke-width="1.2" />

            <!-- Outer Rotating Brass Circle Ring (A1 Axis) with Degree Ticks -->
            <g class="fs-outer-ring">
              <circle cx="38" cy="36" r="26" fill="#201a0f" stroke="#ca8a04" stroke-width="1" />
              <line x1="38" y1="10" x2="38" y2="13" stroke="#fef08a" stroke-width="0.8" />
              <line x1="38" y1="59" x2="38" y2="62" stroke="#fef08a" stroke-width="0.8" />
              <line x1="12" y1="36" x2="15" y2="36" stroke="#fef08a" stroke-width="0.8" />
              <line x1="61" y1="36" x2="64" y2="36" stroke="#fef08a" stroke-width="0.8" />
            </g>

            <!-- Middle Tilt Gimbal Frame with Graduated Vertical Arcs (A2/A4 Axes) -->
            <g class="fs-middle-gimbal">
              <!-- Oval Brass Gimbal Ring -->
              <ellipse cx="38" cy="36" rx="20" ry="17" fill="#292110" stroke="#eab308" stroke-width="1" />
              <line x1="18" y1="36" x2="58" y2="36" stroke="#ca8a04" stroke-width="0.6" stroke-dasharray="1.5 1.5" />
            </g>

            <!-- Central Glass Segment Hemispheres Clamping Thin-Section Slide -->
            <circle cx="38" cy="36" r="12" fill="#0f766e" fill-opacity="0.35" stroke="#2dd4bf" stroke-width="0.8" />

            <!-- Inner Petrographic Birefringent Mineral Crystal (A5 Rotation Axis) -->
            <g class="fs-inner-crystal">
              <!-- Rectangular Thin Section Slide -->
              <rect x="29" y="31" width="18" height="10" rx="1" fill="#134e4a" stroke="#5eead4" stroke-width="0.7" />
              <!-- Birefringent Mineral Grain Polygon (Plagioclase Twin Lamellae) -->
              <polygon points="32,33 44,33 42,39 34,39" fill="#0284c7" stroke="#38bdf8" stroke-width="0.6" />
              <line x1="36" y1="33" x2="37" y2="39" stroke="#ffffff" stroke-width="0.5" />
              <line x1="39" y1="33" x2="40" y2="39" stroke="#ffffff" stroke-width="0.5" />
            </g>

            <!-- Lateral Micrometer Adjustment Drum Screws -->
            <circle cx="10" cy="36" r="2.5" fill="#a16207" stroke="#facc15" stroke-width="0.6" />
            <circle cx="66" cy="36" r="2.5" fill="#a16207" stroke="#facc15" stroke-width="0.6" />
          </svg>
        </div>
        <div class="fs-label">FEDOROV 5-AXIS 1891</div>
      </div>
    `;
  }
}

customElements.define('concept-fedorov-stage', ConceptFedorovStage);
