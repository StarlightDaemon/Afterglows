const loomStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A loom weaving cloth: the shed opens as alternate warp threads
     lift, the shuttle flies across laying the weft, the beater packs
     it down, and the woven band grows at the base. */
  .lm {
    width: 116px;
    height: 92px;
    position: relative;
  }

  /* Frame. */
  .lm-frame {
    position: absolute;
    left: 6px;
    right: 6px;
    top: 6px;
    bottom: 6px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 3px;
  }

  /* Warp threads: vertical lines; alternate ones lift to open the
     shed. Odd and even groups animate in opposition. */
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

  /* Shuttle: flies left-right across the shed, laying weft. */
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

  /* Weft trail following the shuttle. */
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

  /* Beater bar: swings down to pack the weft after each pass. */
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

  /* Woven cloth building at the bottom. */
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
`;

class ConceptLoom extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const warps = [];
    for (let i = 0; i < 13; i++) {
      const cls = i % 2 === 0 ? 'odd' : 'even';
      const left = 14 + i * 7;
      const delay = -(i % 2) * 0.0;
      warps.push(`<div class="lm-warp ${cls}" style="left:${left}px;animation-delay:${delay}s"></div>`);
    }
    this.shadowRoot.innerHTML = `
      <style>${loomStyles}</style>
      <div class="lm">
        <div class="lm-frame"></div>
        ${warps.join('')}
        <div class="lm-weft"></div>
        <div class="lm-shuttle"></div>
        <div class="lm-beater"></div>
        <div class="lm-cloth"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-loom')) {
  customElements.define('concept-loom', ConceptLoom);
}
