// Jack-in-the-Box: v1 and v2 preserved.
// v3 adds vintage circus tin-toy colorization:
// royal cobalt blue box with gold circus harlequin diamonds, ruby red hinged lid with brass pin,
// metallic steel coil spring, hand-painted porcelain jester with red & yellow fool's cap,
// brass winding crank with cherry-red knob, rainbow music notes, and golden pop flash.
const jackboxStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .jb {
    width: 100px;
    height: 96px;
    position: relative;
  }

  .jb-box {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 56px;
    height: 44px;
    margin-left: -28px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.7), rgba(0, 70, 14, 0.9));
    border: 2px solid var(--accent, #00cc00);
    overflow: hidden;
  }

  .jb-box::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    top: 8px;
    bottom: 8px;
    border: 1px solid rgba(140, 255, 170, 0.4);
    border-radius: 2px;
    background:
      repeating-linear-gradient(45deg,
        rgba(0, 204, 0, 0.12) 0 4px,
        transparent 4px 8px);
  }

  .jb-lid {
    position: absolute;
    left: 50%;
    bottom: 50px;
    width: 58px;
    height: 8px;
    margin-left: -29px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.8), rgba(0, 130, 26, 0.85));
    border: 2px solid var(--accent, #00cc00);
    transform-origin: 0% 100%;
    animation: jb-lid 5s ease-out infinite;
    z-index: 4;
  }

  @keyframes jb-lid {
    0%, 54% { transform: rotate(0deg); }
    60% { transform: rotate(-116deg); }
    82% { transform: rotate(-116deg); }
    90% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  .jb-jack {
    position: absolute;
    left: 50%;
    bottom: 48px;
    width: 24px;
    height: 0;
    margin-left: -12px;
    animation: jb-jack 5s ease-out infinite;
    z-index: 3;
  }

  @keyframes jb-jack {
    0%, 56% { height: 0; }
    62% { height: 42px; }
    68% { height: 34px; }
    74% { height: 40px; }
    80% { height: 36px; }
    88% { height: 0; }
    100% { height: 0; }
  }

  .jb-spring {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 16px;
    margin-left: -8px;
    top: 8px;
    background:
      repeating-linear-gradient(180deg,
        transparent 0 2px,
        rgba(140, 255, 170, 0.75) 2px 4px);
    border-radius: 2px;
  }

  .jb-head {
    position: absolute;
    left: 50%;
    top: -4px;
    width: 20px;
    height: 16px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 65%);
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: jb-bob 0.4s ease-in-out infinite;
  }

  .jb-head::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 6px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 8px 0 0 #041a0a;
  }

  .jb-head::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    width: 8px;
    height: 3px;
    border-radius: 0 0 6px 6px;
    background: rgba(0, 90, 18, 0.9);
  }

  @keyframes jb-bob {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  .jb-hat {
    position: absolute;
    left: 50%;
    top: -10px;
    width: 22px;
    height: 8px;
    margin-left: -11px;
    clip-path: polygon(50% 100%, 0 40%, 15% 0, 40% 40%, 60% 0, 85% 40%, 100% 40%);
    background: rgba(190, 255, 205, 0.85);
  }

  .jb-note {
    position: absolute;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: #baffc9;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: jb-note 5s infinite;
  }

  .jb-note.n1 { left: 20px; bottom: 44px; }
  .jb-note.n2 { left: 68px; bottom: 40px; animation-delay: 0.8s; }
  .jb-note.n3 { left: 42px; bottom: 46px; animation-delay: 1.6s; }

  @keyframes jb-note {
    0%, 4% { transform: translateY(0); opacity: 0; }
    12% { opacity: 1; }
    30% { transform: translateY(-16px) translateX(3px); opacity: 0; }
    56%, 100% { opacity: 0; }
  }

  .jb-crank {
    position: absolute;
    right: 14px;
    bottom: 26px;
    width: 0;
    height: 0;
    animation: jb-crank 5s linear infinite;
  }

  @keyframes jb-crank {
    0%, 54% { transform: rotate(var(--r, 0deg)); }
    100% { transform: rotate(0deg); }
  }

  .jb-crank-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 12px;
    height: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
    animation: jb-crankspin 1.2s linear infinite;
  }

  @keyframes jb-crankspin {
    to { transform: rotate(360deg); }
  }

  .jb-crank-knob {
    position: absolute;
    left: 11px;
    top: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  .jb-flash {
    position: absolute;
    left: 50%;
    bottom: 56px;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214, 255, 224, 0.5), transparent 70%);
    opacity: 0;
    animation: jb-flash 5s steps(1) infinite;
    z-index: 2;
  }

  @keyframes jb-flash {
    0%, 56% { opacity: 0; }
    58%, 62% { opacity: 1; }
    66%, 100% { opacity: 0; }
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

  .jb {
    width: 100px;
    height: 96px;
    position: relative;
  }

  .jb-box {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 56px;
    height: 44px;
    margin-left: -28px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.7), rgba(0, 70, 14, 0.9));
    border: 2px solid var(--accent, #00cc00);
    overflow: hidden;
  }

  .jb-box::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    top: 8px;
    bottom: 8px;
    border: 1px solid rgba(140, 255, 170, 0.4);
    border-radius: 2px;
    background:
      repeating-linear-gradient(45deg,
        rgba(0, 204, 0, 0.12) 0 4px,
        transparent 4px 8px);
  }

  .jb-lid {
    position: absolute;
    left: 50%;
    bottom: 52px;
    width: 58px;
    height: 8px;
    margin-left: -29px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.8), rgba(0, 130, 26, 0.85));
    border: 2px solid var(--accent, #00cc00);
    transform-origin: 0% 100%;
    animation: jb-lid 5s ease-out infinite;
    z-index: 4;
  }

  .jb-lid::after {
    content: '';
    position: absolute;
    left: -2px;
    bottom: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  @keyframes jb-lid {
    0%, 54% { transform: rotate(0deg); }
    60% { transform: rotate(-95deg); }
    82% { transform: rotate(-95deg); }
    88% { transform: rotate(3deg); }
    92%, 100% { transform: rotate(0deg); }
  }

  .jb-jack {
    position: absolute;
    left: 50%;
    bottom: 48px;
    width: 24px;
    height: 0;
    margin-left: -12px;
    overflow: hidden;
    animation: jb-jack 5s ease-out infinite;
    z-index: 3;
  }

  @keyframes jb-jack {
    0%, 56% { height: 0; }
    62% { height: 46px; }
    68% { height: 38px; }
    74% { height: 44px; }
    80% { height: 40px; }
    88% { height: 0; }
    100% { height: 0; }
  }

  .jb-spring {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 16px;
    margin-left: -8px;
    top: 26px;
    background:
      repeating-linear-gradient(180deg,
        transparent 0 2px,
        rgba(140, 255, 170, 0.75) 2px 4px);
    border-radius: 2px;
  }

  .jb-head {
    position: absolute;
    left: 50%;
    top: 9px;
    width: 20px;
    height: 16px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 65%);
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: jb-bob 0.4s ease-in-out infinite;
  }

  .jb-head::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 6px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 8px 0 0 #041a0a;
  }

  .jb-head::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    width: 8px;
    height: 3px;
    border-radius: 0 0 6px 6px;
    background: rgba(0, 90, 18, 0.9);
  }

  @keyframes jb-bob {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  .jb-hat {
    position: absolute;
    left: 50%;
    top: -7px;
    width: 22px;
    height: 8px;
    margin-left: -11px;
    clip-path: polygon(50% 100%, 0 40%, 15% 0, 40% 40%, 60% 0, 85% 40%, 100% 40%);
    background: rgba(190, 255, 205, 0.85);
  }

  .jb-note {
    position: absolute;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: #baffc9;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: jb-note 5s infinite;
  }

  .jb-note.n1 { left: 20px; bottom: 44px; }
  .jb-note.n2 { left: 68px; bottom: 40px; animation-delay: 0.8s; }
  .jb-note.n3 { left: 42px; bottom: 46px; animation-delay: 1.6s; }

  @keyframes jb-note {
    0%, 4% { transform: translateY(0); opacity: 0; }
    12% { opacity: 1; }
    30% { transform: translateY(-16px) translateX(3px); opacity: 0; }
    56%, 100% { opacity: 0; }
  }

  .jb-crank {
    position: absolute;
    right: 22px;
    bottom: 28px;
    width: 0;
    height: 0;
    animation: jb-crank 5s linear infinite;
  }

  .jb-crank::before {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0, 90, 18, 0.95);
    border: 1.5px solid rgba(140, 255, 170, 0.9);
  }

  @keyframes jb-crank {
    0%, 54% { transform: rotate(var(--r, 0deg)); }
    100% { transform: rotate(0deg); }
  }

  .jb-crank-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 12px;
    height: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
    animation: jb-crankspin 1.2s linear infinite;
  }

  @keyframes jb-crankspin {
    to { transform: rotate(360deg); }
  }

  .jb-crank-knob {
    position: absolute;
    left: 11px;
    top: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  .jb-flash {
    position: absolute;
    left: 50%;
    bottom: 56px;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214, 255, 224, 0.5), transparent 70%);
    opacity: 0;
    animation: jb-flash 5s steps(1) infinite;
    z-index: 2;
  }

  @keyframes jb-flash {
    0%, 56% { opacity: 0; }
    58%, 62% { opacity: 1; }
    66%, 100% { opacity: 0; }
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

  /* v3: Vintage circus tin-toy Jack-in-the-Box with cobalt blue box,
     golden harlequin diamonds, cherry-red hinged lid with brass rivet,
     porcelain clown, brass crank, rainbow musical notes, and pop flash. */
  .jbc {
    width: 100px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Tin toy box in royal cobalt blue */
  .jbc-box {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 56px;
    height: 44px;
    margin-left: -28px;
    border-radius: 3px;
    background: linear-gradient(180deg, #1d4ed8 0%, #1e3a8a 100%);
    border: 2px solid #fbbf24;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.4);
    overflow: hidden;
  }

  /* Golden harlequin diamond pattern */
  .jbc-box::after {
    content: '';
    position: absolute;
    left: 6px;
    right: 6px;
    top: 6px;
    bottom: 6px;
    border: 1px solid rgba(250, 204, 21, 0.6);
    border-radius: 2px;
    background:
      repeating-linear-gradient(45deg,
        rgba(250, 204, 21, 0.3) 0 4px,
        transparent 4px 8px);
  }

  /* Cherry-red hinged lid */
  .jbc-lid {
    position: absolute;
    left: 50%;
    bottom: 52px;
    width: 58px;
    height: 8px;
    margin-left: -29px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, #ef4444 0%, #b91c1c 100%);
    border: 1.5px solid #fbbf24;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    transform-origin: 0% 100%;
    animation: jbc-lid 5s ease-out infinite;
    z-index: 4;
  }

  /* Brass hinge pin */
  .jbc-lid::after {
    content: '';
    position: absolute;
    left: -2px;
    bottom: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 2px #ca8a04;
  }

  @keyframes jbc-lid {
    0%, 54% { transform: rotate(0deg); }
    60% { transform: rotate(-95deg); }
    82% { transform: rotate(-95deg); }
    88% { transform: rotate(3deg); }
    92%, 100% { transform: rotate(0deg); }
  }

  /* Pop-up jack */
  .jbc-jack {
    position: absolute;
    left: 50%;
    bottom: 48px;
    width: 24px;
    height: 0;
    margin-left: -12px;
    overflow: hidden;
    animation: jbc-jack 5s ease-out infinite;
    z-index: 3;
  }

  @keyframes jbc-jack {
    0%, 56% { height: 0; }
    62% { height: 46px; }
    68% { height: 38px; }
    74% { height: 44px; }
    80% { height: 40px; }
    88% { height: 0; }
    100% { height: 0; }
  }

  /* Spring steel coil */
  .jbc-spring {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 16px;
    margin-left: -8px;
    top: 26px;
    background:
      repeating-linear-gradient(180deg,
        transparent 0 2px,
        #cbd5e1 2px 4px);
    border-radius: 2px;
    box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.8);
  }

  /* Porcelain jester head */
  .jbc-head {
    position: absolute;
    left: 50%;
    top: 9px;
    width: 20px;
    height: 16px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fed7aa 65%, #fdba74 100%);
    border: 1px solid #fed7aa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    animation: jbc-bob 0.4s ease-in-out infinite;
  }

  /* Jester eyes and rosy cheeks */
  .jbc-head::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 6px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #09090b;
    box-shadow: 8px 0 0 #09090b, -1px 3px 0 #fb7185, 9px 3px 0 #fb7185;
  }

  /* Big painted smile */
  .jbc-head::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    width: 8px;
    height: 3px;
    border-radius: 0 0 6px 6px;
    background: #e11d48;
  }

  @keyframes jbc-bob {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  /* Red and yellow jester fool's cap with bell tips */
  .jbc-hat {
    position: absolute;
    left: 50%;
    top: -7px;
    width: 22px;
    height: 8px;
    margin-left: -11px;
    clip-path: polygon(50% 100%, 0 40%, 15% 0, 40% 40%, 60% 0, 85% 40%, 100% 40%);
    background: linear-gradient(90deg, #ef4444 0 50%, #facc15 50% 100%);
    box-shadow: 0 0 4px rgba(250, 204, 21, 0.6);
  }

  /* Rainbow musical melody notes */
  .jbc-note {
    position: absolute;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    opacity: 0;
    animation: jbc-note 5s infinite;
  }

  .jbc-note.n1 { left: 20px; bottom: 44px; color: #38bdf8; text-shadow: 0 0 6px #38bdf8; }
  .jbc-note.n2 { left: 68px; bottom: 40px; color: #fde047; text-shadow: 0 0 6px #fde047; animation-delay: 0.8s; }
  .jbc-note.n3 { left: 42px; bottom: 46px; color: #f472b6; text-shadow: 0 0 6px #f472b6; animation-delay: 1.6s; }

  @keyframes jbc-note {
    0%, 4% { transform: translateY(0); opacity: 0; }
    12% { opacity: 1; }
    30% { transform: translateY(-16px) translateX(3px); opacity: 0; }
    56%, 100% { opacity: 0; }
  }

  /* Brass winding crank */
  .jbc-crank {
    position: absolute;
    right: 22px;
    bottom: 28px;
    width: 0;
    height: 0;
    animation: jbc-crank 5s linear infinite;
  }

  .jbc-crank::before {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ca8a04;
    border: 1.5px solid #fde047;
  }

  @keyframes jbc-crank {
    0%, 54% { transform: rotate(var(--r, 0deg)); }
    100% { transform: rotate(0deg); }
  }

  .jbc-crank-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 12px;
    height: 2px;
    background: #facc15;
    transform-origin: 0% 50%;
    animation: jbc-crankspin 1.2s linear infinite;
  }

  @keyframes jbc-crankspin {
    to { transform: rotate(360deg); }
  }

  .jbc-crank-knob {
    position: absolute;
    left: 11px;
    top: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  }

  /* Golden pop celebratory flash */
  .jbc-flash {
    position: absolute;
    left: 50%;
    bottom: 56px;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(250, 204, 21, 0.8), rgba(245, 158, 11, 0.4) 50%, transparent 70%);
    box-shadow: 0 0 16px rgba(250, 204, 21, 0.9);
    opacity: 0;
    animation: jbc-flash 5s steps(1) infinite;
    z-index: 2;
  }

  @keyframes jbc-flash {
    0%, 56% { opacity: 0; }
    58%, 62% { opacity: 1; }
    66%, 100% { opacity: 0; }
  }
  `,
};

const jackboxMarkup = {
  v1: `
      <div class="jb">
        <div class="jb-note n1">&#9834;</div>
        <div class="jb-note n2">&#9835;</div>
        <div class="jb-note n3">&#9834;</div>
        <div class="jb-flash"></div>
        <div class="jb-jack">
          <div class="jb-spring"></div>
          <div class="jb-head"></div>
          <div class="jb-hat"></div>
        </div>
        <div class="jb-box"></div>
        <div class="jb-lid"></div>
        <div class="jb-crank">
          <div class="jb-crank-arm"></div>
          <div class="jb-crank-knob"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="jb">
        <div class="jb-note n1">&#9834;</div>
        <div class="jb-note n2">&#9835;</div>
        <div class="jb-note n3">&#9834;</div>
        <div class="jb-flash"></div>
        <div class="jb-jack">
          <div class="jb-spring"></div>
          <div class="jb-head">
            <div class="jb-hat"></div>
          </div>
        </div>
        <div class="jb-box"></div>
        <div class="jb-lid"></div>
        <div class="jb-crank">
          <div class="jb-crank-arm"></div>
          <div class="jb-crank-knob"></div>
        </div>
      </div>
    `,
  v3: `
      <div class="jbc">
        <div class="jbc-note n1">&#9834;</div>
        <div class="jbc-note n2">&#9835;</div>
        <div class="jbc-note n3">&#9834;</div>
        <div class="jbc-flash"></div>
        <div class="jbc-jack">
          <div class="jbc-spring"></div>
          <div class="jbc-head">
            <div class="jbc-hat"></div>
          </div>
        </div>
        <div class="jbc-box"></div>
        <div class="jbc-lid"></div>
        <div class="jbc-crank">
          <div class="jbc-crank-arm"></div>
          <div class="jbc-crank-knob"></div>
        </div>
      </div>
    `,
};

class ConceptJackbox extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${jackboxStyles[version] || jackboxStyles.v3}</style>${jackboxMarkup[version] || jackboxMarkup.v3}`;
  }
}

if (!customElements.get('concept-jackbox')) {
  customElements.define('concept-jackbox', ConceptJackbox);
}
