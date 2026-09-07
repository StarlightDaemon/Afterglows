const mhdStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1a1215 0%, #050304 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mhd-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* High-velocity ionized plasma jet channel */
  .plasma-stream {
    animation: mhd-plasma-flow 1.5s linear infinite;
  }

  @keyframes mhd-plasma-flow {
    0% { stroke-dashoffset: 24; opacity: 0.7; }
    50% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0.7; }
  }

  /* Transverse magnetic field lines B (perpendicular into page) */
  .b-field-dots {
    animation: mhd-bfield-pulse 2.5s ease-in-out infinite alternate;
  }

  @keyframes mhd-bfield-pulse {
    0% { opacity: 0.4; }
    100% { opacity: 0.85; filter: drop-shadow(0 0 2px #38bdf8); }
  }

  /* Faraday induced current collection electrodes */
  .electrode-anode {
    fill: #ef4444;
    filter: drop-shadow(0 0 3px #ef4444);
  }

  .electrode-cathode {
    fill: #3b82f6;
    filter: drop-shadow(0 0 3px #3b82f6);
  }

  /* Induced EMF voltage arc */
  .emf-arc {
    animation: mhd-emf-spark 1.8s ease-in-out infinite alternate;
  }

  /* Ionized gas slugs shooting down the channel. */
  .plasma-slug {
    fill: #ffd9a0;
    filter: drop-shadow(0 0 4px #f97316);
  }

  .ps-1 { animation: mhd-slug-1 1.4s linear infinite; }
  .ps-2 { animation: mhd-slug-2 1.4s linear infinite; animation-delay: -0.47s; }
  .ps-3 { animation: mhd-slug-3 1.4s linear infinite; animation-delay: -0.93s; }

  @keyframes mhd-slug-1 {
    0% { transform: translate(14px, 58px); opacity: 0; }
    10% { opacity: 1; }
    90% { transform: translate(114px, 56px); opacity: 1; }
    100% { transform: translate(118px, 56px); opacity: 0; }
  }
  @keyframes mhd-slug-2 {
    0% { transform: translate(12px, 65px); opacity: 0; }
    10% { opacity: 1; }
    90% { transform: translate(116px, 65px); opacity: 1; }
    100% { transform: translate(120px, 65px); opacity: 0; }
  }
  @keyframes mhd-slug-3 {
    0% { transform: translate(14px, 72px); opacity: 0; }
    10% { opacity: 1; }
    90% { transform: translate(114px, 74px); opacity: 1; }
    100% { transform: translate(118px, 74px); opacity: 0; }
  }

  @keyframes mhd-emf-spark {
    0% { opacity: 0.5; stroke-width: 1; }
    100% { opacity: 1; stroke-width: 1.8; filter: drop-shadow(0 0 3px #fbbf24); }
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-anode { fill: #ef4444; }
  .lbl-cath { fill: #3b82f6; }
  .lbl-b { fill: #38bdf8; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(251, 146, 60, 0.9);
    z-index: 10;
  }
`;

class PhysicsMhdGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mhdStyles}</style>
      <div class="canvas-box">
        <svg class="mhd-svg" viewBox="0 0 130 130">
          <!-- MHD Expansion Channel Walls -->
          <polygon points="20,44 110,36 110,94 20,86" fill="#18181b" stroke="#71717a" stroke-width="1.2" />

          <!-- Transverse Magnetic Field Vectors (B into plane ⊗) -->
          <g class="b-field-dots" stroke="#38bdf8" stroke-width="0.8" fill="none">
            <circle cx="45" cy="54" r="2.5" />
            <line x1="43.5" y1="52.5" x2="46.5" y2="55.5" />
            <line x1="46.5" y1="52.5" x2="43.5" y2="55.5" />

            <circle cx="70" cy="54" r="2.5" />
            <line x1="68.5" y1="52.5" x2="71.5" y2="55.5" />
            <line x1="71.5" y1="52.5" x2="68.5" y2="55.5" />

            <circle cx="95" cy="54" r="2.5" />
            <line x1="93.5" y1="52.5" x2="96.5" y2="55.5" />
            <line x1="96.5" y1="52.5" x2="93.5" y2="55.5" />

            <circle cx="45" cy="76" r="2.5" />
            <line x1="43.5" y1="74.5" x2="46.5" y2="77.5" />
            <line x1="46.5" y1="74.5" x2="43.5" y2="77.5" />

            <circle cx="70" cy="76" r="2.5" />
            <line x1="68.5" y1="74.5" x2="71.5" y2="77.5" />
            <line x1="71.5" y1="74.5" x2="68.5" y2="77.5" />

            <circle cx="95" cy="76" r="2.5" />
            <line x1="93.5" y1="74.5" x2="96.5" y2="77.5" />
            <line x1="96.5" y1="74.5" x2="93.5" y2="77.5" />
          </g>
          <text x="64" y="26" class="lbl lbl-b">MAG FIELD B ⊗</text>

          <!-- High-Velocity Ionized Gas Plasma Core (v_x) -->
          <g class="plasma-stream" stroke="#f97316" stroke-width="2" stroke-dasharray="6 3" fill="none">
            <line x1="12" y1="58" x2="118" y2="56" />
            <line x1="10" y1="65" x2="120" y2="65" stroke="#fbbf24" stroke-width="2.5" />
            <line x1="12" y1="72" x2="118" y2="74" />
          </g>

          <!-- Streaming plasma slugs -->
          <circle cx="0" cy="0" r="2.4" class="plasma-slug ps-1" />
          <circle cx="0" cy="0" r="2.8" class="plasma-slug ps-2" />
          <circle cx="0" cy="0" r="2.4" class="plasma-slug ps-3" />

          <!-- Top Anode Electrode (+ Lorentz deflection of ions) -->
          <rect x="40" y="38" width="50" height="4" class="electrode-anode" rx="1" />
          <text x="42" y="34" class="lbl lbl-anode">ANODE (+)</text>

          <!-- Bottom Cathode Electrode (- Lorentz deflection of electrons) -->
          <rect x="40" y="88" width="50" height="4" class="electrode-cathode" rx="1" />
          <text x="40" y="98" class="lbl lbl-cath">CATHODE (-)</text>

          <!-- External Load Circuit Loop & Extracted EMF Electric Power -->
          <path d="M 65 38 L 65 18 L 122 18 L 122 112 L 65 112 L 65 92" fill="none" stroke="#ca8a04" stroke-width="1.2" />
          <circle cx="122" cy="65" r="5" fill="#18181b" stroke="#fbbf24" stroke-width="1" />
          <line class="emf-arc" x1="120" y1="65" x2="124" y2="65" stroke="#ffffff" />
          <text x="108" y="62" class="lbl" fill="#fbbf24">LOAD</text>
        </svg>
        <div class="hud">
          <span>E = -v × B</span>
          <span>MHD CHANNEL</span>
        </div>
      </div>
    `;
  }
}

customElements.define('physics-mhd-generator', PhysicsMhdGenerator);
