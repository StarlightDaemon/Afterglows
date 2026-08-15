const chladniStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .chld {
    width: 114px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Square acoustic plate */
  .chld-plate {
    width: 82px;
    height: 82px;
    background: #020904;
    border: 2px solid rgba(0, 204, 0, 0.8);
    border-radius: 3px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 12px rgba(0, 204, 0, 0.2);
    position: relative;
    overflow: hidden;
    animation: chld-vibrate 0.12s linear infinite;
  }

  @keyframes chld-vibrate {
    0%, 100% { transform: scale(1) translate(0, 0); }
    50% { transform: scale(0.995) translate(0.3px, -0.3px); }
  }

  /* Center clamping post */
  .chld-post {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #f2ffdd;
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px #8cffaa;
    z-index: 5;
  }

  /* Nodal sand pattern Mode A (quadrant hyperbolas) */
  .chld-mode-a {
    position: absolute;
    inset: 0;
    animation: chld-cycle-a 8s ease-in-out infinite;
  }

  /* Nodal sand pattern Mode B (concentric ellipse / diamond ring) */
  .chld-mode-b {
    position: absolute;
    inset: 0;
    animation: chld-cycle-b 8s ease-in-out infinite;
  }

  @keyframes chld-cycle-a {
    0%, 40% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 2px #8cffaa); }
    48%, 92% { opacity: 0; transform: scale(0.95); filter: blur(2px); }
    100% { opacity: 1; transform: scale(1); }
  }

  @keyframes chld-cycle-b {
    0%, 42% { opacity: 0; transform: scale(1.05); filter: blur(2px); }
    50%, 90% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 2px #8cffaa); }
    98%, 100% { opacity: 0; transform: scale(1.05); filter: blur(2px); }
  }

  /* Sand particle grain curves (SVG-drawn inside) */
  .chld-sand {
    position: absolute;
    inset: 0;
  }

  /* Frequency Hz counter label */
  .chld-freq {
    position: absolute;
    bottom: 2px;
    right: 4px;
    font-family: monospace;
    font-size: 7.5px;
    color: rgba(140, 255, 170, 0.7);
    letter-spacing: 0.5px;
  }

  /* Exciter transducer rod below */
  .chld-transducer {
    position: absolute;
    bottom: 2px;
    width: 22px;
    height: 6px;
    background: rgba(0, 100, 20, 0.6);
    border: 1px solid rgba(0, 204, 0, 0.5);
    border-radius: 2px;
    z-index: 1;
  }
`;

class ConceptChladniPlate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${chladniStyles}</style>
      <div class="chld">
        <div class="chld-plate">
          <!-- Mode A: Curving hyperbolic nodal lines -->
          <svg class="chld-mode-a" viewBox="0 0 82 82">
            <!-- Sand grains along hyperbolic nodes -->
            <path d="M 12 12 Q 41 35 70 12" stroke="#d6ffe0" stroke-width="1.8" stroke-dasharray="2,2" fill="none" />
            <path d="M 12 70 Q 41 47 70 70" stroke="#d6ffe0" stroke-width="1.8" stroke-dasharray="2,2" fill="none" />
            <path d="M 12 12 Q 35 41 12 70" stroke="#d6ffe0" stroke-width="1.8" stroke-dasharray="2,2" fill="none" />
            <path d="M 70 12 Q 47 41 70 70" stroke="#d6ffe0" stroke-width="1.8" stroke-dasharray="2,2" fill="none" />
            <circle cx="41" cy="41" r="28" stroke="#8cffaa" stroke-width="1.2" stroke-dasharray="1.5,2.5" fill="none" opacity="0.6" />
          </svg>

          <!-- Mode B: Circular and radial diagonal nodal lines -->
          <svg class="chld-mode-b" viewBox="0 0 82 82">
            <line x1="8" y1="8" x2="74" y2="74" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="2,2" />
            <line x1="74" y1="8" x2="8" y2="74" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="2,2" />
            <circle cx="41" cy="41" r="18" stroke="#d6ffe0" stroke-width="2" stroke-dasharray="2,1.5" fill="none" />
            <circle cx="41" cy="41" r="34" stroke="#8cffaa" stroke-width="1.4" stroke-dasharray="2,3" fill="none" />
          </svg>

          <div class="chld-post"></div>
        </div>
        <div class="chld-transducer"></div>
        <div class="chld-freq">1042 Hz</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-chladni-plate')) {
  customElements.define('concept-chladni-plate', ConceptChladniPlate);
}
