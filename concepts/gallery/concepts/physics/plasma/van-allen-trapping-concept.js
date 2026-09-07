const vanAllenStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e1220 0%, #030408 100%);
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

  .va-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Earth Terrestrial Dipole Center */
  .earth {
    fill: #152538;
    stroke: #00e5ff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 4px #00e5ff);
  }

  /* Dipole Field Lines */
  .dipole-line {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Trapped Helical Particle Trajectory with Mirror Bounce */
  .trapped-particle {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .mirror-pt {
    fill: #ff5577;
    filter: drop-shadow(0 0 4px #ff5577);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-earth { fill: #00e5ff; }
  .lbl-mirror { fill: #ff5577; }
  .lbl-drift { fill: #00ff66; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.85);
    z-index: 10;
  }

  /* Motion pass */
  /* Trapped particle bounces between mirror points along the field line */
  .trapped-particle { animation: va-bounce 1.7s ease-in-out infinite alternate; }
  .mirror-pt { animation: va-mirror 1.7s ease-in-out infinite alternate; }
  .dipole-line { stroke-dasharray: 5 4; animation: va-drift 2.6s linear infinite; }
  @keyframes va-bounce { from { transform: translateY(-9px); } to { transform: translateY(9px); } }
  @keyframes va-mirror { from { opacity: 0.55; } to { opacity: 1; filter: drop-shadow(0 0 3px currentColor); } }
  @keyframes va-drift { to { stroke-dashoffset: -18; } }

`;

class PhysicsVanAllenTrapping extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vanAllenStyles}</style>
      <div class="canvas-box">
        <svg class="va-svg" viewBox="0 0 130 130">
          <!-- Earth Dipole Center -->
          <circle cx="65" cy="65" r="14" class="earth" />
          <text x="56" y="67" class="lbl lbl-earth">EARTH</text>

          <!-- Geomagnetic Dipole Lines -->
          <path d="M 65 51 C 30 25, 15 105, 65 79" class="dipole-line" />
          <path d="M 65 51 C 100 25, 115 105, 65 79" class="dipole-line" />
          <path d="M 65 51 C 10 15, 0 115, 65 79" class="dipole-line" />
          <path d="M 65 51 C 120 15, 130 115, 65 79" class="dipole-line" />

          <!-- Trapped Particle Helical Mirror Bounce Orbit -->
          <path d="
            M 68 40
            C 92 35, 106 65, 96 85
            C 88 100, 72 90, 68 90
            C 64 90, 78 75, 88 65
            C 98 55, 84 45, 68 40
          " class="trapped-particle" />

          <!-- Mirror Points (Magnetic Gradient Reflection) -->
          <circle cx="68" cy="40" r="2.5" class="mirror-pt" />
          <circle cx="68" cy="90" r="2.5" class="mirror-pt" />

          <!-- Labels -->
          <text x="74" y="38" class="lbl lbl-mirror">MIRROR POINT B_m</text>
          <text x="74" y="94" class="lbl lbl-mirror">MIRROR POINT B_m</text>
          <text x="14" y="16" class="lbl lbl-drift">∇B AZIMUTHAL DRIFT</text>
        </svg>

        <div class="hud">
          <span>μ = mv_⊥² / 2B = CONST</span>
          <span>Van Allen Radiation Belt</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-van-allen-trapping')) {
  customElements.define('physics-van-allen-trapping', PhysicsVanAllenTrapping);
}
