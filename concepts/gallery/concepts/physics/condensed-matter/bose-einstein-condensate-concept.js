const becStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1a24 0%, #020508 100%);
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

  .bec-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Thermal broad cloud (T > T_c) */
  .thermal-cloud {
    fill: rgba(0, 229, 255, 0.15);
    stroke: #00e5ff;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Condensate Sharp Central Peak (T < T_c: p ≈ 0) */
  .condensate-peak {
    fill: rgba(0, 255, 102, 0.35);
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 6px #00ff66);
  }

  .trap-potential {
    fill: none;
    stroke: rgba(255, 170, 0, 0.4);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-thermal { fill: #00e5ff; }
  .lbl-bec { fill: #00ff66; }
  .lbl-trap { fill: #ffaa00; }

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
  /* Below T_c the condensate fraction breathes as the thermal cloud drains */
  .condensate-peak { transform-box: fill-box; transform-origin: 50% 100%; animation: bec-breathe 2.8s ease-in-out infinite alternate; }
  .thermal-cloud { animation: bec-drain 2.8s ease-in-out infinite alternate; }
  @keyframes bec-breathe { from { transform: scaleY(0.45); opacity: 0.8; } to { transform: scaleY(1.05); opacity: 1; filter: drop-shadow(0 0 5px currentColor); } }
  @keyframes bec-drain { from { opacity: 0.9; } to { opacity: 0.45; } }

  /* Thermal atoms condensing: they fall from the cloud into the ground-state
     peak each cooling cycle. */
  .cooling-atom {
    fill: #7deeff;
    filter: drop-shadow(0 0 4px #00e5ff);
  }

  .ca-1 { animation: bec-fall-1 2.8s ease-in infinite; }
  .ca-2 { animation: bec-fall-2 2.8s ease-in infinite; animation-delay: -0.9s; }
  .ca-3 { animation: bec-fall-3 2.8s ease-in infinite; animation-delay: -1.8s; }

  @keyframes bec-fall-1 {
    0%   { transform: translate(35px, 72px); opacity: 0; }
    12%  { opacity: 1; }
    88%  { transform: translate(60px, 82px); opacity: 1; }
    100% { transform: translate(63px, 84px); opacity: 0; }
  }
  @keyframes bec-fall-2 {
    0%   { transform: translate(96px, 74px); opacity: 0; }
    12%  { opacity: 1; }
    88%  { transform: translate(71px, 82px); opacity: 1; }
    100% { transform: translate(68px, 84px); opacity: 0; }
  }
  @keyframes bec-fall-3 {
    0%   { transform: translate(84px, 62px); opacity: 0; }
    12%  { opacity: 1; }
    88%  { transform: translate(68px, 78px); opacity: 1; }
    100% { transform: translate(66px, 82px); opacity: 0; }
  }

`;

class PhysicsBoseEinsteinCondensate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${becStyles}</style>
      <div class="canvas-box">
        <svg class="bec-svg" viewBox="0 0 130 130">
          <!-- Harmonic Magnetic Trap Potential -->
          <path d="M 15 25 Q 65 115 115 25" class="trap-potential" />
          <text x="76" y="24" class="lbl lbl-trap">MAGNETIC TRAP</text>

          <!-- Broad Thermal Distribution Pedestal (T ~ T_c) -->
          <ellipse cx="65" cy="78" rx="38" ry="16" class="thermal-cloud" />
          <text x="14" y="60" class="lbl lbl-thermal">THERMAL (T &gt; T_c)</text>

          <!-- Sharp Macroscopic Ground State Peak (N₀/N ~ 1, p=0) -->
          <path d="M 46 86 Q 60 84 63 36 Q 65 24 67 36 Q 70 84 84 86 Z" class="condensate-peak" />
          <text x="46" y="18" class="lbl lbl-bec">BEC PEAK (p = 0)</text>

          <!-- Atoms condensing into the ground state -->
          <circle cx="0" cy="0" r="2.2" class="cooling-atom ca-1" />
          <circle cx="0" cy="0" r="2.2" class="cooling-atom ca-2" />
          <circle cx="0" cy="0" r="2" class="cooling-atom ca-3" />
        </svg>

        <div class="hud">
          <span>N₀/N = 1 - (T/T_c)³</span>
          <span>T_c ~ 100 nK</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-bose-einstein-condensate')) {
  customElements.define('physics-bose-einstein-condensate', PhysicsBoseEinsteinCondensate);
}
