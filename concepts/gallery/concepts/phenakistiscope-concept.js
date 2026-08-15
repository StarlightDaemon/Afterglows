const phenakistiscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .phn {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151006 0%, #060401 100%);
    border: 1.5px solid rgba(255, 187, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 187, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating slotted cardboard disc */
  .phn-disc {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #2b1c06 0%, #0d0801 100%);
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 10px rgba(255, 170, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: phn-spin 2s steps(12) infinite;
  }

  @keyframes phn-spin {
    to { transform: rotate(360deg); }
  }

  /* Perimeter stroboscopic viewing slits */
  .phn-slit {
    position: absolute;
    width: 2px;
    height: 9px;
    background: #ffffff;
    box-shadow: 0 0 4px #ffffff;
  }

  .s0 { top: 1px; left: 39px; }
  .s30 { top: 6px; right: 19px; transform: rotate(30deg); }
  .s60 { top: 19px; right: 6px; transform: rotate(60deg); }
  .s90 { top: 39px; right: 1px; transform: rotate(90deg); }
  .s120 { bottom: 19px; right: 6px; transform: rotate(120deg); }
  .s150 { bottom: 6px; right: 19px; transform: rotate(150deg); }
  .s180 { bottom: 1px; left: 39px; }
  .s210 { bottom: 6px; left: 19px; transform: rotate(210deg); }
  .s240 { bottom: 19px; left: 6px; transform: rotate(240deg); }
  .s270 { top: 39px; left: 1px; transform: rotate(270deg); }
  .s300 { top: 19px; left: 6px; transform: rotate(300deg); }
  .s330 { top: 6px; left: 19px; transform: rotate(330deg); }

  /* Animated sequential leaping figure ring */
  .phn-figure-ring {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .phn-figure {
    position: absolute;
    font-size: 8px;
    color: #ffe688;
    text-shadow: 0 0 4px #ffaa00;
  }

  .f-0 { top: 2px; left: 21px; transform: rotate(0deg); }
  .f-1 { top: 6px; right: 9px; transform: rotate(45deg); }
  .f-2 { top: 21px; right: 2px; transform: rotate(90deg); }
  .f-3 { bottom: 6px; right: 9px; transform: rotate(135deg); }
  .f-4 { bottom: 2px; left: 21px; transform: rotate(180deg); }
  .f-5 { bottom: 6px; left: 9px; transform: rotate(225deg); }
  .f-6 { top: 21px; left: 2px; transform: rotate(270deg); }
  .f-7 { top: 6px; left: 9px; transform: rotate(315deg); }

  /* Central spindle pin */
  .phn-spindle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 6px #ffcc00;
    z-index: 6;
  }

  .phn-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPhenakistiscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${phenakistiscopeStyles}</style>
      <div class="phn">
        <div class="phn-disc">
          <div class="phn-slit s0"></div>
          <div class="phn-slit s30"></div>
          <div class="phn-slit s60"></div>
          <div class="phn-slit s90"></div>
          <div class="phn-slit s120"></div>
          <div class="phn-slit s150"></div>
          <div class="phn-slit s180"></div>
          <div class="phn-slit s210"></div>
          <div class="phn-slit s240"></div>
          <div class="phn-slit s270"></div>
          <div class="phn-slit s300"></div>
          <div class="phn-slit s330"></div>

          <div class="phn-figure-ring">
            <div class="phn-figure f-0">✦</div>
            <div class="phn-figure f-1">✶</div>
            <div class="phn-figure f-2">✷</div>
            <div class="phn-figure f-3">✸</div>
            <div class="phn-figure f-4">✹</div>
            <div class="phn-figure f-5">✺</div>
            <div class="phn-figure f-6">✻</div>
            <div class="phn-figure f-7">✼</div>
          </div>

          <div class="phn-spindle"></div>
        </div>

        <div class="phn-label">PHENAKISTISCOPE DISC</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-phenakistiscope')) {
  customElements.define('concept-phenakistiscope', ConceptPhenakistiscope);
}
