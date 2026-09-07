const tympaniStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tym {
    width: 116px;
    height: 98px;
    position: relative;
  }

  .tym-stand {
    position: absolute;
    left: 36px;
    bottom: 4px;
    width: 44px;
    height: 14px;
    border-bottom: 2.5px solid #00ff66;
    border-left: 2.5px solid #00ff66;
    border-right: 2.5px solid #00ff66;
    box-shadow: 0 0 6px rgba(0, 255, 100, 0.3);
  }

  .tym-bowl {
    position: absolute;
    left: 20px;
    top: 24px;
    width: 76px;
    height: 52px;
    border-radius: 6px 6px 50% 50% / 4px 4px 60% 60%;
    background: radial-gradient(circle at 50% 40%, rgba(0, 140, 30, 0.9), rgba(0, 35, 8, 0.98));
    border: 2px solid #00ff66;
    box-shadow: inset 0 -6px 12px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 255, 100, 0.4);
    z-index: 2;
  }

  .tym-lug {
    position: absolute;
    top: 20px;
    width: 5px;
    height: 8px;
    border-radius: 1px;
    background: #ffffff;
    border: 1px solid #00ff66;
    box-shadow: 0 0 4px #00ff66;
    z-index: 4;
  }

  .tym-lug.l1 { left: 24px; }
  .tym-lug.l2 { left: 56px; }
  .tym-lug.l3 { left: 88px; }

  .tym-head {
    position: absolute;
    left: 18px;
    top: 18px;
    width: 80px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #ffffff, #00ff66 60%, rgba(0, 40, 8, 0.95));
    border: 2px solid #00ff66;
    box-shadow: 0 0 8px #00ff66;
    z-index: 3;
    animation: tym-head-deform 0.6s ease-in-out infinite alternate;
  }

  @keyframes tym-head-deform {
    0% { transform: scale(1.04, 1.06) translateY(-2px); }
    100% { transform: scale(0.96, 0.94) translateY(3px); }
  }

  .tym-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 6px #00ff66;
    transform: translate(-50%, -50%);
    animation: tym-ripple-expand 0.8s ease-out infinite;
    pointer-events: none;
  }

  .tym-ripple.r1 { animation-delay: 0s; }
  .tym-ripple.r2 { animation-delay: -0.4s; }

  @keyframes tym-ripple-expand {
    0% { opacity: 1; width: 6px; height: 3px; }
    100% { opacity: 0; width: 72px; height: 18px; }
  }

  .tym-mallet {
    position: absolute;
    left: 54px;
    top: 2px;
    width: 28px;
    height: 30px;
    transform-origin: right top;
    animation: tym-mallet-strike 0.6s ease-in-out infinite alternate;
    z-index: 5;
  }

  .tym-shaft {
    position: absolute;
    right: 0;
    top: 0;
    width: 2.5px;
    height: 24px;
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
    transform: rotate(25deg);
  }

  .tym-ball {
    position: absolute;
    left: 4px;
    bottom: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #ffffff, #00ff66 90%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px #00ff66;
  }

  @keyframes tym-mallet-strike {
    0% { transform: translate(0, -12px) rotate(-28deg); }
    100% { transform: translate(-10px, 14px) rotate(8deg); }
  }

  .tym-gauge {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 14px;
    height: 24px;
    border-radius: 2px;
    background: rgba(0, 40, 8, 0.95);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 6px rgba(0, 255, 100, 0.3);
    z-index: 4;
  }

  .tym-needle {
    position: absolute;
    left: 2px;
    top: 11px;
    width: 10px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
    transform-origin: left center;
    animation: tym-gauge-jump 0.6s ease-in-out infinite alternate;
  }

  @keyframes tym-gauge-jump {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(30deg); }
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

  /* v2: Hammered copper kettle drum tympani */
  .tymc {
    width: 116px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Tripod cast iron stand */
  .tymc-stand {
    position: absolute;
    left: 36px;
    bottom: 4px;
    width: 44px;
    height: 14px;
    border-bottom: 2.5px solid #64748b;
    border-left: 2.5px solid #64748b;
    border-right: 2.5px solid #64748b;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  /* Hammered copper parabolic kettle bowl */
  .tymc-bowl {
    position: absolute;
    left: 20px;
    top: 24px;
    width: 76px;
    height: 52px;
    border-radius: 6px 6px 50% 50% / 4px 4px 60% 60%;
    background: radial-gradient(circle at 50% 40%, #fdba74 0%, #ea580c 45%, #c2410c 70%, #431407 100%);
    border: 2px solid #ea580c;
    box-shadow: inset 0 -6px 12px rgba(0, 0, 0, 0.9), 0 4px 10px rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  /* Chrome tuning lugs */
  .tymc-lug {
    position: absolute;
    top: 20px;
    width: 5px;
    height: 8px;
    border-radius: 1px;
    background: linear-gradient(180deg, #ffffff, #94a3b8);
    border: 1px solid #cbd5e1;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    z-index: 4;
  }

  .tymc-lug.l1 { left: 24px; }
  .tymc-lug.l2 { left: 56px; }
  .tymc-lug.l3 { left: 88px; }

  /* Natural calfskin parchment drumhead */
  .tymc-head {
    position: absolute;
    left: 18px;
    top: 18px;
    width: 80px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #fef3c7 0%, #fde68a 50%, #d97706 90%, #78350f 100%);
    border: 2px solid #ca8a04;
    box-shadow: 0 0 8px rgba(202, 138, 4, 0.6);
    z-index: 3;
    animation: tymc-head-deform 0.6s ease-in-out infinite alternate;
  }

  @keyframes tymc-head-deform {
    0% { transform: scale(1.04, 1.06) translateY(-2px); }
    100% { transform: scale(0.96, 0.94) translateY(3px); }
  }

  /* Concentric acoustic resonance shockwave ripples */
  .tymc-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid #facc15;
    box-shadow: 0 0 6px #fde047;
    transform: translate(-50%, -50%);
    animation: tymc-ripple-expand 0.8s ease-out infinite;
    pointer-events: none;
  }

  .tymc-ripple.r1 { animation-delay: 0s; }
  .tymc-ripple.r2 { animation-delay: -0.4s; }

  @keyframes tymc-ripple-expand {
    0% { opacity: 1; width: 6px; height: 3px; }
    100% { opacity: 0; width: 72px; height: 18px; }
  }

  /* Mallet strike animation */
  .tymc-mallet {
    position: absolute;
    left: 54px;
    top: 2px;
    width: 28px;
    height: 30px;
    transform-origin: right top;
    animation: tymc-mallet-strike 0.6s ease-in-out infinite alternate;
    z-index: 5;
  }

  .tymc-shaft {
    position: absolute;
    right: 0;
    top: 0;
    width: 2.5px;
    height: 24px;
    background: #b45309;
    transform: rotate(25deg);
  }

  .tymc-ball {
    position: absolute;
    left: 4px;
    bottom: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #ffffff 0%, #f1f5f9 60%, #cbd5e1 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 0 8px #ffffff;
  }

  @keyframes tymc-mallet-strike {
    0% { transform: translate(0, -12px) rotate(-28deg); }
    100% { transform: translate(-10px, 14px) rotate(8deg); }
  }

  /* Pitch tension gauge */
  .tymc-gauge {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 14px;
    height: 24px;
    border-radius: 2px;
    background: #09090b;
    border: 1px solid #38bdf8;
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.4);
    z-index: 4;
  }

  .tymc-needle {
    position: absolute;
    left: 2px;
    top: 11px;
    width: 10px;
    height: 2px;
    background: #f43f5e;
    box-shadow: 0 0 6px #ef4444;
    transform-origin: left center;
    animation: tymc-gauge-jump 0.6s ease-in-out infinite alternate;
  }

  @keyframes tymc-gauge-jump {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(30deg); }
  }
  `,
};

const tympaniMarkup = {
  v1: `
      <div class="tym">
        <div class="tym-stand"></div>
        <div class="tym-bowl"></div>
        <div class="tym-lug l1"></div>
        <div class="tym-lug l2"></div>
        <div class="tym-lug l3"></div>
        <div class="tym-head">
          <div class="tym-ripple r1"></div>
          <div class="tym-ripple r2"></div>
        </div>
        <div class="tym-mallet">
          <div class="tym-shaft"></div>
          <div class="tym-ball"></div>
        </div>
        <div class="tym-gauge">
          <div class="tym-needle"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="tymc">
        <div class="tymc-stand"></div>
        <div class="tymc-bowl"></div>
        <div class="tymc-lug l1"></div>
        <div class="tymc-lug l2"></div>
        <div class="tymc-lug l3"></div>
        <div class="tymc-head">
          <div class="tymc-ripple r1"></div>
          <div class="tymc-ripple r2"></div>
        </div>
        <div class="tymc-mallet">
          <div class="tymc-shaft"></div>
          <div class="tymc-ball"></div>
        </div>
        <div class="tymc-gauge">
          <div class="tymc-needle"></div>
        </div>
      </div>
    `,
};

class ConceptTympani extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${tympaniStyles[version] || tympaniStyles.v2}</style>${tympaniMarkup[version] || tympaniMarkup.v2}`;
  }
}

if (!customElements.get('concept-tympani')) {
  customElements.define('concept-tympani', ConceptTympani);
}
