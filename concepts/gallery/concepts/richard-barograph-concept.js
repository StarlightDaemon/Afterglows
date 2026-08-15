const richardBarographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1a14 0%, #060503 100%);
    border: 1.5px solid rgba(245, 158, 11, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rb-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rb-svg {
    width: 76px;
    height: 72px;
  }

  /* Multi-tier Vidie vacuum capsule bellows expanding and compressing */
  .rb-vidie-capsules {
    animation: rb-bellows-compress 4s ease-in-out infinite alternate;
  }

  @keyframes rb-bellows-compress {
    0% { transform: scaleY(0.9); }
    100% { transform: scaleY(1.1); }
  }

  /* Magnifying lever arm pivoting and drawing chart curve */
  .rb-pen-arm {
    transform-origin: 30px 42px;
    animation: rb-pen-sweep 4s ease-in-out infinite alternate;
  }

  @keyframes rb-pen-sweep {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  /* Rotating clockwork drum chart cylinder */
  .rb-chart-drum {
    animation: rb-drum-rotate 8s linear infinite;
  }

  @keyframes rb-drum-rotate {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 20; }
  }

  /* Ink stylus trace point glow */
  .rb-ink-point {
    animation: rb-ink-glow 2s ease-in-out infinite alternate;
  }

  @keyframes rb-ink-glow {
    0% { fill: #ef4444; }
    100% { fill: #f87171; filter: drop-shadow(0 0 2px #dc2626); }
  }

  .rb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(245, 158, 11, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRichardBarograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${richardBarographStyles}</style>
      <div class="rb-box">
        <div class="rb-stage">
          <svg class="rb-svg" viewBox="0 0 76 72">
            <!-- 1880 Richard Frères Precision Recording Aneroid Barograph -->
            <!-- Mahogany Base & Glazed Instrument Case Platform -->
            <rect x="8" y="58" width="60" height="6" rx="1.5" fill="#292524" stroke="#78716c" stroke-width="0.8" />
            <line x1="8" y1="58" x2="68" y2="58" stroke="#ca8a04" stroke-width="0.8" />

            <!-- Rotating Clockwork Chart Drum (Right Cylinder) -->
            <g>
              <rect x="46" y="20" width="18" height="36" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="0.8" />
              <!-- Barograph Chart Paper Grid Lines -->
              <line class="rb-chart-drum" x1="46" y1="26" x2="64" y2="26" stroke="#94a3b8" stroke-dasharray="2 2" stroke-width="0.5" />
              <line class="rb-chart-drum" x1="46" y1="32" x2="64" y2="32" stroke="#94a3b8" stroke-dasharray="2 2" stroke-width="0.5" />
              <line class="rb-chart-drum" x1="46" y1="38" x2="64" y2="38" stroke="#94a3b8" stroke-dasharray="2 2" stroke-width="0.5" />
              <line class="rb-chart-drum" x1="46" y1="44" x2="64" y2="44" stroke="#94a3b8" stroke-dasharray="2 2" stroke-width="0.5" />
              <line class="rb-chart-drum" x1="46" y1="50" x2="64" y2="50" stroke="#94a3b8" stroke-dasharray="2 2" stroke-width="0.5" />
              <!-- Recorded Barometric Ink Trace Curve -->
              <path d="M 48 40 Q 54 30 62 36" fill="none" stroke="#ef4444" stroke-width="0.8" />
            </g>

            <!-- 8-Tier Vidie Corrugated Aneroid Vacuum Capsule Stack (Left) -->
            <g class="rb-vidie-capsules" style="transform-origin: 20px 58px;">
              <!-- Central Guide Spindle -->
              <line x1="20" y1="32" x2="20" y2="58" stroke="#d97706" stroke-width="1" />
              <!-- Corrugated Diaphragm Disks -->
              <ellipse cx="20" cy="54" rx="9" ry="2" fill="#451a03" stroke="#f59e0b" stroke-width="0.7" />
              <ellipse cx="20" cy="49" rx="9" ry="2" fill="#451a03" stroke="#f59e0b" stroke-width="0.7" />
              <ellipse cx="20" cy="44" rx="9" ry="2" fill="#451a03" stroke="#f59e0b" stroke-width="0.7" />
              <ellipse cx="20" cy="39" rx="9" ry="2" fill="#451a03" stroke="#f59e0b" stroke-width="0.7" />
              <ellipse cx="20" cy="34" rx="9" ry="2" fill="#451a03" stroke="#f59e0b" stroke-width="0.7" />
            </g>

            <!-- Articulated Mechanical Lever & Stylus Pen Arm -->
            <g class="rb-pen-arm">
              <!-- Lever Transmission Linkage -->
              <line x1="20" y1="34" x2="30" y2="42" stroke="#ca8a04" stroke-width="1.2" />
              <circle cx="30" cy="42" r="1.5" fill="#f59e0b" />
              <!-- Long Light Pen Arm -->
              <line x1="30" y1="42" x2="48" y2="35" stroke="#eab308" stroke-width="0.9" />
              <!-- Triangular Ink Nib -->
              <polygon class="rb-ink-point" points="48,34 50,35 48,36" />
            </g>
          </svg>
        </div>
        <div class="rb-label">RICHARD BAROGRAPH</div>
      </div>
    `;
  }
}

customElements.define('concept-richard-barograph', ConceptRichardBarograph);
