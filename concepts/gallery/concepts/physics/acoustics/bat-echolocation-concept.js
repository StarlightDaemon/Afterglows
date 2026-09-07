const echolocationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .be-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1024 0%, #03040a 100%);
    border: 1.5px solid rgba(124, 77, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(124, 77, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .be-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Microbat in flight on left */
  .be-bat {
    position: absolute;
    left: 8px;
    top: 26px;
    width: 24px;
    height: 20px;
    animation: be-bat-flap 0.4s ease-in-out infinite alternate;
  }

  @keyframes be-bat-flap {
    0% { transform: translateY(-2px) scaleY(0.8); }
    100% { transform: translateY(2px) scaleY(1.1); }
  }

  .be-bat-body {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 8px;
    height: 12px;
    background: #512da8;
    border: 1px solid #7c4dff;
    border-radius: 4px;
  }

  .be-bat-wing-l {
    position: absolute;
    left: 0;
    top: 4px;
    width: 10px;
    height: 14px;
    background: #311b92;
    border: 1px solid #7c4dff;
    clip-path: polygon(100% 50%, 0% 0%, 20% 100%);
  }

  .be-bat-wing-r {
    position: absolute;
    right: 0;
    top: 4px;
    width: 10px;
    height: 14px;
    background: #311b92;
    border: 1px solid #7c4dff;
    clip-path: polygon(0% 50%, 100% 0%, 80% 100%);
  }

  /* Target Moth fluttering on right */
  .be-moth {
    position: absolute;
    right: 12px;
    top: 30px;
    width: 12px;
    height: 10px;
    animation: be-moth-flutter 0.2s infinite alternate;
  }

  @keyframes be-moth-flutter {
    0% { transform: scaleY(0.7) rotate(-5deg); }
    100% { transform: scaleY(1.2) rotate(5deg); }
  }

  .be-moth-body {
    width: 3px;
    height: 8px;
    background: #ffe082;
    border-radius: 2px;
    box-shadow: 0 0 4px #ffd54f;
    margin: 0 auto;
  }

  /* Outgoing Ultrasonic Biosonar Sound Pulses (Cyan) */
  .be-pulse-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .be-outgoing-arc {
    stroke: #00e5ff;
    stroke-dasharray: 4 2;
    animation: be-sonar-out 2s linear infinite;
  }

  @keyframes be-sonar-out {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(35px); opacity: 0.2; }
  }

  /* Returning Echo Delay Waves (Magenta) */
  .be-returning-arc {
    stroke: #e040fb;
    stroke-dasharray: 3 3;
    animation: be-sonar-return 2s linear infinite;
    animation-delay: 0.8s;
  }

  @keyframes be-sonar-return {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(-35px); opacity: 0.2; }
  }

  .be-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(124, 77, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBatEcholocation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${echolocationStyles}</style>
      <div class="be-box">
        <div class="be-stage">
          <div class="be-bat">
            <div class="be-bat-wing-l"></div>
            <div class="be-bat-body"></div>
            <div class="be-bat-wing-r"></div>
          </div>

          <svg class="be-pulse-svg" viewBox="0 0 96 76">
            <!-- Outgoing Sonar Wave Arcs -->
            <path class="be-outgoing-arc" d="M 32 20 A 25 25 0 0 1 32 56" fill="none" stroke-width="1.2" />
            <path class="be-outgoing-arc" d="M 44 14 A 35 35 0 0 1 44 62" fill="none" stroke-width="1.2" style="animation-delay: 0.4s;" />

            <!-- Returning Echo Arcs -->
            <path class="be-returning-arc" d="M 72 24 A 20 20 0 0 0 72 52" fill="none" stroke-width="1.2" />
            <path class="be-returning-arc" d="M 60 18 A 30 30 0 0 0 60 58" fill="none" stroke-width="1.2" style="animation-delay: 1.2s;" />
          </svg>

          <div class="be-moth">
            <div class="be-moth-body"></div>
          </div>
        </div>

        <div class="be-label">BAT ECHOLOCATION</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bat-echolocation')) {
  customElements.define('concept-bat-echolocation', ConceptBatEcholocation);
}
