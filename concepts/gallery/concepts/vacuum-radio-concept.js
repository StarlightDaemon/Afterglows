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
    animation: vrad-acoustic-vibe 0.6s ease-in-out infinite alternate;
  }

  @keyframes vrad-acoustic-vibe {
    0% { transform: translateY(0) rotate(-0.5deg); }
    100% { transform: translateY(-2px) rotate(0.5deg); }
  }

  .vrad-cabinet {
    position: absolute;
    left: 12px;
    bottom: 6px;
    width: 90px;
    height: 88px;
    border-radius: 45px 45px 4px 4px;
    background: radial-gradient(circle at 50% 30%, rgba(0, 110, 24, 0.9), rgba(0, 30, 6, 0.98));
    border: 2px solid #00ff66;
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.4);
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
    background: radial-gradient(circle at 50% 40%, #ffffff, #00ff66 70%, rgba(0, 40, 8, 0.9));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px #00ff66;
    animation: vrad-tube-vibe 0.4s ease-in-out infinite alternate;
  }

  .vrad-tube.t1 { animation-delay: 0s; }
  .vrad-tube.t2 { height: 22px; animation-delay: -0.15s; }
  .vrad-tube.t3 { animation-delay: -0.3s; }

  @keyframes vrad-tube-vibe {
    0% { transform: translateY(0) rotate(-2deg); }
    100% { transform: translateY(-2px) rotate(2deg); }
  }

  .vrad-eye {
    position: absolute;
    left: 36px;
    top: 38px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff, #00ff66 70%, rgba(0, 40, 8, 1));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px #00ff66;
    overflow: hidden;
  }

  .vrad-eye-beam {
    position: absolute;
    inset: 0;
    clip-path: polygon(50% 50%, 0 0, 100% 0);
    background: rgba(0, 30, 6, 0.95);
    animation: vrad-eye-tune 1.2s ease-in-out infinite alternate;
  }

  @keyframes vrad-eye-tune {
    0% { transform: scaleX(1.4); }
    100% { transform: scaleX(0.2); }
  }

  .vrad-dial {
    position: absolute;
    left: 16px;
    top: 60px;
    width: 58px;
    height: 10px;
    border-radius: 2px;
    background: rgba(0, 20, 4, 0.95);
    border: 1.5px solid #00ff66;
    overflow: hidden;
  }

  .vrad-ticks {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg, #00ff66 0 1px, transparent 1px 6px);
  }

  .vrad-needle {
    position: absolute;
    top: 0;
    width: 3px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: vrad-dial-sweep 1.2s ease-in-out infinite alternate;
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
    background: radial-gradient(circle at 40% 40%, #ffffff, #00ff66 80%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 4px #00ff66;
    animation: vrad-knob-turn 1.2s ease-in-out infinite alternate;
  }

  .vrad-knob.kl { left: 18px; }
  .vrad-knob.kr { right: 18px; animation-delay: -0.6s; }

  @keyframes vrad-knob-turn {
    0% { transform: rotate(-45deg); }
    100% { transform: rotate(45deg); }
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

  /* v2: Antique 1930s cathedral vacuum tube radio */
  .vradc {
    width: 114px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
    animation: vradc-acoustic-vibe 0.6s ease-in-out infinite alternate;
  }

  @keyframes vradc-acoustic-vibe {
    0% { transform: translateY(0) rotate(-0.5deg); }
    100% { transform: translateY(-2px) rotate(0.5deg); }
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
    animation: vradc-tube-vibe 0.4s ease-in-out infinite alternate;
  }

  .vradc-tube.t1 { animation-delay: 0s; }
  .vradc-tube.t2 { height: 22px; animation-delay: -0.15s; }
  .vradc-tube.t3 { animation-delay: -0.3s; }

  @keyframes vradc-tube-vibe {
    0% { transform: translateY(0) rotate(-2deg); }
    100% { transform: translateY(-2px) rotate(2deg); }
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
    animation: vradc-eye-tune 1.2s ease-in-out infinite alternate;
  }

  @keyframes vradc-eye-tune {
    0% { transform: scaleX(1.4); }
    100% { transform: scaleX(0.2); }
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
    width: 3px;
    height: 100%;
    background: #ef4444;
    box-shadow: 0 0 6px #dc2626;
    animation: vradc-dial-sweep 1.2s ease-in-out infinite alternate;
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
    animation: vradc-knob-turn 1.2s ease-in-out infinite alternate;
  }

  .vradc-knob.kl { left: 18px; }
  .vradc-knob.kr { right: 18px; animation-delay: -0.6s; }

  @keyframes vradc-knob-turn {
    0% { transform: rotate(-45deg); }
    100% { transform: rotate(45deg); }
  }
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
