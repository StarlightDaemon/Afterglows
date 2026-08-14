const acceleratorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #101424 0%, #030408 100%);
    overflow: hidden;
  }

  .accelerator-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Vacuum Beam Storage Ring */
  .beam-ring {
    position: absolute;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    border: 2px solid rgba(0, 229, 255, 0.4);
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.2), inset 0 0 10px rgba(0, 229, 255, 0.1);
  }

  /* Dipole Bending Magnets (4 sectors) */
  .dipole-sector {
    position: absolute;
    width: 20px;
    height: 8px;
    background: #0066aa;
    border: 1px solid #00ffff;
    border-radius: 2px;
    box-shadow: 0 0 6px #0088cc;
  }

  .d-top { top: 18px; left: 55px; }
  .d-bottom { bottom: 18px; left: 55px; }
  .d-left { left: 18px; top: 55px; transform: rotate(90deg); }
  .d-right { right: 18px; top: 55px; transform: rotate(90deg); }

  /* RF Acceleration Cavities (Pulsing) */
  .rf-cavity {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffaa00;
    box-shadow: 0 0 8px #ffaa00;
    animation: rf-pulse 0.4s ease-in-out infinite alternate;
  }

  .rf-1 { top: 32px; right: 32px; }
  .rf-2 { bottom: 32px; left: 32px; }

  /* Relativistic Particle Bunch Flight */
  .beam-runner {
    position: absolute;
    inset: 0;
    offset-path: path("M 65 65 m -43, 0 a 43,43 0 1,0 86,0 a 43,43 0 1,0 -86,0");
    animation: orbit-beam 1.2s linear infinite;
  }

  .bunch-node {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff, 0 0 16px #00ffff;
  }

  /* Synchrotron radiation emission cone */
  .synchrotron-light {
    position: absolute;
    top: 2px;
    left: 8px;
    width: 14px;
    height: 4px;
    background: linear-gradient(90deg, #ffff00, transparent);
    transform: rotate(-35deg);
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
    color: rgba(0, 229, 255, 0.8);
    z-index: 10;
  }

  @keyframes orbit-beam {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  @keyframes rf-pulse {
    0% { transform: scale(0.85); opacity: 0.7; }
    100% { transform: scale(1.15); opacity: 1; }
  }
`;

class PhysicsParticleAccelerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${acceleratorStyles}</style>
      <div class="accelerator-box">
        <div class="beam-ring"></div>

        <div class="dipole-sector d-top"></div>
        <div class="dipole-sector d-bottom"></div>
        <div class="dipole-sector d-left"></div>
        <div class="dipole-sector d-right"></div>

        <div class="rf-cavity rf-1"></div>
        <div class="rf-cavity rf-2"></div>

        <div class="beam-runner">
          <div class="bunch-node">
            <div class="synchrotron-light"></div>
          </div>
        </div>

        <div class="hud">
          <span>SYNCHROTRON BEAM</span>
          <span>γ = 7460 · 0.999c</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-particle-accelerator')) {
  customElements.define('physics-particle-accelerator', PhysicsParticleAccelerator);
}
