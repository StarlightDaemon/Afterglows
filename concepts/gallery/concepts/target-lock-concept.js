const targetLockStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .lock-ring {
    border: 2px dashed var(--accent, #00cc00);
    border-radius: 50%;
    position: absolute;
    animation: spin 4s linear infinite;
  }

  .lr1 {
    width: 80px;
    height: 80px;
    border-width: 1px;
    animation-direction: reverse;
  }

  .lr2 {
    width: 40px;
    height: 40px;
    border-style: solid;
    border-color: transparent var(--accent, #00cc00);
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

class ConceptTargetLock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${targetLockStyles}</style>
      <div class="lock-ring lr1"></div>
      <div class="lock-ring lr2"></div>
    `;
  }
}

if (!customElements.get('concept-target-lock')) {
  customElements.define('concept-target-lock', ConceptTargetLock);
}
