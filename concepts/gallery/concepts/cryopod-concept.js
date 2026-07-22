const cryopodStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cryo {
    position: relative;
    width: 60px;
    height: 104px;
  }

  .cryo-pod {
    position: absolute;
    inset: 0;
    border-radius: 28px 28px 10px 10px;
    border: 2px solid rgba(0, 204, 0, 0.45);
    background: linear-gradient(180deg, rgba(6, 20, 10, 0.95) 0%, rgba(3, 12, 6, 0.98) 100%);
    box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.15), 0 0 10px rgba(0, 204, 0, 0.15);
    box-sizing: border-box;
  }

  .cryo-window {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 40px;
    height: 58px;
    margin-left: -20px;
    border-radius: 20px 20px 8px 8px;
    border: 1px solid rgba(120, 255, 150, 0.35);
    background: linear-gradient(180deg, rgba(20, 60, 34, 0.5), rgba(8, 30, 16, 0.6));
    overflow: hidden;
    box-sizing: border-box;
  }

  /* Frost creeping over the glass. */
  .cryo-window::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 12%, rgba(210, 255, 222, 0.4) 0 22%, transparent 44%),
      radial-gradient(circle at 90% 22%, rgba(210, 255, 222, 0.3) 0 18%, transparent 40%),
      radial-gradient(circle at 16% 90%, rgba(210, 255, 222, 0.35) 0 24%, transparent 46%),
      radial-gradient(circle at 88% 84%, rgba(210, 255, 222, 0.3) 0 20%, transparent 42%);
    animation: cryo-frost 6.8s ease-in-out infinite;
  }

  /* The sleeper: a dim silhouette that swells gently with slow breath. */
  .cryo-sleeper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 18px;
    height: 40px;
    margin-left: -9px;
    border-radius: 9px 9px 5px 5px;
    background: linear-gradient(180deg, rgba(60, 160, 85, 0.55) 0%, rgba(30, 90, 45, 0.5) 100%);
    filter: blur(1px);
    animation: cryo-breathe 6.8s ease-in-out infinite;
  }

  .cryo-sleeper::before {
    content: '';
    position: absolute;
    top: -9px;
    left: 50%;
    width: 11px;
    height: 11px;
    margin-left: -5.5px;
    border-radius: 50%;
    background: rgba(60, 160, 85, 0.55);
  }

  .cryo-sparkle {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(230, 255, 238, 0.9);
    opacity: 0;
    animation: cryo-sparkle 3.4s linear infinite;
  }

  .cryo-sparkle.k1 { top: 22px; left: 10px; animation-delay: 0s; }
  .cryo-sparkle.k2 { top: 36px; left: 44px; animation-delay: -1.1s; }
  .cryo-sparkle.k3 { top: 52px; left: 18px; animation-delay: -2.2s; }

  /* Vitals strip along the pod base. */
  .cryo-vitals {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 40px;
    height: 18px;
    margin-left: -20px;
    border-top: 1px solid rgba(0, 204, 0, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .cryo-led {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.9);
    animation: cryo-led 2.4s ease-in-out infinite;
  }

  .cryo-led.l2 { animation-delay: -0.8s; }
  .cryo-led.l3 { animation-delay: -1.6s; }

  .cryo-temp {
    color: rgba(160, 255, 185, 0.8);
    font-family: monospace;
    font-size: 7px;
    letter-spacing: 0.5px;
    animation: cryo-led 4.8s ease-in-out infinite;
  }

  /* Escaping coolant vapor. */
  .cryo-vent {
    position: absolute;
    top: 30px;
    width: 8px;
    height: 3px;
    border-radius: 2px;
    background: rgba(200, 255, 212, 0.35);
    filter: blur(1.5px);
    opacity: 0;
    animation: cryo-vent 6.8s ease-out infinite;
  }

  .cryo-vent.left { left: -9px; }
  .cryo-vent.right { right: -9px; animation-delay: -3.4s; }

  @keyframes cryo-breathe {
    0%, 100% { transform: scaleX(1) scaleY(1); opacity: 0.85; }
    50% { transform: scaleX(1.12) scaleY(1.03); opacity: 1; }
  }

  @keyframes cryo-frost {
    0%, 100% { opacity: 0.75; }
    50% { opacity: 1; }
  }

  @keyframes cryo-sparkle {
    0%, 82%, 100% { opacity: 0; }
    88% { opacity: 1; }
    94% { opacity: 0.25; }
  }

  @keyframes cryo-led {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 1; }
  }

  @keyframes cryo-vent {
    0%, 62% { opacity: 0; transform: translate(0, 0) scale(1); }
    68% { opacity: 0.8; }
    86%, 100% { opacity: 0; transform: translate(var(--vent-x, -8px), -10px) scale(1.8); }
  }

  .cryo-vent.left { --vent-x: -8px; }
  .cryo-vent.right { --vent-x: 8px; }
`;

class ConceptCryopod extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cryopodStyles}</style>
      <div class="cryo">
        <div class="cryo-pod"></div>
        <div class="cryo-vent left"></div>
        <div class="cryo-vent right"></div>
        <div class="cryo-window">
          <div class="cryo-sleeper"></div>
          <div class="cryo-sparkle k1"></div>
          <div class="cryo-sparkle k2"></div>
          <div class="cryo-sparkle k3"></div>
        </div>
        <div class="cryo-vitals">
          <span class="cryo-led l1"></span>
          <span class="cryo-led l2"></span>
          <span class="cryo-led l3"></span>
          <span class="cryo-temp">-196°</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cryopod')) {
  customElements.define('concept-cryopod', ConceptCryopod);
}
