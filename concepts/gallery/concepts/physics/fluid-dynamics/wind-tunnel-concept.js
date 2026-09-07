const windTunnelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wnd {
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

  /* Transparent test section chamber */
  .wnd-chamber {
    position: relative;
    width: 86px;
    height: 74px;
    background: #011206;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Airfoil wing profile (NACA 0012 camber at 8° AoA) */
  .wnd-airfoil {
    position: absolute;
    left: 24px;
    top: 32px;
    width: 36px;
    height: 14px;
    background: linear-gradient(180deg, #ffffff 0%, #8cffaa 40%, #006611 100%);
    border: 1.5px solid #ffffff;
    border-radius: 12px 2px 2px 12px;
    clip-path: polygon(0 40%, 30% 0, 100% 50%, 30% 100%, 0 60%);
    box-shadow: 0 0 8px #8cffaa;
    transform: rotate(-10deg);
    z-index: 4;
    animation: wnd-pitch 2.4s ease-in-out infinite alternate;
  }

  /* Angle-of-attack sweep of the test airfoil */
  @keyframes wnd-pitch {
    0% { transform: rotate(-4deg); }
    100% { transform: rotate(-17deg); }
  }

  /* Bright smoke pulses shot from the rake, carried downstream */
  .wnd-puff {
    position: absolute;
    left: 4px;
    width: 9px;
    height: 3px;
    border-radius: 2px;
    background: #ffffff;
    box-shadow: 0 0 4px #d6ffe0;
    z-index: 3;
    animation: wnd-puff-run 1.6s linear infinite;
  }

  .wnd-puff.p1 { top: 21px; }
  .wnd-puff.p2 { top: 39px; animation-delay: -0.55s; }
  .wnd-puff.p3 { top: 55px; animation-delay: -1.1s; }

  @keyframes wnd-puff-run {
    0% { transform: translateX(0); opacity: 0; }
    10% { opacity: 1; }
    85% { opacity: 1; }
    100% { transform: translateX(72px); opacity: 0; }
  }

  /* Laminar smoke streak streamlines SVG */
  .wnd-streamlines-svg {
    position: absolute;
    inset: 0;
    width: 86px;
    height: 74px;
    z-index: 2;
  }

  /* Smoke streaks flow downstream along the streamlines */
  .wnd-streamlines-svg path {
    animation: wnd-smoke-flow 0.9s linear infinite;
  }

  @keyframes wnd-smoke-flow {
    to { stroke-dashoffset: -15; }
  }

  /* Turbulent boundary layer separation vortex eddies */
  .wnd-vortex {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1.5px dashed rgba(214, 255, 224, 0.85);
    animation: wnd-vortex-spin 0.8s linear infinite;
    z-index: 3;
  }

  .wnd-vortex.v1 { top: 22px; right: 14px; animation-delay: 0.1s; }
  .wnd-vortex.v2 { top: 34px; right: 8px; animation-delay: 0.3s; }

  @keyframes wnd-vortex-spin {
    0% { transform: rotate(0deg) scale(0.5); opacity: 0.9; }
    100% { transform: rotate(360deg) scale(1.6); opacity: 0.15; }
  }

  /* Upstream smoke injection rake manifold */
  .wnd-rake {
    position: absolute;
    left: 2px;
    top: 12px;
    bottom: 12px;
    width: 3px;
    background: #ffffff;
    border-radius: 1px;
    z-index: 5;
  }

  /* Airspeed velocity readout */
  .wnd-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptWindTunnel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${windTunnelStyles}</style>
      <div class="wnd">
        <div class="wnd-chamber">
          <div class="wnd-rake"></div>

          <svg class="wnd-streamlines-svg" viewBox="0 0 86 74">
            <!-- Smooth laminar streamline over upper camber -->
            <path d="M 6 18 Q 28 14 38 20 T 78 26" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="3,2" fill="none" />
            <path d="M 6 26 Q 26 22 40 28 T 80 34" stroke="#d6ffe0" stroke-width="1.2" stroke-dasharray="4,2" fill="none" />
            <!-- Streamline under pressure surface -->
            <path d="M 6 46 Q 30 48 56 46 T 80 44" stroke="#8cffaa" stroke-width="1.2" stroke-dasharray="3,2" fill="none" />
            <path d="M 6 56 Q 32 58 58 56 T 80 54" stroke="#8cffaa" stroke-width="1.2" stroke-dasharray="3,2" fill="none" />
          </svg>

          <div class="wnd-airfoil"></div>

          <div class="wnd-puff p1"></div>
          <div class="wnd-puff p2"></div>
          <div class="wnd-puff p3"></div>

          <div class="wnd-vortex v1"></div>
          <div class="wnd-vortex v2"></div>
        </div>

        <div class="wnd-label">MACH 0.65 • α = 8°</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-wind-tunnel')) {
  customElements.define('concept-wind-tunnel', ConceptWindTunnel);
}
