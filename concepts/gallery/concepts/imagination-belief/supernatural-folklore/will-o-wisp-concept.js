const wispStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wsp {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #031809 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dark swamp reed & peat silhouettes in foreground */
  .wsp-reeds-svg {
    position: absolute;
    bottom: 0;
    width: 118px;
    height: 48px;
    z-index: 4;
  }

  /* Bobbing, wandering spectral flame rig */
  .wsp-flame-rig {
    position: absolute;
    width: 44px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: wsp-wander 6s ease-in-out infinite alternate;
  }

  @keyframes wsp-wander {
    0% { transform: translate(-20px, 10px) rotate(-6deg); }
    30% { transform: translate(14px, -12px) rotate(4deg); }
    70% { transform: translate(-10px, -16px) rotate(-8deg); }
    100% { transform: translate(18px, 14px) rotate(6deg); }
  }

  /* Outer ghostly flame aura */
  .wsp-outer-flame {
    position: absolute;
    width: 32px;
    height: 44px;
    border-radius: 50% 50% 30% 30% / 60% 60% 40% 40%;
    background: radial-gradient(circle at 50% 70%, rgba(214, 255, 224, 0.9) 0%, rgba(0, 255, 68, 0.5) 45%, transparent 80%);
    box-shadow: 0 0 16px #8cffaa, 0 0 28px rgba(0, 255, 68, 0.8);
    animation: wsp-flame-flicker 1.8s ease-in-out infinite alternate;
  }

  @keyframes wsp-flame-flicker {
    0% { transform: scale(0.9) skewX(-4deg); opacity: 0.8; }
    50% { transform: scale(1.1) skewX(6deg); opacity: 1; }
    100% { transform: scale(0.95) skewX(-2deg); opacity: 0.85; }
  }

  /* Inner intense white-hot phantom nucleus */
  .wsp-inner-core {
    position: absolute;
    width: 12px;
    height: 18px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff;
  }

  /* Floating ember sparks shed into marsh air */
  .wsp-spark {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
    animation: wsp-spark-shed 2.4s ease-out infinite;
  }

  .wsp-spark.k1 { top: 10px; left: 8px; animation-delay: 0.2s; }
  .wsp-spark.k2 { top: 4px; right: 10px; animation-delay: 0.8s; }
  .wsp-spark.k3 { bottom: 14px; left: 16px; animation-delay: 1.4s; }

  @keyframes wsp-spark-shed {
    0% { transform: translate(0, 0); opacity: 1; }
    100% { transform: translate(var(--wx, 8px), -24px); opacity: 0; }
  }
  .wsp-spark.k1 { --wx: -12px; }
  .wsp-spark.k2 { --wx: 14px; }
  .wsp-spark.k3 { --wx: -8px; }

  /* Nocturnal marsh fog layer */
  .wsp-mist {
    position: absolute;
    bottom: 8px;
    width: 100%;
    height: 24px;
    background: linear-gradient(180deg, transparent, rgba(0, 40, 12, 0.6));
    filter: blur(2px);
    z-index: 3;
  }

  /* Caption */
  .wsp-label {
    position: absolute;
    top: 6px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptWillOWisp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wispStyles}</style>
      <div class="wsp">
        <div class="wsp-label">IGNIS FATUUS</div>

        <div class="wsp-flame-rig">
          <div class="wsp-outer-flame"></div>
          <div class="wsp-inner-core"></div>
          <div class="wsp-spark k1"></div>
          <div class="wsp-spark k2"></div>
          <div class="wsp-spark k3"></div>
        </div>

        <div class="wsp-mist"></div>

        <svg class="wsp-reeds-svg" viewBox="0 0 118 48">
          <!-- Marsh rushes and cattails -->
          <path d="M 12 48 Q 16 24 10 4" stroke="#004408" stroke-width="2" fill="none" />
          <path d="M 22 48 Q 24 20 28 8" stroke="#004408" stroke-width="1.8" fill="none" />
          <path d="M 88 48 Q 84 22 92 6" stroke="#004408" stroke-width="2" fill="none" />
          <path d="M 104 48 Q 100 28 106 12" stroke="#004408" stroke-width="1.8" fill="none" />
          <ellipse cx="10" cy="8" rx="2" ry="6" fill="#012409" />
          <ellipse cx="92" cy="10" rx="2" ry="6" fill="#012409" />
        </svg>
      </div>
    `;
  }
}

if (!customElements.get('concept-will-o-wisp')) {
  customElements.define('concept-will-o-wisp', ConceptWillOWisp);
}
