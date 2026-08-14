const ostrichStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ost {
    width: 116px;
    height: 98px;
    position: relative;
  }

  .ost-ground {
    position: absolute;
    left: 6px;
    bottom: 12px;
    width: 104px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.8), transparent);
  }

  .ost-dust {
    position: absolute;
    bottom: 14px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.7);
    animation: ost-dust-kick 0.6s linear infinite;
  }

  .ost-dust.d1 { left: 42px; animation-delay: 0s; }
  .ost-dust.d2 { left: 58px; animation-delay: -0.3s; }

  @keyframes ost-dust-kick {
    0% { opacity: 0.9; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(-14px, -8px) scale(0.3); }
  }

  .ost-body-rig {
    position: absolute;
    left: 28px;
    top: 20px;
    width: 60px;
    height: 64px;
    animation: ost-torso-bounce 0.6s ease-in-out infinite alternate;
  }

  @keyframes ost-torso-bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-4px); }
  }

  .ost-torso {
    position: absolute;
    left: 14px;
    top: 18px;
    width: 34px;
    height: 24px;
    border-radius: 50% 60% 45% 55%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 150, 30, 0.9), rgba(0, 35, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    z-index: 3;
  }

  .ost-tail {
    position: absolute;
    left: 6px;
    top: 20px;
    width: 12px;
    height: 10px;
    border-radius: 6px 0 0 6px;
    background: rgba(140, 255, 170, 0.75);
  }

  .ost-leg {
    position: absolute;
    top: 36px;
    width: 14px;
    height: 34px;
    transform-origin: 4px 0;
    z-index: 2;
  }

  .ost-thigh {
    width: 3px;
    height: 18px;
    background: rgba(140, 255, 170, 0.9);
    border-radius: 1.5px;
    transform: rotate(20deg);
  }

  .ost-shin {
    position: absolute;
    left: 6px;
    top: 14px;
    width: 2.5px;
    height: 18px;
    background: rgba(190, 255, 205, 0.95);
    border-radius: 1px;
    transform: rotate(-35deg);
  }

  .ost-leg.l1 {
    left: 28px;
    animation: ost-stride-1 0.6s linear infinite;
  }

  .ost-leg.l2 {
    left: 36px;
    animation: ost-stride-2 0.6s linear infinite;
  }

  @keyframes ost-stride-1 {
    0% { transform: rotate(35deg); }
    25% { transform: rotate(0deg); }
    50% { transform: rotate(-40deg); }
    75% { transform: rotate(-10deg); }
    100% { transform: rotate(35deg); }
  }

  @keyframes ost-stride-2 {
    0% { transform: rotate(-40deg); }
    25% { transform: rotate(-10deg); }
    50% { transform: rotate(35deg); }
    75% { transform: rotate(0deg); }
    100% { transform: rotate(-40deg); }
  }

  .ost-neck-rig {
    position: absolute;
    right: 10px;
    top: -8px;
    width: 24px;
    height: 36px;
    animation: ost-neck-stabilize 0.6s ease-in-out infinite alternate;
  }

  @keyframes ost-neck-stabilize {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(4px) rotate(-6deg); }
  }

  .ost-neck {
    position: absolute;
    left: 6px;
    top: 10px;
    width: 3px;
    height: 22px;
    background: rgba(140, 255, 170, 0.9);
    border-radius: 1.5px;
    transform: rotate(15deg);
  }

  .ost-head {
    position: absolute;
    right: 2px;
    top: 4px;
    width: 12px;
    height: 8px;
    border-radius: 50% 60% 40% 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  .ost-beak {
    position: absolute;
    right: -4px;
    top: 2px;
    width: 6px;
    height: 3px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: var(--accent, #00cc00);
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

  /* v2: African savanna ostrich sprinting at full stride with black & white plumage,
     pinkish-tan running legs, head stabilization, and kicked dust puffs */
  .ostc {
    width: 116px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Savanna earth ground track */
  .ostc-ground {
    position: absolute;
    left: 6px;
    bottom: 12px;
    width: 104px;
    height: 2.5px;
    background: linear-gradient(90deg, transparent, #ea580c 20%, #facc15 50%, #78350f 80%, transparent);
    box-shadow: 0 0 4px #ea580c;
  }

  /* Savanna dust puffs */
  .ostc-dust {
    position: absolute;
    bottom: 14px;
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 4px #eab308;
    animation: ostc-dust-kick 0.6s linear infinite;
  }

  .ostc-dust.d1 { left: 42px; animation-delay: 0s; }
  .ostc-dust.d2 { left: 58px; animation-delay: -0.3s; }

  @keyframes ostc-dust-kick {
    0% { opacity: 0.95; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(-14px, -8px) scale(0.3); }
  }

  /* Torso carrier */
  .ostc-body-rig {
    position: absolute;
    left: 28px;
    top: 20px;
    width: 60px;
    height: 64px;
    animation: ostc-torso-bounce 0.6s ease-in-out infinite alternate;
  }

  @keyframes ostc-torso-bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-4px); }
  }

  /* Black feathered torso */
  .ostc-torso {
    position: absolute;
    left: 14px;
    top: 18px;
    width: 34px;
    height: 24px;
    border-radius: 50% 60% 45% 55%;
    background: radial-gradient(circle at 40% 40%, #334155 0%, #1e293b 50%, #09090b 100%);
    border: 1.5px solid #475569;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  /* White plume tail feathers */
  .ostc-tail {
    position: absolute;
    left: 6px;
    top: 20px;
    width: 12px;
    height: 10px;
    border-radius: 6px 0 0 6px;
    background: #ffffff;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.7);
  }

  /* Pinkish bipedal running legs */
  .ostc-leg {
    position: absolute;
    top: 36px;
    width: 14px;
    height: 34px;
    transform-origin: 4px 0;
    z-index: 2;
  }

  .ostc-thigh {
    width: 3px;
    height: 18px;
    background: #fb7185;
    border-radius: 1.5px;
    transform: rotate(20deg);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  .ostc-shin {
    position: absolute;
    left: 6px;
    top: 14px;
    width: 2.5px;
    height: 18px;
    background: #fda4af;
    border-radius: 1px;
    transform: rotate(-35deg);
  }

  .ostc-leg.l1 {
    left: 28px;
    animation: ostc-stride-1 0.6s linear infinite;
  }

  .ostc-leg.l2 {
    left: 36px;
    animation: ostc-stride-2 0.6s linear infinite;
  }

  @keyframes ostc-stride-1 {
    0% { transform: rotate(35deg); }
    25% { transform: rotate(0deg); }
    50% { transform: rotate(-40deg); }
    75% { transform: rotate(-10deg); }
    100% { transform: rotate(35deg); }
  }

  @keyframes ostc-stride-2 {
    0% { transform: rotate(-40deg); }
    25% { transform: rotate(-10deg); }
    50% { transform: rotate(35deg); }
    75% { transform: rotate(0deg); }
    100% { transform: rotate(-40deg); }
  }

  /* Stabilized neck */
  .ostc-neck-rig {
    position: absolute;
    right: 10px;
    top: -8px;
    width: 24px;
    height: 36px;
    animation: ostc-neck-stabilize 0.6s ease-in-out infinite alternate;
  }

  @keyframes ostc-neck-stabilize {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(4px) rotate(-6deg); }
  }

  .ostc-neck {
    position: absolute;
    left: 6px;
    top: 10px;
    width: 3px;
    height: 22px;
    background: #fda4af;
    border-radius: 1.5px;
    transform: rotate(15deg);
  }

  /* Level head & beak */
  .ostc-head {
    position: absolute;
    right: 2px;
    top: 4px;
    width: 12px;
    height: 8px;
    border-radius: 50% 60% 40% 50%;
    background: #fda4af;
    border: 1px solid #fb7185;
    box-shadow: 0 0 4px rgba(251, 113, 133, 0.6);
  }

  .ostc-beak {
    position: absolute;
    right: -4px;
    top: 2px;
    width: 6px;
    height: 3px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: #f97316;
  }
  `,
};

const ostrichMarkup = {
  v1: `
      <div class="ost">
        <div class="ost-ground"></div>
        <div class="ost-dust d1"></div>
        <div class="ost-dust d2"></div>
        <div class="ost-body-rig">
          <div class="ost-tail"></div>
          <div class="ost-torso"></div>
          <div class="ost-leg l1">
            <div class="ost-thigh"></div>
            <div class="ost-shin"></div>
          </div>
          <div class="ost-leg l2">
            <div class="ost-thigh"></div>
            <div class="ost-shin"></div>
          </div>
          <div class="ost-neck-rig">
            <div class="ost-neck"></div>
            <div class="ost-head">
              <div class="ost-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="ostc">
        <div class="ostc-ground"></div>
        <div class="ostc-dust d1"></div>
        <div class="ostc-dust d2"></div>
        <div class="ostc-body-rig">
          <div class="ostc-tail"></div>
          <div class="ostc-torso"></div>
          <div class="ostc-leg l1">
            <div class="ostc-thigh"></div>
            <div class="ostc-shin"></div>
          </div>
          <div class="ostc-leg l2">
            <div class="ostc-thigh"></div>
            <div class="ostc-shin"></div>
          </div>
          <div class="ostc-neck-rig">
            <div class="ostc-neck"></div>
            <div class="ostc-head">
              <div class="ostc-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `,
};

class ConceptOstrich extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${ostrichStyles[version] || ostrichStyles.v2}</style>${ostrichMarkup[version] || ostrichMarkup.v2}`;
  }
}

if (!customElements.get('concept-ostrich')) {
  customElements.define('concept-ostrich', ConceptOstrich);
}
