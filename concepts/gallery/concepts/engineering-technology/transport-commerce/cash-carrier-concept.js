const cashCarrierStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1e16 0%, #030a07 100%);
    border: 1.5px solid rgba(76, 175, 80, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cc-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Overhead taut trolley track wires */
  .cc-wire-top {
    position: absolute;
    top: 24px;
    width: 88px;
    height: 1.5px;
    background: #ffca28;
    box-shadow: 0 0 4px #ffca28;
  }

  .cc-wire-bot {
    position: absolute;
    top: 36px;
    width: 88px;
    height: 1.5px;
    background: #ffca28;
  }

  /* Catapult end stations with brass pulleys */
  .cc-station-l {
    position: absolute;
    left: 4px;
    top: 18px;
    width: 8px;
    height: 28px;
    background: #2e7d32;
    border: 1px solid #ffd54f;
    border-radius: 2px;
  }

  .cc-station-r {
    position: absolute;
    right: 4px;
    top: 18px;
    width: 8px;
    height: 28px;
    background: #2e7d32;
    border: 1px solid #ffd54f;
    border-radius: 2px;
  }

  /* Cash Carrier Trolley Shuttle flying between stations */
  .cc-trolley {
    position: absolute;
    top: 18px;
    width: 22px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: cc-shuttle-zip 4s ease-in-out infinite alternate;
  }

  @keyframes cc-shuttle-zip {
    0%, 15% { left: 14px; }
    85%, 100% { left: 60px; }
  }

  /* Upper Wire Pulley Wheels */
  .cc-pulleys {
    display: flex;
    gap: 8px;
  }

  .cc-wheel {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffd54f;
    border: 1px solid #ffffff;
  }

  .cc-hanger {
    width: 2px;
    height: 8px;
    background: #ffd54f;
  }

  /* Turned Wooden Cash Cup / Capsule */
  .cc-cup {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #4e342e;
    border: 1.2px solid #ffca28;
    box-shadow: 0 0 4px #ffca28;
  }

  .cc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(129, 199, 132, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCashCarrier extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cashCarrierStyles}</style>
      <div class="cc-box">
        <div class="cc-stage">
          <div class="cc-station-l"></div>
          <div class="cc-station-r"></div>

          <div class="cc-wire-top"></div>
          <div class="cc-wire-bot"></div>

          <div class="cc-trolley">
            <div class="cc-pulleys">
              <div class="cc-wheel"></div>
              <div class="cc-wheel"></div>
            </div>
            <div class="cc-hanger"></div>
            <div class="cc-cup"></div>
          </div>
        </div>

        <div class="cc-label">WIRE CASH CARRIER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cash-carrier')) {
  customElements.define('concept-cash-carrier', ConceptCashCarrier);
}
