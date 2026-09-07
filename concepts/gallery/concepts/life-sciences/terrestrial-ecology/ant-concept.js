const antStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .an {
    width: 116px;
    height: 80px;
    position: relative;
  }

  .an-trail {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 20px;
    height: 1px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 204, 0, 0.4) 0 3px,
      transparent 3px 7px);
  }

  .an-mound {
    position: absolute;
    right: 6px;
    bottom: 20px;
    width: 24px;
    height: 16px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, rgba(0, 120, 24, 0.6), rgba(0, 70, 14, 0.8));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  .an-mound::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 4px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: rgba(0, 30, 6, 0.9);
  }

  .an-ant {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 26px;
    height: 26px;
    animation: an-march 6s ease-in-out infinite;
  }

  @keyframes an-march {
    0% { transform: translateX(6px) scaleX(1); }
    38% { transform: translateX(74px) scaleX(1); }
    46% { transform: translateX(78px) scaleX(1); }
    52% { transform: translateX(74px) scaleX(-1); }
    88% { transform: translateX(6px) scaleX(-1); }
    100% { transform: translateX(6px) scaleX(1); }
  }

  .an-bob {
    position: absolute;
    inset: 0;
    animation: an-bob 0.3s ease-in-out infinite;
  }

  @keyframes an-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
  }

  .an-seg {
    position: absolute;
    bottom: 4px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(140, 255, 170, 0.7), rgba(0, 110, 22, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .an-seg.gaster { left: 0; width: 12px; height: 9px; }
  .an-seg.thorax { left: 10px; width: 8px; height: 7px; bottom: 5px; }
  .an-seg.head { left: 16px; width: 8px; height: 8px; bottom: 5px; }

  .an-seg.head::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
  }

  .an-antenna {
    position: absolute;
    left: 22px;
    bottom: 12px;
    width: 6px;
    height: 6px;
    border-top: 1.5px solid rgba(140, 255, 170, 0.8);
    border-right: 1.5px solid rgba(140, 255, 170, 0.8);
    border-radius: 0 60% 0 0;
    animation: an-antenna 0.5s ease-in-out infinite;
  }

  @keyframes an-antenna {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(8deg); }
  }

  .an-leg {
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 6px;
    border-left: 1.5px solid rgba(0, 130, 26, 0.9);
    transform-origin: top center;
    animation: an-step 0.3s ease-in-out infinite;
  }

  .an-leg.g1 { left: 4px; }
  .an-leg.g2 { left: 10px; animation-delay: -0.1s; }
  .an-leg.g3 { left: 16px; animation-delay: -0.2s; }

  @keyframes an-step {
    0%, 100% { transform: rotate(-16deg); }
    50% { transform: rotate(16deg); }
  }

  .an-crumb {
    position: absolute;
    left: 8px;
    bottom: 22px;
    width: 10px;
    height: 8px;
    border-radius: 40% 60% 50% 45%;
    background: radial-gradient(circle at 35% 30%, rgba(214, 255, 224, 0.85), rgba(0, 150, 30, 0.7));
    border: 1px solid rgba(140, 255, 170, 0.5);
    animation: an-crumb 6s ease-in-out infinite;
  }

  @keyframes an-crumb {
    0% { transform: translateX(6px); opacity: 1; }
    38% { transform: translateX(74px); opacity: 1; }
    46% { transform: translate(80px, 6px); opacity: 1; }
    50% { transform: translate(82px, 10px); opacity: 0; }
    100% { transform: translateX(6px); opacity: 0; }
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

  /* v2: Glossy obsidian ant hauling emerald leaf crumb to sand anthill mound */
  .anc {
    width: 116px;
    height: 80px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Ground trail */
  .anc-trail {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 20px;
    height: 1.5px;
    background: repeating-linear-gradient(90deg,
      #ca8a04 0 3px,
      transparent 3px 7px);
  }

  /* Terracotta anthill mound */
  .anc-mound {
    position: absolute;
    right: 6px;
    bottom: 20px;
    width: 24px;
    height: 16px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, #ca8a04 0%, #78350f 70%, #451a03 100%);
    border: 1px solid #eab308;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  .anc-mound::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 4px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #09090b;
  }

  /* Marching ant */
  .anc-ant {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 26px;
    height: 26px;
    animation: anc-march 6s ease-in-out infinite;
  }

  @keyframes anc-march {
    0% { transform: translateX(6px) scaleX(1); }
    38% { transform: translateX(74px) scaleX(1); }
    46% { transform: translateX(78px) scaleX(1); }
    52% { transform: translateX(74px) scaleX(-1); }
    88% { transform: translateX(6px) scaleX(-1); }
    100% { transform: translateX(6px) scaleX(1); }
  }

  .anc-bob {
    position: absolute;
    inset: 0;
    animation: anc-bob 0.3s ease-in-out infinite;
  }

  @keyframes anc-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
  }

  /* Glossy chitinous ant body segments */
  .anc-seg {
    position: absolute;
    bottom: 4px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #475569 0%, #1e293b 50%, #09090b 100%);
    border: 1px solid #64748b;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  }

  .anc-seg.gaster { left: 0; width: 12px; height: 9px; }
  .anc-seg.thorax { left: 10px; width: 8px; height: 7px; bottom: 5px; }
  .anc-seg.head { left: 16px; width: 8px; height: 8px; bottom: 5px; }

  /* Ant eye */
  .anc-seg.head::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 2px #ffffff;
  }

  /* Antennae */
  .anc-antenna {
    position: absolute;
    left: 22px;
    bottom: 12px;
    width: 6px;
    height: 6px;
    border-top: 1.5px solid #cbd5e1;
    border-right: 1.5px solid #cbd5e1;
    border-radius: 0 60% 0 0;
    animation: anc-antenna 0.5s ease-in-out infinite;
  }

  @keyframes anc-antenna {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(8deg); }
  }

  /* Scuttling legs */
  .anc-leg {
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 6px;
    border-left: 1.5px solid #94a3b8;
    transform-origin: top center;
    animation: anc-step 0.3s ease-in-out infinite;
  }

  .anc-leg.g1 { left: 4px; }
  .anc-leg.g2 { left: 10px; animation-delay: -0.1s; }
  .anc-leg.g3 { left: 16px; animation-delay: -0.2s; }

  @keyframes anc-step {
    0%, 100% { transform: rotate(-16deg); }
    50% { transform: rotate(16deg); }
  }

  /* Emerald leaf crumb */
  .anc-crumb {
    position: absolute;
    left: 8px;
    bottom: 22px;
    width: 10px;
    height: 8px;
    border-radius: 40% 60% 50% 45%;
    background: radial-gradient(circle at 35% 30%, #86efac 0%, #22c55e 60%, #15803d 100%);
    border: 1px solid #4ade80;
    box-shadow: 0 0 4px #22c55e;
    animation: anc-crumb 6s ease-in-out infinite;
  }

  @keyframes anc-crumb {
    0% { transform: translateX(6px); opacity: 1; }
    38% { transform: translateX(74px); opacity: 1; }
    46% { transform: translate(80px, 6px); opacity: 1; }
    50% { transform: translate(82px, 10px); opacity: 0; }
    100% { transform: translateX(6px); opacity: 0; }
  }
  `,
};

const antMarkup = {
  v1: `
      <div class="an">
        <div class="an-trail"></div>
        <div class="an-mound"></div>
        <div class="an-crumb"></div>
        <div class="an-ant">
          <div class="an-bob">
            <div class="an-leg g1"></div>
            <div class="an-leg g2"></div>
            <div class="an-leg g3"></div>
            <div class="an-seg gaster"></div>
            <div class="an-seg thorax"></div>
            <div class="an-seg head"></div>
            <div class="an-antenna"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="anc">
        <div class="anc-trail"></div>
        <div class="anc-mound"></div>
        <div class="anc-crumb"></div>
        <div class="anc-ant">
          <div class="anc-bob">
            <div class="anc-leg g1"></div>
            <div class="anc-leg g2"></div>
            <div class="anc-leg g3"></div>
            <div class="anc-seg gaster"></div>
            <div class="anc-seg thorax"></div>
            <div class="anc-seg head"></div>
            <div class="anc-antenna"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptAnt extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${antStyles[version] || antStyles.v2}</style>${antMarkup[version] || antMarkup.v2}`;
  }
}

if (!customElements.get('concept-ant')) {
  customElements.define('concept-ant', ConceptAnt);
}
