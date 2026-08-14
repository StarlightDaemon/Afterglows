const albatrossStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .alb {
    width: 118px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  .alb-swell {
    position: absolute;
    left: -10px;
    bottom: 8px;
    width: 138px;
    height: 16px;
    border-top: 1.5px solid rgba(0, 150, 30, 0.6);
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    animation: alb-swell-drift 6s ease-in-out infinite;
  }

  @keyframes alb-swell-drift {
    0%, 100% { transform: translateX(0) scaleY(1); }
    50% { transform: translateX(12px) scaleY(1.3); }
  }

  .alb-soar {
    position: absolute;
    left: 10px;
    top: 24px;
    width: 98px;
    height: 48px;
    animation: alb-dynamic-soar 6.5s ease-in-out infinite;
  }

  @keyframes alb-dynamic-soar {
    0% { transform: translate(0, 18px) rotate(14deg) scale(0.9); }
    28% { transform: translate(32px, -12px) rotate(-16deg) scale(1.1); }
    50% { transform: translate(50px, -4px) rotate(-8deg) scale(1.05); }
    75% { transform: translate(22px, 14px) rotate(18deg) scale(0.95); }
    100% { transform: translate(0, 18px) rotate(14deg) scale(0.9); }
  }

  .alb-body {
    position: absolute;
    left: 42px;
    top: 18px;
    width: 14px;
    height: 24px;
    border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 0.95), rgba(0, 130, 26, 0.9));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    z-index: 3;
  }

  .alb-head {
    position: absolute;
    left: 45px;
    top: 6px;
    width: 8px;
    height: 14px;
    border-radius: 4px 4px 0 0;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
    z-index: 4;
  }

  .alb-beak {
    position: absolute;
    left: 2px;
    top: -4px;
    width: 4px;
    height: 6px;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    background: rgba(140, 255, 170, 1);
  }

  .alb-wing-l {
    position: absolute;
    left: 0;
    top: 20px;
    width: 44px;
    height: 8px;
    clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 60%);
    background: linear-gradient(270deg, rgba(0, 160, 35, 0.9), rgba(140, 255, 170, 0.7));
    border-top: 1.5px solid var(--accent, #00cc00);
    transform-origin: right center;
    transform: rotate(4deg);
    z-index: 2;
  }

  .alb-wing-r {
    position: absolute;
    right: 0;
    top: 20px;
    width: 44px;
    height: 8px;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    background: linear-gradient(90deg, rgba(0, 160, 35, 0.9), rgba(140, 255, 170, 0.7));
    border-top: 1.5px solid var(--accent, #00cc00);
    transform-origin: left center;
    transform: rotate(-4deg);
    z-index: 2;
  }

  .alb-tail {
    position: absolute;
    left: 45px;
    bottom: 2px;
    width: 8px;
    height: 8px;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    background: rgba(140, 255, 170, 0.8);
    transform: rotate(180deg);
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

  /* v2: Oceanic wandering albatross in dynamic soaring with high-aspect wings,
     sapphire rolling swells, and pink hooked bill */
  .albc {
    width: 118px;
    height: 96px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Sapphire ocean swell horizons */
  .albc-swell {
    position: absolute;
    left: -10px;
    bottom: 8px;
    width: 138px;
    height: 16px;
    border-top: 2px solid #38bdf8;
    box-shadow: 0 0 8px #0284c7;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    animation: albc-swell-drift 6s ease-in-out infinite;
  }

  @keyframes albc-swell-drift {
    0%, 100% { transform: translateX(0) scaleY(1); }
    50% { transform: translateX(12px) scaleY(1.3); }
  }

  /* Soaring bird carrier */
  .albc-soar {
    position: absolute;
    left: 10px;
    top: 24px;
    width: 98px;
    height: 48px;
    animation: albc-dynamic-soar 6.5s ease-in-out infinite;
  }

  @keyframes albc-dynamic-soar {
    0% { transform: translate(0, 18px) rotate(14deg) scale(0.9); }
    28% { transform: translate(32px, -12px) rotate(-16deg) scale(1.1); }
    50% { transform: translate(50px, -4px) rotate(-8deg) scale(1.05); }
    75% { transform: translate(22px, 14px) rotate(18deg) scale(0.95); }
    100% { transform: translate(0, 18px) rotate(14deg) scale(0.9); }
  }

  /* Pure white fuselage body */
  .albc-body {
    position: absolute;
    left: 42px;
    top: 18px;
    width: 14px;
    height: 24px;
    border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
    background: radial-gradient(circle at 40% 40%, #ffffff 0%, #cbd5e1 70%, #94a3b8 100%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  /* Head with pink hooked bill */
  .albc-head {
    position: absolute;
    left: 45px;
    top: 6px;
    width: 8px;
    height: 14px;
    border-radius: 4px 4px 0 0;
    background: #ffffff;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
    z-index: 4;
  }

  .albc-beak {
    position: absolute;
    left: 2px;
    top: -4px;
    width: 4px;
    height: 6px;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    background: #fb7185;
    box-shadow: 0 0 2px #f43f5e;
  }

  /* Locked high-aspect wings with black tips */
  .albc-wing-l {
    position: absolute;
    left: 0;
    top: 20px;
    width: 44px;
    height: 8px;
    clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 60%);
    background: linear-gradient(270deg, #09090b 0%, #475569 40%, #ffffff 100%);
    border-top: 1.5px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    transform-origin: right center;
    transform: rotate(4deg);
    z-index: 2;
  }

  .albc-wing-r {
    position: absolute;
    right: 0;
    top: 20px;
    width: 44px;
    height: 8px;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    background: linear-gradient(90deg, #09090b 0%, #475569 40%, #ffffff 100%);
    border-top: 1.5px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    transform-origin: left center;
    transform: rotate(-4deg);
    z-index: 2;
  }

  /* Tail */
  .albc-tail {
    position: absolute;
    left: 45px;
    bottom: 2px;
    width: 8px;
    height: 8px;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    background: #09090b;
    transform: rotate(180deg);
  }
  `,
};

const albatrossMarkup = {
  v1: `
      <div class="alb">
        <div class="alb-swell"></div>
        <div class="alb-soar">
          <div class="alb-head">
            <div class="alb-beak"></div>
          </div>
          <div class="alb-body"></div>
          <div class="alb-tail"></div>
          <div class="alb-wing-l"></div>
          <div class="alb-wing-r"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="albc">
        <div class="albc-swell"></div>
        <div class="albc-soar">
          <div class="albc-head">
            <div class="albc-beak"></div>
          </div>
          <div class="albc-body"></div>
          <div class="albc-tail"></div>
          <div class="albc-wing-l"></div>
          <div class="albc-wing-r"></div>
        </div>
      </div>
    `,
};

class ConceptAlbatross extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${albatrossStyles[version] || albatrossStyles.v2}</style>${albatrossMarkup[version] || albatrossMarkup.v2}`;
  }
}

if (!customElements.get('concept-albatross')) {
  customElements.define('concept-albatross', ConceptAlbatross);
}
