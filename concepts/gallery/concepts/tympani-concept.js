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
    border-bottom: 2px solid var(--accent, #00cc00);
    border-left: 2px solid var(--accent, #00cc00);
    border-right: 2px solid var(--accent, #00cc00);
  }

  .tym-bowl {
    position: absolute;
    left: 20px;
    top: 24px;
    width: 76px;
    height: 52px;
    border-radius: 6px 6px 50% 50% / 4px 4px 60% 60%;
    background: radial-gradient(circle at 50% 40%, rgba(0, 140, 30, 0.85), rgba(0, 35, 8, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 -6px 12px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 204, 0, 0.25);
    z-index: 2;
  }

  .tym-lug {
    position: absolute;
    top: 20px;
    width: 5px;
    height: 8px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
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
    background: radial-gradient(ellipse at center, rgba(190, 255, 205, 0.9), rgba(0, 110, 24, 0.9) 60%, rgba(0, 40, 8, 0.95));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    z-index: 3;
    animation: tym-head-deform 2.4s cubic-bezier(0.1, 0.9, 0.2, 1) infinite;
  }

  @keyframes tym-head-deform {
    0%, 15% { transform: scale(1); filter: brightness(1); }
    18% { transform: scale(0.97, 0.94) translateY(2px); filter: brightness(1.3); }
    28% { transform: scale(1.02, 1.04) translateY(-1px); }
    40% { transform: scale(1); }
    100% { transform: scale(1); }
  }

  .tym-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.9);
    transform: translate(-50%, -50%);
    animation: tym-ripple-expand 2.4s ease-out infinite;
    pointer-events: none;
  }

  .tym-ripple.r1 { animation-delay: 0.4s; }
  .tym-ripple.r2 { animation-delay: 0.65s; }

  @keyframes tym-ripple-expand {
    0%, 15% { opacity: 0; width: 4px; height: 2px; }
    18% { opacity: 1; width: 12px; height: 5px; }
    45% { opacity: 0.8; width: 46px; height: 12px; }
    70% { opacity: 0; width: 68px; height: 16px; }
    100% { opacity: 0; }
  }

  .tym-mallet {
    position: absolute;
    left: 54px;
    top: 2px;
    width: 28px;
    height: 30px;
    transform-origin: right top;
    animation: tym-mallet-strike 2.4s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
    z-index: 5;
  }

  .tym-shaft {
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 24px;
    background: rgba(140, 255, 170, 0.9);
    transform: rotate(25deg);
  }

  .tym-ball {
    position: absolute;
    left: 4px;
    bottom: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 1), rgba(0, 180, 40, 0.9));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.8);
  }

  @keyframes tym-mallet-strike {
    0%, 10% { transform: translate(0, -6px) rotate(-20deg); }
    18% { transform: translate(-8px, 14px) rotate(5deg); }
    26% { transform: translate(-4px, 0px) rotate(-15deg); }
    50%, 100% { transform: translate(0, -6px) rotate(-20deg); }
  }

  .tym-gauge {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 14px;
    height: 24px;
    border-radius: 2px;
    background: rgba(0, 40, 8, 0.95);
    border: 1px solid var(--accent, #00cc00);
    z-index: 4;
  }

  .tym-needle {
    position: absolute;
    left: 2px;
    top: 11px;
    width: 10px;
    height: 2px;
    background: rgba(190, 255, 205, 0.95);
    transform-origin: left center;
    animation: tym-gauge-jump 2.4s ease-out infinite;
  }

  @keyframes tym-gauge-jump {
    0%, 15% { transform: rotate(-10deg); }
    18% { transform: rotate(25deg); }
    30% { transform: rotate(5deg); }
    45% { transform: rotate(-5deg); }
    60%, 100% { transform: rotate(-10deg); }
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

  /* v2: Hammered copper kettle drum tympani with calfskin head,
     golden acoustic ripples, felt mallet strike, and tension gauge needle */
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
    box-shadow: 0 0 6px rgba(202, 138, 4, 0.5);
    z-index: 3;
    animation: tymc-head-deform 2.4s cubic-bezier(0.1, 0.9, 0.2, 1) infinite;
  }

  @keyframes tymc-head-deform {
    0%, 15% { transform: scale(1); filter: brightness(1); }
    18% { transform: scale(0.97, 0.94) translateY(2px); filter: brightness(1.3); }
    28% { transform: scale(1.02, 1.04) translateY(-1px); }
    40% { transform: scale(1); }
    100% { transform: scale(1); }
  }

  /* Concentric acoustic resonance shockwave ripples */
  .tymc-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid #facc15;
    box-shadow: 0 0 4px #fde047;
    transform: translate(-50%, -50%);
    animation: tymc-ripple-expand 2.4s ease-out infinite;
    pointer-events: none;
  }

  .tymc-ripple.r1 { animation-delay: 0.4s; }
  .tymc-ripple.r2 { animation-delay: 0.65s; }

  @keyframes tymc-ripple-expand {
    0%, 15% { opacity: 0; width: 4px; height: 2px; }
    18% { opacity: 1; width: 12px; height: 5px; }
    45% { opacity: 0.85; width: 46px; height: 12px; }
    70% { opacity: 0; width: 68px; height: 16px; }
    100% { opacity: 0; }
  }

  /* Mallet strike animation */
  .tymc-mallet {
    position: absolute;
    left: 54px;
    top: 2px;
    width: 28px;
    height: 30px;
    transform-origin: right top;
    animation: tymc-mallet-strike 2.4s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
    z-index: 5;
  }

  .tymc-shaft {
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
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
    box-shadow: 0 0 6px #ffffff;
  }

  @keyframes tymc-mallet-strike {
    0%, 10% { transform: translate(0, -6px) rotate(-20deg); }
    18% { transform: translate(-8px, 14px) rotate(5deg); }
    26% { transform: translate(-4px, 0px) rotate(-15deg); }
    50%, 100% { transform: translate(0, -6px) rotate(-20deg); }
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
    box-shadow: 0 0 4px #ef4444;
    transform-origin: left center;
    animation: tymc-gauge-jump 2.4s ease-out infinite;
  }

  @keyframes tymc-gauge-jump {
    0%, 15% { transform: rotate(-10deg); }
    18% { transform: rotate(25deg); }
    30% { transform: rotate(5deg); }
    45% { transform: rotate(-5deg); }
    60%, 100% { transform: rotate(-10deg); }
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
