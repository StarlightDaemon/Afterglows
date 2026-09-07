const runeCircleStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Arcane glowing summoning circle with golden outer ring,
     Futhark glyphs, cyan inner ring, violet hexagram, and pulsing cosmic sigil */
  .runec {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
    font-family: monospace;
  }

  .runec-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
  }

  /* Gold outer circle */
  .runec-ring.outer {
    width: 92px;
    height: 92px;
    margin: -46px 0 0 -46px;
    border: 1.5px solid #facc15;
    box-shadow: 0 0 8px rgba(250, 204, 21, 0.6);
    animation: runec-spin 14s linear infinite;
  }

  /* Cyan inner dashed celestial ring */
  .runec-ring.inner {
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    border: 1.5px dashed #38bdf8;
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.5);
    animation: runec-spin 9s linear infinite reverse;
  }

  /* Radiant golden runic glyphs */
  .runec-glyph {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    color: #fef08a;
    font-size: 10px;
    font-weight: bold;
    line-height: 12px;
    text-align: center;
    text-shadow: 0 0 8px #facc15, 0 0 12px #ea580c;
    animation: runec-glyph 5.2s ease-in-out infinite;
  }

  .runec-glyph.g1 { transform: rotate(0deg) translateY(-40px); animation-delay: 0s; }
  .runec-glyph.g2 { transform: rotate(45deg) translateY(-40px); animation-delay: -0.65s; }
  .runec-glyph.g3 { transform: rotate(90deg) translateY(-40px); animation-delay: -1.3s; }
  .runec-glyph.g4 { transform: rotate(135deg) translateY(-40px); animation-delay: -1.95s; }
  .runec-glyph.g5 { transform: rotate(180deg) translateY(-40px); animation-delay: -2.6s; }
  .runec-glyph.g6 { transform: rotate(225deg) translateY(-40px); animation-delay: -3.25s; }
  .runec-glyph.g7 { transform: rotate(270deg) translateY(-40px); animation-delay: -3.9s; }
  .runec-glyph.g8 { transform: rotate(315deg) translateY(-40px); animation-delay: -4.55s; }

  /* Violet hexagram geometry */
  .runec-triangle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    margin: -32px 0 0 -32px;
    animation: runec-spin 22s linear infinite;
  }

  .runec-triangle svg {
    width: 100%;
    height: 100%;
  }

  .runec-triangle polygon {
    fill: none;
    stroke: #c084fc;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #a855f7);
  }

  /* Central raw eldritch core */
  .runec-sigil {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 3px;
    transform: rotate(45deg);
    background: radial-gradient(circle, #fde047 0%, #ea580c 60%, rgba(220, 38, 38, 0.4) 100%);
    border: 1.5px solid #fef08a;
    box-shadow: 0 0 14px #facc15, inset 0 0 8px #ffffff;
    animation: runec-sigil 5.2s ease-in-out infinite;
  }

  /* Outward energy flare wave */
  .runec-flare {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.4) 0 20%, transparent 62%);
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
    opacity: 0;
    animation: runec-flare 5.2s ease-out infinite;
  }

  @keyframes runec-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes runec-glyph {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  @keyframes runec-sigil {
    0%, 58%, 100% { transform: rotate(45deg) scale(1); box-shadow: 0 0 10px #facc15; }
    68% { transform: rotate(45deg) scale(1.3); box-shadow: 0 0 24px #fde047, 0 0 32px #ea580c; }
    80% { transform: rotate(45deg) scale(1.05); }
  }

  @keyframes runec-flare {
    0%, 62% { opacity: 0; transform: scale(0.5); }
    70% { opacity: 1; transform: scale(1); }
    86%, 100% { opacity: 0; transform: scale(1.25); }
  }
  `,
};

class ConceptRuneCircle extends HTMLElement {
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
    const glyphChars = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᛗ'];
    const pfx = version === 'v2' ? 'runec' : 'rune';
    const glyphs = glyphChars
      .map((ch, i) => `<span class="${pfx}-glyph g${i + 1}">${ch}</span>`)
      .join('');

    const markup = version === 'v2' ? `
      <div class="runec">
        <div class="runec-flare"></div>
        <div class="runec-ring outer">${glyphs}</div>
        <div class="runec-ring inner"></div>
        <div class="runec-triangle">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <polygon points="32,3 60,53 4,53"></polygon>
            <polygon points="32,61 4,11 60,11"></polygon>
          </svg>
        </div>
        <div class="runec-sigil"></div>
      </div>
    ` : `
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

    this.shadowRoot.innerHTML = `<style>${runeCircleStyles[version] || runeCircleStyles.v2}</style>${markup}`;
  }
}

if (!customElements.get('concept-rune-circle')) {
  customElements.define('concept-rune-circle', ConceptRuneCircle);
}
