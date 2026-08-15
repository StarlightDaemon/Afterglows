const monochordStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e140a 0%, #080502 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 179, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mc-stage {
    position: relative;
    width: 96px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hardwood soundbox resonator */
  .mc-soundbox {
    position: absolute;
    width: 88px;
    height: 38px;
    background: #3e2723;
    border: 1.5px solid #ffb300;
    border-radius: 4px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    box-sizing: border-box;
  }

  /* Sound hole */
  .mc-rosette {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #1a0f07;
    border: 1px solid #ffb300;
  }

  /* Calibrated integer ratio rule (1:1, 3:4, 2:3, 1:2) */
  .mc-rule {
    position: absolute;
    bottom: 4px;
    width: 78px;
    height: 4px;
    border-bottom: 1px solid #ffd54f;
    display: flex;
    justify-content: space-between;
  }

  .mc-tick {
    width: 1px;
    height: 4px;
    background: #ffd54f;
  }

  /* Vibrating string */
  .mc-string-svg {
    position: absolute;
    top: 8px;
    width: 80px;
    height: 16px;
  }

  .mc-harmonic-wave {
    stroke: #ffffff;
    stroke-width: 1.2;
    animation: mc-vibrate 0.1s linear infinite alternate;
  }

  @keyframes mc-vibrate {
    0% { transform: scaleY(0.6); }
    100% { transform: scaleY(1.4); }
  }

  /* Movable wooden bridge sliding between ratios */
  .mc-bridge {
    position: absolute;
    top: 4px;
    width: 6px;
    height: 18px;
    background: #fff8e1;
    border: 1px solid #ff8f00;
    border-radius: 1px;
    box-shadow: 0 0 4px #ffd54f;
    animation: mc-bridge-slide 6s ease-in-out infinite alternate;
  }

  @keyframes mc-bridge-slide {
    0% { left: 45px; } /* 1:1 octave middle */
    50% { left: 32px; } /* 2:3 fifth */
    100% { left: 24px; } /* 3:4 fourth */
  }

  .mc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPythagoreanMonochord extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${monochordStyles}</style>
      <div class="mc-box">
        <div class="mc-stage">
          <div class="mc-soundbox">
            <div class="mc-rosette"></div>
            <div class="mc-rule">
              <div class="mc-tick"></div>
              <div class="mc-tick"></div>
              <div class="mc-tick"></div>
              <div class="mc-tick"></div>
              <div class="mc-tick"></div>
            </div>
          </div>

          <svg class="mc-string-svg" viewBox="0 0 80 16">
            <path class="mc-harmonic-wave" d="M 0 8 Q 20 0 40 8 Q 60 16 80 8" fill="none" />
          </svg>

          <div class="mc-bridge"></div>
        </div>

        <div class="mc-label">PYTHAGOREAN MONOCHORD</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pythagorean-monochord')) {
  customElements.define('concept-pythagorean-monochord', ConceptPythagoreanMonochord);
}
