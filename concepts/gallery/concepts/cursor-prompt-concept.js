const cursorPromptStyles = `
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
`;

class ConceptCursorPrompt extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cursorPromptStyles}</style>
      <div class="cursor-prompt">
        <span class="prompt-text">>_</span>
        <div class="cursor-block"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cursor-prompt')) {
  customElements.define('concept-cursor-prompt', ConceptCursorPrompt);
}
