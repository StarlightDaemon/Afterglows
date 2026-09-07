const bellStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bell {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .bell-yoke {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 40px;
    height: 5px;
    margin-left: -20px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.7);
  }

  .bell-yoke::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 5px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.9);
  }

  .bell-swing {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 0;
    height: 0;
    animation: bell-rock 2.6s ease-in-out infinite;
  }

  @keyframes bell-rock {
    0%, 100% { transform: rotate(-22deg); }
    50% { transform: rotate(22deg); }
  }

  .bell-cup {
    position: absolute;
    left: -24px;
    top: 0;
    width: 48px;
    height: 44px;
    clip-path: polygon(38% 0, 62% 0, 66% 10%, 68% 30%, 74% 52%, 88% 74%, 100% 88%, 100% 100%, 0 100%, 0 88%, 12% 74%, 26% 52%, 32% 30%, 34% 10%);
    background: linear-gradient(180deg,
      rgba(0, 150, 30, 0.75),
      rgba(0, 90, 18, 0.85) 60%,
      rgba(0, 60, 12, 0.9));
    animation: bell-shine 2.6s ease-in-out infinite;
  }

  .bell-cup::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    height: 5px;
    background: rgba(140, 255, 170, 0.75);
  }

  @keyframes bell-shine {
    0%, 100% { filter: drop-shadow(0 0 4px rgba(0, 204, 0, 0.4)); }
    2%, 6% { filter: drop-shadow(0 0 12px rgba(0, 204, 0, 0.9)); }
    48%, 54% { filter: drop-shadow(0 0 12px rgba(0, 204, 0, 0.9)); }
  }

  .bell-clapper {
    position: absolute;
    left: 0;
    top: 2px;
    width: 2px;
    height: 40px;
    margin-left: -1px;
    background: rgba(190, 255, 205, 0.8);
    transform-origin: top center;
    animation: bell-clap 2.6s ease-in-out infinite;
    animation-delay: -0.34s;
  }

  .bell-clapper::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, rgba(0, 140, 28, 0.95));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.7);
  }

  @keyframes bell-clap {
    0%, 100% { transform: rotate(26deg); }
    50% { transform: rotate(-26deg); }
  }

  .bell-ring {
    position: absolute;
    top: 48px;
    width: 14px;
    height: 14px;
    border: 1px solid rgba(140, 255, 170, 0.9);
    border-radius: 50%;
    opacity: 0;
  }

  .bell-ring.r1 { left: 12px; animation: bell-ring 2.6s ease-out infinite; }
  .bell-ring.r2 { right: 12px; animation: bell-ring 2.6s ease-out infinite; animation-delay: -1.3s; }

  @keyframes bell-ring {
    0% { transform: scale(0.4); opacity: 0; }
    2% { opacity: 0.95; }
    36% { transform: scale(2.8); opacity: 0; }
    100% { opacity: 0; }
  }

  .bell-tick {
    position: absolute;
    top: 22px;
    width: 8px;
    height: 2px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.6);
    opacity: 0;
  }

  .bell-tick.t1 { left: 8px; transform: rotate(24deg); animation: bell-tick1 2.6s steps(1) infinite; }
  .bell-tick.t2 { right: 8px; transform: rotate(-24deg); animation: bell-tick2 2.6s steps(1) infinite; }

  @keyframes bell-tick1 {
    0%, 6% { opacity: 0.9; }
    10%, 100% { opacity: 0; }
  }

  @keyframes bell-tick2 {
    0%, 48% { opacity: 0; }
    50%, 56% { opacity: 0.9; }
    58%, 100% { opacity: 0; }
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

  /* v2: Cast bronze church tower bell with oak timber yoke,
     polished gold rim, clapper, and acoustic golden sound rings */
  .bellc {
    width: 104px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Solid oak timber mounting yoke */
  .bellc-yoke {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 42px;
    height: 6px;
    margin-left: -21px;
    border-radius: 2px;
    background: linear-gradient(180deg, #9a3412 0%, #451a03 100%);
    border: 1px solid #78350f;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  /* Iron center hinge bolt */
  .bellc-yoke::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 5px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 3px #ca8a04;
  }

  /* Bell swinging assembly */
  .bellc-swing {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 0;
    height: 0;
    animation: bellc-rock 2.6s ease-in-out infinite;
  }

  @keyframes bellc-rock {
    0%, 100% { transform: rotate(-22deg); }
    50% { transform: rotate(22deg); }
  }

  /* Cast bronze bell cup */
  .bellc-cup {
    position: absolute;
    left: -24px;
    top: 0;
    width: 48px;
    height: 44px;
    clip-path: polygon(38% 0, 62% 0, 66% 10%, 68% 30%, 74% 52%, 88% 74%, 100% 88%, 100% 100%, 0 100%, 0 88%, 12% 74%, 26% 52%, 32% 30%, 34% 10%);
    background: linear-gradient(180deg,
      #fef08a 0%,
      #facc15 35%,
      #d97706 65%,
      #78350f 100%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    animation: bellc-shine 2.6s ease-in-out infinite;
  }

  /* Polished brass rim lip */
  .bellc-cup::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    height: 5px;
    background: #fde047;
    box-shadow: inset 0 1px 1px #ffffff;
  }

  @keyframes bellc-shine {
    0%, 100% { filter: drop-shadow(0 0 4px rgba(250, 204, 21, 0.4)); }
    2%, 6% { filter: drop-shadow(0 0 14px rgba(253, 224, 71, 0.9)); }
    48%, 54% { filter: drop-shadow(0 0 14px rgba(253, 224, 71, 0.9)); }
  }

  /* Steel clapper shaft */
  .bellc-clapper {
    position: absolute;
    left: 0;
    top: 2px;
    width: 2px;
    height: 40px;
    margin-left: -1px;
    background: #94a3b8;
    transform-origin: top center;
    animation: bellc-clap 2.6s ease-in-out infinite;
    animation-delay: -0.34s;
  }

  /* Bronze clapper ball */
  .bellc-clapper::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fef08a, #ca8a04 80%);
    box-shadow: 0 0 6px #facc15;
  }

  @keyframes bellc-clap {
    0%, 100% { transform: rotate(26deg); }
    50% { transform: rotate(-26deg); }
  }

  /* Radiant golden sound rings */
  .bellc-ring {
    position: absolute;
    top: 48px;
    width: 14px;
    height: 14px;
    border: 1.5px solid #fde047;
    border-radius: 50%;
    box-shadow: 0 0 8px #facc15;
    opacity: 0;
  }

  .bellc-ring.r1 { left: 12px; animation: bellc-ring 2.6s ease-out infinite; }
  .bellc-ring.r2 { right: 12px; animation: bellc-ring 2.6s ease-out infinite; animation-delay: -1.3s; }

  @keyframes bellc-ring {
    0% { transform: scale(0.4); opacity: 0; }
    2% { opacity: 0.95; }
    36% { transform: scale(2.8); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Motion sparkles */
  .bellc-tick {
    position: absolute;
    top: 22px;
    width: 8px;
    height: 2px;
    border-radius: 1px;
    background: #fde047;
    opacity: 0;
  }

  .bellc-tick.t1 { left: 8px; transform: rotate(24deg); animation: bellc-tick1 2.6s steps(1) infinite; }
  .bellc-tick.t2 { right: 8px; transform: rotate(-24deg); animation: bellc-tick2 2.6s steps(1) infinite; }

  @keyframes bellc-tick1 {
    0%, 6% { opacity: 0.9; }
    10%, 100% { opacity: 0; }
  }

  @keyframes bellc-tick2 {
    0%, 48% { opacity: 0; }
    50%, 56% { opacity: 0.9; }
    58%, 100% { opacity: 0; }
  }
  `,
};

const bellMarkup = {
  v1: `
      <div class="bell">
        <div class="bell-yoke"></div>
        <div class="bell-ring r1"></div>
        <div class="bell-ring r2"></div>
        <div class="bell-tick t1"></div>
        <div class="bell-tick t2"></div>
        <div class="bell-swing">
          <div class="bell-clapper"></div>
          <div class="bell-cup"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="bellc">
        <div class="bellc-yoke"></div>
        <div class="bellc-ring r1"></div>
        <div class="bellc-ring r2"></div>
        <div class="bellc-tick t1"></div>
        <div class="bellc-tick t2"></div>
        <div class="bellc-swing">
          <div class="bellc-clapper"></div>
          <div class="bellc-cup"></div>
        </div>
      </div>
    `,
};

class ConceptBell extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${bellStyles[version] || bellStyles.v2}</style>${bellMarkup[version] || bellMarkup.v2}`;
  }
}

if (!customElements.get('concept-bell')) {
  customElements.define('concept-bell', ConceptBell);
}
