const ramStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d2222 0%, #030a0a 100%);
    border: 1.5px solid rgba(0, 230, 200, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 230, 200, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hr-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Cast iron ram pump base manifold */
  .hr-manifold {
    position: absolute;
    bottom: 12px;
    left: 10px;
    width: 58px;
    height: 16px;
    background: #1b3838;
    border: 1.5px solid #00e6c8;
    border-radius: 3px;
  }

  /* Inflow drive pipe (Downhill water head) */
  .hr-drive-pipe {
    position: absolute;
    bottom: 22px;
    left: 2px;
    width: 24px;
    height: 8px;
    background: #1b3838;
    border: 1px solid #00e6c8;
    transform: rotate(-15deg);
  }

  /* Waste clack valve slamming open and shut */
  .hr-waste-valve {
    position: absolute;
    bottom: 28px;
    left: 24px;
    width: 10px;
    height: 12px;
    background: #ffd54f;
    border: 1px solid #ffffff;
    border-radius: 2px 2px 0 0;
    box-shadow: 0 0 4px #ffd54f;
    animation: hr-clack-slam 1.2s ease-in-out infinite;
  }

  @keyframes hr-clack-slam {
    0%, 30% { transform: translateY(0); }
    45%, 65% { transform: translateY(-7px); }
    80%, 100% { transform: translateY(0); }
  }

  /* Water slugs surging through the drive manifold */
  .hr-slug {
    position: absolute;
    bottom: 15px;
    left: 12px;
    width: 9px;
    height: 6px;
    border-radius: 3px;
    background: #7ffcff;
    box-shadow: 0 0 5px #00ffff;
    animation: hr-slug-run 1.2s linear infinite;
  }

  .hr-slug.s2 { animation-delay: -0.6s; }

  @keyframes hr-slug-run {
    0% { transform: translateX(0); opacity: 0; }
    12% { opacity: 1; }
    82% { opacity: 1; }
    100% { transform: translateX(46px); opacity: 0; }
  }

  /* Domed air vessel pressure cushion */
  .hr-air-dome {
    position: absolute;
    bottom: 28px;
    left: 44px;
    width: 18px;
    height: 28px;
    border-radius: 9px 9px 2px 2px;
    background: radial-gradient(circle at 30% 30%, #2bd9b0 0%, #0c3330 80%);
    border: 1.2px solid #00e6c8;
    box-shadow: inset 0 0 6px rgba(0, 230, 200, 0.4);
    animation: hr-air-pulse 1.2s ease-in-out infinite;
  }

  @keyframes hr-air-pulse {
    0%, 75% { transform: scale(1); }
    80% { transform: scale(1.08); filter: drop-shadow(0 0 6px #00ffff); }
    100% { transform: scale(1); }
  }

  /* High elevation delivery pipe */
  .hr-delivery-pipe {
    position: absolute;
    top: 8px;
    right: 18px;
    width: 6px;
    height: 48px;
    background: #1b3838;
    border: 1px solid #00e6c8;
  }

  /* Water surge jet pulsing out top */
  .hr-jet {
    position: absolute;
    top: 4px;
    right: 16px;
    width: 10px;
    height: 8px;
    background: #00ffff;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 6px #00ffff;
    animation: hr-water-surge 1.2s ease-in-out infinite;
  }

  @keyframes hr-water-surge {
    0%, 75% { opacity: 0.3; transform: scaleY(0.5); }
    82% { opacity: 1; transform: scaleY(1.4); }
    100% { opacity: 0.3; transform: scaleY(0.5); }
  }

  .hr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 200, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHydraulicRam extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ramStyles}</style>
      <div class="hr-box">
        <div class="hr-stage">
          <div class="hr-drive-pipe"></div>
          <div class="hr-manifold"></div>
          <div class="hr-slug"></div>
          <div class="hr-slug s2"></div>
          <div class="hr-waste-valve"></div>
          <div class="hr-air-dome"></div>

          <div class="hr-delivery-pipe"></div>
          <div class="hr-jet"></div>
        </div>

        <div class="hr-label">HYDRAULIC RAM PUMP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-hydraulic-ram')) {
  customElements.define('concept-hydraulic-ram', ConceptHydraulicRam);
}
