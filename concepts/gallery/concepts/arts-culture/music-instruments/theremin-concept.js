const thereminStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .thm {
    width: 116px;
    height: 98px;
    position: relative;
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Vintage mahogany theremin with nickel antennas, green CRT oscilloscope waveform,
     capacitive electric cyan field rings, and hovering player's hand */
  .thmc {
    width: 116px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Burled mahogany instrument cabinet */
  .thmc-cabinet {
    position: absolute;
    left: 28px;
    bottom: 10px;
    width: 60px;
    height: 38px;
    border-radius: 4px;
    background: linear-gradient(180deg, #b45309 0%, #78350f 50%, #451a03 100%);
    border: 1.5px solid #d97706;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.9), inset 0 1px 2px #fde047;
    z-index: 3;
  }

  /* Green CRT oscilloscope display */
  .thmc-scope {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 44px;
    height: 24px;
    border-radius: 2px;
    background: #022c22;
    border: 1px solid #22c55e;
    box-shadow: inset 0 0 8px rgba(34, 197, 94, 0.4);
    overflow: hidden;
  }

  /* Live green sine waveform trace */
  .thmc-trace {
    position: absolute;
    left: 0;
    top: 11px;
    width: 88px;
    height: 2px;
    background: repeating-linear-gradient(90deg, #86efac 0 4px, transparent 4px 8px);
    box-shadow: 0 0 6px #22c55e;
    animation: thmc-waveform 1.8s ease-in-out infinite;
  }

  @keyframes thmc-waveform {
    0%, 100% {
      transform: scaleY(1) translateX(0);
      filter: brightness(1);
    }
    50% {
      transform: scaleY(3.5) translateX(-20px);
      filter: brightness(1.6);
    }
  }

  /* Nickel pitch antenna rod */
  .thmc-rod {
    position: absolute;
    right: 32px;
    top: 14px;
    width: 3px;
    height: 38px;
    border-radius: 2px 2px 0 0;
    background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
    box-shadow: 0 0 8px #00f0ff;
    z-index: 4;
  }

  /* Nickel volume loop antenna */
  .thmc-loop {
    position: absolute;
    left: 12px;
    bottom: 30px;
    width: 18px;
    height: 12px;
    border: 2px solid #cbd5e1;
    border-top: none;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 6px rgba(203, 213, 225, 0.6);
  }

  /* Capacitive electromagnetic flux field rings */
  .thmc-field {
    position: absolute;
    right: 23px;
    top: 10px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px dashed #38bdf8;
    pointer-events: none;
    animation: thmc-field-flux 3.6s ease-in-out infinite;
  }

  .thmc-field.f2 {
    right: 14px;
    top: 1px;
    width: 40px;
    height: 40px;
    animation-delay: -0.4s;
    border-color: #a855f7;
  }

  .thmc-field.f3 {
    right: 5px;
    top: -8px;
    width: 58px;
    height: 58px;
    animation-delay: -0.8s;
    border-color: #ec4899;
  }

  @keyframes thmc-field-flux {
    0%, 100% { transform: scale(1); opacity: 0.35; }
    50% { transform: scale(0.75); opacity: 0.95; box-shadow: 0 0 8px #00f0ff; }
  }

  /* Hovering hand floating closer to pitch rod */
  .thmc-hand {
    position: absolute;
    right: 6px;
    top: 18px;
    width: 18px;
    height: 14px;
    border-radius: 6px 12px 12px 6px;
    background: linear-gradient(135deg, #fed7aa 0%, #f97316 60%, #c2410c 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 0 8px rgba(249, 115, 22, 0.6);
    z-index: 5;
    animation: thmc-hand-drift 3.6s ease-in-out infinite;
  }

  @keyframes thmc-hand-drift {
    0%, 100% { transform: translate(14px, -6px) rotate(8deg); }
    50% { transform: translate(-2px, 4px) rotate(-10deg); }
  }
  `,
};

const thereminMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="thmc">
        <div class="thmc-loop"></div>
        <div class="thmc-cabinet">
          <div class="thmc-scope">
            <div class="thmc-trace"></div>
          </div>
        </div>
        <div class="thmc-rod"></div>
        <div class="thmc-field f1"></div>
        <div class="thmc-field f2"></div>
        <div class="thmc-field f3"></div>
        <div class="thmc-hand"></div>
      </div>
    `,
};

class ConceptTheremin extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${thereminStyles[version] || thereminStyles.v2}</style>${thereminMarkup[version] || thereminMarkup.v2}`;
  }
}

if (!customElements.get('concept-theremin')) {
  customElements.define('concept-theremin', ConceptTheremin);
}
