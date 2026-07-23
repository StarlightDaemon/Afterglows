const vendingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A vending machine dispensing: a coin drops through the slot, the
     selected snack's coil spirals forward, the item topples and falls
     into the tray - a flap swings as it lands. */
  .vn {
    width: 84px;
    height: 100px;
    position: relative;
  }

  /* Cabinet. */
  .vn-cabinet {
    position: absolute;
    inset: 2px;
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.6), rgba(0, 45, 9, 0.85));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Glass window with shelves of snacks. */
  .vn-window {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 46px;
    height: 62px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    border-radius: 2px;
    background: rgba(0, 25, 5, 0.5);
    overflow: hidden;
  }

  /* Shelves. */
  .vn-shelf {
    position: absolute;
    left: 2px;
    right: 2px;
    height: 1px;
    background: rgba(0, 204, 0, 0.4);
  }

  .vn-shelf.s1 { top: 20px; }
  .vn-shelf.s2 { top: 40px; }

  /* Snack rows on the shelves. */
  .vn-snack {
    position: absolute;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.75), rgba(0, 130, 26, 0.7));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  .vn-snack.a { left: 4px; top: 6px; }
  .vn-snack.b { left: 16px; top: 6px; }
  .vn-snack.c { left: 28px; top: 6px; }
  .vn-snack.d { left: 4px; top: 26px; }
  .vn-snack.e { left: 16px; top: 26px; }
  .vn-snack.f { left: 28px; top: 26px; }

  /* The dispensing coil (row 2, item e) that spirals the snack out. */
  .vn-coil {
    position: absolute;
    left: 16px;
    top: 44px;
    width: 12px;
    height: 12px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.8) 0 2px,
      transparent 2px 4px);
    animation: vn-coil 5s steps(1) infinite;
  }

  @keyframes vn-coil {
    0%, 30% { background-position: 0 0; }
    36% { background-position: -4px 0; }
    42% { background-position: -8px 0; }
    48% { background-position: -12px 0; }
    54%, 100% { background-position: -12px 0; }
  }

  /* The vended item: pushed off the coil, topples and drops. */
  .vn-item {
    position: absolute;
    left: 30px;
    top: 44px;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(214, 255, 224, 0.85), rgba(0, 150, 30, 0.75));
    border: 1px solid rgba(140, 255, 170, 0.6);
    animation: vn-item 5s ease-in infinite;
  }

  @keyframes vn-item {
    0%, 42% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    /* Topple off the coil. */
    50% { transform: translate(4px, 2px) rotate(40deg); }
    /* Fall down inside the window and to the tray. */
    62% { transform: translate(-8px, 22px) rotate(120deg); opacity: 1; }
    68% { transform: translate(-14px, 32px) rotate(160deg); opacity: 0; }
    100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  }

  /* Control panel: buttons + coin slot + selection glow. */
  .vn-panel {
    position: absolute;
    right: 6px;
    top: 10px;
    width: 18px;
    height: 58px;
  }

  .vn-btn {
    position: absolute;
    width: 12px;
    height: 5px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.35);
  }

  .vn-btn.b1 { top: 4px; }
  .vn-btn.b2 { top: 12px; }
  .vn-btn.b3 { top: 20px; background: rgba(140, 255, 170, 0.85); animation: vn-select 5s steps(1) infinite; }

  @keyframes vn-select {
    0%, 24% { box-shadow: none; opacity: 0.5; }
    28%, 60% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.9); opacity: 1; }
    64%, 100% { box-shadow: none; opacity: 0.5; }
  }

  /* Coin slot + falling coin. */
  .vn-slot {
    position: absolute;
    right: 8px;
    top: 40px;
    width: 8px;
    height: 3px;
    border-radius: 2px;
    background: rgba(0, 30, 6, 0.9);
    border: 1px solid rgba(140, 255, 170, 0.7);
  }

  .vn-coin {
    position: absolute;
    right: 10px;
    top: 30px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #f2ffdd, #9ade5a 70%);
    animation: vn-coin 5s ease-in infinite;
  }

  @keyframes vn-coin {
    0% { transform: translateY(0); opacity: 0; }
    4% { opacity: 1; }
    /* Drops into the slot. */
    14% { transform: translateY(12px); opacity: 1; }
    18% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Delivery tray with a swinging flap. */
  .vn-tray {
    position: absolute;
    left: 8px;
    bottom: 6px;
    width: 40px;
    height: 12px;
    border-radius: 2px;
    background: rgba(0, 25, 5, 0.85);
    border: 1px solid rgba(140, 255, 170, 0.6);
  }

  .vn-flap {
    position: absolute;
    left: 10px;
    bottom: 12px;
    width: 22px;
    height: 8px;
    border-radius: 2px 2px 0 0;
    background: rgba(0, 120, 24, 0.7);
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform-origin: 50% 100%;
    animation: vn-flap 5s ease-out infinite;
  }

  @keyframes vn-flap {
    0%, 64% { transform: rotate(0deg); }
    70% { transform: rotate(-38deg); }
    82% { transform: rotate(4deg); }
    88%, 100% { transform: rotate(0deg); }
  }
`;

class ConceptVending extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vendingStyles}</style>
      <div class="vn">
        <div class="vn-cabinet"></div>
        <div class="vn-window">
          <div class="vn-shelf s1"></div>
          <div class="vn-shelf s2"></div>
          <div class="vn-snack a"></div>
          <div class="vn-snack b"></div>
          <div class="vn-snack c"></div>
          <div class="vn-snack d"></div>
          <div class="vn-snack f"></div>
          <div class="vn-coil"></div>
          <div class="vn-item"></div>
        </div>
        <div class="vn-panel">
          <div class="vn-btn b1"></div>
          <div class="vn-btn b2"></div>
          <div class="vn-btn b3"></div>
        </div>
        <div class="vn-slot"></div>
        <div class="vn-coin"></div>
        <div class="vn-tray"></div>
        <div class="vn-flap"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-vending')) {
  customElements.define('concept-vending', ConceptVending);
}
