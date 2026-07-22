const portalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original morphing conic blob --- */
  .portal-v1 {
    width: 80px;
    height: 80px;
    background: conic-gradient(from 0deg, #00cc00, #003300, #00cc00, #003300, #00cc00);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: portal-spin 3s linear infinite, portal-morph 6s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(0, 204, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.5);
    position: relative;
  }

  .portal-v1::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, #000 0%, transparent 70%);
    border-radius: 50%;
  }

  @keyframes portal-spin { to { transform: rotate(360deg); } }

  @keyframes portal-morph {
    0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
    50% { border-radius: 60% 40% 30% 70% / 50% 40% 50% 60%; }
  }

  /* --- v2: a structured gateway with inflow --- */
  .portal {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .portal-horizon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 62px;
    height: 78px;
    margin: -39px 0 0 -31px;
    border-radius: 50%;
    border: 2px solid rgba(160, 255, 185, 0.85);
    box-shadow:
      0 0 14px rgba(120, 255, 150, 0.6),
      inset 0 0 18px rgba(0, 204, 0, 0.5);
    background: radial-gradient(ellipse at center, rgba(2, 10, 5, 0.98) 0 42%, rgba(20, 90, 40, 0.5) 78%, rgba(120, 255, 150, 0.25) 100%);
    box-sizing: border-box;
    animation: portal-breathe 3.8s ease-in-out infinite;
  }

  .portal-swirl {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 64px;
    margin: -32px 0 0 -25px;
    border-radius: 50%;
    overflow: hidden;
  }

  .portal-swirl::before {
    content: '';
    position: absolute;
    inset: -30%;
    background: conic-gradient(
      from 0deg,
      transparent 0 18%,
      rgba(90, 240, 120, 0.4) 24%,
      transparent 32% 52%,
      rgba(90, 240, 120, 0.3) 58%,
      transparent 66% 86%,
      rgba(90, 240, 120, 0.35) 92%,
      transparent 100%
    );
    animation: portal-vortex 3.2s linear infinite;
  }

  .portal-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 78px;
    height: 94px;
    margin: -47px 0 0 -39px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 204, 0, 0.4);
    animation: portal-frame 12s linear infinite;
  }

  /* Particles drawn in toward the horizon. */
  .portal-mote {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(220, 255, 228, 0.95);
    box-shadow: 0 0 5px rgba(190, 255, 205, 0.8);
    opacity: 0;
  }

  .portal-mote.m1 { animation: portal-inflow1 2.8s ease-in infinite; }
  .portal-mote.m2 { animation: portal-inflow2 3.4s ease-in infinite -1.1s; }
  .portal-mote.m3 { animation: portal-inflow3 3s ease-in infinite -2s; }
  .portal-mote.m4 { animation: portal-inflow4 3.7s ease-in infinite -0.6s; }

  .portal-base {
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 66px;
    height: 8px;
    margin-left: -33px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 204, 0, 0.35), transparent 70%);
    animation: portal-breathe 3.8s ease-in-out infinite;
  }

  @keyframes portal-vortex {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes portal-frame {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  @keyframes portal-breathe {
    0%, 100% { opacity: 0.85; }
    50% { opacity: 1; }
  }

  @keyframes portal-inflow1 {
    0% { opacity: 0; transform: translate(-48px, -34px) scale(1.1); }
    16% { opacity: 1; }
    88% { opacity: 0.9; transform: translate(-4px, -2px) scale(0.3); }
    100% { opacity: 0; transform: translate(0, 0) scale(0.1); }
  }

  @keyframes portal-inflow2 {
    0% { opacity: 0; transform: translate(46px, -26px) scale(1); }
    16% { opacity: 1; }
    88% { opacity: 0.9; transform: translate(3px, -2px) scale(0.3); }
    100% { opacity: 0; transform: translate(0, 0) scale(0.1); }
  }

  @keyframes portal-inflow3 {
    0% { opacity: 0; transform: translate(-40px, 36px) scale(1); }
    16% { opacity: 1; }
    88% { opacity: 0.9; transform: translate(-3px, 3px) scale(0.3); }
    100% { opacity: 0; transform: translate(0, 0) scale(0.1); }
  }

  @keyframes portal-inflow4 {
    0% { opacity: 0; transform: translate(44px, 32px) scale(1.1); }
    16% { opacity: 1; }
    88% { opacity: 0.9; transform: translate(3px, 3px) scale(0.3); }
    100% { opacity: 0; transform: translate(0, 0) scale(0.1); }
  }
`;

const portalMarkup = {
  v1: `<div class="portal-v1"></div>`,
  v2: `
    <div class="portal">
      <div class="portal-ring"></div>
      <div class="portal-horizon"></div>
      <div class="portal-swirl"></div>
      <div class="portal-mote m1"></div>
      <div class="portal-mote m2"></div>
      <div class="portal-mote m3"></div>
      <div class="portal-mote m4"></div>
      <div class="portal-base"></div>
    </div>
  `,
};

class ConceptPortal extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${portalStyles}</style>${portalMarkup[version] || portalMarkup.v2}`;
  }
}

if (!customElements.get('concept-portal')) {
  customElements.define('concept-portal', ConceptPortal);
}
