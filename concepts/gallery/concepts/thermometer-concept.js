const thermometerStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Realistic thermal physics: a radiant golden sun heats the environment,
     driving a crimson spirit-filled mercury column up through cold cyan (14°C)
     to scorching danger-red (37°C), with dynamic temperature-color HUD. */
  .thc {
    width: 88px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Brilliant solar disc with corona flares */
  .thc-sun {
    position: absolute;
    right: 6px;
    top: 8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff, #ffd600 50%, #ff6d00 85%);
    animation: thc-sun 9s ease-in-out infinite;
  }

  @keyframes thc-sun {
    0%, 100% { box-shadow: 0 0 8px rgba(255, 179, 0, 0.5); opacity: 0.75; }
    40%, 55% { box-shadow: 0 0 22px #ffb300, 0 0 38px rgba(255, 87, 34, 0.7); opacity: 1; }
  }

  /* Translucent atmospheric storm cloud */
  .thc-cloud {
    position: absolute;
    top: 12px;
    right: -30px;
    width: 34px;
    height: 12px;
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(220, 235, 250, 0.7), rgba(140, 160, 180, 0.85));
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4)) blur(0.5px);
    animation: thc-cloud 9s ease-in-out infinite;
  }

  @keyframes thc-cloud {
    0%, 58% { transform: translateX(0); opacity: 0; }
    64% { opacity: 0.95; }
    76% { transform: translateX(-42px); opacity: 0.95; }
    88%, 100% { transform: translateX(-64px); opacity: 0; }
  }

  /* Calibrated borosilicate glass tube */
  .thc-tube {
    position: absolute;
    left: 20px;
    top: 6px;
    width: 14px;
    height: 72px;
    border: 2px solid rgba(180, 220, 255, 0.8);
    border-radius: 7px 7px 0 0;
    background: rgba(10, 20, 35, 0.65);
    box-shadow: inset 0 0 6px rgba(0, 180, 255, 0.2);
    overflow: hidden;
  }

  /* Upper danger thermal zone */
  .thc-tube::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 4px;
    height: 20px;
    background: repeating-linear-gradient(180deg,
      rgba(255, 50, 50, 0.4) 0 2px,
      transparent 2px 4px);
  }

  /* Active thermal fluid column */
  .thc-mercury {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 6px;
    margin-left: -3px;
    height: 20px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, #ff8a80 0%, #ff1744 40%, #d50000 100%);
    box-shadow: 0 0 8px rgba(255, 23, 68, 0.85);
    animation: thc-rise 9s ease-in-out infinite;
  }

  @keyframes thc-rise {
    0%, 6% { height: 18px; }
    40% { height: 60px; }
    52% { height: 64px; }
    60% { height: 60px; }
    82% { height: 26px; }
    94%, 100% { height: 18px; }
  }

  /* Fluid reservoir bulb */
  .thc-bulb {
    position: absolute;
    left: 15px;
    bottom: 6px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid rgba(180, 220, 255, 0.8);
    background: radial-gradient(circle at 38% 32%, #ff8a80, #ff1744 55%, #8b0000 95%);
    box-shadow: 0 0 12px rgba(255, 23, 68, 0.6);
    animation: thc-bulb 9s ease-in-out infinite;
  }

  @keyframes thc-bulb {
    0%, 100% { box-shadow: 0 0 8px rgba(255, 23, 68, 0.5); }
    40%, 60% { box-shadow: 0 0 20px rgba(255, 23, 68, 0.95); }
  }

  /* Multi-temperature calibration ticks */
  .thc-scale {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 8px;
    height: 66px;
    background:
      repeating-linear-gradient(180deg,
        #ff3d00 0 1px, transparent 1px 6px) 0 0 / 100% 22px no-repeat,
      repeating-linear-gradient(180deg,
        #ffd54f 0 1px, transparent 1px 6px) 0 22px / 100% 24px no-repeat,
      repeating-linear-gradient(180deg,
        #40c4ff 0 1px, transparent 1px 6px) 0 46px / 100% 20px no-repeat;
  }

  /* Chromatic temperature readout */
  .thc-read {
    position: absolute;
    right: 2px;
    bottom: 20px;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    animation: thc-read-col 9s steps(1) infinite;
  }

  .thc-read::before {
    content: '14\\00B0';
    animation: thc-read-txt 9s steps(1) infinite;
  }

  @keyframes thc-read-txt {
    0% { content: '14\\00B0 C'; }
    20% { content: '22\\00B0 C'; }
    40% { content: '33\\00B0 C'; }
    52% { content: '37\\00B0 C'; }
    70% { content: '29\\00B0 C'; }
    82% { content: '19\\00B0 C'; }
    94% { content: '14\\00B0 C'; }
  }

  @keyframes thc-read-col {
    0%, 94%, 100% { color: #80d8ff; text-shadow: 0 0 6px rgba(0, 176, 255, 0.8); }
    20%, 82% { color: #b9f6ca; text-shadow: 0 0 6px rgba(0, 230, 118, 0.8); }
    40%, 70% { color: #ffe57f; text-shadow: 0 0 6px rgba(255, 215, 64, 0.8); }
    52% { color: #ff5252; text-shadow: 0 0 8px rgba(255, 23, 68, 0.95); }
  }
  `,
};

const thermometerMarkup = {
  v1: `
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
  `,
  v2: `
    <div class="thc">
      <div class="thc-sun"></div>
      <div class="thc-cloud"></div>
      <div class="thc-scale"></div>
      <div class="thc-tube">
        <div class="thc-mercury"></div>
      </div>
      <div class="thc-bulb"></div>
      <div class="thc-read"></div>
    </div>
  `,
};

class ConceptThermometer extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${thermometerStyles[version] || thermometerStyles.v2}</style>${thermometerMarkup[version] || thermometerMarkup.v2}`;
  }
}

if (!customElements.get('concept-thermometer')) {
  customElements.define('concept-thermometer', ConceptThermometer);
}
