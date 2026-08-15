const cartesianStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ctd {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Glass water column cylinder tube */
  .ctd-tube {
    position: relative;
    width: 44px;
    height: 86px;
    border: 1.5px solid #d6ffe0;
    border-radius: 12px 12px 6px 6px;
    background: radial-gradient(circle at 40% 50%, rgba(140, 255, 170, 0.25) 0%, rgba(0, 40, 10, 0.5) 60%, rgba(0, 15, 4, 0.8) 100%);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Flexible rubber diaphragm bulb at top */
  .ctd-bulb {
    position: absolute;
    top: 2px;
    width: 28px;
    height: 10px;
    background: #008818;
    border: 1.5px solid #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 6px #8cffaa;
    animation: ctd-squeeze 4s ease-in-out infinite;
  }

  @keyframes ctd-squeeze {
    0%, 30% { transform: scaleY(1); }
    40%, 75% { transform: scaleY(0.7); } /* Squeeze pressure pulse */
    85%, 100% { transform: scaleY(1); }
  }

  /* Sinking & Rising Glass Cartesian Diver figurine */
  .ctd-diver-rig {
    position: absolute;
    width: 22px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    animation: ctd-diver-dive 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes ctd-diver-dive {
    0%, 30% {
      top: 14px;
      transform: rotate(0deg);
    }
    45%, 70% {
      top: 50px; /* Sinks under pressure! */
      transform: rotate(360deg); /* Corkscrew spiral tail */
    }
    85%, 100% {
      top: 14px; /* Floats back to surface */
      transform: rotate(720deg);
    }
  }

  /* Diver bulbous head */
  .ctd-diver-head {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffffff, #00aa22);
    border: 1px solid #ffffff;
    box-shadow: 0 0 6px #8cffaa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Compressed air bubble trapped inside head */
  .ctd-air-bubble {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    animation: ctd-bubble-compress 4s ease-in-out infinite;
  }

  @keyframes ctd-bubble-compress {
    0%, 30% { transform: scale(1); }
    45%, 70% { transform: scale(0.45); } /* Bubble shrinks under pressure */
    85%, 100% { transform: scale(1); }
  }

  /* Diver curly tail nozzle */
  .ctd-diver-tail {
    width: 4px;
    height: 12px;
    background: #d6ffe0;
    border-radius: 0 0 2px 2px;
  }

  /* Hydrostatic pressure waves in column */
  .ctd-press-wave {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.4), transparent 60%);
    opacity: 0;
    animation: ctd-wave-pulse 4s ease-in-out infinite;
  }

  @keyframes ctd-wave-pulse {
    0%, 35% { opacity: 0; }
    40%, 75% { opacity: 0.8; }
    85%, 100% { opacity: 0; }
  }

  /* Caption */
  .ctd-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptCartesianDiver extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cartesianStyles}</style>
      <div class="ctd">
        <div class="ctd-tube">
          <div class="ctd-press-wave"></div>
          <div class="ctd-bulb"></div>

          <div class="ctd-diver-rig">
            <div class="ctd-diver-head">
              <div class="ctd-air-bubble"></div>
            </div>
            <div class="ctd-diver-tail"></div>
          </div>
        </div>

        <div class="ctd-label">CARTESIAN DIVER ΔP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cartesian-diver')) {
  customElements.define('concept-cartesian-diver', ConceptCartesianDiver);
}
