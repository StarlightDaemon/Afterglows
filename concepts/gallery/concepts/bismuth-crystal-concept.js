const bismuthStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bis {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000602 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hopper crystal 3D tiered isometric staircase rig */
  .bis-crystal-rig {
    position: relative;
    width: 78px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: bis-spin-tilt 8s ease-in-out infinite alternate;
  }

  @keyframes bis-spin-tilt {
    0% { transform: rotate(-6deg) scale(0.95); }
    100% { transform: rotate(6deg) scale(1.05); }
  }

  /* Concentric hopper staircase square steps */
  .bis-step {
    position: absolute;
    border: 2px solid #8cffaa;
    background: radial-gradient(circle, rgba(0, 40, 10, 0.4), rgba(0, 15, 5, 0.8));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    animation: bis-oxide-shimmer 3s ease-in-out infinite alternate;
  }

  .bis-step.s1 { width: 72px; height: 72px; border-color: #d6ffe0; animation-delay: 0s; }
  .bis-step.s2 { width: 56px; height: 56px; border-color: #8cffaa; animation-delay: 0.4s; }
  .bis-step.s3 { width: 42px; height: 42px; border-color: #00ff44; animation-delay: 0.8s; }
  .bis-step.s4 { width: 28px; height: 28px; border-color: #ffffff; animation-delay: 1.2s; }
  .bis-step.s5 { width: 16px; height: 16px; border-color: #d6ffe0; animation-delay: 1.6s; }

  @keyframes bis-oxide-shimmer {
    0% { filter: drop-shadow(0 0 2px #8cffaa); }
    50% { filter: drop-shadow(0 0 8px #ffffff); border-color: #ffffff; }
    100% { filter: drop-shadow(0 0 4px #00aa22); }
  }

  /* 90-Degree spiral stepped edge connecting ridges SVG */
  .bis-ridges-svg {
    position: absolute;
    inset: 0;
    width: 78px;
    height: 78px;
    filter: drop-shadow(0 0 3px #8cffaa);
  }

  /* Center deep hollow void */
  .bis-core-void {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff;
    z-index: 6;
  }

  /* Crystallography label */
  .bis-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptBismuthCrystal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bismuthStyles}</style>
      <div class="bis">
        <div class="bis-crystal-rig">
          <div class="bis-step s1"></div>
          <div class="bis-step s2"></div>
          <div class="bis-step s3"></div>
          <div class="bis-step s4"></div>
          <div class="bis-step s5"></div>

          <svg class="bis-ridges-svg" viewBox="0 0 78 78">
            <!-- 90-degree corner spiral hopper staircase diagonals -->
            <line x1="3" y1="3" x2="39" y2="39" stroke="#ffffff" stroke-width="1.8" />
            <line x1="75" y1="3" x2="39" y2="39" stroke="#ffffff" stroke-width="1.8" />
            <line x1="75" y1="75" x2="39" y2="39" stroke="#ffffff" stroke-width="1.8" />
            <line x1="3" y1="75" x2="39" y2="39" stroke="#ffffff" stroke-width="1.8" />
          </svg>

          <div class="bis-core-void"></div>
        </div>

        <div class="bis-label">BISMUTH HOPPER Bi #83</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bismuth-crystal')) {
  customElements.define('concept-bismuth-crystal', ConceptBismuthCrystal);
}
