const discoStyles = {
  /* --- v1: the original render, preserved verbatim --- */
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Mirror ball night: the facet grid crawls across the turning
     ball, thrown spots wheel around the room, and the floor pulses
     on the beat. */
  .disco {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Hanging rod. */
  .disco-rod {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 10px;
    margin-left: -1px;
    background: rgba(140, 255, 170, 0.7);
  }

  /* The ball: facet grid scrolling sideways reads as rotation. */
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

  /* Hot glint racing the facets. */
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

  /* Thrown spots: dots riding rotating carriers centred on the ball,
     each at a different radius/speed, flickering as they sweep. */
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

  /* Dance floor: checker tiles pulsing on the beat. */
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

  /* --- v2: spots recentred with headroom so the sweep clears the
     frame instead of slicing against the top/side edges --- */
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

  /* Hanging rod: longer, so the ball sits at the frame's vertical
     centre and the thrown spots get equal clearance above and below. */
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

  /* Pivot moved to the ball's new centre (frame-centred, 50px of
     clearance on every side); radii trimmed from a 44-54px spread
     to 33-40px so the full swept circle — including the spot's own
     footprint at the widest, most-rotated point — stays inside the
     frame instead of being sliced by it. */
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

  /* --- v3: the ball reads as a lit sphere instead of a flat tiled
     disc — a volumetric highlight/rim layer sits over the facet grid,
     and two smaller glints twinkle out of sync with the main one so
     the surface catches light at several points at once, the way a
     few hundred individual mirror tiles actually would. --- */
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

  /* Volumetric layer sits on top of the facet grid: it brightens
     toward an upper-left "key light" and darkens toward the rim,
     so the grid reads as tiles wrapped over a sphere rather than a
     flat pattern punched into a circle. */
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

  /* Main hot glint racing the facets. */
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

  /* Two smaller, dimmer glints on their own out-of-sync clocks —
     secondary facets catching the light at moments the main glint
     isn't, instead of the ball having exactly one bright point. */
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

  /* --- v4: individual facets, not a uniform stripe pattern — every
     real mirror ball, broken-shard vintage or uniform modern glass
     alike, is made of many small tiles that each catch light at a
     slightly different angle. The old grid gave every tile in a row
     the same brightness; two tiled sparkle layers (one per facet, one
     per 2x2 block) break that uniformity so the surface reads as a
     mosaic of individually-lit chips. --- */
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
    const version = this.getAttribute('version') || 'v4';
    const styles = discoStyles[version] || discoStyles.v4;
    const markup = discoMarkup[version] || discoMarkup.v4;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-disco')) {
  customElements.define('concept-disco', ConceptDisco);
}
