const gwStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1224 0%, #03040a 100%);
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

  .gw-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Ring of test particles experiencing h_+ strain */
  .ring-ellipse {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1;
    stroke-dasharray: 2 2;
    animation: strain-ellipse 2.4s ease-in-out infinite alternate;
    transform-origin: 65px 65px;
  }

  .strain-crosshair {
    stroke: rgba(255, 255, 255, 0.15);
    stroke-width: 0.8;
  }

  .particle {
    fill: #00ff66;
    stroke: #00e5ff;
    stroke-width: 0.8;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  /* Central chirp wave rings propagating outward */
  .chirp-ripple {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.2;
    animation: propagate-chirp 2.4s linear infinite;
    transform-origin: 65px 65px;
  }

  .chirp-ripple:nth-child(2) {
    animation-delay: 0.8s;
  }
  .chirp-ripple:nth-child(3) {
    animation-delay: 1.6s;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-plus { fill: #00e5ff; }
  .lbl-cross { fill: #ffaa00; }

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

  @keyframes strain-ellipse {
    0% { transform: scale(1.3, 0.7); }
    100% { transform: scale(0.7, 1.3); }
  }

  @keyframes propagate-chirp {
    0% { r: 6; opacity: 0.9; }
    100% { r: 56; opacity: 0; }
  }
`;

class PhysicsGravitationalWaves extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gwStyles}</style>
      <div class="canvas-box">
        <svg class="gw-svg" viewBox="0 0 130 130">
          <!-- Crosshairs -->
          <line x1="65" y1="15" x2="65" y2="115" class="strain-crosshair" />
          <line x1="15" y1="65" x2="115" y2="65" class="strain-crosshair" />

          <!-- Propagating metric ripple -->
          <circle cx="65" cy="65" class="chirp-ripple" />
          <circle cx="65" cy="65" class="chirp-ripple" />
          <circle cx="65" cy="65" class="chirp-ripple" />

          <!-- Dynamic deformed particle ring -->
          <ellipse cx="65" cy="65" rx="34" ry="34" class="ring-ellipse" />

          <!-- Polar test masses around center -->
          <g style="transform-origin: 65px 65px; animation: strain-ellipse 2.4s ease-in-out infinite alternate;">
            <circle cx="65" cy="31" r="2.5" class="particle" />
            <circle cx="65" cy="99" r="2.5" class="particle" />
            <circle cx="31" cy="65" r="2.5" class="particle" />
            <circle cx="99" cy="65" r="2.5" class="particle" />
            <circle cx="41" cy="41" r="2" class="particle" />
            <circle cx="89" cy="41" r="2" class="particle" />
            <circle cx="41" cy="89" r="2" class="particle" />
            <circle cx="89" cy="89" r="2" class="particle" />
          </g>

          <!-- Label -->
          <text x="12" y="18" class="lbl lbl-plus">POLARIZATION h₊</text>
          <text x="82" y="18" class="lbl lbl-cross">STRAIN δL/L</text>
        </svg>

        <div class="hud">
          <span>h_μν = (8πG/c⁴) T_μν</span>
          <span>δL/L ~ 10⁻²¹</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-gravitational-waves')) {
  customElements.define('physics-gravitational-waves', PhysicsGravitationalWaves);
}
