const stratumFaultStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .flt {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1208 0%, #030502 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 3D isometric block crust frame */
  .flt-block {
    position: relative;
    width: 86px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Left tectonic crust block */
  .flt-block-left {
    width: 41px;
    height: 60px;
    background: #061f0d;
    border: 1.2px solid #00cc00;
    border-radius: 2px 0 0 2px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: flt-shear-left 2.4s ease-in-out infinite;
  }

  /* Right tectonic crust block */
  .flt-block-right {
    width: 41px;
    height: 60px;
    background: #061f0d;
    border: 1.2px solid #00cc00;
    border-radius: 0 2px 2px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: flt-shear-right 2.4s ease-in-out infinite;
  }

  @keyframes flt-shear-left {
    0%, 30% { transform: translateY(0); }
    45% { transform: translateY(-12px); } /* Sudden stick-slip rupture */
    80%, 100% { transform: translateY(0); }
  }

  @keyframes flt-shear-right {
    0%, 30% { transform: translateY(0); }
    45% { transform: translateY(12px); } /* Sudden stick-slip rupture */
    80%, 100% { transform: translateY(0); }
  }

  /* Geological strata layer stripes */
  .flt-strata {
    width: 100%;
    height: 12px;
    border-bottom: 1px solid rgba(0, 204, 0, 0.4);
  }

  .s-sand { background: rgba(0, 180, 50, 0.2); }
  .s-shale { background: rgba(140, 255, 170, 0.15); }
  .s-lime { background: rgba(255, 255, 255, 0.12); }
  .s-granite { background: rgba(0, 80, 20, 0.35); }
  .s-basalt { background: rgba(0, 40, 10, 0.5); }

  /* Fault line fracture zone in center */
  .flt-line {
    position: absolute;
    left: 42px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    z-index: 4;
  }

  /* Hypocenter epicenter seismic ripple waves */
  .flt-seismic-ripple {
    position: absolute;
    left: 43px;
    top: 50%;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 8px #aaffaa;
    pointer-events: none;
    animation: flt-seismic 2.4s ease-out infinite;
  }

  @keyframes flt-seismic {
    0%, 42% { opacity: 0; transform: scale(0.2); }
    45% { opacity: 1; transform: scale(0.5); }
    65% { opacity: 0.8; transform: scale(3.4); border-color: #8cffaa; }
    80%, 100% { opacity: 0; transform: scale(5.5); }
  }

  /* Relative motion shear vector arrows */
  .flt-vector-up {
    position: absolute;
    left: 14px;
    top: 6px;
    font-size: 8px;
    font-weight: bold;
    color: #ffffff;
    animation: flt-arrow-up 2.4s ease-in-out infinite;
  }

  .flt-vector-down {
    position: absolute;
    right: 14px;
    bottom: 6px;
    font-size: 8px;
    font-weight: bold;
    color: #ffffff;
    animation: flt-arrow-down 2.4s ease-in-out infinite;
  }

  @keyframes flt-arrow-up {
    0%, 30% { transform: translateY(0); opacity: 0.5; }
    45% { transform: translateY(-6px); opacity: 1; text-shadow: 0 0 6px #00ff66; }
    80%, 100% { transform: translateY(0); opacity: 0.5; }
  }

  @keyframes flt-arrow-down {
    0%, 30% { transform: translateY(0); opacity: 0.5; }
    45% { transform: translateY(6px); opacity: 1; text-shadow: 0 0 6px #00ff66; }
    80%, 100% { transform: translateY(0); opacity: 0.5; }
  }

  .flt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptStratumFault extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stratumFaultStyles}</style>
      <div class="flt">
        <div class="flt-block">
          <div class="flt-block-left">
            <div class="flt-strata s-sand"></div>
            <div class="flt-strata s-shale"></div>
            <div class="flt-strata s-lime"></div>
            <div class="flt-strata s-granite"></div>
            <div class="flt-strata s-basalt"></div>
          </div>

          <div class="flt-line"></div>

          <div class="flt-block-right">
            <div class="flt-strata s-sand"></div>
            <div class="flt-strata s-shale"></div>
            <div class="flt-strata s-lime"></div>
            <div class="flt-strata s-granite"></div>
            <div class="flt-strata s-basalt"></div>
          </div>

          <div class="flt-seismic-ripple"></div>
          <div class="flt-vector-up">▲</div>
          <div class="flt-vector-down">▼</div>
        </div>

        <div class="flt-label">STRIKE-SLIP FAULT</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-stratum-fault')) {
  customElements.define('concept-stratum-fault', ConceptStratumFault);
}
