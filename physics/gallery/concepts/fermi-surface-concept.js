const fermiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1618 0%, #020506 100%);
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

  .fermi-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* 1st Brillouin Zone Square Boundary (±π/a) */
  .bz-boundary {
    fill: rgba(0, 229, 255, 0.06);
    stroke: #00e5ff;
    stroke-width: 1.2;
  }

  /* 2D Fermi Surface Contours (Constant energy in k-space) */
  .fermi-contour {
    fill: rgba(0, 255, 102, 0.15);
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  /* High-symmetry reciprocal points (Γ, X, M) */
  .k-axis {
    stroke: rgba(255, 255, 255, 0.25);
    stroke-width: 0.8;
  }

  .sym-pt {
    fill: #ffaa00;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-bz { fill: #00e5ff; }
  .lbl-ef { fill: #00ff66; }
  .lbl-sym { fill: #ffaa00; }

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
  /* Quasiparticles march around the Fermi contour */
  .fermi-contour { stroke-width: 3; stroke-dasharray: 9 7; animation: fermi-march 2.2s linear infinite, fermi-breathe 1.6s ease-in-out infinite alternate; }
  .sym-pt { r: 3.5px; animation: fermi-sym 2.4s ease-in-out infinite alternate; }
  @keyframes fermi-march { to { stroke-dashoffset: -26; } }
  @keyframes fermi-breathe { from { opacity: 0.5; } to { opacity: 1; filter: drop-shadow(0 0 5px currentColor); } }
  @keyframes fermi-sym { from { opacity: 0.2; } to { opacity: 1; filter: drop-shadow(0 0 4px currentColor); } }

  /* Electron quasiparticle circulating the Fermi contour. */
  .fermi-qp {
    fill: #ffffff;
    filter: drop-shadow(0 0 5px #00ff66);
    animation: fermi-orbit 2.6s linear infinite;
  }

  @keyframes fermi-orbit {
    0%    { transform: translate(65px, 34px); }
    12.5% { transform: translate(86px, 46px); }
    25%   { transform: translate(96px, 65px); }
    37.5% { transform: translate(86px, 84px); }
    50%   { transform: translate(65px, 96px); }
    62.5% { transform: translate(44px, 84px); }
    75%   { transform: translate(34px, 65px); }
    87.5% { transform: translate(44px, 46px); }
    100%  { transform: translate(65px, 34px); }
  }

`;

class PhysicsFermiSurface extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fermiStyles}</style>
      <div class="canvas-box">
        <svg class="fermi-svg" viewBox="0 0 130 130">
          <!-- Reciprocal k-space Axes (kx, ky) -->
          <line x1="15" y1="65" x2="115" y2="65" class="k-axis" />
          <line x1="65" y1="15" x2="65" y2="115" class="k-axis" />
          <text x="114" y="62" class="lbl" fill="rgba(255,255,255,0.6)">k_x</text>
          <text x="68" y="18" class="lbl" fill="rgba(255,255,255,0.6)">k_y</text>

          <!-- 1st Brillouin Zone Square ([-π/a, π/a]) -->
          <rect x="25" y="25" width="80" height="80" class="bz-boundary" />
          <text x="74" y="22" class="lbl lbl-bz">1st BRILLOUIN ZONE</text>

          <!-- 2D Tight-Binding Fermi Surface (Near Half-Filling) -->
          <path d="
            M 65 34
            Q 86 44 96 65
            Q 86 86 65 96
            Q 44 86 34 65
            Q 44 44 65 34
            Z
          " class="fermi-contour" />

          <!-- Circulating electron quasiparticle -->
          <circle cx="0" cy="0" r="2.8" class="fermi-qp" />

          <!-- High Symmetry Points: Γ (0,0), X (π/a, 0), M (π/a, π/a) -->
          <circle cx="65" cy="65" r="2" class="sym-pt" />
          <text x="68" y="63" class="lbl lbl-sym">Γ</text>

          <circle cx="105" cy="65" r="2" class="sym-pt" />
          <text x="100" y="61" class="lbl lbl-sym">X</text>

          <circle cx="105" cy="25" r="2" class="sym-pt" />
          <text x="98" y="32" class="lbl lbl-sym">M</text>

          <text x="44" y="52" class="lbl lbl-ef">E_F (OCCUPIED)</text>
        </svg>

        <div class="hud">
          <span>E(k) = -2t(cos k_x a + cos k_y a)</span>
          <span>Fermi Momentum Surface</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-fermi-surface')) {
  customElements.define('physics-fermi-surface', PhysicsFermiSurface);
}
