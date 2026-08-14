const tidalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0c1424 0%, #03050a 100%);
    overflow: hidden;
  }

  .tidal-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Orbital circular track */
  .orbit-track {
    position: absolute;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 204, 255, 0.3);
  }

  /* Central Host Planet */
  .host-planet {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #0099ff 60%, #002255 100%);
    box-shadow: 0 0 12px rgba(0, 153, 255, 0.6);
    z-index: 6;
  }

  /* Orbiting arm with 1:1 synchronous rotation */
  .orbit-arm {
    position: absolute;
    width: 86px;
    height: 86px;
    animation: synch-orbit 4.5s linear infinite;
  }

  /* Tidally deformed Moon (prolate ellipsoid) */
  .tidally-locked-moon {
    position: absolute;
    top: 50%;
    right: -10px;
    width: 20px;
    height: 12px;
    margin-top: -6px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 40% 40%, #e0f0ff 0%, #7090b0 60%, #203040 100%);
    box-shadow: 0 0 8px rgba(180, 220, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2px;
    box-sizing: border-box;
  }

  /* Sub-planetary facing marker (fixed to moon surface facing planet) */
  .sub-planet-marker {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00ffaa;
    box-shadow: 0 0 6px #00ffaa;
  }

  .far-side-marker {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 100, 100, 0.6);
  }

  /* Tidal force vectors pointing outward on both near & far bulges */
  .vec-near {
    position: absolute;
    left: -8px;
    top: 5px;
    width: 7px;
    height: 1.5px;
    background: #00ffaa;
  }

  .vec-near::before {
    content: '';
    position: absolute;
    left: 0;
    top: -2.5px;
    border: 3px solid transparent;
    border-right-color: #00ffaa;
  }

  .vec-far {
    position: absolute;
    right: -8px;
    top: 5px;
    width: 7px;
    height: 1.5px;
    background: #00ffaa;
  }

  .vec-far::after {
    content: '';
    position: absolute;
    right: 0;
    top: -2.5px;
    border: 3px solid transparent;
    border-left-color: #00ffaa;
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
    color: rgba(0, 204, 255, 0.8);
    z-index: 10;
  }

  @keyframes synch-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class PhysicsTidalLocking extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tidalStyles}</style>
      <div class="tidal-box">
        <div class="orbit-track"></div>
        <div class="host-planet"></div>

        <div class="orbit-arm">
          <div class="tidally-locked-moon">
            <div class="vec-near"></div>
            <div class="sub-planet-marker" title="Sub-planetary point"></div>
            <div class="far-side-marker" title="Far side"></div>
            <div class="vec-far"></div>
          </div>
        </div>

        <div class="hud">
          <span>1:1 SPIN-ORBIT RESONANCE</span>
          <span>T_rot = T_orb</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-tidal-locking')) {
  customElements.define('physics-tidal-locking', PhysicsTidalLocking);
}
