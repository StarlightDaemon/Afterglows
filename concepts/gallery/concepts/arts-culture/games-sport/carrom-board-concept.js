const carromStyles = `
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
    background: radial-gradient(circle at 50% 50%, #22140a 0%, #0a0603 100%);
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
    width: 74px;
    height: 74px;
    background: #deb887;
    border: 3.5px solid #3e2723;
    border-radius: 4px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 4 Corner Pockets */
  .cb-pocket {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #110802;
    border: 1px solid #5d4037;
  }

  .cb-p-tl { top: 1px; left: 1px; }
  .cb-p-tr { top: 1px; right: 1px; }
  .cb-p-bl { bottom: 1px; left: 1px; }
  .cb-p-br { bottom: 1px; right: 1px; }

  /* Center circular mandala ring */
  .cb-center-ring {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1.5px solid #d32f2f;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Red Queen piece in center */
  .cb-queen {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #d32f2f;
    border: 1px solid #ffffff;
    box-shadow: 0 0 4px #d32f2f;
    animation: cb-queen-pocket 3s ease-in-out infinite;
  }

  @keyframes cb-queen-pocket {
    0%, 40% { top: 33px; left: 33px; opacity: 1; }
    55% { top: 6px; left: 6px; opacity: 1; transform: scale(1); }
    60%, 100% { top: 3px; left: 3px; opacity: 0; transform: scale(0.6); }
  }

  /* Large Carrom Striker token */
  .cb-striker {
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #1976d2;
    box-shadow: 0 0 5px rgba(25, 118, 210, 0.8);
    animation: cb-striker-flick 3s ease-in-out infinite;
  }

  @keyframes cb-striker-flick {
    0%, 30% { bottom: 8px; left: 31px; transform: scale(1); }
    45% { bottom: 32px; left: 31px; transform: scale(1.05); }
    70%, 100% { bottom: 8px; left: 31px; transform: scale(1); }
  }

  /* Baseline marker */
  .cb-baseline {
    position: absolute;
    bottom: 12px;
    width: 52px;
    height: 2px;
    border-top: 1px solid #5d4037;
    border-bottom: 1px solid #5d4037;
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

class ConceptCarromBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${carromStyles}</style>
      <div class="cb-box">
        <div class="cb-stage">
          <div class="cb-pocket cb-p-tl"></div>
          <div class="cb-pocket cb-p-tr"></div>
          <div class="cb-pocket cb-p-bl"></div>
          <div class="cb-pocket cb-p-br"></div>

          <div class="cb-baseline"></div>
          <div class="cb-center-ring"></div>

          <div class="cb-queen"></div>
          <div class="cb-striker"></div>
        </div>

        <div class="cb-label">CARROM BOARD</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-carrom-board')) {
  customElements.define('concept-carrom-board', ConceptCarromBoard);
}
