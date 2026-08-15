const chromStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .chm {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #08140a 0%, #010602 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Chromatography developing glass beaker */
  .chm-jar {
    position: relative;
    width: 60px;
    height: 76px;
    background: #021a0a;
    border: 1.5px solid #00cc00;
    border-radius: 4px;
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  /* Solvent liquid pool at bottom */
  .chm-solvent-pool {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 14px;
    background: rgba(0, 229, 255, 0.3);
    border-top: 1px dashed #00e5ff;
  }

  /* Cellulose chromatography paper strip */
  .chm-strip {
    position: absolute;
    top: 6px;
    width: 32px;
    height: 64px;
    background: #062812;
    border: 1px solid #8cffaa;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Ascending capillary solvent front */
  .chm-solvent-front {
    position: absolute;
    width: 100%;
    height: 1.5px;
    background: #ffffff;
    box-shadow: 0 0 4px #00e5ff;
    animation: chm-capillary 6s linear infinite;
  }

  @keyframes chm-capillary {
    0% { bottom: 8px; opacity: 0; }
    20% { opacity: 1; }
    90% { bottom: 56px; opacity: 1; }
    100% { bottom: 56px; opacity: 0; }
  }

  /* Origin sample spot */
  .chm-origin-spot {
    position: absolute;
    bottom: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
  }

  /* Separated pigment fractions (Rf migration bands) */
  .chm-band {
    position: absolute;
    width: 20px;
    height: 4px;
    border-radius: 2px;
    animation: chm-elute 6s linear infinite;
  }

  .b-yellow {
    background: #ffea00;
    box-shadow: 0 0 6px #ffea00;
  }

  .b-magenta {
    background: #ff00aa;
    box-shadow: 0 0 6px #ff00aa;
  }

  .b-cyan {
    background: #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
  }

  .b-blue {
    background: #0088ff;
    box-shadow: 0 0 6px #0088ff;
  }

  @keyframes chm-elute {
    0% { bottom: 10px; opacity: 0; transform: scaleX(0.4); }
    20% { opacity: 1; }
    90% { opacity: 1; transform: scaleX(1); }
    100% { opacity: 0; }
  }

  .b-yellow { animation-name: chm-elute-yellow; }
  .b-magenta { animation-name: chm-elute-magenta; }
  .b-cyan { animation-name: chm-elute-cyan; }
  .b-blue { animation-name: chm-elute-blue; }

  @keyframes chm-elute-yellow {
    0% { bottom: 10px; opacity: 0; }
    20% { opacity: 1; }
    90% { bottom: 50px; opacity: 1; }
    100% { bottom: 50px; opacity: 0; }
  }

  @keyframes chm-elute-magenta {
    0% { bottom: 10px; opacity: 0; }
    20% { opacity: 1; }
    90% { bottom: 38px; opacity: 1; }
    100% { bottom: 38px; opacity: 0; }
  }

  @keyframes chm-elute-cyan {
    0% { bottom: 10px; opacity: 0; }
    20% { opacity: 1; }
    90% { bottom: 26px; opacity: 1; }
    100% { bottom: 26px; opacity: 0; }
  }

  @keyframes chm-elute-blue {
    0% { bottom: 10px; opacity: 0; }
    20% { opacity: 1; }
    90% { bottom: 18px; opacity: 1; }
    100% { bottom: 18px; opacity: 0; }
  }

  .chm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptChromatography extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${chromStyles}</style>
      <div class="chm">
        <div class="chm-jar">
          <div class="chm-strip">
            <div class="chm-solvent-front"></div>
            <div class="chm-origin-spot"></div>

            <div class="chm-band b-yellow"></div>
            <div class="chm-band b-magenta"></div>
            <div class="chm-band b-cyan"></div>
            <div class="chm-band b-blue"></div>
          </div>

          <div class="chm-solvent-pool"></div>
        </div>

        <div class="chm-label">PAPER CHROMATOGRAPHY</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-chromatography')) {
  customElements.define('concept-chromatography', ConceptChromatography);
}
