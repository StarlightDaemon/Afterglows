const asciiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ascii-cube {
    margin: 0;
    font-size: 11px;
    line-height: 1;
    white-space: pre;
    color: var(--accent, #00cc00);
    text-shadow: 0 0 3px var(--accent, #00cc00);
    animation: ascii-wiggle 0.18s steps(2) infinite;
    font-family: 'Courier New', monospace;
    letter-spacing: 0;
  }

  @keyframes ascii-wiggle {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(1px, 0); }
    50% { transform: translate(0, 1px); }
    75% { transform: translate(-1px, 0); }
  }
`;

class ConceptASCII extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${asciiStyles}</style>
      <pre class="ascii-cube">+------+
|      |
|  OK  |
|      |
+------+</pre>
    `;
  }
}

if (!customElements.get('concept-ascii')) {
  customElements.define('concept-ascii', ConceptASCII);
}
