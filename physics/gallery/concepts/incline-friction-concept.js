const inclineStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 60% 50%, #161208 0%, #080603 100%);
    overflow: hidden;
  }

  .incline-box {
    width: 130px;
    height: 130px;
    position: relative;
  }

  /* Incline Ramp */
  .ramp-triangle {
    position: absolute;
    bottom: 24px;
    left: 14px;
    width: 102px;
    height: 60px;
    border-bottom: 2px solid #ffaa00;
    border-right: 1px dashed rgba(255, 170, 0, 0.4);
  }

  .ramp-slope {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 118px;
    height: 2px;
    background: #ffaa00;
    box-shadow: 0 0 6px rgba(255, 170, 0, 0.5);
    transform-origin: bottom left;
    transform: rotate(-30.5deg);
  }

  /* Ground hatch */
  .ground-hatch {
    position: absolute;
    bottom: 18px;
    left: 12px;
    width: 106px;
    height: 6px;
    background: repeating-linear-gradient(45deg, rgba(255, 170, 0, 0.4) 0, rgba(255, 170, 0, 0.4) 1px, transparent 1px, transparent 6px);
  }

  .angle-arc {
    position: absolute;
    bottom: 24px;
    left: 14px;
    width: 24px;
    height: 24px;
    border-top: 1px solid rgba(255, 170, 0, 0.6);
    border-radius: 50% 0 0 0;
    transform: rotate(45deg);
  }

  .angle-label {
    position: absolute;
    bottom: 28px;
    left: 36px;
    font-size: 7px;
    font-family: monospace;
    color: #ffaa00;
  }

  /* Sliding Mass on Incline */
  .slide-track {
    position: absolute;
    bottom: 24px;
    left: 14px;
    width: 118px;
    height: 30px;
    transform-origin: bottom left;
    transform: rotate(-30.5deg);
    pointer-events: none;
  }

  .block-container {
    position: absolute;
    top: 16px; /* block bottom flush with the track's bottom edge (the ramp surface) */
    left: 80px;
    width: 22px;
    height: 14px;
    animation: slide-cycle 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  .mass-cube {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #3d2a08 0%, #1a1204 100%);
    border: 1.5px solid #ffcc00;
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 6.5px;
    color: #ffeedd;
  }

  /* Vectors in Free-Body Diagram */
  /* Normal Force FN (perpendicular to slope, straight up in local frame) */
  .vec-fn {
    position: absolute;
    bottom: 14px;
    left: 11px;
    width: 1.5px;
    height: 18px;
    background: #00ffcc;
    box-shadow: 0 0 4px #00ffcc;
  }

  .vec-fn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2.5px;
    border: 3px solid transparent;
    border-bottom-color: #00ffcc;
  }

  .fn-label {
    position: absolute;
    top: -12px;
    left: -4px;
    font-size: 6px;
    font-family: monospace;
    color: #00ffcc;
    font-weight: bold;
  }

  /* Friction force fk (up the slope, pointing right in local frame) */
  .vec-fk {
    position: absolute;
    top: 6px;
    left: 22px;
    width: 14px;
    height: 1.5px;
    background: #ff3366;
    box-shadow: 0 0 4px #ff3366;
  }

  .vec-fk::before {
    content: '';
    position: absolute;
    right: 0;
    top: -2.5px;
    border: 3px solid transparent;
    border-left-color: #ff3366;
  }

  .fk-label {
    position: absolute;
    top: -8px;
    right: 0;
    font-size: 6px;
    font-family: monospace;
    color: #ff3366;
    font-weight: bold;
  }

  /* Gravity vector mg (points straight down in global space) */
  .vec-mg {
    position: absolute;
    top: 7px;
    left: 11px;
    width: 1.5px;
    height: 20px;
    background: #ffaa00;
    transform: rotate(30.5deg);
    transform-origin: top center;
    box-shadow: 0 0 4px #ffaa00;
  }

  .vec-mg::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -2.5px;
    border: 3px solid transparent;
    border-top-color: #ffaa00;
  }

  .mg-label {
    position: absolute;
    bottom: -10px;
    left: -4px;
    font-size: 6px;
    font-family: monospace;
    color: #ffaa00;
    font-weight: bold;
  }

  .telemetry {
    position: absolute;
    bottom: 4px;
    left: 8px;
    right: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.7);
  }

  @keyframes slide-cycle {
    0% {
      left: 88px;
      opacity: 0;
    }
    8% {
      opacity: 1;
    }
    75% {
      left: 8px;
      opacity: 1;
    }
    85%, 100% {
      left: 8px;
      opacity: 0;
    }
  }
`;

class PhysicsInclineFriction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${inclineStyles}</style>
      <div class="incline-box">
        <div class="ground-hatch"></div>
        <div class="ramp-triangle"></div>
        <div class="ramp-slope"></div>
        <div class="angle-arc"></div>
        <span class="angle-label">θ=30°</span>

        <div class="slide-track">
          <div class="block-container">
            <div class="mass-cube">m</div>
            <div class="vec-fn">
              <span class="fn-label">N</span>
            </div>
            <div class="vec-fk">
              <span class="fk-label">f_k</span>
            </div>
            <div class="vec-mg">
              <span class="mg-label">mg</span>
            </div>
          </div>
        </div>

        <div class="telemetry">
          <span>μ_k = 0.22</span>
          <span>a = 3.0 m/s²</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-incline-friction')) {
  customElements.define('physics-incline-friction', PhysicsInclineFriction);
}
