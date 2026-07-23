const weathervaneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A rooster vane hunting the wind: gusts arrive as streaks, the
     arrow swings to point into each one and overshoots, and the
     compass letter under it updates to the settled heading. */
  .wv {
    width: 100px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Fixed compass cross N/E/S/W. */
  .wv-cross {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 2px;
    height: 44px;
    margin-left: -1px;
    background: rgba(0, 204, 0, 0.4);
  }

  .wv-cross::after {
    content: '';
    position: absolute;
    left: -21px;
    top: 21px;
    width: 44px;
    height: 2px;
    background: rgba(0, 204, 0, 0.4);
  }

  .wv-dir {
    position: absolute;
    font-size: 9px;
    color: rgba(140, 255, 170, 0.7);
  }

  .wv-dir.n { left: 50%; top: 40px; transform: translateX(-50%); }
  .wv-dir.s { left: 50%; bottom: 6px; transform: translateX(-50%); }
  .wv-dir.e { right: 20px; top: 62px; }
  .wv-dir.w { left: 20px; top: 62px; }

  /* Post. */
  .wv-post {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 3px;
    height: 24px;
    margin-left: -1.5px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.7));
  }

  /* The vane assembly pivots atop the post. */
  .wv-vane {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 0;
    height: 0;
    animation: wv-swing 7s ease-in-out infinite;
  }

  @keyframes wv-swing {
    0% { transform: rotate(-40deg); }
    12% { transform: rotate(-46deg); }
    /* Gust 1: swings toward NE, overshoots. */
    22% { transform: rotate(52deg); }
    28% { transform: rotate(38deg); }
    34% { transform: rotate(45deg); }
    /* Gust 2: back around to W. */
    50% { transform: rotate(-88deg); }
    56% { transform: rotate(-74deg); }
    62% { transform: rotate(-82deg); }
    /* Settle toward N. */
    82% { transform: rotate(-6deg); }
    88% { transform: rotate(-14deg); }
    100% { transform: rotate(-40deg); }
  }

  /* Arrow shaft with head and tail. */
  .wv-shaft {
    position: absolute;
    left: -26px;
    top: -1px;
    width: 52px;
    height: 2px;
    background: rgba(190, 255, 205, 0.9);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.6);
  }

  .wv-head {
    position: absolute;
    left: 22px;
    top: -4px;
    width: 8px;
    height: 10px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: #d6ffe0;
  }

  .wv-tail {
    position: absolute;
    left: -30px;
    top: -6px;
    width: 10px;
    height: 14px;
    clip-path: polygon(0 0, 100% 20%, 60% 50%, 100% 80%, 0 100%);
    background: rgba(140, 255, 170, 0.85);
  }

  /* The rooster silhouette perched on the pivot. */
  .wv-rooster {
    position: absolute;
    left: -6px;
    top: -18px;
    width: 14px;
    height: 16px;
    clip-path: polygon(30% 100%, 20% 60%, 0 55%, 18% 42%, 12% 20%, 34% 34%, 50% 8%, 60% 30%, 86% 26%, 70% 46%, 100% 60%, 66% 60%, 62% 100%);
    background: rgba(0, 190, 38, 0.85);
  }

  .wv-pivot {
    position: absolute;
    left: -3px;
    top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
  }

  /* Gust streaks blowing across, timed to the swings. */
  .wv-gust {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.6), transparent);
    opacity: 0;
    animation: wv-gust 7s ease-in infinite;
  }

  .wv-gust.g1 { top: 24px; left: 0; width: 30px; }
  .wv-gust.g2 { top: 54px; right: 0; width: 26px; animation-delay: 2.8s; }

  @keyframes wv-gust {
    0%, 10% { transform: translateX(-30px); opacity: 0; }
    14% { opacity: 0.9; }
    24% { transform: translateX(90px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Heading readout. */
  .wv-read {
    position: absolute;
    left: 4px;
    bottom: 0;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.6);
  }

  .wv-read::before {
    content: 'SW';
    animation: wv-read 7s steps(1) infinite;
  }

  @keyframes wv-read {
    0% { content: 'SW'; }
    28% { content: 'NE'; }
    56% { content: 'W'; }
    88% { content: 'N'; }
  }
`;

class ConceptWeathervane extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${weathervaneStyles}</style>
      <div class="wv">
        <div class="wv-cross"></div>
        <div class="wv-dir n">N</div>
        <div class="wv-dir s">S</div>
        <div class="wv-dir e">E</div>
        <div class="wv-dir w">W</div>
        <div class="wv-gust g1"></div>
        <div class="wv-gust g2"></div>
        <div class="wv-post"></div>
        <div class="wv-vane">
          <div class="wv-shaft"></div>
          <div class="wv-head"></div>
          <div class="wv-tail"></div>
          <div class="wv-rooster"></div>
          <div class="wv-pivot"></div>
        </div>
        <div class="wv-read"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-weathervane')) {
  customElements.define('concept-weathervane', ConceptWeathervane);
}
