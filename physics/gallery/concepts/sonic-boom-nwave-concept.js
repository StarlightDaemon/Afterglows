const sonicStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151014 0%, #030204 100%);
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

  .sonic-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Supersonic Aircraft Cone & Body */
  .jet {
    fill: #00e5ff;
    filter: drop-shadow(0 0 4px #00e5ff);
  }

  .mach-cone {
    stroke: #ffaa00;
    stroke-width: 1.2;
    stroke-dasharray: 3 2;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  /* Characteristic N-Wave Ground Signature */
  .n-wave {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #ff5577);
  }

  .ground-line {
    stroke: rgba(255, 255, 255, 0.3);
    stroke-width: 1;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-mach { fill: #00e5ff; }
  .lbl-nwave { fill: #ff5577; }
  .lbl-bow { fill: #ffaa00; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 85, 119, 0.9);
    z-index: 10;
  }
`;

class PhysicsSonicBoomNwave extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sonicStyles}</style>
      <div class="canvas-box">
        <svg class="sonic-svg" viewBox="0 0 130 130">
          <!-- Supersonic Aircraft at (x=100, y=30) M = 2.0 -->
          <polygon points="100,30 85,25 88,30 85,35" class="jet" />
          <text x="76" y="20" class="lbl lbl-mach">M = 2.0 (v &gt; c)</text>

          <!-- Mach Shock Cone Envelope -->
          <line x1="100" y1="30" x2="20" y2="70" class="mach-cone" />
          <line x1="100" y1="30" x2="60" y2="10" class="mach-cone" />
          <text x="32" y="60" class="lbl lbl-bow">SHOCK CONE</text>

          <!-- Ground Baseline P_0 -->
          <line x1="10" y1="95" x2="120" y2="95" class="ground-line" />
          <text x="12" y="104" class="lbl" fill="rgba(255,255,255,0.5)">P₀ AMBIENT</text>

          <!-- N-Wave Overpressure Profile: Bow Shock (+ΔP) -> Expansion -> Tail Shock -->
          <path d="
            M 25 95
            L 40 95
            L 40 76
            L 80 114
            L 80 95
            L 115 95
          " class="n-wave" />

          <text x="36" y="72" class="lbl lbl-nwave">+ΔP BOW</text>
          <text x="82" y="118" class="lbl lbl-nwave">-ΔP TAIL</text>
          <text x="52" y="86" class="lbl lbl-nwave">N-WAVE</text>
        </svg>

        <div class="hud">
          <span>sin μ = 1 / M</span>
          <span>Double-Bang Sonic Shock</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-sonic-boom-nwave')) {
  customElements.define('physics-sonic-boom-nwave', PhysicsSonicBoomNwave);
}
