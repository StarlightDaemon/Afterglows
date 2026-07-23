const ekgStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original moving pulse blob --- */
  .ekg-wrap {
    width: 120px;
    height: 60px;
    position: relative;
    overflow: hidden;
  }

  .ekg-line {
    width: 100%;
    height: 2px;
    background: #333;
    position: absolute;
    top: 50%;
  }

  .ekg-pulse {
    position: absolute;
    top: 50%;
    left: -30px;
    width: 30px;
    height: 40px;
    transform: translateY(-50%);
    animation: ekg-move 1.5s linear infinite;
  }

  .ekg-pulse::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, transparent 20%,
                    var(--accent, #00cc00) 20%, var(--accent, #00cc00) 22%,
                    transparent 22%, transparent 35%,
                    var(--accent, #00cc00) 35%, var(--accent, #00cc00) 37%,
                    transparent 37%, transparent 45%,
                    var(--accent, #00cc00) 45%, var(--accent, #00cc00) 50%,
                    transparent 50%, transparent 100%);
    clip-path: polygon(0% 50%, 20% 50%, 25% 30%, 30% 70%, 35% 50%,
                    45% 50%, 50% 10%, 55% 90%, 60% 50%,
                    100% 50%, 100% 52%, 0% 52%);
    filter: drop-shadow(0 0 3px var(--accent, #00cc00));
  }

  @keyframes ekg-move {
    0% { left: -30px; }
    100% { left: 130px; }
  }

  /* --- v2: a bedside monitor ---
     Graph-paper grid, a persistent dim trace of two PQRST complexes,
     a bright window that sweeps along the trace behind a cursor line,
     and a BPM readout whose heart blips on each R-wave. */
  .e2 {
    width: 122px;
    height: 74px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 204, 0, 0.4);
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.13) 0 1px, transparent 1px 12px),
      repeating-linear-gradient(0deg, rgba(0, 204, 0, 0.13) 0 1px, transparent 1px 12px),
      #030903;
  }

  /* The full waveform, drawn as a filled polygon 2px thick.
     Two PQRST complexes across the width; baseline at 58%. */
  .e2-trace,
  .e2-glow {
    position: absolute;
    inset: 6px 0;
    background: var(--accent, #00cc00);
    clip-path: polygon(
      0% 58%, 7% 58%, 10% 50%, 13% 58%, 18% 58%,
      20% 66%, 23% 12%, 26% 84%, 28% 58%, 32% 58%,
      36% 44%, 40% 58%, 50% 58%,
      57% 58%, 60% 50%, 63% 58%, 68% 58%,
      70% 66%, 73% 12%, 76% 84%, 78% 58%, 82% 58%,
      86% 44%, 90% 58%, 100% 58%,
      100% 61%, 90% 61%, 86% 47%, 82% 61%, 78% 61%,
      76% 87%, 73% 15%, 70% 69%, 68% 61%, 63% 61%,
      60% 53%, 57% 61%, 50% 61%,
      40% 61%, 36% 47%, 32% 61%, 28% 61%,
      26% 87%, 23% 15%, 20% 69%, 18% 61%, 13% 61%,
      10% 53%, 7% 61%, 0% 61%
    );
  }

  .e2-trace {
    opacity: 0.3;
  }

  /* The bright sweep: same waveform, revealed only inside a moving
     window that trails off behind the cursor. */
  .e2-glow {
    opacity: 1;
    filter: drop-shadow(0 0 4px var(--accent, #00cc00));
    -webkit-mask-image: linear-gradient(90deg, transparent 0, black 30%, black 100%);
    mask-image: linear-gradient(90deg, transparent 0, black 30%, black 100%);
    -webkit-mask-size: 46px 100%;
    mask-size: 46px 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    animation: e2-sweepmask 3.2s linear infinite;
  }

  @keyframes e2-sweepmask {
    0% { -webkit-mask-position: -46px 0; mask-position: -46px 0; }
    100% { -webkit-mask-position: 122px 0; mask-position: 122px 0; }
  }

  /* Cursor line at the leading edge of the sweep window. */
  .e2-cursor {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: -2px;
    width: 2px;
    background: linear-gradient(180deg, transparent, rgba(214, 255, 224, 0.9), transparent);
    animation: e2-cursor 3.2s linear infinite;
  }

  @keyframes e2-cursor {
    0% { left: -48px; }
    100% { left: 120px; }
  }

  /* BPM readout; the heart blips on each R-wave (two per sweep). */
  .e2-bpm {
    position: absolute;
    top: 3px;
    right: 5px;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .e2-bpm::before {
    content: '72';
    animation: e2-rate 9.6s steps(1) infinite;
  }

  @keyframes e2-rate {
    0% { content: '72'; }
    33% { content: '74'; }
    66% { content: '71'; }
  }

  .e2-heart {
    position: absolute;
    top: 3px;
    left: 5px;
    width: 8px;
    height: 8px;
    background: var(--accent, #00cc00);
    clip-path: polygon(50% 100%, 8% 52%, 8% 24%, 26% 10%, 50% 26%, 74% 10%, 92% 24%, 92% 52%);
    animation: e2-heart 1.6s ease-out infinite;
  }

  @keyframes e2-heart {
    0%, 55% { transform: scale(1); opacity: 0.55; }
    62% { transform: scale(1.45); opacity: 1; }
    72%, 100% { transform: scale(1); opacity: 0.55; }
  }
`;

const ekgMarkup = {
  v1: `
    <div class="ekg-wrap">
      <div class="ekg-line"></div>
      <div class="ekg-pulse"></div>
    </div>
  `,
  v2: `
    <div class="e2">
      <div class="e2-trace"></div>
      <div class="e2-glow"></div>
      <div class="e2-cursor"></div>
      <div class="e2-heart"></div>
      <div class="e2-bpm"></div>
    </div>
  `,
};

class ConceptEKG extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${ekgStyles}</style>${ekgMarkup[version] || ekgMarkup.v2}`;
  }
}

if (!customElements.get('concept-ekg')) {
  customElements.define('concept-ekg', ConceptEKG);
}
