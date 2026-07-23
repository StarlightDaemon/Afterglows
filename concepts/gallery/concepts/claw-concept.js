const clawStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* The eternal tragedy, on a 9s loop: the gantry trolley lines up,
     the claw drops open, grips a prize, hauls it up - and halfway to
     the chute the prize slips and tumbles back onto the pile. */
  .cl {
    width: 104px;
    height: 100px;
    position: relative;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(0, 35, 7, 0.4), rgba(0, 15, 3, 0.7));
    overflow: hidden;
  }

  /* Gantry rail. */
  .cl-rail {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 8px;
    height: 3px;
    background: rgba(0, 204, 0, 0.6);
  }

  /* Trolley travels the rail; everything below hangs from it. */
  .cl-trolley {
    position: absolute;
    left: 0;
    top: 5px;
    width: 14px;
    height: 9px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
    animation: cl-trolley 9s ease-in-out infinite;
  }

  @keyframes cl-trolley {
    0%, 8% { transform: translateX(16px); }
    20%, 58% { transform: translateX(64px); }
    /* Hauling toward the chute when the prize slips. */
    74%, 82% { transform: translateX(34px); }
    94%, 100% { transform: translateX(16px); }
  }

  /* Cable pays out for the drop. */
  .cl-cable {
    position: absolute;
    left: 50%;
    top: 9px;
    width: 1.5px;
    height: 12px;
    margin-left: -0.75px;
    background: rgba(190, 255, 205, 0.8);
    transform-origin: top center;
    animation: cl-cable 9s ease-in-out infinite;
  }

  @keyframes cl-cable {
    0%, 20% { transform: scaleY(1); }
    32%, 44% { transform: scaleY(4.2); }
    56%, 84% { transform: scaleY(1.4); }
    94%, 100% { transform: scaleY(1); }
  }

  /* Claw head + two fingers, riding the cable end. */
  .cl-claw {
    position: absolute;
    left: 50%;
    top: 9px;
    width: 0;
    height: 0;
    animation: cl-claw 9s ease-in-out infinite;
  }

  @keyframes cl-claw {
    0%, 20% { transform: translateY(12px); }
    32%, 44% { transform: translateY(50px); }
    56%, 84% { transform: translateY(17px); }
    94%, 100% { transform: translateY(12px); }
  }

  .cl-hub {
    position: absolute;
    left: -5px;
    top: 0;
    width: 10px;
    height: 6px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.9);
  }

  .cl-finger {
    position: absolute;
    top: 4px;
    width: 3px;
    height: 13px;
    border-radius: 0 0 2px 2px;
    background: #baffc9;
    transform-origin: top center;
  }

  .cl-finger.fl { left: -6px; animation: cl-fl 9s ease-in-out infinite; }
  .cl-finger.fr { left: 3px; animation: cl-fr 9s ease-in-out infinite; }

  /* Fingers: open on approach, clamp at the grab, spring open at the
     slip. */
  @keyframes cl-fl {
    0%, 24% { transform: rotate(24deg); }
    34%, 40% { transform: rotate(30deg); }
    46%, 66% { transform: rotate(-4deg); }
    /* The slip. */
    70% { transform: rotate(18deg); }
    76%, 100% { transform: rotate(24deg); }
  }

  @keyframes cl-fr {
    0%, 24% { transform: rotate(-24deg); }
    34%, 40% { transform: rotate(-30deg); }
    46%, 66% { transform: rotate(4deg); }
    70% { transform: rotate(-18deg); }
    76%, 100% { transform: rotate(-24deg); }
  }

  /* Prize pile along the floor. */
  .cl-pile {
    position: absolute;
    bottom: 10px;
    border-radius: 45% 50% 40% 50%;
    background: radial-gradient(circle at 38% 30%, rgba(190, 255, 205, 0.55), rgba(0, 90, 18, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .cl-pile.a { left: 12px; width: 18px; height: 13px; }
  .cl-pile.b { left: 32px; width: 15px; height: 11px; }
  .cl-pile.c { left: 78px; width: 16px; height: 12px; }

  /* The target prize: grabbed, lifted, dropped. */
  .cl-prize {
    position: absolute;
    left: 58px;
    bottom: 10px;
    width: 16px;
    height: 13px;
    border-radius: 45% 50% 42% 50%;
    background: radial-gradient(circle at 38% 30%, rgba(242, 255, 221, 0.8), rgba(0, 120, 24, 0.9));
    border: 1px solid rgba(140, 255, 170, 0.8);
    animation: cl-prize 9s infinite;
  }

  @keyframes cl-prize {
    0%, 44% { transform: translate(0, 0) rotate(0deg); animation-timing-function: ease-in-out; }
    /* Lifted with the claw. */
    56% { transform: translate(0, -46px) rotate(3deg); animation-timing-function: ease-in-out; }
    62% { transform: translate(-12px, -45px) rotate(-4deg); }
    /* Slip: tumble back to the pile. */
    68% { transform: translate(-22px, -44px) rotate(-14deg); animation-timing-function: ease-in; }
    78% { transform: translate(-28px, 0) rotate(-32deg); animation-timing-function: ease-out; }
    82% { transform: translate(-30px, -6px) rotate(-24deg); animation-timing-function: ease-in; }
    86%, 100% { transform: translate(-30px, 0) rotate(-28deg); }
  }

  /* Chute mouth bottom-left. */
  .cl-chute {
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 20px;
    height: 6px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    border-radius: 2px;
    background: #020803;
  }

  /* Floor line. */
  .cl-floor {
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 8px;
    height: 2px;
    background: rgba(0, 204, 0, 0.4);
  }

  /* TRY AGAIN taunt after the slip. */
  .cl-taunt {
    position: absolute;
    left: 0;
    right: 0;
    top: 26px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: #c8ffd6;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: cl-taunt 9s steps(1) infinite;
  }

  @keyframes cl-taunt {
    0%, 79% { opacity: 0; }
    81%, 85% { opacity: 1; }
    86%, 88% { opacity: 0.25; }
    89%, 93% { opacity: 1; }
    95%, 100% { opacity: 0; }
  }
`;

class ConceptClaw extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${clawStyles}</style>
      <div class="cl">
        <div class="cl-rail"></div>
        <div class="cl-trolley">
          <div class="cl-cable"></div>
          <div class="cl-claw">
            <div class="cl-hub"></div>
            <div class="cl-finger fl"></div>
            <div class="cl-finger fr"></div>
          </div>
        </div>
        <div class="cl-pile a"></div>
        <div class="cl-pile b"></div>
        <div class="cl-pile c"></div>
        <div class="cl-prize"></div>
        <div class="cl-chute"></div>
        <div class="cl-floor"></div>
        <div class="cl-taunt">TRY AGAIN</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-claw')) {
  customElements.define('concept-claw', ConceptClaw);
}
