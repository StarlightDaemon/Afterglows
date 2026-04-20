const portalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .portal {
    width: 80px;
    height: 80px;
    background: conic-gradient(from 0deg, #00cc00, #003300, #00cc00, #003300, #00cc00);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: portal-spin 3s linear infinite, portal-morph 6s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(0, 204, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.5);
    position: relative;
  }

  .portal::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, #000 0%, transparent 70%);
    border-radius: 50%;
  }

  @keyframes portal-spin { to { transform: rotate(360deg); } }

  @keyframes portal-morph {
    0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
    50% { border-radius: 60% 40% 30% 70% / 50% 40% 50% 60%; }
  }
`;

class ConceptPortal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${portalStyles}</style><div class="portal"></div>`;
  }
}

if (!customElements.get('concept-portal')) {
  customElements.define('concept-portal', ConceptPortal);
}
