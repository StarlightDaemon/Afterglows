const vdpStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #15101a 0%, #030205 100%);
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

  .vdp-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .axis {
    stroke: rgba(255, 255, 255, 0.25);
    stroke-width: 0.8;
  }

  /* Non-linear Van der Pol Stable Limit Cycle (Phase Portrait) */
  .limit-cycle {
    fill: rgba(0, 229, 255, 0.08);
    stroke: #00e5ff;
    stroke-width: 1.8;
    filter: drop-shadow(0 0 4px #00e5ff);
  }

  /* Inward Spiral Trajectory (From large amplitude) */
  .spiral-in {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Outward Spiral Trajectory (From small perturbation at origin) */
  .spiral-out {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .orbiting-state {
    fill: #ffaa00;
    filter: drop-shadow(0 0 5px #ffaa00);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-cycle { fill: #00e5ff; }
  .lbl-spiral { fill: #00ff66; }
  .lbl-mu { fill: #ffaa00; }

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

  /* Motion pass */
  /* The state orbits the self-sustained limit cycle */
  .limit-cycle { stroke-dasharray: 6 4; animation: vdp-orbit 1.9s linear infinite; }
  .orbiting-state { animation: vdp-state 1.9s ease-in-out infinite alternate; }
  .spiral-in, .spiral-out { animation: vdp-spiral 3.2s ease-in-out infinite alternate; }
  @keyframes vdp-orbit { to { stroke-dashoffset: -20; } }
  @keyframes vdp-state { from { opacity: 0.6; transform: scale(0.9); } to { opacity: 1; transform: scale(1.15); filter: drop-shadow(0 0 4px currentColor); } }
  @keyframes vdp-spiral { from { opacity: 0.35; } to { opacity: 0.8; } }

`;

class PhysicsVanDerPolOscillator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vdpStyles}</style>
      <div class="canvas-box">
        <svg class="vdp-svg" viewBox="0 0 130 130">
          <!-- Phase Space Axes (x vs dx/dt = v) -->
          <line x1="12" y1="65" x2="118" y2="65" class="axis" />
          <line x1="65" y1="12" x2="65" y2="118" class="axis" />
          <text x="114" y="62" class="lbl" fill="#fff">x</text>
          <text x="68" y="16" class="lbl" fill="#fff">ẋ</text>

          <!-- Outer Inward Spiral (Attracted to Limit Cycle) -->
          <path d="
            M 115 65
            C 115 110, 20 110, 20 65
            C 20 25, 105 25, 105 65
          " class="spiral-in" />

          <!-- Inner Outward Unstable Spiral (Repelled from origin) -->
          <path d="
            M 65 65
            Q 75 75 75 65
            T 55 65
            T 80 65
          " class="spiral-out" />

          <!-- Non-linear Relaxation Stable Limit Cycle (μ = 1.5) -->
          <path d="
            M 98 65
            C 98 96, 75 92, 50 82
            C 30 74, 32 65, 32 65
            C 32 34, 55 38, 80 48
            C 100 56, 98 65, 98 65
            Z
          " class="limit-cycle" />

          <circle cx="98" cy="65" r="2.5" class="orbiting-state" />

          <!-- Labels -->
          <text x="14" y="24" class="lbl lbl-cycle">LIMIT CYCLE</text>
          <text x="14" y="32" class="lbl lbl-mu">μ(1 - x²)ẋ</text>
        </svg>

        <div class="hud">
          <span>ẍ - μ(1 - x²)ẋ + x = 0</span>
          <span>Self-Sustained Limit Cycle</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-van-der-pol-oscillator')) {
  customElements.define('physics-van-der-pol-oscillator', PhysicsVanDerPolOscillator);
}
