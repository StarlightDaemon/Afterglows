// Dice Roll: v1 (single die) and v2 (two dice monochrome) preserved.
// v3 adds authentic casino colorization:
// lush baize green felt table, one translucent cherry-red casino die with white pips,
// one ivory-white bone die with black & red pips, realistic drop shadows,
// bounce puffs, and golden winning payout score ticker.
const diceStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dice {
    width: 112px;
    height: 88px;
    position: relative;
  }

  .dice-floor {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 10px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5), transparent);
  }

  .dice-x {
    position: absolute;
    left: 2px;
    bottom: 14px;
    animation: dice-x 5s infinite;
  }

  @keyframes dice-x {
    0% { transform: translateX(-26px); }
    58% { transform: translateX(64px); }
    100% { transform: translateX(64px); }
  }

  .dice-y {
    animation: dice-y 5s infinite;
  }

  @keyframes dice-y {
    0% { transform: translateY(-52px); animation-timing-function: ease-in; }
    14% { transform: translateY(0); animation-timing-function: ease-out; }
    26% { transform: translateY(-26px); animation-timing-function: ease-in; }
    38% { transform: translateY(0); animation-timing-function: ease-out; }
    47% { transform: translateY(-11px); animation-timing-function: ease-in; }
    56% { transform: translateY(0); }
    60% { transform: translateY(-3px); }
    63%, 100% { transform: translateY(0); }
  }

  .dice-cube {
    position: relative;
    width: 26px;
    height: 26px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 5px;
    background: linear-gradient(135deg, rgba(0, 80, 16, 0.5), rgba(0, 35, 7, 0.8));
    animation: dice-spin 5s infinite;
    box-sizing: border-box;
  }

  @keyframes dice-spin {
    0% { transform: rotate(-160deg); }
    14% { transform: rotate(-88deg); }
    26% { transform: rotate(-44deg); }
    38% { transform: rotate(-14deg); }
    52% { transform: rotate(4deg); }
    60%, 100% { transform: rotate(0deg); }
    63% { box-shadow: 0 0 14px rgba(0, 204, 0, 0.95); }
    70% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.3); }
  }

  .dice-face {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  .dice-pip {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 3px rgba(0, 204, 0, 0.8);
  }

  .dice-face.f3 .dice-pip.a { left: 3px; top: 3px; }
  .dice-face.f3 .dice-pip.b { left: 50%; top: 50%; margin: -2.5px 0 0 -2.5px; }
  .dice-face.f3 .dice-pip.c { right: 3px; bottom: 3px; }

  .dice-face.f5 .dice-pip.a { left: 3px; top: 3px; }
  .dice-face.f5 .dice-pip.b { right: 3px; top: 3px; }
  .dice-face.f5 .dice-pip.c { left: 50%; top: 50%; margin: -2.5px 0 0 -2.5px; }
  .dice-face.f5 .dice-pip.d { left: 3px; bottom: 3px; }
  .dice-face.f5 .dice-pip.e { right: 3px; bottom: 3px; }

  .dice-face.f6 .dice-pip.a { left: 3px; top: 2px; }
  .dice-face.f6 .dice-pip.b { left: 3px; top: 50%; margin-top: -2.5px; }
  .dice-face.f6 .dice-pip.c { left: 3px; bottom: 2px; }
  .dice-face.f6 .dice-pip.d { right: 3px; top: 2px; }
  .dice-face.f6 .dice-pip.e { right: 3px; top: 50%; margin-top: -2.5px; }
  .dice-face.f6 .dice-pip.f { right: 3px; bottom: 2px; }

  .dice-face.f3 { animation: dice-f3 5s steps(1) infinite; }
  .dice-face.f5 { animation: dice-f5 5s steps(1) infinite; }
  .dice-face.f6 { animation: dice-f6 5s steps(1) infinite; }

  @keyframes dice-f3 {
    0% { opacity: 1; }
    14% { opacity: 0; }
    26% { opacity: 1; }
    38% { opacity: 0; }
  }

  @keyframes dice-f5 {
    0% { opacity: 0; }
    14% { opacity: 1; }
    26% { opacity: 0; }
    38% { opacity: 1; }
    52% { opacity: 0; }
  }

  @keyframes dice-f6 {
    0%, 38% { opacity: 0; }
    52% { opacity: 1; }
  }

  .dice-puff {
    position: absolute;
    bottom: 12px;
    width: 14px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.5);
    opacity: 0;
    animation: dice-puff 5s infinite;
  }

  .dice-puff.p1 { left: 18px; }
  .dice-puff.p2 { left: 48px; animation-delay: 1.2s; }

  @keyframes dice-puff {
    0%, 13% { transform: scale(0.3); opacity: 0; }
    15% { opacity: 0.9; }
    24% { transform: scale(1.6); opacity: 0; }
    100% { opacity: 0; }
  }

  .dice-score {
    position: absolute;
    right: 6px;
    top: 8px;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: dice-score 5s steps(1) infinite;
  }

  @keyframes dice-score {
    0%, 62% { opacity: 0; }
    66%, 92% { opacity: 1; }
    96%, 100% { opacity: 0; }
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

  .dice {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .dice-floor {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 10px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5), transparent);
  }

  .die-x {
    position: absolute;
    bottom: 14px;
  }

  .die-x.d1 { left: -4px; animation: d1-x 5s infinite; }
  .die-x.d2 { left: 4px; animation: d2-x 5s infinite; }

  @keyframes d1-x {
    0% { transform: translateX(-30px); }
    54% { transform: translateX(38px); }
    100% { transform: translateX(38px); }
  }

  @keyframes d2-x {
    0% { transform: translateX(126px); }
    64% { transform: translateX(60px); }
    100% { transform: translateX(60px); }
  }

  .die-y { animation-duration: 5s; animation-iteration-count: infinite; }
  .die-x.d1 .die-y { animation-name: d1-y; }
  .die-x.d2 .die-y { animation-name: d2-y; animation-delay: 0.15s; }

  @keyframes d1-y {
    0% { transform: translateY(-50px); animation-timing-function: ease-in; }
    13% { transform: translateY(0); animation-timing-function: ease-out; }
    24% { transform: translateY(-24px); animation-timing-function: ease-in; }
    35% { transform: translateY(0); animation-timing-function: ease-out; }
    43% { transform: translateY(-10px); animation-timing-function: ease-in; }
    51% { transform: translateY(0); }
    55% { transform: translateY(-3px); }
    58%, 100% { transform: translateY(0); }
  }

  @keyframes d2-y {
    0% { transform: translateY(-58px); animation-timing-function: ease-in; }
    18% { transform: translateY(0); animation-timing-function: ease-out; }
    30% { transform: translateY(-28px); animation-timing-function: ease-in; }
    41% { transform: translateY(0); animation-timing-function: ease-out; }
    49% { transform: translateY(-12px); animation-timing-function: ease-in; }
    57% { transform: translateY(0); }
    61% { transform: translateY(-3px); }
    64%, 100% { transform: translateY(0); }
  }

  .dice-cube {
    position: relative;
    width: 24px;
    height: 24px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 5px;
    background: linear-gradient(135deg, rgba(0, 80, 16, 0.5), rgba(0, 35, 7, 0.8));
    box-sizing: border-box;
  }

  .die-x.d1 .dice-cube { animation: d1-spin 5s infinite; }
  .die-x.d2 .dice-cube { animation: d2-spin 5s infinite; }

  @keyframes d1-spin {
    0% { transform: rotate(-150deg); }
    13% { transform: rotate(-82deg); }
    24% { transform: rotate(-40deg); }
    35% { transform: rotate(-12deg); }
    49% { transform: rotate(4deg); }
    58%, 100% { transform: rotate(0deg); }
    61% { box-shadow: 0 0 14px rgba(0, 204, 0, 0.95); }
    68% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.3); }
  }

  @keyframes d2-spin {
    0% { transform: rotate(170deg); }
    18% { transform: rotate(96deg); }
    30% { transform: rotate(50deg); }
    41% { transform: rotate(16deg); }
    57% { transform: rotate(-4deg); }
    64%, 100% { transform: rotate(0deg); }
    67% { box-shadow: 0 0 14px rgba(0, 204, 0, 0.95); }
    74% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.3); }
  }

  .dice-face {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  .dice-pip {
    position: absolute;
    width: 4.5px;
    height: 4.5px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 3px rgba(0, 204, 0, 0.8);
  }

  .dice-face.f2 .dice-pip.a { left: 3px; top: 3px; }
  .dice-face.f2 .dice-pip.b { right: 3px; bottom: 3px; }

  .dice-face.f3 .dice-pip.a { left: 3px; top: 3px; }
  .dice-face.f3 .dice-pip.b { left: 50%; top: 50%; margin: -2.25px 0 0 -2.25px; }
  .dice-face.f3 .dice-pip.c { right: 3px; bottom: 3px; }

  .dice-face.f4 .dice-pip.a { left: 3px; top: 3px; }
  .dice-face.f4 .dice-pip.b { right: 3px; top: 3px; }
  .dice-face.f4 .dice-pip.c { left: 3px; bottom: 3px; }
  .dice-face.f4 .dice-pip.d { right: 3px; bottom: 3px; }

  .dice-face.f5 .dice-pip.a { left: 3px; top: 3px; }
  .dice-face.f5 .dice-pip.b { right: 3px; top: 3px; }
  .dice-face.f5 .dice-pip.c { left: 50%; top: 50%; margin: -2.25px 0 0 -2.25px; }
  .dice-face.f5 .dice-pip.d { left: 3px; bottom: 3px; }
  .dice-face.f5 .dice-pip.e { right: 3px; bottom: 3px; }

  .dice-face.f6 .dice-pip.a { left: 3px; top: 2px; }
  .dice-face.f6 .dice-pip.b { left: 3px; top: 50%; margin-top: -2.25px; }
  .dice-face.f6 .dice-pip.c { left: 3px; bottom: 2px; }
  .dice-face.f6 .dice-pip.d { right: 3px; top: 2px; }
  .dice-face.f6 .dice-pip.e { right: 3px; top: 50%; margin-top: -2.25px; }
  .dice-face.f6 .dice-pip.f { right: 3px; bottom: 2px; }

  .die-x.d1 .dice-face.f3 { animation: d1-f3 5s steps(1) infinite; }
  .die-x.d1 .dice-face.f5 { animation: d1-f5 5s steps(1) infinite; }
  .die-x.d1 .dice-face.f4 { animation: d1-f4 5s steps(1) infinite; }

  @keyframes d1-f3 { 0% { opacity: 1; } 13% { opacity: 0; } 24% { opacity: 1; } 35% { opacity: 0; } }
  @keyframes d1-f5 { 0% { opacity: 0; } 13% { opacity: 1; } 24% { opacity: 0; } 35% { opacity: 1; } 49% { opacity: 0; } }
  @keyframes d1-f4 { 0%, 49% { opacity: 0; } 58% { opacity: 1; } }

  .die-x.d2 .dice-face.f2 { animation: d2-f2 5s steps(1) infinite; }
  .die-x.d2 .dice-face.f4 { animation: d2-f4 5s steps(1) infinite; }
  .die-x.d2 .dice-face.f6 { animation: d2-f6 5s steps(1) infinite; }

  @keyframes d2-f2 { 0% { opacity: 1; } 18% { opacity: 0; } 30% { opacity: 1; } 41% { opacity: 0; } }
  @keyframes d2-f4 { 0% { opacity: 0; } 18% { opacity: 1; } 30% { opacity: 0; } 41% { opacity: 1; } 57% { opacity: 0; } }
  @keyframes d2-f6 { 0%, 57% { opacity: 0; } 64% { opacity: 1; } }

  .dice-puff {
    position: absolute;
    bottom: 12px;
    width: 13px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.5);
    opacity: 0;
  }

  .dice-puff.p1 { left: 14px; animation: d1-puff 5s infinite; }
  .dice-puff.p2 { left: 38px; animation: d1-puff 5s infinite; animation-delay: 1.1s; }
  .dice-puff.p3 { left: 26px; animation: d2-puff 5s infinite; }
  .dice-puff.p4 { left: 62px; animation: d2-puff 5s infinite; animation-delay: 1.2s; }

  @keyframes d1-puff {
    0%, 12% { transform: scale(0.3); opacity: 0; }
    14% { opacity: 0.9; }
    22% { transform: scale(1.5); opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes d2-puff {
    0%, 17% { transform: scale(0.3); opacity: 0; }
    19% { opacity: 0.9; }
    27% { transform: scale(1.5); opacity: 0; }
    100% { opacity: 0; }
  }

  .dice-score {
    position: absolute;
    right: 4px;
    top: 6px;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: dice-score 5s steps(1) infinite;
  }

  @keyframes dice-score {
    0%, 66% { opacity: 0; }
    70%, 92% { opacity: 1; }
    96%, 100% { opacity: 0; }
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

  /* v3: Casino craps table with baize green felt, translucent crimson red die,
     ivory-white bone die with black & crimson pips, and gold winning score ticker. */
  .dicec {
    width: 116px;
    height: 88px;
    position: relative;
    background: radial-gradient(ellipse at 50% 40%, #065f46 0%, #064e3b 60%, #022c22 100%);
    border-radius: 6px;
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }

  /* Table felt line */
  .dicec-floor {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 10px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.4), transparent);
  }

  .die-x {
    position: absolute;
    bottom: 14px;
  }

  .die-x.d1 { left: -4px; animation: d1-xc 5s infinite; }
  .die-x.d2 { left: 4px; animation: d2-xc 5s infinite; }

  @keyframes d1-xc {
    0% { transform: translateX(-30px); }
    54% { transform: translateX(38px); }
    100% { transform: translateX(38px); }
  }

  @keyframes d2-xc {
    0% { transform: translateX(126px); }
    64% { transform: translateX(60px); }
    100% { transform: translateX(60px); }
  }

  .die-y { animation-duration: 5s; animation-iteration-count: infinite; }
  .die-x.d1 .die-y { animation-name: d1-yc; }
  .die-x.d2 .die-y { animation-name: d2-yc; animation-delay: 0.15s; }

  @keyframes d1-yc {
    0% { transform: translateY(-50px); animation-timing-function: ease-in; }
    13% { transform: translateY(0); animation-timing-function: ease-out; }
    24% { transform: translateY(-24px); animation-timing-function: ease-in; }
    35% { transform: translateY(0); animation-timing-function: ease-out; }
    43% { transform: translateY(-10px); animation-timing-function: ease-in; }
    51% { transform: translateY(0); }
    55% { transform: translateY(-3px); }
    58%, 100% { transform: translateY(0); }
  }

  @keyframes d2-yc {
    0% { transform: translateY(-58px); animation-timing-function: ease-in; }
    18% { transform: translateY(0); animation-timing-function: ease-out; }
    30% { transform: translateY(-28px); animation-timing-function: ease-in; }
    41% { transform: translateY(0); animation-timing-function: ease-out; }
    49% { transform: translateY(-12px); animation-timing-function: ease-in; }
    57% { transform: translateY(0); }
    61% { transform: translateY(-3px); }
    64%, 100% { transform: translateY(0); }
  }

  /* Die 1: Translucent Crimson Casino Die */
  .die-x.d1 .dicec-cube {
    position: relative;
    width: 24px;
    height: 24px;
    border: 1.5px solid #fecdd3;
    border-radius: 5px;
    background: radial-gradient(circle at 35% 30%, #f43f5e 0%, #dc2626 50%, #991b1b 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
    animation: d1-spinc 5s infinite;
  }

  /* Die 2: Crisp Ivory Bone Casino Die */
  .die-x.d2 .dicec-cube {
    position: relative;
    width: 24px;
    height: 24px;
    border: 1.5px solid #e2e8f0;
    border-radius: 5px;
    background: radial-gradient(circle at 35% 30%, #ffffff 0%, #f8fafc 55%, #cbd5e1 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    animation: d2-spinc 5s infinite;
  }

  @keyframes d1-spinc {
    0% { transform: rotate(-150deg); }
    13% { transform: rotate(-82deg); }
    24% { transform: rotate(-40deg); }
    35% { transform: rotate(-12deg); }
    49% { transform: rotate(4deg); }
    58%, 100% { transform: rotate(0deg); }
    61% { box-shadow: 0 0 16px rgba(244, 63, 94, 0.9); }
    68% { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); }
  }

  @keyframes d2-spinc {
    0% { transform: rotate(170deg); }
    18% { transform: rotate(96deg); }
    30% { transform: rotate(50deg); }
    41% { transform: rotate(16deg); }
    57% { transform: rotate(-4deg); }
    64%, 100% { transform: rotate(0deg); }
    67% { box-shadow: 0 0 16px rgba(255, 255, 255, 0.95); }
    74% { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); }
  }

  .dicec-face {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  /* Pips for Die 1 (Pure White on Red) */
  .die-x.d1 .dicec-pip {
    position: absolute;
    width: 4.5px;
    height: 4.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.9);
  }

  /* Pips for Die 2 (Jet Black on White) */
  .die-x.d2 .dicec-pip {
    position: absolute;
    width: 4.5px;
    height: 4.5px;
    border-radius: 50%;
    background: #09090b;
  }

  .dicec-face.f2 .dicec-pip.a { left: 3px; top: 3px; }
  .dicec-face.f2 .dicec-pip.b { right: 3px; bottom: 3px; }

  .dicec-face.f3 .dicec-pip.a { left: 3px; top: 3px; }
  .dicec-face.f3 .dicec-pip.b { left: 50%; top: 50%; margin: -2.25px 0 0 -2.25px; }
  .dicec-face.f3 .dicec-pip.c { right: 3px; bottom: 3px; }

  .dicec-face.f4 .dicec-pip.a { left: 3px; top: 3px; }
  .dicec-face.f4 .dicec-pip.b { right: 3px; top: 3px; }
  .dicec-face.f4 .dicec-pip.c { left: 3px; bottom: 3px; }
  .dicec-face.f4 .dicec-pip.d { right: 3px; bottom: 3px; }

  .dicec-face.f5 .dicec-pip.a { left: 3px; top: 3px; }
  .dicec-face.f5 .dicec-pip.b { right: 3px; top: 3px; }
  .dicec-face.f5 .dicec-pip.c { left: 50%; top: 50%; margin: -2.25px 0 0 -2.25px; }
  .dicec-face.f5 .dicec-pip.d { left: 3px; bottom: 3px; }
  .dicec-face.f5 .dicec-pip.e { right: 3px; bottom: 3px; }

  .dicec-face.f6 .dicec-pip.a { left: 3px; top: 2px; }
  .dicec-face.f6 .dicec-pip.b { left: 3px; top: 50%; margin-top: -2.25px; }
  .dicec-face.f6 .dicec-pip.c { left: 3px; bottom: 2px; }
  .dicec-face.f6 .dicec-pip.d { right: 3px; top: 2px; }
  .dicec-face.f6 .dicec-pip.e { right: 3px; top: 50%; margin-top: -2.25px; }
  .dicec-face.f6 .dicec-pip.f { right: 3px; bottom: 2px; }

  .die-x.d1 .dicec-face.f3 { animation: d1-f3c 5s steps(1) infinite; }
  .die-x.d1 .dicec-face.f5 { animation: d1-f5c 5s steps(1) infinite; }
  .die-x.d1 .dicec-face.f4 { animation: d1-f4c 5s steps(1) infinite; }

  @keyframes d1-f3c { 0% { opacity: 1; } 13% { opacity: 0; } 24% { opacity: 1; } 35% { opacity: 0; } }
  @keyframes d1-f5c { 0% { opacity: 0; } 13% { opacity: 1; } 24% { opacity: 0; } 35% { opacity: 1; } 49% { opacity: 0; } }
  @keyframes d1-f4c { 0%, 49% { opacity: 0; } 58% { opacity: 1; } }

  .die-x.d2 .dicec-face.f2 { animation: d2-f2c 5s steps(1) infinite; }
  .die-x.d2 .dicec-face.f4 { animation: d2-f4c 5s steps(1) infinite; }
  .die-x.d2 .dicec-face.f6 { animation: d2-f6c 5s steps(1) infinite; }

  @keyframes d2-f2c { 0% { opacity: 1; } 18% { opacity: 0; } 30% { opacity: 1; } 41% { opacity: 0; } }
  @keyframes d2-f4c { 0% { opacity: 0; } 18% { opacity: 1; } 30% { opacity: 0; } 41% { opacity: 1; } 57% { opacity: 0; } }
  @keyframes d2-f6c { 0%, 57% { opacity: 0; } 64% { opacity: 1; } }

  /* Bounce impact dust puffs */
  .dicec-puff {
    position: absolute;
    bottom: 12px;
    width: 13px;
    height: 4px;
    border-radius: 50%;
    background: rgba(250, 204, 21, 0.4);
    opacity: 0;
  }

  .dicec-puff.p1 { left: 14px; animation: d1-puffc 5s infinite; }
  .dicec-puff.p2 { left: 38px; animation: d1-puffc 5s infinite; animation-delay: 1.1s; }
  .dicec-puff.p3 { left: 26px; animation: d2-puffc 5s infinite; }
  .dicec-puff.p4 { left: 62px; animation: d2-puffc 5s infinite; animation-delay: 1.2s; }

  @keyframes d1-puffc {
    0%, 12% { transform: scale(0.3); opacity: 0; }
    14% { opacity: 0.9; }
    22% { transform: scale(1.5); opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes d2-puffc {
    0%, 17% { transform: scale(0.3); opacity: 0; }
    19% { opacity: 0.9; }
    27% { transform: scale(1.5); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Winning score payout callout */
  .dicec-score {
    position: absolute;
    right: 4px;
    top: 6px;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 1px;
    color: #facc15;
    text-shadow: 0 0 8px rgba(250, 204, 21, 0.9);
    opacity: 0;
    animation: dicec-score 5s steps(1) infinite;
  }

  @keyframes dicec-score {
    0%, 66% { opacity: 0; }
    70%, 92% { opacity: 1; }
    96%, 100% { opacity: 0; }
  }
  `,
};

const diceMarkup = {
  v1: `
      <div class="dice">
        <div class="dice-puff p1"></div>
        <div class="dice-puff p2"></div>
        <div class="dice-floor"></div>
        <div class="dice-x">
          <div class="dice-y">
            <div class="dice-cube">
              <div class="dice-face f3">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
              </div>
              <div class="dice-face f5">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
                <div class="dice-pip d"></div><div class="dice-pip e"></div>
              </div>
              <div class="dice-face f6">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
                <div class="dice-pip d"></div><div class="dice-pip e"></div><div class="dice-pip f"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="dice-score">SIX &#9856;</div>
      </div>
    `,
  v2: `
      <div class="dice">
        <div class="dice-puff p1"></div>
        <div class="dice-puff p2"></div>
        <div class="dice-puff p3"></div>
        <div class="dice-puff p4"></div>
        <div class="dice-floor"></div>
        <div class="die-x d1">
          <div class="die-y">
            <div class="dice-cube">
              <div class="dice-face f3">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
              </div>
              <div class="dice-face f5">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
                <div class="dice-pip d"></div><div class="dice-pip e"></div>
              </div>
              <div class="dice-face f4">
                <div class="dice-pip a"></div><div class="dice-pip b"></div>
                <div class="dice-pip c"></div><div class="dice-pip d"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="die-x d2">
          <div class="die-y">
            <div class="dice-cube">
              <div class="dice-face f2">
                <div class="dice-pip a"></div><div class="dice-pip b"></div>
              </div>
              <div class="dice-face f4">
                <div class="dice-pip a"></div><div class="dice-pip b"></div>
                <div class="dice-pip c"></div><div class="dice-pip d"></div>
              </div>
              <div class="dice-face f6">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
                <div class="dice-pip d"></div><div class="dice-pip e"></div><div class="dice-pip f"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="dice-score">4 + 6 = 10</div>
      </div>
    `,
  v3: `
      <div class="dicec">
        <div class="dicec-puff p1"></div>
        <div class="dicec-puff p2"></div>
        <div class="dicec-puff p3"></div>
        <div class="dicec-puff p4"></div>
        <div class="dicec-floor"></div>
        <div class="die-x d1">
          <div class="die-y">
            <div class="dicec-cube">
              <div class="dicec-face f3">
                <div class="dicec-pip a"></div><div class="dicec-pip b"></div><div class="dicec-pip c"></div>
              </div>
              <div class="dicec-face f5">
                <div class="dicec-pip a"></div><div class="dicec-pip b"></div><div class="dicec-pip c"></div>
                <div class="dicec-pip d"></div><div class="dicec-pip e"></div>
              </div>
              <div class="dicec-face f4">
                <div class="dicec-pip a"></div><div class="dicec-pip b"></div>
                <div class="dicec-pip c"></div><div class="dicec-pip d"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="die-x d2">
          <div class="die-y">
            <div class="dicec-cube">
              <div class="dicec-face f2">
                <div class="dicec-pip a"></div><div class="dicec-pip b"></div>
              </div>
              <div class="dicec-face f4">
                <div class="dicec-pip a"></div><div class="dicec-pip b"></div>
                <div class="dicec-pip c"></div><div class="dicec-pip d"></div>
              </div>
              <div class="dicec-face f6">
                <div class="dicec-pip a"></div><div class="dicec-pip b"></div><div class="dicec-pip c"></div>
                <div class="dicec-pip d"></div><div class="dicec-pip e"></div><div class="dicec-pip f"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="dicec-score">4 + 6 = 10</div>
      </div>
    `,
};

class ConceptDice extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${diceStyles[version] || diceStyles.v3}</style>${diceMarkup[version] || diceMarkup.v3}`;
  }
}

if (!customElements.get('concept-dice')) {
  customElements.define('concept-dice', ConceptDice);
}
