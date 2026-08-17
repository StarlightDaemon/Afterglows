const cuneiformStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cun {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161005 0%, #060401 100%);
    border: 1.5px solid rgba(255, 170, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 170, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ancient clay tablet pillow block */
  .cun-tablet {
    position: relative;
    width: 82px;
    height: 72px;
    background: #2b1c0a;
    border: 1.5px solid #ffaa00;
    border-radius: 6px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9), 0 0 8px rgba(255, 170, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 6px 8px;
  }

  /* Ruled tablet register lines */
  .cun-register {
    width: 100%;
    height: 14px;
    border-bottom: 1px solid rgba(255, 170, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Wedge-shaped cuneiform glyph impressions */
  .cun-glyph {
    font-size: 8px;
    font-family: monospace;
    font-weight: bold;
    color: #ffd277;
    text-shadow: 1px 1px 2px #000000;
    transition: transform 0.2s;
  }

  .g-dyn {
    animation: cun-glyph-press 2.4s ease-in-out infinite;
  }

  @keyframes cun-glyph-press {
    0%, 30% { transform: scale(0.6); opacity: 0.5; }
    40%, 80% { transform: scale(1.3); opacity: 1; color: #ffffff; text-shadow: 0 0 6px #ffaa00; }
    100% { transform: scale(1); opacity: 0.9; color: #ffd277; }
  }

  /* Triangular reed stylus actively stepping and pressing into clay */
  .cun-stylus {
    position: absolute;
    top: 10px;
    right: 12px;
    width: 7px;
    height: 36px;
    background: linear-gradient(135deg, #ffffff 0%, #ffaa00 40%, #553300 100%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    box-shadow: 0 0 8px #ffea88;
    z-index: 8;
    animation: cun-stylus-circuit 2.4s ease-in-out infinite;
  }

  @keyframes cun-stylus-circuit {
    0% { transform: translate(-42px, 2px) rotate(15deg); }
    25% { transform: translate(-42px, 8px) rotate(35deg) scale(1.15); }
    50% { transform: translate(-22px, 18px) rotate(15deg); }
    75% { transform: translate(-22px, 24px) rotate(35deg) scale(1.15); }
    100% { transform: translate(-42px, 2px) rotate(15deg); }
  }

  .cun-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCuneiformTablet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cuneiformStyles}</style>
      <div class="cun">
        <div class="cun-tablet">
          <div class="cun-register">
            <span class="cun-glyph g-dyn">楔</span>
            <span class="cun-glyph">▼</span>
            <span class="cun-glyph">◀</span>
            <span class="cun-glyph">▲</span>
          </div>

          <div class="cun-register">
            <span class="cun-glyph">▶</span>
            <span class="cun-glyph g-dyn">▼</span>
            <span class="cun-glyph">楔</span>
            <span class="cun-glyph">▲</span>
          </div>

          <div class="cun-register">
            <span class="cun-glyph">▲</span>
            <span class="cun-glyph">◀</span>
            <span class="cun-glyph">▼</span>
            <span class="cun-glyph">▶</span>
          </div>

          <div class="cun-stylus"></div>
        </div>

        <div class="cun-label">CUNEIFORM TABLET</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cuneiform-tablet')) {
  customElements.define('concept-cuneiform-tablet', ConceptCuneiformTablet);
}
