// v1 below is the archived original; v2 fixes the physics: the tubes
// swayed +/-7deg on five unrelated periods, letting adjacent tubes (10px
// apart, displacing up to 14px toward each other) visibly cross, and the
// striker's +/-10deg swing left its disc 2-8px short of both tubes it was
// supposed to ring. Tubes now ride one breeze as a gentle traveling wave
// on the striker's 5.2s period, and the striker reaches far enough to
// actually touch tube 2 at the 32% extreme and tube 4 at the 82% one.
// v3 is the full rebuild: the wind becomes the protagonist. A 7s cycle
// stages calm -> a visible gust front (staggered streaks) that heels the
// whole rig over on its hanger, kicks the tubes in a left-to-right
// cascade (each ringing as the front reaches it, with a second flicker
// on the buffet), whips the striker clattering through the rack - then
// an underdamped settle back to calm.
const chimesStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Wind chimes in a light breeze: five tubes sway on their cords
     with individual phases, the striker wanders between them, and
     when it reaches an extreme the nearest tube flares and shivers. */
  .ch {
    width: 104px;
    height: 100px;
    position: relative;
  }

  /* Top plate, slightly rocking. */
  .ch-plate {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 56px;
    height: 8px;
    margin-left: -28px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: rgba(0, 60, 12, 0.6);
    animation: ch-plate 5.2s ease-in-out infinite;
  }

  @keyframes ch-plate {
    0%, 100% { transform: rotate(-1.5deg); }
    50% { transform: rotate(1.5deg); }
  }

  /* Hanger cord above the plate. */
  .ch-hanger {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 9px;
    background: rgba(140, 255, 170, 0.7);
  }

  /* Tubes: cord + tube as one hinged unit. Lengths descend. */
  .ch-tube {
    position: absolute;
    top: 14px;
    width: 6px;
    transform-origin: 50% 0;
    animation: ch-sway var(--dur) ease-in-out infinite var(--ph);
  }

  .ch-cord {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 8px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.6);
  }

  .ch-pipe {
    position: absolute;
    top: 8px;
    left: 0;
    width: 6px;
    height: var(--len);
    border-radius: 3px;
    background: linear-gradient(180deg, #9fe8ae, rgba(0, 130, 26, 0.85));
    border: 1px solid rgba(140, 255, 170, 0.55);
    box-sizing: border-box;
  }

  /* Hole detail near each tube top. */
  .ch-pipe::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 50%;
    width: 2px;
    height: 2px;
    margin-left: -1px;
    border-radius: 50%;
    background: rgba(2, 10, 4, 0.9);
  }

  .ch-tube.u1 { left: 28px; --len: 44px; --dur: 3.8s; --ph: 0s; }
  .ch-tube.u2 { left: 40px; --len: 54px; --dur: 4.4s; --ph: -1.9s; }
  .ch-tube.u3 { left: 50px; --len: 62px; --dur: 4.1s; --ph: -0.8s; }
  .ch-tube.u4 { left: 60px; --len: 50px; --dur: 4.7s; --ph: -3.1s; }
  .ch-tube.u5 { left: 71px; --len: 40px; --dur: 3.9s; --ph: -2.4s; }

  @keyframes ch-sway {
    0%, 100% { transform: rotate(-6deg); }
    50% { transform: rotate(7deg); }
  }

  /* Clink flare: tubes 2 and 4 ring when the striker reaches them. */
  .ch-tube.u2 .ch-pipe { animation: ch-ring 5.2s infinite; }
  .ch-tube.u4 .ch-pipe { animation: ch-ring 5.2s infinite; animation-delay: -2.6s; }

  @keyframes ch-ring {
    0%, 30% { box-shadow: none; }
    34% { box-shadow: 0 0 12px rgba(0, 204, 0, 0.95); border-color: #d6ffe0; }
    46% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.4); }
    54%, 100% { box-shadow: none; }
  }

  /* Striker: cord + disc wandering between the tubes. */
  .ch-striker {
    position: absolute;
    left: 49px;
    top: 14px;
    width: 2px;
    height: 38px;
    transform-origin: 50% 0;
    animation: ch-striker 5.2s ease-in-out infinite;
  }

  .ch-striker::before {
    content: '';
    position: absolute;
    inset: 0;
    left: 0.5px;
    width: 1px;
    background: rgba(140, 255, 170, 0.6);
  }

  .ch-disc {
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, rgba(0, 130, 26, 0.95));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.6);
  }

  /* Wind sail below the disc. */
  .ch-sail {
    position: absolute;
    bottom: -30px;
    left: 50%;
    width: 10px;
    height: 20px;
    margin-left: -5px;
    clip-path: polygon(50% 0, 90% 30%, 70% 100%, 30% 100%, 10% 30%);
    background: rgba(0, 160, 32, 0.55);
    border: 1px solid rgba(140, 255, 170, 0.4);
  }

  @keyframes ch-striker {
    0%, 100% { transform: rotate(-10deg); }
    32% { transform: rotate(9deg); }
    36% { transform: rotate(7deg); }
    60% { transform: rotate(-3deg); }
    82% { transform: rotate(-11deg); }
    86% { transform: rotate(-9deg); }
  }

  /* A wind streak drifting through now and then. */
  .ch-wind {
    position: absolute;
    top: 40px;
    left: -20px;
    width: 26px;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.55), transparent);
    opacity: 0;
    animation: ch-wind 5.2s ease-in infinite;
  }

  .ch-wind.w2 { top: 68px; animation-delay: 0.4s; width: 20px; }

  @keyframes ch-wind {
    0%, 18% { transform: translateX(0); opacity: 0; }
    24% { opacity: 0.8; }
    44% { transform: translateX(120px); opacity: 0; }
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

  /* Wind chimes in a light breeze: the five tubes ride one breeze as
     a gentle traveling wave, the striker wanders between them, and at
     each extreme it actually touches the tube that rings. */
  .ch {
    width: 104px;
    height: 100px;
    position: relative;
  }

  /* Top plate, slightly rocking. */
  .ch-plate {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 56px;
    height: 8px;
    margin-left: -28px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: rgba(0, 60, 12, 0.6);
    animation: ch-plate 5.2s ease-in-out infinite;
  }

  @keyframes ch-plate {
    0%, 100% { transform: rotate(-1.5deg); }
    50% { transform: rotate(1.5deg); }
  }

  /* Hanger cord above the plate. */
  .ch-hanger {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 9px;
    background: rgba(140, 255, 170, 0.7);
  }

  /* Tubes: cord + tube as one hinged unit. Lengths descend. All five
     share the breeze's 5.2s period with a small cascading phase, so
     they read as one gust passing through - and neighbors 10px apart
     can never swing across each other. */
  .ch-tube {
    position: absolute;
    top: 14px;
    width: 6px;
    transform-origin: 50% 0;
    animation: ch-sway 5.2s ease-in-out infinite var(--ph);
  }

  .ch-cord {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 8px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.6);
  }

  .ch-pipe {
    position: absolute;
    top: 8px;
    left: 0;
    width: 6px;
    height: var(--len);
    border-radius: 3px;
    background: linear-gradient(180deg, #9fe8ae, rgba(0, 130, 26, 0.85));
    border: 1px solid rgba(140, 255, 170, 0.55);
    box-sizing: border-box;
  }

  /* Hole detail near each tube top. */
  .ch-pipe::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 50%;
    width: 2px;
    height: 2px;
    margin-left: -1px;
    border-radius: 50%;
    background: rgba(2, 10, 4, 0.9);
  }

  .ch-tube.u1 { left: 28px; --len: 44px; --ph: 0s; }
  .ch-tube.u2 { left: 40px; --len: 54px; --ph: -0.15s; }
  .ch-tube.u3 { left: 50px; --len: 62px; --ph: -0.3s; }
  .ch-tube.u4 { left: 60px; --len: 50px; --ph: -0.45s; }
  .ch-tube.u5 { left: 71px; --len: 40px; --ph: -0.6s; }

  @keyframes ch-sway {
    0%, 100% { transform: rotate(-3.5deg); }
    50% { transform: rotate(4deg); }
  }

  /* Clink flare: tubes 2 and 4 ring when the striker reaches them. */
  .ch-tube.u2 .ch-pipe { animation: ch-ring 5.2s infinite; }
  .ch-tube.u4 .ch-pipe { animation: ch-ring 5.2s infinite; animation-delay: -2.6s; }

  @keyframes ch-ring {
    0%, 30% { box-shadow: none; }
    34% { box-shadow: 0 0 12px rgba(0, 204, 0, 0.95); border-color: #d6ffe0; }
    46% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.4); }
    54%, 100% { box-shadow: none; }
  }

  /* Striker: cord + disc wandering between the tubes. Swing extremes
     are sized so the disc's edge overlaps tube 2 at the 32% extreme
     (which rings at 34%) and tube 4 at the 82% one (rings at 84%). */
  .ch-striker {
    position: absolute;
    left: 49px;
    top: 14px;
    width: 2px;
    height: 38px;
    transform-origin: 50% 0;
    animation: ch-striker 5.2s ease-in-out infinite;
  }

  .ch-striker::before {
    content: '';
    position: absolute;
    inset: 0;
    left: 0.5px;
    width: 1px;
    background: rgba(140, 255, 170, 0.6);
  }

  .ch-disc {
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, rgba(0, 130, 26, 0.95));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.6);
  }

  /* Wind sail below the disc. */
  .ch-sail {
    position: absolute;
    bottom: -30px;
    left: 50%;
    width: 10px;
    height: 20px;
    margin-left: -5px;
    clip-path: polygon(50% 0, 90% 30%, 70% 100%, 30% 100%, 10% 30%);
    background: rgba(0, 160, 32, 0.55);
    border: 1px solid rgba(140, 255, 170, 0.4);
  }

  @keyframes ch-striker {
    0%, 100% { transform: rotate(-9deg); }
    32% { transform: rotate(12deg); }
    36% { transform: rotate(9deg); }
    60% { transform: rotate(-3deg); }
    82% { transform: rotate(-14deg); }
    86% { transform: rotate(-11deg); }
  }

  /* A wind streak drifting through now and then. */
  .ch-wind {
    position: absolute;
    top: 40px;
    left: -20px;
    width: 26px;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.55), transparent);
    opacity: 0;
    animation: ch-wind 5.2s ease-in infinite;
  }

  .ch-wind.w2 { top: 68px; animation-delay: 0.4s; width: 20px; }

  @keyframes ch-wind {
    0%, 18% { transform: translateX(0); opacity: 0; }
    24% { opacity: 0.8; }
    44% { transform: translateX(120px); opacity: 0; }
    100% { opacity: 0; }
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

  /* Wind chimes with the wind made visible, on a 7s cycle: calm idle,
     then a gust front sweeps left-to-right through the frame - the
     whole rig heels over on its hanger, each tube kicks and rings as
     the front reaches it, the striker whips clattering through the
     rack - and everything settles back to calm, underdamped. */
  .wc {
    width: 104px;
    height: 100px;
    position: relative;
  }

  /* Hanger cord above the rig's pivot - fixed to the world, not the
     swinging rig. */
  .wc-hanger {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 9px;
    background: rgba(140, 255, 170, 0.7);
  }

  /* The whole instrument swings from the hanger point as one pendulum
     when the gust hits. */
  .wc-rig {
    position: absolute;
    inset: 0;
    transform-origin: 50% 9px;
    animation: wc-rig 7s ease-in-out infinite;
  }

  @keyframes wc-rig {
    0%, 26% { transform: rotate(0deg); }
    36% { transform: rotate(-5deg); }
    46% { transform: rotate(-2deg); }
    56% { transform: rotate(-3.2deg); }
    68% { transform: rotate(-0.8deg); }
    80% { transform: rotate(-1.4deg); }
    92% { transform: rotate(-0.3deg); }
    100% { transform: rotate(0deg); }
  }

  /* Top plate. */
  .wc-plate {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 56px;
    height: 8px;
    margin-left: -28px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: rgba(0, 60, 12, 0.6);
    animation: wc-plate 7s ease-in-out infinite;
  }

  @keyframes wc-plate {
    0%, 100% { transform: rotate(-1deg); }
    50% { transform: rotate(1deg); }
  }

  /* Tubes: cord + tube as one hinged unit. One shared keyframe set;
     each tube's delay staggers it 0.15s behind its left neighbor, so
     the gust kick travels down the rack left-to-right (and the calm
     micro-sway desyncs naturally for free). */
  .wc-tube {
    position: absolute;
    top: 14px;
    width: 6px;
    transform-origin: 50% 0;
    animation: wc-sway 7s ease-in-out infinite;
  }

  .wc-cord {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 8px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.6);
  }

  .wc-pipe {
    position: absolute;
    top: 8px;
    left: 0;
    width: 6px;
    height: var(--len);
    border-radius: 3px;
    background: linear-gradient(180deg, #9fe8ae, rgba(0, 130, 26, 0.85));
    border: 1px solid rgba(140, 255, 170, 0.55);
    box-sizing: border-box;
    animation: wc-ring 7s infinite;
  }

  /* Hole detail near each tube top. */
  .wc-pipe::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 50%;
    width: 2px;
    height: 2px;
    margin-left: -1px;
    border-radius: 50%;
    background: rgba(2, 10, 4, 0.9);
  }

  .wc-tube.u1 { left: 28px; --len: 44px; }
  .wc-tube.u2 { left: 40px; --len: 54px; }
  .wc-tube.u3 { left: 50px; --len: 62px; }
  .wc-tube.u4 { left: 60px; --len: 50px; }
  .wc-tube.u5 { left: 71px; --len: 40px; }

  .wc-tube.u2, .wc-tube.u2 .wc-pipe { animation-delay: -6.85s; }
  .wc-tube.u3, .wc-tube.u3 .wc-pipe { animation-delay: -6.7s; }
  .wc-tube.u4, .wc-tube.u4 .wc-pipe { animation-delay: -6.55s; }
  .wc-tube.u5, .wc-tube.u5 .wc-pipe { animation-delay: -6.4s; }

  /* Calm micro-sway, the gust kick (blown right = negative), a second
     buffet, then decaying oscillation back to calm. */
  @keyframes wc-sway {
    0% { transform: rotate(1.5deg); }
    8% { transform: rotate(-1.5deg); }
    16% { transform: rotate(1.5deg); }
    24% { transform: rotate(-1deg); }
    30% { transform: rotate(-2deg); }
    34% { transform: rotate(-12deg); }
    38% { transform: rotate(-3deg); }
    43% { transform: rotate(-8.5deg); }
    49% { transform: rotate(2deg); }
    57% { transform: rotate(-4.5deg); }
    65% { transform: rotate(2.5deg); }
    75% { transform: rotate(-2deg); }
    85% { transform: rotate(1.5deg); }
    93% { transform: rotate(-1deg); }
    100% { transform: rotate(1.5deg); }
  }

  /* Every tube rings as the front reaches it - main flare on the kick,
     a smaller flicker on the buffet - sharing the tube's stagger. */
  @keyframes wc-ring {
    0%, 32% { box-shadow: none; }
    35% { box-shadow: 0 0 12px rgba(0, 204, 0, 0.95); border-color: #d6ffe0; }
    40% { box-shadow: 0 0 5px rgba(0, 204, 0, 0.5); }
    44% { box-shadow: 0 0 9px rgba(0, 204, 0, 0.8); border-color: #d6ffe0; }
    52% { box-shadow: 0 0 3px rgba(0, 204, 0, 0.35); }
    60%, 100% { box-shadow: none; }
  }

  /* Striker: lazy wander in the calm, whipped hard through the rack
     by the gust (its sail catches first), clattering off the tubes
     before settling. */
  .wc-striker {
    position: absolute;
    left: 49px;
    top: 14px;
    width: 2px;
    height: 38px;
    transform-origin: 50% 0;
    animation: wc-striker 7s ease-in-out infinite;
  }

  .wc-striker::before {
    content: '';
    position: absolute;
    inset: 0;
    left: 0.5px;
    width: 1px;
    background: rgba(140, 255, 170, 0.6);
  }

  @keyframes wc-striker {
    0% { transform: rotate(3deg); }
    10% { transform: rotate(-3deg); }
    20% { transform: rotate(4deg); }
    28% { transform: rotate(-2deg); }
    33% { transform: rotate(-17deg); }
    36% { transform: rotate(-11deg); }
    40% { transform: rotate(-15deg); }
    45% { transform: rotate(-5deg); }
    50% { transform: rotate(8deg); }
    55% { transform: rotate(1deg); }
    62% { transform: rotate(-5deg); }
    70% { transform: rotate(3deg); }
    80% { transform: rotate(-2.5deg); }
    90% { transform: rotate(1.5deg); }
    100% { transform: rotate(3deg); }
  }

  .wc-disc {
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, rgba(0, 130, 26, 0.95));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.6);
  }

  /* Wind sail below the disc. */
  .wc-sail {
    position: absolute;
    bottom: -30px;
    left: 50%;
    width: 10px;
    height: 20px;
    margin-left: -5px;
    clip-path: polygon(50% 0, 90% 30%, 70% 100%, 30% 100%, 10% 30%);
    background: rgba(0, 160, 32, 0.55);
    border: 1px solid rgba(140, 255, 170, 0.4);
  }

  /* The gust front: staggered streaks sweeping through the frame,
     timed so the leading edge arrives as the tubes start kicking. */
  .wc-wind {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.55), transparent);
    opacity: 0;
    animation: wc-wind 7s ease-in infinite;
  }

  .wc-wind.w1 { top: 26px; left: -26px; width: 26px; }
  .wc-wind.w2 { top: 44px; left: -30px; width: 30px; animation-delay: -6.8s; }
  .wc-wind.w3 { top: 60px; left: -22px; width: 22px; animation-delay: -6.65s; }
  .wc-wind.w4 { top: 78px; left: -28px; width: 28px; animation-delay: -6.5s; }

  @keyframes wc-wind {
    0%, 28% { transform: translateX(0); opacity: 0; }
    31% { opacity: 0.85; }
    44% { transform: translateX(134px); opacity: 0; }
    100% { opacity: 0; }
  }
