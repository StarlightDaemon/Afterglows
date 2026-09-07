const superfluidStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #101622 0%, #030408 100%);
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

  .sf-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Superfluid Helium-II fountain jet erupting from capillary nozzle */
  .sf-fountain-jet {
    animation: sf-jet-flow 1.6s ease-in-out infinite alternate;
  }

  @keyframes sf-jet-flow {
    0% { transform: scaleY(0.9); filter: drop-shadow(0 0 2px #38bdf8); }
    100% { transform: scaleY(1.1); filter: drop-shadow(0 0 5px #bae6fd); }
  }

  /* Radiant heating of emery powder plug */
  .heater-radiance {
    animation: sf-heat-glow 2s ease-in-out infinite alternate;
  }

  @keyframes sf-heat-glow {
    0% { fill: #ef4444; opacity: 0.6; }
    100% { fill: #fbbf24; opacity: 1; filter: drop-shadow(0 0 4px #f59e0b); }
  }

  /* Superfluid creeping film & vortex influx */
  .superleak-stream {
    animation: sf-leak-flow 1.2s linear infinite;
  }

  /* Helium droplets erupting from the nozzle in the fountain geyser. */
  .fountain-drop {
    fill: #e0f6ff;
    filter: drop-shadow(0 0 4px #7dd3fc);
  }

  .fd-1 { animation: sf-erupt-1 1.3s ease-out infinite; }
  .fd-2 { animation: sf-erupt-2 1.3s ease-out infinite; animation-delay: -0.43s; }
  .fd-3 { animation: sf-erupt-3 1.3s ease-out infinite; animation-delay: -0.87s; }

  @keyframes sf-erupt-1 {
    0%   { transform: translate(65px, 24px); opacity: 0; }
    15%  { opacity: 1; }
    85%  { transform: translate(65px, 5px); opacity: 1; }
    100% { transform: translate(65px, 3px); opacity: 0; }
  }
  @keyframes sf-erupt-2 {
    0%   { transform: translate(65px, 24px); opacity: 0; }
    15%  { opacity: 1; }
    85%  { transform: translate(52px, 12px); opacity: 1; }
    100% { transform: translate(50px, 11px); opacity: 0; }
  }
  @keyframes sf-erupt-3 {
    0%   { transform: translate(65px, 24px); opacity: 0; }
    15%  { opacity: 1; }
    85%  { transform: translate(78px, 12px); opacity: 1; }
    100% { transform: translate(80px, 11px); opacity: 0; }
  }

  @keyframes sf-leak-flow {
    0% { stroke-dashoffset: 12; opacity: 0.5; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-sf { fill: #38bdf8; }
  .lbl-heat { fill: #f97316; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(56, 189, 248, 0.9);
    z-index: 10;
  }
`;

class PhysicsSuperfluidFountain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${superfluidStyles}</style>
      <div class="canvas-box">
        <svg class="sf-svg" viewBox="0 0 130 130">
          <!-- Liquid Helium Cryostat Bath Vessel (T < 2.17 K) -->
          <rect x="25" y="70" width="80" height="46" rx="3" fill="#0c4a6e" fill-opacity="0.3" stroke="#0284c7" stroke-width="1" />
          <!-- Liquid He-II Meniscus Level -->
          <line x1="26" y1="84" x2="104" y2="84" stroke="#7dd3fc" stroke-width="1.2" stroke-dasharray="2 1" />
          <text x="76" y="80" class="lbl lbl-sf">He-II BATH</text>

          <!-- Glass Fountain Tube with Narrow Jet Nozzle Tip (Top) -->
          <path d="
            M 61 24
            L 61 55
            L 52 75
            L 52 108
            L 78 108
            L 78 75
            L 69 55
            L 69 24
            Z
          " fill="#0f172a" fill-opacity="0.5" stroke="#bae6fd" stroke-width="1" />

          <!-- Porous Fine Emery Powder Plug (Superleak partition) -->
          <rect x="53" y="90" width="24" height="17" fill="#334155" stroke="#64748b" stroke-width="0.8" />
          <!-- Micro-Pores allowing zero-viscosity superfluid flow only -->
          <g fill="#38bdf8" opacity="0.8">
            <circle cx="57" cy="94" r="0.8" />
            <circle cx="63" cy="95" r="0.8" />
            <circle cx="69" cy="93" r="0.8" />
            <circle cx="73" cy="96" r="0.8" />
            <circle cx="58" cy="101" r="0.8" />
            <circle cx="65" cy="102" r="0.8" />
            <circle cx="71" cy="100" r="0.8" />
          </g>

          <!-- Light Bulb / Heater Illuminating Emery Plug (ΔT creation) -->
          <circle class="heater-radiance" cx="65" cy="78" r="4.5" />
          <text x="82" y="76" class="lbl lbl-heat">ΔT HEATER</text>

          <!-- Superfluid Influx through Superleak -->
          <g class="superleak-stream" stroke="#38bdf8" stroke-width="0.8" stroke-dasharray="2 2" fill="none">
            <line x1="42" y1="100" x2="52" y2="100" />
            <line x1="88" y1="100" x2="78" y2="100" />
            <line x1="65" y1="90" x2="65" y2="60" stroke-width="1.4" />
          </g>

          <!-- Thermomechanical Fountain Geyser Jet (Allen & Jones 1938) -->
          <g class="sf-fountain-jet" style="transform-origin: 65px 24px;">
            <path d="M 65 24 Q 61 10 50 16" fill="none" stroke="#bae6fd" stroke-width="1.2" />
            <path d="M 65 24 Q 69 10 80 16" fill="none" stroke="#bae6fd" stroke-width="1.2" />
            <path d="M 65 24 L 65 8" fill="none" stroke="#ffffff" stroke-width="1.8" />
            <circle cx="65" cy="7" r="2.2" fill="#ffffff" />
          </g>
          <!-- Erupting helium droplets -->
          <circle cx="0" cy="0" r="1.9" class="fountain-drop fd-1" />
          <circle cx="0" cy="0" r="1.7" class="fountain-drop fd-2" />
          <circle cx="0" cy="0" r="1.7" class="fountain-drop fd-3" />

          <text x="32" y="16" class="lbl" fill="#ffffff">FOUNTAIN JET</text>
        </svg>
        <div class="hud">
          <span>ΔP = ρS ΔT</span>
          <span>SUPERFLUID He-II</span>
        </div>
      </div>
    `;
  }
}

customElements.define('physics-superfluid-fountain', PhysicsSuperfluidFountain);
