const cursorPromptStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cursor-prompt {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--accent, #00cc00);
    font-size: 16px;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.35);
  }

  .prompt-text { opacity: 0.75; }

  .cursor-block {
    width: 12px;
    height: 18px;
    background: var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
    animation: cursor-blink 1s steps(1) infinite;
  }

  @keyframes cursor-blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Vintage amber CRT terminal prompt with phosphor scanlines,
     blinking amber block cursor, and retro warm glow */
  .cursor-promptc {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 104px;
    height: 84px;
    background: radial-gradient(circle at 50% 50%, #291804 0%, #0d0801 80%, #000000 100%);
    border: 2px solid #78350f;
    border-radius: 6px;
    box-shadow: inset 0 0 14px rgba(245, 158, 11, 0.2), 0 4px 10px rgba(0, 0, 0, 0.8);
    position: relative;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    font-size: 18px;
    font-weight: bold;
    color: #fbbf24;
    text-shadow: 0 0 8px #f59e0b, 0 0 14px #d97706;
  }

  /* Horizontal CRT scanline overlay */
  .cursor-promptc::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0 2px, transparent 2px 4px);
    pointer-events: none;
    z-index: 2;
  }

  .promptc-text {
    opacity: 0.9;
    z-index: 1;
  }

  /* Solid blinking phosphor amber block */
  .cursor-blockc {
    width: 11px;
    height: 18px;
    background: #fde047;
    box-shadow: 0 0 10px #f59e0b, 0 0 16px #d97706;
    animation: cursorc-blink 1s steps(1) infinite;
    z-index: 1;
  }

  @keyframes cursorc-blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  `,
};

const cursorPromptMarkup = {
  v1: `
      <div class="cursor-prompt">
        <span class="prompt-text">>_</span>
        <div class="cursor-block"></div>
      </div>
    `,
  v2: `
      <div class="cursor-promptc">
        <span class="promptc-text">>_</span>
        <div class="cursor-blockc"></div>
      </div>
    `,
};

class ConceptCursorPrompt extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${cursorPromptStyles[version] || cursorPromptStyles.v2}</style>${cursorPromptMarkup[version] || cursorPromptMarkup.v2}`;
  }
}

if (!customElements.get('concept-cursor-prompt')) {
  customElements.define('concept-cursor-prompt', ConceptCursorPrompt);
}
