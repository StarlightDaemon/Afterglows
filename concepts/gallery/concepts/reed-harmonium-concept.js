const harmoniumStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hrm {
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

  /* Wooden harmonium instrument chassis */
  .hrm-chassis {
    position: relative;
    width: 86px;
    height: 74px;
    background: #241405;
    border: 1.5px solid #ffaa00;
    border-radius: 4px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.9), 0 0 6px rgba(255, 170, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 6px 4px;
  }

  /* Ivory / ebony keyboard rank */
  .hrm-keyboard {
    width: 76px;
    height: 16px;
    background: #ffffff;
    border: 1px solid #ffaa00;
    border-radius: 2px;
    display: flex;
    position: relative;
    box-shadow: 0 0 4px rgba(255, 235, 150, 0.4);
  }

  .hrm-key {
    flex: 1;
    height: 100%;
    border-right: 1px solid #2b1a08;
    background: #ffffff;
  }

  .hrm-key.active {
    background: #ffcc00;
    box-shadow: inset 0 0 4px #ff7700;
    animation: hrm-key-press 1.6s ease-in-out infinite alternate;
  }

  @keyframes hrm-key-press {
    0% { transform: translateY(0); }
    100% { transform: translateY(4px); }
  }

  /* Tuned brass free-reed windchest */
  .hrm-windchest {
    width: 76px;
    height: 20px;
    background: #140a02;
    border: 1px solid #ffaa00;
    border-radius: 2px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  .hrm-reed {
    width: 4px;
    height: 12px;
    background: linear-gradient(180deg, #ffcc00, #553300);
    border-radius: 1px;
  }

  /* Radiating acoustic tone wave rings */
  .hrm-tone-ring {
    position: absolute;
    top: -4px;
    left: 28px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.5px solid #ffd700;
    pointer-events: none;
    animation: hrm-tone-pulse 1.6s cubic-bezier(0.1, 0.7, 0.3, 1) infinite;
  }

  @keyframes hrm-tone-pulse {
    0% { transform: scale(0.3); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  /* Deep pumping foot treadle bellows */
  .hrm-bellows-row {
    width: 76px;
    height: 18px;
    display: flex;
    justify-content: space-between;
  }

  .hrm-pedal-left, .hrm-pedal-right {
    width: 34px;
    height: 100%;
    background: #381f08;
    border: 1.2px solid #ffaa00;
    border-radius: 2px;
    transform-origin: 50% 100%;
  }

  .hrm-pedal-left { animation: hrm-pump-l 1.8s ease-in-out infinite alternate; }
  .hrm-pedal-right { animation: hrm-pump-r 1.8s ease-in-out infinite alternate; }

  @keyframes hrm-pump-l {
    0% { transform: rotate(-14deg) translateY(3px) scaleY(0.7); }
    100% { transform: rotate(14deg) translateY(-3px) scaleY(1.1); }
  }

  @keyframes hrm-pump-r {
    0% { transform: rotate(14deg) translateY(-3px) scaleY(1.1); }
    100% { transform: rotate(-14deg) translateY(3px) scaleY(0.7); }
  }

  .hrm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptReedHarmonium extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${harmoniumStyles}</style>
      <div class="hrm">
        <div class="hrm-chassis">
          <div class="hrm-keyboard">
            <div class="hrm-key"></div>
            <div class="hrm-key"></div>
            <div class="hrm-key active"></div>
            <div class="hrm-key"></div>
            <div class="hrm-key active"></div>
            <div class="hrm-key"></div>
            <div class="hrm-key"></div>
          </div>

          <div class="hrm-windchest">
            <div class="hrm-tone-ring"></div>
            <div class="hrm-reed"></div>
            <div class="hrm-reed"></div>
            <div class="hrm-reed" style="height: 14px;"></div>
            <div class="hrm-reed"></div>
            <div class="hrm-reed"></div>
          </div>

          <div class="hrm-bellows-row">
            <div class="hrm-pedal-left"></div>
            <div class="hrm-pedal-right"></div>
          </div>
        </div>

        <div class="hrm-label">PUMP REED HARMONIUM</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-reed-harmonium')) {
  customElements.define('concept-reed-harmonium', ConceptReedHarmonium);
}
