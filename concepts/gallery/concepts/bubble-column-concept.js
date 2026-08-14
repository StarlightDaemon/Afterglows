const bubbleColumnStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bcol {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .bcol-surface {
    position: absolute;
    left: 6px;
    right: 6px;
    top: 10px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.6), transparent);
    animation: bcol-surface 4s ease-in-out infinite;
  }

  @keyframes bcol-surface {
    0%, 100% { transform: translateY(0) scaleX(1); opacity: 0.6; }
    50% { transform: translateY(2px) scaleX(0.96); opacity: 0.9; }
  }

  .bcol-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5) 20%, rgba(0, 204, 0, 0.5) 80%, transparent);
  }

  .bcol-pebble {
    position: absolute;
    bottom: 10px;
    border-radius: 50%;
    background: rgba(0, 120, 24, 0.6);
  }

  .bcol-pebble.p1 { left: 22px; width: 8px; height: 5px; }
  .bcol-pebble.p2 { left: 74px; width: 6px; height: 4px; }
  .bcol-pebble.p3 { left: 60px; width: 5px; height: 3px; }

  .bcol-vent {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 18px;
    height: 12px;
    margin-left: -9px;
    clip-path: polygon(28% 0, 72% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.8), rgba(0, 80, 16, 0.7));
    animation: bcol-vent 2.1s ease-in-out infinite;
  }

  @keyframes bcol-vent {
    0%, 100% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.3); }
    12% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.8); }
  }

  .bcol-rise {
    position: absolute;
    left: 50%;
    bottom: 18px;
    animation: bcol-rise ease-in infinite;
  }

  .bcol-bubble {
    display: block;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.85);
    background: radial-gradient(circle at 34% 30%, rgba(190, 255, 205, 0.35), transparent 60%);
    animation: bcol-wobble ease-in-out infinite;
  }

  .bcol-rise.b1 { animation-duration: 2.6s; }
  .bcol-rise.b1 .bcol-bubble { width: 7px; height: 7px; animation-duration: 1.1s; }
  .bcol-rise.b2 { animation-duration: 3.1s; animation-delay: -1.2s; }
  .bcol-rise.b2 .bcol-bubble { width: 5px; height: 5px; animation-duration: 0.9s; animation-delay: -0.3s; }
  .bcol-rise.b3 { animation-duration: 2.2s; animation-delay: -1.8s; }
  .bcol-rise.b3 .bcol-bubble { width: 9px; height: 9px; animation-duration: 1.3s; animation-delay: -0.6s; }
  .bcol-rise.b4 { animation-duration: 3.4s; animation-delay: -0.5s; }
  .bcol-rise.b4 .bcol-bubble { width: 4px; height: 4px; animation-duration: 0.8s; animation-delay: -0.2s; }
  .bcol-rise.b5 { animation-duration: 2.9s; animation-delay: -2.3s; }
  .bcol-rise.b5 .bcol-bubble { width: 6px; height: 6px; animation-duration: 1s; animation-delay: -0.45s; }

  @keyframes bcol-rise {
    0% { transform: translateY(0) scale(0.55); opacity: 0; }
    8% { opacity: 0.95; }
    86% { transform: translateY(-66px) scale(1.15); opacity: 0.95; }
    94%, 100% { transform: translateY(-70px) scale(1.5); opacity: 0; }
  }

  @keyframes bcol-wobble {
    0%, 100% { transform: translateX(-4px); }
    50% { transform: translateX(4px); }
  }

  .bcol-burst {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 10px;
    height: 6px;
    margin-left: -5px;
    border: 1px solid rgba(190, 255, 205, 0.8);
    border-radius: 50%;
    opacity: 0;
    animation: bcol-burst 2.6s infinite;
  }

  .bcol-burst.k2 { animation-delay: -1.3s; margin-left: -9px; }

  @keyframes bcol-burst {
    0%, 82% { transform: scale(0.4); opacity: 0; }
    86% { opacity: 0.9; }
    98%, 100% { transform: scale(1.6); opacity: 0; }
  }

  .bcol-shaft {
    position: absolute;
    top: 0;
    width: 10px;
    height: 70px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.14), transparent 80%);
    transform: skewX(-16deg);
    animation: bcol-shaft 5.5s ease-in-out infinite;
  }

  .bcol-shaft.h1 { left: 20px; }
  .bcol-shaft.h2 { left: 66px; animation-delay: -2.7s; width: 7px; }

  @keyframes bcol-shaft {
    0%, 100% { opacity: 0.4; transform: skewX(-16deg) translateX(0); }
    50% { opacity: 0.95; transform: skewX(-13deg) translateX(4px); }
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

  /* v2: Deep turquoise ocean bubble column with iridescent cyan bubbles,
     golden sea gravel, basalt vent cone, and refracting sunlight shafts */
  .bcolc {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 30%, #0891b2 0%, #0e7490 35%, #0f172a 100%);
    border-radius: 6px;
  }

  /* Sunlit water surface line */
  .bcolc-surface {
    position: absolute;
    left: 6px;
    right: 6px;
    top: 10px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, #a5f3fc 50%, transparent);
    box-shadow: 0 0 6px #38bdf8;
    animation: bcolc-surface 4s ease-in-out infinite;
  }

  @keyframes bcolc-surface {
    0%, 100% { transform: translateY(0) scaleX(1); opacity: 0.7; }
    50% { transform: translateY(2px) scaleX(0.96); opacity: 1; }
  }

  /* Ocean floor bed */
  .bcolc-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ca8a04 20%, #ca8a04 80%, transparent);
    box-shadow: 0 0 6px rgba(202, 138, 4, 0.5);
  }

  .bcolc-pebble {
    position: absolute;
    bottom: 10px;
    border-radius: 50%;
    background: #a16207;
    border: 1px solid #eab308;
  }

  .bcolc-pebble.p1 { left: 22px; width: 8px; height: 5px; }
  .bcolc-pebble.p2 { left: 74px; width: 6px; height: 4px; background: #64748b; border-color: #94a3b8; }
  .bcolc-pebble.p3 { left: 60px; width: 5px; height: 3px; }

  /* Subsea vent cone */
  .bcolc-vent {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 18px;
    height: 12px;
    margin-left: -9px;
    clip-path: polygon(28% 0, 72% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #38bdf8 0%, #0369a1 60%, #0f172a 100%);
    box-shadow: 0 0 8px #00f0ff;
    animation: bcolc-vent 2.1s ease-in-out infinite;
  }

  @keyframes bcolc-vent {
    0%, 100% { box-shadow: 0 0 4px #00f0ff; }
    12% { box-shadow: 0 0 12px #38bdf8; }
  }

  /* Rising bubbles with iridescent cyan & white shimmer */
  .bcolc-rise {
    position: absolute;
    left: 50%;
    bottom: 18px;
    animation: bcolc-rise ease-in infinite;
  }

  .bcolc-bubble {
    display: block;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    background: radial-gradient(circle at 34% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(56, 189, 248, 0.6) 40%, rgba(192, 132, 252, 0.3) 80%);
    box-shadow: 0 0 6px #00f0ff;
    animation: bcolc-wobble ease-in-out infinite;
  }

  .bcolc-rise.b1 { animation-duration: 2.6s; }
  .bcolc-rise.b1 .bcolc-bubble { width: 7px; height: 7px; animation-duration: 1.1s; }
  .bcolc-rise.b2 { animation-duration: 3.1s; animation-delay: -1.2s; }
  .bcolc-rise.b2 .bcolc-bubble { width: 5px; height: 5px; animation-duration: 0.9s; animation-delay: -0.3s; }
  .bcolc-rise.b3 { animation-duration: 2.2s; animation-delay: -1.8s; }
  .bcolc-rise.b3 .bcolc-bubble { width: 9px; height: 9px; animation-duration: 1.3s; animation-delay: -0.6s; }
  .bcolc-rise.b4 { animation-duration: 3.4s; animation-delay: -0.5s; }
  .bcolc-rise.b4 .bcolc-bubble { width: 4px; height: 4px; animation-duration: 0.8s; animation-delay: -0.2s; }
  .bcolc-rise.b5 { animation-duration: 2.9s; animation-delay: -2.3s; }
  .bcolc-rise.b5 .bcolc-bubble { width: 6px; height: 6px; animation-duration: 1s; animation-delay: -0.45s; }

  @keyframes bcolc-rise {
    0% { transform: translateY(0) scale(0.55); opacity: 0; }
    8% { opacity: 0.95; }
    86% { transform: translateY(-66px) scale(1.15); opacity: 0.95; }
    94%, 100% { transform: translateY(-70px) scale(1.5); opacity: 0; }
  }

  @keyframes bcolc-wobble {
    0%, 100% { transform: translateX(-4px); }
    50% { transform: translateX(4px); }
  }

  /* Surface burst rings */
  .bcolc-burst {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 10px;
    height: 6px;
    margin-left: -5px;
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 6px #38bdf8;
    border-radius: 50%;
    opacity: 0;
    animation: bcolc-burst 2.6s infinite;
  }

  .bcolc-burst.k2 { animation-delay: -1.3s; margin-left: -9px; }

  @keyframes bcolc-burst {
    0%, 82% { transform: scale(0.4); opacity: 0; }
    86% { opacity: 0.95; }
    98%, 100% { transform: scale(1.6); opacity: 0; }
  }

  /* Refracted sunlight shafts */
  .bcolc-shaft {
    position: absolute;
    top: 0;
    width: 10px;
    height: 70px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 100%);
    transform: skewX(-16deg);
    animation: bcolc-shaft 5.5s ease-in-out infinite;
  }

  .bcolc-shaft.h1 { left: 20px; }
  .bcolc-shaft.h2 { left: 66px; animation-delay: -2.7s; width: 7px; }

  @keyframes bcolc-shaft {
    0%, 100% { opacity: 0.4; transform: skewX(-16deg) translateX(0); }
    50% { opacity: 0.95; transform: skewX(-13deg) translateX(4px); }
  }
  `,
};

const bubbleColumnMarkup = {
  v1: `
      <div class="bcol">
        <div class="bcol-shaft h1"></div>
        <div class="bcol-shaft h2"></div>
        <div class="bcol-surface"></div>
        <div class="bcol-rise b1"><span class="bcol-bubble"></span></div>
        <div class="bcol-rise b2"><span class="bcol-bubble"></span></div>
        <div class="bcol-rise b3"><span class="bcol-bubble"></span></div>
        <div class="bcol-rise b4"><span class="bcol-bubble"></span></div>
        <div class="bcol-rise b5"><span class="bcol-bubble"></span></div>
        <div class="bcol-burst"></div>
        <div class="bcol-burst k2"></div>
        <div class="bcol-vent"></div>
        <div class="bcol-floor"></div>
        <div class="bcol-pebble p1"></div>
        <div class="bcol-pebble p2"></div>
        <div class="bcol-pebble p3"></div>
      </div>
    `,
  v2: `
      <div class="bcolc">
        <div class="bcolc-shaft h1"></div>
        <div class="bcolc-shaft h2"></div>
        <div class="bcolc-surface"></div>
        <div class="bcolc-rise b1"><span class="bcolc-bubble"></span></div>
        <div class="bcolc-rise b2"><span class="bcolc-bubble"></span></div>
        <div class="bcolc-rise b3"><span class="bcolc-bubble"></span></div>
        <div class="bcolc-rise b4"><span class="bcolc-bubble"></span></div>
        <div class="bcolc-rise b5"><span class="bcolc-bubble"></span></div>
        <div class="bcolc-burst"></div>
        <div class="bcolc-burst k2"></div>
        <div class="bcolc-vent"></div>
        <div class="bcolc-floor"></div>
        <div class="bcolc-pebble p1"></div>
        <div class="bcolc-pebble p2"></div>
        <div class="bcolc-pebble p3"></div>
      </div>
    `,
};

class ConceptBubbleColumn extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${bubbleColumnStyles[version] || bubbleColumnStyles.v2}</style>${bubbleColumnMarkup[version] || bubbleColumnMarkup.v2}`;
  }
}

if (!customElements.get('concept-bubble-column')) {
  customElements.define('concept-bubble-column', ConceptBubbleColumn);
}
