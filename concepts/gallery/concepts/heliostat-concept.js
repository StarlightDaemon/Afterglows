const heliostatStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hel {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151105 0%, #060401 100%);
    border: 1.5px solid rgba(255, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Central solar power tower */
  .hel-tower {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 6px;
    height: 48px;
    margin-left: -3px;
    background: linear-gradient(180deg, #ffea88 0%, #443005 100%);
    border: 1px solid #ffaa00;
  }

  /* Glowing solar receiver atop tower */
  .hel-receiver {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 14px #ffcc00, 0 0 24px #ffaa00, 0 0 32px #ffffff;
    z-index: 6;
    animation: hel-receiver-glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes hel-receiver-glow {
    0% { transform: scale(0.9); filter: brightness(1); }
    100% { transform: scale(1.15); filter: brightness(1.4); }
  }

  /* Sweeping sun position orb across the sky */
  .hel-sun {
    position: absolute;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffea00;
    animation: hel-sun-track 8s ease-in-out infinite alternate;
  }

  @keyframes hel-sun-track {
    0% { left: 10px; top: 18px; }
    50% { left: 54px; top: 4px; }
    100% { left: 98px; top: 18px; }
  }

  /* Ground mirror field array (dual-axis tracking heliostats) */
  .hel-mirror-row {
    position: absolute;
    bottom: 16px;
    width: 96px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .hel-heliostat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hel-facet {
    width: 12px;
    height: 6px;
    background: linear-gradient(135deg, #ffffff, #ffea88);
    border: 1px solid #ffcc00;
    border-radius: 1px;
    box-shadow: 0 0 4px #ffea00;
    transform-origin: 50% 100%;
    animation: hel-mirror-tilt 8s ease-in-out infinite alternate;
  }

  .m1 .hel-facet { animation-delay: 0s; transform: rotate(25deg); }
  .m2 .hel-facet { animation-delay: 0s; transform: rotate(12deg); }
  .m3 .hel-facet { animation-delay: 0s; transform: rotate(-12deg); }
  .m4 .hel-facet { animation-delay: 0s; transform: rotate(-25deg); }

  @keyframes hel-mirror-tilt {
    0% { transform: rotate(35deg); }
    50% { transform: rotate(0deg); }
    100% { transform: rotate(-35deg); }
  }

  .hel-pedestal {
    width: 2px;
    height: 8px;
    background: #886611;
  }

  /* Reflected beam vector overlay SVG */
  .hel-beams-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .hel-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHeliostat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${heliostatStyles}</style>
      <div class="hel">
        <div class="hel-sun"></div>

        <div class="hel-tower"></div>
        <div class="hel-receiver"></div>

        <svg class="hel-beams-svg" viewBox="0 0 118 102">
          <!-- Reflected solar beam lines targeting the receiver (59, 16) -->
          <line x1="20" y1="74" x2="59" y2="16" stroke="rgba(255, 235, 120, 0.6)" stroke-width="1.2" stroke-dasharray="3 1.5" />
          <line x1="42" y1="74" x2="59" y2="16" stroke="rgba(255, 235, 120, 0.8)" stroke-width="1.2" stroke-dasharray="3 1.5" />
          <line x1="76" y1="74" x2="59" y2="16" stroke="rgba(255, 235, 120, 0.8)" stroke-width="1.2" stroke-dasharray="3 1.5" />
          <line x1="98" y1="74" x2="59" y2="16" stroke="rgba(255, 235, 120, 0.6)" stroke-width="1.2" stroke-dasharray="3 1.5" />
        </svg>

        <div class="hel-mirror-row">
          <div class="hel-heliostat m1">
            <div class="hel-facet"></div>
            <div class="hel-pedestal"></div>
          </div>
          <div class="hel-heliostat m2">
            <div class="hel-facet"></div>
            <div class="hel-pedestal"></div>
          </div>
          <div class="hel-heliostat m3">
            <div class="hel-facet"></div>
            <div class="hel-pedestal"></div>
          </div>
          <div class="hel-heliostat m4">
            <div class="hel-facet"></div>
            <div class="hel-pedestal"></div>
          </div>
        </div>

        <div class="hel-label">HELIOSTAT CONCENTRATOR</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-heliostat')) {
  customElements.define('concept-heliostat', ConceptHeliostat);
}
