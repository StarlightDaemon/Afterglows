const marblesRunStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A multi-stage wooden marble run cascade: glowing glass marbles roll down
     switchback tracks, spiral through a funnel vortex, trip a flip-flop rocker gate,
     and bounce down stepped xylophone sound bells. */
  .marb {
    width: 116px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Track 1: Top inclined switchback slope (left to right) */
  .marb-ramp1 {
    position: absolute;
    left: 12px;
    top: 18px;
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, rgba(0, 140, 30, 0.9), rgba(0, 80, 16, 0.9));
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    transform: rotate(8deg);
  }

  /* Funnel vortex track collector */
  .marb-funnel {
    position: absolute;
    right: 14px;
    top: 26px;
    width: 28px;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 65% 100%, 35% 100%);
    background: radial-gradient(circle at 50% 30%, rgba(140, 255, 170, 0.8), rgba(0, 50, 12, 0.95));
    border: 1px solid var(--accent, #00cc00);
  }

  /* Track 2: Middle switchback slope (right to left) */
  .marb-ramp2 {
    position: absolute;
    left: 28px;
    top: 50px;
    width: 66px;
    height: 4px;
    background: linear-gradient(270deg, rgba(0, 140, 30, 0.9), rgba(0, 80, 16, 0.9));
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    transform: rotate(-10deg);
  }

  /* Flip-flop rocker toggle gate */
  .marb-rocker {
    position: absolute;
    left: 18px;
    top: 60px;
    width: 22px;
    height: 6px;
    border-radius: 3px;
    background: rgba(190, 255, 205, 0.95);
    border: 1px solid var(--accent, #00cc00);
    transform-origin: center center;
    animation: marb-gate-trip 3.6s ease-in-out infinite;
  }

  @keyframes marb-gate-trip {
    0%, 45% { transform: rotate(-15deg); }
    55%, 90% { transform: rotate(15deg); }
    100% { transform: rotate(-15deg); }
  }

  /* Bell the rocker trips as the marble rolls through */
  .marb-bell {
    position: absolute;
    left: 14px;
    top: 52px;
    width: 10px;
    height: 8px;
    border-radius: 50% 50% 0 0;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
    transform-origin: bottom center;
    animation: marb-bell-ring 3.6s ease-in-out infinite;
  }

  @keyframes marb-bell-ring {
    0%, 58%, 74%, 100% { transform: scale(1) rotate(0deg); box-shadow: none; }
    62% { transform: scale(1.2) rotate(-8deg); box-shadow: 0 0 8px rgba(190, 255, 205, 0.95); }
    68% { transform: scale(1.2) rotate(8deg); box-shadow: 0 0 8px rgba(190, 255, 205, 0.95); }
  }

  /* Collection bowl at the run's end */
  .marb-bowl {
    position: absolute;
    left: 86px;
    top: 86px;
    width: 22px;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: radial-gradient(ellipse at 50% 0%, rgba(0, 140, 30, 0.7), rgba(0, 40, 8, 0.95));
    border: 1px solid var(--accent, #00cc00);
    border-top: none;
  }

  /* Stepped xylophone sound stair rungs at bottom */
  .marb-stair {
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  .marb-stair.s1 { left: 40px; top: 72px; width: 22px; }
  .marb-stair.s2 { left: 62px; top: 80px; width: 22px; }
  .marb-stair.s3 { left: 84px; top: 88px; width: 22px; }

  /* Rolling glowing glass marble following multi-stage track path.
     Through the funnel (22-40%) it genuinely spirals — two tightening
     turns around the funnel's throat, not a straight interpolated move —
     before continuing down to the stairs and settling in the bowl. */
  .marb-ball {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.9));
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.95);
    z-index: 5;
    animation: marb-run-path 3.6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  @keyframes marb-run-path {
    0%   { left: 12px; top: 12px; transform: rotate(0deg) scale(1); }
    18%  { left: 74px; top: 20px; transform: rotate(0deg) scale(1); }
    22%  { left: 92px; top: 24px; transform: rotate(140deg) scale(0.95); }
    26%  { left: 96px; top: 30px; transform: rotate(320deg) scale(0.9); }
    30%  { left: 90px; top: 36px; transform: rotate(500deg) scale(0.85); }
    34%  { left: 93px; top: 40px; transform: rotate(660deg) scale(0.82); }
    40%  { left: 86px; top: 44px; transform: rotate(720deg) scale(1); }
    55%  { left: 24px; top: 54px; transform: rotate(720deg) scale(1); }
    65%  { left: 18px; top: 66px; transform: rotate(720deg) scale(1); }
    75%  { left: 48px; top: 68px; transform: rotate(720deg) scale(1); }
    85%  { left: 70px; top: 76px; transform: rotate(720deg) scale(1); }
    95%  { left: 92px; top: 84px; opacity: 1; transform: rotate(720deg) scale(0.95); }
    100% { left: 98px; top: 90px; opacity: 0; transform: rotate(720deg) scale(0.7); }
  }
`;

class ConceptMarblesRun extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${marblesRunStyles}</style>
      <div class="marb">
        <div class="marb-ramp1"></div>
        <div class="marb-funnel"></div>
        <div class="marb-ramp2"></div>
        <div class="marb-rocker"></div>
        <div class="marb-bell"></div>
        <div class="marb-stair s1"></div>
        <div class="marb-stair s2"></div>
        <div class="marb-stair s3"></div>
        <div class="marb-bowl"></div>
        <div class="marb-ball"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-marbles-run')) {
  customElements.define('concept-marbles-run', ConceptMarblesRun);
}
