const beeStyles = {
  v1: `
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
    18% { transform: translate(18px, 40px) rotate(-8deg); }
    28% { transform: translate(20px, 46px) rotate(2deg); }
    46% { transform: translate(58px, 6px) rotate(10deg); }
    64% { transform: translate(90px, 42px) rotate(-6deg); }
    74% { transform: translate(88px, 46px) rotate(2deg); }
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Honeybee foraging in a garden with amber/black striped body,
     gossamer wings, rose & blue nectar flowers, and golden pollen clouds. */
  .bec {
    width: 116px;
    height: 88px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #064e3b 0%, #022c22 60%, #011a14 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Garden flowers */
  .bec-flower {
    position: absolute;
    bottom: 12px;
    width: 16px;
    height: 16px;
  }

  .bec-flower.f1 { left: 16px; }
  .bec-flower.f2 { right: 16px; }

  /* Golden pollen core */
  .bec-flower-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 7px;
    height: 7px;
    margin: -3.5px 0 0 -3.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #fef08a 0%, #facc15 60%, #ca8a04 100%);
    box-shadow: 0 0 6px #facc15;
    z-index: 2;
  }

  .bec-flower-petal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 8px;
    margin: -8px 0 0 -3px;
    border-radius: 50%;
    transform-origin: 50% 100%;
  }

  /* Flower 1: Rose Pink */
  .bec-flower.f1 .bec-flower-petal {
    background: linear-gradient(180deg, #fb7185, #e11d48);
    border: 0.5px solid #fecdd3;
  }

  /* Flower 2: Cornflower Blue */
  .bec-flower.f2 .bec-flower-petal {
    background: linear-gradient(180deg, #60a5fa, #2563eb);
    border: 0.5px solid #bfdbfe;
  }

  .bec-flower-petal.a { transform: rotate(0deg); }
  .bec-flower-petal.b { transform: rotate(72deg); }
  .bec-flower-petal.c { transform: rotate(144deg); }
  .bec-flower-petal.d { transform: rotate(216deg); }
  .bec-flower-petal.e { transform: rotate(288deg); }

  .bec-stem {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 2px;
    height: 20px;
    margin-left: -1px;
    background: #16a34a;
  }

  /* Flight path */
  .bec-bug {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 12px;
    animation: bec-path 6s ease-in-out infinite;
  }

  @keyframes bec-path {
    0% { transform: translate(70px, 8px) rotate(6deg); }
    18% { transform: translate(18px, 40px) rotate(-8deg); }
    28% { transform: translate(20px, 46px) rotate(2deg); }
    46% { transform: translate(58px, 6px) rotate(10deg); }
    64% { transform: translate(90px, 42px) rotate(-6deg); }
    74% { transform: translate(88px, 46px) rotate(2deg); }
    92% { transform: translate(76px, 12px) rotate(8deg); }
    100% { transform: translate(70px, 8px) rotate(6deg); }
  }

  /* Abdomen: golden amber and obsidian black bands */
  .bec-body {
    position: absolute;
    left: 4px;
    top: 2px;
    width: 14px;
    height: 9px;
    border-radius: 50% 60% 60% 50%;
    background: repeating-linear-gradient(70deg,
      #f59e0b 0 3px,
      #18181b 3px 6px);
    border: 1px solid #fbbf24;
    box-shadow: 0 0 4px rgba(245, 158, 11, 0.4);
  }

  /* Head & eye */
  .bec-head {
    position: absolute;
    left: 15px;
    top: 3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #18181b;
    border: 1px solid #451a03;
  }

  .bec-head::after {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
  }

  /* Gossamer flight wings */
  .bec-wing {
    position: absolute;
    top: -4px;
    width: 9px;
    height: 8px;
    border-radius: 50% 50% 50% 60%;
    background: rgba(224, 242, 254, 0.65);
    border: 1px solid rgba(186, 230, 253, 0.8);
    transform-origin: 50% 100%;
  }

  .bec-wing.w1 { left: 5px; animation: bec-wing1 0.09s steps(2) infinite; }
  .bec-wing.w2 { left: 9px; animation: bec-wing2 0.09s steps(2) infinite; }

  @keyframes bec-wing1 {
    0% { transform: rotate(-18deg) scaleY(1); }
    100% { transform: rotate(-40deg) scaleY(0.7); }
  }

  @keyframes bec-wing2 {
    0% { transform: rotate(18deg) scaleY(1); }
    100% { transform: rotate(40deg) scaleY(0.7); }
  }

  .bec-trail {
    position: absolute;
    left: 2px;
    top: 6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #fde047;
    animation: bec-trail 0.5s ease-out infinite;
  }

  @keyframes bec-trail {
    0% { opacity: 0.6; transform: scale(1) translateX(0); }
    100% { opacity: 0; transform: scale(0.4) translateX(-6px); }
  }

  /* Golden pollen puffs */
  .bec-pollen {
    position: absolute;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 4px #fde047;
    opacity: 0;
    animation: bec-pollen 6s infinite;
  }

  .bec-pollen.p1 { left: 22px; bottom: 26px; }
  .bec-pollen.p2 { right: 22px; bottom: 26px; animation-delay: -2.8s; }

  @keyframes bec-pollen {
    0%, 22% { transform: translate(0, 0); opacity: 0; }
    26% { opacity: 1; }
    38% { transform: translate(-6px, -12px); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const beeMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="bec">
        <div class="bec-flower f1">
          <div class="bec-stem"></div>
          <div class="bec-flower-petal a"></div><div class="bec-flower-petal b"></div>
          <div class="bec-flower-petal c"></div><div class="bec-flower-petal d"></div>
          <div class="bec-flower-petal e"></div><div class="bec-flower-core"></div>
        </div>
        <div class="bec-flower f2">
          <div class="bec-stem"></div>
          <div class="bec-flower-petal a"></div><div class="bec-flower-petal b"></div>
          <div class="bec-flower-petal c"></div><div class="bec-flower-petal d"></div>
          <div class="bec-flower-petal e"></div><div class="bec-flower-core"></div>
        </div>
        <div class="bec-pollen p1"></div>
        <div class="bec-pollen p2"></div>
        <div class="bec-bug">
          <div class="bec-trail"></div>
          <div class="bec-body"></div>
          <div class="bec-head"></div>
          <div class="bec-wing w1"></div>
          <div class="bec-wing w2"></div>
        </div>
      </div>
    `,
};

class ConceptBee extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${beeStyles[version] || beeStyles.v2}</style>${beeMarkup[version] || beeMarkup.v2}`;
  }
}

if (!customElements.get('concept-bee')) {
  customElements.define('concept-bee', ConceptBee);
}
