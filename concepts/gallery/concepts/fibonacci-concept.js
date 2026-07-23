const fibonacciStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* The golden rectangle subdivision: squares 55-34-21-13-8-5 light up
     in sequence, each carrying its quarter-arc of the spiral, then
     the whole figure breathes once and the trace starts again.
     Layout uses a 89x55 (F11 x F10) rectangle scaled by 1.2 to fit.
     Each arc is centred on the corner its square shares with the next
     square, so consecutive arcs join with a common tangent: the corner
     cycle runs TL, TR, BR, BL, TL, TR and the chain is
     (0,66)->(66,0)->(107,41)->(82,66)->(66,50)->(75,41)->(81,47). */
  .fib {
    width: 107px;
    height: 66px;
    position: relative;
  }

  /* Each cell is a square of the subdivision, its arc drawn with a
     single rounded corner. Cells share one 6s trace timeline with
     per-cell phase offsets. */
  .fib-cell {
    position: absolute;
    border: 1px solid rgba(0, 204, 0, 0.4);
    box-sizing: border-box;
    animation: fib-cell 6s infinite;
  }

  .fib-arc {
    position: absolute;
    inset: -1px;
    border: 2px solid transparent;
    box-sizing: border-box;
    animation: fib-arc 6s infinite;
  }

  /* 89x55 layout, scale 1.2: cells in px (x, y, size*1.2). */
  .fib-cell.f1 { left: 0;      top: 0;      width: 66px; height: 66px; --ph: 0s; }
  .fib-cell.f1 .fib-arc { border-radius: 100% 0 0 0; border-top-color: var(--accent, #00cc00); border-left-color: var(--accent, #00cc00); }

  .fib-cell.f2 { left: 66px;   top: 0;      width: 41px; height: 41px; --ph: -5.1s; }
  .fib-cell.f2 .fib-arc { border-radius: 0 100% 0 0; border-top-color: var(--accent, #00cc00); border-right-color: var(--accent, #00cc00); }

  .fib-cell.f3 { left: 82px;   top: 41px;   width: 25px; height: 25px; --ph: -4.2s; }
  .fib-cell.f3 .fib-arc { border-radius: 0 0 100% 0; border-right-color: var(--accent, #00cc00); border-bottom-color: var(--accent, #00cc00); }

  .fib-cell.f4 { left: 66px;   top: 50px;   width: 16px; height: 16px; --ph: -3.3s; }
  .fib-cell.f4 .fib-arc { border-radius: 0 0 0 100%; border-bottom-color: var(--accent, #00cc00); border-left-color: var(--accent, #00cc00); }

  .fib-cell.f5 { left: 66px;   top: 41px;   width: 9px;  height: 9px; --ph: -2.4s; }
  .fib-cell.f5 .fib-arc { border-radius: 100% 0 0 0; border-top-color: var(--accent, #00cc00); border-left-color: var(--accent, #00cc00); }

  .fib-cell.f6 { left: 75px;   top: 41px;   width: 6px;  height: 6px; --ph: -1.7s; }
  .fib-cell.f6 .fib-arc { border-radius: 0 100% 0 0; border-top-color: var(--accent, #00cc00); border-right-color: var(--accent, #00cc00); }

  .fib-cell { animation-delay: var(--ph); }
  .fib-arc { animation-delay: var(--ph); }

  /* Cell outline wakes as its arc draws, then rests dim. */
  @keyframes fib-cell {
    0% { border-color: rgba(0, 204, 0, 0.18); background: transparent; }
    6% { border-color: rgba(140, 255, 170, 0.9); background: rgba(0, 204, 0, 0.08); }
    16% { border-color: rgba(0, 204, 0, 0.45); background: transparent; }
    82% { border-color: rgba(0, 204, 0, 0.45); }
    92%, 100% { border-color: rgba(0, 204, 0, 0.18); }
  }

  /* The arc flares bright as it is traced, then holds glowing. */
  @keyframes fib-arc {
    0% { opacity: 0; filter: none; }
    4% { opacity: 1; filter: drop-shadow(0 0 6px rgba(0, 204, 0, 0.9)); }
    14% { opacity: 0.9; filter: drop-shadow(0 0 2px rgba(0, 204, 0, 0.5)); }
    82% { opacity: 0.9; }
    92%, 100% { opacity: 0; }
  }

  /* Golden-ratio callout. */
  .fib-phi {
    position: absolute;
    left: 4px;
    bottom: 3px;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    color: rgba(140, 255, 170, 0.75);
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.5);
    animation: fib-phi 6s ease-in-out infinite;
  }

  @keyframes fib-phi {
    0%, 70%, 100% { opacity: 0.4; }
    80%, 90% { opacity: 1; }
  }

  /* The seed dot at the spiral's eye. */
  .fib-eye {
    position: absolute;
    left: 77px;
    top: 47px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #d6ffe0;
    animation: fib-eye 6s ease-in-out infinite;
  }

  @keyframes fib-eye {
    0%, 100% { box-shadow: 0 0 3px rgba(0, 204, 0, 0.6); }
    50% { box-shadow: 0 0 8px rgba(0, 204, 0, 1); }
  }
`;

class ConceptFibonacci extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fibonacciStyles}</style>
      <div class="fib">
        <div class="fib-cell f1"><div class="fib-arc"></div></div>
        <div class="fib-cell f2"><div class="fib-arc"></div></div>
        <div class="fib-cell f3"><div class="fib-arc"></div></div>
        <div class="fib-cell f4"><div class="fib-arc"></div></div>
        <div class="fib-cell f5"><div class="fib-arc"></div></div>
        <div class="fib-cell f6"><div class="fib-arc"></div></div>
        <div class="fib-eye"></div>
        <div class="fib-phi">&#966; = 1.618</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fibonacci')) {
  customElements.define('concept-fibonacci', ConceptFibonacci);
}
