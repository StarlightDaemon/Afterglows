const cycloidGearStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151a14 0%, #050804 100%);
    overflow: hidden;
  }

  .gear-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Fixed Outer Ring Gear */
  .ring-gear {
    position: absolute;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 3px dashed #44aa55;
    box-shadow: 0 0 8px rgba(68, 170, 85, 0.4), inset 0 0 10px rgba(0, 0, 0, 0.8);
  }

  /* Planet Carrier Bracket (Rotating slowly CW) */
  .carrier-frame {
    position: absolute;
    width: 96px;
    height: 96px;
    animation: rotate-carrier 6s linear infinite;
  }

  /* 3 Planetary Gears — pitch radii r_sun=16, r_planet=16, r_ring=48, so
     sun + 2·planet = ring and everything meshes; planet centers sit on the
     carrier circle of radius 32 (= r_sun + r_planet), 120° apart. With the
     ring fixed this gives the HUD's 4:1 sun-to-carrier ratio (1 + R/S). */
  .planet-gear {
    position: absolute;
    width: 32px;
    height: 32px;
    margin: -16px 0 0 -16px;
    border-radius: 50%;
    border: 2px dashed #00ffaa;
    background: rgba(0, 255, 170, 0.1);
    box-shadow: 0 0 6px #00ffaa;
    animation: rotate-planet 2s linear infinite reverse;
  }

  .planet-1 { top: 16px; left: 48px; }
  .planet-2 { top: 64px; left: 20.3px; }
  .planet-3 { top: 64px; left: 75.7px; }

  /* Central Sun Gear (rotating 4x the carrier rate, same direction) */
  .sun-gear {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px dashed #ffcc00;
    background: radial-gradient(circle at 35% 35%, #ffffff, #ffaa00 60%, #664400 100%);
    box-shadow: 0 0 10px #ffcc00;
    z-index: 6;
    animation: rotate-sun 1.5s linear infinite;
  }

  .center-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #000;
    z-index: 7;
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
    color: rgba(0, 255, 170, 0.8);
    z-index: 10;
  }

  @keyframes rotate-carrier {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rotate-planet {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rotate-sun {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class PhysicsCycloidGear extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cycloidGearStyles}</style>
      <div class="gear-box">
        <div class="ring-gear"></div>

        <div class="carrier-frame">
          <div class="planet-gear planet-1"></div>
          <div class="planet-gear planet-2"></div>
          <div class="planet-gear planet-3"></div>
        </div>

        <div class="sun-gear"></div>
        <div class="center-dot"></div>

        <div class="hud">
          <span>EPICYCLIC GEAR TRAIN</span>
          <span>RATIO = 4:1</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-cycloid-gear')) {
  customElements.define('physics-cycloid-gear', PhysicsCycloidGear);
}
