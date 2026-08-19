const minkowskiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d121c 0%, #030508 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .minkowski-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Unprimed Rest Axes (ct, x) */
  .rest-axis {
    stroke: rgba(255, 255, 255, 0.35);
    stroke-width: 1;
  }

  /* Boosted Non-Orthogonal Primed Axes (ct', x') */
  .boosted-axis {
    stroke: #ffaa00;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px rgba(255, 170, 0, 0.6));
  }

  /* Light Cone Invariant Asymptote (slope = 1) */
  .light-asymptote {
    stroke: #00e5ff;
    stroke-width: 1.2;
    stroke-dasharray: 3 2;
    filter: drop-shadow(0 0 4px #00e5ff);
  }

  /* Hyperbolic Spacetime Calibration Curves (s² = -c²t² + x² = ±1) */
  .hyperbola {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1;
    stroke-dasharray: 2 2;
    opacity: 0.7;
  }

  /* Simultaneity Line of Boosted Frame */
  .simultaneity-line {
    stroke: #00ff66;
    stroke-width: 1;
    stroke-dasharray: 2 2;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-rest { fill: rgba(255, 255, 255, 0.7); }
  .lbl-boost { fill: #ffaa00; }
  .lbl-null { fill: #00e5ff; }
  .lbl-sim { fill: #00ff66; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.9);
    z-index: 10;
  }

  /* Motion pass */
  /* Boost sweep: primed axes glow while simultaneity slices march */
  .simultaneity-line { stroke-width: 2; stroke-dasharray: 5 4; animation: mink-slice 1.8s linear infinite; }
  .hyperbola { stroke-width: 2; stroke-dasharray: 6 4; animation: mink-hyp 2.6s linear infinite; }
  @keyframes mink-slice { to { stroke-dashoffset: -14; } }
  @keyframes mink-hyp { to { stroke-dashoffset: -16; } }

  /* Boost sweep: β oscillates, scissoring the primed axes toward and away
     from the light cone. Genuine rotation about the origin event. */
  .boosted-ct, .boosted-x, .sim-frame {
    transform-origin: 65px 65px;
  }
  .boosted-ct { animation: mink-boost-ct 2.8s ease-in-out infinite alternate; }
  .boosted-x { animation: mink-boost-x 2.8s ease-in-out infinite alternate; }
  .sim-frame { animation: mink-boost-x 2.8s ease-in-out infinite alternate; }
  @keyframes mink-boost-ct { from { transform: rotate(9deg); } to { transform: rotate(-8deg); } }
  @keyframes mink-boost-x { from { transform: rotate(-9deg); } to { transform: rotate(8deg); } }

`;

class PhysicsMinkowskiDiagram extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${minkowskiStyles}</style>
      <div class="canvas-box">
        <svg class="minkowski-svg" viewBox="0 0 130 130">
          <!-- Light Cone Asymptotes (45 deg) -->
          <line x1="15" y1="115" x2="115" y2="15" class="light-asymptote" />
          <line x1="15" y1="15" x2="115" y2="115" class="light-asymptote" />

          <!-- Unprimed Rest Axes -->
          <line x1="65" y1="12" x2="65" y2="118" class="rest-axis" />
          <line x1="12" y1="65" x2="118" y2="65" class="rest-axis" />
          <text x="68" y="16" class="lbl lbl-rest">ct</text>
          <text x="114" y="62" class="lbl lbl-rest">x</text>

          <!-- Boosted Primed Axes (β oscillating around 0.5) -->
          <!-- ct' tilted towards light cone -->
          <g class="boosted-ct">
            <line x1="42" y1="118" x2="88" y2="12" class="boosted-axis" />
            <text x="89" y="16" class="lbl lbl-boost">ct'</text>
          </g>
          <!-- x' tilted towards light cone -->
          <g class="boosted-x">
            <line x1="12" y1="88" x2="118" y2="42" class="boosted-axis" />
            <text x="114" y="40" class="lbl lbl-boost">x'</text>
          </g>

          <!-- Invariant Spacetime Hyperbolas -->
          <path d="M 30,25 Q 65,45 100,25" class="hyperbola" />
          <path d="M 30,105 Q 65,85 100,105" class="hyperbola" />

          <!-- Simultaneity Line of S' (t' = const), riding the boost sweep -->
          <g class="sim-frame">
            <line x1="15" y1="65" x2="105" y2="25" class="simultaneity-line" />
          </g>
          <text x="12" y="24" class="lbl lbl-sim">t' = CONST</text>
          <text x="76" y="95" class="lbl lbl-null">c = 1</text>
        </svg>

        <div class="hud">
          <span>tan α = v/c = β</span>
          <span>ct' = γ(ct - βx)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-minkowski-diagram')) {
  customElements.define('physics-minkowski-diagram', PhysicsMinkowskiDiagram);
}
