const ballLightningStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .blt {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Atmospheric thundercloud vignette */
  .blt-cloud {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 30%, rgba(0, 50, 15, 0.4), transparent 70%);
  }

  /* Floating, hovering plasma orb */
  .blt-orb-rig {
    position: relative;
    width: 58px;
    height: 58px;
    animation: blt-float 4s ease-in-out infinite alternate;
  }

  @keyframes blt-float {
    0% { transform: translate(-10px, 6px); }
    50% { transform: translate(8px, -8px); }
    100% { transform: translate(6px, 10px); }
  }

  /* Glowing core sphere */
  .blt-core {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: radial-gradient(circle at 45% 45%, #ffffff 0%, #d6ffe0 30%, #8cffaa 60%, rgba(0, 204, 0, 0.4) 85%, transparent 100%);
    box-shadow: 0 0 16px #8cffaa, 0 0 30px rgba(0, 255, 68, 0.8);
    animation: blt-pulse 0.4s ease-in-out infinite alternate;
  }

  @keyframes blt-pulse {
    0% { transform: scale(0.96); filter: drop-shadow(0 0 10px #ffffff); }
    100% { transform: scale(1.04); filter: drop-shadow(0 0 20px #8cffaa); }
  }

  /* Internal whirling plasma filaments SVG */
  .blt-filament-svg {
    position: absolute;
    inset: 0;
    animation: blt-spin-filaments 1.8s linear infinite;
  }

  @keyframes blt-spin-filaments {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Ejected spark streamers */
  .blt-spark {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #8cffaa;
    animation: blt-eject 1.6s ease-out infinite;
  }

  .blt-spark.k1 { top: 12px; left: 10px; animation-delay: 0.1s; }
  .blt-spark.k2 { top: 40px; right: 8px; animation-delay: 0.5s; }
  .blt-spark.k3 { bottom: 10px; left: 24px; animation-delay: 0.9s; }
  .blt-spark.k4 { top: 6px; right: 20px; animation-delay: 1.3s; }

  @keyframes blt-eject {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--ex, 18px), var(--ey, -18px)) scale(0.2); opacity: 0; }
  }
  .blt-spark.k1 { --ex: -24px; --ey: -16px; }
  .blt-spark.k2 { --ex: 28px; --ey: 14px; }
  .blt-spark.k3 { --ex: -18px; --ey: 24px; }
  .blt-spark.k4 { --ex: 20px; --ey: -22px; }
`;

class ConceptBallLightning extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ballLightningStyles}</style>
      <div class="blt">
        <div class="blt-cloud"></div>
        <div class="blt-orb-rig">
          <div class="blt-core"></div>
          <svg class="blt-filament-svg" viewBox="0 0 58 58">
            <path d="M 14 29 Q 29 14 44 29 Q 29 44 14 29" stroke="#ffffff" stroke-width="1.5" fill="none" />
            <path d="M 29 14 Q 44 29 29 44 Q 14 29 29 14" stroke="#d6ffe0" stroke-width="1.2" fill="none" />
          </svg>
          <div class="blt-spark k1"></div>
          <div class="blt-spark k2"></div>
          <div class="blt-spark k3"></div>
          <div class="blt-spark k4"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ball-lightning')) {
  customElements.define('concept-ball-lightning', ConceptBallLightning);
}
