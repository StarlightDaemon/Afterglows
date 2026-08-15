const peaucellierStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pcl {
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

  /* Linkage motion apparatus frame */
  .pcl-frame {
    position: relative;
    width: 90px;
    height: 74px;
  }

  /* Fixed base ground pivots */
  .pcl-fixed-o {
    position: absolute;
    left: 12px;
    top: 37px;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    z-index: 5;
  }

  .pcl-fixed-c {
    position: absolute;
    left: 28px;
    top: 37px;
    width: 5px;
    height: 5px;
    margin: -2.5px 0 0 -2.5px;
    border-radius: 50%;
    background: #00cc00;
    border: 1px solid #ffffff;
    z-index: 5;
  }

  /* Linkage bars animated via SVG */
  .pcl-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Exact mathematical straight line guide */
  .pcl-straight-line {
    position: absolute;
    right: 12px;
    top: 10px;
    bottom: 10px;
    width: 1.5px;
    background: #ffffff;
    box-shadow: 0 0 6px #8cffaa, 0 0 10px #00ff66;
  }

  /* Tracer pen point moving up and down in true straight line */
  .pcl-tracer {
    position: absolute;
    right: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    z-index: 6;
    animation: pcl-vert-trace 3s ease-in-out infinite alternate;
  }

  @keyframes pcl-vert-trace {
    0% { top: 12px; }
    50% { top: 34px; }
    100% { top: 56px; }
  }

  /* Articulating rhombus links */
  .pcl-rhombus-node-top {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #8cffaa;
    z-index: 5;
    animation: pcl-rhomb-top 3s ease-in-out infinite alternate;
  }

  .pcl-rhombus-node-bot {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #8cffaa;
    z-index: 5;
    animation: pcl-rhomb-bot 3s ease-in-out infinite alternate;
  }

  @keyframes pcl-rhomb-top {
    0% { left: 56px; top: 18px; }
    50% { left: 62px; top: 22px; }
    100% { left: 56px; top: 38px; }
  }

  @keyframes pcl-rhomb-bot {
    0% { left: 56px; top: 38px; }
    50% { left: 62px; top: 48px; }
    100% { left: 56px; top: 52px; }
  }

  .pcl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPeaucellierLinkage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${peaucellierStyles}</style>
      <div class="pcl">
        <div class="pcl-frame">
          <div class="pcl-fixed-o"></div>
          <div class="pcl-fixed-c"></div>

          <div class="pcl-straight-line"></div>
          <div class="pcl-tracer"></div>

          <div class="pcl-rhombus-node-top"></div>
          <div class="pcl-rhombus-node-bot"></div>

          <svg class="pcl-svg" viewBox="0 0 90 74">
            <!-- Long arms from O (12,37) -->
            <line x1="12" y1="37" x2="58" y2="22" stroke="rgba(0, 204, 0, 0.7)" stroke-width="1.5" />
            <line x1="12" y1="37" x2="58" y2="52" stroke="rgba(0, 204, 0, 0.7)" stroke-width="1.5" />

            <!-- Rhombus 4-bar linkage -->
            <polygon points="44,37 58,22 78,37 58,52" fill="rgba(0, 255, 100, 0.08)" stroke="#8cffaa" stroke-width="1.5" />

            <!-- Circular crank link from C (28,37) to inner rhombus vertex (44,37) -->
            <line x1="28" y1="37" x2="44" y2="37" stroke="#ffffff" stroke-width="1.8" />
            <circle cx="44" cy="37" r="2.5" fill="#ffffff" />
          </svg>
        </div>

        <div class="pcl-label">PEAUCELLIER STRAIGHT LINE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-peaucellier-linkage')) {
  customElements.define('concept-peaucellier-linkage', ConceptPeaucellierLinkage);
}
