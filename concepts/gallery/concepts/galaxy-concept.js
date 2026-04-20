const galaxyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .galaxy-basic {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    animation: gal-spin 4s linear infinite;
  }

  .galaxy-basic-arm {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-top: 2px solid #00cc00;
    transform-origin: 0 0;
  }

  .galaxy-basic-arm.arm2 {
    transform: rotate(180deg);
  }

  .galaxy-spiral {
    position: relative;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    overflow: hidden;
    background:
      radial-gradient(circle at center, rgba(210, 255, 220, 0.16) 0 10%, rgba(110, 255, 145, 0.1) 11% 18%, rgba(8, 22, 10, 0.96) 19% 44%, rgba(0, 0, 0, 0.98) 74%),
      radial-gradient(circle at 22% 24%, rgba(130, 255, 160, 0.08), transparent 26%),
      radial-gradient(circle at 76% 68%, rgba(130, 255, 160, 0.06), transparent 28%);
    box-shadow: inset 0 0 18px rgba(110, 255, 145, 0.12), 0 0 12px rgba(0, 204, 0, 0.08);
  }

  .galaxy-spiral::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 14% 18%, rgba(220, 255, 225, 0.85) 0 1px, transparent 1.7px),
      radial-gradient(circle at 24% 72%, rgba(220, 255, 225, 0.7) 0 1px, transparent 1.6px),
      radial-gradient(circle at 82% 22%, rgba(220, 255, 225, 0.72) 0 1px, transparent 1.6px),
      radial-gradient(circle at 72% 84%, rgba(220, 255, 225, 0.65) 0 1px, transparent 1.6px),
      radial-gradient(circle at 88% 58%, rgba(220, 255, 225, 0.55) 0 1px, transparent 1.6px),
      radial-gradient(circle at 42% 10%, rgba(220, 255, 225, 0.45) 0 1px, transparent 1.6px);
    opacity: 0.7;
    pointer-events: none;
  }

  .galaxy-disc-v2 {
    position: absolute;
    inset: 6px;
    animation: gal-spin 17s linear infinite;
    transform-origin: center;
  }

  .galaxy-svg-v2 {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .galaxy-path-v2 {
    fill: none;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px rgba(120, 255, 150, 0.2));
    animation: galaxy-arm 5.5s ease-in-out infinite;
  }

  .galaxy-path-v2.main {
    stroke: rgba(165, 255, 185, 0.62);
    stroke-width: 3.6;
  }

  .galaxy-path-v2.sub {
    stroke: rgba(120, 255, 155, 0.38);
    stroke-width: 2.1;
    stroke-dasharray: 1.4 4.8;
    animation-duration: 4.2s;
  }

  .galaxy-path-v2.p2 { animation-delay: -1.1s; }
  .galaxy-path-v2.p3 { animation-delay: -2.2s; }
  .galaxy-path-v2.p4 { animation-delay: -3.3s; }
  .galaxy-path-v2.p5 { animation-delay: -0.7s; }
  .galaxy-path-v2.p6 { animation-delay: -1.8s; }

  .galaxy-stars-v2 {
    animation: gal-spin 13s linear infinite reverse;
    transform-origin: center;
  }

  .galaxy-stars-v2 circle {
    fill: rgba(238, 255, 240, 0.95);
    filter: drop-shadow(0 0 3px rgba(170, 255, 190, 0.5));
    transform-box: fill-box;
    transform-origin: center;
    animation: galaxy-star 2.8s ease-in-out infinite;
  }

  .galaxy-stars-v2 .s2 { animation-delay: -0.8s; }
  .galaxy-stars-v2 .s3 { animation-delay: -1.5s; }
  .galaxy-stars-v2 .s4 { animation-delay: -2.1s; }
  .galaxy-stars-v2 .s5 { animation-delay: -0.4s; }
  .galaxy-stars-v2 .s6 { animation-delay: -1.9s; }
  .galaxy-stars-v2 .s7 { animation-delay: -1.2s; }
  .galaxy-stars-v2 .s8 { animation-delay: -2.5s; }

  .galaxy-core-v2 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(245, 255, 245, 0.98) 0 18%, rgba(190, 255, 200, 0.96) 19% 42%, rgba(105, 255, 145, 0.5) 43% 68%, transparent 69%);
    box-shadow: 0 0 16px rgba(175, 255, 190, 0.6);
    animation: galaxy-core 3.4s ease-in-out infinite;
  }

  .galaxy {
    position: relative;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    overflow: hidden;
    background:
      radial-gradient(circle at center, rgba(225, 255, 232, 0.18) 0 8%, rgba(118, 255, 150, 0.12) 9% 16%, rgba(11, 26, 13, 0.97) 17% 48%, rgba(0, 0, 0, 0.99) 76%),
      radial-gradient(ellipse at center, rgba(88, 255, 138, 0.08) 0 42%, transparent 72%);
    box-shadow: inset 0 0 24px rgba(110, 255, 145, 0.12), 0 0 12px rgba(0, 204, 0, 0.08);
  }

  .galaxy::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 14% 18%, rgba(220, 255, 225, 0.72) 0 1px, transparent 1.6px),
      radial-gradient(circle at 24% 72%, rgba(220, 255, 225, 0.62) 0 1px, transparent 1.6px),
      radial-gradient(circle at 82% 22%, rgba(220, 255, 225, 0.66) 0 1px, transparent 1.6px),
      radial-gradient(circle at 72% 84%, rgba(220, 255, 225, 0.6) 0 1px, transparent 1.6px),
      radial-gradient(circle at 88% 58%, rgba(220, 255, 225, 0.48) 0 1px, transparent 1.6px),
      radial-gradient(circle at 42% 10%, rgba(220, 255, 225, 0.4) 0 1px, transparent 1.6px),
      radial-gradient(circle at 63% 17%, rgba(220, 255, 225, 0.32) 0 1px, transparent 1.6px),
      radial-gradient(circle at 17% 58%, rgba(220, 255, 225, 0.3) 0 1px, transparent 1.6px);
    opacity: 0.55;
    pointer-events: none;
  }

  .galaxy::after {
    content: '';
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(90, 255, 138, 0.06) 0 34%, rgba(90, 255, 138, 0.02) 35% 62%, transparent 76%);
    filter: blur(1px);
    pointer-events: none;
  }

  .galaxy-disc {
    position: absolute;
    inset: 3px;
    animation: gal-spin 22s linear infinite;
    transform-origin: center;
  }

  .galaxy-svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .galaxy-path {
    fill: none;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px rgba(120, 255, 150, 0.2));
    animation: galaxy-arm 5.5s ease-in-out infinite;
  }

  .galaxy-path.main {
    stroke: rgba(170, 255, 190, 0.5);
    stroke-width: 2.7;
  }

  .galaxy-path.sub {
    stroke: rgba(120, 255, 155, 0.28);
    stroke-width: 1.4;
    stroke-dasharray: 1.1 4.6;
    animation-duration: 4.8s;
  }

  .galaxy-path.fine {
    stroke: rgba(205, 255, 214, 0.2);
    stroke-width: 0.9;
    stroke-dasharray: 1 5.2;
    animation-duration: 6.2s;
  }

  .galaxy-path.p2 { animation-delay: -1.1s; }
  .galaxy-path.p3 { animation-delay: -2.2s; }
  .galaxy-path.p4 { animation-delay: -3.3s; }
  .galaxy-path.p5 { animation-delay: -0.7s; }
  .galaxy-path.p6 { animation-delay: -1.8s; }

  .galaxy-stars {
    animation: gal-spin 17s linear infinite reverse;
    transform-origin: center;
  }

  .galaxy-stars circle {
    fill: rgba(238, 255, 240, 0.95);
    filter: drop-shadow(0 0 3px rgba(170, 255, 190, 0.5));
    transform-box: fill-box;
    transform-origin: center;
    animation: galaxy-star 2.8s ease-in-out infinite;
  }

  .galaxy-stars .s2 { animation-delay: -0.8s; }
  .galaxy-stars .s3 { animation-delay: -1.5s; }
  .galaxy-stars .s4 { animation-delay: -2.1s; }
  .galaxy-stars .s5 { animation-delay: -0.4s; }
  .galaxy-stars .s6 { animation-delay: -1.9s; }
  .galaxy-stars .s7 { animation-delay: -1.2s; }
  .galaxy-stars .s8 { animation-delay: -2.5s; }

  .galaxy-dust {
    animation: gal-spin 27s linear infinite;
    transform-origin: center;
  }

  .galaxy-dust circle {
    fill: rgba(182, 255, 194, 0.45);
    filter: drop-shadow(0 0 2px rgba(120, 255, 155, 0.2));
    animation: galaxy-dust 5.2s ease-in-out infinite;
  }

  .galaxy-dust .d2 { animation-delay: -0.9s; }
  .galaxy-dust .d3 { animation-delay: -1.7s; }
  .galaxy-dust .d4 { animation-delay: -2.8s; }
  .galaxy-dust .d5 { animation-delay: -3.1s; }
  .galaxy-dust .d6 { animation-delay: -4s; }
  .galaxy-dust .d7 { animation-delay: -2.2s; }
  .galaxy-dust .d8 { animation-delay: -1.2s; }
  .galaxy-dust .d9 { animation-delay: -3.7s; }
  .galaxy-dust .d10 { animation-delay: -4.4s; }

  .galaxy-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(248, 255, 248, 0.98) 0 14%, rgba(204, 255, 214, 0.96) 15% 34%, rgba(115, 255, 150, 0.5) 35% 60%, transparent 61%);
    box-shadow: 0 0 18px rgba(175, 255, 190, 0.6);
    animation: galaxy-core 3.4s ease-in-out infinite;
  }

  .galaxy-core::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 46px;
    height: 18px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(175, 255, 190, 0.3) 0 28%, rgba(175, 255, 190, 0.12) 29% 54%, transparent 72%);
    filter: blur(0.5px);
  }

  @keyframes gal-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes galaxy-arm {
    0%, 100% {
      opacity: 0.58;
      stroke-dashoffset: 0;
    }

    50% {
      opacity: 0.95;
      stroke-dashoffset: -8;
    }
  }

  @keyframes galaxy-star {
    0%, 100% {
      opacity: 0.45;
      transform: scale(0.9);
    }

    50% {
      opacity: 1;
      transform: scale(1.35);
    }
  }

  @keyframes galaxy-core {
    0%, 100% {
      transform: translate(-50%, -50%) scale(0.96);
      opacity: 0.92;
    }

    50% {
      transform: translate(-50%, -50%) scale(1.08);
      opacity: 1;
    }
  }

  @keyframes galaxy-dust {
    0%, 100% { opacity: 0.24; }
    50% { opacity: 0.72; }
  }
