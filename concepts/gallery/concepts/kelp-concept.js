const kelpStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A stand of kelp bends with the surge — each stalk a chain of two
     hinged segments swaying out of phase — while a small fish slips
     through the forest and back. */
  .kelp {
    width: 108px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .kelp-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.55) 15%, rgba(0, 204, 0, 0.55) 85%, transparent);
  }

  /* Lower segment hinges at the holdfast; the upper segment hinges at
     the lower one's tip and lags a beat behind. */
  .kelp-stalk {
    position: absolute;
    bottom: 10px;
    width: 5px;
    height: 40px;
    transform-origin: bottom center;
    animation: kelp-sway var(--dur) ease-in-out infinite var(--ph);
  }

  .kelp-blade {
    position: absolute;
    inset: 0;
    border-radius: 3px 3px 1px 1px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.75), rgba(0, 110, 22, 0.7));
    clip-path: polygon(50% 0, 92% 18%, 70% 34%, 100% 52%, 68% 66%, 96% 84%, 50% 100%, 4% 84%, 30% 66%, 0 52%, 32% 34%, 8% 18%);
  }

  .kelp-upper {
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 34px;
    transform-origin: bottom center;
    animation: kelp-sway var(--dur) ease-in-out infinite calc(var(--ph) - 0.4s);
  }

  .kelp-stalk.s1 { left: 14px; --dur: 4.2s; --ph: 0s; height: 36px; }
  .kelp-stalk.s2 { left: 34px; --dur: 4.8s; --ph: -1.6s; height: 46px; }
  .kelp-stalk.s3 { left: 56px; --dur: 4s;   --ph: -2.8s; height: 40px; }
  .kelp-stalk.s4 { left: 78px; --dur: 4.5s; --ph: -0.9s; height: 50px; }
  .kelp-stalk.s5 { left: 92px; --dur: 4.3s; --ph: -2.1s; height: 32px; }

  @keyframes kelp-sway {
    0%, 100% { transform: rotate(-9deg); }
    50% { transform: rotate(10deg); }
  }

  /* Gas bladders: bright pips at segment joints. */
  .kelp-bladder {
    position: absolute;
    top: -3px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #d6ffe0, rgba(0, 160, 32, 0.9));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
  }

  /* The fish: darts left through the stand, then returns flipped. */
  .kelp-fish {
    position: absolute;
    top: 34px;
    left: 0;
    width: 16px;
    height: 8px;
    animation: kelp-fish 9s ease-in-out infinite;
  }

  .kelp-fish::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 11px;
    height: 8px;
    border-radius: 50% 40% 40% 50%;
    background: rgba(190, 255, 205, 0.85);
  }

  .kelp-fish::after {
    content: '';
    position: absolute;
    right: 0;
    top: 1px;
    width: 6px;
    height: 6px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background: rgba(140, 255, 170, 0.75);
  }

  @keyframes kelp-fish {
    0% { transform: translate(112px, 0) scaleX(1); }
    22% { transform: translate(58px, -7px) scaleX(1); }
    46% { transform: translate(-18px, 3px) scaleX(1); }
    /* Turn around off-screen and swim back. */
    50% { transform: translate(-18px, 3px) scaleX(-1); }
    74% { transform: translate(58px, 9px) scaleX(-1); }
    96% { transform: translate(112px, -2px) scaleX(-1); }
    100% { transform: translate(112px, -2px) scaleX(1); }
  }

  /* Drifting particulate. */
  .kelp-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.45);
    animation: kelp-mote linear infinite;
  }

  .kelp-mote.m1 { top: 18px; animation-duration: 6s; }
  .kelp-mote.m2 { top: 52px; animation-duration: 7.5s; animation-delay: -3s; }
  .kelp-mote.m3 { top: 70px; animation-duration: 6.8s; animation-delay: -5s; }

  @keyframes kelp-mote {
    0% { left: 106px; opacity: 0; }
    12% { opacity: 0.7; }
    88% { opacity: 0.7; }
    100% { left: -2px; opacity: 0; }
  }
`;

class ConceptKelp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kelpStyles}</style>
      <div class="kelp">
        <div class="kelp-mote m1"></div>
        <div class="kelp-mote m2"></div>
        <div class="kelp-mote m3"></div>
        <div class="kelp-stalk s1">
          <div class="kelp-blade"></div>
          <div class="kelp-upper"><div class="kelp-blade"></div><div class="kelp-bladder"></div></div>
        </div>
        <div class="kelp-stalk s2">
          <div class="kelp-blade"></div>
          <div class="kelp-upper"><div class="kelp-blade"></div><div class="kelp-bladder"></div></div>
        </div>
        <div class="kelp-stalk s3">
          <div class="kelp-blade"></div>
          <div class="kelp-upper"><div class="kelp-blade"></div><div class="kelp-bladder"></div></div>
        </div>
        <div class="kelp-stalk s4">
          <div class="kelp-blade"></div>
          <div class="kelp-upper"><div class="kelp-blade"></div><div class="kelp-bladder"></div></div>
        </div>
        <div class="kelp-stalk s5">
          <div class="kelp-blade"></div>
          <div class="kelp-upper"><div class="kelp-blade"></div><div class="kelp-bladder"></div></div>
        </div>
        <div class="kelp-fish"></div>
        <div class="kelp-floor"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-kelp')) {
  customElements.define('concept-kelp', ConceptKelp);
}
