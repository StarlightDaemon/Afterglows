const psychographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #150a22 0%, #05020a 100%);
    border: 1.5px solid rgba(179, 136, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(179, 136, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pg-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Aged parchment paper sheet */
  .pg-paper {
    position: absolute;
    width: 82px;
    height: 54px;
    background: #2a1b38;
    border: 1px solid #b388ff;
    border-radius: 3px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Spectral cursive writing trail */
  .pg-script-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .pg-cursive-path {
    stroke: #00ffff;
    stroke-dasharray: 80;
    stroke-dashoffset: 80;
    animation: pg-write-draw 4s ease-in-out infinite alternate;
  }

  @keyframes pg-write-draw {
    0% { stroke-dashoffset: 80; opacity: 0.2; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  /* Articulated brass writing armature */
  .pg-armature {
    position: absolute;
    top: 10px;
    left: 8px;
    width: 50px;
    height: 50px;
    transform-origin: 4px 4px;
    animation: pg-arm-move 4s ease-in-out infinite alternate;
  }

  @keyframes pg-arm-move {
    0% { transform: rotate(-10deg) translate(2px, 0); }
    50% { transform: rotate(15deg) translate(10px, 8px); }
    100% { transform: rotate(-5deg) translate(24px, 14px); }
  }

  .pg-brass-rod {
    position: absolute;
    width: 44px;
    height: 2px;
    background: #ffd54f;
    box-shadow: 0 0 4px #ffd54f;
  }

  /* Pen stylus holder & nib */
  .pg-pen-nib {
    position: absolute;
    right: 0;
    top: -4px;
    width: 4px;
    height: 10px;
    background: #ffffff;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    box-shadow: 0 0 6px #00ffff;
  }

  .pg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(179, 136, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPsychograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${psychographStyles}</style>
      <div class="pg-box">
        <div class="pg-stage">
          <div class="pg-paper">
            <svg class="pg-script-svg" viewBox="0 0 82 54">
              <!-- Undulating automatic spirit script -->
              <path class="pg-cursive-path" d="M 10 24 Q 18 10 26 24 T 42 24 T 58 24 T 74 34 Q 60 44 46 36 T 16 38" fill="none" stroke-width="1.2" stroke-linecap="round" />
            </svg>
          </div>

          <div class="pg-armature">
            <div class="pg-brass-rod"></div>
            <div class="pg-pen-nib"></div>
          </div>
        </div>

        <div class="pg-label">PSYCHOGRAPH WRITING</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-psychograph')) {
  customElements.define('concept-psychograph', ConceptPsychograph);
}
