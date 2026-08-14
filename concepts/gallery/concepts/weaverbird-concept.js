const weaverbirdStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .weav {
    width: 114px;
    height: 100px;
    position: relative;
  }

  .weav-branch {
    position: absolute;
    left: 4px;
    top: 10px;
    width: 106px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, rgba(0, 140, 30, 0.9), rgba(0, 50, 12, 0.8));
    border: 1px solid var(--accent, #00cc00);
    transform-origin: left center;
    animation: weav-branch-sway 4s ease-in-out infinite;
  }

  @keyframes weav-branch-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(2deg); }
  }

  .weav-rig {
    position: absolute;
    left: 40px;
    top: 14px;
    width: 44px;
    height: 78px;
    transform-origin: top center;
    animation: weav-nest-sway 4s ease-in-out infinite;
  }

  @keyframes weav-nest-sway {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(3deg); }
  }

  .weav-stalk {
    position: absolute;
    left: 20px;
    top: 0;
    width: 4px;
    height: 16px;
    background: repeating-linear-gradient(180deg, rgba(140, 255, 170, 0.8) 0 2px, rgba(0, 80, 16, 0.9) 2px 4px);
    border: 1px solid var(--accent, #00cc00);
  }

  .weav-nest {
    position: absolute;
    left: 4px;
    top: 14px;
    width: 36px;
    height: 42px;
    border-radius: 50% 50% 45% 45%;
    background:
      repeating-linear-gradient(45deg, rgba(140, 255, 170, 0.5) 0 2px, transparent 2px 6px),
      repeating-linear-gradient(-45deg, rgba(140, 255, 170, 0.5) 0 2px, transparent 2px 6px),
      radial-gradient(circle at 40% 40%, rgba(0, 120, 24, 0.8), rgba(0, 30, 6, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 204, 0, 0.3);
  }

  .weav-nest-density {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      repeating-linear-gradient(45deg, rgba(190, 255, 205, 0.55) 0 1.5px, transparent 1.5px 5px),
      repeating-linear-gradient(-45deg, rgba(190, 255, 205, 0.55) 0 1.5px, transparent 1.5px 5px);
    opacity: 0;
    animation: weav-density-grow 8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes weav-density-grow {
    0%, 55% { opacity: 0; }
    85% { opacity: 0.9; }
    100% { opacity: 0; }
  }

  .weav-opening {
    position: absolute;
    left: 12px;
    bottom: 24px;
    width: 14px;
    height: 16px;
    border-radius: 50%;
    background: rgba(0, 20, 4, 0.95);
    border: 1.5px solid rgba(140, 255, 170, 0.9);
  }

  .weav-bird {
    position: absolute;
    left: -4px;
    bottom: 0;
    width: 32px;
    height: 32px;
    transform: rotate(140deg);
    animation: weav-bird-work 2.4s ease-in-out infinite;
  }

  @keyframes weav-bird-work {
    0%, 100% { transform: rotate(140deg) translate(0, 0); }
    30% { transform: rotate(155deg) translate(-2px, -3px); }
    70% { transform: rotate(130deg) translate(3px, 2px); }
  }

  .weav-bird-body {
    position: absolute;
    left: 6px;
    top: 8px;
    width: 18px;
    height: 14px;
    border-radius: 50% 60% 40% 50%;
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 1), rgba(0, 140, 30, 0.9));
    border: 1px solid var(--accent, #00cc00);
  }

  .weav-bird-head {
    position: absolute;
    left: 0;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  .weav-beak {
    position: absolute;
    left: -6px;
    top: 2px;
    width: 7px;
    height: 4px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background: rgba(140, 255, 170, 0.95);
  }

  .weav-blade {
    position: absolute;
    left: 8px;
    bottom: 12px;
    width: 24px;
    height: 18px;
    border: 1.5px solid rgba(140, 255, 170, 0.9);
    border-top: none;
    border-left: none;
    border-radius: 0 0 12px 0;
    animation: weav-thread-loop 2.4s ease-in-out infinite;
  }

  @keyframes weav-thread-loop {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
    50% { transform: scale(0.65) rotate(-20deg); opacity: 1; border-color: rgba(190, 255, 205, 1); }
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

  /* v2: Golden weaverbird weaving hanging grass nest with chartreuse reeds,
     acacia branch, and flexible green grass loop */
  .weavc {
    width: 114px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Acacia branch overhead */
  .weavc-branch {
    position: absolute;
    left: 4px;
    top: 10px;
    width: 106px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #78350f 0%, #451a03 70%, #15803d 100%);
    border: 1px solid #92400e;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform-origin: left center;
    animation: weavc-branch-sway 4s ease-in-out infinite;
  }

  @keyframes weavc-branch-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(2deg); }
  }

  /* Nest suspension rig */
  .weavc-rig {
    position: absolute;
    left: 40px;
    top: 14px;
    width: 44px;
    height: 78px;
    transform-origin: top center;
    animation: weavc-nest-sway 4s ease-in-out infinite;
  }

  @keyframes weavc-nest-sway {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(3deg); }
  }

  /* Woven suspension stalk */
  .weavc-stalk {
    position: absolute;
    left: 20px;
    top: 0;
    width: 4px;
    height: 16px;
    background: repeating-linear-gradient(180deg, #facc15 0 2px, #65a30d 2px 4px);
    border: 1px solid #ca8a04;
  }

  /* Spherical woven grass nest */
  .weavc-nest {
    position: absolute;
    left: 4px;
    top: 14px;
    width: 36px;
    height: 42px;
    border-radius: 50% 50% 45% 45%;
    background:
      repeating-linear-gradient(45deg, #ca8a04 0 2px, transparent 2px 6px),
      repeating-linear-gradient(-45deg, #65a30d 0 2px, transparent 2px 6px),
      radial-gradient(circle at 40% 40%, #a16207 0%, #451a03 90%);
    border: 1.5px solid #eab308;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.9), 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  /* Density growth */
  .weavc-nest-density {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      repeating-linear-gradient(45deg, #fde047 0 1.5px, transparent 1.5px 5px),
      repeating-linear-gradient(-45deg, #84cc16 0 1.5px, transparent 1.5px 5px);
    opacity: 0;
    animation: weavc-density-grow 8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes weavc-density-grow {
    0%, 55% { opacity: 0; }
    85% { opacity: 0.95; }
    100% { opacity: 0; }
  }

  /* Nest chamber entrance opening */
  .weavc-opening {
    position: absolute;
    left: 12px;
    bottom: 24px;
    width: 14px;
    height: 16px;
    border-radius: 50%;
    background: #09090b;
    border: 1.5px solid #facc15;
    box-shadow: inset 0 0 6px #000000;
  }

  /* Weaverbird hanging upside-down */
  .weavc-bird {
    position: absolute;
    left: -4px;
    bottom: 0;
    width: 32px;
    height: 32px;
    transform: rotate(140deg);
    animation: weavc-bird-work 2.4s ease-in-out infinite;
  }

  @keyframes weavc-bird-work {
    0%, 100% { transform: rotate(140deg) translate(0, 0); }
    30% { transform: rotate(155deg) translate(-2px, -3px); }
    70% { transform: rotate(130deg) translate(3px, 2px); }
  }

  /* Yellow & black weaver body */
  .weavc-bird-body {
    position: absolute;
    left: 6px;
    top: 8px;
    width: 18px;
    height: 14px;
    border-radius: 50% 60% 40% 50%;
    background: radial-gradient(circle at 40% 40%, #facc15 0%, #ca8a04 60%, #1e293b 100%);
    border: 1px solid #eab308;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  }

  /* Bird head & beak */
  .weavc-bird-head {
    position: absolute;
    left: 0;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #09090b 0%, #1e293b 80%);
    border: 1px solid #facc15;
    box-shadow: 0 0 4px #eab308;
  }

  .weavc-beak {
    position: absolute;
    left: -6px;
    top: 2px;
    width: 7px;
    height: 4px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background: #facc15;
  }

  /* Fresh emerald grass blade being threaded */
  .weavc-blade {
    position: absolute;
    left: 8px;
    bottom: 12px;
    width: 24px;
    height: 18px;
    border: 2px solid #22c55e;
    box-shadow: 0 0 6px #4ade80;
    border-top: none;
    border-left: none;
    border-radius: 0 0 12px 0;
    animation: weavc-thread-loop 2.4s ease-in-out infinite;
  }

  @keyframes weavc-thread-loop {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
    50% { transform: scale(0.65) rotate(-20deg); opacity: 1; border-color: #86efac; }
  }
  `,
};

const weaverbirdMarkup = {
  v1: `
      <div class="weav">
        <div class="weav-branch"></div>
        <div class="weav-rig">
          <div class="weav-stalk"></div>
          <div class="weav-nest">
            <div class="weav-nest-density"></div>
            <div class="weav-opening"></div>
          </div>
          <div class="weav-blade"></div>
          <div class="weav-bird">
            <div class="weav-bird-body"></div>
            <div class="weav-bird-head">
              <div class="weav-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="weavc">
        <div class="weavc-branch"></div>
        <div class="weavc-rig">
          <div class="weavc-stalk"></div>
          <div class="weavc-nest">
            <div class="weavc-nest-density"></div>
            <div class="weavc-opening"></div>
          </div>
          <div class="weavc-blade"></div>
          <div class="weavc-bird">
            <div class="weavc-bird-body"></div>
            <div class="weavc-bird-head">
              <div class="weavc-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `,
};

class ConceptWeaverbird extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${weaverbirdStyles[version] || weaverbirdStyles.v2}</style>${weaverbirdMarkup[version] || weaverbirdMarkup.v2}`;
  }
}

if (!customElements.get('concept-weaverbird')) {
  customElements.define('concept-weaverbird', ConceptWeaverbird);
}
