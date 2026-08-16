const lightConeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d121c 0%, #03060a 100%);
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

  .cone-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Null Cone Boundaries */
  .null-line {
    stroke: #00e5ff;
    stroke-width: 1.2;
    stroke-dasharray: 3 2;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  .cone-future {
    fill: rgba(0, 229, 255, 0.08);
    animation: cone-glow-future 3.2s ease-in-out infinite alternate;
  }

  .cone-past {
    fill: rgba(255, 170, 0, 0.06);
    animation: cone-glow-past 3.2s ease-in-out infinite alternate;
  }

  @keyframes cone-glow-future {
    0% { fill: rgba(0, 229, 255, 0.04); }
    100% { fill: rgba(0, 229, 255, 0.30); }
  }

  @keyframes cone-glow-past {
    0% { fill: rgba(255, 170, 0, 0.22); }
    100% { fill: rgba(255, 170, 0, 0.03); }
  }

  /* Spacetime Axes */
  .axis {
    stroke: rgba(255, 255, 255, 0.25);
    stroke-width: 1;
  }

  /* Massive Particle Worldline (Timelike: inside cone) */
  .worldline {
    fill: none;
    stroke: #00ff66;
    stroke-width: 3;
    filter: drop-shadow(0 0 4px #00ff66);
    stroke-dasharray: 120;
    stroke-dashoffset: 120;
    animation: draw-worldline 3.2s ease-in-out infinite alternate;
  }

  /* Flash wavefront / Photon on boundary */
  .photon-pulse {
    fill: #00e5ff;
    r: 4.5;
    filter: drop-shadow(0 0 7px #00e5ff);
    animation: pulse-photon 3.2s linear infinite;
  }

  .origin-event {
    fill: #ffffff;
    r: 2.5;
    filter: drop-shadow(0 0 5px #ffffff);
  }

  /* Region Labels */
  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .lbl-future { fill: #00e5ff; }
  .lbl-past { fill: #ffaa00; }
  .lbl-elsewhere { fill: #667788; }
  .lbl-axis { fill: rgba(255, 255, 255, 0.6); }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes draw-worldline {
    0% { stroke-dashoffset: 120; }
    100% { stroke-dashoffset: 0; }
  }

  @keyframes pulse-photon {
    0% { cx: 65; cy: 65; opacity: 1; }
    100% { cx: 105; cy: 25; opacity: 0; }
  }
`;

class PhysicsLightCone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lightConeStyles}</style>
      <div class="canvas-box">
        <svg class="cone-svg" viewBox="0 0 130 130">
          <!-- Future / Past Cones Fill -->
          <polygon points="65,65 25,25 105,25" class="cone-future" />
          <polygon points="65,65 25,105 105,105" class="cone-past" />

          <!-- Axes -->
          <line x1="65" y1="12" x2="65" y2="118" class="axis" />
          <line x1="12" y1="65" x2="118" y2="65" class="axis" />

          <!-- Axis Labels -->
          <text x="68" y="16" class="lbl lbl-axis">ct</text>
          <text x="114" y="62" class="lbl lbl-axis">x</text>

          <!-- Light Cone Null Lines (ds² = 0, slope ±1) -->
          <line x1="20" y1="110" x2="110" y2="20" class="null-line" />
          <line x1="20" y1="20" x2="110" y2="110" class="null-line" />

          <!-- Timelike Worldline (v < c) -->
          <path d="M 65,65 Q 75,50 68,36 T 78,16" class="worldline" />

          <!-- Photon Pulse on Null Cone -->
          <circle cx="65" cy="65" class="photon-pulse" />

          <!-- Event Origin (x=0, t=0) -->
          <circle cx="65" cy="65" class="origin-event" />

          <!-- Region Labels -->
          <text x="50" y="32" class="lbl lbl-future">FUTURE</text>
          <text x="53" y="100" class="lbl lbl-past">PAST</text>
          <text x="14" y="52" class="lbl lbl-elsewhere">SPACE-LIKE</text>
          <text x="86" y="52" class="lbl lbl-elsewhere">ELSEWHERE</text>
        </svg>

        <div class="hud">
          <span>ds² = -c²dt² + dx²</span>
          <span>ds² &lt; 0 (Timelike)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-light-cone')) {
  customElements.define('physics-light-cone', PhysicsLightCone);
}
