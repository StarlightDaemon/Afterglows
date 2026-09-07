const keplerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 40% 50%, #0a1120 0%, #03060c 100%);
    overflow: hidden;
  }

  .orbital-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Elliptical orbit SVG */
  .orbit-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .ellipse-track {
    fill: none;
    stroke: rgba(0, 200, 255, 0.3);
    stroke-width: 1.2;
    stroke-dasharray: 3 3;
  }

  .swept-area {
    fill: rgba(0, 229, 255, 0.12);
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 0.8;
  }

  /* Central Star at Focus (Offset from center) */
  .central-star {
    position: absolute;
    top: 50%;
    left: 33px;
    width: 16px;
    height: 16px;
    margin: -8px 0 0 -8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #ffbb00 50%, #ff4400 100%);
    box-shadow: 0 0 12px #ffaa00, 0 0 20px rgba(255, 170, 0, 0.6);
    z-index: 5;
  }

  /* Focus crosshair */
  .focus-f2 {
    position: absolute;
    top: 50%;
    left: 97px;
    width: 4px;
    height: 4px;
    margin: -2px 0 0 -2px;
    border-radius: 50%;
    background: rgba(0, 229, 255, 0.4);
  }

  /* Planet in orbit with Kepler 2nd law speed variation (CSS offset-path).
     The rotor is a 0x0 point so the path coordinates line up with the box;
     a full-size rotor would put its center on the path and displace the
     planet by a rotating corner offset. */
  .planet-rotor {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    offset-path: path("M 20 65 A 45 32 0 1 0 110 65 A 45 32 0 1 0 20 65");
    offset-rotate: 0deg;
    animation: kepler-orbit 4s cubic-bezier(0.3, 0.7, 0.7, 0.3) infinite;
  }

  .planet-body {
    position: absolute;
    width: 9px;
    height: 9px;
    margin: -4.5px 0 0 -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #ffffff, #00e5ff 60%, #004466 100%);
    box-shadow: 0 0 8px #00e5ff, 0 0 14px rgba(0, 229, 255, 0.7);
  }

  .perihelion-label {
    position: absolute;
    left: 8px;
    top: 61px;
    font-size: 6px;
    font-family: monospace;
    color: #ffaa00;
  }

  .aphelion-label {
    position: absolute;
    right: 6px;
    top: 61px;
    font-size: 6px;
    font-family: monospace;
    color: #00e5ff;
  }

  .hud-banner {
    position: absolute;
    bottom: 4px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.7);
  }

  @keyframes kepler-orbit {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }
`;

class PhysicsKeplerOrbit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${keplerStyles}</style>
      <div class="orbital-box">
        <svg class="orbit-svg" viewBox="0 0 130 130">
          <!-- Elliptical track: cx=65, cy=65, rx=45, ry=32, foci at x≈33 and x≈97 -->
          <ellipse class="ellipse-track" cx="65" cy="65" rx="45" ry="32" />
          <polygon class="swept-area" points="33,65 20,65 26,49" />
          <polygon class="swept-area" points="33,65 110,65 107,54" />
        </svg>

        <span class="perihelion-label">v_max</span>
        <span class="aphelion-label">v_min</span>

        <div class="central-star"></div>
        <div class="focus-f2"></div>

        <div class="planet-rotor">
          <div class="planet-body"></div>
        </div>

        <div class="hud-banner">
          <span>KEPLER 2ND LAW</span>
          <span>e = 0.62</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-kepler-orbit')) {
  customElements.define('physics-kepler-orbit', PhysicsKeplerOrbit);
}
