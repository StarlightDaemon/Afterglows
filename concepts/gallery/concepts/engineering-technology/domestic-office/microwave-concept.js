const microwaveStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mw {
    width: 116px;
    height: 78px;
    position: relative;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.4), rgba(0, 20, 4, 0.7));
  }

  .mw-window {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 66px;
    height: 54px;
    border: 1px solid rgba(140, 255, 170, 0.75);
    border-radius: 4px;
    overflow: hidden;
    background:
      repeating-linear-gradient(0deg, rgba(0, 204, 0, 0.12) 0 1px, transparent 1px 5px),
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.12) 0 1px, transparent 1px 5px),
      rgba(0, 30, 6, 0.6);
    animation: mw-cavity 9s steps(1) infinite;
  }

  @keyframes mw-cavity {
    0% { box-shadow: inset 0 0 18px rgba(0, 204, 0, 0.5); }
    78% { box-shadow: inset 0 0 4px rgba(0, 204, 0, 0.1); }
  }

  .mw-plate {
    position: absolute;
    left: 9px;
    bottom: 6px;
    width: 48px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(0, 204, 0, 0.55);
    background: rgba(0, 60, 12, 0.4);
  }

  .mw-orbit {
    position: absolute;
    left: 15px;
    bottom: 1px;
    width: 36px;
    height: 36px;
    transform: scaleY(0.3);
    transform-origin: 50% 66%;
  }

  .mw-orbit-arm {
    position: absolute;
    inset: 0;
    animation: mw-turn 3.4s linear infinite;
  }

  @keyframes mw-turn {
    to { transform: rotate(360deg); }
  }

  .mw-meal {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    transform: scaleY(3.33);
    border-radius: 4px 4px 2px 2px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.85), rgba(0, 110, 22, 0.8));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.5);
  }

  .mw-steam {
    position: absolute;
    left: 34px;
    top: 12px;
    width: 2px;
    height: 8px;
    border-radius: 1px;
    background: rgba(190, 255, 205, 0.6);
    filter: blur(0.5px);
    animation: mw-steam 1.6s ease-out infinite, mw-steam-gate 9s steps(1) infinite;
  }

  .mw-steam.m2 { left: 42px; animation-delay: -0.8s, 0s; }

  @keyframes mw-steam {
    0% { transform: translateY(6px) scaleY(0.5); opacity: 0; }
    30% { opacity: 0.8; }
    100% { transform: translateY(-6px) scaleY(1.3); opacity: 0; }
  }

  @keyframes mw-steam-gate {
    0% { visibility: visible; }
    78% { visibility: hidden; }
  }

  .mw-panel {
    position: absolute;
    right: 6px;
    top: 8px;
    width: 30px;
    bottom: 6px;
    border-left: 1px solid rgba(0, 204, 0, 0.4);
    padding-left: 5px;
  }

  .mw-display {
    margin-top: 2px;
    width: 24px;
    height: 12px;
    border: 1px solid rgba(0, 204, 0, 0.6);
    border-radius: 2px;
    background: rgba(0, 25, 5, 0.8);
    font-family: 'Courier New', monospace;
    font-size: 8px;
    line-height: 12px;
    text-align: center;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.8);
  }

  .mw-display::before {
    content: '0:15';
    animation: mw-count 9s steps(1) infinite;
  }

  @keyframes mw-count {
    0% { content: '0:15'; }
    7.8% { content: '0:14'; }
    15.6% { content: '0:13'; }
    23.4% { content: '0:11'; }
    31.2% { content: '0:09'; }
    39% { content: '0:07'; }
    46.8% { content: '0:05'; }
    54.6% { content: '0:04'; }
    62.4% { content: '0:03'; }
    68% { content: '0:02'; }
    73% { content: '0:01'; }
    78% { content: 'End'; }
    84% { content: ''; }
    88% { content: 'End'; }
    94% { content: ''; }
  }

  .mw-btn {
    width: 22px;
    height: 5px;
    margin-top: 4px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.35);
  }

  .mw-btn.go {
    background: rgba(140, 255, 170, 0.8);
    animation: mw-go 9s steps(1) infinite;
  }

  @keyframes mw-go {
    0% { opacity: 1; box-shadow: 0 0 5px rgba(0, 204, 0, 0.8); }
    78% { opacity: 0.35; box-shadow: none; }
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

  /* v2: Modern stainless steel & onyx microwave oven with glowing warm incandescent cavity lamp,
     hot meal revolving on glass turntable, digital green LED timer, and steam */
  .mwc {
    width: 116px;
    height: 78px;
    position: relative;
    border: 2px solid #64748b;
    border-radius: 6px;
    background: linear-gradient(180deg, #334155 0%, #1e293b 70%, #0f172a 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 1px 2px #cbd5e1;
  }

  /* Oven cavity door with protective Faraday mesh window */
  .mwc-window {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 66px;
    height: 54px;
    border: 1.5px solid #94a3b8;
    border-radius: 4px;
    overflow: hidden;
    background:
      repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 5px),
      repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 5px),
      #18181b;
    animation: mwc-cavity 9s steps(1) infinite;
  }

  /* Incandescent warm cavity bulb illumination */
  @keyframes mwc-cavity {
    0% { box-shadow: inset 0 0 20px rgba(254, 240, 138, 0.7); background-color: #292524; }
    78% { box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.8); background-color: #0c0a09; }
  }

  /* Glass turntable plate */
  .mwc-plate {
    position: absolute;
    left: 9px;
    bottom: 6px;
    width: 48px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 0 4px rgba(254, 240, 138, 0.4);
  }

  .mwc-orbit {
    position: absolute;
    left: 15px;
    bottom: 1px;
    width: 36px;
    height: 36px;
    transform: scaleY(0.3);
    transform-origin: 50% 66%;
  }

  .mwc-orbit-arm {
    position: absolute;
    inset: 0;
    animation: mwc-turn 3.4s linear infinite;
  }

  @keyframes mwc-turn {
    to { transform: rotate(360deg); }
  }

  /* Ceramic bowl with hot soup/pasta */
  .mwc-meal {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    transform: scaleY(3.33);
    border-radius: 4px 4px 2px 2px;
    background: linear-gradient(180deg, #ef4444 0%, #ea580c 60%, #ffffff 90%);
    border: 1px solid #f97316;
    box-shadow: 0 0 6px rgba(234, 88, 12, 0.6);
  }

  /* Steaming hot vapor curls */
  .mwc-steam {
    position: absolute;
    left: 34px;
    top: 12px;
    width: 2px;
    height: 8px;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.8);
    filter: blur(0.5px);
    animation: mwc-steam 1.6s ease-out infinite, mwc-steam-gate 9s steps(1) infinite;
  }

  .mwc-steam.m2 { left: 42px; animation-delay: -0.8s, 0s; }

  @keyframes mwc-steam {
    0% { transform: translateY(6px) scaleY(0.5); opacity: 0; }
    30% { opacity: 0.9; }
    100% { transform: translateY(-6px) scaleY(1.3); opacity: 0; }
  }

  @keyframes mwc-steam-gate {
    0% { visibility: visible; }
    78% { visibility: hidden; }
  }

  /* Control keypad & digital display panel */
  .mwc-panel {
    position: absolute;
    right: 6px;
    top: 8px;
    width: 30px;
    bottom: 6px;
    border-left: 1.5px solid #475569;
    padding-left: 5px;
  }

  /* Emerald green 7-segment digital LED clock/timer */
  .mwc-display {
    margin-top: 2px;
    width: 24px;
    height: 12px;
    border: 1px solid #15803d;
    border-radius: 2px;
    background: #022c22;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    line-height: 12px;
    text-align: center;
    color: #4ade80;
    text-shadow: 0 0 4px #22c55e;
  }

  .mwc-display::before {
    content: '0:15';
    animation: mwc-count 9s steps(1) infinite;
  }

  @keyframes mwc-count {
    0% { content: '0:15'; }
    7.8% { content: '0:14'; }
    15.6% { content: '0:13'; }
    23.4% { content: '0:11'; }
    31.2% { content: '0:09'; }
    39% { content: '0:07'; }
    46.8% { content: '0:05'; }
    54.6% { content: '0:04'; }
    62.4% { content: '0:03'; }
    68% { content: '0:02'; }
    73% { content: '0:01'; }
    78% { content: 'End'; color: #f43f5e; text-shadow: 0 0 4px #ef4444; }
    84% { content: ''; }
    88% { content: 'End'; color: #f43f5e; text-shadow: 0 0 4px #ef4444; }
    94% { content: ''; }
  }

  /* Membrane touch buttons */
  .mwc-btn {
    width: 22px;
    height: 5px;
    margin-top: 4px;
    border-radius: 2px;
    background: #475569;
  }

  .mwc-btn.go {
    background: #16a34a;
    box-shadow: 0 0 5px #22c55e;
    animation: mwc-go 9s steps(1) infinite;
  }

  @keyframes mwc-go {
    0% { opacity: 1; box-shadow: 0 0 6px #22c55e; }
    78% { opacity: 0.35; box-shadow: none; }
  }
  `,
};

const microwaveMarkup = {
  v1: `
      <div class="mw">
        <div class="mw-window">
          <div class="mw-orbit">
            <div class="mw-orbit-arm"><div class="mw-meal"></div></div>
          </div>
          <div class="mw-plate"></div>
          <div class="mw-steam"></div>
          <div class="mw-steam m2"></div>
        </div>
        <div class="mw-panel">
          <div class="mw-display"></div>
          <div class="mw-btn"></div>
          <div class="mw-btn"></div>
          <div class="mw-btn go"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="mwc">
        <div class="mwc-window">
          <div class="mwc-orbit">
            <div class="mwc-orbit-arm"><div class="mwc-meal"></div></div>
          </div>
          <div class="mwc-plate"></div>
          <div class="mwc-steam"></div>
          <div class="mwc-steam m2"></div>
        </div>
        <div class="mwc-panel">
          <div class="mwc-display"></div>
          <div class="mwc-btn"></div>
          <div class="mwc-btn"></div>
          <div class="mwc-btn go"></div>
        </div>
      </div>
    `,
};

class ConceptMicrowave extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${microwaveStyles[version] || microwaveStyles.v2}</style>${microwaveMarkup[version] || microwaveMarkup.v2}`;
  }
}

if (!customElements.get('concept-microwave')) {
  customElements.define('concept-microwave', ConceptMicrowave);
}
