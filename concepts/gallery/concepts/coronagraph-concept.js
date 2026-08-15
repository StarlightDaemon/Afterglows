const coronagraphStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #06101e 0%, #010408 100%);
    border: 1.5px solid rgba(100, 181, 246, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(100, 181, 246, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cg-stage {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Solar corona plasma streamers */
  .cg-corona-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: cg-streamer-slow 20s linear infinite;
  }

  @keyframes cg-streamer-slow {
    to { transform: rotate(360deg); }
  }

  /* Solar Prominences / CME loops leaping from edge */
  .cg-prominence {
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid #ff5252;
    border-radius: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    box-shadow: 0 0 6px #ff1744;
  }

  .cg-p1 { top: 12px; left: 33px; transform: rotate(0deg); }
  .cg-p2 { bottom: 12px; right: 33px; transform: rotate(180deg); }

  /* Artificial Occulting Disk (blocking photosphere) */
  .cg-occulter {
    position: absolute;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #02070e;
    border: 1.5px solid #64b5f6;
    box-shadow: 0 0 12px rgba(100, 181, 246, 0.8), inset 0 0 8px rgba(0, 0, 0, 0.9);
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Support pylon for the occulting cone */
  .cg-pylon {
    position: absolute;
    bottom: -10px;
    width: 2px;
    height: 25px;
    background: #64b5f6;
    z-index: 4;
  }

  .cg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(100, 181, 246, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCoronagraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${coronagraphStyles}</style>
      <div class="cg-box">
        <div class="cg-stage">
          <svg class="cg-corona-svg" viewBox="-40 -40 80 80">
            <!-- Ray streamers -->
            <path d="M 0 0 L -10 -35 L 10 -35 Z" fill="rgba(255, 255, 255, 0.25)" filter="blur(1px)" />
            <path d="M 0 0 L 35 -15 L 35 15 Z" fill="rgba(100, 181, 246, 0.35)" filter="blur(1px)" />
            <path d="M 0 0 L -5 35 L 20 35 Z" fill="rgba(255, 255, 255, 0.25)" filter="blur(1px)" />
            <path d="M 0 0 L -35 -10 L -35 20 Z" fill="rgba(100, 181, 246, 0.35)" filter="blur(1px)" />

            <circle cx="0" cy="0" r="28" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1.5" stroke-dasharray="4 6" />
          </svg>

          <div class="cg-prominence cg-p1"></div>
          <div class="cg-prominence cg-p2"></div>

          <div class="cg-occulter">
            <div class="cg-pylon"></div>
          </div>
        </div>

        <div class="cg-label">LYOT CORONAGRAPH</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-coronagraph')) {
  customElements.define('concept-coronagraph', ConceptCoronagraph);
}
