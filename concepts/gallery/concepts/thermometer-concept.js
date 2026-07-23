const thermometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A wall thermometer through a hot afternoon: the mercury column
     climbs the scale into the red zone as a sun brightens, tops out,
     then falls back as clouds cross. Column and bulb share one glow. */
  .th {
    width: 88px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Sun that drives the reading. */
  .th-sun {
    position: absolute;
    right: 6px;
    top: 8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 60%, rgba(0, 160, 32, 0.8));
    animation: th-sun 9s ease-in-out infinite;
  }

  @keyframes th-sun {
    0%, 100% { box-shadow: 0 0 6px rgba(0, 204, 0, 0.4); opacity: 0.7; }
    40%, 55% { box-shadow: 0 0 20px rgba(214, 255, 224, 1), 0 0 36px rgba(0, 204, 0, 0.5); opacity: 1; }
  }

  /* A cloud that drifts over the sun on the downswing. */
  .th-cloud {
    position: absolute;
    top: 12px;
    right: -30px;
    width: 34px;
    height: 12px;
    border-radius: 8px;
    background: rgba(140, 255, 170, 0.3);
    filter: blur(1px);
    animation: th-cloud 9s ease-in-out infinite;
  }

  @keyframes th-cloud {
    0%, 58% { transform: translateX(0); opacity: 0; }
    64% { opacity: 0.9; }
    76% { transform: translateX(-42px); opacity: 0.9; }
    88%, 100% { transform: translateX(-64px); opacity: 0; }
  }

  /* Glass tube. */
  .th-tube {
    position: absolute;
    left: 20px;
    top: 6px;
    width: 14px;
    height: 72px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 7px 7px 0 0;
    background: rgba(0, 30, 6, 0.6);
    overflow: hidden;
  }

  /* Red-zone band near the top. */
  .th-tube::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 6px;
    height: 18px;
    background: repeating-linear-gradient(180deg,
      rgba(190, 255, 205, 0.2) 0 2px,
      transparent 2px 4px);
  }

  /* Mercury column: rises from the bulb. */
  .th-mercury {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 6px;
    margin-left: -3px;
    height: 20px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 190, 38, 0.95));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.6);
    animation: th-rise 9s ease-in-out infinite;
  }

  @keyframes th-rise {
    0%, 6% { height: 18px; }
    40% { height: 60px; }
    52% { height: 64px; }
    60% { height: 60px; }
    82% { height: 26px; }
    94%, 100% { height: 18px; }
  }

  /* Bulb reservoir. */
  .th-bulb {
    position: absolute;
    left: 15px;
    bottom: 6px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 40% 35%, #d6ffe0, rgba(0, 180, 36, 0.95) 60%, rgba(0, 110, 22, 0.9));
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.5);
    animation: th-bulb 9s ease-in-out infinite;
  }

  @keyframes th-bulb {
    0%, 100% { box-shadow: 0 0 6px rgba(0, 204, 0, 0.4); }
    40%, 60% { box-shadow: 0 0 16px rgba(0, 204, 0, 0.9); }
  }

  /* Scale ticks beside the tube. */
  .th-scale {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 8px;
    height: 66px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.7) 0 1px,
      transparent 1px 8px);
  }

  /* Degree readout. */
  .th-read {
    position: absolute;
    right: 2px;
    bottom: 20px;
    font-size: 10px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .th-read::before {
    content: '14\\00B0';
    animation: th-read 9s steps(1) infinite;
  }

  @keyframes th-read {
    0% { content: '14\\00B0'; }
    20% { content: '22\\00B0'; }
    40% { content: '33\\00B0'; }
    52% { content: '37\\00B0'; }
    70% { content: '29\\00B0'; }
    82% { content: '19\\00B0'; }
    94% { content: '14\\00B0'; }
  }
`;

class ConceptThermometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${thermometerStyles}</style>
      <div class="th">
        <div class="th-sun"></div>
        <div class="th-cloud"></div>
        <div class="th-scale"></div>
        <div class="th-tube">
          <div class="th-mercury"></div>
        </div>
        <div class="th-bulb"></div>
        <div class="th-read"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-thermometer')) {
  customElements.define('concept-thermometer', ConceptThermometer);
}
