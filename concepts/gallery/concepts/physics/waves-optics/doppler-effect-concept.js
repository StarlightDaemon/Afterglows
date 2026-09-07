const dopplerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 60% 50%, #0e121e 0%, #03050a 100%);
    overflow: hidden;
  }

  .doppler-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Emitted compressed wavefront circles (offset centers) */
  .wave-front {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: doppler-pulse 2.8s linear infinite;
  }

  .wf-1 { top: 65px; left: 35px; animation-delay: 0s; }
  .wf-2 { top: 65px; left: 52px; animation-delay: 0.7s; }
  .wf-3 { top: 65px; left: 69px; animation-delay: 1.4s; }
  .wf-4 { top: 65px; left: 86px; animation-delay: 2.1s; }

  /* Moving Source Emitter */
  .moving-source {
    position: absolute;
    top: 65px;
    left: 20px;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00ffff, 0 0 16px rgba(0, 255, 255, 0.8);
    z-index: 6;
    animation: move-emitter 2.8s linear infinite;
  }

  .source-vector {
    position: absolute;
    top: 4px;
    left: 10px;
    width: 12px;
    height: 2px;
    background: #00ffff;
  }

  .source-vector::after {
    content: '';
    position: absolute;
    right: 0;
    top: -2px;
    border: 2px solid transparent;
    border-left-color: #00ffff;
  }

  .redshift-label {
    position: absolute;
    top: 24px;
    left: 14px;
    font-size: 6px;
    font-family: monospace;
    color: #ff4466;
  }

  .blueshift-label {
    position: absolute;
    top: 24px;
    right: 14px;
    font-size: 6px;
    font-family: monospace;
    color: #00e5ff;
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

  @keyframes move-emitter {
    0% { transform: translateX(10px); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateX(85px); opacity: 0; }
  }

  @keyframes doppler-pulse {
    0% {
      width: 0;
      height: 0;
      border: 1.5px solid #00ffff;
      opacity: 1;
    }
    40% {
      border: 1.5px solid #00e5ff;
      opacity: 0.8;
    }
    70% {
      border: 1.5px solid #ff5577;
      opacity: 0.5;
    }
    100% {
      width: 105px;
      height: 105px;
      border: 1px solid #ff3355;
      opacity: 0;
    }
  }
`;

class PhysicsDopplerEffect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dopplerStyles}</style>
      <div class="doppler-box">
        <span class="redshift-label">λ_red &gt; λ₀</span>
        <span class="blueshift-label">λ_blue &lt; λ₀</span>

        <div class="wave-front wf-1"></div>
        <div class="wave-front wf-2"></div>
        <div class="wave-front wf-3"></div>
        <div class="wave-front wf-4"></div>

        <div class="moving-source">
          <div class="source-vector"></div>
        </div>

        <div class="hud">
          <span>DOPPLER EFFECT</span>
          <span>v_s = 0.6 v_w</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-doppler-effect')) {
  customElements.define('physics-doppler-effect', PhysicsDopplerEffect);
}
