const churnStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #22170c 0%, #0a0703 100%);
    border: 1.5px solid rgba(255, 193, 7, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 193, 7, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bc-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Wooden stave churn barrel body */
  .bc-barrel {
    position: absolute;
    bottom: 8px;
    width: 38px;
    height: 52px;
    background: linear-gradient(90deg, #3e2723 0%, #5d4037 50%, #3e2723 100%);
    border: 1.5px solid #ffb300;
    border-radius: 4px 4px 6px 6px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px 0;
    box-sizing: border-box;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  }

  /* Iron reinforcement hoops */
  .bc-iron-hoop {
    width: 100%;
    height: 3px;
    background: #ffca28;
    box-shadow: 0 0 3px #ffb300;
  }

  /* Vertical dasher staff plunging up and down */
  .bc-dasher-plunger {
    position: absolute;
    top: 6px;
    width: 18px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: bc-plunge 2s ease-in-out infinite alternate;
  }

  @keyframes bc-plunge {
    0% { transform: translateY(-10px); }
    100% { transform: translateY(12px); }
  }

  .bc-staff {
    width: 5px;
    height: 48px;
    background: #ffecb3;
    border: 0.5px solid #ff8f00;
    border-radius: 2px;
  }

  /* Perforated dasher head agitating butter grains */
  .bc-dasher-head {
    width: 22px;
    height: 7px;
    background: #ffe082;
    border: 1px solid #ff8f00;
    border-radius: 2px;
  }

  /* Splashing cream & butterfat grains */
  .bc-butter-grain {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffd54f;
    box-shadow: 0 0 4px #ffd54f;
    animation: bc-splash 2s ease-in-out infinite alternate;
  }

  @keyframes bc-splash {
    0% { opacity: 0; transform: translateY(0); }
    80% { opacity: 1; transform: translateY(-8px); }
    100% { opacity: 0; transform: translateY(-14px); }
  }

  .bc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 193, 7, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptButterChurn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${churnStyles}</style>
      <div class="bc-box">
        <div class="bc-stage">
          <div class="bc-barrel">
            <div class="bc-iron-hoop"></div>
            <div class="bc-iron-hoop"></div>
            <div class="bc-iron-hoop"></div>
          </div>

          <div class="bc-dasher-plunger">
            <div class="bc-staff"></div>
            <div class="bc-dasher-head"></div>
          </div>

          <div class="bc-butter-grain" style="bottom: 40px; left: 32px;"></div>
          <div class="bc-butter-grain" style="bottom: 42px; right: 32px; animation-delay: -0.5s;"></div>
        </div>

        <div class="bc-label">DASHER BUTTER CHURN</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-butter-churn')) {
  customElements.define('concept-butter-churn', ConceptButterChurn);
}
