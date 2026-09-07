const rtStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #150d1a 0%, #060308 100%);
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

  /* Reticle Cell Boundary */
  .cell-frame {
    position: absolute;
    top: 14px;
    left: 15px;
    width: 100px;
    height: 96px;
    border: 1px solid rgba(170, 85, 255, 0.4);
    box-shadow: inset 0 0 10px rgba(170, 85, 255, 0.15);
    overflow: hidden;
  }

  /* Fluid Interface SVG */
  .rt-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Heavy Fluid Layer on Top (Spike Plumes Descending) */
  .heavy-fluid {
    fill: rgba(255, 85, 170, 0.35);
    stroke: #ff55aa;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px rgba(255, 85, 170, 0.4));
    animation: spike-grow 3.6s ease-in-out infinite alternate;
  }

  /* Light Fluid Rising Bubbles */
  .light-bubble {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.2;
    stroke-dasharray: 2 2;
    animation: bubble-rise 3.6s ease-in-out infinite alternate;
  }

  /* Vortex Curls */
  .vortex-curl {
    fill: none;
    stroke: #ffcc00;
    stroke-width: 1;
    animation: vortex-roll 3.6s ease-in-out infinite alternate;
  }

  .label-rho2 {
    position: absolute;
    top: 18px;
    right: 20px;
    font-size: 5.5px;
    font-family: monospace;
    color: #ff55aa;
  }

  .label-rho1 {
    position: absolute;
    bottom: 24px;
    left: 20px;
    font-size: 5.5px;
    font-family: monospace;
    color: #00e5ff;
  }

  .vec-g {
    position: absolute;
    top: 24px;
    left: 20px;
    width: 1px;
    height: 14px;
    background: #ffaa00;
  }

  .vec-g::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -2px;
    border: 2.5px solid transparent;
    border-top-color: #ffaa00;
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
    color: rgba(255, 85, 170, 0.85);
    z-index: 10;
  }

  @keyframes spike-grow {
    0% {
      d: path("M 0 0 L 100 0 L 100 35 Q 75 38 50 35 Q 25 38 0 35 Z");
    }
    100% {
      d: path("M 0 0 L 100 0 L 100 20 C 85 20, 80 75, 75 78 C 70 80, 65 50, 50 25 C 35 50, 30 80, 25 78 C 20 75, 15 20, 0 20 Z");
    }
  }

  @keyframes bubble-rise {
    0% { transform: translateY(0); opacity: 0.3; }
    100% { transform: translateY(-16px); opacity: 0.9; }
  }

  @keyframes vortex-roll {
    0% { transform: rotate(0deg); opacity: 0.2; }
    100% { transform: rotate(180deg); opacity: 0.8; }
  }
`;

class PhysicsRayleighTaylor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rtStyles}</style>
      <div class="canvas-box">
        <div class="cell-frame">
          <svg class="rt-svg" viewBox="0 0 100 96">
            <!-- Heavy Fluid with Interpenetrating Spikes -->
            <path d="M 0 0 L 100 0 L 100 25 C 85 25, 80 65, 75 70 C 70 75, 65 45, 50 25 C 35 45, 30 75, 25 70 C 20 65, 15 25, 0 25 Z" class="heavy-fluid" />

            <!-- Rising Light Fluid Plumes -->
            <circle cx="50" cy="40" r="8" class="light-bubble" />

            <!-- Mushroom Cap Vortex Curls -->
            <path d="M 25 70 C 20 72, 18 68, 22 66" class="vortex-curl" />
            <path d="M 75 70 C 80 72, 82 68, 78 66" class="vortex-curl" />
          </svg>

          <span class="label-rho2">ρ₂ (Dense)</span>
          <span class="label-rho1">ρ₁ (Light)</span>
          <div class="vec-g" title="Gravity g"></div>
        </div>

        <div class="hud">
          <span>γ = √(A·g·k)</span>
          <span>Atwood A = (ρ₂-ρ₁)/(ρ₂+ρ₁)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-rayleigh-taylor')) {
  customElements.define('physics-rayleigh-taylor', PhysicsRayleighTaylor);
}
