const metronomeStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .met {
    width: 96px;
    height: 98px;
    position: relative;
  }

  .met-body {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 66px;
    height: 84px;
    margin-left: -33px;
    clip-path: polygon(50% 0, 92% 100%, 8% 100%);
    background: linear-gradient(180deg, rgba(0, 60, 12, 0.55), rgba(0, 25, 5, 0.85));
  }

  .met-edge {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 66px;
    height: 84px;
    margin-left: -33px;
    clip-path: polygon(50% 0, 92% 100%, 8% 100%, 50% 0, 50% 3.5%, 11.5% 97%, 88.5% 97%, 50% 3.5%);
    background: var(--accent, #00cc00);
    opacity: 0.85;
  }

  .met-slot {
    position: absolute;
    left: 50%;
    bottom: 22px;
    width: 3px;
    height: 52px;
    margin-left: -1.5px;
    background: rgba(0, 204, 0, 0.25);
  }

  .met-scale {
    position: absolute;
    left: 50%;
    bottom: 66px;
    width: 26px;
    height: 8px;
    margin-left: -13px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.6) 0 1px,
      transparent 1px 5px);
  }

  .met-arm {
    position: absolute;
    left: 50%;
    bottom: 24px;
    width: 3px;
    height: 58px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: linear-gradient(180deg, #baffc9, rgba(0, 204, 0, 0.7));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
    transform-origin: 50% 100%;
    animation: met-tick 2s infinite;
  }

  @keyframes met-tick {
    0% { transform: rotate(-24deg); }
    8% { transform: rotate(-24deg); }
    42% { transform: rotate(23deg); animation-timing-function: ease-out; }
    58% { transform: rotate(24deg); }
    92% { transform: rotate(-23deg); animation-timing-function: ease-out; }
    100% { transform: rotate(-24deg); }
  }

  .met-weight {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 11px;
    height: 8px;
    margin-left: -5.5px;
    clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 140, 28, 0.9));
  }

  .met-flash {
    position: absolute;
    bottom: 72px;
    width: 10px;
    height: 3px;
    border-radius: 2px;
    background: #d6ffe0;
    opacity: 0;
  }

  .met-flash.left { left: 2px; transform: rotate(28deg); animation: met-flash-l 2s steps(1) infinite; }
  .met-flash.right { right: 2px; transform: rotate(-28deg); animation: met-flash-r 2s steps(1) infinite; }

  @keyframes met-flash-l {
    0%, 4% { opacity: 1; }
    8% { opacity: 0; }
    92%, 96% { opacity: 1; }
    100% { opacity: 1; }
  }

  @keyframes met-flash-r {
    0%, 42% { opacity: 0; }
    44%, 52% { opacity: 1; }
    56%, 100% { opacity: 0; }
  }

  .met-lamp {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: var(--accent, #00cc00);
    animation: met-lamp 1s steps(1) infinite;
  }

  @keyframes met-lamp {
    0%, 8% { opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.9); }
    12%, 100% { opacity: 0.25; box-shadow: none; }
  }

  .met-bpm {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: rgba(140, 255, 170, 0.75);
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

  /* v2: Vintage mahogany wood metronome with brushed brass faceplate,
     steel pendulum arm with brass bob, and ruby beat lamp */
  .metc {
    width: 96px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Rich mahogany pyramid body */
  .metc-body {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 66px;
    height: 84px;
    margin-left: -33px;
    clip-path: polygon(50% 0, 92% 100%, 8% 100%);
    background: linear-gradient(180deg, #9a3412 0%, #451a03 70%, #290e02 100%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
  }

  /* Gold pinstripe border edge */
  .metc-edge {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 66px;
    height: 84px;
    margin-left: -33px;
    clip-path: polygon(50% 0, 92% 100%, 8% 100%, 50% 0, 50% 3.5%, 11.5% 97%, 88.5% 97%, 50% 3.5%);
    background: #facc15;
    opacity: 0.9;
  }

  /* Brushed brass faceplate channel slot */
  .metc-slot {
    position: absolute;
    left: 50%;
    bottom: 22px;
    width: 4px;
    height: 52px;
    margin-left: -2px;
    background: #18181b;
    border-radius: 1px;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.9);
  }

  /* Brass scale ticks */
  .metc-scale {
    position: absolute;
    left: 50%;
    bottom: 66px;
    width: 26px;
    height: 8px;
    margin-left: -13px;
    background: repeating-linear-gradient(90deg,
      #facc15 0 1px,
      transparent 1px 5px);
  }

  /* Chrome/steel pendulum swinging arm */
  .metc-arm {
    position: absolute;
    left: 50%;
    bottom: 24px;
    width: 3px;
    height: 58px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #94a3b8, #f8fafc, #64748b);
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
    transform-origin: 50% 100%;
    animation: metc-tick 2s infinite;
  }

  @keyframes metc-tick {
    0% { transform: rotate(-24deg); }
    8% { transform: rotate(-24deg); }
    42% { transform: rotate(23deg); animation-timing-function: ease-out; }
    58% { transform: rotate(24deg); }
    92% { transform: rotate(-23deg); animation-timing-function: ease-out; }
    100% { transform: rotate(-24deg); }
  }

  /* Polished solid brass sliding weight bob */
  .metc-weight {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 11px;
    height: 8px;
    margin-left: -5.5px;
    clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #fef08a 0%, #facc15 50%, #b45309 100%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  /* Tick flashes */
  .metc-flash {
    position: absolute;
    bottom: 72px;
    width: 10px;
    height: 3px;
    border-radius: 2px;
    background: #fde047;
    box-shadow: 0 0 6px #facc15;
    opacity: 0;
  }

  .metc-flash.left { left: 2px; transform: rotate(28deg); animation: metc-flash-l 2s steps(1) infinite; }
  .metc-flash.right { right: 2px; transform: rotate(-28deg); animation: metc-flash-r 2s steps(1) infinite; }

  @keyframes metc-flash-l {
    0%, 4% { opacity: 1; }
    8% { opacity: 0; }
    92%, 96% { opacity: 1; }
    100% { opacity: 1; }
  }

  @keyframes metc-flash-r {
    0%, 42% { opacity: 0; }
    44%, 52% { opacity: 1; }
    56%, 100% { opacity: 0; }
  }

  /* Ruby beat lamp */
  .metc-lamp {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #ef4444;
    animation: metc-lamp 1s steps(1) infinite;
  }

  @keyframes metc-lamp {
    0%, 8% { opacity: 1; box-shadow: 0 0 10px #f87171, 0 0 16px #ef4444; filter: brightness(1.3); }
    12%, 100% { opacity: 0.25; box-shadow: none; filter: brightness(1); }
  }

  /* Gold tempo lettering */
  .metc-bpm {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #facc15;
  }
  `,
};

const metronomeMarkup = {
  v1: `
      <div class="met">
        <div class="met-body"></div>
        <div class="met-edge"></div>
        <div class="met-slot"></div>
        <div class="met-scale"></div>
        <div class="met-flash left"></div>
        <div class="met-flash right"></div>
        <div class="met-arm"><div class="met-weight"></div></div>
        <div class="met-lamp"></div>
        <div class="met-bpm">60 BPM</div>
      </div>
    `,
  v2: `
      <div class="metc">
        <div class="metc-body"></div>
        <div class="metc-edge"></div>
        <div class="metc-slot"></div>
        <div class="metc-scale"></div>
        <div class="metc-flash left"></div>
        <div class="metc-flash right"></div>
        <div class="metc-arm"><div class="metc-weight"></div></div>
        <div class="metc-lamp"></div>
        <div class="metc-bpm">60 BPM</div>
      </div>
    `,
};

class ConceptMetronome extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${metronomeStyles[version] || metronomeStyles.v2}</style>${metronomeMarkup[version] || metronomeMarkup.v2}`;
  }
}

if (!customElements.get('concept-metronome')) {
  customElements.define('concept-metronome', ConceptMetronome);
}
