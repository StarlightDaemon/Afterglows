const binaryCounterStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original four-state flicker --- */
  .binary-count {
    font-size: 24px;
    font-weight: bold;
    color: var(--accent, #00cc00);
    font-family: 'Courier New', monospace;
  }

  .binary-count::after {
    content: '1011';
    animation: count 0.5s steps(4) infinite;
  }

  @keyframes count {
    0% { content: '0000' }
    25% { content: '0101' }
    50% { content: '1010' }
    75% { content: '1111' }
  }

  /* --- v2: an honest 8-bit register ---
     Each bit cell toggles at half the rate of the one to its right,
     so the low nibble genuinely counts. A clock LED blips every
     increment and the hex digit readout tracks the low nibble. */
  .bc2 {
    font-family: 'Courier New', monospace;
    width: 116px;
  }

  .bc2-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8px;
    letter-spacing: 1.5px;
    color: rgba(140, 255, 170, 0.8);
    margin-bottom: 4px;
  }

  /* Clock LED: one blip per 0.8s increment tick. */
  .bc2-clk {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent, #00cc00);
    animation: bc2-clk 0.8s ease-out infinite;
  }

  @keyframes bc2-clk {
    0% { opacity: 1; box-shadow: 0 0 7px rgba(0, 204, 0, 0.9); }
    35%, 100% { opacity: 0.15; box-shadow: none; }
  }

  .bc2-cells {
    display: flex;
    gap: 2px;
  }

  .bc2-cell {
    width: 12px;
    height: 18px;
    border: 1px solid rgba(0, 204, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: bold;
    color: #baffc9;
    /* Bit value and lit background share one timeline per cell:
       '0' for the first half of the period, '1' for the second. */
    animation: bc2-lit var(--period) linear infinite var(--phase);
  }

  .bc2-cell::before {
    content: '0';
    animation: bc2-bit var(--period) steps(1) infinite var(--phase);
  }

  /* Bit N flips at half the rate of bit N+1 (LSB on the right).
     Negative phases put the register mid-count rather than at zero. */
  .bc2-cell.b7 { --period: 204.8s; --phase: -140s; }
  .bc2-cell.b6 { --period: 102.4s; --phase: -60s; }
  .bc2-cell.b5 { --period: 51.2s;  --phase: -30s; }
  .bc2-cell.b4 { --period: 25.6s;  --phase: -5s; }
  .bc2-cell.b3 { --period: 12.8s;  --phase: 0s; }
  .bc2-cell.b2 { --period: 6.4s;   --phase: 0s; }
  .bc2-cell.b1 { --period: 3.2s;   --phase: 0s; }
  .bc2-cell.b0 { --period: 1.6s;   --phase: 0s; }

  @keyframes bc2-bit {
    0%, 49.99% { content: '0'; }
    50%, 100% { content: '1'; }
  }

  @keyframes bc2-lit {
    0%, 49.99% {
      background: rgba(0, 40, 8, 0.5);
      box-shadow: none;
      border-color: rgba(0, 204, 0, 0.35);
    }
    50%, 100% {
      background: rgba(0, 110, 25, 0.55);
      box-shadow: 0 0 6px rgba(0, 204, 0, 0.5), inset 0 0 4px rgba(0, 204, 0, 0.4);
      border-color: rgba(140, 255, 170, 0.9);
    }
  }

  /* Low-nibble hex readout: sixteen 0.8s ticks over one 12.8s wrap. */
  .bc2-foot {
    margin-top: 4px;
    font-size: 9px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-align: right;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
  }

  .bc2-foot::before {
    content: '+0x0';
    animation: bc2-hex 12.8s steps(1) infinite;
  }

  @keyframes bc2-hex {
    0% { content: '+0x0'; }
    6.25% { content: '+0x1'; }
    12.5% { content: '+0x2'; }
    18.75% { content: '+0x3'; }
    25% { content: '+0x4'; }
    31.25% { content: '+0x5'; }
    37.5% { content: '+0x6'; }
    43.75% { content: '+0x7'; }
    50% { content: '+0x8'; }
    56.25% { content: '+0x9'; }
    62.5% { content: '+0xA'; }
    68.75% { content: '+0xB'; }
    75% { content: '+0xC'; }
    81.25% { content: '+0xD'; }
    87.5% { content: '+0xE'; }
    93.75% { content: '+0xF'; }
  }
`;

const binaryCounterMarkup = {
  v1: `<div class="binary-count"></div>`,
  v2: `
    <div class="bc2">
      <div class="bc2-head">
        <span>REG&nbsp;A</span>
        <span class="bc2-clk"></span>
      </div>
      <div class="bc2-cells">
        <div class="bc2-cell b7"></div>
        <div class="bc2-cell b6"></div>
        <div class="bc2-cell b5"></div>
        <div class="bc2-cell b4"></div>
        <div class="bc2-cell b3"></div>
        <div class="bc2-cell b2"></div>
        <div class="bc2-cell b1"></div>
        <div class="bc2-cell b0"></div>
      </div>
      <div class="bc2-foot"></div>
    </div>
  `,
};

class ConceptBinaryCounter extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${binaryCounterStyles}</style>${binaryCounterMarkup[version] || binaryCounterMarkup.v2}`;
  }
}

if (!customElements.get('concept-binary-counter')) {
  customElements.define('concept-binary-counter', ConceptBinaryCounter);
}
