const spirographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .spg {
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

  /* Fixed outer stator ring gear with internal teeth */
  .spg-ring-stator {
    position: relative;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    border: 2px dashed var(--accent, #00cc00);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Orbiting rolling rotor spur gear wheel */
  .spg-rotor-orbit {
    position: absolute;
    width: 82px;
    height: 82px;
    animation: spg-orbit 12s linear infinite;
  }

  @keyframes spg-orbit {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .spg-rotor-wheel {
    position: absolute;
    top: 4px;
    left: 21px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px dashed #d6ffe0;
    background: rgba(0, 40, 10, 0.4);
    box-shadow: 0 0 6px #8cffaa;
    animation: spg-wheel-spin 4s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes spg-wheel-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  /* Pen hole aperture on rotor */
  .spg-pen-hole {
    position: absolute;
    top: 6px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
  }

  /* Traced 5-petal hypotrochoid rosette curve SVG */
  .spg-rosette-svg {
    position: absolute;
    width: 72px;
    height: 72px;
    filter: drop-shadow(0 0 4px #8cffaa);
    animation: spg-curve-glint 4s ease-in-out infinite alternate;
  }

  @keyframes spg-curve-glint {
    0% { opacity: 0.7; }
    100% { opacity: 1; filter: drop-shadow(0 0 8px #ffffff); }
  }

  /* Stylus pen tip dot */
  .spg-stylus {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff;
    z-index: 6;
    offset-path: path("M 36 6 C 50 18 66 12 60 28 C 72 38 64 56 48 54 C 44 70 28 66 22 52 C 6 50 8 32 20 28 C 14 12 30 14 36 6");
    animation: spg-stylus-trace 4s linear infinite;
  }

  @keyframes spg-stylus-trace {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  /* Caption */
  .spg-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSpirograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spirographStyles}</style>
      <div class="spg">
        <div class="spg-ring-stator">
          <svg class="spg-rosette-svg" viewBox="0 0 72 72">
            <!-- 5-Petal Hypotrochoid Curve -->
            <path d="M 36 6 C 50 18 66 12 60 28 C 72 38 64 56 48 54 C 44 70 28 66 22 52 C 6 50 8 32 20 28 C 14 12 30 14 36 6 Z" stroke="#d6ffe0" stroke-width="1.5" fill="none" />
            <path d="M 36 12 C 46 22 58 18 54 30 C 62 38 56 50 44 48 C 40 60 28 56 24 46 C 12 44 14 32 22 30 C 18 18 30 20 36 12 Z" stroke="#8cffaa" stroke-width="1" stroke-dasharray="2,2" fill="none" opacity="0.6" />
          </svg>

          <div class="spg-rotor-orbit">
            <div class="spg-rotor-wheel">
              <div class="spg-pen-hole"></div>
            </div>
          </div>

          <div class="spg-stylus"></div>
        </div>

        <div class="spg-label">HYPOTROCHOID R:96 r:60</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-spirograph')) {
  customElements.define('concept-spirograph', ConceptSpirograph);
}
