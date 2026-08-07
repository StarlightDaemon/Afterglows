const falconStoopStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A peregrine falcon in terminal-velocity stoop dive: tucked into a sleek
     aerodynamic wedge, shearing down through rushing airflow speed-lines before
     flaring its wings in an explosive high-G deceleration brake. */
  .fal {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Upward rushing aerodynamic speed streaks */
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

  /* Falcon body rig cycling: high-speed dive -> rapid flare brake -> reset */
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

  /* Sleek teardrop torso */
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

  /* Pointed beak facing down */
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

  /* Aerodynamic tucked wings that snap into wide flare brake */
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

  /* Wingtip shock vortex trails */
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
`;

class ConceptFalconStoop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${falconStoopStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-falcon-stoop')) {
  customElements.define('concept-falcon-stoop', ConceptFalconStoop);
}
