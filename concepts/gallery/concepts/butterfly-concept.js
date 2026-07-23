const butterflyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A butterfly drifting across on a bobbing path, wings opening and
     closing so the eyespot patterns flash; it pauses to perch, then
     flutters on. */
  .bf {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Flight path: gentle rise-fall drift with a mid perch. */
  .bf-fly {
    position: absolute;
    left: 0;
    top: 0;
    width: 52px;
    height: 34px;
    animation: bf-path 8s ease-in-out infinite;
  }

  @keyframes bf-path {
    0% { transform: translate(-8px, 30px) rotate(-5deg); }
    12% { transform: translate(14px, 10px) rotate(5deg); }
    24% { transform: translate(34px, 30px) rotate(-5deg); }
    38%, 52% { transform: translate(46px, 40px) rotate(0deg); }
    64% { transform: translate(68px, 12px) rotate(6deg); }
    78% { transform: translate(90px, 30px) rotate(-4deg); }
    100% { transform: translate(120px, 10px) rotate(5deg); }
  }

  /* Body: slender vertical spindle with antennae. */
  .bf-body {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 4px;
    height: 24px;
    margin-left: -2px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.95), rgba(0, 110, 22, 0.9));
    z-index: 4;
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.5);
  }

  .bf-body::before,
  .bf-body::after {
    content: '';
    position: absolute;
    top: -5px;
    width: 6px;
    height: 6px;
    border: 1px solid rgba(140, 255, 170, 0.85);
    border-radius: 50%;
    border-bottom-color: transparent;
    border-right-color: transparent;
  }

  .bf-body::before { left: -5px; }
  .bf-body::after { right: -5px; transform: scaleX(-1); }

  /* Each wing group is anchored to the body midline and flaps by
     scaling toward the hinge (near-closed at mid-flap). */
  .bf-wing {
    position: absolute;
    top: 4px;
    width: 24px;
    height: 26px;
    animation: bf-flap 0.5s ease-in-out infinite;
  }

  .bf-wing.left { right: 50%; margin-right: 1px; transform-origin: 100% 30%; }
  .bf-wing.right { left: 50%; margin-left: 1px; transform-origin: 0% 30%; }

  @keyframes bf-flap {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.32); }
  }

  /* Forewing: large upper oval. */
  .bf-fore {
    position: absolute;
    top: 0;
    width: 24px;
    height: 15px;
    border-radius: 60% 55% 40% 45% / 75% 70% 40% 45%;
    background: radial-gradient(circle at 65% 45%,
      rgba(214, 255, 224, 0.9),
      rgba(0, 170, 34, 0.75) 55%,
      rgba(0, 90, 18, 0.85));
    border: 1px solid rgba(140, 255, 170, 0.7);
  }

  /* Eyespot on the forewing. */
  .bf-fore::after {
    content: '';
    position: absolute;
    top: 4px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(0, 60, 12, 0.95);
    box-shadow: 0 0 0 1.5px rgba(214, 255, 224, 0.85);
  }

  /* Hindwing: smaller lower oval with a little tail. */
  .bf-hind {
    position: absolute;
    top: 12px;
    width: 18px;
    height: 13px;
    border-radius: 45% 50% 60% 55% / 40% 45% 80% 75%;
    background: radial-gradient(circle at 60% 35%,
      rgba(190, 255, 205, 0.85),
      rgba(0, 140, 28, 0.8));
    border: 1px solid rgba(140, 255, 170, 0.6);
  }

  /* Mirror the wing shapes for the left side so the pair is
     symmetric about the body. */
  .bf-wing.left .bf-fore { right: 0; transform: scaleX(-1); }
  .bf-wing.left .bf-hind { right: 0; transform: scaleX(-1); }
  .bf-wing.left .bf-fore::after { right: 4px; }
  .bf-wing.right .bf-fore { left: 0; }
  .bf-wing.right .bf-hind { left: 0; }
  .bf-wing.right .bf-fore::after { left: 4px; }

  /* Perch flower. */
  .bf-flower {
    position: absolute;
    left: 56px;
    bottom: 8px;
    width: 14px;
    height: 14px;
  }

  .bf-flower-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, #9ade5a 60%);
  }

  .bf-flower-stem {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 2px;
    height: 16px;
    margin-left: -1px;
    background: rgba(0, 110, 22, 0.7);
  }

  .bf-flower-p {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 7px;
    margin: -7px 0 0 -2.5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.65);
    transform-origin: 50% 100%;
  }

  .bf-flower-p.a { transform: rotate(0deg); }
  .bf-flower-p.b { transform: rotate(90deg); }
  .bf-flower-p.c { transform: rotate(180deg); }
  .bf-flower-p.d { transform: rotate(270deg); }
`;

class ConceptButterfly extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${butterflyStyles}</style>
      <div class="bf">
        <div class="bf-flower">
          <div class="bf-flower-stem"></div>
          <div class="bf-flower-p a"></div><div class="bf-flower-p b"></div>
          <div class="bf-flower-p c"></div><div class="bf-flower-p d"></div>
          <div class="bf-flower-core"></div>
        </div>
        <div class="bf-fly">
          <div class="bf-wing left"><div class="bf-fore"></div><div class="bf-hind"></div></div>
          <div class="bf-wing right"><div class="bf-fore"></div><div class="bf-hind"></div></div>
          <div class="bf-body"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-butterfly')) {
  customElements.define('concept-butterfly', ConceptButterfly);
}
