const forceFieldStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ffield {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ffield-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: -9px 0 0 -9px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(160, 255, 185, 0.9), rgba(30, 120, 45, 0.9));
    box-shadow: 0 0 10px rgba(120, 255, 150, 0.5);
    transform: rotate(45deg);
    animation: ffield-core 3.6s ease-in-out infinite;
  }

  .ffield-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .ffield-hex {
    fill: rgba(0, 204, 0, 0.04);
    stroke: rgba(0, 204, 0, 0.35);
    stroke-width: 1;
    animation: ffield-hex 5.4s ease-in-out infinite;
  }

  .ffield-hex.h0 { animation-delay: 0s; }
  .ffield-hex.h1 { animation-delay: 0.14s; }
  .ffield-hex.h2 { animation-delay: 0.28s; }
  .ffield-hex.h3 { animation-delay: 0.42s; }

  .ffield-bolt {
    position: absolute;
    top: -6px;
    right: 2px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #e6ffe9;
    box-shadow: 0 0 8px 2px rgba(220, 255, 228, 0.9);
    opacity: 0;
    animation: ffield-bolt 5.4s ease-in infinite;
  }

  .ffield-impact {
    position: absolute;
    top: 26px;
    left: 66px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(240, 255, 244, 1), rgba(160, 255, 185, 0.4) 70%);
    opacity: 0;
    animation: ffield-impact 5.4s ease-out infinite;
  }

  @keyframes ffield-core {
    0%, 100% { transform: rotate(45deg) scale(0.95); }
    50% { transform: rotate(45deg) scale(1.08); }
  }

  @keyframes ffield-hex {
    0%, 20% {
      fill: rgba(0, 204, 0, 0.04);
      stroke: rgba(0, 204, 0, 0.35);
    }
    26% {
      fill: rgba(140, 255, 170, 0.3);
      stroke: rgba(190, 255, 205, 0.95);
    }
    38%, 100% {
      fill: rgba(0, 204, 0, 0.04);
      stroke: rgba(0, 204, 0, 0.35);
    }
  }

  @keyframes ffield-bolt {
    0%, 8% { opacity: 0; transform: translate(0, 0); }
    12% { opacity: 1; }
    20% { opacity: 1; transform: translate(-30px, 30px); }
    22%, 100% { opacity: 0; transform: translate(-32px, 32px); }
  }

  @keyframes ffield-impact {
    0%, 20% { opacity: 0; transform: scale(0.4); }
    24% { opacity: 1; transform: scale(1.6); }
    34%, 100% { opacity: 0; transform: scale(2.6); }
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Sci-fi deflector shield with violet crystal core, cyan hexagonal mesh,
     and orange plasma bolt impact shockwave */
  .ffieldc {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Violet tachyon core emitter crystal */
  .ffieldc-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: -9px 0 0 -9px;
    border-radius: 4px;
    background: linear-gradient(135deg, #f472b6 0%, #c084fc 50%, #7e22ce 100%);
    box-shadow: 0 0 14px #c084fc, 0 0 24px #ec4899;
    transform: rotate(45deg);
    animation: ffieldc-core 3.6s ease-in-out infinite;
  }

  .ffieldc-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Cyan hexagonal forcefield mesh */
  .ffieldc-hex {
    fill: rgba(6, 182, 212, 0.05);
    stroke: rgba(56, 189, 248, 0.4);
    stroke-width: 1;
    animation: ffieldc-hex 5.4s ease-in-out infinite;
  }

  .ffieldc-hex.h0 { animation-delay: 0s; }
  .ffieldc-hex.h1 { animation-delay: 0.14s; }
  .ffieldc-hex.h2 { animation-delay: 0.28s; }
  .ffieldc-hex.h3 { animation-delay: 0.42s; }

  /* Red/Orange plasma projectile bolt */
  .ffieldc-bolt {
    position: absolute;
    top: -6px;
    right: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px 3px #f97316, 0 0 14px #ef4444;
    opacity: 0;
    animation: ffieldc-bolt 5.4s ease-in infinite;
  }

  /* Deflection flare impact */
  .ffieldc-impact {
    position: absolute;
    top: 26px;
    left: 66px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, #fde047 40%, #ea580c 80%);
    box-shadow: 0 0 14px #facc15, 0 0 20px #f97316;
    opacity: 0;
    animation: ffieldc-impact 5.4s ease-out infinite;
  }

  @keyframes ffieldc-core {
    0%, 100% { transform: rotate(45deg) scale(0.95); }
    50% { transform: rotate(45deg) scale(1.12); }
  }

  @keyframes ffieldc-hex {
    0%, 20% {
      fill: rgba(6, 182, 212, 0.05);
      stroke: rgba(56, 189, 248, 0.4);
    }
    26% {
      fill: rgba(56, 189, 248, 0.4);
      stroke: #00f0ff;
      filter: drop-shadow(0 0 4px #00f0ff);
    }
    38%, 100% {
      fill: rgba(6, 182, 212, 0.05);
      stroke: rgba(56, 189, 248, 0.4);
      filter: none;
    }
  }

  @keyframes ffieldc-bolt {
    0%, 8% { opacity: 0; transform: translate(0, 0); }
    12% { opacity: 1; }
    20% { opacity: 1; transform: translate(-30px, 30px); }
    22%, 100% { opacity: 0; transform: translate(-32px, 32px); }
  }

  @keyframes ffieldc-impact {
    0%, 20% { opacity: 0; transform: scale(0.4); }
    24% { opacity: 1; transform: scale(1.8); }
    34%, 100% { opacity: 0; transform: scale(3); }
  }
  `,
};

class ConceptForceField extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    const hex = (cx, cy) => {
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i);
        pts.push(`${(cx + 13 * Math.cos(a)).toFixed(1)},${(cy + 13 * Math.sin(a)).toFixed(1)}`);
      }
      return pts.join(' ');
    };
    const cells = [
      { x: 71.5, y: 30.2, d: 'h0' },
      { x: 52, y: 41.5, d: 'h1' },
      { x: 71.5, y: 52.8, d: 'h1' },
      { x: 91, y: 41.5, d: 'h1' },
      { x: 32.5, y: 30.2, d: 'h2' },
      { x: 32.5, y: 52.8, d: 'h2' },
      { x: 52, y: 64, d: 'h2' },
      { x: 91, y: 64, d: 'h2' },
      { x: 13, y: 41.5, d: 'h3' },
      { x: 32.5, y: 75.5, d: 'h3' },
      { x: 71.5, y: 75.5, d: 'h3' },
      { x: 13, y: 64, d: 'h3' },
    ];
    const hexClass = version === 'v1' ? 'ffield-hex' : 'ffieldc-hex';
    const polys = cells
      .map((c) => `<polygon class="${hexClass} ${c.d}" points="${hex(c.x, c.y)}"></polygon>`)
      .join('');

    if (version === 'v1') {
      this.shadowRoot.innerHTML = `
        <style>${forceFieldStyles.v1}</style>
        <div class="ffield">
          <svg class="ffield-svg" viewBox="0 0 104 104" aria-hidden="true">${polys}</svg>
          <div class="ffield-core"></div>
          <div class="ffield-bolt"></div>
          <div class="ffield-impact"></div>
        </div>
      `;
    } else {
      this.shadowRoot.innerHTML = `
        <style>${forceFieldStyles.v2}</style>
        <div class="ffieldc">
          <svg class="ffieldc-svg" viewBox="0 0 104 104" aria-hidden="true">${polys}</svg>
          <div class="ffieldc-core"></div>
          <div class="ffieldc-bolt"></div>
          <div class="ffieldc-impact"></div>
        </div>
      `;
    }
  }
}

if (!customElements.get('concept-force-field')) {
  customElements.define('concept-force-field', ConceptForceField);
}
