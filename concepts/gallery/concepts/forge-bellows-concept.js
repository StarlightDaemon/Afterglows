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
    left: 8px;
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
    border: 1.2px solid #ff9100;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    transform-origin: right center;
    animation: fb-pump-top 2s ease-in-out infinite alternate;
  }

  @keyframes fb-pump-top {
    0% { transform: rotate(-14deg); }
    100% { transform: rotate(4deg); }
  }

  .fb-leaf-bot {
    width: 40px;
    height: 18px;
    background: #3e2723;
    border: 1.2px solid #ff9100;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    transform-origin: right center;
    animation: fb-pump-bot 2s ease-in-out infinite alternate;
    animation-delay: -1s;
  }

  @keyframes fb-pump-bot {
    0% { transform: rotate(14deg); }
    100% { transform: rotate(-4deg); }
  }

  /* Tuyere iron nozzle pipe */
  .fb-nozzle {
    position: absolute;
    left: 48px;
    top: 35px;
    width: 14px;
    height: 5px;
    background: #ffffff;
    border: 1px solid #ff9100;
  }

  /* Air blast stream into hearth */
  .fb-air-blast {
    position: absolute;
    left: 62px;
    top: 36px;
    width: 18px;
    height: 3px;
    background: linear-gradient(90deg, #ffffff 0%, transparent 100%);
    animation: fb-blast 0.2s infinite alternate;
  }

  @keyframes fb-blast {
    0% { transform: scaleX(0.8); opacity: 0.7; }
    100% { transform: scaleX(1.2); opacity: 1; }
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
    box-shadow: 0 0 12px #ff3d00, 0 0 24px rgba(255, 109, 0, 0.6);
    animation: fb-coal-glow 2s ease-in-out infinite alternate;
  }

  @keyframes fb-coal-glow {
    0% { transform: scale(0.9); filter: brightness(0.9); }
    100% { transform: scale(1.1); filter: brightness(1.3); }
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
          <div class="fb-air-blast"></div>
          <div class="fb-hearth"></div>
        </div>

        <div class="fb-label">FORGE BELLOWS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-forge-bellows')) {
  customElements.define('concept-forge-bellows', ConceptForgeBellows);
}
