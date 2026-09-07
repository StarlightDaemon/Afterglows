const geyserStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gey {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020803;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ground rock strata & sinter cone */
  .gey-ground {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 38px;
    background: linear-gradient(180deg, #005510, #011405);
    border-top: 1.5px solid var(--accent, #00cc00);
    z-index: 2;
  }

  .gey-cone {
    position: absolute;
    bottom: 30px;
    left: 44px;
    width: 30px;
    height: 14px;
    background: #008818;
    clip-path: polygon(25% 0, 75% 0, 100% 100%, 0 100%);
    border-top: 2px solid #d6ffe0;
    z-index: 3;
  }

  /* Underground magma chamber / plumbing tube */
  .gey-vent-tube {
    position: absolute;
    bottom: 0;
    left: 54px;
    width: 10px;
    height: 36px;
    background: rgba(0, 20, 5, 0.9);
    border-left: 1.5px solid rgba(140, 255, 170, 0.6);
    border-right: 1.5px solid rgba(140, 255, 170, 0.6);
    z-index: 3;
    overflow: hidden;
  }

  .gey-bubble {
    position: absolute;
    left: 2px;
    bottom: -6px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #8cffaa;
    box-shadow: 0 0 4px #ffffff;
    animation: gey-bubble-rise 1.5s ease-in infinite;
  }

  .gey-bubble.b2 { animation-delay: 0.5s; left: 1px; }
  .gey-bubble.b3 { animation-delay: 1.0s; left: 3px; }

  @keyframes gey-bubble-rise {
    0% { transform: translateY(0); opacity: 0.4; }
    80% { opacity: 1; }
    100% { transform: translateY(-38px); opacity: 0; }
  }

  /* Steam plume column eruption */
  .gey-plume {
    position: absolute;
    bottom: 40px;
    left: 51px;
    width: 16px;
    height: 58px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(140, 255, 170, 0.7) 40%, transparent 100%);
    border-radius: 8px 8px 0 0;
    filter: drop-shadow(0 0 8px #8cffaa);
    transform-origin: bottom center;
    animation: gey-eruption 4.2s cubic-bezier(0.1, 0.9, 0.2, 1) infinite;
    z-index: 4;
  }

  @keyframes gey-eruption {
    0%, 25% { transform: scaleY(0.05) scaleX(0.4); opacity: 0.2; }
    35% { transform: scaleY(1.1) scaleX(1.1); opacity: 1; filter: drop-shadow(0 0 12px #ffffff); }
    55% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
    75% { transform: scaleY(0.7) scaleX(1.3); opacity: 0.4; filter: blur(1.5px); }
    90%, 100% { transform: scaleY(0.05) scaleX(0.4); opacity: 0.2; }
  }

  /* Water droplet spray raining down */
  .gey-spray {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
    animation: gey-spray-arc 4.2s ease-out infinite;
  }

  .gey-spray.s1 { left: 42px; bottom: 80px; animation-delay: 1.4s; }
  .gey-spray.s2 { left: 74px; bottom: 76px; animation-delay: 1.5s; }
  .gey-spray.s3 { left: 34px; bottom: 65px; animation-delay: 1.6s; }
  .gey-spray.s4 { left: 82px; bottom: 62px; animation-delay: 1.7s; }

  @keyframes gey-spray-arc {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--dx, 10px), 36px) scale(0.4); opacity: 0; }
  }
  .gey-spray.s1 { --dx: -16px; }
  .gey-spray.s2 { --dx: 18px; }
  .gey-spray.s3 { --dx: -22px; }
  .gey-spray.s4 { --dx: 24px; }
`;

class ConceptGeyser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${geyserStyles}</style>
      <div class="gey">
        <div class="gey-plume"></div>
        <div class="gey-spray s1"></div>
        <div class="gey-spray s2"></div>
        <div class="gey-spray s3"></div>
        <div class="gey-spray s4"></div>

        <div class="gey-cone"></div>
        <div class="gey-vent-tube">
          <div class="gey-bubble b1"></div>
          <div class="gey-bubble b2"></div>
          <div class="gey-bubble b3"></div>
        </div>
        <div class="gey-ground"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-geyser')) {
  customElements.define('concept-geyser', ConceptGeyser);
}
