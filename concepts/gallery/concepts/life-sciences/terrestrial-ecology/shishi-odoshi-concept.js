const shishiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .shi {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Fixed bamboo water supply spout at upper right */
  .shi-spout {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 32px;
    height: 8px;
    background: linear-gradient(180deg, #8cffaa, #005510);
    border: 1px solid #ffffff;
    border-radius: 4px 0 0 4px;
    transform: rotate(14deg);
    z-index: 3;
  }

  /* Discrete water stream packet dripping from spout */
  .shi-drip {
    position: absolute;
    top: 24px;
    right: 46px;
    width: 4px;
    height: 6px;
    background: #ffffff;
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 5;
    animation: shi-drop-fall 1.4s linear infinite;
  }

  @keyframes shi-drop-fall {
    0% { transform: translateY(0) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(22px) scale(1.2); opacity: 0; }
  }

  /* Pivot axle post */
  .shi-post {
    position: absolute;
    bottom: 22px;
    left: 48px;
    width: 6px;
    height: 28px;
    background: linear-gradient(90deg, #005510, #8cffaa, #003308);
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    z-index: 2;
  }

  /* Pivoting hollow bamboo rocker arm with active rock clack cycle */
  .shi-rocker-arm {
    position: absolute;
    bottom: 44px;
    left: 18px;
    width: 68px;
    height: 9px;
    background: linear-gradient(180deg, #d6ffe0, #008818 60%, #011d06 100%);
    border: 1.5px solid #ffffff;
    border-radius: 4px;
    transform-origin: 34px 5px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    z-index: 4;
    animation: shi-rock-cycle 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes shi-rock-cycle {
    0% { transform: rotate(-20deg); } /* Starting filling tilt */
    45% { transform: rotate(-14deg); } /* Weight accumulates */
    60% { transform: rotate(32deg); } /* Forward tip & water discharge */
    75% { transform: rotate(-28deg); } /* Sharp recoil strike on stone anvil! */
    82% { transform: rotate(-18deg); } /* Elastic bounce */
    90%, 100% { transform: rotate(-20deg); }
  }

  /* River rock anvil at bottom left */
  .shi-rock {
    position: absolute;
    bottom: 12px;
    left: 12px;
    width: 28px;
    height: 18px;
    background: radial-gradient(circle at 40% 30%, #8cffaa 0%, #006611 60%, #011405 100%);
    border: 1.5px solid #ffffff;
    border-radius: 12px 14px 6px 6px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    z-index: 3;
  }

  /* Soundwave clack ring emitted from rock impact */
  .shi-clack-wave {
    position: absolute;
    bottom: 22px;
    left: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    animation: shi-clack-sound 2.8s ease-out infinite;
  }

  @keyframes shi-clack-sound {
    0%, 74% { opacity: 0; transform: scale(0.2); }
    75% { opacity: 1; transform: scale(0.6); filter: drop-shadow(0 0 8px #ffffff); }
    84% { opacity: 0.8; transform: scale(1.8); }
    92%, 100% { opacity: 0; transform: scale(2.6); }
  }

  /* Garden stone & pool basin at bottom */
  .shi-basin {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 18px;
    background: linear-gradient(180deg, rgba(0, 60, 15, 0.8), #010c04);
    border-top: 1px solid var(--accent, #00cc00);
    z-index: 1;
  }

  /* Caption */
  .shi-label {
    position: absolute;
    top: 6px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptShishiOdoshi extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${shishiStyles}</style>
      <div class="shi">
        <div class="shi-label">SHISHI-ODOSHI 鹿威し</div>
        <div class="shi-spout"></div>
        <div class="shi-drip"></div>

        <div class="shi-post"></div>
        <div class="shi-rocker-arm"></div>
        <div class="shi-rock"></div>
        <div class="shi-clack-wave"></div>

        <div class="shi-basin"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-shishi-odoshi')) {
  customElements.define('concept-shishi-odoshi', ConceptShishiOdoshi);
}
