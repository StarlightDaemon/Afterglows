const stirlingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #18120d 0%, #060302 100%);
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

  .pv-svg {
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

  /* Closed Stirling PV Loop */
  .cycle-loop {
    fill: rgba(255, 170, 0, 0.15);
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #ffaa00);
  }

  .isotherm-th {
    stroke: #ff5577;
    stroke-width: 1.2;
  }

  .isotherm-tc {
    stroke: #00e5ff;
    stroke-width: 1.2;
  }

  .isochor {
    stroke: #00ff66;
    stroke-width: 1.2;
  }

  .state-pt {
    fill: #ffffff;
    stroke: #ffaa00;
    stroke-width: 1;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-th { fill: #ff5577; }
  .lbl-tc { fill: #00e5ff; }
  .lbl-reg { fill: #00ff66; }

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
`;

class PhysicsStirlingEngineCycle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stirlingStyles}</style>
      <div class="canvas-box">
        <svg class="pv-svg" viewBox="0 0 130 130">
          <!-- P-V Axes -->
          <line x1="20" y1="18" x2="20" y2="108" class="axis" />
          <line x1="20" y1="108" x2="118" y2="108" class="axis" />
          <text x="14" y="16" class="lbl" fill="#fff">P</text>
          <text x="114" y="116" class="lbl" fill="#fff">V</text>

          <!-- Closed Stirling Cycle Path:
               1 -> 2: Isothermal Expansion at T_H
               2 -> 3: Isochoric Cooling (Regeneration)
               3 -> 4: Isothermal Compression at T_C
               4 -> 1: Isochoric Heating (Regeneration)
          -->
          <path d="
            M 38 34
            Q 65 36 94 62
            L 94 92
            Q 65 80 38 72
            Z
          " class="cycle-loop" />

          <!-- State points -->
          <circle cx="38" cy="34" r="2" class="state-pt" />
          <circle cx="94" cy="62" r="2" class="state-pt" />
          <circle cx="94" cy="92" r="2" class="state-pt" />
          <circle cx="38" cy="72" r="2" class="state-pt" />

          <!-- Stage Labels -->
          <text x="50" y="32" class="lbl lbl-th">1→2 Isotherm T_H</text>
          <text x="98" y="78" class="lbl lbl-reg">2→3 V=const</text>
          <text x="50" y="98" class="lbl lbl-tc">3→4 Isotherm T_C</text>
          <text x="24" y="56" class="lbl lbl-reg">4→1</text>
        </svg>

        <div class="hud">
          <span>η = 1 - T_C/T_H (Ideal)</span>
          <span>Regenerative Stirling Cycle</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-stirling-engine-cycle')) {
  customElements.define('physics-stirling-engine-cycle', PhysicsStirlingEngineCycle);
}
