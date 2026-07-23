const noiseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original flat static --- */
  .noise {
    width: 100%;
    height: 100%;
    background: repeating-radial-gradient(#00cc00 0 0.0001%, #000 0 0.0002%) 50% 0/2500px 2500px;
    animation: noi .2s infinite;
    opacity: 0.3;
  }

  @keyframes noi {
    to { background-position: 100px 100px }
  }

  /* --- v2: a dead channel ---
     Layered TV static: chunky-jumping grain, a rolling interference
     band, an intermittent horizontal tear, scanlines, and a NO SIGNAL
     card that flickers up twice per cycle. */
  .nz2 {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #020402;
    box-shadow: inset 0 0 26px rgba(0, 0, 0, 0.9);
  }

  .nz2-field {
    position: absolute;
    inset: 0;
    background: repeating-radial-gradient(#00cc00 0 0.0001%, #000 0 0.0002%) 50% 0/2500px 2500px;
    opacity: 0.34;
    /* steps() makes the grain jump between discrete offsets instead of
       smearing, which reads as re-randomising static. */
    animation: nz2-grain 0.55s steps(5) infinite, nz2-brightness 5.6s steps(1) infinite;
  }

  @keyframes nz2-grain {
    to { background-position: 137px 89px; }
  }

  @keyframes nz2-brightness {
    0% { opacity: 0.34; }
    18% { opacity: 0.26; }
    23% { opacity: 0.42; }
    38% { opacity: 0.3; }
    62% { opacity: 0.44; }
    66% { opacity: 0.22; }
    71% { opacity: 0.38; }
    100% { opacity: 0.34; }
  }

  /* Bright interference band rolling down the screen. */
  .nz2-band {
    position: absolute;
    left: 0;
    right: 0;
    top: -22%;
    height: 20%;
    background: linear-gradient(180deg,
      transparent,
      rgba(140, 255, 170, 0.14) 35%,
      rgba(190, 255, 205, 0.26) 50%,
      rgba(140, 255, 170, 0.14) 65%,
      transparent);
    filter: blur(1px);
    animation: nz2-roll 2.9s linear infinite;
  }

  @keyframes nz2-roll {
    to { top: 108%; }
  }

  /* Horizontal tear: a displaced slice of brighter static that only
     exists in two short bursts per cycle. */
  .nz2-tear {
    position: absolute;
    left: -6px;
    right: -6px;
    top: 34%;
    height: 7%;
    background: repeating-radial-gradient(#00ee00 0 0.0001%, #000 0 0.0002%) 30% 0/1800px 1800px;
    opacity: 0;
    animation: nz2-tear 3.7s steps(1) infinite;
  }

  @keyframes nz2-tear {
    0% { opacity: 0; }
    24% { opacity: 0.55; top: 34%; transform: translateX(-5px); }
    27% { opacity: 0.55; top: 36%; transform: translateX(4px); }
    30% { opacity: 0; }
    64% { opacity: 0.5; top: 62%; transform: translateX(6px); }
    67% { opacity: 0.5; top: 60%; transform: translateX(-4px); }
    70% { opacity: 0; }
  }

  .nz2-scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg,
      rgba(0, 0, 0, 0.35) 0 1px,
      transparent 1px 3px);
    pointer-events: none;
  }

  .nz2-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3px 8px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: rgba(2, 8, 3, 0.85);
    font-family: 'Courier New', monospace;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #c8ffd6;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: nz2-card 5.6s steps(1) infinite;
  }

  @keyframes nz2-card {
    0%, 40% { opacity: 0; }
    42%, 47% { opacity: 1; }
    48%, 49% { opacity: 0.2; }
    50%, 58% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }
`;

const noiseMarkup = {
  v1: `<div class="noise"></div>`,
  v2: `
    <div class="nz2">
      <div class="nz2-field"></div>
      <div class="nz2-band"></div>
      <div class="nz2-tear"></div>
      <div class="nz2-scanlines"></div>
      <div class="nz2-card">NO SIGNAL</div>
    </div>
  `,
};

class ConceptNoise extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${noiseStyles}</style>${noiseMarkup[version] || noiseMarkup.v2}`;
  }
}

if (!customElements.get('concept-noise')) {
  customElements.define('concept-noise', ConceptNoise);
}
