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
    width: 7px;
    height: 7px;
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
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 8px #ffaa00;
    z-index: 6;
  }

  /* Expanding synchronized radio pulse wavefront rings */
  .lrn-radio-ring-m {
    position: absolute;
    top: 9px;
    left: 13px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.5px solid #00e5ff;
    pointer-events: none;
    z-index: 4;
    animation: lrn-pulse-expand 2s cubic-bezier(0.1, 0.7, 0.3, 1) infinite;
  }

  .lrn-radio-ring-s {
    position: absolute;
    bottom: 9px;
    right: 13px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.5px solid #ffaa00;
    pointer-events: none;
    z-index: 4;
    animation: lrn-pulse-expand 2s cubic-bezier(0.1, 0.7, 0.3, 1) infinite;
    animation-delay: 0.8s;
  }

  @keyframes lrn-pulse-expand {
    0% { transform: scale(0.2); opacity: 1; }
    100% { transform: scale(2.6); opacity: 0; }
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
    stroke: rgba(0, 229, 255, 0.7);
    stroke-width: 1.4;
  }

  .lrn-lop-amber {
    fill: none;
    stroke: rgba(255, 170, 0, 0.7);
    stroke-width: 1.4;
  }

  /* Ship fix navigating and sailing across chart */
  .lrn-ship-fix {
    position: absolute;
    top: 36px;
    left: 48px;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 7;
    animation: lrn-ship-navigate 4s ease-in-out infinite alternate;
  }

  @keyframes lrn-ship-navigate {
    0% { transform: translate(-12px, -8px); }
    100% { transform: translate(12px, 8px); }
  }

  .lrn-fix-cross {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1.8px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px #ffffff;
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
            <path class="lrn-lop-cyan" d="M 12 44 Q 38 32 58 16 Q 66 40 82 60" stroke-width="1.8" stroke="#00e5ff" />
            <path class="lrn-lop-cyan" d="M 18 58 Q 46 44 68 30 Q 74 54 84 70" />

            <path class="lrn-lop-amber" d="M 28 6 Q 40 32 60 48 Q 42 66 22 72" />
            <path class="lrn-lop-amber" d="M 40 10 Q 52 38 72 54 Q 54 68 34 74" stroke-width="1.8" stroke="#ffaa00" />
            <path class="lrn-lop-amber" d="M 52 14 Q 64 44 80 60 Q 64 70 46 76" />
          </svg>

          <div class="lrn-station-m"></div>
          <div class="lrn-station-s"></div>

          <div class="lrn-radio-ring-m"></div>
          <div class="lrn-radio-ring-s"></div>

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
