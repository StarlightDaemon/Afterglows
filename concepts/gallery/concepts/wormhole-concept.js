const wormholeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wormhole {
    width: 100%;
    height: 100%;
    background: conic-gradient(from 0deg, #000, var(--accent, #00cc00));
    border-radius: 50%;
    animation: spin 0.5s linear infinite;
    mask-image: radial-gradient(transparent 30%, black 70%);
  }

  @keyframes spin { to { transform: rotate(360deg); } }
`;

class ConceptWormhole extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${wormholeStyles}</style><div class="wormhole"></div>`;
  }
}

if (!customElements.get('concept-wormhole')) {
  customElements.define('concept-wormhole', ConceptWormhole);
}
