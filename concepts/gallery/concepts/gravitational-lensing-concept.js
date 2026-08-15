const gravLensStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .grv {
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

  /* Spacetime coordinate grid warped into gravity funnel */
  .grv-spacetime-svg {
    position: absolute;
    inset: 0;
    width: 118px;
    height: 102px;
    opacity: 0.45;
  }

  /* Massive central lensing galaxy cluster */
  .grv-lens-mass {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #ffffff 0%, #8cffaa 45%, #004408 85%, transparent 100%);
    box-shadow: 0 0 14px #8cffaa;
    z-index: 5;
  }

  /* Lensed Einstein Ring & Arcs */
  .grv-einstein-ring {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1.5px solid #d6ffe0;
    box-shadow: 0 0 10px #8cffaa, inset 0 0 8px rgba(0, 204, 0, 0.4);
    animation: grv-ring-pulse 4s ease-in-out infinite alternate;
  }

  @keyframes grv-ring-pulse {
    0% { transform: scale(0.92); opacity: 0.7; }
    100% { transform: scale(1.08); opacity: 1; filter: drop-shadow(0 0 6px #ffffff); }
  }

  /* Einstein Cross quadruple mirage images */
  .grv-cross-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #8cffaa;
    animation: grv-cross-twinkle 2s ease-in-out infinite alternate;
  }

  .grv-cross-node.n1 { top: 18px; left: 56px; animation-delay: 0.1s; }
  .grv-cross-node.n2 { bottom: 18px; left: 56px; animation-delay: 0.4s; }
  .grv-cross-node.n3 { top: 48px; left: 26px; animation-delay: 0.7s; }
  .grv-cross-node.n4 { top: 48px; right: 26px; animation-delay: 1.0s; }

  @keyframes grv-cross-twinkle {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(1.2); opacity: 1; }
  }

  /* Photons bending around geodesic paths */
  .grv-geodesic-ray {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
    animation: grv-photon-deflect 3s ease-in-out infinite;
  }

  .grv-geodesic-ray.r1 {
    offset-path: path("M 8 20 C 35 20 45 35 45 51 C 45 67 35 82 8 82");
    animation-delay: 0s;
  }
  .grv-geodesic-ray.r2 {
    offset-path: path("M 110 20 C 83 20 73 35 73 51 C 73 67 83 82 110 82");
    animation-delay: 1.5s;
  }

  @keyframes grv-photon-deflect {
    0% { offset-distance: 0%; opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Astrophysics readout label */
  .grv-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptGravitationalLensing extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gravLensStyles}</style>
      <div class="grv">
        <svg class="grv-spacetime-svg" viewBox="0 0 118 102">
          <!-- Curvature coordinates -->
          <circle cx="59" cy="51" r="18" stroke="#8cffaa" stroke-width="1" stroke-dasharray="2,3" fill="none" />
          <circle cx="59" cy="51" r="32" stroke="#8cffaa" stroke-width="1" stroke-dasharray="3,3" fill="none" />
          <circle cx="59" cy="51" r="46" stroke="#8cffaa" stroke-width="1" stroke-dasharray="4,4" fill="none" />
          <!-- Radial geodesics -->
          <line x1="8" y1="8" x2="110" y2="94" stroke="rgba(0, 204, 0, 0.4)" stroke-width="1" />
          <line x1="8" y1="94" x2="110" y2="8" stroke="rgba(0, 204, 0, 0.4)" stroke-width="1" />
        </svg>

        <div class="grv-einstein-ring"></div>
        <div class="grv-lens-mass"></div>

        <div class="grv-cross-node n1"></div>
        <div class="grv-cross-node n2"></div>
        <div class="grv-cross-node n3"></div>
        <div class="grv-cross-node n4"></div>

        <div class="grv-geodesic-ray r1"></div>
        <div class="grv-geodesic-ray r2"></div>

        <div class="grv-label">EINSTEIN RING θ_E</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-gravitational-lensing')) {
  customElements.define('concept-gravitational-lensing', ConceptGravitationalLensing);
}
