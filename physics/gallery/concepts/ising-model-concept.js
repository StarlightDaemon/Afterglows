const isingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #141018 0%, #040206 100%);
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

  /* 2D Spin Lattice Grid */
  .lattice-grid {
    display: grid;
    grid-template-columns: repeat(7, 12px);
    grid-template-rows: repeat(7, 12px);
    gap: 2px;
    padding: 6px;
    background: rgba(10, 10, 15, 0.8);
    border: 1.2px solid #334455;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .spin {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    font-family: monospace;
    font-weight: bold;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .spin-up {
    background: rgba(0, 229, 255, 0.25);
    color: #00e5ff;
    box-shadow: 0 0 3px rgba(0, 229, 255, 0.4);
  }

  .spin-down {
    background: rgba(255, 85, 119, 0.25);
    color: #ff5577;
    box-shadow: 0 0 3px rgba(255, 85, 119, 0.4);
  }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  /* Motion pass */
  /* Thermal fluctuations: spins flicker against the ordered domains */
  .spin { animation: ise-flicker 3.2s ease-in-out infinite; }
  .spin:nth-child(4n) { animation-delay: -0.8s; }
  .spin:nth-child(4n+1) { animation-delay: -1.6s; }
  .spin:nth-child(4n+2) { animation-delay: -2.4s; }
  @keyframes ise-flicker { 0%, 88%, 100% { opacity: 1; } 94% { opacity: 0.35; } }

  /* Domain-wall spins physically flip: the arrow glyph rotates through 180
     degrees and back, swelling mid-flip. Staggered so one is always turning. */
  .spin:nth-child(5), .spin:nth-child(12), .spin:nth-child(20),
  .spin:nth-child(23), .spin:nth-child(29), .spin:nth-child(36),
  .spin:nth-child(41), .spin:nth-child(45) {
    animation: ise-flip 1.9s ease-in-out infinite alternate;
  }
  .spin:nth-child(12), .spin:nth-child(29), .spin:nth-child(45) { animation-delay: -0.63s; }
  .spin:nth-child(20), .spin:nth-child(36) { animation-delay: -1.26s; }

  @keyframes ise-flip {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(90deg) scale(1.3); }
    100% { transform: rotate(180deg) scale(1); }
  }

`;

class PhysicsIsingModel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // 7x7 lattice showing ferromagnetic domain formation below T_c
    const spins = [
      1, 1, 1, 1, -1, -1, -1,
      1, 1, 1, 1,  1, -1, -1,
      1, 1, 1, 1,  1,  1, -1,
      1, 1, 1, 1,  1,  1,  1,
      -1, 1, 1, 1, 1,  1,  1,
      -1,-1, 1, 1, 1, -1,  1,
      -1,-1,-1, 1,-1, -1, -1,
    ];

    const spinCells = spins.map(s => {
      const cls = s === 1 ? 'spin spin-up' : 'spin spin-down';
      const arrow = s === 1 ? '↑' : '↓';
      return `<div class="${cls}">${arrow}</div>`;
    }).join('');

    this.shadowRoot.innerHTML = `
      <style>${isingStyles}</style>
      <div class="canvas-box">
        <div class="lattice-grid">
          ${spinCells}
        </div>

        <div class="hud">
          <span>H = -J ∑_⟨ij⟩ σ_i σ_j</span>
          <span>T &lt; T_c (Ferro Domain)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-ising-model')) {
  customElements.define('physics-ising-model', PhysicsIsingModel);
}
