const pistonStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .piston {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .piston-cyl {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 34px;
    height: 44px;
    margin-left: -17px;
    border: 2px solid rgba(140, 255, 170, 0.6);
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background: linear-gradient(180deg, rgba(10, 36, 17, 0.9), rgba(5, 18, 7, 0.4));
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
  }

  .piston-fin {
    position: absolute;
    left: -8px;
    right: -8px;
    height: 2px;
    background: rgba(0, 204, 0, 0.3);
  }

  .piston-fin.f1 { top: 8px; }
  .piston-fin.f2 { top: 16px; }
  .piston-fin.f3 { top: 24px; }

  .piston-head {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 26px;
    height: 14px;
    margin-left: -13px;
    border-radius: 3px;
    background: linear-gradient(180deg, #8be08a 0%, #2a8a3e 70%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.45);
    animation: piston-stroke 1.6s ease-in-out infinite;
  }

  .piston-head::after {
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 4px;
    height: 1px;
    background: rgba(216, 255, 187, 0.6);
  }

  .piston-rod {
    position: absolute;
    top: 26px;
    left: 50%;
    width: 3px;
    height: 30px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), rgba(60, 160, 90, 0.7));
    transform-origin: top center;
    animation: piston-rod 1.6s ease-in-out infinite;
  }

  .piston-crank {
    position: absolute;
    top: 56px;
    left: 50%;
    width: 34px;
    height: 34px;
    margin-left: -17px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.55);
    background: radial-gradient(circle at 42% 36%, #123c1e, #071c0c 75%);
    box-sizing: border-box;
    animation: piston-crank 1.6s linear infinite;
  }

  .piston-pin {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.7);
  }

  .piston-axle {
    position: absolute;
    top: 71px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #010401;
    border: 1px solid rgba(190, 255, 205, 0.7);
    z-index: 2;
  }

  .piston-puff {
    position: absolute;
    top: 20px;
    left: 76px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 230, 160, 0.5), transparent 70%);
    filter: blur(1px);
    opacity: 0;
    animation: piston-puff 1.6s ease-out infinite;
  }

  .piston-puff.p2 { animation-delay: -0.8s; top: 24px; }

  .piston-port {
    position: absolute;
    top: 22px;
    left: 67px;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.4);
  }

  @keyframes piston-stroke {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(16px); }
  }

  @keyframes piston-rod {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(8px) rotate(9deg); }
    50% { transform: translateY(16px) rotate(0deg); }
    75% { transform: translateY(8px) rotate(-9deg); }
  }

  @keyframes piston-crank {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes piston-puff {
    0%, 45% { opacity: 0; transform: translate(0, 0) scale(0.6); }
    55% { opacity: 0.9; }
    95%, 100% { opacity: 0; transform: translate(16px, -10px) scale(1.8); }
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

  /* v2: Internal combustion engine cylinder with cast iron block, chrome piston,
     and fiery exhaust combustion flame puffs */
  .pistonc {
    width: 104px;
    height: 104px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Cast iron cylinder sleeve */
  .pistonc-cyl {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 34px;
    height: 44px;
    margin-left: -17px;
    border: 2px solid #64748b;
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  /* Cylinder cooling fins */
  .pistonc-fin {
    position: absolute;
    left: -8px;
    right: -8px;
    height: 2px;
    background: #475569;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  .pistonc-fin.f1 { top: 8px; }
  .pistonc-fin.f2 { top: 16px; }
  .pistonc-fin.f3 { top: 24px; }

  /* Polished chrome reciprocating piston head */
  .pistonc-head {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 26px;
    height: 14px;
    margin-left: -13px;
    border-radius: 3px;
    background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
    animation: pistonc-stroke 1.6s ease-in-out infinite;
  }

  .pistonc-head::after {
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 4px;
    height: 1.5px;
    background: #475569;
  }

  /* Forged steel connecting rod */
  .pistonc-rod {
    position: absolute;
    top: 26px;
    left: 50%;
    width: 3px;
    height: 30px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 100%);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    transform-origin: top center;
    animation: pistonc-rod 1.6s ease-in-out infinite;
  }

  /* Crankshaft flywheel disc */
  .pistonc-crank {
    position: absolute;
    top: 56px;
    left: 50%;
    width: 34px;
    height: 34px;
    margin-left: -17px;
    border-radius: 50%;
    border: 2px solid #64748b;
    background: radial-gradient(circle at 42% 36%, #334155 0%, #0f172a 75%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    animation: pistonc-crank 1.6s linear infinite;
  }

  /* Brass crankpin */
  .pistonc-pin {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 4px #eab308;
  }

  /* Main axle */
  .pistonc-axle {
    position: absolute;
    top: 71px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #020617;
    border: 1px solid #cbd5e1;
    z-index: 2;
  }

  /* Fiery orange combustion exhaust puffs */
  .pistonc-puff {
    position: absolute;
    top: 20px;
    left: 76px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #fde047 0%, #ea580c 60%, transparent 80%);
    box-shadow: 0 0 6px #f97316;
    filter: blur(1px);
    opacity: 0;
    animation: pistonc-puff 1.6s ease-out infinite;
  }

  .pistonc-puff.p2 { animation-delay: -0.8s; top: 24px; }

  .pistonc-port {
    position: absolute;
    top: 22px;
    left: 67px;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background: #ea580c;
    box-shadow: 0 0 4px #f97316;
  }

  @keyframes pistonc-stroke {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(16px); }
  }

  @keyframes pistonc-rod {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(8px) rotate(9deg); }
    50% { transform: translateY(16px) rotate(0deg); }
    75% { transform: translateY(8px) rotate(-9deg); }
  }

  @keyframes pistonc-crank {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pistonc-puff {
    0%, 45% { opacity: 0; transform: translate(0, 0) scale(0.6); }
    55% { opacity: 0.95; }
    95%, 100% { opacity: 0; transform: translate(16px, -10px) scale(1.8); }
  }
  `,
};

const pistonMarkup = {
  v1: `
      <div class="piston">
        <div class="piston-rod"></div>
        <div class="piston-head"></div>
        <div class="piston-cyl">
          <div class="piston-fin f1"></div>
          <div class="piston-fin f2"></div>
          <div class="piston-fin f3"></div>
        </div>
        <div class="piston-port"></div>
        <div class="piston-puff"></div>
        <div class="piston-puff p2"></div>
        <div class="piston-crank">
          <div class="piston-pin"></div>
        </div>
        <div class="piston-axle"></div>
      </div>
    `,
  v2: `
      <div class="pistonc">
        <div class="pistonc-rod"></div>
        <div class="pistonc-head"></div>
        <div class="pistonc-cyl">
          <div class="pistonc-fin f1"></div>
          <div class="pistonc-fin f2"></div>
          <div class="pistonc-fin f3"></div>
        </div>
        <div class="pistonc-port"></div>
        <div class="pistonc-puff"></div>
        <div class="pistonc-puff p2"></div>
        <div class="pistonc-crank">
          <div class="pistonc-pin"></div>
        </div>
        <div class="pistonc-axle"></div>
      </div>
    `,
};

class ConceptPiston extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${pistonStyles[version] || pistonStyles.v2}</style>${pistonMarkup[version] || pistonMarkup.v2}`;
  }
}

if (!customElements.get('concept-piston')) {
  customElements.define('concept-piston', ConceptPiston);
}
