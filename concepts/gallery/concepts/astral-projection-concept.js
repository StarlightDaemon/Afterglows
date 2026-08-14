const astralProjectionStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ast {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .ast-circle {
    position: absolute;
    left: 22px;
    bottom: 8px;
    width: 70px;
    height: 14px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.6);
    background: radial-gradient(ellipse at center, rgba(0, 100, 20, 0.5), transparent 70%);
  }

  .ast-body-phys {
    position: absolute;
    left: 42px;
    bottom: 12px;
    width: 30px;
    height: 36px;
    z-index: 3;
  }

  .ast-head-phys {
    position: absolute;
    left: 9px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(0, 120, 24, 0.95);
    border: 1.5px solid var(--accent, #00cc00);
  }

  .ast-torso-phys {
    position: absolute;
    left: 6px;
    top: 10px;
    width: 18px;
    height: 16px;
    border-radius: 6px;
    background: rgba(0, 80, 16, 0.95);
    border: 1px solid var(--accent, #00cc00);
  }

  .ast-legs-phys {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 10px;
    border-radius: 8px;
    background: rgba(0, 60, 12, 0.95);
    border: 1px solid var(--accent, #00cc00);
  }

  .ast-form-drift {
    position: absolute;
    left: 42px;
    top: 10px;
    width: 30px;
    height: 36px;
    z-index: 5;
    animation: ast-levitate 4.5s ease-in-out infinite;
  }

  @keyframes ast-levitate {
    0%, 100% { transform: translateY(24px) scale(0.9); opacity: 0.3; }
    50% { transform: translateY(-4px) scale(1.1); opacity: 0.9; }
  }

  .ast-head-astral {
    position: absolute;
    left: 9px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 10px rgba(140, 255, 170, 1);
  }

  .ast-torso-astral {
    position: absolute;
    left: 6px;
    top: 10px;
    width: 18px;
    height: 16px;
    border-radius: 6px;
    background: radial-gradient(circle, rgba(190, 255, 205, 0.9), rgba(0, 204, 0, 0.6));
    border: 1px solid rgba(190, 255, 205, 1);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.8);
  }

  .ast-legs-astral {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 10px;
    border-radius: 8px;
    background: rgba(140, 255, 170, 0.8);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.6);
  }

  .ast-cord {
    position: absolute;
    left: 56px;
    top: 26px;
    width: 2px;
    height: 48px;
    background: repeating-linear-gradient(180deg, rgba(190, 255, 205, 1) 0 4px, rgba(140, 255, 170, 0.4) 4px 8px);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    animation: ast-cord-wave 2.2s ease-in-out infinite alternate;
    z-index: 4;
  }

  @keyframes ast-cord-wave {
    0% { transform: scaleX(0.8) skewX(-12deg); opacity: 0.7; }
    100% { transform: scaleX(1.4) skewX(12deg); opacity: 1; }
  }

  .ast-aura {
    position: absolute;
    left: 32px;
    top: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.4);
    animation: ast-aura-bloom 4.5s ease-out infinite;
    pointer-events: none;
  }

  @keyframes ast-aura-bloom {
    0% { transform: scale(0.5); opacity: 0; }
    50% { opacity: 0.8; }
    100% { transform: scale(1.6); opacity: 0; }
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

  /* v2: Cosmic astral projection with grounded terracotta meditating physical body,
     luminous electric cyan/magenta ethereal double, silver umbilical cord, and expanding auras */
  .astc {
    width: 114px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Grounding sacred circle */
  .astc-circle {
    position: absolute;
    left: 22px;
    bottom: 8px;
    width: 70px;
    height: 14px;
    border-radius: 50%;
    border: 1.5px dashed #facc15;
    background: radial-gradient(ellipse at center, rgba(234, 88, 12, 0.4), transparent 70%);
  }

  /* Physical grounded body (earth/terracotta tones) */
  .astc-body-phys {
    position: absolute;
    left: 42px;
    bottom: 12px;
    width: 30px;
    height: 36px;
    z-index: 3;
  }

  .astc-head-phys {
    position: absolute;
    left: 9px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ea580c;
    border: 1.5px solid #facc15;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  .astc-torso-phys {
    position: absolute;
    left: 6px;
    top: 10px;
    width: 18px;
    height: 16px;
    border-radius: 6px;
    background: #c2410c;
    border: 1px solid #facc15;
  }

  .astc-legs-phys {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 10px;
    border-radius: 8px;
    background: #9a3412;
    border: 1px solid #ea580c;
  }

  /* Ethereal drifting astral double (electric cyan/magenta) */
  .astc-form-drift {
    position: absolute;
    left: 42px;
    top: 10px;
    width: 30px;
    height: 36px;
    z-index: 5;
    animation: astc-levitate 4.5s ease-in-out infinite;
  }

  @keyframes astc-levitate {
    0%, 100% { transform: translateY(24px) scale(0.9); opacity: 0.3; }
    50% { transform: translateY(-4px) scale(1.1); opacity: 0.95; }
  }

  .astc-head-astral {
    position: absolute;
    left: 9px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 14px #00f0ff, 0 0 22px #a855f7;
  }

  .astc-torso-astral {
    position: absolute;
    left: 6px;
    top: 10px;
    width: 18px;
    height: 16px;
    border-radius: 6px;
    background: radial-gradient(circle, #38bdf8 0%, #a855f7 70%, #ec4899 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 0 12px #38bdf8;
  }

  .astc-legs-astral {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 10px;
    border-radius: 8px;
    background: #c084fc;
    box-shadow: 0 0 8px #a855f7;
  }

  /* Silver-cyan umbilical cord */
  .astc-cord {
    position: absolute;
    left: 56px;
    top: 26px;
    width: 2px;
    height: 48px;
    background: repeating-linear-gradient(180deg, #ffffff 0 4px, #38bdf8 4px 8px);
    box-shadow: 0 0 8px #00f0ff;
    animation: astc-cord-wave 2.2s ease-in-out infinite alternate;
    z-index: 4;
  }

  @keyframes astc-cord-wave {
    0% { transform: scaleX(0.8) skewX(-12deg); opacity: 0.7; }
    100% { transform: scaleX(1.4) skewX(12deg); opacity: 1; }
  }

  /* Cosmic energy aura ripples */
  .astc-aura {
    position: absolute;
    left: 32px;
    top: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1.5px solid #a855f7;
    box-shadow: 0 0 10px #c084fc;
    animation: astc-aura-bloom 4.5s ease-out infinite;
    pointer-events: none;
  }

  @keyframes astc-aura-bloom {
    0% { transform: scale(0.5); opacity: 0; }
    50% { opacity: 0.9; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  `,
};

const astralProjectionMarkup = {
  v1: `
      <div class="ast">
        <div class="ast-circle"></div>
        <div class="ast-aura"></div>
        <div class="ast-cord"></div>
        <div class="ast-body-phys">
          <div class="ast-head-phys"></div>
          <div class="ast-torso-phys"></div>
          <div class="ast-legs-phys"></div>
        </div>
        <div class="ast-form-drift">
          <div class="ast-head-astral"></div>
          <div class="ast-torso-astral"></div>
          <div class="ast-legs-astral"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="astc">
        <div class="astc-circle"></div>
        <div class="astc-aura"></div>
        <div class="astc-cord"></div>
        <div class="astc-body-phys">
          <div class="astc-head-phys"></div>
          <div class="astc-torso-phys"></div>
          <div class="astc-legs-phys"></div>
        </div>
        <div class="astc-form-drift">
          <div class="astc-head-astral"></div>
          <div class="astc-torso-astral"></div>
          <div class="astc-legs-astral"></div>
        </div>
      </div>
    `,
};

class ConceptAstralProjection extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${astralProjectionStyles[version] || astralProjectionStyles.v2}</style>${astralProjectionMarkup[version] || astralProjectionMarkup.v2}`;
  }
}

if (!customElements.get('concept-astral-projection')) {
  customElements.define('concept-astral-projection', ConceptAstralProjection);
}
