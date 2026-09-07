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
    transform-origin: 77px 47px;
    animation: fib-geometry-spin 14s linear infinite, fib-geometry-breathe 3.6s ease-in-out infinite alternate;
  }

  @keyframes fib-geometry-spin {
    0% { transform: rotate(0deg) scale(0.92); }
    50% { transform: rotate(180deg) scale(1.12); }
    100% { transform: rotate(360deg) scale(0.92); }
  }

  @keyframes fib-geometry-breathe {
    0% { filter: brightness(0.9); }
    100% { filter: brightness(1.3); }
  }

  /* Each cell is a square of the subdivision, its arc drawn with a
     single rounded corner. */
  .fib-cell {
    position: absolute;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  .fib-arc {
    position: absolute;
    inset: -1px;
    border: 2.5px solid transparent;
    box-sizing: border-box;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  /* 89x55 layout, scale 1.2: cells in px (x, y, size*1.2). */
  .fib-cell.f1 { left: 0;      top: 0;      width: 66px; height: 66px; }
  .fib-cell.f1 .fib-arc { border-radius: 100% 0 0 0; border-top-color: #00ff66; border-left-color: #00ff66; }

  .fib-cell.f2 { left: 66px;   top: 0;      width: 41px; height: 41px; }
  .fib-cell.f2 .fib-arc { border-radius: 0 100% 0 0; border-top-color: #00ff66; border-right-color: #00ff66; }

  .fib-cell.f3 { left: 82px;   top: 41px;   width: 25px; height: 25px; }
  .fib-cell.f3 .fib-arc { border-radius: 0 0 100% 0; border-right-color: #00ff66; border-bottom-color: #00ff66; }

  .fib-cell.f4 { left: 66px;   top: 50px;   width: 16px; height: 16px; }
  .fib-cell.f4 .fib-arc { border-radius: 0 0 0 100%; border-bottom-color: #00ff66; border-left-color: #00ff66; }

  .fib-cell.f5 { left: 66px;   top: 41px;   width: 9px;  height: 9px; }
  .fib-cell.f5 .fib-arc { border-radius: 100% 0 0 0; border-top-color: #00ff66; border-left-color: #00ff66; }

  .fib-cell.f6 { left: 75px;   top: 41px;   width: 6px;  height: 6px; }
  .fib-cell.f6 .fib-arc { border-radius: 0 100% 0 0; border-top-color: #00ff66; border-right-color: #00ff66; }

  /* Golden-ratio callout. */
  .fib-phi {
    position: absolute;
    left: 4px;
    bottom: 3px;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    font-weight: bold;
    color: #c8ffd6;
    text-shadow: 0 0 6px #00ff66;
  }

  /* The seed dot at the spiral's eye: active logarithmic orbital tracer */
  .fib-eye {
    position: absolute;
    left: 77px;
    top: 47px;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00ff66, 0 0 16px #c8ffd6;
    animation: fib-eye-orbit 3.4s ease-in-out infinite;
  }

  @keyframes fib-eye-orbit {
    0% { transform: translate(-42px, -24px) scale(0.7); opacity: 0.9; }
    20% { transform: translate(14px, -28px) scale(0.9); }
    40% { transform: translate(26px, 14px) scale(1.15); }
    60% { transform: translate(8px, 18px) scale(1.35); }
    80% { transform: translate(0px, 4px) scale(1.6); }
    100% { transform: translate(-42px, -24px) scale(0.7); opacity: 0.9; }
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
