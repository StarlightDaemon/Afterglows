const beeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A bee working two blooms: it hovers in with a blurred wingbeat,
     dips to a flower where a pollen puff rises, loops to the second,
     and circles back - a lazy figure-eight forage. */
  .be {
    width: 116px;
    height: 88px;
    position: relative;
  }

  /* Flowers it visits. */
  .be-flower {
    position: absolute;
    bottom: 12px;
    width: 16px;
    height: 16px;
  }

  .be-flower.f1 { left: 16px; }
  .be-flower.f2 { right: 16px; }

  .be-flower-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 7px;
    height: 7px;
    margin: -3.5px 0 0 -3.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 60%);
    z-index: 2;
  }

  .be-flower-petal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 8px;
    margin: -8px 0 0 -3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.7);
    transform-origin: 50% 100%;
  }

  .be-flower-petal.a { transform: rotate(0deg); }
  .be-flower-petal.b { transform: rotate(72deg); }
  .be-flower-petal.c { transform: rotate(144deg); }
  .be-flower-petal.d { transform: rotate(216deg); }
  .be-flower-petal.e { transform: rotate(288deg); }

  .be-stem {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 2px;
    height: 20px;
    margin-left: -1px;
    background: rgba(0, 110, 22, 0.75);
  }

  /* The bee flies a scripted forage path. */
  .be-bug {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 12px;
    animation: be-path 6s ease-in-out infinite;
  }

  @keyframes be-path {
    0% { transform: translate(70px, 8px) rotate(6deg); }
    /* Dip to flower 1. */
    18% { transform: translate(18px, 40px) rotate(-8deg); }
    28% { transform: translate(20px, 46px) rotate(2deg); }
    /* Loop up and over. */
    46% { transform: translate(58px, 6px) rotate(10deg); }
    /* Dip to flower 2. */
    64% { transform: translate(90px, 42px) rotate(-6deg); }
    74% { transform: translate(88px, 46px) rotate(2deg); }
    /* Back up to start. */
    92% { transform: translate(76px, 12px) rotate(8deg); }
    100% { transform: translate(70px, 8px) rotate(6deg); }
  }

  /* Body: striped abdomen. */
  .be-body {
    position: absolute;
    left: 4px;
    top: 2px;
    width: 14px;
    height: 9px;
    border-radius: 50% 60% 60% 50%;
    background: repeating-linear-gradient(70deg,
      rgba(214, 255, 224, 0.95) 0 3px,
      rgba(0, 90, 18, 0.9) 3px 6px);
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  /* Head + eye. */
  .be-head {
    position: absolute;
    left: 15px;
    top: 3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0, 70, 14, 0.95);
  }

  .be-head::after {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  /* Wings: blurred flutter. */
  .be-wing {
    position: absolute;
    top: -4px;
    width: 9px;
    height: 8px;
    border-radius: 50% 50% 50% 60%;
    background: rgba(190, 255, 205, 0.4);
    border: 1px solid rgba(140, 255, 170, 0.5);
    transform-origin: 50% 100%;
  }

  .be-wing.w1 { left: 5px; animation: be-wing1 0.09s steps(2) infinite; }
  .be-wing.w2 { left: 9px; animation: be-wing2 0.09s steps(2) infinite; }

  @keyframes be-wing1 {
    0% { transform: rotate(-18deg) scaleY(1); }
    100% { transform: rotate(-40deg) scaleY(0.7); }
  }

  @keyframes be-wing2 {
    0% { transform: rotate(18deg) scaleY(1); }
    100% { transform: rotate(40deg) scaleY(0.7); }
  }

  /* Motion trail dots. */
  .be-trail {
    position: absolute;
    left: 2px;
    top: 6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.35);
    animation: be-trail 0.5s ease-out infinite;
  }

  @keyframes be-trail {
    0% { opacity: 0.5; transform: scale(1) translateX(0); }
    100% { opacity: 0; transform: scale(0.4) translateX(-6px); }
  }

  /* Pollen puffs rising at each flower visit. */
  .be-pollen {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: be-pollen 6s infinite;
  }

  .be-pollen.p1 { left: 22px; bottom: 26px; }
  .be-pollen.p2 { right: 22px; bottom: 26px; animation-delay: -2.8s; }

  @keyframes be-pollen {
    0%, 22% { transform: translate(0, 0); opacity: 0; }
    26% { opacity: 0.9; }
    38% { transform: translate(-6px, -12px); opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptBee extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${beeStyles}</style>
      <div class="be">
        <div class="be-flower f1">
          <div class="be-stem"></div>
          <div class="be-flower-petal a"></div><div class="be-flower-petal b"></div>
          <div class="be-flower-petal c"></div><div class="be-flower-petal d"></div>
          <div class="be-flower-petal e"></div><div class="be-flower-core"></div>
        </div>
        <div class="be-flower f2">
          <div class="be-stem"></div>
          <div class="be-flower-petal a"></div><div class="be-flower-petal b"></div>
          <div class="be-flower-petal c"></div><div class="be-flower-petal d"></div>
          <div class="be-flower-petal e"></div><div class="be-flower-core"></div>
        </div>
        <div class="be-pollen p1"></div>
        <div class="be-pollen p2"></div>
        <div class="be-bug">
          <div class="be-trail"></div>
          <div class="be-body"></div>
          <div class="be-head"></div>
          <div class="be-wing w1"></div>
          <div class="be-wing w2"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bee')) {
  customElements.define('concept-bee', ConceptBee);
}
