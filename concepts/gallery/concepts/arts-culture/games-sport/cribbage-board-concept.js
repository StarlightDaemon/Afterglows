const cribbageStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201309 0%, #0a0603 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 183, 77, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cb-stage {
    position: relative;
    width: 96px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Inlaid hardwood track board */
  .cb-board {
    position: absolute;
    width: 88px;
    height: 52px;
    background: #3e2723;
    border: 1.5px solid #ffb74d;
    border-radius: 6px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 4px 6px;
    box-sizing: border-box;
  }

  /* Continuous peg track lanes */
  .cb-lane {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .cb-hole-group {
    display: flex;
    gap: 3px;
  }

  .cb-hole {
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #1a0f07;
    border: 0.5px solid #ffb74d;
  }

  /* Leapfrogging Brass Peg */
  .cb-peg-brass {
    position: absolute;
    width: 5px;
    height: 9px;
    background: #ffd54f;
    border-radius: 2.5px 2.5px 1px 1px;
    box-shadow: 0 0 4px #ffd54f;
    animation: cb-leap-brass 3s ease-in-out infinite;
  }

  @keyframes cb-leap-brass {
    0% { top: 18px; left: 16px; transform: scaleY(1); }
    20% { top: 10px; left: 34px; transform: scaleY(1.2); }
    40% { top: 18px; left: 52px; transform: scaleY(1); }
    60% { top: 10px; left: 70px; transform: scaleY(1.2); }
    80% { top: 18px; left: 88px; transform: scaleY(1); }
    100% { top: 18px; left: 16px; transform: scaleY(1); }
  }

  /* Leapfrogging Silver Peg */
  .cb-peg-silver {
    position: absolute;
    width: 5px;
    height: 9px;
    background: #ffffff;
    border-radius: 2.5px 2.5px 1px 1px;
    box-shadow: 0 0 4px #ffffff;
    animation: cb-leap-silver 3s ease-in-out infinite;
    animation-delay: -1.5s;
  }

  @keyframes cb-leap-silver {
    0% { top: 38px; left: 16px; transform: scaleY(1); }
    20% { top: 30px; left: 34px; transform: scaleY(1.2); }
    40% { top: 38px; left: 52px; transform: scaleY(1); }
    60% { top: 30px; left: 70px; transform: scaleY(1.2); }
    80% { top: 38px; left: 88px; transform: scaleY(1); }
    100% { top: 38px; left: 16px; transform: scaleY(1); }
  }

  .cb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCribbageBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cribbageStyles}</style>
      <div class="cb-box">
        <div class="cb-stage">
          <div class="cb-board">
            <div class="cb-lane">
              <div class="cb-hole-group">
                <div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div>
              </div>
              <div class="cb-hole-group">
                <div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div>
              </div>
              <div class="cb-hole-group">
                <div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div>
              </div>
            </div>

            <div class="cb-lane">
              <div class="cb-hole-group">
                <div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div>
              </div>
              <div class="cb-hole-group">
                <div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div>
              </div>
              <div class="cb-hole-group">
                <div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div><div class="cb-hole"></div>
              </div>
            </div>
          </div>

          <div class="cb-peg-brass"></div>
          <div class="cb-peg-silver"></div>
        </div>

        <div class="cb-label">CRIBBAGE PEGBOARD</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cribbage-board')) {
  customElements.define('concept-cribbage-board', ConceptCribbageBoard);
}
