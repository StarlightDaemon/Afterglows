const weaveGridStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .weave-grid {
    width: 96px;
    height: 96px;
    position: relative;
    background:
      repeating-linear-gradient(0deg, transparent 0 11px, rgba(0, 204, 0, 0.35) 11px 12px),
      repeating-linear-gradient(90deg, transparent 0 11px, rgba(0, 204, 0, 0.35) 11px 12px);
    animation: weave-shift 4s linear infinite;
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.12);
  }

  .weave-grid::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(45deg, transparent 0 15px, rgba(160, 255, 160, 0.14) 15px 16px),
      repeating-linear-gradient(-45deg, transparent 0 15px, rgba(160, 255, 160, 0.14) 15px 16px);
    animation: weave-tilt 5.5s linear infinite;
  }

  @keyframes weave-shift {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 12px 0, 0 12px; }
  }

  @keyframes weave-tilt {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(6deg) scale(1.02); }
    100% { transform: rotate(0deg) scale(1); }
  }
`;

class ConceptWeaveGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${weaveGridStyles}</style><div class="weave-grid"></div>`;
  }
}

if (!customElements.get('concept-weave-grid')) {
  customElements.define('concept-weave-grid', ConceptWeaveGrid);
}
