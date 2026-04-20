const eclipseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .eclipse {
    width: 92px;
    height: 92px;
    position: relative;
  }

  .eclipse-corona {
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 160, 0.92) 0 32%, rgba(120, 255, 120, 0.45) 44%, rgba(0, 204, 0, 0.08) 64%, transparent 70%);
    filter: blur(1px);
  }

  .eclipse-shadow {
    position: absolute;
    top: 18px;
    left: 8px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #010101;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    animation: eclipse-pass 4.6s ease-in-out infinite;
  }

  @keyframes eclipse-pass {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(18px); }
  }
`;

class ConceptEclipse extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${eclipseStyles}</style>
      <div class="eclipse">
        <div class="eclipse-corona"></div>
        <div class="eclipse-shadow"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-eclipse')) {
  customElements.define('concept-eclipse', ConceptEclipse);
}
