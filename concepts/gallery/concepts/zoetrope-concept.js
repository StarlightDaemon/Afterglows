const zoetropeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ztr {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Support pedestal stand & base */
  .ztr-stand {
    position: absolute;
    bottom: 8px;
    width: 12px;
    height: 28px;
    background: linear-gradient(90deg, #004408, #8cffaa, #004408);
    border: 1px solid #ffffff;
    border-radius: 2px;
    z-index: 1;
  }

  .ztr-base {
    position: absolute;
    bottom: 8px;
    width: 38px;
    height: 6px;
    background: #008818;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    z-index: 1;
  }

  /* Rotating Zoetrope drum assembly */
  .ztr-drum-rig {
    position: relative;
    top: -8px;
    width: 78px;
    height: 52px;
    background: #011205;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 6px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Vertical viewing slits along top rim */
  .ztr-slit-band {
    width: 100%;
    height: 18px;
    background: repeating-linear-gradient(
      90deg,
      #011004 0px,
      #011004 6px,
      #ffffff 6px,
      #ffffff 8px,
      #011004 8px,
      #011004 14px
    );
    border-bottom: 1.5px solid #8cffaa;
    animation: ztr-slits-spin 1.2s linear infinite;
  }

  @keyframes ztr-slits-spin {
    0% { transform: translateX(0); }
    100% { transform: translateX(-14px); }
  }

  /* Internal animated silhouette figure (Galloping horse loop) */
  .ztr-anim-stage {
    position: relative;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000803;
  }

  /* Galloping horse animated sprite */
  .ztr-horse-svg {
    width: 32px;
    height: 22px;
    filter: drop-shadow(0 0 4px #8cffaa);
    animation: ztr-gallop 0.4s steps(4, end) infinite;
  }

  @keyframes ztr-gallop {
    0% { transform: translateY(0) scaleY(1); }
    25% { transform: translateY(-3px) scaleY(0.9); }
    50% { transform: translateY(-5px) scaleY(1.1); }
    75% { transform: translateY(-2px) scaleY(1); }
    100% { transform: translateY(0) scaleY(1); }
  }

  /* Stroboscopic optical shutter pulse */
  .ztr-shutter-pulse {
    position: absolute;
    inset: 0;
    background: rgba(214, 255, 224, 0.15);
    pointer-events: none;
    animation: ztr-shutter 0.1s steps(2, start) infinite;
  }

  @keyframes ztr-shutter {
    0%, 70% { opacity: 0; }
    80%, 100% { opacity: 1; }
  }

  /* Readout */
  .ztr-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptZoetrope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${zoetropeStyles}</style>
      <div class="ztr">
        <div class="ztr-stand"></div>
        <div class="ztr-base"></div>

        <div class="ztr-drum-rig">
          <div class="ztr-slit-band"></div>

          <div class="ztr-anim-stage">
            <div class="ztr-shutter-pulse"></div>

            <svg class="ztr-horse-svg" viewBox="0 0 32 22">
              <!-- Galloping horse silhouette -->
              <path d="M 4 12 C 6 8 12 7 18 8 C 22 5 26 2 28 6 C 26 10 24 12 20 12 C 22 16 26 20 28 21 C 24 21 20 17 18 14 C 14 15 10 16 6 21 C 4 21 6 16 6 14 C 4 15 2 16 1 15 C 2 13 3 12 4 12 Z" fill="#ffffff" />
            </svg>
          </div>
        </div>

        <div class="ztr-label">ZOETROPE 1834</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-zoetrope')) {
  customElements.define('concept-zoetrope', ConceptZoetrope);
}
