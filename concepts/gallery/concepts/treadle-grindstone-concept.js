const grindstoneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e150b 0%, #080502 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 171, 64, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tg-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Wooden trough bench stand */
  .tg-bench {
    position: absolute;
    bottom: 8px;
    width: 82px;
    height: 18px;
    background: #3e2723;
    border: 1.5px solid #ffb74d;
    border-radius: 3px;
  }

  /* Water cooling basin trough */
  .tg-water-trough {
    position: absolute;
    bottom: 12px;
    left: 26px;
    width: 44px;
    height: 10px;
    background: #00838f;
    border-top: 1px solid #00e5ff;
    border-radius: 0 0 4px 4px;
  }

  /* Rotating circular sandstone grindstone wheel */
  .tg-stone-wheel {
    position: absolute;
    bottom: 16px;
    left: 28px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(circle, #8d6e63 0%, #4e342e 70%);
    border: 2px dashed #ffe082;
    box-shadow: 0 0 6px rgba(255, 224, 130, 0.4);
    animation: tg-spin-stone 1.5s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes tg-spin-stone {
    to { transform: rotate(360deg); }
  }

  .tg-axle {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #ff8f00;
  }

  /* Steel chisel tool held against wheel */
  .tg-tool {
    position: absolute;
    top: 24px;
    left: 18px;
    width: 24px;
    height: 4px;
    background: #ffffff;
    border: 1px solid #78909c;
    border-radius: 1px;
    transform: rotate(-25deg);
    box-shadow: 0 0 4px #ffffff;
    z-index: 5;
  }

  /* Friction spark stream spraying off wheel */
  .tg-spark-shower {
    position: absolute;
    top: 28px;
    left: 42px;
    width: 28px;
    height: 18px;
  }

  .tg-spark {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffd600;
    box-shadow: 0 0 4px #ff6d00;
    animation: tg-spark-fly 0.3s linear infinite;
  }

  @keyframes tg-spark-fly {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(18px, 12px) scale(0.2); opacity: 0; }
  }

  .tg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTreadleGrindstone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${grindstoneStyles}</style>
      <div class="tg-box">
        <div class="tg-stage">
          <div class="tg-bench"></div>
          <div class="tg-water-trough"></div>

          <div class="tg-stone-wheel">
            <div class="tg-axle"></div>
          </div>

          <div class="tg-tool"></div>

          <div class="tg-spark-shower">
            <div class="tg-spark" style="top: 2px; left: 0px; animation-delay: 0s;"></div>
            <div class="tg-spark" style="top: 4px; left: 2px; animation-delay: 0.1s;"></div>
            <div class="tg-spark" style="top: 0px; left: 1px; animation-delay: 0.2s;"></div>
          </div>
        </div>

        <div class="tg-label">TREADLE GRINDSTONE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-treadle-grindstone')) {
  customElements.define('concept-treadle-grindstone', ConceptTreadleGrindstone);
}
