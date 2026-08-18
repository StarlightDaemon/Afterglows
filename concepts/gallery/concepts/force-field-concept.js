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
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(160, 255, 185, 0.95), rgba(30, 120, 45, 0.95));
    box-shadow: 0 0 14px rgba(0, 255, 100, 0.8);
    animation: ffield-core-spin 4s linear infinite;
  }

  @keyframes ffield-core-spin {
    0% { transform: rotate(0deg) scale(0.9); }
    50% { transform: rotate(180deg) scale(1.25); }
    100% { transform: rotate(360deg) scale(0.9); }
  }

  .ffield-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    animation: ffield-mesh-spin 16s linear infinite;
  }

  @keyframes ffield-mesh-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .ffield-hex {
    fill: rgba(0, 204, 0, 0.08);
    stroke: rgba(0, 204, 0, 0.5);
    stroke-width: 1.2;
    animation: ffield-hex 1.8s ease-in-out infinite;
  }

  .ffield-hex.h0 { animation-delay: 0s; }
  .ffield-hex.h1 { animation-delay: 0.2s; }
  .ffield-hex.h2 { animation-delay: 0.4s; }
  .ffield-hex.h3 { animation-delay: 0.6s; }

  .ffield-bolt {
    position: absolute;
    top: 2px;
    right: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px 3px #00ff66;
    opacity: 0;
    animation: ffield-bolt 1.8s ease-in infinite;
  }

  .ffield-impact {
    position: absolute;
    top: 28px;
    left: 64px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff, rgba(0, 255, 100, 0.6) 60%, transparent);
    opacity: 0;
    animation: ffield-impact 1.8s ease-out infinite;
  }

  @keyframes ffield-hex {
    0%, 30% {
      fill: rgba(0, 204, 0, 0.08);
      stroke: rgba(0, 204, 0, 0.5);
    }
    45% {
      fill: rgba(140, 255, 170, 0.45);
      stroke: #00ff66;
      filter: drop-shadow(0 0 4px #00ff66);
    }
    60%, 100% {
      fill: rgba(0, 204, 0, 0.08);
      stroke: rgba(0, 204, 0, 0.5);
    }
  }

  @keyframes ffield-bolt {
    0% { opacity: 0; transform: translate(0, 0) scale(0.6); }
    15% { opacity: 1; }
    45% { opacity: 1; transform: translate(-36px, 36px) scale(1.2); }
    50%, 100% { opacity: 0; transform: translate(-42px, 42px) scale(1.4); }
  }

  @keyframes ffield-impact {
    0%, 45% { opacity: 0; transform: scale(0.3); }
    52% { opacity: 1; transform: scale(1.8); }
    75%, 100% { opacity: 0; transform: scale(3.2); }
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
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 4px;
    background: linear-gradient(135deg, #f472b6 0%, #c084fc 50%, #7e22ce 100%);
    box-shadow: 0 0 14px #c084fc, 0 0 24px #ec4899;
    animation: ffieldc-core-spin 4s linear infinite;
  }

  @keyframes ffieldc-core-spin {
    0% { transform: rotate(0deg) scale(0.9); }
    50% { transform: rotate(180deg) scale(1.25); }
    100% { transform: rotate(360deg) scale(0.9); }
  }

  .ffieldc-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    animation: ffieldc-mesh-spin 16s linear infinite;
  }

  @keyframes ffieldc-mesh-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Cyan hexagonal forcefield mesh */
  .ffieldc-hex {
    fill: rgba(6, 182, 212, 0.08);
    stroke: rgba(56, 189, 248, 0.5);
    stroke-width: 1.2;
    animation: ffieldc-hex 1.8s ease-in-out infinite;
  }

  .ffieldc-hex.h0 { animation-delay: 0s; }
  .ffieldc-hex.h1 { animation-delay: 0.2s; }
  .ffieldc-hex.h2 { animation-delay: 0.4s; }
  .ffieldc-hex.h3 { animation-delay: 0.6s; }

  /* Red/Orange plasma projectile bolt */
  .ffieldc-bolt {
    position: absolute;
    top: 2px;
    right: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px 3px #f97316, 0 0 16px #ef4444;
    opacity: 0;
    animation: ffieldc-bolt 1.8s ease-in infinite;
  }

  /* Deflection flare impact */
  .ffieldc-impact {
    position: absolute;
    top: 28px;
    left: 64px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, #fde047 40%, #ea580c 80%);
    box-shadow: 0 0 14px #facc15, 0 0 24px #f97316;
    opacity: 0;
    animation: ffieldc-impact 1.8s ease-out infinite;
  }

  @keyframes ffieldc-hex {
    0%, 30% {
      fill: rgba(6, 182, 212, 0.08);
      stroke: rgba(56, 189, 248, 0.5);
    }
    45% {
      fill: rgba(56, 189, 248, 0.5);
      stroke: #00f0ff;
      filter: drop-shadow(0 0 6px #00f0ff);
    }
    60%, 100% {
      fill: rgba(6, 182, 212, 0.08);
      stroke: rgba(56, 189, 248, 0.5);
    }
  }

  @keyframes ffieldc-bolt {
    0% { opacity: 0; transform: translate(0, 0) scale(0.6); }
    15% { opacity: 1; }
    45% { opacity: 1; transform: translate(-36px, 36px) scale(1.2); }
    50%, 100% { opacity: 0; transform: translate(-42px, 42px) scale(1.4); }
  }

  @keyframes ffieldc-impact {
    0%, 45% { opacity: 0; transform: scale(0.3); }
    52% { opacity: 1; transform: scale(1.8); }
    75%, 100% { opacity: 0; transform: scale(3.2); }
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
