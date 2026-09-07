const loomStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lm {
    width: 116px;
    height: 92px;
    position: relative;
  }

  .lm-frame {
    position: absolute;
    left: 6px;
    right: 6px;
    top: 6px;
    bottom: 6px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 3px;
  }

  .lm-warp {
    position: absolute;
    top: 12px;
    width: 1.5px;
    height: 48px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: 50% 100%;
  }

  .lm-warp.odd { animation: lm-shed-odd 3s ease-in-out infinite; }
  .lm-warp.even { animation: lm-shed-even 3s ease-in-out infinite; }

  @keyframes lm-shed-odd {
    0%, 100% { transform: skewX(0deg) scaleY(1); }
    25% { transform: skewX(-8deg) scaleY(1.02); }
    50% { transform: skewX(0deg); }
    75% { transform: skewX(6deg); }
  }

  @keyframes lm-shed-even {
    0%, 100% { transform: skewX(0deg) scaleY(1); }
    25% { transform: skewX(8deg) scaleY(1.02); }
    50% { transform: skewX(0deg); }
    75% { transform: skewX(-6deg); }
  }

  .lm-shuttle {
    position: absolute;
    top: 30px;
    left: 12px;
    width: 16px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(0, 130, 26, 0.9), rgba(214, 255, 224, 0.9), rgba(0, 130, 26, 0.9));
    clip-path: polygon(0 50%, 15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%);
    animation: lm-shuttle 3s ease-in-out infinite;
  }

  @keyframes lm-shuttle {
    0% { left: 12px; }
    25% { left: 88px; }
    50% { left: 88px; }
    75% { left: 12px; }
    100% { left: 12px; }
  }

  .lm-weft {
    position: absolute;
    top: 33px;
    left: 12px;
    height: 1.5px;
    background: rgba(190, 255, 205, 0.6);
    animation: lm-weft 3s ease-in-out infinite;
  }

  @keyframes lm-weft {
    0% { width: 0; left: 12px; }
    25% { width: 76px; left: 12px; }
    50% { width: 76px; }
    52% { width: 0; left: 88px; }
    75% { width: 76px; left: 12px; }
    100% { width: 76px; left: 12px; }
  }

  .lm-beater {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 40px;
    height: 3px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 50% 100%;
    animation: lm-beat 3s ease-in-out infinite;
  }

  @keyframes lm-beat {
    0%, 20% { transform: translateY(0); }
    30% { transform: translateY(16px); }
    40% { transform: translateY(0); }
    70% { transform: translateY(0); }
    80% { transform: translateY(16px); }
    90%, 100% { transform: translateY(0); }
  }

  .lm-cloth {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 14px;
    background:
      repeating-linear-gradient(90deg, rgba(140, 255, 170, 0.5) 0 1.5px, transparent 1.5px 4px),
      repeating-linear-gradient(180deg, rgba(190, 255, 205, 0.45) 0 1.5px, transparent 1.5px 4px),
      linear-gradient(180deg, rgba(0, 120, 24, 0.4), rgba(0, 70, 14, 0.5));
    border: 1px solid rgba(0, 204, 0, 0.4);
    animation: lm-cloth 6s linear infinite;
  }

  @keyframes lm-cloth {
    0% { height: 10px; }
    92% { height: 18px; }
    96%, 100% { height: 10px; }
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

  /* v2: Wooden weaving loom with cyan & magenta alternating warp threads,
     flying golden boat shuttle, and colorful woven cloth */
  .lmc {
    width: 116px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Oak loom timber frame */
  .lmc-frame {
    position: absolute;
    left: 6px;
    right: 6px;
    top: 6px;
    bottom: 6px;
    border: 2.5px solid #ca8a04;
    border-radius: 3px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 0 6px #78350f;
  }

  /* Alternating cyan and magenta warp threads */
  .lmc-warp {
    position: absolute;
    top: 12px;
    width: 1.5px;
    height: 48px;
    background: #38bdf8;
    box-shadow: 0 0 3px #0284c7;
    transform-origin: 50% 100%;
  }

  .lmc-warp.even {
    background: #ec4899;
    box-shadow: 0 0 3px #be185d;
  }

  .lmc-warp.odd { animation: lmc-shed-odd 3s ease-in-out infinite; }
  .lmc-warp.even { animation: lmc-shed-even 3s ease-in-out infinite; }

  @keyframes lmc-shed-odd {
    0%, 100% { transform: skewX(0deg) scaleY(1); }
    25% { transform: skewX(-8deg) scaleY(1.02); }
    50% { transform: skewX(0deg); }
    75% { transform: skewX(6deg); }
  }

  @keyframes lmc-shed-even {
    0%, 100% { transform: skewX(0deg) scaleY(1); }
    25% { transform: skewX(8deg) scaleY(1.02); }
    50% { transform: skewX(0deg); }
    75% { transform: skewX(-6deg); }
  }

  /* Flying wooden boat shuttle */
  .lmc-shuttle {
    position: absolute;
    top: 30px;
    left: 12px;
    width: 16px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(90deg, #78350f, #facc15, #78350f);
    border: 0.5px solid #eab308;
    box-shadow: 0 0 6px #fde047;
    clip-path: polygon(0 50%, 15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%);
    animation: lmc-shuttle 3s ease-in-out infinite;
  }

  @keyframes lmc-shuttle {
    0% { left: 12px; }
    25% { left: 88px; }
    50% { left: 88px; }
    75% { left: 12px; }
    100% { left: 12px; }
  }

  /* Golden weft yarn trail */
  .lmc-weft {
    position: absolute;
    top: 33px;
    left: 12px;
    height: 1.5px;
    background: #fde047;
    box-shadow: 0 0 4px #facc15;
    animation: lmc-weft 3s ease-in-out infinite;
  }

  @keyframes lmc-weft {
    0% { width: 0; left: 12px; }
    25% { width: 76px; left: 12px; }
    50% { width: 76px; }
    52% { width: 0; left: 88px; }
    75% { width: 76px; left: 12px; }
    100% { width: 76px; left: 12px; }
  }

  /* Beater bar */
  .lmc-beater {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 40px;
    height: 3px;
    border-radius: 2px;
    background: #ca8a04;
    border: 0.5px solid #facc15;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    transform-origin: 50% 100%;
    animation: lmc-beat 3s ease-in-out infinite;
  }

  @keyframes lmc-beat {
    0%, 20% { transform: translateY(0); }
    30% { transform: translateY(16px); }
    40% { transform: translateY(0); }
    70% { transform: translateY(0); }
    80% { transform: translateY(16px); }
    90%, 100% { transform: translateY(0); }
  }

  /* Woven tapestry cloth */
  .lmc-cloth {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 14px;
    background:
      repeating-linear-gradient(90deg, #38bdf8 0 1.5px, #ec4899 1.5px 3px, #facc15 3px 4.5px, transparent 4.5px 6px),
      repeating-linear-gradient(180deg, #fde047 0 1.5px, transparent 1.5px 4px),
      linear-gradient(180deg, #6366f1 0%, #4338ca 100%);
    border: 1px solid #ca8a04;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
    animation: lmc-cloth 6s linear infinite;
  }

  @keyframes lmc-cloth {
    0% { height: 10px; }
    92% { height: 18px; }
    96%, 100% { height: 10px; }
  }
  `,
};

const loomMarkup = {
  v1: (warps) => `
      <div class="lm">
        <div class="lm-frame"></div>
        ${warps}
        <div class="lm-weft"></div>
        <div class="lm-shuttle"></div>
        <div class="lm-beater"></div>
        <div class="lm-cloth"></div>
      </div>
    `,
  v2: (warps) => `
      <div class="lmc">
        <div class="lmc-frame"></div>
        ${warps}
        <div class="lmc-weft"></div>
        <div class="lmc-shuttle"></div>
        <div class="lmc-beater"></div>
        <div class="lmc-cloth"></div>
      </div>
    `,
};

class ConceptLoom extends HTMLElement {
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
    const warpPrefix = version === 'v2' ? 'lmc-warp' : 'lm-warp';
    const warps = [];
    for (let i = 0; i < 13; i++) {
      const cls = i % 2 === 0 ? 'odd' : 'even';
      const left = 14 + i * 7;
      const delay = -(i % 2) * 0.0;
      warps.push(`<div class="${warpPrefix} ${cls}" style="left:${left}px;animation-delay:${delay}s"></div>`);
    }
    this.shadowRoot.innerHTML = `<style>${loomStyles[version] || loomStyles.v2}</style>${(loomMarkup[version] || loomMarkup.v2)(warps.join(''))}`;
  }
}

if (!customElements.get('concept-loom')) {
  customElements.define('concept-loom', ConceptLoom);
}
