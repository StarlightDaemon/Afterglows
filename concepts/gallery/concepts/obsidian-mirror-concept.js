const obsidianStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .om-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #150a22 0%, #05020a 100%);
    border: 1.5px solid rgba(186, 104, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(186, 104, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .om-stage {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Carved dark wood outer frame */
  .om-wood-frame {
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: #21122a;
    border: 2px solid #b388ff;
    box-shadow: 0 0 10px rgba(179, 136, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Polished black volcanic obsidian mirror glass */
  .om-glass-plate {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 30%, #1c0e29 0%, #06020c 90%);
    border: 1.2px solid rgba(255, 255, 255, 0.35);
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Swirling ghostly scrying smoke */
  .om-smoke-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: om-swirl-fast 3.6s linear infinite;
  }

  @keyframes om-swirl-fast {
    to { transform: rotate(360deg); }
  }

  .om-smoke-path {
    fill: none;
    stroke: rgba(0, 229, 255, 0.6);
    stroke-width: 1.8;
    filter: drop-shadow(0 0 6px #00e5ff);
  }

  /* Enochian / Occult Spirit Glyph emerging and counter-rotating */
  .om-spirit-glyph {
    position: absolute;
    width: 18px;
    height: 18px;
    border: 1.5px solid #ffd54f;
    border-radius: 50%;
    box-shadow: 0 0 10px #ffd54f;
    animation: om-glyph-spin 2.8s linear infinite;
  }

  @keyframes om-glyph-spin {
    0% { transform: rotate(360deg) scale(0.8); opacity: 0.6; }
    50% { transform: rotate(180deg) scale(1.2); opacity: 1; filter: drop-shadow(0 0 6px #ffffff); }
    100% { transform: rotate(0deg) scale(0.8); opacity: 0.6; }
  }

  /* Orbiting ethereal apparition spark */
  .om-apparition-spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #b388ff;
    z-index: 6;
    animation: om-spark-orbit 2.4s linear infinite;
  }

  @keyframes om-spark-orbit {
    0% { transform: rotate(0deg) translate(22px) rotate(0deg); }
    100% { transform: rotate(-360deg) translate(22px) rotate(360deg); }
  }

  .om-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(186, 104, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptObsidianMirror extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${obsidianStyles}</style>
      <div class="om-box">
        <div class="om-stage">
          <div class="om-wood-frame">
            <div class="om-glass-plate">
              <div class="om-apparition-spark"></div>

              <svg class="om-smoke-svg" viewBox="-30 -30 60 60">
                <path class="om-smoke-path" d="M 0 -22 C 12 -22, 22 -12, 22 0 C 22 14, 10 22, 0 22 C -12 22, -18 10, -18 0 C -18 -8, -10 -12, 0 -12 C 6 -12, 10 -6, 10 0" />
              </svg>

              <div class="om-spirit-glyph"></div>
            </div>
          </div>
        </div>

        <div class="om-label">OBSIDIAN SCRYING MIRROR</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-obsidian-mirror')) {
  customElements.define('concept-obsidian-mirror', ConceptObsidianMirror);
}
