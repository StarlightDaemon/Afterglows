const foxfireStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fxf {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Decaying mossy oak log across bottom */
  .fxf-log {
    position: absolute;
    bottom: 8px;
    width: 104px;
    height: 22px;
    background: linear-gradient(180deg, #004408, #011405);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    z-index: 2;
  }

  /* Bioluminescent mushroom clusters */
  .fxf-shroom-cluster {
    position: absolute;
    bottom: 24px;
    width: 80px;
    height: 52px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    z-index: 4;
  }

  .fxf-shroom {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fxf-glow-pulse 3s ease-in-out infinite alternate;
  }

  .fxf-shroom.s1 { animation-delay: 0s; }
  .fxf-shroom.s2 { animation-delay: 0.8s; }
  .fxf-shroom.s3 { animation-delay: 1.6s; }

  @keyframes fxf-glow-pulse {
    0% { filter: drop-shadow(0 0 4px #8cffaa); }
    100% { filter: drop-shadow(0 0 12px #ffffff) drop-shadow(0 0 20px #00ff44); }
  }

  /* Mushroom Glowing Cap */
  .fxf-cap {
    background: radial-gradient(circle at 50% 30%, #ffffff 0%, #8cffaa 50%, #008818 100%);
    border: 1.5px solid #ffffff;
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 0 8px #ffffff;
  }

  .fxf-shroom.s1 .fxf-cap { width: 22px; height: 12px; }
  .fxf-shroom.s2 .fxf-cap { width: 28px; height: 16px; }
  .fxf-shroom.s3 .fxf-cap { width: 18px; height: 10px; }

  /* Mushroom Stipe / Stalk */
  .fxf-stalk {
    width: 4px;
    background: linear-gradient(180deg, #d6ffe0, #004408);
    border-radius: 2px;
  }

  .fxf-shroom.s1 .fxf-stalk { height: 18px; }
  .fxf-shroom.s2 .fxf-stalk { height: 28px; }
  .fxf-shroom.s3 .fxf-stalk { height: 14px; }

  /* Drifting luminous fungal spores */
  .fxf-spore {
    position: absolute;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #8cffaa;
    animation: fxf-spore-drift 4s ease-out infinite;
    z-index: 5;
  }

  .fxf-spore.p1 { left: 28px; bottom: 32px; animation-delay: 0.2s; }
  .fxf-spore.p2 { left: 52px; bottom: 44px; animation-delay: 1.2s; }
  .fxf-spore.p3 { right: 28px; bottom: 30px; animation-delay: 2.2s; }

  @keyframes fxf-spore-drift {
    0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
    30% { opacity: 1; }
    80% { opacity: 0.8; }
    100% { transform: translate(var(--dx, 8px), -36px) scale(1.2); opacity: 0; }
  }
  .fxf-spore.p1 { --dx: -12px; }
  .fxf-spore.p2 { --dx: 6px; }
  .fxf-spore.p3 { --dx: 14px; }

  /* Caption */
  .fxf-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptFoxfire extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${foxfireStyles}</style>
      <div class="fxf">
        <div class="fxf-log"></div>

        <div class="fxf-shroom-cluster">
          <div class="fxf-shroom s1">
            <div class="fxf-cap"></div>
            <div class="fxf-stalk"></div>
          </div>
          <div class="fxf-shroom s2">
            <div class="fxf-cap"></div>
            <div class="fxf-stalk"></div>
          </div>
          <div class="fxf-shroom s3">
            <div class="fxf-cap"></div>
            <div class="fxf-stalk"></div>
          </div>
        </div>

        <div class="fxf-spore p1"></div>
        <div class="fxf-spore p2"></div>
        <div class="fxf-spore p3"></div>

        <div class="fxf-label">FOXFIRE BIOLUMINESCENCE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-foxfire')) {
  customElements.define('concept-foxfire', ConceptFoxfire);
}
