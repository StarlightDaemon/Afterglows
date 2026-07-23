const levelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A spirit level being trued up: the body rocks as its surface is
     shimmed, the bubble slides opposite the tilt, and each time it
     settles dead-center the vial flares and LEVEL flashes. */
  .lvl {
    width: 116px;
    height: 80px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* The whole level rocks about its center. */
  .lvl-body {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 26px;
    height: 22px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 70, 14, 0.55), rgba(0, 30, 6, 0.8));
    transform-origin: 50% 50%;
    animation: lvl-rock 7s ease-in-out infinite;
  }

  @keyframes lvl-rock {
    0% { transform: rotate(3.2deg); }
    18% { transform: rotate(-2.4deg); }
    34% { transform: rotate(1.4deg); }
    /* Settled - dead level. */
    46%, 62% { transform: rotate(0deg); }
    76% { transform: rotate(-3deg); }
    88% { transform: rotate(2deg); }
    100% { transform: rotate(3.2deg); }
  }

  /* End caps. */
  .lvl-body::before,
  .lvl-body::after {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    width: 6px;
    background: rgba(0, 204, 0, 0.6);
  }

  .lvl-body::before { left: -2px; border-radius: 3px 0 0 3px; }
  .lvl-body::after { right: -2px; border-radius: 0 3px 3px 0; }

  /* The vial: a window with center marks and the bubble inside. */
  .lvl-vial {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 40px;
    height: 12px;
    margin-left: -20px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    border-radius: 7px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.35), rgba(0, 60, 12, 0.5));
    overflow: hidden;
    animation: lvl-vial 7s ease-in-out infinite;
  }

  /* Vial flare when centered. */
  @keyframes lvl-vial {
    0%, 40% { box-shadow: none; }
    48%, 60% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.9), inset 0 0 6px rgba(0, 204, 0, 0.5); }
    66%, 100% { box-shadow: none; }
  }

  /* Center gate marks. */
  .lvl-mark {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(214, 255, 224, 0.8);
  }

  .lvl-mark.m1 { left: 14px; }
  .lvl-mark.m2 { right: 14px; }

  /* The bubble: slides opposite the rock, centering as it settles. */
  .lvl-bubble {
    position: absolute;
    top: 2px;
    left: 50%;
    width: 10px;
    height: 7px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 38% 32%, rgba(242, 255, 221, 0.95), rgba(140, 255, 170, 0.55) 70%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
    animation: lvl-bubble 7s ease-in-out infinite;
  }

  @keyframes lvl-bubble {
    0% { transform: translateX(-11px); }
    18% { transform: translateX(9px); }
    34% { transform: translateX(-5px); }
    46%, 62% { transform: translateX(0); }
    76% { transform: translateX(10px); }
    88% { transform: translateX(-7px); }
    100% { transform: translateX(-11px); }
  }

  /* Readout: degrees wandering, then LEVEL on settle. */
  .lvl-read {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    text-align: center;
    font-size: 9px;
    letter-spacing: 2px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .lvl-read::before {
    content: '+3.2\\00B0';
    animation: lvl-read 7s steps(1) infinite;
  }

  @keyframes lvl-read {
    0% { content: '+3.2\\00B0'; }
    10% { content: '-1.1\\00B0'; }
    22% { content: '-2.4\\00B0'; }
    30% { content: '+1.4\\00B0'; }
    40% { content: '+0.3\\00B0'; }
    46% { content: 'LEVEL \\2713'; }
    64% { content: '-0.8\\00B0'; }
    76% { content: '-3.0\\00B0'; }
    88% { content: '+2.0\\00B0'; }
  }

  /* The surface line under the level, tilting with it. */
  .lvl-surface {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 54px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5), transparent);
    transform-origin: 50% 50%;
    animation: lvl-rock 7s ease-in-out infinite;
  }

  /* Shim wedge sliding under the low end during the settle. */
  .lvl-shim {
    position: absolute;
    left: 16px;
    top: 50px;
    width: 12px;
    height: 7px;
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    background: rgba(140, 255, 170, 0.7);
    opacity: 0;
    animation: lvl-shim 7s infinite;
  }

  @keyframes lvl-shim {
    0%, 30% { transform: translateX(-26px); opacity: 0; }
    38% { transform: translateX(0); opacity: 0.9; }
    62% { transform: translateX(0); opacity: 0.9; }
    70%, 100% { transform: translateX(-26px); opacity: 0; }
  }
`;

class ConceptLevel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${levelStyles}</style>
      <div class="lvl">
        <div class="lvl-surface"></div>
        <div class="lvl-shim"></div>
        <div class="lvl-body">
          <div class="lvl-vial">
            <div class="lvl-mark m1"></div>
            <div class="lvl-mark m2"></div>
            <div class="lvl-bubble"></div>
          </div>
        </div>
        <div class="lvl-read"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-level')) {
  customElements.define('concept-level', ConceptLevel);
}
