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
    animation: bis-spin-zoom 5s ease-in-out infinite alternate;
  }

  @keyframes bis-spin-zoom {
    0% { transform: rotate(-25deg) scale(0.85); }
    100% { transform: rotate(25deg) scale(1.18); }
  }

  /* Concentric hopper staircase square steps */
  .bis-step {
    position: absolute;
    border: 2px solid #8cffaa;
    background: radial-gradient(circle, rgba(0, 40, 10, 0.4), rgba(0, 15, 5, 0.8));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    animation: bis-step-twist 2.5s ease-in-out infinite alternate;
  }

  .bis-step.s1 { width: 72px; height: 72px; border-color: #d6ffe0; animation-delay: 0s; }
  .bis-step.s2 { width: 56px; height: 56px; border-color: #8cffaa; animation-delay: 0.3s; }
  .bis-step.s3 { width: 42px; height: 42px; border-color: #00ff44; animation-delay: 0.6s; }
  .bis-step.s4 { width: 28px; height: 28px; border-color: #ffffff; animation-delay: 0.9s; }
  .bis-step.s5 { width: 16px; height: 16px; border-color: #d6ffe0; animation-delay: 1.2s; }

  @keyframes bis-step-twist {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(12deg); }
  }

  /* Traveling spectral gleam packet racing along hopper stairs */
  .bis-gleam-packet {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffd700, 0 0 14px #e040fb;
    z-index: 7;
    animation: bis-gleam-path 3.2s linear infinite;
  }

  @keyframes bis-gleam-path {
    0% { transform: translate(-30px, -30px); fill: #00e5ff; }
    25% { transform: translate(30px, -30px); fill: #ffd700; }
    50% { transform: translate(30px, 30px); fill: #ff4081; }
    75% { transform: translate(-30px, 30px); fill: #7c4dff; }
    100% { transform: translate(-30px, -30px); fill: #00e5ff; }
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

          <div class="bis-gleam-packet"></div>

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
