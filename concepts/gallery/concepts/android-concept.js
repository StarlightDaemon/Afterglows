const androidStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .android {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .android-head {
    position: relative;
    width: 56px;
    height: 66px;
    border-radius: 14px 14px 18px 18px;
    background: linear-gradient(180deg, #12301a 0%, #0a2010 60%, #061407 100%);
    border: 1px solid rgba(0, 204, 0, 0.4);
    box-shadow: inset 0 3px 6px rgba(160, 255, 185, 0.2), 0 0 12px rgba(0, 204, 0, 0.18);
    box-sizing: border-box;
    animation: android-idle 7s ease-in-out infinite;
  }

  /* Faceplate seam */
  .android-head::before {
    content: '';
    position: absolute;
    top: 44px;
    left: 6px;
    right: 6px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(120, 255, 150, 0.5), transparent);
  }

  .android-visor {
    position: absolute;
    top: 16px;
    left: 7px;
    right: 7px;
    height: 13px;
    border-radius: 7px;
    background: #020a04;
    border: 1px solid rgba(0, 204, 0, 0.35);
    overflow: hidden;
    box-sizing: border-box;
  }

  .android-pupil {
    position: absolute;
    top: 2px;
    left: 0;
    width: 12px;
    height: 7px;
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(120, 255, 150, 0.2), #b8ffc4, rgba(120, 255, 150, 0.2));
    box-shadow: 0 0 8px rgba(160, 255, 185, 0.9);
    animation: android-scan 3.4s ease-in-out infinite;
  }

  .android-cheek {
    position: absolute;
    top: 36px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.8);
    animation: android-led 2.6s ease-in-out infinite;
  }

  .android-cheek.left { left: 9px; }
  .android-cheek.right { right: 9px; animation-delay: -1.3s; }

  .android-mouth {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 24px;
    height: 6px;
    margin-left: -12px;
    display: flex;
    justify-content: space-between;
  }

  .android-mouth span {
    width: 3px;
    height: 100%;
    background: rgba(140, 255, 170, 0.6);
    animation: android-voice 1.1s ease-in-out infinite;
  }

  .android-mouth span:nth-child(2) { animation-delay: -0.2s; }
  .android-mouth span:nth-child(3) { animation-delay: -0.5s; }
  .android-mouth span:nth-child(4) { animation-delay: -0.75s; }
  .android-mouth span:nth-child(5) { animation-delay: -0.35s; }

  .android-antenna {
    position: absolute;
    top: -12px;
    left: 50%;
    width: 2px;
    height: 12px;
    margin-left: -1px;
    background: rgba(0, 204, 0, 0.5);
  }

  .android-antenna::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #b8ffc4;
    box-shadow: 0 0 6px rgba(160, 255, 185, 0.9);
    animation: android-ping 2.2s ease-in-out infinite;
  }

  .android-ear {
    position: absolute;
    top: 22px;
    width: 5px;
    height: 16px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(30, 90, 45, 0.9), rgba(14, 45, 22, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.35);
    box-sizing: border-box;
  }

  .android-ear.left { left: -7px; }
  .android-ear.right { right: -7px; }

  @keyframes android-idle {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(-2.5deg); }
    62% { transform: rotate(2deg); }
  }

  /* The visor pupil sweeps, pauses, darts back. */
  @keyframes android-scan {
    0%, 8% { left: 3px; }
    34%, 44% { left: 27px; }
    56% { left: 14px; }
    68%, 78% { left: 30px; }
    92%, 100% { left: 3px; }
  }

  @keyframes android-led {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 1; }
  }

  @keyframes android-voice {
    0%, 100% { transform: scaleY(0.3); }
    50% { transform: scaleY(1); }
  }

  @keyframes android-ping {
    0%, 100% { opacity: 0.3; box-shadow: 0 0 3px rgba(160, 255, 185, 0.4); }
    50% { opacity: 1; box-shadow: 0 0 9px rgba(160, 255, 185, 1); }
  }
`;

class ConceptAndroid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${androidStyles}</style>
      <div class="android">
        <div class="android-head">
          <div class="android-antenna"></div>
          <div class="android-ear left"></div>
          <div class="android-ear right"></div>
          <div class="android-visor"><div class="android-pupil"></div></div>
          <div class="android-cheek left"></div>
          <div class="android-cheek right"></div>
          <div class="android-mouth"><span></span><span></span><span></span><span></span><span></span></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-android')) {
  customElements.define('concept-android', ConceptAndroid);
}
