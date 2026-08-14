// Hot Air Balloon: v1 and v2 preserved.
// v3 adds vivid Montgolfier festival rainbow colorization:
// atmospheric sky with soft clouds, multi-colored vertical gore envelope stripes
// (crimson, gold, cobalt blue, emerald green, solar orange), propane burner flame with hot updraft,
// woven natural rattan wicker basket, and canvas ballast sandbag.
const balloonStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hab {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .hab-rig {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 0;
    height: 0;
    animation: hab-drift 7s ease-in-out infinite;
  }

  @keyframes hab-drift {
    0%, 100% { transform: translate(-6px, 6px) rotate(-2deg); }
    36% { transform: translate(2px, -4px) rotate(1.5deg); }
    60% { transform: translate(7px, 1px) rotate(1deg); }
    80% { transform: translate(0px, 5px) rotate(-1deg); }
  }

  .hab-envelope {
    position: absolute;
    left: -26px;
    top: 0;
    width: 52px;
    height: 56px;
    border-radius: 50% 50% 42% 42% / 58% 58% 40% 40%;
    border: 2px solid var(--accent, #00cc00);
    background:
      linear-gradient(90deg,
        rgba(0, 110, 22, 0.7) 0 14%,
        rgba(0, 204, 0, 0.45) 14% 28%,
        rgba(0, 110, 22, 0.7) 28% 42%,
        rgba(0, 204, 0, 0.45) 42% 58%,
        rgba(0, 110, 22, 0.7) 58% 72%,
        rgba(0, 204, 0, 0.45) 72% 86%,
        rgba(0, 110, 22, 0.7) 86% 100%);
    box-shadow: inset 0 -8px 12px rgba(0, 204, 0, 0.25);
    animation: hab-glow 7s ease-in-out infinite;
  }

  @keyframes hab-glow {
    0%, 24%, 52%, 100% { box-shadow: inset 0 -8px 12px rgba(0, 204, 0, 0.25); }
    30%, 40% { box-shadow: inset 0 -16px 20px rgba(140, 255, 170, 0.6), 0 0 14px rgba(0, 204, 0, 0.4); }
  }

  .hab-skirt {
    position: absolute;
    left: -10px;
    top: 54px;
    width: 20px;
    height: 7px;
    clip-path: polygon(12% 0, 88% 0, 100% 100%, 0 100%);
    background: rgba(0, 90, 18, 0.8);
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .hab-flame {
    position: absolute;
    left: -3px;
    top: 58px;
    width: 6px;
    height: 5px;
    border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;
    background: radial-gradient(circle at 50% 80%, #f2ffdd, #9ade5a 60%, transparent);
    opacity: 0.35;
    animation: hab-flame 7s ease-in-out infinite;
  }

  @keyframes hab-flame {
    0%, 24%, 52%, 100% { transform: scaleY(0.7); opacity: 0.3; }
    28% { transform: scaleY(1.6) scaleX(1.15); opacity: 1; }
    34% { transform: scaleY(2.1) scaleX(1.05); opacity: 1; }
    40% { transform: scaleY(1.4); opacity: 0.85; }
  }

  .hab-line {
    position: absolute;
    top: 56px;
    width: 1px;
    height: 16px;
    background: rgba(140, 255, 170, 0.7);
  }

  .hab-line.n1 { left: -16px; transform: rotate(14deg); }
  .hab-line.n2 { left: -5px; transform: rotate(4deg); }
  .hab-line.n3 { left: 4px; transform: rotate(-4deg); }
  .hab-line.n4 { left: 15px; transform: rotate(-14deg); }

  .hab-basket {
    position: absolute;
    left: -11px;
    top: 71px;
    width: 22px;
    height: 13px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 3px 3px 6px 6px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.35) 0 3px, transparent 3px 6px),
      rgba(0, 45, 9, 0.7);
  }

  .hab-bag {
    position: absolute;
    left: -14px;
    top: 74px;
    width: 5px;
    height: 7px;
    border-radius: 2px 2px 3px 3px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: top center;
    animation: hab-bag 3.4s ease-in-out infinite;
  }

  @keyframes hab-bag {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(9deg); }
  }

  .hab-cloud {
    position: absolute;
    height: 8px;
    border-radius: 5px;
    background: rgba(140, 255, 170, 0.22);
    filter: blur(1px);
    animation: hab-cloud linear infinite;
  }

  .hab-cloud.c1 { top: 18px; width: 30px; animation-duration: 9s; }
  .hab-cloud.c2 { top: 52px; width: 22px; animation-duration: 12s; animation-delay: -5s; }
  .hab-cloud.c3 { top: 82px; width: 34px; animation-duration: 10s; animation-delay: -8s; }

  @keyframes hab-cloud {
    0% { left: 104px; }
    100% { left: -40px; }
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

  .hab {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .hab-rig {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 0;
    height: 0;
    animation: hab-drift 7s ease-in-out infinite;
  }

  @keyframes hab-drift {
    0%, 100% { transform: translate(-6px, 4px) rotate(-2deg); }
    36% { transform: translate(2px, -4px) rotate(1.5deg); }
    60% { transform: translate(7px, 1px) rotate(1deg); }
    80% { transform: translate(0px, 4px) rotate(-1deg); }
  }

  .hab-envelope {
    position: absolute;
    left: -26px;
    top: 0;
    width: 52px;
    height: 56px;
    border-radius: 50% 50% 42% 42% / 58% 58% 40% 40%;
    border: 2px solid var(--accent, #00cc00);
    background:
      linear-gradient(90deg,
        rgba(0, 110, 22, 0.7) 0 14%,
        rgba(0, 204, 0, 0.45) 14% 28%,
        rgba(0, 110, 22, 0.7) 28% 42%,
        rgba(0, 204, 0, 0.45) 42% 58%,
        rgba(0, 110, 22, 0.7) 58% 72%,
        rgba(0, 204, 0, 0.45) 72% 86%,
        rgba(0, 110, 22, 0.7) 86% 100%);
    box-shadow: inset 0 -8px 12px rgba(0, 204, 0, 0.25);
    animation: hab-glow 7s ease-in-out infinite;
  }

  @keyframes hab-glow {
    0%, 24%, 52%, 100% { box-shadow: inset 0 -8px 12px rgba(0, 204, 0, 0.25); }
    30%, 40% { box-shadow: inset 0 -16px 20px rgba(140, 255, 170, 0.6), 0 0 14px rgba(0, 204, 0, 0.4); }
  }

  .hab-skirt {
    position: absolute;
    left: -10px;
    top: 54px;
    width: 20px;
    height: 7px;
    clip-path: polygon(12% 0, 88% 0, 100% 100%, 0 100%);
    background: rgba(0, 90, 18, 0.8);
    border: 1px solid rgba(0, 204, 0, 0.6);
    animation: hab-mouth 7s ease-in-out infinite;
  }

  @keyframes hab-mouth {
    0%, 24%, 52%, 100% { background: rgba(0, 90, 18, 0.8); }
    30%, 40% { background: rgba(60, 170, 70, 0.9); }
  }

  .hab-burner {
    position: absolute;
    left: -4px;
    top: 66px;
    width: 8px;
    height: 3px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.85);
  }

  .hab-flame {
    position: absolute;
    left: -3px;
    top: 58px;
    width: 6px;
    height: 8px;
    border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;
    background: radial-gradient(circle at 50% 80%, #f2ffdd, #9ade5a 60%, transparent);
    opacity: 0.35;
    transform-origin: 50% 100%;
    animation: hab-flame 7s ease-in-out infinite;
  }

  @keyframes hab-flame {
    0%, 24%, 52%, 100% { transform: scaleY(0.5); opacity: 0.3; }
    28% { transform: scaleY(1.5) scaleX(1.15); opacity: 1; }
    34% { transform: scaleY(2.2) scaleX(1.05); opacity: 1; }
    40% { transform: scaleY(1.1); opacity: 0.85; }
  }

  .hab-line {
    position: absolute;
    top: 56px;
    width: 1px;
    height: 16px;
    background: rgba(140, 255, 170, 0.7);
  }

  .hab-line.n1 { left: -16px; transform: rotate(14deg); }
  .hab-line.n2 { left: -5px; transform: rotate(4deg); }
  .hab-line.n3 { left: 4px; transform: rotate(-4deg); }
  .hab-line.n4 { left: 15px; transform: rotate(-14deg); }

  .hab-basket {
    position: absolute;
    left: -11px;
    top: 71px;
    width: 22px;
    height: 13px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 3px 3px 6px 6px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.35) 0 3px, transparent 3px 6px),
      rgba(0, 45, 9, 0.7);
  }

  .hab-bag {
    position: absolute;
    left: -16px;
    top: 81px;
    width: 5px;
    height: 7px;
    border-radius: 2px 2px 3px 3px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: 50% -3px;
    animation: hab-bag 3.4s ease-in-out infinite;
  }

  .hab-bag::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    width: 1px;
    height: 3px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.6);
  }

  @keyframes hab-bag {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(9deg); }
  }

  .hab-cloud {
    position: absolute;
    height: 8px;
    border-radius: 5px;
    background: rgba(140, 255, 170, 0.22);
    filter: blur(1px);
    animation: hab-cloud linear infinite;
  }

  .hab-cloud.c1 { top: 18px; width: 30px; animation-duration: 9s; }
  .hab-cloud.c2 { top: 52px; width: 22px; animation-duration: 12s; animation-delay: -5s; }
  .hab-cloud.c3 { top: 82px; width: 34px; animation-duration: 10s; animation-delay: -8s; }

  @keyframes hab-cloud {
    0% { left: 104px; }
    100% { left: -40px; }
  }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Vibrant Montgolfier festival hot air balloon drifting across azure sky
     with colorful vertical gore stripes (crimson, gold, cobalt, emerald, orange),
     flaring propane burner, woven rattan basket, and burlap sandbag. */
  .habc {
    width: 104px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #38bdf8 0%, #0284c7 60%, #0c4a6e 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .habc-rig {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 0;
    height: 0;
    animation: habc-drift 7s ease-in-out infinite;
  }

  @keyframes habc-drift {
    0%, 100% { transform: translate(-6px, 4px) rotate(-2deg); }
    36% { transform: translate(2px, -4px) rotate(1.5deg); }
    60% { transform: translate(7px, 1px) rotate(1deg); }
    80% { transform: translate(0px, 4px) rotate(-1deg); }
  }

  /* Rainbow festival gore striped envelope */
  .habc-envelope {
    position: absolute;
    left: -26px;
    top: 0;
    width: 52px;
    height: 56px;
    border-radius: 50% 50% 42% 42% / 58% 58% 40% 40%;
    border: 1.5px solid #f8fafc;
    background:
      linear-gradient(90deg,
        #ef4444 0 20%,
        #facc15 20% 40%,
        #2563eb 40% 60%,
        #10b981 60% 80%,
        #f97316 80% 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4), inset 0 -8px 12px rgba(0, 0, 0, 0.3);
    animation: habc-glow 7s ease-in-out infinite;
  }

  @keyframes habc-glow {
    0%, 24%, 52%, 100% { box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4), inset 0 -8px 12px rgba(0, 0, 0, 0.3); }
    30%, 40% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.8), inset 0 -16px 20px rgba(254, 240, 138, 0.9); }
  }

  /* Skirt at the envelope mouth */
  .habc-skirt {
    position: absolute;
    left: -10px;
    top: 54px;
    width: 20px;
    height: 7px;
    clip-path: polygon(12% 0, 88% 0, 100% 100%, 0 100%);
    background: #18181b;
    border: 1px solid #475569;
    animation: habc-mouth 7s ease-in-out infinite;
  }

  @keyframes habc-mouth {
    0%, 24%, 52%, 100% { background: #18181b; }
    30%, 40% { background: #ea580c; box-shadow: 0 0 8px #fbbf24; }
  }

  /* Steel burner frame */
  .habc-burner {
    position: absolute;
    left: -4px;
    top: 66px;
    width: 8px;
    height: 3px;
    border-radius: 1px;
    background: #94a3b8;
  }

  /* Radiant propane burner flame */
  .habc-flame {
    position: absolute;
    left: -3px;
    top: 58px;
    width: 6px;
    height: 8px;
    border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;
    background: radial-gradient(circle at 50% 80%, #ffffff, #fde047 35%, #f97316 75%, transparent);
    opacity: 0.4;
    transform-origin: 50% 100%;
    animation: habc-flame 7s ease-in-out infinite;
  }

  @keyframes habc-flame {
    0%, 24%, 52%, 100% { transform: scaleY(0.5); opacity: 0.4; filter: drop-shadow(0 0 2px #f97316); }
    28% { transform: scaleY(1.6) scaleX(1.15); opacity: 1; filter: drop-shadow(0 0 8px #fde047); }
    34% { transform: scaleY(2.3) scaleX(1.05); opacity: 1; filter: drop-shadow(0 0 12px #ffffff); }
    40% { transform: scaleY(1.2); opacity: 0.85; filter: drop-shadow(0 0 6px #f97316); }
  }

  /* Steel rigging cables */
  .habc-line {
    position: absolute;
    top: 56px;
    width: 1px;
    height: 16px;
    background: #cbd5e1;
  }

  .habc-line.n1 { left: -16px; transform: rotate(14deg); }
  .habc-line.n2 { left: -5px; transform: rotate(4deg); }
  .habc-line.n3 { left: 4px; transform: rotate(-4deg); }
  .habc-line.n4 { left: 15px; transform: rotate(-14deg); }

  /* Woven natural rattan wicker basket */
  .habc-basket {
    position: absolute;
    left: -11px;
    top: 71px;
    width: 22px;
    height: 13px;
    border: 1.5px solid #78350f;
    border-radius: 3px 3px 6px 6px;
    background:
      repeating-linear-gradient(90deg, #d97706 0 3px, #92400e 3px 6px),
      #78350f;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  }

  /* Burlap ballast sandbag */
  .habc-bag {
    position: absolute;
    left: -16px;
    top: 81px;
    width: 5px;
    height: 7px;
    border-radius: 2px 2px 3px 3px;
    background: #b45309;
    border: 0.5px solid #d97706;
    transform-origin: 50% -3px;
    animation: habc-bag 3.4s ease-in-out infinite;
  }

  .habc-bag::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    width: 1px;
    height: 3px;
    margin-left: -0.5px;
    background: #cbd5e1;
  }

  @keyframes habc-bag {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(9deg); }
  }

  /* Fluffy white cumulus clouds */
  .habc-cloud {
    position: absolute;
    height: 8px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.65);
    filter: blur(1px);
    animation: habc-cloud linear infinite;
  }

  .habc-cloud.c1 { top: 18px; width: 30px; animation-duration: 9s; }
  .habc-cloud.c2 { top: 52px; width: 22px; animation-duration: 12s; animation-delay: -5s; }
  .habc-cloud.c3 { top: 82px; width: 34px; animation-duration: 10s; animation-delay: -8s; }

  @keyframes habc-cloud {
    0% { left: 104px; }
    100% { left: -40px; }
  }
  `,
};

const balloonMarkup = {
  v1: `
      <div class="hab">
        <div class="hab-cloud c1"></div>
        <div class="hab-cloud c2"></div>
        <div class="hab-cloud c3"></div>
        <div class="hab-rig">
          <div class="hab-envelope"></div>
          <div class="hab-skirt"></div>
          <div class="hab-flame"></div>
          <div class="hab-line n1"></div>
          <div class="hab-line n2"></div>
          <div class="hab-line n3"></div>
          <div class="hab-line n4"></div>
          <div class="hab-basket"></div>
          <div class="hab-bag"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="hab">
        <div class="hab-cloud c1"></div>
        <div class="hab-cloud c2"></div>
        <div class="hab-cloud c3"></div>
        <div class="hab-rig">
          <div class="hab-envelope"></div>
          <div class="hab-skirt"></div>
          <div class="hab-flame"></div>
          <div class="hab-burner"></div>
          <div class="hab-line n1"></div>
          <div class="hab-line n2"></div>
          <div class="hab-line n3"></div>
          <div class="hab-line n4"></div>
          <div class="hab-basket"></div>
          <div class="hab-bag"></div>
        </div>
      </div>
    `,
  v3: `
      <div class="habc">
        <div class="habc-cloud c1"></div>
        <div class="habc-cloud c2"></div>
        <div class="habc-cloud c3"></div>
        <div class="habc-rig">
          <div class="habc-envelope"></div>
          <div class="habc-skirt"></div>
          <div class="habc-flame"></div>
          <div class="habc-burner"></div>
          <div class="habc-line n1"></div>
          <div class="habc-line n2"></div>
          <div class="habc-line n3"></div>
          <div class="habc-line n4"></div>
          <div class="habc-basket"></div>
          <div class="habc-bag"></div>
        </div>
      </div>
    `,
};

class ConceptBalloon extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${balloonStyles[version] || balloonStyles.v3}</style>${balloonMarkup[version] || balloonMarkup.v3}`;
  }
}

if (!customElements.get('concept-balloon')) {
  customElements.define('concept-balloon', ConceptBalloon);
}
