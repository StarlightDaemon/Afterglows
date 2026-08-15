const cyclotronStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cyc {
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

  /* Vacuum chamber circular perimeter */
  .cyc-chamber {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: #010c04;
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.25), 0 0 10px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Left D-electrode */
  .cyc-dee-left {
    position: absolute;
    left: 4px;
    width: 33px;
    height: 70px;
    border: 1.5px solid #d6ffe0;
    border-right: none;
    border-radius: 35px 0 0 35px;
    background: rgba(0, 100, 20, 0.35);
    box-shadow: inset 0 0 6px rgba(0, 204, 0, 0.3);
    animation: cyc-dee-rf-l 1.2s ease-in-out infinite alternate;
  }

  /* Right D-electrode */
  .cyc-dee-right {
    position: absolute;
    right: 4px;
    width: 33px;
    height: 70px;
    border: 1.5px solid #d6ffe0;
    border-left: none;
    border-radius: 0 35px 35px 0;
    background: rgba(0, 100, 20, 0.35);
    box-shadow: inset 0 0 6px rgba(0, 204, 0, 0.3);
    animation: cyc-dee-rf-r 1.2s ease-in-out infinite alternate;
  }

  @keyframes cyc-dee-rf-l {
    0% { border-color: #ffffff; box-shadow: inset 0 0 10px #8cffaa; }
    100% { border-color: rgba(140, 255, 170, 0.5); box-shadow: none; }
  }
  @keyframes cyc-dee-rf-r {
    0% { border-color: rgba(140, 255, 170, 0.5); box-shadow: none; }
    100% { border-color: #ffffff; box-shadow: inset 0 0 10px #8cffaa; }
  }

  /* Central ion source */
  .cyc-ion-source {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    z-index: 5;
  }

  /* Accelerating expanding spiral ion beam trajectory SVG */
  .cyc-spiral-svg {
    position: absolute;
    inset: 0;
    width: 80px;
    height: 80px;
    z-index: 3;
    filter: drop-shadow(0 0 4px #8cffaa);
  }

  /* Animated ion particle orbiting out */
  .cyc-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #8cffaa;
    z-index: 6;
    offset-path: path("M 40 40 C 44 40 46 36 46 32 C 46 26 34 26 34 34 C 34 46 52 46 52 30 C 52 18 26 18 26 38 C 26 56 60 56 60 26 L 76 18");
    animation: cyc-orbit-accelerate 2.4s cubic-bezier(0.1, 0.8, 0.4, 1) infinite;
  }

  @keyframes cyc-orbit-accelerate {
    0% { offset-distance: 0%; opacity: 0; }
    10% { opacity: 1; }
    95% { offset-distance: 100%; opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Target deflector channel */
  .cyc-target-port {
    position: absolute;
    top: 14px;
    right: -4px;
    width: 14px;
    height: 6px;
    background: #ffffff;
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 4;
  }

  /* RF Frequency / Energy readout */
  .cyc-readout {
    position: absolute;
    bottom: 4px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptCyclotron extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cyclotronStyles}</style>
      <div class="cyc">
        <div class="cyc-chamber">
          <div class="cyc-dee-left"></div>
          <div class="cyc-dee-right"></div>
          <div class="cyc-ion-source"></div>

          <svg class="cyc-spiral-svg" viewBox="0 0 80 80">
            <!-- Archimedean acceleration spiral -->
            <path d="M 40 40 C 44 40 46 36 46 32 C 46 26 34 26 34 34 C 34 46 52 46 52 30 C 52 18 26 18 26 38 C 26 56 60 56 60 26 L 76 18" stroke="#d6ffe0" stroke-width="1.5" stroke-dasharray="2,2" fill="none" />
          </svg>

          <div class="cyc-particle"></div>
          <div class="cyc-target-port"></div>
        </div>

        <div class="cyc-readout">RF: 24 MHz • 15 MeV</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cyclotron')) {
  customElements.define('concept-cyclotron', ConceptCyclotron);
}
