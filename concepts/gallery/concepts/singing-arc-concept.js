const singingArcStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sar {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Brass acoustic horn waveguide */
  .sar-horn-svg {
    position: absolute;
    right: 4px;
    width: 58px;
    height: 74px;
    filter: drop-shadow(0 0 4px #8cffaa);
    z-index: 1;
  }

  /* Left carbon electrode holder */
  .sar-electrode-l {
    position: absolute;
    left: 14px;
    top: 48px;
    width: 26px;
    height: 6px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    border: 1px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 4px #8cffaa;
    z-index: 4;
  }

  /* Right carbon electrode holder */
  .sar-electrode-r {
    position: absolute;
    left: 54px;
    top: 48px;
    width: 26px;
    height: 6px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    border: 1px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 4px #8cffaa;
    z-index: 4;
  }

  /* Modulated Plasma Arc discharge gap */
  .sar-plasma-arc {
    position: absolute;
    left: 39px;
    top: 45px;
    width: 16px;
    height: 12px;
    background: radial-gradient(ellipse at 50% 50%, #ffffff 0%, #d6ffe0 45%, #00aa22 80%, transparent 100%);
    box-shadow: 0 0 10px #ffffff, 0 0 18px #8cffaa;
    z-index: 5;
    animation: sar-arc-modulate 0.25s ease-in-out infinite alternate;
  }

  @keyframes sar-arc-modulate {
    0% { transform: scaleX(0.8) scaleY(1.3) skewY(-4deg); opacity: 0.8; }
    100% { transform: scaleX(1.2) scaleY(0.7) skewY(4deg); opacity: 1; filter: drop-shadow(0 0 8px #ffffff); }
  }

  /* Audio acoustic compression soundwaves radiating through horn */
  .sar-soundwave {
    position: absolute;
    top: 26px;
    left: 58px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-right: 2px solid #ffffff;
    opacity: 0;
    animation: sar-wave-propagate 1.2s ease-out infinite;
    z-index: 3;
  }

  .sar-soundwave.w1 { animation-delay: 0s; }
  .sar-soundwave.w2 { animation-delay: 0.4s; }
  .sar-soundwave.w3 { animation-delay: 0.8s; }

  @keyframes sar-wave-propagate {
    0% { transform: scale(0.3) translateX(-10px); opacity: 0.9; }
    100% { transform: scale(1.4) translateX(20px); opacity: 0; }
  }

  /* Audio sine waveform trace above */
  .sar-waveform-svg {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 60px;
    height: 18px;
  }

  /* Plasma speaker label */
  .sar-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSingingArc extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${singingArcStyles}</style>
      <div class="sar">
        <svg class="sar-horn-svg" viewBox="0 0 58 74">
          <!-- Exponential brass acoustic horn bell -->
          <path d="M 12 30 Q 30 24 54 8 L 54 66 Q 30 50 12 44 Z" fill="rgba(0, 50, 15, 0.4)" stroke="#8cffaa" stroke-width="1.5" />
        </svg>

        <svg class="sar-waveform-svg" viewBox="0 0 60 18">
          <!-- Audio modulation carrier sine wave -->
          <path d="M 0 9 Q 7 0 15 9 T 30 9 T 45 9 T 60 9" stroke="#ffffff" stroke-width="1.2" fill="none" />
        </svg>

        <div class="sar-electrode-l"></div>
        <div class="sar-electrode-r"></div>
        <div class="sar-plasma-arc"></div>

        <div class="sar-soundwave w1"></div>
        <div class="sar-soundwave w2"></div>
        <div class="sar-soundwave w3"></div>

        <div class="sar-label">DUDDELL SINGING ARC 1899</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-singing-arc')) {
  customElements.define('concept-singing-arc', ConceptSingingArc);
}
