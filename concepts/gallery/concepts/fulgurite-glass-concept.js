const fulguriteStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #161026 0%, #05030a 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fg-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ground sand surface boundary */
  .fg-ground-line {
    position: absolute;
    top: 24px;
    width: 86px;
    height: 2px;
    background: #ffa726;
    box-shadow: 0 0 4px #ffa726;
  }

  /* Sky lightning bolt leader */
  .fg-sky-bolt {
    position: absolute;
    top: 4px;
    left: 45px;
    width: 12px;
    height: 22px;
  }

  .fg-bolt-path {
    stroke: #ffffff;
    stroke-width: 1.8;
    filter: drop-shadow(0 0 4px #00e5ff);
    animation: fg-flash 2.5s infinite alternate;
  }

  @keyframes fg-flash {
    0%, 90% { opacity: 0; }
    92%, 96% { opacity: 1; }
    98%, 100% { opacity: 0; }
  }

  /* Subterranean vitrified hollow fulgurite tube tree */
  .fg-fulgurite-tree {
    position: absolute;
    top: 24px;
    width: 68px;
    height: 48px;
  }

  .fg-glass-tube {
    stroke: #00e5ff;
    stroke-dasharray: 4 2;
    filter: drop-shadow(0 0 6px #00ffff);
    animation: fg-glow-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes fg-glow-pulse {
    0% { stroke: #00e5ff; opacity: 0.3; stroke-width: 1.2; filter: drop-shadow(0 0 2px #00ffff); }
    100% { stroke: #ffffff; opacity: 1; stroke-width: 3; filter: drop-shadow(0 0 12px #00e5ff); }
  }

  /* Discharge surge racing down the vitrifying tube */
  .fg-surge {
    fill: #ffffff;
    filter: drop-shadow(0 0 5px #00e5ff);
    offset-path: path("M 34 0 Q 36 15 32 25 Q 24 35 14 44");
    offset-rotate: auto;
    animation: fg-surge-run 1.8s linear infinite;
  }

  .fg-surge.b2 {
    offset-path: path("M 34 10 Q 48 18 58 24");
    animation-delay: -0.9s;
  }

  @keyframes fg-surge-run {
    0% { offset-distance: 0%; opacity: 0; }
    10% { opacity: 1; }
    88% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  .fg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFulguriteGlass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fulguriteStyles}</style>
      <div class="fg-box">
        <div class="fg-stage">
          <svg class="fg-sky-bolt" viewBox="0 0 12 22">
            <path class="fg-bolt-path" d="M 6 0 L 2 10 L 8 11 L 4 22" fill="none" />
          </svg>

          <div class="fg-ground-line"></div>

          <svg class="fg-fulgurite-tree" viewBox="0 0 68 48">
            <!-- Branching subterranean lechatelierite glass tree -->
            <path class="fg-glass-tube" d="M 34 0 Q 36 15 32 25 Q 24 35 14 44" fill="none" stroke-width="2" />
            <path class="fg-glass-tube" d="M 32 25 Q 40 34 52 42" fill="none" stroke-width="1.8" />
            <path class="fg-glass-tube" d="M 34 10 Q 48 18 58 24" fill="none" stroke-width="1.5" />
            <path class="fg-glass-tube" d="M 28 30 Q 32 40 34 46" fill="none" stroke-width="1.2" />

            <!-- Lightning energy surges vitrifying the sand -->
            <ellipse class="fg-surge" rx="4.5" ry="2" />
            <ellipse class="fg-surge b2" rx="3.5" ry="1.6" />
          </svg>
        </div>

        <div class="fg-label">PETRIFIED FULGURITE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fulgurite-glass')) {
  customElements.define('concept-fulgurite-glass', ConceptFulguriteGlass);
}
