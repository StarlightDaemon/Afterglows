const frameDraggingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d0f1c 0%, #020308 100%);
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

  .kerr-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Rotating Central Kerr Black Hole */
  .event-horizon {
    fill: #000;
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 6px rgba(255, 170, 0, 0.7));
  }

  .ergosphere {
    fill: rgba(255, 85, 119, 0.12);
    stroke: #ff5577;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Swirling Spacetime Grid lines (Lense-Thirring Vortex) */
  .vortex-spiral {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1;
    opacity: 0.7;
    transform-origin: 65px 65px;
    animation: spin-vortex 4s linear infinite;
  }

  /* Precessing Gyroscope Probe (Gravity Probe B effect) */
  .gyro-orbit {
    fill: none;
    stroke: rgba(255, 255, 255, 0.2);
    stroke-width: 0.8;
  }

  .gyro-probe {
    fill: #00ff66;
    stroke: #ffffff;
    stroke-width: 0.8;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  .spin-arrow {
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-kerr { fill: #ffaa00; }
  .lbl-ergo { fill: #ff5577; }
  .lbl-omega { fill: #00e5ff; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes spin-vortex {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

class PhysicsFrameDragging extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${frameDraggingStyles}</style>
      <div class="canvas-box">
        <svg class="kerr-svg" viewBox="0 0 130 130">
          <!-- Spacetime Vortex Spiral Lines -->
          <g class="vortex-spiral">
            <path d="M 65,65 Q 75,45 95,45 T 115,65 Q 115,95 85,105 T 45,95 Q 25,75 35,45 T 65,15" />
            <path d="M 65,65 Q 55,85 35,85 T 15,65 Q 15,35 45,25 T 85,35 Q 105,55 95,85 T 65,115" />
          </g>

          <!-- Ergosphere boundary (oblate spheroid projection) -->
          <ellipse cx="65" cy="65" rx="32" ry="24" class="ergosphere" />

          <!-- Event Horizon -->
          <circle cx="65" cy="65" r="16" class="event-horizon" />

          <!-- Angular Momentum Vector J -->
          <line x1="65" y1="65" x2="65" y2="38" stroke="#ffaa00" stroke-width="1.5" />
          <polygon points="65,34 62,39 68,39" fill="#ffaa00" />
          <text x="68" y="42" class="lbl lbl-kerr">J (Spin)</text>

          <!-- Precessing Gyro Orbit -->
          <circle cx="65" cy="65" r="46" class="gyro-orbit" />
          <circle cx="111" cy="65" r="3" class="gyro-probe" />
          <line x1="111" y1="65" x2="119" y2="55" class="spin-arrow" />

          <!-- Labels -->
          <text x="10" y="16" class="lbl lbl-omega">Ω_LT = 2GJ/c²r³</text>
          <text x="10" y="24" class="lbl lbl-ergo">ERGOSPHERE</text>
        </svg>

        <div class="hud">
          <span>Lense-Thirring Precession</span>
          <span>g_tφ = -2GJ sin²θ / r</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-frame-dragging')) {
  customElements.define('physics-frame-dragging', PhysicsFrameDragging);
}
