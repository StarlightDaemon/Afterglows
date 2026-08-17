const rubensStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rbn {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #140b03 0%, #060200 100%);
    border: 1.5px solid rgba(255, 170, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 170, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Main acoustic resonator tube */
  .rbn-tube {
    position: absolute;
    bottom: 24px;
    width: 96px;
    height: 16px;
    background: linear-gradient(180deg, #3d2305 0%, #170c01 60%, #050200 100%);
    border: 1.5px solid #ffaa00;
    border-radius: 3px;
    box-shadow: inset 0 0 6px rgba(255, 170, 0, 0.4), 0 0 8px rgba(255, 170, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  /* Speaker driver transducer on left end with bold translation */
  .rbn-speaker {
    position: absolute;
    left: 8px;
    bottom: 20px;
    width: 8px;
    height: 24px;
    background: #ffcc00;
    border: 1px solid #ffffff;
    border-radius: 3px 0 0 3px;
    box-shadow: 0 0 8px #ffaa00;
    animation: rbn-vibrate 1.2s ease-in-out infinite alternate;
  }

  @keyframes rbn-vibrate {
    0% { transform: translateX(-3px); }
    100% { transform: translateX(3px); }
  }

  /* Gas inlet pipe on right */
  .rbn-gas-inlet {
    position: absolute;
    right: 14px;
    bottom: 12px;
    width: 6px;
    height: 14px;
    background: #553300;
    border: 1px solid #ffaa00;
  }

  /* Flame array along top of tube */
  .rbn-flames-row {
    position: absolute;
    bottom: 40px;
    width: 88px;
    height: 36px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 4px;
  }

  .rbn-flame {
    width: 3.5px;
    background: linear-gradient(180deg, #ffffff 0%, #ffcc00 35%, #ff5500 80%, rgba(255, 50, 0, 0.2) 100%);
    border-radius: 50% 50% 20% 20%;
    filter: drop-shadow(0 0 4px #ff8800);
    transform-origin: 50% 100%;
    animation: rbn-standing-wave 1.8s ease-in-out infinite alternate;
  }

  /* Standing wave node/antinode height modulations */
  .f-node { height: 6px; animation-delay: 0s; }
  .f-low { height: 12px; animation-delay: 0.2s; }
  .f-mid { height: 20px; animation-delay: 0.4s; }
  .f-high { height: 28px; animation-delay: 0.6s; }
  .f-peak { height: 34px; filter: drop-shadow(0 0 6px #ffcc00); animation-delay: 0.8s; }

  @keyframes rbn-standing-wave {
    0% { transform: scaleY(0.4) scaleX(0.8); }
    100% { transform: scaleY(1.35) scaleX(1.1); }
  }

  /* Standing sound wave sine curve overlay */
  .rbn-wave-svg {
    position: absolute;
    bottom: 40px;
    width: 88px;
    height: 36px;
    pointer-events: none;
  }

  .rbn-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRubensTube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rubensStyles}</style>
      <div class="rbn">
        <div class="rbn-speaker"></div>
        <div class="rbn-gas-inlet"></div>

        <div class="rbn-flames-row">
          <div class="rbn-flame f-node"></div>
          <div class="rbn-flame f-low"></div>
          <div class="rbn-flame f-mid"></div>
          <div class="rbn-flame f-peak"></div>
          <div class="rbn-flame f-high"></div>
          <div class="rbn-flame f-mid"></div>
          <div class="rbn-flame f-low"></div>
          <div class="rbn-flame f-node"></div>
          <div class="rbn-flame f-low"></div>
          <div class="rbn-flame f-mid"></div>
          <div class="rbn-flame f-peak"></div>
          <div class="rbn-flame f-high"></div>
          <div class="rbn-flame f-mid"></div>
          <div class="rbn-flame f-low"></div>
          <div class="rbn-flame f-node"></div>
        </div>

        <svg class="rbn-wave-svg" viewBox="0 0 88 36">
          <!-- Standing acoustic pressure waveform -->
          <path d="M 4 32 Q 24 0 44 32 Q 64 0 84 32" fill="none" stroke="rgba(255, 255, 255, 0.7)" stroke-width="1.4" stroke-dasharray="2 1.5" />
        </svg>

        <div class="rbn-tube"></div>

        <div class="rbn-label">RUBENS' FLAME TUBE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-rubens-tube')) {
  customElements.define('concept-rubens-tube', ConceptRubensTube);
}
