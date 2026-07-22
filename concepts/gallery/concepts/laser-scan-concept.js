const laserScanStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original bare red sweep line --- */
  .scan-line {
    width: 100%;
    height: 2px;
    background: #f00;
    box-shadow: 0 0 10px #f00;
    animation: laser 1s ease-in-out infinite alternate;
  }

  @keyframes laser {
    0% { transform: translateY(-60px) }
    100% { transform: translateY(60px) }
  }

  /* --- v2: a laser sheet scanning a physical artifact --- */
  .lscan {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: #000;
    border: 1px solid rgba(0, 204, 0, 0.25);
    box-sizing: border-box;
  }

  .lscan-corner {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .lscan-corner.tl { top: 4px; left: 4px; border-right: none; border-bottom: none; }
  .lscan-corner.tr { top: 4px; right: 4px; border-left: none; border-bottom: none; }
  .lscan-corner.bl { bottom: 4px; left: 4px; border-right: none; border-top: none; }
  .lscan-corner.br { bottom: 4px; right: 4px; border-left: none; border-top: none; }

  /* The artifact under scan: a faceted crystal silhouette. */
  .lscan-artifact {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 38px;
    height: 50px;
    margin: -25px 0 0 -19px;
    clip-path: polygon(50% 0, 100% 32%, 82% 100%, 18% 100%, 0 32%);
    background: linear-gradient(160deg, rgba(40, 110, 55, 0.5), rgba(12, 40, 20, 0.7));
    border: none;
  }

  .lscan-artifact::before {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: inherit;
    background:
      linear-gradient(200deg, transparent 46%, rgba(140, 255, 170, 0.28) 48% 52%, transparent 54%),
      linear-gradient(120deg, transparent 58%, rgba(140, 255, 170, 0.2) 60% 63%, transparent 65%);
  }

  /* Wireframe overlay revealed only where the sheet passes. */
  .lscan-wire {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 38px;
    height: 50px;
    margin: -25px 0 0 -19px;
    clip-path: polygon(50% 0, 100% 32%, 82% 100%, 18% 100%, 0 32%);
    background: repeating-linear-gradient(0deg, rgba(160, 255, 185, 0.75) 0 1px, transparent 1px 5px);
    mask-image: linear-gradient(180deg, transparent 0 30%, #000 46% 54%, transparent 70% 100%);
    -webkit-mask-image: linear-gradient(180deg, transparent 0 30%, #000 46% 54%, transparent 70% 100%);
    mask-size: 100% 300%;
    -webkit-mask-size: 100% 300%;
    animation: lscan-reveal 2.8s ease-in-out infinite alternate;
  }

  /* The sheet itself: bright core, soft falloff. */
  .lscan-sheet {
    position: absolute;
    left: 6px;
    right: 6px;
    top: 0;
    height: 14px;
    margin-top: -7px;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 204, 0, 0.14) 34%, rgba(180, 255, 200, 0.85) 50%, rgba(0, 204, 0, 0.14) 66%, transparent 100%);
    animation: lscan-sweep 2.8s ease-in-out infinite alternate;
  }

  .lscan-readout {
    position: absolute;
    right: 7px;
    top: 16px;
    bottom: 16px;
    width: 3px;
    background: repeating-linear-gradient(180deg, rgba(0, 204, 0, 0.5) 0 2px, transparent 2px 7px);
  }

  .lscan-cursor {
    position: absolute;
    right: 5px;
    top: 0;
    width: 7px;
    height: 3px;
    margin-top: -1.5px;
    background: rgba(200, 255, 212, 0.95);
    box-shadow: 0 0 5px rgba(180, 255, 195, 0.9);
    animation: lscan-sweep 2.8s ease-in-out infinite alternate;
  }

  @keyframes lscan-sweep {
    0% { top: 16px; }
    100% { top: 88px; }
  }

  @keyframes lscan-reveal {
    0% { mask-position: 0 100%; -webkit-mask-position: 0 100%; }
    100% { mask-position: 0 -100%; -webkit-mask-position: 0 -100%; }
  }
`;

const laserScanMarkup = {
  v1: `<div class="scan-line"></div>`,
  v2: `
    <div class="lscan">
      <div class="lscan-corner tl"></div>
      <div class="lscan-corner tr"></div>
      <div class="lscan-corner bl"></div>
      <div class="lscan-corner br"></div>
      <div class="lscan-artifact"></div>
      <div class="lscan-wire"></div>
      <div class="lscan-sheet"></div>
      <div class="lscan-readout"></div>
      <div class="lscan-cursor"></div>
    </div>
  `,
};

class ConceptLaserScan extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${laserScanStyles}</style>${laserScanMarkup[version] || laserScanMarkup.v2}`;
  }
}

if (!customElements.get('concept-laser-scan')) {
  customElements.define('concept-laser-scan', ConceptLaserScan);
}
