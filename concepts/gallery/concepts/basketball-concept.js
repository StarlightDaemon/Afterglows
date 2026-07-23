const basketballStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A jump shot that swishes: the ball arcs up off-screen-left, drops
     through the hoop, the net billows and snaps back, and SWISH
     flashes. Then it resets for the next shot. */
  .bb {
    width: 108px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Backboard + rim, upper right. */
  .bb-board {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 34px;
    height: 26px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 2px;
    background: rgba(0, 30, 6, 0.5);
  }

  /* Shooter's square. */
  .bb-board::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 6px;
    width: 14px;
    height: 10px;
    margin-left: -7px;
    border: 1px solid rgba(140, 255, 170, 0.6);
  }

  /* Rim. */
  .bb-rim {
    position: absolute;
    right: 14px;
    top: 34px;
    width: 22px;
    height: 4px;
    border-radius: 0 0 8px 8px;
    background: rgba(190, 255, 205, 0.9);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
  }

  /* Net: strands hanging from the rim, billowing on the make. */
  .bb-net {
    position: absolute;
    right: 15px;
    top: 38px;
    width: 20px;
    height: 16px;
    transform-origin: 50% 0;
    animation: bb-net 4s ease-out infinite;
  }

  .bb-net-strand {
    position: absolute;
    top: 0;
    width: 1px;
    height: 16px;
    background: rgba(140, 255, 170, 0.65);
    transform-origin: 50% 0;
  }

  .bb-net-strand.n1 { left: 1px; }
  .bb-net-strand.n2 { left: 5px; }
  .bb-net-strand.n3 { left: 10px; transform: skewX(0deg); }
  .bb-net-strand.n4 { left: 15px; }
  .bb-net-strand.n5 { left: 19px; }

  @keyframes bb-net {
    0%, 40% { transform: scaleX(1) scaleY(1); }
    /* Billow outward as the ball passes through. */
    48% { transform: scaleX(1.35) scaleY(1.2); }
    58% { transform: scaleX(0.85) scaleY(0.9); }
    68% { transform: scaleX(1.1) scaleY(1.05); }
    78%, 100% { transform: scaleX(1) scaleY(1); }
  }

  /* The ball on its shot arc. */
  .bb-ball {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, rgba(214, 255, 224, 0.9), rgba(0, 170, 34, 0.85) 60%, rgba(0, 90, 18, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
    animation: bb-shot 4s ease-in-out infinite;
  }

  /* Seams. */
  .bb-ball::before,
  .bb-ball::after {
    content: '';
    position: absolute;
    background: rgba(0, 60, 12, 0.7);
  }

  .bb-ball::before { left: 50%; top: 0; width: 1px; height: 100%; margin-left: -0.5px; }
  .bb-ball::after { left: 0; top: 50%; width: 100%; height: 1px; margin-top: -0.5px; }

  @keyframes bb-shot {
    /* Rise from lower-left. */
    0% { transform: translate(4px, 80px) scale(1); }
    22% { transform: translate(40px, 6px) scale(0.85); }
    /* Apex, then drop into the rim. */
    40% { transform: translate(66px, 30px) scale(0.7); }
    50% { transform: translate(70px, 44px) scale(0.62); }
    /* Fall through and out the bottom. */
    62% { transform: translate(72px, 70px) scale(0.7); opacity: 1; }
    70% { transform: translate(72px, 92px) scale(0.75); opacity: 0; }
    100% { transform: translate(4px, 80px) scale(1); opacity: 0; }
  }

  /* Ball becomes visible for the shot then hidden during reset. */
  .bb-ball { animation-name: bb-shot, bb-vis; animation-duration: 4s, 4s; }

  @keyframes bb-vis {
    0% { opacity: 0; }
    4% { opacity: 1; }
    70% { opacity: 1; }
    72%, 100% { opacity: 0; }
  }

  /* SWISH callout. */
  .bb-swish {
    position: absolute;
    left: 6px;
    top: 40px;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #d6ffe0;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: bb-swish 4s infinite;
  }

  @keyframes bb-swish {
    0%, 52% { opacity: 0; transform: scale(0.6); }
    58% { opacity: 1; transform: scale(1.1); }
    64% { transform: scale(1); }
    82% { opacity: 1; }
    88%, 100% { opacity: 0; }
  }

  /* Court line. */
  .bb-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.45), transparent);
  }
`;

class ConceptBasketball extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${basketballStyles}</style>
      <div class="bb">
        <div class="bb-board"></div>
        <div class="bb-rim"></div>
        <div class="bb-net">
          <div class="bb-net-strand n1"></div>
          <div class="bb-net-strand n2"></div>
          <div class="bb-net-strand n3"></div>
          <div class="bb-net-strand n4"></div>
          <div class="bb-net-strand n5"></div>
        </div>
        <div class="bb-ball"></div>
        <div class="bb-swish">SWISH</div>
        <div class="bb-floor"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-basketball')) {
  customElements.define('concept-basketball', ConceptBasketball);
}
