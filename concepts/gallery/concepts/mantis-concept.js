const mantisStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A praying mantis in ambush: it sways gently side to side, raptorial
     forelegs folded in the prayer pose, tracking a passing fly with a
     swiveling head - then strikes in a blur and folds back to wait. */
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
    left: 50%;
    bottom: 14px;
    width: 40px;
    height: 60px;
    margin-left: -20px;
    transform-origin: 50% 100%;
    animation: mt-sway 3s ease-in-out infinite;
  }

  @keyframes mt-sway {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  /* Long slanted abdomen. */
  .mt-abdomen {
    position: absolute;
    left: 10px;
    bottom: 0;
    width: 10px;
    height: 44px;
    border-radius: 6px 6px 8px 8px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.6), rgba(0, 140, 28, 0.8));
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform: rotate(10deg);
    transform-origin: 50% 100%;
  }

  /* Folded wings over the abdomen. */
  .mt-wing {
    position: absolute;
    left: 12px;
    bottom: 8px;
    width: 8px;
    height: 34px;
    border-radius: 4px 4px 6px 6px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.4), rgba(0, 110, 22, 0.5));
    transform: rotate(10deg);
    transform-origin: 50% 100%;
  }

  /* Thorax (the long "neck"). */
  .mt-thorax {
    position: absolute;
    left: 16px;
    bottom: 40px;
    width: 4px;
    height: 16px;
    background: rgba(0, 150, 30, 0.85);
    transform: rotate(-8deg);
    transform-origin: 50% 100%;
  }

  /* Triangular head, swivels to track prey. */
  .mt-head {
    position: absolute;
    left: 12px;
    top: 0;
    width: 14px;
    height: 12px;
    clip-path: polygon(50% 0, 100% 60%, 75% 100%, 25% 100%, 0 60%);
    background: radial-gradient(circle at 50% 40%, #f2ffdd, #2a8a3e 70%);
    transform-origin: 50% 100%;
    animation: mt-track 5s ease-in-out infinite;
  }

  /* Big compound eyes. */
  .mt-head::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 3px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 9px 0 0 #041a0a;
  }

  @keyframes mt-track {
    0%, 20% { transform: rotate(-16deg); }
    /* Follows the fly across. */
    46% { transform: rotate(16deg); }
    /* Locks and strikes. */
    58%, 66% { transform: rotate(10deg); }
    80%, 100% { transform: rotate(-16deg); }
  }

  /* Raptorial forelegs: folded prayer, snap out on the strike. */
  .mt-arm {
    position: absolute;
    left: 14px;
    top: 8px;
    width: 18px;
    height: 12px;
    transform-origin: 0% 100%;
    animation: mt-strike 5s ease-in-out infinite;
  }

  .mt-coxa {
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.85);
    transform: rotate(-30deg);
    transform-origin: 0% 50%;
  }

  /* The snap-trap tibia (spined), folded then thrust. */
  .mt-tibia {
    position: absolute;
    left: 8px;
    top: -2px;
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      rgba(214, 255, 224, 0.9) 0 2px,
      rgba(0, 130, 26, 0.8) 2px 3px);
    transform-origin: 0% 50%;
    animation: mt-tibia 5s ease-in-out infinite;
  }

  @keyframes mt-strike {
    0%, 54% { transform: rotate(0deg); }
    /* Lightning strike outward. */
    60% { transform: rotate(-10deg) translateX(6px); }
    66% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  @keyframes mt-tibia {
    0%, 54% { transform: rotate(-120deg); }
    /* Snaps open to grab. */
    60% { transform: rotate(-30deg); }
    66% { transform: rotate(-120deg); }
    100% { transform: rotate(-120deg); }
  }

  /* The fly it's tracking. */
  .mt-fly {
    position: absolute;
    top: 20px;
    left: 0;
    width: 6px;
    height: 4px;
    animation: mt-fly 5s ease-in-out infinite;
  }

  .mt-fly::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(0, 70, 14, 0.95);
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
    0% { transform: translate(6px, 14px); opacity: 1; }
    46% { transform: translate(52px, 6px); opacity: 1; }
    /* Snatched at the strike. */
    60% { transform: translate(58px, 12px); opacity: 1; }
    64% { transform: translate(58px, 12px); opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptMantis extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mantisStyles}</style>
      <div class="mt">
        <div class="mt-twig"></div>
        <div class="mt-fly"></div>
        <div class="mt-body">
          <div class="mt-wing"></div>
          <div class="mt-abdomen"></div>
          <div class="mt-thorax"></div>
          <div class="mt-head"></div>
          <div class="mt-arm">
            <div class="mt-coxa"></div>
            <div class="mt-tibia"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-mantis')) {
  customElements.define('concept-mantis', ConceptMantis);
}
