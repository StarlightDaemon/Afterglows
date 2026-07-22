const hologramStyles = `
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

  /* Scanline sweep across the projection. */
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

  /* Horizontal spin faked by squeezing the meridian ring. */
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
`;

class ConceptHologram extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hologramStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-hologram')) {
  customElements.define('concept-hologram', ConceptHologram);
}
