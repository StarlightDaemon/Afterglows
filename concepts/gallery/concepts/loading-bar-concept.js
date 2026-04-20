const loadingBarStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .load-box {
    width: 100px;
    height: 20px;
    border: 2px solid var(--accent, #00cc00);
    padding: 2px;
  }

  .load-fill {
    height: 100%;
    background: var(--accent, #00cc00);
    width: 0%;
    animation: fill 2s steps(10) infinite;
  }

  @keyframes fill {
    100% { width: 100% }
  }
`;

class ConceptLoadingBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${loadingBarStyles}</style>
      <div class="load-box">
        <div class="load-fill"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-loading-bar')) {
  customElements.define('concept-loading-bar', ConceptLoadingBar);
}
