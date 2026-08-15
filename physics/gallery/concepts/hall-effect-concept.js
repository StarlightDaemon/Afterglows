const hallStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d151c 0%, #03060a 100%);
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

  /* Semiconductor Slab */
  .semiconductor-bar {
    position: absolute;
    top: 40px;
    left: 20px;
    right: 20px;
    height: 44px;
    background: rgba(0, 80, 120, 0.35);
    border: 1.5px solid #00e5ff;
    box-shadow: inset 0 0 10px rgba(0, 229, 255, 0.2);
    z-index: 5;
  }

  /* Magnetic Field (Into page: crosses) */
  .b-cross-grid {
    position: absolute;
    top: 44px;
    left: 24px;
    right: 24px;
    height: 36px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    pointer-events: none;
    z-index: 6;
  }

  .b-cross {
    font-size: 8px;
    font-family: monospace;
    color: rgba(255, 85, 119, 0.4);
  }

  /* Deflected Charge Carriers (Electrons) */
  .electron-stream {
    position: absolute;
    top: 48px;
    left: 22px;
    right: 22px;
    height: 28px;
    z-index: 7;
  }

  .carrier-e {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00ff66;
    box-shadow: 0 0 4px #00ff66;
  }

  .e1 { top: 12px; left: 10px; animation: drift-e 2s linear infinite; }
  .e2 { top: 14px; left: 35px; animation: drift-e 2s linear infinite 0.5s; }
  .e3 { top: 12px; left: 60px; animation: drift-e 2s linear infinite 1.0s; }

  /* Surface Charge Layers */
  .surface-neg {
    position: absolute;
    top: 32px;
    left: 30px;
    right: 30px;
    display: flex;
    justify-content: space-around;
    font-size: 6px;
    font-family: monospace;
    font-weight: bold;
    color: #00ff66;
    z-index: 8;
  }

  .surface-pos {
    position: absolute;
    bottom: 38px;
    left: 30px;
    right: 30px;
    display: flex;
    justify-content: space-around;
    font-size: 6px;
    font-family: monospace;
    font-weight: bold;
    color: #ff5577;
    z-index: 8;
  }

  /* Voltmeter and Probes */
  .voltmeter-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  }

  .probe-wire {
    fill: none;
    stroke: #ffcc00;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .voltmeter-badge {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 14px;
    background: #102010;
    border: 1px solid #00ff66;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6px;
    font-family: monospace;
    color: #00ff66;
    z-index: 10;
  }

  .current-label {
    position: absolute;
    bottom: 24px;
    left: 14px;
    font-size: 5.5px;
    font-family: monospace;
    color: #00e5ff;
  }

  .b-label {
    position: absolute;
    top: 14px;
    right: 14px;
    font-size: 5.5px;
    font-family: monospace;
    color: #ff5577;
  }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes drift-e {
    0% { transform: translate(0, 0); }
    100% { transform: translate(45px, -10px); }
  }
`;

class PhysicsHallEffect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hallStyles}</style>
      <div class="canvas-box">
        <div class="semiconductor-bar"></div>

        <div class="b-cross-grid">
          <span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span>
          <span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span>
        </div>

        <div class="surface-neg">
          <span>⊖</span><span>⊖</span><span>⊖</span><span>⊖</span><span>⊖</span>
        </div>

        <div class="surface-pos">
          <span>⊕</span><span>⊕</span><span>⊕</span><span>⊕</span><span>⊕</span>
        </div>

        <div class="electron-stream">
          <div class="carrier-e e1"></div>
          <div class="carrier-e e2"></div>
          <div class="carrier-e e3"></div>
        </div>

        <svg class="voltmeter-svg" viewBox="0 0 130 130">
          <path d="M 65 24 L 65 40" class="probe-wire" />
          <path d="M 65 84 L 65 104 L 110 104 L 110 17 L 81 17" class="probe-wire" />
        </svg>

        <div class="voltmeter-badge">V_H = 12mV</div>

        <span class="current-label">Current I_x →</span>
        <span class="b-label">Field B_z ⊗</span>

        <div class="hud">
          <span>V_H = I·B / (n·q·t)</span>
          <span>E_H = v_d × B</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-hall-effect')) {
  customElements.define('physics-hall-effect', PhysicsHallEffect);
}
