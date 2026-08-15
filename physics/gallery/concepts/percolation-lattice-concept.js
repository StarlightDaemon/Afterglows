const percStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1618 0%, #020406 100%);
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

  .grid-box {
    display: grid;
    grid-template-columns: repeat(8, 10px);
    grid-template-rows: repeat(8, 10px);
    gap: 2px;
    padding: 5px;
    background: rgba(10, 15, 20, 0.9);
    border: 1.2px solid #223344;
    border-radius: 4px;
  }

  .site {
    width: 10px;
    height: 10px;
    border-radius: 2px;
  }

  .empty {
    background: #101520;
  }

  .occupied-isolated {
    background: rgba(0, 229, 255, 0.35);
    border: 0.8px solid #00e5ff;
  }

  /* Spanning cluster connecting top to bottom (percolation pathway) */
  .spanning-cluster {
    background: #00ff66;
    border: 0.8px solid #00ff66;
    box-shadow: 0 0 4px #00ff66;
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
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  /* Motion pass */
  /* Connectivity pulse floods the spanning cluster */
  .spanning-cluster { animation: perc-flood 2.2s ease-in-out infinite alternate; }
  .occupied-isolated { animation: perc-iso 2.2s ease-in-out infinite alternate-reverse; }
  @keyframes perc-flood { from { opacity: 0.65; filter: none; } to { opacity: 1; filter: drop-shadow(0 0 4px currentColor); } }
  @keyframes perc-iso { from { opacity: 0.9; } to { opacity: 0.55; } }

`;

class PhysicsPercolationLattice extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // 8x8 site percolation grid at p ≈ 0.60 > p_c (0.5927) showing spanning cluster (S)
    // 0: empty, 1: isolated/finite, 2: spanning backbone
    const grid = [
      0, 2, 2, 0, 1, 0, 1, 0,
      1, 0, 2, 2, 0, 1, 1, 0,
      0, 1, 0, 2, 2, 1, 0, 1,
      0, 0, 1, 0, 2, 2, 0, 0,
      1, 1, 0, 1, 0, 2, 2, 1,
      0, 0, 1, 1, 2, 2, 0, 0,
      1, 0, 0, 2, 2, 0, 1, 1,
      0, 1, 2, 2, 0, 1, 0, 0,
    ];

    const cells = grid.map(state => {
      let cls = 'site empty';
      if (state === 1) cls = 'site occupied-isolated';
      if (state === 2) cls = 'site spanning-cluster';
      return `<div class="${cls}"></div>`;
    }).join('');

    this.shadowRoot.innerHTML = `
      <style>${percStyles}</style>
      <div class="canvas-box">
        <div class="grid-box">
          ${cells}
        </div>

        <div class="hud">
          <span>p_c ≈ 0.5927 (2D Square)</span>
          <span>Spanning Cluster (p &gt; p_c)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-percolation-lattice')) {
  customElements.define('physics-percolation-lattice', PhysicsPercolationLattice);
}
