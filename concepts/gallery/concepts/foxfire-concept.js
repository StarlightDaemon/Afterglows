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

  /* Bioluminescent mushroom clusters with active organic sway */
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
    transform-origin: bottom center;
  }

  .fxf-shroom.s1 { animation: fxf-sway-1 2.8s ease-in-out infinite alternate; }
  .fxf-shroom.s2 { animation: fxf-sway-2 3.4s ease-in-out infinite alternate; }
  .fxf-shroom.s3 { animation: fxf-sway-3 2.5s ease-in-out infinite alternate; }

  @keyframes fxf-sway-1 {
    0% { transform: rotate(-10deg) skewX(-4deg); }
    100% { transform: rotate(8deg) skewX(4deg); }
  }

  @keyframes fxf-sway-2 {
    0% { transform: rotate(8deg) skewX(3deg); }
    100% { transform: rotate(-12deg) skewX(-3deg); }
  }

  @keyframes fxf-sway-3 {
    0% { transform: rotate(-8deg) skewX(-3deg); }
    100% { transform: rotate(10deg) skewX(3deg); }
  }

  /* Mushroom Glowing Cap */
  .fxf-cap {
    background: radial-gradient(circle at 50% 30%, #ffffff 0%, #8cffaa 50%, #008818 100%);
    border: 1.5px solid #ffffff;
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 0 10px #8cffaa, 0 0 16px #00ff44;
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

  /* Drifting luminous fungal spore clouds with strong upward travel */
  .fxf-spore {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 12px #8cffaa;
    z-index: 5;
    animation: fxf-spore-drift 3.2s ease-out infinite;
  }

  .fxf-spore.p1 { left: 24px; bottom: 32px; animation-delay: 0.1s; --dx: -14px; }
  .fxf-spore.p2 { left: 52px; bottom: 44px; animation-delay: 1.1s; --dx: 10px; }
  .fxf-spore.p3 { right: 24px; bottom: 30px; animation-delay: 2.1s; --dx: 18px; }

  @keyframes fxf-spore-drift {
    0% { transform: translate(0, 0) scale(0.4); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 0.9; }
    100% { transform: translate(var(--dx), -42px) scale(1.3); opacity: 0; }
  }

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
