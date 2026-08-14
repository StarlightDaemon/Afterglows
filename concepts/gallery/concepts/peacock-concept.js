const peacockStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pk {
    width: 108px;
    height: 100px;
    position: relative;
  }

  .pk-fan {
    position: absolute;
    left: 50%;
    bottom: 22px;
    width: 0;
    height: 0;
  }

  .pk-ray {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    height: 44px;
    margin-left: -3px;
    transform-origin: 50% 100%;
    animation: pk-open 6s ease-in-out infinite;
  }

  .pk-quill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1.5px;
    height: 100%;
    margin-left: -0.75px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.5), rgba(140, 255, 170, 0.7));
  }

  .pk-eye {
    position: absolute;
    left: 50%;
    top: -2px;
    width: 9px;
    height: 11px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 45%,
      rgba(0, 40, 8, 0.95) 0 28%,
      rgba(190, 255, 205, 0.9) 30% 45%,
      rgba(0, 160, 32, 0.8) 55%,
      rgba(0, 110, 22, 0.6));
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.5);
    animation: pk-shimmer 6s ease-in-out infinite;
  }

  .pk-ray.a1 { --end: -80deg; }
  .pk-ray.a2 { --end: -60deg; }
  .pk-ray.a3 { --end: -40deg; }
  .pk-ray.a4 { --end: -20deg; }
  .pk-ray.a5 { --end: 0deg; height: 50px; }
  .pk-ray.a6 { --end: 20deg; }
  .pk-ray.a7 { --end: 40deg; }
  .pk-ray.a8 { --end: 60deg; }
  .pk-ray.a9 { --end: 80deg; }

  @keyframes pk-open {
    0%, 10% { transform: rotate(0deg) scaleY(0.5); }
    38% { transform: rotate(var(--end)) scaleY(1); }
    68% { transform: rotate(var(--end)) scaleY(1); }
    90%, 100% { transform: rotate(0deg) scaleY(0.5); }
  }

  @keyframes pk-shimmer {
    0%, 38% { filter: brightness(0.8); }
    46% { filter: brightness(1.5); }
    54% { filter: brightness(0.9); }
    62% { filter: brightness(1.4); }
    70%, 100% { filter: brightness(0.9); }
  }

  .pk-body {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 16px;
    height: 24px;
    margin-left: -8px;
    border-radius: 50% 50% 45% 45%;
    background: radial-gradient(ellipse at 45% 35%, rgba(190, 255, 205, 0.7), rgba(0, 130, 26, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.6);
    z-index: 3;
    animation: pk-shiver 6s ease-in-out infinite;
  }

  @keyframes pk-shiver {
    0%, 44%, 100% { transform: translateX(0); }
    48% { transform: translateX(-1.5px); }
    52% { transform: translateX(1.5px); }
    56% { transform: translateX(-1px); }
    60% { transform: translateX(0); }
  }

  .pk-neck {
    position: absolute;
    left: 50%;
    bottom: 34px;
    width: 6px;
    height: 20px;
    margin-left: -3px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 150, 30, 0.8));
    z-index: 3;
  }

  .pk-head {
    position: absolute;
    left: 50%;
    bottom: 52px;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(214, 255, 224, 0.9), rgba(0, 140, 28, 0.9));
    z-index: 3;
  }

  .pk-head::before {
    content: '';
    position: absolute;
    left: 50%;
    top: -6px;
    width: 1px;
    height: 6px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.8);
    box-shadow: -2px 0 0 rgba(140, 255, 170, 0.7), 2px 0 0 rgba(140, 255, 170, 0.7);
  }

  .pk-head::after {
    content: '';
    position: absolute;
    left: -3px;
    top: 3px;
    width: 4px;
    height: 2px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background: rgba(214, 255, 224, 0.9);
  }

  .pk-leg {
    position: absolute;
    bottom: 4px;
    width: 1.5px;
    height: 12px;
    background: rgba(140, 255, 170, 0.7);
    z-index: 3;
  }

  .pk-leg.l1 { left: 48px; }
  .pk-leg.l2 { left: 56px; }
  `,

  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Royal Indian Peacock with iridescent cobalt sapphire neck and breast,
     shimmering emerald and bronze fan train feathers, and glowing multi-ring eyespots. */
  .pkc {
    width: 108px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .pkc-fan {
    position: absolute;
    left: 50%;
    bottom: 22px;
    width: 0;
    height: 0;
  }

  .pkc-ray {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    height: 44px;
    margin-left: -3px;
    transform-origin: 50% 100%;
    animation: pkc-open 6s ease-in-out infinite;
  }

  /* Emerald quill rachis */
  .pkc-quill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1.5px;
    height: 100%;
    margin-left: -0.75px;
    background: linear-gradient(180deg, #10b981, #047857);
    box-shadow: 0 0 2px rgba(16, 185, 129, 0.6);
  }

  /* Ocellus eyespot with concentric rings (black pupil, blue iris, turquoise ring, golden bronze halo) */
  .pkc-eye {
    position: absolute;
    left: 50%;
    top: -2px;
    width: 10px;
    height: 12px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 45%,
      #09090b 0 24%,
      #0284c7 26% 45%,
      #06b6d4 47% 62%,
      #facc15 64% 78%,
      #15803d 80% 100%);
    box-shadow: 0 0 6px rgba(6, 182, 212, 0.7);
    animation: pkc-shimmer 6s ease-in-out infinite;
  }

  .pkc-ray.a1 { --end: -80deg; }
  .pkc-ray.a2 { --end: -60deg; }
  .pkc-ray.a3 { --end: -40deg; }
  .pkc-ray.a4 { --end: -20deg; }
  .pkc-ray.a5 { --end: 0deg; height: 50px; }
  .pkc-ray.a6 { --end: 20deg; }
  .pkc-ray.a7 { --end: 40deg; }
  .pkc-ray.a8 { --end: 60deg; }
  .pkc-ray.a9 { --end: 80deg; }

  @keyframes pkc-open {
    0%, 10% { transform: rotate(0deg) scaleY(0.5); }
    38% { transform: rotate(var(--end)) scaleY(1); }
    68% { transform: rotate(var(--end)) scaleY(1); }
    90%, 100% { transform: rotate(0deg) scaleY(0.5); }
  }

  @keyframes pkc-shimmer {
    0%, 38% { filter: brightness(0.9); }
    46% { filter: brightness(1.4) drop-shadow(0 0 4px #38bdf8); }
    54% { filter: brightness(0.95); }
    62% { filter: brightness(1.35) drop-shadow(0 0 4px #facc15); }
    70%, 100% { filter: brightness(0.9); }
  }

  /* Iridescent cobalt sapphire body */
  .pkc-body {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 16px;
    height: 24px;
    margin-left: -8px;
    border-radius: 50% 50% 45% 45%;
    background: radial-gradient(ellipse at 45% 35%, #38bdf8 0%, #1d4ed8 50%, #1e1b4b 100%);
    border: 1px solid #60a5fa;
    box-shadow: 0 0 8px rgba(37, 99, 235, 0.6);
    z-index: 3;
    animation: pkc-shiver 6s ease-in-out infinite;
  }

  @keyframes pkc-shiver {
    0%, 44%, 100% { transform: translateX(0); }
    48% { transform: translateX(-1.5px); }
    52% { transform: translateX(1.5px); }
    56% { transform: translateX(-1px); }
    60% { transform: translateX(0); }
  }

  .pkc-neck {
    position: absolute;
    left: 50%;
    bottom: 34px;
    width: 6px;
    height: 20px;
    margin-left: -3px;
    border-radius: 3px;
    background: linear-gradient(180deg, #60a5fa 0%, #1d4ed8 60%, #1e40af 100%);
    box-shadow: 0 0 6px rgba(96, 165, 250, 0.6);
    z-index: 3;
  }

  .pkc-head {
    position: absolute;
    left: 50%;
    bottom: 52px;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #93c5fd 0%, #1d4ed8 80%);
    z-index: 3;
  }

  /* Head crest fan with emerald/gold tips */
  .pkc-head::before {
    content: '';
    position: absolute;
    left: 50%;
    top: -6px;
    width: 1.5px;
    height: 6px;
    margin-left: -0.75px;
    background: #facc15;
    box-shadow: -2.5px 0 0 #10b981, 2.5px 0 0 #10b981;
  }

  /* Golden beak */
  .pkc-head::after {
    content: '';
    position: absolute;
    left: -3px;
    top: 3px;
    width: 4px;
    height: 2px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background: #fbbf24;
  }

  .pkc-leg {
    position: absolute;
    bottom: 4px;
    width: 1.5px;
    height: 12px;
    background: #b45309;
    z-index: 3;
  }

  .pkc-leg.l1 { left: 48px; }
  .pkc-leg.l2 { left: 56px; }
  `,
};

class ConceptPeacock extends HTMLElement {
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
    const isV2 = version === 'v2';
    const pfx = isV2 ? 'pkc' : 'pk';
    const rays = ['a1','a2','a3','a4','a5','a6','a7','a8','a9']
      .map((c) => `<div class="${pfx}-ray ${c}"><div class="${pfx}-quill"></div><div class="${pfx}-eye"></div></div>`)
      .join('');
    this.shadowRoot.innerHTML = `
      <style>${peacockStyles[version] || peacockStyles.v2}</style>
      <div class="${pfx}">
        <div class="${pfx}-fan">${rays}</div>
        <div class="${pfx}-leg l1"></div>
        <div class="${pfx}-leg l2"></div>
        <div class="${pfx}-body"></div>
        <div class="${pfx}-neck"></div>
        <div class="${pfx}-head"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-peacock')) {
  customElements.define('concept-peacock', ConceptPeacock);
}
