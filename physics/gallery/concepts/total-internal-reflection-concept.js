const tirStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #081622 0%, #03080d 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dense Medium Glass Slab (Bottom Half) */
  .dense-medium {
    position: absolute;
    bottom: 12px;
    left: 10px;
    right: 10px;
    height: 52px;
    background: rgba(0, 80, 120, 0.25);
    border-top: 1.5px solid #00e5ff;
    border-left: 1px solid rgba(0, 229, 255, 0.3);
    border-right: 1px solid rgba(0, 229, 255, 0.3);
    border-bottom: 1px solid rgba(0, 229, 255, 0.3);
    box-shadow: inset 0 0 14px rgba(0, 229, 255, 0.1);
  }

  /* Optics Vectors SVG */
  .optics-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  .normal-line {
    stroke: rgba(255, 255, 255, 0.3);
    stroke-width: 1;
    stroke-dasharray: 3 3;
  }

  .laser-beam {
    fill: none;
    stroke: #00ff66;
    stroke-width: 2.2;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  /* Evanescent Wave (Exponential Decay into Upper Medium) */
  .evanescent-wave-1 {
    fill: none;
    stroke: rgba(0, 255, 102, 0.6);
    stroke-width: 1.5;
    animation: ev-pulse 1.6s ease-in-out infinite alternate;
  }

  .evanescent-wave-2 {
    fill: none;
    stroke: rgba(0, 255, 102, 0.3);
    stroke-width: 1.2;
    animation: ev-pulse 1.6s ease-in-out infinite alternate 0.3s;
  }

  .evanescent-wave-3 {
    fill: none;
    stroke: rgba(0, 255, 102, 0.12);
    stroke-width: 1;
    animation: ev-pulse 1.6s ease-in-out infinite alternate 0.6s;
  }

  /* Media index indicators */
  .label-n2 {
    position: absolute;
    top: 42px;
    right: 16px;
    font-size: 6px;
    font-family: monospace;
    color: #88aacc;
  }

  .label-n1 {
    position: absolute;
    bottom: 24px;
    right: 16px;
    font-size: 6px;
    font-family: monospace;
    color: #00e5ff;
  }

  .label-theta {
    position: absolute;
    bottom: 42px;
    left: 48px;
    font-size: 5.5px;
    font-family: monospace;
    color: #00ff66;
  }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes ev-pulse {
    0% { opacity: 0.3; transform: translateY(0); }
    100% { opacity: 0.9; transform: translateY(-1px); }
  }
`;

class PhysicsTotalInternalReflection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tirStyles}</style>
      <div class="canvas-box">
        <div class="dense-medium"></div>

        <svg class="optics-svg" viewBox="0 0 130 130">
          <!-- Normal Line at Interface (y = 66) -->
          <line x1="65" y1="20" x2="65" y2="110" class="normal-line" />

          <!-- Total Internal Reflection Beam (θ = 50° > θ_c = 38.7°) -->
          <path d="M 22 108 L 65 66 L 108 108" class="laser-beam" />

          <!-- Evanescent Decaying Waves in Low-Index Medium -->
          <path d="M 45 61 Q 65 57 85 61" class="evanescent-wave-1" />
          <path d="M 48 55 Q 65 52 82 55" class="evanescent-wave-2" />
          <path d="M 52 49 Q 65 47 78 49" class="evanescent-wave-3" />

          <!-- Incident & Reflected Angle Arcs -->
          <path d="M 55 78 A 15 15 0 0 1 65 81" fill="none" stroke="#00ff66" stroke-width="1" />
          <path d="M 65 81 A 15 15 0 0 1 75 78" fill="none" stroke="#00ff66" stroke-width="1" />
        </svg>

        <span class="label-n2">n₂ = 1.00 (Air)</span>
        <span class="label-n1">n₁ = 1.60 (Glass)</span>
        <span class="label-theta">θ > θ_c</span>

        <div class="hud">
          <span>θ_c = arcsin(n₂/n₁) = 38.7°</span>
          <span>E(z) = E₀ e^(-z/d_p)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-total-internal-reflection')) {
  customElements.define('physics-total-internal-reflection', PhysicsTotalInternalReflection);
}
