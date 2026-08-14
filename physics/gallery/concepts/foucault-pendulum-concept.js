const foucaultStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #10141f 0%, #030408 100%);
    overflow: hidden;
  }

  .foucault-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Floor compass ring */
  .compass-dial {
    position: absolute;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    border: 1px solid rgba(0, 229, 255, 0.35);
  }

  .dial-ticks {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1px dotted rgba(0, 229, 255, 0.2);
  }

  .compass-deg {
    position: absolute;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.6);
  }

  .deg-n { top: 16px; left: 62px; }
  .deg-s { bottom: 16px; left: 62px; }
  .deg-e { right: 14px; top: 62px; }
  .deg-w { left: 14px; top: 62px; }

  /* Precessing plane of oscillation */
  .precession-turntable {
    position: absolute;
    width: 88px;
    height: 88px;
    animation: precess-plane 16s linear infinite;
  }

  /* Oscillating pendulum arm */
  .pendulum-swing {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 2px;
    margin: -1px 0 0 -40px;
    animation: swing-oscillation 2s ease-in-out infinite;
  }

  .swing-line {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.4), transparent);
  }

  .pendulum-bob {
    position: absolute;
    top: -4px;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #00e5ff 60%, #003355 100%);
    box-shadow: 0 0 10px #00e5ff, 0 0 16px rgba(0, 229, 255, 0.6);
  }

  /* Center pivot */
  .center-node {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
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

  @keyframes swing-oscillation {
    0%, 100% {
      transform: translateX(-34px);
    }
    50% {
      transform: translateX(34px);
    }
  }

  @keyframes precess-plane {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class PhysicsFoucaultPendulum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${foucaultStyles}</style>
      <div class="foucault-box">
        <div class="compass-dial">
          <div class="dial-ticks"></div>
        </div>

        <span class="compass-deg deg-n">N</span>
        <span class="compass-deg deg-s">S</span>
        <span class="compass-deg deg-e">E</span>
        <span class="compass-deg deg-w">W</span>

        <div class="center-node"></div>

        <div class="precession-turntable">
          <div class="pendulum-swing">
            <div class="swing-line"></div>
            <div class="pendulum-bob"></div>
          </div>
        </div>

        <div class="hud">
          <span>FOUCAULT PRECESSION</span>
          <span>ω_p = Ω sinφ</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-foucault-pendulum')) {
  customElements.define('physics-foucault-pendulum', PhysicsFoucaultPendulum);
}
