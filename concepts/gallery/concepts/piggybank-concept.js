// Piggy bank: coin drops into slot, pig wiggles, tail springs, clink sparkles.
// v1 and v2 are preserved.
// v3 adds full color: bubblegum ceramic pink pig, gold coin with $,
// rosy cheeks, curly tail, and golden clink starburst.
const piggybankStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Feeding a piggy bank: coins drop one by one into the slot, the
     pig gives a happy wiggle with each clink, its belly fills with a
     rising stack of coins, and its ears and tail twitch. */
  .pg {
    width: 108px;
    height: 92px;
    position: relative;
  }

  /* Coins falling into the slot */
  .pg-coin {
    position: absolute;
    left: 50%;
    top: 0;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #ffffff, #9ade5a 65%, rgba(0, 150, 30, 0.9));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 6px #00ff66;
    animation: pg-coin 1.0s linear infinite;
  }

  .pg-coin.c2 { animation-delay: -0.33s; }
  .pg-coin.c3 { animation-delay: -0.66s; }

  @keyframes pg-coin {
    0% { transform: translateY(-8px) scaleY(1); opacity: 1; }
    80% { transform: translateY(24px) scaleY(1); opacity: 1; }
    100% { transform: translateY(32px) scaleY(0.2); opacity: 0; }
  }

  /* The pig body: energetic bouncing and rocking */
  .pg-pig {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 72px;
    height: 50px;
    margin-left: -36px;
    animation: pg-wiggle 1.2s ease-in-out infinite alternate;
  }

  @keyframes pg-wiggle {
    0% { transform: rotate(-5deg) translateY(-5px); }
    100% { transform: rotate(5deg) translateY(3px); }
  }

  .pg-body {
    position: absolute;
    left: 4px;
    top: 6px;
    width: 60px;
    height: 40px;
    border-radius: 50% 50% 45% 45%;
    background: radial-gradient(ellipse at 38% 32%,
      rgba(214, 255, 224, 0.95),
      rgba(0, 170, 34, 0.85) 60%,
      rgba(0, 110, 22, 0.95));
    border: 2px solid var(--accent, #00ff66);
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
    overflow: hidden;
  }

  /* Coin stack filling the belly. */
  .pg-fill {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 16px;
    background:
      repeating-linear-gradient(180deg,
        rgba(242, 255, 221, 0.9) 0 2px,
        rgba(0, 150, 30, 0.8) 2px 4px);
  }

  /* Snout. */
  .pg-snout {
    position: absolute;
    left: 54px;
    top: 22px;
    width: 14px;
    height: 12px;
    border-radius: 40%;
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.9), rgba(0, 130, 26, 0.95));
    border: 1.5px solid #00ff66;
    z-index: 2;
  }

  .pg-snout::before,
  .pg-snout::after {
    content: '';
    position: absolute;
    top: 4px;
    width: 3px;
    height: 5px;
    border-radius: 50%;
    background: rgba(0, 50, 10, 0.85);
  }

  .pg-snout::before { left: 3px; }
  .pg-snout::after { right: 3px; }

  /* Eye. */
  .pg-eye {
    position: absolute;
    left: 44px;
    top: 14px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 0 0 2px #00ff66;
    z-index: 3;
  }

  /* Ear twitching. */
  .pg-ear {
    position: absolute;
    left: 40px;
    top: 2px;
    width: 10px;
    height: 10px;
    clip-path: polygon(0 100%, 40% 0, 100% 60%);
    background: rgba(0, 200, 50, 0.95);
    transform-origin: 50% 100%;
    animation: pg-ear 1.0s ease-in-out infinite alternate;
  }

  @keyframes pg-ear {
    0% { transform: rotate(-16deg); }
    100% { transform: rotate(8deg); }
  }

  /* Coin slot on the back. */
  .pg-slot {
    position: absolute;
    left: 24px;
    top: 4px;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    background: rgba(0, 30, 6, 0.9);
    border: 1px solid #00ff66;
    z-index: 3;
  }

  /* Curly tail. */
  .pg-tail {
    position: absolute;
    left: -2px;
    top: 20px;
    width: 8px;
    height: 8px;
    border: 2px solid #00ff66;
    border-radius: 50%;
    border-left-color: transparent;
    animation: pg-tail 1.0s ease-in-out infinite alternate;
  }

  @keyframes pg-tail {
    0% { transform: rotate(-20deg) scale(0.9); }
    100% { transform: rotate(50deg) scale(1.2); }
  }

  /* Legs */
  .pg-leg {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 10px;
    border-radius: 0 0 2px 2px;
    background: rgba(0, 130, 26, 0.9);
  }

  .pg-leg.l1 { left: 12px; }
  .pg-leg.l2 { left: 46px; }

  /* Clink note */
  .pg-note {
    position: absolute;
    right: 4px;
    top: 20px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 6px #00ff66;
    animation: pg-note 1.0s ease-out infinite;
  }

  @keyframes pg-note {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-16px); opacity: 0; }
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

  .pg {
    width: 108px;
    height: 96px;
    position: relative;
  }

  /* Whole pig wiggles on each clink. */
  .pg-pig {
    position: absolute;
    left: 10px;
    top: 26px;
    width: 88px;
    height: 56px;
    transform-origin: 50% 90%;
    animation: pg-wiggle 1.2s ease-in-out infinite alternate;
  }

  @keyframes pg-wiggle {
    0% { transform: rotate(-5deg) translateY(-5px); }
    100% { transform: rotate(5deg) translateY(3px); }
  }

  /* Body. */
  .pg-body {
    position: absolute;
    left: 14px;
    top: 6px;
    width: 62px;
    height: 44px;
    border-radius: 50% 46% 48% 50%;
    background: radial-gradient(circle at 38% 32%, rgba(160, 255, 185, 0.85), rgba(0, 130, 26, 0.9) 70%, rgba(0, 80, 16, 0.95));
    border: 2px solid var(--accent, #00ff66);
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
  }

  /* Coin slot on the back. */
  .pg-slot {
    position: absolute;
    left: 38px;
    top: 2px;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    background: #041a0a;
    box-shadow: 0 0 4px rgba(0, 255, 100, 0.6);
    z-index: 2;
  }

  /* Head: overlapping the body's left, lower and rounder. */
  .pg-head {
    position: absolute;
    left: 0;
    top: 14px;
    width: 30px;
    height: 26px;
    border-radius: 50% 45% 45% 50%;
    background: radial-gradient(circle at 40% 34%, rgba(170, 255, 195, 0.9), rgba(0, 140, 28, 0.9) 72%);
    border: 2px solid var(--accent, #00ff66);
    z-index: 2;
  }

  /* Snout disc with two nostril slots. */
  .pg-snout {
    position: absolute;
    left: -6px;
    top: 22px;
    width: 12px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(200, 255, 215, 0.95), rgba(0, 150, 30, 0.9));
    border: 1.5px solid #00ff66;
    z-index: 3;
  }

  .pg-snout::before,
  .pg-snout::after {
    content: '';
    position: absolute;
    top: 3px;
    width: 1.5px;
    height: 3.5px;
    border-radius: 1px;
    background: #041a0a;
  }

  .pg-snout::before { left: 3px; }
  .pg-snout::after { right: 3px; }

  /* Eye. */
  .pg-eye {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 0 0 2px #00ff66;
    z-index: 3;
  }

  /* Ear: a folded triangle on the head's crown, twitching. */
  .pg-ear {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 12px;
    height: 11px;
    clip-path: polygon(10% 100%, 0 0, 100% 55%);
    background: linear-gradient(160deg, rgba(160, 255, 185, 0.95), rgba(0, 120, 24, 0.9));
    transform-origin: 20% 90%;
    animation: pg-ear 1.0s ease-in-out infinite alternate;
    z-index: 2;
  }

  @keyframes pg-ear {
    0% { transform: rotate(-16deg); }
    100% { transform: rotate(8deg); }
  }

  /* Curly tail: nested border arcs on the rump, springing on the clink. */
  .pg-tail {
    position: absolute;
    right: 6px;
    top: 16px;
    width: 12px;
    height: 12px;
    border: 2px solid #00ff66;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    transform: rotate(-30deg);
    transform-origin: 10% 60%;
    animation: pg-tail 1.0s ease-in-out infinite alternate;
  }

  .pg-tail::after {
    content: '';
    position: absolute;
    right: -2px;
    bottom: 0;
    width: 6px;
    height: 6px;
    border: 2px solid rgba(140, 255, 170, 0.7);
    border-top-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
  }

  @keyframes pg-tail {
    0% { transform: rotate(-70deg); }
    100% { transform: rotate(20deg); }
  }

  /* Legs. */
  .pg-leg {
    position: absolute;
    bottom: -6px;
    width: 9px;
    height: 12px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.9), rgba(0, 90, 18, 0.95));
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-top: none;
  }

  .pg-leg.l1 { left: 20px; }
  .pg-leg.l2 { left: 34px; }
  .pg-leg.l3 { right: 26px; }
  .pg-leg.l4 { right: 12px; }

  /* The coin */
  .pg-coin {
    position: absolute;
    left: 52px;
    top: -4px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #00ff66;
    background: radial-gradient(circle at 40% 35%, #ffffff, rgba(0, 160, 32, 0.9) 65%);
    box-shadow: 0 0 8px #00ff66;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    color: #041a0a;
    animation: pg-coin 1.0s linear infinite;
  }

  @keyframes pg-coin {
    0% { transform: translateY(-8px) rotate(0deg); opacity: 1; }
    75% { transform: translateY(24px) rotate(50deg) scaleX(0.7); opacity: 1; }
    100% { transform: translateY(32px) rotate(90deg) scaleX(0.2); opacity: 0; }
  }

  /* Clink sparkle */
  .pg-clink {
    position: absolute;
    left: 56px;
    top: 24px;
    width: 8px;
    height: 8px;
    opacity: 0;
    animation: pg-clink 1.0s infinite;
  }

  .pg-clink::before,
  .pg-clink::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    background: #eaffea;
    box-shadow: 0 0 5px #00ff66;
  }

  .pg-clink::before { width: 8px; height: 1.5px; margin: -0.75px 0 0 -4px; }
  .pg-clink::after { width: 1.5px; height: 8px; margin: -4px 0 0 -0.75px; }

  @keyframes pg-clink {
    0%, 65% { opacity: 0; transform: scale(0.4) rotate(0deg); }
    75% { opacity: 1; transform: scale(1.2) rotate(20deg); }
    100% { opacity: 0; transform: scale(0.5) rotate(40deg); }
  }

  /* Ground shadow. */
  .pg-shadow {
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 204, 0, 0.22), transparent 70%);
  }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Glossy Bubblegum Pink Ceramic Piggy Bank with
     gold coin ($), painted rosy cheeks, curly tail, and golden clink sparkle */
  .pgc {
    width: 108px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Pig Wiggle on Coin Clink */
  .pgc-pig {
    position: absolute;
    left: 10px;
    top: 26px;
    width: 88px;
    height: 56px;
    transform-origin: 50% 90%;
    animation: pgc-wiggle 1.2s ease-in-out infinite alternate;
  }

  @keyframes pgc-wiggle {
    0% { transform: rotate(-5deg) translateY(-5px); }
    100% { transform: rotate(5deg) translateY(3px); }
  }

  /* Glossy Bubblegum Pink Body */
  .pgc-body {
    position: absolute;
    left: 14px;
    top: 6px;
    width: 62px;
    height: 44px;
    border-radius: 50% 46% 48% 50%;
    background: radial-gradient(circle at 38% 32%, #fbcfe8 0%, #f472b6 55%, #db2777 85%, #9d174d 100%);
    border: 2px solid #f472b6;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6);
  }

  /* Dark Coin Slot on Back */
  .pgc-slot {
    position: absolute;
    left: 38px;
    top: 2px;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    background: #020617;
    box-shadow: inset 0 0 3px #000000;
    z-index: 2;
  }

  /* Ceramic Head with Rose Cheek Highlight */
  .pgc-head {
    position: absolute;
    left: 0;
    top: 14px;
    width: 30px;
    height: 26px;
    border-radius: 50% 45% 45% 50%;
    background: radial-gradient(circle at 40% 34%, #fbcfe8 0%, #f472b6 65%, #db2777 100%);
    border: 2px solid #f472b6;
    box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.6);
    z-index: 2;
  }

  /* Rosy Snout Disc with Nostril Slots */
  .pgc-snout {
    position: absolute;
    left: -6px;
    top: 22px;
    width: 12px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #fda4af, #f43f5e);
    border: 1.5px solid #fb7185;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    z-index: 3;
  }

  .pgc-snout::before,
  .pgc-snout::after {
    content: '';
    position: absolute;
    top: 3px;
    width: 1.5px;
    height: 3.5px;
    border-radius: 1px;
    background: #881337;
  }

  .pgc-snout::before { left: 3px; }
  .pgc-snout::after { right: 3px; }

  /* Glossy Black Ceramic Eye */
  .pgc-eye {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #020617;
    box-shadow: 0 0 1px #ffffff;
    z-index: 3;
  }

  /* Perky Pink Ear */
  .pgc-ear {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 12px;
    height: 11px;
    clip-path: polygon(10% 100%, 0 0, 100% 55%);
    background: linear-gradient(160deg, #fbcfe8, #ec4899);
    transform-origin: 20% 90%;
    animation: pgc-ear 1.0s ease-in-out infinite alternate;
    z-index: 2;
  }

  @keyframes pgc-ear {
    0% { transform: rotate(-16deg); }
    100% { transform: rotate(8deg); }
  }

  /* Curly Pink Spring Tail */
  .pgc-tail {
    position: absolute;
    right: 6px;
    top: 16px;
    width: 12px;
    height: 12px;
    border: 2.5px solid #f472b6;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    transform: rotate(-30deg);
    transform-origin: 10% 60%;
    animation: pgc-tail 1.0s ease-in-out infinite alternate;
  }

  .pgc-tail::after {
    content: '';
    position: absolute;
    right: -2px;
    bottom: 0;
    width: 6px;
    height: 6px;
    border: 2px solid #ec4899;
    border-top-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
  }

  @keyframes pgc-tail {
    0% { transform: rotate(-70deg); }
    100% { transform: rotate(20deg); }
  }

  /* Ceramic Stumpy Legs */
  .pgc-leg {
    position: absolute;
    bottom: -6px;
    width: 9px;
    height: 12px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, #ec4899 0%, #db2777 100%);
    border: 1.5px solid #f472b6;
    border-top: none;
  }

  .pgc-leg.l1 { left: 20px; }
  .pgc-leg.l2 { left: 34px; }
  .pgc-leg.l3 { right: 26px; }
  .pgc-leg.l4 { right: 12px; }

  /* 24k Gold Coin Falling */
  .pgc-coin {
    position: absolute;
    left: 52px;
    top: -4px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #fde047;
    background: radial-gradient(circle at 40% 35%, #ffffff 0%, #facc15 50%, #ca8a04 100%);
    box-shadow: 0 0 10px #facc15;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    font-weight: 900;
    color: #713f12;
    animation: pgc-coin 1.0s linear infinite;
  }

  @keyframes pgc-coin {
    0% { transform: translateY(-8px) rotate(0deg); opacity: 1; }
    75% { transform: translateY(24px) rotate(50deg) scaleX(0.7); opacity: 1; }
    100% { transform: translateY(32px) rotate(90deg) scaleX(0.2); opacity: 0; }
  }

  /* Golden Starburst Clink Sparkle */
  .pgc-clink {
    position: absolute;
    left: 56px;
    top: 24px;
    width: 8px;
    height: 8px;
    opacity: 0;
    animation: pgc-clink 1.0s infinite;
  }

  .pgc-clink::before,
  .pgc-clink::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    background: #fde047;
    box-shadow: 0 0 8px #facc15;
  }

  .pgc-clink::before { width: 10px; height: 2px; margin: -1px 0 0 -5px; }
  .pgc-clink::after { width: 2px; height: 10px; margin: -5px 0 0 -1px; }

  @keyframes pgc-clink {
    0%, 65% { opacity: 0; transform: scale(0.4) rotate(0deg); }
    75% { opacity: 1; transform: scale(1.2) rotate(20deg); }
    100% { opacity: 0; transform: scale(0.5) rotate(40deg); }
  }

  /* Soft Ambient Ground Shadow */
  .pgc-shadow {
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8), transparent 70%);
  }
  `,
};

const piggybankMarkup = {
  v1: `
      <div class="pg">
        <div class="pg-coin c1"></div>
        <div class="pg-coin c2"></div>
        <div class="pg-coin c3"></div>
        <div class="pg-note">&#162;</div>
        <div class="pg-pig">
          <div class="pg-leg l1"></div>
          <div class="pg-leg l2"></div>
          <div class="pg-tail"></div>
          <div class="pg-body"><div class="pg-fill"></div></div>
          <div class="pg-ear"></div>
          <div class="pg-eye"></div>
          <div class="pg-snout"></div>
          <div class="pg-slot"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="pg">
        <div class="pg-shadow"></div>
        <div class="pg-coin">$</div>
        <div class="pg-pig">
          <div class="pg-tail"></div>
          <div class="pg-body"></div>
          <div class="pg-slot"></div>
          <div class="pg-leg l1"></div>
          <div class="pg-leg l2"></div>
          <div class="pg-leg l3"></div>
          <div class="pg-leg l4"></div>
          <div class="pg-ear"></div>
          <div class="pg-head"></div>
          <div class="pg-eye"></div>
          <div class="pg-snout"></div>
        </div>
        <div class="pg-clink"></div>
      </div>
    `,
  v3: `
      <div class="pgc">
        <div class="pgc-shadow"></div>
        <div class="pgc-coin">$</div>
        <div class="pgc-pig">
          <div class="pgc-tail"></div>
          <div class="pgc-body"></div>
          <div class="pgc-slot"></div>
          <div class="pgc-leg l1"></div>
          <div class="pgc-leg l2"></div>
          <div class="pgc-leg l3"></div>
          <div class="pgc-leg l4"></div>
          <div class="pgc-ear"></div>
          <div class="pgc-head"></div>
          <div class="pgc-eye"></div>
          <div class="pgc-snout"></div>
        </div>
        <div class="pgc-clink"></div>
      </div>
    `,
};

class ConceptPiggybank extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${piggybankStyles[version] || piggybankStyles.v3}</style>${piggybankMarkup[version] || piggybankMarkup.v3}`;
  }
}

if (!customElements.get('concept-piggybank')) {
  customElements.define('concept-piggybank', ConceptPiggybank);
}
