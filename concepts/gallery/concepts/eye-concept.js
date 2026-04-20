const eyeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .eye {
    width: 20px;
    height: 20px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent, #00cc00);
    animation: look 4s infinite;
  }

  @keyframes look {
    0%, 100% { transform: translate(0, 0) }
    20% { transform: translate(-20px, 0) }
    50% { transform: translate(20px, 0) }
    80% { transform: translate(0, -10px) }
  }
`;

class ConceptEye extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${eyeStyles}</style><div class="eye"></div>`;
  }
}

if (!customElements.get('concept-eye')) {
  customElements.define('concept-eye', ConceptEye);
}
