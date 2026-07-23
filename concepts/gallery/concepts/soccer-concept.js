const soccerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A strike on goal: the ball curls in from the left, the keeper
     dives the wrong way, the ball buries in the top corner and the
     net bulges - GOAL flashes. */
  .sc {
    width: 116px;
    height: 88px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Goal frame, right. */
  .sc-goal {
    position: absolute;
    right: 6px;
    top: 14px;
    width: 54px;
    height: 50px;
    border: 3px solid var(--accent, #00cc00);
    border-right: none;
    box-sizing: border-box;
  }

  /* Net mesh. */
  .sc-net {
    position: absolute;
    right: 6px;
    top: 17px;
    width: 51px;
    height: 44px;
    background:
      repeating-linear-gradient(45deg, rgba(0, 204, 0, 0.22) 0 1px, transparent 1px 7px),
      repeating-linear-gradient(-45deg, rgba(0, 204, 0, 0.22) 0 1px, transparent 1px 7px);
  }

  /* Net bulge spot in the top corner where the ball lands. */
  .sc-bulge {
    position: absolute;
    right: 12px;
    top: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 255, 170, 0.5), transparent 70%);
    opacity: 0;
    animation: sc-bulge 4.5s infinite;
  }

  @keyframes sc-bulge {
    0%, 52% { transform: scale(0.3); opacity: 0; }
    58% { transform: scale(1.3); opacity: 0.9; }
    68% { transform: scale(1); opacity: 0.5; }
    80% { transform: scale(1.05); opacity: 0.3; }
    88%, 100% { opacity: 0; }
  }

  /* Keeper: dives low-right (the wrong way). */
  .sc-keeper {
    position: absolute;
    right: 30px;
    bottom: 26px;
    width: 8px;
    height: 20px;
    transform-origin: 50% 100%;
    animation: sc-keeper 4.5s ease-out infinite;
  }

  .sc-keeper-body {
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.85), rgba(0, 120, 24, 0.85));
  }

  .sc-keeper-head {
    position: absolute;
    left: 50%;
    top: -6px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  @keyframes sc-keeper {
    0%, 44% { transform: rotate(0deg) translateX(0); }
    /* Dives to the ground, low and to the near post. */
    58% { transform: rotate(74deg) translate(8px, 6px); }
    80% { transform: rotate(74deg) translate(8px, 6px); }
    92%, 100% { transform: rotate(0deg) translateX(0); }
  }

  /* The ball: curls into the top corner. */
  .sc-ball {
    position: absolute;
    left: 6px;
    bottom: 24px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #f2ffdd, #baffc9 65%);
    border: 1px solid rgba(0, 130, 26, 0.6);
    animation: sc-ball 4.5s ease-in infinite;
  }

  /* Pentagon spots. */
  .sc-ball::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 3px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(0, 90, 18, 0.8);
    box-shadow: 3px 4px 0 rgba(0, 90, 18, 0.7);
  }

  @keyframes sc-ball {
    0%, 8% { transform: translate(0, 0) scale(1); opacity: 1; }
    /* Curl: up and to the right into the corner. */
    34% { transform: translate(48px, -24px) scale(0.85); }
    54% { transform: translate(84px, -34px) scale(0.7); opacity: 1; }
    /* Hits the net, stops. */
    58% { transform: translate(88px, -36px) scale(0.65); opacity: 1; }
    64% { transform: translate(86px, -32px) scale(0.65); opacity: 0; }
    100% { transform: translate(0, 0) scale(1); opacity: 0; }
  }

  .sc-ball { animation-name: sc-ball, sc-ballvis; animation-duration: 4.5s, 4.5s; }

  @keyframes sc-ballvis {
    0% { opacity: 0; }
    6% { opacity: 1; }
    62% { opacity: 1; }
    64%, 100% { opacity: 0; }
  }

  /* Curl trail. */
  .sc-trail {
    position: absolute;
    left: 10px;
    bottom: 28px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.35);
    animation: sc-ball 4.5s ease-in infinite;
    animation-delay: -0.12s;
  }

  /* GOAL callout. */
  .sc-goaltext {
    position: absolute;
    left: 8px;
    top: 12px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 3px;
    color: #d6ffe0;
    text-shadow: 0 0 8px rgba(0, 204, 0, 1);
    opacity: 0;
    animation: sc-goaltext 4.5s infinite;
  }

  @keyframes sc-goaltext {
    0%, 58% { opacity: 0; transform: scale(0.7); }
    64% { opacity: 1; transform: scale(1.15); }
    70% { transform: scale(1); }
    84% { opacity: 1; }
    90%, 100% { opacity: 0; }
  }

  /* Pitch line. */
  .sc-pitch {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.4), transparent);
  }
`;

class ConceptSoccer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${soccerStyles}</style>
      <div class="sc">
        <div class="sc-goal"></div>
        <div class="sc-net"></div>
        <div class="sc-bulge"></div>
        <div class="sc-keeper">
          <div class="sc-keeper-body"></div>
          <div class="sc-keeper-head"></div>
        </div>
        <div class="sc-pitch"></div>
        <div class="sc-trail"></div>
        <div class="sc-ball"></div>
        <div class="sc-goaltext">GOAL</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-soccer')) {
  customElements.define('concept-soccer', ConceptSoccer);
}
