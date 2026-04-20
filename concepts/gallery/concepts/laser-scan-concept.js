const laserScanStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .scan-line {
    width: 100%;
    height: 2px;
    background: #f00;
    box-shadow: 0 0 10px #f00;
    animation: laser 1s ease-in-out infinite alternate;
  }

  @keyframes laser {
    0% { transform: translateY(-60px) }
    100% { transform: translateY(60px) }
  }
`;

class ConceptLaserScan extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${laserScanStyles}</style><div class="scan-line"></div>`;
  }
}

if (!customElements.get('concept-laser-scan')) {
  customElements.define('concept-laser-scan', ConceptLaserScan);
}
