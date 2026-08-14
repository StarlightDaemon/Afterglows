const abductionStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .abduction {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: linear-gradient(180deg, #000 0%, #010401 75%, #031403 100%);
  }

  .abduction-ship {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 52px;
    height: 14px;
    margin-left: -26px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(140, 230, 150, 0.8), rgba(10, 50, 14, 0.98));
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.35);
    animation: abd-ship 4.8s ease-in-out infinite;
  }

  .abduction-ship::before {
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    width: 20px;
    height: 10px;
    margin-left: -10px;
    border-radius: 10px 10px 0 0;
    background: rgba(200, 255, 210, 0.4);
  }

  .abduction-beam {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 74px;
    height: 84px;
    margin-left: -37px;
    clip-path: polygon(41% 0, 59% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(120, 255, 150, 0.55) 0%, rgba(60, 220, 90, 0.22) 55%, rgba(0, 204, 0, 0.08) 100%);
    animation: abd-beam 1.1s ease-in-out infinite alternate;
  }

  .abduction-target {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 14px;
    height: 18px;
    margin-left: -7px;
    animation: abd-rise 5.2s ease-in-out infinite;
  }

  .abduction-target-head {
    position: absolute;
    top: 0;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: rgba(220, 255, 225, 0.9);
  }

  .abduction-target-body {
    position: absolute;
    top: 9px;
    left: 50%;
    width: 10px;
    height: 9px;
    margin-left: -5px;
    border-radius: 3px 3px 5px 5px;
    background: rgba(160, 255, 175, 0.75);
  }

  .abduction-mote {
    position: absolute;
    bottom: 4px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 200, 0.85);
    opacity: 0;
    animation: abd-mote 2.4s linear infinite;
  }

  .abduction-mote.m1 { left: 38px; animation-delay: 0s; }
  .abduction-mote.m2 { left: 52px; animation-delay: -0.8s; }
  .abduction-mote.m3 { left: 63px; animation-delay: -1.6s; }

  .abduction-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 6px;
    background: linear-gradient(0deg, rgba(0, 204, 0, 0.28), transparent);
  }

  @keyframes abd-ship {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(3px); }
  }

  @keyframes abd-beam {
    from { opacity: 0.55; }
    to { opacity: 1; }
  }

  @keyframes abd-rise {
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    80% { transform: translateY(-64px) rotate(180deg); opacity: 1; }
    92% { transform: translateY(-74px) rotate(200deg) scale(0.5); opacity: 0; }
    100% { transform: translateY(0) rotate(0deg); opacity: 0; }
  }

  @keyframes abd-mote {
    0% { opacity: 0; transform: translateY(0); }
    15% { opacity: 0.9; }
    100% { opacity: 0; transform: translateY(-52px); }
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

  /* v2: Sci-fi abduction scene with silver UFO, glowing neon cyan/green
     conical tractor beam, levitating silhouette, and atmospheric night landscape */
  .abductionc {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Silver saucer ship */
  .abductionc-ship {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 52px;
    height: 14px;
    margin-left: -26px;
    border-radius: 50%;
    background: linear-gradient(180deg, #f8fafc 0%, #94a3b8 50%, #334155 100%);
    border: 1px solid #cbd5e1;
    box-shadow: 0 0 14px #00f0ff;
    animation: abdc-ship 4.8s ease-in-out infinite;
    z-index: 4;
  }

  .abductionc-ship::before {
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    width: 20px;
    height: 10px;
    margin-left: -10px;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(180deg, #38bdf8, #0284c7);
    box-shadow: 0 0 6px #00f0ff;
  }

  /* Volumetric neon cyan/chartreuse tractor beam */
  .abductionc-beam {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 74px;
    height: 84px;
    margin-left: -37px;
    clip-path: polygon(41% 0, 59% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(56, 189, 248, 0.8) 0%, rgba(74, 222, 128, 0.45) 55%, rgba(34, 197, 94, 0.15) 100%);
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.6);
    animation: abdc-beam 1.1s ease-in-out infinite alternate;
  }

  /* Levitating target in tractor beam */
  .abductionc-target {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 14px;
    height: 18px;
    margin-left: -7px;
    animation: abdc-rise 5.2s ease-in-out infinite;
    z-index: 3;
  }

  .abductionc-target-head {
    position: absolute;
    top: 0;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: #fef08a;
    box-shadow: 0 0 6px #fde047;
  }

  .abductionc-target-body {
    position: absolute;
    top: 9px;
    left: 50%;
    width: 10px;
    height: 9px;
    margin-left: -5px;
    border-radius: 3px 3px 5px 5px;
    background: #ea580c;
  }

  /* Floating ion energy motes */
  .abductionc-mote {
    position: absolute;
    bottom: 4px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 4px #00f0ff;
    opacity: 0;
    animation: abdc-mote 2.4s linear infinite;
  }

  .abductionc-mote.m1 { left: 38px; animation-delay: 0s; }
  .abductionc-mote.m2 { left: 52px; background: #fde047; box-shadow: 0 0 4px #facc15; animation-delay: -0.8s; }
  .abductionc-mote.m3 { left: 63px; animation-delay: -1.6s; }

  /* Night hill ground landscape */
  .abductionc-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    background: linear-gradient(0deg, #15803d 0%, rgba(22, 101, 52, 0.4) 70%, transparent 100%);
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.4);
  }

  @keyframes abdc-ship {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(3px); }
  }

  @keyframes abdc-beam {
    from { opacity: 0.7; }
    to { opacity: 1; }
  }

  @keyframes abdc-rise {
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    80% { transform: translateY(-64px) rotate(180deg); opacity: 1; }
    92% { transform: translateY(-74px) rotate(200deg) scale(0.5); opacity: 0; }
    100% { transform: translateY(0) rotate(0deg); opacity: 0; }
  }

  @keyframes abdc-mote {
    0% { opacity: 0; transform: translateY(0); }
    15% { opacity: 0.95; }
    100% { opacity: 0; transform: translateY(-52px); }
  }
  `,
};

const abductionMarkup = {
  v1: `
      <div class="abduction">
        <div class="abduction-beam"></div>
        <div class="abduction-mote m1"></div>
        <div class="abduction-mote m2"></div>
        <div class="abduction-mote m3"></div>
        <div class="abduction-target">
          <div class="abduction-target-head"></div>
          <div class="abduction-target-body"></div>
        </div>
        <div class="abduction-ship"></div>
        <div class="abduction-ground"></div>
      </div>
    `,
  v2: `
      <div class="abductionc">
        <div class="abductionc-beam"></div>
        <div class="abductionc-mote m1"></div>
        <div class="abductionc-mote m2"></div>
        <div class="abductionc-mote m3"></div>
        <div class="abductionc-target">
          <div class="abductionc-target-head"></div>
          <div class="abductionc-target-body"></div>
        </div>
        <div class="abductionc-ship"></div>
        <div class="abductionc-ground"></div>
      </div>
    `,
};

class ConceptAbduction extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${abductionStyles[version] || abductionStyles.v2}</style>${abductionMarkup[version] || abductionMarkup.v2}`;
  }
}

if (!customElements.get('concept-abduction')) {
  customElements.define('concept-abduction', ConceptAbduction);
}
