const weaverbirdStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A weaverbird constructing its hanging grass nest: suspended upside-down
     from an elastic branch, threading flexible grass blades through interlocking
     warp loops and cinching knots into a dense spherical dome. */
  .weav {
    width: 114px;
    height: 100px;
    position: relative;
  }

  /* Tree branch overhead with elastic sway */
  .weav-branch {
    position: absolute;
    left: 4px;
    top: 10px;
    width: 106px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, rgba(0, 140, 30, 0.9), rgba(0, 50, 12, 0.8));
    border: 1px solid var(--accent, #00cc00);
    transform-origin: left center;
    animation: weav-branch-sway 4s ease-in-out infinite;
  }

  @keyframes weav-branch-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(2deg); }
  }

  /* Nest rig suspended from branch */
  .weav-rig {
    position: absolute;
    left: 40px;
    top: 14px;
    width: 44px;
    height: 78px;
    transform-origin: top center;
    animation: weav-nest-sway 4s ease-in-out infinite;
  }

  @keyframes weav-nest-sway {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(3deg); }
  }

  /* Woven suspension stalk */
  .weav-stalk {
    position: absolute;
    left: 20px;
    top: 0;
    width: 4px;
    height: 16px;
    background: repeating-linear-gradient(180deg, rgba(140, 255, 170, 0.8) 0 2px, rgba(0, 80, 16, 0.9) 2px 4px);
    border: 1px solid var(--accent, #00cc00);
  }

  /* Spherical woven grass nest */
  .weav-nest {
    position: absolute;
    left: 4px;
    top: 14px;
    width: 36px;
    height: 42px;
    border-radius: 50% 50% 45% 45%;
    background:
      repeating-linear-gradient(45deg, rgba(140, 255, 170, 0.5) 0 2px, transparent 2px 6px),
      repeating-linear-gradient(-45deg, rgba(140, 255, 170, 0.5) 0 2px, transparent 2px 6px),
      radial-gradient(circle at 40% 40%, rgba(0, 120, 24, 0.8), rgba(0, 30, 6, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Extra thread density fading in over a slow cycle, layered on top of
     the base cross-hatch — the "mesh grows denser" beat, paced separately
     from the bird's fast working loop so several threading passes read
     as one slow build-up of density. */
  .weav-nest-density {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      repeating-linear-gradient(45deg, rgba(190, 255, 205, 0.55) 0 1.5px, transparent 1.5px 5px),
      repeating-linear-gradient(-45deg, rgba(190, 255, 205, 0.55) 0 1.5px, transparent 1.5px 5px);
    opacity: 0;
    animation: weav-density-grow 8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes weav-density-grow {
    0%, 55% { opacity: 0; }
    85% { opacity: 0.9; }
    100% { opacity: 0; }
  }

  /* Nest entrance chamber opening */
  .weav-opening {
    position: absolute;
    left: 12px;
    bottom: 24px;
    width: 14px;
    height: 16px;
    border-radius: 50%;
    background: rgba(0, 20, 4, 0.95);
    border: 1.5px solid rgba(140, 255, 170, 0.9);
  }

  /* Weaverbird hanging upside-down working on the entrance */
  .weav-bird {
    position: absolute;
    left: -4px;
    bottom: 0;
    width: 32px;
    height: 32px;
    transform: rotate(140deg);
    animation: weav-bird-work 2.4s ease-in-out infinite;
  }

  @keyframes weav-bird-work {
    0%, 100% { transform: rotate(140deg) translate(0, 0); }
    30% { transform: rotate(155deg) translate(-2px, -3px); }
    70% { transform: rotate(130deg) translate(3px, 2px); }
  }

  /* Bird body */
  .weav-bird-body {
    position: absolute;
    left: 6px;
    top: 8px;
    width: 18px;
    height: 14px;
    border-radius: 50% 60% 40% 50%;
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 1), rgba(0, 140, 30, 0.9));
    border: 1px solid var(--accent, #00cc00);
  }

  /* Bird head & working beak */
  .weav-bird-head {
    position: absolute;
    left: 0;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  .weav-beak {
    position: absolute;
    left: -6px;
    top: 2px;
    width: 7px;
    height: 4px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background: rgba(140, 255, 170, 0.95);
  }

  /* Active flexible grass blade being threaded */
  .weav-blade {
    position: absolute;
    left: 8px;
    bottom: 12px;
    width: 24px;
    height: 18px;
    border: 1.5px solid rgba(140, 255, 170, 0.9);
    border-top: none;
    border-left: none;
    border-radius: 0 0 12px 0;
    animation: weav-thread-loop 2.4s ease-in-out infinite;
  }

  @keyframes weav-thread-loop {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
    50% { transform: scale(0.65) rotate(-20deg); opacity: 1; border-color: rgba(190, 255, 205, 1); }
  }
`;

class ConceptWeaverbird extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${weaverbirdStyles}</style>
      <div class="weav">
        <div class="weav-branch"></div>
        <div class="weav-rig">
          <div class="weav-stalk"></div>
          <div class="weav-nest">
            <div class="weav-nest-density"></div>
            <div class="weav-opening"></div>
          </div>
          <div class="weav-blade"></div>
          <div class="weav-bird">
            <div class="weav-bird-body"></div>
            <div class="weav-bird-head">
              <div class="weav-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-weaverbird')) {
  customElements.define('concept-weaverbird', ConceptWeaverbird);
}
