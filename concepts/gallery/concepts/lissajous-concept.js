const lissajousStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A 3:2 Lissajous figure traced live: the dot's X and Y are driven
     by two independent oscillators (nested carriers), and four ghost
     dots trail it at small phase lags to draw the curve's recent
     past. Reads like an oscilloscope in XY mode. */
  .lj {
    width: 108px;
    height: 92px;
    position: relative;
  }

  /* Scope furniture: center axes and corner brackets. */
  .lj-axis {
    position: absolute;
    background: rgba(0, 204, 0, 0.22);
  }

  .lj-axis.h { left: 6px; right: 6px; top: 50%; height: 1px; }
  .lj-axis.v { top: 6px; bottom: 6px; left: 50%; width: 1px; }

  .lj-corner {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .lj-corner.c1 { top: 0; left: 0; border-right: none; border-bottom: none; }
  .lj-corner.c2 { top: 0; right: 0; border-left: none; border-bottom: none; }
  .lj-corner.c3 { bottom: 0; left: 0; border-right: none; border-top: none; }
  .lj-corner.c4 { bottom: 0; right: 0; border-left: none; border-top: none; }

  .lj-label {
    position: absolute;
    right: 4px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.7);
  }

  /* X oscillator: 3 half-periods per figure; Y oscillator: 2. The
     ease-in-out alternation approximates a sinusoid. */
  .lj-x {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: lj-x 0.9s ease-in-out infinite alternate;
  }

  .lj-y {
    animation: lj-y 1.35s ease-in-out infinite alternate;
  }

  @keyframes lj-x {
    from { transform: translateX(-36px); }
    to { transform: translateX(36px); }
  }

  @keyframes lj-y {
    from { transform: translateY(-28px); }
    to { transform: translateY(28px); }
  }

  .lj-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 9px rgba(0, 204, 0, 1), 0 0 18px rgba(0, 204, 0, 0.5);
  }

  /* Ghost trail: same oscillator pair, lagged. Phosphor decay. */
  .lj-x.g1, .lj-x.g1 .lj-y { animation-delay: -0.06s; }
  .lj-x.g2, .lj-x.g2 .lj-y { animation-delay: -0.12s; }
  .lj-x.g3, .lj-x.g3 .lj-y { animation-delay: -0.18s; }
  .lj-x.g4, .lj-x.g4 .lj-y { animation-delay: -0.24s; }

  .lj-x.g1 .lj-dot { width: 5px; height: 5px; opacity: 0.65; box-shadow: 0 0 7px rgba(0, 204, 0, 0.7); }
  .lj-x.g2 .lj-dot { width: 4px; height: 4px; opacity: 0.45; box-shadow: 0 0 5px rgba(0, 204, 0, 0.5); }
  .lj-x.g3 .lj-dot { width: 3px; height: 3px; opacity: 0.3; box-shadow: 0 0 4px rgba(0, 204, 0, 0.35); }
  .lj-x.g4 .lj-dot { width: 3px; height: 3px; opacity: 0.16; box-shadow: none; }
`;

class ConceptLissajous extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lissajousStyles}</style>
      <div class="lj">
        <div class="lj-axis h"></div>
        <div class="lj-axis v"></div>
        <div class="lj-corner c1"></div>
        <div class="lj-corner c2"></div>
        <div class="lj-corner c3"></div>
        <div class="lj-corner c4"></div>
        <div class="lj-x g4"><div class="lj-y"><div class="lj-dot"></div></div></div>
        <div class="lj-x g3"><div class="lj-y"><div class="lj-dot"></div></div></div>
        <div class="lj-x g2"><div class="lj-y"><div class="lj-dot"></div></div></div>
        <div class="lj-x g1"><div class="lj-y"><div class="lj-dot"></div></div></div>
        <div class="lj-x"><div class="lj-y"><div class="lj-dot"></div></div></div>
        <div class="lj-label">3:2</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lissajous')) {
  customElements.define('concept-lissajous', ConceptLissajous);
}
