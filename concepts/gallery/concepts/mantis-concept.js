// Praying mantis in profile facing left on branch with raptorial strike.
// v1 and v2 are preserved.
// v3 adds full color: hardwood branch, emerald & lime green body,
// amber compound eye, razor spined raptorial arms, and iridescent cyan fly.
const mantisStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A praying mantis in ambush, in profile facing left: segmented
     abdomen raised behind, long neck-like thorax, triangular head
     tracking a passing fly, raptorial forelegs folded in the prayer
     pose - then a lightning strike snatches the fly out of the air. */
  .mt {
    width: 108px;
    height: 92px;
    position: relative;
  }

  /* Perch twig. */
  .mt-twig {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 12px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 110, 22, 0.8), transparent);
  }

  /* Whole body sways (predatory stalking). */
  .mt-body {
    position: absolute;
    left: 34px;
    bottom: 15px;
    width: 66px;
    height: 60px;
    transform-origin: 50% 100%;
    animation: mt-sway 3s ease-in-out infinite;
  }

  @keyframes mt-sway {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  /* Walking legs down to the twig. */
  .mt-leg {
    position: absolute;
    width: 2px;
    background: rgba(0, 150, 30, 0.75);
    border-radius: 1px;
    transform-origin: 50% 0%;
  }

  .mt-leg.f1 { left: 40px; top: 30px; height: 30px; transform: rotate(18deg); }
  .mt-leg.f2 { left: 48px; top: 32px; height: 28px; transform: rotate(-22deg); }
  .mt-leg.f3 { left: 44px; top: 32px; height: 28px; transform: rotate(-6deg); opacity: 0.6; }

  /* Segmented abdomen, raised behind. */
  .mt-abdomen {
    position: absolute;
    left: 28px;
    top: 26px;
    width: 34px;
    height: 13px;
    border-radius: 50% 60% 40% 50% / 60% 70% 50% 40%;
    background:
      linear-gradient(180deg, rgba(190, 255, 205, 0.35), transparent 55%),
      repeating-linear-gradient(100deg,
        rgba(190, 255, 205, 0.55) 0 3px,
        rgba(0, 140, 28, 0.8) 3px 7px);
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform: rotate(-16deg);
    transform-origin: 10% 60%;
  }

  /* Folded wings lying over the abdomen. */
  .mt-wing {
    position: absolute;
    left: 31px;
    top: 23px;
    width: 30px;
    height: 8px;
    border-radius: 50% 70% 40% 40% / 60% 80% 40% 40%;
    background: linear-gradient(100deg, rgba(140, 255, 170, 0.45), rgba(0, 110, 22, 0.5));
    transform: rotate(-16deg);
    transform-origin: 10% 60%;
  }

  /* Thorax: the long "neck" rising to the head. */
  .mt-thorax {
    position: absolute;
    left: 16px;
    top: 22px;
    width: 16px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 170, 34, 0.9), rgba(0, 140, 28, 0.85));
    transform: rotate(32deg);
    transform-origin: 100% 50%;
  }

  /* Triangular head, swivels to track prey. */
  .mt-head {
    position: absolute;
    left: 6px;
    top: 8px;
    width: 15px;
    height: 11px;
    clip-path: polygon(0 60%, 30% 0, 100% 20%, 78% 100%, 18% 100%);
    background: radial-gradient(circle at 55% 35%, #f2ffdd, #2a8a3e 75%);
    transform-origin: 60% 90%;
    animation: mt-track 5s ease-in-out infinite;
  }

  /* Big compound eyes. */
  .mt-head::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 3px;
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 8px 1px 0 #041a0a;
  }

  /* Antennae. */
  .mt-ant {
    position: absolute;
    width: 1px;
    height: 13px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.7));
    transform-origin: 50% 100%;
  }

  .mt-ant.a1 { left: 5px; top: -12px; transform: rotate(-26deg); }
  .mt-ant.a2 { left: 9px; top: -13px; transform: rotate(6deg); }

  @keyframes mt-track {
    0%, 20% { transform: rotate(-10deg); }
    /* Follows the fly in. */
    46% { transform: rotate(8deg); }
    /* Locks and strikes. */
    54%, 62% { transform: rotate(12deg); }
    80%, 100% { transform: rotate(-10deg); }
  }

  /* Raptorial forelegs: femur + folded tibia in the prayer pose,
     snapping open toward the fly on the strike. */
  .mt-arm {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 20px;
    height: 16px;
    transform-origin: 60% 20%;
    animation: mt-strike 5s ease-in-out infinite;
  }

  .mt-arm.far {
    opacity: 0.6;
    left: 14px;
    top: 22px;
  }

  .mt-femur {
    position: absolute;
    left: 0;
    top: 4px;
    width: 14px;
    height: 3.5px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.85);
    transform: rotate(35deg);
    transform-origin: 100% 50%;
  }

  /* The snap-trap tibia (spined), folded back against the femur. */
  .mt-tibia {
    position: absolute;
    left: -12px;
    top: 0;
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      rgba(214, 255, 224, 0.9) 0 2px,
      rgba(0, 130, 26, 0.8) 2px 3px);
    transform-origin: 100% 50%;
    animation: mt-tibia 5s ease-in-out infinite;
  }

  @keyframes mt-strike {
    0%, 52% { transform: rotate(0deg) translate(0, 0); }
    /* Lightning lunge toward the fly. */
    57% { transform: rotate(16deg) translate(-7px, -3px); }
    64% { transform: rotate(0deg) translate(0, 0); }
    100% { transform: rotate(0deg) translate(0, 0); }
  }

  @keyframes mt-tibia {
    0%, 52% { transform: rotate(-140deg); }
    /* Snaps open to grab. */
    57% { transform: rotate(-25deg); }
    64% { transform: rotate(-140deg); }
    100% { transform: rotate(-140deg); }
  }

  /* The fly it's tracking. */
  .mt-fly {
    position: absolute;
    top: 20px;
    left: 0;
    width: 5px;
    height: 4px;
    animation: mt-fly 5s ease-in-out infinite;
  }

  .mt-fly::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.85);
  }

  .mt-fly::after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 8px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.4);
    animation: mt-flywing 0.08s steps(2) infinite;
  }

  @keyframes mt-flywing {
    0% { transform: scaleY(1); }
    100% { transform: scaleY(0.5); }
  }

  @keyframes mt-fly {
    0% { transform: translate(0, -8px); opacity: 1; }
    40% { transform: translate(26px, 8px); opacity: 1; }
    /* Hovers into range... */
    54% { transform: translate(38px, 15px); opacity: 1; }
    /* ...snatched at the strike. */
    58% { transform: translate(38px, 15px); opacity: 1; }
    61% { transform: translate(38px, 15px); opacity: 0; }
    100% { opacity: 0; }
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

  .mt {
    width: 112px;
    height: 96px;
    position: relative;
  }

  /* Branch. */
  .mt-branch {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 14px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 140, 28, 0.7), rgba(0, 90, 18, 0.8));
  }

  .mt-branch::after {
    content: '';
    position: absolute;
    left: 18%;
    top: -3px;
    width: 10px;
    height: 3px;
    border-radius: 2px;
    background: rgba(0, 120, 24, 0.7);
    transform: rotate(-30deg);
  }

  /* The whole insect rocks gently in ambush, lunging on the strike. */
  .mt-bug {
    position: absolute;
    left: 30px;
    bottom: 17px;
    width: 0;
    height: 0;
    animation: mt-rock 7s ease-in-out infinite;
    transform-origin: 14px 0;
  }

  @keyframes mt-rock {
    0%, 38%, 100% { transform: rotate(0deg) translateX(0); }
    12%, 30% { transform: rotate(2deg) translateX(1px); }
    /* The lunge rides the strike window. */
    46% { transform: rotate(-4deg) translateX(-4px); }
    50% { transform: rotate(0deg) translateX(0); }
  }

  /* Walking legs: two visible pairs of thin struts to the branch. */
  .mt-leg {
    position: absolute;
    bottom: 0;
    width: 2px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: 50% 0;
  }

  .mt-leg.k1 { left: 8px; height: 16px; transform: rotate(24deg); }
  .mt-leg.k2 { left: 16px; height: 18px; transform: rotate(-18deg); top: -16px; bottom: auto; }
  .mt-leg.k2::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 2px;
    height: 8px;
    background: inherit;
    transform: rotate(40deg);
    transform-origin: 50% 0;
  }
  .mt-leg.k3 { left: 26px; height: 15px; transform: rotate(30deg); }

  /* Abdomen: long striped teardrop swept up behind. */
  .mt-abdomen {
    position: absolute;
    left: 6px;
    top: -26px;
    width: 44px;
    height: 13px;
    border-radius: 40% 60% 60% 30%;
    background:
      repeating-linear-gradient(100deg,
        rgba(0, 180, 36, 0.85) 0 5px,
        rgba(0, 110, 22, 0.85) 5px 10px);
    border: 1px solid rgba(0, 204, 0, 0.55);
    transform: rotate(-18deg);
    transform-origin: 8% 60%;
    animation: mt-breathe 7s ease-in-out infinite;
  }

  @keyframes mt-breathe {
    0%, 100% { transform: rotate(-18deg); }
    50% { transform: rotate(-15deg); }
  }

  /* Prothorax: the long "neck", raised steeply forward. */
  .mt-thorax {
    position: absolute;
    left: 2px;
    top: -24px;
    width: 30px;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, rgba(160, 255, 185, 0.9), rgba(0, 150, 30, 0.9));
    transform: rotate(-38deg);
    transform-origin: 100% 50%;
  }

  /* Head: triangle pointing down-left, cocked; big compound eye. */
  .mt-head {
    position: absolute;
    left: -26px;
    top: -44px;
    width: 15px;
    height: 12px;
    clip-path: polygon(0 78%, 62% 0, 100% 55%, 55% 100%);
    background: linear-gradient(120deg, rgba(190, 255, 205, 0.95), rgba(0, 150, 30, 0.95));
    animation: mt-head 7s ease-in-out infinite;
    transform-origin: 80% 60%;
  }

  @keyframes mt-head {
    0%, 30%, 100% { transform: rotate(0deg); }
    /* Tracks the fly in. */
    36%, 44% { transform: rotate(-10deg); }
    52%, 60% { transform: rotate(6deg); }
  }

  .mt-eye {
    position: absolute;
    left: -19px;
    top: -41px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 0 0 3px rgba(0, 204, 0, 0.8);
    z-index: 2;
  }

  /* Antennae: two thin whiskers off the head crown. */
  .mt-antenna {
    position: absolute;
    left: -22px;
    top: -55px;
    width: 16px;
    height: 12px;
    border-left: 1.5px solid rgba(140, 255, 170, 0.65);
    border-top: 1.5px solid transparent;
    border-radius: 60% 0 0 0 / 100% 0 0 0;
    transform: rotate(-14deg);
    transform-origin: 0 100%;
    animation: mt-antenna 2.6s ease-in-out infinite;
  }

  .mt-antenna.a2 {
    transform: rotate(6deg);
    animation-delay: -1.3s;
  }

  @keyframes mt-antenna {
    0%, 100% { transform: rotate(var(--wig, -14deg)); }
    50% { transform: rotate(calc(var(--wig, -14deg) + 8deg)); }
  }

  .mt-antenna.a1 { --wig: -14deg; }
  .mt-antenna.a2 { --wig: 6deg; }

  /* Raptorial forelegs: femur folded up, tibia folded back against it —
     the prayer pose. On the strike both segments whip open toward the
     fly, then refold. Origin at the thorax's front. */
  .mt-arm {
    position: absolute;
    left: -24px;
    top: -34px;
    width: 14px;
    height: 3px;
    border-radius: 2px;
    background: rgba(170, 255, 190, 0.95);
    transform-origin: 100% 50%;
    animation: mt-femur 7s infinite;
    z-index: 1;
  }

  .mt-forearm {
    position: absolute;
    right: 100%;
    top: 0;
    width: 12px;
    height: 2.5px;
    border-radius: 2px;
    background:
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.95) 0 2px,
        rgba(120, 220, 145, 0.9) 2px 4px);
    transform-origin: 100% 50%;
    animation: mt-tibia 7s infinite;
  }

  .mt-arm.b2 { top: -33px; opacity: 0.75; animation-delay: 0.04s; }
  .mt-arm.b2 .mt-forearm { animation-delay: 0.04s; }

  /* Folded: femur ~-120deg (up-back), tibia folded ~150deg against it.
     Strike at 45-49%: femur sweeps to -10deg, tibia flings to ~10deg. */
  @keyframes mt-femur {
    0%, 42%, 100% { transform: rotate(-108deg); }
    45%, 47% { transform: rotate(-15deg); }
    54% { transform: rotate(-108deg); }
  }

  @keyframes mt-tibia {
    0%, 42%, 100% { transform: rotate(-142deg); }
    45%, 47% { transform: rotate(-15deg); }
    54% { transform: rotate(-142deg); }
  }

  /* The fly: buzzes in from the left, jinks, and is snatched at 46%. */
  .mt-fly {
    position: absolute;
    left: 6px;
    top: 26px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.8);
    opacity: 0;
    animation: mt-fly 7s infinite;
  }

  .mt-fly::after {
    content: '';
    position: absolute;
    left: -1px;
    top: -3px;
    width: 6px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.4);
    filter: blur(0.5px);
  }

  @keyframes mt-fly {
    0%, 18% { opacity: 0; transform: translate(0, 0); }
    24% { opacity: 1; transform: translate(6px, -4px); }
    30% { transform: translate(12px, 2px); }
    36% { transform: translate(16px, -3px); }
    42%, 45% { opacity: 1; transform: translate(19px, 0); }
    /* Snatched. */
    47%, 100% { opacity: 0; transform: translate(19px, 0); }
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

  /* v3: Full color praying mantis with rich hardwood branch,
     vibrant emerald & lime body, amber compound eyes, spined raptorial arms,
     and iridescent cyan bottle fly */
  .mtc {
    width: 112px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Hardwood Garden Branch */
  .mtc-branch {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 14px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #78350f 0%, #451a03 60%, #291002 100%);
    border-top: 0.5px solid #a16207;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  .mtc-branch::after {
    content: '';
    position: absolute;
    left: 18%;
    top: -3px;
    width: 10px;
    height: 3px;
    border-radius: 2px;
    background: #451a03;
    transform: rotate(-30deg);
  }

  /* Ambush Rock & Strike Motion */
  .mtc-bug {
    position: absolute;
    left: 30px;
    bottom: 17px;
    width: 0;
    height: 0;
    animation: mtc-rock 7s ease-in-out infinite;
    transform-origin: 14px 0;
  }

  @keyframes mtc-rock {
    0%, 38%, 100% { transform: rotate(0deg) translateX(0); }
    12%, 30% { transform: rotate(2deg) translateX(1px); }
    46% { transform: rotate(-4deg) translateX(-4px); }
    50% { transform: rotate(0deg) translateX(0); }
  }

  /* Slender Green Walking Struts */
  .mtc-leg {
    position: absolute;
    bottom: 0;
    width: 2px;
    border-radius: 1px;
    background: #4ade80;
    box-shadow: 0 0 2px #22c55e;
    transform-origin: 50% 0;
  }

  .mtc-leg.k1 { left: 8px; height: 16px; transform: rotate(24deg); }
  .mtc-leg.k2 { left: 16px; height: 18px; transform: rotate(-18deg); top: -16px; bottom: auto; }
  .mtc-leg.k2::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 2px;
    height: 8px;
    background: inherit;
    transform: rotate(40deg);
    transform-origin: 50% 0;
  }
  .mtc-leg.k3 { left: 26px; height: 15px; transform: rotate(30deg); }

  /* Upswept Emerald & Lime Striped Abdomen */
  .mtc-abdomen {
    position: absolute;
    left: 6px;
    top: -26px;
    width: 44px;
    height: 13px;
    border-radius: 40% 60% 60% 30%;
    background:
      repeating-linear-gradient(100deg,
        #22c55e 0 5px,
        #15803d 5px 10px);
    border: 1px solid #4ade80;
    box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
    transform: rotate(-18deg);
    transform-origin: 8% 60%;
    animation: mtc-breathe 7s ease-in-out infinite;
  }

  @keyframes mtc-breathe {
    0%, 100% { transform: rotate(-18deg); }
    50% { transform: rotate(-15deg); }
  }

  /* Elongated Prothorax Neck */
  .mtc-thorax {
    position: absolute;
    left: 2px;
    top: -24px;
    width: 30px;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, #86efac 0%, #22c55e 60%, #16a34a 100%);
    border: 0.5px solid #4ade80;
    transform: rotate(-38deg);
    transform-origin: 100% 50%;
  }

  /* Triangular Swiveling Head */
  .mtc-head {
    position: absolute;
    left: -26px;
    top: -44px;
    width: 15px;
    height: 12px;
    clip-path: polygon(0 78%, 62% 0, 100% 55%, 55% 100%);
    background: linear-gradient(120deg, #bbf7d0 0%, #22c55e 60%, #15803d 100%);
    border: 0.5px solid #86efac;
    animation: mtc-head 7s ease-in-out infinite;
    transform-origin: 80% 60%;
  }

  @keyframes mtc-head {
    0%, 30%, 100% { transform: rotate(0deg); }
    36%, 44% { transform: rotate(-10deg); }
    52%, 60% { transform: rotate(6deg); }
  }

  /* Glistening Amber Compound Eye */
  .mtc-eye {
    position: absolute;
    left: -19px;
    top: -41px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #f59e0b;
    box-shadow: 0 0 4px #fbbf24;
    z-index: 2;
  }

  /* Sensory Lime Antennae */
  .mtc-antenna {
    position: absolute;
    left: -22px;
    top: -55px;
    width: 16px;
    height: 12px;
    border-left: 1.5px solid #a3e635;
    border-top: 1.5px solid transparent;
    border-radius: 60% 0 0 0 / 100% 0 0 0;
    transform: rotate(-14deg);
    transform-origin: 0 100%;
    animation: mtc-antenna 2.6s ease-in-out infinite;
  }

  .mtc-antenna.a2 {
    transform: rotate(6deg);
    animation-delay: -1.3s;
  }

  @keyframes mtc-antenna {
    0%, 100% { transform: rotate(var(--wig, -14deg)); }
    50% { transform: rotate(calc(var(--wig, -14deg) + 8deg)); }
  }

  .mtc-antenna.a1 { --wig: -14deg; }
  .mtc-antenna.a2 { --wig: 6deg; }

  /* Razor-Spined Raptorial Forelegs */
  .mtc-arm {
    position: absolute;
    left: -24px;
    top: -34px;
    width: 14px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #fde047 0%, #22c55e 100%);
    border: 0.5px solid #facc15;
    transform-origin: 100% 50%;
    animation: mtc-femur 7s infinite;
    z-index: 1;
  }

  .mtc-forearm {
    position: absolute;
    right: 100%;
    top: 0;
    width: 12px;
    height: 2.5px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      #fde047 0 2px,
      #15803d 2px 4px);
    border: 0.5px solid #facc15;
    transform-origin: 100% 50%;
    animation: mtc-tibia 7s infinite;
  }

  .mtc-arm.b2 { top: -33px; opacity: 0.8; animation-delay: 0.04s; }
  .mtc-arm.b2 .mtc-forearm { animation-delay: 0.04s; }

  @keyframes mtc-femur {
    0%, 42%, 100% { transform: rotate(-108deg); }
    45%, 47% { transform: rotate(-15deg); }
    54% { transform: rotate(-108deg); }
  }

  @keyframes mtc-tibia {
    0%, 42%, 100% { transform: rotate(-142deg); }
    45%, 47% { transform: rotate(-15deg); }
    54% { transform: rotate(-142deg); }
  }

  /* Iridescent Metallic Cyan Bottle Fly */
  .mtc-fly {
    position: absolute;
    left: 6px;
    top: 26px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00f0ff;
    box-shadow: 0 0 6px #38bdf8;
    opacity: 0;
    animation: mtc-fly 7s infinite;
  }

  .mtc-fly::after {
    content: '';
    position: absolute;
    left: -1px;
    top: -3px;
    width: 6px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    filter: blur(0.5px);
  }

  @keyframes mtc-fly {
    0%, 18% { opacity: 0; transform: translate(0, 0); }
    24% { opacity: 1; transform: translate(6px, -4px); }
    30% { transform: translate(12px, 2px); }
    36% { transform: translate(16px, -3px); }
    42%, 45% { opacity: 1; transform: translate(19px, 0); }
    47%, 100% { opacity: 0; transform: translate(19px, 0); }
  }
  `,
};

const mantisMarkup = {
  v1: `
      <div class="mt">
        <div class="mt-twig"></div>
        <div class="mt-fly"></div>
        <div class="mt-body">
          <div class="mt-leg f1"></div>
          <div class="mt-leg f2"></div>
          <div class="mt-leg f3"></div>
          <div class="mt-wing"></div>
          <div class="mt-abdomen"></div>
          <div class="mt-thorax"></div>
          <div class="mt-arm far">
            <div class="mt-femur"><div class="mt-tibia"></div></div>
          </div>
          <div class="mt-arm">
            <div class="mt-femur"><div class="mt-tibia"></div></div>
          </div>
          <div class="mt-head">
            <div class="mt-ant a1"></div>
            <div class="mt-ant a2"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="mt">
        <div class="mt-branch"></div>
        <div class="mt-fly"></div>
        <div class="mt-bug">
          <div class="mt-leg k1"></div>
          <div class="mt-leg k2"></div>
          <div class="mt-leg k3"></div>
          <div class="mt-abdomen"></div>
          <div class="mt-thorax"></div>
          <div class="mt-antenna a1"></div>
          <div class="mt-antenna a2"></div>
          <div class="mt-head"></div>
          <div class="mt-eye"></div>
          <div class="mt-arm b1"><div class="mt-forearm"></div></div>
          <div class="mt-arm b2"><div class="mt-forearm"></div></div>
        </div>
      </div>
    `,
  v3: `
      <div class="mtc">
        <div class="mtc-branch"></div>
        <div class="mtc-fly"></div>
        <div class="mtc-bug">
          <div class="mtc-leg k1"></div>
          <div class="mtc-leg k2"></div>
          <div class="mtc-leg k3"></div>
          <div class="mtc-abdomen"></div>
          <div class="mtc-thorax"></div>
          <div class="mtc-antenna a1"></div>
          <div class="mtc-antenna a2"></div>
          <div class="mtc-head"></div>
          <div class="mtc-eye"></div>
          <div class="mtc-arm b1"><div class="mt-forearm"></div></div>
          <div class="mtc-arm b2"><div class="mt-forearm"></div></div>
        </div>
      </div>
    `,
};

class ConceptMantis extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${mantisStyles[version] || mantisStyles.v3}</style>${mantisMarkup[version] || mantisMarkup.v3}`;
  }
}

if (!customElements.get('concept-mantis')) {
  customElements.define('concept-mantis', ConceptMantis);
}
