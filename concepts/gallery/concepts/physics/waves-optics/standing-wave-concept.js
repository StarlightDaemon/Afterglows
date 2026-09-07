const standingWaveStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0c1815 0%, #030806 100%);
    overflow: hidden;
  }

  .wave-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Fixed End Clamps */
  .clamp-post {
    position: absolute;
    top: 45px;
    width: 6px;
    height: 40px;
    background: #1a3328;
    border: 1px solid #00ffaa;
    border-radius: 2px;
    z-index: 6;
  }

  .clamp-left { left: 12px; }
  .clamp-right { right: 12px; }

  /* Equilibrium axis */
  .center-axis {
    position: absolute;
    left: 14px;
    right: 14px;
    height: 1px;
    background: rgba(0, 255, 170, 0.2);
  }

  /* Standing wave SVG oscillating */
  .wave-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .wave-primary {
    fill: none;
    stroke: #00ffaa;
    stroke-width: 2;
    filter: drop-shadow(0 0 6px rgba(0, 255, 170, 0.7));
    animation: wave-vibrate 1.2s ease-in-out infinite alternate;
  }

  .wave-ghost {
    fill: none;
    stroke: rgba(0, 255, 170, 0.25);
    stroke-width: 1.5;
    stroke-dasharray: 2 2;
  }

  /* Nodal markers (zero displacement points) */
  .node-dot {
    position: absolute;
    top: 65px;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ff0055;
    box-shadow: 0 0 6px #ff0055;
    z-index: 7;
  }

  .node-label {
    position: absolute;
    top: 73px;
    font-size: 6px;
    font-family: monospace;
    color: #ff3377;
  }

  .node-1 { left: 47px; }
  .node-2 { left: 83px; }

  /* Antinode labels */
  .anode-label {
    position: absolute;
    top: 32px;
    font-size: 6px;
    font-family: monospace;
    color: #00ffaa;
  }

  .anode-1 { left: 28px; }
  .anode-2 { left: 62px; }
  .anode-3 { left: 96px; }

  .hud {
    position: absolute;
    bottom: 4px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 255, 170, 0.8);
    z-index: 10;
  }

  @keyframes wave-vibrate {
    0% {
      d: path("M 15 65 Q 31 35 47 65 Q 65 95 83 65 Q 99 35 115 65");
    }
    50% {
      d: path("M 15 65 Q 31 65 47 65 Q 65 65 83 65 Q 99 65 115 65");
    }
    100% {
      d: path("M 15 65 Q 31 95 47 65 Q 65 35 83 65 Q 99 95 115 65");
    }
  }
`;

class PhysicsStandingWave extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${standingWaveStyles}</style>
      <div class="wave-box">
        <div class="center-axis"></div>
        <div class="clamp-post clamp-left"></div>
        <div class="clamp-post clamp-right"></div>

        <svg class="wave-svg" viewBox="0 0 130 130">
          <path class="wave-ghost" d="M 15 65 Q 31 35 47 65 Q 65 95 83 65 Q 99 35 115 65" />
          <path class="wave-ghost" d="M 15 65 Q 31 95 47 65 Q 65 35 83 65 Q 99 95 115 65" />
          <path class="wave-primary" d="M 15 65 Q 31 35 47 65 Q 65 95 83 65 Q 99 35 115 65" />
        </svg>

        <div class="node-dot node-1"></div>
        <span class="node-label" style="left: 44px;">N₁</span>
        <div class="node-dot node-2"></div>
        <span class="node-label" style="left: 80px;">N₂</span>

        <span class="anode-label anode-1">A₁</span>
        <span class="anode-label anode-2">A₂</span>
        <span class="anode-label anode-3">A₃</span>

        <div class="hud">
          <span>HARMONIC n=3</span>
          <span>λ = 2L/3</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-standing-wave')) {
  customElements.define('physics-standing-wave', PhysicsStandingWave);
}
