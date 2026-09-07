const cometStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor comet --- */
  .comet {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #010401 0%, #020a03 100%);
  }

  .comet::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 70%, rgba(210, 255, 215, 0.7) 0 1px, transparent 1.4px),
      radial-gradient(circle at 82% 78%, rgba(210, 255, 215, 0.5) 0 1px, transparent 1.4px),
      radial-gradient(circle at 64% 22%, rgba(210, 255, 215, 0.55) 0 1px, transparent 1.4px),
      radial-gradient(circle at 36% 38%, rgba(210, 255, 215, 0.4) 0 1px, transparent 1.4px),
      radial-gradient(circle at 90% 42%, rgba(210, 255, 215, 0.45) 0 1px, transparent 1.4px),
      radial-gradient(circle at 8% 16%, rgba(210, 255, 215, 0.4) 0 1px, transparent 1.4px);
  }

  .comet-star {
    position: absolute;
    top: 60px;
    left: 44px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #d8ffe2;
    animation: comet-twinkle 3.1s ease-in-out infinite;
  }

  .comet-body {
    position: absolute;
    top: 0;
    left: 0;
    animation: comet-pass 5.5s ease-in-out infinite;
  }

  .comet-nucleus {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 36%, #f2ffdd, #b9ff8e 55%, rgba(80, 200, 90, 0.6));
    animation: comet-glow 5.5s ease-in-out infinite;
  }

  .comet-tail {
    position: absolute;
    top: 3px;
    left: 4px;
    height: 3px;
    border-radius: 2px;
    transform-origin: left center;
    transform: rotate(-135deg);
    background: linear-gradient(90deg, rgba(216, 255, 187, 0.85), rgba(140, 255, 170, 0.25) 60%, transparent);
    filter: blur(0.5px);
    animation: comet-tail 5.5s ease-in-out infinite;
  }

  .comet-tail.t1 { width: 40px; }

  .comet-tail.t2 {
    width: 28px;
    height: 5px;
    transform: rotate(-128deg);
    opacity: 0.5;
    filter: blur(2px);
  }

  .comet-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(216, 255, 187, 0.8);
    animation: comet-mote 5.5s linear infinite;
  }

  .comet-mote.m2 { animation-delay: -0.25s; opacity: 0.6; }
  .comet-mote.m3 { animation-delay: -0.5s; opacity: 0.35; }

  @keyframes comet-pass {
    0% { transform: translate(-14px, 14px); }
    45% { transform: translate(46px, 44px); }
    100% { transform: translate(116px, 96px); }
  }

  @keyframes comet-glow {
    0%, 100% { box-shadow: 0 0 5px rgba(216, 255, 187, 0.4); }
    45% { box-shadow: 0 0 14px rgba(216, 255, 187, 0.95), 0 0 26px rgba(140, 255, 170, 0.4); }
  }

  @keyframes comet-tail {
    0% { opacity: 0.4; }
    45% { opacity: 1; }
    100% { opacity: 0.35; }
  }

  @keyframes comet-mote {
    0%, 30% { opacity: 0; transform: translate(2px, 2px); }
    45% { opacity: 0.9; transform: translate(-6px, -4px); }
    80%, 100% { opacity: 0; transform: translate(-14px, -10px); }
  }

  @keyframes comet-twinkle {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 1; box-shadow: 0 0 5px rgba(216, 255, 226, 0.7); }
  }

  /* --- v2: Dual-tail celestial comet ---
     Electric cyan-blue ion tail (solar wind) + warm golden curved dust tail + glowing icy nucleus */
  .cmc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #020617 0%, #030712 100%);
  }

  .cmc::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 70%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 82% 78%, #7dd3fc 0 1px, transparent 1.4px),
      radial-gradient(circle at 64% 22%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 36% 38%, #fbcfe8 0 1px, transparent 1.4px),
      radial-gradient(circle at 90% 42%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 8% 16%, #bae6fd 0 1px, transparent 1.4px);
  }

  .cmc-star {
    position: absolute;
    top: 60px;
    left: 44px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #38bdf8;
    animation: comet-twinkle 3.1s ease-in-out infinite;
  }

  .cmc-body {
    position: absolute;
    top: 0;
    left: 0;
    animation: comet-pass 5.5s ease-in-out infinite;
  }

  /* Icy cyan nucleus with white-hot core */
  .cmc-nucleus {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 36%, #ffffff, #67e8f9 55%, #0284c7);
    animation: cmc-glow 5.5s ease-in-out infinite;
  }

  /* Straight electric-cyan ion/gas tail */
  .cmc-tail-ion {
    position: absolute;
    top: 3px;
    left: 4px;
    width: 44px;
    height: 3px;
    border-radius: 2px;
    transform-origin: left center;
    transform: rotate(-135deg);
    background: linear-gradient(90deg, #00f0ff, rgba(14, 165, 233, 0.4) 60%, transparent);
    filter: blur(0.5px);
    box-shadow: 0 0 6px #00f0ff;
    animation: comet-tail 5.5s ease-in-out infinite;
  }

  /* Curved warm golden dust tail */
  .cmc-tail-dust {
    position: absolute;
    top: 3px;
    left: 4px;
    width: 32px;
    height: 6px;
    border-radius: 3px;
    transform-origin: left center;
    transform: rotate(-124deg);
    background: linear-gradient(90deg, #fef08a, rgba(245, 158, 11, 0.35) 65%, transparent);
    filter: blur(1.5px);
    animation: comet-tail 5.5s ease-in-out infinite;
  }

  /* Shedding ice/dust fragments */
  .cmc-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 3px #67e8f9;
    animation: comet-mote 5.5s linear infinite;
  }

  .cmc-mote.m2 { animation-delay: -0.25s; background: #fef08a; box-shadow: 0 0 3px #fde047; }
  .cmc-mote.m3 { animation-delay: -0.5s; background: #ffffff; box-shadow: 0 0 3px #ffffff; }

  @keyframes cmc-glow {
    0%, 100% { box-shadow: 0 0 6px #00f0ff; }
    45% { box-shadow: 0 0 16px #ffffff, 0 0 28px #00f0ff, 0 0 40px #0284c7; }
  }
`;

const cometMarkup = {
  v1: `
    <div class="comet">
      <div class="comet-star"></div>
      <div class="comet-body">
        <div class="comet-tail t2"></div>
        <div class="comet-tail t1"></div>
        <div class="comet-mote"></div>
        <div class="comet-mote m2"></div>
        <div class="comet-mote m3"></div>
        <div class="comet-nucleus"></div>
      </div>
    </div>
  `,
  v2: `
    <div class="cmc">
      <div class="cmc-star"></div>
      <div class="cmc-body">
        <div class="cmc-tail-dust"></div>
        <div class="cmc-tail-ion"></div>
        <div class="cmc-mote"></div>
        <div class="cmc-mote m2"></div>
        <div class="cmc-mote m3"></div>
        <div class="cmc-nucleus"></div>
      </div>
    </div>
  `,
};

class ConceptComet extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${cometStyles}</style>${cometMarkup[version] || cometMarkup.v2}`;
  }
}

if (!customElements.get('concept-comet')) {
  customElements.define('concept-comet', ConceptComet);
}
