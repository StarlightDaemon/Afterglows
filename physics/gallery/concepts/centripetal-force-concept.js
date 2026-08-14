const centripetalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0c1824 0%, #03080e 100%);
    overflow: hidden;
  }

  .centripetal-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Coordinate radar rings */
  .orbit-ring {
    position: absolute;
    width: 84px;
    height: 84px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 229, 255, 0.35);
  }

  .inner-ring {
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px dotted rgba(0, 229, 255, 0.2);
  }

  /* Center pivot */
  .center-pivot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 8px #00e5ff;
    z-index: 5;
  }

  .crosshair-h {
    position: absolute;
    width: 100px;
    height: 1px;
    background: rgba(0, 229, 255, 0.15);
  }

  .crosshair-v {
    position: absolute;
    height: 100px;
    width: 1px;
    background: rgba(0, 229, 255, 0.15);
  }

  /* Rotating arm system */
  .rotor {
    position: absolute;
    width: 84px;
    height: 84px;
    animation: rotate-orbit 3s linear infinite;
  }

  /* Tether line from center to mass */
  .tether {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 42px;
    height: 1px;
    background: rgba(0, 229, 255, 0.5);
    transform-origin: left center;
  }

  /* Orbiting mass */
  .mass-node {
    position: absolute;
    top: 50%;
    right: -6px;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #ffffff, #00e5ff 60%, #004466 100%);
    box-shadow: 0 0 10px #00e5ff, 0 0 16px rgba(0, 229, 255, 0.6);
  }

  /* Centripetal force vector (inward pointing) */
  .vec-fc {
    position: absolute;
    top: 50%;
    right: 4px;
    width: 22px;
    height: 2px;
    background: #ff3366;
    box-shadow: 0 0 6px #ff3366;
    margin-top: -1px;
  }

  .vec-fc::before {
    content: '';
    position: absolute;
    left: 0;
    top: -3px;
    border: 3px solid transparent;
    border-right-color: #ff3366;
  }

  .fc-label {
    position: absolute;
    top: -10px;
    left: 2px;
    font-size: 6px;
    font-family: monospace;
    color: #ff3366;
    font-weight: bold;
  }

  /* Tangential velocity vector (perpendicular) */
  .vec-vt {
    position: absolute;
    top: -14px;
    right: 0;
    width: 2px;
    height: 20px;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
  }

  .vec-vt::after {
    content: '';
    position: absolute;
    top: 0;
    left: -3px;
    border: 3px solid transparent;
    border-bottom-color: #ffcc00;
  }

  .vt-label {
    position: absolute;
    top: 2px;
    right: 4px;
    font-size: 6px;
    font-family: monospace;
    color: #ffcc00;
    font-weight: bold;
  }

  .readout {
    position: absolute;
    bottom: 4px;
    left: 8px;
    right: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.7);
  }

  @keyframes rotate-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class PhysicsCentripetalForce extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${centripetalStyles}</style>
      <div class="centripetal-box">
        <div class="crosshair-h"></div>
        <div class="crosshair-v"></div>
        <div class="orbit-ring"></div>
        <div class="inner-ring"></div>
        <div class="center-pivot"></div>

        <div class="rotor">
          <div class="tether">
            <div class="vec-fc">
              <span class="fc-label">Fc</span>
            </div>
            <div class="mass-node">
              <div class="vec-vt">
                <span class="vt-label">v</span>
              </div>
            </div>
          </div>
        </div>

        <div class="readout">
          <span>Fc = mv²/r</span>
          <span>ω = 2.1 rad/s</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-centripetal-force')) {
  customElements.define('physics-centripetal-force', PhysicsCentripetalForce);
}
