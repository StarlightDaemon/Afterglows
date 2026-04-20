const gridStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .grid-globe {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid var(--accent, #00cc00);
    background: repeating-linear-gradient(0deg, transparent 0 9px, rgba(0, 204, 0, 0.5) 10px),
                repeating-linear-gradient(90deg, transparent 0 9px, rgba(0, 204, 0, 0.5) 10px);
    animation: spin-slow 8s linear infinite;
    background-size: 200% 200%;
  }

  @keyframes spin-slow {
    to { background-position: 100% 100%; }
  }
`;

class ConceptGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${gridStyles}</style><div class="grid-globe"></div>`;
  }
}

if (!customElements.get('concept-grid')) {
  customElements.define('concept-grid', ConceptGrid);
}
