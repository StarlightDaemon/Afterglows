const fabryStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1a18 0%, #030807 100%);
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

  /* Partial Reflection Mirrors */
  .mirror-slab {
    position: absolute;
    top: 24px;
    width: 6px;
    height: 60px;
    background: linear-gradient(180deg, #114433, #0a221a);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px rgba(0, 255, 102, 0.4);
    z-index: 6;
  }

  .mirror-1 { left: 28px; }
  .mirror-2 { right: 28px; }

  /* Cavity Interior Glow */
  .cavity-glow {
    position: absolute;
    top: 26px;
    left: 34px;
    right: 34px;
    height: 56px;
    background: radial-gradient(ellipse at center, rgba(0, 255, 102, 0.2) 0%, transparent 80%);
    z-index: 2;
  }

  /* Laser Beams and Standing Waves SVG */
  .cavity-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  .incident-beam {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.5;
  }

  .transmitted-beam {
    fill: none;
    stroke: #00ff66;
    stroke-width: 2;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  .standing-wave-mode {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.8;
    filter: drop-shadow(0 0 6px #00ff66);
    animation: wave-resonate 1.2s ease-in-out infinite alternate;
  }

  /* Airy Transmission Function graph at bottom */
  .airy-graph-svg {
    position: absolute;
    bottom: 14px;
    left: 20px;
    right: 20px;
    width: 90px;
    height: 22px;
    z-index: 5;
  }

  .airy-curve {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.2;
  }

  .airy-grid {
    stroke: rgba(255, 255, 255, 0.15);
    stroke-width: 0.5;
  }

  .finesse-label {
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5.5px;
    font-family: monospace;
    color: #00ff66;
    letter-spacing: 0.5px;
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
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  @keyframes wave-resonate {
    0% {
      transform: scaleY(0.7);
      transform-origin: center 54px;
      opacity: 0.7;
    }
    100% {
      transform: scaleY(1.3);
      transform-origin: center 54px;
      opacity: 1;
    }
  }
`;

class PhysicsFabryPerotCavity extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fabryStyles}</style>
      <div class="canvas-box">
        <div class="mirror-slab mirror-1"></div>
        <div class="mirror-slab mirror-2"></div>
        <div class="cavity-glow"></div>

        <span class="finesse-label">CAVITY LENGTH L (R = 95%)</span>

        <svg class="cavity-svg" viewBox="0 0 130 130">
          <!-- Input Incident Beam -->
          <line x1="8" y1="54" x2="28" y2="54" class="incident-beam" />

          <!-- Resonant Standing Wave Modes inside Cavity (x: 34 to 96) -->
          <path d="M 34 54 Q 49.5 30 65 54 Q 80.5 78 96 54" class="standing-wave-mode" />
          <path d="M 34 54 Q 49.5 78 65 54 Q 80.5 30 96 54" class="standing-wave-mode" />

          <!-- Output Transmitted Beam -->
          <line x1="102" y1="54" x2="122" y2="54" class="transmitted-beam" />
        </svg>

        <!-- Airy Function Transmission Peaks -->
        <svg class="airy-graph-svg" viewBox="0 0 90 22">
          <line x1="0" y1="20" x2="90" y2="20" class="airy-grid" />
          <path d="M 5 20 C 15 20, 20 20, 22 2 C 24 20, 30 20, 45 20 C 60 20, 66 20, 68 2 C 70 20, 75 20, 85 20" class="airy-curve" />
        </svg>

        <div class="hud">
          <span>Finesse F = π√R/(1-R)</span>
          <span>T = 1/(1 + F sin²(δ/2))</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-fabry-perot-cavity')) {
  customElements.define('physics-fabry-perot-cavity', PhysicsFabryPerotCavity);
}
