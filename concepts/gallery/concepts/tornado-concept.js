const tornadoStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tornado {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  /* Storm cloud the funnel hangs from. */
  .tornado-cloud {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 86px;
    height: 20px;
    margin-left: -43px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 60%, rgba(90, 200, 110, 0.4), rgba(20, 60, 30, 0.55) 60%, transparent 78%);
    filter: blur(2px);
    animation: tornado-cloud 4s ease-in-out infinite;
  }

  /* The funnel: a stack of spinning rings, wide at top, narrow at base.
     Each ring fakes rotation by squashing (scaleX) out of phase. */
  .tornado-ring {
    position: absolute;
    left: 50%;
    height: 9px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.75);
    border-bottom-color: rgba(40, 120, 60, 0.4);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    animation: tornado-spin 1.1s linear infinite, tornado-sway 3.4s ease-in-out infinite;
  }

  .tornado-ring.r1 { top: 16px; width: 62px; margin-left: -31px; animation-delay: 0s,    0s; }
  .tornado-ring.r2 { top: 27px; width: 48px; margin-left: -24px; animation-delay: -0.18s, -0.1s; }
  .tornado-ring.r3 { top: 38px; width: 36px; margin-left: -18px; animation-delay: -0.36s, -0.2s; }
  .tornado-ring.r4 { top: 49px; width: 26px; margin-left: -13px; animation-delay: -0.54s, -0.3s; }
  .tornado-ring.r5 { top: 60px; width: 17px; margin-left: -8.5px; animation-delay: -0.72s, -0.4s; }
  .tornado-ring.r6 { top: 70px; width: 10px; margin-left: -5px;  animation-delay: -0.9s,  -0.5s; }
  .tornado-ring.r7 { top: 79px; width: 6px;  margin-left: -3px;  animation-delay: -1.08s, -0.6s; height: 7px; }

  /* Debris kicked up around the touchdown point. */
  .tornado-debris {
    position: absolute;
    bottom: 12px;
    left: 50%;
    width: 3px;
    height: 3px;
    border-radius: 1px;
    background: rgba(190, 255, 205, 0.85);
    box-shadow: 0 0 4px rgba(160, 255, 185, 0.6);
    animation: tornado-debris 1.7s ease-out infinite;
  }

  .tornado-debris.d1 { --toss-x: -26px; --toss-y: -20px; animation-delay: -0.2s; }
  .tornado-debris.d2 { --toss-x: 22px;  --toss-y: -28px; animation-delay: -0.8s; }
  .tornado-debris.d3 { --toss-x: -14px; --toss-y: -34px; animation-delay: -1.3s; }

  .tornado-ground {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 10px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.45), transparent);
  }

  @keyframes tornado-spin {
    0%   { transform: scaleX(1); }
    25%  { transform: scaleX(0.82); }
    50%  { transform: scaleX(1); }
    75%  { transform: scaleX(0.88); }
    100% { transform: scaleX(1); }
  }

  @keyframes tornado-sway {
    0%, 100% { margin-top: 0; translate: -4px 0; }
    50% { margin-top: 1px; translate: 5px 0; }
  }

  @keyframes tornado-cloud {
    0%, 100% { transform: translateX(-4px) scaleX(0.96); opacity: 0.8; }
    50% { transform: translateX(4px) scaleX(1.04); opacity: 1; }
  }

  @keyframes tornado-debris {
    0% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
    15% { opacity: 1; }
    100% { opacity: 0; transform: translate(var(--toss-x, 20px), var(--toss-y, -26px)) rotate(260deg); }
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

  /* v2: Atmospheric severe supercell vortex: ominous bruised slate-indigo
     mesocyclone wall cloud, condensation funnel rings in storm mist,
     and pulverized terracotta/earth debris lofted at touchdown. */
  .tornadoc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  /* Severe mesocyclone wall cloud */
  .tornadoc-cloud {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 86px;
    height: 20px;
    margin-left: -43px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 60%, rgba(51, 65, 85, 0.9) 0%, rgba(15, 23, 42, 0.95) 60%, transparent 85%);
    box-shadow: 0 0 12px rgba(15, 23, 42, 0.8);
    filter: blur(1.5px);
    animation: tornadoc-cloud 4s ease-in-out infinite;
  }

  /* Condensation funnel rings */
  .tornadoc-ring {
    position: absolute;
    left: 50%;
    height: 9px;
    border-radius: 50%;
    border: 2px solid rgba(148, 163, 184, 0.85);
    border-bottom-color: rgba(71, 85, 105, 0.45);
    box-shadow: 0 0 8px rgba(100, 116, 139, 0.4);
    animation: tornadoc-spin 1.1s linear infinite, tornadoc-sway 3.4s ease-in-out infinite;
  }

  .tornadoc-ring.r1 { top: 16px; width: 62px; margin-left: -31px; animation-delay: 0s,    0s; border-color: #cbd5e1; }
  .tornadoc-ring.r2 { top: 27px; width: 48px; margin-left: -24px; animation-delay: -0.18s, -0.1s; border-color: #94a3b8; }
  .tornadoc-ring.r3 { top: 38px; width: 36px; margin-left: -18px; animation-delay: -0.36s, -0.2s; border-color: #64748b; }
  .tornadoc-ring.r4 { top: 49px; width: 26px; margin-left: -13px; animation-delay: -0.54s, -0.3s; border-color: #475569; }
  .tornadoc-ring.r5 { top: 60px; width: 17px; margin-left: -8.5px; animation-delay: -0.72s, -0.4s; border-color: #92400e; }
  .tornadoc-ring.r6 { top: 70px; width: 10px; margin-left: -5px;  animation-delay: -0.9s,  -0.5s; border-color: #b45309; }
  .tornadoc-ring.r7 { top: 79px; width: 6px;  margin-left: -3px;  animation-delay: -1.08s, -0.6s; height: 7px; border-color: #d97706; }

  /* Pulverized earth and debris fragments */
  .tornadoc-debris {
    position: absolute;
    bottom: 12px;
    left: 50%;
    width: 3px;
    height: 3px;
    border-radius: 1px;
    background: #f59e0b;
    box-shadow: 0 0 5px rgba(245, 158, 11, 0.7);
    animation: tornadoc-debris 1.7s ease-out infinite;
  }

  .tornadoc-debris.d1 { --toss-x: -26px; --toss-y: -20px; animation-delay: -0.2s; background: #d97706; }
  .tornadoc-debris.d2 { --toss-x: 22px;  --toss-y: -28px; animation-delay: -0.8s; background: #b45309; }
  .tornadoc-debris.d3 { --toss-x: -14px; --toss-y: -34px; animation-delay: -1.3s; background: #fde68a; }

  /* Dark landscape horizon */
  .tornadoc-ground {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 10px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #475569 30%, #64748b 50%, #475569 70%, transparent);
  }

  @keyframes tornadoc-spin {
    0%   { transform: scaleX(1); }
    25%  { transform: scaleX(0.82); }
    50%  { transform: scaleX(1); }
    75%  { transform: scaleX(0.88); }
    100% { transform: scaleX(1); }
  }

  @keyframes tornadoc-sway {
    0%, 100% { margin-top: 0; translate: -4px 0; }
    50% { margin-top: 1px; translate: 5px 0; }
  }

  @keyframes tornadoc-cloud {
    0%, 100% { transform: translateX(-4px) scaleX(0.96); opacity: 0.85; }
    50% { transform: translateX(4px) scaleX(1.04); opacity: 1; }
  }

  @keyframes tornadoc-debris {
    0% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
    15% { opacity: 1; }
    100% { opacity: 0; transform: translate(var(--toss-x, 20px), var(--toss-y, -26px)) rotate(260deg); }
  }
  `,
};

const tornadoMarkup = {
  v1: `
    <div class="tornado">
      <div class="tornado-cloud"></div>
      <div class="tornado-ring r1"></div>
      <div class="tornado-ring r2"></div>
      <div class="tornado-ring r3"></div>
      <div class="tornado-ring r4"></div>
      <div class="tornado-ring r5"></div>
      <div class="tornado-ring r6"></div>
      <div class="tornado-ring r7"></div>
      <div class="tornado-debris d1"></div>
      <div class="tornado-debris d2"></div>
      <div class="tornado-debris d3"></div>
      <div class="tornado-ground"></div>
    </div>
  `,
  v2: `
    <div class="tornadoc">
      <div class="tornadoc-cloud"></div>
      <div class="tornadoc-ring r1"></div>
      <div class="tornadoc-ring r2"></div>
      <div class="tornadoc-ring r3"></div>
      <div class="tornadoc-ring r4"></div>
      <div class="tornadoc-ring r5"></div>
      <div class="tornadoc-ring r6"></div>
      <div class="tornadoc-ring r7"></div>
      <div class="tornadoc-debris d1"></div>
      <div class="tornadoc-debris d2"></div>
      <div class="tornadoc-debris d3"></div>
      <div class="tornadoc-ground"></div>
    </div>
  `,
};

class ConceptTornado extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${tornadoStyles[version] || tornadoStyles.v2}</style>${tornadoMarkup[version] || tornadoMarkup.v2}`;
  }
}

if (!customElements.get('concept-tornado')) {
  customElements.define('concept-tornado', ConceptTornado);
}
