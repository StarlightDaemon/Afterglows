const flytrapStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A Venus flytrap lying in wait: its toothed lobes hold open,
     trigger hairs twitching, a fly wanders in - snap - the trap
     clamps shut, then slowly relaxes open again for the next. */
  .vt {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Stem + base. */
  .vt-stem {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 4px;
    height: 40px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.8), rgba(0, 110, 22, 0.8));
  }

  .vt-base {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 26px;
    height: 8px;
    margin-left: -13px;
    border-radius: 50% 50% 40% 40%;
    background: rgba(0, 90, 18, 0.7);
  }

  /* The trap head. */
  .vt-head {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 0;
    height: 0;
  }

  /* Two lobes hinged along the midline. */
  .vt-lobe {
    position: absolute;
    top: 0;
    width: 26px;
    height: 34px;
    background: radial-gradient(ellipse at 50% 40%,
      rgba(190, 255, 205, 0.55),
      rgba(0, 160, 32, 0.6) 60%,
      rgba(0, 90, 18, 0.75));
    border: 1px solid rgba(140, 255, 170, 0.7);
    transform-origin: 100% 50%;
  }

  .vt-lobe.left {
    left: -26px;
    border-radius: 80% 20% 30% 70% / 60% 40% 60% 40%;
    animation: vt-snap-l 6s infinite;
  }

  .vt-lobe.right {
    left: 0;
    transform-origin: 0% 50%;
    border-radius: 20% 80% 70% 30% / 40% 60% 40% 60%;
    animation: vt-snap-r 6s infinite;
  }

  /* Teeth: cilia along the outer rim. */
  .vt-teeth {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 6px;
    background: repeating-linear-gradient(180deg,
      rgba(214, 255, 224, 0.9) 0 2px,
      transparent 2px 6px);
  }

  .vt-lobe.left .vt-teeth { left: -3px; }
  .vt-lobe.right .vt-teeth { right: -3px; }

  /* Trigger hairs inside. */
  .vt-hair {
    position: absolute;
    width: 1px;
    height: 6px;
    background: rgba(140, 255, 170, 0.8);
    animation: vt-twitch 6s infinite;
  }

  .vt-lobe.left .vt-hair.h1 { left: 8px; top: 10px; }
  .vt-lobe.left .vt-hair.h2 { left: 14px; top: 18px; }
  .vt-lobe.right .vt-hair.h1 { right: 8px; top: 10px; }
  .vt-lobe.right .vt-hair.h2 { right: 14px; top: 18px; }

  @keyframes vt-twitch {
    0%, 28% { transform: rotate(0deg); }
    30% { transform: rotate(-12deg); }
    33% { transform: rotate(8deg); }
    36%, 100% { transform: rotate(0deg); }
  }

  /* The snap: open (splayed) most of the cycle, clamp fast at 38%,
     hold, then ease open. */
  @keyframes vt-snap-l {
    0%, 36% { transform: rotate(-32deg); }
    40% { transform: rotate(-2deg); }
    44% { transform: rotate(-6deg); }
    70% { transform: rotate(-6deg); }
    90%, 100% { transform: rotate(-32deg); }
  }

  @keyframes vt-snap-r {
    0%, 36% { transform: rotate(32deg); }
    40% { transform: rotate(2deg); }
    44% { transform: rotate(6deg); }
    70% { transform: rotate(6deg); }
    90%, 100% { transform: rotate(32deg); }
  }

  /* The fly: buzzes in, gets caught at the snap. */
  .vt-fly {
    position: absolute;
    left: 0;
    top: 20px;
    width: 6px;
    height: 4px;
    animation: vt-fly 6s infinite;
  }

  .vt-fly::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(0, 70, 14, 0.95);
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.6);
  }

  /* Wing shimmer. */
  .vt-fly::after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 8px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.4);
    animation: vt-flywing 0.08s steps(2) infinite;
  }

  @keyframes vt-flywing {
    0% { transform: scaleY(1); }
    100% { transform: scaleY(0.5); }
  }

  @keyframes vt-fly {
    0% { left: 4px; top: 8px; opacity: 0; }
    8% { opacity: 1; }
    /* Wander toward the open trap. */
    22% { left: 34px; top: 28px; }
    34% { left: 48px; top: 24px; }
    /* Caught - vanishes as the trap closes. */
    38% { left: 50px; top: 24px; opacity: 1; }
    41% { left: 50px; top: 24px; opacity: 0; }
    100% { opacity: 0; }
  }

  /* Digest glow while clamped. */
  .vt-glow {
    position: absolute;
    left: 50%;
    top: 24px;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 204, 0, 0.4), transparent 70%);
    opacity: 0;
    animation: vt-glow 6s infinite;
  }

  @keyframes vt-glow {
    0%, 42% { opacity: 0; }
    50% { opacity: 0.9; }
    68% { opacity: 0.5; }
    80%, 100% { opacity: 0; }
  }
`;

class ConceptFlytrap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${flytrapStyles}</style>
      <div class="vt">
        <div class="vt-base"></div>
        <div class="vt-stem"></div>
        <div class="vt-head">
          <div class="vt-glow"></div>
          <div class="vt-lobe left">
            <div class="vt-teeth"></div>
            <div class="vt-hair h1"></div>
            <div class="vt-hair h2"></div>
          </div>
          <div class="vt-lobe right">
            <div class="vt-teeth"></div>
            <div class="vt-hair h1"></div>
            <div class="vt-hair h2"></div>
          </div>
        </div>
        <div class="vt-fly"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-flytrap')) {
  customElements.define('concept-flytrap', ConceptFlytrap);
}
