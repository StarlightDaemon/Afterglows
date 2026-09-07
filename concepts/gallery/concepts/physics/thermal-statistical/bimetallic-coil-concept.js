const bimetallicStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bmc {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151006 0%, #060401 100%);
    border: 1.5px solid rgba(255, 170, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 170, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Thermostat housing base */
  .bmc-housing {
    position: relative;
    width: 82px;
    height: 74px;
    background: #1f1406;
    border: 1.5px solid #ffaa00;
    border-radius: 4px;
    box-shadow: inset 0 0 8px rgba(255, 170, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Bimetallic spiral coil (Archimedean strip) */
  .bmc-coil-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform-origin: 41px 37px;
    animation: bmc-flex 4s ease-in-out infinite alternate;
  }

  @keyframes bmc-flex {
    0% { transform: rotate(-12deg); }
    100% { transform: rotate(12deg); }
  }

  .bmc-brass-strip {
    fill: none;
    stroke: #ffcc00;
    stroke-width: 2.2;
    stroke-linecap: round;
  }

  .bmc-invar-strip {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1;
    stroke-linecap: round;
  }

  /* Central fixed anchor arbor */
  .bmc-anchor {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #ffaa00;
    box-shadow: 0 0 4px #ffea88;
    z-index: 6;
  }

  /* Mercury glass switch capsule attached to outer end of spiral */
  .bmc-mercury-switch {
    position: absolute;
    top: 10px;
    right: 8px;
    width: 20px;
    height: 9px;
    background: #041a22;
    border: 1px solid #00e5ff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    overflow: hidden;
    animation: bmc-switch-tilt 4s ease-in-out infinite alternate;
  }

  @keyframes bmc-switch-tilt {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  /* Liquid mercury droplet bead making contact */
  .bmc-mercury-drop {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #00e5ff;
    animation: bmc-drop-roll 4s ease-in-out infinite alternate;
  }

  @keyframes bmc-drop-roll {
    0% { left: 2px; }
    100% { left: 11px; }
  }

  /* Contact electrodes in glass vial */
  .bmc-electrode {
    position: absolute;
    right: 2px;
    width: 2px;
    height: 5px;
    background: #ffea00;
  }

  .bmc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBimetallicCoil extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bimetallicStyles}</style>
      <div class="bmc">
        <div class="bmc-housing">
          <svg class="bmc-coil-svg" viewBox="0 0 82 74">
            <!-- Archimedean dual-metal coiled spring -->
            <path class="bmc-brass-strip" d="M 41 37 C 35 37, 33 31, 37 27 C 43 23, 49 27, 51 35 C 53 45, 43 51, 33 49 C 21 47, 19 33, 23 21 C 27 9, 45 7, 57 13 C 67 17, 72 27, 70 37" />
            <path class="bmc-invar-strip" d="M 41 37 C 35 37, 33 31, 37 27 C 43 23, 49 27, 51 35 C 53 45, 43 51, 33 49 C 21 47, 19 33, 23 21 C 27 9, 45 7, 57 13 C 67 17, 72 27, 70 37" />
          </svg>

          <div class="bmc-anchor"></div>

          <div class="bmc-mercury-switch">
            <div class="bmc-mercury-drop"></div>
            <div class="bmc-electrode"></div>
          </div>
        </div>

        <div class="bmc-label">BIMETALLIC THERMOSTAT</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bimetallic-coil')) {
  customElements.define('concept-bimetallic-coil', ConceptBimetallicCoil);
}
