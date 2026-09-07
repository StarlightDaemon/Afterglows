const asciiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original box, rendered from a plain <div> whose source
     indentation leaked into the white-space:pre output as a ragged
     left edge --- */
  .ascii-cube-v1 {
    font-size: 9px;
    line-height: 10px;
    white-space: pre;
    color: var(--accent, #00cc00);
    text-shadow: 0 0 3px var(--accent, #00cc00);
    animation: ascii-float-v1 2.2s ease-in-out infinite;
    font-family: 'Courier New', monospace;
  }

  @keyframes ascii-float-v1 {
    0%, 100% { transform: translateY(-7px) rotate(-5deg); }
    50% { transform: translateY(7px) rotate(5deg); }
  }

  /* --- v2: rebuilt on <pre> with flush, correctly padded content --- */
  .ascii-cube {
    margin: 0;
    font-size: 11px;
    line-height: 1;
    white-space: pre;
    color: var(--accent, #00cc00);
    text-shadow: 0 0 6px var(--accent, #00cc00), 0 0 12px rgba(0, 204, 0, 0.4);
    animation: ascii-float 2.4s ease-in-out infinite;
    font-family: 'Courier New', monospace;
    letter-spacing: 0;
  }

  @keyframes ascii-float {
    0%, 100% { transform: translateY(-9px) rotate(-7deg) scale(0.95); }
    50% { transform: translateY(9px) rotate(7deg) scale(1.05); }
  }
`;

const asciiMarkup = {
  v1: `<div class="ascii-cube-v1">+------+
                    | |
                    | OK |
                    | |
                    +------+</div>`,
  v2: `<pre class="ascii-cube">+------+
|      |
|  OK  |
|      |
+------+</pre>`,
};

class ConceptASCII extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    const body = version === 'v1' ? asciiMarkup.v1 : asciiMarkup.v2;
    this.shadowRoot.innerHTML = `<style>${asciiStyles}</style>${body}`;
  }
}

if (!customElements.get('concept-ascii')) {
  customElements.define('concept-ascii', ConceptASCII);
}
