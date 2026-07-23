const cashRegisterStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A sale rings up: digits climb on the display, the drawer kicks
     open with a cash-tray of bills and coins, a receipt tongues out
     the top, then the drawer slams shut for the next customer. */
  .cr {
    width: 112px;
    height: 92px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Body. */
  .cr-body {
    position: absolute;
    left: 12px;
    bottom: 10px;
    width: 76px;
    height: 44px;
    border-radius: 4px 4px 3px 3px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.7), rgba(0, 70, 14, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Display panel raised on the back. */
  .cr-display {
    position: absolute;
    left: 24px;
    top: 6px;
    width: 52px;
    height: 20px;
    border-radius: 3px;
    background: rgba(0, 25, 5, 0.9);
    border: 2px solid var(--accent, #00cc00);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5px;
    box-sizing: border-box;
  }

  .cr-total {
    font-size: 12px;
    letter-spacing: 1px;
    color: #d6ffe0;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
  }

  .cr-total::before {
    content: '$0.00';
    animation: cr-total 5s steps(1) infinite;
  }

  @keyframes cr-total {
    0% { content: '$0.00'; }
    10% { content: '$2.50'; }
    18% { content: '$6.75'; }
    26% { content: '$9.20'; }
    34% { content: '$14.99'; }
    /* Sale total held while drawer is open. */
    44%, 82% { content: '$14.99'; }
    92% { content: '$0.00'; }
  }

  /* Key deck. */
  .cr-keys {
    position: absolute;
    left: 20px;
    bottom: 16px;
    width: 60px;
    height: 16px;
    background:
      radial-gradient(circle 2.5px, rgba(140, 255, 170, 0.7) 90%, transparent) 0 0 / 10px 8px;
  }

  /* The cash drawer: kicks out the bottom-front, then closes. */
  .cr-drawer {
    position: absolute;
    left: 12px;
    bottom: 4px;
    width: 76px;
    height: 14px;
    border-radius: 0 0 4px 4px;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.85), rgba(0, 55, 11, 0.95));
    border: 2px solid var(--accent, #00cc00);
    border-top: none;
    overflow: hidden;
    animation: cr-drawer 5s ease-out infinite;
  }

  @keyframes cr-drawer {
    0%, 38% { transform: translateY(0); }
    46% { transform: translateY(18px); }
    82% { transform: translateY(18px); }
    90%, 100% { transform: translateY(0); }
  }

  /* Bill compartments + coin cups inside the tray. */
  .cr-tray {
    position: absolute;
    inset: 2px;
    background:
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.5) 0 8px,
        rgba(0, 90, 18, 0.6) 8px 12px);
    border-radius: 2px;
  }

  /* Receipt tonguing out the top. */
  .cr-receipt {
    position: absolute;
    left: 30px;
    top: 4px;
    width: 22px;
    height: 0;
    background:
      linear-gradient(180deg, rgba(214, 255, 224, 0.85), rgba(140, 255, 170, 0.5)),
      repeating-linear-gradient(180deg, rgba(0, 90, 18, 0.3) 0 3px, transparent 3px 5px);
    border: 1px solid rgba(140, 255, 170, 0.6);
    border-bottom: none;
    animation: cr-receipt 5s ease-out infinite;
  }

  @keyframes cr-receipt {
    0%, 50% { height: 0; opacity: 0; }
    58% { height: 20px; opacity: 1; }
    82% { height: 26px; opacity: 1; }
    90% { height: 26px; opacity: 0; }
    100% { height: 0; opacity: 0; }
  }

  /* Ka-ching sparkle at the drawer pop. */
  .cr-ching {
    position: absolute;
    left: 4px;
    bottom: 6px;
    font-size: 9px;
    letter-spacing: 1px;
    color: #f2ffdd;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: cr-ching 5s infinite;
  }

  @keyframes cr-ching {
    0%, 44% { opacity: 0; transform: scale(0.6); }
    50% { opacity: 1; transform: scale(1.1); }
    56% { transform: scale(1); }
    70% { opacity: 1; }
    76%, 100% { opacity: 0; }
  }
`;

class ConceptCashRegister extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cashRegisterStyles}</style>
      <div class="cr">
        <div class="cr-receipt"></div>
        <div class="cr-display"><span class="cr-total"></span></div>
        <div class="cr-body"></div>
        <div class="cr-keys"></div>
        <div class="cr-drawer"><div class="cr-tray"></div></div>
        <div class="cr-ching">$ CHING</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cash-register')) {
  customElements.define('concept-cash-register', ConceptCashRegister);
}
