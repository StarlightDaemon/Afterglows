const lightningStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor lightning --- */
  .storm {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  .storm-flash {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 20%, rgba(190, 255, 190, 0.6), transparent 62%);
    opacity: 0.4;
    animation: storm-sheet 0.9s linear infinite alternate;
  }

  .storm-cloud {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 78px;
    height: 24px;
    margin-left: -39px;
    animation: storm-cloud-rumble 1.4s ease-in-out infinite alternate;
  }

  @keyframes storm-cloud-rumble {
    0% { transform: translate(-4px, 0) rotate(-2deg) scale(0.96); }
    100% { transform: translate(4px, -2px) rotate(2deg) scale(1.06); }
  }

  .storm-cloud span {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(180deg, #164e16, #030903);
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: inset 0 -4px 8px rgba(0, 204, 0, 0.4), 0 0 10px rgba(0, 255, 100, 0.3);
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
    transform-origin: 50% 30%;
    animation: storm-strike 0.9s ease-in-out infinite;
  }

  .storm-bolt path {
    fill: none;
    stroke: #ffffff;
    stroke-width: 2.8;
    stroke-linejoin: miter;
    stroke-linecap: square;
    filter: drop-shadow(0 0 6px #00ff66) drop-shadow(0 0 12px #00ff66);
  }

  .storm-bolt path.branch {
    stroke-width: 1.8;
    stroke: #bbf7d0;
  }

  @keyframes storm-strike {
    0% { opacity: 0.9; transform: translate(0, 0) scale(0.95); }
    25% { opacity: 1; transform: translate(-3px, 1px) scale(1.1); }
    50% { opacity: 0.4; transform: translate(3px, -1px) scale(0.9); }
    75% { opacity: 1; transform: translate(2px, 2px) scale(1.15); }
    100% { opacity: 0.9; transform: translate(0, 0) scale(0.95); }
  }

  @keyframes storm-sheet {
    0% { opacity: 0.2; }
    50% { opacity: 0.9; }
    100% { opacity: 0.3; }
  }

  /* --- v2: Atmospheric plasma electrodynamics --- */
  .stc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  .stc-flash {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.7), rgba(56, 189, 248, 0.5) 45%, transparent 75%);
    opacity: 0.4;
    animation: storm-sheet 0.9s linear infinite alternate;
  }

  .stc-cloud {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 78px;
    height: 24px;
    margin-left: -39px;
    animation: storm-cloud-rumble 1.4s ease-in-out infinite alternate;
  }

  .stc-cloud span {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(180deg, #475569, #1e293b 60%, #0f172a);
    border: 1.5px solid #64748b;
    box-shadow: inset 0 -4px 8px rgba(0, 0, 0, 0.8), 0 0 10px rgba(56, 189, 248, 0.4);
  }

  .stc-cloud .c1 { left: 0; bottom: 0; width: 30px; height: 20px; }
  .stc-cloud .c2 { left: 18px; top: -6px; width: 36px; height: 28px; }
  .stc-cloud .c3 { right: 0; bottom: 0; width: 32px; height: 20px; }

  .stc-bolt {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    transform-origin: 50% 30%;
    animation: storm-strike 0.9s ease-in-out infinite;
  }

  .stc-bolt path {
    fill: none;
    stroke: #ffffff;
    stroke-width: 2.8;
    stroke-linejoin: miter;
    stroke-linecap: square;
    filter: drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 10px #00f0ff) drop-shadow(0 0 20px #a855f7);
  }

  .stc-bolt path.branch {
    stroke-width: 1.8;
    stroke: #7dd3fc;
    filter: drop-shadow(0 0 6px #00f0ff);
  }
`;

const lightningMarkup = {
  v1: `
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
  `,
  v2: `
    <div class="stc">
      <div class="stc-flash"></div>
      <svg class="stc-bolt" viewBox="0 0 104 104" aria-hidden="true">
        <path d="M56 32 L45 56 L53 54 L42 84 L49 82 L43 98"></path>
        <path class="branch" d="M45 56 L36 68"></path>
        <path class="branch" d="M49 82 L58 90"></path>
      </svg>
      <div class="stc-cloud">
        <span class="c1"></span>
        <span class="c2"></span>
        <span class="c3"></span>
      </div>
    </div>
  `,
};

class ConceptLightning extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${lightningStyles}</style>${lightningMarkup[version] || lightningMarkup.v2}`;
  }
}

if (!customElements.get('concept-lightning')) {
  customElements.define('concept-lightning', ConceptLightning);
}
