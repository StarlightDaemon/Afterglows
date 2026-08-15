const mirrorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #150f1f 0%, #050308 100%);
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

  /* Magnetic Mirror Choke Coils */
  .mirror-coil {
    position: absolute;
    top: 24px;
    width: 6px;
    height: 66px;
    background: linear-gradient(180deg, #aa55ff, #441177);
    border: 1.2px solid #cc88ff;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(170, 85, 255, 0.5);
    z-index: 7;
  }

  .coil-left { left: 18px; }
  .coil-right { right: 18px; }

  /* Converging Magnetic Field Lines SVG */
  .field-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .bottle-line {
    fill: none;
    stroke: rgba(170, 85, 255, 0.4);
    stroke-width: 1.2;
  }

  /* Helical Trapped Particle */
  .particle-wrapper {
    position: absolute;
    inset: 0;
    z-index: 8;
  }

  .trapped-ion {
    position: absolute;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #00ffcc;
    box-shadow: 0 0 8px #00ffcc, 0 0 12px #00ffcc;
    offset-path: path("M 24 57 C 40 40, 50 74, 65 57 C 80 40, 90 74, 106 57 C 90 40, 80 74, 65 57 C 50 40, 40 74, 24 57");
    animation: mirror-bounce 3.6s ease-in-out infinite;
  }

  .reflection-label-l {
    position: absolute;
    top: 14px;
    left: 8px;
    font-size: 5px;
    font-family: monospace;
    color: #cc88ff;
  }

  .reflection-label-r {
    position: absolute;
    top: 14px;
    right: 8px;
    font-size: 5px;
    font-family: monospace;
    color: #cc88ff;
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
    color: rgba(170, 85, 255, 0.85);
    z-index: 10;
  }

  @keyframes mirror-bounce {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }
`;

class PhysicsMagneticMirror extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mirrorStyles}</style>
      <div class="canvas-box">
        <div class="mirror-coil coil-left"></div>
        <div class="mirror-coil coil-right"></div>

        <span class="reflection-label-l">Mirror Point</span>
        <span class="reflection-label-r">Mirror Point</span>

        <svg class="field-svg" viewBox="0 0 130 130">
          <!-- Pinched Bottleneck Field Lines -->
          <path d="M 10 32 C 24 32, 45 18, 65 18 C 85 18, 106 32, 120 32" class="bottle-line" />
          <path d="M 10 44 C 24 44, 45 36, 65 36 C 85 36, 106 44, 120 44" class="bottle-line" />
          <path d="M 10 57 L 120 57" class="bottle-line" stroke-dasharray="3 3" />
          <path d="M 10 70 C 24 70, 45 78, 65 78 C 85 78, 106 70, 120 70" class="bottle-line" />
          <path d="M 10 82 C 24 82, 45 96, 65 96 C 85 96, 106 82, 120 82" class="bottle-line" />
        </svg>

        <div class="particle-wrapper">
          <div class="trapped-ion"></div>
        </div>

        <div class="hud">
          <span>μ = ½mv_⊥²/B = const</span>
          <span>F_∥ = -μ ∇_∥ B</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-magnetic-mirror')) {
  customElements.define('physics-magnetic-mirror', PhysicsMagneticMirror);
}
