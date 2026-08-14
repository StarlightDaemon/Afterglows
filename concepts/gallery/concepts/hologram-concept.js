const hologramStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .holo {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .holo-base {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 46px;
    height: 10px;
    margin-left: -23px;
    border-radius: 50%;
    background: linear-gradient(180deg, #123a1c, #071a0c);
    border: 1px solid rgba(0, 204, 0, 0.45);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.35);
    box-sizing: border-box;
  }

  .holo-base::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    width: 8px;
    height: 3px;
    margin-left: -4px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
    box-shadow: 0 0 6px rgba(190, 255, 205, 0.8);
    animation: holo-emitter 2.2s ease-in-out infinite;
  }

  .holo-cone {
    position: absolute;
    bottom: 16px;
    left: 50%;
    width: 60px;
    height: 62px;
    margin-left: -30px;
    clip-path: polygon(44% 100%, 56% 100%, 92% 0, 8% 0);
    background: linear-gradient(0deg, rgba(120, 255, 150, 0.3) 0%, rgba(120, 255, 150, 0.06) 90%);
    animation: holo-cone 3.2s ease-in-out infinite;
  }

  .holo-object {
    position: absolute;
    bottom: 40px;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    animation: holo-bob 4.4s ease-in-out infinite, holo-glitch 6.6s steps(1) infinite;
  }

  .holo-wire {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(140, 255, 170, 0.75);
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(120, 255, 150, 0.4);
  }

  .holo-wire.sphere {
    width: 34px;
    height: 34px;
    margin: -17px 0 0 -17px;
  }

  .holo-wire.lat1 {
    width: 34px;
    height: 14px;
    margin: -7px 0 0 -17px;
  }

  .holo-wire.lat2 {
    width: 34px;
    height: 24px;
    margin: -12px 0 0 -17px;
    opacity: 0.55;
  }

  .holo-wire.merid {
    width: 14px;
    height: 34px;
    margin: -17px 0 0 -7px;
    animation: holo-spin-y 3.6s linear infinite;
  }

  .holo-scan {
    position: absolute;
    bottom: 18px;
    left: 50%;
    width: 52px;
    height: 60px;
    margin-left: -26px;
    overflow: hidden;
    pointer-events: none;
  }

  .holo-scan::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 7px;
    background: linear-gradient(180deg, transparent, rgba(200, 255, 212, 0.3), transparent);
    animation: holo-scanline 2.8s linear infinite;
  }

  @keyframes holo-emitter {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  @keyframes holo-cone {
    0%, 100% { opacity: 0.5; }
    18% { opacity: 0.95; }
    22% { opacity: 0.4; }
    28% { opacity: 0.9; }
    64% { opacity: 0.7; }
  }

  @keyframes holo-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  @keyframes holo-spin-y {
    0% { transform: scaleX(1); opacity: 0.9; }
    25% { transform: scaleX(0.15); opacity: 0.5; }
    50% { transform: scaleX(1); opacity: 0.9; }
    75% { transform: scaleX(0.15); opacity: 0.5; }
    100% { transform: scaleX(1); opacity: 0.9; }
  }

  @keyframes holo-glitch {
    0%, 87%, 100% { transform: translateX(0) skewX(0deg); opacity: 1; }
    88% { transform: translateX(-3px) skewX(-6deg); opacity: 0.55; }
    90% { transform: translateX(2px) skewX(4deg); opacity: 0.85; }
    92% { transform: translateX(-1px) skewX(-2deg); opacity: 0.65; }
    94% { transform: translateX(0) skewX(0deg); opacity: 1; }
  }

  @keyframes holo-scanline {
    0% { top: -8px; }
    100% { top: 60px; }
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

  /* v2: Sci-fi 3D holographic projector with composite metal base, cyan emitter cone,
     rotating neon cyan & emerald planetary wireframe grid, and digital scanlines */
  .holoc {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Composite emitter base pedestal */
  .holoc-base {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 46px;
    height: 10px;
    margin-left: -23px;
    border-radius: 50%;
    background: linear-gradient(180deg, #334155, #0f172a);
    border: 1.5px solid #64748b;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9), inset 0 1px 2px #94a3b8;
    box-sizing: border-box;
  }

  .holoc-base::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    width: 8px;
    height: 3px;
    margin-left: -4px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 8px #00f0ff, 0 0 14px #38bdf8;
    animation: holoc-emitter 2.2s ease-in-out infinite;
  }

  /* Electric cyan projector light cone */
  .holoc-cone {
    position: absolute;
    bottom: 16px;
    left: 50%;
    width: 60px;
    height: 62px;
    margin-left: -30px;
    clip-path: polygon(44% 100%, 56% 100%, 92% 0, 8% 0);
    background: linear-gradient(0deg, rgba(56, 189, 248, 0.45) 0%, rgba(56, 189, 248, 0.08) 90%);
    animation: holoc-cone 3.2s ease-in-out infinite;
  }

  /* Hovering holographic object */
  .holoc-object {
    position: absolute;
    bottom: 40px;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    animation: holoc-bob 4.4s ease-in-out infinite, holoc-glitch 6.6s steps(1) infinite;
  }

  /* Cyan wireframe sphere grid */
  .holoc-wire {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1.5px solid #38bdf8;
    border-radius: 50%;
    box-shadow: 0 0 8px #00f0ff;
  }

  .holoc-wire.sphere {
    width: 34px;
    height: 34px;
    margin: -17px 0 0 -17px;
  }

  .holoc-wire.lat1 {
    width: 34px;
    height: 14px;
    margin: -7px 0 0 -17px;
    border-color: #4ade80;
    box-shadow: 0 0 6px #22c55e;
  }

  .holoc-wire.lat2 {
    width: 34px;
    height: 24px;
    margin: -12px 0 0 -17px;
    opacity: 0.65;
  }

  .holoc-wire.merid {
    width: 14px;
    height: 34px;
    margin: -17px 0 0 -7px;
    animation: holoc-spin-y 3.6s linear infinite;
  }

  /* Sweeping scanline */
  .holoc-scan {
    position: absolute;
    bottom: 18px;
    left: 50%;
    width: 52px;
    height: 60px;
    margin-left: -26px;
    overflow: hidden;
    pointer-events: none;
  }

  .holoc-scan::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 7px;
    background: linear-gradient(180deg, transparent, rgba(56, 189, 248, 0.4), transparent);
    animation: holoc-scanline 2.8s linear infinite;
  }

  @keyframes holoc-emitter {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  @keyframes holoc-cone {
    0%, 100% { opacity: 0.5; }
    18% { opacity: 0.95; }
    22% { opacity: 0.4; }
    28% { opacity: 0.9; }
    64% { opacity: 0.7; }
  }

  @keyframes holoc-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  @keyframes holoc-spin-y {
    0% { transform: scaleX(1); opacity: 0.95; }
    25% { transform: scaleX(0.15); opacity: 0.5; }
    50% { transform: scaleX(1); opacity: 0.95; }
    75% { transform: scaleX(0.15); opacity: 0.5; }
    100% { transform: scaleX(1); opacity: 0.95; }
  }

  @keyframes holoc-glitch {
    0%, 87%, 100% { transform: translateX(0) skewX(0deg); opacity: 1; }
    88% { transform: translateX(-3px) skewX(-6deg); opacity: 0.55; }
    90% { transform: translateX(2px) skewX(4deg); opacity: 0.85; }
    92% { transform: translateX(-1px) skewX(-2deg); opacity: 0.65; }
    94% { transform: translateX(0) skewX(0deg); opacity: 1; }
  }

  @keyframes holoc-scanline {
    0% { top: -8px; }
    100% { top: 60px; }
  }
  `,
};

const hologramMarkup = {
  v1: `
      <div class="holo">
        <div class="holo-cone"></div>
        <div class="holo-object">
          <div class="holo-wire sphere"></div>
          <div class="holo-wire lat1"></div>
          <div class="holo-wire lat2"></div>
          <div class="holo-wire merid"></div>
        </div>
        <div class="holo-scan"></div>
        <div class="holo-base"></div>
      </div>
    `,
  v2: `
      <div class="holoc">
        <div class="holoc-cone"></div>
        <div class="holoc-object">
          <div class="holoc-wire sphere"></div>
          <div class="holoc-wire lat1"></div>
          <div class="holoc-wire lat2"></div>
          <div class="holoc-wire merid"></div>
        </div>
        <div class="holoc-scan"></div>
        <div class="holoc-base"></div>
      </div>
    `,
};

class ConceptHologram extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${hologramStyles[version] || hologramStyles.v2}</style>${hologramMarkup[version] || hologramMarkup.v2}`;
  }
}

if (!customElements.get('concept-hologram')) {
  customElements.define('concept-hologram', ConceptHologram);
}
