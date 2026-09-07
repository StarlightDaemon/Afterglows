const kiteStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .kite {
    width: 112px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  .kite-rig {
    position: absolute;
    left: 64px;
    top: 26px;
    width: 0;
    height: 0;
    animation: kite-swoop 7s ease-in-out infinite;
  }

  @keyframes kite-swoop {
    0% { transform: translate(0, 0) rotate(6deg); }
    18% { transform: translate(-20px, -10px) rotate(-10deg); }
    36% { transform: translate(8px, -16px) rotate(9deg); }
    52% { transform: translate(24px, 2px) rotate(14deg); }
    70% { transform: translate(-6px, 10px) rotate(-6deg); }
    86% { transform: translate(-16px, 2px) rotate(-9deg); }
    100% { transform: translate(0, 0) rotate(6deg); }
  }

  .kite-sail {
    position: absolute;
    left: -14px;
    top: -18px;
    width: 28px;
    height: 36px;
    clip-path: polygon(50% 0, 100% 42%, 50% 100%, 0 42%);
    background: linear-gradient(150deg, rgba(140, 255, 170, 0.75), rgba(0, 110, 22, 0.85));
    border: 1px solid rgba(140, 255, 170, 0.6);
    box-sizing: border-box;
  }

  .kite-sail::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: rgba(214, 255, 224, 0.7);
  }

  .kite-sail::after {
    content: '';
    position: absolute;
    left: 0;
    top: 42%;
    width: 100%;
    height: 1px;
    background: rgba(214, 255, 224, 0.7);
  }

  .kite-bow {
    position: absolute;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.85);
    animation: kite-swoop 7s ease-in-out infinite;
  }

  .kite-bow.t1 { left: 62px; top: 46px; animation-delay: -0.25s; transform: rotate(20deg); }
  .kite-bow.t2 { left: 60px; top: 56px; animation-delay: -0.5s; width: 7px; }
  .kite-bow.t3 { left: 58px; top: 65px; animation-delay: -0.75s; transform: rotate(-18deg); width: 6px; }
  .kite-bow.t4 { left: 56px; top: 73px; animation-delay: -1s; width: 5px; }
  .kite-bow.t5 { left: 54px; top: 80px; animation-delay: -1.25s; transform: rotate(14deg); width: 4px; }

  .kite-line {
    position: absolute;
    left: 10px;
    bottom: 2px;
    width: 76px;
    height: 1px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.8), rgba(140, 255, 170, 0.25));
    transform-origin: 0% 50%;
    transform: rotate(-38deg);
    animation: kite-line 7s ease-in-out infinite;
  }

  @keyframes kite-line {
    0% { transform: rotate(-37deg) scaleX(1); }
    18% { transform: rotate(-44deg) scaleX(0.94); }
    36% { transform: rotate(-46deg) scaleX(1); }
    52% { transform: rotate(-31deg) scaleX(1.05); }
    70% { transform: rotate(-34deg) scaleX(0.97); }
    86% { transform: rotate(-42deg) scaleX(0.95); }
    100% { transform: rotate(-37deg) scaleX(1); }
  }

  .kite-spool {
    position: absolute;
    left: 5px;
    bottom: 0;
    width: 10px;
    height: 8px;
    border-radius: 2px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: repeating-linear-gradient(0deg,
      rgba(140, 255, 170, 0.5) 0 1px,
      transparent 1px 3px);
  }

  .kite-wind {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.5), transparent);
    opacity: 0;
    animation: kite-wind linear infinite;
  }

  .kite-wind.w1 { top: 16px; width: 30px; animation-duration: 2.4s; }
  .kite-wind.w2 { top: 38px; width: 22px; animation-duration: 3.1s; animation-delay: -1.4s; }
  .kite-wind.w3 { top: 70px; width: 26px; animation-duration: 2.7s; animation-delay: -0.9s; }

  @keyframes kite-wind {
    0% { left: 112px; opacity: 0; }
    12% { opacity: 0.8; }
    88% { opacity: 0.6; }
    100% { left: -32px; opacity: 0; }
  }

  .kite-cloud {
    position: absolute;
    top: 10px;
    width: 26px;
    height: 8px;
    border-radius: 5px;
    background: rgba(140, 255, 170, 0.18);
    filter: blur(1px);
    animation: kite-cloud 12s linear infinite;
  }

  @keyframes kite-cloud {
    0% { left: 112px; }
    100% { left: -30px; }
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

  /* v2: Rainbow geometric diamond kite with bamboo spars,
     colorful ribbon bows, cyan wind streaks, and fluffy cloud */
  .kitec {
    width: 112px;
    height: 96px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Flying kite carrier */
  .kitec-rig {
    position: absolute;
    left: 64px;
    top: 26px;
    width: 0;
    height: 0;
    animation: kitec-swoop 7s ease-in-out infinite;
  }

  @keyframes kitec-swoop {
    0% { transform: translate(0, 0) rotate(6deg); }
    18% { transform: translate(-20px, -10px) rotate(-10deg); }
    36% { transform: translate(8px, -16px) rotate(9deg); }
    52% { transform: translate(24px, 2px) rotate(14deg); }
    70% { transform: translate(-6px, 10px) rotate(-6deg); }
    86% { transform: translate(-16px, 2px) rotate(-9deg); }
    100% { transform: translate(0, 0) rotate(6deg); }
  }

  /* Diamond multi-color ripstop sail */
  .kitec-sail {
    position: absolute;
    left: -14px;
    top: -18px;
    width: 28px;
    height: 36px;
    clip-path: polygon(50% 0, 100% 42%, 50% 100%, 0 42%);
    background:
      conic-gradient(from 0deg at 50% 42%,
        #ef4444 0deg 90deg,
        #facc15 90deg 180deg,
        #22c55e 180deg 270deg,
        #3b82f6 270deg 360deg);
    border: 1px solid #ffffff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
  }

  /* Bamboo cross spars */
  .kitec-sail::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: #fde047;
    box-shadow: 0 0 2px #ca8a04;
  }

  .kitec-sail::after {
    content: '';
    position: absolute;
    left: 0;
    top: 42%;
    width: 100%;
    height: 1px;
    background: #fde047;
    box-shadow: 0 0 2px #ca8a04;
  }

  /* Colorful tail ribbon bows */
  .kitec-bow {
    position: absolute;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    animation: kitec-swoop 7s ease-in-out infinite;
  }

  .kitec-bow.t1 { left: 62px; top: 46px; background: #ec4899; box-shadow: 0 0 4px #f43f5e; animation-delay: -0.25s; transform: rotate(20deg); }
  .kitec-bow.t2 { left: 60px; top: 56px; background: #f97316; box-shadow: 0 0 4px #ea580c; animation-delay: -0.5s; width: 7px; }
  .kitec-bow.t3 { left: 58px; top: 65px; background: #facc15; box-shadow: 0 0 4px #eab308; animation-delay: -0.75s; transform: rotate(-18deg); width: 6px; }
  .kitec-bow.t4 { left: 56px; top: 73px; background: #22c55e; box-shadow: 0 0 4px #16a34a; animation-delay: -1s; width: 5px; }
  .kitec-bow.t5 { left: 54px; top: 80px; background: #06b6d4; box-shadow: 0 0 4px #0891b2; animation-delay: -1.25s; transform: rotate(14deg); width: 4px; }

  /* White braided flying line */
  .kitec-line {
    position: absolute;
    left: 10px;
    bottom: 2px;
    width: 76px;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.2));
    box-shadow: 0 0 2px #ffffff;
    transform-origin: 0% 50%;
    transform: rotate(-38deg);
    animation: kitec-line 7s ease-in-out infinite;
  }

  @keyframes kitec-line {
    0% { transform: rotate(-37deg) scaleX(1); }
    18% { transform: rotate(-44deg) scaleX(0.94); }
    36% { transform: rotate(-46deg) scaleX(1); }
    52% { transform: rotate(-31deg) scaleX(1.05); }
    70% { transform: rotate(-34deg) scaleX(0.97); }
    86% { transform: rotate(-42deg) scaleX(0.95); }
    100% { transform: rotate(-37deg) scaleX(1); }
  }

  /* Wooden spool */
  .kitec-spool {
    position: absolute;
    left: 5px;
    bottom: 0;
    width: 10px;
    height: 8px;
    border-radius: 2px;
    border: 1px solid #ca8a04;
    background: repeating-linear-gradient(0deg,
      #fef3c7 0 1px,
      #78350f 1px 3px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  }

  /* Cyan wind streaks */
  .kitec-wind {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, #38bdf8, transparent);
    box-shadow: 0 0 4px #00f0ff;
    opacity: 0;
    animation: kitec-wind linear infinite;
  }

  .kitec-wind.w1 { top: 16px; width: 30px; animation-duration: 2.4s; }
  .kitec-wind.w2 { top: 38px; width: 22px; animation-duration: 3.1s; animation-delay: -1.4s; }
  .kitec-wind.w3 { top: 70px; width: 26px; animation-duration: 2.7s; animation-delay: -0.9s; }

  @keyframes kitec-wind {
    0% { left: 112px; opacity: 0; }
    12% { opacity: 0.8; }
    88% { opacity: 0.6; }
    100% { left: -32px; opacity: 0; }
  }

  /* White cloud */
  .kitec-cloud {
    position: absolute;
    top: 10px;
    width: 26px;
    height: 8px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
    filter: blur(1px);
    animation: kitec-cloud 12s linear infinite;
  }

  @keyframes kitec-cloud {
    0% { left: 112px; }
    100% { left: -30px; }
  }
  `,
};

const kiteMarkup = {
  v1: `
      <div class="kite">
        <div class="kite-cloud"></div>
        <div class="kite-wind w1"></div>
        <div class="kite-wind w2"></div>
        <div class="kite-wind w3"></div>
        <div class="kite-line"></div>
        <div class="kite-spool"></div>
        <div class="kite-bow t5"></div>
        <div class="kite-bow t4"></div>
        <div class="kite-bow t3"></div>
        <div class="kite-bow t2"></div>
        <div class="kite-bow t1"></div>
        <div class="kite-rig">
          <div class="kite-sail"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="kitec">
        <div class="kitec-cloud"></div>
        <div class="kitec-wind w1"></div>
        <div class="kitec-wind w2"></div>
        <div class="kitec-wind w3"></div>
        <div class="kitec-line"></div>
        <div class="kitec-spool"></div>
        <div class="kitec-bow t5"></div>
        <div class="kitec-bow t4"></div>
        <div class="kitec-bow t3"></div>
        <div class="kitec-bow t2"></div>
        <div class="kitec-bow t1"></div>
        <div class="kitec-rig">
          <div class="kitec-sail"></div>
        </div>
      </div>
    `,
};

class ConceptKite extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${kiteStyles[version] || kiteStyles.v2}</style>${kiteMarkup[version] || kiteMarkup.v2}`;
  }
}

if (!customElements.get('concept-kite')) {
  customElements.define('concept-kite', ConceptKite);
}
