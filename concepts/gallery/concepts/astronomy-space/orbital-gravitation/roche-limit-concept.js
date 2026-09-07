const rocheStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #120e1a 0%, #050308 100%);
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

  /* Massive Primary Body */
  .primary-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #88aacc 0%, #335577 60%, #112233 100%);
    border: 1px solid #6699bb;
    box-shadow: 0 0 16px rgba(100, 180, 255, 0.4);
    z-index: 8;
  }

  /* Roche Boundary & Orbits SVG */
  .orbit-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .roche-boundary {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    stroke-dasharray: 3 3;
    filter: drop-shadow(0 0 4px rgba(255, 85, 119, 0.4));
  }

  .ring-particles {
    fill: none;
    stroke: rgba(255, 204, 0, 0.5);
    stroke-width: 1;
    stroke-dasharray: 2 4;
    animation: rotate-ring 6s linear infinite;
    transform-origin: 65px 65px;
  }

  /* Approaching & Disrupting Moon */
  .satellite-approach {
    position: absolute;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    offset-path: path("M 118 65 C 118 90, 85 105, 65 105 C 45 105, 25 85, 25 65 C 25 45, 45 30, 65 30 C 78 30, 92 42, 92 65");
    animation: tidal-infall 5s linear infinite;
    z-index: 9;
  }

  .moon-body {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
    animation: tidal-stretch 5s linear infinite;
  }

  .roche-label {
    position: absolute;
    top: 14px;
    right: 14px;
    font-size: 5.5px;
    font-family: monospace;
    color: #ff5577;
    letter-spacing: 0.5px;
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
    color: rgba(255, 85, 119, 0.85);
    z-index: 10;
  }

  @keyframes rotate-ring {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes tidal-infall {
    0% { offset-distance: 0%; opacity: 0; }
    5% { offset-distance: 0%; opacity: 1; }
    85% { offset-distance: 100%; opacity: 1; }
    95%, 100% { offset-distance: 100%; opacity: 0; }
  }

  @keyframes tidal-stretch {
    0%, 30% {
      transform: scale(1, 1);
      background: #ffcc00;
    }
    50% {
      transform: scale(1.6, 0.6) rotate(45deg);
      background: #ffaa00;
      box-shadow: 0 0 8px #ffaa00;
    }
    75%, 100% {
      transform: scale(2.4, 0.3) rotate(90deg);
      background: #ff5577;
      box-shadow: 0 0 10px #ff5577;
      opacity: 0.7;
    }
  }
`;

class PhysicsRocheLimit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rocheStyles}</style>
      <div class="canvas-box">
        <div class="primary-body"></div>

        <svg class="orbit-svg" viewBox="0 0 130 130">
          <!-- Roche Boundary (R = 40) -->
          <circle cx="65" cy="65" r="40" class="roche-boundary" />
          <!-- Disrupted Planetary Ring Particles -->
          <circle cx="65" cy="65" r="32" class="ring-particles" />
          <circle cx="65" cy="65" r="36" class="ring-particles" />
        </svg>

        <span class="roche-label">d_roche</span>

        <div class="satellite-approach">
          <div class="moon-body"></div>
        </div>

        <div class="hud">
          <span>d = R_M (2ρ_M/ρ_m)^(1/3)</span>
          <span>dF_tide = 2GMm·dr/r³</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-roche-limit')) {
  customElements.define('physics-roche-limit', PhysicsRocheLimit);
}
