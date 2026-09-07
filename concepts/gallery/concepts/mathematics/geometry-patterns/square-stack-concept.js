const squareStackStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .square-stack {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .square-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(0, 204, 0, 0.9);
    transform: translate(-50%, -50%);
    animation: square-pulse 3s ease-in-out infinite;
  }

  .square-ring:nth-child(1) { width: 90px; height: 90px; animation-delay: 0s; }
  .square-ring:nth-child(2) { width: 62px; height: 62px; animation-delay: 0.35s; }
  .square-ring:nth-child(3) { width: 34px; height: 34px; animation-delay: 0.7s; }

  @keyframes square-pulse {
    0%, 100% {
      opacity: 0.35;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.94);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(90deg) scale(1.04);
    }
  }
`;

class ConceptSquareStack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${squareStackStyles}</style>
      <div class="square-stack">
        <div class="square-ring"></div>
        <div class="square-ring"></div>
        <div class="square-ring"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-square-stack')) {
  customElements.define('concept-square-stack', ConceptSquareStack);
}
