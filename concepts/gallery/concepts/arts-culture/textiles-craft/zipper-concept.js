const zipperStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .zp {
    width: 72px;
    height: 100px;
    position: relative;
  }

  .zp-tape {
    position: absolute;
    top: 6px;
    bottom: 6px;
    width: 20px;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.4), rgba(0, 70, 14, 0.5));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  .zp-tape.left { left: 8px; border-radius: 4px 0 0 4px; }
  .zp-tape.right { right: 8px; border-radius: 0 4px 4px 0; }

  .zp-open-l,
  .zp-open-r {
    position: absolute;
    top: 8px;
    width: 8px;
    bottom: 8px;
    background: repeating-linear-gradient(180deg,
      rgba(190, 255, 205, 0.85) 0 3px,
      transparent 3px 7px);
  }

  .zp-open-l { left: 20px; }
  .zp-open-r { right: 20px; }

  .zp-closed {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 10px;
    bottom: 8px;
    margin-left: -5px;
    background:
      repeating-linear-gradient(180deg,
        rgba(214, 255, 224, 0.95) 0 2px,
        rgba(0, 120, 24, 0.85) 2px 4px);
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.4);
    animation: zp-closed 5s ease-in-out infinite;
  }

  @keyframes zp-closed {
    0% { clip-path: inset(88% 0 0 0); }
    40% { clip-path: inset(0 0 0 0); }
    55% { clip-path: inset(0 0 0 0); }
    95%, 100% { clip-path: inset(88% 0 0 0); }
  }

  .zp-open-l, .zp-open-r {
    animation: zp-open 5s ease-in-out infinite;
  }

  @keyframes zp-open {
    0% { clip-path: inset(0 0 12% 0); }
    40% { clip-path: inset(0 0 100% 0); }
    55% { clip-path: inset(0 0 100% 0); }
    95%, 100% { clip-path: inset(0 0 12% 0); }
  }

  .zp-slider {
    position: absolute;
    left: 50%;
    width: 20px;
    height: 16px;
    margin-left: -10px;
    border-radius: 3px 3px 5px 5px;
    background: linear-gradient(180deg, rgba(214, 255, 224, 0.95), rgba(0, 130, 26, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.5);
    animation: zp-slide 5s ease-in-out infinite;
    z-index: 3;
  }

  @keyframes zp-slide {
    0% { top: 76px; }
    40% { top: 6px; }
    55% { top: 6px; }
    95%, 100% { top: 76px; }
  }

  .zp-pull {
    position: absolute;
    left: 50%;
    width: 4px;
    height: 12px;
    margin-left: -2px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
    animation: zp-pull 5s ease-in-out infinite;
    z-index: 3;
  }

  @keyframes zp-pull {
    0% { top: 90px; }
    40% { top: 20px; }
    55% { top: 20px; }
    95%, 100% { top: 90px; }
    20% { top: 42px; transform: rotate(6deg); }
    70% { top: 42px; transform: rotate(-6deg); }
  }

  .zp-pull::after {
    content: '';
    position: absolute;
    left: -2px;
    bottom: -3px;
    width: 8px;
    height: 5px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.8);
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Indigo denim fabric with brass zipper teeth and polished chrome slider */
  .zpc {
    width: 72px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Indigo denim fabric tapes */
  .zpc-tape {
    position: absolute;
    top: 6px;
    bottom: 6px;
    width: 20px;
    background: linear-gradient(180deg, #1e3a8a 0%, #172554 100%);
    border: 1px dashed #d97706;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
  }

  .zpc-tape.left { left: 8px; border-radius: 4px 0 0 4px; }
  .zpc-tape.right { right: 8px; border-radius: 0 4px 4px 0; }

  /* Open brass teeth */
  .zpc-open-l,
  .zpc-open-r {
    position: absolute;
    top: 8px;
    width: 8px;
    bottom: 8px;
    background: repeating-linear-gradient(180deg,
      #facc15 0 3px,
      transparent 3px 7px);
  }

  .zpc-open-l { left: 20px; }
  .zpc-open-r { right: 20px; }

  /* Meshed closed brass zipper track */
  .zpc-closed {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 10px;
    bottom: 8px;
    margin-left: -5px;
    background:
      repeating-linear-gradient(180deg,
        #fef08a 0 2px,
        #ca8a04 2px 4px);
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(250, 204, 21, 0.6);
    animation: zpc-closed 5s ease-in-out infinite;
  }

  @keyframes zpc-closed {
    0% { clip-path: inset(88% 0 0 0); }
    40% { clip-path: inset(0 0 0 0); }
    55% { clip-path: inset(0 0 0 0); }
    95%, 100% { clip-path: inset(88% 0 0 0); }
  }

  .zpc-open-l, .zpc-open-r {
    animation: zpc-open 5s ease-in-out infinite;
  }

  @keyframes zpc-open {
    0% { clip-path: inset(0 0 12% 0); }
    40% { clip-path: inset(0 0 100% 0); }
    55% { clip-path: inset(0 0 100% 0); }
    95%, 100% { clip-path: inset(0 0 12% 0); }
  }

  /* Polished steel-chrome zipper slider */
  .zpc-slider {
    position: absolute;
    left: 50%;
    width: 20px;
    height: 16px;
    margin-left: -10px;
    border-radius: 3px 3px 5px 5px;
    background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
    border: 1px solid #94a3b8;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.8);
    animation: zpc-slide 5s ease-in-out infinite;
    z-index: 3;
  }

  @keyframes zpc-slide {
    0% { top: 76px; }
    40% { top: 6px; }
    55% { top: 6px; }
    95%, 100% { top: 76px; }
  }

  /* Steel pull tab */
  .zpc-pull {
    position: absolute;
    left: 50%;
    width: 4px;
    height: 12px;
    margin-left: -2px;
    border-radius: 2px;
    background: #cbd5e1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    animation: zpc-pull 5s ease-in-out infinite;
    z-index: 3;
  }

  @keyframes zpc-pull {
    0% { top: 90px; }
    40% { top: 20px; }
    55% { top: 20px; }
    95%, 100% { top: 90px; }
    20% { top: 42px; transform: rotate(6deg); }
    70% { top: 42px; transform: rotate(-6deg); }
  }

  .zpc-pull::after {
    content: '';
    position: absolute;
    left: -2px;
    bottom: -3px;
    width: 8px;
    height: 5px;
    border-radius: 2px;
    background: #94a3b8;
  }
  `,
};

const zipperMarkup = {
  v1: `
      <div class="zp">
        <div class="zp-tape left"></div>
        <div class="zp-tape right"></div>
        <div class="zp-open-l"></div>
        <div class="zp-open-r"></div>
        <div class="zp-closed"></div>
        <div class="zp-slider"></div>
        <div class="zp-pull"></div>
      </div>
    `,
  v2: `
      <div class="zpc">
        <div class="zpc-tape left"></div>
        <div class="zpc-tape right"></div>
        <div class="zpc-open-l"></div>
        <div class="zpc-open-r"></div>
        <div class="zpc-closed"></div>
        <div class="zpc-slider"></div>
        <div class="zpc-pull"></div>
      </div>
    `,
};

class ConceptZipper extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${zipperStyles[version] || zipperStyles.v2}</style>${zipperMarkup[version] || zipperMarkup.v2}`;
  }
}

if (!customElements.get('concept-zipper')) {
  customElements.define('concept-zipper', ConceptZipper);
}
