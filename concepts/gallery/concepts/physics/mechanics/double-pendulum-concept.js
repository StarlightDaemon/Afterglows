const doublePendulumStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 30%, #150518 0%, #08020a 100%);
    overflow: hidden;
  }

  .pendulum-box {
    width: 130px;
    height: 130px;
    position: relative;
  }

  /* Fixed base */
  .pivot-top {
    position: absolute;
    top: 24px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #ff007f;
    box-shadow: 0 0 8px #ff007f;
    z-index: 10;
  }

  .mount-plate {
    position: absolute;
    top: 16px;
    left: 45px;
    right: 45px;
    height: 4px;
    background: #33112a;
    border-bottom: 1px solid #ff007f;
  }

  /* Primary Rod (hinged at top pivot) */
  .arm-1 {
    position: absolute;
    top: 24px;
    left: 50%;
    width: 2px;
    height: 38px;
    margin-left: -1px;
    transform-origin: top center;
    animation: swing-arm1 4.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
    z-index: 4;
  }

  .rod-1 {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #ff007f, #ff88cc);
    box-shadow: 0 0 4px rgba(255, 0, 127, 0.6);
  }

  .bob-1 {
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #ff007f 60%, #440022 100%);
    box-shadow: 0 0 8px #ff007f;
  }

  /* Secondary Rod (hinged at bob 1) */
  .arm-2 {
    position: absolute;
    top: 38px;
    left: 50%;
    width: 2px;
    height: 36px;
    margin-left: -1px;
    transform-origin: top center;
    animation: swing-arm2 4.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  .rod-2 {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #00ffff, #0088cc);
    box-shadow: 0 0 4px rgba(0, 255, 255, 0.6);
  }

  .bob-2 {
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #00ffff 60%, #003344 100%);
    box-shadow: 0 0 10px #00ffff, 0 0 16px rgba(0, 255, 255, 0.8);
  }

  /* Chaotic attractor trajectory background */
  .chaotic-trail {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.35;
    z-index: 1;
  }

  .trail-path {
    fill: none;
    stroke: url(#chaosGrad);
    stroke-width: 1.2;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: draw-trail 4.8s linear infinite;
  }

  .hud-readout {
    position: absolute;
    bottom: 4px;
    left: 8px;
    right: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 0, 127, 0.7);
  }

  @keyframes swing-arm1 {
    0% { transform: rotate(-52deg); }
    20% { transform: rotate(44deg); }
    42% { transform: rotate(-38deg); }
    65% { transform: rotate(58deg); }
    85% { transform: rotate(-22deg); }
    100% { transform: rotate(-52deg); }
  }

  @keyframes swing-arm2 {
    0% { transform: rotate(70deg); }
    15% { transform: rotate(-110deg); }
    35% { transform: rotate(145deg); }
    55% { transform: rotate(-85deg); }
    75% { transform: rotate(95deg); }
    90% { transform: rotate(-40deg); }
    100% { transform: rotate(70deg); }
  }

  @keyframes draw-trail {
    0% { stroke-dashoffset: 400; opacity: 0.2; }
    50% { stroke-dashoffset: 200; opacity: 0.6; }
    100% { stroke-dashoffset: 0; opacity: 0.2; }
  }
`;

class PhysicsDoublePendulum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${doublePendulumStyles}</style>
      <div class="pendulum-box">
        <svg class="chaotic-trail" viewBox="0 0 130 130">
          <defs>
            <linearGradient id="chaosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ff007f" />
              <stop offset="50%" stop-color="#00ffff" />
              <stop offset="100%" stop-color="#ffff00" />
            </linearGradient>
          </defs>
          <path class="trail-path" d="M 28 85 C 10 115, 60 125, 95 105 C 120 90, 110 50, 75 70 C 40 90, 30 55, 65 35 C 95 20, 120 70, 85 110 C 50 130, 20 100, 28 85" />
        </svg>

        <div class="mount-plate"></div>
        <div class="pivot-top"></div>

        <div class="arm-1">
          <div class="rod-1"></div>
          <div class="bob-1"></div>
          <div class="arm-2">
            <div class="rod-2"></div>
            <div class="bob-2"></div>
          </div>
        </div>

        <div class="hud-readout">
          <span>CHAOS · NON-LINEAR</span>
          <span>λ₁=0.42</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-double-pendulum')) {
  customElements.define('physics-double-pendulum', PhysicsDoublePendulum);
}
