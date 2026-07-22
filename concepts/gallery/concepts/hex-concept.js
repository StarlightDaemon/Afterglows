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
    background-image: radial-gradient(var(--accent, #00cc00) 1px, transparent 1px);
    background-size: 10px 10px;
    mask-image: linear-gradient(0deg, transparent, #000 50%, transparent);
    animation: scan 3s infinite;
  }

  @keyframes scan {
    to { background-position: 0 100% }
  }

  /* --- v2: a true honeycomb with a travelling luminance wave --- */
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
  }

  .hexgrid polygon {
    fill: rgba(0, 204, 0, 0.03);
    stroke: rgba(0, 204, 0, 0.4);
    stroke-width: 1;
    animation: hex-wave 3.6s ease-in-out infinite;
  }

  /* Diagonal wavefront: delay grows along x+y. */
  .hexgrid polygon.w0 { animation-delay: 0s; }
  .hexgrid polygon.w1 { animation-delay: 0.24s; }
  .hexgrid polygon.w2 { animation-delay: 0.48s; }
  .hexgrid polygon.w3 { animation-delay: 0.72s; }
  .hexgrid polygon.w4 { animation-delay: 0.96s; }
  .hexgrid polygon.w5 { animation-delay: 1.2s; }
  .hexgrid polygon.w6 { animation-delay: 1.44s; }

  @keyframes hex-wave {
    0%, 40%, 100% {
      fill: rgba(0, 204, 0, 0.03);
      stroke: rgba(0, 204, 0, 0.4);
    }
    12% {
      fill: rgba(140, 255, 170, 0.32);
      stroke: rgba(200, 255, 212, 0.95);
    }
    24% {
      fill: rgba(0, 204, 0, 0.08);
      stroke: rgba(0, 204, 0, 0.55);
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
