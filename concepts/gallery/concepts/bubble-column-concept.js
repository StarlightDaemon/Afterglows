const bubbleColumnStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A vent on the sea floor breathes a column of bubbles. Each bubble
     wobbles as it climbs, grows with the falling pressure, and bursts
     in a tiny ring at the surface line. */
  .bcol {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Surface line the bubbles die against. */
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

  /* Sea floor: pebbles and the vent cone. */
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

  /* Bubbles: carrier climbs and pops; inner span wobbles sideways so
     the path snakes. Sizes and rates vary per bubble. */
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

  /* Rise, expand, vanish at the surface (72px climb). */
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

  /* Burst rings where the column meets the surface. */
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

  /* Faint light shafts angling down. */
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
`;

class ConceptBubbleColumn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bubbleColumnStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-bubble-column')) {
  customElements.define('concept-bubble-column', ConceptBubbleColumn);
}
