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

  /* Split divided-lens half bold sliding displacement along micrometer slide */
  .hm-top-lens-half {
    animation: hm-slide-top 3.2s ease-in-out infinite alternate;
  }

  .hm-bottom-lens-half {
    animation: hm-slide-bottom 3.2s ease-in-out infinite alternate;
  }

  @keyframes hm-slide-top {
    0% { transform: translateY(-6px); }
    100% { transform: translateY(6px); }
  }

  @keyframes hm-slide-bottom {
    0% { transform: translateY(6px); }
    100% { transform: translateY(-6px); }
  }

  /* Dual star double images overlapping in eyepiece field */
  .hm-star-a {
    animation: hm-star-shift-a 3.2s ease-in-out infinite alternate;
  }

  .hm-star-b {
    animation: hm-star-shift-b 3.2s ease-in-out infinite alternate;
  }

  @keyframes hm-star-shift-a {
    0% { transform: translate(6px, -6px); }
    100% { transform: translate(-6px, 6px); }
  }

  @keyframes hm-star-shift-b {
    0% { transform: translate(-6px, 6px); }
    100% { transform: translate(6px, -6px); }
  }

  /* Micrometer precision graduated screw drum rotation */
  .hm-micrometer-screw {
    transform-origin: 24px 16px;
    animation: hm-drum-spin 1.6s linear infinite;
  }

  @keyframes hm-drum-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
            <circle cx="24" cy="36" r="16" fill="#0f1924" stroke="#ffd700" stroke-width="1.4" />

            <!-- Divided Objective Lens Half (Top Semicircle Lens) -->
            <g class="hm-top-lens-half">
              <path d="M 10 35 A 14 14 0 0 1 38 35 Z" fill="rgba(0, 229, 255, 0.35)" stroke="#00e5ff" stroke-width="1.2" />
              <!-- Upper brass slide carrier -->
              <line x1="8" y1="35" x2="40" y2="35" stroke="#ffb300" stroke-width="1.2" />
            </g>

            <!-- Divided Objective Lens Half (Bottom Semicircle Lens) -->
            <g class="hm-bottom-lens-half">
              <path d="M 10 37 A 14 14 0 0 0 38 37 Z" fill="rgba(0, 229, 255, 0.35)" stroke="#00e5ff" stroke-width="1.2" />
              <!-- Lower brass slide carrier -->
              <line x1="8" y1="37" x2="40" y2="37" stroke="#ffb300" stroke-width="1.2" />
            </g>

            <!-- Precision Micrometer Screw Drums -->
            <g class="hm-micrometer-screw">
              <circle cx="24" cy="16" r="3.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
              <line x1="20.5" y1="16" x2="27.5" y2="16" stroke="#ffffff" stroke-width="0.8" />
              <line x1="24" y1="12.5" x2="24" y2="19.5" stroke="#ffffff" stroke-width="0.8" />
            </g>

            <!-- Sighted Eyepiece Field of View (Right: Overlapping 61 Cygni Parallax Stars) -->
            <circle cx="56" cy="36" r="14" fill="#050a10" stroke="#00e5ff" stroke-width="1.2" />
            <line x1="42" y1="36" x2="70" y2="36" stroke="#37474f" stroke-width="0.6" stroke-dasharray="2 2" />
            <line x1="56" y1="22" x2="56" y2="50" stroke="#37474f" stroke-width="0.6" stroke-dasharray="2 2" />

            <!-- Dual Image Star A (From Top Lens Half) -->
            <g class="hm-star-a">
              <circle cx="53" cy="36" r="2.2" fill="#ffd54f" filter="drop-shadow(0 0 4px #ffb300)" />
              <line x1="49" y1="36" x2="57" y2="36" stroke="#ffffff" stroke-width="0.6" />
            </g>

            <!-- Dual Image Star B (From Bottom Lens Half) -->
            <g class="hm-star-b">
              <circle cx="59" cy="36" r="2.2" fill="#80d8ff" filter="drop-shadow(0 0 4px #00e5ff)" />
              <line x1="59" y1="32" x2="59" y2="40" stroke="#ffffff" stroke-width="0.6" />
            </g>

            <!-- Bessel 1838 First Stellar Parallax -->
            <text x="38" y="64" font-family="monospace" font-size="3" fill="#80d8ff" text-anchor="middle">BESSEL 1838 HELIOMETER</text>
          </svg>
        </div>
        <div class="hm-label">HELIOMETER MICROMETER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-heliometer-micrometer')) {
  customElements.define('concept-heliometer-micrometer', ConceptHeliometerMicrometer);
}
