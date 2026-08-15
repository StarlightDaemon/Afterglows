const loranStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lrn {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031416 0%, #000507 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Marine navigational chart grid */
  .lrn-chart {
    position: relative;
    width: 86px;
    height: 74px;
    background: #021a1f;
    border: 1.2px solid #00e5ff;
    border-radius: 3px;
    box-shadow: inset 0 0 8px rgba(0, 229, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Master (M) and Secondary (S) transmitter stations */
  .lrn-station-m {
    position: absolute;
    top: 14px;
    left: 18px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #00e5ff;
    box-shadow: 0 0 8px #00e5ff;
    z-index: 6;
  }

  .lrn-station-s {
    position: absolute;
    bottom: 14px;
    right: 18px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 8px #ffaa00;
    z-index: 6;
  }

  /* Intersecting hyperbolic lines of position (LOP) SVG */
  .lrn-hyperbola-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .lrn-lop-cyan {
    fill: none;
    stroke: rgba(0, 229, 255, 0.6);
    stroke-width: 1.2;
    stroke-dasharray: 4 2;
    animation: lrn-pulse-cyan 2s linear infinite;
  }

  .lrn-lop-amber {
    fill: none;
    stroke: rgba(255, 170, 0, 0.6);
    stroke-width: 1.2;
    stroke-dasharray: 4 2;
    animation: lrn-pulse-amber 2s linear infinite;
  }

  @keyframes lrn-pulse-cyan {
    to { stroke-dashoffset: -12; }
  }

  @keyframes lrn-pulse-amber {
    to { stroke-dashoffset: -12; }
  }

  /* Ship fix intersection crosshair */
  .lrn-ship-fix {
    position: absolute;
    top: 36px;
    left: 48px;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 7;
    animation: lrn-fix-blink 1.5s ease-in-out infinite alternate;
  }

  @keyframes lrn-fix-blink {
    0% { transform: scale(0.85); filter: brightness(0.9); }
    100% { transform: scale(1.2); filter: brightness(1.5); }
  }

  .lrn-fix-cross {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1.5px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 8px #ffffff;
  }

  .lrn-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLoranNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${loranStyles}</style>
      <div class="lrn">
        <div class="lrn-chart">
          <svg class="lrn-hyperbola-svg" viewBox="0 0 86 74">
            <!-- Hyperbolic coordinate families -->
            <path class="lrn-lop-cyan" d="M 6 30 Q 30 18 50 4 Q 60 30 78 50" />
            <path class="lrn-lop-cyan" d="M 12 44 Q 38 32 58 16 Q 66 40 82 60" stroke-width="1.6" stroke="#00e5ff" />
            <path class="lrn-lop-cyan" d="M 18 58 Q 46 44 68 30 Q 74 54 84 70" />

            <path class="lrn-lop-amber" d="M 28 6 Q 40 32 60 48 Q 42 66 22 72" />
            <path class="lrn-lop-amber" d="M 40 10 Q 52 38 72 54 Q 54 68 34 74" stroke-width="1.6" stroke="#ffaa00" />
            <path class="lrn-lop-amber" d="M 52 14 Q 64 44 80 60 Q 64 70 46 76" />
          </svg>

          <div class="lrn-station-m"></div>
          <div class="lrn-station-s"></div>

          <div class="lrn-ship-fix">
            <div class="lrn-fix-cross"></div>
          </div>
        </div>

        <div class="lrn-label">LORAN HYPERBOLIC FIX</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-loran-navigation')) {
  customElements.define('concept-loran-navigation', ConceptLoranNavigation);
}
