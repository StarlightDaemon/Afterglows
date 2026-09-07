const moireStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Two identical concentric-ring gratings; one stays put while the
     other's center prowls a slow ellipse. The interference fringes do
     all the animating - nothing else in the scene moves. */
  .moire {
    width: 112px;
    height: 96px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 204, 0, 0.35);
    border-radius: 4px;
    background: #030903;
  }

  .moire-grating {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220px;
    height: 220px;
    margin: -110px 0 0 -110px;
    background: repeating-radial-gradient(circle,
      rgba(0, 204, 0, 0.65) 0 1px,
      transparent 1px 5px);
  }

  .moire-grating.drift {
    animation: moire-drift 9s ease-in-out infinite;
  }

  /* The wandering center: a lazy loop that never quite repeats the
     same fringe pattern twice in a row. */
  @keyframes moire-drift {
    0%, 100% { transform: translate(-9px, -3px); }
    22% { transform: translate(6px, -8px); }
    45% { transform: translate(10px, 5px); }
    68% { transform: translate(-3px, 9px); }
    85% { transform: translate(-10px, 3px); }
  }

  /* A third, finer grating rotating imperceptibly for shimmer. */
  .moire-grating.spin {
    background: repeating-radial-gradient(circle,
      rgba(0, 204, 0, 0.3) 0 1px,
      transparent 1px 4px);
    animation: moire-spin 26s linear infinite;
  }

  @keyframes moire-spin {
    0% { transform: translate(4px, 2px) rotate(0deg); }
    100% { transform: translate(4px, 2px) rotate(360deg); }
  }

  /* Soft vignette so the fringes glow out of darkness. */
  .moire-vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center,
      transparent 40%,
      rgba(2, 6, 2, 0.85) 100%);
    pointer-events: none;
  }

  .moire-label {
    position: absolute;
    left: 5px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: rgba(140, 255, 170, 0.6);
  }
`;

class ConceptMoire extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${moireStyles}</style>
      <div class="moire">
        <div class="moire-grating"></div>
        <div class="moire-grating drift"></div>
        <div class="moire-grating spin"></div>
        <div class="moire-vignette"></div>
        <div class="moire-label">MOIRE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-moire')) {
  customElements.define('concept-moire', ConceptMoire);
}
