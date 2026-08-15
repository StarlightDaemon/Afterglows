const blochStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1220 0%, #020408 100%);
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

  .bloch-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Periodic Energy Band in Brillouin Zone E(k) = -E₀ cos(ka) */
  .energy-band {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  .zone-boundary {
    stroke: rgba(255, 255, 255, 0.25);
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  /* Oscillating Electron Wavepacket (Traversing across BZ boundary & Bragg reflecting) */
  .bloch-electron {
    fill: #00ff66;
    filter: drop-shadow(0 0 5px #00ff66);
    animation: bloch-osc 3.2s linear infinite;
  }

  /* Real-space spatial oscillation amplitude */
  .real-osc {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.2;
    stroke-dasharray: 2 2;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-band { fill: #00e5ff; }
  .lbl-osc { fill: #00ff66; }
  .lbl-field { fill: #ff5577; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  @keyframes bloch-osc {
    0% { cx: 25; cy: 75; }
    50% { cx: 65; cy: 35; }
    100% { cx: 105; cy: 75; }
  }
`;

class PhysicsBlochOscillations extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${blochStyles}</style>
      <div class="canvas-box">
        <svg class="bloch-svg" viewBox="0 0 130 130">
          <!-- 1st Brillouin Zone Bounds ([-π/a, +π/a]) -->
          <line x1="25" y1="20" x2="25" y2="90" class="zone-boundary" />
          <line x1="105" y1="20" x2="105" y2="90" class="zone-boundary" />
          <text x="18" y="98" class="lbl" fill="#fff">-π/a</text>
          <text x="98" y="98" class="lbl" fill="#fff">+π/a</text>

          <!-- Cosine Energy Band E(k) -->
          <path d="M 25 75 Q 45 75 65 35 Q 85 75 105 75" class="energy-band" />
          <text x="44" y="24" class="lbl lbl-band">E(k) = -t cos(ka)</text>

          <!-- Electric Field Vector E_x -->
          <line x1="45" y1="110" x2="85" y2="110" stroke="#ff5577" stroke-width="1.5" />
          <polygon points="88,110 83,107 83,113" fill="#ff5577" />
          <text x="48" y="106" class="lbl lbl-field">DC FIELD E_x →</text>

          <!-- Oscillating Electron in k-space / real space -->
          <circle cx="65" cy="35" r="3" class="bloch-electron" />
          <text x="70" y="44" class="lbl lbl-osc">BLOCH ELECTRON</text>
        </svg>

        <div class="hud">
          <span>ω_B = e·E·a / ℏ</span>
          <span>Bloch k-Space Recirculation</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-bloch-oscillations')) {
  customElements.define('physics-bloch-oscillations', PhysicsBlochOscillations);
}
