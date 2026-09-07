const peristalticStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1a20 0%, #03080c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pp-housing {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #061118;
    border: 1.5px solid #00e5ff;
    box-shadow: inset 0 0 10px rgba(0, 229, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pp-tube-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .pp-rotor {
    position: absolute;
    width: 60px;
    height: 60px;
    animation: pp-spin 3s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pp-spin {
    to { transform: rotate(360deg); }
  }

  .pp-arm {
    position: absolute;
    width: 4px;
    height: 28px;
    background: #00e5ff;
    border-radius: 2px;
    transform-origin: center center;
  }

  .pp-arm1 { transform: rotate(0deg) translateY(-14px); }
  .pp-arm2 { transform: rotate(120deg) translateY(-14px); }
  .pp-arm3 { transform: rotate(240deg) translateY(-14px); }

  .pp-roller {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #ffffff;
    border: 1.5px solid #00b0ff;
    border-radius: 50%;
    box-shadow: 0 0 6px #00e5ff;
  }

  .pp-roller1 { top: 2px; left: 25px; }
  .pp-roller2 { bottom: 10px; right: 8px; }
  .pp-roller3 { bottom: 10px; left: 8px; }

  .pp-hub {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #00e5ff;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 229, 255, 0.8);
    z-index: 5;
  }

  .pp-fluid-slug {
    stroke-dasharray: 20 50;
    animation: pp-flow 3s linear infinite;
  }

  @keyframes pp-flow {
    to { stroke-dashoffset: -70; }
  }

  .pp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPeristalticPump extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${peristalticStyles}</style>
      <div class="pp-box">
        <div class="pp-housing">
          <svg class="pp-tube-svg" viewBox="0 0 80 80">
            <!-- Outer channel casing -->
            <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(0, 229, 255, 0.15)" stroke-width="8" stroke-dasharray="160 50" transform="rotate(45 40 40)" />
            <!-- Fluid flexible tube -->
            <path d="M 12 78 C 12 55, 8 40, 40 8 C 72 8, 72 55, 68 78" fill="none" stroke="rgba(0, 229, 255, 0.3)" stroke-width="5" stroke-linecap="round" />
            <!-- Pulsing luminescent fluid stream -->
            <path class="pp-fluid-slug" d="M 12 78 C 12 55, 8 40, 40 8 C 72 8, 72 55, 68 78" fill="none" stroke="#00ffff" stroke-width="3" stroke-linecap="round" />
          </svg>

          <div class="pp-rotor">
            <div class="pp-arm pp-arm1"></div>
            <div class="pp-arm pp-arm2"></div>
            <div class="pp-arm pp-arm3"></div>

            <div class="pp-roller pp-roller1"></div>
            <div class="pp-roller pp-roller2"></div>
            <div class="pp-roller pp-roller3"></div>
          </div>

          <div class="pp-hub"></div>
        </div>

        <div class="pp-label">PERISTALTIC PUMP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-peristaltic-pump')) {
  customElements.define('concept-peristaltic-pump', ConceptPeristalticPump);
}
