const runeCircleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rune {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
  }

  .rune-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
  }

  .rune-ring.outer {
    width: 92px;
    height: 92px;
    margin: -46px 0 0 -46px;
    border: 1px solid rgba(0, 204, 0, 0.4);
    animation: rune-spin 14s linear infinite;
  }

  .rune-ring.inner {
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    border: 1px dashed rgba(0, 204, 0, 0.35);
    animation: rune-spin 9s linear infinite reverse;
  }

  .rune-glyph {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    color: rgba(160, 255, 185, 0.85);
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    text-shadow: 0 0 5px rgba(140, 255, 170, 0.7);
    animation: rune-glyph 5.2s ease-in-out infinite;
  }

  /* Eight glyphs stationed around the outer ring. */
  .rune-glyph.g1 { transform: rotate(0deg) translateY(-40px); animation-delay: 0s; }
  .rune-glyph.g2 { transform: rotate(45deg) translateY(-40px); animation-delay: -0.65s; }
  .rune-glyph.g3 { transform: rotate(90deg) translateY(-40px); animation-delay: -1.3s; }
  .rune-glyph.g4 { transform: rotate(135deg) translateY(-40px); animation-delay: -1.95s; }
  .rune-glyph.g5 { transform: rotate(180deg) translateY(-40px); animation-delay: -2.6s; }
  .rune-glyph.g6 { transform: rotate(225deg) translateY(-40px); animation-delay: -3.25s; }
  .rune-glyph.g7 { transform: rotate(270deg) translateY(-40px); animation-delay: -3.9s; }
  .rune-glyph.g8 { transform: rotate(315deg) translateY(-40px); animation-delay: -4.55s; }

  .rune-triangle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    margin: -32px 0 0 -32px;
    animation: rune-spin 22s linear infinite;
  }

  .rune-triangle svg {
    width: 100%;
    height: 100%;
  }

  .rune-triangle polygon {
    fill: none;
    stroke: rgba(120, 255, 150, 0.4);
    stroke-width: 1;
  }

  .rune-sigil {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 3px;
    transform: rotate(45deg);
    background: rgba(0, 204, 0, 0.12);
    border: 1px solid rgba(160, 255, 185, 0.7);
    box-shadow: 0 0 10px rgba(120, 255, 150, 0.5), inset 0 0 6px rgba(140, 255, 170, 0.4);
    animation: rune-sigil 5.2s ease-in-out infinite;
  }

  .rune-flare {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(120, 255, 150, 0.28) 0 20%, transparent 62%);
    opacity: 0;
    animation: rune-flare 5.2s ease-out infinite;
  }

  @keyframes rune-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rune-glyph {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 1; }
  }

  @keyframes rune-sigil {
    0%, 58%, 100% { transform: rotate(45deg) scale(1); box-shadow: 0 0 8px rgba(120, 255, 150, 0.4), inset 0 0 5px rgba(140, 255, 170, 0.3); }
    68% { transform: rotate(45deg) scale(1.3); box-shadow: 0 0 20px rgba(180, 255, 200, 0.95), inset 0 0 10px rgba(200, 255, 212, 0.8); }
    80% { transform: rotate(45deg) scale(1.05); }
  }

  @keyframes rune-flare {
    0%, 62% { opacity: 0; transform: scale(0.5); }
    70% { opacity: 1; transform: scale(1); }
    86%, 100% { opacity: 0; transform: scale(1.25); }
  }
`;

class ConceptRuneCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const glyphChars = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᛗ'];
    const glyphs = glyphChars
      .map((ch, i) => `<span class="rune-glyph g${i + 1}">${ch}</span>`)
      .join('');
    this.shadowRoot.innerHTML = `
      <style>${runeCircleStyles}</style>
      <div class="rune">
        <div class="rune-flare"></div>
        <div class="rune-ring outer">${glyphs}</div>
        <div class="rune-ring inner"></div>
        <div class="rune-triangle">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <polygon points="32,3 60,53 4,53"></polygon>
            <polygon points="32,61 4,11 60,11"></polygon>
          </svg>
        </div>
        <div class="rune-sigil"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-rune-circle')) {
  customElements.define('concept-rune-circle', ConceptRuneCircle);
}
