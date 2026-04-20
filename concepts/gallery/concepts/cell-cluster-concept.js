const cellClusterStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cell-cluster {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .cell-orb {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(130, 255, 130, 0.55);
    background: radial-gradient(circle at 35% 35%, rgba(170, 255, 170, 0.32), rgba(0, 204, 0, 0.08) 70%);
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.08), 0 0 10px rgba(0, 204, 0, 0.12);
    animation: cell-float 3.4s ease-in-out infinite;
  }

  .cell-orb::before {
    content: '';
    position: absolute;
    top: 35%;
    left: 35%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(170, 255, 170, 0.35);
  }

  .co1 { width: 34px; height: 34px; top: 22px; left: 18px; }
  .co2 { width: 28px; height: 28px; top: 16px; left: 48px; animation-delay: -0.8s; }
  .co3 { width: 40px; height: 40px; top: 44px; left: 42px; animation-delay: -1.6s; }

  @keyframes cell-float {
    0%, 100% { transform: translate(0, 0) scale(0.95); }
    50% { transform: translate(2px, -3px) scale(1.03); }
  }
`;

class ConceptCellCluster extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cellClusterStyles}</style>
      <div class="cell-cluster">
        <div class="cell-orb co1"></div>
        <div class="cell-orb co2"></div>
        <div class="cell-orb co3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cell-cluster')) {
  customElements.define('concept-cell-cluster', ConceptCellCluster);
}
