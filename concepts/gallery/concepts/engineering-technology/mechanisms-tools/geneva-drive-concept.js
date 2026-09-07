const genevaDriveStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gen {
    width: 116px;
    height: 98px;
    position: relative;
  }

  .gen-driver-rig {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 56px;
    height: 56px;
    animation: gen-drive-spin 3.2s linear infinite;
  }

  @keyframes gen-drive-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .gen-driver-disc {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 140, 30, 0.8), rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  .gen-pin {
    position: absolute;
    right: 4px;
    top: 24px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    z-index: 5;
  }

  .gen-driver-axle {
    position: absolute;
    left: 24px;
    top: 24px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  .gen-cross-rig {
    position: absolute;
    right: 10px;
    top: 20px;
    width: 56px;
    height: 56px;
    animation: gen-index 3.2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
  }

  @keyframes gen-index {
    0%, 70% { transform: rotate(0deg); }
    85%, 100% { transform: rotate(90deg); }
  }

  .gen-cross-body {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 160, 35, 0.9), rgba(0, 30, 6, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.35);
  }

  .gen-slot {
    position: absolute;
    background: rgba(0, 20, 4, 0.95);
    border: 1px solid rgba(140, 255, 170, 0.8);
  }

  .gen-slot.s-left { left: 4px; top: 22px; width: 18px; height: 6px; border-radius: 0 3px 3px 0; }
  .gen-slot.s-right { right: 4px; top: 22px; width: 18px; height: 6px; border-radius: 3px 0 0 3px; }
  .gen-slot.s-top { left: 22px; top: 4px; width: 6px; height: 18px; border-radius: 0 0 3px 3px; }
  .gen-slot.s-bot { left: 22px; bottom: 4px; width: 6px; height: 18px; border-radius: 3px 3px 0 0; }

  .gen-cross-axle {
    position: absolute;
    left: 23px;
    top: 23px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
    z-index: 4;
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

  /* v2: Precision horological Geneva drive mechanism with golden brass driver wheel,
     ruby drive pin, and steel 4-slot Maltese cross wheel with intermittent 90° indexing */
  .genc {
    width: 116px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Driver wheel assembly */
  .genc-driver-rig {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 56px;
    height: 56px;
    animation: genc-drive-spin 3.2s linear infinite;
  }

  @keyframes genc-drive-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Brass driver wheel disc */
  .genc-driver-disc {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #fef08a 0%, #facc15 50%, #ca8a04 100%);
    border: 1.5px solid #eab308;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Ruby red drive pin */
  .genc-pin {
    position: absolute;
    right: 4px;
    top: 24px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #ef4444 60%, #991b1b 100%);
    box-shadow: 0 0 6px #f43f5e;
    z-index: 5;
  }

  /* Driver axle */
  .genc-driver-axle {
    position: absolute;
    left: 24px;
    top: 24px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #475569;
    border: 1px solid #94a3b8;
  }

  /* 4-slot Maltese cross driven wheel */
  .genc-cross-rig {
    position: absolute;
    right: 10px;
    top: 20px;
    width: 56px;
    height: 56px;
    animation: genc-index 3.2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
  }

  @keyframes genc-index {
    0%, 70% { transform: rotate(0deg); }
    85%, 100% { transform: rotate(90deg); }
  }

  /* Steel cross wheel body */
  .genc-cross-body {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #cbd5e1 0%, #64748b 60%, #1e293b 100%);
    border: 1.5px solid #94a3b8;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.9);
  }

  /* Radial indexing slots */
  .genc-slot {
    position: absolute;
    background: #020617;
    border: 1px solid #38bdf8;
    box-shadow: inset 0 0 4px rgba(56, 189, 248, 0.4);
  }

  .genc-slot.s-left { left: 4px; top: 22px; width: 18px; height: 6px; border-radius: 0 3px 3px 0; }
  .genc-slot.s-right { right: 4px; top: 22px; width: 18px; height: 6px; border-radius: 3px 0 0 3px; }
  .genc-slot.s-top { left: 22px; top: 4px; width: 6px; height: 18px; border-radius: 0 0 3px 3px; }
  .genc-slot.s-bot { left: 22px; bottom: 4px; width: 6px; height: 18px; border-radius: 3px 3px 0 0; }

  /* Driven wheel center axle */
  .genc-cross-axle {
    position: absolute;
    left: 23px;
    top: 23px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #facc15;
    border: 1px solid #ca8a04;
    box-shadow: 0 0 4px #fde047;
    z-index: 4;
  }
  `,
};

const genevaDriveMarkup = {
  v1: `
      <div class="gen">
        <div class="gen-driver-rig">
          <div class="gen-driver-disc"></div>
          <div class="gen-driver-axle"></div>
          <div class="gen-pin"></div>
        </div>
        <div class="gen-cross-rig">
          <div class="gen-cross-body"></div>
          <div class="gen-slot s-left"></div>
          <div class="gen-slot s-right"></div>
          <div class="gen-slot s-top"></div>
          <div class="gen-slot s-bot"></div>
          <div class="gen-cross-axle"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="genc">
        <div class="genc-driver-rig">
          <div class="genc-driver-disc"></div>
          <div class="genc-driver-axle"></div>
          <div class="genc-pin"></div>
        </div>
        <div class="genc-cross-rig">
          <div class="genc-cross-body"></div>
          <div class="genc-slot s-left"></div>
          <div class="genc-slot s-right"></div>
          <div class="genc-slot s-top"></div>
          <div class="genc-slot s-bot"></div>
          <div class="genc-cross-axle"></div>
        </div>
      </div>
    `,
};

class ConceptGenevaDrive extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${genevaDriveStyles[version] || genevaDriveStyles.v2}</style>${genevaDriveMarkup[version] || genevaDriveMarkup.v2}`;
  }
}

if (!customElements.get('concept-geneva-drive')) {
  customElements.define('concept-geneva-drive', ConceptGenevaDrive);
}
