const albertiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ab-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #291b10 0%, #0c0803 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ab-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ab-svg {
    width: 76px;
    height: 72px;
  }

  /* Inner movable disk stepped rotation */
  .ab-inner-disk {
    transform-origin: 38px 36px;
    animation: ab-step-rotate 12s steps(8, end) infinite;
  }

  @keyframes ab-step-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Key letter index alignment indicator flash */
  .ab-index-needle {
    stroke: #ff3d00;
    animation: ab-needle-pulse 1.5s ease-in-out infinite alternate;
  }

  @keyframes ab-needle-pulse {
    0% { filter: drop-shadow(0 0 1px #ff3d00); }
    100% { filter: drop-shadow(0 0 4px #ffd600); }
  }

  .ab-outer-plate {
    fill: #4e342e;
    stroke: #ffb300;
    stroke-width: 1.2;
  }

  .ab-inner-plate {
    fill: #6d4c41;
    stroke: #ffd54f;
    stroke-width: 1;
  }

  .ab-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAlbertiDisk extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${albertiStyles}</style>
      <div class="ab-box">
        <div class="ab-stage">
          <svg class="ab-svg" viewBox="0 0 76 72">
            <!-- Outer Stationary Brass Disk (Stabilis - 24 uppercase cells) -->
            <circle class="ab-outer-plate" cx="38" cy="36" r="32" />
            <circle cx="38" cy="36" r="23" fill="none" stroke="rgba(255, 213, 79, 0.4)" stroke-width="0.8" />

            <!-- Outer Letter Division Radial Ticks -->
            <g stroke="#ffb300" stroke-width="0.6">
              <line x1="38" y1="4" x2="38" y2="13" />
              <line x1="60.6" y1="13.4" x2="54.3" y2="19.7" />
              <line x1="70" y1="36" x2="61" y2="36" />
              <line x1="60.6" y1="58.6" x2="54.3" y2="52.3" />
              <line x1="38" y1="68" x2="38" y2="59" />
              <line x1="15.4" y1="58.6" x2="21.7" y2="52.3" />
              <line x1="6" y1="36" x2="15" y2="36" />
              <line x1="15.4" y1="13.4" x2="21.7" y2="19.7" />
            </g>

            <!-- Outer Uppercase Representative Glyphs -->
            <g font-family="sans-serif" font-size="4" fill="#ffe082" text-anchor="middle" font-weight="bold">
              <text x="38" y="10">A</text>
              <text x="58" y="18">D</text>
              <text x="66" y="37">G</text>
              <text x="58" y="56">K</text>
              <text x="38" y="65">N</text>
              <text x="18" y="56">R</text>
              <text x="10" y="37">V</text>
              <text x="18" y="18">Z</text>
            </g>

            <!-- Inner Movable Disk (Mobilis - rotating alphabet) -->
            <g class="ab-inner-disk">
              <circle class="ab-inner-plate" cx="38" cy="36" r="22" />
              <circle cx="38" cy="36" r="13" fill="#3e2723" stroke="#ffb300" stroke-width="0.8" />

              <!-- Inner Lowercase Scrambled Alphabets -->
              <g font-family="monospace" font-size="3.5" fill="#ffffff" text-anchor="middle">
                <text x="38" y="18">k</text>
                <text x="51" y="24">x</text>
                <text x="56" y="37">m</text>
                <text x="51" y="50">p</text>
                <text x="38" y="55">b</text>
                <text x="25" y="50">t</text>
                <text x="20" y="37">q</text>
                <text x="25" y="24">e</text>
              </g>

              <!-- Center Index Pointer -->
              <polygon points="38,15 36,20 40,20" fill="#ff3d00" />
            </g>

            <!-- Center Pivot Rivet Hub -->
            <circle cx="38" cy="36" r="4" fill="#ffd54f" stroke="#ff8f00" stroke-width="1" />
            <circle cx="38" cy="36" r="1.5" fill="#3e2723" />

            <!-- Stationary Top Alignment Indicator Arrow -->
            <polygon class="ab-index-needle" points="38,2 35,6 41,6" fill="#ff3d00" stroke-width="0.5" />
          </svg>
        </div>
        <div class="ab-label">ALBERTI CIPHER DISK</div>
      </div>
    `;
  }
}

customElements.define('concept-alberti-disk', ConceptAlbertiDisk);
