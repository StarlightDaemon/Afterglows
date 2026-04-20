const pulseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pulse-bar {
    width: 7px;
    height: 24px;
    background: linear-gradient(180deg, #b5ff9e, var(--accent, #00cc00));
    animation: pulse 1.3s ease-in-out infinite;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.35);
  }

  @keyframes pulse {
    0%, 100% { height: 18%; opacity: 0.35 }
    50% { height: 100%; opacity: 1 }
  }

  .pulse-wrap {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    padding: 12px 10px;
  }

  .pulse-basic-wrap {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 50px;
  }

  .pulse-basic-bar {
    width: 8px;
    background: var(--accent, #00cc00);
    animation: pulse-basic 1.2s infinite;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.25);
  }

  @keyframes pulse-basic {
    0%, 100% { height: 30%; opacity: 0.5 }
    50% { height: 100%; opacity: 1 }
  }
`;

const pulseMarkup = {
  v1: `
    <div class="pulse-basic-wrap">
      <div class="pulse-basic-bar" style="animation-delay:0s"></div>
      <div class="pulse-basic-bar" style="animation-delay:0.2s"></div>
      <div class="pulse-basic-bar" style="animation-delay:0.4s"></div>
    </div>
  `,
  v2: `
    <div class="pulse-wrap">
      <div class="pulse-bar" style="animation-delay:0s"></div>
      <div class="pulse-bar" style="animation-delay:0.1s"></div>
      <div class="pulse-bar" style="animation-delay:0.2s"></div>
      <div class="pulse-bar" style="animation-delay:0.3s"></div>
      <div class="pulse-bar" style="animation-delay:0.4s"></div>
      <div class="pulse-bar" style="animation-delay:0.5s"></div>
      <div class="pulse-bar" style="animation-delay:0.6s"></div>
      <div class="pulse-bar" style="animation-delay:0.7s"></div>
    </div>
  `,
};

class ConceptPulse extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${pulseStyles}</style>${pulseMarkup[version] || pulseMarkup.v2}`;
  }
}

if (!customElements.get('concept-pulse')) {
  customElements.define('concept-pulse', ConceptPulse);
}