`;

const galaxyMarkup = {
  v1: `
    <div class="galaxy-basic">
      <div class="galaxy-basic-arm"></div>
      <div class="galaxy-basic-arm arm2"></div>
    </div>
  `,
  v2: `
    <div class="galaxy-spiral">
      <div class="galaxy-disc-v2">
        <svg class="galaxy-svg-v2" viewBox="0 0 100 100" aria-hidden="true">
          <g>
            <path class="galaxy-path-v2 main p1" d="M50 50 C61 39 79 38 87 47 C92 54 85 64 73 69 C59 75 44 70 37 61"></path>
            <path class="galaxy-path-v2 main p2" d="M50 50 C59 62 77 67 82 78 C85 85 77 89 67 87 C56 85 47 75 43 65"></path>
            <path class="galaxy-path-v2 main p3" d="M50 50 C40 60 27 73 18 69 C12 66 11 58 17 51 C24 43 35 40 44 44"></path>
            <path class="galaxy-path-v2 main p4" d="M50 50 C40 39 27 25 30 16 C33 10 42 10 50 14 C59 19 64 31 59 41"></path>
            <path class="galaxy-path-v2 sub p5" d="M50 50 C63 43 74 45 80 52 C83 56 78 62 70 65 C61 68 52 65 47 59"></path>
            <path class="galaxy-path-v2 sub p6" d="M50 50 C44 56 34 63 27 62 C22 61 20 56 23 52 C28 46 37 45 43 47"></path>
          </g>
          <g class="galaxy-stars-v2">
            <circle class="s1" cx="76" cy="41" r="1.5"></circle>
            <circle class="s2" cx="65" cy="72" r="1.4"></circle>
            <circle class="s3" cx="31" cy="67" r="1.3"></circle>
            <circle class="s4" cx="34" cy="28" r="1.2"></circle>
            <circle class="s5" cx="83" cy="54" r="1.1"></circle>
            <circle class="s6" cx="57" cy="24" r="1.2"></circle>
            <circle class="s7" cx="22" cy="52" r="1.2"></circle>
            <circle class="s8" cx="47" cy="79" r="1.1"></circle>
          </g>
        </svg>
      </div>
      <div class="galaxy-core-v2"></div>
    </div>
  `,
  v3: `
    <div class="galaxy">
      <div class="galaxy-disc">
        <svg class="galaxy-svg" viewBox="0 0 100 100" aria-hidden="true">
          <g>
            <path class="galaxy-path main p1" d="M50 50 C58 44 69 44 78 50 C87 56 87 68 77 75 C65 84 47 82 35 71 C24 61 22 48 31 39"></path>
            <path class="galaxy-path main p2" d="M50 50 C43 56 38 65 41 73 C45 83 57 87 69 83 C81 79 87 67 84 56 C82 47 74 40 65 37"></path>
            <path class="galaxy-path main p3" d="M50 50 C42 46 32 45 24 50 C15 56 14 68 24 76 C35 85 53 84 66 75 C77 67 80 57 75 48"></path>
            <path class="galaxy-path main p4" d="M50 50 C56 42 58 32 53 24 C47 15 35 13 24 20 C13 28 11 42 19 54 C25 63 35 67 44 65"></path>
            <path class="galaxy-path sub p5" d="M50 50 C59 46 68 48 74 54 C79 59 78 67 71 72 C63 78 51 77 43 70 C36 64 35 55 40 49"></path>
            <path class="galaxy-path sub p6" d="M50 50 C44 54 41 61 44 67 C48 74 57 77 66 74 C74 71 78 63 75 56 C72 50 66 46 59 45"></path>
            <path class="galaxy-path fine p2" d="M50 50 C61 45 72 49 78 57 C83 64 81 74 73 79 C64 85 49 84 40 76"></path>
            <path class="galaxy-path fine p3" d="M50 50 C42 42 30 39 21 45 C13 51 12 62 19 71 C27 80 41 83 53 79"></path>
            <path class="galaxy-path fine p4" d="M50 50 C55 40 54 29 46 21 C38 13 26 13 18 21 C12 28 11 38 16 47"></path>
          </g>
          <g class="galaxy-stars">
            <circle class="s1" cx="77" cy="52" r="1.35"></circle>
            <circle class="s2" cx="68" cy="76" r="1.2"></circle>
            <circle class="s3" cx="32" cy="74" r="1.15"></circle>
            <circle class="s4" cx="23" cy="46" r="1.1"></circle>
            <circle class="s5" cx="35" cy="24" r="1.15"></circle>
            <circle class="s6" cx="60" cy="21" r="1.15"></circle>
            <circle class="s7" cx="83" cy="62" r="1"></circle>
            <circle class="s8" cx="49" cy="84" r="1"></circle>
          </g>
          <g class="galaxy-dust">
            <circle class="d1" cx="58" cy="46" r="0.9"></circle>
            <circle class="d2" cx="63" cy="49" r="0.75"></circle>
            <circle class="d3" cx="67" cy="55" r="0.8"></circle>
            <circle class="d4" cx="61" cy="62" r="0.7"></circle>
            <circle class="d5" cx="47" cy="65" r="0.7"></circle>
            <circle class="d6" cx="40" cy="57" r="0.8"></circle>
            <circle class="d7" cx="42" cy="42" r="0.75"></circle>
            <circle class="d8" cx="51" cy="36" r="0.7"></circle>
            <circle class="d9" cx="72" cy="63" r="0.75"></circle>
            <circle class="d10" cx="30" cy="63" r="0.72"></circle>
          </g>
        </svg>
      </div>
      <div class="galaxy-core"></div>
    </div>
  `,
};

class ConceptGalaxy extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${galaxyStyles}</style>${galaxyMarkup[version] || galaxyMarkup.v3}`;
  }
}

if (!customElements.get('concept-galaxy')) {
  customElements.define('concept-galaxy', ConceptGalaxy);
}
