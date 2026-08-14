const snowfallStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .snow {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #01090363 55%, #041106 100%);
  }

  .snow-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 14px;
    background: linear-gradient(180deg, rgba(200, 255, 210, 0.5), rgba(120, 230, 150, 0.22));
    border-radius: 60% 40% 0 0 / 100% 70% 0 0;
    box-shadow: 0 -3px 8px rgba(160, 255, 190, 0.2);
    animation: snow-ground 9s ease-in-out infinite;
  }

  .snow-ground::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 58px;
    width: 52px;
    height: 10px;
    border-radius: 50% 50% 0 0;
    background: rgba(190, 255, 205, 0.35);
  }

  .snow-flake {
    position: absolute;
    top: -8px;
    border-radius: 50%;
    background: #d8ffe2;
    box-shadow: 0 0 5px rgba(200, 255, 215, 0.7);
    animation-name: snow-fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .snow-flake.f1 { left: 8px;  width: 3px; height: 3px; --sway: 7px;  animation-duration: 4.2s; animation-delay: -0.4s; }
  .snow-flake.f2 { left: 22px; width: 2px; height: 2px; --sway: -6px; animation-duration: 5.6s; animation-delay: -2.7s; opacity: 0.7; }
  .snow-flake.f3 { left: 37px; width: 4px; height: 4px; --sway: 9px;  animation-duration: 3.6s; animation-delay: -1.5s; }
  .snow-flake.f4 { left: 52px; width: 2px; height: 2px; --sway: -8px; animation-duration: 6.2s; animation-delay: -4.1s; opacity: 0.6; }
  .snow-flake.f5 { left: 66px; width: 3px; height: 3px; --sway: 6px;  animation-duration: 4.8s; animation-delay: -3.2s; }
  .snow-flake.f6 { left: 80px; width: 2px; height: 2px; --sway: -5px; animation-duration: 5.2s; animation-delay: -0.9s; opacity: 0.75; }
  .snow-flake.f7 { left: 92px; width: 3px; height: 3px; --sway: 8px;  animation-duration: 4.4s; animation-delay: -2.2s; }
  .snow-flake.f8 { left: 46px; width: 2px; height: 2px; --sway: 5px;  animation-duration: 6.8s; animation-delay: -5.6s; opacity: 0.5; }

  @keyframes snow-fall {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    8% {
      opacity: 1;
    }
    50% {
      transform: translate(var(--sway, 6px), 52px);
    }
    92% {
      opacity: 1;
    }
    100% {
      transform: translate(calc(var(--sway, 6px) * -0.4), 100px);
      opacity: 0;
    }
  }

  @keyframes snow-ground {
    0%, 100% { transform: translateY(1.5px); }
    50% { transform: translateY(0); }
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

  /* v2: Winter twilight snowfall with deep indigo-violet atmosphere,
     crystalline white snowflakes, and soft frosted snowdrifts */
  .snowc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 30%, #312e81 0%, #1e1b4b 50%, #0f172a 100%);
    border-radius: 6px;
  }

  /* Soft frosted snowdrifts */
  .snowc-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 14px;
    background: linear-gradient(180deg, #ffffff 0%, #bae6fd 60%, #38bdf8 100%);
    border-radius: 60% 40% 0 0 / 100% 70% 0 0;
    box-shadow: 0 -2px 10px rgba(186, 230, 253, 0.5);
    animation: snowc-ground 9s ease-in-out infinite;
  }

  .snowc-ground::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 58px;
    width: 52px;
    height: 10px;
    border-radius: 50% 50% 0 0;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 -2px 6px rgba(186, 230, 253, 0.4);
  }

  /* Swirling crystalline snowflakes */
  .snowc-flake {
    position: absolute;
    top: -8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #cffafe, 0 0 10px #38bdf8;
    animation-name: snowc-fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .snowc-flake.f1 { left: 8px;  width: 3px; height: 3px; --sway: 7px;  animation-duration: 4.2s; animation-delay: -0.4s; }
  .snowc-flake.f2 { left: 22px; width: 2px; height: 2px; --sway: -6px; animation-duration: 5.6s; animation-delay: -2.7s; opacity: 0.75; }
  .snowc-flake.f3 { left: 37px; width: 4px; height: 4px; --sway: 9px;  animation-duration: 3.6s; animation-delay: -1.5s; }
  .snowc-flake.f4 { left: 52px; width: 2px; height: 2px; --sway: -8px; animation-duration: 6.2s; animation-delay: -4.1s; opacity: 0.65; }
  .snowc-flake.f5 { left: 66px; width: 3px; height: 3px; --sway: 6px;  animation-duration: 4.8s; animation-delay: -3.2s; }
  .snowc-flake.f6 { left: 80px; width: 2px; height: 2px; --sway: -5px; animation-duration: 5.2s; animation-delay: -0.9s; opacity: 0.8; }
  .snowc-flake.f7 { left: 92px; width: 3px; height: 3px; --sway: 8px;  animation-duration: 4.4s; animation-delay: -2.2s; }
  .snowc-flake.f8 { left: 46px; width: 2px; height: 2px; --sway: 5px;  animation-duration: 6.8s; animation-delay: -5.6s; opacity: 0.55; }

  @keyframes snowc-fall {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    8% {
      opacity: 1;
    }
    50% {
      transform: translate(var(--sway, 6px), 52px);
    }
    92% {
      opacity: 1;
    }
    100% {
      transform: translate(calc(var(--sway, 6px) * -0.4), 100px);
      opacity: 0;
    }
  }

  @keyframes snowc-ground {
    0%, 100% { transform: translateY(1.5px); }
    50% { transform: translateY(0); }
  }
  `,
};

const snowfallMarkup = {
  v1: `
      <div class="snow">
        <div class="snow-flake f1"></div>
        <div class="snow-flake f2"></div>
        <div class="snow-flake f3"></div>
        <div class="snow-flake f4"></div>
        <div class="snow-flake f5"></div>
        <div class="snow-flake f6"></div>
        <div class="snow-flake f7"></div>
        <div class="snow-flake f8"></div>
        <div class="snow-ground"></div>
      </div>
    `,
  v2: `
      <div class="snowc">
        <div class="snowc-flake f1"></div>
        <div class="snowc-flake f2"></div>
        <div class="snowc-flake f3"></div>
        <div class="snowc-flake f4"></div>
        <div class="snowc-flake f5"></div>
        <div class="snowc-flake f6"></div>
        <div class="snowc-flake f7"></div>
        <div class="snowc-flake f8"></div>
        <div class="snowc-ground"></div>
      </div>
    `,
};

class ConceptSnowfall extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${snowfallStyles[version] || snowfallStyles.v2}</style>${snowfallMarkup[version] || snowfallMarkup.v2}`;
  }
}

if (!customElements.get('concept-snowfall')) {
  customElements.define('concept-snowfall', ConceptSnowfall);
}
