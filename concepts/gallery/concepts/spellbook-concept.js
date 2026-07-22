const spellbookStyles = `
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

  /* The turning leaf — swings around the spine like a real page. */
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
`;

class ConceptSpellbook extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spellbookStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-spellbook')) {
  customElements.define('concept-spellbook', ConceptSpellbook);
}
