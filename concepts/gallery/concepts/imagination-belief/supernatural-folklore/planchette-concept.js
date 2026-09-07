const planchetteStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .plc {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000602 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Spirit board arc letters in background */
  .plc-board-arc {
    position: absolute;
    top: 14px;
    width: 104px;
    height: 30px;
    border-top: 1px dashed rgba(140, 255, 170, 0.4);
    border-radius: 50% 50% 0 0;
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    box-sizing: border-box;
  }

  .plc-glyph {
    font-family: monospace;
    font-size: 7.5px;
    color: rgba(140, 255, 170, 0.6);
  }

  /* Gliding Heart-shaped Planchette assembly */
  .plc-planchette-rig {
    position: absolute;
    width: 52px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: plc-mystic-glide 6s ease-in-out infinite alternate;
  }

  @keyframes plc-mystic-glide {
    0% { transform: translate(-22px, 8px) rotate(-8deg); }
    35% { transform: translate(18px, -14px) rotate(6deg); }
    70% { transform: translate(-6px, -16px) rotate(-4deg); }
    100% { transform: translate(20px, 12px) rotate(8deg); }
  }

  /* Heart-shaped planchette wood body */
  .plc-body-svg {
    width: 52px;
    height: 58px;
    filter: drop-shadow(0 0 6px rgba(0, 204, 0, 0.5));
  }

  /* Center magnifying viewing aperture lens */
  .plc-lens {
    position: absolute;
    top: 24px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(140, 255, 170, 0.2) 60%, transparent 100%);
    box-shadow: 0 0 8px #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .plc-lens-cross {
    width: 8px;
    height: 8px;
    border: 1px dotted #ffffff;
    border-radius: 50%;
  }

  /* Ectoplasm spectral wisp trail */
  .plc-wisp {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px dashed rgba(214, 255, 224, 0.25);
    filter: blur(1.5px);
    animation: plc-wisp-drift 3s ease-in-out infinite alternate;
  }

  @keyframes plc-wisp-drift {
    0% { transform: scale(0.8) rotate(0deg); opacity: 0.2; }
    100% { transform: scale(1.3) rotate(180deg); opacity: 0.6; }
  }

  /* YES / NO corner markers */
  .plc-corner-l {
    position: absolute;
    bottom: 6px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
  }

  .plc-corner-r {
    position: absolute;
    bottom: 6px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
  }
`;

class ConceptPlanchette extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${planchetteStyles}</style>
      <div class="plc">
        <div class="plc-board-arc">
          <span class="plc-glyph">A</span>
          <span class="plc-glyph">B</span>
          <span class="plc-glyph">C</span>
          <span class="plc-glyph">M</span>
          <span class="plc-glyph">X</span>
          <span class="plc-glyph">Y</span>
          <span class="plc-glyph">Z</span>
        </div>

        <div class="plc-wisp"></div>

        <div class="plc-planchette-rig">
          <svg class="plc-body-svg" viewBox="0 0 52 58">
            <!-- Heart/shield shaped planchette with pointer tip -->
            <path d="M 26 2 C 38 18 50 32 46 48 C 42 56 32 56 26 50 C 20 56 10 56 6 48 C 2 32 14 18 26 2 Z" fill="url(#plcGrad)" stroke="#d6ffe0" stroke-width="1.5" />
            <defs>
              <linearGradient id="plcGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#00aa22" />
                <stop offset="60%" stop-color="#012409" />
                <stop offset="100%" stop-color="#001404" />
              </linearGradient>
            </defs>
          </svg>
          <div class="plc-lens">
            <div class="plc-lens-cross"></div>
          </div>
        </div>

        <div class="plc-corner-l">YES</div>
        <div class="plc-corner-r">NO</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-planchette')) {
  customElements.define('concept-planchette', ConceptPlanchette);
}
