const hourglassStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hourglass-basic {
    position: relative;
    width: 50px;
    height: 70px;
  }

  .hourglass-basic .sand-top,
  .hourglass-basic .sand-bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  .hourglass-basic .sand-top {
    top: 5px;
    border-top: 25px solid var(--accent, #00cc00);
    animation: sand-drain 2s ease-in-out infinite;
  }

  .hourglass-basic .sand-bottom {
    bottom: 5px;
    border-bottom: 25px solid var(--accent, #00cc00);
    animation: sand-fill 2s ease-in-out infinite;
    opacity: 0.3;
  }

  .hourglass-basic::before,
  .hourglass-basic::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }

  .hourglass-basic::before {
    top: 0;
    border-top: 30px solid rgba(0, 204, 0, 0.3);
  }

  .hourglass-basic::after {
    bottom: 0;
    border-bottom: 30px solid rgba(0, 204, 0, 0.3);
  }

  .hourglass-basic .sand-stream {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 2px;
    height: 10px;
    background: var(--accent, #00cc00);
    transform: translateX(-50%);
    animation: stream-flow 2s ease-in-out infinite;
  }

  .hourglass {
    position: relative;
    width: 92px;
    height: 106px;
    filter: drop-shadow(0 0 12px rgba(0, 204, 0, 0.18));
  }

  .hourglass-cap {
    position: absolute;
    left: 50%;
    width: 62px;
    height: 6px;
    border-radius: 999px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, rgba(85, 150, 85, 0.2), rgba(190, 255, 190, 0.78), rgba(85, 150, 85, 0.2));
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.18);
  }

  .hourglass-cap.top { top: 8px; }
  .hourglass-cap.bottom { bottom: 8px; }

  .hourglass-rail {
    position: absolute;
    top: 13px;
    bottom: 13px;
    width: 4px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(180, 255, 180, 0.25), rgba(180, 255, 180, 0.8), rgba(180, 255, 180, 0.25));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.2);
  }

  .hourglass-rail.left { left: 18px; }
  .hourglass-rail.right { right: 18px; }

  .hourglass-bulb {
    position: absolute;
    left: 50%;
    width: 54px;
    height: 34px;
    transform: translateX(-50%);
    border: 1px solid rgba(168, 255, 168, 0.32);
    background: linear-gradient(180deg, rgba(170, 255, 170, 0.1), rgba(0, 20, 0, 0.04));
    box-shadow: inset 0 0 16px rgba(170, 255, 170, 0.08);
    overflow: hidden;
  }

  .hourglass-bulb.top {
    top: 16px;
    clip-path: polygon(6% 0, 94% 0, 61% 100%, 39% 100%);
  }

  .hourglass-bulb.bottom {
    bottom: 16px;
    clip-path: polygon(39% 0, 61% 0, 94% 100%, 6% 100%);
  }

  .hourglass-neck-glow {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(175, 255, 175, 0.32), transparent 72%);
    opacity: 0.8;
    animation: hourglass-neck-pulse 1.8s ease-in-out infinite;
  }

  .hourglass-sand-top,
  .hourglass-sand-bottom {
    position: absolute;
    left: 50%;
    width: 36px;
    background: linear-gradient(180deg, rgba(218, 255, 194, 0.95), rgba(110, 255, 120, 0.82));
    box-shadow: 0 0 8px rgba(170, 255, 170, 0.24);
  }

  .hourglass-sand-top {
    top: 3px;
    height: 23px;
    transform: translateX(-50%);
    transform-origin: center top;
    clip-path: polygon(8% 0, 92% 0, 62% 100%, 38% 100%);
    animation: hourglass-upper-drain 1.8s ease-in-out infinite;
  }

  .hourglass-sand-bottom {
    bottom: 3px;
    height: 23px;
    transform: translateX(-50%) scaleY(0.3);
    transform-origin: center bottom;
    clip-path: polygon(38% 0, 62% 0, 92% 100%, 8% 100%);
    animation: hourglass-lower-fill 1.8s ease-in-out infinite;
  }

  .hourglass-stream {
    position: absolute;
    left: 50%;
    top: 40px;
    width: 3px;
    height: 26px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(220, 255, 205, 0), rgba(220, 255, 205, 1), rgba(220, 255, 205, 0));
    box-shadow: 0 0 8px rgba(190, 255, 190, 0.42);
    animation: hourglass-stream-flow 1.8s linear infinite;
  }

  .hourglass-grain {
    position: absolute;
    left: 50%;
    top: 46px;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    background: #dcffc9;
    box-shadow: 0 0 6px rgba(220, 255, 201, 0.75);
    animation: hourglass-grain-fall 1.8s linear infinite;
  }

  .hourglass-grain.g2 { animation-delay: 0.9s; }

  @keyframes sand-drain { 0% { border-top-width: 25px; opacity: 1; } 100% { border-top-width: 5px; opacity: 0.3; } }
  @keyframes sand-fill { 0% { border-bottom-width: 5px; opacity: 0.3; } 100% { border-bottom-width: 25px; opacity: 1; } }
  @keyframes stream-flow { 0%, 10% { opacity: 0; } 20%, 80% { opacity: 1; } 90%, 100% { opacity: 0; } }
  @keyframes hourglass-upper-drain { 0%, 12% { transform: translateX(-50%) scaleY(1); opacity: 1; } 78%, 100% { transform: translateX(-50%) scaleY(0.26); opacity: 0.42; } }
  @keyframes hourglass-lower-fill { 0%, 12% { transform: translateX(-50%) scaleY(0.3); opacity: 0.45; } 78%, 100% { transform: translateX(-50%) scaleY(1); opacity: 1; } }
  @keyframes hourglass-stream-flow { 0%, 10% { opacity: 0; transform: translateX(-50%) scaleY(0.2); } 18%, 82% { opacity: 1; transform: translateX(-50%) scaleY(1); } 90%, 100% { opacity: 0; transform: translateX(-50%) scaleY(0.2); } }
  @keyframes hourglass-grain-fall { 0%, 18% { opacity: 0; transform: translate(-50%, -6px) scale(0.7); } 26% { opacity: 1; transform: translate(-50%, 0) scale(1); } 82% { opacity: 1; transform: translate(-50%, 22px) scale(0.9); } 100% { opacity: 0; transform: translate(-50%, 28px) scale(0.5); } }
  @keyframes hourglass-neck-pulse { 0%, 100% { opacity: 0.45; transform: translate(-50%, -50%) scale(0.9); } 50% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.08); } }

  /* --- v3: Handcrafted Mahogany and Brass Horological Hourglass ---
     Rich dark mahogany wood caps, polished brass column pillars, crystal glass,
     and warm golden desert sand stream with glowing amber grains. */
  .hgc {
    position: relative;
    width: 92px;
    height: 106px;
    filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.2));
  }

  .hgc-cap {
    position: absolute;
    left: 50%;
    width: 62px;
    height: 6px;
    border-radius: 999px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #451a03, #78350f 50%, #451a03);
    border: 1px solid #d97706;
    box-shadow: 0 0 8px rgba(180, 83, 9, 0.4);
  }

  .hgc-cap.top { top: 8px; }
  .hgc-cap.bottom { bottom: 8px; }

  .hgc-rail {
    position: absolute;
    top: 13px;
    bottom: 13px;
    width: 4px;
    border-radius: 999px;
    background: linear-gradient(180deg, #d97706, #fbbf24 50%, #d97706);
    box-shadow: 0 0 6px rgba(245, 158, 11, 0.4);
  }

  .hgc-rail.left { left: 18px; }
  .hgc-rail.right { right: 18px; }

  .hgc-bulb {
    position: absolute;
    left: 50%;
    width: 54px;
    height: 34px;
    transform: translateX(-50%);
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(245, 158, 11, 0.04));
    box-shadow: inset 0 0 16px rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }

  .hgc-bulb.top {
    top: 16px;
    clip-path: polygon(6% 0, 94% 0, 61% 100%, 39% 100%);
  }

  .hgc-bulb.bottom {
    bottom: 16px;
    clip-path: polygon(39% 0, 61% 0, 94% 100%, 6% 100%);
  }

  .hgc-neck-glow {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(254, 240, 138, 0.4), transparent 72%);
    opacity: 0.8;
    animation: hourglass-neck-pulse 1.8s ease-in-out infinite;
  }

  .hgc-sand-top,
  .hgc-sand-bottom {
    position: absolute;
    left: 50%;
    width: 36px;
    background: linear-gradient(180deg, #fef08a, #f59e0b 60%, #d97706);
    box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
  }

  .hgc-sand-top {
    top: 3px;
    height: 23px;
    transform: translateX(-50%);
    transform-origin: center top;
    clip-path: polygon(8% 0, 92% 0, 62% 100%, 38% 100%);
    animation: hourglass-upper-drain 1.8s ease-in-out infinite;
  }

  .hgc-sand-bottom {
    bottom: 3px;
    height: 23px;
    transform: translateX(-50%) scaleY(0.3);
    transform-origin: center bottom;
    clip-path: polygon(38% 0, 62% 0, 92% 100%, 8% 100%);
    animation: hourglass-lower-fill 1.8s ease-in-out infinite;
  }

  .hgc-stream {
    position: absolute;
    left: 50%;
    top: 40px;
    width: 3px;
    height: 26px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(254, 240, 138, 0), #fef08a, rgba(254, 240, 138, 0));
    box-shadow: 0 0 8px rgba(251, 191, 36, 0.6);
    animation: hourglass-stream-flow 1.8s linear infinite;
  }

  .hgc-grain {
    position: absolute;
    left: 50%;
    top: 46px;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    background: #fef08a;
    box-shadow: 0 0 6px #f59e0b;
    animation: hourglass-grain-fall 1.8s linear infinite;
  }

  .hgc-grain.g2 { animation-delay: 0.9s; }
`;

const hourglassMarkup = {
  v1: `
    <div class="hourglass-basic">
      <div class="sand-top"></div>
      <div class="sand-bottom"></div>
      <div class="sand-stream"></div>
    </div>
  `,
  v2: `
    <div class="hourglass">
      <div class="hourglass-cap top"></div>
      <div class="hourglass-cap bottom"></div>
      <div class="hourglass-rail left"></div>
      <div class="hourglass-rail right"></div>
      <div class="hourglass-bulb top">
        <div class="hourglass-sand-top"></div>
      </div>
      <div class="hourglass-bulb bottom">
        <div class="hourglass-sand-bottom"></div>
      </div>
      <div class="hourglass-neck-glow"></div>
      <div class="hourglass-stream"></div>
      <div class="hourglass-grain g1"></div>
      <div class="hourglass-grain g2"></div>
    </div>
  `,
  v3: `
    <div class="hgc">
      <div class="hgc-cap top"></div>
      <div class="hgc-cap bottom"></div>
      <div class="hgc-rail left"></div>
      <div class="hgc-rail right"></div>
      <div class="hgc-bulb top">
        <div class="hgc-sand-top"></div>
      </div>
      <div class="hgc-bulb bottom">
        <div class="hgc-sand-bottom"></div>
      </div>
      <div class="hgc-neck-glow"></div>
      <div class="hgc-stream"></div>
      <div class="hgc-grain g1"></div>
      <div class="hgc-grain g2"></div>
    </div>
  `,
};

class ConceptHourglass extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${hourglassStyles}</style>${hourglassMarkup[version] || hourglassMarkup.v3}`;
  }
}

if (!customElements.get('concept-hourglass')) {
  customElements.define('concept-hourglass', ConceptHourglass);
}
