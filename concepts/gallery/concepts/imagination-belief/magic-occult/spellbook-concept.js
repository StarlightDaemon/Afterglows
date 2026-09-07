const spellbookStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sbook {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .sbook-book {
    position: relative;
    width: 74px;
    height: 46px;
    margin-bottom: 16px;
    perspective: 220px;
  }

  .sbook-cover {
    position: absolute;
    bottom: 0;
    width: 37px;
    height: 42px;
    background: linear-gradient(180deg, #0e2a14 0%, #071a0c 100%);
    border: 1px solid rgba(0, 204, 0, 0.4);
    box-sizing: border-box;
  }

  .sbook-cover.left {
    left: 0;
    border-radius: 4px 1px 1px 6px;
    transform: skewY(6deg);
  }

  .sbook-cover.right {
    right: 0;
    border-radius: 1px 4px 6px 1px;
    transform: skewY(-6deg);
  }

  .sbook-page {
    position: absolute;
    bottom: 4px;
    width: 33px;
    height: 38px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.28), rgba(120, 255, 150, 0.12));
    border: 1px solid rgba(160, 255, 185, 0.3);
    box-sizing: border-box;
  }

  .sbook-page.stack-left {
    left: 2px;
    border-radius: 3px 1px 1px 4px;
    transform: skewY(6deg);
  }

  .sbook-page.stack-right {
    right: 2px;
    border-radius: 1px 3px 4px 1px;
    transform: skewY(-6deg);
  }

  .sbook-page.stack-left::after,
  .sbook-page.stack-right::after {
    content: '';
    position: absolute;
    inset: 6px 4px;
    background: repeating-linear-gradient(180deg, rgba(160, 255, 185, 0.4) 0 1px, transparent 1px 6px);
  }

  .sbook-leaf {
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 33px;
    height: 38px;
    background: linear-gradient(90deg, rgba(210, 255, 220, 0.5), rgba(140, 255, 170, 0.25));
    border: 1px solid rgba(190, 255, 205, 0.5);
    border-radius: 1px 3px 4px 1px;
    box-sizing: border-box;
    transform-origin: left center;
    animation: sbook-turn 5.5s ease-in-out infinite;
  }

  .sbook-glyph {
    position: absolute;
    color: rgba(180, 255, 195, 0.9);
    font-family: monospace;
    font-size: 11px;
    text-shadow: 0 0 6px rgba(140, 255, 170, 0.8);
    opacity: 0;
    animation: sbook-rise 5.5s ease-out infinite;
  }

  .sbook-glyph.g1 { left: 30px; bottom: 58px; animation-delay: 0s; }
  .sbook-glyph.g2 { left: 52px; bottom: 62px; animation-delay: -1.7s; }
  .sbook-glyph.g3 { left: 66px; bottom: 56px; animation-delay: -3.4s; }
  .sbook-glyph.g4 { left: 42px; bottom: 64px; animation-delay: -4.3s; }

  .sbook-glow {
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 70px;
    height: 26px;
    margin-left: -35px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(120, 255, 150, 0.3), transparent 70%);
    animation: sbook-glow 5.5s ease-in-out infinite;
  }

  @keyframes sbook-turn {
    0%, 12% { transform: rotateY(0deg); }
    46%, 58% { transform: rotateY(-168deg); }
    88%, 100% { transform: rotateY(0deg); }
  }

  @keyframes sbook-rise {
    0%, 20% { opacity: 0; transform: translateY(0) rotate(0deg); }
    32% { opacity: 1; }
    68% { opacity: 0.7; transform: translateY(-22px) rotate(12deg); }
    88%, 100% { opacity: 0; transform: translateY(-34px) rotate(-8deg); }
  }

  @keyframes sbook-glow {
    0%, 100% { opacity: 0.5; }
    45% { opacity: 1; }
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

  /* v2: Ancient grimoire with oxblood leather cover, gold filigree,
     aged parchment pages, glowing runes, and amber magical aura */
  .sbookc {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .sbookc-book {
    position: relative;
    width: 74px;
    height: 46px;
    margin-bottom: 16px;
    perspective: 220px;
  }

  /* Oxblood leather cover with gold filigree border */
  .sbookc-cover {
    position: absolute;
    bottom: 0;
    width: 37px;
    height: 42px;
    background: linear-gradient(180deg, #881337 0%, #4c0519 100%);
    border: 1.5px solid #facc15;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
  }

  .sbookc-cover.left {
    left: 0;
    border-radius: 4px 1px 1px 6px;
    transform: skewY(6deg);
  }

  .sbookc-cover.right {
    right: 0;
    border-radius: 1px 4px 6px 1px;
    transform: skewY(-6deg);
  }

  /* Aged parchment pages */
  .sbookc-page {
    position: absolute;
    bottom: 4px;
    width: 33px;
    height: 38px;
    background: linear-gradient(180deg, #fef3c7 0%, #fde68a 100%);
    border: 1px solid #d97706;
    box-shadow: inset 0 0 4px rgba(180, 83, 9, 0.3);
    box-sizing: border-box;
  }

  .sbookc-page.stack-left {
    left: 2px;
    border-radius: 3px 1px 1px 4px;
    transform: skewY(6deg);
  }

  .sbookc-page.stack-right {
    right: 2px;
    border-radius: 1px 3px 4px 1px;
    transform: skewY(-6deg);
  }

  .sbookc-page.stack-left::after,
  .sbookc-page.stack-right::after {
    content: '';
    position: absolute;
    inset: 6px 4px;
    background: repeating-linear-gradient(180deg, #78350f 0 1px, transparent 1px 6px);
  }

  /* Turning parchment leaf */
  .sbookc-leaf {
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 33px;
    height: 38px;
    background: linear-gradient(90deg, #fef3c7 0%, #fde68a 100%);
    border: 1px solid #facc15;
    border-radius: 1px 3px 4px 1px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    transform-origin: left center;
    animation: sbookc-turn 5.5s ease-in-out infinite;
  }

  /* Glowing mystical runes */
  .sbookc-glyph {
    position: absolute;
    color: #fde047;
    font-family: monospace;
    font-size: 13px;
    font-weight: bold;
    text-shadow: 0 0 10px #facc15, 0 0 18px #ca8a04;
    opacity: 0;
    animation: sbookc-rise 5.5s ease-out infinite;
  }

  .sbookc-glyph.g1 { left: 30px; bottom: 58px; color: #38bdf8; text-shadow: 0 0 10px #38bdf8; animation-delay: 0s; }
  .sbookc-glyph.g2 { left: 52px; bottom: 62px; color: #fde047; text-shadow: 0 0 10px #fde047; animation-delay: -1.7s; }
  .sbookc-glyph.g3 { left: 66px; bottom: 56px; color: #f472b6; text-shadow: 0 0 10px #f472b6; animation-delay: -3.4s; }
  .sbookc-glyph.g4 { left: 42px; bottom: 64px; color: #a855f7; text-shadow: 0 0 10px #a855f7; animation-delay: -4.3s; }

  /* Amber magical aura glow */
  .sbookc-glow {
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 70px;
    height: 26px;
    margin-left: -35px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(250, 204, 21, 0.4), transparent 70%);
    animation: sbookc-glow 5.5s ease-in-out infinite;
  }

  @keyframes sbookc-turn {
    0%, 12% { transform: rotateY(0deg); }
    46%, 58% { transform: rotateY(-168deg); }
    88%, 100% { transform: rotateY(0deg); }
  }

  @keyframes sbookc-rise {
    0%, 20% { opacity: 0; transform: translateY(0) rotate(0deg); }
    32% { opacity: 1; }
    68% { opacity: 0.8; transform: translateY(-22px) rotate(12deg); }
    88%, 100% { opacity: 0; transform: translateY(-34px) rotate(-8deg); }
  }

  @keyframes sbookc-glow {
    0%, 100% { opacity: 0.5; }
    45% { opacity: 1; }
  }
  `,
};

const spellbookMarkup = {
  v1: `
      <div class="sbook">
        <div class="sbook-glow"></div>
        <span class="sbook-glyph g1">ᚱ</span>
        <span class="sbook-glyph g2">ᛟ</span>
        <span class="sbook-glyph g3">ᚦ</span>
        <span class="sbook-glyph g4">ᛉ</span>
        <div class="sbook-book">
          <div class="sbook-cover left"></div>
          <div class="sbook-cover right"></div>
          <div class="sbook-page stack-left"></div>
          <div class="sbook-page stack-right"></div>
          <div class="sbook-leaf"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="sbookc">
        <div class="sbookc-glow"></div>
        <span class="sbookc-glyph g1">ᚱ</span>
        <span class="sbookc-glyph g2">ᛟ</span>
        <span class="sbookc-glyph g3">ᚦ</span>
        <span class="sbookc-glyph g4">ᛉ</span>
        <div class="sbookc-book">
          <div class="sbookc-cover left"></div>
          <div class="sbookc-cover right"></div>
          <div class="sbookc-page stack-left"></div>
          <div class="sbookc-page stack-right"></div>
          <div class="sbookc-leaf"></div>
        </div>
      </div>
    `,
};

class ConceptSpellbook extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${spellbookStyles[version] || spellbookStyles.v2}</style>${spellbookMarkup[version] || spellbookMarkup.v2}`;
  }
}

if (!customElements.get('concept-spellbook')) {
  customElements.define('concept-spellbook', ConceptSpellbook);
}
