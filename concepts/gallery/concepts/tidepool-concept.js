const tidepoolStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A rocky intertidal tide pool viewed from above: sea anemones flare their
     radial tentacles to the surge, a hermit crab creeps out from its shell to
     scout before tucking back, and refracted wave caustics wash overhead. */
  .tp {
    width: 110px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50% 46% 52% 48% / 48% 52% 46% 54%;
    background: radial-gradient(circle at 45% 45%, rgba(0, 70, 16, 0.9), rgba(0, 25, 6, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 204, 0, 0.2);
  }

  /* Water surge caustics ripple across the pool */
  .tp-surge {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60px 40px at 30% 30%, rgba(140, 255, 170, 0.25), transparent 70%),
      radial-gradient(ellipse 50px 30px at 70% 60%, rgba(140, 255, 170, 0.2), transparent 60%);
    animation: tp-caustic 4s ease-in-out infinite;
    pointer-events: none;
    z-index: 5;
  }

  @keyframes tp-caustic {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
    50% { transform: scale(1.15) rotate(6deg); opacity: 0.85; }
  }

  /* Sea anemone with radial tentacle crown */
  .tp-anemone {
    position: absolute;
    left: 20px;
    top: 22px;
    width: 36px;
    height: 36px;
  }

  .tp-oral-disc {
    position: absolute;
    left: 11px;
    top: 11px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 205, 0.95), rgba(0, 140, 30, 0.8));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.8);
    z-index: 2;
  }

  .tp-tentacle-ring {
    position: absolute;
    inset: 0;
    animation: tp-anemone-pulse 4s ease-in-out infinite;
  }

  @keyframes tp-anemone-pulse {
    0%, 100% { transform: scale(0.85) rotate(0deg); }
    40% { transform: scale(1.15) rotate(8deg); }
    70% { transform: scale(0.95) rotate(-4deg); }
  }

  .tp-arm {
    position: absolute;
    left: 17px;
    top: 0;
    width: 2px;
    height: 13px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), rgba(0, 204, 0, 0.4));
    border-radius: 1px;
    transform-origin: center 18px;
  }

  .tp-arm.a1 { transform: rotate(0deg); }
  .tp-arm.a2 { transform: rotate(45deg); }
  .tp-arm.a3 { transform: rotate(90deg); }
  .tp-arm.a4 { transform: rotate(135deg); }
  .tp-arm.a5 { transform: rotate(180deg); }
  .tp-arm.a6 { transform: rotate(225deg); }
  .tp-arm.a7 { transform: rotate(270deg); }
  .tp-arm.a8 { transform: rotate(315deg); }

  /* Hermit crab habitat & emergence */
  .tp-crab-spot {
    position: absolute;
    right: 22px;
    bottom: 20px;
    width: 32px;
    height: 32px;
  }

  /* Shell */
  .tp-shell {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 20px;
    height: 18px;
    border-radius: 50% 30% 60% 40%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 150, 30, 0.9), rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: inset -2px -2px 6px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  /* Crab crawling out of shell */
  .tp-crab {
    position: absolute;
    left: 2px;
    top: 4px;
    width: 18px;
    height: 18px;
    animation: tp-crab-creep 6s ease-in-out infinite;
    z-index: 2;
  }

  @keyframes tp-crab-creep {
    0%, 15%, 85%, 100% {
      transform: translate(12px, 8px) scale(0.6);
      opacity: 0;
    }
    30%, 70% {
      transform: translate(-4px, -4px) scale(1);
      opacity: 1;
    }
    45%, 55% {
      transform: translate(-6px, -6px) scale(1) rotate(-8deg);
      opacity: 1;
    }
  }

  .tp-crab-claw {
    position: absolute;
    width: 6px;
    height: 5px;
    border-radius: 50% 50% 10% 50%;
    background: rgba(140, 255, 170, 0.95);
    border: 1px solid var(--accent, #00cc00);
  }

  .tp-crab-claw.l { left: 0; top: 0; transform: rotate(-25deg); }
  .tp-crab-claw.r { right: 4px; top: 2px; transform: rotate(15deg); }

  .tp-crab-eyes {
    position: absolute;
    left: 6px;
    top: 2px;
    width: 6px;
    height: 3px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.9);
  }
`;

class ConceptTidepool extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tidepoolStyles}</style>
      <div class="tp">
        <div class="tp-surge"></div>
        <div class="tp-anemone">
          <div class="tp-tentacle-ring">
            <div class="tp-arm a1"></div>
            <div class="tp-arm a2"></div>
            <div class="tp-arm a3"></div>
            <div class="tp-arm a4"></div>
            <div class="tp-arm a5"></div>
            <div class="tp-arm a6"></div>
            <div class="tp-arm a7"></div>
            <div class="tp-arm a8"></div>
          </div>
          <div class="tp-oral-disc"></div>
        </div>
        <div class="tp-crab-spot">
          <div class="tp-crab">
            <div class="tp-crab-claw l"></div>
            <div class="tp-crab-claw r"></div>
            <div class="tp-crab-eyes"></div>
          </div>
          <div class="tp-shell"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tidepool')) {
  customElements.define('concept-tidepool', ConceptTidepool);
}
