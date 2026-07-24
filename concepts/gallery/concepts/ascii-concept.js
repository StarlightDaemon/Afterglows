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
    animation: ascii-wiggle-v1 0.1s infinite;
    font-family: 'Courier New', monospace;
  }

  @keyframes ascii-wiggle-v1 {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(1px, 0); }
    50% { transform: translate(0, 1px); }
    75% { transform: translate(-1px, 0); }
  }

  /* --- v2: rebuilt on <pre> with flush, correctly padded content --- */
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
