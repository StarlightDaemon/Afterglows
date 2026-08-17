const kaiserpanoramaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .kp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #2b1a10 0%, #0c0603 100%);
    border: 1.5px solid rgba(255, 167, 38, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 167, 38, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kp-svg {
    width: 76px;
    height: 72px;
  }

  /* Internal Carousel of Stereoscopic Slide Pairs with smooth continuous rotation */
  .kp-internal-carousel {
    transform-origin: 38px 36px;
    animation: kp-step 3.6s linear infinite;
  }

  @keyframes kp-step {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Dual Eyepiece Ocular Lenses 3D depth illumination */
  .kp-ocular-lenses {
    fill: #00e5ff;
    filter: drop-shadow(0 0 6px #00e5ff);
    animation: kp-lens-glow 1.8s ease-in-out infinite alternate;
  }

  @keyframes kp-lens-glow {
    0% { opacity: 0.6; }
    100% { opacity: 1; filter: drop-shadow(0 0 10px #ffffff); }
  }

  /* Stereoscopic projected viewing sightline beams */
  .kp-sightline {
    stroke: #00e5ff;
    stroke-width: 1.2;
    stroke-linecap: round;
    opacity: 0.8;
    animation: kp-beam-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes kp-beam-pulse {
    0% { opacity: 0.4; stroke-width: 0.8; }
    100% { opacity: 1; stroke-width: 1.6; filter: drop-shadow(0 0 4px #00e5ff); }
  }

  /* Orbiting stereoview slide spark packet */
  .kp-slide-spark {
    position: absolute;
    top: 38px;
    left: 43px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00e5ff, 0 0 12px #ffffff;
    z-index: 6;
    animation: kp-orbit 3.6s linear infinite;
  }

  @keyframes kp-orbit {
    0% { transform: rotate(0deg) translate(20px) rotate(0deg); }
    100% { transform: rotate(360deg) translate(20px) rotate(-360deg); }
  }

  /* Wooden Rotunda Paneling */
  .kp-rotunda {
    fill: #3e2723;
    stroke: #ff9800;
    stroke-width: 1.4;
  }

  .kp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 167, 38, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKaiserpanorama extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kaiserpanoramaStyles}</style>
      <div class="kp-box">
        <div class="kp-stage">
          <div class="kp-slide-spark"></div>

          <svg class="kp-svg" viewBox="0 0 76 72">
            <!-- Circular Wooden Rotunda Pavilion Structure -->
            <circle class="kp-rotunda" cx="38" cy="36" r="32" />
            <circle cx="38" cy="36" r="22" fill="#2d1b14" stroke="#ffb74d" stroke-width="1" />
            <circle cx="38" cy="36" r="10" fill="#1b0f0a" stroke="#ff9800" stroke-width="1.2" />

            <!-- Internal Stepping Carousel of Stereoview Slides -->
            <g class="kp-internal-carousel">
              <!-- 8 Radial Stereoscopic Slide Pairs on Conveyor Carrier -->
              <rect x="34" y="16" width="8" height="4" rx="0.5" fill="#e0f7fa" stroke="#00bcd4" stroke-width="0.8" />
              <rect x="52" y="24" width="4" height="8" rx="0.5" fill="#e0f7fa" stroke="#00bcd4" stroke-width="0.8" />
              <rect x="56" y="34" width="8" height="4" rx="0.5" fill="#e0f7fa" stroke="#00bcd4" stroke-width="0.8" />
              <rect x="52" y="44" width="4" height="8" rx="0.5" fill="#e0f7fa" stroke="#00bcd4" stroke-width="0.8" />
              <rect x="34" y="52" width="8" height="4" rx="0.5" fill="#e0f7fa" stroke="#00bcd4" stroke-width="0.8" />
              <rect x="20" y="44" width="4" height="8" rx="0.5" fill="#e0f7fa" stroke="#00bcd4" stroke-width="0.8" />
              <rect x="12" y="34" width="8" height="4" rx="0.5" fill="#e0f7fa" stroke="#00bcd4" stroke-width="0.8" />
              <rect x="20" y="24" width="4" height="8" rx="0.5" fill="#e0f7fa" stroke="#00bcd4" stroke-width="0.8" />
            </g>

            <!-- Projected Sightlines from Central Lamp to Oculars -->
            <line class="kp-sightline" x1="36" y1="32" x2="34" y2="8" />
            <line class="kp-sightline" x1="40" y1="32" x2="42" y2="8" />

            <!-- Radial Viewing Stations (Dual Brass Binocular Eyepieces) -->
            <!-- Top Station (Main Active Eyepiece) -->
            <rect x="30" y="2" width="7" height="6" rx="1" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />
            <rect x="39" y="2" width="7" height="6" rx="1" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />
            <circle class="kp-ocular-lenses" cx="33.5" cy="5" r="1.8" />
            <circle class="kp-ocular-lenses" cx="42.5" cy="5" r="1.8" />

            <!-- Surrounding Peripheral Viewing Stations around Rim -->
            <g fill="#ffb74d" opacity="0.6">
              <circle cx="60.6" cy="13.4" r="2.5" />
              <circle cx="70" cy="36" r="2.5" />
              <circle cx="60.6" cy="58.6" r="2.5" />
              <circle cx="38" cy="68" r="2.5" />
              <circle cx="15.4" cy="58.6" r="2.5" />
              <circle cx="6" cy="36" r="2.5" />
              <circle cx="15.4" cy="13.4" r="2.5" />
            </g>

            <!-- Central Gas Lamp Lighting Core Pillar -->
            <circle cx="38" cy="36" r="6" fill="#ffd700" filter="drop-shadow(0 0 8px #ff9800)" />
          </svg>
        </div>
        <div class="kp-label">KAISERPANORAMA 1880</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-kaiserpanorama')) {
  customElements.define('concept-kaiserpanorama', ConceptKaiserpanorama);
}
