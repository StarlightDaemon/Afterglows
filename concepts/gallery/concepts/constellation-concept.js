// 2026-08-01 split: the technical chart (old v3/v4 — grid, range rings,
// "chart a-17" labels, mapping flares) moved to star-chart-concept.js.
// Constellation keeps its natural night-sky identity: v1's twinkling dots
// and v2's linked celestial network.
const constellationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .stars {
    position: relative;
    width: 100px;
    height: 100px;
  }

  .star-dot {
    width: 4px;
    height: 4px;
    background: #00cc00;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 4px #00cc00;
    animation: twinkle 2s ease-in-out infinite;
  }

  .star-dot:nth-child(2) { animation-delay: 0.3s; }
  .star-dot:nth-child(3) { animation-delay: 0.6s; }
  .star-dot:nth-child(4) { animation-delay: 0.9s; }
  .star-dot:nth-child(5) { animation-delay: 1.2s; }
  .star-dot:nth-child(6) { animation-delay: 1.5s; }

  .constellation-refined {
    position: relative;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    overflow: hidden;
    background:
      radial-gradient(circle at center, rgba(6, 26, 12, 0.92) 0 34%, rgba(0, 0, 0, 0.98) 72%),
      radial-gradient(circle at 28% 24%, rgba(120, 255, 160, 0.1), transparent 26%),
      radial-gradient(circle at 74% 70%, rgba(120, 255, 160, 0.06), transparent 30%);
    box-shadow: inset 0 0 18px rgba(0, 204, 0, 0.08), 0 0 10px rgba(0, 204, 0, 0.08);
  }

  .constellation-refined::before,
  .constellation-refined::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .constellation-refined::before {
    background:
      radial-gradient(circle at 12% 18%, rgba(180, 255, 180, 0.85) 0 1px, transparent 1.5px),
      radial-gradient(circle at 26% 78%, rgba(180, 255, 180, 0.65) 0 1px, transparent 1.5px),
      radial-gradient(circle at 82% 22%, rgba(180, 255, 180, 0.72) 0 1px, transparent 1.5px),
      radial-gradient(circle at 68% 14%, rgba(180, 255, 180, 0.55) 0 1px, transparent 1.5px),
      radial-gradient(circle at 88% 74%, rgba(180, 255, 180, 0.62) 0 1px, transparent 1.5px),
      radial-gradient(circle at 54% 88%, rgba(180, 255, 180, 0.5) 0 1px, transparent 1.5px);
    opacity: 0.7;
  }

  .constellation-refined::after {
    background: radial-gradient(circle at center, transparent 58%, rgba(120, 255, 160, 0.08) 75%, transparent 100%);
    animation: constellation-field 6s ease-in-out infinite;
  }

  .constellation-network {
    position: absolute;
    inset: 0;
    animation: constellation-drift 7s ease-in-out infinite;
  }

  .constellation-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    filter: drop-shadow(0 0 3px rgba(120, 255, 140, 0.2));
  }

  .constellation-line {
    stroke: rgba(135, 255, 150, 0.62);
    stroke-width: 1.35;
    stroke-linecap: round;
    stroke-dasharray: 2 4;
    opacity: 0.6;
    animation: constellation-link 4.8s ease-in-out infinite;
  }

  .constellation-line.l2 { animation-delay: -0.8s; }
  .constellation-line.l3 { animation-delay: -1.6s; }
  .constellation-line.l4 { animation-delay: -2.4s; }
  .constellation-line.l5 { animation-delay: -3.2s; }
  .constellation-line.l6 { animation-delay: -4s; }

  .constellation-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #bfffbf;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(120, 255, 140, 0.6);
    animation: constellation-node 3.4s ease-in-out infinite;
  }

  .constellation-node.major {
    width: 8px;
    height: 8px;
    background: #ecffec;
    box-shadow: 0 0 12px rgba(160, 255, 180, 0.75);
  }

  .constellation-node.n1 { top: 24%; left: 18%; animation-delay: -0.2s; }
  .constellation-node.n2 { top: 15%; left: 41%; animation-delay: -1.1s; }
  .constellation-node.n3 { top: 27%; left: 72%; animation-delay: -2.2s; }
  .constellation-node.n4 { top: 52%; left: 59%; animation-delay: -0.7s; }
  .constellation-node.n5 { top: 63%; left: 29%; animation-delay: -1.8s; }
  .constellation-node.n6 { top: 76%; left: 78%; animation-delay: -2.9s; }
  .constellation-node.n7 { top: 84%; left: 18%; animation-delay: -0.4s; }

  @keyframes twinkle {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 0 4px #00cc00;
    }

    50% {
      opacity: 0.2;
      transform: scale(0.6);
      box-shadow: 0 0 2px #00cc00;
    }
  }

  @keyframes constellation-field {
    0%, 100% {
      opacity: 0.45;
      transform: scale(1);
    }

    50% {
      opacity: 0.85;
      transform: scale(1.04);
    }
  }

  @keyframes constellation-drift {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }

    50% {
      transform: translate(1px, -2px) scale(1.01);
    }
  }

  @keyframes constellation-link {
    0%, 100% {
      opacity: 0.35;
      stroke-dashoffset: 0;
    }

    50% {
      opacity: 0.92;
      stroke-dashoffset: -6;
    }
  }

  @keyframes constellation-node {
    0%, 100% {
      opacity: 0.65;
      transform: translate(-50%, -50%) scale(0.9);
    }

    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.16);
    }
  }

`;

const constellationMarkup = {
  v1: `
    <div class="stars">
      <div class="star-dot" style="top:10%;left:15%"></div>
      <div class="star-dot" style="top:25%;left:70%"></div>
      <div class="star-dot" style="top:45%;left:40%"></div>
      <div class="star-dot" style="top:60%;left:85%"></div>
      <div class="star-dot" style="top:75%;left:25%"></div>
      <div class="star-dot" style="top:90%;left:60%"></div>
    </div>
  `,
  v2: `
    <div class="constellation-refined">
      <div class="constellation-network">
        <svg class="constellation-lines" viewBox="0 0 100 100" aria-hidden="true">
          <line class="constellation-line l1" x1="18" y1="24" x2="41" y2="15"></line>
          <line class="constellation-line l2" x1="41" y1="15" x2="72" y2="27"></line>
          <line class="constellation-line l3" x1="72" y1="27" x2="59" y2="52"></line>
          <line class="constellation-line l4" x1="59" y1="52" x2="29" y2="63"></line>
          <line class="constellation-line l5" x1="29" y1="63" x2="18" y2="84"></line>
          <line class="constellation-line l6" x1="59" y1="52" x2="78" y2="76"></line>
        </svg>
        <div class="constellation-node major n1"></div>
        <div class="constellation-node n2"></div>
        <div class="constellation-node major n3"></div>
        <div class="constellation-node n4"></div>
        <div class="constellation-node major n5"></div>
        <div class="constellation-node n6"></div>
        <div class="constellation-node n7"></div>
      </div>
    </div>
  `,
};

class ConceptConstellation extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${constellationStyles}</style>${constellationMarkup[version] || constellationMarkup.v2}`;
  }
}

if (!customElements.get('concept-constellation')) {
  customElements.define('concept-constellation', ConceptConstellation);
}
