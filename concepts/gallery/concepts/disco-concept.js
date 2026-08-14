// Disco Ball: v1 to v4 preserved.
// v5 adds full spectrum nightclub colorization:
// chrome mirrored ball, rainbow rotating pinspots (magenta, cyan, gold, emerald, violet),
// chromatic dance floor tiles pulsing on the beat, and multi-facet sparkles.
const discoStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .disco {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .disco-rod {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 10px;
    margin-left: -1px;
    background: rgba(140, 255, 170, 0.7);
  }

  .disco-ball {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    border-radius: 50%;
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent 40%),
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.55) 0 3px,
        rgba(0, 110, 22, 0.4) 3px 8px),
      repeating-linear-gradient(0deg,
        rgba(214, 255, 224, 0.5) 0 3px,
        rgba(0, 80, 16, 0.55) 3px 8px);
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: 0 0 16px rgba(0, 204, 0, 0.55), inset -6px -4px 12px rgba(0, 0, 0, 0.5);
    animation: disco-turn 3s linear infinite;
  }

  @keyframes disco-turn {
    to { background-position: 16px 0, 16px 0, 0 0; }
  }

  .disco-glint {
    position: absolute;
    left: 50%;
    top: 14px;
    width: 8px;
    height: 8px;
    margin-left: -14px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: disco-glint 3s linear infinite;
  }

  @keyframes disco-glint {
    0% { transform: translateX(-6px); opacity: 0.3; }
    30% { transform: translateX(10px); opacity: 1; }
    60% { transform: translateX(22px); opacity: 0.35; }
    100% { transform: translateX(-6px); opacity: 0.3; }
  }

  .disco-arm {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 0;
    height: 0;
    animation: disco-arm linear infinite;
  }

  .disco-arm.a1 { animation-duration: 3s; }
  .disco-arm.a2 { animation-duration: 3s; animation-delay: -1s; }
  .disco-arm.a3 { animation-duration: 3s; animation-delay: -2s; }
  .disco-arm.a4 { animation-duration: 4.5s; animation-delay: -0.6s; }
  .disco-arm.a5 { animation-duration: 4.5s; animation-delay: -2.8s; }

  @keyframes disco-arm {
    to { transform: rotate(360deg); }
  }

  .disco-spot {
    position: absolute;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(214, 255, 224, 0.9), transparent 75%);
    animation: disco-spot 1.5s ease-in-out infinite;
  }

  .disco-arm.a1 .disco-spot { transform: translateX(44px); }
  .disco-arm.a2 .disco-spot { transform: translateX(50px); animation-delay: -0.4s; }
  .disco-arm.a3 .disco-spot { transform: translateX(40px); animation-delay: -0.9s; }
  .disco-arm.a4 .disco-spot { transform: translateX(54px); animation-delay: -0.2s; width: 9px; }
  .disco-arm.a5 .disco-spot { transform: translateX(47px); animation-delay: -1.1s; }

  @keyframes disco-spot {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 1; }
  }

  .disco-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    background:
      repeating-linear-gradient(90deg,
        rgba(0, 204, 0, 0.3) 0 13px,
        rgba(0, 70, 14, 0.35) 13px 26px);
    border-top: 1px solid rgba(0, 204, 0, 0.5);
    transform: perspective(40px) rotateX(30deg);
    transform-origin: bottom center;
    animation: disco-floor 1.5s steps(1) infinite;
  }

  @keyframes disco-floor {
    0% { background-position: 0 0; filter: brightness(1.35); }
    25% { filter: brightness(0.9); }
    50% { background-position: 13px 0; filter: brightness(1.35); }
    75% { filter: brightness(0.9); }
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

  .disco {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .disco-rod {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 30px;
    margin-left: -1px;
    background: rgba(140, 255, 170, 0.7);
  }

  .disco-ball {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    border-radius: 50%;
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent 40%),
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.55) 0 3px,
        rgba(0, 110, 22, 0.4) 3px 8px),
      repeating-linear-gradient(0deg,
        rgba(214, 255, 224, 0.5) 0 3px,
        rgba(0, 80, 16, 0.55) 3px 8px);
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: 0 0 16px rgba(0, 204, 0, 0.55), inset -6px -4px 12px rgba(0, 0, 0, 0.5);
    animation: disco-turn 3s linear infinite;
  }

  @keyframes disco-turn {
    to { background-position: 16px 0, 16px 0, 0 0; }
  }

  .disco-glint {
    position: absolute;
    left: 50%;
    top: 34px;
    width: 8px;
    height: 8px;
    margin-left: -14px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: disco-glint 3s linear infinite;
  }

  @keyframes disco-glint {
    0% { transform: translateX(-6px); opacity: 0.3; }
    30% { transform: translateX(10px); opacity: 1; }
    60% { transform: translateX(22px); opacity: 0.35; }
    100% { transform: translateX(-6px); opacity: 0.3; }
  }

  .disco-arm {
    position: absolute;
    left: 50%;
    top: 50px;
    width: 0;
    height: 0;
    animation: disco-arm linear infinite;
  }

  .disco-arm.a1 { animation-duration: 3s; }
  .disco-arm.a2 { animation-duration: 3s; animation-delay: -1s; }
  .disco-arm.a3 { animation-duration: 3s; animation-delay: -2s; }
  .disco-arm.a4 { animation-duration: 4.5s; animation-delay: -0.6s; }
  .disco-arm.a5 { animation-duration: 4.5s; animation-delay: -2.8s; }

  @keyframes disco-arm {
    to { transform: rotate(360deg); }
  }

  .disco-spot {
    position: absolute;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(214, 255, 224, 0.9), transparent 75%);
    animation: disco-spot 1.5s ease-in-out infinite;
  }

  .disco-arm.a1 .disco-spot { transform: translateX(33px); }
  .disco-arm.a2 .disco-spot { transform: translateX(37px); animation-delay: -0.4s; }
  .disco-arm.a3 .disco-spot { transform: translateX(30px); animation-delay: -0.9s; }
  .disco-arm.a4 .disco-spot { transform: translateX(40px); animation-delay: -0.2s; width: 9px; }
  .disco-arm.a5 .disco-spot { transform: translateX(35px); animation-delay: -1.1s; }

  @keyframes disco-spot {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 1; }
  }

  .disco-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    background:
      repeating-linear-gradient(90deg,
        rgba(0, 204, 0, 0.3) 0 13px,
        rgba(0, 70, 14, 0.35) 13px 26px);
    border-top: 1px solid rgba(0, 204, 0, 0.5);
    transform: perspective(40px) rotateX(30deg);
    transform-origin: bottom center;
    animation: disco-floor 1.5s steps(1) infinite;
  }

  @keyframes disco-floor {
    0% { background-position: 0 0; filter: brightness(1.35); }
    25% { filter: brightness(0.9); }
    50% { background-position: 13px 0; filter: brightness(1.35); }
    75% { filter: brightness(0.9); }
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

  .disco {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .disco-rod {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 30px;
    margin-left: -1px;
    background: rgba(140, 255, 170, 0.7);
  }

  .disco-ball {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 34% 28%,
        rgba(226, 255, 233, 0.58) 0%,
        rgba(150, 235, 165, 0.2) 22%,
        transparent 42%,
        rgba(1, 14, 6, 0.72) 92%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent 40%),
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.55) 0 3px,
        rgba(0, 110, 22, 0.4) 3px 8px),
      repeating-linear-gradient(0deg,
        rgba(214, 255, 224, 0.5) 0 3px,
        rgba(0, 80, 16, 0.55) 3px 8px);
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: 0 0 16px rgba(0, 204, 0, 0.55), inset -6px -4px 12px rgba(0, 0, 0, 0.5);
    animation: disco-turn 3s linear infinite;
  }

  @keyframes disco-turn {
    to { background-position: 0 0, 0 0, 16px 0, 0 0; }
  }

  .disco-glint {
    position: absolute;
    left: 50%;
    top: 34px;
    width: 8px;
    height: 8px;
    margin-left: -14px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: disco-glint 3s linear infinite;
  }

  @keyframes disco-glint {
    0% { transform: translateX(-6px); opacity: 0.3; }
    30% { transform: translateX(10px); opacity: 1; }
    60% { transform: translateX(22px); opacity: 0.35; }
    100% { transform: translateX(-6px); opacity: 0.3; }
  }

  .disco-glint-2 {
    position: absolute;
    left: 50%;
    top: 46px;
    width: 4px;
    height: 4px;
    margin-left: 4px;
    border-radius: 50%;
    background: radial-gradient(circle, #eaffda, transparent 70%);
    animation: disco-glint-2 3.6s ease-in-out infinite;
    animation-delay: -1.2s;
  }

  @keyframes disco-glint-2 {
    0%, 100% { transform: translateX(-4px) scale(0.6); opacity: 0.15; }
    45% { transform: translateX(6px) scale(1); opacity: 0.9; }
    70% { transform: translateX(14px) scale(0.7); opacity: 0.2; }
  }

  .disco-glint-3 {
    position: absolute;
    left: 50%;
    top: 40px;
    width: 3px;
    height: 3px;
    margin-left: -9px;
    border-radius: 50%;
    background: radial-gradient(circle, #eaffda, transparent 70%);
    animation: disco-glint-3 2.4s ease-in-out infinite;
    animation-delay: -0.6s;
  }

  @keyframes disco-glint-3 {
    0%, 100% { opacity: 0.1; transform: scale(0.5); }
    50% { opacity: 0.85; transform: scale(1); }
  }

  .disco-arm {
    position: absolute;
    left: 50%;
    top: 50px;
    width: 0;
    height: 0;
    animation: disco-arm linear infinite;
  }

  .disco-arm.a1 { animation-duration: 3s; }
  .disco-arm.a2 { animation-duration: 3s; animation-delay: -1s; }
  .disco-arm.a3 { animation-duration: 3s; animation-delay: -2s; }
  .disco-arm.a4 { animation-duration: 4.5s; animation-delay: -0.6s; }
  .disco-arm.a5 { animation-duration: 4.5s; animation-delay: -2.8s; }

  @keyframes disco-arm {
    to { transform: rotate(360deg); }
  }

  .disco-spot {
    position: absolute;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(214, 255, 224, 0.9), transparent 75%);
    animation: disco-spot 1.5s ease-in-out infinite;
  }

  .disco-arm.a1 .disco-spot { transform: translateX(33px); }
  .disco-arm.a2 .disco-spot { transform: translateX(37px); animation-delay: -0.4s; }
  .disco-arm.a3 .disco-spot { transform: translateX(30px); animation-delay: -0.9s; }
  .disco-arm.a4 .disco-spot { transform: translateX(40px); animation-delay: -0.2s; width: 9px; }
  .disco-arm.a5 .disco-spot { transform: translateX(35px); animation-delay: -1.1s; }

  @keyframes disco-spot {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 1; }
  }

  .disco-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    background:
      repeating-linear-gradient(90deg,
        rgba(0, 204, 0, 0.3) 0 13px,
        rgba(0, 70, 14, 0.35) 13px 26px);
    border-top: 1px solid rgba(0, 204, 0, 0.5);
    transform: perspective(40px) rotateX(30deg);
    transform-origin: bottom center;
    animation: disco-floor 1.5s steps(1) infinite;
  }

  @keyframes disco-floor {
    0% { background-position: 0 0; filter: brightness(1.35); }
    25% { filter: brightness(0.9); }
    50% { background-position: 13px 0; filter: brightness(1.35); }
    75% { filter: brightness(0.9); }
  }
  `,

  v4: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .disco {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .disco-rod {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 30px;
    margin-left: -1px;
    background: rgba(140, 255, 170, 0.7);
  }

  .disco-ball {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 34% 28%,
        rgba(226, 255, 233, 0.58) 0%,
        rgba(150, 235, 165, 0.2) 22%,
        transparent 42%,
        rgba(1, 14, 6, 0.72) 92%),
      radial-gradient(circle at 64% 68%, rgba(255, 255, 255, 0.65) 0 7%, transparent 24%),
      radial-gradient(circle at 21% 30%, rgba(235, 255, 240, 0.5) 0 9%, transparent 30%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent 40%),
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.55) 0 3px,
        rgba(0, 110, 22, 0.4) 3px 8px),
      repeating-linear-gradient(0deg,
        rgba(214, 255, 224, 0.5) 0 3px,
        rgba(0, 80, 16, 0.55) 3px 8px);
    background-size: auto, 16px 16px, 8px 8px, auto, auto, auto;
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: 0 0 16px rgba(0, 204, 0, 0.55), inset -6px -4px 12px rgba(0, 0, 0, 0.5);
    animation: disco-turn 3s linear infinite;
  }

  @keyframes disco-turn {
    to { background-position: 0 0, 16px 0, 16px 0, 0 0, 16px 0, 0 0; }
  }

  .disco-glint {
    position: absolute;
    left: 50%;
    top: 34px;
    width: 8px;
    height: 8px;
    margin-left: -14px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: disco-glint 3s linear infinite;
  }

  @keyframes disco-glint {
    0% { transform: translateX(-6px); opacity: 0.3; }
    30% { transform: translateX(10px); opacity: 1; }
    60% { transform: translateX(22px); opacity: 0.35; }
    100% { transform: translateX(-6px); opacity: 0.3; }
  }

  .disco-glint-2 {
    position: absolute;
    left: 50%;
    top: 46px;
    width: 4px;
    height: 4px;
    margin-left: 4px;
    border-radius: 50%;
    background: radial-gradient(circle, #eaffda, transparent 70%);
    animation: disco-glint-2 3.6s ease-in-out infinite;
    animation-delay: -1.2s;
  }

  @keyframes disco-glint-2 {
    0%, 100% { transform: translateX(-4px) scale(0.6); opacity: 0.15; }
    45% { transform: translateX(6px) scale(1); opacity: 0.9; }
    70% { transform: translateX(14px) scale(0.7); opacity: 0.2; }
  }

  .disco-glint-3 {
    position: absolute;
    left: 50%;
    top: 40px;
    width: 3px;
    height: 3px;
    margin-left: -9px;
    border-radius: 50%;
    background: radial-gradient(circle, #eaffda, transparent 70%);
    animation: disco-glint-3 2.4s ease-in-out infinite;
    animation-delay: -0.6s;
  }

  @keyframes disco-glint-3 {
    0%, 100% { opacity: 0.1; transform: scale(0.5); }
    50% { opacity: 0.85; transform: scale(1); }
  }

  .disco-arm {
    position: absolute;
    left: 50%;
    top: 50px;
    width: 0;
    height: 0;
    animation: disco-arm linear infinite;
  }

  .disco-arm.a1 { animation-duration: 3s; }
  .disco-arm.a2 { animation-duration: 3s; animation-delay: -1s; }
  .disco-arm.a3 { animation-duration: 3s; animation-delay: -2s; }
  .disco-arm.a4 { animation-duration: 4.5s; animation-delay: -0.6s; }
  .disco-arm.a5 { animation-duration: 4.5s; animation-delay: -2.8s; }

  @keyframes disco-arm {
    to { transform: rotate(360deg); }
  }

  .disco-spot {
    position: absolute;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(214, 255, 224, 0.9), transparent 75%);
    animation: disco-spot 1.5s ease-in-out infinite;
  }

  .disco-arm.a1 .disco-spot { transform: translateX(33px); }
  .disco-arm.a2 .disco-spot { transform: translateX(37px); animation-delay: -0.4s; }
  .disco-arm.a3 .disco-spot { transform: translateX(30px); animation-delay: -0.9s; }
  .disco-arm.a4 .disco-spot { transform: translateX(40px); animation-delay: -0.2s; width: 9px; }
  .disco-arm.a5 .disco-spot { transform: translateX(35px); animation-delay: -1.1s; }

  @keyframes disco-spot {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 1; }
  }

  .disco-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    background:
      repeating-linear-gradient(90deg,
        rgba(0, 204, 0, 0.3) 0 13px,
        rgba(0, 70, 14, 0.35) 13px 26px);
    border-top: 1px solid rgba(0, 204, 0, 0.5);
    transform: perspective(40px) rotateX(30deg);
    transform-origin: bottom center;
    animation: disco-floor 1.5s steps(1) infinite;
  }

  @keyframes disco-floor {
    0% { background-position: 0 0; filter: brightness(1.35); }
    25% { filter: brightness(0.9); }
    50% { background-position: 13px 0; filter: brightness(1.35); }
    75% { filter: brightness(0.9); }
  }
  `,

  v5: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v5: Full-spectrum chromatic nightclub mirror ball with rainbow pinspots,
     illuminated dance floor tiles, and silver mirror facet reflections. */
  .discoc {
    width: 104px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .discoc-rod {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 30px;
    margin-left: -1px;
    background: linear-gradient(180deg, #94a3b8, #e2e8f0);
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
  }

  /* Chrome mirror ball */
  .discoc-ball {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 34% 28%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(224, 242, 254, 0.35) 22%,
        transparent 45%,
        rgba(2, 6, 23, 0.85) 95%),
      radial-gradient(circle at 64% 68%, rgba(255, 255, 255, 0.75) 0 7%, transparent 24%),
      radial-gradient(circle at 21% 30%, rgba(255, 255, 255, 0.6) 0 9%, transparent 30%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.4), transparent 40%),
      repeating-linear-gradient(90deg,
        rgba(255, 255, 255, 0.7) 0 3px,
        rgba(71, 85, 105, 0.6) 3px 8px),
      repeating-linear-gradient(0deg,
        rgba(241, 245, 249, 0.65) 0 3px,
        rgba(30, 41, 59, 0.7) 3px 8px);
    background-size: auto, 16px 16px, 8px 8px, auto, auto, auto;
    border: 1px solid #cbd5e1;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 35px rgba(236, 72, 153, 0.3), inset -6px -4px 12px rgba(0, 0, 0, 0.7);
    animation: discoc-turn 3s linear infinite;
  }

  @keyframes discoc-turn {
    to { background-position: 0 0, 16px 0, 16px 0, 0 0, 16px 0, 0 0; }
  }

  /* Hot specular glints */
  .discoc-glint {
    position: absolute;
    left: 50%;
    top: 34px;
    width: 8px;
    height: 8px;
    margin-left: -14px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, rgba(255, 255, 255, 0.8) 40%, transparent 70%);
    box-shadow: 0 0 10px #ffffff;
    animation: discoc-glint 3s linear infinite;
  }

  @keyframes discoc-glint {
    0% { transform: translateX(-6px); opacity: 0.3; }
    30% { transform: translateX(10px); opacity: 1; }
    60% { transform: translateX(22px); opacity: 0.35; }
    100% { transform: translateX(-6px); opacity: 0.3; }
  }

  .discoc-glint-2 {
    position: absolute;
    left: 50%;
    top: 46px;
    width: 4px;
    height: 4px;
    margin-left: 4px;
    border-radius: 50%;
    background: radial-gradient(circle, #38bdf8, transparent 70%);
    box-shadow: 0 0 6px #38bdf8;
    animation: discoc-glint-2 3.6s ease-in-out infinite;
    animation-delay: -1.2s;
  }

  @keyframes discoc-glint-2 {
    0%, 100% { transform: translateX(-4px) scale(0.6); opacity: 0.2; }
    45% { transform: translateX(6px) scale(1.1); opacity: 1; }
    70% { transform: translateX(14px) scale(0.7); opacity: 0.3; }
  }

  .discoc-glint-3 {
    position: absolute;
    left: 50%;
    top: 40px;
    width: 3px;
    height: 3px;
    margin-left: -9px;
    border-radius: 50%;
    background: radial-gradient(circle, #f43f5e, transparent 70%);
    box-shadow: 0 0 6px #f43f5e;
    animation: discoc-glint-3 2.4s ease-in-out infinite;
    animation-delay: -0.6s;
  }

  @keyframes discoc-glint-3 {
    0%, 100% { opacity: 0.15; transform: scale(0.5); }
    50% { opacity: 0.95; transform: scale(1.1); }
  }

  /* Orbiting chromatic light spotlights */
  .discoc-arm {
    position: absolute;
    left: 50%;
    top: 50px;
    width: 0;
    height: 0;
    animation: discoc-arm linear infinite;
  }

  .discoc-arm.a1 { animation-duration: 3s; }
  .discoc-arm.a2 { animation-duration: 3s; animation-delay: -1s; }
  .discoc-arm.a3 { animation-duration: 3s; animation-delay: -2s; }
  .discoc-arm.a4 { animation-duration: 4.5s; animation-delay: -0.6s; }
  .discoc-arm.a5 { animation-duration: 4.5s; animation-delay: -2.8s; }

  @keyframes discoc-arm {
    to { transform: rotate(360deg); }
  }

  .discoc-spot {
    position: absolute;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    animation: discoc-spot 1.5s ease-in-out infinite;
  }

  /* Hot Magenta spot */
  .discoc-arm.a1 .discoc-spot {
    transform: translateX(33px);
    background: radial-gradient(ellipse, #f43f5e 0%, rgba(244, 63, 94, 0.4) 60%, transparent 80%);
    box-shadow: 0 0 10px #f43f5e;
  }

  /* Electric Cyan spot */
  .discoc-arm.a2 .discoc-spot {
    transform: translateX(37px);
    animation-delay: -0.4s;
    background: radial-gradient(ellipse, #00f0ff 0%, rgba(0, 240, 255, 0.4) 60%, transparent 80%);
    box-shadow: 0 0 10px #00f0ff;
  }

  /* Solar Gold spot */
  .discoc-arm.a3 .discoc-spot {
    transform: translateX(30px);
    animation-delay: -0.9s;
    background: radial-gradient(ellipse, #facc15 0%, rgba(250, 204, 21, 0.4) 60%, transparent 80%);
    box-shadow: 0 0 10px #facc15;
  }

  /* Lime Emerald spot */
  .discoc-arm.a4 .discoc-spot {
    transform: translateX(40px);
    animation-delay: -0.2s;
    width: 9px;
    background: radial-gradient(ellipse, #10b981 0%, rgba(16, 185, 129, 0.4) 60%, transparent 80%);
    box-shadow: 0 0 10px #10b981;
  }

  /* Purple Violet spot */
  .discoc-arm.a5 .discoc-spot {
    transform: translateX(35px);
    animation-delay: -1.1s;
    background: radial-gradient(ellipse, #a855f7 0%, rgba(168, 85, 247, 0.4) 60%, transparent 80%);
    box-shadow: 0 0 10px #a855f7;
  }

  @keyframes discoc-spot {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; filter: brightness(1.4); }
  }

  /* Illuminated dance floor tiles */
  .discoc-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    background:
      repeating-linear-gradient(90deg,
        rgba(236, 72, 153, 0.6) 0 13px,
        rgba(6, 182, 212, 0.6) 13px 26px);
    border-top: 1px solid #e0f2fe;
    transform: perspective(40px) rotateX(30deg);
    transform-origin: bottom center;
    box-shadow: 0 0 14px rgba(236, 72, 153, 0.5);
    animation: discoc-floor 1.5s steps(1) infinite;
  }

  @keyframes discoc-floor {
    0% { background: repeating-linear-gradient(90deg, rgba(236, 72, 153, 0.7) 0 13px, rgba(6, 182, 212, 0.7) 13px 26px); filter: brightness(1.4); }
    25% { filter: brightness(0.85); }
    50% { background: repeating-linear-gradient(90deg, rgba(234, 179, 8, 0.7) 0 13px, rgba(168, 85, 247, 0.7) 13px 26px); filter: brightness(1.4); }
    75% { filter: brightness(0.85); }
  }
  `,
};

const discoMarkup = {
  v1: `
    <div class="disco">
      <div class="disco-rod"></div>
      <div class="disco-arm a1"><div class="disco-spot"></div></div>
      <div class="disco-arm a2"><div class="disco-spot"></div></div>
      <div class="disco-arm a3"><div class="disco-spot"></div></div>
      <div class="disco-arm a4"><div class="disco-spot"></div></div>
      <div class="disco-arm a5"><div class="disco-spot"></div></div>
      <div class="disco-floor"></div>
      <div class="disco-ball"></div>
      <div class="disco-glint"></div>
    </div>
  `,
  v2: `
    <div class="disco">
      <div class="disco-rod"></div>
      <div class="disco-arm a1"><div class="disco-spot"></div></div>
      <div class="disco-arm a2"><div class="disco-spot"></div></div>
      <div class="disco-arm a3"><div class="disco-spot"></div></div>
      <div class="disco-arm a4"><div class="disco-spot"></div></div>
      <div class="disco-arm a5"><div class="disco-spot"></div></div>
      <div class="disco-floor"></div>
      <div class="disco-ball"></div>
      <div class="disco-glint"></div>
    </div>
  `,
  v3: `
    <div class="disco">
      <div class="disco-rod"></div>
      <div class="disco-arm a1"><div class="disco-spot"></div></div>
      <div class="disco-arm a2"><div class="disco-spot"></div></div>
      <div class="disco-arm a3"><div class="disco-spot"></div></div>
      <div class="disco-arm a4"><div class="disco-spot"></div></div>
      <div class="disco-arm a5"><div class="disco-spot"></div></div>
      <div class="disco-floor"></div>
      <div class="disco-ball"></div>
      <div class="disco-glint"></div>
      <div class="disco-glint-2"></div>
      <div class="disco-glint-3"></div>
    </div>
  `,
  v4: `
    <div class="disco">
      <div class="disco-rod"></div>
      <div class="disco-arm a1"><div class="disco-spot"></div></div>
      <div class="disco-arm a2"><div class="disco-spot"></div></div>
      <div class="disco-arm a3"><div class="disco-spot"></div></div>
      <div class="disco-arm a4"><div class="disco-spot"></div></div>
      <div class="disco-arm a5"><div class="disco-spot"></div></div>
      <div class="disco-floor"></div>
      <div class="disco-ball"></div>
      <div class="disco-glint"></div>
      <div class="disco-glint-2"></div>
      <div class="disco-glint-3"></div>
    </div>
  `,
  v5: `
    <div class="discoc">
      <div class="discoc-rod"></div>
      <div class="discoc-arm a1"><div class="discoc-spot"></div></div>
      <div class="discoc-arm a2"><div class="discoc-spot"></div></div>
      <div class="discoc-arm a3"><div class="discoc-spot"></div></div>
      <div class="discoc-arm a4"><div class="discoc-spot"></div></div>
      <div class="discoc-arm a5"><div class="discoc-spot"></div></div>
      <div class="discoc-floor"></div>
      <div class="discoc-ball"></div>
      <div class="discoc-glint"></div>
      <div class="discoc-glint-2"></div>
      <div class="discoc-glint-3"></div>
    </div>
  `,
};

class ConceptDisco extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v5';
    const styles = discoStyles[version] || discoStyles.v5;
    const markup = discoMarkup[version] || discoMarkup.v5;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-disco')) {
  customElements.define('concept-disco', ConceptDisco);
}
