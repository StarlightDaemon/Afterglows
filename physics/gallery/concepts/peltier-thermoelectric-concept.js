const peltierStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1a1614 0%, #050403 100%);
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

  .pt-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Cold ceramic top plate heat absorption (Q_c) */
  .cold-plate {
    fill: #0284c7;
    filter: drop-shadow(0 0 3px #38bdf8);
  }

  /* Hot ceramic bottom plate heat dissipation (Q_h) */
  .hot-plate {
    fill: #dc2626;
    filter: drop-shadow(0 0 3px #f87171);
  }

  /* Heat flux carrier flow through p-n semiconductor couples */
  .heat-flux-arrows {
    animation: pt-flux-flow 1.5s linear infinite;
  }

  @keyframes pt-flux-flow {
    0% { stroke-dashoffset: 16; opacity: 0.5; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  /* Electric current loop */
  .current-arrow {
    animation: pt-current-pulse 2s ease-in-out infinite alternate;
  }

  /* Charge carriers pumped downward through the p-n pellets, hauling heat
     from the cold plate to the hot plate. */
  .pump-carrier {
    fill: #ffd9a0;
    filter: drop-shadow(0 0 4px #f97316);
  }

  .pc-1 { animation: pt-pump-1 1.6s linear infinite; }
  .pc-2 { animation: pt-pump-2 1.6s linear infinite; animation-delay: -0.4s; }
  .pc-3 { animation: pt-pump-3 1.6s linear infinite; animation-delay: -0.8s; }
  .pc-4 { animation: pt-pump-4 1.6s linear infinite; animation-delay: -1.2s; }

  @keyframes pt-pump-1 {
    0% { transform: translate(34px, 38px); opacity: 0; }
    12% { opacity: 1; }
    88% { transform: translate(34px, 72px); opacity: 1; }
    100% { transform: translate(34px, 75px); opacity: 0; }
  }
  @keyframes pt-pump-2 {
    0% { transform: translate(52px, 38px); opacity: 0; }
    12% { opacity: 1; }
    88% { transform: translate(52px, 72px); opacity: 1; }
    100% { transform: translate(52px, 75px); opacity: 0; }
  }
  @keyframes pt-pump-3 {
    0% { transform: translate(78px, 38px); opacity: 0; }
    12% { opacity: 1; }
    88% { transform: translate(78px, 72px); opacity: 1; }
    100% { transform: translate(78px, 75px); opacity: 0; }
  }
  @keyframes pt-pump-4 {
    0% { transform: translate(96px, 38px); opacity: 0; }
    12% { opacity: 1; }
    88% { transform: translate(96px, 72px); opacity: 1; }
    100% { transform: translate(96px, 75px); opacity: 0; }
  }

  @keyframes pt-current-pulse {
    0% { stroke: #fbbf24; }
    100% { stroke: #fef08a; filter: drop-shadow(0 0 2px #f59e0b); }
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-cold { fill: #38bdf8; }
  .lbl-hot { fill: #f87171; }
  .lbl-pn { fill: #ffffff; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(251, 146, 60, 0.9);
    z-index: 10;
  }
`;

class PhysicsPeltierThermoelectric extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${peltierStyles}</style>
      <div class="canvas-box">
        <svg class="pt-svg" viewBox="0 0 130 130">
          <!-- Top Cold Ceramic Substrate Plate (Absorbing Q_cold) -->
          <rect x="20" y="24" width="90" height="7" rx="1.5" class="cold-plate" />
          <text x="35" y="20" class="lbl lbl-cold">COLD JUNCTION (T_c)</text>

          <!-- Top Copper Interconnect Tabs -->
          <rect x="26" y="31" width="34" height="4" fill="#d97706" stroke="#fbbf24" stroke-width="0.5" />
          <rect x="70" y="31" width="34" height="4" fill="#d97706" stroke="#fbbf24" stroke-width="0.5" />

          <!-- Bismuth Telluride (Bi2Te3) P-Type & N-Type Semiconductor Pellets -->
          <!-- Pellet 1: P-Type -->
          <rect x="28" y="35" width="12" height="40" rx="1" fill="#7e22ce" stroke="#c084fc" stroke-width="0.8" />
          <text x="32" y="58" class="lbl lbl-pn">P</text>

          <!-- Pellet 2: N-Type -->
          <rect x="46" y="35" width="12" height="40" rx="1" fill="#0369a1" stroke="#38bdf8" stroke-width="0.8" />
          <text x="50" y="58" class="lbl lbl-pn">N</text>

          <!-- Pellet 3: P-Type -->
          <rect x="72" y="35" width="12" height="40" rx="1" fill="#7e22ce" stroke="#c084fc" stroke-width="0.8" />
          <text x="76" y="58" class="lbl lbl-pn">P</text>

          <!-- Pellet 4: N-Type -->
          <rect x="90" y="35" width="12" height="40" rx="1" fill="#0369a1" stroke="#38bdf8" stroke-width="0.8" />
          <text x="94" y="58" class="lbl lbl-pn">N</text>

          <!-- Thermoelectric Peltier Heat Pumping Flux (Top to Bottom) -->
          <g class="heat-flux-arrows" stroke="#f97316" stroke-width="1.2" stroke-dasharray="3 3" fill="none">
            <line x1="34" y1="38" x2="34" y2="72" />
            <line x1="52" y1="38" x2="52" y2="72" />
            <line x1="78" y1="38" x2="78" y2="72" />
            <line x1="96" y1="38" x2="96" y2="72" />
          </g>

          <!-- Pumped charge carriers in the pellets -->
          <circle cx="0" cy="0" r="2.2" class="pump-carrier pc-1" />
          <circle cx="0" cy="0" r="2.2" class="pump-carrier pc-2" />
          <circle cx="0" cy="0" r="2.2" class="pump-carrier pc-3" />
          <circle cx="0" cy="0" r="2.2" class="pump-carrier pc-4" />

          <!-- Bottom Copper Interconnect Tabs -->
          <rect x="48" y="75" width="34" height="4" fill="#d97706" stroke="#fbbf24" stroke-width="0.5" />

          <!-- Bottom Hot Ceramic Substrate Plate (Dissipating Q_hot) -->
          <rect x="20" y="79" width="90" height="7" rx="1.5" class="hot-plate" />
          <text x="36" y="94" class="lbl lbl-hot">HOT JUNCTION (T_h)</text>

          <!-- DC Current Input Loop (Current I) -->
          <g class="current-arrow" stroke-width="1.2" fill="none">
            <path d="M 16 106 L 28 106 L 28 75" />
            <path d="M 102 75 L 102 106 L 114 106" />
          </g>
          <text x="14" y="114" class="lbl" fill="#fbbf24">I (+)</text>
          <text x="108" y="114" class="lbl" fill="#fbbf24">I (-)</text>
        </svg>
        <div class="hud">
          <span>Q̇ = Π I</span>
          <span>PELTIER EFFECT</span>
        </div>
      </div>
    `;
  }
}

customElements.define('physics-peltier-thermoelectric', PhysicsPeltierThermoelectric);
