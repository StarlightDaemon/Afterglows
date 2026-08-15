const reconStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1c1210 0%, #060302 100%);
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

  .rec-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Inflow Magnetic Field Lines (Anti-parallel: Blue / Orange) */
  .field-in-top {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  .field-in-bot {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  /* Central Sweet-Parker Current Sheet (Dissipation / Reconnection Zone) */
  .current-sheet {
    fill: #ff3344;
    filter: drop-shadow(0 0 6px #ff3344);
    animation: pulse-sheet 1.4s ease-in-out infinite alternate;
  }

  /* High-velocity Reconnected Plasma Outflow Jets (Left & Right) */
  .jet-arrow {
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #00ff66);
    animation: jet-pulse 1.8s ease-out infinite;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-inflow { fill: #00e5ff; }
  .lbl-sheet { fill: #ff3344; }
  .lbl-jet { fill: #00ff66; }

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

  @keyframes pulse-sheet {
    0% { opacity: 0.6; }
    100% { opacity: 1.0; }
  }

  @keyframes jet-pulse {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -20; }
  }
`;

class PhysicsMagneticReconnection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${reconStyles}</style>
      <div class="canvas-box">
        <svg class="rec-svg" viewBox="0 0 130 130">
          <!-- Reconnected Separatrix Magnetic Field Lines -->
          <!-- Top Inflow Arch -->
          <path d="M 15 25 Q 65 52 115 25" class="field-in-top" />
          <path d="M 15 38 Q 65 56 115 38" class="field-in-top" />

          <!-- Bottom Inflow Arch -->
          <path d="M 15 105 Q 65 78 115 105" class="field-in-bot" />
          <path d="M 15 92 Q 65 74 115 92" class="field-in-bot" />

          <!-- Left Outflow Reconnected Loop -->
          <path d="M 15 25 C 45 45, 45 85, 15 105" stroke="#00ff66" stroke-width="1.2" fill="none" />

          <!-- Right Outflow Reconnected Loop -->
          <path d="M 115 25 C 85 45, 85 85, 115 105" stroke="#00ff66" stroke-width="1.2" fill="none" />

          <!-- Sweet-Parker Current Sheet (X-Point) -->
          <ellipse cx="65" cy="65" rx="8" ry="3" class="current-sheet" />
          <text x="44" y="60" class="lbl lbl-sheet">X-POINT</text>

          <!-- Inflow & Outflow Velocity Vectors -->
          <text x="48" y="18" class="lbl lbl-inflow">v_in ↓</text>
          <text x="48" y="118" class="lbl lbl-inflow">v_in ↑</text>
          <text x="12" y="68" class="lbl lbl-jet">← JET v_A</text>
          <text x="88" y="68" class="lbl lbl-jet">JET v_A →</text>
        </svg>

        <div class="hud">
          <span>E_rec = η J_z = -v_in × B</span>
          <span>Magnetic Energy Release</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-magnetic-reconnection')) {
  customElements.define('physics-magnetic-reconnection', PhysicsMagneticReconnection);
}
