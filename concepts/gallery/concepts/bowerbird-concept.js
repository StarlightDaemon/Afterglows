const bowerbirdStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bwr {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #061118 0%, #010406 100%);
    border: 1.5px solid rgba(0, 160, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 160, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ground court display area */
  .bwr-court {
    position: relative;
    width: 90px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Avenue bower twin twig walls */
  .bwr-avenue-left, .bwr-avenue-right {
    position: absolute;
    top: 14px;
    width: 14px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .bwr-avenue-left {
    left: 28px;
    animation: bwr-twig-left 2.2s ease-in-out infinite alternate;
  }
  .bwr-avenue-right {
    right: 28px;
    animation: bwr-twig-right 2.2s ease-in-out infinite alternate;
  }

  @keyframes bwr-twig-left {
    0% { transform: rotate(-3deg); }
    100% { transform: rotate(3deg); }
  }
  @keyframes bwr-twig-right {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
  }

  .bwr-twig {
    width: 2px;
    height: 38px;
    background: linear-gradient(180deg, #1b3847, #07151e);
    border-radius: 1px;
    transform: rotate(6deg);
  }

  .bwr-avenue-left .bwr-twig { transform: rotate(10deg); border-left: 1px solid #00a0ff; }
  .bwr-avenue-right .bwr-twig { transform: rotate(-10deg); border-right: 1px solid #00a0ff; }

  /* Curated blue decorations (berries, feathers, glass tokens) */
  .bwr-token {
    position: absolute;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 6px #0088ff, 0 0 10px #ffffff;
  }

  .t-berry1 { width: 5px; height: 5px; bottom: 12px; left: 16px; background: #0088ff; }
  .t-berry2 { width: 4px; height: 4px; bottom: 18px; left: 24px; background: #00e5ff; }
  .t-berry3 { width: 6px; height: 6px; bottom: 10px; right: 18px; background: #2266ff; }
  .t-berry4 { width: 4px; height: 4px; bottom: 20px; right: 26px; background: #00e5ff; }
  .t-feather {
    width: 14px;
    height: 3px;
    border-radius: 2px;
    bottom: 8px;
    left: 38px;
    background: linear-gradient(90deg, #00e5ff, #0022ff);
    transform: rotate(-15deg);
  }

  /* Satin bowerbird dynamic courtship display dance */
  .bwr-bird {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 22px;
    height: 18px;
    margin-left: -11px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: bwr-dance 2.2s ease-in-out infinite;
  }

  @keyframes bwr-dance {
    0%   { transform: translateX(-18px) translateY(0) rotate(-12deg) scaleX(1); }
    20%  { transform: translateX(-6px) translateY(-6px) rotate(8deg) scaleX(1); }
    45%  { transform: translateX(18px) translateY(2px) rotate(15deg) scaleX(1); }
    50%  { transform: translateX(18px) translateY(2px) rotate(15deg) scaleX(-1); }
    70%  { transform: translateX(6px) translateY(-6px) rotate(-8deg) scaleX(-1); }
    95%  { transform: translateX(-18px) translateY(0) rotate(-12deg) scaleX(-1); }
    100% { transform: translateX(-18px) translateY(0) rotate(-12deg) scaleX(1); }
  }

  /* Courtship token held in beak */
  .bwr-beak-token {
    position: absolute;
    left: -4px;
    top: 6px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
    z-index: 7;
  }

  .bwr-bird-body {
    width: 16px;
    height: 10px;
    background: linear-gradient(180deg, #0d4066 0%, #041a2e 100%);
    border: 1.5px solid #00cdf2;
    border-radius: 60% 40% 40% 60%;
    box-shadow: inset 0 0 4px #00e5ff, 0 0 6px rgba(0, 229, 255, 0.6);
  }

  .bwr-bird-eye {
    position: absolute;
    left: 5px;
    top: 4px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 4px #00e5ff;
  }

  .bwr-bird-beak {
    position: absolute;
    left: 0;
    top: 6px;
    width: 4px;
    height: 3px;
    background: #ffea88;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
  }

  .bwr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBowerbird extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bowerbirdStyles}</style>
      <div class="bwr">
        <div class="bwr-court">
          <div class="bwr-bird">
            <div class="bwr-beak-token"></div>
            <div class="bwr-bird-beak"></div>
            <div class="bwr-bird-body"></div>
            <div class="bwr-bird-eye"></div>
          </div>

          <div class="bwr-avenue-left">
            <div class="bwr-twig"></div>
            <div class="bwr-twig"></div>
            <div class="bwr-twig"></div>
          </div>

          <div class="bwr-avenue-right">
            <div class="bwr-twig"></div>
            <div class="bwr-twig"></div>
            <div class="bwr-twig"></div>
          </div>

          <div class="bwr-token t-berry1"></div>
          <div class="bwr-token t-berry2"></div>
          <div class="bwr-token t-berry3"></div>
          <div class="bwr-token t-berry4"></div>
          <div class="bwr-token t-feather"></div>
        </div>

        <div class="bwr-label">BOWERBIRD AVENUE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bowerbird')) {
  customElements.define('concept-bowerbird', ConceptBowerbird);
}
