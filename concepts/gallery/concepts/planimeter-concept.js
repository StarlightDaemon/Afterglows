const planimeterStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .plm {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Paper drafting sheet */
  .plm-sheet {
    position: relative;
    width: 86px;
    height: 82px;
    background: #011206;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Arbitrary closed area contour being measured */
  .plm-contour-svg {
    position: absolute;
    width: 74px;
    height: 70px;
    filter: drop-shadow(0 0 3px #8cffaa);
  }

  /* Fixed pole anchor weight at top left */
  .plm-pole-anchor {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #008818;
    box-shadow: 0 0 6px #ffffff;
    z-index: 6;
  }

  /* Polar arm linking anchor to elbow hinge */
  .plm-polar-arm {
    position: absolute;
    top: 13px;
    left: 14px;
    width: 34px;
    height: 2px;
    background: #8cffaa;
    transform-origin: left center;
    animation: plm-arm-motion 4s ease-in-out infinite alternate;
    z-index: 4;
  }

  @keyframes plm-arm-motion {
    0% { transform: rotate(15deg); }
    100% { transform: rotate(45deg); }
  }

  /* Tracer arm with integrating wheel & pointer lens */
  .plm-tracer-arm {
    position: absolute;
    top: 22px;
    left: 36px;
    width: 44px;
    height: 2px;
    background: #d6ffe0;
    transform-origin: left center;
    animation: plm-tracer-motion 4s ease-in-out infinite alternate;
    z-index: 5;
  }

  @keyframes plm-tracer-motion {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(35deg); }
  }

  /* Precision integrating measuring roller wheel */
  .plm-measuring-wheel {
    position: absolute;
    top: -4px;
    left: 12px;
    width: 8px;
    height: 10px;
    background: repeating-linear-gradient(
      180deg,
      #ffffff 0px,
      #ffffff 1px,
      #005510 1px,
      #005510 3px
    );
    border: 1px solid #ffffff;
    border-radius: 1px;
    box-shadow: 0 0 4px #8cffaa;
    animation: plm-wheel-roll 1s linear infinite;
  }

  @keyframes plm-wheel-roll {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(0.85); }
    100% { transform: scaleY(1); }
  }

  /* Tracer pin point following the boundary path */
  .plm-tracer-pin {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    z-index: 7;
    offset-path: path("M 20 28 C 35 12 60 18 64 36 C 68 54 48 64 32 60 C 16 56 12 40 20 28");
    animation: plm-trace-path 4s linear infinite;
  }

  @keyframes plm-trace-path {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  /* Integrator readout */
  .plm-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptPlanimeter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${planimeterStyles}</style>
      <div class="plm">
        <div class="plm-sheet">
          <svg class="plm-contour-svg" viewBox="0 0 74 70">
            <!-- Closed curve being integrated (Green's theorem ∮ L dx + M dy) -->
            <path d="M 20 28 C 35 12 60 18 64 36 C 68 54 48 64 32 60 C 16 56 12 40 20 28 Z" fill="rgba(0, 100, 20, 0.35)" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="2,2" />
          </svg>

          <div class="plm-pole-anchor"></div>
          <div class="plm-polar-arm"></div>
          <div class="plm-tracer-arm">
            <div class="plm-measuring-wheel"></div>
          </div>
          <div class="plm-tracer-pin"></div>
        </div>

        <div class="plm-label">AREA: 48.62 cm²</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-planimeter')) {
  customElements.define('concept-planimeter', ConceptPlanimeter);
}
