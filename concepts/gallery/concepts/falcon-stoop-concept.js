const falconStoopStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fal {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .fal-streak {
    position: absolute;
    width: 1.5px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.9), transparent);
    animation: fal-rush 0.8s linear infinite;
  }

  .fal-streak.s1 { left: 22px; height: 32px; animation-duration: 0.6s; animation-delay: 0s; }
  .fal-streak.s2 { left: 38px; height: 42px; animation-duration: 0.7s; animation-delay: -0.2s; }
  .fal-streak.s3 { left: 76px; height: 36px; animation-duration: 0.5s; animation-delay: -0.4s; }
  .fal-streak.s4 { left: 92px; height: 46px; animation-duration: 0.65s; animation-delay: -0.1s; }

  @keyframes fal-rush {
    0% { top: 104px; opacity: 0; }
    20% { opacity: 0.9; }
    80% { opacity: 0.9; }
    100% { top: -50px; opacity: 0; }
  }

  .fal-body-rig {
    position: absolute;
    left: 35px;
    width: 44px;
    height: 48px;
    animation: fal-dive-flare 3.6s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
  }

  @keyframes fal-dive-flare {
    0% { top: -20px; transform: scaleY(1.3) scaleX(0.85); }
    40% { top: 38px; transform: scaleY(1.2) scaleX(0.9); }
    55% { top: 52px; transform: scaleY(0.75) scaleX(1.4) rotate(0deg); }
    70% { top: 48px; transform: scaleY(0.9) scaleX(1.2); }
    85% { top: 30px; transform: scaleY(1.1) scaleX(1); opacity: 1; }
    95%, 100% { top: -20px; opacity: 0; }
  }

  .fal-torso {
    position: absolute;
    left: 14px;
    top: 4px;
    width: 16px;
    height: 32px;
    border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
    background: radial-gradient(circle at 50% 30%, rgba(0, 160, 35, 0.9), rgba(0, 40, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
    z-index: 3;
  }

  .fal-beak {
    position: absolute;
    left: 19px;
    bottom: -6px;
    width: 6px;
    height: 8px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
    z-index: 4;
  }

  .fal-wing {
    position: absolute;
    top: 6px;
    width: 18px;
    height: 28px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.8), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    z-index: 2;
    animation: fal-wing-flare 3.6s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
  }

  .fal-wing.l {
    left: -2px;
    border-radius: 12px 0 4px 12px;
    transform-origin: right top;
  }

  .fal-wing.r {
    right: -2px;
    border-radius: 0 12px 12px 4px;
    transform-origin: left top;
  }

  @keyframes fal-wing-flare {
    0%, 40% { transform: scaleX(0.5) rotate(5deg); }
    55%, 70% { transform: scaleX(1.7) rotate(28deg); }
    85%, 100% { transform: scaleX(0.6) rotate(5deg); }
  }

  .fal-vortex {
    position: absolute;
    top: 2px;
    width: 8px;
    height: 20px;
    border-top: 1.5px solid rgba(140, 255, 170, 0.9);
    border-radius: 50% 50% 0 0;
    pointer-events: none;
    animation: fal-vortex-spin 0.4s linear infinite;
  }

  .fal-vortex.vl { left: -10px; }
  .fal-vortex.vr { right: -10px; }

  @keyframes fal-vortex-spin {
    0% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
    100% { opacity: 0.9; transform: scale(1.2) rotate(360deg); }
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

  /* v2: Peregrine falcon in 200+ mph aerodynamic stoop dive with slate-blue plumage,
     rushing cyan airflow streamlines, and wingtip shock vortices */
  .falc {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Upward rushing supersonic airflow speed streaks */
  .falc-streak {
    position: absolute;
    width: 1.5px;
    background: linear-gradient(180deg, transparent, #38bdf8 50%, #ffffff 80%, transparent);
    box-shadow: 0 0 4px #00f0ff;
    animation: falc-rush 0.8s linear infinite;
  }

  .falc-streak.s1 { left: 22px; height: 32px; animation-duration: 0.6s; animation-delay: 0s; }
  .falc-streak.s2 { left: 38px; height: 42px; animation-duration: 0.7s; animation-delay: -0.2s; }
  .falc-streak.s3 { left: 76px; height: 36px; animation-duration: 0.5s; animation-delay: -0.4s; }
  .falc-streak.s4 { left: 92px; height: 46px; animation-duration: 0.65s; animation-delay: -0.1s; }

  @keyframes falc-rush {
    0% { top: 104px; opacity: 0; }
    20% { opacity: 0.95; }
    80% { opacity: 0.95; }
    100% { top: -50px; opacity: 0; }
  }

  /* Falcon body rig */
  .falc-body-rig {
    position: absolute;
    left: 35px;
    width: 44px;
    height: 48px;
    animation: falc-dive-flare 3.6s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
  }

  @keyframes falc-dive-flare {
    0% { top: -20px; transform: scaleY(1.3) scaleX(0.85); }
    40% { top: 38px; transform: scaleY(1.2) scaleX(0.9); }
    55% { top: 52px; transform: scaleY(0.75) scaleX(1.4) rotate(0deg); }
    70% { top: 48px; transform: scaleY(0.9) scaleX(1.2); }
    85% { top: 30px; transform: scaleY(1.1) scaleX(1); opacity: 1; }
    95%, 100% { top: -20px; opacity: 0; }
  }

  /* Slate-blue aerodynamic fuselage torso */
  .falc-torso {
    position: absolute;
    left: 14px;
    top: 4px;
    width: 16px;
    height: 32px;
    border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
    background: radial-gradient(circle at 50% 30%, #94a3b8 0%, #475569 50%, #1e293b 100%);
    border: 1.5px solid #cbd5e1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  /* Golden raptor beak */
  .falc-beak {
    position: absolute;
    left: 19px;
    bottom: -6px;
    width: 6px;
    height: 8px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    background: #facc15;
    box-shadow: 0 0 4px #eab308;
    z-index: 4;
  }

  /* High-speed swept wings flaring into airbrake */
  .falc-wing {
    position: absolute;
    top: 6px;
    width: 18px;
    height: 28px;
    background: linear-gradient(180deg, #64748b 0%, #334155 60%, #0f172a 100%);
    border: 1px solid #94a3b8;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
    z-index: 2;
    animation: falc-wing-flare 3.6s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
  }

  .falc-wing.l {
    left: -2px;
    border-radius: 12px 0 4px 12px;
    transform-origin: right top;
  }

  .falc-wing.r {
    right: -2px;
    border-radius: 0 12px 12px 4px;
    transform-origin: left top;
  }

  @keyframes falc-wing-flare {
    0%, 40% { transform: scaleX(0.5) rotate(5deg); }
    55%, 70% { transform: scaleX(1.7) rotate(28deg); }
    85%, 100% { transform: scaleX(0.6) rotate(5deg); }
  }

  /* Shock vortex condensation trails */
  .falc-vortex {
    position: absolute;
    top: 2px;
    width: 8px;
    height: 20px;
    border-top: 2px solid #00f0ff;
    box-shadow: 0 0 6px #38bdf8;
    border-radius: 50% 50% 0 0;
    pointer-events: none;
    animation: falc-vortex-spin 0.4s linear infinite;
  }

  .falc-vortex.vl { left: -10px; }
  .falc-vortex.vr { right: -10px; }

  @keyframes falc-vortex-spin {
    0% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
    100% { opacity: 0.95; transform: scale(1.2) rotate(360deg); }
  }
  `,
};

const falconStoopMarkup = {
  v1: `
      <div class="fal">
        <div class="fal-streak s1"></div>
        <div class="fal-streak s2"></div>
        <div class="fal-streak s3"></div>
        <div class="fal-streak s4"></div>
        <div class="fal-body-rig">
          <div class="fal-torso">
            <div class="fal-beak"></div>
          </div>
          <div class="fal-wing l">
            <div class="fal-vortex vl"></div>
          </div>
          <div class="fal-wing r">
            <div class="fal-vortex vr"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="falc">
        <div class="falc-streak s1"></div>
        <div class="falc-streak s2"></div>
        <div class="falc-streak s3"></div>
        <div class="falc-streak s4"></div>
        <div class="falc-body-rig">
          <div class="falc-torso">
            <div class="falc-beak"></div>
          </div>
          <div class="falc-wing l">
            <div class="falc-vortex vl"></div>
          </div>
          <div class="falc-wing r">
            <div class="falc-vortex vr"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptFalconStoop extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${falconStoopStyles[version] || falconStoopStyles.v2}</style>${falconStoopMarkup[version] || falconStoopMarkup.v2}`;
  }
}

if (!customElements.get('concept-falcon-stoop')) {
  customElements.define('concept-falcon-stoop', ConceptFalconStoop);
}
