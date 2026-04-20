const circuitStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .circuit-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    background:
      radial-gradient(circle at 50% 50%, rgba(0, 204, 0, 0.06), transparent 58%),
      linear-gradient(180deg, rgba(0, 18, 0, 0.25), transparent 65%);
  }

  .circuit-path {
    position: absolute;
    background: rgba(0, 204, 0, 0.82);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.45);
  }

  .cp1 { width: 46px; height: 2px; top: 32px; left: 14px; }
  .cp2 { width: 2px; height: 48px; top: 32px; left: 60px; }
  .cp3 { width: 46px; height: 2px; top: 80px; left: 60px; }
  .cp4 { width: 2px; height: 58px; top: 22px; left: 106px; }
  .cp5 { width: 20px; height: 2px; top: 22px; left: 106px; }
  .cp6 { width: 2px; height: 24px; top: 56px; left: 34px; }
  .cp7 { width: 26px; height: 2px; top: 80px; left: 34px; }
  .cp8 { width: 22px; height: 2px; top: 56px; left: 84px; }

  .circuit-chip {
    position: absolute;
    top: 44px;
    left: 52px;
    width: 32px;
    height: 24px;
    border: 1px solid rgba(170, 255, 170, 0.55);
    background: linear-gradient(180deg, rgba(0, 30, 0, 0.95), rgba(0, 10, 0, 0.95));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.18), 0 0 10px rgba(0, 204, 0, 0.12);
  }

  .circuit-chip::before,
  .circuit-chip::after {
    content: '';
    position: absolute;
    top: 3px;
    width: 4px;
    height: 18px;
    background: repeating-linear-gradient(180deg, rgba(170, 255, 170, 0.7) 0 2px, transparent 2px 4px);
  }

  .circuit-chip::before { left: -5px; }
  .circuit-chip::after { right: -5px; }

  .circuit-node {
    width: 6px;
    height: 6px;
    background: #b9ffb0;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 7px rgba(185, 255, 176, 0.72);
  }

  .cn1 { top: 29px; left: 12px; }
  .cn2 { top: 29px; left: 57px; }
  .cn3 { top: 77px; left: 57px; }
  .cn4 { top: 77px; left: 103px; }
  .cn5 { top: 19px; left: 103px; }
  .cn6 { top: 19px; left: 123px; }
  .cn7 { top: 53px; left: 31px; }
  .cn8 { top: 77px; left: 31px; }

  .circuit-pulse {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent, #00cc00), 0 0 20px var(--accent, #00cc00);
  }

  .circuit-pulse.main { animation: circuit-main 2.6s linear infinite; }
  .circuit-pulse.branch {
    width: 6px;
    height: 6px;
    background: #b9ffb0;
    box-shadow: 0 0 8px rgba(185, 255, 176, 0.8);
    animation: circuit-branch 1.9s linear infinite;
  }

  .circuit-core {
    position: absolute;
    top: 52px;
    left: 60px;
    width: 16px;
    height: 8px;
    background: linear-gradient(90deg, transparent, rgba(185, 255, 176, 0.8), transparent);
    animation: chip-flicker 1.6s ease-in-out infinite;
  }

  @keyframes circuit-main {
    0% { top: 29px; left: 12px; }
    28% { top: 29px; left: 57px; }
    54% { top: 77px; left: 57px; }
    82% { top: 77px; left: 103px; }
    100% { top: 19px; left: 123px; }
  }

  @keyframes circuit-branch {
    0% { top: 53px; left: 31px; opacity: 0; }
    18% { opacity: 1; }
    52% { top: 77px; left: 31px; opacity: 1; }
    100% { top: 77px; left: 57px; opacity: 0.15; }
  }

  @keyframes chip-flicker {
    0%, 100% { opacity: 0.25; transform: scaleX(0.85); }
    50% { opacity: 1; transform: scaleX(1); }
  }

  .circuit-basic-wrap {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .circuit-basic-path {
    position: absolute;
    background: var(--accent, #00cc00);
    box-shadow: 0 0 3px var(--accent, #00cc00);
  }

  .circuit-basic-path.p1 { width: 80px; height: 2px; top: 40%; left: 20px; }
  .circuit-basic-path.p2 { width: 2px; height: 50px; top: 40%; left: 100px; }
  .circuit-basic-path.p3 { width: 30px; height: 2px; top: calc(40% + 50px); left: 70px; }

  .circuit-basic-node {
    width: 6px;
    height: 6px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 6px var(--accent, #00cc00);
  }

  .circuit-basic-node.n1 { top: calc(40% - 2px); left: 18px; }
  .circuit-basic-node.n2 { top: calc(40% - 2px); left: 98px; }
  .circuit-basic-node.n3 { top: calc(40% + 48px); left: 98px; }
  .circuit-basic-node.n4 { top: calc(40% + 48px); left: 68px; }

  .circuit-basic-flow {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent, #00cc00), 0 0 20px var(--accent, #00cc00);
    animation: flow-path-basic 2s linear infinite;
  }

  @keyframes flow-path-basic {
    0% { top: calc(40% - 3px); left: 18px; }
    30% { top: calc(40% - 3px); left: 98px; }
    60% { top: calc(40% + 47px); left: 98px; }
    100% { top: calc(40% + 47px); left: 68px; }
  }
`;

const circuitMarkup = {
  v1: `
    <div class="circuit-basic-wrap">
      <div class="circuit-basic-path p1"></div>
      <div class="circuit-basic-path p2"></div>
      <div class="circuit-basic-path p3"></div>
      <div class="circuit-basic-node n1"></div>
      <div class="circuit-basic-node n2"></div>
      <div class="circuit-basic-node n3"></div>
      <div class="circuit-basic-node n4"></div>
      <div class="circuit-basic-flow"></div>
    </div>
  `,
  v2: `
    <div class="circuit-wrap">
      <div class="circuit-chip"></div>
      <div class="circuit-path cp1"></div>
      <div class="circuit-path cp2"></div>
      <div class="circuit-path cp3"></div>
      <div class="circuit-path cp4"></div>
      <div class="circuit-path cp5"></div>
      <div class="circuit-path cp6"></div>
      <div class="circuit-path cp7"></div>
      <div class="circuit-path cp8"></div>
      <div class="circuit-node cn1"></div>
      <div class="circuit-node cn2"></div>
      <div class="circuit-node cn3"></div>
      <div class="circuit-node cn4"></div>
      <div class="circuit-node cn5"></div>
      <div class="circuit-node cn6"></div>
      <div class="circuit-node cn7"></div>
      <div class="circuit-node cn8"></div>
      <div class="circuit-core"></div>
      <div class="circuit-pulse main"></div>
      <div class="circuit-pulse branch"></div>
    </div>
  `,
};

class ConceptCircuit extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${circuitStyles}</style>${circuitMarkup[version] || circuitMarkup.v2}`;
  }
}

if (!customElements.get('concept-circuit')) {
  customElements.define('concept-circuit', ConceptCircuit);
}
