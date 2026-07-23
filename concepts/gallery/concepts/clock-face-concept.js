const clockFaceStyles = `
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

  /* Hour ticks: 12 thin marks around the rim; cardinal ones brighter. */
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

  /* Hands share the same pivot; each is a bottom-anchored bar. */
  .clock-hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
    border-radius: 2px;
  }

  /* Second hand: full rev in 6s, snapping through 60 discrete steps. */
  .clock-hand.second {
    width: 2px;
    height: 36px;
    margin-left: -1px;
    background: linear-gradient(180deg, #d8ffbb, rgba(216, 255, 187, 0.35));
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.5);
    animation: clock-turn 6s steps(60, end) infinite;
  }

  /* Minute hand: one rev per 72s, smooth. */
  .clock-hand.minute {
    width: 3px;
    height: 28px;
    margin-left: -1.5px;
    background: rgba(140, 255, 170, 0.85);
    animation: clock-turn 72s linear infinite;
  }

  /* Hour hand: parked at an angle, creeping imperceptibly. */
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

  /* One-second heartbeat on the rim glow, matching the stepping hand. */
  @keyframes clock-breathe {
    0%, 100% { box-shadow: 0 0 8px rgba(0, 204, 0, 0.18), inset 0 0 10px rgba(0, 204, 0, 0.08); }
    50% { box-shadow: 0 0 16px rgba(0, 204, 0, 0.35), inset 0 0 16px rgba(0, 204, 0, 0.16); }
  }

  @keyframes clock-turn {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class ConceptClockFace extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const ticks = Array.from({ length: 12 }, (_, i) => {
      const cardinal = i % 3 === 0 ? ' cardinal' : '';
      return `<div class="clock-tick${cardinal}" style="transform: rotate(${i * 30}deg)"></div>`;
    }).join('');
    this.shadowRoot.innerHTML = `
      <style>${clockFaceStyles}</style>
      <div class="clock">
        <div class="clock-dial">
          ${ticks}
          <div class="clock-hand hour"></div>
          <div class="clock-hand minute"></div>
          <div class="clock-hand second"></div>
          <div class="clock-pin"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-clock-face')) {
  customElements.define('concept-clock-face', ConceptClockFace);
}
