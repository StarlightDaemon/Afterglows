const hoopoeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #22160a 0%, #0a0602 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 171, 64, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hp-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Slender decurved probe bill */
  .hp-beak {
    position: absolute;
    top: 42px;
    left: 12px;
    width: 32px;
    height: 3px;
    background: #37474f;
    border-radius: 2px 0 0 2px;
    transform: rotate(12deg);
  }

  /* Cinnamon-pink head and neck */
  .hp-head {
    position: absolute;
    top: 32px;
    left: 40px;
    width: 24px;
    height: 28px;
    background: #e65100;
    border: 1.2px solid #ffb74d;
    border-radius: 50% 40% 30% 30%;
    z-index: 5;
  }

  .hp-eye {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #000000;
    border: 1px solid #ffffff;
  }

  /* Erectile Crown Crest Feathers opening and closing like a fan */
  .hp-crest-fan {
    position: absolute;
    top: 8px;
    left: 44px;
    width: 44px;
    height: 32px;
    transform-origin: 6px 28px;
    animation: hp-crest-display 3.5s ease-in-out infinite alternate;
  }

  @keyframes hp-crest-display {
    0%, 20% { transform: rotate(-35deg) scaleY(0.4); opacity: 0.7; }
    60%, 100% { transform: rotate(0deg) scaleY(1); opacity: 1; }
  }

  .hp-feather {
    position: absolute;
    bottom: 0;
    left: 4px;
    width: 4px;
    height: 28px;
    background: linear-gradient(180deg, #000000 0%, #ffffff 25%, #ff9800 50%, #e65100 100%);
    border-radius: 2px 2px 0 0;
    transform-origin: bottom center;
  }

  .hp-f1 { transform: rotate(-40deg); }
  .hp-f2 { transform: rotate(-20deg); }
  .hp-f3 { transform: rotate(0deg); }
  .hp-f4 { transform: rotate(20deg); }
  .hp-f5 { transform: rotate(40deg); }

  .hp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHoopoeCrest extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hoopoeStyles}</style>
      <div class="hp-box">
        <div class="hp-stage">
          <div class="hp-crest-fan">
            <div class="hp-feather hp-f1"></div>
            <div class="hp-feather hp-f2"></div>
            <div class="hp-feather hp-f3"></div>
            <div class="hp-feather hp-f4"></div>
            <div class="hp-feather hp-f5"></div>
          </div>

          <div class="hp-beak"></div>

          <div class="hp-head">
            <div class="hp-eye"></div>
          </div>
        </div>

        <div class="hp-label">HOOPOE ERECTILE CREST</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-hoopoe-crest')) {
  customElements.define('concept-hoopoe-crest', ConceptHoopoeCrest);
}
