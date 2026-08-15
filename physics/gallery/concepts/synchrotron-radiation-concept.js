const synchStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #20141a 0%, #060204 100%);
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

  .sr-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Ultra-relativistic electron bunch orbiting circular synchrotron ring */
  .electron-orbit {
    animation: sr-orbit-spin 2s linear infinite;
    transform-origin: 65px 65px;
  }

  @keyframes sr-orbit-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Relativistic forward beamed narrow radiation cone (theta ~ 1/gamma) */
  .radiation-cone {
    animation: sr-cone-flash 1.2s ease-in-out infinite alternate;
  }

  @keyframes sr-cone-flash {
    0% { opacity: 0.6; filter: drop-shadow(0 0 2px #f43f5e); }
    100% { opacity: 1; filter: drop-shadow(0 0 6px #fb7185); }
  }

  /* Bending magnet dipole pole pieces */
  .dipole-pole {
    fill: #27272a;
    stroke: #71717a;
    stroke-width: 0.8;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-e { fill: #38bdf8; }
  .lbl-cone { fill: #fb7185; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(251, 113, 133, 0.9);
    z-index: 10;
  }
`;

class PhysicsSynchrotronRadiation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${synchStyles}</style>
      <div class="canvas-box">
        <svg class="sr-svg" viewBox="0 0 130 130">
          <!-- Bending Magnet Dipole Ring Vacuum Chamber -->
          <circle cx="65" cy="65" r="42" fill="none" stroke="#3f3f46" stroke-width="6" opacity="0.4" />
          <circle cx="65" cy="65" r="42" fill="none" stroke="#71717a" stroke-width="0.8" stroke-dasharray="3 3" />

          <!-- Bending Dipole Magnet Yoke (Top Right Curve) -->
          <rect x="74" y="16" width="20" height="14" rx="2" class="dipole-pole" />
          <text x="76" y="25" class="lbl" fill="#a1a1aa">B-DIPOLE</text>

          <!-- Orbiting Ultra-Relativistic Electron Bunch & Tangential Emission Cone -->
          <g class="electron-orbit">
            <!-- Electron Bunch Dot (γ >> 1) -->
            <circle cx="65" cy="23" r="3.2" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" />
            
            <!-- Forward Relativistic Beamed Emission Cone (θ_open ~ 1/γ) -->
            <g class="radiation-cone">
              <!-- Tangential Cone Polygon -->
              <polygon points="65,23 118,12 118,34" fill="#f43f5e" fill-opacity="0.35" stroke="#fb7185" stroke-width="0.9" />
              <!-- High-Brightness Central X-Ray Ray -->
              <line x1="65" y1="23" x2="120" y2="23" stroke="#ffffff" stroke-width="1.4" />
            </g>
          </g>

          <text x="24" y="22" class="lbl lbl-e">e⁻ (v ≈ c)</text>
          <text x="78" y="44" class="lbl lbl-cone">CONE θ ≈ 1/γ</text>

          <!-- Center Orbit Origin Indicator -->
          <circle cx="65" cy="65" r="2" fill="#71717a" />
          <line x1="65" y1="65" x2="65" y2="23" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2 2" />
          <text x="56" y="52" class="lbl" fill="#38bdf8">R_bend</text>
        </svg>
        <div class="hud">
          <span>P = 2 e² c γ⁴ / (3 R²)</span>
          <span>SYNCHROTRON CONE</span>
        </div>
      </div>
    `;
  }
}

customElements.define('physics-synchrotron-radiation', PhysicsSynchrotronRadiation);
