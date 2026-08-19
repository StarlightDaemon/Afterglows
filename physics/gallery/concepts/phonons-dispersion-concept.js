const phononStyles = `
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

  .pho-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .axis {
    stroke: rgba(255, 255, 255, 0.3);
    stroke-width: 1;
  }

  .zone-edge {
    stroke: rgba(0, 229, 255, 0.3);
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  /* Optical Phonon Branch (Non-zero omega at k=0, out-of-phase ion oscillation) */
  .branch-opt {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  /* Acoustic Phonon Branch (omega -> 0 as k -> 0, sound wave limit) */
  .branch-ac {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  /* Forbidden Phonon Frequency Bandgap */
  .bandgap-box {
    fill: rgba(255, 170, 0, 0.1);
    stroke: #ffaa00;
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-opt { fill: #ff5577; }
  .lbl-ac { fill: #00ff66; }
  .lbl-gap { fill: #ffaa00; }

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

  /* Motion pass */
  /* Lattice waves propagate along both branches; the gap stays forbidden */
  .branch-opt { stroke-dasharray: 6 3; animation: pho-run 1.7s linear infinite; }
  .branch-ac { stroke-dasharray: 6 3; animation: pho-run 1.3s linear infinite; }
  .bandgap-box { animation: pho-gap 2.6s ease-in-out infinite alternate; }
  @keyframes pho-run { to { stroke-dashoffset: -18; } }
  @keyframes pho-gap { from { opacity: 0.45; } to { opacity: 0.85; } }

  /* Phonon quasiparticles sweeping along both dispersion branches. */
  .phonon-qp { filter: drop-shadow(0 0 4px currentColor); }
  .qp-opt { fill: #ff9db1; color: #ff5577; animation: pho-qp-opt 2.2s ease-in-out infinite alternate; }
  .qp-ac { fill: #9dffc4; color: #00ff66; animation: pho-qp-ac 2.2s ease-in-out infinite alternate; animation-delay: -1.1s; }

  @keyframes pho-qp-opt {
    0%   { transform: translate(20px, 28px); }
    50%  { transform: translate(62px, 33px); }
    100% { transform: translate(100px, 52px); }
  }
  @keyframes pho-qp-ac {
    0%   { transform: translate(20px, 108px); }
    50%  { transform: translate(61px, 96px); }
    100% { transform: translate(100px, 64px); }
  }

`;

class PhysicsPhononsDispersion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${phononStyles}</style>
      <div class="canvas-box">
        <svg class="pho-svg" viewBox="0 0 130 130">
          <!-- Axes (ω vs k) -->
          <line x1="20" y1="18" x2="20" y2="108" class="axis" />
          <line x1="20" y1="108" x2="118" y2="108" class="axis" />
          <text x="14" y="16" class="lbl" fill="#fff">ω</text>
          <text x="114" y="116" class="lbl" fill="#fff">k</text>

          <!-- 1st Brillouin Zone Boundary at k = π/a -->
          <line x1="100" y1="18" x2="100" y2="108" class="zone-edge" />
          <text x="94" y="116" class="lbl" fill="#00e5ff">π/a</text>

          <!-- Forbidden Phonon Bandgap Zone -->
          <rect x="20" y="52" width="80" height="12" class="bandgap-box" />
          <text x="32" y="60" class="lbl lbl-gap">PHONON BANDGAP</text>

          <!-- Optical Branch: ω_opt(k) -->
          <path d="M 20 28 Q 65 32 100 52" class="branch-opt" />
          <text x="24" y="24" class="lbl lbl-opt">OPTICAL BRANCH (ω_LO)</text>

          <!-- Acoustic Branch: ω_ac(k) -->
          <path d="M 20 108 Q 60 98 100 64" class="branch-ac" />
          <text x="36" y="98" class="lbl lbl-ac">ACOUSTIC (v_s = dω/dk)</text>

          <!-- Phonon quasiparticles on the branches -->
          <circle cx="0" cy="0" r="2.6" class="phonon-qp qp-opt" />
          <circle cx="0" cy="0" r="2.6" class="phonon-qp qp-ac" />
        </svg>

        <div class="hud">
          <span>ω² = C(1/M₁ + 1/M₂ ± √(..))</span>
          <span>Diatomic Phonon Dispersion</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-phonons-dispersion')) {
  customElements.define('physics-phonons-dispersion', PhysicsPhononsDispersion);
}
