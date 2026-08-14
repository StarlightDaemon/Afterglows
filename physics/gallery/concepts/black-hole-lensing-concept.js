const blackHoleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #020204;
    overflow: hidden;
  }

  .lensing-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Gravitationally lensed background grid */
  .grid-distortion {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.35;
    animation: drift-grid 10s linear infinite;
  }

  /* Einstein Ring / Accretion Disk */
  .accretion-disk-tilt {
    position: absolute;
    width: 100px;
    height: 38px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 50%, rgba(255, 140, 0, 0.9) 0%, rgba(255, 60, 0, 0.5) 45%, transparent 70%);
    box-shadow: 0 0 20px rgba(255, 100, 0, 0.8), 0 0 35px rgba(255, 50, 0, 0.4);
    transform: rotate(-18deg);
    animation: disk-glow 3s ease-in-out infinite alternate;
  }

  /* Secondary lensed ring arc over the top of the horizon */
  .lensed-arc {
    position: absolute;
    top: 36px;
    width: 60px;
    height: 36px;
    border-radius: 50%;
    border-top: 3px solid #ffcc55;
    box-shadow: 0 -4px 10px rgba(255, 200, 80, 0.8);
    opacity: 0.85;
    transform: rotate(-12deg);
  }

  /* Photon Sphere */
  .photon-sphere {
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 12px #ffffff, inset 0 0 8px #ffaa00;
    z-index: 5;
    animation: pulse-photon 2.4s ease-in-out infinite alternate;
  }

  /* Event Horizon (Pure Black Void) */
  .event-horizon {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #000000;
    box-shadow: inset 0 0 6px #000000;
    z-index: 6;
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
    color: rgba(255, 140, 0, 0.8);
    z-index: 10;
  }

  @keyframes disk-glow {
    0% { transform: rotate(-18deg) scale(0.96); opacity: 0.85; }
    100% { transform: rotate(-18deg) scale(1.04); opacity: 1; }
  }

  @keyframes pulse-photon {
    0% { transform: scale(0.98); opacity: 0.9; }
    100% { transform: scale(1.02); opacity: 1; }
  }

  @keyframes drift-grid {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

class PhysicsBlackHoleLensing extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${blackHoleStyles}</style>
      <div class="lensing-box">
        <svg class="grid-distortion" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="55" fill="none" stroke="rgba(255,140,0,0.2)" stroke-dasharray="2 4" />
          <circle cx="65" cy="65" r="45" fill="none" stroke="rgba(255,140,0,0.3)" stroke-dasharray="3 3" />
          <path d="M 10 65 Q 65 30 120 65 M 10 65 Q 65 100 120 65" fill="none" stroke="rgba(255,140,0,0.25)" />
        </svg>

        <div class="lensed-arc"></div>
        <div class="accretion-disk-tilt"></div>
        <div class="photon-sphere"></div>
        <div class="event-horizon"></div>

        <div class="hud">
          <span>EVENT HORIZON</span>
          <span>r_s = 2GM/c²</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-black-hole-lensing')) {
  customElements.define('physics-black-hole-lensing', PhysicsBlackHoleLensing);
}
