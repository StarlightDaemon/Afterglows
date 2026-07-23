const billiardsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* The break: the cue draws back and strikes the cue ball, which
     rockets into the racked triangle - balls scatter across the felt,
     one sinks into a corner pocket. */
  .bl {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Felt table with rails and corner pockets. */
  .bl-table {
    position: absolute;
    inset: 4px;
    border-radius: 6px;
    background: radial-gradient(ellipse at 60% 50%, rgba(0, 120, 24, 0.4), rgba(0, 70, 14, 0.55));
    border: 3px solid rgba(0, 90, 18, 0.9);
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.5);
  }

  .bl-pocket {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #020602, rgba(0, 40, 8, 0.7));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  .bl-pocket.tl { left: 6px; top: 6px; }
  .bl-pocket.tr { right: 6px; top: 6px; }
  .bl-pocket.bl { left: 6px; bottom: 6px; }
  .bl-pocket.br { right: 6px; bottom: 6px; }

  /* Racked balls (start clustered, scatter on the break). */
  .bl-ball {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    animation: bl-scatter 5s cubic-bezier(0.2, 0.7, 0.3, 1) infinite;
  }

  .bl-ball::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 1px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.55);
  }

  /* Rack apex around (76, 40); scatter vectors fan out. */
  .bl-ball.r1 { left: 76px; top: 36px; background: radial-gradient(circle at 35% 30%, #d6ffe0, #2a8a3e); --sx: 22px; --sy: -22px; }
  .bl-ball.r2 { left: 84px; top: 31px; background: radial-gradient(circle at 35% 30%, #baffc9, #0a7a2a); --sx: 26px; --sy: -8px; }
  .bl-ball.r3 { left: 84px; top: 41px; background: radial-gradient(circle at 35% 30%, #d6ffe0, #1d6b2a); --sx: 28px; --sy: 12px; }
  .bl-ball.r4 { left: 92px; top: 26px; background: radial-gradient(circle at 35% 30%, #baffc9, #2a8a3e); --sx: 14px; --sy: -26px; }
  .bl-ball.r5 { left: 92px; top: 46px; background: radial-gradient(circle at 35% 30%, #d6ffe0, #0a7a2a); --sx: 16px; --sy: 24px; }
  /* This one heads for the bottom-right pocket and sinks. */
  .bl-ball.r6 { left: 92px; top: 36px; background: radial-gradient(circle at 35% 30%, #f2ffdd, #4fae4f); --sx: 18px; --sy: 8px; animation-name: bl-sink; }

  @keyframes bl-scatter {
    0%, 40% { transform: translate(0, 0); }
    /* Struck at 40%: fly out and settle. */
    64% { transform: translate(var(--sx), var(--sy)); }
    88% { transform: translate(var(--sx), var(--sy)); }
    /* Re-rack. */
    96%, 100% { transform: translate(0, 0); }
  }

  @keyframes bl-sink {
    0%, 40% { transform: translate(0, 0) scale(1); opacity: 1; }
    60% { transform: translate(14px, 14px) scale(1); opacity: 1; }
    /* Drop into the corner pocket. */
    66% { transform: translate(18px, 18px) scale(0.5); opacity: 0; }
    95% { opacity: 0; }
    100% { transform: translate(0, 0) scale(1); opacity: 1; }
  }

  /* Cue ball: sits left, then rockets into the rack, recoils back. */
  .bl-cueball {
    position: absolute;
    left: 22px;
    top: 36px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ffffff, #baffc9 70%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.5);
    animation: bl-cueball 5s cubic-bezier(0.3, 0, 0.4, 1) infinite;
  }

  @keyframes bl-cueball {
    0%, 30% { transform: translateX(0); }
    40% { transform: translateX(48px); }
    /* Recoil slightly and hold near the rack. */
    48% { transform: translateX(40px); }
    88% { transform: translateX(40px); }
    96%, 100% { transform: translateX(0); }
  }

  /* Cue stick: draws back then thrusts. */
  .bl-cue {
    position: absolute;
    left: -30px;
    top: 39px;
    width: 46px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 110, 22, 0.9), rgba(214, 255, 224, 0.9));
    transform-origin: 100% 50%;
    animation: bl-cue 5s infinite;
  }

  /* Tip. */
  .bl-cue::after {
    content: '';
    position: absolute;
    right: -2px;
    top: -0.5px;
    width: 3px;
    height: 4px;
    border-radius: 1px;
    background: #d6ffe0;
  }

  @keyframes bl-cue {
    0% { transform: translateX(28px); }
    /* Draw back. */
    20% { transform: translateX(20px); }
    /* Strike. */
    36% { transform: translateX(44px); }
    40% { transform: translateX(46px); opacity: 1; }
    /* Withdraw. */
    50% { transform: translateX(10px); opacity: 0; }
    96% { transform: translateX(10px); opacity: 0; }
    100% { transform: translateX(28px); opacity: 1; }
  }

  /* Impact spark at the break. */
  .bl-spark {
    position: absolute;
    left: 72px;
    top: 38px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    opacity: 0;
    animation: bl-spark 5s steps(1) infinite;
  }

  @keyframes bl-spark {
    0%, 38% { opacity: 0; }
    40%, 44% { opacity: 1; }
    48%, 100% { opacity: 0; }
  }
`;

class ConceptBilliards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${billiardsStyles}</style>
      <div class="bl">
        <div class="bl-table"></div>
        <div class="bl-pocket tl"></div>
        <div class="bl-pocket tr"></div>
        <div class="bl-pocket bl"></div>
        <div class="bl-pocket br"></div>
        <div class="bl-ball r1"></div>
        <div class="bl-ball r2"></div>
        <div class="bl-ball r3"></div>
        <div class="bl-ball r4"></div>
        <div class="bl-ball r5"></div>
        <div class="bl-ball r6"></div>
        <div class="bl-spark"></div>
        <div class="bl-cueball"></div>
        <div class="bl-cue"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-billiards')) {
  customElements.define('concept-billiards', ConceptBilliards);
}
