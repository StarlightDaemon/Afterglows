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
    height: 18px;
    background: linear-gradient(180deg, #ffffff, rgba(0, 204, 0, 0.4));
    border-radius: 60% 40% 0 0 / 100% 70% 0 0;
    box-shadow: 0 -3px 12px rgba(0, 255, 100, 0.5);
    animation: snow-ground 1.6s ease-in-out infinite alternate;
  }

  .snow-ground::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 54px;
    width: 52px;
    height: 12px;
    border-radius: 50% 50% 0 0;
    background: #00ff66;
  }

  .snow-flake {
    position: absolute;
    top: -12px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #00ff66;
    box-shadow: 0 0 8px #00ff66;
    animation-name: snow-fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .snow-flake.f1 { left: 8px;  width: 10px; height: 10px; --sway: 18px;  animation-duration: 1.4s; animation-delay: 0s; }
  .snow-flake.f2 { left: 22px; width: 8px;  height: 8px;  --sway: -16px; animation-duration: 1.6s; animation-delay: -0.4s; }
  .snow-flake.f3 { left: 37px; width: 12px; height: 12px; --sway: 20px;  animation-duration: 1.2s; animation-delay: -0.8s; }
  .snow-flake.f4 { left: 52px; width: 8px;  height: 8px;  --sway: -18px; animation-duration: 1.5s; animation-delay: -1.0s; }
  .snow-flake.f5 { left: 66px; width: 10px; height: 10px; --sway: 16px;  animation-duration: 1.3s; animation-delay: -0.3s; }
  .snow-flake.f6 { left: 80px; width: 8px;  height: 8px;  --sway: -14px; animation-duration: 1.7s; animation-delay: -0.7s; }
  .snow-flake.f7 { left: 92px; width: 10px; height: 10px; --sway: 18px;  animation-duration: 1.4s; animation-delay: -0.5s; }
  .snow-flake.f8 { left: 46px; width: 8px;  height: 8px;  --sway: 14px;  animation-duration: 1.8s; animation-delay: -1.2s; }

  @keyframes snow-fall {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: translate(var(--sway, 16px), 54px) rotate(180deg);
    }
    100% {
      transform: translate(calc(var(--sway, 16px) * -0.6), 110px) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes snow-ground {
    0% { transform: translateY(4px) scaleY(0.85); }
    100% { transform: translateY(-3px) scaleY(1.15); }
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

  /* v2: Winter twilight snowfall with deep indigo-violet atmosphere */
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
    height: 18px;
    background: linear-gradient(180deg, #ffffff 0%, #bae6fd 60%, #38bdf8 100%);
    border-radius: 60% 40% 0 0 / 100% 70% 0 0;
    box-shadow: 0 -2px 12px rgba(186, 230, 253, 0.7);
    animation: snowc-ground 1.6s ease-in-out infinite alternate;
  }

  .snowc-ground::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 54px;
    width: 52px;
    height: 12px;
    border-radius: 50% 50% 0 0;
    background: #ffffff;
    box-shadow: 0 -2px 8px rgba(186, 230, 253, 0.6);
  }

  /* Swirling crystalline snowflakes */
  .snowc-flake {
    position: absolute;
    top: -12px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #38bdf8;
    box-shadow: 0 0 8px #cffafe, 0 0 12px #38bdf8;
    animation-name: snowc-fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .snowc-flake.f1 { left: 8px;  width: 10px; height: 10px; --sway: 18px;  animation-duration: 1.4s; animation-delay: 0s; }
  .snowc-flake.f2 { left: 22px; width: 8px;  height: 8px;  --sway: -16px; animation-duration: 1.6s; animation-delay: -0.4s; }
  .snowc-flake.f3 { left: 37px; width: 12px; height: 12px; --sway: 20px;  animation-duration: 1.2s; animation-delay: -0.8s; }
  .snowc-flake.f4 { left: 52px; width: 8px;  height: 8px;  --sway: -18px; animation-duration: 1.5s; animation-delay: -1.0s; }
  .snowc-flake.f5 { left: 66px; width: 10px; height: 10px; --sway: 16px;  animation-duration: 1.3s; animation-delay: -0.3s; }
  .snowc-flake.f6 { left: 80px; width: 8px;  height: 8px;  --sway: -14px; animation-duration: 1.7s; animation-delay: -0.7s; }
  .snowc-flake.f7 { left: 92px; width: 10px; height: 10px; --sway: 18px;  animation-duration: 1.4s; animation-delay: -0.5s; }
  .snowc-flake.f8 { left: 46px; width: 8px;  height: 8px;  --sway: 14px;  animation-duration: 1.8s; animation-delay: -1.2s; }

  @keyframes snowc-fall {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: translate(var(--sway, 16px), 54px) rotate(180deg);
    }
    100% {
      transform: translate(calc(var(--sway, 16px) * -0.6), 110px) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes snowc-ground {
    0% { transform: translateY(4px) scaleY(0.85); }
    100% { transform: translateY(-3px) scaleY(1.15); }
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
