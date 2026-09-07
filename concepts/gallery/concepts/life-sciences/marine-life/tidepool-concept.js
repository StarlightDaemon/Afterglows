const tidepoolStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tp {
    width: 110px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50% 46% 52% 48% / 48% 52% 46% 54%;
    background: radial-gradient(circle at 45% 45%, rgba(0, 70, 16, 0.95), rgba(0, 25, 6, 0.98));
    border: 2.5px solid #00ff66;
    box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 255, 100, 0.4);
  }

  .tp-surge {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60px 40px at 30% 30%, rgba(0, 255, 100, 0.35), transparent 70%),
      radial-gradient(ellipse 50px 30px at 70% 60%, rgba(0, 255, 100, 0.3), transparent 60%);
    animation: tp-caustic 1.6s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: 5;
  }

  @keyframes tp-caustic {
    0% { transform: scale(0.9) rotate(-8deg); opacity: 0.5; }
    100% { transform: scale(1.2) rotate(8deg); opacity: 0.95; }
  }

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
    background: radial-gradient(circle, #ffffff, #00ff66 70%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px #00ff66;
    z-index: 2;
  }

  .tp-tentacle-ring {
    position: absolute;
    inset: 0;
    transform-origin: center center;
    animation: tp-anemone-pulse 1.4s ease-in-out infinite alternate;
  }

  @keyframes tp-anemone-pulse {
    0% { transform: scale(0.8) rotate(-16deg); }
    100% { transform: scale(1.3) rotate(20deg); }
  }

  .tp-arm {
    position: absolute;
    left: 17px;
    top: 0;
    width: 3px;
    height: 14px;
    background: linear-gradient(180deg, #ffffff, #00ff66 70%, transparent);
    border-radius: 1.5px;
    transform-origin: center 18px;
    box-shadow: 0 0 4px #00ff66;
  }

  .tp-arm.a1 { transform: rotate(0deg); }
  .tp-arm.a2 { transform: rotate(45deg); }
  .tp-arm.a3 { transform: rotate(90deg); }
  .tp-arm.a4 { transform: rotate(135deg); }
  .tp-arm.a5 { transform: rotate(180deg); }
  .tp-arm.a6 { transform: rotate(225deg); }
  .tp-arm.a7 { transform: rotate(270deg); }
  .tp-arm.a8 { transform: rotate(315deg); }

  .tp-crab-spot {
    position: absolute;
    right: 22px;
    bottom: 20px;
    width: 32px;
    height: 32px;
  }

  .tp-shell {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 20px;
    height: 18px;
    border-radius: 50% 30% 60% 40%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 204, 0, 0.9), rgba(0, 40, 8, 0.95));
    border: 1.5px solid #00ff66;
    box-shadow: inset -2px -2px 6px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  .tp-crab {
    position: absolute;
    left: 2px;
    top: 4px;
    width: 18px;
    height: 18px;
    animation: tp-crab-creep 1.4s ease-in-out infinite alternate;
    z-index: 2;
  }

  @keyframes tp-crab-creep {
    0% { transform: translate(6px, 6px) rotate(-12deg); }
    100% { transform: translate(-10px, -8px) rotate(14deg); }
  }

  .tp-crab-claw {
    position: absolute;
    width: 6px;
    height: 5px;
    border-radius: 50% 50% 10% 50%;
    background: #ffffff;
    border: 1px solid #00ff66;
    box-shadow: 0 0 4px #00ff66;
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
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
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

  /* v2: Intertidal coastal tidepool with magenta sea anemone */
  .tpc {
    width: 110px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50% 46% 52% 48% / 48% 52% 46% 54%;
    background: radial-gradient(circle at 45% 45%, #0e7490 0%, #0369a1 40%, #0f172a 100%);
    border: 2.5px solid #38bdf8;
    box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.9), 0 0 12px rgba(56, 189, 248, 0.5);
  }

  /* Refracting turquoise sunlight caustics */
  .tpc-surge {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60px 40px at 30% 30%, rgba(103, 232, 249, 0.4), transparent 70%),
      radial-gradient(ellipse 50px 30px at 70% 60%, rgba(56, 189, 248, 0.35), transparent 60%);
    animation: tpc-caustic 1.6s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: 5;
  }

  @keyframes tpc-caustic {
    0% { transform: scale(0.9) rotate(-8deg); opacity: 0.6; }
    100% { transform: scale(1.2) rotate(8deg); opacity: 0.95; }
  }

  /* Magenta-purple sea anemone */
  .tpc-anemone {
    position: absolute;
    left: 20px;
    top: 22px;
    width: 36px;
    height: 36px;
  }

  .tpc-oral-disc {
    position: absolute;
    left: 11px;
    top: 11px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, #fde047 0%, #ec4899 60%, #9d174d 100%);
    border: 1.5px solid #f43f5e;
    box-shadow: 0 0 10px #f43f5e;
    z-index: 2;
  }

  .tpc-tentacle-ring {
    position: absolute;
    inset: 0;
    transform-origin: center center;
    animation: tpc-anemone-pulse 1.4s ease-in-out infinite alternate;
  }

  @keyframes tpc-anemone-pulse {
    0% { transform: scale(0.8) rotate(-16deg); }
    100% { transform: scale(1.3) rotate(20deg); }
  }

  /* Radial tentacles with magenta tips */
  .tpc-arm {
    position: absolute;
    left: 17px;
    top: 0;
    width: 3px;
    height: 14px;
    background: linear-gradient(180deg, #f43f5e 0%, #c084fc 60%, transparent 100%);
    border-radius: 1.5px;
    transform-origin: center 18px;
    box-shadow: 0 0 4px #ec4899;
  }

  .tpc-arm.a1 { transform: rotate(0deg); }
  .tpc-arm.a2 { transform: rotate(45deg); }
  .tpc-arm.a3 { transform: rotate(90deg); }
  .tpc-arm.a4 { transform: rotate(135deg); }
  .tpc-arm.a5 { transform: rotate(180deg); }
  .tpc-arm.a6 { transform: rotate(225deg); }
  .tpc-arm.a7 { transform: rotate(270deg); }
  .tpc-arm.a8 { transform: rotate(315deg); }

  /* Hermit crab habitat */
  .tpc-crab-spot {
    position: absolute;
    right: 22px;
    bottom: 20px;
    width: 32px;
    height: 32px;
  }

  /* Spiral golden/amber gastropod shell */
  .tpc-shell {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 20px;
    height: 18px;
    border-radius: 50% 30% 60% 40%;
    background: radial-gradient(circle at 40% 40%, #fef08a 0%, #ca8a04 60%, #78350f 100%);
    border: 1.5px solid #ca8a04;
    box-shadow: inset -2px -2px 6px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.6);
    z-index: 3;
  }

  /* Orange hermit crab crawling */
  .tpc-crab {
    position: absolute;
    left: 2px;
    top: 4px;
    width: 18px;
    height: 18px;
    animation: tpc-crab-creep 1.4s ease-in-out infinite alternate;
    z-index: 2;
  }

  @keyframes tpc-crab-creep {
    0% { transform: translate(6px, 6px) rotate(-12deg); }
    100% { transform: translate(-10px, -8px) rotate(14deg); }
  }

  .tpc-crab-claw {
    position: absolute;
    width: 6px;
    height: 5px;
    border-radius: 50% 50% 10% 50%;
    background: linear-gradient(180deg, #fb923c, #ea580c);
    border: 1px solid #c2410c;
    box-shadow: 0 0 4px #fb923c;
  }

  .tpc-crab-claw.l { left: 0; top: 0; transform: rotate(-25deg); }
  .tpc-crab-claw.r { right: 4px; top: 2px; transform: rotate(15deg); }

  .tpc-crab-eyes {
    position: absolute;
    left: 6px;
    top: 2px;
    width: 6px;
    height: 3px;
    border-radius: 2px;
    background: #09090b;
    border: 1px solid #ffffff;
  }
  `,
};

const tidepoolMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="tpc">
        <div class="tpc-surge"></div>
        <div class="tpc-anemone">
          <div class="tpc-tentacle-ring">
            <div class="tpc-arm a1"></div>
            <div class="tpc-arm a2"></div>
            <div class="tpc-arm a3"></div>
            <div class="tpc-arm a4"></div>
            <div class="tpc-arm a5"></div>
            <div class="tpc-arm a6"></div>
            <div class="tpc-arm a7"></div>
            <div class="tpc-arm a8"></div>
          </div>
          <div class="tpc-oral-disc"></div>
        </div>
        <div class="tpc-crab-spot">
          <div class="tpc-crab">
            <div class="tpc-crab-claw l"></div>
            <div class="tpc-crab-claw r"></div>
            <div class="tpc-crab-eyes"></div>
          </div>
          <div class="tpc-shell"></div>
        </div>
      </div>
    `,
};

class ConceptTidepool extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${tidepoolStyles[version] || tidepoolStyles.v2}</style>${tidepoolMarkup[version] || tidepoolMarkup.v2}`;
  }
}

if (!customElements.get('concept-tidepool')) {
  customElements.define('concept-tidepool', ConceptTidepool);
}
