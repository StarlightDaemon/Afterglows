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
  }

  .mol-bond {
    position: absolute;
    height: 2px;
    background: rgba(0, 204, 0, 0.7);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.25);
    transform-origin: left center;
  }

  .mb1 { top: 28px; left: 18px; width: 28px; transform: rotate(18deg); }
  .mb2 { top: 44px; left: 42px; width: 24px; transform: rotate(-24deg); }
  .mb3 { top: 48px; left: 62px; width: 18px; transform: rotate(26deg); }

  .mol-node {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #d8ffbb, var(--accent, #00cc00));
    box-shadow: 0 0 8px rgba(170, 255, 170, 0.42);
    animation: molecule-pulse 2.4s ease-in-out infinite;
  }

  .mn1 { top: 22px; left: 12px; }
  .mn2 { top: 30px; left: 42px; animation-delay: -0.4s; }
  .mn3 { top: 40px; left: 62px; animation-delay: -0.8s; }
  .mn4 { top: 58px; left: 78px; animation-delay: -1.2s; }

  @keyframes molecule-pulse {
    0%, 100% { transform: scale(0.82); opacity: 0.55; }
    50% { transform: scale(1); opacity: 1; }
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

  /* Whole-molecule tumble: bonds and nodes are children of this single
     group, so bond endpoints and node centers can never drift apart. */
  .mol-rig {
    position: absolute;
    inset: 0;
    animation: mol-tumble 6.5s ease-in-out infinite;
  }

  @keyframes mol-tumble {
    0%, 100% { transform: rotate(-2deg) scale(1); }
    50% { transform: rotate(2.5deg) scale(1.02); }
  }

  .mol-bonds {
    position: absolute;
    inset: 0;
    overflow: visible;
  }

  .mol-bond {
    stroke: rgba(140, 255, 170, 0.7);
    stroke-width: 2;
    stroke-linecap: round;
    filter: drop-shadow(0 0 2px rgba(0, 204, 0, 0.3));
  }

  .mol-node {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #eaffea, var(--accent, #00cc00) 65%, rgba(0, 120, 24, 0.9));
    box-shadow: 0 0 8px rgba(170, 255, 170, 0.5);
    animation: mol-breathe 2.6s ease-in-out infinite;
  }

  /* Sizes vary along the backbone: small terminal atom, two larger
     interior atoms, small terminal atom - reads as a real structure
     rather than four repeats of the same dot. */
  .mn1 { width: 10px; height: 10px; top: 34px; left: 6px; }
  .mn2 { width: 16px; height: 16px; top: 20px; left: 29px; animation-delay: -0.5s; }
  .mn3 { width: 16px; height: 16px; top: 40px; left: 55px; animation-delay: -1s; }
  .mn4 { width: 9px; height: 9px; top: 21px; left: 82px; animation-delay: -1.5s; }

  @keyframes mol-breathe {
    0%, 100% { transform: scale(0.88); opacity: 0.7; }
    50% { transform: scale(1); opacity: 1; }
  }

  /* Charge pulse: a bright dot sweeping node to node down the backbone,
     its waypoints matching the bond endpoints exactly. */
  .mol-pulse {
    position: absolute;
    width: 5px;
    height: 5px;
    margin: -2.5px 0 0 -2.5px;
    border-radius: 50%;
    background: #f2ffe4;
    box-shadow: 0 0 8px rgba(230, 255, 210, 0.95);
    animation: mol-pulse-travel 3.6s ease-in-out infinite;
  }

  @keyframes mol-pulse-travel {
    0%, 4% { top: 39px; left: 11px; opacity: 0; }
    8% { opacity: 1; }
    30% { top: 27px; left: 37px; }
    55% { top: 47px; left: 63px; }
    78%, 82% { top: 24px; left: 86px; opacity: 1; }
    88%, 100% { opacity: 0; }
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
