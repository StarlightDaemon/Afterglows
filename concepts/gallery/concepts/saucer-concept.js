const saucerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .saucer-scene {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: linear-gradient(180deg, #000 0%, #010401 70%, #021002 100%);
  }

  .saucer-scene::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 18%, rgba(215, 255, 220, 0.75) 0 1px, transparent 1.5px),
      radial-gradient(circle at 84% 12%, rgba(215, 255, 220, 0.6) 0 1px, transparent 1.5px),
      radial-gradient(circle at 68% 30%, rgba(215, 255, 220, 0.45) 0 1px, transparent 1.4px),
      radial-gradient(circle at 26% 40%, rgba(215, 255, 220, 0.4) 0 1px, transparent 1.4px),
      radial-gradient(circle at 92% 46%, rgba(215, 255, 220, 0.35) 0 1px, transparent 1.4px);
    pointer-events: none;
  }

  .saucer {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 72px;
    height: 30px;
    margin-left: -36px;
    animation: saucer-hover 3.6s ease-in-out infinite;
  }

  .saucer-dome {
    position: absolute;
    top: 0;
    left: 50%;
    width: 30px;
    height: 15px;
    margin-left: -15px;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.55), rgba(0, 204, 0, 0.18));
    box-shadow: inset 0 2px 4px rgba(230, 255, 235, 0.35);
  }

  .saucer-body {
    position: absolute;
    top: 12px;
    left: 0;
    width: 72px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(120, 220, 130, 0.85) 0%, rgba(20, 80, 25, 0.95) 55%, rgba(5, 25, 8, 1) 100%);
    box-shadow: 0 2px 8px rgba(0, 204, 0, 0.3);
  }

  .saucer-light {
    position: absolute;
    top: 18px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d8ffd0;
    opacity: 0.2;
    animation: saucer-blink 1.5s linear infinite;
  }

  .saucer-light.l1 { left: 9px; animation-delay: 0s; }
  .saucer-light.l2 { left: 24px; animation-delay: 0.3s; }
  .saucer-light.l3 { left: 39px; animation-delay: 0.6s; }
  .saucer-light.l4 { left: 54px; animation-delay: 0.9s; }

  .saucer-glow {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 56px;
    height: 12px;
    margin-left: -28px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 204, 0, 0.35), transparent 70%);
    animation: saucer-ground 3.6s ease-in-out infinite;
  }

  .saucer-trail {
    position: absolute;
    top: 44px;
    left: 50%;
    width: 2px;
    height: 14px;
    margin-left: -1px;
    background: linear-gradient(180deg, rgba(160, 255, 170, 0.5), transparent);
    filter: blur(1px);
    animation: saucer-trail 3.6s ease-in-out infinite;
  }

  @keyframes saucer-hover {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    30% { transform: translateY(7px) rotate(1.5deg); }
    65% { transform: translateY(2px) rotate(-1deg); }
  }

  @keyframes saucer-blink {
    0%, 100% { opacity: 0.15; box-shadow: none; }
    12% { opacity: 1; box-shadow: 0 0 6px rgba(216, 255, 208, 0.9); }
    30% { opacity: 0.15; }
  }

  @keyframes saucer-ground {
    0%, 100% { opacity: 0.35; transform: scaleX(0.85); }
    30% { opacity: 0.85; transform: scaleX(1.1); }
    65% { opacity: 0.5; transform: scaleX(0.95); }
  }

  @keyframes saucer-trail {
    0%, 100% { opacity: 0.15; transform: scaleY(0.6); }
    30% { opacity: 0.7; transform: scaleY(1.15); }
  }
`;

class ConceptSaucer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${saucerStyles}</style>
      <div class="saucer-scene">
        <div class="saucer-glow"></div>
        <div class="saucer-trail"></div>
        <div class="saucer">
          <div class="saucer-dome"></div>
          <div class="saucer-body"></div>
          <div class="saucer-light l1"></div>
          <div class="saucer-light l2"></div>
          <div class="saucer-light l3"></div>
          <div class="saucer-light l4"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-saucer')) {
  customElements.define('concept-saucer', ConceptSaucer);
}
