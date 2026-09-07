const broomStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .brm {
    width: 114px;
    height: 98px;
    position: relative;
    overflow: hidden;
  }

  .brm-rig {
    position: absolute;
    left: 14px;
    top: 10px;
    width: 48px;
    height: 80px;
    transform-origin: 24px 40px;
    animation: brm-bank-flight 4.4s ease-in-out infinite;
  }

  @keyframes brm-bank-flight {
    0%   { transform: translate(0, 0) rotate(16deg); }
    20%  { transform: translate(18px, -8px) rotate(-20deg); }
    40%  { transform: translate(42px, 2px) rotate(22deg); }
    60%  { transform: translate(20px, 6px) rotate(-16deg); }
    80%  { transform: translate(2px, -4px) rotate(18deg); }
    100% { transform: translate(0, 0) rotate(16deg); }
  }

  .brm-handle {
    position: absolute;
    left: 22px;
    top: 0;
    width: 4px;
    height: 54px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    transform: rotate(-12deg);
    transform-origin: bottom center;
  }

  .brm-bristles {
    position: absolute;
    left: 10px;
    bottom: 4px;
    width: 26px;
    height: 28px;
    clip-path: polygon(30% 0, 70% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 50, 10, 0.95));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    animation: brm-bristle-flex 2.2s ease-in-out infinite;
  }

  @keyframes brm-bristle-flex {
    0%, 100% { transform: skewX(-12deg); }
    40% { transform: skewX(18deg) scaleY(0.85); }
    60% { transform: skewX(-8deg); }
  }

  .brm-twine {
    position: absolute;
    left: 16px;
    bottom: 24px;
    width: 14px;
    height: 6px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.95);
    border: 1px solid var(--accent, #00cc00);
  }

  .brm-dust {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
    animation: brm-spark-trail 1.1s ease-out infinite;
    pointer-events: none;
  }

  .brm-dust.d1 { left: 14px; bottom: 2px; animation-delay: 0s; }
  .brm-dust.d2 { left: 18px; bottom: 8px; animation-delay: -0.35s; }
  .brm-dust.d3 { left: 12px; bottom: 14px; animation-delay: -0.7s; }

  @keyframes brm-spark-trail {
    0% { opacity: 0.9; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(-10px, 8px) scale(0.3); }
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

  /* v2: Enchanted flying broom with birch handle, golden straw bristles,
     scarlet ribbon binding, and sparkling violet/gold fairy dust motes */
  .brmc {
    width: 114px;
    height: 98px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Banking flight rig */
  .brmc-rig {
    position: absolute;
    left: 14px;
    top: 10px;
    width: 48px;
    height: 80px;
    transform-origin: 24px 40px;
    animation: brmc-bank-flight 4.4s ease-in-out infinite;
  }

  @keyframes brmc-bank-flight {
    0%   { transform: translate(0, 0) rotate(16deg); }
    20%  { transform: translate(18px, -8px) rotate(-20deg); }
    40%  { transform: translate(42px, 2px) rotate(22deg); }
    60%  { transform: translate(20px, 6px) rotate(-16deg); }
    80%  { transform: translate(2px, -4px) rotate(18deg); }
    100% { transform: translate(0, 0) rotate(16deg); }
  }

  /* Birch wooden handle */
  .brmc-handle {
    position: absolute;
    left: 22px;
    top: 0;
    width: 4px;
    height: 54px;
    border-radius: 2px;
    background: linear-gradient(90deg, #fde047 0%, #ca8a04 50%, #78350f 100%);
    border: 0.5px solid #facc15;
    box-shadow: 0 0 6px rgba(250, 204, 21, 0.5);
    transform: rotate(-12deg);
    transform-origin: bottom center;
  }

  /* Golden straw twig bristles */
  .brmc-bristles {
    position: absolute;
    left: 10px;
    bottom: 4px;
    width: 26px;
    height: 28px;
    clip-path: polygon(30% 0, 70% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #eab308 0%, #ca8a04 60%, #854d0e 100%);
    border: 1px solid #facc15;
    box-shadow: 0 0 8px rgba(234, 179, 8, 0.4);
    animation: brmc-bristle-flex 2.2s ease-in-out infinite;
  }

  @keyframes brmc-bristle-flex {
    0%, 100% { transform: skewX(-12deg); }
    40% { transform: skewX(18deg) scaleY(0.85); }
    60% { transform: skewX(-8deg); }
  }

  /* Scarlet ribbon twine */
  .brmc-twine {
    position: absolute;
    left: 16px;
    bottom: 24px;
    width: 14px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(180deg, #ef4444, #b91c1c);
    border: 1px solid #f87171;
    box-shadow: 0 0 4px #ef4444;
  }

  /* Golden and violet fairy spark motes */
  .brmc-dust {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    animation: brmc-spark-trail 1.1s ease-out infinite;
    pointer-events: none;
  }

  .brmc-dust.d1 { left: 14px; bottom: 2px; background: #fde047; box-shadow: 0 0 6px #facc15; animation-delay: 0s; }
  .brmc-dust.d2 { left: 18px; bottom: 8px; background: #c084fc; box-shadow: 0 0 6px #a855f7; animation-delay: -0.35s; }
  .brmc-dust.d3 { left: 12px; bottom: 14px; background: #38bdf8; box-shadow: 0 0 6px #00f0ff; animation-delay: -0.7s; }

  @keyframes brmc-spark-trail {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(-10px, 8px) scale(0.3); }
  }
  `,
};

const broomMarkup = {
  v1: `
      <div class="brm">
        <div class="brm-rig">
          <div class="brm-handle"></div>
          <div class="brm-bristles"></div>
          <div class="brm-twine"></div>
          <div class="brm-dust d1"></div>
          <div class="brm-dust d2"></div>
          <div class="brm-dust d3"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="brmc">
        <div class="brmc-rig">
          <div class="brmc-handle"></div>
          <div class="brmc-bristles"></div>
          <div class="brmc-twine"></div>
          <div class="brmc-dust d1"></div>
          <div class="brmc-dust d2"></div>
          <div class="brmc-dust d3"></div>
        </div>
      </div>
    `,
};

class ConceptBroom extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${broomStyles[version] || broomStyles.v2}</style>${broomMarkup[version] || broomMarkup.v2}`;
  }
}

if (!customElements.get('concept-broom')) {
  customElements.define('concept-broom', ConceptBroom);
}
