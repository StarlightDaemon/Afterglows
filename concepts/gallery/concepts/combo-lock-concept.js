const comboLockStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Solid brass combination padlock with hardened chrome shackle,
     black rotary combination dial, red pointer, and emerald unlock flash */
  .comboc {
    width: 104px;
    height: 104px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Hardened chrome steel shackle */
  .comboc-shackle {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 40px;
    height: 30px;
    margin-left: -20px;
    border: 5px solid #cbd5e1;
    border-bottom: none;
    border-radius: 20px 20px 0 0;
    box-sizing: border-box;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8), inset 0 1px 2px #ffffff;
    animation: comboc-shackle 7s ease-in-out infinite;
  }

  /* Brushed solid brass lock body */
  .comboc-body {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 62px;
    height: 62px;
    margin-left: -31px;
    border-radius: 12px;
    background: linear-gradient(160deg, #fef08a 0%, #facc15 45%, #ca8a04 80%, #78350f 100%);
    border: 2px solid #ca8a04;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), inset 0 2px 4px #ffffff;
    animation: comboc-body 7s linear infinite;
  }

  /* Red combination indicator pointer */
  .comboc-pointer {
    position: absolute;
    top: 34px;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -3px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 5px solid #ef4444;
    filter: drop-shadow(0 0 2px #dc2626);
    z-index: 3;
  }

  /* Black combination dial with white tick markings */
  .comboc-dial {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 42px;
    height: 42px;
    margin-left: -21px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 50% 50%, #09090b 0 58%, transparent 58%),
      repeating-conic-gradient(#ffffff 0deg 4deg, #1e293b 4deg 30deg);
    border: 2px solid #cbd5e1;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
    animation: comboc-dial 7s ease-in-out infinite;
    z-index: 2;
  }

  .comboc-dial::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    width: 3px;
    height: 8px;
    margin-left: -1.5px;
    border-radius: 1px;
    background: #ef4444;
  }

  /* Center brass hub */
  .comboc-hub {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid #ca8a04;
    background: #facc15;
  }

  /* Click text */
  .comboc-click {
    position: absolute;
    top: 44px;
    left: 50%;
    margin-left: 26px;
    font-family: monospace;
    font-size: 9px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0);
    animation: comboc-click 7s linear infinite;
  }

  /* Unlock green flash */
  .comboc-flash {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 42px;
    height: 42px;
    margin-left: -21px;
    border-radius: 50%;
    border: 2px solid rgba(74, 222, 128, 0);
    animation: comboc-flash 7s ease-out infinite;
  }

  @keyframes comboc-dial {
    0%, 4% { transform: rotate(0deg); }
    22% { transform: rotate(305deg); }
    27% { transform: rotate(305deg); }
    44% { transform: rotate(118deg); }
    49% { transform: rotate(118deg); }
    62% { transform: rotate(212deg); }
    78% { transform: rotate(212deg); }
    92%, 100% { transform: rotate(0deg); }
  }

  @keyframes comboc-shackle {
    0%, 74% { transform: translateY(0); }
    79%, 86% { transform: translateY(-9px); }
    94%, 100% { transform: translateY(0); }
  }

  @keyframes comboc-body {
    0%, 77% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9); }
    80%, 85% { box-shadow: 0 0 20px #22c55e, 0 4px 12px rgba(0, 0, 0, 0.9); }
    92%, 100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9); }
  }

  @keyframes comboc-click {
    0%, 20% { color: rgba(255, 255, 255, 0); text-shadow: none; }
    22%, 25% { color: #facc15; text-shadow: 0 0 5px #fde047; }
    27%, 42% { color: rgba(255, 255, 255, 0); text-shadow: none; }
    44%, 47% { color: #facc15; text-shadow: 0 0 5px #fde047; }
    49%, 60% { color: rgba(255, 255, 255, 0); text-shadow: none; }
    62%, 65% { color: #4ade80; text-shadow: 0 0 5px #22c55e; }
    67%, 100% { color: rgba(255, 255, 255, 0); text-shadow: none; }
  }

  @keyframes comboc-flash {
    0%, 76% { border-color: rgba(74, 222, 128, 0); transform: scale(1); opacity: 0; }
    80% { border-color: #22c55e; transform: scale(1); opacity: 1; box-shadow: 0 0 10px #22c55e; }
    92%, 100% { border-color: rgba(74, 222, 128, 0); transform: scale(1.7); opacity: 0; }
  }
  `,
};

const comboLockMarkup = {
  v1: `
      <div class="combo">
        <div class="combo-shackle"></div>
        <div class="combo-body"></div>
        <div class="combo-pointer"></div>
        <div class="combo-dial"><div class="combo-hub"></div></div>
        <span class="combo-click">*click*</span>
        <div class="combo-flash"></div>
      </div>
    `,
  v2: `
      <div class="comboc">
        <div class="comboc-shackle"></div>
        <div class="comboc-body"></div>
        <div class="comboc-pointer"></div>
        <div class="comboc-dial"><div class="comboc-hub"></div></div>
        <span class="comboc-click">*click*</span>
        <div class="comboc-flash"></div>
      </div>
    `,
};

class ConceptComboLock extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${comboLockStyles[version] || comboLockStyles.v2}</style>${comboLockMarkup[version] || comboLockMarkup.v2}`;
  }
}

if (!customElements.get('concept-combo-lock')) {
  customElements.define('concept-combo-lock', ConceptComboLock);
}
