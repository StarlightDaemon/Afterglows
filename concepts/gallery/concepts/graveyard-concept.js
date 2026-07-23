const graveyardStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gy {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #020a05 75%, #041106 100%);
  }

  /* Ground line. */
  .gy-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.4), transparent);
  }

  /* Headstones: one rounded, one cross, one slab (leaning). */
  .gy-stone {
    position: absolute;
    bottom: 16px;
    background: linear-gradient(180deg, #123c1e 0%, #0a2411 70%);
    border: 1px solid rgba(140, 255, 170, 0.45);
    box-sizing: border-box;
  }

  .gy-stone.round {
    left: 14px;
    width: 20px;
    height: 26px;
    border-radius: 10px 10px 0 0;
  }

  .gy-stone.round::after {
    content: 'R I P';
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: monospace;
    font-size: 6px;
    color: rgba(140, 255, 170, 0.6);
  }

  .gy-stone.slab {
    right: 16px;
    width: 16px;
    height: 22px;
    border-radius: 3px 3px 0 0;
    transform: rotate(7deg);
    transform-origin: bottom center;
  }

  /* Cross: vertical + horizontal bars. */
  .gy-cross {
    position: absolute;
    bottom: 16px;
    left: 48px;
    width: 4px;
    height: 30px;
    background: linear-gradient(180deg, #164722, #0a2411);
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-sizing: border-box;
  }

  .gy-cross::after {
    content: '';
    position: absolute;
    top: 7px;
    left: -6px;
    width: 14px;
    height: 4px;
    background: #123c1e;
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-sizing: border-box;
  }

  /* Fog banks: soft blurred bands sliding through at differing speeds,
     rising slightly as they cross. */
  .gy-fog {
    position: absolute;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(140, 230, 160, 0.3), transparent 70%);
    filter: blur(3px);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .gy-fog.f1 {
    bottom: 12px;
    left: 0;
    width: 60px;
    animation-name: gy-fog-a;
    animation-duration: 9s;
  }

  .gy-fog.f2 {
    bottom: 20px;
    left: 0;
    width: 44px;
    opacity: 0.7;
    animation-name: gy-fog-b;
    animation-duration: 13s;
    animation-delay: -5s;
  }

  .gy-fog.f3 {
    bottom: 28px;
    left: 0;
    width: 34px;
    opacity: 0.45;
    animation-name: gy-fog-a;
    animation-duration: 17s;
    animation-delay: -11s;
  }

  /* A bat flitting across the moon on a jinking path. */
  .gy-bat {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 4px;
    animation: gy-bat 7s linear infinite;
  }

  .gy-bat::before,
  .gy-bat::after {
    content: '';
    position: absolute;
    top: 0;
    width: 5px;
    height: 4px;
    background: #164722;
    animation: gy-flap 0.34s ease-in-out infinite alternate;
  }

  .gy-bat::before {
    left: 0;
    border-radius: 80% 20% 0 60%;
    transform-origin: right center;
  }

  .gy-bat::after {
    right: 0;
    border-radius: 20% 80% 60% 0;
    transform-origin: left center;
    animation-name: gy-flap-r;
  }

  /* Moon low and huge behind the stones. */
  .gy-moon {
    position: absolute;
    top: 10px;
    right: 14px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle at 42% 36%, #e6ffd2 0%, #9bd88a 75%);
    box-shadow: 0 0 16px rgba(216, 255, 187, 0.35);
    animation: gy-moon 8s ease-in-out infinite;
  }

  @keyframes gy-fog-a {
    0% { transform: translate(-60px, 0); }
    100% { transform: translate(120px, -4px); }
  }

  @keyframes gy-fog-b {
    0% { transform: translate(110px, 0); }
    100% { transform: translate(-60px, -5px); }
  }

  @keyframes gy-bat {
    0% { transform: translate(-12px, 34px); }
    22% { transform: translate(26px, 20px); }
    44% { transform: translate(52px, 30px); }
    66% { transform: translate(74px, 16px); }
    100% { transform: translate(116px, 26px); }
  }

  @keyframes gy-flap {
    from { transform: rotate(-24deg); }
    to { transform: rotate(26deg); }
  }

  @keyframes gy-flap-r {
    from { transform: rotate(24deg); }
    to { transform: rotate(-26deg); }
  }

  @keyframes gy-moon {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
`;

class ConceptGraveyard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${graveyardStyles}</style>
      <div class="gy">
        <div class="gy-moon"></div>
        <div class="gy-bat"></div>
        <div class="gy-stone round"></div>
        <div class="gy-cross"></div>
        <div class="gy-stone slab"></div>
        <div class="gy-ground"></div>
        <div class="gy-fog f1"></div>
        <div class="gy-fog f2"></div>
        <div class="gy-fog f3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-graveyard')) {
  customElements.define('concept-graveyard', ConceptGraveyard);
}
