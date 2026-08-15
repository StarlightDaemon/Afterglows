const heliometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hm-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #182028 0%, #030508 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hm-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hm-svg {
    width: 76px;
    height: 72px;
  }

  /* Split divided-lens half sliding displacement along micrometer slide */
  .hm-top-lens-half {
    animation: hm-slide-top 3s ease-in-out infinite alternate;
  }

  .hm-bottom-lens-half {
    animation: hm-slide-bottom 3s ease-in-out infinite alternate;
  }

  @keyframes hm-slide-top {
    0% { transform: translateY(-2px); }
    100% { transform: translateY(2px); }
  }

  @keyframes hm-slide-bottom {
    0% { transform: translateY(2px); }
    100% { transform: translateY(-2px); }
  }

  /* Dual star double images overlapping in eyepiece field */
  .hm-star-a {
    animation: hm-star-shift-a 3s ease-in-out infinite alternate;
  }

  .hm-star-b {
    animation: hm-star-shift-b 3s ease-in-out infinite alternate;
  }

  @keyframes hm-star-shift-a {
    0% { transform: translate(3px, -3px); }
    100% { transform: translate(-3px, 3px); }
  }

  @keyframes hm-star-shift-b {
    0% { transform: translate(-3px, 3px); }
    100% { transform: translate(3px, -3px); }
  }

  /* Micrometer precision graduated screw drum glow */
  .hm-micrometer-screw {
    animation: hm-drum-glow 1.8s ease-in-out infinite alternate;
  }

  @keyframes hm-drum-glow {
    0% { stroke: #ffd700; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #ffd700); }
  }

  .hm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHeliometerMicrometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${heliometerStyles}</style>
      <div class="hm-box">
        <div class="hm-stage">
          <svg class="hm-svg" viewBox="0 0 76 72">
            <!-- Königsberg Bessel Heliometer Split-Objective Objective Cell (Left) -->
            <!-- Brass Objective Outer Ring Frame -->
            <circle cx="24" cy="36" r="16" fill="#0f1924" stroke="#ffd700" stroke-width="1.2" />

            <!-- Divided Objective Lens Half (Top Semicircle Lens) -->
            <g class="hm-top-lens-half">
              <path d="M 10 35 A 14 14 0 0 1 38 35 Z" fill="rgba(0, 229, 255, 0.25)" stroke="#00e5ff" stroke-width="1" />
              <!-- Upper brass slide carrier -->
              <line x1="8" y1="35" x2="40" y2="35" stroke="#ffb300" stroke-width="0.8" />
            </g>

            <!-- Divided Objective Lens Half (Bottom Semicircle Lens) -->
            <g class="hm-bottom-lens-half">
              <path d="M 10 37 A 14 14 0 0 0 38 37 Z" fill="rgba(0, 229, 255, 0.25)" stroke="#00e5ff" stroke-width="1" />
              <!-- Lower brass slide carrier -->
              <line x1="8" y1="37" x2="40" y2="37" stroke="#ffb300" stroke-width="0.8" />
            </g>

            <!-- Precision Micrometer Screw Drums (Divided in Arcseconds) -->
            <g class="hm-micrometer-screw">
              <rect x="21" y="14" width="6" height="4" rx="0.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
              <line x1="24" y1="18" x2="24" y2="24" stroke-width="1.2" />
            </g>

            <!-- Sighted Eyepiece Field of View (Right: Overlapping 61 Cygni Parallax Stars) -->
            <circle cx="56" cy="36" r="14" fill="#050a10" stroke="#78909c" stroke-width="1" />
            <circle cx="56" cy="36" r="13.5" fill="none" stroke="#37474f" stroke-width="0.5" stroke-dasharray="1 1" />

            <!-- Dual Image Star A (From Top Lens Half) -->
            <g class="hm-star-a">
              <circle cx="53" cy="36" r="1.8" fill="#ffd54f" filter="drop-shadow(0 0 3px #ffb300)" />
              <line x1="50" y1="36" x2="56" y2="36" stroke="#ffffff" stroke-width="0.4" />
            </g>

            <!-- Dual Image Star B (From Bottom Lens Half brought into coincidence) -->
            <g class="hm-star-b">
              <circle cx="59" cy="36" r="1.8" fill="#80d8ff" filter="drop-shadow(0 0 3px #00e5ff)" />
              <line x1="59" y1="33" x2="59" y2="39" stroke="#ffffff" stroke-width="0.4" />
            </g>

            <!-- Bessel 1838 First Stellar Parallax (61 Cygni 0.314") -->
            <text x="38" y="62" font-family="monospace" font-size="3" fill="#80d8ff" text-anchor="middle">61 CYGNI π = 0.314"</text>
          </svg>
        </div>
        <div class="hm-label">HELIOMETER MICROMETER</div>
      </div>
    `;
  }
}

customElements.define('concept-heliometer-micrometer', ConceptHeliometerMicrometer);
