const stroboscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .strb {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020803;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rapid flashing Xenon strobe illuminator */
  .strb-flash-overlay {
    position: absolute;
    inset: 0;
    background: rgba(214, 255, 224, 0.22);
    pointer-events: none;
    z-index: 5;
    animation: strb-strobe 0.22s steps(2, start) infinite;
  }

  @keyframes strb-strobe {
    0%, 75% { opacity: 0; }
    80%, 100% { opacity: 1; }
  }

  /* Rotating patterned disc behind slotted aperture */
  .strb-disc-housing {
    position: relative;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: #010c04;
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Disc spoke wheel exhibiting the stroboscopic optical illusion (slow drift) */
  .strb-wheel {
    position: absolute;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    animation: strb-aliased-spin 12s linear infinite;
  }

  @keyframes strb-aliased-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  /* Spoke markings */
  .strb-spoke {
    position: absolute;
    top: 32px;
    left: 4px;
    width: 58px;
    height: 2px;
    background: #d6ffe0;
    box-shadow: 0 0 4px #8cffaa;
  }

  .strb-spoke.sp2 { transform: rotate(45deg); }
  .strb-spoke.sp3 { transform: rotate(90deg); }
  .strb-spoke.sp4 { transform: rotate(135deg); }

  /* Slotted viewing visor bezel */
  .strb-visor {
    position: absolute;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    border: 2px dashed rgba(140, 255, 170, 0.5);
    pointer-events: none;
  }

  /* Flash lamp tube housing at top right */
  .strb-lamp {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, #8cffaa 50%, #004408 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 0 8px #ffffff;
    animation: strb-lamp-pulse 0.22s steps(2, start) infinite;
  }

  @keyframes strb-lamp-pulse {
    0%, 75% { opacity: 0.3; filter: blur(0.5px); }
    80%, 100% { opacity: 1; filter: drop-shadow(0 0 10px #ffffff); }
  }

  /* Digital RPM frequency readout */
  .strb-rpm {
    position: absolute;
    bottom: 4px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptStroboscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stroboscopeStyles}</style>
      <div class="strb">
        <div class="strb-flash-overlay"></div>
        <div class="strb-lamp"></div>
        <div class="strb-visor"></div>

        <div class="strb-disc-housing">
          <div class="strb-wheel">
            <div class="strb-spoke sp1"></div>
            <div class="strb-spoke sp2"></div>
            <div class="strb-spoke sp3"></div>
            <div class="strb-spoke sp4"></div>
          </div>
        </div>

        <div class="strb-rpm">STROBE: 3600 RPM</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-stroboscope')) {
  customElements.define('concept-stroboscope', ConceptStroboscope);
}
