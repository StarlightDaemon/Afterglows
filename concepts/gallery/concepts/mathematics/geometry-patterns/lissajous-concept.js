const LISSAJOUS_PATH =
  'M 100 46 L 98.4 52.3 93.8 58.3 86.5 64 77 69.1 65.9 73.6 54 77.2 42.1 79.8 ' +
  '31 81.5 21.5 82 14.2 81.5 9.6 79.8 8 77.2 9.6 73.6 14.2 69.1 21.5 64 31 58.3 ' +
  '42.1 52.3 54 46 65.9 39.7 77 33.7 86.5 28 93.8 22.9 98.4 18.4 100 14.8 98.4 12.2 ' +
  '93.8 10.5 86.5 10 77 10.5 65.9 12.2 54 14.8 42.1 18.4 31 22.9 21.5 28 14.2 33.7 ' +
  '9.6 39.7 8 46 9.6 52.3 14.2 58.3 21.5 64 31 69.1 42.1 73.6 54 77.2 65.9 79.8 ' +
  '77 81.5 86.5 82 93.8 81.5 98.4 79.8 100 77.2 98.4 73.6 93.8 69.1 86.5 64 77 58.3 ' +
  '65.9 52.3 54 46 42.1 39.7 31 33.7 21.5 28 14.2 22.9 9.6 18.4 8 14.8 9.6 12.2 ' +
  '14.2 10.5 21.5 10 31 10.5 42.1 12.2 54 14.8 65.9 18.4 77 22.9 86.5 28 93.8 33.7 ' +
  '98.4 39.7 100 46 Z';

const lissajousStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A true 3:2 Lissajous figure on an oscilloscope in XY mode:
     x = cos(3t), y = sin(2t). The full curve glows faintly as
     phosphor memory while a bright beam dot retraces it with a
     short comet tail of ghost dots. */
  .lj {
    width: 108px;
    height: 92px;
    position: relative;
    border: 1px solid rgba(0, 204, 0, 0.28);
    border-radius: 4px;
    box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.08);
  }

  /* Graticule: dashed centre axes, scope-style. */
  .lj-axis {
    position: absolute;
  }

  .lj-axis.h {
    left: 4px;
    right: 4px;
    top: 50%;
    height: 1px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 204, 0, 0.3) 0 2px, transparent 2px 7px);
  }

  .lj-axis.v {
    top: 4px;
    bottom: 4px;
    left: 50%;
    width: 1px;
    background: repeating-linear-gradient(180deg,
      rgba(0, 204, 0, 0.3) 0 2px, transparent 2px 7px);
  }

  .lj-label {
    position: absolute;
    right: 4px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.7);
  }

  /* Phosphor memory: the whole figure held faint. */
  .lj-trace {
    position: absolute;
    inset: 0;
  }

  .lj-trace path {
    fill: none;
    stroke: rgba(0, 204, 0, 0.3);
    stroke-width: 1;
    filter: drop-shadow(0 0 2px rgba(0, 204, 0, 0.35));
  }

  /* The beam: head dot plus lagged ghosts riding the exact curve. */
  .lj-dot {
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 9px rgba(0, 204, 0, 1), 0 0 18px rgba(0, 204, 0, 0.5);
    offset-path: path('${LISSAJOUS_PATH}');
    animation: lj-sweep 6s linear infinite;
  }

  @keyframes lj-sweep {
    from { offset-distance: 0%; }
    to { offset-distance: 100%; }
  }

  /* Ghost tail: phosphor decay behind the beam. */
  .lj-dot.g1 { animation-delay: -5.91s; width: 5px; height: 5px; opacity: 0.6; box-shadow: 0 0 7px rgba(0, 204, 0, 0.7); }
  .lj-dot.g2 { animation-delay: -5.82s; width: 4px; height: 4px; opacity: 0.42; box-shadow: 0 0 5px rgba(0, 204, 0, 0.5); }
  .lj-dot.g3 { animation-delay: -5.73s; width: 3px; height: 3px; opacity: 0.28; box-shadow: 0 0 4px rgba(0, 204, 0, 0.35); }
  .lj-dot.g4 { animation-delay: -5.64s; width: 3px; height: 3px; opacity: 0.18; box-shadow: none; }
  .lj-dot.g5 { animation-delay: -5.55s; width: 2px; height: 2px; opacity: 0.1; box-shadow: none; }
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
        <svg class="lj-trace" viewBox="0 0 108 92" aria-hidden="true">
          <path d="${LISSAJOUS_PATH}"></path>
        </svg>
        <div class="lj-dot g5"></div>
        <div class="lj-dot g4"></div>
        <div class="lj-dot g3"></div>
        <div class="lj-dot g2"></div>
        <div class="lj-dot g1"></div>
        <div class="lj-dot"></div>
        <div class="lj-label">3:2</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lissajous')) {
  customElements.define('concept-lissajous', ConceptLissajous);
}
