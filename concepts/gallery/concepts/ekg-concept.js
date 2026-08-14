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

  /* --- v2: a bedside monitor --- */
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

  .e2-trace { opacity: 0.3; }

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

  /* --- v3: ICU patient telemetry monitor ---
     Deep navy/slate display grid, vivid cyan PQRST electrodynamic trace,
     pulsing crimson systolic heartbeat icon, and crisp medical telemetry readout. */
  .e3 {
    width: 122px;
    height: 74px;
    position: relative;
    overflow: hidden;
    border: 1px solid #1e293b;
    border-radius: 4px;
    background:
      repeating-linear-gradient(90deg, rgba(30, 41, 59, 0.6) 0 1px, transparent 1px 12px),
      repeating-linear-gradient(0deg, rgba(30, 41, 59, 0.6) 0 1px, transparent 1px 12px),
      #030712;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .e3-trace,
  .e3-glow {
    position: absolute;
    inset: 6px 0;
    background: #00f0ff;
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

  .e3-trace { opacity: 0.25; filter: drop-shadow(0 0 1px #00f0ff); }

  .e3-glow {
    opacity: 1;
    filter: drop-shadow(0 0 4px #00f0ff) drop-shadow(0 0 8px #0284c7);
    -webkit-mask-image: linear-gradient(90deg, transparent 0, black 30%, black 100%);
    mask-image: linear-gradient(90deg, transparent 0, black 30%, black 100%);
    -webkit-mask-size: 46px 100%;
    mask-size: 46px 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    animation: e2-sweepmask 3.2s linear infinite;
  }

  .e3-cursor {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: -2px;
    width: 2px;
    background: linear-gradient(180deg, transparent, #ffffff 50%, transparent);
    box-shadow: 0 0 6px #00f0ff;
    animation: e2-cursor 3.2s linear infinite;
  }

  .e3-bpm {
    position: absolute;
    top: 3px;
    right: 5px;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #22c55e;
    text-shadow: 0 0 5px rgba(34, 197, 94, 0.8);
  }

  .e3-bpm::before {
    content: 'HR 72';
    animation: e3-rate 9.6s steps(1) infinite;
  }

  @keyframes e3-rate {
    0% { content: 'HR 72'; }
    33% { content: 'HR 74'; }
    66% { content: 'HR 71'; }
  }

  .e3-heart {
    position: absolute;
    top: 3px;
    left: 5px;
    width: 8px;
    height: 8px;
    background: #ef4444;
    box-shadow: 0 0 6px rgba(239, 68, 68, 0.8);
    clip-path: polygon(50% 100%, 8% 52%, 8% 24%, 26% 10%, 50% 26%, 74% 10%, 92% 24%, 92% 52%);
    animation: e3-heart 1.6s ease-out infinite;
  }

  @keyframes e3-heart {
    0%, 55% { transform: scale(1); opacity: 0.6; }
    62% { transform: scale(1.45); opacity: 1; box-shadow: 0 0 10px #ef4444; }
    72%, 100% { transform: scale(1); opacity: 0.6; }
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
  v3: `
    <div class="e3">
      <div class="e3-trace"></div>
      <div class="e3-glow"></div>
      <div class="e3-cursor"></div>
      <div class="e3-heart"></div>
      <div class="e3-bpm"></div>
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${ekgStyles}</style>${ekgMarkup[version] || ekgMarkup.v3}`;
  }
}

if (!customElements.get('concept-ekg')) {
  customElements.define('concept-ekg', ConceptEKG);
}
