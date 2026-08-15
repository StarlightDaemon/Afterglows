const eulerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ed-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1a24 0%, #03070b 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ed-stage {
    position: relative;
    width: 90px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Concave reflective glass mirror base */
  .ed-mirror {
    position: absolute;
    bottom: 12px;
    width: 76px;
    height: 28px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 40%, #1a3a4f 0%, #07131b 80%);
    border: 1.5px solid #00e5ff;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.3), inset 0 0 6px rgba(0, 229, 255, 0.5);
  }

  /* Euler's Disk in rapid spintilt flutter */
  .ed-disk-orbit {
    position: absolute;
    bottom: 16px;
    width: 52px;
    height: 22px;
    border-radius: 50%;
    animation: ed-orbit 0.25s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes ed-orbit {
    0% { transform: rotate(0deg) scale(0.95); }
    50% { transform: rotate(180deg) scale(1.05); }
    100% { transform: rotate(360deg) scale(0.95); }
  }

  .ed-disk {
    width: 48px;
    height: 18px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffffff 0%, #00b0ff 40%, #d500f9 70%, #ffd600 100%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(0, 229, 255, 0.4);
    animation: ed-tilt-flutter 0.08s linear infinite alternate;
  }

  @keyframes ed-tilt-flutter {
    0% { transform: rotateX(55deg) rotateY(-8deg); }
    100% { transform: rotateX(65deg) rotateY(8deg); }
  }

  /* High frequency sound ripples */
  .ed-sound-waves {
    position: absolute;
    bottom: 22px;
    width: 60px;
    height: 16px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 229, 255, 0.4);
    animation: ed-sound-pulse 0.4s ease-out infinite;
    pointer-events: none;
  }

  @keyframes ed-sound-pulse {
    0% { transform: scale(0.6); opacity: 1; }
    100% { transform: scale(1.4); opacity: 0; }
  }

  .ed-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptEulerDisk extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${eulerStyles}</style>
      <div class="ed-box">
        <div class="ed-stage">
          <div class="ed-mirror"></div>
          <div class="ed-sound-waves"></div>

          <div class="ed-disk-orbit">
            <div class="ed-disk"></div>
          </div>
        </div>

        <div class="ed-label">EULER'S DISK</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-euler-disk')) {
  customElements.define('concept-euler-disk', ConceptEulerDisk);
}
