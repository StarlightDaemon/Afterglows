const timeDilationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0a1518 0%, #020506 100%);
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

  .clock-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Mirrors of light clock */
  .mirror {
    fill: #2a3a40;
    stroke: #00e5ff;
    stroke-width: 1;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Stationary light clock pulse (vertical bounce) */
  .light-pulse-rest {
    fill: #00ff66;
    filter: drop-shadow(0 0 4px #00ff66);
    animation: bounce-rest 1.6s ease-in-out infinite alternate;
  }

  .path-rest {
    stroke: rgba(0, 255, 102, 0.4);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Moving light clock zigzag path (relativistic hypotenuse) */
  .path-moving {
    stroke: #ffaa00;
    stroke-width: 1.2;
    stroke-dasharray: 2 2;
    filter: drop-shadow(0 0 3px rgba(255, 170, 0, 0.5));
  }

  .light-pulse-moving {
    fill: #ffaa00;
    filter: drop-shadow(0 0 5px #ffaa00);
    animation: bounce-moving 3.2s linear infinite;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-rest { fill: #00ff66; }
  .lbl-moving { fill: #ffaa00; }
  .lbl-mirror { fill: #00e5ff; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.9);
    z-index: 10;
  }

  @keyframes bounce-rest {
    0% { cy: 30; }
    100% { cy: 90; }
  }

  @keyframes bounce-moving {
    0% { cx: 40; cy: 30; }
    50% { cx: 75; cy: 90; }
    100% { cx: 110; cy: 30; }
  }
`;

class PhysicsTimeDilation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${timeDilationStyles}</style>
      <div class="canvas-box">
        <svg class="clock-svg" viewBox="0 0 130 130">
          <!-- Mirrors -->
          <rect x="15" y="24" width="20" height="4" rx="1" class="mirror" />
          <rect x="15" y="92" width="20" height="4" rx="1" class="mirror" />

          <!-- Stationary Path & Photon -->
          <line x1="25" y1="28" x2="25" y2="92" class="path-rest" />
          <circle cx="25" cy="30" r="2.5" class="light-pulse-rest" />
          <text x="12" y="16" class="lbl lbl-rest">REST: Δt₀ = 2L/c</text>

          <!-- Moving Clock Mirror Bounds (v > 0) -->
          <rect x="35" y="24" width="80" height="4" rx="1" class="mirror" />
          <rect x="35" y="92" width="80" height="4" rx="1" class="mirror" />

          <!-- Zigzag Path (Hypotenuse cΔt) -->
          <polyline points="40,28 75,92 110,28" fill="none" class="path-moving" />
          <circle r="3" class="light-pulse-moving" />
          <text x="48" y="16" class="lbl lbl-moving">MOVING: Δt = γΔt₀</text>

          <!-- Velocity vector -->
          <line x1="60" y1="110" x2="90" y2="110" stroke="#00e5ff" stroke-width="1.2" marker-end="url(#arrow)" />
          <text x="94" y="112" class="lbl" fill="#00e5ff">v →</text>
        </svg>

        <div class="hud">
          <span>Δt = Δt₀ / √(1 - v²/c²)</span>
          <span>(cΔt)² = (vΔt)² + (cΔt₀)²</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-time-dilation')) {
  customElements.define('physics-time-dilation', PhysicsTimeDilation);
}
