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
    animation: lvl-rock 1.8s ease-in-out infinite alternate;
  }

  @keyframes lvl-rock {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
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
    width: 44px;
    height: 12px;
    margin-left: -22px;
    border: 1.5px solid rgba(140, 255, 170, 0.9);
    border-radius: 7px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.5), rgba(0, 60, 12, 0.7));
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
  }

  .lvl-mark {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: rgba(214, 255, 224, 0.9);
  }

  .lvl-mark.m1 { left: 16px; }
  .lvl-mark.m2 { right: 16px; }

  .lvl-bubble {
    position: absolute;
    top: 2px;
    left: 50%;
    width: 10px;
    height: 7px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 38% 32%, #ffffff, rgba(140, 255, 170, 0.9) 70%);
    box-shadow: 0 0 8px #00ff66;
    animation: lvl-bubble 1.8s ease-in-out infinite alternate;
  }

  @keyframes lvl-bubble {
    0% { transform: translateX(15px); }
    100% { transform: translateX(-15px); }
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
    content: 'TILT \\00B1 8.0\\00B0';
  }

  .lvl-surface {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 54px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.7), transparent);
    transform-origin: 50% 50%;
    animation: lvl-rock 1.8s ease-in-out infinite alternate;
  }

  .lvl-shim {
    position: absolute;
    left: 16px;
    top: 50px;
    width: 14px;
    height: 8px;
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    background: rgba(140, 255, 170, 0.85);
    box-shadow: 0 0 6px #00ff66;
    animation: lvl-shim 1.8s ease-in-out infinite alternate;
  }

  @keyframes lvl-shim {
    0% { transform: translateX(-18px); opacity: 0.3; }
    100% { transform: translateX(4px); opacity: 1; }
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
    animation: lvlc-rock 1.8s ease-in-out infinite alternate;
  }

  @keyframes lvlc-rock {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
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
    width: 44px;
    height: 12px;
    margin-left: -22px;
    border: 1px solid #18181b;
    border-radius: 7px;
    background: linear-gradient(180deg, #bef264 0%, #84cc16 50%, #65a30d 100%);
    box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.8), 0 0 8px #84cc16;
    overflow: hidden;
  }

  /* Black graduation line marks */
  .lvlc-mark {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: #09090b;
  }

  .lvlc-mark.m1 { left: 16px; }
  .lvlc-mark.m2 { right: 16px; }

  /* Clear air bubble with glossy sheen */
  .lvlc-bubble {
    position: absolute;
    top: 2px;
    left: 50%;
    width: 10px;
    height: 7px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 38% 32%, #ffffff 0%, rgba(255, 255, 255, 0.9) 60%, rgba(190, 242, 100, 0.6) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
    animation: lvlc-bubble 1.8s ease-in-out infinite alternate;
  }

  @keyframes lvlc-bubble {
    0% { transform: translateX(15px); }
    100% { transform: translateX(-15px); }
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
    content: 'TILT \\00B1 8.0\\00B0';
  }

  /* Timber reference surface */
  .lvlc-surface {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 54px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #78350f 30%, #b45309 50%, #78350f 70%, transparent);
    transform-origin: 50% 50%;
    animation: lvlc-rock 1.8s ease-in-out infinite alternate;
  }

  /* Wooden leveling shim wedge */
  .lvlc-shim {
    position: absolute;
    left: 16px;
    top: 50px;
    width: 14px;
    height: 8px;
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    background: linear-gradient(135deg, #d97706, #92400e);
    border: 0.5px solid #f59e0b;
    box-shadow: 0 0 6px #f59e0b;
    animation: lvlc-shim 1.8s ease-in-out infinite alternate;
  }

  @keyframes lvlc-shim {
    0% { transform: translateX(-18px); opacity: 0.3; }
    100% { transform: translateX(4px); opacity: 1; }
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
