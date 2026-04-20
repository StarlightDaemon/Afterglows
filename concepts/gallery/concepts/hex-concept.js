const hexStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hex {
    width: 100px;
    height: 100px;
    background-image: radial-gradient(var(--accent, #00cc00) 1px, transparent 1px);
    background-size: 10px 10px;
    mask-image: linear-gradient(0deg, transparent, #000 50%, transparent);
    animation: scan 3s infinite;
  }

  @keyframes scan {
    to { background-position: 0 100% }
  }
`;

class ConceptHex extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${hexStyles}</style><div class="hex"></div>`;
  }
}

if (!customElements.get('concept-hex')) {
  customElements.define('concept-hex', ConceptHex);
}
