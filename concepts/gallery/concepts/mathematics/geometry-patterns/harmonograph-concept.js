const harmonographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hrm {
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

  /* Harmonograph drawing platen / paper */
  .hrm-paper {
    position: relative;
    width: 84px;
    height: 84px;
    background: #010f05;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Decaying Lissajous / 3:2 lateral harmonic rose curve SVG */
  .hrm-curve-svg {
    position: absolute;
    width: 76px;
    height: 76px;
    filter: drop-shadow(0 0 3px #8cffaa);
    animation: hrm-curve-spin 16s linear infinite;
  }

  @keyframes hrm-curve-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Drawing pen stylus point */
  .hrm-pen {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #8cffaa;
    z-index: 5;
    offset-path: path("M 38 12 C 58 12 64 38 38 38 C 12 38 18 64 38 64 C 58 64 64 38 38 38 C 12 38 18 12 38 12");
    animation: hrm-pen-trace 4s ease-in-out infinite;
  }

  @keyframes hrm-pen-trace {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  /* Dual mechanical rocker linkage arms */
  .hrm-arm-l {
    position: absolute;
    top: 40px;
    left: 4px;
    width: 32px;
    height: 2px;
    background: #8cffaa;
    transform-origin: left center;
    animation: hrm-arm-swing-l 2s ease-in-out infinite alternate;
  }

  .hrm-arm-r {
    position: absolute;
    top: 40px;
    right: 4px;
    width: 32px;
    height: 2px;
    background: #8cffaa;
    transform-origin: right center;
    animation: hrm-arm-swing-r 3s ease-in-out infinite alternate;
  }

  @keyframes hrm-arm-swing-l {
    0% { transform: rotate(-25deg); }
    100% { transform: rotate(25deg); }
  }

  @keyframes hrm-arm-swing-r {
    0% { transform: rotate(20deg); }
    100% { transform: rotate(-20deg); }
  }

  /* Frequency harmonic ratio readout */
  .hrm-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptHarmonograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${harmonographStyles}</style>
      <div class="hrm">
        <div class="hrm-paper">
          <svg class="hrm-curve-svg" viewBox="0 0 76 76">
            <!-- 3:2 Lateral pendulum resonant rose knot curve -->
            <path d="
              M 38 8
              C 58 12 68 28 62 48
              C 56 68 38 68 24 62
              C 10 56 8 38 18 24
              C 28 10 48 10 58 24
              C 68 38 62 58 48 64
              C 34 70 18 62 14 48
              C 10 34 24 18 38 8
            " stroke="#d6ffe0" stroke-width="1.2" fill="none" />
            <!-- Inner decayed harmonic line -->
            <path d="
              M 38 18
              C 50 20 56 30 52 42
              C 48 54 38 54 28 50
              C 18 46 18 34 24 26
              C 30 18 42 18 48 26
              C 54 34 50 46 42 50
              C 34 54 24 50 22 42
              C 20 34 28 24 38 18
            " stroke="#8cffaa" stroke-width="1" stroke-dasharray="2,2" fill="none" opacity="0.75" />
          </svg>

          <div class="hrm-arm-l"></div>
          <div class="hrm-arm-r"></div>
          <div class="hrm-pen"></div>
        </div>

        <div class="hrm-label">RATIO 3:2 • PHASE π/4</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-harmonograph')) {
  customElements.define('concept-harmonograph', ConceptHarmonograph);
}
