const rotDopplerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e141c 0%, #030508 100%);
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

  .dop-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Circular Rotation Orbit */
  .rot-orbit {
    fill: none;
    stroke: rgba(255, 255, 255, 0.2);
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  /* Rotating Acoustic Source (Whirling Buzzer) */
  .source-orbit-group {
    transform-origin: 65px 65px;
    animation: spin-source 2.8s linear infinite;
  }

  .source-buzzer {
    fill: #00ff66;
    filter: drop-shadow(0 0 5px #00ff66);
  }

  /* Compressed blue-shifted wavefronts approaching stationary observer */
  .wave-blue {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Stretched red-shifted wavefronts receding from stationary observer */
  .wave-red {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-blue { fill: #00e5ff; }
  .lbl-red { fill: #ff5577; }
  .lbl-src { fill: #00ff66; }

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

  @keyframes spin-source {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

class PhysicsDopplerRotational extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rotDopplerStyles}</style>
      <div class="canvas-box">
        <svg class="dop-svg" viewBox="0 0 130 130">
          <!-- Circular Orbit Path -->
          <circle cx="65" cy="65" r="28" class="rot-orbit" />

          <!-- Asymmetric emitted wave fronts due to orbital velocity -->
          <!-- Compressed Wavefronts on approach (Right side: +x) -->
          <circle cx="78" cy="65" r="18" class="wave-blue" />
          <circle cx="85" cy="65" r="28" class="wave-blue" />
          <circle cx="92" cy="65" r="38" class="wave-blue" />

          <!-- Stretched Wavefronts on recession (Left side: -x) -->
          <circle cx="52" cy="65" r="22" class="wave-red" />
          <circle cx="42" cy="65" r="34" class="wave-red" />
          <circle cx="32" cy="65" r="46" class="wave-red" />

          <!-- Whirling Acoustic Emitter -->
          <g class="source-orbit-group">
            <circle cx="93" cy="65" r="3" class="source-buzzer" />
            <!-- Tangential velocity vector -->
            <line x1="93" y1="65" x2="93" y2="52" stroke="#00ff66" stroke-width="1.2" />
            <polygon points="93,48 90,53 96,53" fill="#00ff66" />
          </g>

          <!-- Observer Indicators -->
          <text x="10" y="18" class="lbl lbl-red">f_obs &lt; f₀ (RECEDING)</text>
          <text x="76" y="18" class="lbl lbl-blue">f_obs &gt; f₀ (APPROACH)</text>
        </svg>

        <div class="hud">
          <span>f = f₀ / (1 - (v_orb/c)cos θ)</span>
          <span>Orbital Acoustic Doppler</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-doppler-rotational')) {
  customElements.define('physics-doppler-rotational', PhysicsDopplerRotational);
}
