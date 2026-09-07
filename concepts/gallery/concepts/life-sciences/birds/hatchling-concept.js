const hatchlingStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ht {
    width: 100px;
    height: 96px;
    position: relative;
  }

  .ht-nest {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 76px;
    height: 26px;
    margin-left: -38px;
    border-radius: 50% 50% 45% 45%;
    background:
      repeating-conic-gradient(from 0deg at 50% 50%,
        rgba(0, 110, 22, 0.7) 0 6deg,
        rgba(0, 70, 14, 0.7) 6deg 12deg);
    border: 2px solid rgba(0, 130, 26, 0.8);
  }

  .ht-nest::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 4px;
    width: 46px;
    height: 12px;
    margin-left: -23px;
    border-radius: 50%;
    background: rgba(0, 30, 6, 0.6);
  }

  .ht-egg-bot {
    position: absolute;
    left: 50%;
    bottom: 24px;
    width: 30px;
    height: 22px;
    margin-left: -15px;
    border-radius: 50% 50% 48% 48% / 30% 30% 70% 70%;
    background: radial-gradient(ellipse at 40% 35%, rgba(214, 255, 224, 0.9), rgba(140, 255, 170, 0.55) 70%);
    border: 1px solid rgba(0, 204, 0, 0.5);
    z-index: 2;
    animation: ht-rock 6s ease-in-out infinite;
  }

  .ht-crack {
    position: absolute;
    left: 50%;
    bottom: 40px;
    width: 30px;
    height: 4px;
    margin-left: -15px;
    clip-path: polygon(0 50%, 12% 0, 24% 100%, 38% 0, 50% 100%, 62% 0, 76% 100%, 88% 0, 100% 50%, 100% 60%, 0 60%);
    background: rgba(0, 40, 8, 0.9);
    opacity: 0;
    z-index: 3;
    animation: ht-crack 6s steps(1) infinite;
  }

  @keyframes ht-crack {
    0%, 34% { opacity: 0; }
    38%, 88% { opacity: 0.9; }
    92%, 100% { opacity: 0; }
  }

  .ht-egg-cap {
    position: absolute;
    left: 50%;
    bottom: 40px;
    width: 30px;
    height: 12px;
    margin-left: -15px;
    border-radius: 50% 50% 10% 10% / 90% 90% 10% 10%;
    background: radial-gradient(ellipse at 40% 60%, rgba(214, 255, 224, 0.9), rgba(140, 255, 170, 0.55) 70%);
    border: 1px solid rgba(0, 204, 0, 0.5);
    border-bottom: none;
    z-index: 4;
    animation: ht-cap 6s ease-out infinite;
  }

  @keyframes ht-cap {
    0%, 40% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    50% { transform: translate(0, -14px) rotate(-8deg); }
    58% { transform: translate(10px, -6px) rotate(28deg); }
    66% { transform: translate(16px, 6px) rotate(48deg); opacity: 0; }
    90% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    96%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  }

  @keyframes ht-rock {
    0%, 12% { transform: rotate(0deg); }
    18% { transform: rotate(-5deg); }
    24% { transform: rotate(5deg); }
    30% { transform: rotate(-4deg); }
    36% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  .ht-chick {
    position: absolute;
    left: 50%;
    bottom: 34px;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    z-index: 3;
    animation: ht-chick 6s ease-out infinite;
  }

  @keyframes ht-chick {
    0%, 44% { transform: translateY(14px); opacity: 0; }
    52% { transform: translateY(0); opacity: 1; }
    62% { transform: translateY(-3px); }
    68% { transform: translateY(0); }
    84% { transform: translateY(0); opacity: 1; }
    90% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
  }

  .ht-chick-head {
    position: absolute;
    left: 2px;
    top: 0;
    width: 16px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 65%);
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .ht-chick-head::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 4px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 6px 0 0 #041a0a;
  }

  .ht-beak {
    position: absolute;
    left: 7px;
    top: 8px;
    width: 8px;
    height: 5px;
    clip-path: polygon(0 0, 100% 20%, 0 40%, 100% 60%, 0 80%);
    background: rgba(0, 200, 40, 0.9);
    animation: ht-chirp 0.3s ease-in-out infinite;
  }

  @keyframes ht-chirp {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.4); }
  }

  .ht-note {
    position: absolute;
    left: 66px;
    top: 26px;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: #baffc9;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: ht-note 6s infinite;
  }

  .ht-note.n2 { left: 74px; top: 18px; animation-delay: 0.4s; }

  @keyframes ht-note {
    0%, 56% { transform: translateY(0); opacity: 0; }
    62% { opacity: 1; }
    78% { transform: translateY(-12px) translateX(4px); opacity: 0; }
    100% { opacity: 0; }
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

  /* v2: Robin egg hatching in twig nest with turquoise shell,
     fluffy yellow chick, coral beak, and floating music notes */
  .htc {
    width: 100px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Woven twig nest */
  .htc-nest {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 76px;
    height: 26px;
    margin-left: -38px;
    border-radius: 50% 50% 45% 45%;
    background:
      repeating-conic-gradient(from 0deg at 50% 50%,
        #78350f 0 6deg,
        #451a03 6deg 12deg);
    border: 2px solid #92400e;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }

  .htc-nest::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 4px;
    width: 46px;
    height: 12px;
    margin-left: -23px;
    border-radius: 50%;
    background: #1c1917;
  }

  /* Turquoise robin egg lower shell */
  .htc-egg-bot {
    position: absolute;
    left: 50%;
    bottom: 24px;
    width: 30px;
    height: 22px;
    margin-left: -15px;
    border-radius: 50% 50% 48% 48% / 30% 30% 70% 70%;
    background: radial-gradient(ellipse at 40% 35%, #bae6fd 0%, #38bdf8 60%, #0284c7 100%);
    border: 1px solid #7dd3fc;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
    z-index: 2;
    animation: htc-rock 6s ease-in-out infinite;
  }

  /* Crack zigzag line */
  .htc-crack {
    position: absolute;
    left: 50%;
    bottom: 40px;
    width: 30px;
    height: 4px;
    margin-left: -15px;
    clip-path: polygon(0 50%, 12% 0, 24% 100%, 38% 0, 50% 100%, 62% 0, 76% 100%, 88% 0, 100% 50%, 100% 60%, 0 60%);
    background: #0c4a6e;
    opacity: 0;
    z-index: 3;
    animation: htc-crack 6s steps(1) infinite;
  }

  @keyframes htc-crack {
    0%, 34% { opacity: 0; }
    38%, 88% { opacity: 0.95; }
    92%, 100% { opacity: 0; }
  }

  /* Popping egg cap */
  .htc-egg-cap {
    position: absolute;
    left: 50%;
    bottom: 40px;
    width: 30px;
    height: 12px;
    margin-left: -15px;
    border-radius: 50% 50% 10% 10% / 90% 90% 10% 10%;
    background: radial-gradient(ellipse at 40% 60%, #bae6fd 0%, #38bdf8 60%, #0284c7 100%);
    border: 1px solid #7dd3fc;
    border-bottom: none;
    z-index: 4;
    animation: htc-cap 6s ease-out infinite;
  }

  @keyframes htc-cap {
    0%, 40% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    50% { transform: translate(0, -14px) rotate(-8deg); }
    58% { transform: translate(10px, -6px) rotate(28deg); }
    66% { transform: translate(16px, 6px) rotate(48deg); opacity: 0; }
    90% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    96%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  }

  @keyframes htc-rock {
    0%, 12% { transform: rotate(0deg); }
    18% { transform: rotate(-5deg); }
    24% { transform: rotate(5deg); }
    30% { transform: rotate(-4deg); }
    36% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  /* Canary-yellow baby chick */
  .htc-chick {
    position: absolute;
    left: 50%;
    bottom: 34px;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    z-index: 3;
    animation: htc-chick 6s ease-out infinite;
  }

  @keyframes htc-chick {
    0%, 44% { transform: translateY(14px); opacity: 0; }
    52% { transform: translateY(0); opacity: 1; }
    62% { transform: translateY(-3px); }
    68% { transform: translateY(0); }
    84% { transform: translateY(0); opacity: 1; }
    90% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
  }

  .htc-chick-head {
    position: absolute;
    left: 2px;
    top: 0;
    width: 16px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #fef08a 0%, #facc15 60%, #ca8a04 100%);
    border: 1px solid #eab308;
    box-shadow: 0 0 6px rgba(250, 204, 21, 0.6);
  }

  /* Chick eyes */
  .htc-chick-head::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 4px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #09090b;
    box-shadow: 6px 0 0 #09090b;
  }

  /* Coral-orange open chirping beak */
  .htc-beak {
    position: absolute;
    left: 7px;
    top: 8px;
    width: 8px;
    height: 5px;
    clip-path: polygon(0 0, 100% 20%, 0 40%, 100% 60%, 0 80%);
    background: #f97316;
    animation: htc-chirp 0.3s ease-in-out infinite;
  }

  @keyframes htc-chirp {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.4); }
  }

  /* Floating golden music notes */
  .htc-note {
    position: absolute;
    left: 66px;
    top: 26px;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: #fde047;
    text-shadow: 0 0 6px #eab308;
    opacity: 0;
    animation: htc-note 6s infinite;
  }

  .htc-note.n2 { left: 74px; top: 18px; animation-delay: 0.4s; }

  @keyframes htc-note {
    0%, 56% { transform: translateY(0); opacity: 0; }
    62% { opacity: 1; }
    78% { transform: translateY(-12px) translateX(4px); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const hatchlingMarkup = {
  v1: `
      <div class="ht">
        <div class="ht-note n2">&#9834;</div>
        <div class="ht-note">&#9835;</div>
        <div class="ht-egg-bot"></div>
        <div class="ht-chick">
          <div class="ht-chick-head"></div>
          <div class="ht-beak"></div>
        </div>
        <div class="ht-crack"></div>
        <div class="ht-egg-cap"></div>
        <div class="ht-nest"></div>
      </div>
    `,
  v2: `
      <div class="htc">
        <div class="htc-note n2">&#9834;</div>
        <div class="htc-note">&#9835;</div>
        <div class="htc-egg-bot"></div>
        <div class="htc-chick">
          <div class="htc-chick-head"></div>
          <div class="htc-beak"></div>
        </div>
        <div class="htc-crack"></div>
        <div class="htc-egg-cap"></div>
        <div class="htc-nest"></div>
      </div>
    `,
};

class ConceptHatchling extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${hatchlingStyles[version] || hatchlingStyles.v2}</style>${hatchlingMarkup[version] || hatchlingMarkup.v2}`;
  }
}

if (!customElements.get('concept-hatchling')) {
  customElements.define('concept-hatchling', ConceptHatchling);
}
