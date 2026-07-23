const piggybankStyles = `
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

  /* Coins falling into the slot, in sequence. */
  .pg-coin {
    position: absolute;
    left: 50%;
    top: 0;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #f2ffdd, #9ade5a 65%, rgba(0, 150, 30, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: pg-coin 2.2s ease-in infinite;
  }

  .pg-coin.c2 { animation-delay: 0.73s; }
  .pg-coin.c3 { animation-delay: 1.46s; }

  @keyframes pg-coin {
    0% { transform: translateY(0) scaleY(1); opacity: 0; }
    10% { opacity: 1; }
    /* Fall to the slot. */
    40% { transform: translateY(24px) scaleY(1); opacity: 1; }
    /* Slip in (edge-on) and vanish. */
    50% { transform: translateY(30px) scaleY(0.2); opacity: 0; }
    100% { opacity: 0; }
  }

  /* The pig body: wiggles on each coin drop. */
  .pg-pig {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 72px;
    height: 50px;
    margin-left: -36px;
    animation: pg-wiggle 2.2s ease-in-out infinite;
  }

  @keyframes pg-wiggle {
    0%, 44% { transform: rotate(0deg) translateY(0); }
    52% { transform: rotate(-2deg) translateY(-2px); }
    58% { transform: rotate(2deg); }
    64% { transform: rotate(0deg) translateY(0); }
    100% { transform: rotate(0deg); }
  }

  .pg-body {
    position: absolute;
    left: 4px;
    top: 6px;
    width: 60px;
    height: 40px;
    border-radius: 50% 50% 45% 45%;
    background: radial-gradient(ellipse at 38% 32%,
      rgba(214, 255, 224, 0.85),
      rgba(0, 170, 34, 0.7) 60%,
      rgba(0, 110, 22, 0.85));
    border: 2px solid var(--accent, #00cc00);
    overflow: hidden;
  }

  /* Coin stack filling the belly. */
  .pg-fill {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 6px;
    background:
      repeating-linear-gradient(180deg,
        rgba(242, 255, 221, 0.8) 0 2px,
        rgba(0, 150, 30, 0.7) 2px 4px);
    animation: pg-fill 6.6s steps(1) infinite;
  }

  @keyframes pg-fill {
    0% { height: 6px; }
    24% { height: 14px; }
    48% { height: 22px; }
    72% { height: 30px; }
    /* Emptied (spent). */
    88% { height: 30px; }
    92% { height: 6px; }
  }

  /* Snout. */
  .pg-snout {
    position: absolute;
    left: 54px;
    top: 22px;
    width: 14px;
    height: 12px;
    border-radius: 40%;
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.8), rgba(0, 130, 26, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
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
    background: rgba(0, 150, 30, 0.85);
    transform-origin: 50% 100%;
    animation: pg-ear 2.2s ease-in-out infinite;
  }

  @keyframes pg-ear {
    0%, 46% { transform: rotate(0deg); }
    54% { transform: rotate(-14deg); }
    62% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
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
    border: 1px solid rgba(140, 255, 170, 0.7);
    z-index: 3;
  }

  /* Curly tail. */
  .pg-tail {
    position: absolute;
    left: -2px;
    top: 20px;
    width: 8px;
    height: 8px;
    border: 1.5px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
    border-left-color: transparent;
    animation: pg-tail 2.2s ease-in-out infinite;
  }

  @keyframes pg-tail {
    0%, 46% { transform: rotate(0deg); }
    56% { transform: rotate(40deg); }
    64% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  /* Legs. */
  .pg-leg {
    position: absolute;
    bottom: 4px;
    width: 8px;
    height: 8px;
    border-radius: 0 0 2px 2px;
    background: rgba(0, 130, 26, 0.8);
  }

  .pg-leg.l1 { left: 12px; }
  .pg-leg.l2 { left: 46px; }

  /* Clink note. */
  .pg-note {
    position: absolute;
    right: 4px;
    top: 20px;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    color: #baffc9;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: pg-note 2.2s infinite;
  }

  @keyframes pg-note {
    0%, 44% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    68% { transform: translateY(-10px); opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptPiggybank extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${piggybankStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-piggybank')) {
  customElements.define('concept-piggybank', ConceptPiggybank);
}
