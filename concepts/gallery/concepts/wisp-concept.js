const wispStyles = `
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

  /* Marsh water line and reeds. */
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

  /* The lure: a flame-like orb wandering deeper into the dark,
     dimming and flaring as it moves. */
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

  /* Inner core flame lick. */
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

  /* Trailing echo orbs chasing the leader on the same path, delayed. */
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

  /* Reflection shimmer on the water under the wisp's x-position. */
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

  /* Wander: figure-eightish path sinking deeper right, then returning. */
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
`;

class ConceptWisp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wispStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-wisp')) {
  customElements.define('concept-wisp', ConceptWisp);
}
