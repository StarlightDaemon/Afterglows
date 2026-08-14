const vendingStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vn {
    width: 84px;
    height: 100px;
    position: relative;
  }

  .vn-cabinet {
    position: absolute;
    inset: 2px;
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.6), rgba(0, 45, 9, 0.85));
    border: 2px solid var(--accent, #00cc00);
  }

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

  .vn-shelf {
    position: absolute;
    left: 2px;
    right: 2px;
    height: 1px;
    background: rgba(0, 204, 0, 0.4);
  }

  .vn-shelf.s1 { top: 20px; }
  .vn-shelf.s2 { top: 40px; }

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
    50% { transform: translate(4px, 2px) rotate(40deg); }
    62% { transform: translate(-8px, 22px) rotate(120deg); opacity: 1; }
    68% { transform: translate(-14px, 32px) rotate(160deg); opacity: 0; }
    100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  }

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
    14% { transform: translateY(12px); opacity: 1; }
    18% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Illuminated Japanese beverage vending machine with cobalt & white cabinet,
     multi-color drink cans, rotating coil, gold coin, and dropped drink delivery flap */
  .vnc {
    width: 84px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Cobalt blue & crisp white machine cabinet */
  .vnc-cabinet {
    position: absolute;
    inset: 2px;
    border-radius: 5px;
    background: linear-gradient(180deg, #2563eb 0%, #1d4ed8 40%, #1e293b 100%);
    border: 2px solid #3b82f6;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.6);
  }

  /* Illuminated refrigerated display window */
  .vnc-window {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 46px;
    height: 62px;
    border: 1.5px solid #93c5fd;
    border-radius: 3px;
    background: #0f172a;
    box-shadow: inset 0 0 10px rgba(56, 189, 248, 0.4);
    overflow: hidden;
  }

  /* Shelves */
  .vnc-shelf {
    position: absolute;
    left: 2px;
    right: 2px;
    height: 1px;
    background: #60a5fa;
  }

  .vnc-shelf.s1 { top: 20px; }
  .vnc-shelf.s2 { top: 40px; }

  /* Colorful canned beverages */
  .vnc-snack {
    position: absolute;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  /* Row 1: Emerald green tea, Ruby cola, Golden iced coffee */
  .vnc-snack.a { left: 4px; top: 6px; background: linear-gradient(180deg, #4ade80, #15803d); border: 1px solid #22c55e; }
  .vnc-snack.b { left: 16px; top: 6px; background: linear-gradient(180deg, #f87171, #dc2626); border: 1px solid #ef4444; }
  .vnc-snack.c { left: 28px; top: 6px; background: linear-gradient(180deg, #fde047, #ca8a04); border: 1px solid #eab308; }

  /* Row 2: Sapphire sports drink, Emerald melon soda */
  .vnc-snack.d { left: 4px; top: 26px; background: linear-gradient(180deg, #38bdf8, #0284c7); border: 1px solid #0ea5e9; }
  .vnc-snack.f { left: 28px; top: 26px; background: linear-gradient(180deg, #a7f3d0, #059669); border: 1px solid #10b981; }

  /* Dispenser coil */
  .vnc-coil {
    position: absolute;
    left: 16px;
    top: 44px;
    width: 12px;
    height: 12px;
    background: repeating-linear-gradient(90deg,
      #cbd5e1 0 2px,
      transparent 2px 4px);
    animation: vnc-coil 5s steps(1) infinite;
  }

  @keyframes vnc-coil {
    0%, 30% { background-position: 0 0; }
    36% { background-position: -4px 0; }
    42% { background-position: -8px 0; }
    48% { background-position: -12px 0; }
    54%, 100% { background-position: -12px 0; }
  }

  /* Selected orange citrus drink dropping */
  .vnc-item {
    position: absolute;
    left: 30px;
    top: 44px;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    background: linear-gradient(180deg, #fdba74, #ea580c);
    border: 1px solid #f97316;
    box-shadow: 0 0 6px #ea580c;
    animation: vnc-item 5s ease-in infinite;
  }

  @keyframes vnc-item {
    0%, 42% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    50% { transform: translate(4px, 2px) rotate(40deg); }
    62% { transform: translate(-8px, 22px) rotate(120deg); opacity: 1; }
    68% { transform: translate(-14px, 32px) rotate(160deg); opacity: 0; }
    100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  }

  /* Selection buttons panel */
  .vnc-panel {
    position: absolute;
    right: 6px;
    top: 10px;
    width: 18px;
    height: 58px;
  }

  .vnc-btn {
    position: absolute;
    width: 12px;
    height: 5px;
    border-radius: 2px;
    background: #334155;
    border: 1px solid #64748b;
  }

  .vnc-btn.b1 { top: 4px; }
  .vnc-btn.b2 { top: 12px; }
  .vnc-btn.b3 {
    top: 20px;
    background: #38bdf8;
    box-shadow: 0 0 8px #00f0ff;
    animation: vnc-select 5s steps(1) infinite;
  }

  @keyframes vnc-select {
    0%, 24% { box-shadow: none; opacity: 0.5; }
    28%, 60% { box-shadow: 0 0 10px #00f0ff, 0 0 16px #38bdf8; opacity: 1; }
    64%, 100% { box-shadow: none; opacity: 0.5; }
  }

  /* Coin insert slot */
  .vnc-slot {
    position: absolute;
    right: 8px;
    top: 40px;
    width: 8px;
    height: 3px;
    border-radius: 2px;
    background: #09090b;
    border: 1px solid #cbd5e1;
  }

  /* Gold coin dropping */
  .vnc-coin {
    position: absolute;
    right: 10px;
    top: 30px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fef08a, #ca8a04 70%);
    box-shadow: 0 0 4px #facc15;
    animation: vnc-coin 5s ease-in infinite;
  }

  @keyframes vnc-coin {
    0% { transform: translateY(0); opacity: 0; }
    4% { opacity: 1; }
    14% { transform: translateY(12px); opacity: 1; }
    18% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Bottom collection tray & swinging flap */
  .vnc-tray {
    position: absolute;
    left: 8px;
    bottom: 6px;
    width: 40px;
    height: 12px;
    border-radius: 2px;
    background: #09090b;
    border: 1.5px solid #475569;
  }

  .vnc-flap {
    position: absolute;
    left: 10px;
    bottom: 12px;
    width: 22px;
    height: 8px;
    border-radius: 2px 2px 0 0;
    background: linear-gradient(180deg, #64748b, #334155);
    border: 1px solid #94a3b8;
    transform-origin: 50% 100%;
    animation: vnc-flap 5s ease-out infinite;
  }

  @keyframes vnc-flap {
    0%, 64% { transform: rotate(0deg); }
    70% { transform: rotate(-38deg); }
    82% { transform: rotate(4deg); }
    88%, 100% { transform: rotate(0deg); }
  }
  `,
};

const vendingMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="vnc">
        <div class="vnc-cabinet"></div>
        <div class="vnc-window">
          <div class="vnc-shelf s1"></div>
          <div class="vnc-shelf s2"></div>
          <div class="vnc-snack a"></div>
          <div class="vnc-snack b"></div>
          <div class="vnc-snack c"></div>
          <div class="vnc-snack d"></div>
          <div class="vnc-snack f"></div>
          <div class="vnc-coil"></div>
          <div class="vnc-item"></div>
        </div>
        <div class="vnc-panel">
          <div class="vnc-btn b1"></div>
          <div class="vnc-btn b2"></div>
          <div class="vnc-btn b3"></div>
        </div>
        <div class="vnc-slot"></div>
        <div class="vnc-coin"></div>
        <div class="vnc-tray"></div>
        <div class="vnc-flap"></div>
      </div>
    `,
};

class ConceptVending extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${vendingStyles[version] || vendingStyles.v2}</style>${vendingMarkup[version] || vendingMarkup.v2}`;
  }
}

if (!customElements.get('concept-vending')) {
  customElements.define('concept-vending', ConceptVending);
}
