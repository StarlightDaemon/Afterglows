const atmStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .at {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .at-face {
    position: absolute;
    left: 8px;
    top: 6px;
    right: 8px;
    bottom: 10px;
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(0, 100, 20, 0.6), rgba(0, 50, 10, 0.85));
    border: 2px solid var(--accent, #00cc00);
  }

  .at-screen {
    position: absolute;
    left: 16px;
    top: 12px;
    width: 52px;
    height: 30px;
    border-radius: 3px;
    background: rgba(0, 25, 5, 0.9);
    border: 2px solid var(--accent, #00cc00);
    overflow: hidden;
  }

  .at-msg {
    position: absolute;
    left: 5px;
    top: 11px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #d6ffe0;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
  }

  .at-msg::before {
    content: 'INSERT CARD';
    animation: at-msg 7s steps(1) infinite;
  }

  @keyframes at-msg {
    0% { content: 'INSERT CARD'; }
    16% { content: 'ENTER PIN'; }
    24% { content: '\\2022\\2022\\2022\\2022'; }
    36% { content: 'AMOUNT?'; }
    46% { content: '$ 80.00'; }
    58% { content: 'DISPENSING'; }
    82% { content: 'TAKE CASH'; }
    92% { content: 'THANK YOU'; }
  }

  .at-screen::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0 1px, transparent 1px 3px);
    pointer-events: none;
  }

  .at-sidebtn {
    position: absolute;
    right: 12px;
    width: 8px;
    height: 4px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.6);
  }

  .at-sidebtn.k1 { top: 14px; }
  .at-sidebtn.k2 { top: 22px; }
  .at-sidebtn.k3 { top: 30px; }

  .at-keypad {
    position: absolute;
    left: 16px;
    bottom: 26px;
    width: 30px;
    height: 18px;
    background:
      radial-gradient(circle 2px, rgba(140, 255, 170, 0.7) 90%, transparent) 0 0 / 10px 6px;
  }

  .at-reader {
    position: absolute;
    right: 14px;
    bottom: 30px;
    width: 24px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 25, 5, 0.9);
    border: 1px solid rgba(140, 255, 170, 0.7);
  }

  .at-card {
    position: absolute;
    right: 14px;
    bottom: 30px;
    width: 20px;
    height: 12px;
    border-radius: 2px;
    background: linear-gradient(120deg, rgba(190, 255, 205, 0.85), rgba(0, 150, 30, 0.7));
    border: 1px solid rgba(140, 255, 170, 0.7);
    animation: at-card 7s ease-in-out infinite;
  }

  .at-card::after {
    content: '';
    position: absolute;
    left: 2px;
    right: 2px;
    top: 3px;
    height: 3px;
    background: rgba(0, 60, 12, 0.8);
  }

  @keyframes at-card {
    0% { transform: translate(24px, 0); opacity: 0; }
    4% { opacity: 1; }
    12% { transform: translate(0, 6px); }
    16%, 82% { transform: translate(2px, 8px) scale(0.9); opacity: 0.6; }
    90% { transform: translate(24px, 0); opacity: 1; }
    100% { transform: translate(24px, 0); opacity: 0; }
  }

  .at-cashslot {
    position: absolute;
    left: 16px;
    bottom: 14px;
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 25, 5, 0.9);
    border: 1px solid rgba(140, 255, 170, 0.7);
  }

  .at-bill {
    position: absolute;
    left: 20px;
    bottom: 14px;
    width: 30px;
    height: 12px;
    border-radius: 2px;
    background:
      linear-gradient(90deg, rgba(190, 255, 205, 0.55), rgba(0, 150, 30, 0.5)),
      radial-gradient(circle 4px at 50% 50%, rgba(0, 204, 0, 0.4) 90%, transparent);
    border: 1px solid rgba(140, 255, 170, 0.6);
    transform-origin: 0% 100%;
    opacity: 0;
    animation: at-bill 7s ease-out infinite;
  }

  .at-bill.b2 { animation-delay: 0.15s; }
  .at-bill.b3 { animation-delay: 0.3s; }

  @keyframes at-bill {
    0%, 58% { transform: translateY(6px) rotate(0deg); opacity: 0; }
    64% { transform: translateY(0) rotate(-4deg); opacity: 1; }
    74% { transform: translateY(-4px) rotate(-10deg); opacity: 1; }
    84% { transform: translateY(-4px) rotate(-10deg); opacity: 1; }
    90% { transform: translateY(-8px) rotate(-14deg); opacity: 0; }
    100% { opacity: 0; }
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

  /* v2: Modern banking ATM machine with deep navy chassis, cyan LCD interface screen,
     illuminated card slot with gold chip card, and emerald green banknotes dispensing */
  .atc {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Banking ATM brushed steel & navy housing */
  .atc-face {
    position: absolute;
    left: 8px;
    top: 6px;
    right: 8px;
    bottom: 10px;
    border-radius: 5px;
    background: linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #020617 100%);
    border: 2px solid #3b82f6;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 1px 2px #60a5fa;
  }

  /* Cyan LCD display interface */
  .atc-screen {
    position: absolute;
    left: 16px;
    top: 12px;
    width: 52px;
    height: 30px;
    border-radius: 3px;
    background: #020617;
    border: 2px solid #38bdf8;
    box-shadow: inset 0 0 8px rgba(56, 189, 248, 0.4);
    overflow: hidden;
  }

  .atc-msg {
    position: absolute;
    left: 5px;
    top: 11px;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #38bdf8;
    text-shadow: 0 0 5px #00f0ff;
  }

  .atc-msg::before {
    content: 'INSERT CARD';
    animation: atc-msg 7s steps(1) infinite;
  }

  @keyframes atc-msg {
    0% { content: 'INSERT CARD'; color: #38bdf8; text-shadow: 0 0 5px #00f0ff; }
    16% { content: 'ENTER PIN'; color: #facc15; text-shadow: 0 0 5px #fde047; }
    24% { content: '\\2022\\2022\\2022\\2022'; color: #facc15; text-shadow: 0 0 5px #fde047; }
    36% { content: 'AMOUNT?'; color: #38bdf8; text-shadow: 0 0 5px #00f0ff; }
    46% { content: '$ 80.00'; color: #4ade80; text-shadow: 0 0 5px #22c55e; }
    58% { content: 'DISPENSING'; color: #f43f5e; text-shadow: 0 0 5px #ef4444; }
    82% { content: 'TAKE CASH'; color: #4ade80; text-shadow: 0 0 5px #22c55e; }
    92% { content: 'THANK YOU'; color: #38bdf8; text-shadow: 0 0 5px #00f0ff; }
  }

  .atc-screen::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0 1px, transparent 1px 3px);
    pointer-events: none;
  }

  /* Side action softkeys */
  .atc-sidebtn {
    position: absolute;
    right: 12px;
    width: 8px;
    height: 4px;
    border-radius: 1px;
    background: #64748b;
    border: 1px solid #94a3b8;
  }

  .atc-sidebtn.k1 { top: 14px; }
  .atc-sidebtn.k2 { top: 22px; }
  .atc-sidebtn.k3 { top: 30px; }

  /* Tactile metal pinpad */
  .atc-keypad {
    position: absolute;
    left: 16px;
    bottom: 26px;
    width: 30px;
    height: 18px;
    background:
      radial-gradient(circle 2px, #94a3b8 90%, transparent) 0 0 / 10px 6px;
  }

  /* Illuminated cyan card reader slot */
  .atc-reader {
    position: absolute;
    right: 14px;
    bottom: 30px;
    width: 24px;
    height: 4px;
    border-radius: 2px;
    background: #020617;
    border: 1px solid #38bdf8;
    box-shadow: 0 0 6px #00f0ff;
  }

  /* Credit card with gold EMV chip */
  .atc-card {
    position: absolute;
    right: 14px;
    bottom: 30px;
    width: 20px;
    height: 12px;
    border-radius: 2px;
    background: linear-gradient(120deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    animation: atc-card 7s ease-in-out infinite;
  }

  .atc-card::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 4px;
    height: 3px;
    border-radius: 1px;
    background: #facc15;
    box-shadow: 0 0 2px #ca8a04;
  }

  @keyframes atc-card {
    0% { transform: translate(24px, 0); opacity: 0; }
    4% { opacity: 1; }
    12% { transform: translate(0, 6px); }
    16%, 82% { transform: translate(2px, 8px) scale(0.9); opacity: 0.6; }
    90% { transform: translate(24px, 0); opacity: 1; }
    100% { transform: translate(24px, 0); opacity: 0; }
  }

  /* Cash dispenser slot */
  .atc-cashslot {
    position: absolute;
    left: 16px;
    bottom: 14px;
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: #09090b;
    border: 1.5px solid #22c55e;
    box-shadow: 0 0 6px rgba(34, 197, 94, 0.4);
  }

  /* Emerald green banknotes */
  .atc-bill {
    position: absolute;
    left: 20px;
    bottom: 14px;
    width: 30px;
    height: 12px;
    border-radius: 2px;
    background:
      linear-gradient(90deg, #86efac 0%, #22c55e 50%, #15803d 100%),
      radial-gradient(circle 4px at 50% 50%, #166534 90%, transparent);
    border: 1px solid #ffffff;
    box-shadow: 0 0 4px #22c55e;
    transform-origin: 0% 100%;
    opacity: 0;
    animation: atc-bill 7s ease-out infinite;
  }

  .atc-bill.b2 { animation-delay: 0.15s; }
  .atc-bill.b3 { animation-delay: 0.3s; }

  @keyframes atc-bill {
    0%, 58% { transform: translateY(6px) rotate(0deg); opacity: 0; }
    64% { transform: translateY(0) rotate(-4deg); opacity: 1; }
    74% { transform: translateY(-4px) rotate(-10deg); opacity: 1; }
    84% { transform: translateY(-4px) rotate(-10deg); opacity: 1; }
    90% { transform: translateY(-8px) rotate(-14deg); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const atmMarkup = {
  v1: `
      <div class="at">
        <div class="at-face"></div>
        <div class="at-screen"><span class="at-msg"></span></div>
        <div class="at-sidebtn k1"></div>
        <div class="at-sidebtn k2"></div>
        <div class="at-sidebtn k3"></div>
        <div class="at-keypad"></div>
        <div class="at-reader"></div>
        <div class="at-card"></div>
        <div class="at-cashslot"></div>
        <div class="at-bill b3"></div>
        <div class="at-bill b2"></div>
        <div class="at-bill b1"></div>
      </div>
    `,
  v2: `
      <div class="atc">
        <div class="atc-face"></div>
        <div class="atc-screen"><span class="atc-msg"></span></div>
        <div class="atc-sidebtn k1"></div>
        <div class="atc-sidebtn k2"></div>
        <div class="atc-sidebtn k3"></div>
        <div class="atc-keypad"></div>
        <div class="atc-reader"></div>
        <div class="atc-card"></div>
        <div class="atc-cashslot"></div>
        <div class="atc-bill b3"></div>
        <div class="atc-bill b2"></div>
        <div class="atc-bill b1"></div>
      </div>
    `,
};

class ConceptAtm extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${atmStyles[version] || atmStyles.v2}</style>${atmMarkup[version] || atmMarkup.v2}`;
  }
}

if (!customElements.get('concept-atm')) {
  customElements.define('concept-atm', ConceptAtm);
}
