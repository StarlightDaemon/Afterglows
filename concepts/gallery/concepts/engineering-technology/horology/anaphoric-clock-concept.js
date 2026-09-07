const anaphoricStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .anf {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161005 0%, #060401 100%);
    border: 1.5px solid rgba(255, 187, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 187, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dial frame housing */
  .anf-housing {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #1f1405;
    border: 1.5px solid #ffaa00;
    box-shadow: inset 0 0 10px rgba(255, 170, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating bronze celestial rete disc (driven by clepsydra float gear) */
  .anf-rete-disc {
    position: absolute;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    animation: anf-rot 16s linear infinite;
  }

  @keyframes anf-rot {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Fixed bronze wire stereographic coordinate grid (tympan spider front) */
  .anf-wire-grid-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Floating water level tube on left side */
  .anf-clepsydra-tube {
    position: absolute;
    left: 4px;
    top: 18px;
    bottom: 18px;
    width: 6px;
    background: #0d1e28;
    border: 1px solid rgba(0, 229, 255, 0.5);
    border-radius: 2px;
  }

  .anf-clepsydra-float {
    position: absolute;
    left: 0;
    width: 100%;
    height: 6px;
    background: #ffffff;
    box-shadow: 0 0 4px #00e5ff;
    animation: anf-float-rise 8s ease-in-out infinite alternate;
  }

  @keyframes anf-float-rise {
    0% { bottom: 2px; }
    100% { bottom: 58px; }
  }

  /* Central star point and solar pin */
  .anf-sun-peg {
    position: absolute;
    top: 14px;
    left: 36px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffea00, 0 0 10px #ffffff;
  }

  .anf-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAnaphoricClock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${anaphoricStyles}</style>
      <div class="anf">
        <div class="anf-clepsydra-tube">
          <div class="anf-clepsydra-float"></div>
        </div>

        <div class="anf-housing">
          <div class="anf-rete-disc">
            <svg viewBox="0 0 72 72" style="width: 100%; height: 100%;">
              <!-- Ecliptic circle and constellation star pegs -->
              <circle cx="36" cy="28" r="22" fill="none" stroke="#ffaa00" stroke-width="1.2" stroke-dasharray="3 1.5" />
              <circle cx="36" cy="6" r="2" fill="#ffffff" />
              <circle cx="54" cy="20" r="2" fill="#ffffff" />
              <circle cx="48" cy="46" r="2" fill="#ffffff" />
              <circle cx="24" cy="46" r="2" fill="#ffffff" />
              <circle cx="18" cy="20" r="2" fill="#ffffff" />
            </svg>
            <div class="anf-sun-peg"></div>
          </div>

          <svg class="anf-wire-grid-svg" viewBox="0 0 80 80">
            <!-- Unequal hour curve arcs (stereographic wire spider) -->
            <path d="M 12 40 Q 40 18 68 40" fill="none" stroke="rgba(255, 235, 150, 0.6)" stroke-width="1" />
            <path d="M 8 50 Q 40 28 72 50" fill="none" stroke="rgba(255, 235, 150, 0.6)" stroke-width="1" />
            <path d="M 6 60 Q 40 38 74 60" fill="none" stroke="rgba(255, 235, 150, 0.6)" stroke-width="1" />
            <!-- Horizon line -->
            <line x1="4" y1="40" x2="76" y2="40" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="2 2" />
            <circle cx="40" cy="40" r="36" fill="none" stroke="#ffaa00" stroke-width="1.2" />
          </svg>
        </div>

        <div class="anf-label">ANAPHORIC STAR CLOCK</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-anaphoric-clock')) {
  customElements.define('concept-anaphoric-clock', ConceptAnaphoricClock);
}
