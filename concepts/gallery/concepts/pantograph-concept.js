const pantographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pnt {
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

  /* Drafting drawing board */
  .pnt-board {
    position: relative;
    width: 86px;
    height: 78px;
    background: #011206;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Fixed anchor pivot at bottom-left */
  .pnt-anchor {
    position: absolute;
    bottom: 8px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #008818;
    box-shadow: 0 0 6px #ffffff;
    z-index: 6;
  }

  /* Articulating parallelogram 4-bar linkage SVG */
  .pnt-linkage-svg {
    position: absolute;
    inset: 0;
    width: 86px;
    height: 78px;
    filter: drop-shadow(0 0 3px #8cffaa);
    animation: pnt-linkage-move 3.5s ease-in-out infinite alternate;
    transform-origin: 12px 66px;
  }

  @keyframes pnt-linkage-move {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(14deg); }
  }

  /* Source template curve (small) */
  .pnt-source-curve {
    position: absolute;
    bottom: 22px;
    left: 20px;
    width: 22px;
    height: 18px;
    border: 1px dotted rgba(214, 255, 224, 0.5);
    border-radius: 50%;
  }

  /* Scaled reproduction curve (large 2.5x) */
  .pnt-scaled-curve {
    position: absolute;
    top: 8px;
    right: 12px;
    width: 44px;
    height: 36px;
    border: 1.5px solid #d6ffe0;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
  }

  /* Tracer stylus dot on source */
  .pnt-tracer {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #8cffaa;
    box-shadow: 0 0 4px #8cffaa;
    offset-path: path("M 22 48 C 30 42 36 50 28 54 C 22 56 18 52 22 48");
    animation: pnt-trace-loop 3.5s linear infinite;
    z-index: 7;
  }

  /* Engraving pen stylus dot reproducing scaled copy */
  .pnt-pen {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    offset-path: path("M 46 22 C 64 12 76 28 60 36 C 46 42 38 32 46 22");
    animation: pnt-trace-loop 3.5s linear infinite;
    z-index: 7;
  }

  @keyframes pnt-trace-loop {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  /* Caption */
  .pnt-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptPantograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pantographStyles}</style>
      <div class="pnt">
        <div class="pnt-board">
          <div class="pnt-source-curve"></div>
          <div class="pnt-scaled-curve"></div>

          <div class="pnt-anchor"></div>

          <svg class="pnt-linkage-svg" viewBox="0 0 86 78">
            <!-- Parallelogram 4-bar linkage bars -->
            <!-- Main primary arm -->
            <line x1="12" y1="66" x2="68" y2="18" stroke="#ffffff" stroke-width="1.8" />
            <!-- Parallel link bar -->
            <line x1="28" y1="52" x2="48" y2="60" stroke="#8cffaa" stroke-width="1.5" />
            <!-- Secondary cross arm -->
            <line x1="48" y1="60" x2="52" y2="32" stroke="#8cffaa" stroke-width="1.5" />
            <line x1="38" y1="42" x2="52" y2="32" stroke="#d6ffe0" stroke-width="1.5" />

            <!-- Joint pivot rivets -->
            <circle cx="28" cy="52" r="2" fill="#ffffff" />
            <circle cx="48" cy="60" r="2" fill="#ffffff" />
            <circle cx="52" cy="32" r="2" fill="#ffffff" />
            <circle cx="68" cy="18" r="2.5" fill="#ffffff" />
          </svg>

          <div class="pnt-tracer"></div>
          <div class="pnt-pen"></div>
        </div>

        <div class="pnt-label">PANTOGRAPH 2.5:1 RATIO</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pantograph')) {
  customElements.define('concept-pantograph', ConceptPantograph);
}
