const treadwheelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .trd {
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

  /* Timber crane mast & jib frame */
  .trd-crane-frame {
    position: relative;
    width: 96px;
    height: 78px;
  }

  /* Rotating wooden squirrel cage treadwheel */
  .trd-wheel {
    position: absolute;
    left: 4px;
    top: 14px;
    width: 48px;
    height: 48px;
    border: 2px solid #ffaa00;
    border-radius: 50%;
    box-shadow: inset 0 0 8px rgba(255, 170, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.8);
    animation: trd-rot-wheel 4s linear infinite;
  }

  @keyframes trd-rot-wheel {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Wheel spokes and walking rungs */
  .trd-spokes {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Center windlass drive axle */
  .trd-axle {
    position: absolute;
    left: 26px;
    top: 36px;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #ffaa00;
    box-shadow: 0 0 4px #ffea88;
    z-index: 5;
  }

  /* Diagonal crane jib boom */
  .trd-jib {
    position: absolute;
    left: 26px;
    top: 36px;
    width: 58px;
    height: 3px;
    background: linear-gradient(90deg, #ffaa00, #553300);
    transform-origin: 0% 50%;
    transform: rotate(-32deg);
    border-radius: 1px;
  }

  /* Hoist cable dropping from jib tip */
  .trd-cable {
    position: absolute;
    right: 18px;
    top: 6px;
    width: 1.2px;
    height: 42px;
    background: #ffffff;
    box-shadow: 0 0 4px #ffea88;
    animation: trd-hoist-cable 4s ease-in-out infinite alternate;
  }

  /* Hoisted heavy ashlar stone block */
  .trd-stone {
    position: absolute;
    bottom: 0;
    left: -7px;
    width: 16px;
    height: 12px;
    background: #38240a;
    border: 1.5px solid #ffcc00;
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(255, 204, 0, 0.4);
  }

  @keyframes trd-hoist-cable {
    0% { height: 50px; }
    100% { height: 26px; }
  }

  .trd-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTreadwheelCrane extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${treadwheelStyles}</style>
      <div class="trd">
        <div class="trd-crane-frame">
          <div class="trd-wheel">
            <svg class="trd-spokes" viewBox="0 0 48 48">
              <line x1="24" y1="2" x2="24" y2="46" stroke="#ffaa00" stroke-width="1.2" />
              <line x1="2" y1="24" x2="46" y2="24" stroke="#ffaa00" stroke-width="1.2" />
              <line x1="8" y1="8" x2="40" y2="40" stroke="#ffaa00" stroke-width="1.2" />
              <line x1="8" y1="40" x2="40" y2="8" stroke="#ffaa00" stroke-width="1.2" />
              <circle cx="24" cy="24" r="14" fill="none" stroke="rgba(255, 220, 100, 0.4)" stroke-dasharray="2 3" />
            </svg>
          </div>

          <div class="trd-axle"></div>
          <div class="trd-jib"></div>

          <div class="trd-cable">
            <div class="trd-stone"></div>
          </div>
        </div>

        <div class="trd-label">TREADWHEEL CRANE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-treadwheel-crane')) {
  customElements.define('concept-treadwheel-crane', ConceptTreadwheelCrane);
}
