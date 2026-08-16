const machStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #161208 0%, #060402 100%);
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

  /* Supersonic Wavefronts SVG */
  .shock-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .shock-envelope {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px rgba(255, 85, 119, 0.6));
  }

  .shock-fill {
    fill: rgba(255, 85, 119, 0.08);
  }

  .sound-wave {
    fill: none;
    stroke: rgba(255, 204, 0, 0.65);
    stroke-width: 1.6;
    transform-box: fill-box;
    transform-origin: center;
    animation: wavefront-grow 1.6s linear infinite;
  }

  .sound-wave:nth-of-type(2) { animation-delay: -0.4s; }
  .sound-wave:nth-of-type(3) { animation-delay: -0.8s; }
  .sound-wave:nth-of-type(4) { animation-delay: -1.2s; }

  @keyframes wavefront-grow {
    0% { transform: scale(0.7); opacity: 1; }
    100% { transform: scale(1.15); opacity: 0.15; }
  }

  .flight-path {
    fill: none;
    stroke: rgba(255, 255, 255, 0.2);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Supersonic Aircraft / Projectile */
  .supersonic-craft {
    position: absolute;
    top: 65px;
    right: 20px;
    transform: translateY(-50%);
    width: 12px;
    height: 8px;
    background: linear-gradient(90deg, #ffaa00, #ffffff);
    clip-path: polygon(0% 50%, 100% 0%, 80% 50%, 100% 100%);
    box-shadow: 0 0 8px #ffaa00;
    z-index: 8;
    animation: jitter-flight 0.15s infinite alternate;
  }

  /* Supersonic shock diamond plume */
  .shock-diamonds {
    position: absolute;
    top: 65px;
    right: 32px;
    transform: translateY(-50%);
    display: flex;
    gap: 3px;
    z-index: 7;
  }

  .diamond {
    width: 5px;
    height: 5px;
    background: #00e5ff;
    transform: rotate(45deg);
    box-shadow: 0 0 6px #00e5ff;
    opacity: 0.8;
    animation: diamond-flicker 0.3s ease-in-out infinite alternate;
  }

  .diamond:nth-child(2) { animation-delay: -0.1s; }
  .diamond:nth-child(3) { animation-delay: -0.2s; }

  @keyframes diamond-flicker {
    0% { opacity: 0.25; }
    100% { opacity: 1; }
  }

  .angle-label {
    position: absolute;
    top: 36px;
    left: 45px;
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
    color: rgba(255, 204, 0, 0.85);
    z-index: 10;
  }

  @keyframes jitter-flight {
    0% { transform: translateY(-50%) translateY(-1.5px); }
    100% { transform: translateY(-50%) translateY(1.5px); }
  }
`;

class PhysicsMachCone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${machStyles}</style>
      <div class="canvas-box">
        <svg class="shock-svg" viewBox="0 0 130 130">
          <!-- Flight Axis -->
          <line x1="10" y1="65" x2="120" y2="65" class="flight-path" />

          <!-- Shock Wave Envelope (Mach angle sin(μ) = 1/1.6 = 0.625 -> μ ≈ 38.7°) -->
          <polygon points="110,65 15,14 15,116" class="shock-fill" />
          <line x1="110" y1="65" x2="15" y2="14" class="shock-envelope" />
          <line x1="110" y1="65" x2="15" y2="116" class="shock-envelope" />

          <!-- Expanding Spherical Wavefronts -->
          <circle cx="88" cy="65" r="14" class="sound-wave" />
          <circle cx="68" cy="65" r="26" class="sound-wave" />
          <circle cx="48" cy="65" r="39" class="sound-wave" />
          <circle cx="28" cy="65" r="51" class="sound-wave" />
        </svg>

        <div class="supersonic-craft"></div>

        <div class="shock-diamonds">
          <div class="diamond"></div>
          <div class="diamond"></div>
          <div class="diamond"></div>
        </div>

        <span class="angle-label">μ = arcsin(1/M)</span>

        <div class="hud">
          <span>M = v/c_s = 1.6</span>
          <span>sin μ = 1/M = 0.625</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-mach-cone')) {
  customElements.define('physics-mach-cone', PhysicsMachCone);
}
