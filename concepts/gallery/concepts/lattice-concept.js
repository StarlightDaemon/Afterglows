const latticeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .diamond-grid {
    width: 88px;
    height: 88px;
    transform: rotate(45deg);
    background-image:
      linear-gradient(rgba(0, 204, 0, 0.55) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 204, 0, 0.55) 1px, transparent 1px);
    background-size: 14px 14px;
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.16);
    animation: lattice-drift 4s linear infinite;
  }

  @keyframes lattice-drift {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 14px 14px, -14px -14px; }
  }
`;

class ConceptLattice extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${latticeStyles}</style><div class="diamond-grid"></div>`;
  }
}

if (!customElements.get('concept-lattice')) {
  customElements.define('concept-lattice', ConceptLattice);
}
