const alienSignalStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .asignal {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: #000;
    border: 1px solid rgba(0, 204, 0, 0.25);
    box-sizing: border-box;
  }

  .asignal-waterfall {
    position: absolute;
    inset: 0 0 16px;
    overflow: hidden;
  }

  .asignal-col {
    position: absolute;
    top: -104px;
    bottom: -104px;
    width: 5px;
    background: repeating-linear-gradient(
      180deg,
      rgba(0, 204, 0, 0.34) 0 3px,
      transparent 3px 11px,
      rgba(0, 204, 0, 0.2) 11px 13px,
      transparent 13px 24px
    );
    animation: asig-fall 6s linear infinite;
  }

  .asignal-col.c1 { left: 6px; opacity: 0.5; animation-duration: 7.3s; }
  .asignal-col.c2 { left: 16px; opacity: 0.32; animation-duration: 5.1s; animation-delay: -2s; }
  .asignal-col.c3 { left: 26px; opacity: 0.6; animation-duration: 6.4s; animation-delay: -1.2s; }
  .asignal-col.c4 { left: 36px; opacity: 0.4; animation-duration: 8.2s; animation-delay: -3.4s; }
  .asignal-col.c5 { left: 60px; opacity: 0.55; animation-duration: 5.6s; animation-delay: -0.8s; }
  .asignal-col.c6 { left: 70px; opacity: 0.35; animation-duration: 7.7s; animation-delay: -4.1s; }
  .asignal-col.c7 { left: 80px; opacity: 0.5; animation-duration: 6.1s; animation-delay: -2.7s; }
  .asignal-col.c8 { left: 90px; opacity: 0.3; animation-duration: 5.4s; animation-delay: -1.9s; }

  .asignal-spike {
    position: absolute;
    top: 0;
    bottom: 16px;
    left: 48px;
    width: 6px;
    background: linear-gradient(180deg, rgba(220, 255, 225, 0.95), rgba(120, 255, 150, 0.75));
    box-shadow: 0 0 10px rgba(160, 255, 180, 0.8);
    animation: asig-spike 4.2s ease-in-out infinite;
  }

  .asignal-spike::before {
    content: '';
    position: absolute;
    inset: 0 -8px;
    background: radial-gradient(ellipse at center, rgba(140, 255, 165, 0.3), transparent 70%);
  }

  .asignal-readout {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    border-top: 1px solid rgba(0, 204, 0, 0.35);
    background: rgba(0, 20, 0, 0.9);
    color: #8de08d;
    font-family: monospace;
    font-size: 7px;
    letter-spacing: 0.5px;
  }

  .asignal-readout .live {
    color: #d8ffd0;
    animation: asig-blink 1.2s steps(2, jump-none) infinite;
  }

  @keyframes asig-fall {
    from { transform: translateY(0); }
    to { transform: translateY(104px); }
  }

  @keyframes asig-spike {
    0%, 100% { opacity: 0.25; }
    12% { opacity: 1; }
    22% { opacity: 0.55; }
    32% { opacity: 1; }
    55% { opacity: 0.3; }
  }

  @keyframes asig-blink {
    0% { opacity: 1; }
    100% { opacity: 0.25; }
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

  /* v2: SETI radio astronomy spectrogram waterfall with cosmic blue background,
     multi-frequency waterfall noise, and blazing golden/magenta narrowband Wow! signal spike */
  .asignalc {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border: 2px solid #3b82f6;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
  }

  /* Waterfall noise canvas */
  .asignalc-waterfall {
    position: absolute;
    inset: 0 0 16px;
    overflow: hidden;
  }

  .asignalc-col {
    position: absolute;
    top: -104px;
    bottom: -104px;
    width: 5px;
    background: repeating-linear-gradient(
      180deg,
      rgba(56, 189, 248, 0.4) 0 3px,
      transparent 3px 11px,
      rgba(168, 85, 247, 0.3) 11px 13px,
      transparent 13px 24px
    );
    animation: asigc-fall 6s linear infinite;
  }

  .asignalc-col.c1 { left: 6px; opacity: 0.5; animation-duration: 7.3s; }
  .asignalc-col.c2 { left: 16px; opacity: 0.35; animation-duration: 5.1s; animation-delay: -2s; }
  .asignalc-col.c3 { left: 26px; opacity: 0.6; animation-duration: 6.4s; animation-delay: -1.2s; }
  .asignalc-col.c4 { left: 36px; opacity: 0.4; animation-duration: 8.2s; animation-delay: -3.4s; }
  .asignalc-col.c5 { left: 60px; opacity: 0.55; animation-duration: 5.6s; animation-delay: -0.8s; }
  .asignalc-col.c6 { left: 70px; opacity: 0.35; animation-duration: 7.7s; animation-delay: -4.1s; }
  .asignalc-col.c7 { left: 80px; opacity: 0.5; animation-duration: 6.1s; animation-delay: -2.7s; }
  .asignalc-col.c8 { left: 90px; opacity: 0.3; animation-duration: 5.4s; animation-delay: -1.9s; }

  /* Blazing golden/magenta narrowband Wow! signal spike */
  .asignalc-spike {
    position: absolute;
    top: 0;
    bottom: 16px;
    left: 48px;
    width: 6px;
    background: linear-gradient(180deg, #ffffff 0%, #fde047 30%, #ec4899 70%, #a855f7 100%);
    box-shadow: 0 0 14px #facc15, 0 0 22px #ec4899;
    animation: asigc-spike 4.2s ease-in-out infinite;
  }

  .asignalc-spike::before {
    content: '';
    position: absolute;
    inset: 0 -8px;
    background: radial-gradient(ellipse at center, rgba(253, 224, 71, 0.4), transparent 70%);
  }

  /* Digital readout panel */
  .asignalc-readout {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    border-top: 1.5px solid #3b82f6;
    background: #020617;
    color: #38bdf8;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .asignalc-readout .live {
    color: #f43f5e;
    text-shadow: 0 0 6px #ef4444;
    animation: asigc-blink 1.2s steps(2, jump-none) infinite;
  }

  @keyframes asigc-fall {
    from { transform: translateY(0); }
    to { transform: translateY(104px); }
  }

  @keyframes asigc-spike {
    0%, 100% { opacity: 0.3; }
    12% { opacity: 1; }
    22% { opacity: 0.6; }
    32% { opacity: 1; }
    55% { opacity: 0.35; }
  }

  @keyframes asigc-blink {
    0% { opacity: 1; }
    100% { opacity: 0.25; }
  }
  `,
};

const alienSignalMarkup = {
  v1: `
      <div class="asignal">
        <div class="asignal-waterfall">
          <div class="asignal-col c1"></div>
          <div class="asignal-col c2"></div>
          <div class="asignal-col c3"></div>
          <div class="asignal-col c4"></div>
          <div class="asignal-col c5"></div>
          <div class="asignal-col c6"></div>
          <div class="asignal-col c7"></div>
          <div class="asignal-col c8"></div>
          <div class="asignal-spike"></div>
        </div>
        <div class="asignal-readout">
          <span>1420.4 MHz</span>
          <span class="live">SIG !</span>
        </div>
      </div>
    `,
  v2: `
      <div class="asignalc">
        <div class="asignalc-waterfall">
          <div class="asignalc-col c1"></div>
          <div class="asignalc-col c2"></div>
          <div class="asignalc-col c3"></div>
          <div class="asignalc-col c4"></div>
          <div class="asignalc-col c5"></div>
          <div class="asignalc-col c6"></div>
          <div class="asignalc-col c7"></div>
          <div class="asignalc-col c8"></div>
          <div class="asignalc-spike"></div>
        </div>
        <div class="asignalc-readout">
          <span>1420.4 MHz</span>
          <span class="live">WOW !</span>
        </div>
      </div>
    `,
};

class ConceptAlienSignal extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${alienSignalStyles[version] || alienSignalStyles.v2}</style>${alienSignalMarkup[version] || alienSignalMarkup.v2}`;
  }
}

if (!customElements.get('concept-alien-signal')) {
  customElements.define('concept-alien-signal', ConceptAlienSignal);
}
