const schwarzschildStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #120d18 0%, #030205 100%);
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

  .schwarzschild-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Central Schwarzschild Black Hole */
  .black-hole {
    fill: #000000;
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 6px #ff5577);
  }

  .photon-sphere {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .isco-radius {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 0.8;
    stroke-dasharray: 3 2;
    opacity: 0.5;
  }

  /* Relativistic Precessing Rosette Orbit (Mercury / Test Mass) */
  .rosette-orbit {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00ff66);
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: draw-rosette 4.8s linear infinite;
  }

  .orbiting-mass {
    fill: #ffffff;
    stroke: #00ff66;
    stroke-width: 1;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-rs { fill: #ff5577; }
  .lbl-rph { fill: #ffaa00; }
  .lbl-prec { fill: #00ff66; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  @keyframes draw-rosette {
    0% { stroke-dashoffset: 300; }
    100% { stroke-dashoffset: 0; }
  }
`;

class PhysicsSchwarzschildGeodesic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${schwarzschildStyles}</style>
      <div class="canvas-box">
        <svg class="schwarzschild-svg" viewBox="0 0 130 130">
          <!-- ISCO Radius (r = 6GM/c²) -->
          <circle cx="65" cy="65" r="42" class="isco-radius" />

          <!-- Photon Sphere (r = 3GM/c²) -->
          <circle cx="65" cy="65" r="28" class="photon-sphere" />

          <!-- Horizon (r_s = 2GM/c²) -->
          <circle cx="65" cy="65" r="14" class="black-hole" />

          <!-- Relativistic Precessing Rosette Path -->
          <path d="
            M 65 20
            C 90 20, 110 50, 95 75
            C 80 100, 45 95, 30 75
            C 15 55, 35 25, 65 20
            C 95 15, 115 45, 100 80
            C 85 115, 40 105, 25 80
            C 10 55, 40 20, 75 18
          " class="rosette-orbit" />

          <!-- Test Mass at periastron -->
          <circle cx="95" cy="75" r="2.5" class="orbiting-mass" />

          <!-- Labels -->
          <text x="10" y="16" class="lbl lbl-prec">Δφ = 6πGM/a(1-e²)c²</text>
          <text x="10" y="24" class="lbl lbl-rph">r_ph = 1.5 r_s</text>
          <text x="56" y="67" class="lbl lbl-rs">r_s</text>
        </svg>

        <div class="hud">
          <span>Schwarzschild Geodesic</span>
          <span>r_s = 2GM/c²</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-schwarzschild-geodesic')) {
  customElements.define('physics-schwarzschild-geodesic', PhysicsSchwarzschildGeodesic);
}
