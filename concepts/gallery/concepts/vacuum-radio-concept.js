const vacuumRadioStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vrad {
    width: 114px;
    height: 100px;
    position: relative;
  }

  .vrad-cabinet {
    position: absolute;
    left: 12px;
    bottom: 6px;
    width: 90px;
    height: 88px;
    border-radius: 45px 45px 4px 4px;
    background: radial-gradient(circle at 50% 30%, rgba(0, 110, 24, 0.9), rgba(0, 30, 6, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.35);
    overflow: hidden;
  }

  .vrad-tubes {
    position: absolute;
    left: 20px;
    top: 14px;
    width: 50px;
    height: 22px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  .vrad-tube {
    width: 10px;
    height: 18px;
    border-radius: 5px 5px 2px 2px;
    background: radial-gradient(circle at 50% 40%, rgba(190, 255, 205, 1), rgba(0, 160, 35, 0.8) 60%, rgba(0, 40, 8, 0.9));
    border: 1px solid rgba(140, 255, 170, 0.9);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.9);
    animation: vrad-tube-glow 2.5s ease-in-out infinite alternate;
  }

  .vrad-tube.t1 { animation-delay: 0s; }
  .vrad-tube.t2 { height: 22px; animation-delay: -0.8s; }
  .vrad-tube.t3 { animation-delay: -1.6s; }

  @keyframes vrad-tube-glow {
    0% { filter: brightness(0.85); box-shadow: 0 0 4px rgba(140, 255, 170, 0.6); }
    100% { filter: brightness(1.3); box-shadow: 0 0 10px rgba(190, 255, 205, 1); }
  }

  .vrad-eye {
    position: absolute;
    left: 36px;
    top: 38px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 205, 1), rgba(0, 180, 40, 0.9) 70%, rgba(0, 40, 8, 1));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.9);
    overflow: hidden;
  }

  .vrad-eye-beam {
    position: absolute;
    inset: 0;
    clip-path: polygon(50% 50%, 0 0, 100% 0);
    background: rgba(0, 30, 6, 0.95);
    animation: vrad-eye-tune 4.2s ease-in-out infinite;
  }

  @keyframes vrad-eye-tune {
    0%, 100% { transform: scaleX(1.4); }
    50% { transform: scaleX(0.2); }
  }

  .vrad-dial {
    position: absolute;
    left: 16px;
    top: 60px;
    width: 58px;
    height: 10px;
    border-radius: 2px;
    background: rgba(0, 20, 4, 0.95);
    border: 1px solid rgba(140, 255, 170, 0.8);
    overflow: hidden;
  }

  .vrad-ticks {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg, rgba(140, 255, 170, 0.6) 0 1px, transparent 1px 6px);
  }

  .vrad-needle {
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 1);
    animation: vrad-dial-sweep 4.2s ease-in-out infinite alternate;
  }

  @keyframes vrad-dial-sweep {
    0% { left: 4px; }
    100% { left: 52px; }
  }

  .vrad-knob {
    position: absolute;
    bottom: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(140, 255, 170, 0.95), rgba(0, 80, 16, 0.9));
    border: 1px solid var(--accent, #00cc00);
  }

  .vrad-knob.kl { left: 18px; }
  .vrad-knob.kr { right: 18px; }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Antique 1930s cathedral vacuum tube radio with burled walnut wood cabinet,
     glowing orange/amber triode filaments, emerald green 6E5 magic-eye indicator, and brass tuning dials */
  .vradc {
    width: 114px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Rich polished walnut arch cathedral radio cabinet */
  .vradc-cabinet {
    position: absolute;
    left: 12px;
    bottom: 6px;
    width: 90px;
    height: 88px;
    border-radius: 45px 45px 4px 4px;
    background: radial-gradient(circle at 50% 30%, #9a3412 0%, #78350f 50%, #451a03 100%);
    border: 2px solid #ca8a04;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(254, 240, 138, 0.4);
    overflow: hidden;
  }

  /* Vacuum tube chassis gallery */
  .vradc-tubes {
    position: absolute;
    left: 20px;
    top: 14px;
    width: 50px;
    height: 22px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  /* Glowing orange-hot thermionic cathode vacuum tubes */
  .vradc-tube {
    width: 10px;
    height: 18px;
    border-radius: 5px 5px 2px 2px;
    background: radial-gradient(circle at 50% 40%, #ffffff 0%, #fde047 30%, #ea580c 70%, rgba(30, 20, 10, 0.8) 100%);
    border: 1px solid #fed7aa;
    box-shadow: 0 0 10px #ea580c, 0 0 16px #facc15;
    animation: vradc-tube-glow 2.5s ease-in-out infinite alternate;
  }

  .vradc-tube.t1 { animation-delay: 0s; }
  .vradc-tube.t2 { height: 22px; animation-delay: -0.8s; }
  .vradc-tube.t3 { animation-delay: -1.6s; }

  @keyframes vradc-tube-glow {
    0% { filter: brightness(0.85); box-shadow: 0 0 6px #ea580c; }
    100% { filter: brightness(1.3); box-shadow: 0 0 14px #ea580c, 0 0 22px #fde047; }
  }

  /* Magic-eye 6E5 phosphor green tuning cathode target */
  .vradc-eye {
    position: absolute;
    left: 36px;
    top: 38px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, #86efac 0%, #22c55e 50%, #14532d 100%);
    border: 1.5px solid #facc15;
    box-shadow: 0 0 10px #22c55e, inset 0 0 4px #4ade80;
    overflow: hidden;
  }

  /* Shadow beam narrowing as signal peaks */
  .vradc-eye-beam {
    position: absolute;
    inset: 0;
    clip-path: polygon(50% 50%, 0 0, 100% 0);
    background: #052e16;
    animation: vradc-eye-tune 4.2s ease-in-out infinite;
  }

  @keyframes vradc-eye-tune {
    0%, 100% { transform: scaleX(1.4); }
    50% { transform: scaleX(0.2); }
  }

  /* Amber illuminated shortwave tuning glass dial */
  .vradc-dial {
    position: absolute;
    left: 16px;
    top: 60px;
    width: 58px;
    height: 10px;
    border-radius: 2px;
    background: #451a03;
    border: 1px solid #facc15;
    box-shadow: inset 0 0 4px #f59e0b;
    overflow: hidden;
  }

  .vradc-ticks {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg, #fde68a 0 1px, transparent 1px 6px);
  }

  /* Glowing scarlet tuning needle */
  .vradc-needle {
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    background: #ef4444;
    box-shadow: 0 0 4px #dc2626;
    animation: vradc-dial-sweep 4.2s ease-in-out infinite alternate;
  }

  @keyframes vradc-dial-sweep {
    0% { left: 4px; }
    100% { left: 52px; }
  }

  /* Polished brass control knobs */
  .vradc-knob {
    position: absolute;
    bottom: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #fef08a 0%, #facc15 50%, #ca8a04 100%);
    border: 1px solid #78350f;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  .vradc-knob.kl { left: 18px; }
  .vradc-knob.kr { right: 18px; }
  `,
};

const vacuumRadioMarkup = {
  v1: `
      <div class="vrad">
        <div class="vrad-cabinet">
          <div class="vrad-tubes">
            <div class="vrad-tube t1"></div>
            <div class="vrad-tube t2"></div>
            <div class="vrad-tube t3"></div>
          </div>
          <div class="vrad-eye">
            <div class="vrad-eye-beam"></div>
          </div>
          <div class="vrad-dial">
            <div class="vrad-ticks"></div>
            <div class="vrad-needle"></div>
          </div>
          <div class="vrad-knob kl"></div>
          <div class="vrad-knob kr"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="vradc">
        <div class="vradc-cabinet">
          <div class="vradc-tubes">
            <div class="vradc-tube t1"></div>
            <div class="vradc-tube t2"></div>
            <div class="vradc-tube t3"></div>
          </div>
          <div class="vradc-eye">
            <div class="vradc-eye-beam"></div>
          </div>
          <div class="vradc-dial">
            <div class="vradc-ticks"></div>
            <div class="vradc-needle"></div>
          </div>
          <div class="vradc-knob kl"></div>
          <div class="vradc-knob kr"></div>
        </div>
      </div>
    `,
};

class ConceptVacuumRadio extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${vacuumRadioStyles[version] || vacuumRadioStyles.v2}</style>${vacuumRadioMarkup[version] || vacuumRadioMarkup.v2}`;
  }
}

if (!customElements.get('concept-vacuum-radio')) {
  customElements.define('concept-vacuum-radio', ConceptVacuumRadio);
}
