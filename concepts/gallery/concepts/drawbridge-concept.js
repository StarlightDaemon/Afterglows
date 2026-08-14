const drawbridgeStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .drw {
    width: 116px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .drw-water {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 22px;
    background: radial-gradient(ellipse at 50% 100%, rgba(0, 80, 18, 0.9), rgba(0, 20, 4, 0.98));
    border-top: 1.5px solid var(--accent, #00cc00);
  }

  .drw-pier-l {
    position: absolute;
    left: 4px;
    bottom: 12px;
    width: 24px;
    height: 38px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, rgba(0, 120, 25, 0.9), rgba(0, 40, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    z-index: 3;
  }

  .drw-pier-r {
    position: absolute;
    right: 4px;
    bottom: 12px;
    width: 24px;
    height: 38px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, rgba(0, 120, 25, 0.9), rgba(0, 40, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    z-index: 3;
  }

  .drw-beacon {
    position: absolute;
    top: -6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    animation: drw-beacon-blink 0.8s ease-in-out infinite alternate;
  }

  .drw-beacon.bl { left: 9px; }
  .drw-beacon.br { right: 9px; }

  @keyframes drw-beacon-blink {
    0% { opacity: 0.3; }
    100% { opacity: 1; filter: drop-shadow(0 0 4px rgba(190, 255, 205, 1)); }
  }

  .drw-leaf-l {
    position: absolute;
    left: 24px;
    bottom: 42px;
    width: 36px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 160, 35, 0.95), rgba(140, 255, 170, 0.85));
    border: 1px solid var(--accent, #00cc00);
    transform-origin: left center;
    z-index: 4;
    animation: drw-lift-l 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes drw-lift-l {
    0%, 25% { transform: rotate(0deg); }
    45%, 75% { transform: rotate(-65deg); }
    95%, 100% { transform: rotate(0deg); }
  }

  .drw-leaf-r {
    position: absolute;
    right: 24px;
    bottom: 42px;
    width: 36px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(270deg, rgba(0, 160, 35, 0.95), rgba(140, 255, 170, 0.85));
    border: 1px solid var(--accent, #00cc00);
    transform-origin: right center;
    z-index: 4;
    animation: drw-lift-r 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes drw-lift-r {
    0%, 25% { transform: rotate(0deg); }
    45%, 75% { transform: rotate(65deg); }
    95%, 100% { transform: rotate(0deg); }
  }

  .drw-ship {
    position: absolute;
    bottom: 8px;
    width: 32px;
    height: 28px;
    z-index: 2;
    animation: drw-ship-transit 5.5s linear infinite;
  }

  @keyframes drw-ship-transit {
    0%, 25% { left: -36px; opacity: 0; }
    35% { opacity: 1; }
    55% { left: 42px; opacity: 1; }
    75% { opacity: 1; }
    85%, 100% { left: 120px; opacity: 0; }
  }

  .drw-hull {
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 32px;
    height: 10px;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    background: rgba(140, 255, 170, 0.95);
    border: 1px solid var(--accent, #00cc00);
  }

  .drw-mast {
    position: absolute;
    left: 15px;
    bottom: 12px;
    width: 2px;
    height: 22px;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
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

  /* v2: Urban canal double-leaf bascule drawbridge with stone piers,
     flashing red beacons, safety orange bridge spans, azure canal water, and cargo steamship */
  .drwc {
    width: 116px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Azure shipping canal water */
  .drwc-water {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 22px;
    background: radial-gradient(ellipse at 50% 100%, #0284c7 0%, #0369a1 50%, #0f172a 100%);
    border-top: 1.5px solid #38bdf8;
    box-shadow: inset 0 2px 4px #38bdf8;
  }

  /* Left stone masonry abutment pier */
  .drwc-pier-l {
    position: absolute;
    left: 4px;
    bottom: 12px;
    width: 24px;
    height: 38px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, #64748b 0%, #334155 60%, #1e293b 100%);
    border: 1.5px solid #94a3b8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  /* Right stone masonry abutment pier */
  .drwc-pier-r {
    position: absolute;
    right: 4px;
    bottom: 12px;
    width: 24px;
    height: 38px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, #64748b 0%, #334155 60%, #1e293b 100%);
    border: 1.5px solid #94a3b8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  /* Warning navigation signal beacons */
  .drwc-beacon {
    position: absolute;
    top: -6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 8px #dc2626;
    animation: drwc-beacon-blink 0.8s ease-in-out infinite alternate;
  }

  .drwc-beacon.bl { left: 9px; }
  .drwc-beacon.br { right: 9px; }

  @keyframes drwc-beacon-blink {
    0% { opacity: 0.3; }
    100% { opacity: 1; filter: drop-shadow(0 0 6px #ef4444); }
  }

  /* Left safety orange steel bridge span */
  .drwc-leaf-l {
    position: absolute;
    left: 24px;
    bottom: 42px;
    width: 36px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ea580c, #f97316);
    border: 1px solid #facc15;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    transform-origin: left center;
    z-index: 4;
    animation: drwc-lift-l 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes drwc-lift-l {
    0%, 25% { transform: rotate(0deg); }
    45%, 75% { transform: rotate(-65deg); }
    95%, 100% { transform: rotate(0deg); }
  }

  /* Right safety orange steel bridge span */
  .drwc-leaf-r {
    position: absolute;
    right: 24px;
    bottom: 42px;
    width: 36px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(270deg, #ea580c, #f97316);
    border: 1px solid #facc15;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    transform-origin: right center;
    z-index: 4;
    animation: drwc-lift-r 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes drwc-lift-r {
    0%, 25% { transform: rotate(0deg); }
    45%, 75% { transform: rotate(65deg); }
    95%, 100% { transform: rotate(0deg); }
  }

  /* Transiting cargo steamship */
  .drwc-ship {
    position: absolute;
    bottom: 8px;
    width: 32px;
    height: 28px;
    z-index: 2;
    animation: drwc-ship-transit 5.5s linear infinite;
  }

  @keyframes drwc-ship-transit {
    0%, 25% { left: -36px; opacity: 0; }
    35% { opacity: 1; }
    55% { left: 42px; opacity: 1; }
    75% { opacity: 1; }
    85%, 100% { left: 120px; opacity: 0; }
  }

  .drwc-hull {
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 32px;
    height: 10px;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    background: linear-gradient(180deg, #ffffff 0%, #dc2626 50%, #1e293b 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  }

  .drwc-mast {
    position: absolute;
    left: 15px;
    bottom: 12px;
    width: 2px;
    height: 22px;
    background: #facc15;
    box-shadow: 0 0 4px #eab308;
  }
  `,
};

const drawbridgeMarkup = {
  v1: `
      <div class="drw">
        <div class="drw-water"></div>
        <div class="drw-ship">
          <div class="drw-mast"></div>
          <div class="drw-hull"></div>
        </div>
        <div class="drw-pier-l">
          <div class="drw-beacon bl"></div>
        </div>
        <div class="drw-pier-r">
          <div class="drw-beacon br"></div>
        </div>
        <div class="drw-leaf-l"></div>
        <div class="drw-leaf-r"></div>
      </div>
    `,
  v2: `
      <div class="drwc">
        <div class="drwc-water"></div>
        <div class="drwc-ship">
          <div class="drwc-mast"></div>
          <div class="drwc-hull"></div>
        </div>
        <div class="drwc-pier-l">
          <div class="drwc-beacon bl"></div>
        </div>
        <div class="drwc-pier-r">
          <div class="drwc-beacon br"></div>
        </div>
        <div class="drwc-leaf-l"></div>
        <div class="drwc-leaf-r"></div>
      </div>
    `,
};

class ConceptDrawbridge extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${drawbridgeStyles[version] || drawbridgeStyles.v2}</style>${drawbridgeMarkup[version] || drawbridgeMarkup.v2}`;
  }
}

if (!customElements.get('concept-drawbridge')) {
  customElements.define('concept-drawbridge', ConceptDrawbridge);
}
