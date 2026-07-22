const visitorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .visitor {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .visitor-aura {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(0, 204, 0, 0.14) 0 40%, transparent 70%);
    animation: visitor-aura 4.5s ease-in-out infinite;
  }

  .visitor-head {
    position: relative;
    width: 58px;
    height: 70px;
    border-radius: 50% 50% 46% 46% / 62% 62% 38% 38%;
    background: linear-gradient(180deg, #0c2410 0%, #071a0b 55%, #041106 100%);
    box-shadow:
      inset 0 6px 10px rgba(140, 255, 165, 0.18),
      0 0 14px rgba(0, 204, 0, 0.2);
    transform-origin: center 80%;
    animation: visitor-tilt 6.5s ease-in-out infinite;
  }

  .visitor-eye {
    position: absolute;
    top: 26px;
    width: 19px;
    height: 30px;
    border-radius: 52% 48% 50% 50% / 68% 68% 32% 32%;
    background: radial-gradient(circle at 34% 28%, rgba(220, 255, 228, 0.85) 0 12%, rgba(10, 20, 12, 0.98) 40%);
    box-shadow: inset 0 0 5px rgba(160, 255, 180, 0.4), 0 0 6px rgba(0, 204, 0, 0.35);
    animation: visitor-blink 4.8s ease-in-out infinite;
  }

  .visitor-eye.left {
    left: 5px;
    transform: rotate(24deg);
  }

  .visitor-eye.right {
    right: 5px;
    transform: rotate(-24deg);
  }

  .visitor-nostril {
    position: absolute;
    bottom: 12px;
    width: 2px;
    height: 3px;
    border-radius: 50%;
    background: rgba(140, 255, 165, 0.35);
  }

  .visitor-nostril.n1 { left: 26px; }
  .visitor-nostril.n2 { right: 26px; }

  .visitor-pulse {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
    box-shadow: 0 0 6px rgba(190, 255, 205, 0.8);
    animation: visitor-third 4.5s ease-in-out infinite;
  }

  @keyframes visitor-aura {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.94); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
  }

  @keyframes visitor-tilt {
    0%, 100% { transform: rotate(-4deg); }
    45% { transform: rotate(5deg); }
    70% { transform: rotate(2deg); }
  }

  @keyframes visitor-blink {
    0%, 40%, 100% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    43% { transform: rotate(var(--eye-rot, 24deg)) scaleY(0.06); }
    46% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    72% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    75% { transform: rotate(var(--eye-rot, 24deg)) scaleY(0.06); }
    78% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
  }

  .visitor-eye.left { --eye-rot: 24deg; }
  .visitor-eye.right { --eye-rot: -24deg; }

  @keyframes visitor-third {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 1; }
  }
`;

class ConceptVisitor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${visitorStyles}</style>
      <div class="visitor">
        <div class="visitor-aura"></div>
        <div class="visitor-head">
          <div class="visitor-pulse"></div>
          <div class="visitor-eye left"></div>
          <div class="visitor-eye right"></div>
          <div class="visitor-nostril n1"></div>
          <div class="visitor-nostril n2"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-visitor')) {
  customElements.define('concept-visitor', ConceptVisitor);
}