`,
};

const chimesMarkup = {
  v1: `
      <div class="ch">
        <div class="ch-hanger"></div>
        <div class="ch-wind"></div>
        <div class="ch-wind w2"></div>
        <div class="ch-tube u1"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-tube u2"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-tube u3"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-tube u4"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-tube u5"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-striker"><div class="ch-disc"></div><div class="ch-sail"></div></div>
        <div class="ch-plate"></div>
      </div>
    `,
  v2: `
      <div class="ch">
        <div class="ch-hanger"></div>
        <div class="ch-wind"></div>
        <div class="ch-wind w2"></div>
        <div class="ch-tube u1"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-tube u2"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-tube u3"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-tube u4"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-tube u5"><div class="ch-cord"></div><div class="ch-pipe"></div></div>
        <div class="ch-striker"><div class="ch-disc"></div><div class="ch-sail"></div></div>
        <div class="ch-plate"></div>
      </div>
    `,
  v3: `
      <div class="wc">
        <div class="wc-hanger"></div>
        <div class="wc-wind w1"></div>
        <div class="wc-wind w2"></div>
        <div class="wc-wind w3"></div>
        <div class="wc-wind w4"></div>
        <div class="wc-rig">
          <div class="wc-tube u1"><div class="wc-cord"></div><div class="wc-pipe"></div></div>
          <div class="wc-tube u2"><div class="wc-cord"></div><div class="wc-pipe"></div></div>
          <div class="wc-tube u3"><div class="wc-cord"></div><div class="wc-pipe"></div></div>
          <div class="wc-tube u4"><div class="wc-cord"></div><div class="wc-pipe"></div></div>
          <div class="wc-tube u5"><div class="wc-cord"></div><div class="wc-pipe"></div></div>
          <div class="wc-striker"><div class="wc-disc"></div><div class="wc-sail"></div></div>
          <div class="wc-plate"></div>
        </div>
      </div>
    `,
};

class ConceptChimes extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${chimesStyles[version] || chimesStyles.v3}</style>${chimesMarkup[version] || chimesMarkup.v3}`;
  }
}

if (!customElements.get('concept-chimes')) {
  customElements.define('concept-chimes', ConceptChimes);
}
