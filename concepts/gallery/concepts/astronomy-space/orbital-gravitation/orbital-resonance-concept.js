const resonanceStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0c1520 0%, #03060a 100%);
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

  /* Central Jupiter-like Primary */
  .primary-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #eedd88 0%, #cc8833 60%, #552200 100%);
    border: 1px solid #ffcc66;
    box-shadow: 0 0 14px rgba(255, 204, 102, 0.4);
    z-index: 8;
  }

  /* Orbit Rings SVG */
  .orbit-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .orbit-path-1 {
    fill: none;
    stroke: rgba(255, 85, 119, 0.35);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .orbit-path-2 {
    fill: none;
    stroke: rgba(0, 229, 255, 0.35);
    stroke-width: 1;
    stroke-dasharray: 3 3;
  }

  .orbit-path-3 {
    fill: none;
    stroke: rgba(0, 255, 102, 0.35);
    stroke-width: 1;
    stroke-dasharray: 4 4;
  }

  /* Alignment pulse line */
  .conjunction-line {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 54px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ffcc00);
    transform-origin: left center;
    animation: sweep-conjunction 8s linear infinite;
    z-index: 4;
  }

  /* Orbiting Moons (Periods: 2s, 4s, 8s -> 1:2:4 Laplace Resonance) */
  .moon-1 {
    position: absolute;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ff5577;
    box-shadow: 0 0 6px #ff5577;
    offset-path: path("M 65 43 A 22 22 0 1 1 64.9 43");
    animation: laplace-orbit-1 2s linear infinite;
    z-index: 6;
  }

  .moon-2 {
    position: absolute;
    width: 7px;
    height: 7px;
    margin: -3.5px 0 0 -3.5px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 7px #00e5ff;
    offset-path: path("M 65 30 A 35 35 0 1 1 64.9 30");
    animation: laplace-orbit-2 4s linear infinite;
    z-index: 6;
  }

  .moon-3 {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #00ff66;
    box-shadow: 0 0 8px #00ff66;
    offset-path: path("M 65 15 A 50 50 0 1 1 64.9 15");
    animation: laplace-orbit-3 8s linear infinite;
    z-index: 6;
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
    color: rgba(255, 204, 0, 0.85);
    z-index: 10;
  }

  @keyframes laplace-orbit-1 {
    from { offset-distance: 0%; }
    to { offset-distance: 100%; }
  }

  @keyframes laplace-orbit-2 {
    from { offset-distance: 0%; }
    to { offset-distance: 100%; }
  }

  @keyframes laplace-orbit-3 {
    from { offset-distance: 0%; }
    to { offset-distance: 100%; }
  }

  @keyframes sweep-conjunction {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class PhysicsOrbitalResonance extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${resonanceStyles}</style>
      <div class="canvas-box">
        <div class="primary-body"></div>

        <svg class="orbit-svg" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="22" class="orbit-path-1" />
          <circle cx="65" cy="65" r="35" class="orbit-path-2" />
          <circle cx="65" cy="65" r="50" class="orbit-path-3" />
        </svg>

        <div class="conjunction-line"></div>

        <div class="moon-1"></div>
        <div class="moon-2"></div>
        <div class="moon-3"></div>

        <div class="hud">
          <span>LAPLACE RESONANCE 1:2:4</span>
          <span>n₁ - 3n₂ + 2n₃ = 0</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-orbital-resonance')) {
  customElements.define('physics-orbital-resonance', PhysicsOrbitalResonance);
}
