const newtonsCradleStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .newt {
    width: 116px;
    height: 98px;
    position: relative;
  }

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

  .newt-pendulum-mid {
    position: absolute;
    top: 14px;
    width: 14px;
    height: 52px;
  }

  .newt-pendulum-mid.m2 { left: 39px; }
  .newt-pendulum-mid.m3 { left: 51px; }
  .newt-pendulum-mid.m4 { left: 63px; }

  .newt-string {
    position: absolute;
    left: 6px;
    top: 0;
    width: 1px;
    height: 40px;
    background: rgba(140, 255, 170, 0.7);
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Precision Newton's Cradle with rosewood base, chrome suspension frame,
     mirror-finish steel ball bearings, and cyan/gold shock transfer flash */
  .newtc {
    width: 116px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Chrome suspension top beam */
  .newtc-frame {
    position: absolute;
    left: 12px;
    top: 10px;
    width: 92px;
    height: 8px;
    border-radius: 3px;
    background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
    border: 1px solid #94a3b8;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6), inset 0 1px 2px #ffffff;
  }

  /* Chrome upright support struts */
  .newtc-strut {
    position: absolute;
    top: 14px;
    width: 3px;
    height: 72px;
    background: linear-gradient(180deg, #cbd5e1, #64748b 70%, #334155 100%);
    border: 1px solid #94a3b8;
  }

  .newtc-strut.l { left: 14px; }
  .newtc-strut.r { right: 14px; }

  /* Rosewood base plinth */
  .newtc-base {
    position: absolute;
    left: 8px;
    bottom: 8px;
    width: 100px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, #881337 0%, #4c0519 100%);
    border: 1.5px solid #facc15;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }

  /* Suspended ball 1 (left swinging pendulum) */
  .newtc-pendulum-l {
    position: absolute;
    left: 27px;
    top: 14px;
    width: 14px;
    height: 52px;
    transform-origin: top center;
    animation: newtc-swing-l 2.4s cubic-bezier(0.2, 0.9, 0.3, 1) infinite;
  }

  @keyframes newtc-swing-l {
    0% { transform: rotate(42deg); }
    25% { transform: rotate(0deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(0deg); }
    100% { transform: rotate(42deg); }
  }

  /* Suspended ball 5 (right swinging pendulum) */
  .newtc-pendulum-r {
    position: absolute;
    left: 75px;
    top: 14px;
    width: 14px;
    height: 52px;
    transform-origin: top center;
    animation: newtc-swing-r 2.4s cubic-bezier(0.2, 0.9, 0.3, 1) infinite;
  }

  @keyframes newtc-swing-r {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(0deg); }
    50% { transform: rotate(-42deg); }
    75% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  /* Static middle pendulums (balls 2, 3, 4) */
  .newtc-pendulum-mid {
    position: absolute;
    top: 14px;
    width: 14px;
    height: 52px;
  }

  .newtc-pendulum-mid.m2 { left: 39px; }
  .newtc-pendulum-mid.m3 { left: 51px; }
  .newtc-pendulum-mid.m4 { left: 63px; }

  /* High-tension steel string */
  .newtc-string {
    position: absolute;
    left: 6px;
    top: 0;
    width: 1px;
    height: 40px;
    background: #cbd5e1;
  }

  /* Mirror-finish steel bearing */
  .newtc-ball {
    position: absolute;
    left: 1px;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #e2e8f0 30%, #64748b 75%, #0f172a 100%);
    border: 1px solid #cbd5e1;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  /* Momentum elastic shock flash */
  .newtc-shock {
    position: absolute;
    left: 36px;
    top: 54px;
    width: 44px;
    height: 14px;
    border-radius: 7px;
    background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.95), transparent 70%);
    box-shadow: 0 0 10px #00f0ff;
    animation: newtc-shock-flash 2.4s ease-out infinite;
    pointer-events: none;
    z-index: 6;
  }

  @keyframes newtc-shock-flash {
    0%, 23% { opacity: 0; transform: scale(0.6); }
    25% { opacity: 1; transform: scale(1.2); }
    29% { opacity: 0; }
    73% { opacity: 0; transform: scale(0.6); }
    75% { opacity: 1; transform: scale(1.2); }
    79% { opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const newtonsCradleMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="newtc">
        <div class="newtc-frame"></div>
        <div class="newtc-strut l"></div>
        <div class="newtc-strut r"></div>
        <div class="newtc-base"></div>
        <div class="newtc-shock"></div>
        <div class="newtc-pendulum-l">
          <div class="newtc-string"></div>
          <div class="newtc-ball"></div>
        </div>
        <div class="newtc-pendulum-mid m2">
          <div class="newtc-string"></div>
          <div class="newtc-ball"></div>
        </div>
        <div class="newtc-pendulum-mid m3">
          <div class="newtc-string"></div>
          <div class="newtc-ball"></div>
        </div>
        <div class="newtc-pendulum-mid m4">
          <div class="newtc-string"></div>
          <div class="newtc-ball"></div>
        </div>
        <div class="newtc-pendulum-r">
          <div class="newtc-string"></div>
          <div class="newtc-ball"></div>
        </div>
      </div>
    `,
};

class ConceptNewtonsCradle extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${newtonsCradleStyles[version] || newtonsCradleStyles.v2}</style>${newtonsCradleMarkup[version] || newtonsCradleMarkup.v2}`;
  }
}

if (!customElements.get('concept-newtons-cradle')) {
  customElements.define('concept-newtons-cradle', ConceptNewtonsCradle);
}
