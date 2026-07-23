const atmStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A cash machine withdrawal: a card slides into the reader, the
     screen cycles PIN -> AMOUNT -> DISPENSING, and a fan of bills
     eases out of the cash slot before the card pops back. */
  .at {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Machine face. */
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

  /* Screen. */
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

  /* Screen scanline shimmer. */
  .at-screen::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0 1px, transparent 1px 3px);
    pointer-events: none;
  }

  /* Side buttons. */
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

  /* Keypad. */
  .at-keypad {
    position: absolute;
    left: 16px;
    bottom: 26px;
    width: 30px;
    height: 18px;
    background:
      radial-gradient(circle 2px, rgba(140, 255, 170, 0.7) 90%, transparent) 0 0 / 10px 6px;
  }

  /* Card reader slot with the card sliding in. */
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

  /* Magnetic stripe. */
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
    /* Inserted. */
    12% { transform: translate(0, 6px); }
    16%, 82% { transform: translate(2px, 8px) scale(0.9); opacity: 0.6; }
    /* Returned. */
    90% { transform: translate(24px, 0); opacity: 1; }
    100% { transform: translate(24px, 0); opacity: 0; }
  }

  /* Cash slot + bill fan. */
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
    /* Fan out. */
    74% { transform: translateY(-4px) rotate(-10deg); opacity: 1; }
    84% { transform: translateY(-4px) rotate(-10deg); opacity: 1; }
    90% { transform: translateY(-8px) rotate(-14deg); opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptAtm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${atmStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-atm')) {
  customElements.define('concept-atm', ConceptAtm);
}
