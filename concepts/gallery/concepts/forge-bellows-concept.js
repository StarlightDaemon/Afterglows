const bellowsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1107 0%, #080401 100%);
    border: 1.5px solid rgba(255, 145, 0, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 145, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fb-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dual chamber folding leather accordion bellows */
  .fb-bellows-body {
    position: absolute;
    left: 6px;
    width: 44px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fb-leaf-top {
    width: 40px;
    height: 18px;
    background: #3e2723;
    border: 1.5px solid #ff9100;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    transform-origin: right center;
    animation: fb-pump-top 1.6s ease-in-out infinite alternate;
  }

  @keyframes fb-pump-top {
    0% { transform: rotate(-24deg); }
    100% { transform: rotate(6deg); }
  }

  .fb-leaf-bot {
    width: 40px;
    height: 18px;
    background: #3e2723;
    border: 1.5px solid #ff9100;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    transform-origin: right center;
    animation: fb-pump-bot 1.6s ease-in-out infinite alternate;
    animation-delay: -0.8s;
  }

  @keyframes fb-pump-bot {
    0% { transform: rotate(24deg); }
    100% { transform: rotate(-6deg); }
  }

  /* Tuyere iron nozzle pipe */
  .fb-nozzle {
    position: absolute;
    left: 46px;
    top: 35px;
    width: 14px;
    height: 6px;
    background: #ffffff;
    border: 1px solid #ff9100;
    border-radius: 1px;
    z-index: 4;
  }

  /* Translating discrete high-velocity air blast packets */
  .fb-air-packet {
    position: absolute;
    width: 5px;
    height: 3px;
    border-radius: 2px;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #ffccbc;
    z-index: 5;
    animation: fb-blast-travel 0.8s linear infinite;
  }

  .ap1 { animation-delay: 0s; }
  .ap2 { animation-delay: 0.4s; }

  @keyframes fb-blast-travel {
    0% { transform: translate(4px, 0) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(24px, 0) scale(1.4); opacity: 0; }
  }

  /* Glowing charcoal hearth forge coals */
  .fb-hearth {
    position: absolute;
    right: 8px;
    top: 24px;
    width: 22px;
    height: 28px;
    background: radial-gradient(circle at 50% 50%, #ffffff 0%, #ff3d00 50%, #210d05 100%);
    border: 1.5px solid #ffab00;
    border-radius: 50%;
    box-shadow: 0 0 14px #ff3d00, 0 0 28px rgba(255, 109, 0, 0.7);
    animation: fb-coal-glow 1.6s ease-in-out infinite alternate;
  }

  @keyframes fb-coal-glow {
    0% { transform: scale(0.85); filter: brightness(0.8); }
    100% { transform: scale(1.2); filter: brightness(1.4); }
  }

  /* Leaping ballistic hearth sparks */
  .fb-spark {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffd700, 0 0 10px #ff3d00;
    z-index: 6;
  }

  .sp1 { right: 18px; top: 32px; animation: fb-spark-leap-1 1.2s ease-out infinite; }
  .sp2 { right: 14px; top: 28px; animation: fb-spark-leap-2 1.2s ease-out infinite; animation-delay: 0.6s; }

  @keyframes fb-spark-leap-1 {
    0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(-12px, -20px) scale(1.2); opacity: 0; }
  }

  @keyframes fb-spark-leap-2 {
    0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(8px, -22px) scale(1.2); opacity: 0; }
  }

  .fb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 145, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptForgeBellows extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bellowsStyles}</style>
      <div class="fb-box">
        <div class="fb-stage">
          <div class="fb-bellows-body">
            <div class="fb-leaf-top"></div>
            <div class="fb-leaf-bot"></div>
          </div>

          <div class="fb-nozzle"></div>
          <div class="fb-air-packet ap1"></div>
          <div class="fb-air-packet ap2"></div>
          <div class="fb-hearth"></div>
          <div class="fb-spark sp1"></div>
          <div class="fb-spark sp2"></div>
        </div>

        <div class="fb-label">FORGE BELLOWS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-forge-bellows')) {
  customElements.define('concept-forge-bellows', ConceptForgeBellows);
}
