const binaryCounterStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .binary-count {
    font-size: 24px;
    font-weight: bold;
    color: var(--accent, #00cc00);
    font-family: 'Courier New', monospace;
  }

  .binary-count::after {
    content: '1011';
    animation: count 0.5s steps(4) infinite;
  }

  @keyframes count {
    0% { content: '0000' }
    25% { content: '0101' }
    50% { content: '1010' }
    75% { content: '1111' }
  }
`;

class ConceptBinaryCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${binaryCounterStyles}</style><div class="binary-count"></div>`;
  }
}

if (!customElements.get('concept-binary-counter')) {
  customElements.define('concept-binary-counter', ConceptBinaryCounter);
}
