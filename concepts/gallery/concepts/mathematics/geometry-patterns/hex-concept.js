const hexStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original scrolling dot field --- */
  .hex-v1 {
    width: 100px;
    height: 100px;
    background-image: radial-gradient(var(--accent, #00cc00) 1.5px, transparent 1.5px);
    background-size: 10px 10px;
    mask-image: radial-gradient(circle, #000 60%, transparent 100%);
    animation: hex-v1-spin 6s linear infinite, hex-v1-zoom 2.4s ease-in-out infinite alternate;
  }

  @keyframes hex-v1-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes hex-v1-zoom {
    0% { transform: scale(0.85); }
    100% { transform: scale(1.2); }
  }

  /* --- v2: a true honeycomb with geometric scaling & lattice rotation --- */
  .hexgrid {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: #000;
  }

  .hexgrid svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    animation: hex-lattice-spin 14s linear infinite;
  }

  @keyframes hex-lattice-spin {
    0% { transform: rotate(0deg) scale(0.95); }
    50% { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(0.95); }
  }

  .hexgrid polygon {
    fill: rgba(0, 204, 0, 0.08);
    stroke: rgba(0, 204, 0, 0.6);
    stroke-width: 1.2;
    transform-box: fill-box;
    transform-origin: center;
    animation: hex-wave 2.4s ease-in-out infinite;
  }

  /* Diagonal wavefront: delay grows along x+y. */
  .hexgrid polygon.w0 { animation-delay: 0s; }
  .hexgrid polygon.w1 { animation-delay: 0.16s; }
  .hexgrid polygon.w2 { animation-delay: 0.32s; }
  .hexgrid polygon.w3 { animation-delay: 0.48s; }
  .hexgrid polygon.w4 { animation-delay: 0.64s; }
  .hexgrid polygon.w5 { animation-delay: 0.8s; }
  .hexgrid polygon.w6 { animation-delay: 0.96s; }

  @keyframes hex-wave {
    0%, 50%, 100% {
      fill: rgba(0, 204, 0, 0.08);
      stroke: rgba(0, 204, 0, 0.6);
      transform: scale(0.85);
    }
    18% {
      fill: rgba(140, 255, 170, 0.45);
      stroke: #00ff66;
      filter: drop-shadow(0 0 6px #00ff66);
      transform: scale(1.35);
    }
    32% {
      fill: rgba(0, 204, 0, 0.15);
      stroke: rgba(0, 204, 0, 0.7);
      transform: scale(1);
    }
  }
`;

const hexMarkup = {
  v1: `<div class="hex-v1"></div>`,
};

class ConceptHex extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  buildV2() {
    // Pointy-top hex lattice covering the tile; wave class = ring index along
    // the x+y diagonal so the highlight sweeps corner to corner.
    const r = 11;
    const w = Math.sqrt(3) * r;
    const h = 1.5 * r;
    const hex = (cx, cy) => {
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i - 30);
        pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
      }
      return pts.join(' ');
    };
    let polys = '';
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 7; col++) {
        const cx = col * w + (row % 2 ? w / 2 : 0) - 4;
        const cy = row * h - 2;
        if (cx > 118 || cy > 118) continue;
        const wave = Math.min(6, Math.round((col + row) / 2));
        polys += `<polygon class="w${wave}" points="${hex(cx, cy)}"></polygon>`;
      }
    }
    return `<div class="hexgrid"><svg viewBox="0 0 104 104" aria-hidden="true">${polys}</svg></div>`;
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    const body = version === 'v1' ? hexMarkup.v1 : this.buildV2();
    this.shadowRoot.innerHTML = `<style>${hexStyles}</style>${body}`;
  }
}

if (!customElements.get('concept-hex')) {
  customElements.define('concept-hex', ConceptHex);
}
