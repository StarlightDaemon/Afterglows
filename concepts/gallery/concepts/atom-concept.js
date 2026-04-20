const atomStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .atom-core {
    width: 10px;
    height: 10px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
  }

  .orbit {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 1px solid rgba(0, 204, 0, 0.4);
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  .orbit::after {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
    position: absolute;
    top: -3px;
    left: 40%;
  }

  .o2 { transform: rotate(60deg); animation-delay: -0.5s; }
  .o3 { transform: rotate(-60deg); animation-delay: -1s; }

  @keyframes spin { to { transform: rotate(360deg); } }
`;

class ConceptAtom extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${atomStyles}</style>
      <div class="atom-core"></div>
      <div class="orbit"></div>
      <div class="orbit o2"></div>
      <div class="orbit o3"></div>
    `;
  }
}

if (!customElements.get('concept-atom')) {
  customElements.define('concept-atom', ConceptAtom);
}
