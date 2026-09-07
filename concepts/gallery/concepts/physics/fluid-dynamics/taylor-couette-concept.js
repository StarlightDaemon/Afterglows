const tcStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1620 0%, #020406 100%);
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

  .tc-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Inner Rotating Cylinder (R1, Omega1) */
  .inner-cyl {
    fill: #2a3545;
    stroke: #00e5ff;
    stroke-width: 1.5;
  }

  /* Outer Stationary Cylinder (R2) */
  .outer-cyl {
    fill: none;
    stroke: rgba(255, 255, 255, 0.4);
    stroke-width: 1.5;
  }

  /* Toroidal Taylor Vortex Streamlines */
  .vortex-cell {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-cyl { fill: #00e5ff; }
  .lbl-vort { fill: #ffaa00; }
  .lbl-taylor { fill: #00ff66; }

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
  /* Counter-rotating Taylor vortices spin between the cylinders */
  .vortex-cell { stroke-dasharray: 6 4; animation: tcv-spin 1.6s linear infinite; }
  .vortex-cell:nth-of-type(even) { animation-direction: reverse; }
  .inner-cyl { animation: tcv-inner 2.4s ease-in-out infinite alternate; }
  @keyframes tcv-spin { to { stroke-dashoffset: -20; } }
  @keyframes tcv-inner { from { opacity: 0.75; } to { opacity: 1; } }

  /* Fluid parcels circulating the toroidal cells — counter-rotating pairs. */
  .cell-dot {
    fill: #ffd9a0;
    filter: drop-shadow(0 0 4px #ffaa00);
  }

  .cd-1 { animation: tcv-orbit-1 1.8s linear infinite; }
  .cd-2 { animation: tcv-orbit-2 1.8s linear infinite reverse; animation-delay: -0.6s; }
  .cd-3 { animation: tcv-orbit-3 1.8s linear infinite; animation-delay: -1.2s; }
  .cd-4 { animation: tcv-orbit-4 1.8s linear infinite reverse; animation-delay: -0.3s; }

  @keyframes tcv-orbit-1 {
    0% { transform: translate(35px, 35px) rotate(0deg) translate(8px, 0); }
    100% { transform: translate(35px, 35px) rotate(360deg) translate(8px, 0); }
  }
  @keyframes tcv-orbit-2 {
    0% { transform: translate(35px, 75px) rotate(0deg) translate(8px, 0); }
    100% { transform: translate(35px, 75px) rotate(360deg) translate(8px, 0); }
  }
  @keyframes tcv-orbit-3 {
    0% { transform: translate(95px, 55px) rotate(0deg) translate(8px, 0); }
    100% { transform: translate(95px, 55px) rotate(360deg) translate(8px, 0); }
  }
  @keyframes tcv-orbit-4 {
    0% { transform: translate(95px, 95px) rotate(0deg) translate(8px, 0); }
    100% { transform: translate(95px, 95px) rotate(360deg) translate(8px, 0); }
  }

`;

class PhysicsTaylorCouette extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tcStyles}</style>
      <div class="canvas-box">
        <svg class="tc-svg" viewBox="0 0 130 130">
          <!-- Outer Cylinder Boundaries (x=20, x=110) -->
          <line x1="20" y1="15" x2="20" y2="105" class="outer-cyl" />
          <line x1="110" y1="15" x2="110" y2="105" class="outer-cyl" />

          <!-- Inner Rotating Cylinder (x=50 to x=80) -->
          <rect x="50" y="15" width="30" height="90" rx="2" class="inner-cyl" />
          <text x="54" y="24" class="lbl lbl-cyl">INNER Ω₁</text>

          <!-- Toroidal Counter-Rotating Taylor Vortex Pairs in Left Annulus (x=20 to 50) -->
          <ellipse cx="35" cy="35" rx="10" ry="8" class="vortex-cell" />
          <ellipse cx="35" cy="55" rx="10" ry="8" class="vortex-cell" />
          <ellipse cx="35" cy="75" rx="10" ry="8" class="vortex-cell" />
          <ellipse cx="35" cy="95" rx="10" ry="8" class="vortex-cell" />

          <!-- Toroidal Counter-Rotating Taylor Vortex Pairs in Right Annulus (x=80 to 110) -->
          <ellipse cx="95" cy="35" rx="10" ry="8" class="vortex-cell" />
          <ellipse cx="95" cy="55" rx="10" ry="8" class="vortex-cell" />
          <ellipse cx="95" cy="75" rx="10" ry="8" class="vortex-cell" />
          <ellipse cx="95" cy="95" rx="10" ry="8" class="vortex-cell" />

          <!-- Circulating fluid parcels -->
          <circle cx="0" cy="0" r="2.4" class="cell-dot cd-1" />
          <circle cx="0" cy="0" r="2.4" class="cell-dot cd-2" />
          <circle cx="0" cy="0" r="2.4" class="cell-dot cd-3" />
          <circle cx="0" cy="0" r="2.4" class="cell-dot cd-4" />

          <!-- Labels -->
          <text x="14" y="116" class="lbl lbl-taylor">Ta = 4Ω₁²d⁴/ν² &gt; Ta_c</text>
          <text x="76" y="116" class="lbl lbl-vort">TAYLOR VORTICES</text>
        </svg>

        <div class="hud">
          <span>Taylor Number Ta &gt; 1708</span>
          <span>Centrifugal Instability</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-taylor-couette')) {
  customElements.define('physics-taylor-couette', PhysicsTaylorCouette);
}
