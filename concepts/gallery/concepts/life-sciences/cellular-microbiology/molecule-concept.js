// Molecule Chain, rebuilt (2026-08-02): four identical dots pulsed in
// place with no sense of a physical chain. Now the whole molecule tumbles
// gently as one rigid group (bonds and nodes share the same transform, so
// they never separate), atom sizes vary along the backbone, each node
// breathes on its own phase, and a bright charge pulse travels node to
// node down the bonds to read as energy moving through the chain.
// v1 below is the archived original, preserved verbatim.
const moleculeStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .molecule-chain {
    width: 96px;
    height: 96px;
    position: relative;
    transform-origin: 50% 50%;
    animation: molecule-tumble 4s linear infinite;
  }

  @keyframes molecule-tumble {
    0% { transform: rotate(0deg) scale(0.9); }
    50% { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(0.9); }
  }

  .mol-bond {
    position: absolute;
    height: 2.5px;
    background: rgba(0, 255, 100, 0.9);
    box-shadow: 0 0 6px rgba(0, 255, 100, 0.6);
    transform-origin: left center;
  }

  .mb1 { top: 28px; left: 18px; width: 28px; transform: rotate(18deg); }
  .mb2 { top: 44px; left: 42px; width: 24px; transform: rotate(-24deg); }
  .mb3 { top: 48px; left: 62px; width: 18px; transform: rotate(26deg); }

  .mol-node {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, var(--accent, #00cc00));
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.9);
    animation: molecule-pulse 1.2s ease-in-out infinite alternate;
  }

  .mn1 { top: 22px; left: 12px; }
  .mn2 { top: 30px; left: 42px; animation-delay: -0.3s; }
  .mn3 { top: 40px; left: 62px; animation-delay: -0.6s; }
  .mn4 { top: 58px; left: 78px; animation-delay: -0.9s; }

  @keyframes molecule-pulse {
    0% { transform: scale(0.8); }
    100% { transform: scale(1.3); }
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

  .molecule-chain {
    width: 100px;
    height: 84px;
    position: relative;
  }

  .mol-rig {
    position: absolute;
    inset: 0;
    transform-origin: 50% 50%;
    animation: mol-tumble 4s linear infinite;
  }

  @keyframes mol-tumble {
    0% { transform: rotate(0deg) scale(0.9); }
    50% { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(0.9); }
  }

  .mol-bonds {
    position: absolute;
    inset: 0;
    overflow: visible;
  }

  .mol-bond {
    stroke: rgba(140, 255, 170, 0.95);
    stroke-width: 2.5;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  .mol-node {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, var(--accent, #00cc00) 65%, rgba(0, 120, 24, 0.9));
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.8);
    animation: mol-breathe 1.2s ease-in-out infinite alternate;
  }

  .mn1 { width: 12px; height: 12px; top: 34px; left: 6px; }
  .mn2 { width: 18px; height: 18px; top: 20px; left: 29px; animation-delay: -0.3s; }
  .mn3 { width: 18px; height: 18px; top: 40px; left: 55px; animation-delay: -0.6s; }
  .mn4 { width: 11px; height: 11px; top: 21px; left: 82px; animation-delay: -0.9s; }

  @keyframes mol-breathe {
    0% { transform: scale(0.85); }
    100% { transform: scale(1.35); }
  }

  /* Rapid electron / charge pulse travelling along bonds */
  .mol-pulse {
    position: absolute;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00ff66, 0 0 16px #ffffff;
    animation: mol-pulse-travel 1.4s ease-in-out infinite;
  }

  @keyframes mol-pulse-travel {
    0% { top: 39px; left: 11px; opacity: 1; }
    33% { top: 27px; left: 37px; opacity: 1; }
    66% { top: 47px; left: 63px; opacity: 1; }
    100% { top: 24px; left: 86px; opacity: 1; }
  }
`,
};

const moleculeMarkup = {
  v1: `
      <div class="molecule-chain">
        <div class="mol-bond mb1"></div>
        <div class="mol-bond mb2"></div>
        <div class="mol-bond mb3"></div>
        <div class="mol-node mn1"></div>
        <div class="mol-node mn2"></div>
        <div class="mol-node mn3"></div>
        <div class="mol-node mn4"></div>
      </div>
    `,
  v2: `
      <div class="molecule-chain">
        <div class="mol-rig">
          <svg class="mol-bonds" viewBox="0 0 100 84" aria-hidden="true">
            <line class="mol-bond" x1="11" y1="39" x2="37" y2="27"></line>
            <line class="mol-bond" x1="37" y1="27" x2="63" y2="47"></line>
            <line class="mol-bond" x1="63" y1="47" x2="86" y2="24"></line>
          </svg>
          <div class="mol-pulse"></div>
          <div class="mol-node mn1"></div>
          <div class="mol-node mn2"></div>
          <div class="mol-node mn3"></div>
          <div class="mol-node mn4"></div>
        </div>
      </div>
    `,
};

class ConceptMolecule extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${moleculeStyles[version] || moleculeStyles.v2}</style>${moleculeMarkup[version] || moleculeMarkup.v2}`;
  }
}

if (!customElements.get('concept-molecule')) {
  customElements.define('concept-molecule', ConceptMolecule);
}
