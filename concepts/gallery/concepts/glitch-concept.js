const glitchStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .glitch {
    font-weight: bold;
    font-size: 20px;
    position: relative;
    color: var(--accent, #00cc00);
  }

  .glitch::before,
  .glitch::after {
    content: 'SYSTEM';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  .glitch::before {
    color: #0ff;
    transform: translate(-2px, 0);
    animation: glitch-1 2s infinite;
  }

  .glitch::after {
    color: #f0f;
    transform: translate(2px, 0);
    animation: glitch-2 1.5s infinite;
  }

  @keyframes glitch-1 {
    0% { clip-path: inset(20% 0 80% 0) }
    100% { clip-path: inset(80% 0 10% 0) }
  }

  @keyframes glitch-2 {
    0% { clip-path: inset(10% 0 60% 0) }
    100% { clip-path: inset(60% 0 20% 0) }
  }
`;

class ConceptGlitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${glitchStyles}</style><div class="glitch">SYSTEM</div>`;
  }
}

if (!customElements.get('concept-glitch')) {
  customElements.define('concept-glitch', ConceptGlitch);
}
