const signalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sig-bars {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 40px;
  }

  .sb {
    width: 8px;
    background: #333;
  }

  .sb.active {
    background: var(--accent, #00cc00);
    animation: sig-blink 2s infinite;
  }

  .sb:nth-child(1) { height: 10px; }
  .sb:nth-child(2) { height: 20px; }
  .sb:nth-child(3) { height: 30px; }
  .sb:nth-child(4) { height: 40px; }

  @keyframes sig-blink { 50% { opacity: 0.3 } }
`;

class ConceptSignal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${signalStyles}</style>
      <div class="sig-bars">
        <div class="sb active"></div>
        <div class="sb active"></div>
        <div class="sb"></div>
        <div class="sb"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-signal')) {
  customElements.define('concept-signal', ConceptSignal);
}
