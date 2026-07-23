const barometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An aneroid barometer riding a weather front: the needle wanders
     from FAIR down through CHANGE to STORM and eases back, a memory
     hand trailing behind, while the dial glows at the extremes. */
  .bar {
    width: 100px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .bar-case {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 3px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 50% 42%, rgba(0, 55, 11, 0.6), rgba(0, 20, 4, 0.9));
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.25), 0 0 8px rgba(0, 204, 0, 0.2);
  }

  /* Tick ring. */
  .bar-ticks {
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(140, 255, 170, 0.8) 0 1.6deg, transparent 1.6deg 18deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 76%, black 78% 94%, transparent 96%);
    mask-image: radial-gradient(circle, transparent 0 76%, black 78% 94%, transparent 96%);
  }

  /* Zone labels. */
  .bar-zone {
    position: absolute;
    font-size: 7px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }

  .bar-zone.fair { top: 16px; left: 50%; transform: translateX(-50%); }
  .bar-zone.change { top: 46px; right: 8px; }
  .bar-zone.storm { bottom: 16px; left: 50%; transform: translateX(-50%); }
  .bar-zone.rain { top: 46px; left: 8px; }

  /* Memory hand: a slim marker trailing the live needle. */
  .bar-memory {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 32px;
    margin: -32px 0 0 -1px;
    background: rgba(0, 204, 0, 0.5);
    transform-origin: 50% 100%;
    animation: bar-memory 12s ease-in-out infinite;
  }

  @keyframes bar-memory {
    0%, 100% { transform: rotate(-96deg); }
    28% { transform: rotate(-80deg); }
    46% { transform: rotate(40deg); }
    58% { transform: rotate(74deg); }
    78% { transform: rotate(-30deg); }
  }

  /* Live needle. */
  .bar-needle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 34px;
    margin: -34px 0 0 -1.5px;
    border-radius: 2px 2px 0 0;
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 204, 0, 0.7));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.7);
    transform-origin: 50% 100%;
    animation: bar-needle 12s ease-in-out infinite;
  }

  /* Sweep: FAIR (-100) -> STORM (+90) and back, with a couple of
     nervous wiggles as the front passes. */
  @keyframes bar-needle {
    0%, 6% { transform: rotate(-98deg); }
    24% { transform: rotate(-58deg); }
    30% { transform: rotate(-64deg); }
    44% { transform: rotate(48deg); }
    50% { transform: rotate(84deg); }
    56% { transform: rotate(78deg); }
    62% { transform: rotate(88deg); }
    80% { transform: rotate(-20deg); }
    94%, 100% { transform: rotate(-98deg); }
  }

  .bar-hub {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 9px;
    height: 9px;
    margin: -4.5px 0 0 -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.8);
  }

  /* Dial glow flares while the needle sits in STORM. */
  .bar-case {
    animation: bar-glow 12s ease-in-out infinite;
  }

  @keyframes bar-glow {
    0%, 38%, 74%, 100% { box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.25), 0 0 6px rgba(0, 204, 0, 0.2); }
    50%, 62% { box-shadow: inset 0 0 18px rgba(0, 204, 0, 0.5), 0 0 14px rgba(0, 204, 0, 0.4); }
  }

  /* hPa readout window. */
  .bar-read {
    position: absolute;
    left: 50%;
    bottom: 26px;
    transform: translateX(-50%);
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.7);
  }

  .bar-read::before {
    content: '1030';
    animation: bar-read 12s steps(1) infinite;
  }

  @keyframes bar-read {
    0% { content: '1030'; }
    24% { content: '1016'; }
    44% { content: '0998'; }
    50% { content: '0982'; }
    62% { content: '0985'; }
    80% { content: '1008'; }
    94% { content: '1030'; }
  }
`;

class ConceptBarometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${barometerStyles}</style>
      <div class="bar">
        <div class="bar-case"></div>
        <div class="bar-ticks"></div>
        <div class="bar-zone fair">FAIR</div>
        <div class="bar-zone change">CHG</div>
        <div class="bar-zone storm">STORM</div>
        <div class="bar-zone rain">RAIN</div>
        <div class="bar-read"></div>
        <div class="bar-memory"></div>
        <div class="bar-needle"></div>
        <div class="bar-hub"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-barometer')) {
  customElements.define('concept-barometer', ConceptBarometer);
}
