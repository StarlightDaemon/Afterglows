const bunsenSpectroscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bs-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1814 0%, #060403 100%);
    border: 1.5px solid rgba(245, 158, 11, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bs-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bs-svg {
    width: 76px;
    height: 72px;
  }

  /* Bunsen burner flame excitation glow */
  .bs-flame-glow {
    animation: bs-flame-flicker 0.6s ease-in-out infinite alternate;
  }

  @keyframes bs-flame-flicker {
    0% { transform: translateY(0) scaleY(0.9) scaleX(0.9); fill: #3b82f6; }
    100% { transform: translateY(-3px) scaleY(1.2) scaleX(1.1); fill: #f97316; filter: drop-shadow(0 0 5px #ea580c); }
  }

  /* Slewing observing telescope arm scanning across the refracted spectrum fan */
  .bs-telescope-arm {
    transform-origin: 38px 36px;
    animation: bs-tele-sweep 3s ease-in-out infinite alternate;
  }

  @keyframes bs-tele-sweep {
    0% { transform: rotate(-14deg); }
    100% { transform: rotate(14deg); }
  }

  /* Traveling spectral photon packets */
  .bs-photon {
    fill: #ffd600;
    box-shadow: 0 0 4px #ffd600;
  }

  .p-in {
    animation: bs-photon-in 2s linear infinite;
  }

  .p-out {
    animation: bs-photon-out 2s linear infinite;
    animation-delay: 0.8s;
  }

  @keyframes bs-photon-in {
    0% { transform: translate(10px, 49px); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(36px, 37px); opacity: 0; }
  }

  @keyframes bs-photon-out {
    0% { transform: translate(40px, 37px); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(64px, 49px); opacity: 0; }
  }

  .bs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(245, 158, 11, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBunsenSpectroscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bunsenSpectroscopeStyles}</style>
      <div class="bs-box">
        <div class="bs-stage">
          <svg class="bs-svg" viewBox="0 0 76 72">
            <!-- Central Heavy Cast Iron Pillar Stand -->
            <polygon points="34,66 42,66 39,52 37,52" fill="#292524" stroke="#78716c" stroke-width="0.8" />
            <rect x="28" y="66" width="20" height="3" rx="1" fill="#1c1917" stroke="#b45309" stroke-width="0.8" />

            <!-- Central Round Prism Table & Flint Glass Equilateral Prism -->
            <circle cx="38" cy="36" r="12" fill="#1c1917" stroke="#b45309" stroke-width="0.8" />
            <polygon points="38,28 47,43 29,43" fill="#0284c7" fill-opacity="0.4" stroke="#67e8f9" stroke-width="1.2" />

            <!-- Tube 1: Collimator Tube with Adjustable Slit (Left, 225° direction) -->
            <line x1="12" y1="48" x2="31" y2="39" stroke="#b45309" stroke-width="3.2" stroke-linecap="round" />
            <rect x="8" y="48" width="5" height="5" rx="1" fill="#78350f" stroke="#fbbf24" stroke-width="0.8" />

            <!-- Bunsen Burner Flame with Salt Sample Platinum Wire Bead -->
            <path class="bs-flame-glow" d="M 6 58 Q 2 50 6 44 Q 10 50 6 58 Z" />
            <line x1="10" y1="50" x2="6" y2="48" stroke="#cbd5e1" stroke-width="0.8" />

            <!-- Tube 3: Scale Tube (Top) -->
            <line x1="38" y1="12" x2="38" y2="26" stroke="#b45309" stroke-width="2.5" stroke-linecap="round" />
            <circle cx="38" cy="10" r="3" fill="#451a03" stroke="#f59e0b" stroke-width="0.6" />

            <!-- Dispersed Spectrum Light Ray Path -->
            <line x1="12" y1="48" x2="34" y2="37" stroke="#fbbf24" stroke-width="1" stroke-dasharray="2 1.5" />

            <!-- Slewing Observing Telescope Arm & Eyepiece (Right) -->
            <g class="bs-telescope-arm">
              <line x1="38" y1="36" x2="64" y2="48" stroke="#b45309" stroke-width="3.2" stroke-linecap="round" />
              <line x1="38" y1="36" x2="64" y2="48" stroke="#f59e0b" stroke-width="1" />
              <circle cx="64" cy="48" r="3" fill="#451a03" stroke="#f59e0b" stroke-width="0.8" />
              <!-- Eyepiece spectral focus spot -->
              <circle cx="64" cy="48" r="1.5" fill="#ffffff" />
            </g>

            <!-- Traveling Photons -->
            <circle class="bs-photon p-in" cx="0" cy="0" r="1.8" />
            <circle class="bs-photon p-out" cx="0" cy="0" r="1.8" />
          </svg>
        </div>
        <div class="bs-label">BUNSEN-KIRCHHOFF</div>
      </div>
    `;
  }
}

customElements.define('concept-bunsen-spectroscope', ConceptBunsenSpectroscope);
