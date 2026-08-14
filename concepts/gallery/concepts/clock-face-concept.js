const clockFaceStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .clock {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clock-dial {
    position: relative;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.65);
    background: radial-gradient(circle at 40% 32%, #0a2411 0%, #051206 70%, #030b04 100%);
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.25), inset 0 0 14px rgba(0, 204, 0, 0.12);
    animation: clock-breathe 4s ease-in-out infinite;
  }

  .clock-tick {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 7px;
    margin: -43px 0 0 -1px;
    transform-origin: 1px 43px;
    background: rgba(140, 255, 170, 0.4);
  }

  .clock-tick.cardinal {
    height: 10px;
    background: rgba(200, 255, 210, 0.85);
  }

  .clock-hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
    border-radius: 2px;
  }

  .clock-hand.second {
    width: 2px;
    height: 36px;
    margin-left: -1px;
    background: linear-gradient(180deg, #d8ffbb, rgba(216, 255, 187, 0.35));
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.5);
    animation: clock-turn 6s steps(60, end) infinite;
  }

  .clock-hand.minute {
    width: 3px;
    height: 28px;
    margin-left: -1.5px;
    background: rgba(140, 255, 170, 0.85);
    animation: clock-turn 72s linear infinite;
  }

  .clock-hand.hour {
    width: 4px;
    height: 19px;
    margin-left: -2px;
    background: rgba(90, 220, 130, 0.75);
    transform: rotate(295deg);
  }

  .clock-pin {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7px;
    height: 7px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 6px rgba(216, 255, 187, 0.7);
    z-index: 2;
  }

  @keyframes clock-breathe {
    0%, 100% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.18), inset 0 0 10px rgba(0, 204, 0, 0.08); }
    50% { box-shadow: 0 0 16px rgba(0, 204, 0, 0.35), inset 0 0 16px rgba(0, 204, 0, 0.16); }
  }

  @keyframes clock-turn {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Antique porcelain enamel clock face with brass bezel, blued steel Breguet hands,
     and crimson second hand */
  .clockc {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Porcelain enamel dial with brass bezel */
  .clockc-dial {
    position: relative;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    border: 3px solid #ca8a04;
    background: radial-gradient(circle at 40% 32%, #ffffff 0%, #fef3c7 60%, #fed7aa 100%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), inset 0 0 10px rgba(202, 138, 4, 0.3);
    animation: clockc-breathe 4s ease-in-out infinite;
  }

  .clockc-tick {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 7px;
    margin: -43px 0 0 -1px;
    transform-origin: 1px 43px;
    background: #475569;
  }

  .clockc-tick.cardinal {
    height: 10px;
    background: #09090b;
    box-shadow: 0 0 2px #ca8a04;
  }

  .clockc-hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
    border-radius: 2px;
  }

  /* Crimson second hand */
  .clockc-hand.second {
    width: 1.5px;
    height: 36px;
    margin-left: -0.75px;
    background: #ef4444;
    box-shadow: 0 0 4px #dc2626;
    animation: clockc-turn 6s steps(60, end) infinite;
    z-index: 3;
  }

  /* Blued steel minute hand */
  .clockc-hand.minute {
    width: 3px;
    height: 28px;
    margin-left: -1.5px;
    background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
    border: 0.5px solid #1d4ed8;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    animation: clockc-turn 72s linear infinite;
    z-index: 2;
  }

  /* Blued steel hour hand */
  .clockc-hand.hour {
    width: 4px;
    height: 19px;
    margin-left: -2px;
    background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
    border: 0.5px solid #1d4ed8;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    transform: rotate(295deg);
    z-index: 2;
  }

  /* Golden center pivot pin */
  .clockc-pin {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7px;
    height: 7px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #facc15;
    border: 1px solid #ca8a04;
    box-shadow: 0 0 4px #fde047;
    z-index: 4;
  }

  @keyframes clockc-breathe {
    0%, 100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), inset 0 0 10px rgba(202, 138, 4, 0.3); }
    50% { box-shadow: 0 4px 16px rgba(202, 138, 4, 0.5), inset 0 0 14px rgba(202, 138, 4, 0.5); }
  }

  @keyframes clockc-turn {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  `,
};

const clockFaceMarkup = {
  v1: (ticks) => `
      <div class="clock">
        <div class="clock-dial">
          ${ticks}
          <div class="clock-hand hour"></div>
          <div class="clock-hand minute"></div>
          <div class="clock-hand second"></div>
          <div class="clock-pin"></div>
        </div>
      </div>
    `,
  v2: (ticks) => `
      <div class="clockc">
        <div class="clockc-dial">
          ${ticks}
          <div class="clockc-hand hour"></div>
          <div class="clockc-hand minute"></div>
          <div class="clockc-hand second"></div>
          <div class="clockc-pin"></div>
        </div>
      </div>
    `,
};

class ConceptClockFace extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    const tickCls = version === 'v2' ? 'clockc-tick' : 'clock-tick';
    const ticks = Array.from({ length: 12 }, (_, i) => {
      const cardinal = i % 3 === 0 ? ' cardinal' : '';
      return `<div class="${tickCls}${cardinal}" style="transform: rotate(${i * 30}deg)"></div>`;
    }).join('');
    this.shadowRoot.innerHTML = `<style>${clockFaceStyles[version] || clockFaceStyles.v2}</style>${(clockFaceMarkup[version] || clockFaceMarkup.v2)(ticks)}`;
  }
}

if (!customElements.get('concept-clock-face')) {
  customElements.define('concept-clock-face', ConceptClockFace);
}
