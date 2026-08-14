const interferenceStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #061520 0%, #02070c 100%);
    overflow: hidden;
  }

  .ripple-tank {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Two Point Sources */
  .source-emitter {
    position: absolute;
    top: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-radius: 50%;
    background: #00ffff;
    box-shadow: 0 0 10px #00ffff, 0 0 16px #00e5ff;
    z-index: 6;
  }

  .source-1 {
    left: 36px;
  }

  .source-2 {
    left: 86px;
  }

  /* Wave pulses from Source 1 */
  .wave-pulse {
    position: absolute;
    border-radius: 50%;
    border: 1.5px solid rgba(0, 229, 255, 0.7);
    pointer-events: none;
    animation: ripple-spread 3s linear infinite;
  }

  .w1-1 { top: 61px; left: 36px; animation-delay: 0s; }
  .w1-2 { top: 61px; left: 36px; animation-delay: 0.75s; }
  .w1-3 { top: 61px; left: 36px; animation-delay: 1.5s; }
  .w1-4 { top: 61px; left: 36px; animation-delay: 2.25s; }

  .w2-1 { top: 61px; left: 86px; animation-delay: 0s; }
  .w2-2 { top: 61px; left: 86px; animation-delay: 0.75s; }
  .w2-3 { top: 61px; left: 86px; animation-delay: 1.5s; }
  .w2-4 { top: 61px; left: 86px; animation-delay: 2.25s; }

  /* Interference nodal lines overlay (destructive interference hyperbolas) */
  .nodal-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }

  .nodal-line {
    fill: none;
    stroke: #ff007f;
    stroke-width: 1;
    stroke-dasharray: 2 3;
  }

  .antinodal-center {
    position: absolute;
    top: 10px;
    bottom: 20px;
    left: 65px;
    width: 1px;
    background: rgba(0, 255, 170, 0.4);
    box-shadow: 0 0 6px rgba(0, 255, 170, 0.6);
  }

  .hud {
    position: absolute;
    bottom: 4px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.8);
    z-index: 10;
  }

  @keyframes ripple-spread {
    0% {
      width: 0;
      height: 0;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    80% {
      opacity: 0.6;
    }
    100% {
      width: 110px;
      height: 110px;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }
`;

class PhysicsWaveInterference extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${interferenceStyles}</style>
      <div class="ripple-tank">
        <svg class="nodal-svg" viewBox="0 0 130 130">
          <path class="nodal-line" d="M 65 65 Q 40 20 20 10 M 65 65 Q 40 110 20 120" />
          <path class="nodal-line" d="M 65 65 Q 90 20 110 10 M 65 65 Q 90 110 110 120" />
        </svg>
        <div class="antinodal-center"></div>

        <div class="source-emitter source-1"></div>
        <div class="source-emitter source-2"></div>

        <div class="wave-pulse w1-1"></div>
        <div class="wave-pulse w1-2"></div>
        <div class="wave-pulse w1-3"></div>
        <div class="wave-pulse w1-4"></div>

        <div class="wave-pulse w2-1"></div>
        <div class="wave-pulse w2-2"></div>
        <div class="wave-pulse w2-3"></div>
        <div class="wave-pulse w2-4"></div>

        <div class="hud">
          <span>SUPERPOSITION</span>
          <span>d·sinθ = mλ</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-wave-interference')) {
  customElements.define('physics-wave-interference', PhysicsWaveInterference);
}
