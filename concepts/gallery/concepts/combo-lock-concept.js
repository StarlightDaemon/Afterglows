const comboLockStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .combo {
    width: 104px;
    height: 104px;
    position: relative;
  }

  /* Shackle: pops open at the end of each dial sequence. */
  .combo-shackle {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 40px;
    height: 30px;
    margin-left: -20px;
    border: 5px solid rgba(140, 255, 170, 0.6);
    border-bottom: none;
    border-radius: 20px 20px 0 0;
    box-sizing: border-box;
    animation: combo-shackle 7s ease-in-out infinite;
  }

  /* Lock body. */
  .combo-body {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 62px;
    height: 62px;
    margin-left: -31px;
    border-radius: 12px;
    background: linear-gradient(160deg, #123c1e 0%, #0a2411 55%, #061607 100%);
    border: 1px solid rgba(140, 255, 170, 0.5);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.25);
    animation: combo-body 7s linear infinite;
  }

  /* Pointer notch above the dial. */
  .combo-pointer {
    position: absolute;
    top: 34px;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -3px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 5px solid rgba(216, 255, 187, 0.9);
    z-index: 3;
  }

  /* Dial: tick ring via repeating conic gradient, spun through the
     right-left-right combination sequence with hard stops. */
  .combo-dial {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 42px;
    height: 42px;
    margin-left: -21px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 50% 50%, #0a2411 0 58%, transparent 58%),
      repeating-conic-gradient(rgba(200, 255, 210, 0.85) 0deg 4deg, rgba(20, 70, 35, 0.4) 4deg 30deg);
    border: 2px solid rgba(140, 255, 170, 0.7);
    box-sizing: border-box;
    animation: combo-dial 7s ease-in-out infinite;
    z-index: 2;
  }

  .combo-dial::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    width: 3px;
    height: 8px;
    margin-left: -1.5px;
    border-radius: 1px;
    background: #d8ffbb;
  }

  /* Center hub label. */
  .combo-hub {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.55);
    background: #051206;
  }

  /* Click sparks at each stop of the sequence. */
  .combo-click {
    position: absolute;
    top: 44px;
    left: 50%;
    margin-left: 26px;
    font-family: monospace;
    font-size: 9px;
    color: rgba(200, 255, 210, 0);
    animation: combo-click 7s linear infinite;
  }

  /* Unlock flash ring. */
  .combo-flash {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 42px;
    height: 42px;
    margin-left: -21px;
    border-radius: 50%;
    border: 2px solid rgba(216, 255, 187, 0);
    animation: combo-flash 7s ease-out infinite;
  }

  /* The dial sequence: spin right to 32, back left to 11, right to 24,
     hold, then the shackle pops and everything resets. */
  @keyframes combo-dial {
    0%, 4% { transform: rotate(0deg); }
    22% { transform: rotate(305deg); }
    27% { transform: rotate(305deg); }
    44% { transform: rotate(118deg); }
    49% { transform: rotate(118deg); }
    62% { transform: rotate(212deg); }
    78% { transform: rotate(212deg); }
    92%, 100% { transform: rotate(0deg); }
  }

  @keyframes combo-shackle {
    0%, 74% { transform: translateY(0); }
    79%, 86% { transform: translateY(-9px); }
    94%, 100% { transform: translateY(0); }
  }

  @keyframes combo-body {
    0%, 77% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.25); }
    80%, 85% { box-shadow: 0 0 18px rgba(120, 255, 150, 0.55); }
    92%, 100% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.25); }
  }

  @keyframes combo-click {
    0%, 20% { color: rgba(200, 255, 210, 0); content: ''; }
    22%, 25% { color: rgba(200, 255, 210, 0.9); }
    27%, 42% { color: rgba(200, 255, 210, 0); }
    44%, 47% { color: rgba(200, 255, 210, 0.9); }
    49%, 60% { color: rgba(200, 255, 210, 0); }
    62%, 65% { color: rgba(200, 255, 210, 0.9); }
    67%, 100% { color: rgba(200, 255, 210, 0); }
  }

  @keyframes combo-flash {
    0%, 76% { border-color: rgba(216, 255, 187, 0); transform: scale(1); opacity: 0; }
    80% { border-color: rgba(216, 255, 187, 0.8); transform: scale(1); opacity: 1; }
    92%, 100% { border-color: rgba(216, 255, 187, 0); transform: scale(1.7); opacity: 0; }
  }
`;

class ConceptComboLock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${comboLockStyles}</style>
      <div class="combo">
        <div class="combo-shackle"></div>
        <div class="combo-body"></div>
        <div class="combo-pointer"></div>
        <div class="combo-dial"><div class="combo-hub"></div></div>
        <span class="combo-click">*click*</span>
        <div class="combo-flash"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-combo-lock')) {
  customElements.define('concept-combo-lock', ConceptComboLock);
}
