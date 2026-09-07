const loadingBarStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original stepped fill --- */
  .load-box {
    width: 100px;
    height: 20px;
    border: 2px solid var(--accent, #00cc00);
    padding: 2px;
  }

  .load-fill {
    height: 100%;
    background: var(--accent, #00cc00);
    width: 0%;
    animation: fill 2s steps(10) infinite;
  }

  @keyframes fill {
    100% { width: 100% }
  }

  /* --- v2: terminal loader with stall-and-burst rhythm ---
     The fill races to ~40%, stalls (as real loads do), bursts to
     100%, flashes complete, then snaps back. Percent readout and
     glow are keyed to the same 3.6s timeline. */
  .lb2 {
    width: 108px;
    font-family: 'Courier New', monospace;
  }

  .lb2-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
    font-size: 9px;
    letter-spacing: 1px;
    color: var(--accent, #00cc00);
  }

  .lb2-title::after {
    content: '';
    animation: lb2-dots 1.2s steps(1) infinite;
  }

  @keyframes lb2-dots {
    0% { content: ''; }
    25% { content: '.'; }
    50% { content: '..'; }
    75% { content: '...'; }
  }

  .lb2-pct {
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .lb2-pct::before {
    content: '0%';
    animation: lb2-pct 3.6s steps(1) infinite;
  }

  @keyframes lb2-pct {
    0% { content: '0%'; }
    8% { content: '12%'; }
    16% { content: '27%'; }
    24% { content: '38%'; }
    32% { content: '41%'; }
    38% { content: '42%'; }
    52% { content: '42%'; }
    58% { content: '64%'; }
    66% { content: '83%'; }
    72% { content: '100%'; }
    94% { content: '0%'; }
  }

  .lb2-frame {
    width: 100%;
    height: 14px;
    border: 1px solid var(--accent, #00cc00);
    padding: 2px;
    box-sizing: border-box;
    animation: lb2-frame-glow 3.6s ease-in-out infinite;
  }

  @keyframes lb2-frame-glow {
    0%, 70% { box-shadow: 0 0 0 rgba(0, 204, 0, 0); }
    76%, 88% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.7), inset 0 0 6px rgba(0, 204, 0, 0.4); }
    93%, 100% { box-shadow: 0 0 0 rgba(0, 204, 0, 0); }
  }

  /* Segmented fill: 8px blocks with 2px gaps, bright leading edge. */
  .lb2-fill {
    height: 100%;
    width: 0%;
    background: repeating-linear-gradient(90deg,
      var(--accent, #00cc00) 0 6px,
      rgba(0, 60, 10, 0.6) 6px 8px);
    border-right: 2px solid #d6ffe0;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.55);
    animation: lb2-fill 3.6s linear infinite;
  }

  @keyframes lb2-fill {
    0% { width: 0%; }
    8% { width: 12%; }
    16% { width: 27%; }
    24% { width: 38%; }
    32% { width: 41%; }
    38%, 52% { width: 42%; }
    58% { width: 64%; }
    66% { width: 83%; }
    72%, 92% { width: 100%; }
    94%, 100% { width: 0%; }
  }

  /* Status line beneath: scrolling hex addresses, then OK flash. */
  .lb2-status {
    margin-top: 4px;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
    min-height: 10px;
  }

  .lb2-status::before {
    content: 'r 0x0000';
    animation: lb2-status 3.6s steps(1) infinite;
  }

  @keyframes lb2-status {
    0% { content: 'r 0x0000'; }
    10% { content: 'r 0x1A40'; }
    20% { content: 'r 0x3C8F'; }
    30% { content: 'r 0x5B21'; }
    38% { content: 'w retry.'; }
    45% { content: 'w retry..'; }
    52% { content: 'r 0x7FD2'; }
    60% { content: 'r 0xA511'; }
    68% { content: 'r 0xE9C3'; }
    74% { content: 'OK \\2713'; }
    94% { content: 'r 0x0000'; }
  }
`;

const loadingBarMarkup = {
  v1: `
    <div class="load-box">
      <div class="load-fill"></div>
    </div>
  `,
  v2: `
    <div class="lb2">
      <div class="lb2-head">
        <span class="lb2-title">LOADING</span>
        <span class="lb2-pct"></span>
      </div>
      <div class="lb2-frame">
        <div class="lb2-fill"></div>
      </div>
      <div class="lb2-status"></div>
    </div>
  `,
};

class ConceptLoadingBar extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${loadingBarStyles}</style>${loadingBarMarkup[version] || loadingBarMarkup.v2}`;
  }
}

if (!customElements.get('concept-loading-bar')) {
  customElements.define('concept-loading-bar', ConceptLoadingBar);
}
