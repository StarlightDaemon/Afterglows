// v1 below is the archived original; v2 fixes the grab and the loop.
// v3 adds full arcade colorization: neon purple cabinet, chrome gantry and claw,
// vibrant multi-colored plush prizes, and flashing neon "TRY AGAIN" marquee.
const clawStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* The eternal tragedy, on a 9s loop: the gantry trolley lines up
     dead over the prize, the claw drops open and wraps it, hauls it
     up - and halfway to the chute the prize slips and tumbles right
     back onto the spot it came from. */
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

  /* Trolley travels the rail; everything below hangs from it. At the
     grab it parks at x64, putting the claw's centerline (trolley
     center, x71) exactly over the prize center. */
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

  /* Cable pays out for the drop, matching the claw's travel. */
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
    32%, 44% { transform: scaleY(4.83); }
    56%, 84% { transform: scaleY(1.4); }
    94%, 100% { transform: scaleY(1); }
  }

  /* Claw head + two fingers, riding the cable end. The drop reaches
     y67 so the fingers hang over the prize's upper half. */
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
    32%, 44% { transform: translateY(58px); }
    56%, 84% { transform: translateY(17px); }
    94%, 100% { transform: translateY(12px); }
  }

  .cl-hub {
    position: absolute;
    left: -8px;
    top: 0;
    width: 16px;
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

  /* Set wide enough to fall OUTSIDE the 16px prize, not through it. */
  .cl-finger.fl { left: -9px; animation: cl-fl 9s ease-in-out infinite; }
  .cl-finger.fr { left: 6px; animation: cl-fr 9s ease-in-out infinite; }

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

  /* The target prize: grabbed, lifted, dropped - and it tumbles back
     to exactly where it started, one full backspin along the way, so
     the loop closes without a teleport. */
  .cl-prize {
    position: absolute;
    left: 63px;
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
    /* Lifted with the claw, hanging in the fingers' grip. */
    56% { transform: translate(0, -40px) rotate(3deg); animation-timing-function: ease-in-out; }
    62% { transform: translate(-8px, -39px) rotate(-4deg); }
    /* Sagging out of the grip as the haul begins. */
    68% { transform: translate(-18px, -36px) rotate(-20deg); animation-timing-function: ease-in; }
    /* The slip: floor hit, bounce, and settle on the starting spot. */
    74% { transform: translate(-14px, 0) rotate(-120deg); animation-timing-function: ease-out; }
    79% { transform: translate(-7px, -9px) rotate(-230deg); animation-timing-function: ease-in; }
    84% { transform: translate(-1px, 0) rotate(-320deg); animation-timing-function: ease-out; }
    88% { transform: translate(0, -2px) rotate(-348deg); animation-timing-function: ease-in; }
    92%, 100% { transform: translate(0, 0) rotate(-360deg); }
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
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Arcade Claw Machine with neon magenta cabinet, chrome trolley,
     stainless steel claws, multi-colored plushies, and glowing amber taunt */
  .clc {
    width: 104px;
    height: 100px;
    position: relative;
    border: 2px solid #ec4899;
    border-radius: 6px;
    background: radial-gradient(circle at 50% 30%, #312e81 0%, #1e1b4b 55%, #09090b 100%);
    box-shadow: inset 0 0 12px rgba(236, 72, 153, 0.4), 0 0 10px rgba(236, 72, 153, 0.3);
    overflow: hidden;
  }

  /* Steel Gantry Rail */
  .clc-rail {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 8px;
    height: 3px;
    background: linear-gradient(90deg, #64748b, #cbd5e1, #64748b);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  /* Chrome Motorized Trolley */
  .clc-trolley {
    position: absolute;
    left: 0;
    top: 5px;
    width: 14px;
    height: 9px;
    border-radius: 2px;
    background: linear-gradient(180deg, #ffffff 0%, #94a3b8 60%, #475569 100%);
    border: 0.5px solid #cbd5e1;
    box-shadow: 0 0 6px #38bdf8;
    animation: clc-trolley 9s ease-in-out infinite;
  }

  @keyframes clc-trolley {
    0%, 8% { transform: translateX(16px); }
    20%, 58% { transform: translateX(64px); }
    74%, 82% { transform: translateX(34px); }
    94%, 100% { transform: translateX(16px); }
  }

  /* Steel Drop Cable */
  .clc-cable {
    position: absolute;
    left: 50%;
    top: 9px;
    width: 1.5px;
    height: 12px;
    margin-left: -0.75px;
    background: #e2e8f0;
    box-shadow: 0 0 3px #ffffff;
    transform-origin: top center;
    animation: clc-cable 9s ease-in-out infinite;
  }

  @keyframes clc-cable {
    0%, 20% { transform: scaleY(1); }
    32%, 44% { transform: scaleY(4.83); }
    56%, 84% { transform: scaleY(1.4); }
    94%, 100% { transform: scaleY(1); }
  }

  /* Chrome Claw Assembly */
  .clc-claw {
    position: absolute;
    left: 50%;
    top: 9px;
    width: 0;
    height: 0;
    animation: clc-claw 9s ease-in-out infinite;
  }

  @keyframes clc-claw {
    0%, 20% { transform: translateY(12px); }
    32%, 44% { transform: translateY(58px); }
    56%, 84% { transform: translateY(17px); }
    94%, 100% { transform: translateY(12px); }
  }

  .clc-hub {
    position: absolute;
    left: -8px;
    top: 0;
    width: 16px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(180deg, #f1f5f9, #64748b);
    border: 0.5px solid #cbd5e1;
  }

  .clc-finger {
    position: absolute;
    top: 4px;
    width: 3px;
    height: 13px;
    border-radius: 0 0 2px 2px;
    background: linear-gradient(180deg, #ffffff, #94a3b8);
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
    transform-origin: top center;
  }

  .clc-finger.fl { left: -9px; animation: clc-fl 9s ease-in-out infinite; }
  .clc-finger.fr { left: 6px; animation: clc-fr 9s ease-in-out infinite; }

  @keyframes clc-fl {
    0%, 24% { transform: rotate(24deg); }
    34%, 40% { transform: rotate(30deg); }
    46%, 66% { transform: rotate(-4deg); }
    70% { transform: rotate(18deg); }
    76%, 100% { transform: rotate(24deg); }
  }

  @keyframes clc-fr {
    0%, 24% { transform: rotate(-24deg); }
    34%, 40% { transform: rotate(-30deg); }
    46%, 66% { transform: rotate(4deg); }
    70% { transform: rotate(-18deg); }
    76%, 100% { transform: rotate(-24deg); }
  }

  /* Multi-colored Plush Toy Pile */
  .clc-pile {
    position: absolute;
    bottom: 10px;
    border-radius: 45% 50% 40% 50%;
  }

  .clc-pile.a {
    left: 12px;
    width: 18px;
    height: 13px;
    background: radial-gradient(circle at 38% 30%, #34d399, #059669);
    border: 1px solid #10b981;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  .clc-pile.b {
    left: 32px;
    width: 15px;
    height: 11px;
    background: radial-gradient(circle at 38% 30%, #fde047, #d97706);
    border: 1px solid #facc15;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  .clc-pile.c {
    left: 78px;
    width: 16px;
    height: 12px;
    background: radial-gradient(circle at 38% 30%, #c084fc, #7e22ce);
    border: 1px solid #a855f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  /* Target Prize: Coral Pink Plushie */
  .clc-prize {
    position: absolute;
    left: 63px;
    bottom: 10px;
    width: 16px;
    height: 13px;
    border-radius: 45% 50% 42% 50%;
    background: radial-gradient(circle at 38% 30%, #fda4af, #f43f5e 60%, #be123c 100%);
    border: 1px solid #fb7185;
    box-shadow: 0 0 8px rgba(244, 63, 94, 0.6);
    animation: clc-prize 9s infinite;
  }

  @keyframes clc-prize {
    0%, 44% { transform: translate(0, 0) rotate(0deg); animation-timing-function: ease-in-out; }
    56% { transform: translate(0, -40px) rotate(3deg); animation-timing-function: ease-in-out; }
    62% { transform: translate(-8px, -39px) rotate(-4deg); }
    68% { transform: translate(-18px, -36px) rotate(-20deg); animation-timing-function: ease-in; }
    74% { transform: translate(-14px, 0) rotate(-120deg); animation-timing-function: ease-out; }
    79% { transform: translate(-7px, -9px) rotate(-230deg); animation-timing-function: ease-in; }
    84% { transform: translate(-1px, 0) rotate(-320deg); animation-timing-function: ease-out; }
    88% { transform: translate(0, -2px) rotate(-348deg); animation-timing-function: ease-in; }
    92%, 100% { transform: translate(0, 0) rotate(-360deg); }
  }

  /* Cyan Prize Chute Receptacle */
  .clc-chute {
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 20px;
    height: 6px;
    border: 1px solid #38bdf8;
    border-radius: 2px;
    background: #020617;
    box-shadow: inset 0 0 4px #00f0ff;
  }

  /* Floor line */
  .clc-floor {
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, #ec4899, #8b5cf6, #38bdf8);
    box-shadow: 0 0 6px #ec4899;
  }

  /* Flashing Amber "TRY AGAIN" Arcade Display */
  .clc-taunt {
    position: absolute;
    left: 0;
    right: 0;
    top: 26px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8.5px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fde047;
    text-shadow: 0 0 8px #f59e0b, 0 0 14px #ea580c;
    opacity: 0;
    animation: clc-taunt 9s steps(1) infinite;
  }

  @keyframes clc-taunt {
    0%, 79% { opacity: 0; }
    81%, 85% { opacity: 1; }
    86%, 88% { opacity: 0.25; }
    89%, 93% { opacity: 1; }
    95%, 100% { opacity: 0; }
  }
  `,
};

const clawMarkup = {
  v1: `
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
    `,
  v2: `
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
    `,
  v3: `
      <div class="clc">
        <div class="clc-rail"></div>
        <div class="clc-trolley">
          <div class="clc-cable"></div>
          <div class="clc-claw">
            <div class="clc-hub"></div>
            <div class="clc-finger fl"></div>
            <div class="clc-finger fr"></div>
          </div>
        </div>
        <div class="clc-pile a"></div>
        <div class="clc-pile b"></div>
        <div class="clc-pile c"></div>
        <div class="clc-prize"></div>
        <div class="clc-chute"></div>
        <div class="clc-floor"></div>
        <div class="clc-taunt">TRY AGAIN</div>
      </div>
    `,
};

class ConceptClaw extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${clawStyles[version] || clawStyles.v3}</style>${clawMarkup[version] || clawMarkup.v3}`;
  }
}

if (!customElements.get('concept-claw')) {
  customElements.define('concept-claw', ConceptClaw);
}
