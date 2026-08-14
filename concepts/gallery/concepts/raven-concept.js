const ravenStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .raven {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  .raven-branch {
    position: absolute;
    bottom: 24px;
    left: 6px;
    right: 10px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(20, 70, 35, 0.9), rgba(60, 140, 80, 0.7) 55%, rgba(20, 70, 35, 0.8));
    transform: rotate(-4deg);
  }

  .raven-branch::after {
    content: '';
    position: absolute;
    right: 16px;
    top: -6px;
    width: 14px;
    height: 3px;
    border-radius: 2px;
    background: rgba(30, 100, 50, 0.7);
    transform: rotate(-28deg);
  }

  .raven-bird {
    position: absolute;
    bottom: 26px;
    left: 34px;
    width: 34px;
    height: 40px;
    transform-origin: bottom center;
    animation: raven-breathe 3.4s ease-in-out infinite, raven-ruffle 9s linear infinite;
  }

  .raven-tail {
    position: absolute;
    bottom: -4px;
    right: -18px;
    width: 26px;
    height: 10px;
    clip-path: polygon(0 0, 82% 12%, 100% 50%, 82% 88%, 0 100%);
    background: linear-gradient(90deg, #0c2c14, rgba(60, 160, 90, 0.5) 96%, #071c0c);
    transform: rotate(14deg);
    transform-origin: left center;
    animation: raven-tail 9s linear infinite;
  }

  .raven-body {
    position: absolute;
    bottom: 0;
    left: 4px;
    width: 26px;
    height: 30px;
    border-radius: 55% 45% 48% 52% / 60% 55% 45% 40%;
    background: radial-gradient(circle at 36% 28%, #1d5c2e 0%, #0c2c14 55%, #061607 100%);
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
  }

  .raven-wing {
    position: absolute;
    bottom: 4px;
    left: 8px;
    width: 16px;
    height: 20px;
    border-radius: 60% 40% 50% 50% / 70% 50% 50% 30%;
    background: linear-gradient(160deg, rgba(30, 110, 55, 0.5), transparent 70%);
    border-left: 1px solid rgba(140, 255, 170, 0.25);
  }

  .raven-head {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 16px;
    transform-origin: 60% 90%;
    animation: raven-look 9s ease-in-out infinite;
  }

  .raven-skull {
    position: absolute;
    inset: 0;
    border-radius: 55% 45% 50% 50% / 60% 60% 42% 42%;
    background: radial-gradient(circle at 38% 32%, #1d5c2e 0%, #0a2411 65%);
    border: 1px solid rgba(140, 255, 170, 0.4);
  }

  .raven-beak {
    position: absolute;
    top: 6px;
    left: -10px;
    width: 12px;
    height: 7px;
    clip-path: polygon(0 55%, 30% 10%, 100% 0, 100% 90%, 35% 100%);
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.55), #16482a 35%, #0a2411);
    animation: raven-caw 9s linear infinite;
    transform-origin: right center;
  }

  .raven-hackle {
    position: absolute;
    top: 13px;
    left: 1px;
    width: 12px;
    height: 9px;
    clip-path: polygon(0 0, 100% 0, 88% 45%, 68% 100%, 50% 40%, 32% 88%, 12% 35%);
    background: linear-gradient(180deg, #123c1e, #0a2411);
  }

  .raven-eye {
    position: absolute;
    top: 5px;
    left: 4px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #eaffd9;
    box-shadow: 0 0 5px rgba(234, 255, 217, 0.8);
    animation: raven-blink 4.5s linear infinite;
  }

  .raven-feather {
    position: absolute;
    top: 40px;
    left: 74px;
    width: 7px;
    height: 3px;
    border-radius: 50%;
    background: rgba(30, 110, 55, 0.8);
    opacity: 0;
    animation: raven-feather 9s ease-in infinite;
  }

  .raven-moon {
    position: absolute;
    top: 8px;
    right: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #e6ffd2, #9bd88a 80%);
    box-shadow: 0 0 14px rgba(216, 255, 187, 0.4);
    animation: raven-moon 6s ease-in-out infinite;
  }

  @keyframes raven-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }

  @keyframes raven-look {
    0%, 18% { transform: rotate(0deg); }
    24%, 34% { transform: rotate(-14deg); }
    40%, 58% { transform: rotate(0deg); }
    63%, 74% { transform: rotate(17deg) translateX(2px); }
    80%, 100% { transform: rotate(0deg); }
  }

  @keyframes raven-blink {
    0%, 40%, 100% { transform: scaleY(1); }
    43% { transform: scaleY(0.1); }
    46% { transform: scaleY(1); }
  }

  @keyframes raven-caw {
    0%, 48% { transform: scaleY(1); }
    51%, 54% { transform: scaleY(1.9); }
    57%, 100% { transform: scaleY(1); }
  }

  @keyframes raven-ruffle {
    0%, 84% { filter: none; }
    86% { transform: scaleY(1.05) rotate(-2deg); }
    88% { transform: scaleY(0.97) rotate(2deg); }
    90% { transform: scaleY(1.02) rotate(-1deg); }
    92%, 100% { transform: none; }
  }

  @keyframes raven-tail {
    0%, 84% { transform: rotate(14deg); }
    87% { transform: rotate(26deg); }
    90% { transform: rotate(8deg); }
    93%, 100% { transform: rotate(14deg); }
  }

  @keyframes raven-feather {
    0%, 85% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
    88% { opacity: 0.9; }
    100% { opacity: 0; transform: translate(-8px, 34px) rotate(140deg); }
  }

  @keyframes raven-moon {
    0%, 100% { opacity: 0.75; }
    50% { opacity: 1; }
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

  /* v2: Midnight raven with iridescent indigo/purple plumage, golden moon,
     intelligent golden eye, and drifting raven feather */
  .ravenc {
    width: 104px;
    height: 104px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Weathered mossy branch */
  .ravenc-branch {
    position: absolute;
    bottom: 24px;
    left: 6px;
    right: 10px;
    height: 5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #78350f 0%, #166534 60%, #451a03 100%);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
    transform: rotate(-4deg);
  }

  .ravenc-branch::after {
    content: '';
    position: absolute;
    right: 16px;
    top: -6px;
    width: 14px;
    height: 3px;
    border-radius: 2px;
    background: #78350f;
    transform: rotate(-28deg);
  }

  /* Raven body carrier */
  .ravenc-bird {
    position: absolute;
    bottom: 26px;
    left: 34px;
    width: 34px;
    height: 40px;
    transform-origin: bottom center;
    animation: ravenc-breathe 3.4s ease-in-out infinite, ravenc-ruffle 9s linear infinite;
  }

  /* Long iridescent wedge tail */
  .ravenc-tail {
    position: absolute;
    bottom: -4px;
    right: -18px;
    width: 26px;
    height: 10px;
    clip-path: polygon(0 0, 82% 12%, 100% 50%, 82% 88%, 0 100%);
    background: linear-gradient(90deg, #18181b 0%, #4338ca 70%, #09090b 100%);
    box-shadow: 0 0 4px rgba(67, 56, 202, 0.5);
    transform: rotate(14deg);
    transform-origin: left center;
    animation: ravenc-tail 9s linear infinite;
  }

  /* Body with iridescent sheen */
  .ravenc-body {
    position: absolute;
    bottom: 0;
    left: 4px;
    width: 26px;
    height: 30px;
    border-radius: 55% 45% 48% 52% / 60% 55% 45% 40%;
    background: radial-gradient(circle at 36% 28%, #4f46e5 0%, #1e1b4b 45%, #09090b 100%);
    border: 1px solid #312e81;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  /* Wing with purple-blue iridescence */
  .ravenc-wing {
    position: absolute;
    bottom: 4px;
    left: 8px;
    width: 16px;
    height: 20px;
    border-radius: 60% 40% 50% 50% / 70% 50% 50% 30%;
    background: linear-gradient(160deg, #7c3aed 0%, transparent 70%);
    border-left: 1px solid #a855f7;
  }

  /* Head with look-around animation */
  .ravenc-head {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 16px;
    transform-origin: 60% 90%;
    animation: ravenc-look 9s ease-in-out infinite;
  }

  .ravenc-skull {
    position: absolute;
    inset: 0;
    border-radius: 55% 45% 50% 50% / 60% 60% 42% 42%;
    background: radial-gradient(circle at 38% 32%, #4338ca 0%, #09090b 75%);
    border: 1px solid #312e81;
  }

  /* Heavy raven beak */
  .ravenc-beak {
    position: absolute;
    top: 6px;
    left: -10px;
    width: 12px;
    height: 7px;
    clip-path: polygon(0 55%, 30% 10%, 100% 0, 100% 90%, 35% 100%);
    background: linear-gradient(180deg, #52525b 0%, #18181b 60%, #09090b 100%);
    animation: ravenc-caw 9s linear infinite;
    transform-origin: right center;
  }

  /* Throat hackles */
  .ravenc-hackle {
    position: absolute;
    top: 13px;
    left: 1px;
    width: 12px;
    height: 9px;
    clip-path: polygon(0 0, 100% 0, 88% 45%, 68% 100%, 50% 40%, 32% 88%, 12% 35%);
    background: linear-gradient(180deg, #312e81, #09090b);
  }

  /* Intelligent golden eye */
  .ravenc-eye {
    position: absolute;
    top: 5px;
    left: 4px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 5px #facc15;
    animation: ravenc-blink 4.5s linear infinite;
  }

  /* Falling glossy feather */
  .ravenc-feather {
    position: absolute;
    top: 40px;
    left: 74px;
    width: 7px;
    height: 3px;
    border-radius: 50%;
    background: #312e81;
    box-shadow: 0 0 3px #4f46e5;
    opacity: 0;
    animation: ravenc-feather 9s ease-in infinite;
  }

  /* Luminous golden full moon */
  .ravenc-moon {
    position: absolute;
    top: 8px;
    right: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fef08a 40%, #facc15 80%, #ca8a04 100%);
    box-shadow: 0 0 16px rgba(250, 204, 21, 0.7);
    animation: ravenc-moon 6s ease-in-out infinite;
  }

  @keyframes ravenc-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }

  @keyframes ravenc-look {
    0%, 18% { transform: rotate(0deg); }
    24%, 34% { transform: rotate(-14deg); }
    40%, 58% { transform: rotate(0deg); }
    63%, 74% { transform: rotate(17deg) translateX(2px); }
    80%, 100% { transform: rotate(0deg); }
  }

  @keyframes ravenc-blink {
    0%, 40%, 100% { transform: scaleY(1); }
    43% { transform: scaleY(0.1); }
    46% { transform: scaleY(1); }
  }

  @keyframes ravenc-caw {
    0%, 48% { transform: scaleY(1); }
    51%, 54% { transform: scaleY(1.9); }
    57%, 100% { transform: scaleY(1); }
  }

  @keyframes ravenc-ruffle {
    0%, 84% { filter: none; }
    86% { transform: scaleY(1.05) rotate(-2deg); }
    88% { transform: scaleY(0.97) rotate(2deg); }
    90% { transform: scaleY(1.02) rotate(-1deg); }
    92%, 100% { transform: none; }
  }

  @keyframes ravenc-tail {
    0%, 84% { transform: rotate(14deg); }
    87% { transform: rotate(26deg); }
    90% { transform: rotate(8deg); }
    93%, 100% { transform: rotate(14deg); }
  }

  @keyframes ravenc-feather {
    0%, 85% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
    88% { opacity: 0.95; }
    100% { opacity: 0; transform: translate(-8px, 34px) rotate(140deg); }
  }

  @keyframes ravenc-moon {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  `,
};

const ravenMarkup = {
  v1: `
      <div class="raven">
        <div class="raven-moon"></div>
        <div class="raven-branch"></div>
        <div class="raven-bird">
          <div class="raven-tail"></div>
          <div class="raven-body"></div>
          <div class="raven-wing"></div>
          <div class="raven-head">
            <div class="raven-skull"></div>
            <div class="raven-beak"></div>
            <div class="raven-hackle"></div>
            <div class="raven-eye"></div>
          </div>
        </div>
        <div class="raven-feather"></div>
      </div>
    `,
  v2: `
      <div class="ravenc">
        <div class="ravenc-moon"></div>
        <div class="ravenc-branch"></div>
        <div class="ravenc-bird">
          <div class="ravenc-tail"></div>
          <div class="ravenc-body"></div>
          <div class="ravenc-wing"></div>
          <div class="ravenc-head">
            <div class="ravenc-skull"></div>
            <div class="ravenc-beak"></div>
            <div class="ravenc-hackle"></div>
            <div class="ravenc-eye"></div>
          </div>
        </div>
        <div class="ravenc-feather"></div>
      </div>
    `,
};

class ConceptRaven extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${ravenStyles[version] || ravenStyles.v2}</style>${ravenMarkup[version] || ravenMarkup.v2}`;
  }
}

if (!customElements.get('concept-raven')) {
  customElements.define('concept-raven', ConceptRaven);
}
