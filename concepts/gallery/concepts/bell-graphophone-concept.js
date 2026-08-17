const bellGraphophoneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #20171a 0%, #080507 100%);
    border: 1.5px solid rgba(236, 64, 122, 0.4);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(236, 64, 122, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating beeswax-coated cardboard cylinder */
  .bg-cylinder {
    animation: bg-spin-wax 2s linear infinite;
    transform-origin: 38px 36px;
  }

  @keyframes bg-spin-wax {
    0% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
    100% { transform: translateY(0); }
  }

  /* Feed screw carries the whole reproducer carriage along the cylinder */
  .bg-carriage {
    animation: bg-carriage-travel 3.6s ease-in-out infinite alternate;
  }

  @keyframes bg-carriage-travel {
    0% { transform: translateX(-9px); }
    100% { transform: translateX(9px); }
  }

  /* Floating sapphire cutting/reproducing stylus */
  .bg-sapphire-head {
    animation: bg-sapphire-float 0.3s ease-in-out infinite alternate;
    transform-origin: 38px 24px;
  }

  @keyframes bg-sapphire-float {
    0% { transform: translateY(0); }
    100% { transform: translateY(2px); }
  }

  /* Rubber acoustic hearing tube stethoscope oscillation */
  .bg-hearing-tubes {
    animation: bg-tube-sway 1.8s ease-in-out infinite alternate;
    transform-origin: 38px 20px;
  }

  @keyframes bg-tube-sway {
    0% { transform: rotate(-7deg); }
    100% { transform: rotate(7deg); }
  }

  /* Wax shavings / sound groove brilliance */
  .bg-groove-glint {
    animation: bg-glint-fade 1.2s ease-in-out infinite alternate;
  }

  @keyframes bg-glint-fade {
    0% { opacity: 0.15; }
    100% { opacity: 1; filter: drop-shadow(0 0 2px #f48fb1); }
  }

  .bg-groove-glint line {
    stroke-width: 1.1;
  }

  .bg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(236, 64, 122, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBellGraphophone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bellGraphophoneStyles}</style>
      <div class="bg-box">
        <div class="bg-stage">
          <svg class="bg-svg" viewBox="0 0 76 72">
            <!-- Polished Walnut Case & Treadle Gear Bed -->
            <rect x="8" y="52" width="60" height="6" rx="1" fill="#3e2723" stroke="#6d4c41" stroke-width="0.8" />
            <!-- Polished Brass Supports -->
            <rect x="14" y="44" width="5" height="8" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            <rect x="57" y="44" width="5" height="8" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

            <!-- Cardboard Cylinder with Brown Ozokerite / Paraffin Wax Coating -->
            <g class="bg-cylinder">
              <!-- Mandrel spindle shaft -->
              <line x1="12" y1="36" x2="64" y2="36" stroke="#cfd8dc" stroke-width="1.6" />
              <!-- Wax cylinder body -->
              <rect x="22" y="26" width="32" height="20" rx="2" fill="#5d4037" stroke="#ec407a" stroke-width="0.8" />

              <!-- Incised High-Definition Micro-Grooves -->
              <g class="bg-groove-glint">
                <line x1="26" y1="26" x2="26" y2="46" stroke="#f48fb1" stroke-width="0.5" />
                <line x1="30" y1="26" x2="30" y2="46" stroke="#f48fb1" stroke-width="0.5" />
                <line x1="34" y1="26" x2="34" y2="46" stroke="#ffffff" stroke-width="0.7" />
                <line x1="38" y1="26" x2="38" y2="46" stroke="#f48fb1" stroke-width="0.5" />
                <line x1="42" y1="26" x2="42" y2="46" stroke="#f48fb1" stroke-width="0.5" />
                <line x1="46" y1="26" x2="46" y2="46" stroke="#ffffff" stroke-width="0.7" />
                <line x1="50" y1="26" x2="50" y2="46" stroke="#f48fb1" stroke-width="0.5" />
              </g>
            </g>

            <!-- Reproducer carriage: head + listening tubes ride the feed screw -->
            <g class="bg-carriage">
            <!-- Floating Floating Reproducer Head with Jewel Sapphire Stylus -->
            <g class="bg-sapphire-head">
              <!-- Brass soundbox ring -->
              <circle cx="38" cy="20" r="5" fill="#2d1d23" stroke="#ffd700" stroke-width="0.8" />
              <!-- Mica Diaphragm inside -->
              <circle cx="38" cy="20" r="3.2" fill="rgba(236, 64, 122, 0.3)" />
              <!-- Floating sapphire point resting in wax groove -->
              <line x1="38" y1="24" x2="38" y2="28" stroke="#ffd700" stroke-width="0.8" />
              <polygon points="37,28 39,28 38,30" fill="#ec407a" filter="drop-shadow(0 0 2px #ec407a)" />
            </g>

            <!-- Dual Branching Rubber Listening Tubes (Stethoscope style) -->
            <g class="bg-hearing-tubes">
              <path d="M 38 15 Q 30 10 20 12 Q 14 14 10 18" fill="none" stroke="#212121" stroke-width="1.2" />
              <circle cx="10" cy="18" r="1.4" fill="#8d6e63" stroke="#ffd700" stroke-width="0.4" />

              <path d="M 38 15 Q 46 10 56 12 Q 62 14 66 18" fill="none" stroke="#212121" stroke-width="1.2" />
              <circle cx="66" cy="18" r="1.4" fill="#8d6e63" stroke="#ffd700" stroke-width="0.4" />
            </g>
            </g>

            <!-- Governor Pulley at Left -->
            <circle cx="15" cy="36" r="4" fill="none" stroke="#ffd700" stroke-width="0.8" />
          </svg>
        </div>
        <div class="bg-label">BELL GRAPHOPHONE</div>
      </div>
    `;
  }
}

customElements.define('concept-bell-graphophone', ConceptBellGraphophone);
