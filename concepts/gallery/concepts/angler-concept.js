// v1 below is the archived original; v2 fixes the floating anatomy: the
// illicium stalk's posterior end hung ~20px above the body outline (it now
// roots on the head as a dome arc ending at the lure), the lower jaw's
// teeth pointed down instead of up, the eye straddled the body edge, and
// the prey motes outlived the jaw snap they were supposed to feed.
// v3 is the full atmospheric rebuild: the lure becomes an actual light
// source (a blooming light field that carries the reveal), the mouth gets
// both jaws so the snap closes on something, the fish gains dorsal spines,
// a flicking pectoral fin and glimmering flank photophores, and the strike
// is staged - the whole fish lunges forward as the jaws slam shut.
const anglerStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Deep-water ambush: only the lure burns steadily in the dark. When
     it flares, the fish's outline ghosts into view behind it, prey
     motes drift toward the light, and once a cycle the jaw snaps. */
  .angler {
    width: 112px;
    height: 96px;
    position: relative;
  }

  /* Body silhouette: mostly invisible, revealed on the flare. */
  .angler-body {
    position: absolute;
    right: 6px;
    top: 26px;
    width: 74px;
    height: 44px;
    border-radius: 58% 42% 46% 54% / 62% 48% 52% 38%;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: radial-gradient(ellipse at 30% 45%, rgba(0, 90, 18, 0.35), rgba(0, 25, 5, 0.5));
    animation: angler-reveal 6.4s ease-in-out infinite;
  }

  @keyframes angler-reveal {
    0%, 26%, 88%, 100% { opacity: 0.14; }
    38%, 66% { opacity: 0.85; }
  }

  /* Tail fin. */
  .angler-tail {
    position: absolute;
    right: 0;
    top: 38px;
    width: 14px;
    height: 22px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%, 72% 50%);
    background: rgba(0, 140, 28, 0.5);
    animation: angler-reveal 6.4s ease-in-out infinite, angler-tailbeat 1.8s ease-in-out infinite;
  }

  @keyframes angler-tailbeat {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.75); }
  }

  /* Eye: a pinprick that catches the flare. */
  .angler-eye {
    position: absolute;
    right: 58px;
    top: 38px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
    animation: angler-eye 6.4s ease-in-out infinite;
  }

  @keyframes angler-eye {
    0%, 26%, 88%, 100% { opacity: 0.2; box-shadow: none; }
    38%, 66% { opacity: 1; box-shadow: 0 0 5px rgba(190, 255, 205, 0.9); }
  }

  /* Jaw: hinged at the back, snaps shut once per cycle. Teeth are a
     zigzag clip on the jaw bar. */
  .angler-jaw {
    position: absolute;
    right: 44px;
    top: 52px;
    width: 34px;
    height: 12px;
    transform-origin: 100% 20%;
    animation: angler-jaw 6.4s infinite;
  }

  .angler-jaw::before {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: polygon(0 40%, 12% 100%, 24% 40%, 36% 100%, 48% 40%, 60% 100%, 72% 40%, 84% 100%, 96% 40%, 100% 60%, 100% 0, 0 0);
    background: rgba(140, 255, 170, 0.55);
  }

  @keyframes angler-jaw {
    0%, 40% { transform: rotate(18deg); opacity: 0.35; }
    46%, 52% { transform: rotate(18deg); opacity: 0.8; }
    /* The snap. */
    54% { transform: rotate(1deg); opacity: 0.9; }
    56% { transform: rotate(6deg); }
    58% { transform: rotate(2deg); }
    70% { transform: rotate(2deg); opacity: 0.6; }
    82%, 100% { transform: rotate(18deg); opacity: 0.35; }
  }

  /* Illicium: the curved stalk arcing over the head. */
  .angler-stalk {
    position: absolute;
    right: 66px;
    top: 12px;
    width: 26px;
    height: 22px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    border-right: none;
    border-bottom: none;
    border-radius: 100% 0 0 0;
    animation: angler-reveal 6.4s ease-in-out infinite;
  }

  /* Esca: the lure. The one steady light in the scene. */
  .angler-lure {
    position: absolute;
    right: 90px;
    top: 32px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #baffc9 45%, rgba(0, 204, 0, 0.9));
    animation: angler-lure 6.4s ease-in-out infinite;
  }

  @keyframes angler-lure {
    0%, 20% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.7); transform: scale(0.9); }
    38%, 60% { box-shadow: 0 0 22px rgba(140, 255, 170, 1), 0 0 44px rgba(0, 204, 0, 0.55); transform: scale(1.25); }
    80%, 100% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.7); transform: scale(0.9); }
  }

  /* Prey motes spiralling in toward the light. */
  .angler-prey {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.85);
    animation: angler-prey 6.4s ease-in infinite;
  }

  .angler-prey.y1 { left: 2px;  top: 12px; --px: 12px;  --py: 22px; }
  .angler-prey.y2 { left: 6px;  top: 74px; --px: 10px;  --py: -34px; animation-delay: -0.6s; }
  .angler-prey.y3 { left: 26px; top: 4px;  --px: -8px;  --py: 30px; animation-delay: -1.1s; }

  @keyframes angler-prey {
    0%, 24% { transform: translate(0, 0); opacity: 0; }
    32% { opacity: 0.9; }
    58% { transform: translate(var(--px), var(--py)); opacity: 0.9; }
    64% { transform: translate(var(--px), var(--py)) scale(0.4); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Marine snow: slow drifting specks for depth. */
  .angler-snow {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.35);
    animation: angler-snow linear infinite;
  }

  .angler-snow.s1 { left: 90px; animation-duration: 7s; }
  .angler-snow.s2 { left: 50px; animation-duration: 9s; animation-delay: -4s; }
  .angler-snow.s3 { left: 14px; animation-duration: 8s; animation-delay: -2.5s; }

  @keyframes angler-snow {
    0% { top: -4px; opacity: 0; }
    15% { opacity: 0.7; }
    90% { opacity: 0.5; }
    100% { top: 98px; opacity: 0; }
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

  /* Deep-water ambush: only the lure burns steadily in the dark. When
     it flares, the fish's outline ghosts into view behind it, prey
     motes converge on the light, and the jaw snaps shut on them. The
     illicium now roots on the head and every part sits on the body. */
  .angler {
    width: 112px;
    height: 96px;
    position: relative;
  }

  /* Body silhouette: mostly invisible, revealed on the flare. */
  .angler-body {
    position: absolute;
    right: 6px;
    top: 26px;
    width: 74px;
    height: 44px;
    border-radius: 58% 42% 46% 54% / 62% 48% 52% 38%;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: radial-gradient(ellipse at 30% 45%, rgba(0, 90, 18, 0.35), rgba(0, 25, 5, 0.5));
    animation: angler-reveal 6.4s ease-in-out infinite;
  }

  @keyframes angler-reveal {
    0%, 26%, 88%, 100% { opacity: 0.14; }
    38%, 66% { opacity: 0.85; }
  }

  /* Tail fin. */
  .angler-tail {
    position: absolute;
    right: 0;
    top: 38px;
    width: 14px;
    height: 22px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%, 72% 50%);
    background: rgba(0, 140, 28, 0.5);
    animation: angler-reveal 6.4s ease-in-out infinite, angler-tailbeat 1.8s ease-in-out infinite;
  }

  @keyframes angler-tailbeat {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.75); }
  }

  /* Eye: a pinprick that catches the flare, set forward on the head
     just inside the outline instead of straddling it. */
  .angler-eye {
    position: absolute;
    right: 64px;
    top: 36px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
    animation: angler-eye 6.4s ease-in-out infinite;
  }

  @keyframes angler-eye {
    0%, 26%, 88%, 100% { opacity: 0.2; box-shadow: none; }
    38%, 66% { opacity: 1; box-shadow: 0 0 5px rgba(190, 255, 205, 0.9); }
  }

  /* Lower jaw: hinged at the back, teeth zigzag pointing UP into the
     mouth, snapping shut once per cycle. In the dark it fades to the
     same near-invisibility as the body. */
  .angler-jaw {
    position: absolute;
    right: 44px;
    top: 52px;
    width: 34px;
    height: 12px;
    transform-origin: 100% 20%;
    animation: angler-jaw 6.4s infinite;
  }

  .angler-jaw::before {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: polygon(0 60%, 12% 0, 24% 60%, 36% 0, 48% 60%, 60% 0, 72% 60%, 84% 0, 96% 60%, 100% 40%, 100% 100%, 0 100%);
    background: rgba(140, 255, 170, 0.55);
  }

  @keyframes angler-jaw {
    0%, 40% { transform: rotate(18deg); opacity: 0.18; }
    46%, 52% { transform: rotate(18deg); opacity: 0.8; }
    /* The snap. */
    54% { transform: rotate(1deg); opacity: 0.9; }
    56% { transform: rotate(6deg); }
    58% { transform: rotate(2deg); }
    70% { transform: rotate(2deg); opacity: 0.6; }
    82%, 100% { transform: rotate(18deg); opacity: 0.18; }
  }

  /* Illicium: a dome arc rooted on the head outline, coming down at
     the lure. Both endpoints sit on something instead of floating. */
  .angler-stalk {
    position: absolute;
    right: 66px;
    top: 18px;
    width: 26px;
    height: 14px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    border-bottom: none;
    border-radius: 100% 100% 0 0;
    animation: angler-reveal 6.4s ease-in-out infinite;
  }

  /* Esca: the lure. The one steady light in the scene. */
  .angler-lure {
    position: absolute;
    right: 90px;
    top: 32px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #baffc9 45%, rgba(0, 204, 0, 0.9));
    animation: angler-lure 6.4s ease-in-out infinite;
  }

  @keyframes angler-lure {
    0%, 20% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.7); transform: scale(0.9); }
    38%, 60% { box-shadow: 0 0 22px rgba(140, 255, 170, 1), 0 0 44px rgba(0, 204, 0, 0.55); transform: scale(1.25); }
    80%, 100% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.7); transform: scale(0.9); }
  }

  /* Prey motes converging on the lure and mouth, all gone by the time
     the jaw finishes snapping - the snap is what eats them. */
  .angler-prey {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.85);
    animation: angler-prey 6.4s ease-in infinite;
  }

  .angler-prey.y1 { left: 2px;  top: 12px; --px: 12px;  --py: 18px; }
  .angler-prey.y2 { left: 6px;  top: 74px; --px: 10px;  --py: -30px; animation-delay: -0.3s; }
  .angler-prey.y3 { left: 26px; top: 4px;  --px: -6px;  --py: 28px; animation-delay: -0.55s; }

  @keyframes angler-prey {
    0%, 24% { transform: translate(0, 0); opacity: 0; }
    30% { opacity: 0.9; }
    50% { transform: translate(var(--px), var(--py)); opacity: 0.9; }
    56% { transform: translate(var(--px), var(--py)) scale(0.4); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Marine snow: slow drifting specks for depth. */
  .angler-snow {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.35);
    animation: angler-snow linear infinite;
  }

  .angler-snow.s1 { left: 90px; animation-duration: 7s; }
  .angler-snow.s2 { left: 50px; animation-duration: 9s; animation-delay: -4s; }
  .angler-snow.s3 { left: 14px; animation-duration: 8s; animation-delay: -2.5s; }

  @keyframes angler-snow {
    0% { top: -4px; opacity: 0; }
    15% { opacity: 0.7; }
    90% { opacity: 0.5; }
    100% { top: 98px; opacity: 0; }
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

  /* Deep-water ambush, staged: in the dark only the lure pulses and
     the flank photophores glimmer. The lure blooms into a light field
     that reveals the fish, prey drift into the glow - and the whole
     fish lunges as both jaws slam shut on them, then sinks back into
     the black. One 6.4s cycle. */
  .ag {
    width: 112px;
    height: 96px;
    position: relative;
  }

  /* Everything that IS the fish rides this wrapper so the strike
     lunge moves lure, jaws and body as one animal. */
  .ag-fish {
    position: absolute;
    inset: 0;
    animation: ag-lunge 6.4s infinite;
  }

  @keyframes ag-lunge {
    0%, 48% { transform: translateX(0); animation-timing-function: cubic-bezier(0.7, 0, 0.9, 1); }
    /* The strike. */
    53% { transform: translateX(-8px); animation-timing-function: ease-out; }
    58% { transform: translateX(-6px); animation-timing-function: ease-in-out; }
    78%, 100% { transform: translateX(0); }
  }

  /* The lure's light field: the one thing that owns the scene. It
     blooms for the ambush, spikes at the snap, then dies back to a
     small idle halo. Sits behind the fish so the body reads as a
     silhouette rim-lit by its own lure. */
  .ag-light {
    position: absolute;
    left: -30px;
    top: -12px;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(160, 255, 185, 0.35), rgba(0, 120, 24, 0.16) 42%, transparent 68%);
    animation: ag-light 6.4s ease-in-out infinite;
  }

  @keyframes ag-light {
    0%, 22% { opacity: 0.2; transform: scale(0.55); }
    36%, 50% { opacity: 0.85; transform: scale(1); }
    53% { opacity: 1; transform: scale(1.08); }
    70% { opacity: 0.4; transform: scale(0.85); }
    85%, 100% { opacity: 0.2; transform: scale(0.55); }
  }

  /* Body silhouette: near-invisible in the dark, revealed by the
     bloom. */
  .ag-body {
    position: absolute;
    right: 6px;
    top: 26px;
    width: 74px;
    height: 44px;
    border-radius: 58% 42% 46% 54% / 62% 48% 52% 38%;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: radial-gradient(ellipse at 30% 45%, rgba(0, 90, 18, 0.35), rgba(0, 25, 5, 0.5));
    animation: ag-reveal 6.4s ease-in-out infinite;
  }

  @keyframes ag-reveal {
    0%, 22% { opacity: 0.1; }
    34%, 62% { opacity: 0.88; }
    80%, 100% { opacity: 0.1; }
  }

  /* Dorsal spines along the crown of the back (x60-88, where the
     body's top edge runs y26-28; wider and the spikes float above
     the curving outline). */
  .ag-dorsal {
    position: absolute;
    right: 24px;
    top: 20px;
    width: 28px;
    height: 8px;
    clip-path: polygon(0 100%, 10% 30%, 20% 100%, 35% 10%, 48% 100%, 62% 25%, 74% 100%, 88% 40%, 100% 100%);
    background: rgba(0, 140, 28, 0.55);
    animation: ag-reveal 6.4s ease-in-out infinite;
  }

  /* Tail fin, beating. */
  .ag-tail {
    position: absolute;
    right: 0;
    top: 38px;
    width: 14px;
    height: 22px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%, 72% 50%);
    background: rgba(0, 140, 28, 0.5);
    animation: ag-reveal 6.4s ease-in-out infinite, ag-tailbeat 1.8s ease-in-out infinite;
  }

  @keyframes ag-tailbeat {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.75); }
  }

  /* Pectoral fin, flicking against the drift. */
  .ag-fin {
    position: absolute;
    right: 42px;
    top: 54px;
    width: 12px;
    height: 12px;
    clip-path: polygon(0 20%, 100% 0, 70% 100%);
    background: rgba(0, 150, 30, 0.6);
    transform-origin: 80% 10%;
    animation: ag-reveal 6.4s ease-in-out infinite, ag-finflick 1.8s ease-in-out infinite;
  }

  @keyframes ag-finflick {
    0%, 100% { rotate: -6deg; }
    50% { rotate: 8deg; }
  }

  /* Flank photophores: the fish's own faint constellation, alive
     even in the dark phase. */
  .ag-dot {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
    animation: ag-dot 4s ease-in-out infinite;
  }

  .ag-dot.d1 { right: 64px; top: 58px; }
  .ag-dot.d2 { right: 52px; top: 62px; animation-delay: -1.3s; }
  .ag-dot.d3 { right: 38px; top: 63px; animation-delay: -2.1s; }
  .ag-dot.d4 { right: 24px; top: 58px; animation-delay: -3s; }

  @keyframes ag-dot {
    0%, 100% { opacity: 0.2; box-shadow: none; }
    50% { opacity: 0.7; box-shadow: 0 0 3px rgba(140, 255, 170, 0.8); }
  }

  /* Eye: a pinprick that catches the bloom. */
  .ag-eye {
    position: absolute;
    right: 64px;
    top: 36px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
    animation: ag-eye 6.4s ease-in-out infinite;
  }

  @keyframes ag-eye {
    0%, 22% { opacity: 0.2; box-shadow: none; }
    34%, 62% { opacity: 1; box-shadow: 0 0 5px rgba(190, 255, 205, 0.9); }
    80%, 100% { opacity: 0.2; box-shadow: none; }
  }

  /* Upper jaw: fixed to the skull, teeth pointing down. */
  .ag-jawtop {
    position: absolute;
    right: 50px;
    top: 47px;
    width: 28px;
    height: 6px;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 88% 100%, 76% 40%, 64% 100%, 52% 40%, 40% 100%, 28% 40%, 16% 100%, 4% 40%);
    background: rgba(140, 255, 170, 0.55);
    animation: ag-reveal 6.4s ease-in-out infinite;
  }

  /* Lower jaw: hinged at the back, teeth up, gaping wider as the
     prey close in and slamming shut at the lunge. */
  .ag-jaw {
    position: absolute;
    right: 48px;
    top: 53px;
    width: 30px;
    height: 11px;
    transform-origin: 100% 20%;
    animation: ag-jaw 6.4s infinite;
  }

  .ag-jaw::before {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: polygon(0 60%, 12% 0, 24% 60%, 36% 0, 48% 60%, 60% 0, 72% 60%, 84% 0, 96% 60%, 100% 40%, 100% 100%, 0 100%);
    background: rgba(140, 255, 170, 0.55);
  }

  @keyframes ag-jaw {
    0%, 26% { transform: rotate(14deg); opacity: 0.12; }
    /* Gape widens with the bloom, wider still as prey arrive. */
    36%, 44% { transform: rotate(18deg); opacity: 0.85; }
    50% { transform: rotate(22deg); }
    /* The slam. */
    53% { transform: rotate(1deg); }
    56% { transform: rotate(6deg); }
    59% { transform: rotate(2deg); }
    72% { transform: rotate(7deg); opacity: 0.5; }
    84%, 100% { transform: rotate(14deg); opacity: 0.12; }
  }

  /* Illicium: dome arc rooted on the head, coming down at the lure. */
  .ag-stalk {
    position: absolute;
    right: 66px;
    top: 18px;
    width: 26px;
    height: 14px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    border-bottom: none;
    border-radius: 100% 100% 0 0;
    animation: ag-reveal 6.4s ease-in-out infinite;
  }

  /* Esca: the lure itself. */
  .ag-lure {
    position: absolute;
    right: 90px;
    top: 32px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #baffc9 45%, rgba(0, 204, 0, 0.9));
    animation: ag-lure 6.4s ease-in-out infinite;
  }

  @keyframes ag-lure {
    0%, 20% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.7); transform: scale(0.9); }
    36%, 50% { box-shadow: 0 0 22px rgba(140, 255, 170, 1), 0 0 44px rgba(0, 204, 0, 0.55); transform: scale(1.3); }
    53% { box-shadow: 0 0 28px rgba(214, 255, 224, 1), 0 0 52px rgba(0, 204, 0, 0.7); transform: scale(1.35); }
    72% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.7); transform: scale(1); }
    85%, 100% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.7); transform: scale(0.9); }
  }

  /* Prey motes drifting into the glow - two head for the gape, one
     hangs at the lure. All gone by the time the jaws finish closing;
     the strike is what ends them. */
  .ag-prey {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.85);
    animation: ag-prey 6.4s ease-in infinite;
  }

  .ag-prey.y1 { left: 4px;  top: 10px; --px: 14px; --py: 26px; }
  .ag-prey.y2 { left: 2px;  top: 68px; --px: 20px; --py: -18px; animation-delay: -0.15s; }
  .ag-prey.y3 { left: 30px; top: 2px;  --px: -8px; --py: 42px; animation-delay: -0.3s; }

  @keyframes ag-prey {
    0%, 24% { transform: translate(0, 0); opacity: 0; }
    30% { opacity: 0.9; }
    50% { transform: translate(var(--px), var(--py)); opacity: 0.9; }
    54% { transform: translate(var(--px), var(--py)) scale(0.4); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Marine snow: slow drifting specks for depth. */
  .ag-snow {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.35);
    animation: ag-snow linear infinite;
  }

  .ag-snow.s1 { left: 90px; animation-duration: 7s; }
  .ag-snow.s2 { left: 50px; animation-duration: 9s; animation-delay: -4s; }
  .ag-snow.s3 { left: 14px; animation-duration: 8s; animation-delay: -2.5s; }

  @keyframes ag-snow {
    0% { top: -4px; opacity: 0; }
    15% { opacity: 0.7; }
    90% { opacity: 0.5; }
    100% { top: 98px; opacity: 0; }
  }
`,
};

const anglerMarkup = {
  v1: `
      <div class="angler">
        <div class="angler-snow s1"></div>
        <div class="angler-snow s2"></div>
        <div class="angler-snow s3"></div>
        <div class="angler-body"></div>
        <div class="angler-tail"></div>
        <div class="angler-eye"></div>
        <div class="angler-jaw"></div>
        <div class="angler-stalk"></div>
        <div class="angler-lure"></div>
        <div class="angler-prey y1"></div>
        <div class="angler-prey y2"></div>
        <div class="angler-prey y3"></div>
      </div>
    `,
  v2: `
      <div class="angler">
        <div class="angler-snow s1"></div>
        <div class="angler-snow s2"></div>
        <div class="angler-snow s3"></div>
        <div class="angler-body"></div>
        <div class="angler-tail"></div>
        <div class="angler-eye"></div>
        <div class="angler-jaw"></div>
        <div class="angler-stalk"></div>
        <div class="angler-lure"></div>
        <div class="angler-prey y1"></div>
        <div class="angler-prey y2"></div>
        <div class="angler-prey y3"></div>
      </div>
    `,
  v3: `
      <div class="ag">
        <div class="ag-snow s1"></div>
        <div class="ag-snow s2"></div>
        <div class="ag-snow s3"></div>
        <div class="ag-fish">
          <div class="ag-light"></div>
          <div class="ag-body"></div>
          <div class="ag-dorsal"></div>
          <div class="ag-tail"></div>
          <div class="ag-fin"></div>
          <div class="ag-dot d1"></div>
          <div class="ag-dot d2"></div>
          <div class="ag-dot d3"></div>
          <div class="ag-dot d4"></div>
          <div class="ag-eye"></div>
          <div class="ag-jawtop"></div>
          <div class="ag-jaw"></div>
          <div class="ag-stalk"></div>
          <div class="ag-lure"></div>
        </div>
        <div class="ag-prey y1"></div>
        <div class="ag-prey y2"></div>
        <div class="ag-prey y3"></div>
      </div>
    `,
};

class ConceptAngler extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${anglerStyles[version] || anglerStyles.v3}</style>${anglerMarkup[version] || anglerMarkup.v3}`;
  }
}

if (!customElements.get('concept-angler')) {
  customElements.define('concept-angler', ConceptAngler);
}
