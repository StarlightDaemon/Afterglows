const moleculeStyles = `
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
`;

class ConceptMolecule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${moleculeStyles}</style>
      <div class="molecule-chain">
        <div class="mol-bond mb1"></div>
        <div class="mol-bond mb2"></div>
        <div class="mol-bond mb3"></div>
        <div class="mol-node mn1"></div>
        <div class="mol-node mn2"></div>
        <div class="mol-node mn3"></div>
        <div class="mol-node mn4"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-molecule')) {
  customElements.define('concept-molecule', ConceptMolecule);
}
