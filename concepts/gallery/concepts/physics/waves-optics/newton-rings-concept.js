const newtonRingsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151828 0%, #03040c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nr-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nr-svg {
    width: 76px;
    height: 72px;
  }

  /* Concentric Interference Fringe Rings dynamic expansion */
  .nr-rings-group-1 {
    transform-origin: 38px 36px;
    animation: nr-fringe-expand 3s cubic-bezier(0.1, 0.7, 0.3, 1) infinite;
  }

  .nr-rings-group-2 {
    transform-origin: 38px 36px;
    animation: nr-fringe-expand 3s cubic-bezier(0.1, 0.7, 0.3, 1) infinite;
    animation-delay: 1.5s;
  }

  @keyframes nr-fringe-expand {
    0% { transform: scale(0.35); opacity: 1; }
    80% { opacity: 1; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  /* Orbiting incident photon packet */
  .nr-photon-spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #00e5ff;
    z-index: 6;
    animation: nr-photon-orbit 3s linear infinite;
  }

  @keyframes nr-photon-orbit {
    0% { transform: rotate(0deg) translate(22px) rotate(0deg); }
    100% { transform: rotate(360deg) translate(22px) rotate(-360deg); }
  }

  /* Central Dark Spot of Zero Phase Difference */
  .nr-center-spot {
    fill: #000000;
    stroke: #00e5ff;
    stroke-width: 1;
  }

  .nr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptNewtonRings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${newtonRingsStyles}</style>
      <div class="nr-box">
        <div class="nr-stage">
          <div class="nr-photon-spark"></div>

          <svg class="nr-svg" viewBox="0 0 76 72">
            <!-- Optical Flat Glass Base Frame -->
            <rect x="8" y="8" width="60" height="56" rx="2" fill="rgba(0, 229, 255, 0.05)" stroke="rgba(0, 229, 255, 0.3)" stroke-width="1.2" />

            <!-- Circular Convex Lens Contact Boundary -->
            <circle cx="38" cy="36" r="28" fill="none" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1" />

            <!-- Group 1: Concentric Chromatic Interference Rings with Wave Expansion -->
            <g class="nr-rings-group-1" fill="none">
              <circle cx="38" cy="36" r="24" stroke="#ff1744" stroke-width="1.2" />
              <circle cx="38" cy="36" r="20" stroke="#ff9100" stroke-width="1.4" />
              <circle cx="38" cy="36" r="16" stroke="#ffd600" stroke-width="1.6" />
              <circle cx="38" cy="36" r="12" stroke="#00e676" stroke-width="1.8" />
              <circle cx="38" cy="36" r="8" stroke="#00e5ff" stroke-width="2.2" />
            </g>

            <!-- Group 2: Interleaved Expansion Phase -->
            <g class="nr-rings-group-2" fill="none">
              <circle cx="38" cy="36" r="24" stroke="#ff1744" stroke-width="1.2" />
              <circle cx="38" cy="36" r="20" stroke="#ff9100" stroke-width="1.4" />
              <circle cx="38" cy="36" r="16" stroke="#ffd600" stroke-width="1.6" />
              <circle cx="38" cy="36" r="12" stroke="#00e676" stroke-width="1.8" />
              <circle cx="38" cy="36" r="8" stroke="#00e5ff" stroke-width="2.2" />
            </g>

            <!-- Central Destructive Interference Dark Spot -->
            <circle class="nr-center-spot" cx="38" cy="36" r="4" />

            <!-- Optical Axis Crosshairs -->
            <line x1="8" y1="36" x2="68" y2="36" stroke="rgba(0, 229, 255, 0.35)" stroke-width="0.6" stroke-dasharray="2 2" />
            <line x1="38" y1="8" x2="38" y2="64" stroke="rgba(0, 229, 255, 0.35)" stroke-width="0.6" stroke-dasharray="2 2" />
          </svg>
        </div>
        <div class="nr-label">NEWTON'S RINGS 1704</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-newton-rings')) {
  customElements.define('concept-newton-rings', ConceptNewtonRings);
}
