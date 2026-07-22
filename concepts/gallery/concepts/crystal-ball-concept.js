const crystalBallStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cball {
    position: relative;
    width: 84px;
    height: 104px;
    display: flex;
    justify-content: center;
  }

  .cball-stand {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 44px;
    height: 14px;
    margin-left: -22px;
    clip-path: polygon(12% 0, 88% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #12351b, #081a0d);
    border-radius: 2px;
  }

  .cball-stand::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 8px;
    right: 8px;
    height: 2px;
    background: rgba(140, 255, 170, 0.35);
  }

  .cball-glass {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 62px;
    height: 62px;
    margin-left: -31px;
    border-radius: 50%;
    background: radial-gradient(circle at 32% 26%, rgba(220, 255, 228, 0.24) 0 12%, rgba(30, 90, 45, 0.24) 40%, rgba(6, 18, 10, 0.85) 100%);
    border: 1px solid rgba(140, 255, 170, 0.35);
    box-shadow:
      inset 0 0 18px rgba(0, 204, 0, 0.25),
      0 0 16px rgba(0, 204, 0, 0.25);
    overflow: hidden;
    box-sizing: border-box;
  }

  /* Inner mist: two blurred blobs circling opposite ways. */
  .cball-mist {
    position: absolute;
    width: 34px;
    height: 26px;
    border-radius: 50%;
    filter: blur(6px);
  }

  .cball-mist.m1 {
    top: 14px;
    left: 4px;
    background: rgba(120, 255, 150, 0.5);
    animation: cball-mist1 6.5s ease-in-out infinite;
  }

  .cball-mist.m2 {
    top: 26px;
    left: 22px;
    background: rgba(60, 220, 120, 0.4);
    animation: cball-mist2 8s ease-in-out infinite;
  }

  /* The glimpse: an eye-shape that surfaces briefly out of the mist. */
  .cball-glimpse {
    position: absolute;
    top: 24px;
    left: 50%;
    width: 22px;
    height: 12px;
    margin-left: -11px;
    border-radius: 50%;
    background: radial-gradient(circle at center, #041006 0 24%, rgba(220, 255, 228, 0.9) 30% 46%, transparent 72%);
    opacity: 0;
    animation: cball-glimpse 9s ease-in-out infinite;
  }

  .cball-shine {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 14px;
    height: 8px;
    border-radius: 50%;
    background: rgba(235, 255, 240, 0.5);
    transform: rotate(-24deg);
    filter: blur(1px);
  }

  .cball-spark {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(220, 255, 228, 0.95);
    opacity: 0;
    animation: cball-spark 4.5s linear infinite;
  }

  .cball-spark.k1 { top: 38px; left: 16px; animation-delay: 0s; }
  .cball-spark.k2 { top: 20px; left: 42px; animation-delay: -1.6s; }
  .cball-spark.k3 { top: 44px; left: 36px; animation-delay: -3.1s; }

  @keyframes cball-mist1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    30% { transform: translate(16px, 8px) scale(1.15); }
    62% { transform: translate(6px, 14px) scale(0.85); }
  }

  @keyframes cball-mist2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    36% { transform: translate(-14px, -10px) scale(1.2); }
    70% { transform: translate(-4px, -16px) scale(0.9); }
  }

  @keyframes cball-glimpse {
    0%, 52% { opacity: 0; transform: scale(0.6); }
    60%, 70% { opacity: 0.95; transform: scale(1); }
    78%, 100% { opacity: 0; transform: scale(0.7); }
  }

  @keyframes cball-spark {
    0%, 78%, 100% { opacity: 0; }
    84% { opacity: 1; }
    92% { opacity: 0.2; }
  }
`;

class ConceptCrystalBall extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${crystalBallStyles}</style>
      <div class="cball">
        <div class="cball-glass">
          <div class="cball-mist m1"></div>
          <div class="cball-mist m2"></div>
          <div class="cball-glimpse"></div>
          <div class="cball-shine"></div>
          <div class="cball-spark k1"></div>
          <div class="cball-spark k2"></div>
          <div class="cball-spark k3"></div>
        </div>
        <div class="cball-stand"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-crystal-ball')) {
  customElements.define('concept-crystal-ball', ConceptCrystalBall);
}
