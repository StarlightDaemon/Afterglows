const poiseuilleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d151c 0%, #030508 100%);
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

  .hp-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Rigid Cylindrical Pipe Boundary Walls (No-Slip: v=0 at r=R) */
  .pipe-wall {
    stroke: #00e5ff;
    stroke-width: 2;
    stroke-linecap: round;
  }

  .centerline {
    stroke: rgba(255, 255, 255, 0.25);
    stroke-width: 0.8;
    stroke-dasharray: 4 2;
  }

  /* Parabolic Velocity Profile (Hagen-Poiseuille) */
  .parabola-profile {
    fill: rgba(0, 255, 102, 0.15);
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .flow-arrow {
    stroke: #00ff66;
    stroke-width: 1;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-vmax { fill: #00ff66; }
  .lbl-wall { fill: #00e5ff; }
  .lbl-dp { fill: #ffaa00; }

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
  /* Laminar streamlines advance fastest on the centerline */
  .flow-arrow { animation: hp-stream 1.4s ease-in-out infinite alternate; }
  .centerline { stroke-dasharray: 5 4; animation: hp-center 1.2s linear infinite; }
  .parabola-profile { animation: hp-profile 2.6s ease-in-out infinite alternate; }
  @keyframes hp-stream { from { opacity: 0.6; transform: translateX(0); } to { opacity: 1; transform: translateX(3px); } }
  @keyframes hp-center { to { stroke-dashoffset: -18; } }
  @keyframes hp-profile { from { opacity: 0.7; } to { opacity: 1; filter: drop-shadow(0 0 3px currentColor); } }

  /* Tracer parcels: the centerline one outruns the off-axis ones, tracing the
     parabolic velocity profile. */
  .hp-tracer {
    fill: #ccffdd;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  .hpt-mid { animation: hp-run-mid 1.6s linear infinite; }
  .hpt-up { animation: hp-run-up 2.6s linear infinite; animation-delay: -0.9s; }
  .hpt-down { animation: hp-run-down 2.6s linear infinite; animation-delay: -1.7s; }

  @keyframes hp-run-mid {
    0% { transform: translate(32px, 65px); opacity: 0; }
    8% { opacity: 1; }
    92% { transform: translate(112px, 65px); opacity: 1; }
    100% { transform: translate(116px, 65px); opacity: 0; }
  }
  @keyframes hp-run-up {
    0% { transform: translate(32px, 45px); opacity: 0; }
    8% { opacity: 1; }
    92% { transform: translate(92px, 45px); opacity: 1; }
    100% { transform: translate(96px, 45px); opacity: 0; }
  }
  @keyframes hp-run-down {
    0% { transform: translate(32px, 85px); opacity: 0; }
    8% { opacity: 1; }
    92% { transform: translate(92px, 85px); opacity: 1; }
    100% { transform: translate(96px, 85px); opacity: 0; }
  }

`;

class PhysicsPoiseuillePipeFlow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${poiseuilleStyles}</style>
      <div class="canvas-box">
        <svg class="hp-svg" viewBox="0 0 130 130">
          <!-- Pipe Walls (Top y=30, Bottom y=100) -->
          <line x1="12" y1="30" x2="118" y2="30" class="pipe-wall" />
          <line x1="12" y1="100" x2="118" y2="100" class="pipe-wall" />
          <text x="14" y="24" class="lbl lbl-wall">NO-SLIP WALL (v = 0)</text>

          <!-- Pipe Centerline Axis (y=65) -->
          <line x1="12" y1="65" x2="118" y2="65" class="centerline" />

          <!-- Parabolic Velocity Profile v(r) = v_max (1 - r²/R²) -->
          <path d="
            M 30 30
            Q 96 65 30 100
            Z
          " class="parabola-profile" />

          <!-- Velocity Vectors across radius -->
          <line x1="30" y1="42" x2="68" y2="42" class="flow-arrow" />
          <polygon points="70,42 66,40 66,44" fill="#00ff66" />

          <line x1="30" y1="54" x2="88" y2="54" class="flow-arrow" />
          <polygon points="90,54 86,52 86,56" fill="#00ff66" />

          <line x1="30" y1="65" x2="96" y2="65" class="flow-arrow" />
          <polygon points="98,65 94,63 94,67" fill="#00ff66" />

          <line x1="30" y1="76" x2="88" y2="76" class="flow-arrow" />
          <polygon points="90,76 86,74 86,78" fill="#00ff66" />

          <line x1="30" y1="88" x2="68" y2="88" class="flow-arrow" />
          <polygon points="70,88 66,86 66,90" fill="#00ff66" />

          <!-- Tracer parcels demonstrating the velocity profile -->
          <circle cx="0" cy="0" r="2.4" class="hp-tracer hpt-mid" />
          <circle cx="0" cy="0" r="2" class="hp-tracer hpt-up" />
          <circle cx="0" cy="0" r="2" class="hp-tracer hpt-down" />

          <!-- Labels -->
          <text x="98" y="62" class="lbl lbl-vmax">v_max</text>
          <text x="14" y="112" class="lbl lbl-dp">ΔP PRESSURE GRADIENT →</text>
        </svg>

        <div class="hud">
          <span>Q = π R⁴ ΔP / (8 μ L)</span>
          <span>Hagen-Poiseuille Viscous Law</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-poiseuille-pipe-flow')) {
  customElements.define('physics-poiseuille-pipe-flow', PhysicsPoiseuillePipeFlow);
}
