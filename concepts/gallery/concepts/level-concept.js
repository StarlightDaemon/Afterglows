const levelStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A spirit level being trued up: the body rocks as its surface is
     shimmed, the bubble slides opposite the tilt, and each time it
     settles dead-center the vial flares and LEVEL flashes. */
  .lvl {
    width: 116px;
    height: 80px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .lvl-body {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 26px;
    height: 22px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 70, 14, 0.55), rgba(0, 30, 6, 0.8));
    transform-origin: 50% 50%;
    animation: lvl-rock 7s ease-in-out infinite;
  }

  @keyframes lvl-rock {
    0% { transform: rotate(3.2deg); }
    18% { transform: rotate(-2.4deg); }
    34% { transform: rotate(1.4deg); }
    46%, 62% { transform: rotate(0deg); }
    76% { transform: rotate(-3deg); }
    88% { transform: rotate(2deg); }
    100% { transform: rotate(3.2deg); }
  }

  .lvl-body::before,
  .lvl-body::after {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    width: 6px;
    background: rgba(0, 204, 0, 0.6);
  }

  .lvl-body::before { left: -2px; border-radius: 3px 0 0 3px; }
  .lvl-body::after { right: -2px; border-radius: 0 3px 3px 0; }

  .lvl-vial {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 40px;
    height: 12px;
    margin-left: -20px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    border-radius: 7px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.35), rgba(0, 60, 12, 0.5));
    overflow: hidden;
    animation: lvl-vial 7s ease-in-out infinite;
  }

  @keyframes lvl-vial {
    0%, 40% { box-shadow: none; }
    48%, 60% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.9), inset 0 0 6px rgba(0, 204, 0, 0.5); }
    66%, 100% { box-shadow: none; }
  }

  .lvl-mark {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(214, 255, 224, 0.8);
  }

  .lvl-mark.m1 { left: 14px; }
  .lvl-mark.m2 { right: 14px; }

  .lvl-bubble {
    position: absolute;
    top: 2px;
    left: 50%;
    width: 10px;
    height: 7px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 38% 32%, rgba(242, 255, 221, 0.95), rgba(140, 255, 170, 0.55) 70%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
    animation: lvl-bubble 7s ease-in-out infinite;
  }

  @keyframes lvl-bubble {
    0% { transform: translateX(-11px); }
    18% { transform: translateX(9px); }
    34% { transform: translateX(-5px); }
    46%, 62% { transform: translateX(0); }
    76% { transform: translateX(10px); }
    88% { transform: translateX(-7px); }
    100% { transform: translateX(-11px); }
  }

  .lvl-read {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    text-align: center;
    font-size: 9px;
    letter-spacing: 2px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .lvl-read::before {
    content: '+3.2\\00B0';
    animation: lvl-read 7s steps(1) infinite;
  }

  @keyframes lvl-read {
    0% { content: '+3.2\\00B0'; }
    10% { content: '-1.1\\00B0'; }
    22% { content: '-2.4\\00B0'; }
    30% { content: '+1.4\\00B0'; }
    40% { content: '+0.3\\00B0'; }
    46% { content: 'LEVEL \\2713'; }
    64% { content: '-0.8\\00B0'; }
    76% { content: '-3.0\\00B0'; }
    88% { content: '+2.0\\00B0'; }
  }

  .lvl-surface {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 54px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5), transparent);
    transform-origin: 50% 50%;
    animation: lvl-rock 7s ease-in-out infinite;
  }

  .lvl-shim {
    position: absolute;
    left: 16px;
    top: 50px;
    width: 12px;
    height: 7px;
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    background: rgba(140, 255, 170, 0.7);
    opacity: 0;
    animation: lvl-shim 7s infinite;
  }

  @keyframes lvl-shim {
    0%, 30% { transform: translateX(-26px); opacity: 0; }
    38% { transform: translateX(0); opacity: 0.9; }
    62% { transform: translateX(0); opacity: 0.9; }
    70%, 100% { transform: translateX(-26px); opacity: 0; }
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

  /* v2: Machined spirit level with aviation yellow aluminum frame,
     machined silver reference bevels, fluorescent chartreuse spirit vial,
     clear bubble, wooden shim wedge, and chromatic level HUD readout. */
  .lvlc {
    width: 116px;
    height: 80px;
    position: relative;
    font-family: 'Courier New', monospace;
    background: radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Aluminum level body in safety yellow */
  .lvlc-body {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 26px;
    height: 22px;
    border: 1.5px solid #facc15;
    border-radius: 4px;
    background: linear-gradient(180deg, #fde047 0%, #eab308 50%, #ca8a04 100%);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8);
    transform-origin: 50% 50%;
    animation: lvlc-rock 7s ease-in-out infinite;
  }

  @keyframes lvlc-rock {
    0% { transform: rotate(3.2deg); }
    18% { transform: rotate(-2.4deg); }
    34% { transform: rotate(1.4deg); }
    46%, 62% { transform: rotate(0deg); }
    76% { transform: rotate(-3deg); }
    88% { transform: rotate(2deg); }
    100% { transform: rotate(3.2deg); }
  }

  /* Rubberized shock-absorbing black end caps */
  .lvlc-body::before,
  .lvlc-body::after {
    content: '';
    position: absolute;
    top: -1.5px;
    bottom: -1.5px;
    width: 6px;
    background: #18181b;
    border: 1px solid #27272a;
  }

  .lvlc-body::before { left: -1.5px; border-radius: 3px 0 0 3px; }
  .lvlc-body::after { right: -1.5px; border-radius: 0 3px 3px 0; }

  /* Fluorescent chartreuse/neon-green spirit vial */
  .lvlc-vial {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 40px;
    height: 12px;
    margin-left: -20px;
    border: 1px solid #18181b;
    border-radius: 7px;
    background: linear-gradient(180deg, #bef264 0%, #84cc16 50%, #65a30d 100%);
    box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.8), 0 0 4px rgba(132, 204, 22, 0.4);
    overflow: hidden;
    animation: lvlc-vial 7s ease-in-out infinite;
  }

  @keyframes lvlc-vial {
    0%, 40% { box-shadow: 0 0 4px rgba(132, 204, 22, 0.4); }
    48%, 60% { box-shadow: 0 0 14px #84cc16, 0 0 24px rgba(190, 242, 100, 0.8); }
    66%, 100% { box-shadow: 0 0 4px rgba(132, 204, 22, 0.4); }
  }

  /* Black graduation line marks */
  .lvlc-mark {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #09090b;
  }

  .lvlc-mark.m1 { left: 14px; }
  .lvlc-mark.m2 { right: 14px; }

  /* Clear air bubble with glossy sheen */
  .lvlc-bubble {
    position: absolute;
    top: 2px;
    left: 50%;
    width: 10px;
    height: 7px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 38% 32%, #ffffff 0%, rgba(255, 255, 255, 0.7) 60%, rgba(190, 242, 100, 0.4) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
    animation: lvlc-bubble 7s ease-in-out infinite;
  }

  @keyframes lvlc-bubble {
    0% { transform: translateX(-11px); }
    18% { transform: translateX(9px); }
    34% { transform: translateX(-5px); }
    46%, 62% { transform: translateX(0); }
    76% { transform: translateX(10px); }
    88% { transform: translateX(-7px); }
    100% { transform: translateX(-11px); }
  }

  /* Digital readout */
  .lvlc-read {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    text-align: center;
    font-size: 9px;
    letter-spacing: 2px;
    color: #fbbf24;
    text-shadow: 0 0 6px rgba(251, 191, 36, 0.8);
  }

  .lvlc-read::before {
    content: '+3.2\\00B0';
    animation: lvlc-read 7s steps(1) infinite;
  }

  @keyframes lvlc-read {
    0% { content: '+3.2\\00B0'; color: #ef4444; text-shadow: 0 0 6px #ef4444; }
    10% { content: '-1.1\\00B0'; color: #f97316; text-shadow: 0 0 6px #f97316; }
    22% { content: '-2.4\\00B0'; color: #ef4444; text-shadow: 0 0 6px #ef4444; }
    30% { content: '+1.4\\00B0'; color: #f97316; text-shadow: 0 0 6px #f97316; }
    40% { content: '+0.3\\00B0'; color: #facc15; text-shadow: 0 0 6px #facc15; }
    46% { content: 'LEVEL \\2713'; color: #22c55e; text-shadow: 0 0 8px #22c55e; }
    64% { content: '-0.8\\00B0'; color: #facc15; text-shadow: 0 0 6px #facc15; }
    76% { content: '-3.0\\00B0'; color: #ef4444; text-shadow: 0 0 6px #ef4444; }
    88% { content: '+2.0\\00B0'; color: #f97316; text-shadow: 0 0 6px #f97316; }
  }

  /* Timber / marble reference surface */
  .lvlc-surface {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 54px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #78350f 30%, #b45309 50%, #78350f 70%, transparent);
    transform-origin: 50% 50%;
    animation: lvlc-rock 7s ease-in-out infinite;
  }

  /* Wooden leveling shim wedge */
  .lvlc-shim {
    position: absolute;
    left: 16px;
    top: 50px;
    width: 12px;
    height: 7px;
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    background: linear-gradient(135deg, #d97706, #92400e);
    border: 0.5px solid #f59e0b;
    opacity: 0;
    animation: lvlc-shim 7s infinite;
  }

  @keyframes lvlc-shim {
    0%, 30% { transform: translateX(-26px); opacity: 0; }
    38% { transform: translateX(0); opacity: 1; }
    62% { transform: translateX(0); opacity: 1; }
    70%, 100% { transform: translateX(-26px); opacity: 0; }
  }
  `,
};

const levelMarkup = {
  v1: `
      <div class="lvl">
        <div class="lvl-surface"></div>
        <div class="lvl-shim"></div>
        <div class="lvl-body">
          <div class="lvl-vial">
            <div class="lvl-mark m1"></div>
            <div class="lvl-mark m2"></div>
            <div class="lvl-bubble"></div>
          </div>
        </div>
        <div class="lvl-read"></div>
      </div>
    `,
  v2: `
      <div class="lvlc">
        <div class="lvlc-surface"></div>
        <div class="lvlc-shim"></div>
        <div class="lvlc-body">
          <div class="lvlc-vial">
            <div class="lvlc-mark m1"></div>
            <div class="lvlc-mark m2"></div>
            <div class="lvlc-bubble"></div>
          </div>
        </div>
        <div class="lvlc-read"></div>
      </div>
    `,
};

class ConceptLevel extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${levelStyles[version] || levelStyles.v2}</style>${levelMarkup[version] || levelMarkup.v2}`;
  }
}

if (!customElements.get('concept-level')) {
  customElements.define('concept-level', ConceptLevel);
}
