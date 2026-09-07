const sundogStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sdg {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Cirrus ice crystal haze backdrop */
  .sdg-haze {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 50%, rgba(140, 255, 170, 0.15), transparent 75%);
  }

  /* Central solar disk */
  .sdg-sun {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 14px #ffffff, 0 0 24px #8cffaa;
    z-index: 5;
  }

  /* 22-Degree atmospheric ice halo circle */
  .sdg-halo-ring {
    position: absolute;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 1.5px solid rgba(214, 255, 224, 0.7);
    box-shadow: 0 0 10px rgba(0, 255, 68, 0.4);
    animation: sdg-halo-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes sdg-halo-pulse {
    0% { transform: scale(0.95); opacity: 0.7; }
    100% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 8px #ffffff); }
  }

  /* Refracted photon packets shooting to parhelia */
  .sdg-ray-packet {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #8cffaa;
    z-index: 6;
    animation: sdg-ray-shoot 1.8s linear infinite;
  }

  .ray-l {
    animation-name: sdg-ray-shoot-l;
    animation-delay: 0s;
  }

  .ray-r {
    animation-name: sdg-ray-shoot-r;
    animation-delay: 0.9s;
  }

  @keyframes sdg-ray-shoot-l {
    0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(-36px, 0) scale(1.4); opacity: 0; }
  }

  @keyframes sdg-ray-shoot-r {
    0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(36px, 0) scale(1.4); opacity: 0; }
  }

  /* Left Parhelion (Left Sun Dog) flare */
  .sdg-dog-l {
    position: absolute;
    left: 16px;
    width: 14px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 50%, #ffffff 0%, rgba(140, 255, 170, 0.8) 50%, transparent 100%);
    box-shadow: 0 0 10px #ffffff, 0 0 16px #8cffaa;
    animation: sdg-dog-flare 1.8s ease-in-out infinite alternate;
  }

  /* Right Parhelion (Right Sun Dog) flare */
  .sdg-dog-r {
    position: absolute;
    right: 16px;
    width: 14px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 60% 50%, #ffffff 0%, rgba(140, 255, 170, 0.8) 50%, transparent 100%);
    box-shadow: 0 0 10px #ffffff, 0 0 16px #8cffaa;
    animation: sdg-dog-flare 1.8s ease-in-out infinite alternate;
    animation-delay: 0.4s;
  }

  @keyframes sdg-dog-flare {
    0% { transform: scale(0.85) scaleX(0.7); }
    100% { transform: scale(1.25) scaleX(1.4); filter: drop-shadow(0 0 14px #ffffff); }
  }

  /* Upper tangent arc & parhelic circle SVG */
  .sdg-arcs-svg {
    position: absolute;
    inset: 0;
    width: 118px;
    height: 102px;
  }

  /* Rotating hexagonal ice crystal prism */
  .sdg-crystal {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #ffffff;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    box-shadow: 0 0 6px #ffffff;
    animation: sdg-crystal-spin 2.6s linear infinite;
  }

  .sdg-crystal.c1 { top: 20px; left: 32px; animation-delay: 0s; }
  .sdg-crystal.c2 { top: 22px; right: 34px; animation-delay: -0.6s; }
  .sdg-crystal.c3 { bottom: 24px; left: 38px; animation-delay: -1.2s; }
  .sdg-crystal.c4 { bottom: 24px; right: 38px; animation-delay: -1.8s; }

  @keyframes sdg-crystal-spin {
    from { transform: rotate(0deg) scale(0.8); }
    50% { transform: rotate(180deg) scale(1.3); }
    to { transform: rotate(360deg) scale(0.8); }
  }

  /* Optics label */
  .sdg-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSundog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sundogStyles}</style>
      <div class="sdg">
        <div class="sdg-haze"></div>

        <div class="sdg-ray-packet ray-l"></div>
        <div class="sdg-ray-packet ray-r"></div>

        <svg class="sdg-arcs-svg" viewBox="0 0 118 102">
          <!-- Parhelic horizontal light circle -->
          <line x1="8" y1="51" x2="110" y2="51" stroke="rgba(214, 255, 224, 0.5)" stroke-width="1.2" stroke-dasharray="3,3" />
          <!-- Upper tangent arc (wings) -->
          <path d="M 36 20 Q 59 10 82 20" stroke="#d6ffe0" stroke-width="1.8" fill="none" />
        </svg>

        <div class="sdg-halo-ring"></div>
        <div class="sdg-sun"></div>

        <div class="sdg-dog-l"></div>
        <div class="sdg-dog-r"></div>

        <div class="sdg-crystal c1"></div>
        <div class="sdg-crystal c2"></div>
        <div class="sdg-crystal c3"></div>
        <div class="sdg-crystal c4"></div>

        <div class="sdg-label">PARHELION 22° HALO</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-sundog')) {
  customElements.define('concept-sundog', ConceptSundog);
}
