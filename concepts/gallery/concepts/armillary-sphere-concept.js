const armillaryStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .as-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0a1426 0%, #02050c 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .as-stage {
    position: relative;
    width: 84px;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Classical ornate brass stand pedestal */
  .as-stand {
    position: absolute;
    bottom: 2px;
    width: 32px;
    height: 12px;
    background: #5d4037;
    border: 1px solid #ffd700;
    border-radius: 2px 2px 6px 6px;
  }

  /* Rotating Armillary Sphere Ring Cage */
  .as-sphere-cage {
    position: absolute;
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(23.5deg);
  }

  /* Rotating Meridian Ring Armature */
  .as-ring-meridian {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1.5px solid #ffd700;
    box-shadow: 0 0 6px rgba(255, 215, 0, 0.4);
    animation: as-spin-meridian 4s linear infinite;
  }

  @keyframes as-spin-meridian {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Equator Ring */
  .as-ring-equator {
    position: absolute;
    width: 60px;
    height: 24px;
    border-radius: 50%;
    border: 1.5px solid #ffe082;
    transform: rotateX(70deg);
  }

  /* Tilted Broad Zodiac Ecliptic Band */
  .as-band-ecliptic {
    position: absolute;
    width: 62px;
    height: 30px;
    border-radius: 50%;
    border: 2.5px solid #ff9100;
    box-shadow: 0 0 8px #ffab00;
    transform: rotateX(60deg) rotateZ(30deg);
  }

  /* Sol Sun gem marker traveling along the ecliptic ring */
  .as-sol-orbiter {
    position: absolute;
    width: 62px;
    height: 30px;
    border-radius: 50%;
    transform: rotateX(60deg) rotateZ(30deg);
    animation: as-orbit-sol 3.2s linear infinite;
  }

  .as-sol-sun {
    position: absolute;
    top: -4px;
    left: 27px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffd700, 0 0 16px #ff6d00;
  }

  @keyframes as-orbit-sol {
    0% { transform: rotateX(60deg) rotateZ(0deg); }
    100% { transform: rotateX(60deg) rotateZ(360deg); }
  }

  /* Central Earth Globe */
  .as-central-earth {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00e5ff;
    border: 1px solid #ffffff;
    box-shadow: 0 0 6px #00e5ff;
    z-index: 6;
  }

  /* Polar Axis Spindle & Pointer */
  .as-polar-axis {
    position: absolute;
    width: 2px;
    height: 72px;
    background: #ffffff;
    box-shadow: 0 0 4px #ffd700;
  }

  .as-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptArmillarySphere extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${armillaryStyles}</style>
      <div class="as-box">
        <div class="as-stage">
          <div class="as-stand"></div>

          <div class="as-sphere-cage">
            <div class="as-polar-axis"></div>
            <div class="as-ring-meridian"></div>
            <div class="as-ring-equator"></div>
            <div class="as-band-ecliptic"></div>
            <div class="as-sol-orbiter">
              <div class="as-sol-sun"></div>
            </div>
            <div class="as-central-earth"></div>
          </div>
        </div>

        <div class="as-label">ARMILLARY SPHERE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-armillary-sphere')) {
  customElements.define('concept-armillary-sphere', ConceptArmillarySphere);
}
