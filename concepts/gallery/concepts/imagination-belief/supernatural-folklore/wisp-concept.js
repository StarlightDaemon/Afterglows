const wispStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wisp {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #020a05 70%, #03110a 100%);
  }

  .wisp-water {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20px;
    background: linear-gradient(180deg, rgba(0, 204, 100, 0.1), rgba(0, 204, 100, 0.03));
    border-top: 1px solid rgba(0, 204, 100, 0.3);
  }

  .wisp-reed {
    position: absolute;
    bottom: 18px;
    width: 2px;
    border-radius: 1px 1px 0 0;
    background: linear-gradient(180deg, rgba(30, 110, 60, 0.8), rgba(10, 40, 22, 0.9));
    transform-origin: bottom center;
    animation: wisp-reed 5s ease-in-out infinite;
  }

  .wisp-reed.r1 { left: 12px; height: 16px; }
  .wisp-reed.r2 { left: 18px; height: 22px; animation-delay: -1.2s; }
  .wisp-reed.r3 { left: 82px; height: 19px; animation-delay: -2.6s; }
  .wisp-reed.r4 { left: 89px; height: 13px; animation-delay: -3.4s; }

  .wisp-orb {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 12px;
    border-radius: 50% 50% 44% 56% / 58% 58% 42% 42%;
    background: radial-gradient(circle at 50% 62%, #f2ffdd 0%, #b9ff8e 42%, rgba(90, 220, 110, 0.35) 80%);
    filter: blur(0.4px);
    animation:
      wisp-wander 11s ease-in-out infinite,
      wisp-flare 2.2s ease-in-out infinite;
  }

  .wisp-orb::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 4px;
    height: 7px;
    margin-left: -2px;
    border-radius: 50% 50% 40% 60% / 70% 70% 30% 30%;
    background: rgba(216, 255, 187, 0.8);
    filter: blur(0.6px);
  }

  .wisp-echo {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(185, 255, 142, 0.6), transparent 75%);
    filter: blur(1px);
    animation: wisp-wander 11s ease-in-out infinite, wisp-echo 2.2s ease-in-out infinite;
    animation-delay: -0.45s, -0.3s;
  }

  .wisp-echo.e2 {
    width: 4px;
    height: 5px;
    animation-delay: -0.9s, -0.7s;
    opacity: 0.5;
  }

  .wisp-gleam {
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 16px;
    height: 4px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(185, 255, 142, 0.4), transparent 75%);
    filter: blur(1.5px);
    animation: wisp-gleam 11s ease-in-out infinite;
  }

  @keyframes wisp-wander {
    0%   { transform: translate(16px, 60px); }
    14%  { transform: translate(34px, 38px); }
    30%  { transform: translate(58px, 52px); }
    46%  { transform: translate(78px, 30px); }
    60%  { transform: translate(64px, 18px); }
    74%  { transform: translate(42px, 34px); }
    88%  { transform: translate(22px, 48px); }
    100% { transform: translate(16px, 60px); }
  }

  @keyframes wisp-flare {
    0%, 100% { opacity: 0.55; box-shadow: 0 0 8px rgba(185, 255, 142, 0.35); }
    50% { opacity: 1; box-shadow: 0 0 16px rgba(185, 255, 142, 0.75), 0 0 30px rgba(120, 230, 110, 0.3); }
  }

  @keyframes wisp-echo {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.7; }
  }

  @keyframes wisp-gleam {
    0%   { transform: translateX(8px); opacity: 0.5; }
    14%  { transform: translateX(26px); opacity: 0.8; }
    30%  { transform: translateX(50px); opacity: 0.5; }
    46%  { transform: translateX(70px); opacity: 0.9; }
    60%  { transform: translateX(56px); opacity: 0.6; }
    74%  { transform: translateX(34px); opacity: 0.8; }
    88%  { transform: translateX(14px); opacity: 0.5; }
    100% { transform: translateX(8px); opacity: 0.5; }
  }

  @keyframes wisp-reed {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(4deg); }
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

  /* v2: Will-o'-the-wisp over dark marsh with cyan core flame,
     violet trail echoes, green reeds, and water reflections */
  .wispc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Peat marsh water surface */
  .wispc-water {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20px;
    background: linear-gradient(180deg, rgba(6, 182, 212, 0.25), rgba(15, 23, 42, 0.8));
    border-top: 1px solid #38bdf8;
    box-shadow: 0 -2px 8px rgba(56, 189, 248, 0.3);
  }

  /* Forest green marsh reeds */
  .wispc-reed {
    position: absolute;
    bottom: 18px;
    width: 2.5px;
    border-radius: 1px 1px 0 0;
    background: linear-gradient(180deg, #22c55e, #14532d);
    box-shadow: 0 0 4px #15803d;
    transform-origin: bottom center;
    animation: wispc-reed 5s ease-in-out infinite;
  }

  .wispc-reed.r1 { left: 12px; height: 16px; }
  .wispc-reed.r2 { left: 18px; height: 22px; animation-delay: -1.2s; }
  .wispc-reed.r3 { left: 82px; height: 19px; animation-delay: -2.6s; }
  .wispc-reed.r4 { left: 89px; height: 13px; animation-delay: -3.4s; }

  /* Cyan & electric blue orb */
  .wispc-orb {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 12px;
    border-radius: 50% 50% 44% 56% / 58% 58% 42% 42%;
    background: radial-gradient(circle at 50% 62%, #ffffff 0%, #38bdf8 40%, rgba(2, 132, 199, 0.4) 80%);
    filter: blur(0.4px);
    animation:
      wispc-wander 11s ease-in-out infinite,
      wispc-flare 2.2s ease-in-out infinite;
  }

  /* Inner flame lick */
  .wispc-orb::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 4px;
    height: 7px;
    margin-left: -2px;
    border-radius: 50% 50% 40% 60% / 70% 70% 30% 30%;
    background: #00f0ff;
    box-shadow: 0 0 6px #38bdf8;
    filter: blur(0.6px);
  }

  /* Violet/amethyst echo orbs */
  .wispc-echo {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle, #c084fc 0%, transparent 75%);
    box-shadow: 0 0 6px #a855f7;
    filter: blur(1px);
    animation: wispc-wander 11s ease-in-out infinite, wispc-echo 2.2s ease-in-out infinite;
    animation-delay: -0.45s, -0.3s;
  }

  .wispc-echo.e2 {
    width: 4px;
    height: 5px;
    background: radial-gradient(circle, #f472b6 0%, transparent 75%);
    box-shadow: 0 0 6px #ec4899;
    animation-delay: -0.9s, -0.7s;
    opacity: 0.6;
  }

  /* Water reflection */
  .wispc-gleam {
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 16px;
    height: 4px;
    border-radius: 50%;
    background: radial-gradient(ellipse, #38bdf8 0%, transparent 75%);
    box-shadow: 0 0 8px #00f0ff;
    filter: blur(1.5px);
    animation: wispc-gleam 11s ease-in-out infinite;
  }

  @keyframes wispc-wander {
    0%   { transform: translate(16px, 60px); }
    14%  { transform: translate(34px, 38px); }
    30%  { transform: translate(58px, 52px); }
    46%  { transform: translate(78px, 30px); }
    60%  { transform: translate(64px, 18px); }
    74%  { transform: translate(42px, 34px); }
    88%  { transform: translate(22px, 48px); }
    100% { transform: translate(16px, 60px); }
  }

  @keyframes wispc-flare {
    0%, 100% { opacity: 0.6; box-shadow: 0 0 8px #38bdf8; }
    50% { opacity: 1; box-shadow: 0 0 20px #00f0ff, 0 0 35px #a855f7; }
  }

  @keyframes wispc-echo {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 0.85; }
  }

  @keyframes wispc-gleam {
    0%   { transform: translateX(8px); opacity: 0.5; }
    14%  { transform: translateX(26px); opacity: 0.9; }
    30%  { transform: translateX(50px); opacity: 0.5; }
    46%  { transform: translateX(70px); opacity: 0.95; }
    60%  { transform: translateX(56px); opacity: 0.6; }
    74%  { transform: translateX(34px); opacity: 0.85; }
    88%  { transform: translateX(14px); opacity: 0.5; }
    100% { transform: translateX(8px); opacity: 0.5; }
  }

  @keyframes wispc-reed {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(4deg); }
  }
  `,
};

const wispMarkup = {
  v1: `
      <div class="wisp">
        <div class="wisp-echo e2"></div>
        <div class="wisp-echo"></div>
        <div class="wisp-orb"></div>
        <div class="wisp-gleam"></div>
        <div class="wisp-water"></div>
        <div class="wisp-reed r1"></div>
        <div class="wisp-reed r2"></div>
        <div class="wisp-reed r3"></div>
        <div class="wisp-reed r4"></div>
      </div>
    `,
  v2: `
      <div class="wispc">
        <div class="wispc-echo e2"></div>
        <div class="wispc-echo"></div>
        <div class="wispc-orb"></div>
        <div class="wispc-gleam"></div>
        <div class="wispc-water"></div>
        <div class="wispc-reed r1"></div>
        <div class="wispc-reed r2"></div>
        <div class="wispc-reed r3"></div>
        <div class="wispc-reed r4"></div>
      </div>
    `,
};

class ConceptWisp extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${wispStyles[version] || wispStyles.v2}</style>${wispMarkup[version] || wispMarkup.v2}`;
  }
}

if (!customElements.get('concept-wisp')) {
  customElements.define('concept-wisp', ConceptWisp);
}
