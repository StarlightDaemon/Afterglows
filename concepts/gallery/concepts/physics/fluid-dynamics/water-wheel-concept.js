const waterWheelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .whl {
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

  /* Overhead flume chute */
  .whl-flume {
    position: absolute;
    top: 14px;
    left: 4px;
    width: 48px;
    height: 10px;
    background: linear-gradient(180deg, #008818, #011d06);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 2px;
    z-index: 3;
  }

  /* Water flow cascading from flume onto wheel */
  .whl-water-pour {
    position: absolute;
    top: 22px;
    left: 44px;
    width: 10px;
    height: 32px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(140, 255, 170, 0.7) 50%, transparent 100%);
    border-radius: 4px;
    filter: drop-shadow(0 0 4px #8cffaa);
    animation: whl-water-flow 0.4s linear infinite alternate;
    z-index: 4;
  }

  @keyframes whl-water-flow {
    0% { transform: scaleX(0.85); opacity: 0.8; }
    100% { transform: scaleX(1.15); opacity: 1; }
  }

  /* Rotating Mill Wheel Assembly */
  .whl-wheel {
    position: absolute;
    top: 18px;
    left: 36px;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    animation: whl-rotate 4s linear infinite;
    z-index: 2;
  }

  @keyframes whl-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Radial bucket paddles */
  .whl-bucket {
    position: absolute;
    top: 31px;
    left: -2px;
    width: 70px;
    height: 4px;
    background: #d6ffe0;
    border-radius: 1px;
  }
  .whl-bucket.b2 { transform: rotate(30deg); }
  .whl-bucket.b3 { transform: rotate(60deg); }
  .whl-bucket.b4 { transform: rotate(90deg); }
  .whl-bucket.b5 { transform: rotate(120deg); }
  .whl-bucket.b6 { transform: rotate(150deg); }

  /* Inner concentric rim */
  .whl-inner-rim {
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    border: 1.5px solid #8cffaa;
    background: rgba(0, 40, 10, 0.4);
  }

  /* Center iron hub & axle */
  .whl-hub {
    position: absolute;
    top: 45px;
    left: 63px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #008818;
    box-shadow: 0 0 6px #ffffff;
    z-index: 5;
  }

  /* Tailrace water stream below */
  .whl-tailrace {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 16px;
    background: linear-gradient(180deg, rgba(0, 80, 20, 0.6), #011405);
    border-top: 1px solid var(--accent, #00cc00);
    z-index: 1;
  }

  /* Splashing droplets */
  .whl-splash {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 3px #8cffaa;
    animation: whl-splash-drop 1.2s ease-out infinite;
  }
  .whl-splash.s1 { left: 42px; bottom: 18px; animation-delay: 0.1s; }
  .whl-splash.s2 { left: 48px; bottom: 20px; animation-delay: 0.4s; }
  .whl-splash.s3 { left: 54px; bottom: 16px; animation-delay: 0.7s; }

  @keyframes whl-splash-drop {
    0% { transform: translate(0, 0); opacity: 1; }
    100% { transform: translate(var(--sx, -6px), -12px); opacity: 0; }
  }
  .whl-splash.s1 { --sx: -10px; }
  .whl-splash.s2 { --sx: 8px; }
  .whl-splash.s3 { --sx: -4px; }
`;

class ConceptWaterWheel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${waterWheelStyles}</style>
      <div class="whl">
        <div class="whl-flume"></div>
        <div class="whl-water-pour"></div>

        <div class="whl-wheel">
          <div class="whl-inner-rim"></div>
          <div class="whl-bucket b1"></div>
          <div class="whl-bucket b2"></div>
          <div class="whl-bucket b3"></div>
          <div class="whl-bucket b4"></div>
          <div class="whl-bucket b5"></div>
          <div class="whl-bucket b6"></div>
        </div>

        <div class="whl-hub"></div>

        <div class="whl-splash s1"></div>
        <div class="whl-splash s2"></div>
        <div class="whl-splash s3"></div>

        <div class="whl-tailrace"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-water-wheel')) {
  customElements.define('concept-water-wheel', ConceptWaterWheel);
}
