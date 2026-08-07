const thereminStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A vintage theremin played through non-contact electromagnetic proximity:
     a hovering hand draws near the vertical pitch rod, compressing concentric
     capacitive field rings and driving the cabinet's oscilloscope waveform trace. */
  .thm {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Wooden instrument cabinet */
  .thm-cabinet {
    position: absolute;
    left: 28px;
    bottom: 10px;
    width: 60px;
    height: 38px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 110, 24, 0.85), rgba(0, 35, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    z-index: 3;
  }

  /* Oscilloscope screen on cabinet face */
  .thm-scope {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 44px;
    height: 24px;
    border-radius: 2px;
    background: rgba(0, 25, 5, 0.95);
    border: 1px solid rgba(140, 255, 170, 0.8);
    overflow: hidden;
  }

  /* Oscilloscope live sine waveform trace */
  .thm-trace {
    position: absolute;
    left: 0;
    top: 11px;
    width: 88px;
    height: 2px;
    background: repeating-linear-gradient(90deg, rgba(190, 255, 205, 1) 0 4px, transparent 4px 8px);
    box-shadow: 0 0 4px rgba(140, 255, 170, 1);
    animation: thm-waveform 1.8s ease-in-out infinite;
  }

  @keyframes thm-waveform {
    0%, 100% {
      transform: scaleY(1) translateX(0);
      filter: brightness(1);
    }
    50% {
      transform: scaleY(3.5) translateX(-20px);
      filter: brightness(1.6);
    }
  }

  /* Right vertical pitch antenna rod */
  .thm-rod {
    position: absolute;
    right: 32px;
    top: 14px;
    width: 3px;
    height: 38px;
    border-radius: 2px 2px 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 1), rgba(0, 150, 30, 0.8));
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.8);
    z-index: 4;
  }

  /* Left volume loop antenna */
  .thm-loop {
    position: absolute;
    left: 12px;
    bottom: 30px;
    width: 18px;
    height: 12px;
    border: 2px solid rgba(140, 255, 170, 0.8);
    border-top: none;
    border-radius: 0 0 10px 10px;
  }

  /* Concentric capacitive electromagnetic field rings */
  .thm-field {
    position: absolute;
    right: 23px;
    top: 10px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.7);
    pointer-events: none;
    animation: thm-field-flux 3.6s ease-in-out infinite;
  }

  .thm-field.f2 {
    right: 14px;
    top: 1px;
    width: 40px;
    height: 40px;
    animation-delay: -0.4s;
  }

  .thm-field.f3 {
    right: 5px;
    top: -8px;
    width: 58px;
    height: 58px;
    animation-delay: -0.8s;
  }

  @keyframes thm-field-flux {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(0.75); opacity: 0.9; border-color: rgba(190, 255, 205, 0.95); }
  }

  /* Hovering hand floating closer to pitch rod */
  .thm-hand {
    position: absolute;
    right: 6px;
    top: 18px;
    width: 18px;
    height: 14px;
    border-radius: 6px 12px 12px 6px;
    background: linear-gradient(135deg, rgba(140, 255, 170, 0.8), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.6);
    z-index: 5;
    animation: thm-hand-drift 3.6s ease-in-out infinite;
  }

  @keyframes thm-hand-drift {
    0%, 100% { transform: translate(14px, -6px) rotate(8deg); }
    50% { transform: translate(-2px, 4px) rotate(-10deg); }
  }
`;

class ConceptTheremin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${thereminStyles}</style>
      <div class="thm">
        <div class="thm-loop"></div>
        <div class="thm-cabinet">
          <div class="thm-scope">
            <div class="thm-trace"></div>
          </div>
        </div>
        <div class="thm-rod"></div>
        <div class="thm-field f1"></div>
        <div class="thm-field f2"></div>
        <div class="thm-field f3"></div>
        <div class="thm-hand"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-theremin')) {
  customElements.define('concept-theremin', ConceptTheremin);
}
