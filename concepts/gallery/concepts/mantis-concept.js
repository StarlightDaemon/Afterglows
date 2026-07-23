const mantisStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A praying mantis in ambush, in profile facing left: segmented
     abdomen raised behind, long neck-like thorax, triangular head
     tracking a passing fly, raptorial forelegs folded in the prayer
     pose - then a lightning strike snatches the fly out of the air. */
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
    left: 34px;
    bottom: 15px;
    width: 66px;
    height: 60px;
    transform-origin: 50% 100%;
    animation: mt-sway 3s ease-in-out infinite;
  }

  @keyframes mt-sway {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  /* Walking legs down to the twig. */
  .mt-leg {
    position: absolute;
    width: 2px;
    background: rgba(0, 150, 30, 0.75);
    border-radius: 1px;
    transform-origin: 50% 0%;
  }

  .mt-leg.f1 { left: 40px; top: 30px; height: 30px; transform: rotate(18deg); }
  .mt-leg.f2 { left: 48px; top: 32px; height: 28px; transform: rotate(-22deg); }
  .mt-leg.f3 { left: 44px; top: 32px; height: 28px; transform: rotate(-6deg); opacity: 0.6; }

  /* Segmented abdomen, raised behind. */
  .mt-abdomen {
    position: absolute;
    left: 28px;
    top: 26px;
    width: 34px;
    height: 13px;
    border-radius: 50% 60% 40% 50% / 60% 70% 50% 40%;
    background:
      linear-gradient(180deg, rgba(190, 255, 205, 0.35), transparent 55%),
      repeating-linear-gradient(100deg,
        rgba(190, 255, 205, 0.55) 0 3px,
        rgba(0, 140, 28, 0.8) 3px 7px);
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform: rotate(-16deg);
    transform-origin: 10% 60%;
  }

  /* Folded wings lying over the abdomen. */
  .mt-wing {
    position: absolute;
    left: 31px;
    top: 23px;
    width: 30px;
    height: 8px;
    border-radius: 50% 70% 40% 40% / 60% 80% 40% 40%;
    background: linear-gradient(100deg, rgba(140, 255, 170, 0.45), rgba(0, 110, 22, 0.5));
    transform: rotate(-16deg);
    transform-origin: 10% 60%;
  }

  /* Thorax: the long "neck" rising to the head. */
  .mt-thorax {
    position: absolute;
    left: 16px;
    top: 22px;
    width: 16px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 170, 34, 0.9), rgba(0, 140, 28, 0.85));
    transform: rotate(32deg);
    transform-origin: 100% 50%;
  }

  /* Triangular head, swivels to track prey. */
  .mt-head {
    position: absolute;
    left: 6px;
    top: 8px;
    width: 15px;
    height: 11px;
    clip-path: polygon(0 60%, 30% 0, 100% 20%, 78% 100%, 18% 100%);
    background: radial-gradient(circle at 55% 35%, #f2ffdd, #2a8a3e 75%);
    transform-origin: 60% 90%;
    animation: mt-track 5s ease-in-out infinite;
  }

  /* Big compound eyes. */
  .mt-head::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 3px;
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 8px 1px 0 #041a0a;
  }

  /* Antennae. */
  .mt-ant {
    position: absolute;
    width: 1px;
    height: 13px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.7));
    transform-origin: 50% 100%;
  }

  .mt-ant.a1 { left: 5px; top: -12px; transform: rotate(-26deg); }
  .mt-ant.a2 { left: 9px; top: -13px; transform: rotate(6deg); }

  @keyframes mt-track {
    0%, 20% { transform: rotate(-10deg); }
    /* Follows the fly in. */
    46% { transform: rotate(8deg); }
    /* Locks and strikes. */
    54%, 62% { transform: rotate(12deg); }
    80%, 100% { transform: rotate(-10deg); }
  }

  /* Raptorial forelegs: femur + folded tibia in the prayer pose,
     snapping open toward the fly on the strike. */
  .mt-arm {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 20px;
    height: 16px;
    transform-origin: 60% 20%;
    animation: mt-strike 5s ease-in-out infinite;
  }

  .mt-arm.far {
    opacity: 0.6;
    left: 14px;
    top: 22px;
  }

  .mt-femur {
    position: absolute;
    left: 0;
    top: 4px;
    width: 14px;
    height: 3.5px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.85);
    transform: rotate(35deg);
    transform-origin: 100% 50%;
  }

  /* The snap-trap tibia (spined), folded back against the femur. */
  .mt-tibia {
    position: absolute;
    left: -12px;
    top: 0;
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      rgba(214, 255, 224, 0.9) 0 2px,
      rgba(0, 130, 26, 0.8) 2px 3px);
    transform-origin: 100% 50%;
    animation: mt-tibia 5s ease-in-out infinite;
  }

  @keyframes mt-strike {
    0%, 52% { transform: rotate(0deg) translate(0, 0); }
    /* Lightning lunge toward the fly. */
    57% { transform: rotate(16deg) translate(-7px, -3px); }
    64% { transform: rotate(0deg) translate(0, 0); }
    100% { transform: rotate(0deg) translate(0, 0); }
  }

  @keyframes mt-tibia {
    0%, 52% { transform: rotate(-140deg); }
    /* Snaps open to grab. */
    57% { transform: rotate(-25deg); }
    64% { transform: rotate(-140deg); }
    100% { transform: rotate(-140deg); }
  }

  /* The fly it's tracking. */
  .mt-fly {
    position: absolute;
    top: 20px;
    left: 0;
    width: 5px;
    height: 4px;
    animation: mt-fly 5s ease-in-out infinite;
  }

  .mt-fly::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.85);
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
    0% { transform: translate(0, -8px); opacity: 1; }
    40% { transform: translate(26px, 8px); opacity: 1; }
    /* Hovers into range... */
    54% { transform: translate(38px, 15px); opacity: 1; }
    /* ...snatched at the strike. */
    58% { transform: translate(38px, 15px); opacity: 1; }
    61% { transform: translate(38px, 15px); opacity: 0; }
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
          <div class="mt-leg f1"></div>
          <div class="mt-leg f2"></div>
          <div class="mt-leg f3"></div>
          <div class="mt-wing"></div>
          <div class="mt-abdomen"></div>
          <div class="mt-thorax"></div>
          <div class="mt-arm far">
            <div class="mt-femur"><div class="mt-tibia"></div></div>
          </div>
          <div class="mt-arm">
            <div class="mt-femur"><div class="mt-tibia"></div></div>
          </div>
          <div class="mt-head">
            <div class="mt-ant a1"></div>
            <div class="mt-ant a2"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-mantis')) {
  customElements.define('concept-mantis', ConceptMantis);
}
