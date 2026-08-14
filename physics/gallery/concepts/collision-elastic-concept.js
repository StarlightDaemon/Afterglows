const collisionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d121c 0%, #04060a 100%);
    overflow: hidden;
  }

  .track-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Air track rail */
  .air-rail {
    position: absolute;
    top: 66px;
    left: 8px;
    right: 8px;
    height: 6px;
    background: #1e2638;
    border-top: 1.5px solid #00e5ff;
    border-bottom: 1px solid #101624;
  }

  .rail-ticks {
    position: absolute;
    top: 74px;
    left: 10px;
    right: 10px;
    height: 4px;
    background: repeating-linear-gradient(90deg, rgba(0, 229, 255, 0.4) 0, rgba(0, 229, 255, 0.4) 1px, transparent 1px, transparent 10px);
  }

  /* Left Glider (m1) */
  .glider-left {
    position: absolute;
    top: 48px;
    left: 10px;
    width: 26px;
    height: 18px;
    background: linear-gradient(180deg, #10334c 0%, #081a28 100%);
    border: 1px solid #00e5ff;
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 6.5px;
    color: #00e5ff;
    animation: move-left-glider 3.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  }

  .bumper-left {
    position: absolute;
    right: -3px;
    top: 4px;
    width: 3px;
    height: 10px;
    background: #ffffff;
    border-radius: 1px;
    box-shadow: 0 0 4px #ffffff;
  }

  /* Velocity vector for Left Glider */
  .vec-v1 {
    position: absolute;
    top: -10px;
    left: 4px;
    width: 18px;
    height: 1.5px;
    background: #00e5ff;
    box-shadow: 0 0 4px #00e5ff;
    animation: v1-flip 3.2s steps(1) infinite;
  }

  .vec-v1::after {
    content: '';
    position: absolute;
    right: 0;
    top: -2.5px;
    border: 3px solid transparent;
    border-left-color: #00e5ff;
  }

  /* Right Glider (m2) */
  .glider-right {
    position: absolute;
    top: 44px;
    right: 12px;
    width: 32px;
    height: 22px;
    background: linear-gradient(180deg, #4c2610 0%, #281408 100%);
    border: 1px solid #ff7700;
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(255, 119, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 6.5px;
    color: #ffaa44;
    animation: move-right-glider 3.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  }

  .bumper-right {
    position: absolute;
    left: -3px;
    top: 6px;
    width: 3px;
    height: 10px;
    background: #ffffff;
    border-radius: 1px;
    box-shadow: 0 0 4px #ffffff;
  }

  /* Velocity vector for Right Glider */
  .vec-v2 {
    position: absolute;
    top: -10px;
    right: 6px;
    width: 14px;
    height: 1.5px;
    background: #ff7700;
    box-shadow: 0 0 4px #ff7700;
    animation: v2-flip 3.2s steps(1) infinite;
  }

  .vec-v2::before {
    content: '';
    position: absolute;
    left: 0;
    top: -2.5px;
    border: 3px solid transparent;
    border-right-color: #ff7700;
  }

  /* Impact contact flash spark */
  .contact-spark {
    position: absolute;
    top: 52px;
    left: 56px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 30%, rgba(0, 229, 255, 0.8) 70%, transparent 100%);
    box-shadow: 0 0 16px #ffffff, 0 0 24px #00e5ff;
    opacity: 0;
    animation: spark-flash 3.2s linear infinite;
    pointer-events: none;
    z-index: 10;
  }

  .hud-stats {
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

  .energy-status {
    position: absolute;
    top: 14px;
    font-size: 7px;
    font-family: monospace;
    color: #88ff88;
    letter-spacing: 0.5px;
  }

  @keyframes move-left-glider {
    0% { transform: translateX(0px); }
    40% { transform: translateX(38px); }
    42% { transform: translateX(38px); }
    85%, 100% { transform: translateX(-4px); }
  }

  @keyframes move-right-glider {
    0% { transform: translateX(0px); }
    40% { transform: translateX(-36px); }
    42% { transform: translateX(-36px); }
    85%, 100% { transform: translateX(8px); }
  }

  @keyframes spark-flash {
    0%, 39% { opacity: 0; transform: scale(0.2); }
    40%, 42% { opacity: 1; transform: scale(1.4); }
    45%, 100% { opacity: 0; transform: scale(0.2); }
  }

  @keyframes v1-flip {
    0%, 39% { transform: scaleX(1); }
    40%, 100% { transform: scaleX(-0.8); }
  }

  @keyframes v2-flip {
    0%, 39% { transform: scaleX(1); }
    40%, 100% { transform: scaleX(-1.2); }
  }
`;

class PhysicsCollisionElastic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${collisionStyles}</style>
      <div class="track-box">
        <span class="energy-status">ELASTIC COLLISION (e=1.0)</span>
        <div class="air-rail"></div>
        <div class="rail-ticks"></div>
        <div class="contact-spark"></div>

        <div class="glider-left">
          <div class="vec-v1"></div>
          <div class="bumper-left"></div>
          m₁
        </div>

        <div class="glider-right">
          <div class="vec-v2"></div>
          <div class="bumper-right"></div>
          m₂
        </div>

        <div class="hud-stats">
          <span>Δp = 0 (Conserved)</span>
          <span>ΔK = 0</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-collision-elastic')) {
  customElements.define('physics-collision-elastic', PhysicsCollisionElastic);
}
