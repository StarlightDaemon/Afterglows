const fireflyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor fireflies --- */
  .firefly {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #020a03 70%, #041307 100%);
  }

  .firefly-blade {
    position: absolute;
    bottom: 0;
    width: 3px;
    border-radius: 40% 40% 0 0;
    background: linear-gradient(180deg, rgba(30, 110, 50, 0.75), rgba(10, 40, 18, 0.9));
    transform-origin: bottom center;
    animation: firefly-grass 2.4s ease-in-out infinite alternate;
  }

  .firefly-blade.g1 { left: 8px;  height: 18px; transform: rotate(-8deg); }
  .firefly-blade.g2 { left: 20px; height: 26px; transform: rotate(5deg);  animation-delay: -0.6s; }
  .firefly-blade.g3 { left: 34px; height: 15px; transform: rotate(-4deg); animation-delay: -1.2s; }
  .firefly-blade.g4 { left: 55px; height: 22px; transform: rotate(7deg);  animation-delay: -0.3s; }
  .firefly-blade.g5 { left: 72px; height: 17px; transform: rotate(-6deg); animation-delay: -1.8s; }
  .firefly-blade.g6 { left: 88px; height: 24px; transform: rotate(4deg);  animation-delay: -0.9s; }

  .firefly-bug {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #eaffc9;
    box-shadow: 0 0 10px 2px rgba(220, 255, 170, 0.85);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .firefly-bug.b1 {
    top: 24px; left: 18px;
    animation-name: firefly-path1;
    animation-duration: 3.4s;
  }

  .firefly-bug.b2 {
    top: 52px; left: 66px;
    animation-name: firefly-path2;
    animation-duration: 4.2s;
    animation-delay: -1.2s;
  }

  .firefly-bug.b3 {
    top: 66px; left: 30px;
    width: 7px; height: 7px;
    animation-name: firefly-path3;
    animation-duration: 3.8s;
    animation-delay: -2s;
  }

  .firefly-bug.b4 {
    top: 36px; left: 82px;
    width: 9px; height: 9px;
    animation-name: firefly-path1;
    animation-duration: 4.6s;
    animation-delay: -2.8s;
  }

  .firefly-bug.b5 {
    top: 14px; left: 52px;
    animation-name: firefly-path2;
    animation-duration: 3.9s;
    animation-delay: -0.8s;
  }

  @keyframes firefly-path1 {
    0%   { transform: translate(0, 0) scale(0.9); }
    25%  { transform: translate(28px, -18px) scale(1.25); }
    50%  { transform: translate(44px, 14px) scale(0.95); }
    75%  { transform: translate(12px, 34px) scale(1.3); }
    100% { transform: translate(0, 0) scale(0.9); }
  }

  @keyframes firefly-path2 {
    0%   { transform: translate(0, 0) scale(1.1); }
    30%  { transform: translate(-32px, -24px) scale(0.85); }
    60%  { transform: translate(-46px, 16px) scale(1.25); }
    85%  { transform: translate(-16px, 28px) scale(1); }
    100% { transform: translate(0, 0) scale(1.1); }
  }

  @keyframes firefly-path3 {
    0%   { transform: translate(0, 0) scale(1); }
    33%  { transform: translate(32px, -26px) scale(1.3); }
    66%  { transform: translate(48px, 18px) scale(0.85); }
    100% { transform: translate(0, 0) scale(1); }
  }

  @keyframes firefly-grass {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(10deg); }
  }

  /* --- v2: Bioluminescent twilight meadow ---
     Deep indigo twilight sky, lush emerald and forest green grass blades,
     and glowing golden-chartreuse luciferin lantern pulses. */
  .ffc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #090d16 0%, #064e3b 80%, #022c22 100%);
  }

  .ffc-blade {
    position: absolute;
    bottom: 0;
    width: 3px;
    border-radius: 40% 40% 0 0;
    background: linear-gradient(180deg, #16a34a, #064e3b 80%, #022c22);
    transform-origin: bottom center;
    animation: firefly-grass 2.4s ease-in-out infinite alternate;
  }

  .ffc-blade.g1 { left: 8px;  height: 18px; transform: rotate(-8deg); }
  .ffc-blade.g2 { left: 20px; height: 26px; transform: rotate(5deg);  animation-delay: -0.6s; }
  .ffc-blade.g3 { left: 34px; height: 15px; transform: rotate(-4deg); animation-delay: -1.2s; }
  .ffc-blade.g4 { left: 55px; height: 22px; transform: rotate(7deg);  animation-delay: -0.3s; }
  .ffc-blade.g5 { left: 72px; height: 17px; transform: rotate(-6deg); animation-delay: -1.8s; }
  .ffc-blade.g6 { left: 88px; height: 24px; transform: rotate(4deg);  animation-delay: -0.9s; }

  .ffc-bug {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 12px 3px #a3e635, 0 0 18px #fde047;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .ffc-bug.b1 {
    top: 24px; left: 18px;
    animation-name: firefly-path1;
    animation-duration: 3.4s;
  }

  .ffc-bug.b2 {
    top: 52px; left: 66px;
    animation-name: firefly-path2;
    animation-duration: 4.2s;
    animation-delay: -1.2s;
  }

  .ffc-bug.b3 {
    top: 66px; left: 30px;
    width: 7px; height: 7px;
    animation-name: firefly-path3;
    animation-duration: 3.8s;
    animation-delay: -2s;
  }

  .ffc-bug.b4 {
    top: 36px; left: 82px;
    width: 9px; height: 9px;
    animation-name: firefly-path1;
    animation-duration: 4.6s;
    animation-delay: -2.8s;
  }

  .ffc-bug.b5 {
    top: 14px; left: 52px;
    animation-name: firefly-path2;
    animation-duration: 3.9s;
    animation-delay: -0.8s;
  }
`;

const fireflyMarkup = {
  v1: `
    <div class="firefly">
      <div class="firefly-bug b1"></div>
      <div class="firefly-bug b2"></div>
      <div class="firefly-bug b3"></div>
      <div class="firefly-bug b4"></div>
      <div class="firefly-bug b5"></div>
      <div class="firefly-blade g1"></div>
      <div class="firefly-blade g2"></div>
      <div class="firefly-blade g3"></div>
      <div class="firefly-blade g4"></div>
      <div class="firefly-blade g5"></div>
      <div class="firefly-blade g6"></div>
    </div>
  `,
  v2: `
    <div class="ffc">
      <div class="ffc-bug b1"></div>
      <div class="ffc-bug b2"></div>
      <div class="ffc-bug b3"></div>
      <div class="ffc-bug b4"></div>
      <div class="ffc-bug b5"></div>
      <div class="ffc-blade g1"></div>
      <div class="ffc-blade g2"></div>
      <div class="ffc-blade g3"></div>
      <div class="ffc-blade g4"></div>
      <div class="ffc-blade g5"></div>
      <div class="ffc-blade g6"></div>
    </div>
  `,
};

class ConceptFirefly extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${fireflyStyles}</style>${fireflyMarkup[version] || fireflyMarkup.v2}`;
  }
}

if (!customElements.get('concept-firefly')) {
  customElements.define('concept-firefly', ConceptFirefly);
}
