const tideClockStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tdc {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03141f 0%, #000508 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Brass nautical porthole bezel */
  .tdc-bezel {
    position: relative;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #021a24 0%, #010c12 100%);
    border: 2px solid #00e5ff;
    box-shadow: inset 0 0 10px rgba(0, 229, 255, 0.3), 0 0 8px rgba(0, 229, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Tidal cardinal labels (High Tide, Half Ebb, Low Tide, Half Flood) */
  .tdc-text-high {
    position: absolute;
    top: 4px;
    font-size: 6px;
    font-family: monospace;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 4px #00e5ff;
  }

  .tdc-text-low {
    position: absolute;
    bottom: 4px;
    font-size: 6px;
    font-family: monospace;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 4px #00e5ff;
  }

  .tdc-text-ebb {
    position: absolute;
    right: 4px;
    font-size: 5px;
    font-family: monospace;
    color: #8cffff;
  }

  .tdc-text-fld {
    position: absolute;
    left: 4px;
    font-size: 5px;
    font-family: monospace;
    color: #8cffff;
  }

  /* Rotating lunar tide hand (12h 25m cycle) */
  .tdc-tide-hand {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 30px;
    margin: -30px 0 0 -1px;
    background: linear-gradient(180deg, #ffffff 0%, #00e5ff 70%, transparent 100%);
    transform-origin: 50% 100%;
    animation: tdc-rot-hand 8s linear infinite;
    z-index: 5;
  }

  @keyframes tdc-rot-hand {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Arrow pointer tip */
  .tdc-arrow-tip {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 6px;
    height: 6px;
    background: #ffffff;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    box-shadow: 0 0 6px #ffffff;
  }

  /* Central brass grommet boss */
  .tdc-boss {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
    z-index: 6;
  }

  .tdc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTideClock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tideClockStyles}</style>
      <div class="tdc">
        <div class="tdc-bezel">
          <svg viewBox="0 0 78 78" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;">
            <!-- Hour division ticks -->
            <circle cx="39" cy="39" r="32" fill="none" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1" stroke-dasharray="2 6" />
            <line x1="39" y1="12" x2="39" y2="66" stroke="rgba(0, 229, 255, 0.2)" stroke-width="0.8" />
            <line x1="12" y1="39" x2="66" y2="39" stroke="rgba(0, 229, 255, 0.2)" stroke-width="0.8" />
          </svg>

          <span class="tdc-text-high">HIGH</span>
          <span class="tdc-text-low">LOW</span>
          <span class="tdc-text-ebb">EBB</span>
          <span class="tdc-text-fld">FLOOD</span>

          <div class="tdc-tide-hand">
            <div class="tdc-arrow-tip"></div>
          </div>

          <div class="tdc-boss"></div>
        </div>

        <div class="tdc-label">LUNAR TIDE CLOCK</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tide-clock')) {
  customElements.define('concept-tide-clock', ConceptTideClock);
}
