const homopolarStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1a1408 0%, #080502 100%);
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

  /* Rotating Copper Disk */
  .copper-disk {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #ffcc66 0%, #cc7722 60%, #663300 100%);
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 12px rgba(255, 170, 0, 0.4);
    animation: rotate-disk 3s linear infinite;
    z-index: 5;
  }

  .disk-spokes {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .disk-spoke {
    stroke: rgba(255, 255, 255, 0.25);
    stroke-width: 0.8;
  }

  /* Central Axle */
  .center-axle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    z-index: 10;
  }

  /* Magnetic Field Symbols (Out of page: dots) */
  .b-field-grid {
    position: absolute;
    inset: 15px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    pointer-events: none;
    z-index: 2;
  }

  .b-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 4px #00e5ff;
    opacity: 0.6;
  }

  /* Brushes and Circuit Wires SVG */
  .circuit-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
  }

  .circuit-wire {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.4;
  }

  .current-flow {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.4;
    stroke-dasharray: 3 6;
    animation: flow-circuit 0.8s linear infinite;
  }

  .brush-contact {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #ff5577;
    border-radius: 1px;
    box-shadow: 0 0 6px #ff5577;
    z-index: 9;
  }

  .brush-rim { top: 62px; right: 29px; }
  .brush-axle { top: 62px; left: 62px; }

  .meter-box {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 12px;
    background: #112215;
    border: 1px solid #00ff66;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5.5px;
    font-family: monospace;
    color: #00ff66;
    z-index: 10;
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
    color: rgba(255, 170, 0, 0.85);
    z-index: 10;
  }

  @keyframes rotate-disk {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes flow-circuit {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -18; }
  }
`;

class PhysicsHomopolarGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${homopolarStyles}</style>
      <div class="canvas-box">
        <div class="b-field-grid">
          <div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div>
          <div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div>
          <div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div>
          <div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div>
        </div>

        <div class="copper-disk">
          <svg class="disk-spokes" viewBox="0 0 66 66">
            <line x1="33" y1="0" x2="33" y2="66" class="disk-spoke" />
            <line x1="0" y1="33" x2="66" y2="33" class="disk-spoke" />
            <line x1="9.6" y1="9.6" x2="56.4" y2="56.4" class="disk-spoke" />
            <line x1="9.6" y1="56.4" x2="56.4" y2="9.6" class="disk-spoke" />
          </svg>
        </div>

        <div class="center-axle"></div>

        <div class="brush-contact brush-axle"></div>
        <div class="brush-contact brush-rim"></div>

        <svg class="circuit-svg" viewBox="0 0 130 130">
          <path d="M 65 65 L 40 65 L 40 110 L 53 110" class="circuit-wire" />
          <path d="M 98 65 L 115 65 L 115 110 L 77 110" class="circuit-wire" />
          <path d="M 65 65 L 40 65 L 40 110 L 53 110" class="current-flow" />
          <path d="M 98 65 L 115 65 L 115 110 L 77 110" class="current-flow" />
        </svg>

        <div class="meter-box">Ⓔ 1.4V</div>

        <div class="hud">
          <span>EMF = ½ B ω R²</span>
          <span>F_L = q(v × B)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-homopolar-generator')) {
  customElements.define('physics-homopolar-generator', PhysicsHomopolarGenerator);
}
