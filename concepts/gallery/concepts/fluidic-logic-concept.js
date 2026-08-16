const fluidicStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fld {
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

  /* Etched transparent fluidic logic chip */
  .fld-chip {
    position: relative;
    width: 84px;
    height: 76px;
    background: #011206;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Fluidic channels etched SVG */
  .fld-channels-svg {
    position: absolute;
    inset: 0;
    width: 84px;
    height: 76px;
  }

  /* Dynamic high-velocity fluid stream attached via Coanda effect.
     The jet detaches from Output 0 and re-attaches to Output 1 when the
     control ports fire: two attachment states crossfading on the same
     4s alternate timeline as the LEDs and control pulses. */
  .fld-stream-svg {
    position: absolute;
    inset: 0;
    width: 84px;
    height: 76px;
    filter: drop-shadow(0 0 4px #8cffaa);
  }

  .fld-jet-left {
    animation: fld-jet-left 4s ease-in-out infinite alternate;
  }

  .fld-jet-right {
    animation: fld-jet-right 4s ease-in-out infinite alternate;
  }

  @keyframes fld-jet-left {
    0%, 45% { opacity: 0.95; }
    55%, 100% { opacity: 0; }
  }

  @keyframes fld-jet-right {
    0%, 45% { opacity: 0; }
    55%, 100% { opacity: 0.95; }
  }

  /* Left Control nozzle pulse (C1) */
  .fld-pulse-c1 {
    position: absolute;
    top: 36px;
    left: 8px;
    width: 8px;
    height: 4px;
    background: #ffffff;
    border-radius: 2px;
    animation: fld-c1-fire 4s ease-in-out infinite alternate;
  }

  @keyframes fld-c1-fire {
    0%, 42% { opacity: 0; }
    45%, 55% { opacity: 1; box-shadow: 0 0 8px #ffffff; }
    60%, 100% { opacity: 0; }
  }

  /* Right Control nozzle pulse (C2) */
  .fld-pulse-c2 {
    position: absolute;
    top: 36px;
    right: 8px;
    width: 8px;
    height: 4px;
    background: #ffffff;
    border-radius: 2px;
    animation: fld-c2-fire 4s ease-in-out infinite alternate;
  }

  @keyframes fld-c2-fire {
    0%, 92% { opacity: 0; }
    95%, 100% { opacity: 1; box-shadow: 0 0 8px #ffffff; }
  }

  /* Output port 0 / 1 indicator LED glows */
  .fld-out-0 {
    position: absolute;
    top: 8px;
    left: 20px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    animation: fld-led-0 4s ease-in-out infinite alternate;
  }

  .fld-out-1 {
    position: absolute;
    top: 8px;
    right: 20px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    animation: fld-led-1 4s ease-in-out infinite alternate;
  }

  @keyframes fld-led-0 {
    0%, 45% { opacity: 1; box-shadow: 0 0 8px #8cffaa; }
    55%, 100% { opacity: 0.2; box-shadow: none; }
  }
  @keyframes fld-led-1 {
    0%, 45% { opacity: 0.2; box-shadow: none; }
    55%, 100% { opacity: 1; box-shadow: 0 0 8px #8cffaa; }
  }

  /* Logic gate label */
  .fld-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptFluidicLogic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fluidicStyles}</style>
      <div class="fld">
        <div class="fld-chip">
          <svg class="fld-channels-svg" viewBox="0 0 84 76">
            <!-- Etched fluidic channels -->
            <!-- Main supply nozzle (bottom) -->
            <path d="M 42 72 L 42 46" stroke="#004408" stroke-width="8" stroke-linecap="square" />
            <!-- Y-splitter bifurcation legs -->
            <path d="M 42 46 L 24 12" stroke="#004408" stroke-width="6" stroke-linecap="round" />
            <path d="M 42 46 L 60 12" stroke="#004408" stroke-width="6" stroke-linecap="round" />
            <!-- Lateral control ports -->
            <line x1="8" y1="38" x2="38" y2="38" stroke="#004408" stroke-width="4" />
            <line x1="76" y1="38" x2="46" y2="38" stroke="#004408" stroke-width="4" />
          </svg>

          <!-- Switched laminar Coanda jet stream (left/right attachment states) -->
          <svg class="fld-stream-svg" viewBox="0 0 84 76">
            <path class="fld-jet-left" d="M 42 72 L 42 46 Q 38 34 24 12" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" />
            <path class="fld-jet-right" d="M 42 72 L 42 46 Q 46 34 60 12" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" />
          </svg>

          <div class="fld-pulse-c1"></div>
          <div class="fld-pulse-c2"></div>
          <div class="fld-out-0"></div>
          <div class="fld-out-1"></div>
        </div>

        <div class="fld-label">COANDĂ BISTABLE GATE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fluidic-logic')) {
  customElements.define('concept-fluidic-logic', ConceptFluidicLogic);
}
