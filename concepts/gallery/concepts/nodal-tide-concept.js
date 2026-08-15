const nodalTideStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ntd {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03141b 0%, #010609 100%);
    border: 1.5px solid rgba(0, 204, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ocean basin outline */
  .ntd-basin {
    position: absolute;
    width: 84px;
    height: 74px;
    border: 1.5px solid rgba(0, 229, 255, 0.4);
    border-radius: 40% 60% 50% 50% / 50% 40% 60% 50%;
    background: radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.08), transparent 70%);
  }

  /* Concentric co-range amplitude rings (0m, 1m, 2m, 3m) */
  .ntd-range-ring {
    position: absolute;
    border: 1px dashed rgba(0, 229, 255, 0.25);
    border-radius: 50%;
  }

  .ntd-range-ring.r1 { width: 24px; height: 24px; }
  .ntd-range-ring.r2 { width: 46px; height: 46px; }
  .ntd-range-ring.r3 { width: 68px; height: 68px; }

  /* Amphidromic central node (Zero tidal range) */
  .ntd-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #00e5ff;
    box-shadow: 0 0 8px #00e5ff;
    z-index: 6;
  }

  /* Rotating cotidal lines (Hour markers revolving counter-clockwise) */
  .ntd-cotidal-system {
    position: absolute;
    width: 80px;
    height: 80px;
    animation: ntd-rot-cotidal 8s linear infinite;
  }

  @keyframes ntd-rot-cotidal {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .ntd-crest-beam {
    position: absolute;
    inset: 0;
    background: conic-gradient(from 0deg, rgba(0, 229, 255, 0.4) 0deg, rgba(0, 229, 255, 0) 60deg, transparent 360deg);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px rgba(0, 229, 255, 0.5));
  }

  .ntd-spoke {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 38px;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, rgba(0, 229, 255, 0.2));
    transform-origin: 0% 0%;
  }

  .ntd-spoke.s0 { transform: rotate(0deg); }
  .ntd-spoke.s30 { transform: rotate(60deg); }
  .ntd-spoke.s60 { transform: rotate(120deg); }
  .ntd-spoke.s90 { transform: rotate(180deg); }
  .ntd-spoke.s120 { transform: rotate(240deg); }
  .ntd-spoke.s150 { transform: rotate(300deg); }

  /* Coastal tidal gauge sensors */
  .ntd-gauge {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00e5ff;
    animation: ntd-gauge-pulse 2s ease-in-out infinite alternate;
  }

  .ntd-gauge.g1 { top: 18px; left: 24px; animation-delay: 0s; }
  .ntd-gauge.g2 { top: 20px; right: 26px; animation-delay: 0.5s; }
  .ntd-gauge.g3 { bottom: 18px; right: 28px; animation-delay: 1s; }
  .ntd-gauge.g4 { bottom: 20px; left: 26px; animation-delay: 1.5s; }

  @keyframes ntd-gauge-pulse {
    0% { transform: scale(0.8); opacity: 0.4; box-shadow: 0 0 2px #00e5ff; }
    100% { transform: scale(1.4); opacity: 1; box-shadow: 0 0 8px #ffffff; }
  }

  .ntd-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptNodalTide extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${nodalTideStyles}</style>
      <div class="ntd">
        <div class="ntd-basin"></div>

        <div class="ntd-range-ring r1"></div>
        <div class="ntd-range-ring r2"></div>
        <div class="ntd-range-ring r3"></div>

        <div class="ntd-cotidal-system">
          <div class="ntd-crest-beam"></div>
          <div class="ntd-spoke s0"></div>
          <div class="ntd-spoke s30"></div>
          <div class="ntd-spoke s60"></div>
          <div class="ntd-spoke s90"></div>
          <div class="ntd-spoke s120"></div>
          <div class="ntd-spoke s150"></div>
        </div>

        <div class="ntd-node"></div>

        <div class="ntd-gauge g1"></div>
        <div class="ntd-gauge g2"></div>
        <div class="ntd-gauge g3"></div>
        <div class="ntd-gauge g4"></div>

        <div class="ntd-label">AMPHIDROMIC TIDAL NODE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-nodal-tide')) {
  customElements.define('concept-nodal-tide', ConceptNodalTide);
}
