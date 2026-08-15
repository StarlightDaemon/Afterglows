const brachistochroneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #10141b 0%, #05070a 100%);
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

  /* Curves SVG */
  .curves-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Straight line ramp */
  .ramp-linear {
    fill: none;
    stroke: rgba(255, 85, 119, 0.4);
    stroke-width: 1.5;
    stroke-dasharray: 2 2;
  }

  /* Circular arc */
  .ramp-circle {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1.5;
    stroke-dasharray: 2 2;
  }

  /* Brachistochrone (Cycloid) */
  .ramp-cycloid {
    fill: none;
    stroke: #00ff66;
    stroke-width: 2;
    filter: drop-shadow(0 0 3px rgba(0, 255, 102, 0.6));
  }

  /* Start and End nodes */
  .node-terminal {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    z-index: 8;
  }

  .node-start { top: 22px; left: 16px; margin: -3px 0 0 -3px; }
  .node-end { top: 98px; left: 114px; margin: -3px 0 0 -3px; }

  /* Rolling generating circle at top */
  .generating-circle {
    position: absolute;
    top: 6px;
    left: 16px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px dashed rgba(255, 204, 0, 0.4);
    animation: roll-circle 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  .generating-radius {
    position: absolute;
    top: 14px;
    left: 14px;
    width: 14px;
    height: 1px;
    background: #ffcc00;
    transform-origin: left center;
    animation: spin-radius 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  /* Moving particles along paths */
  .cycloid-runner {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #00ff66;
    box-shadow: 0 0 8px #00ff66, 0 0 12px #00ff66;
    z-index: 10;
    offset-path: path("M 16 22 C 22 58, 48 94, 114 98");
    animation: race-cycloid 3.2s cubic-bezier(0.2, 0, 0.8, 1) infinite;
  }

  .linear-runner {
    position: absolute;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ff5577;
    box-shadow: 0 0 6px #ff5577;
    z-index: 9;
    offset-path: path("M 16 22 L 114 98");
    animation: race-linear 3.2s cubic-bezier(0.45, 0, 0.9, 1) infinite;
  }

  .circle-runner {
    position: absolute;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
    z-index: 9;
    offset-path: path("M 16 22 A 90 90 0 0 0 114 98");
    animation: race-circle 3.2s cubic-bezier(0.3, 0, 0.85, 1) infinite;
  }

  .legend {
    position: absolute;
    top: 26px;
    right: 8px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: 5.5px;
    font-family: monospace;
    text-align: right;
  }

  .leg-c { color: #00ff66; }
  .leg-a { color: #00e5ff; }
  .leg-l { color: #ff5577; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  @keyframes roll-circle {
    0% { transform: translateX(0); }
    70%, 100% { transform: translateX(70px); }
  }

  @keyframes spin-radius {
    0% { transform: rotate(0deg); }
    70%, 100% { transform: rotate(360deg); }
  }

  @keyframes race-cycloid {
    0% { offset-distance: 0%; opacity: 0; }
    5% { opacity: 1; }
    48% { offset-distance: 100%; opacity: 1; }
    60%, 100% { offset-distance: 100%; opacity: 0; }
  }

  @keyframes race-circle {
    0% { offset-distance: 0%; opacity: 0; }
    5% { opacity: 1; }
    62% { offset-distance: 100%; opacity: 1; }
    72%, 100% { offset-distance: 100%; opacity: 0; }
  }

  @keyframes race-linear {
    0% { offset-distance: 0%; opacity: 0; }
    5% { opacity: 1; }
    76% { offset-distance: 100%; opacity: 1; }
    86%, 100% { offset-distance: 100%; opacity: 0; }
  }
`;

class PhysicsBrachistochroneCurve extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${brachistochroneStyles}</style>
      <div class="canvas-box">
        <svg class="curves-svg" viewBox="0 0 130 130">
          <!-- Straight Ramp -->
          <line x1="16" y1="22" x2="114" y2="98" class="ramp-linear" />
          <!-- Circular Arc -->
          <path d="M 16 22 A 90 90 0 0 0 114 98" class="ramp-circle" />
          <!-- Cycloid Curve -->
          <path d="M 16 22 C 22 58, 48 94, 114 98" class="ramp-cycloid" />
        </svg>

        <div class="generating-circle">
          <div class="generating-radius"></div>
        </div>

        <div class="node-terminal node-start"></div>
        <div class="node-terminal node-end"></div>

        <div class="cycloid-runner"></div>
        <div class="circle-runner"></div>
        <div class="linear-runner"></div>

        <div class="legend">
          <span class="leg-c">■ Cycloid (Fastest)</span>
          <span class="leg-a">■ Circular Arc</span>
          <span class="leg-l">■ Linear Ramp</span>
        </div>

        <div class="hud">
          <span>BRACHISTOCHRONE</span>
          <span>x=r(θ-sinθ), y=r(1-cosθ)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-brachistochrone-curve')) {
  customElements.define('physics-brachistochrone-curve', PhysicsBrachistochroneCurve);
}
