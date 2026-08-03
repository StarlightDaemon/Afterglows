// Cash register, rebuilt (2026-08-02): the old render's display, keypad
// and drawer floated apart and the "$ CHING" text overprinted the body.
// Now one coherent machine rings up one sale: keys blink as the price is
// punched, the display total steps up, the SALE flag flashes, the drawer
// kicks open showing the cash tray, and slams shut for the next customer.
// v1 is the archived original render, kept verbatim for the gallery.
const cashRegisterStyles = {
  v1: `
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
`,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cr {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Display head: mounted ON the body's top, slightly stepped back. */
  .cr-display {
    position: absolute;
    left: 18px;
    top: 6px;
    width: 68px;
    height: 20px;
    border-radius: 4px 4px 0 0;
    background: #041a0a;
    border: 2px solid var(--accent, #00cc00);
    overflow: hidden;
  }

  /* The stepping total: three amounts stacked, crossfading in sequence. */
  .cr-amt {
    position: absolute;
    right: 5px;
    top: 4px;
    font-size: 9px;
    letter-spacing: 1px;
    color: #baffc9;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
    opacity: 0;
  }

  .cr-amt.a0 { animation: cr-amt0 6s steps(1) infinite; }
  .cr-amt.a1 { animation: cr-amt1 6s steps(1) infinite; }
  .cr-amt.a2 { animation: cr-amt2 6s steps(1) infinite; }

  @keyframes cr-amt0 {
    0%, 14% { opacity: 1; }
    15%, 94% { opacity: 0; }
    95%, 100% { opacity: 1; }
  }

  @keyframes cr-amt1 {
    0%, 14% { opacity: 0; }
    15%, 29% { opacity: 1; }
    30%, 100% { opacity: 0; }
  }

  @keyframes cr-amt2 {
    0%, 29% { opacity: 0; }
    30%, 94% { opacity: 1; }
    95%, 100% { opacity: 0; }
  }

  /* SALE flag pops in the display's left corner at the ring-up. */
  .cr-sale {
    position: absolute;
    left: 5px;
    top: 4px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #eaffea;
    opacity: 0;
    animation: cr-sale 6s steps(1) infinite;
  }

  @keyframes cr-sale {
    0%, 34% { opacity: 0; }
    36%, 44% { opacity: 1; }
    46%, 48% { opacity: 0; }
    50%, 58% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }

  /* Body: keypad panel, sloped face. */
  .cr-body {
    position: absolute;
    left: 12px;
    top: 26px;
    width: 80px;
    height: 34px;
    border-radius: 3px 8px 2px 2px;
    background: linear-gradient(180deg, rgba(0, 140, 28, 0.75), rgba(0, 70, 14, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Keypad: a 4x3 grid of key dots, individual keys blink as the
     price is punched in. */
  .cr-keys {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 44px;
    height: 22px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2px;
  }

  .cr-key {
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.35);
  }

  .cr-key.p1 { animation: cr-punch 6s steps(1) infinite; }
  .cr-key.p2 { animation: cr-punch 6s steps(1) infinite 0.35s; }
  .cr-key.p3 { animation: cr-punch 6s steps(1) infinite 0.8s; }
  .cr-key.p4 { animation: cr-punch 6s steps(1) infinite 1.15s; }

  @keyframes cr-punch {
    0%, 2% { background: rgba(140, 255, 170, 0.35); box-shadow: none; }
    3%, 6% { background: #d6ffe0; box-shadow: 0 0 6px rgba(0, 204, 0, 0.9); }
    7%, 100% { background: rgba(140, 255, 170, 0.35); }
  }

  /* Hand crank / total lever on the right side. */
  .cr-lever {
    position: absolute;
    right: 6px;
    top: 5px;
    width: 4px;
    height: 14px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.85);
    transform-origin: 50% 100%;
    animation: cr-lever 6s ease-in-out infinite;
  }

  @keyframes cr-lever {
    0%, 30% { transform: rotate(0deg); }
    33% { transform: rotate(-50deg); }
    38% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  /* Drawer: kicks open at the ring-up, revealing the tray, slams at the
     end. It slides out of the body's base. */
  .cr-drawer {
    position: absolute;
    left: 10px;
    top: 60px;
    width: 84px;
    height: 18px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 120, 24, 0.85), rgba(0, 60, 12, 0.95));
    border: 2px solid var(--accent, #00cc00);
    overflow: hidden;
    animation: cr-drawer 6s cubic-bezier(0.2, 1.4, 0.4, 1) infinite;
  }

  @keyframes cr-drawer {
    0%, 34% { transform: translateX(0); }
    /* Kick open. */
    38%, 78% { transform: translateX(14px); }
    /* Slam. */
    84%, 100% { transform: translateX(0); }
  }

  /* Cash tray inside the drawer: bill slots + coin dots, visible only
     while open (the drawer clips it). */
  .cr-tray {
    position: absolute;
    left: 4px;
    top: 3px;
    right: 4px;
    bottom: 3px;
    display: flex;
    gap: 3px;
  }

  .cr-slot {
    flex: 1;
    border: 1px solid rgba(140, 255, 170, 0.5);
    border-radius: 1px;
    background:
      repeating-linear-gradient(0deg,
        rgba(0, 204, 0, 0.3) 0 2px,
        transparent 2px 4px);
  }

  .cr-slot.coins {
    background:
      radial-gradient(circle at 30% 50%, rgba(214, 255, 224, 0.8) 0 2px, transparent 3px),
      radial-gradient(circle at 65% 40%, rgba(214, 255, 224, 0.6) 0 2px, transparent 3px);
  }

  /* CHA-CHING ring: a flash ring bursting from the drawer at open. */
  .cr-ring {
    position: absolute;
    left: 50%;
    top: 62px;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border: 1.5px solid rgba(190, 255, 205, 0.9);
    border-radius: 50%;
    opacity: 0;
    animation: cr-ring 6s ease-out infinite;
  }

  @keyframes cr-ring {
    0%, 34% { transform: scale(0.4); opacity: 0; }
    38% { opacity: 0.9; }
    50% { transform: scale(1.8); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Feet. */
  .cr-foot {
    position: absolute;
    bottom: 8px;
    width: 10px;
    height: 4px;
    border-radius: 0 0 2px 2px;
    background: rgba(0, 110, 22, 0.9);
  }

  .cr-foot.f1 { left: 16px; }
  .cr-foot.f2 { right: 16px; }
`,
};

const cashRegisterMarkup = {
  v1: `
      <div class="cr">
        <div class="cr-receipt"></div>
        <div class="cr-display"><span class="cr-total"></span></div>
        <div class="cr-body"></div>
        <div class="cr-keys"></div>
        <div class="cr-drawer"><div class="cr-tray"></div></div>
        <div class="cr-ching">$ CHING</div>
      </div>
    `,
  v2: `
      <div class="cr">
        <div class="cr-display">
          <span class="cr-sale">SALE</span>
          <span class="cr-amt a0">$0.00</span>
          <span class="cr-amt a1">$2.10</span>
          <span class="cr-amt a2">$4.25</span>
        </div>
        <div class="cr-body">
          <div class="cr-keys">
            <div class="cr-key"></div><div class="cr-key p1"></div><div class="cr-key"></div><div class="cr-key p3"></div>
            <div class="cr-key p2"></div><div class="cr-key"></div><div class="cr-key p4"></div><div class="cr-key"></div>
            <div class="cr-key"></div><div class="cr-key"></div><div class="cr-key"></div><div class="cr-key"></div>
          </div>
          <div class="cr-lever"></div>
        </div>
        <div class="cr-drawer">
          <div class="cr-tray">
            <div class="cr-slot"></div>
            <div class="cr-slot"></div>
            <div class="cr-slot coins"></div>
          </div>
        </div>
        <div class="cr-ring"></div>
        <div class="cr-foot f1"></div>
        <div class="cr-foot f2"></div>
      </div>
    `,
};

class ConceptCashRegister extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    const styles = cashRegisterStyles[version] || cashRegisterStyles.v2;
    const markup = cashRegisterMarkup[version] || cashRegisterMarkup.v2;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-cash-register')) {
  customElements.define('concept-cash-register', ConceptCashRegister);
}
