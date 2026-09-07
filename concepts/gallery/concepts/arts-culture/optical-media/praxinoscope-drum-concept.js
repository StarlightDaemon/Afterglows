const praxinoscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .px-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201328 0%, #08030b 100%);
    border: 1.5px solid rgba(224, 64, 251, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(224, 64, 251, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .px-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .px-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating drum and mirror prism assembly */
  .px-rotor {
    transform-origin: 38px 36px;
    animation: px-spin 6s linear infinite;
  }

  @keyframes px-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Stationary Reflected Virtual Image at Center */
  .px-virtual-image {
    animation: px-anim-frame 0.8s steps(4, end) infinite;
  }

  @keyframes px-anim-frame {
    0% { transform: scale(1) translateY(0); }
    25% { transform: scale(1.1) translateY(-2px); }
    50% { transform: scale(1) translateY(0); }
    75% { transform: scale(0.9) translateY(2px); }
  }

  /* Mirror facets reflective gleam */
  .px-mirror-facets polygon {
    fill: #e1bee7;
    stroke: #ffffff;
    stroke-width: 0.6;
  }

  .px-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 64, 251, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPraxinoscopeDrum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${praxinoscopeStyles}</style>
      <div class="px-box">
        <div class="px-stage">
          <svg class="px-svg" viewBox="0 0 76 72">
            <!-- Outer Brass Spinning Cylinder Rim -->
            <circle cx="38" cy="36" r="32" fill="#2d1538" stroke="#ba68c8" stroke-width="1.2" />

            <!-- Rotating Component Group -->
            <g class="px-rotor">
              <!-- Outer Strip Animation Frames (Paper Band on inner perimeter) -->
              <circle cx="38" cy="36" r="28" fill="none" stroke="#f3e5f5" stroke-width="3.5" stroke-dasharray="8 6" />

              <!-- Central 12-Sided Polygonal Mirror Prism (Dodecagon) -->
              <g class="px-mirror-facets">
                <polygon points="38,22 45,24 45,30 38,30" />
                <polygon points="45,24 50,29 46,34 41,31" />
                <polygon points="50,29 52,36 47,38 45,33" />
                <polygon points="52,36 50,43 45,39 47,34" />
                <polygon points="50,43 45,48 41,41 46,38" />
                <polygon points="45,48 38,50 38,42 45,42" />
                <polygon points="38,50 31,48 31,42 38,42" />
                <polygon points="31,48 26,43 31,41 35,44" />
                <polygon points="26,43 24,36 29,38 31,41" />
                <polygon points="24,36 26,29 31,33 29,38" />
                <polygon points="26,29 31,24 35,31 31,33" />
                <polygon points="31,24 38,22 38,30 31,30" />
              </g>

              <!-- Radial Ray Partition Lines -->
              <g stroke="rgba(224, 64, 251, 0.4)" stroke-width="0.5">
                <line x1="38" y1="4" x2="38" y2="22" />
                <line x1="60.6" y1="13.4" x2="45" y2="24" />
                <line x1="70" y1="36" x2="52" y2="36" />
                <line x1="60.6" y1="58.6" x2="45" y2="48" />
                <line x1="38" y1="68" x2="38" y2="50" />
                <line x1="15.4" y1="58.6" x2="31" y2="48" />
                <line x1="6" y1="36" x2="24" y2="36" />
                <line x1="15.4" y1="13.4" x2="31" y2="24" />
              </g>
            </g>

            <!-- Stationary Centered Optical Virtual Image (Acrobat/Horse silhouette reflected in mirror) -->
            <g transform="translate(38, 36)">
              <g class="px-virtual-image">
                <circle cx="0" cy="-3" r="2" fill="#ffd700" />
                <line x1="0" y1="-1" x2="0" y2="4" stroke="#ffd700" stroke-width="1.2" />
                <line x1="-3" y1="1" x2="3" y2="1" stroke="#ffd700" stroke-width="1" />
                <line x1="0" y1="4" x2="-2.5" y2="7" stroke="#ffd700" stroke-width="1" />
                <line x1="0" y1="4" x2="2.5" y2="7" stroke="#ffd700" stroke-width="1" />
              </g>
            </g>

            <!-- Brass Spindle Bushing -->
            <circle cx="38" cy="36" r="1.5" fill="#ffffff" />
          </svg>
        </div>
        <div class="px-label">PRAXINOSCOPE DRUM</div>
      </div>
    `;
  }
}

customElements.define('concept-praxinoscope-drum', ConceptPraxinoscopeDrum);
