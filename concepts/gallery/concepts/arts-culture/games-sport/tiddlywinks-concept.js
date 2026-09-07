const tiddlyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tw-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d2218 0%, #040d08 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 230, 118, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tw-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Green felt mat playing field */
  .tw-felt-mat {
    position: absolute;
    bottom: 8px;
    width: 88px;
    height: 38px;
    background: #1b5e20;
    border: 1.5px solid #00e676;
    border-radius: 6px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6);
  }

  /* Central scoring cup (pot) */
  .tw-pot {
    position: absolute;
    bottom: 16px;
    left: 39px;
    width: 18px;
    height: 16px;
    background: #ffb74d;
    border: 1.5px solid #ffffff;
    border-radius: 2px 2px 6px 6px;
    box-shadow: 0 0 6px #ffb74d;
    z-index: 4;
  }

  /* Handheld large squidger pressing down on wink */
  .tw-squidger {
    position: absolute;
    bottom: 16px;
    left: 10px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #e040fb;
    border: 1.2px solid #ffffff;
    box-shadow: 0 0 4px #e040fb;
    animation: tw-press-squidger 2.4s ease-in-out infinite;
  }

  @keyframes tw-press-squidger {
    0%, 4% { transform: translate(0, 0) scale(1); }
    12% { transform: translate(6px, 3px) scale(0.8); }
    22%, 100% { transform: translate(0, 0) scale(1); }
  }

  /* Flying small wink counter leaping in arc */
  .tw-flying-wink {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00e5ff;
    border: 1.2px solid #ffffff;
    box-shadow: 0 0 9px #00e5ff, 0 0 4px #b2ebf2;
    animation: tw-wink-leap 2.4s ease-in-out infinite;
  }

  /* Second wink offset half a cycle so one is nearly always in flight */
  .tw-flying-wink.w2 {
    background: #ffea00;
    box-shadow: 0 0 9px #ffea00, 0 0 4px #fff9c4;
    animation-delay: -1.2s;
  }

  @keyframes tw-wink-leap {
    0%, 12% { bottom: 14px; left: 16px; opacity: 1; transform: scale(1) rotate(0deg); }
    32% { bottom: 42px; left: 32px; opacity: 1; transform: scale(1.15) rotate(180deg); }
    52% { bottom: 22px; left: 45px; opacity: 1; transform: scale(0.9) rotate(360deg); }
    60% { bottom: 18px; left: 45px; opacity: 1; transform: scale(0.7) rotate(360deg); }
    70% { bottom: 16px; left: 45px; opacity: 0; transform: scale(0.5) rotate(360deg); }
    78% { bottom: 14px; left: 16px; opacity: 0; transform: scale(1) rotate(0deg); }
    88%, 100% { bottom: 14px; left: 16px; opacity: 1; transform: scale(1) rotate(0deg); }
  }

  /* Target launch arc trail */
  .tw-flight-trail {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .tw-arc-path {
    stroke: rgba(0, 229, 255, 0.4);
    stroke-dasharray: 2 3;
  }

  .tw-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTiddlywinks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tiddlyStyles}</style>
      <div class="tw-box">
        <div class="tw-stage">
          <div class="tw-felt-mat"></div>

          <svg class="tw-flight-trail" viewBox="0 0 96 76">
            <path class="tw-arc-path" d="M 20 60 Q 32 16 48 56" fill="none" stroke-width="1" />
          </svg>

          <div class="tw-pot"></div>
          <div class="tw-squidger"></div>
          <div class="tw-flying-wink"></div>
          <div class="tw-flying-wink w2"></div>
        </div>

        <div class="tw-label">TIDDLYWINKS SQUIDGER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tiddlywinks')) {
  customElements.define('concept-tiddlywinks', ConceptTiddlywinks);
}
