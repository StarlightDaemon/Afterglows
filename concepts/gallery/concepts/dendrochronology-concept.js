const dendroStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dnd {
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

  /* Tree core mount tray */
  .dnd-tray {
    position: relative;
    width: 90px;
    height: 64px;
    background: #1f1406;
    border: 1.5px solid #ffaa00;
    border-radius: 4px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  /* Cylindrical increment borer wood core */
  .dnd-wood-core {
    position: relative;
    width: 82px;
    height: 18px;
    background: #3d260c;
    border: 1.2px solid #ffcc00;
    border-radius: 2px;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 0 6px rgba(255, 170, 0, 0.3);
  }

  /* Annual growth rings of varying widths */
  .dnd-ring {
    height: 100%;
    border-right: 1.5px solid #140b02;
    background: linear-gradient(90deg, #5c3a14 0%, #3d260c 80%, #140b02 100%);
  }

  .r-narrow { width: 3px; background: #261606; } /* Drought year */
  .r-med { width: 7px; }
  .r-wide { width: 13px; background: #6b4419; } /* High precipitation year */
  .r-frost { width: 2px; background: #ffffff; box-shadow: 0 0 4px #ffffff; } /* Volcanic frost ring */

  /* Cross-dating alignment reference timeline */
  .dnd-timeline {
    width: 82px;
    height: 8px;
    border-top: 1px dashed rgba(255, 204, 100, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .dnd-tick {
    width: 1px;
    height: 4px;
    background: #ffcc00;
  }

  /* Scanning chronometer reticle cursor moving across core */
  .dnd-scanner-cursor {
    position: absolute;
    top: 4px;
    bottom: 4px;
    width: 5px;
    background: linear-gradient(90deg, rgba(255, 234, 0, 0.25), #ffffff, rgba(255, 234, 0, 0.25));
    box-shadow: 0 0 10px #ffea00, 0 0 16px #ffffff;
    z-index: 6;
    animation: dnd-scan 4s ease-in-out infinite alternate;
  }

  @keyframes dnd-scan {
    0% { left: 8px; }
    100% { left: 78px; }
  }

  .dnd-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptDendrochronology extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dendroStyles}</style>
      <div class="dnd">
        <div class="dnd-tray">
          <div class="dnd-wood-core">
            <div class="dnd-ring r-narrow"></div>
            <div class="dnd-ring r-narrow"></div>
            <div class="dnd-ring r-wide"></div>
            <div class="dnd-ring r-med"></div>
            <div class="dnd-ring r-frost"></div>
            <div class="dnd-ring r-narrow"></div>
            <div class="dnd-ring r-wide"></div>
            <div class="dnd-ring r-med"></div>
            <div class="dnd-ring r-wide"></div>
            <div class="dnd-ring r-narrow"></div>

            <div class="dnd-scanner-cursor"></div>
          </div>

          <div class="dnd-timeline">
            <div class="dnd-tick"></div>
            <div class="dnd-tick"></div>
            <div class="dnd-tick"></div>
            <div class="dnd-tick"></div>
            <div class="dnd-tick"></div>
            <div class="dnd-tick"></div>
          </div>
        </div>

        <div class="dnd-label">DENDROCHRONOLOGY CORE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-dendrochronology')) {
  customElements.define('concept-dendrochronology', ConceptDendrochronology);
}
