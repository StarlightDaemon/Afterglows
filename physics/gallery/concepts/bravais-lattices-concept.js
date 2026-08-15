const bravaisStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e1518 0%, #030406 100%);
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

  .bravais-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Primitive basis vectors (a1, a2) */
  .basis-vec1 {
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .basis-vec2 {
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  /* Hexagonal 2D Bravais Lattice Unit Cell */
  .unit-cell {
    fill: rgba(0, 229, 255, 0.12);
    stroke: #00e5ff;
    stroke-width: 1.2;
    stroke-dasharray: 2 2;
  }

  .lattice-point {
    fill: #ffaa00;
    stroke: #ffffff;
    stroke-width: 0.6;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-a1 { fill: #ff5577; }
  .lbl-a2 { fill: #00ff66; }
  .lbl-cell { fill: #00e5ff; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.85);
    z-index: 10;
  }
`;

class PhysicsBravaisLattices extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bravaisStyles}</style>
      <div class="canvas-box">
        <svg class="bravais-svg" viewBox="0 0 130 130">
          <!-- 2D Hexagonal / Triangular Bravais Lattice Grid -->
          <!-- Primitive Unit Rhombus Cell -->
          <polygon points="35,65 65,65 80,39 50,39" class="unit-cell" />

          <!-- Basis Vectors a1, a2 from origin (x=35, y=65) -->
          <line x1="35" y1="65" x2="65" y2="65" class="basis-vec1" />
          <polygon points="68,65 63,62 63,68" fill="#ff5577" />
          <text x="48" y="74" class="lbl lbl-a1">a₁</text>

          <line x1="35" y1="65" x2="50" y2="39" class="basis-vec2" />
          <polygon points="52,36 47,40 52,43" fill="#00ff66" />
          <text x="32" y="48" class="lbl lbl-a2">a₂</text>

          <!-- Lattice Points R = n1 a1 + n2 a2 -->
          <!-- Row 1 (y = 39) -->
          <circle cx="20" cy="39" r="2.5" class="lattice-point" />
          <circle cx="50" cy="39" r="2.5" class="lattice-point" />
          <circle cx="80" cy="39" r="2.5" class="lattice-point" />
          <circle cx="110" cy="39" r="2.5" class="lattice-point" />

          <!-- Row 2 (y = 65) -->
          <circle cx="5" cy="65" r="2.5" class="lattice-point" />
          <circle cx="35" cy="65" r="2.5" class="lattice-point" />
          <circle cx="65" cy="65" r="2.5" class="lattice-point" />
          <circle cx="95" cy="65" r="2.5" class="lattice-point" />

          <!-- Row 3 (y = 91) -->
          <circle cx="20" cy="91" r="2.5" class="lattice-point" />
          <circle cx="50" cy="91" r="2.5" class="lattice-point" />
          <circle cx="80" cy="91" r="2.5" class="lattice-point" />
          <circle cx="110" cy="91" r="2.5" class="lattice-point" />

          <!-- Labels -->
          <text x="64" y="52" class="lbl lbl-cell">UNIT CELL</text>
          <text x="12" y="20" class="lbl" fill="#fff">2D HEXAGONAL (γ = 60°)</text>
        </svg>

        <div class="hud">
          <span>R = n₁ a₁ + n₂ a₂</span>
          <span>5 2D Bravais Net Symmetries</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-bravais-lattices')) {
  customElements.define('physics-bravais-lattices', PhysicsBravaisLattices);
}
