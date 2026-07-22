const lightningStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .storm {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  .storm-flash {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 20%, rgba(190, 255, 190, 0.4), transparent 62%);
    opacity: 0;
    animation: storm-sheet 4.4s linear infinite;
  }

  .storm-cloud {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 78px;
    height: 24px;
    transform: translateX(-50%);
  }

  .storm-cloud span {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(180deg, #0a1c0a, #030903);
    border: 1px solid rgba(0, 204, 0, 0.3);
    box-shadow: inset 0 -4px 8px rgba(0, 204, 0, 0.1);
  }

  .storm-cloud .c1 { left: 0; bottom: 0; width: 30px; height: 20px; }
  .storm-cloud .c2 { left: 18px; top: -6px; width: 36px; height: 28px; }
  .storm-cloud .c3 { right: 0; bottom: 0; width: 32px; height: 20px; }

  .storm-bolt {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    opacity: 0;
    animation: storm-strike 4.4s linear infinite;
  }

  .storm-bolt path {
    fill: none;
    stroke: #dcffc9;
    stroke-width: 2.5;
    stroke-linejoin: miter;
    stroke-linecap: square;
    filter: drop-shadow(0 0 5px rgba(170, 255, 170, 0.85));
  }

  .storm-bolt path.branch {
    stroke-width: 1.5;
    opacity: 0.7;
  }

  @keyframes storm-strike {
    0%, 40% { opacity: 0; }
    41%, 43% { opacity: 1; }
    44% { opacity: 0.15; }
    46%, 49% { opacity: 1; }
    52%, 74% { opacity: 0; }
    75%, 77% { opacity: 0.75; }
    79%, 100% { opacity: 0; }
  }

  @keyframes storm-sheet {
    0%, 40% { opacity: 0; }
    42% { opacity: 0.9; }
    45% { opacity: 0.2; }
    48% { opacity: 1; }
    54%, 74% { opacity: 0; }
    76% { opacity: 0.55; }
    80%, 100% { opacity: 0; }
  }
`;

class ConceptLightning extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lightningStyles}</style>
      <div class="storm">
        <div class="storm-flash"></div>
        <svg class="storm-bolt" viewBox="0 0 104 104" aria-hidden="true">
          <path d="M56 32 L45 56 L53 54 L42 84 L49 82 L43 98"></path>
          <path class="branch" d="M45 56 L36 68"></path>
          <path class="branch" d="M49 82 L58 90"></path>
        </svg>
        <div class="storm-cloud">
          <span class="c1"></span>
          <span class="c2"></span>
          <span class="c3"></span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lightning')) {
  customElements.define('concept-lightning', ConceptLightning);
}
