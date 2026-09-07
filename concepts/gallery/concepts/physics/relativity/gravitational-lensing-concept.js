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

  /* Spacetime coordinate grid warped into gravity funnel with dynamic breathing */
  .grv-spacetime-svg {
    position: absolute;
    inset: 0;
    width: 118px;
    height: 102px;
    opacity: 0.55;
    animation: grv-spacetime-warp 3.2s ease-in-out infinite alternate;
    transform-origin: 59px 51px;
  }

  @keyframes grv-spacetime-warp {
    0% { transform: scale(0.92); }
    100% { transform: scale(1.08); }
  }

  /* Massive central lensing galaxy cluster */
  .grv-lens-mass {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #ffffff 0%, #8cffaa 45%, #004408 85%, transparent 100%);
    box-shadow: 0 0 16px #8cffaa, 0 0 24px #00ff66;
    z-index: 5;
  }

  /* Lensed Einstein Ring & Arcs with dynamic rotation */
  .grv-einstein-ring-rot {
    position: absolute;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: grv-ring-spin 6s linear infinite;
  }

  @keyframes grv-ring-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .grv-einstein-ring {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px dashed #d6ffe0;
    box-shadow: 0 0 10px #8cffaa, inset 0 0 8px rgba(0, 204, 0, 0.4);
  }

  /* Einstein Cross quadruple mirage images rotating along the ring */
  .grv-cross-node {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #8cffaa;
  }

  .grv-cross-node.n1 { top: -3.5px; left: calc(50% - 3.5px); }
  .grv-cross-node.n2 { bottom: -3.5px; left: calc(50% - 3.5px); }
  .grv-cross-node.n3 { top: calc(50% - 3.5px); left: -3.5px; }
  .grv-cross-node.n4 { top: calc(50% - 3.5px); right: -3.5px; }

  /* Bold photons bending around curved geodesic paths */
  .grv-geodesic-ray {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #8cffaa;
    z-index: 6;
    animation: grv-photon-deflect 2.2s linear infinite;
  }

  .grv-geodesic-ray.r1 {
    offset-path: path("M 8 20 C 35 20 45 35 45 51 C 45 67 35 82 8 82");
    animation-delay: 0s;
  }
  .grv-geodesic-ray.r2 {
    offset-path: path("M 110 20 C 83 20 73 35 73 51 C 73 67 83 82 110 82");
    animation-delay: 1.1s;
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
          <circle cx="59" cy="51" r="18" stroke="#8cffaa" stroke-width="1.2" stroke-dasharray="2,3" fill="none" />
          <circle cx="59" cy="51" r="32" stroke="#8cffaa" stroke-width="1.2" stroke-dasharray="3,3" fill="none" />
          <circle cx="59" cy="51" r="46" stroke="#8cffaa" stroke-width="1.2" stroke-dasharray="4,4" fill="none" />
          <!-- Radial geodesics -->
          <line x1="8" y1="8" x2="110" y2="94" stroke="rgba(0, 204, 0, 0.5)" stroke-width="1.2" />
          <line x1="8" y1="94" x2="110" y2="8" stroke="rgba(0, 204, 0, 0.5)" stroke-width="1.2" />
        </svg>

        <div class="grv-einstein-ring-rot">
          <div class="grv-einstein-ring"></div>
          <div class="grv-cross-node n1"></div>
          <div class="grv-cross-node n2"></div>
          <div class="grv-cross-node n3"></div>
          <div class="grv-cross-node n4"></div>
        </div>

        <div class="grv-lens-mass"></div>

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
