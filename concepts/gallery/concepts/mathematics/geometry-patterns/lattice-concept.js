const latticeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lattice-wrap {
    position: relative;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .diamond-outer {
    position: absolute;
    width: 64px;
    height: 64px;
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.6), inset 0 0 8px rgba(0, 255, 100, 0.3);
    animation: lattice-spin-a 8s linear infinite;
  }

  .diamond-mid {
    position: absolute;
    width: 44px;
    height: 44px;
    border: 2px solid #ffffff;
    box-shadow: 0 0 10px #00ff66;
    animation: lattice-spin-b 6s linear infinite;
  }

  .diamond-inner {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid var(--accent, #00cc00);
    background: rgba(0, 255, 100, 0.2);
    box-shadow: 0 0 14px #00ff66;
    animation: lattice-spin-a 4s linear infinite;
  }

  .diamond-core {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff, 0 0 16px #00ff66;
    animation: lattice-core-pulse 1.6s ease-in-out infinite alternate;
  }

  @keyframes lattice-spin-a {
    0% { transform: rotate(45deg) scale(0.9); }
    50% { transform: rotate(225deg) scale(1.15); }
    100% { transform: rotate(405deg) scale(0.9); }
  }

  @keyframes lattice-spin-b {
    0% { transform: rotate(45deg) scale(1.15); }
    50% { transform: rotate(-135deg) scale(0.85); }
    100% { transform: rotate(-315deg) scale(1.15); }
  }

  @keyframes lattice-core-pulse {
    0% { transform: rotate(0deg) scale(0.7); }
    100% { transform: rotate(180deg) scale(1.4); }
  }
`;

class ConceptLattice extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${latticeStyles}</style>
      <div class="lattice-wrap">
        <div class="diamond-outer"></div>
        <div class="diamond-mid"></div>
        <div class="diamond-inner"></div>
        <div class="diamond-core"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lattice')) {
  customElements.define('concept-lattice', ConceptLattice);
}
