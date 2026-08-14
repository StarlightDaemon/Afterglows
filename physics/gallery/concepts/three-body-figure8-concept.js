const figure8Styles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d0e1c 0%, #030408 100%);
    overflow: hidden;
  }

  .threebody-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Figure-8 track SVG */
  .track-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .fig8-path {
    fill: none;
    stroke: rgba(140, 160, 255, 0.35);
    stroke-width: 1.5;
    stroke-dasharray: 4 3;
    filter: drop-shadow(0 0 4px rgba(140, 160, 255, 0.4));
  }

  /* 3 Bodies with phase offsets along figure-8 path */
  .body-runner {
    position: absolute;
    inset: 0;
    offset-path: path("M 65 65 C 85 30, 115 30, 115 65 C 115 100, 85 100, 65 65 C 45 30, 15 30, 15 65 C 15 100, 45 100, 65 65");
    animation: loop-figure8 4.2s linear infinite;
  }

  .body-1 {
    animation-delay: 0s;
  }

  .body-2 {
    animation-delay: -1.4s;
  }

  .body-3 {
    animation-delay: -2.8s;
  }

  .mass-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
  }

  .mass-1 {
    background: radial-gradient(circle at 35% 35%, #ffffff, #00ffff 60%, #004466 100%);
    box-shadow: 0 0 10px #00ffff, 0 0 16px rgba(0, 255, 255, 0.8);
  }

  .mass-2 {
    background: radial-gradient(circle at 35% 35%, #ffffff, #ff007f 60%, #440022 100%);
    box-shadow: 0 0 10px #ff007f, 0 0 16px rgba(255, 0, 127, 0.8);
  }

  .mass-3 {
    background: radial-gradient(circle at 35% 35%, #ffffff, #ffcc00 60%, #664400 100%);
    box-shadow: 0 0 10px #ffcc00, 0 0 16px rgba(255, 204, 0, 0.8);
  }

  .hud {
    position: absolute;
    bottom: 4px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 160, 255, 0.8);
    z-index: 10;
  }

  @keyframes loop-figure8 {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }
`;

class PhysicsThreeBodyFigure8 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${figure8Styles}</style>
      <div class="threebody-box">
        <svg class="track-svg" viewBox="0 0 130 130">
          <path class="fig8-path" d="M 65 65 C 85 30, 115 30, 115 65 C 115 100, 85 100, 65 65 C 45 30, 15 30, 15 65 C 15 100, 45 100, 65 65" />
        </svg>

        <div class="body-runner body-1">
          <div class="mass-dot mass-1"></div>
        </div>

        <div class="body-runner body-2">
          <div class="mass-dot mass-2"></div>
        </div>

        <div class="body-runner body-3">
          <div class="mass-dot mass-3"></div>
        </div>

        <div class="hud">
          <span>FIGURE-8 CHOREOGRAPHY</span>
          <span>E = CONST</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-three-body-figure8')) {
  customElements.define('physics-three-body-figure8', PhysicsThreeBodyFigure8);
}
