const ekgStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ekg-wrap {
    width: 120px;
    height: 60px;
    position: relative;
    overflow: hidden;
  }

  .ekg-line {
    width: 100%;
    height: 2px;
    background: #333;
    position: absolute;
    top: 50%;
  }

  .ekg-pulse {
    position: absolute;
    top: 50%;
    left: -30px;
    width: 30px;
    height: 40px;
    transform: translateY(-50%);
    animation: ekg-move 1.5s linear infinite;
  }

  .ekg-pulse::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, transparent 20%,
                    var(--accent, #00cc00) 20%, var(--accent, #00cc00) 22%,
                    transparent 22%, transparent 35%,
                    var(--accent, #00cc00) 35%, var(--accent, #00cc00) 37%,
                    transparent 37%, transparent 45%,
                    var(--accent, #00cc00) 45%, var(--accent, #00cc00) 50%,
                    transparent 50%, transparent 100%);
    clip-path: polygon(0% 50%, 20% 50%, 25% 30%, 30% 70%, 35% 50%,
                    45% 50%, 50% 10%, 55% 90%, 60% 50%,
                    100% 50%, 100% 52%, 0% 52%);
    filter: drop-shadow(0 0 3px var(--accent, #00cc00));
  }

  @keyframes ekg-move {
    0% { left: -30px; }
    100% { left: 130px; }
  }
`;

class ConceptEKG extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ekgStyles}</style>
      <div class="ekg-wrap">
        <div class="ekg-line"></div>
        <div class="ekg-pulse"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ekg')) {
  customElements.define('concept-ekg', ConceptEKG);
}
