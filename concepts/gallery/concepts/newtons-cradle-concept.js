const newtonsCradleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A classic Newton's Cradle momentum transfer demo: five polished steel
     spheres suspended on dual strings demonstrate conservation of momentum
     as end balls swing and elastic shock waves flash through static middle nodes. */
  .newt {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Structural suspension frame */
  .newt-frame {
    position: absolute;
    left: 12px;
    top: 10px;
    width: 92px;
    height: 8px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Side upright support struts */
  .newt-strut {
    position: absolute;
    top: 14px;
    width: 3px;
    height: 72px;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 40, 8, 0.95));
    border: 1px solid var(--accent, #00cc00);
  }

  .newt-strut.l { left: 14px; }
  .newt-strut.r { right: 14px; }

  /* Base plinth */
  .newt-base {
    position: absolute;
    left: 8px;
    bottom: 8px;
    width: 100px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 100, 22, 0.85), rgba(0, 30, 6, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
  }

  /* Suspended ball 1 (left swinging pendulum) */
  .newt-pendulum-l {
    position: absolute;
    left: 27px;
    top: 14px;
    width: 14px;
    height: 52px;
    transform-origin: top center;
    animation: newt-swing-l 2.4s cubic-bezier(0.2, 0.9, 0.3, 1) infinite;
  }

  @keyframes newt-swing-l {
    0% { transform: rotate(42deg); }
    25% { transform: rotate(0deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(0deg); }
    100% { transform: rotate(42deg); }
  }

  /* Suspended ball 5 (right swinging pendulum) */
  .newt-pendulum-r {
    position: absolute;
    left: 75px;
    top: 14px;
    width: 14px;
    height: 52px;
    transform-origin: top center;
    animation: newt-swing-r 2.4s cubic-bezier(0.2, 0.9, 0.3, 1) infinite;
  }

  @keyframes newt-swing-r {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(0deg); }
    50% { transform: rotate(-42deg); }
    75% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  /* Static middle pendulums (balls 2, 3, 4) */
  .newt-pendulum-mid {
    position: absolute;
    top: 14px;
    width: 14px;
    height: 52px;
  }

  .newt-pendulum-mid.m2 { left: 39px; }
  .newt-pendulum-mid.m3 { left: 51px; }
  .newt-pendulum-mid.m4 { left: 63px; }

  /* Dual suspension string */
  .newt-string {
    position: absolute;
    left: 6px;
    top: 0;
    width: 1px;
    height: 40px;
    background: rgba(140, 255, 170, 0.7);
  }

  /* Polished steel sphere */
  .newt-ball {
    position: absolute;
    left: 1px;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(190, 255, 205, 1), rgba(0, 150, 30, 0.9) 60%, rgba(0, 35, 8, 0.98));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.6);
  }

  /* Elastic momentum shock flash wave through middle spheres */
  .newt-shock {
    position: absolute;
    left: 36px;
    top: 54px;
    width: 44px;
    height: 14px;
    border-radius: 7px;
    background: radial-gradient(ellipse at center, rgba(190, 255, 205, 0.9), transparent 70%);
    animation: newt-shock-flash 2.4s ease-out infinite;
    pointer-events: none;
    z-index: 6;
  }

  @keyframes newt-shock-flash {
    0%, 23% { opacity: 0; transform: scale(0.6); }
    25% { opacity: 1; transform: scale(1.2); }
    29% { opacity: 0; }
    73% { opacity: 0; transform: scale(0.6); }
    75% { opacity: 1; transform: scale(1.2); }
    79% { opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptNewtonsCradle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${newtonsCradleStyles}</style>
      <div class="newt">
        <div class="newt-frame"></div>
        <div class="newt-strut l"></div>
        <div class="newt-strut r"></div>
        <div class="newt-base"></div>
        <div class="newt-shock"></div>
        <div class="newt-pendulum-l">
          <div class="newt-string"></div>
          <div class="newt-ball"></div>
        </div>
        <div class="newt-pendulum-mid m2">
          <div class="newt-string"></div>
          <div class="newt-ball"></div>
        </div>
        <div class="newt-pendulum-mid m3">
          <div class="newt-string"></div>
          <div class="newt-ball"></div>
        </div>
        <div class="newt-pendulum-mid m4">
          <div class="newt-string"></div>
          <div class="newt-ball"></div>
        </div>
        <div class="newt-pendulum-r">
          <div class="newt-string"></div>
          <div class="newt-ball"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-newtons-cradle')) {
  customElements.define('concept-newtons-cradle', ConceptNewtonsCradle);
}
