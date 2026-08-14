const sewingMachineStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sm {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .sm-arm {
    position: absolute;
    left: 6px;
    top: 6px;
    right: 10px;
    height: 22px;
    border-radius: 6px 8px 4px 4px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.85));
    border: 2px solid var(--accent, #00cc00);
  }

  .sm-head {
    position: absolute;
    right: 10px;
    top: 6px;
    width: 20px;
    height: 42px;
    border-radius: 4px 4px 6px 6px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.8), rgba(0, 70, 14, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  .sm-bed {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 16px;
    height: 10px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 120, 24, 0.7), rgba(0, 60, 12, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .sm-wheel {
    position: absolute;
    right: -2px;
    top: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.8);
    background: radial-gradient(circle, rgba(0, 90, 18, 0.8) 0 40%, rgba(0, 50, 10, 0.6));
    animation: sm-spin 0.6s linear infinite;
  }

  .sm-wheel::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 2px;
    width: 2px;
    height: 6px;
    margin-left: -1px;
    background: rgba(214, 255, 224, 0.9);
  }

  @keyframes sm-spin {
    to { transform: rotate(360deg); }
  }

  .sm-lever {
    position: absolute;
    right: 24px;
    top: 12px;
    width: 10px;
    height: 3px;
    background: rgba(190, 255, 205, 0.9);
    transform-origin: 100% 50%;
    animation: sm-lever 0.6s ease-in-out infinite;
  }

  @keyframes sm-lever {
    0%, 100% { transform: rotate(-20deg); }
    50% { transform: rotate(20deg); }
  }

  .sm-needle {
    position: absolute;
    right: 18px;
    top: 40px;
    width: 2px;
    height: 16px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), #d6ffe0);
    animation: sm-needle 0.6s ease-in-out infinite;
  }

  @keyframes sm-needle {
    0%, 100% { transform: translateY(-6px); }
    50% { transform: translateY(2px); }
  }

  .sm-foot {
    position: absolute;
    right: 14px;
    bottom: 26px;
    width: 12px;
    height: 4px;
    border-radius: 0 0 2px 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .sm-fabric {
    position: absolute;
    right: 6px;
    bottom: 20px;
    width: 96px;
    height: 12px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.16) 0 8px, transparent 8px 16px),
      linear-gradient(180deg, rgba(0, 130, 26, 0.4), rgba(0, 70, 14, 0.5));
    border: 1px solid rgba(0, 204, 0, 0.4);
    animation: sm-feed 2s linear infinite;
  }

  @keyframes sm-feed {
    to { background-position: -16px 0, 0 0; }
  }

  .sm-stitch {
    position: absolute;
    right: 20px;
    bottom: 24px;
    width: 76px;
    height: 2px;
    background: repeating-linear-gradient(90deg,
      rgba(214, 255, 224, 0.9) 0 4px,
      transparent 4px 8px);
    animation: sm-stitch 1s linear infinite;
  }

  @keyframes sm-stitch {
    to { background-position: -8px 0; }
  }

  .sm-spool {
    position: absolute;
    left: 24px;
    top: -2px;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    background: repeating-linear-gradient(180deg,
      rgba(190, 255, 205, 0.8) 0 2px,
      rgba(0, 130, 26, 0.7) 2px 4px);
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .sm-thread {
    position: absolute;
    left: 30px;
    top: 8px;
    width: 60px;
    height: 1px;
    background: rgba(140, 255, 170, 0.5);
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

  /* v2: Vintage black & gold filigree cast iron sewing machine with crimson spool thread,
     chrome needle, and golden stitched denim */
  .smc {
    width: 116px;
    height: 88px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Black cast iron arm with gold accents */
  .smc-arm {
    position: absolute;
    left: 6px;
    top: 6px;
    right: 10px;
    height: 22px;
    border-radius: 6px 8px 4px 4px;
    background: linear-gradient(180deg, #1e293b 0%, #09090b 60%, #020617 100%);
    border: 2px solid #ca8a04;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8), inset 0 1px 2px #facc15;
  }

  .smc-head {
    position: absolute;
    right: 10px;
    top: 6px;
    width: 20px;
    height: 42px;
    border-radius: 4px 4px 6px 6px;
    background: linear-gradient(180deg, #1e293b 0%, #09090b 100%);
    border: 2px solid #ca8a04;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Base bed plate */
  .smc-bed {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 16px;
    height: 10px;
    border-radius: 3px;
    background: linear-gradient(180deg, #334155 0%, #09090b 100%);
    border: 1px solid #ca8a04;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  }

  /* Chrome balance wheel */
  .smc-wheel {
    position: absolute;
    right: -2px;
    top: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #cbd5e1;
    background: radial-gradient(circle, #facc15 0 35%, #64748b 40%, #0f172a 100%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
    animation: smc-spin 0.6s linear infinite;
  }

  .smc-wheel::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 2px;
    width: 2px;
    height: 6px;
    margin-left: -1px;
    background: #ffffff;
  }

  @keyframes smc-spin {
    to { transform: rotate(360deg); }
  }

  /* Chrome take-up lever */
  .smc-lever {
    position: absolute;
    right: 24px;
    top: 12px;
    width: 10px;
    height: 3px;
    background: #ffffff;
    box-shadow: 0 0 4px #38bdf8;
    transform-origin: 100% 50%;
    animation: smc-lever 0.6s ease-in-out infinite;
  }

  @keyframes smc-lever {
    0%, 100% { transform: rotate(-20deg); }
    50% { transform: rotate(20deg); }
  }

  /* Reciprocating chrome needle */
  .smc-needle {
    position: absolute;
    right: 18px;
    top: 40px;
    width: 2px;
    height: 16px;
    background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%);
    box-shadow: 0 0 4px #ffffff;
    animation: smc-needle 0.6s ease-in-out infinite;
  }

  @keyframes smc-needle {
    0%, 100% { transform: translateY(-6px); }
    50% { transform: translateY(2px); }
  }

  /* Chrome presser foot */
  .smc-foot {
    position: absolute;
    right: 14px;
    bottom: 26px;
    width: 12px;
    height: 4px;
    border-radius: 0 0 2px 2px;
    background: #cbd5e1;
    border: 0.5px solid #ffffff;
  }

  /* Denim indigo fabric */
  .smc-fabric {
    position: absolute;
    right: 6px;
    bottom: 20px;
    width: 96px;
    height: 12px;
    background:
      repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.3) 0 8px, transparent 8px 16px),
      linear-gradient(180deg, #1e3a8a 0%, #172554 100%);
    border: 1px solid #2563eb;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    animation: smc-feed 2s linear infinite;
  }

  @keyframes smc-feed {
    to { background-position: -16px 0, 0 0; }
  }

  /* Golden yellow stitch line */
  .smc-stitch {
    position: absolute;
    right: 20px;
    bottom: 24px;
    width: 76px;
    height: 2px;
    background: repeating-linear-gradient(90deg,
      #fde047 0 4px,
      transparent 4px 8px);
    box-shadow: 0 0 2px #eab308;
    animation: smc-stitch 1s linear infinite;
  }

  @keyframes smc-stitch {
    to { background-position: -8px 0; }
  }

  /* Crimson red spool of thread */
  .smc-spool {
    position: absolute;
    left: 24px;
    top: -2px;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    background: repeating-linear-gradient(180deg,
      #f43f5e 0 2px,
      #9f1239 2px 4px);
    border: 1px solid #fda4af;
    box-shadow: 0 0 4px #f43f5e;
  }

  /* Red thread path */
  .smc-thread {
    position: absolute;
    left: 30px;
    top: 8px;
    width: 60px;
    height: 1.5px;
    background: #f43f5e;
    box-shadow: 0 0 2px #ef4444;
  }
  `,
};

const sewingMachineMarkup = {
  v1: `
      <div class="sm">
        <div class="sm-spool"></div>
        <div class="sm-arm"></div>
        <div class="sm-thread"></div>
        <div class="sm-head"></div>
        <div class="sm-lever"></div>
        <div class="sm-wheel"></div>
        <div class="sm-needle"></div>
        <div class="sm-foot"></div>
        <div class="sm-fabric"></div>
        <div class="sm-stitch"></div>
        <div class="sm-bed"></div>
      </div>
    `,
  v2: `
      <div class="smc">
        <div class="smc-spool"></div>
        <div class="smc-arm"></div>
        <div class="smc-thread"></div>
        <div class="smc-head"></div>
        <div class="smc-lever"></div>
        <div class="smc-wheel"></div>
        <div class="smc-needle"></div>
        <div class="smc-foot"></div>
        <div class="smc-fabric"></div>
        <div class="smc-stitch"></div>
        <div class="smc-bed"></div>
      </div>
    `,
};

class ConceptSewingMachine extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${sewingMachineStyles[version] || sewingMachineStyles.v2}</style>${sewingMachineMarkup[version] || sewingMachineMarkup.v2}`;
  }
}

if (!customElements.get('concept-sewing-machine')) {
  customElements.define('concept-sewing-machine', ConceptSewingMachine);
}
