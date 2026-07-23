const signalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original four bars --- */
  .sig-bars {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 40px;
  }

  .sb {
    width: 8px;
    background: #333;
  }

  .sb.active {
    background: var(--accent, #00cc00);
    animation: sig-blink 2s infinite;
  }

  .sb:nth-child(1) { height: 10px; }
  .sb:nth-child(2) { height: 20px; }
  .sb:nth-child(3) { height: 30px; }
  .sb:nth-child(4) { height: 40px; }

  @keyframes sig-blink { 50% { opacity: 0.3 } }

  /* --- v2: an antenna hunting for signal ---
     Waves radiate from the mast while five bars climb as the link
     strengthens, glitch out in a mid-cycle dropout, peak at full
     strength, then fade back to the search state. One 4.4s story. */
  .sg2 {
    width: 108px;
    height: 76px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .sg2-mast {
    position: absolute;
    left: 16px;
    bottom: 14px;
    width: 2px;
    height: 36px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), rgba(0, 204, 0, 0.4));
  }

  .sg2-mast::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #baffc9;
    box-shadow: 0 0 7px rgba(0, 204, 0, 0.9);
  }

  /* Legs of the little tripod base. */
  .sg2-mast::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -5px;
    width: 12px;
    height: 2px;
    background: rgba(0, 204, 0, 0.55);
  }

  /* Expanding wave arcs from the mast tip. */
  .sg2-wave {
    position: absolute;
    left: 17px;
    bottom: 47px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
    /* Only the upper-right quarter of the ring is drawn. */
    border-left-color: transparent;
    border-bottom-color: transparent;
    transform: translate(-50%, 50%) rotate(-14deg);
    animation: sg2-wave 2.2s ease-out infinite;
    opacity: 0;
  }

  .sg2-wave.w1 { width: 12px; height: 12px; animation-delay: 0s; }
  .sg2-wave.w2 { width: 24px; height: 24px; animation-delay: 0.35s; }
  .sg2-wave.w3 { width: 36px; height: 36px; animation-delay: 0.7s; }

  @keyframes sg2-wave {
    0% { opacity: 0; transform: translate(-50%, 50%) rotate(-14deg) scale(0.5); }
    18% { opacity: 0.9; }
    70% { opacity: 0; transform: translate(-50%, 50%) rotate(-14deg) scale(1.35); }
    100% { opacity: 0; }
  }

  /* Five strength bars, each with its own resting/peak height. */
  .sg2-bars {
    position: absolute;
    right: 6px;
    bottom: 14px;
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 52px;
  }

  .sg2-bar {
    width: 8px;
    height: var(--lo);
    background: var(--accent, #00cc00);
    border-radius: 1px;
    animation: sg2-lvl 4.4s ease-in-out infinite;
  }

  .sg2-bar.b1 { --lo: 8px;  --hi: 16px; animation-delay: 0s; }
  .sg2-bar.b2 { --lo: 7px;  --hi: 25px; animation-delay: 0.12s; }
  .sg2-bar.b3 { --lo: 6px;  --hi: 34px; animation-delay: 0.24s; }
  .sg2-bar.b4 { --lo: 5px;  --hi: 43px; animation-delay: 0.36s; }
  .sg2-bar.b5 { --lo: 4px;  --hi: 52px; animation-delay: 0.48s; }

  @keyframes sg2-lvl {
    0%, 14% { height: var(--lo); opacity: 0.3; box-shadow: none; }
    30% { height: var(--hi); opacity: 1; }
    /* Dropout: the link stumbles for a beat. */
    44% { height: var(--hi); opacity: 1; }
    48% { height: var(--lo); opacity: 0.35; }
    54% { height: var(--hi); opacity: 1; }
    /* Full-strength hold with glow. */
    68% { height: var(--hi); opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.8); }
    80% { height: var(--hi); opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.8); }
    94%, 100% { height: var(--lo); opacity: 0.3; box-shadow: none; }
  }

  /* Status readout mirrors the same timeline. */
  .sg2-status {
    position: absolute;
    left: 2px;
    bottom: 0;
    font-size: 8px;
    letter-spacing: 1.5px;
    color: rgba(140, 255, 170, 0.85);
  }

  .sg2-status::before {
    content: 'SCAN';
    animation: sg2-status 4.4s steps(1) infinite;
  }

  @keyframes sg2-status {
    0% { content: 'SCAN'; }
    22% { content: 'SYNC'; }
    46% { content: 'SYNC?'; }
    54% { content: 'LINK \\25B8 OK'; }
    88% { content: 'SCAN'; }
  }
`;

const signalMarkup = {
  v1: `
    <div class="sig-bars">
      <div class="sb active"></div>
      <div class="sb active"></div>
      <div class="sb"></div>
      <div class="sb"></div>
    </div>
  `,
  v2: `
    <div class="sg2">
      <div class="sg2-mast"></div>
      <div class="sg2-wave w1"></div>
      <div class="sg2-wave w2"></div>
      <div class="sg2-wave w3"></div>
      <div class="sg2-bars">
        <div class="sg2-bar b1"></div>
        <div class="sg2-bar b2"></div>
        <div class="sg2-bar b3"></div>
        <div class="sg2-bar b4"></div>
        <div class="sg2-bar b5"></div>
      </div>
      <div class="sg2-status"></div>
    </div>
  `,
};

class ConceptSignal extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${signalStyles}</style>${signalMarkup[version] || signalMarkup.v2}`;
  }
}

if (!customElements.get('concept-signal')) {
  customElements.define('concept-signal', ConceptSignal);
}
