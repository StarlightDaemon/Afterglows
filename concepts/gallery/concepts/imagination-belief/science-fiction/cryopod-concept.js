const cryopodStyles = {
  v1: `
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
    animation: cryo-hum 3.4s ease-in-out infinite alternate;
  }

  @keyframes cryo-hum {
    0% { transform: translateY(0); }
    100% { transform: translateY(-3px); }
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

  .cryo-window::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 12%, rgba(210, 255, 222, 0.4) 0 22%, transparent 44%),
      radial-gradient(circle at 90% 22%, rgba(210, 255, 222, 0.3) 0 18%, transparent 40%),
      radial-gradient(circle at 16% 90%, rgba(210, 255, 222, 0.35) 0 24%, transparent 46%),
      radial-gradient(circle at 88% 84%, rgba(210, 255, 222, 0.3) 0 20%, transparent 42%);
    animation: cryo-frost 3.6s ease-in-out infinite alternate;
  }

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
    animation: cryo-breathe 2.8s ease-in-out infinite alternate;
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

  .cryo-vent {
    position: absolute;
    top: 30px;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background: rgba(200, 255, 212, 0.55);
    filter: blur(1.2px);
    opacity: 0;
    animation: cryo-vent 2.2s ease-out infinite;
  }

  .cryo-vent.left { left: -9px; --vent-x: -16px; --vent-rot: -14deg; }
  .cryo-vent.right { right: -9px; animation-delay: -1.1s; --vent-x: 16px; --vent-rot: 14deg; }

  @keyframes cryo-breathe {
    0% { transform: translateY(-3px) scale(0.92, 1.05); opacity: 0.7; }
    100% { transform: translateY(4px) scale(1.08, 0.95); opacity: 1; }
  }

  @keyframes cryo-frost {
    0% { transform: scale(0.85); opacity: 0.4; }
    100% { transform: scale(1.25); opacity: 1; }
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
    0% { opacity: 0; transform: translate(0, 0) scale(0.6); }
    30% { opacity: 0.95; }
    100% { opacity: 0; transform: translate(var(--vent-x, -16px), -24px) scale(2.2) rotate(var(--vent-rot, -12deg)); }
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Sci-fi cryogenic stasis hibernation pod with brushed titanium chassis,
     frosted quartz window with crystalline condensation, cyan biometric telemetry, and nitrogen vapor */
  .cryoc {
    position: relative;
    width: 60px;
    height: 104px;
    border-radius: 28px 28px 10px 10px;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    animation: cryoc-hum 3.4s ease-in-out infinite alternate;
  }

  @keyframes cryoc-hum {
    0% { transform: translateY(0); }
    100% { transform: translateY(-3px); }
  }

  /* Titanium outer chassis */
  .cryoc-pod {
    position: absolute;
    inset: 0;
    border-radius: 28px 28px 10px 10px;
    border: 2px solid #64748b;
    background: linear-gradient(180deg, #334155 0%, #1e293b 50%, #0f172a 100%);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9), 0 0 10px rgba(56, 189, 248, 0.3);
    box-sizing: border-box;
  }

  /* Frosted quartz window */
  .cryoc-window {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 40px;
    height: 58px;
    margin-left: -20px;
    border-radius: 20px 20px 8px 8px;
    border: 1.5px solid #38bdf8;
    background: linear-gradient(180deg, rgba(14, 165, 233, 0.35), rgba(2, 132, 199, 0.5));
    box-shadow: inset 0 0 12px #00f0ff;
    overflow: hidden;
    box-sizing: border-box;
  }

  /* Frost ice crystals creeping */
  .cryoc-window::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 12%, rgba(255, 255, 255, 0.6) 0 22%, transparent 44%),
      radial-gradient(circle at 90% 22%, rgba(224, 242, 254, 0.5) 0 18%, transparent 40%),
      radial-gradient(circle at 16% 90%, rgba(255, 255, 255, 0.55) 0 24%, transparent 46%),
      radial-gradient(circle at 88% 84%, rgba(224, 242, 254, 0.5) 0 20%, transparent 42%);
    animation: cryoc-frost 3.6s ease-in-out infinite alternate;
  }

  /* Hibernating sleeper silhouette */
  .cryoc-sleeper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 18px;
    height: 40px;
    margin-left: -9px;
    border-radius: 9px 9px 5px 5px;
    background: linear-gradient(180deg, rgba(148, 163, 184, 0.6) 0%, rgba(71, 85, 105, 0.6) 100%);
    filter: blur(1px);
    animation: cryoc-breathe 2.8s ease-in-out infinite alternate;
  }

  .cryoc-sleeper::before {
    content: '';
    position: absolute;
    top: -9px;
    left: 50%;
    width: 11px;
    height: 11px;
    margin-left: -5.5px;
    border-radius: 50%;
    background: rgba(148, 163, 184, 0.6);
  }

  /* Ice sparkle glints */
  .cryoc-sparkle {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00f0ff;
    opacity: 0;
    animation: cryoc-sparkle 3.4s linear infinite;
  }

  .cryoc-sparkle.k1 { top: 22px; left: 10px; animation-delay: 0s; }
  .cryoc-sparkle.k2 { top: 36px; left: 44px; animation-delay: -1.1s; }
  .cryoc-sparkle.k3 { top: 52px; left: 18px; animation-delay: -2.2s; }

  /* Vitals status monitor */
  .cryoc-vitals {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 40px;
    height: 18px;
    margin-left: -20px;
    border-top: 1.5px solid #38bdf8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: #020617;
    border-radius: 0 0 4px 4px;
  }

  .cryoc-led {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 6px #00f0ff;
    animation: cryoc-led 2.4s ease-in-out infinite;
  }

  .cryoc-led.l2 { background: #22c55e; box-shadow: 0 0 6px #22c55e; animation-delay: -0.8s; }
  .cryoc-led.l3 { background: #facc15; box-shadow: 0 0 6px #facc15; animation-delay: -1.6s; }

  .cryoc-temp {
    color: #38bdf8;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-shadow: 0 0 4px #00f0ff;
    animation: cryoc-led 4.8s ease-in-out infinite;
  }

  /* Liquid nitrogen coolant vapor vents */
  .cryoc-vent {
    position: absolute;
    top: 30px;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background: rgba(224, 242, 254, 0.75);
    filter: blur(1.2px);
    opacity: 0;
    animation: cryoc-vent 2.2s ease-out infinite;
  }

  .cryoc-vent.left { left: -9px; --vent-x: -16px; --vent-rot: -14deg; }
  .cryoc-vent.right { right: -9px; animation-delay: -1.1s; --vent-x: 16px; --vent-rot: 14deg; }

  @keyframes cryoc-breathe {
    0% { transform: translateY(-3px) scale(0.92, 1.05); opacity: 0.7; }
    100% { transform: translateY(4px) scale(1.08, 0.95); opacity: 1; }
  }

  @keyframes cryoc-frost {
    0% { transform: scale(0.85); opacity: 0.4; }
    100% { transform: scale(1.25); opacity: 1; }
  }

  @keyframes cryoc-sparkle {
    0%, 82%, 100% { opacity: 0; }
    88% { opacity: 1; }
    94% { opacity: 0.25; }
  }

  @keyframes cryoc-led {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 1; }
  }

  @keyframes cryoc-vent {
    0% { opacity: 0; transform: translate(0, 0) scale(0.6); }
    30% { opacity: 0.95; }
    100% { opacity: 0; transform: translate(var(--vent-x, -16px), -24px) scale(2.2) rotate(var(--vent-rot, -12deg)); }
  }
  `,
};

const cryopodMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="cryoc">
        <div class="cryoc-pod"></div>
        <div class="cryoc-vent left"></div>
        <div class="cryoc-vent right"></div>
        <div class="cryoc-window">
          <div class="cryoc-sleeper"></div>
          <div class="cryoc-sparkle k1"></div>
          <div class="cryoc-sparkle k2"></div>
          <div class="cryoc-sparkle k3"></div>
        </div>
        <div class="cryoc-vitals">
          <span class="cryoc-led l1"></span>
          <span class="cryoc-led l2"></span>
          <span class="cryoc-led l3"></span>
          <span class="cryoc-temp">-196°</span>
        </div>
      </div>
    `,
};

class ConceptCryopod extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${cryopodStyles[version] || cryopodStyles.v2}</style>${cryopodMarkup[version] || cryopodMarkup.v2}`;
  }
}

if (!customElements.get('concept-cryopod')) {
  customElements.define('concept-cryopod', ConceptCryopod);
}
