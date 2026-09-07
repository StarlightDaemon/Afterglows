const distillationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor distillation --- */
  .ds {
    width: 116px;
    height: 96px;
    position: relative;
  }

  .ds-boil {
    position: absolute;
    left: 8px;
    bottom: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 40% 60%, rgba(0, 160, 32, 0.5), rgba(0, 80, 16, 0.75));
    overflow: hidden;
  }

  .ds-boil-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 16px;
    background: linear-gradient(180deg, rgba(0, 170, 34, 0.8), rgba(0, 90, 18, 0.95));
    animation: ds-liquid-roil 0.8s ease-in-out infinite alternate;
  }

  @keyframes ds-liquid-roil {
    0% { transform: translateY(-2px) scaleY(1.3) rotate(-3deg); }
    100% { transform: translateY(2px) scaleY(0.85) rotate(3deg); }
  }

  .ds-boil-bubble {
    position: absolute;
    bottom: 2px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.95);
    box-shadow: 0 0 6px #00ff66;
    animation: ds-bubble 0.8s ease-in infinite;
  }

  .ds-boil-bubble.b2 { left: 10px; animation-delay: -0.28s; width: 8px; height: 8px; }
  .ds-boil-bubble.b3 { left: 18px; animation-delay: -0.55s; width: 6px; height: 6px; }

  @keyframes ds-bubble {
    0% { transform: translateY(0) scale(0.4); opacity: 0; }
    25% { opacity: 1; transform: translateY(-4px) scale(0.8); }
    100% { transform: translateY(-18px) scale(1.4); opacity: 0; }
  }

  .ds-neck {
    position: absolute;
    left: 20px;
    bottom: 46px;
    width: 6px;
    height: 18px;
    background: rgba(0, 130, 26, 0.8);
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .ds-condenser {
    position: absolute;
    left: 24px;
    top: 22px;
    width: 66px;
    height: 12px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 6px;
    background: rgba(0, 40, 8, 0.5);
    transform: rotate(24deg);
    transform-origin: 0% 50%;
    overflow: hidden;
  }

  .ds-coolant {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.65) 0 6px,
      rgba(0, 110, 22, 0.65) 6px 12px);
    animation: ds-coolant 0.6s linear infinite;
  }

  @keyframes ds-coolant {
    to { background-position: -12px 0; }
  }

  .ds-inner {
    position: absolute;
    left: 2px;
    right: 2px;
    top: 50%;
    height: 3px;
    margin-top: -1.5px;
    background: rgba(214, 255, 224, 0.9);
    box-shadow: 0 0 6px #00ff66;
  }

  .ds-hose {
    position: absolute;
    width: 3px;
    height: 14px;
    background: rgba(0, 150, 30, 0.7);
    border-radius: 2px;
  }

  .ds-hose.in { left: 30px; top: 8px; transform: rotate(24deg); }
  .ds-hose.out { left: 78px; top: 40px; transform: rotate(24deg); }

  .ds-receiver {
    position: absolute;
    right: 8px;
    bottom: 12px;
    width: 26px;
    height: 30px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    overflow: hidden;
    background: rgba(0, 20, 4, 0.4);
  }

  .ds-distillate {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 8px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.8), rgba(0, 130, 26, 0.9));
    animation: ds-liquid-roil 1s ease-in-out infinite alternate;
  }

  .ds-droplet {
    position: absolute;
    right: 16px;
    top: 50px;
    width: 5px;
    height: 8px;
    border-radius: 0 0 50% 50%;
    background: rgba(214, 255, 224, 0.95);
    box-shadow: 0 0 6px #00ff66;
    animation: ds-drip 0.7s ease-in infinite;
  }

  .ds-droplet.d2 { animation-delay: -0.35s; }

  @keyframes ds-drip {
    0% { transform: translateY(0) scale(0.6); opacity: 0; }
    20% { opacity: 1; transform: translateY(0) scale(1); }
    100% { transform: translateY(24px) scale(1.1); opacity: 0; }
  }

  .ds-flame {
    position: absolute;
    left: 18px;
    bottom: 8px;
    width: 10px;
    height: 14px;
    border-radius: 50% 50% 40% 40% / 70% 70% 30% 30%;
    background: radial-gradient(ellipse at 50% 80%, #f2ffdd, rgba(140, 255, 170, 0.8) 55%, transparent);
    transform-origin: 50% 100%;
    animation: ds-flame 0.6s ease-in-out infinite alternate;
  }

  @keyframes ds-flame {
    0% { transform: scaleY(0.85) rotate(-8deg); }
    100% { transform: scaleY(1.3) rotate(8deg); }
  }

  /* --- v2: Chemical fractional distillation rig ---
     Amber-copper boiling organic mixture, cooling cyan water jacket,
     and pure crystal-blue distillate collection. */
  .dsc {
    width: 116px;
    height: 96px;
    position: relative;
  }

  .dsc-boil {
    position: absolute;
    left: 8px;
    bottom: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1.5px solid rgba(220, 240, 255, 0.85);
    background: radial-gradient(circle at 40% 60%, rgba(217, 119, 6, 0.5), rgba(153, 27, 27, 0.8));
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }

  .dsc-boil-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 16px;
    background: linear-gradient(180deg, #f59e0b, #b91c1c);
    animation: dsc-liquid-roil 0.8s ease-in-out infinite alternate;
  }

  @keyframes dsc-liquid-roil {
    0% { transform: translateY(-2px) scaleY(1.3) rotate(-3deg); }
    100% { transform: translateY(2px) scaleY(0.85) rotate(3deg); }
  }

  .dsc-boil-bubble {
    position: absolute;
    bottom: 2px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #facc15;
    animation: dsc-bubble 0.8s ease-in infinite;
  }

  .dsc-boil-bubble.b2 { left: 10px; animation-delay: -0.28s; width: 8px; height: 8px; }
  .dsc-boil-bubble.b3 { left: 18px; animation-delay: -0.55s; width: 6px; height: 6px; }

  @keyframes dsc-bubble {
    0% { transform: translateY(0) scale(0.4); opacity: 0; }
    25% { opacity: 1; transform: translateY(-4px) scale(0.8); }
    100% { transform: translateY(-18px) scale(1.4); opacity: 0; }
  }

  .dsc-neck {
    position: absolute;
    left: 20px;
    bottom: 46px;
    width: 6px;
    height: 18px;
    background: rgba(220, 240, 255, 0.2);
    border: 1px solid rgba(220, 240, 255, 0.7);
  }

  .dsc-condenser {
    position: absolute;
    left: 24px;
    top: 22px;
    width: 66px;
    height: 12px;
    border: 1.5px solid rgba(220, 240, 255, 0.85);
    border-radius: 6px;
    background: rgba(14, 165, 233, 0.15);
    transform: rotate(24deg);
    transform-origin: 0% 50%;
    overflow: hidden;
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.3);
  }

  .dsc-coolant {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg,
      rgba(56, 189, 248, 0.65) 0 6px,
      rgba(3, 105, 161, 0.75) 6px 12px);
    animation: dsc-coolant 0.6s linear infinite;
  }

  @keyframes dsc-coolant {
    to { background-position: -12px 0; }
  }

  .dsc-inner {
    position: absolute;
    left: 2px;
    right: 2px;
    top: 50%;
    height: 3px;
    margin-top: -1.5px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 6px #38bdf8;
  }

  .dsc-hose {
    position: absolute;
    width: 3px;
    height: 14px;
    background: #0284c7;
    border-radius: 2px;
  }

  .dsc-hose.in { left: 30px; top: 8px; transform: rotate(24deg); }
  .dsc-hose.out { left: 78px; top: 40px; transform: rotate(24deg); }

  .dsc-receiver {
    position: absolute;
    right: 8px;
    bottom: 12px;
    width: 26px;
    height: 30px;
    border: 1.5px solid rgba(220, 240, 255, 0.85);
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.04);
    box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.2);
  }

  .dsc-distillate {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 8px;
    background: linear-gradient(180deg, #7dd3fc, #0284c7);
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
    animation: dsc-liquid-roil 1s ease-in-out infinite alternate;
  }

  .dsc-droplet {
    position: absolute;
    right: 16px;
    top: 50px;
    width: 5px;
    height: 8px;
    border-radius: 0 0 50% 50%;
    background: #38bdf8;
    box-shadow: 0 0 6px #7dd3fc;
    animation: dsc-drip 0.7s ease-in infinite;
  }

  .dsc-droplet.d2 { animation-delay: -0.35s; }

  @keyframes dsc-drip {
    0% { transform: translateY(0) scale(0.6); opacity: 0; }
    20% { opacity: 1; transform: translateY(0) scale(1); }
    100% { transform: translateY(24px) scale(1.1); opacity: 0; }
  }

  /* Dual-zone gas heating flame */
  .dsc-flame {
    position: absolute;
    left: 18px;
    bottom: 8px;
    width: 10px;
    height: 14px;
    border-radius: 50% 50% 40% 40% / 70% 70% 30% 30%;
    background: radial-gradient(ellipse at 50% 80%, #ffffff, #00d2ff 45%, #ff7700 80%, transparent);
    transform-origin: 50% 100%;
    animation: dsc-flame 0.6s ease-in-out infinite alternate;
  }

  @keyframes dsc-flame {
    0% { transform: scaleY(0.85) rotate(-8deg); box-shadow: 0 0 8px rgba(0, 210, 255, 0.5); }
    100% { transform: scaleY(1.3) rotate(8deg); box-shadow: 0 0 14px rgba(255, 119, 0, 0.8); }
  }
`;

const distillationMarkup = {
  v1: `
    <div class="ds">
      <div class="ds-flame"></div>
      <div class="ds-boil">
        <div class="ds-boil-liquid"></div>
        <div class="ds-boil-bubble"></div>
        <div class="ds-boil-bubble b2"></div>
        <div class="ds-boil-bubble b3"></div>
      </div>
      <div class="ds-neck"></div>
      <div class="ds-condenser">
        <div class="ds-coolant"></div>
        <div class="ds-inner"></div>
      </div>
      <div class="ds-hose in"></div>
      <div class="ds-hose out"></div>
      <div class="ds-droplet"></div>
      <div class="ds-droplet d2"></div>
      <div class="ds-receiver">
        <div class="ds-distillate"></div>
      </div>
    </div>
  `,
  v2: `
    <div class="dsc">
      <div class="dsc-flame"></div>
      <div class="dsc-boil">
        <div class="dsc-boil-liquid"></div>
        <div class="dsc-boil-bubble"></div>
        <div class="dsc-boil-bubble b2"></div>
        <div class="dsc-boil-bubble b3"></div>
      </div>
      <div class="dsc-neck"></div>
      <div class="dsc-condenser">
        <div class="dsc-coolant"></div>
        <div class="dsc-inner"></div>
      </div>
      <div class="dsc-hose in"></div>
      <div class="dsc-hose out"></div>
      <div class="dsc-droplet"></div>
      <div class="dsc-droplet d2"></div>
      <div class="dsc-receiver">
        <div class="dsc-distillate"></div>
      </div>
    </div>
  `,
};

class ConceptDistillation extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${distillationStyles}</style>${distillationMarkup[version] || distillationMarkup.v2}`;
  }
}

if (!customElements.get('concept-distillation')) {
  customElements.define('concept-distillation', ConceptDistillation);
}
